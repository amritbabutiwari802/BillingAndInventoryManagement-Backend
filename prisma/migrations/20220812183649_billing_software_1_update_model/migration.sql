/*
  Warnings:

  - You are about to drop the column `defaultDiscount` on the `MarkedPrice` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerBaseUnit` on the `MarkedPrice` table. All the data in the column will be lost.
  - You are about to drop the column `dealerName` on the `PurchaseHistory` table. All the data in the column will be lost.
  - You are about to drop the column `dealerPan` on the `PurchaseHistory` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerBaseUnitQuantity` on the `PurchaseHistory` table. All the data in the column will be lost.
  - You are about to drop the column `customerName` on the `Sells` table. All the data in the column will be lost.
  - You are about to drop the column `customerPan` on the `Sells` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Sells` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerBaseUnit` on the `Sells` table. All the data in the column will be lost.
  - Added the required column `customerName` to the `Bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `MarkedPrice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dealerName` to the `PurchaseBill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `PurchaseHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `Sells` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bill" ADD COLUMN     "customerName" TEXT NOT NULL,
ADD COLUMN     "customerPan" TEXT,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "MarkedPrice" DROP COLUMN "defaultDiscount",
DROP COLUMN "pricePerBaseUnit",
ADD COLUMN     "defaultDiscountPercentage" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "rate" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "PurchaseBill" ADD COLUMN     "dealerName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PurchaseHistory" DROP COLUMN "dealerName",
DROP COLUMN "dealerPan",
DROP COLUMN "pricePerBaseUnitQuantity",
ADD COLUMN     "rate" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Sells" DROP COLUMN "customerName",
DROP COLUMN "customerPan",
DROP COLUMN "date",
DROP COLUMN "pricePerBaseUnit",
ADD COLUMN     "rate" DOUBLE PRECISION NOT NULL;
