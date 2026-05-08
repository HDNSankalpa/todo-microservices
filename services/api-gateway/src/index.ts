import "dotenv/config";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { createProxyMiddleware } from "http-proxy-middleware";
import jwt from "jsonwebtoken";
import { Redis } from "ioredis";
import { RedisStore } from "rate-limit-redis";
import morgan from "morgan";
import { v4 as uuidv4 } from "uuid";
import { asyncHandler, errorMiddleware, ok, UnauthorizedError } from "@todo/errors";
import { createLogger, withRequestContext } from "@todo/logger";

const app = express();
const logger = createLogger("api-gateway");
const redis = process.env.NODE_ENV === "test" ? null : new Redis(process.env.REDIS_URL ?? "redis://localhost:6379");
const services = {
  auth: process.env.AUTH_SERVICE_URL ?? "http://localhost:3001",
  todo: (process.env.TODO_SERVICE_URLS ?? process.env.TODO_SERVICE_URL ?? "http://localhost:3002").split(","),
  files: process.env.FILE_SERVICE_URL ?? "http://localhost:3003",
  notifications: process.env.NOTIFICATION_SERVICE_URL ?? "http://localhost:3004",
  audit: process.env.AUDIT_SERVICE_URL ?? "http://localhost:3005",
  search: process.env.SEARCH_SERVICE_URL ?? "http://localhost:3006"
};
let todoIndex = 0;
const nextTodo = () => services.todo[todoIndex++ % services.todo.length];

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") ?? true, credentials: true }));
app.use((req, _res, next) => {
  const requestId = String(req.headers["x-request-id"] ?? uuidv4());
  req.headers["x-request-id"] = requestId;
  withRequestContext(requestId, next);
});
app.use(morgan("combined"));
app.use(rateLimit({
  windowMs: 60_000,
  limit: 120,
  standardHeaders: true,
  legacyHeaders: false,
  ...(redis ? { store: new RedisStore({ sendCommand: (...args: string[]) => redis.call(args[0], ...args.slice(1)) as any }) } : {})
}));
app.get("/health", (_req, res) => ok(res, { status: "ok", service: "api-gateway", timestamp: new Date().toISOString() }));
const requireJwt = asyncHandler(async (req, _res, next) => {
  if (req.path.startsWith("/api/auth/")) return next();
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) throw new UnauthorizedError();
  const decoded = jwt.verify(token, process.env.JWT_SECRET ?? "dev-secret") as { sub: string; email: string; role?: string };
  req.headers["x-user-id"] = decoded.sub;
  req.headers["x-user-email"] = decoded.email;
  req.headers["x-user-role"] = decoded.role ?? "USER";
  next();
});
app.use(requireJwt);
const proxy = (target: string | (() => string), strip: string) => createProxyMiddleware({
  target: typeof target === "string" ? target : undefined,
  changeOrigin: true,
  ws: true,
  router: typeof target === "function" ? () => target() : undefined,
  pathRewrite: (path) => path.replace(strip, "")
});
app.use("/api/auth", proxy(services.auth, "^/api/auth"));
app.use("/api/todos", proxy(nextTodo, "^/api"));
app.use("/api/files", proxy(services.files, "^/api"));
app.use("/api/notifications", proxy(services.notifications, "^/api"));
app.use("/api/audit", proxy(services.audit, "^/api"));
app.use("/api/search", proxy(services.search, "^/api"));
app.use(errorMiddleware);
const port = Number(process.env.PORT ?? 3000);
if (process.env.NODE_ENV !== "test") app.listen(port, () => logger.info("listening", { port }));
export { app };
