# Full-Stack Microservices Todo Application

Production-style Todo app with independent Node.js services, separate databases, RabbitMQ events, S3 uploads, EventBridge + Lambda reminders, NGINX load balancing, Docker Compose, and GitHub Actions.

## Architecture

```text
React/Vite
   |
   v
API Gateway -> auth-service -------- PostgreSQL auth
   |       -> todo-service -------- PostgreSQL todo
   |       -> file-service -------- PostgreSQL file metadata + S3
   |       -> notification-service MongoDB + Socket.io
   |       -> search-service ------ PostgreSQL FTS
   |
RabbitMQ topic/direct/fanout exchanges
   |       -> audit-service ------- MongoDB immutable audit log
   |
todo.due_soon -> EventBridge -> Lambda -> SES or CloudWatch fallback
```

## Local Notes

Local Docker Desktop on Windows can fail with port publishing, image metadata, or read-only filesystem errors. If local Docker is unreliable, skip local Compose and deploy to EC2 using the manual runbook below.

For normal local setup:

```bash
npm install
npm run build --workspaces --if-present
npm run lint --workspaces --if-present
npm run test --workspaces --if-present
docker compose up --build
```

Migrations:

```bash
npm run migrate:local
npm run seed:local
```

If the host cannot reach PostgreSQL ports, use containers:

```bash
npm run migrate:exec
npm run seed:exec
```

## Manual AWS Deployment Runbook

This path deploys without depending on local Docker. GitHub Actions builds images on GitHub-hosted runners, pushes them to ECR, and EC2 pulls and runs them.

### 1. Install Local Tools

Install these on your machine:

```bash
git --version
ssh -V
```

AWS CLI is optional for this manual-console runbook. You can create AWS resources through the browser. The EC2 instance will install AWS CLI later so it can log in to ECR.

Use one AWS region everywhere, for example `ap-south-1`.

### 2. Choose Deployment Values In The AWS Console

Open the AWS Console: https://console.aws.amazon.com/

1. In the top-right region selector, choose one region and keep it for every step. Recommended: `ap-south-1`.
2. Click your account name in the top-right corner.
3. Copy the `Account ID`. You will need it for ECR registry values.
4. Open a browser tab and search `what is my IP`.
5. Write down your public IP as `YOUR_PUBLIC_IP/32`. Example: if your IP is `203.0.113.10`, use `203.0.113.10/32`.

Write down these values:

- AWS region: `ap-south-1`
- App prefix: `todo-microservices`
- SSH source: `YOUR_PUBLIC_IP/32`
- EC2 AMI: Amazon Linux 2023
- EC2 instance type: `t2.micro` or `t3.micro`
- S3 bucket: `todo-microservices-uploads-ap-south-1-202605081`
- EventBridge bus: `todo-microservices-bus`
- Lambda function: `todo-microservices-todo-reminder`
- ECR registry: `YOUR_ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com`

### 3. Create Or Import An EC2 Key Pair

Recommended console path:

1. Search for `EC2` in the top search bar.
2. Click `EC2`.
3. In the left menu, under `Network & Security`, click `Key Pairs`.
4. Click `Create key pair`.
5. For `Name`, enter `todo-microservices-key`.
6. For `Key pair type`, choose `ED25519` if available. If not, choose `RSA`.
7. For `Private key file format`, choose `.pem`.
8. Click `Create key pair`.
9. Your browser downloads a `.pem` file. Save it somewhere safe, for example `~/.ssh/todo-microservices-key.pem`.
10. Do not commit this file to Git.

You will use the downloaded `.pem` file:

- For SSH into EC2.
- As the GitHub `EC2_PRIVATE_KEY` secret.

On Windows, the browser usually downloads the key to `Downloads`, not `~/.ssh`. Move it before connecting:

```powershell
New-Item -ItemType Directory -Force -Path $HOME\.ssh
Move-Item "$HOME\Downloads\todo-microservices-key.pem" "$HOME\.ssh\todo-microservices-key.pem"
icacls "$HOME\.ssh\todo-microservices-key.pem" /inheritance:r
icacls "$HOME\.ssh\todo-microservices-key.pem" /grant:r "$($env:USERNAME):R"
```

