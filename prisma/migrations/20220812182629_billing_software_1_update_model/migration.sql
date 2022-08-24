/*
  Warnings:

  - A unique constraint covering the columns `[billId]` on the table `PurchaseHistory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `billId` to the `PurchaseHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PurchaseHistory" ADD COLUMN     "billId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "PurchaseBill" (
    "id" SERIAL NOT NULL,
    "dealerPan" TEXT NOT NULL,
    "billNo" INTEGER NOT NULL,
    "markedPrice" DOUBLE PRECISION NOT NULL,
    "totalCostPrice" DOUBLE PRECISION NOT NULL,
    "totalDiscount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PurchaseBill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseHistory_billId_key" ON "PurchaseHistory"("billId");
