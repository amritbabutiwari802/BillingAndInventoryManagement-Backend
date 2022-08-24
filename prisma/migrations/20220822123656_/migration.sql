/*
  Warnings:

  - A unique constraint covering the columns `[itemId]` on the table `MarkedPrice` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MarkedPrice_itemId_key" ON "MarkedPrice"("itemId");
