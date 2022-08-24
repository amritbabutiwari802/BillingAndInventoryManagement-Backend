-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "subname" TEXT,
    "descripton" TEXT,
    "company" TEXT,
    "baseUnit" INTEGER NOT NULL,
    "smallUnit" INTEGER NOT NULL,
    "conversionRatio" INTEGER NOT NULL DEFAULT 1000,
    "tag" TEXT[],
    "type" TEXT[],
    "category" TEXT[],
    "ImagePath" TEXT[],

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemStock" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "baseUnitQuantity" INTEGER NOT NULL,
    "smallUnitQuantity" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "PurchaseHistory" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL,
    "baseUnitQuantity" INTEGER NOT NULL,
    "smallerUnitQuantity" INTEGER NOT NULL,
    "pricePerBaseUnitQuantity" DOUBLE PRECISION NOT NULL,
    "dealerName" TEXT NOT NULL,
    "dealerPan" TEXT NOT NULL,

    CONSTRAINT "PurchaseHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sells" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "baseUnitQuantity" INTEGER NOT NULL,
    "smallUnitQuantity" INTEGER NOT NULL,
    "pricePerBaseUnit" DOUBLE PRECISION NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerPan" TEXT,
    "billNo" INTEGER NOT NULL,

    CONSTRAINT "Sells_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bill" (
    "id" SERIAL NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "sellingPrice" DOUBLE PRECISION NOT NULL,
    "remarks" TEXT,

    CONSTRAINT "Bill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarkedPrice" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "pricePerBaseUnit" DOUBLE PRECISION NOT NULL,
    "defaultDiscount" DOUBLE PRECISION,

    CONSTRAINT "MarkedPrice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ItemStock_itemId_key" ON "ItemStock"("itemId");
