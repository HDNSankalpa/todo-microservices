import "dotenv/config";
import bcrypt from "bcryptjs";
import cors from "cors";
import express, { Request } from "express";
import helmet from "helmet";
import jwt from "jsonwebtoken";
import { Redis } from "ioredis";
import morgan from "morgan";
import { z } from "zod";
import { PrismaClient } from "./generated/prisma/index.js";
import { asyncHandler, ConflictError, errorMiddleware, ok, UnauthorizedError } from "@todo/errors";
import { createLogger, requestContextMiddleware } from "@todo/logger";
import { publish } from "@todo/rabbitmq";

const app = express();
const prisma = new PrismaClient();
const redis = process.env.NODE_ENV === "test" ? null : new Redis(process.env.REDIS_URL ?? "redis://localhost:6379");
const logger = createLogger("auth-service");
const jwtSecret = process.env.JWT_SECRET ?? "dev-secret";
const refreshSecret = process.env.JWT_REFRESH_SECRET ?? "dev-refresh-secret";

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(requestContextMiddleware);
app.use(morgan("combined"));

const authSchema = z.object({ email: z.string().email(), password: z.string().min(8), username: z.string().min(2).optional() });
const loginSchema = authSchema.pick({ email: true, password: true });
const hash = (value: string) => bcrypt.hashSync(value, 12);
const issueAccess = (user: { id: string; email: string; role: string }) => jwt.sign({ sub: user.id, email: user.email, role: user.role }, jwtSecret, { expiresIn: "15m" });
const issueRefresh = (userId: string) => jwt.sign({ sub: userId, tokenId: crypto.randomUUID() }, refreshSecret, { expiresIn: "7d" });
const verifyAccess = (req: Request) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) throw new UnauthorizedError();
  return jwt.verify(token, jwtSecret) as { sub: string; email: string; role: string };
};

app.get("/health", (_req, res) => ok(res, { status: "ok", service: "auth-service", timestamp: new Date().toISOString() }));

app.post("/register", asyncHandler(async (req, res) => {
  const body = authSchema.parse(req.body);
  const existing = await prisma.user.findUnique({ where: { email: body.email } });
  if (existing) throw new ConflictError("Email already registered");
  const user = await prisma.user.create({ data: { email: body.email, username: body.username ?? body.email.split("@")[0], passwordHash: hash(body.password) } });
  await publish("todo.topic", "user.registered", { type: "user.registered", userId: user.id, data: { id: user.id, email: user.email, username: user.username }, timestamp: new Date().toISOString() });
  ok(res, { id: user.id, email: user.email, username: user.username }, null, 201);
}));

app.post("/login", asyncHandler(async (req, res) => {
  const body = loginSchema.parse(req.body);
  const user = await prisma.user.findUnique({ where: { email: body.email } });
  if (!user || !(await bcrypt.compare(body.password, user.passwordHash))) throw new UnauthorizedError("Invalid credentials");
  const refreshToken = issueRefresh(user.id);
  await prisma.refreshToken.create({ data: { tokenHash: hash(refreshToken), userId: user.id, expiresAt: new Date(Date.now() + 7 * 86400000) } });
  await publish("todo.topic", "user.loggedin", { type: "user.loggedin", userId: user.id, data: { id: user.id, email: user.email }, timestamp: new Date().toISOString() });
  ok(res, { accessToken: issueAccess(user), refreshToken, user: { id: user.id, email: user.email, username: user.username, role: user.role } });
}));

app.post("/refresh", asyncHandler(async (req, res) => {
  const token = z.object({ refreshToken: z.string().min(20) }).parse(req.body).refreshToken;
  const decoded = jwt.verify(token, refreshSecret) as { sub: string };
  const revoked = await redis?.get("blacklist:" + token);
  if (revoked) throw new UnauthorizedError("Refresh token revoked");
  const user = await prisma.user.findUniqueOrThrow({ where: { id: decoded.sub } });
  const stored = await prisma.refreshToken.findMany({ where: { userId: user.id, revoked: false, expiresAt: { gt: new Date() } } });
  const match = await Promise.all(stored.map(async (row) => ({ row, ok: await bcrypt.compare(token, row.tokenHash) })));
  const current = match.find((x) => x.ok)?.row;
  if (!current) throw new UnauthorizedError("Refresh token invalid");
  await prisma.refreshToken.update({ where: { id: current.id }, data: { revoked: true } });
  const refreshToken = issueRefresh(user.id);
  await prisma.refreshToken.create({ data: { tokenHash: hash(refreshToken), userId: user.id, expiresAt: new Date(Date.now() + 7 * 86400000) } });
  ok(res, { accessToken: issueAccess(user), refreshToken });
}));

app.post("/logout", asyncHandler(async (req, res) => {
  const token = z.object({ refreshToken: z.string() }).parse(req.body).refreshToken;
  await redis?.set("blacklist:" + token, "1", "EX", 7 * 86400);
  ok(res, { loggedOut: true });
}));

app.get("/me", asyncHandler(async (req, res) => {
  const decoded = verifyAccess(req);
  const user = await prisma.user.findUniqueOrThrow({ where: { id: decoded.sub }, select: { id: true, email: true, username: true, role: true, createdAt: true } });
  ok(res, user);
}));

app.use(errorMiddleware);
const port = Number(process.env.PORT ?? 3001);
if (process.env.NODE_ENV !== "test") app.listen(port, () => logger.info("listening", { port }));
export { app, prisma };
