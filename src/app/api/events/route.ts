import { NextRequest, NextResponse } from "next/server";
import { productStore } from "@/lib/products-store";
import prisma from "@/lib/prisma";

// In-memory queue for batching analytics events to prevent waking up database on every single view/hover
interface QueuedEvent {
  productId: string;
  type: string;
  createdAt: Date;
}

const eventQueue: QueuedEvent[] = [];
let flushTimeout: NodeJS.Timeout | null = null;
const BATCH_SIZE_TRIGGER = 25; // Flush immediately if 25 events accumulate
const DEBOUNCE_FLUSH_MS = 30000; // 30s debounced flush window

async function flushEventQueue() {
  if (eventQueue.length === 0 || !prisma) return;

  // Drain current batch atomically
  const batch = eventQueue.splice(0, eventQueue.length);
  try {
    await prisma.productEvent.createMany({
      data: batch.map(e => ({
        productId: e.productId,
        type: e.type as any,
        createdAt: e.createdAt,
      })),
      skipDuplicates: true,
    });
  } catch (err) {
    // Graceful offline fallback
    console.warn("Prisma event batch insert fallback:", err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, type } = body;

    if (!productId || !type) {
      return NextResponse.json({ error: "Missing productId or type" }, { status: 400 });
    }

    // 1. Log event immediately in runtime store (0ms, 0 DB queries)
    const event = productStore.logEvent(productId, type);

    // 2. Enqueue for debounced bulk database insertion
    if (prisma) {
      eventQueue.push({
        productId,
        type,
        createdAt: new Date(),
      });

      if (eventQueue.length >= BATCH_SIZE_TRIGGER) {
        if (flushTimeout) clearTimeout(flushTimeout);
        flushTimeout = null;
        // Non-blocking flush in background
        flushEventQueue().catch(() => {});
      } else if (!flushTimeout) {
        flushTimeout = setTimeout(() => {
          flushTimeout = null;
          flushEventQueue().catch(() => {});
        }, DEBOUNCE_FLUSH_MS);
      }
    }

    return NextResponse.json({ success: true, event });
  } catch (error) {
    return NextResponse.json({ error: "Failed to record event" }, { status: 500 });
  }
}
