/*
  Warnings:

  - You are about to drop the `Verben` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Verben";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "verben" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "infinitiv" TEXT NOT NULL,
    "dritte_form" TEXT NOT NULL,
    "preteritum" TEXT NOT NULL,
    "perfekt" TEXT NOT NULL,
    "ubersatz" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "verben_infinitiv_key" ON "verben"("infinitiv");
