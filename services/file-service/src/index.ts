import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import jwt from "jsonwebtoken";
import morgan from "morgan";
import multer from "multer";
import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PrismaClient } from "./generated/prisma/index.js";
import { asyncHandler, BadRequestError, errorMiddleware, NotFoundError, ok, UnauthorizedError } from "@todo/errors";
import { createLogger, requestContextMiddleware } from "@todo/logger";
import { publish } from "@todo/rabbitmq";

const app = express();
const prisma = new PrismaClient();
const logger = createLogger("file-service");
const s3 = new S3Client({ region: process.env.AWS_REGION ?? "us-east-1" });
const bucket = process.env.S3_BUCKET_NAME ?? "todo-uploads-dev";
const allowed = new Set(["image/png","image/jpeg","image/gif","application/pdf","text/plain","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]);
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 }, fileFilter: (_req, file, cb) => cb(null, allowed.has(file.mimetype)) });
const userFromReq = (req: express.Request) => {
  const headerId = req.headers["x-user-id"];
  if (headerId) return String(headerId);
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) throw new UnauthorizedError();
  return (jwt.verify(token, process.env.JWT_SECRET ?? "dev-secret") as { sub: string }).sub;
};
app.use(helmet()); app.use(cors()); app.use(express.json()); app.use(requestContextMiddleware); app.use(morgan("combined"));
app.get("/health", (_req, res) => ok(res, { status: "ok", service: "file-service", timestamp: new Date().toISOString() }));
app.post("/files/upload", upload.single("file"), asyncHandler(async (req, res) => {
  const userId = userFromReq(req);
  const todoId = String(req.body.todoId ?? "");
  if (!todoId || !req.file) throw new BadRequestError("todoId and file are required");
  const s3Key = userId + "/" + todoId + "/" + crypto.randomUUID() + "-" + req.file.originalname.replace(/[^a-zA-Z0-9._-]/g, "_");
  await s3.send(new PutObjectCommand({ Bucket: bucket, Key: s3Key, Body: req.file.buffer, ContentType: req.file.mimetype }));
  const file = await prisma.file.create({ data: { todoId, userId, s3Key, filename: req.file.originalname, mimetype: req.file.mimetype, size: req.file.size } });
  await publish("todo.topic", "file.uploaded", { type: "file.uploaded", userId, data: file, timestamp: new Date().toISOString() });
  ok(res, file, null, 201);
}));
app.get("/files/:todoId", asyncHandler(async (req, res) => {
  const userId = userFromReq(req);
  ok(res, await prisma.file.findMany({ where: { userId, todoId: req.params.todoId }, orderBy: { createdAt: "desc" } }));
}));
app.delete("/files/:fileId", asyncHandler(async (req, res) => {
  const userId = userFromReq(req);
  const file = await prisma.file.findFirst({ where: { id: req.params.fileId, userId } });
  if (!file) throw new NotFoundError("File not found");
  await s3.send(new DeleteObjectCommand({ Bucket: bucket, Key: file.s3Key }));
  await prisma.file.delete({ where: { id: file.id } });
  ok(res, { deleted: true });
}));
app.get("/files/:fileId/download", asyncHandler(async (req, res) => {
  const userId = userFromReq(req);
  const file = await prisma.file.findFirst({ where: { id: req.params.fileId, userId } });
  if (!file) throw new NotFoundError("File not found");
  const url = await getSignedUrl(s3, new GetObjectCommand({ Bucket: bucket, Key: file.s3Key, ResponseContentDisposition: "attachment; filename=\"" + file.filename + "\"" }), { expiresIn: 900 });
  ok(res, { url, expiresIn: 900 });
}));
app.use(errorMiddleware);
const port = Number(process.env.PORT ?? 3003);
if (process.env.NODE_ENV !== "test") app.listen(port, () => logger.info("listening", { port }));
export { app, prisma };
