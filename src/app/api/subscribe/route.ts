import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    let email = "";
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      email = body.email;
    } else {
      const formData = await request.formData();
      email = formData.get("email") as string;
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // In a real deployment, this would be written to a subscriber database or Mailchimp/SendGrid
    return NextResponse.json({
      success: true,
      message: `Subscribed successfully: ${email}`,
    });
  } catch (err) {
    return NextResponse.json({ error: "Failed to process subscription" }, { status: 500 });
  }
}