Then SSH with:

```powershell
ssh -i "$HOME\.ssh\todo-microservices-key.pem" ec2-user@EC2_PUBLIC_IP
```

If you already created a local public/private key pair, use `Actions` -> `Import key pair` instead of `Create key pair`, paste your `.pub` file contents, and keep using your local private key.

### 4. Create Security Group

In AWS Console:

1. Search for `EC2`.
2. Click `EC2`.
3. In the left menu, click `Security Groups`.
4. Click `Create security group`.
5. For `Security group name`, enter `todo-microservices-sg`.
6. For `Description`, enter `Todo app EC2 access`.
7. For `VPC`, choose the default VPC.
8. Under `Inbound rules`, click `Add rule`.
9. Set `Type` to `SSH`, `Source` to `My IP`.
10. Click `Add rule`.
11. Set `Type` to `HTTP`, `Source` to `Anywhere-IPv4`.
12. Click `Add rule`.
13. Set `Type` to `HTTPS`, `Source` to `Anywhere-IPv4`.
14. Click `Add rule`.
15. Set `Type` to `Custom TCP`, `Port range` to `3000-3006`, `Source` to `My IP`.
16. Leave `Outbound rules` as `All traffic`.
17. Click `Create security group`.

After NGINX/HTTPS is working, remove public access to `3000-3006`.

### 5. Create IAM Role For EC2

In AWS Console:

1. Search for `IAM`.
2. Click `IAM`.
3. In the left menu, click `Policies`.
4. Click `Create policy`.
5. Click the `JSON` tab.
6. Paste this policy, replacing `YOUR_ACCOUNT_ID` only.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:GetObject", "s3:DeleteObject", "s3:ListBucket"],
      "Resource": [
        "arn:aws:s3:::todo-microservices-uploads-ap-south-1-202605081",
        "arn:aws:s3:::todo-microservices-uploads-ap-south-1-202605081/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": ["events:PutEvents"],
      "Resource": "arn:aws:events:ap-south-1:YOUR_ACCOUNT_ID:event-bus/YOUR_EVENTBRIDGE_BUS_NAME"
    },
    {
      "Effect": "Allow",
      "Action": ["ses:SendEmail", "ses:SendRawEmail"],
      "Resource": "*"
    }
  ]
}
```

7. Click `Next`.
8. For `Policy name`, enter `todo-microservices-app-policy`.
9. Click `Create policy`.
10. In the left menu, click `Roles`.
11. Click `Create role`.
12. For `Trusted entity type`, choose `AWS service`.
13. Under `Use case`, choose `EC2`.
14. Click `Next`.
15. Search for `AmazonEC2ContainerRegistryReadOnly`.
16. Check `AmazonEC2ContainerRegistryReadOnly`.
17. Search for `todo-microservices-app-policy`.
18. Check `todo-microservices-app-policy`.
19. Click `Next`.
20. For `Role name`, enter `todo-microservices-ec2-role`.
21. Click `Create role`.

### 6. Create S3 Bucket

In AWS Console:

1. Search for `S3`.
2. Click `S3`.
3. In the left menu, click `Buckets`.
4. Click `Create bucket`.
5. For `Bucket name`, enter `todo-microservices-uploads-ap-south-1-202605081`.
6. If AWS says the bucket name is already taken, append your initials or four random digits, then use that exact final name everywhere `S3_BUCKET_NAME` appears.
7. For `AWS Region`, choose `ap-south-1`.
8. Keep `Block all public access` checked.
9. Under `Bucket Versioning`, choose `Enable`.
10. Leave other settings as default.
11. Click `Create bucket`.
12. Click the bucket name.
13. Click the `Permissions` tab.
14. Scroll to `Cross-origin resource sharing (CORS)`.
15. Click `Edit`.
16. Paste this JSON:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3000
  }
]
```

17. Click `Save changes`.

Optional lifecycle rule:

