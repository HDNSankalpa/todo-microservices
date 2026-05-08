import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import morgan from "morgan";
import { z } from "zod";
import { AuditLog } from "./models.js";
import { asyncHandler, errorMiddleware, ForbiddenError, ok, UnauthorizedError } from "@todo/errors";
import { createLogger, requestContextMiddleware } from "@todo/logger";
import { subscribe } from "@todo/rabbitmq";

const app = express();
const logger = createLogger("audit-service");
app.use(helmet()); app.use(cors()); app.use(express.json()); app.use(requestContextMiddleware); app.use(morgan("combined"));
const admin = (req: express.Request) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) throw new UnauthorizedError();
  const decoded = jwt.verify(token, process.env.JWT_SECRET ?? "dev-secret") as { role?: string };
  if (decoded.role !== "ADMIN") throw new ForbiddenError("Admin role required");
};
app.get("/health", (_req, res) => ok(res, { status: "ok", service: "audit-service", timestamp: new Date().toISOString() }));
app.get("/audit", asyncHandler(async (req, res) => {
  admin(req);
  const q = z.object({ page: z.coerce.number().default(1), limit: z.coerce.number().max(100).default(50), type: z.string().optional(), userId: z.string().optional() }).parse(req.query);
  const where: any = {}; if (q.type) where.type = q.type; if (q.userId) where.userId = q.userId;
  const [items, total] = await Promise.all([AuditLog.find(where).sort({ occurredAt: -1 }).skip((q.page - 1) * q.limit).limit(q.limit), AuditLog.countDocuments(where)]);
  ok(res, items, { total, page: q.page, limit: q.limit });
}));
if (process.env.NODE_ENV !== "test") {
  await mongoose.connect(process.env.MONGODB_URL ?? "mongodb://localhost:27017/audit");
  void subscribe("todo.audit", "", "audit-service-all-events", async (msg) => {
    await AuditLog.create({ type: msg.type, userId: msg.userId, data: msg.data, requestId: msg.requestId, occurredAt: msg.timestamp ? new Date(msg.timestamp) : new Date() });
  });
}
app.use(errorMiddleware);
const port = Number(process.env.PORT ?? 3005);
if (process.env.NODE_ENV !== "test") app.listen(port, () => logger.info("listening", { port }));
export { app };
