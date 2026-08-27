import { NextRequest, NextResponse } from "next/server";
import { productStore } from "@/lib/products-store";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, type } = body;

    if (!productId || !type) {
      return NextResponse.json({ error: "Missing productId or type" }, { status: 400 });
    }

    // Log event in runtime store
    const event = productStore.logEvent(productId, type);

    // Try logging in database
    try {
      if (prisma) {
        await prisma.productEvent.create({
          data: {
            productId,
            type,
          },
        }).catch(() => {});
      }
    } catch (dbErr) {
      // Database optional fallback
    }

    return NextResponse.json({ success: true, event });
  } catch (error) {
    return NextResponse.json({ error: "Failed to record event" }, { status: 500 });
  }
}