1. Click the `Management` tab.
2. Under `Lifecycle rules`, click `Create lifecycle rule`.
3. For `Lifecycle rule name`, enter `expire-old-noncurrent-versions`.
4. Choose `Apply to all objects in the bucket`.
5. Check the confirmation box if AWS asks you to confirm.
6. Under `Lifecycle rule actions`, check `Permanently delete noncurrent versions of objects`.
7. Set `Days after objects become noncurrent` to `30`.
8. Click `Create rule`.

### 7. Create EventBridge Bus

In AWS Console:

1. Search for `EventBridge`.
2. Click `Amazon EventBridge`.
3. In the left menu, click `Event buses`.
4. Click `Create event bus`.
5. For `Name`, enter `todo-microservices-bus`.
6. Leave `Event archive` off.
7. Click `Create`.

### 8. Create Lambda Reminder Function

Create a Lambda IAM role first:

1. Search for `IAM`.
2. Click `IAM`.
3. In the left menu, click `Policies`.
4. Click `Create policy`.
5. Click the `JSON` tab.
6. Paste this SES policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["ses:SendEmail", "ses:SendRawEmail"],
      "Resource": "*"
    }
  ]
}
```

7. Click `Next`.
8. For `Policy name`, enter `todo-microservices-lambda-ses-policy`.
9. Click `Create policy`.
10. In the left menu, click `Roles`.
11. Click `Create role`.
12. For `Trusted entity type`, choose `AWS service`.
13. Under `Use case`, choose `Lambda`.
14. Click `Next`.
15. Search for `AWSLambdaBasicExecutionRole`.
16. Check `AWSLambdaBasicExecutionRole`.
17. Search for `todo-microservices-lambda-ses-policy`.
18. Check `todo-microservices-lambda-ses-policy`.
19. Click `Next`.
20. For `Role name`, enter `todo-microservices-lambda-role`.
21. Click `Create role`.

Package the Lambda from this repo.

PowerShell:

```powershell
cd lambdas/todo-reminder
.\package-lambda.ps1
```

macOS/Linux:

```bash
cd lambdas/todo-reminder
chmod +x package-lambda.sh
./package-lambda.sh
```

Create the Lambda in AWS Console:

1. Search for `Lambda`.
2. Click `Lambda`.
3. Click `Create function`.
4. Choose `Author from scratch`.
5. For `Function name`, enter `todo-microservices-todo-reminder`.
6. For `Runtime`, choose `Node.js 22.x`.
7. Under `Change default execution role`, choose `Use an existing role`.
8. For `Existing role`, choose `todo-microservices-lambda-role`.
9. Click `Create function`.
10. On the function page, click the `Code` tab.
11. Click `Upload from`.
12. Choose `.zip file`.
13. Click `Upload`.
14. Choose `todo-reminder.zip`.
15. Click `Save`.
16. If the editor shows `index.mjs` with `file was not found`, refresh the page or close that tab. The uploaded package uses `index.js`, not the default console-created `index.mjs`.
17. Confirm the handler is `index.handler`. In some Lambda console layouts this is under `Code` -> scroll down to `Runtime settings`. In other layouts it is under `Configuration` -> `General configuration` or shown in a runtime details panel. If you find an `Edit` button for runtime/handler, set `Handler` to `index.handler` and save.
18. Click the `Configuration` tab.
19. Click `General configuration`.
20. Click `Edit`.
21. Set `Timeout` to `30 seconds`.
22. Click `Save`.
23. In the left configuration menu, click `Environment variables`.
24. Click `Edit`.
25. Click `Add environment variable`.
26. Add `SES_FROM_EMAIL=your-verified-sender@example.com`.
27. Optional: click `Add environment variable` and add `FALLBACK_REMINDER_EMAIL=your-email@example.com`.
28. Click `Save`.

Do not add `AWS_REGION` manually. Lambda reserves that key and sets it automatically based on the function region.

If SES is not configured, the Lambda logs reminders to CloudWatch.

### 9. Connect EventBridge Rule To Lambda

Use `Advanced builder` for this project. Do not use `Enhanced builder`; the visual canvas is harder to follow for this custom app event.

First open the rule screen:

1. In the AWS Console top search bar, search `EventBridge`.
2. Click `Amazon EventBridge`.
3. In the left menu, click `Rules`.
4. Check the top area for an `Event bus` selector.
5. Select `todo-microservices-bus`.
6. Click `Create rule`.

Advanced builder path, matching the current AWS screen:

1. At the top under `Builder mode`, choose `Advanced builder`.
2. In Step 1 `Define rule detail`, for `Name`, enter `todo-microservices-todo-due-soon`.
3. For `Event bus`, confirm `todo-microservices-bus`.
4. Continue to Step 2 `Build event pattern`.
5. Under `Events`, find `Event source`.
6. Choose `Other`.
7. Expand `Event pattern` or scroll down until you see the event pattern editor.
8. For `Creation method`, choose `Custom pattern (JSON editor)` or `Custom patterns (JSON editor)`.
9. If AWS shows a generated pattern, replace it completely with this JSON:

```json
{
  "source": ["todo-service"],
  "detail-type": ["todo.due_soon"]
}
```

10. Click `Next`.
11. In Step 3 `Select target(s)`, under `Target types`, choose `AWS service`.
12. For `Select a target`, choose `Lambda function`.
13. For `Function`, choose `todo-microservices-todo-reminder`.
14. Leave the other fields as default.
15. Click `Next`.
16. In Step 4 `Configure tags`, skip tags or add tags if you want.
17. Click `Next`.
18. In Step 5 `Review and create`, click `Create rule`.

After creating the rule:

1. Open the rule detail page.
2. Confirm `Event bus` is `todo-microservices-bus`.
3. Confirm the event pattern contains `source` = `todo-service` and `detail-type` = `todo.due_soon`.
4. Confirm the target is the Lambda function `todo-microservices-todo-reminder`.

### 10. Optional SES Setup

If you want real reminder email:

Do not use the SES `Get set up` wizard for this demo if it forces `Add your sending domain`. You need email identity verification only, not a domain identity.

Use this path:

1. Search for `SES`.
2. Click `Amazon Simple Email Service`.
3. If you land on `Get set up`, click the left hamburger/menu icon if needed.
4. In the left navigation, look for `Configuration`.
5. Click `Verified identities`.
6. Click `Create identity`.
7. Under `Identity type`, choose `Email address`.
8. Enter the email you will use for `SES_FROM_EMAIL`.
9. Click `Create identity`.
10. Open your email inbox.
11. Click the AWS verification email link.
12. Return to SES -> `Verified identities`.
13. Confirm the email identity status is `Verified`.

If you cannot get to `Verified identities` from the wizard:

1. Open this direct console URL while logged into AWS:
   `https://ap-south-1.console.aws.amazon.com/ses/home?region=ap-south-1#/verified-identities`
