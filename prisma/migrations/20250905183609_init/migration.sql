-- CreateEnum
CREATE TYPE "ConcentrationLevel" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "SampleStatus" AS ENUM ('OK', 'ALERT');

-- CreateTable
CREATE TABLE "Sample" (
    "id" SERIAL NOT NULL,
    "rawDate" TEXT NOT NULL,
    "capturedAt" TIMESTAMP(3),
    "microplasticCount" INTEGER,
    "concentrationLevel" "ConcentrationLevel",
    "pH" DOUBLE PRECISION,
    "turbidity" DOUBLE PRECISION,
    "sizeOrVolume" DOUBLE PRECISION,
    "status" "SampleStatus",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sample_pkey" PRIMARY KEY ("id")
);
