/*
  Warnings:

  - You are about to drop the column `ubersatz` on the `verben` table. All the data in the column will be lost.
  - Added the required column `ubersetzung` to the `verben` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_verben" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "infinitiv" TEXT NOT NULL,
    "dritte_form" TEXT NOT NULL,
    "preteritum" TEXT NOT NULL,
    "perfekt" TEXT NOT NULL,
    "ubersetzung" TEXT NOT NULL
);
INSERT INTO "new_verben" ("dritte_form", "id", "infinitiv", "perfekt", "preteritum") SELECT "dritte_form", "id", "infinitiv", "perfekt", "preteritum" FROM "verben";
DROP TABLE "verben";
ALTER TABLE "new_verben" RENAME TO "verben";
CREATE UNIQUE INDEX "verben_infinitiv_key" ON "verben"("infinitiv");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