2. Click `Create identity`.
3. Choose `Email address`.
4. Continue with the email verification steps above.

Important SES sandbox note:

1. New AWS accounts usually start in the SES sandbox.
2. In sandbox mode, both the sender and recipient email addresses must be verified.
3. Verify `SES_FROM_EMAIL`.
4. Also verify `FALLBACK_REMINDER_EMAIL` if it is different.
5. To email arbitrary users, open SES -> `Account dashboard`.
6. Click `Request production access`.
7. Fill in your use case and submit.

Without SES verification, the Lambda still works and logs reminders to CloudWatch.

### 11. Launch EC2 Manually

In AWS Console:

1. Search for `EC2`.
2. Click `EC2`.
3. In the left menu, click `Instances`.
4. Click `Launch instances`.
5. Under `Name and tags`, enter `todo-microservices`.
6. Under `Application and OS Images`, choose `Amazon Linux`.
7. Choose `Amazon Linux 2023 AMI`.
8. Under `Instance type`, choose `t2.micro` or `t3.micro`.
9. Under `Key pair`, choose `todo-microservices-key`.
10. Under `Network settings`, click `Edit`.
11. For `VPC`, choose the same default VPC used by the security group.
12. For `Firewall`, choose `Select existing security group`.
13. Choose `todo-microservices-sg`.
14. Expand `Advanced details`.
15. For `IAM instance profile`, choose `todo-microservices-ec2-role`.
16. Scroll to `User data`.
17. Paste:

