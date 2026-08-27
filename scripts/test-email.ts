import dotenv from "dotenv";
dotenv.config();

import { sendEnquiryEmail, EnquiryPayload } from "../src/lib/email-service";

async function main() {
  console.log("==================================================");
  console.log("  Testing Email Dispatch to pranavishwars@gmail.com ");
  console.log("==================================================");
  console.log(`SMTP_HOST: ${process.env.SMTP_HOST || "Not set"}`);
  console.log(`SMTP_USER: ${process.env.SMTP_USER || "Not set"}`);
  console.log(`SMTP_PASS: ${process.env.SMTP_PASS ? "[Configured]" : "[Empty / Missing]"}`);
  console.log(`RECIPIENT: ${process.env.ENQUIRY_RECIPIENT_EMAIL || "pranavishwars@gmail.com"}`);
  console.log("--------------------------------------------------");

  const samplePayload: EnquiryPayload = {
    type: "QUOTE",
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

  console.log("Dispatching test payload...");
  const result = await sendEnquiryEmail(samplePayload);

  console.log("\nDispatch Result:");
  console.log(JSON.stringify(result, null, 2));

  if (result.simulated) {
    console.log("\n⚠️ NOTE: Email was logged locally because SMTP_PASS is not yet provided in .env.");
    console.log("To send a live email to your inbox: add your 16-character Gmail App Password into .env (SMTP_PASS=xxxx xxxx xxxx xxxx).");
  } else if (result.success) {
    console.log(`\n✅ SUCCESS: Live email physically delivered to ${result.recipient}! Message ID: ${result.messageId}`);
  } else {
    console.log(`\n❌ ERROR: SMTP dispatch failed: ${result.error}`);
  }
}

main().catch(console.error);
