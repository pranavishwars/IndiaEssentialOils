import { sendEnquiryEmail as sendEmailCore, EnquiryPayload, SendEmailResult, getRecipientEmail } from "./sendEnquiryEmail";
import prisma from "@/lib/prisma";

export type { EnquiryPayload, SendEmailResult };

export interface EmailSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
  simulated?: boolean;
  deliveredVia?: "RESEND" | "SMTP" | "SIMULATED";
  recipient: string;
}

export function getEnquiryRecipientEmail(): string {
  return getRecipientEmail();
}

/**
 * Dispatches an enquiry email and saves to DB.
 */
export async function sendEnquiryEmail(payload: EnquiryPayload): Promise<EmailSendResult> {
  const recipient = getRecipientEmail();

  // 1. Save to database as PENDING first
  let inquiryId: string | undefined;
  try {
    if (prisma) {
      const inquiry = await prisma.inquiry.create({
        data: {
          name: payload.name,
          email: payload.email,
          phone: payload.phone || null,
          company: payload.company || null,
          country: payload.country || null,
          category: payload.productName || payload.category || payload.source,
          message: payload.message || "Enquiry Submission",
          emailStatus: "PENDING",
        },
      });
      inquiryId = inquiry.id;
    }
  } catch (dbErr) {
    console.warn("[email-service] DB save skipped or offline:", dbErr);
  }

  // 2. Dispatch email
  const result = await sendEmailCore(payload);

  // 3. Update DB status
  if (inquiryId && prisma) {
    try {
      if (result.success) {
        await prisma.inquiry.update({
          where: { id: inquiryId },
          data: {
            emailStatus: "SENT",
            emailSentAt: new Date(),
          },
        });
      } else if (!result.rateLimited) {
        await prisma.inquiry.update({
          where: { id: inquiryId },
          data: {
            emailStatus: "FAILED",
            emailAttempts: { increment: 1 },
          },
        });
      }
      // If rate limited, remains PENDING for queue retry
    } catch (updateErr) {
      console.warn("[email-service] Failed to update inquiry status:", updateErr);
    }
  }

  return {
    success: result.success,
    messageId: result.messageId,
    error: result.error ? String(result.error) : undefined,
    simulated: result.provider === "SIMULATED",
    deliveredVia: result.provider as any,
    recipient,
  };
}
