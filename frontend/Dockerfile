FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
COPY packages ./packages
COPY services ./services
COPY frontend ./frontend
COPY lambdas ./lambdas
RUN npm install
EXPOSE 5173
CMD ["npm", "-w", "@todo/frontend", "run", "dev"]
