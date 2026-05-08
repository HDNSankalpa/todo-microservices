CREATE TABLE "File" (
  "id" TEXT NOT NULL,
  "todoId" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "s3Key" TEXT NOT NULL,
  "filename" TEXT NOT NULL,
  "mimetype" TEXT NOT NULL,
  "size" INTEGER NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "File_s3Key_key" ON "File"("s3Key");
CREATE INDEX "File_todoId_userId_idx" ON "File"("todoId", "userId");
