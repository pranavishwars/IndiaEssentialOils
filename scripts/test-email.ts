import "dotenv/config";
import { sendEnquiryEmail, EnquiryPayload } from "../src/lib/sendEnquiryEmail";
import prisma from "../src/lib/prisma";

async function main() {
  console.log("==================================================");
  console.log("  Testing Email Dispatch to rahul@motherherbs.com ");
  console.log("==================================================");
  console.log(`RESEND_API_KEY: ${process.env.RESEND_API_KEY ? "[Configured]" : "[Not set / Empty]"}`);
  console.log(`RESEND_FROM_EMAIL: ${process.env.RESEND_FROM_EMAIL || "India Essential Oils <onboarding@resend.dev>"}`);
  console.log(`SMTP_HOST: ${process.env.SMTP_HOST || "Not set"}`);
  console.log(`SMTP_USER: ${process.env.SMTP_USER || "Not set"}`);
  console.log(`SMTP_PASS: ${process.env.SMTP_PASS ? "[Configured]" : "[Empty / Missing]"}`);
  console.log(`NOTIFICATION_EMAIL: ${process.env.ENQUIRY_NOTIFICATION_EMAIL || process.env.ENQUIRY_RECIPIENT_EMAIL || "rahul@motherherbs.com"}`);
  console.log("--------------------------------------------------");

  const samplePayload: EnquiryPayload = {
    source: "quote_page",
    name: "Alex Vance (Procurement Lead)",
    email: "procurement@lumina-cosmetics.com",
    phone: "+1 (415) 890-2345",
    company: "Lumina Cosmetics Europe",
    country: "France",
    productName: "Lavender Essential Oil (Lavandula angustifolia)",
    category: "ESSENTIAL_OIL",
    quantity: "200 kg (Full Export Steel Drum)",
    packaging: "UN Epoxy-Lined Steel Drums (200kg)",
    incoterms: "CIF Le Havre, France",
    destinationPort: "Port of Le Havre",
    requiredDocs: ["Certificate of Analysis (CoA)", "GC-MS Chromatography Report", "IFRA 51st Amendment Dossier"],
    message: "Requesting batch CoA and firm CIF Le Havre quotation for 200kg prompt delivery.",
  };

  // 1. Test database save
  console.log("1. Testing Database persistence...");
  let dbInquiry = null;
  if (prisma) {
    try {
      dbInquiry = await prisma.inquiry.create({
        data: {
          name: samplePayload.name,
          email: samplePayload.email,
          phone: samplePayload.phone,
          company: samplePayload.company,
          country: samplePayload.country,
          category: samplePayload.productName,
          message: samplePayload.message,
          emailStatus: "PENDING",
        },
      });
      console.log(`   ✅ Successfully created Inquiry #${dbInquiry.id} with status PENDING`);
    } catch (err: any) {
      console.warn(`   ⚠️ DB save warning:`, err.message);
    }
  }

  // 2. Test email dispatch
  console.log("\n2. Dispatching email payload via sendEnquiryEmail...");
  const result = await sendEnquiryEmail(samplePayload);

  console.log("\nDispatch Result:");
  console.log(JSON.stringify(result, null, 2));

  // 3. Update DB status if created
  if (dbInquiry && prisma) {
    try {
      const updated = await prisma.inquiry.update({
        where: { id: dbInquiry.id },
        data: {
          emailStatus: result.success ? "SENT" : "FAILED",
          emailSentAt: result.success ? new Date() : undefined,
        },
      });
      console.log(`\n3. Database Inquiry status updated to: ${updated.emailStatus}`);
    } catch (err: any) {
      console.warn("   ⚠️ DB update warning:", err.message);
    }
  }

  if (result.provider === "SIMULATED") {
    console.log("\n⚠️ NOTE: Email was simulated because neither RESEND_API_KEY nor SMTP_PASS is configured yet in .env.");
    console.log("To send live emails: add your RESEND_API_KEY from https://resend.com (or Gmail App Password) in .env.");
  } else if (result.success) {
    console.log(`\n✅ SUCCESS: Live email dispatched via ${result.provider}! Message ID: ${result.messageId}`);
  } else {
    console.log(`\n❌ ERROR: Dispatch failed (rateLimited=${result.rateLimited}): ${result.error}`);
  }
}

main().catch(console.error);
