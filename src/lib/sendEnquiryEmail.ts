import { Resend } from "resend";
import nodemailer from "nodemailer";

export interface EnquiryPayload {
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
  message: string;
  source: "product_page" | "contact_form" | "chatbot_escalation" | "pdp_modal" | "quote_page" | "CONTACT" | "QUOTE" | "CHATBOT_ESCALATION" | "PDP_MODAL";
}

export interface SendEmailResult {
  success: boolean;
  messageId?: string;
  provider?: "RESEND" | "SMTP" | "SIMULATED";
  rateLimited?: boolean;
  error?: any;
}

export function getRecipientEmail(): string {
  return (
    process.env.ENQUIRY_NOTIFICATION_EMAIL ||
    process.env.ENQUIRY_RECIPIENT_EMAIL ||
    "pranavishwars@gmail.com"
  );
}

export function getFromEmail(): string {
  if (process.env.RESEND_FROM_EMAIL) {
    return process.env.RESEND_FROM_EMAIL;
  }
  // Default to onboarding@resend.dev until custom domain is verified in Resend dashboard
  return "India Essential Oils <onboarding@resend.dev>";
}

/**
 * Builds clean HTML email layout for B2B Quotes and Inquiries.
 */
function buildEmailHtml(data: EnquiryPayload, recipient: string, refId: string): string {
  const isQuote =
    data.source === "product_page" ||
    data.source === "pdp_modal" ||
    data.source === "quote_page" ||
    data.source === "QUOTE" ||
    data.source === "PDP_MODAL" ||
    Boolean(data.productName || data.quantity);

  const title = isQuote
    ? "New B2B Wholesale Quote Request"
    : data.source === "chatbot_escalation" || data.source === "CHATBOT_ESCALATION"
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
        <tr>
          <td class="label">Inquiry Source</td>
          <td class="value"><span class="badge">${data.source}</span></td>
        </tr>
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
      <div class="section-title">Message / Requirements</div>
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
      Routed directly to: <strong>${recipient}</strong>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Builds plaintext version of the email.
 */
function buildEmailText(data: EnquiryPayload, recipient: string, refId: string, subject: string): string {
  return `
=== ${subject} ===
Reference: #${refId}
Timestamp: ${new Date().toISOString()}

CLIENT DETAILS:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone || "N/A"}
- Company: ${data.company || "N/A"}
- Country: ${data.country || "N/A"}
- Source: ${data.source}

COMMERCIAL PARAMETERS:
- Product: ${data.productName || "N/A"}
- Category: ${data.category || "N/A"}
- Quantity: ${data.quantity || "N/A"}
- Packaging: ${data.packaging || "N/A"}
- Incoterms: ${data.incoterms || "N/A"}
- Destination: ${data.destinationPort || "N/A"}
- Required Docs: ${data.requiredDocs?.join(", ") || "Standard CoA"}

MESSAGE:
${data.message || "N/A"}

---------------------------------------------------
Destination: ${recipient}
Reply-To: ${data.email}
  `.trim();
}

/** Validates that a string is a properly formatted email address. */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

/**
 * Sends an enquiry notification email using Resend (primary) or Gmail SMTP (fallback).
 */
export async function sendEnquiryEmail(data: EnquiryPayload): Promise<SendEmailResult> {
  const recipient = getRecipientEmail();
  const fromAddress = getFromEmail();
  const refId = "IEO-" + Math.floor(100000 + Math.random() * 900000);

  const subjectLine = data.productName
    ? `[B2B Quote Request] ${data.productName} - ${data.company || data.name}`
    : data.source === "chatbot_escalation" || data.source === "CHATBOT_ESCALATION"
    ? `[Chatbot Inquiry] ${data.name} (${data.email})`
    : `[Contact Inquiry] ${data.subject || "General Inquiry"} - ${data.name}`;

  const htmlBody = buildEmailHtml(data, recipient, refId);
  const textBody = buildEmailText(data, recipient, refId, subjectLine);

  // 1. Primary: Resend API
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey && resendApiKey.trim().length > 0 && resendApiKey !== "re_xxxxxxxxxxxxxxxxxxxxxxxxxx") {
    try {
      const resend = new Resend(resendApiKey.trim());
      const result = await resend.emails.send({
        from: fromAddress,
        to: recipient,
        ...(isValidEmail(data.email) ? { replyTo: data.email } : {}),
        subject: subjectLine,
        html: htmlBody,
        text: textBody,
      });

      if (result.error) {
        const errorMsg = result.error.message || JSON.stringify(result.error);
        const isRateLimit =
          result.error.name === "rate_limit_exceeded" ||
          errorMsg.toLowerCase().includes("rate limit") ||
          errorMsg.toLowerCase().includes("daily quota");

        console.warn(`[sendEnquiryEmail] Resend API error (rateLimit=${isRateLimit}):`, errorMsg);
        return {
          success: false,
          rateLimited: isRateLimit,
          error: errorMsg,
          provider: "RESEND",
        };
      }

      console.log(`[sendEnquiryEmail] Dispatched via Resend to ${recipient} (ID: ${result.data?.id})`);
      return {
        success: true,
        messageId: result.data?.id,
        provider: "RESEND",
      };
    } catch (err: any) {
      const isRateLimit = err?.statusCode === 429 || err?.message?.toLowerCase().includes("rate limit");
      console.error("[sendEnquiryEmail] Resend exception:", err);

      if (isRateLimit) {
        return {
          success: false,
          rateLimited: true,
          error: err.message,
          provider: "RESEND",
        };
      }
      // If Resend failed with non-rate-limit error, allow fallback to SMTP below
    }
  }

  // 2. Secondary Fallback: Gmail / Nodemailer SMTP
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
  const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;

  if (smtpUser && smtpPass && smtpPass.trim().length > 0) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const info = await transporter.sendMail({
        from: process.env.SMTP_FROM || `"India Essential Oils Commercial Desk" <${smtpUser}>`,
        to: recipient,
        replyTo: data.email,
        subject: subjectLine,
        text: textBody,
        html: htmlBody,
      });

      console.log(`[sendEnquiryEmail] Dispatched via SMTP to ${recipient} (ID: ${info.messageId})`);
      return {
        success: true,
        messageId: info.messageId,
        provider: "SMTP",
      };
    } catch (smtpErr: any) {
      console.error("[sendEnquiryEmail] SMTP dispatch failed:", smtpErr);
      return {
        success: false,
        error: smtpErr.message,
        provider: "SMTP",
      };
    }
  }

  // 3. If neither credentials are set, log to console safely
  console.log(`[sendEnquiryEmail] [SIMULATED] Email to ${recipient} would contain:\nSubject: ${subjectLine}\nFrom: ${data.name} <${data.email}>`);
  return {
    success: true,
    provider: "SIMULATED",
    messageId: `sim_${refId}`,
  };
}
