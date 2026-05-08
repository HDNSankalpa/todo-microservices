CREATE TYPE "Priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'URGENT');
CREATE TYPE "TodoStatus" AS ENUM ('TODO', 'IN_PROGRESS', 'DONE', 'ARCHIVED');

CREATE TABLE "Todo" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL DEFAULT '',
  "priority" "Priority" NOT NULL DEFAULT 'MEDIUM',
  "status" "TodoStatus" NOT NULL DEFAULT 'TODO',
  "dueDate" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "deletedAt" TIMESTAMP(3),
  "position" INTEGER NOT NULL DEFAULT 0,
  "parentId" TEXT,
  CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "TodoHistory" (
  "id" TEXT NOT NULL,
  "todoId" TEXT NOT NULL,
  "snapshot" JSONB NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "TodoHistory_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Tag" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "TodoTag" (
  "todoId" TEXT NOT NULL,
  "tagId" TEXT NOT NULL,
  CONSTRAINT "TodoTag_pkey" PRIMARY KEY ("todoId","tagId")
);

CREATE INDEX "Todo_userId_status_priority_idx" ON "Todo"("userId", "status", "priority");
CREATE UNIQUE INDEX "Tag_userId_name_key" ON "Tag"("userId", "name");

ALTER TABLE "Todo"
  ADD CONSTRAINT "Todo_parentId_fkey"
  FOREIGN KEY ("parentId") REFERENCES "Todo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "TodoHistory"
  ADD CONSTRAINT "TodoHistory_todoId_fkey"
  FOREIGN KEY ("todoId") REFERENCES "Todo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "TodoTag"
  ADD CONSTRAINT "TodoTag_todoId_fkey"
  FOREIGN KEY ("todoId") REFERENCES "Todo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "TodoTag"
  ADD CONSTRAINT "TodoTag_tagId_fkey"
  FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
