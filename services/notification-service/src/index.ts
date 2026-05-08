import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import http from "node:http";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import morgan from "morgan";
import { Server } from "socket.io";
import { createAdapter } from "@socket.io/redis-adapter";
import { Redis } from "ioredis";
import { Notification } from "./models.js";
import { asyncHandler, errorMiddleware, ok, UnauthorizedError } from "@todo/errors";
import { createLogger, requestContextMiddleware } from "@todo/logger";
import { subscribe } from "@todo/rabbitmq";

const app = express();
const server = http.createServer(app);
const logger = createLogger("notification-service");
const io = new Server(server, { cors: { origin: "*" } });
const pubClient = new Redis(process.env.REDIS_URL ?? "redis://localhost:6379");
const subClient = pubClient.duplicate();
io.adapter(createAdapter(pubClient, subClient));
const userFromReq = (req: express.Request) => {
  const headerId = req.headers["x-user-id"];
  if (headerId) return String(headerId);
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) throw new UnauthorizedError();
  return (jwt.verify(token, process.env.JWT_SECRET ?? "dev-secret") as { sub: string }).sub;
};
io.use((socket, next) => {
  try {
    const token = String(socket.handshake.auth.token ?? "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET ?? "dev-secret") as { sub: string };
    socket.join(decoded.sub); next();
  } catch { next(new Error("unauthorized")); }
});
app.use(helmet()); app.use(cors()); app.use(express.json()); app.use(requestContextMiddleware); app.use(morgan("combined"));
app.get("/health", (_req, res) => ok(res, { status: "ok", service: "notification-service", timestamp: new Date().toISOString() }));
app.get("/notifications", asyncHandler(async (req, res) => {
  const userId = userFromReq(req);
  ok(res, await Notification.find({ userId }).sort({ read: 1, createdAt: -1 }).limit(100));
}));
app.patch("/notifications/:id/read", asyncHandler(async (req, res) => {
  const userId = userFromReq(req);
  ok(res, await Notification.findOneAndUpdate({ _id: req.params.id, userId }, { read: true }, { new: true }));
}));
app.patch("/notifications/read-all", asyncHandler(async (req, res) => {
  const userId = userFromReq(req);
  ok(res, await Notification.updateMany({ userId, read: false }, { read: true }));
}));
const titleFor = (type: string) => ({ "todo.completed": "Todo completed", "todo.created": "Todo created", "file.uploaded": "File uploaded", "user.registered": "Welcome" }[type] ?? "Todo event");
async function createNotification(msg: any) {
  if (!msg.userId) return;
  const n = await Notification.create({ userId: msg.userId, type: msg.type, title: titleFor(msg.type), message: titleFor(msg.type), payload: msg.data });
  io.to(msg.userId).emit("notification", n);
}
if (process.env.NODE_ENV !== "test") {
  await mongoose.connect(process.env.MONGODB_URL ?? "mongodb://localhost:27017/notifications");
  for (const key of ["todo.completed", "todo.created", "file.uploaded", "user.registered"]) void subscribe("todo.topic", key, "notification-service-" + key, createNotification);
}
app.use(errorMiddleware);
const port = Number(process.env.PORT ?? 3004);
if (process.env.NODE_ENV !== "test") server.listen(port, () => logger.info("listening", { port }));
export { app, server };
