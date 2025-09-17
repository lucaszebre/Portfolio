/*
  Warnings:

  - Added the required column `UserName` to the `user` table without a default value. This is not possible if the table is not empty.
  - Made the column `avatar` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "UserName" TEXT NOT NULL,
ALTER COLUMN "avatar" SET NOT NULL;