```bash
#!/bin/bash
dnf update -y
dnf install -y docker git awscli
systemctl enable --now docker
usermod -aG docker ec2-user
```

18. Click `Launch instance`.
19. Click `View all instances`.
20. Wait until `Instance state` is `Running`.
21. Wait until `Status check` is `2/2 checks passed`.
22. Click the instance row.
23. Copy `Public IPv4 address`. This is `EC2_PUBLIC_IP`.

### 12. Prepare EC2

SSH into EC2:
C:\Users\nirmal.h\.ssh\todo-microservices-key.pem - Location
```bash
ssh -i ~/.ssh/todo-microservices-key.pem ec2-user@EC2_PUBLIC_IP
```

PowerShell:

```powershell
ssh -i "$HOME\.ssh\todo-microservices-key.pem" ec2-user@EC2_PUBLIC_IP
```

Install runtime tools if user data has not finished:

```bash
sudo dnf update -y
sudo dnf install -y docker git awscli
sudo systemctl enable --now docker
sudo usermod -aG docker ec2-user
exit
```

Reconnect:

```bash
ssh -i ~/.ssh/todo-microservices-key.pem ec2-user@EC2_PUBLIC_IP
docker version
docker compose version
```

PowerShell:

```powershell
ssh -i "$HOME\.ssh\todo-microservices-key.pem" ec2-user@EC2_PUBLIC_IP
```

If `docker compose version` says `docker: 'compose' is not a docker command` and `dnf` cannot find `docker-compose-plugin`, install the Compose CLI plugin manually:

```bash
sudo mkdir -p /usr/local/lib/docker/cli-plugins
sudo curl -SL https://github.com/docker/compose/releases/download/v5.1.2/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose
sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose
docker compose version
```

### 13. Clone Repo On EC2

```bash
sudo mkdir -p /opt/todo-microservices
sudo chown ec2-user:ec2-user /opt/todo-microservices
git clone https://github.com/HDNSankalpa/todo-microservices.git /opt/todo-microservices
cd /opt/todo-microservices
```

### 14. Create Production `.env` On EC2

Create `/opt/todo-microservices/.env`:

```bash
cat > .env <<'EOF'
NODE_ENV=production
JWT_SECRET=replace-with-long-random-access-secret
JWT_REFRESH_SECRET=replace-with-long-random-refresh-secret
RABBITMQ_URL=amqp://guest:guest@rabbitmq:5672
REDIS_URL=redis://redis:6379

AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=replace-if-not-using-instance-role
AWS_SECRET_ACCESS_KEY=replace-if-not-using-instance-role
S3_BUCKET_NAME=todo-microservices-uploads-ap-south-1-202605081
EVENTBRIDGE_BUS_NAME=todo-microservices-bus

AUTH_SERVICE_URL=http://auth-service:3001
TODO_SERVICE_URL=http://todo-service:3002
TODO_SERVICE_URLS=http://todo-service:3002,http://todo-service-2:3002,http://todo-service-3:3002
FILE_SERVICE_URL=http://file-service:3003
NOTIFICATION_SERVICE_URL=http://notification-service:3004
AUDIT_SERVICE_URL=http://audit-service:3005
SEARCH_SERVICE_URL=http://search-service:3006

ECR_REGISTRY=YOUR_ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com
IMAGE_TAG=latest
EOF
```

Prefer an EC2 instance role for AWS permissions. If you use the instance role, remove static AWS keys from `.env`.

### 15. Create ECR Repositories

In AWS Console:

1. Search for `ECR`.
2. Click `Elastic Container Registry`.
3. In the left menu, click `Repositories`.
4. Click `Create repository`.
5. Under `Visibility settings`, choose `Private`.
6. For `Repository name`, enter `todo-api-gateway`.
7. Leave other settings as default.
8. Click `Create repository`.
9. Repeat the same steps for:
   - `todo-auth-service`
   - `todo-todo-service`
   - `todo-file-service`
   - `todo-notification-service`
   - `todo-audit-service`
   - `todo-search-service`
   - `todo-frontend`
