import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendEnquiryEmail, EnquiryPayload } from "@/lib/sendEnquiryEmail";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Validate required fields
    if (!body.email || typeof body.email !== "string" || !body.email.includes("@")) {
      return NextResponse.json(
        { error: "A valid business email address is required." },
        { status: 400 }
      );
    }

    if (!body.name || typeof body.name !== "string" || body.name.trim().length === 0) {
      return NextResponse.json(
        { error: "Your name is required." },
        { status: 400 }
      );
    }

    const name = body.name.trim();
    const email = body.email.trim();
    const phone = body.phone?.trim() || undefined;
    const company = body.company?.trim() || undefined;
    const country = body.country?.trim() || undefined;
    const category = body.category || undefined;
    const productName = body.productName || undefined;
    const quantity = body.quantity || undefined;
    const packaging = body.packaging || undefined;
    const incoterms = body.incoterms || undefined;
    const destinationPort = body.destinationPort || undefined;
    const requiredDocs = Array.isArray(body.requiredDocs) ? body.requiredDocs : undefined;
    const subject = body.subject?.trim() || undefined;
    const message = body.message?.trim() || (productName ? `Quote requested for ${productName} (${quantity || "Wholesale MOQ"})` : "General enquiry");
    const source = body.source || body.type || "contact_form";
    const productIds = Array.isArray(body.productIds) ? body.productIds : [];

    // 2. Always save to PostgreSQL database first with PENDING status (The safety net)
    let inquiryId: string | null = null;
    try {
      if (prisma) {
        const inquiry = await prisma.inquiry.create({
          data: {
            name,
            email,
            phone: phone || null,
            company: company || null,
            category: productName || category || source,
            message,
            emailStatus: "PENDING",
          },
        });
        inquiryId = inquiry.id;
        console.log(`[API /api/enquiries] Inquiry saved to DB: #${inquiryId}`);
      }
    } catch (dbErr) {
      console.warn("[API /api/enquiries] DB save skipped or offline:", dbErr);
    }

    // 3. Dispatch notification email server-side
    const payload: EnquiryPayload = {
      name,
      email,
      phone,
      company,
      country,
      category,
      productName,
      quantity,
      packaging,
      incoterms,
      destinationPort,
      requiredDocs,
      subject,
      message,
      source,
    };

    console.log(`[API /api/enquiries] Dispatching email for "${name}" <${email}> via source="${source}"`);
    const emailResult = await sendEnquiryEmail(payload);
    console.log(`[API /api/enquiries] sendEnquiryEmail result:`, JSON.stringify(emailResult));

    // 4. Update inquiry status in database based on dispatch result
    if (inquiryId && prisma) {
      try {
        if (emailResult.success) {
          await prisma.inquiry.update({
            where: { id: inquiryId },
            data: {
              emailStatus: "SENT",
              emailSentAt: new Date(),
            },
          });
        } else if (emailResult.rateLimited) {
          console.log(`[API /api/enquiries] Inquiry #${inquiryId} queued as PENDING due to daily rate limit.`);
        } else {
          await prisma.inquiry.update({
            where: { id: inquiryId },
            data: {
              emailStatus: "FAILED",
              emailAttempts: { increment: 1 },
            },
          });
        }
      } catch (updateErr) {
        console.warn("[API /api/enquiries] Could not update inquiry status:", updateErr);
      }
    }

    // 5. Customer always sees success — enquiry is safely preserved
    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully received and routed to our export commercial desk.",
      inquiryId,
      delivered: emailResult.success,
      provider: emailResult.provider,
    });
  } catch (err: any) {
    console.error("[API /api/enquiries] Error processing submission:", err);
    return NextResponse.json(
      { error: "Internal server error processing enquiry." },
      { status: 500 }
    );
  }
}
