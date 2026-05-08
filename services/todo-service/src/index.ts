import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import jwt from "jsonwebtoken";
import morgan from "morgan";
import cron from "node-cron";
import { EventBridgeClient, PutEventsCommand } from "@aws-sdk/client-eventbridge";
import { Prisma, PrismaClient, TodoStatus } from "./generated/prisma/index.js";
import { asyncHandler, BadRequestError, errorMiddleware, NotFoundError, ok, UnauthorizedError } from "@todo/errors";
import { createLogger, requestContextMiddleware } from "@todo/logger";
import { publish, subscribe } from "@todo/rabbitmq";
import { bulkTodoSchema, paginationSchema, todoCreateSchema, todoUpdateSchema } from "@todo/validators";

const app = express();
const prisma = new PrismaClient();
const logger = createLogger("todo-service");
const eventBridge = new EventBridgeClient({ region: process.env.AWS_REGION ?? "us-east-1" });

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(requestContextMiddleware);
app.use(morgan("combined"));

const userFromReq = (req: express.Request) => {
  const headerId = req.headers["x-user-id"];
  if (headerId) return String(headerId);
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) throw new UnauthorizedError();
  return (jwt.verify(token, process.env.JWT_SECRET ?? "dev-secret") as { sub: string }).sub;
};
const includeTags = { tags: { include: { tag: true } } };
const shape = (todo: any) => ({ ...todo, tags: todo.tags?.map((t: any) => t.tag.name) ?? [] });
async function saveHistory(todoId: string) {
  const todo = await prisma.todo.findUnique({ where: { id: todoId }, include: includeTags });
  if (!todo) return;
  await prisma.todoHistory.create({ data: { todoId, snapshot: shape(todo) } });
  const old = await prisma.todoHistory.findMany({ where: { todoId }, orderBy: { createdAt: "desc" }, skip: 20 });
  if (old.length) await prisma.todoHistory.deleteMany({ where: { id: { in: old.map((h) => h.id) } } });
}
async function setTags(userId: string, todoId: string, tags: string[]) {
  await prisma.todoTag.deleteMany({ where: { todoId } });
  for (const name of [...new Set(tags)]) {
    const tag = await prisma.tag.upsert({ where: { userId_name: { userId, name } }, update: {}, create: { userId, name } });
    await prisma.todoTag.create({ data: { todoId, tagId: tag.id } });
  }
}
async function getOwned(userId: string, id: string) {
  const todo = await prisma.todo.findFirst({ where: { id, userId, deletedAt: null }, include: includeTags });
  if (!todo) throw new NotFoundError("Todo not found");
  return todo;
}
const event = async (type: string, userId: string, data: unknown) => publish("todo.topic", type, { type, userId, data, timestamp: new Date().toISOString() });

