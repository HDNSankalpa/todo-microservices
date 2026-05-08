import { PrismaClient } from "../src/generated/prisma/index.js";
const prisma = new PrismaClient();
await prisma.file.create({ data: { todoId: "demo-todo", userId: "demo-user", s3Key: "demo/demo.txt", filename: "demo.txt", mimetype: "text/plain", size: 12 } }).catch(() => undefined);
await prisma.$disconnect();
