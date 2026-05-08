resource "aws_cloudwatch_event_bus" "todo" {
  name = "${var.project_name}-bus"
}

resource "aws_cloudwatch_event_rule" "todo_due_soon" {
  name           = "${var.project_name}-todo-due-soon"
  event_bus_name = aws_cloudwatch_event_bus.todo.name
  event_pattern = jsonencode({
    source      = ["todo-service"]
    detail-type = ["todo.due_soon"]
  })
}

resource "aws_cloudwatch_event_target" "todo_due_soon_lambda" {
  rule           = aws_cloudwatch_event_rule.todo_due_soon.name
  event_bus_name = aws_cloudwatch_event_bus.todo.name
  target_id      = "todo-reminder"
  arn            = aws_lambda_function.todo_reminder.arn
}

resource "aws_lambda_permission" "allow_eventbridge" {
  statement_id  = "AllowExecutionFromEventBridge"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.todo_reminder.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.todo_due_soon.arn
}