10. After creating repositories, stay on the ECR `Repositories` page.
11. Copy the registry URI prefix from any repository URI. It looks like `YOUR_ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com`.

### 16. Push Repo To GitHub

```bash
git init
git add .
git commit -m "Initial todo microservices deployment"
git branch -M master
git remote add origin https://github.com/HDNSankalpa/todo-microservices.git
git push -u origin master
```

### 17. Add GitHub Secrets

You are on the correct page: GitHub -> repository -> `Settings` -> `Secrets and variables` -> `Actions`.

Create each secret one at a time:

1. Click `New repository secret`.
2. In `Name`, paste the secret name exactly.
3. In `Secret`, paste the value.
4. Click `Add secret`.
5. Repeat for the next secret.

Add these required secrets:

| Secret name | Value |
| --- | --- |
| `AWS_ACCESS_KEY_ID` | Access key ID for the AWS IAM user that can push to ECR and deploy. |
| `AWS_SECRET_ACCESS_KEY` | Secret access key for that AWS IAM user. |
| `AWS_REGION` | `ap-south-1` |
| `EC2_PRIVATE_KEY` | Full contents of your downloaded `.pem` file. |
| `EC2_USER` | `ec2-user` |
| `EC2_HOST` | `13.201.50.108` or your current EC2 public IPv4 address. |

For `EC2_PRIVATE_KEY` on Windows:

1. Open PowerShell on your machine.
2. Run:

```powershell
Get-Content "$HOME\.ssh\todo-microservices-key.pem" -Raw
```

3. Copy the full output, including:

```text
-----BEGIN ... PRIVATE KEY-----
...
-----END ... PRIVATE KEY-----
```

4. Paste that full text into the GitHub `Secret` box.

Optional secret:

| Secret name | Value |
| --- | --- |
| `SLACK_WEBHOOK_URL` | Slack incoming webhook URL, only if you want deploy notifications. |

After adding the required secrets, the page should list the secret names, but GitHub will hide their values. That is expected.

### 18. Run Deployment Manually

The included `.github/workflows/deploy.yml` is configured for manual deployment only:

```yaml
on:
  workflow_dispatch:
```

Run it from GitHub: Actions -> Deploy -> Run workflow.

If later you want both manual and automatic deployment on merge to `master`, change it to:

```yaml
on:
  workflow_dispatch:
  push:
    branches: [master]
```

### 19. EC2 Login To ECR

On EC2:

```bash
aws ecr get-login-password --region ap-south-1 \
  | docker login --username AWS --password-stdin YOUR_ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com
```

### 20. First Manual Deployment On EC2

After the GitHub deploy workflow builds and pushes images to ECR:

```bash
cd /opt/todo-microservices
git pull origin master
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.deploy.yml pull
docker run --rm -v "$PWD:/app" -w /app node:20-alpine sh -lc "npm install && npm -w @todo/frontend run build"
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.deploy.yml up -d --remove-orphans
```

Run database migrations:

```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.deploy.yml exec -T auth-service npm -w @todo/auth-service run prisma:migrate
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.deploy.yml exec -T todo-service npm -w @todo/todo-service run prisma:migrate
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.deploy.yml exec -T file-service npm -w @todo/file-service run prisma:migrate
```

Seed demo data:

```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.deploy.yml exec -T auth-service npm -w @todo/auth-service run seed
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.deploy.yml exec -T todo-service npm -w @todo/todo-service run seed
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.deploy.yml exec -T file-service npm -w @todo/file-service run seed
```

Check status:

```bash
docker compose ps
curl http://localhost:3000/health
curl http://EC2_PUBLIC_IP:3000/health
```

### 21. Manual CI/CD Process

Use this process for every deployment:

1. Create a feature branch.
2. Commit code.
3. Open PR into `master`.
4. Wait for `ci.yml` to pass.
5. Merge into `master`.
6. Run `deploy.yml` manually from GitHub Actions.
7. SSH into EC2.
8. Pull latest repo and images.
9. Run Compose up.
10. Run Prisma migrations.
11. Run health checks.

