import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendEnquiryEmail } from "@/lib/sendEnquiryEmail";

export async function GET() {
  try {
    if (!prisma) {
      return NextResponse.json({ error: "Database not connected" }, { status: 503 });
    }

    // 1. Fetch pending inquiries (oldest first, capped at 90 to prevent blowing daily limits)
    const pendingInquiries = await prisma.inquiry.findMany({
      where: { emailStatus: "PENDING" },
      orderBy: { createdAt: "asc" },
      take: 90,
    });

    if (pendingInquiries.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No pending inquiries in queue.",
        processed: 0,
      });
    }

    let sentCount = 0;
    let failedCount = 0;
    let rateLimited = false;

    // 2. Process queue items sequentially
    for (const inquiry of pendingInquiries) {
      const result = await sendEnquiryEmail({
        name: inquiry.name,
        email: inquiry.email,
        phone: inquiry.phone ?? undefined,
        company: inquiry.company ?? undefined,
        country: inquiry.country ?? undefined,
        category: inquiry.category ?? undefined,
        message: inquiry.message,
        source: "contact_form",
      });

      if (result.success) {
        sentCount++;
        await prisma.inquiry.update({
          where: { id: inquiry.id },
          data: {
            emailStatus: "SENT",
            emailSentAt: new Date(),
          },
        });
      } else if (result.rateLimited) {
        // Daily rate limit still reached — stop this run, leave remaining items as PENDING
        rateLimited = true;
        console.warn("[Cron send-pending-enquiries] Rate limit reached. Halting batch run.");
        break;
      } else {
        failedCount++;
        await prisma.inquiry.update({
          where: { id: inquiry.id },
          data: {
            emailStatus: (inquiry.emailAttempts ?? 0) >= 3 ? "FAILED" : "PENDING",
            emailAttempts: { increment: 1 },
          },
        });
      }
    }

    return NextResponse.json({
      success: true,
      processed: pendingInquiries.length,
      sent: sentCount,
      failed: failedCount,
      rateLimited,
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error("[Cron send-pending-enquiries] Exception:", err);
    return NextResponse.json(
      { error: "Internal server error processing queue", details: err.message },
      { status: 500 }
    );
  }
}
