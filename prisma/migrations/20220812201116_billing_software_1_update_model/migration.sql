/*
  Warnings:

  - You are about to drop the column `descripton` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "descripton",
ADD COLUMN     "description" TEXT;
