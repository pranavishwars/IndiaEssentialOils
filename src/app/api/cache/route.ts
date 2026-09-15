import { NextResponse } from "next/server";
import { getCacheDiagnostics, clearEntireCache } from "@/lib/cache";



export async function GET() {
  const stats = getCacheDiagnostics();
  return NextResponse.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    cache: stats,
    hitRatio: stats.hits + stats.misses > 0
      ? `${((stats.hits / (stats.hits + stats.misses)) * 100).toFixed(2)}%`
      : "0%",
  });
}

export async function POST() {
  await clearEntireCache();
  return NextResponse.json({
    success: true,
    message: "Cache flushed completely across all memory and distributed layers.",
    timestamp: new Date().toISOString(),
  });
}
