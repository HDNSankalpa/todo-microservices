FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
COPY tsconfig.base.json ./
COPY packages ./packages
COPY services ./services
COPY frontend ./frontend
COPY lambdas ./lambdas
RUN npm install
RUN npm -w @todo/search-service run prisma:generate || true
RUN npm -w @todo/errors run build \
  && npm -w @todo/logger run build \
  && npm -w @todo/rabbitmq run build \
  && npm -w @todo/validators run build \
  && npm -w @todo/search-service run build
EXPOSE 3000
CMD ["npm", "-w", "@todo/search-service", "run", "start"]
