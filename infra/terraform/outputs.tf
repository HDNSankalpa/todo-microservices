output "ec2_public_ip" {
  value = aws_instance.app.public_ip
}

output "s3_bucket_name" {
  value = aws_s3_bucket.uploads.bucket
}

output "eventbridge_bus_name" {
  value = aws_cloudwatch_event_bus.todo.name
}

output "lambda_name" {
  value = aws_lambda_function.todo_reminder.function_name
}
