FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
COPY packages ./packages
COPY services ./services
COPY frontend ./frontend
COPY lambdas ./lambdas
RUN npm install
RUN npm -w @todo/file-service run prisma:generate || true
EXPOSE 3000
CMD ["npm", "-w", "@todo/file-service", "run", "dev"]
