data "archive_file" "todo_reminder" {
  type        = "zip"
  source_dir  = "${path.module}/../../lambdas/todo-reminder"
  output_path = "${path.module}/todo-reminder.zip"
}

resource "aws_iam_role" "lambda_role" {
  name = "${var.project_name}-todo-reminder-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = { Service = "lambda.amazonaws.com" }
    }]
  })
}

resource "aws_iam_role_policy" "lambda_policy" {
  name = "${var.project_name}-todo-reminder-policy"
  role = aws_iam_role.lambda_role.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = ["logs:CreateLogGroup", "logs:CreateLogStream", "logs:PutLogEvents"]
        Resource = "*"
      },
      {
        Effect   = "Allow"
        Action   = ["ses:SendEmail", "ses:SendRawEmail"]
        Resource = "*"
      }
    ]
  })
}

resource "aws_cloudwatch_log_group" "todo_reminder" {
  name              = "/aws/lambda/${var.project_name}-todo-reminder"
  retention_in_days = 14
}

resource "aws_lambda_function" "todo_reminder" {
  function_name    = "${var.project_name}-todo-reminder"
  filename         = data.archive_file.todo_reminder.output_path
  source_code_hash = data.archive_file.todo_reminder.output_base64sha256
  role             = aws_iam_role.lambda_role.arn
  handler          = "index.handler"
  runtime          = "nodejs22.x"
  timeout          = 30

  environment {
    variables = {
      SES_FROM_EMAIL = var.ses_from_email
    }
  }

  depends_on = [aws_cloudwatch_log_group.todo_reminder]
}
