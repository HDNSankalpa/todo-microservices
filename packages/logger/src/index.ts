import { AsyncLocalStorage } from "node:async_hooks";
import type { NextFunction, Request, Response } from "express";
import winston from "winston";

const storage = new AsyncLocalStorage<{ requestId?: string }>();
export const withRequestContext = <T>(requestId: string, fn: () => T) => storage.run({ requestId }, fn);
export const getRequestId = () => storage.getStore()?.requestId;

export const createLogger = (service: string) =>
  winston.createLogger({
    level: process.env.LOG_LEVEL ?? "info",
    defaultMeta: { service },
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format((info) => {
        info.requestId = getRequestId();
        return info;
      })(),
      winston.format.json()
    ),
    transports: [new winston.transports.Console()]
  });

export const requestContextMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  withRequestContext(String(req.headers["x-request-id"] ?? crypto.randomUUID()), next);
};
