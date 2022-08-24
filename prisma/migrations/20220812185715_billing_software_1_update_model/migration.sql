/*
  Warnings:

  - You are about to drop the column `markedPrice` on the `PurchaseBill` table. All the data in the column will be lost.
  - Added the required column `totalMarkedPrice` to the `PurchaseBill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PurchaseBill" DROP COLUMN "markedPrice",
ADD COLUMN     "totalMarkedPrice" DOUBLE PRECISION NOT NULL;
