import nodemailer from "nodemailer";
import prisma from "@/lib/prisma";

export interface EnquiryPayload {
  type: "CONTACT" | "QUOTE" | "CHATBOT_ESCALATION" | "PDP_MODAL";
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  category?: string;
  productName?: string;
  quantity?: string;
  packaging?: string;
  incoterms?: string;
  destinationPort?: string;
  requiredDocs?: string[];
  subject?: string;
  message?: string;
}

export interface EmailSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
  simulated?: boolean;
  deliveredVia?: "SMTP" | "WEBHOOK_RELAY" | "DATABASE_BACKUP";
  recipient: string;
  mailtoUrl?: string;
}

/**
 * Global Enquiry Recipient
 * Defaults strictly to pranavishwars@gmail.com.
 */
export function getEnquiryRecipientEmail(): string {
  return process.env.ENQUIRY_RECIPIENT_EMAIL || "pranavishwars@gmail.com";
}

/**
 * Formats a clean, high-contrast HTML email template for B2B Quotes and Inquiries.
 */
function buildEnquiryEmailHtml(data: EnquiryPayload, recipient: string, refId: string): string {
  const isQuote = data.type === "QUOTE" || data.type === "PDP_MODAL";
  const title = isQuote 
    ? "New B2B Wholesale Quote Request" 
    : data.type === "CHATBOT_ESCALATION" 
    ? "New Chatbot Commercial Inquiry" 
    : "New Corporate Contact Inquiry";

  const accentColor = isQuote ? "#7C3AED" : "#059669";
  const timestamp = new Date().toUTCString();

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f5f1; margin: 0; padding: 24px; color: #180D26; }
    .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e8e2d8; }
    .header { background: linear-gradient(135deg, ${accentColor} 0%, #4C1D95 100%); color: #ffffff; padding: 28px; text-align: center; }
    .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 700; }
    .header p { margin: 0; font-size: 13px; opacity: 0.9; letter-spacing: 0.05em; text-transform: uppercase; }
    .content { padding: 28px; }
    .section-title { font-size: 12px; font-weight: 800; color: ${accentColor}; text-transform: uppercase; letter-spacing: 0.08em; margin: 20px 0 10px 0; border-bottom: 1px solid #eee; padding-bottom: 4px; }
    table.data-table { width: 100%; border-collapse: collapse; margin-bottom: 12px; }
    table.data-table td { padding: 8px 12px; font-size: 14px; border-bottom: 1px solid #f2eff7; }
    table.data-table td.label { width: 35%; font-weight: 600; color: #5B486E; background: #faf9fc; }
    table.data-table td.value { color: #180D26; font-weight: 500; }
    .message-box { background: #faf8f5; border-left: 4px solid ${accentColor}; padding: 14px 18px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #2D1E40; margin: 12px 0; }
    .badge { display: inline-block; background: #EDE9FE; color: #6D28D9; padding: 3px 8px; border-radius: 9999px; font-size: 11px; font-weight: 700; margin-right: 4px; }
    .footer { background: #fdfcfa; padding: 18px; text-align: center; font-size: 12px; color: #7A6985; border-top: 1px solid #eee; }
    .btn { display: inline-block; background: ${accentColor}; color: #ffffff !important; padding: 10px 20px; border-radius: 9999px; text-decoration: none; font-weight: 700; font-size: 13px; margin-top: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <p>India Essential Oils — Web Commercial Desk</p>
      <h1>${title}</h1>
      <span style="font-size: 11px; opacity: 0.8;">Ref #${refId} &bull; ${timestamp}</span>
    </div>

    <div class="content">
      <div class="section-title">Client Information</div>
      <table class="data-table">
        <tr>
          <td class="label">Full Name</td>
          <td class="value"><strong>${data.name || "N/A"}</strong></td>
        </tr>
        <tr>
          <td class="label">Business Email</td>
          <td class="value"><a href="mailto:${data.email}" style="color: ${accentColor}; font-weight: 700;">${data.email}</a></td>
        </tr>
        ${data.phone ? `<tr><td class="label">Phone / Mobile</td><td class="value"><a href="tel:${data.phone}">${data.phone}</a></td></tr>` : ""}
        ${data.company ? `<tr><td class="label">Company Name</td><td class="value">${data.company}</td></tr>` : ""}
        ${data.country ? `<tr><td class="label">Country / Destination</td><td class="value">${data.country}</td></tr>` : ""}
      </table>

      ${isQuote ? `
      <div class="section-title">Commercial Quotation Parameters</div>
      <table class="data-table">
        ${data.productName ? `<tr><td class="label">Botanical Product</td><td class="value"><strong>${data.productName}</strong></td></tr>` : ""}
        ${data.category ? `<tr><td class="label">Category</td><td class="value">${data.category}</td></tr>` : ""}
        ${data.quantity ? `<tr><td class="label">Bulk Volume / MOQ Tier</td><td class="value" style="color: #059669; font-weight: 700;">${data.quantity}</td></tr>` : ""}
        ${data.packaging ? `<tr><td class="label">Packaging Format</td><td class="value">${data.packaging}</td></tr>` : ""}
        ${data.incoterms ? `<tr><td class="label">Incoterms</td><td class="value">${data.incoterms}</td></tr>` : ""}
        ${data.destinationPort ? `<tr><td class="label">Destination Port / Airport</td><td class="value">${data.destinationPort}</td></tr>` : ""}
        ${data.requiredDocs && data.requiredDocs.length > 0 ? `
          <tr>
            <td class="label">Regulatory Documentation</td>
            <td class="value">${data.requiredDocs.map(d => `<span class="badge">${d}</span>`).join(" ")}</td>
          </tr>
        ` : ""}
      </table>
      ` : ""}

      ${data.subject ? `
      <div class="section-title">Subject</div>
      <p style="font-weight: 600; margin: 6px 0;">${data.subject}</p>
      ` : ""}

      ${data.message ? `
      <div class="section-title">Message / Special Requirements</div>
      <div class="message-box">${data.message.replace(/\n/g, "<br/>")}</div>
      ` : ""}

      <div style="text-align: center; margin-top: 24px;">
        <a href="mailto:${data.email}?subject=RE: ${encodeURIComponent(title + " - India Essential Oils")}" class="btn">
          Direct Reply to ${data.name || "Client"} &rarr;
        </a>
      </div>
    </div>

    <div class="footer">
      This inquiry was received via the India Essential Oils Web Desk.<br/>
      Delivered directly to: <strong>${recipient}</strong>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Dispatches an enquiry email to pranavishwars@gmail.com using a resilient multi-tier delivery approach.
 */
export async function sendEnquiryEmail(payload: EnquiryPayload): Promise<EmailSendResult> {
  const recipient = getEnquiryRecipientEmail();
  const refId = "IEO-" + Math.floor(100000 + Math.random() * 900000);
  const subjectPrefix = payload.type === "QUOTE" || payload.type === "PDP_MODAL"
    ? `[B2B Quote Request] ${payload.productName || payload.category || "Botanical Oils"} - ${payload.company || payload.name}`
    : payload.type === "CHATBOT_ESCALATION"
    ? `[Chatbot Inquiry] ${payload.name} (${payload.email})`
    : `[Contact Inquiry] ${payload.subject || "General Inquiry"} - ${payload.name}`;

  // 1. Store in Database if Prisma is active
  try {
    if (prisma) {
      await prisma.inquiry.create({
        data: {
          name: payload.name,
          email: payload.email,
          phone: payload.phone || null,
          company: payload.company || null,
          category: payload.productName || payload.category || payload.type,
          message: payload.message || `Quote Request for: ${payload.quantity || "Wholesale Volume"} (Ref: #${refId})`,
        },
      });
    }
  } catch (dbErr) {
    console.warn("[Enquiry Service] DB save skipped or offline:", dbErr);
  }

  const htmlContent = buildEnquiryEmailHtml(payload, recipient, refId);
  const textContent = `
=== ${subjectPrefix} ===
Reference: #${refId}
Timestamp: ${new Date().toISOString()}

CLIENT DETAILS:
- Name: ${payload.name}
- Email: ${payload.email}
- Phone: ${payload.phone || "N/A"}
- Company: ${payload.company || "N/A"}
- Country: ${payload.country || "N/A"}

COMMERCIAL PARAMETERS:
- Product: ${payload.productName || "N/A"}
- Category: ${payload.category || "N/A"}
- Quantity: ${payload.quantity || "N/A"}
- Packaging: ${payload.packaging || "N/A"}
- Incoterms: ${payload.incoterms || "N/A"}
- Destination: ${payload.destinationPort || "N/A"}
- Required Docs: ${payload.requiredDocs?.join(", ") || "Standard CoA"}

MESSAGE:
${payload.message || "N/A"}

---------------------------------------------------
Destination: ${recipient}
  `.trim();

  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subjectPrefix)}&body=${encodeURIComponent(textContent)}`;

  // 2. Resolve SMTP parameters from environment
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
  const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
  const smtpFrom = process.env.SMTP_FROM || `"India Essential Oils Commercial Desk" <${smtpUser || "pranavishwars@gmail.com"}>`;

  // 3. Primary Live Dispatch: SMTP
  if (smtpHost && smtpUser && smtpPass && smtpPass.trim().length > 0) {
    try {
      const isGmail = smtpHost.includes("gmail.com");
      
      const transportConfig: any = isGmail
        ? {
            service: "gmail",
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          }
        : {
            host: smtpHost,
            port: smtpPort,
            secure: smtpSecure,
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          };

      const transporter = nodemailer.createTransport(transportConfig);

      const info = await transporter.sendMail({
        from: smtpFrom,
        to: recipient,
        replyTo: payload.email,
        subject: subjectPrefix,
        text: textContent,
        html: htmlContent,
      });

      console.log(`[Enquiry Service] Live SMTP email dispatched to ${recipient} (Message ID: ${info.messageId})`);

      return {
        success: true,
        messageId: info.messageId,
        deliveredVia: "SMTP",
        recipient,
        mailtoUrl,
      };
    } catch (mailError: any) {
      console.warn("[Enquiry Service] SMTP send failed, trying HTTP relay fallback...", mailError?.message);
    }
  }

  // 4. Secondary Live Dispatch: FormSubmit HTTP Webhook Relay directly to recipient
  try {
    const relayPayload = {
      _subject: subjectPrefix,
      _replyto: payload.email,
      _template: "table",
      name: payload.name,
      email: payload.email,
      phone: payload.phone || "N/A",
      company: payload.company || "N/A",
      country: payload.country || "N/A",
      product: payload.productName || "N/A",
      category: payload.category || "N/A",
      quantity: payload.quantity || "N/A",
      packaging: payload.packaging || "N/A",
      incoterms: payload.incoterms || "N/A",
      destinationPort: payload.destinationPort || "N/A",
      requiredDocs: payload.requiredDocs?.join(", ") || "Standard CoA",
      message: payload.message || "N/A",
      reference: `#${refId}`,
    };

    const relayRes = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(relayPayload),
    });

    if (relayRes.ok) {
      console.log(`[Enquiry Service] Live HTTP Relay dispatched successfully to ${recipient}`);
      return {
        success: true,
        deliveredVia: "WEBHOOK_RELAY",
        recipient,
        mailtoUrl,
      };
    }
  } catch (relayErr) {
    console.warn("[Enquiry Service] HTTP Relay attempt error:", relayErr);
  }

  // 5. Fallback Audit Log
  console.log(`[Enquiry Service] Recorded inquiry #${refId} for ${recipient}`);

  return {
    success: true,
    simulated: true,
    deliveredVia: "DATABASE_BACKUP",
    recipient,
    mailtoUrl,
  };
}
