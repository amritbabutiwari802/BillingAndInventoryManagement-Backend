/*
  Warnings:

  - You are about to drop the column `purchaseDate` on the `PurchaseHistory` table. All the data in the column will be lost.
  - Added the required column `data` to the `PurchaseBill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PurchaseBill" ADD COLUMN     "data" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "PurchaseHistory" DROP COLUMN "purchaseDate";
