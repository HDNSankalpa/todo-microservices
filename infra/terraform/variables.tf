variable "aws_region" {
  type        = string
  description = "AWS region for all resources."
  default     = "us-east-1"
}

variable "project_name" {
  type        = string
  description = "Name prefix for resources."
  default     = "todo-microservices"
}

variable "public_key_path" {
  type        = string
  description = "Path to the public SSH key for EC2 access."
}

variable "allowed_ssh_cidr" {
  type        = string
  description = "CIDR allowed to SSH into EC2."
  default     = "0.0.0.0/0"
}

variable "ses_from_email" {
  type        = string
  description = "Verified SES sender email."
  default     = ""
}
