-- CreateEnum
CREATE TYPE "Category" AS ENUM ('ESSENTIAL_OIL', 'SPICE_OIL', 'CARRIER_OIL', 'FLORAL_ABSOLUTE', 'FLORAL_WATER', 'OLEORESIN', 'ORGANIC_OIL', 'AYURVEDIC');

-- CreateEnum
CREATE TYPE "BottleFormat" AS ENUM ('DROPPER_10ML', 'BOTTLE_100ML', 'BOTTLE_200ML', 'ROLL_ON_30ML', 'GIFT_BOX');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('SEARCH_IMPRESSION', 'VIEW', 'INQUIRY', 'ADD_TO_QUOTE');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "botanicalName" TEXT,
    "category" "Category" NOT NULL,
    "subCategory" TEXT,
    "description" TEXT NOT NULL,
    "shortSpec" TEXT,
    "overview" TEXT,
    "history" TEXT,
    "benefits" JSONB,
    "manufacturingSteps" JSONB,
    "bottleFormat" "BottleFormat" NOT NULL DEFAULT 'BOTTLE_100ML',
    "labelImageUrl" TEXT,
    "compositeImageUrl" TEXT,
    "priceDisplay" TEXT DEFAULT 'Request Quote',
    "moq" TEXT DEFAULT '1 kg',
    "popularityScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductEvent" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "type" "EventType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inquiry" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "company" TEXT,
    "category" TEXT,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Inquiry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- AddForeignKey
ALTER TABLE "ProductEvent" ADD CONSTRAINT "ProductEvent_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
