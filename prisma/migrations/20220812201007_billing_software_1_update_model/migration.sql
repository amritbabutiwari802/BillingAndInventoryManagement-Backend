/*
  Warnings:

  - You are about to drop the column `subname` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "subname",
ADD COLUMN     "subName" TEXT;
