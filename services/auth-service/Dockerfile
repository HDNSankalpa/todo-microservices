FROM node:20-bullseye-slim
WORKDIR /app
COPY package.json package-lock.json* ./
COPY tsconfig.base.json ./
COPY packages ./packages
COPY services ./services
COPY frontend ./frontend
COPY lambdas ./lambdas
RUN npm install
RUN npm -w @todo/auth-service run prisma:generate || true
RUN npm -w @todo/errors run build \
  && npm -w @todo/logger run build \
  && npm -w @todo/rabbitmq run build \
  && npm -w @todo/validators run build \
  && npm -w @todo/auth-service run build \
  && cp -R services/auth-service/src/generated services/auth-service/dist/generated
EXPOSE 3000
CMD ["npm", "-w", "@todo/auth-service", "run", "start"]