Commands after the workflow pushes images:

```bash
ssh -i ~/.ssh/todo-microservices-key.pem ec2-user@EC2_PUBLIC_IP
cd /opt/todo-microservices
git pull origin master
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.deploy.yml pull
docker run --rm -v "$PWD:/app" -w /app node:20-alpine sh -lc "npm install && npm -w @todo/frontend run build"
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.deploy.yml up -d --remove-orphans
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.deploy.yml exec -T auth-service npm -w @todo/auth-service run prisma:migrate
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.deploy.yml exec -T todo-service npm -w @todo/todo-service run prisma:migrate
docker compose -f docker-compose.yml -f docker-compose.prod.yml -f docker-compose.deploy.yml exec -T file-service npm -w @todo/file-service run prisma:migrate
curl -f http://localhost:3000/health
```

### 22. Domain And HTTPS

Point an `A` record to `EC2_PUBLIC_IP`.

Install Certbot:

```bash
sudo dnf install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

After HTTPS works, restrict the EC2 security group:

- `22` from your IP only.
- `80` from anywhere.
- `443` from anywhere.

Do not expose database ports publicly.

### 23. Logs And Debugging

```bash
docker compose ps
docker compose logs --tail=100 api-gateway
docker compose logs --tail=100 auth-service
docker compose logs --tail=100 todo-service
docker compose logs --tail=100 rabbitmq
docker compose logs --tail=100 postgres-auth
```

Common failures:

- `P1001 Can't reach database`: database container is not running or service is using the wrong hostname.
- `JWT invalid`: `JWT_SECRET` differs between gateway and services.
- `S3 AccessDenied`: bucket name, region, or IAM permission mismatch.
- `RabbitMQ ECONNREFUSED`: RabbitMQ is still starting; restart the service after RabbitMQ is healthy.
- `docker pull access denied`: EC2 is not logged into ECR or `ECR_REGISTRY` is wrong.

## Service Communication

Synchronous requests enter through `api-gateway`, which validates JWTs, injects request IDs, rate limits through Redis, and proxies to services. Asynchronous events go through RabbitMQ. `todo.completed` creates notifications and audit records without blocking the Todo API response.

## RabbitMQ

`packages/rabbitmq` declares:

- `todo.topic` for event routing such as `todo.created`.
- `todo.direct` for targeted messages.
- `todo.audit` fanout for immutable audit capture.
- `todo.dlx` and `todo.dlq` for failed messages.

Kafka alternatives are included in the same package through `kafkajs`.

## S3 Uploads

`file-service` accepts multipart uploads, validates MIME type and size, uploads to S3, and stores metadata in PostgreSQL. Downloads return 15 minute pre-signed URLs.

## EventBridge And Lambda

`todo-service` publishes `todo.due_soon` events to RabbitMQ and EventBridge. The manual AWS steps above create the EventBridge bus, rule, Lambda target, IAM role, SES permissions, and CloudWatch log group. The Lambda sends SES email if configured, otherwise it logs the reminder.

## Migrations

Use `prisma migrate deploy` in production. Keep migrations backward-compatible:

1. Add nullable columns first.
2. Deploy code that writes both old and new fields.
3. Backfill data.
4. Add constraints in a later migration.

## Security Checklist

- Use long random JWT secrets.
- Do not commit real `.env` files.
- Prefer EC2 instance role over static AWS keys.
- Use HTTPS.
- Restrict SSH to your IP.
- Keep database ports private.
- Narrow CORS origins.
- Keep rate limiting enabled.

## Deliverable Map

- Services: `services/*`
- Frontend: `frontend`
- Shared packages: `packages/*`
- Lambda: `lambdas/todo-reminder`
- Docker: `docker-compose.yml`, `docker-compose.prod.yml`, `docker-compose.deploy.yml`
- NGINX: `infra/nginx/nginx.conf`
- Optional Terraform reference files: `infra/terraform`
- GitHub Actions: `.github/workflows`
