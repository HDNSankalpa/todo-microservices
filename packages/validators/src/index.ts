import { z } from "zod";

export const idSchema = z.string().min(1);
export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  sortBy: z.string().default("createdAt"),
  order: z.enum(["asc", "desc"]).default("desc")
});
export const prioritySchema = z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]);
export const statusSchema = z.enum(["TODO", "IN_PROGRESS", "DONE", "ARCHIVED"]);
export const todoCreateSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().max(5000).optional().default(""),
  priority: prioritySchema.default("MEDIUM"),
  status: statusSchema.default("TODO"),
  dueDate: z.coerce.date().optional().nullable(),
  tags: z.array(z.string().min(1).max(40)).default([]),
  position: z.number().int().optional(),
  parentId: z.string().optional().nullable()
});
export const todoUpdateSchema = todoCreateSchema.partial();
export const bulkTodoSchema = z.object({
  ids: z.array(z.string().min(1)).min(1),
  update: todoUpdateSchema.optional(),
  status: statusSchema.optional()
});
