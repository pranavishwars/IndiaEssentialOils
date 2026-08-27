import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmail, EnquiryPayload } from "@/lib/email-service";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.email || typeof body.email !== "string" || !body.email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!body.name || typeof body.name !== "string" || body.name.trim().length === 0) {
      return NextResponse.json(
        { error: "Your name is required." },
        { status: 400 }
      );
    }

    const payload: EnquiryPayload = {
      type: body.type || "CONTACT",
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim() || undefined,
      company: body.company?.trim() || undefined,
      country: body.country?.trim() || undefined,
      category: body.category || undefined,
      productName: body.productName || undefined,
      quantity: body.quantity || undefined,
      packaging: body.packaging || undefined,
      incoterms: body.incoterms || undefined,
      destinationPort: body.destinationPort || undefined,
      requiredDocs: Array.isArray(body.requiredDocs) ? body.requiredDocs : undefined,
      subject: body.subject?.trim() || undefined,
      message: body.message?.trim() || undefined,
    };

    const result = await sendEnquiryEmail(payload);

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been received and routed to our export commercial desk.",
      result,
    });
  } catch (err: any) {
    console.error("[API /api/enquiry] Error processing submission:", err);
    return NextResponse.json(
      { error: "Internal server error processing enquiry." },
      { status: 500 }
    );
  }
}
