import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "catalog",
      "India-Essential-Oils-Botanical-Catalog-September-2026.pdf"
    );

    if (!fs.existsSync(filePath)) {
      console.error("[API /api/catalog/download] Catalog PDF file not found at:", filePath);
      return NextResponse.json({ error: "Catalog PDF file not found" }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="India-Essential-Oils-Botanical-Catalog-September-2026.pdf"',
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error: any) {
    console.error("[API /api/catalog/download] Error serving catalog PDF:", error);
    return NextResponse.json({ error: "Failed to download catalog" }, { status: 500 });
  }
}
