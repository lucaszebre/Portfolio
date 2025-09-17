/*
  Warnings:

  - You are about to drop the column `UserName` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "UserName",
ALTER COLUMN "avatar" DROP NOT NULL;
