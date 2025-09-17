/*
  Warnings:

  - You are about to drop the column `UserName` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "UserName",
ADD COLUMN     "username" TEXT;
