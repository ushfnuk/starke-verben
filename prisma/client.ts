import { PrismaClient } from '@/app/generated/prisma/client';
import { PrismaBetterSQLite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSQLite3({
  url: "file:public/verben.db"
});

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
