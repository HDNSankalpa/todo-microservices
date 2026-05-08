import type { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code = "APP_ERROR",
    public details?: unknown
  ) {
    super(message);
  }
}
export class NotFoundError extends AppError {
  constructor(message = "Resource not found") { super(404, message, "NOT_FOUND"); }
}
export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") { super(401, message, "UNAUTHORIZED"); }
}
export class ForbiddenError extends AppError {
  constructor(message = "Forbidden") { super(403, message, "FORBIDDEN"); }
}
export class BadRequestError extends AppError {
  constructor(message = "Bad request", details?: unknown) { super(400, message, "BAD_REQUEST", details); }
}
export class ConflictError extends AppError {
  constructor(message = "Conflict") { super(409, message, "CONFLICT"); }
}

export const ok = (res: Response, data: unknown, meta?: unknown, status = 200) =>
  res.status(status).json({ success: true, data, error: null, meta: meta ?? null });

export const fail = (res: Response, status: number, code: string, message: string, details?: unknown) =>
  res.status(status).json({ success: false, data: null, error: { code, message, details }, meta: null });

export const asyncHandler = <T extends Request>(fn: (req: T, res: Response, next: NextFunction) => Promise<unknown>) =>
  (req: T, res: Response, next: NextFunction) => { void fn(req, res, next).catch(next); };

export const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof ZodError) return fail(res, 400, "VALIDATION_ERROR", "Validation failed", err.flatten());
  if (err instanceof AppError) return fail(res, err.statusCode, err.code, err.message, err.details);
  console.error(err);
  return fail(res, 500, "INTERNAL_ERROR", "Internal server error");
};
