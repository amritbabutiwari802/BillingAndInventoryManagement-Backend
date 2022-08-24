/*
  Warnings:

  - You are about to drop the column `ImagePath` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "ImagePath",
ADD COLUMN     "imagePath" TEXT[],
ALTER COLUMN "conversionRatio" SET DEFAULT 1000,
ALTER COLUMN "conversionRatio" SET DATA TYPE DOUBLE PRECISION;
