/*
  Warnings:

  - Added the required column `cpf` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dateOfBirth" DATE NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
