import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

function getConnectionString(): string | null {
  const directUrl = process.env.DIRECT_DATABASE_URL;
  if (directUrl && (directUrl.startsWith("postgres://") || directUrl.startsWith("postgresql://"))) {
    return directUrl;
  }

  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) return null;

  if (dbUrl.startsWith("postgres://") || dbUrl.startsWith("postgresql://")) {
    return dbUrl;
  }

  if (dbUrl.startsWith("prisma+postgres://")) {
    try {
      const url = new URL(dbUrl);
      const apiKey = url.searchParams.get("api_key");
      if (apiKey) {
        const decoded = JSON.parse(Buffer.from(apiKey, "base64").toString());
        if (decoded.databaseUrl) {
          return decoded.databaseUrl;
        }
      }
    } catch {
      // Fallback
    }
  }

  return dbUrl;
}

const prismaClientSingleton = () => {
  try {
    const connectionString = getConnectionString();
    if (!connectionString) {
      return null;
    }
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);
    return new PrismaClient({ adapter });
  } catch (e) {
    console.warn("Prisma Client initialization notice:", e);
    return null;
  }
};

declare const globalThis: {
  prismaGlobal?: PrismaClient | null;
} & typeof global;

export const prisma = globalThis.prismaGlobal !== undefined ? globalThis.prismaGlobal : prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}

export default prisma;
