import { PrismaClient } from "../src/generated/prisma/index.js";
const prisma = new PrismaClient();
const userId = "demo-user";
const todo = await prisma.todo.create({ data: { userId, title: "Ship microservices demo", description: "Review all services and run docker compose.", priority: "HIGH", status: "IN_PROGRESS", dueDate: new Date(Date.now() + 86400000), position: 1 } });
const tag = await prisma.tag.upsert({ where: { userId_name: { userId, name: "demo" } }, update: {}, create: { userId, name: "demo" } });
await prisma.todoTag.create({ data: { todoId: todo.id, tagId: tag.id } });
await prisma.$disconnect();