app.get("/health", (_req, res) => ok(res, { status: "ok", service: "todo-service", timestamp: new Date().toISOString() }));
app.post("/todos", asyncHandler(async (req, res) => {
  const userId = userFromReq(req);
  const body = todoCreateSchema.parse(req.body);
  const todo = await prisma.todo.create({ data: { userId, title: body.title, description: body.description, priority: body.priority, status: body.status, dueDate: body.dueDate, position: body.position ?? 0, parentId: body.parentId } });
  await setTags(userId, todo.id, body.tags);
  const full = await getOwned(userId, todo.id);
  await event("todo.created", userId, shape(full));
  ok(res, shape(full), null, 201);
}));
app.get("/todos", asyncHandler(async (req, res) => {
  const userId = userFromReq(req);
  const q = req.query;
  const page = paginationSchema.parse(q);
  const where: Prisma.TodoWhereInput = { userId, deletedAt: null };
  if (q.status) where.status = String(q.status) as TodoStatus;
  if (q.priority) where.priority = String(q.priority) as any;
  if (q.search) where.OR = [{ title: { contains: String(q.search), mode: "insensitive" } }, { description: { contains: String(q.search), mode: "insensitive" } }];
  if (q.dueBefore || q.dueAfter) where.dueDate = { lte: q.dueBefore ? new Date(String(q.dueBefore)) : undefined, gte: q.dueAfter ? new Date(String(q.dueAfter)) : undefined };
  if (q.tag) where.tags = { some: { tag: { name: String(q.tag) } } };
  const [items, total] = await Promise.all([
    prisma.todo.findMany({ where, include: includeTags, skip: (page.page - 1) * page.limit, take: page.limit, orderBy: { [page.sortBy]: page.order } as any }),
    prisma.todo.count({ where })
  ]);
  ok(res, items.map(shape), { total, page: page.page, limit: page.limit });
}));
app.get("/todos/:id", asyncHandler(async (req, res) => ok(res, shape(await getOwned(userFromReq(req), req.params.id)))));
app.patch("/todos/bulk", asyncHandler(async (req, res) => {
  const userId = userFromReq(req);
  const body = bulkTodoSchema.parse(req.body);
  for (const id of body.ids) await saveHistory(id);
  const update: any = body.update ?? {};
  if (body.status) update.status = body.status;
  const result = await prisma.todo.updateMany({ where: { id: { in: body.ids }, userId, deletedAt: null }, data: update });
  await event("todo.updated", userId, { ids: body.ids, update });
  ok(res, result);
}));
app.delete("/todos/bulk", asyncHandler(async (req, res) => {
  const userId = userFromReq(req);
  const ids = bulkTodoSchema.pick({ ids: true }).parse(req.body).ids;
  for (const id of ids) await saveHistory(id);
  const result = await prisma.todo.updateMany({ where: { id: { in: ids }, userId }, data: { deletedAt: new Date() } });
  await event("todo.deleted", userId, { ids });
  ok(res, result);
}));
app.patch("/todos/:id", asyncHandler(async (req, res) => {
  const userId = userFromReq(req);
  await getOwned(userId, req.params.id);
  await saveHistory(req.params.id);
  const body = todoUpdateSchema.parse(req.body);
  const { tags, ...data } = body;
  const oldStatus = (await prisma.todo.findUniqueOrThrow({ where: { id: req.params.id } })).status;
  await prisma.todo.update({ where: { id: req.params.id }, data: data as any });
  if (tags) await setTags(userId, req.params.id, tags);
  const full = await getOwned(userId, req.params.id);
  await event(full.status === "DONE" && oldStatus !== "DONE" ? "todo.completed" : "todo.updated", userId, shape(full));
  ok(res, shape(full));
}));
app.delete("/todos/:id", asyncHandler(async (req, res) => {
  const userId = userFromReq(req);
  await getOwned(userId, req.params.id);
  await saveHistory(req.params.id);
  await prisma.todo.update({ where: { id: req.params.id }, data: { deletedAt: new Date() } });
  await event("todo.deleted", userId, { id: req.params.id });
  ok(res, { deleted: true });
}));
app.post("/todos/:id/undo", asyncHandler(async (req, res) => {
  const userId = userFromReq(req);
  await getOwned(userId, req.params.id);
  const latest = await prisma.todoHistory.findFirst({ where: { todoId: req.params.id }, orderBy: { createdAt: "desc" } });
  if (!latest) throw new BadRequestError("No history to undo");
  const s = latest.snapshot as any;
  await prisma.todo.update({ where: { id: req.params.id }, data: { title: s.title, description: s.description, priority: s.priority, status: s.status, dueDate: s.dueDate, deletedAt: null, position: s.position, parentId: s.parentId } });
  await setTags(userId, req.params.id, s.tags ?? []);
  await prisma.todoHistory.delete({ where: { id: latest.id } });
  ok(res, shape(await getOwned(userId, req.params.id)));
}));

if (process.env.NODE_ENV !== "test") cron.schedule("0 * * * *", async () => {
  const due = await prisma.todo.findMany({ where: { deletedAt: null, status: { not: "DONE" }, dueDate: { gte: new Date(), lte: new Date(Date.now() + 86400000) } } });
  for (const todo of due) {
    const payload = { type: "todo.due_soon", userId: todo.userId, data: todo, timestamp: new Date().toISOString() };
    await publish("todo.topic", "todo.due_soon", payload);
    await eventBridge.send(new PutEventsCommand({ Entries: [{ EventBusName: process.env.EVENTBRIDGE_BUS_NAME, Source: "todo-service", DetailType: "todo.due_soon", Detail: JSON.stringify(payload) }] })).catch((e) => logger.warn("EventBridge publish failed", { error: String(e) }));
  }
});
if (process.env.NODE_ENV !== "test") void subscribe("todo.topic", "user.registered", "todo-service-onboarding", async (msg) => {
  if (!msg.userId) return;
  const existing = await prisma.todo.count({ where: { userId: msg.userId } });
  if (!existing) await prisma.todo.createMany({ data: [
    { userId: msg.userId, title: "Create your first todo", description: "Use the New Todo button to capture a task.", position: 1 },
    { userId: msg.userId, title: "Upload an attachment", description: "Open a todo detail page and attach a file.", position: 2 }
  ]});
});
app.use(errorMiddleware);
const port = Number(process.env.PORT ?? 3002);
if (process.env.NODE_ENV !== "test") app.listen(port, () => logger.info("listening", { port }));
export { app, prisma };
