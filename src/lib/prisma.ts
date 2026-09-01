import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const prismaClientSingleton = () => {
  const connectionString = process.env.DIRECT_DATABASE_URL ?? process.env.DATABASE_URL;
  if (!connectionString) {
    console.warn("No DATABASE_URL set — Prisma client not initialized.");
    return null;
  }
  try {
    // Low connection limit and prompt 10s idle timeout to allow serverless Postgres compute to auto-suspend
    const pool = new Pool({
      connectionString,
      max: 5,
      idleTimeoutMillis: 10000, // 10s idle connection timeout for fast compute hibernation
      connectionTimeoutMillis: 5000,
    });
    const adapter = new PrismaPg(pool);
    return new PrismaClient({ adapter });
  } catch (e) {
    console.warn("Prisma Client initialization error:", e);
    return null;
  }
};

declare const globalThis: {
  prismaGlobal?: PrismaClient | null;
} & typeof global;

export const prisma =
  globalThis.prismaGlobal !== undefined
    ? globalThis.prismaGlobal
    : prismaClientSingleton();

// Maintain global singleton in all environments to prevent connection leakage
globalThis.prismaGlobal = prisma;

export default prisma;
