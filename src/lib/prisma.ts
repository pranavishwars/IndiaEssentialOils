import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const prismaClientSingleton = () => {
  // Always prioritize the pooled connection endpoint (-pooler / PgBouncer in transaction mode)
  // for runtime queries to minimize connection overhead on Neon. DIRECT_DATABASE_URL is reserved for migrations.
  const connectionString = process.env.DATABASE_URL ?? process.env.DIRECT_DATABASE_URL;
  if (!connectionString) {
    console.warn("No DATABASE_URL set — Prisma client not initialized.");
    return null;
  }
  try {
    // Conservative connection limit (max: 5) and prompt 8s idle timeout to allow serverless Postgres compute to auto-suspend
    const pool = new Pool({
      connectionString,
      max: 5,
      idleTimeoutMillis: 8000, // 8s idle connection timeout allows rapid compute scale-to-zero
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
