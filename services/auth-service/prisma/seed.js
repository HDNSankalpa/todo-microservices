import bcrypt from "bcryptjs";
import { PrismaClient } from "../src/generated/prisma/index.js";
const prisma = new PrismaClient();
await prisma.user.upsert({ where: { email: "admin@example.com" }, update: {}, create: { email: "admin@example.com", username: "admin", role: "ADMIN", passwordHash: await bcrypt.hash("Password123!", 12) } });
await prisma.user.upsert({ where: { email: "demo@example.com" }, update: {}, create: { email: "demo@example.com", username: "demo", passwordHash: await bcrypt.hash("Password123!", 12) } });
await prisma.$disconnect();
