-- CreateTable
CREATE TABLE "Verben" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "infinitiv" TEXT NOT NULL,
    "dritte_form" TEXT NOT NULL,
    "preteritum" TEXT NOT NULL,
    "perfekt" TEXT NOT NULL,
    "ubersatz" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Verben_infinitiv_key" ON "Verben"("infinitiv");
