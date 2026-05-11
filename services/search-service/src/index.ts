import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import jwt from "jsonwebtoken";
import morgan from "morgan";
import pg from "pg";
import { z } from "zod";
import { asyncHandler, errorMiddleware, ok, UnauthorizedError } from "@todo/errors";
import { createLogger, requestContextMiddleware } from "@todo/logger";
import { subscribe } from "@todo/rabbitmq";

const app = express();
const logger = createLogger("search-service");
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const userFromReq = (req: express.Request) => {
  const headerId = req.headers["x-user-id"];
  if (headerId) return String(headerId);
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) throw new UnauthorizedError();
  return (jwt.verify(token, process.env.JWT_SECRET ?? "dev-secret") as { sub: string }).sub;
};
async function ensureIndex() {
  await pool.query("CREATE INDEX IF NOT EXISTS todo_fts_idx ON \"Todo\" USING GIN (to_tsvector('simple', title || ' ' || description))");
}
app.use(helmet()); app.use(cors()); app.use(express.json()); app.use(requestContextMiddleware); app.use(morgan("combined"));
app.get("/health", (_req, res) => ok(res, { status: "ok", service: "search-service", timestamp: new Date().toISOString() }));
app.get("/search", asyncHandler(async (req, res) => {
  const userId = String(req.query.userId ?? userFromReq(req));
  const q = z.string().min(1).parse(req.query.q);
  const result = await pool.query(
    "SELECT id, title, description, priority, status, \"dueDate\", \"updatedAt\", ts_rank(to_tsvector('simple', title || ' ' || description), plainto_tsquery('simple', $2)) AS rank FROM \"Todo\" WHERE \"userId\"=$1 AND \"deletedAt\" IS NULL AND to_tsvector('simple', title || ' ' || description) @@ plainto_tsquery('simple', $2) ORDER BY rank DESC, \"updatedAt\" DESC LIMIT 30",
    [userId, q]
  );
  ok(res, result.rows);
}));
if (process.env.NODE_ENV !== "test") {
  await ensureIndex();
  for (const key of ["todo.created", "todo.updated", "todo.deleted"]) void subscribe("todo.topic", key, "search-service-" + key, async () => ensureIndex());
}
app.use(errorMiddleware);
const port = Number(process.env.PORT ?? 3006);
if (process.env.NODE_ENV !== "test") app.listen(port, () => logger.info("listening", { port }));
export { app };
