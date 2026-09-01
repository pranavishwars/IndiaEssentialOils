# Enquiry Email Notifications — Implementation Prompt

Paste this entire document to your coding AI as-is. It gives exact technical steps, not just a goal — most failed attempts at "send an email on form submit" fail because the instruction given was too vague (just "send an email to X") without specifying *how* the send actually happens server-side, which service to use, or where credentials live. This document removes that ambiguity.

**Goal:** every enquiry submitted anywhere on the site (the Phase 5 product-page "Enquire Now" / quote request form, the general contact form, and any chatbot escalation from Phase 8 where the user chooses to send their question to the team) must trigger a real email sent to **nitya.agarwal005@gmail.com**, containing the enquiry details.

---

## 1. Why "just send an email" usually fails — read this first

A web form **cannot send an email directly from the browser.** Email sending must happen **server-side**, using a real email-sending service with an API key — never by having client-side JavaScript try to open a mail client or hit an SMTP server directly (browsers can't speak SMTP, and exposing SMTP/API credentials in frontend code is a serious security leak). If a previous attempt didn't work, it's almost certainly one of these:
- The send logic was placed in a client component instead of a server-side route/action.
- No real email-sending service was actually connected — only a `console.log` or a TODO was left in place of the real API call.
- An API key/credential was needed but never obtained or never set as an environment variable.
- The email was sent via a personal Gmail account without an **App Password**, which Gmail blocks by default for security.
- The request succeeded but the email landed in spam and was never checked there.

Follow the steps below exactly, in order, and test after each one — don't write all the code first and test at the end.

---

## 2. Choose the email-sending service: Resend (recommended)

Use **[Resend](https://resend.com/)** — it's built specifically for sending transactional emails from web apps, has a generous free tier (enough for enquiry-volume traffic on a site like this), a simple API, and an official SDK that works cleanly with Next.js server-side code. This is the recommended default; do not substitute a different service unless there's a specific reason to.

*(Alternative if Resend can't be used for any reason: **Nodemailer with Gmail SMTP + a Gmail App Password** — instructions included in Section 7 as a fallback, but Resend is simpler and more reliable for this use case and should be tried first.)*

### 2.1 Account setup steps
1. Go to [resend.com](https://resend.com/) and create a free account.
2. In the Resend dashboard, go to **API Keys** → create a new API key → copy it immediately (it's only shown once).
3. Under **Domains**, you have two options:
   - **Fastest for testing:** use Resend's default sending domain (`onboarding@resend.dev`) — this works immediately with no setup, but emails sent from it may be more likely to land in spam and are meant for testing/low volume, not long-term production use.
   - **Correct for production:** add and verify your own domain (e.g. `indiaessentialoils.com`) in the Resend dashboard by adding the DNS records (TXT/CNAME) Resend provides to your domain's DNS settings. Once verified, send from an address like `enquiries@indiaessentialoils.com`. **Do this before real launch** — it significantly improves deliverability and avoids the recipient inbox (nitya.agarwal005@gmail.com) treating these as spam.

---

## 3. Install the SDK and set the environment variable

```bash
npm install resend
```

Add the API key as an environment variable — **never hardcode it directly in any source file**:

```
# .env.local (local development — this file must be in .gitignore, never committed)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
ENQUIRY_NOTIFICATION_EMAIL=nitya.agarwal005@gmail.com
```

On the actual hosting platform (Vercel/Render/whichever was chosen), add the same two environment variables in that platform's project settings → Environment Variables — **the site will not be able to send email in production until this step is done on the hosting platform itself, separately from the local `.env.local` file.** This is one of the most commonly missed steps.

---

## 4. Create a single, shared server-side email-sending function

Do not write separate email logic inside every form's handler — create one shared function all forms call, so there's a single place to fix/update the sending logic.

```ts
// lib/sendEnquiryEmail.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EnquiryPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  productName?: string;   // populated when the enquiry came from a specific product page (Phase 5)
  source: 'product_page' | 'contact_form' | 'chatbot_escalation';
}

export async function sendEnquiryEmail(data: EnquiryPayload) {
  const { name, email, phone, company, message, productName, source } = data;

  const subjectLine = productName
    ? `New enquiry: ${productName}`
    : `New website enquiry (${source})`;

  try {
    const result = await resend.emails.send({
      from: 'India Essential Oils <enquiries@indiaessentialoils.com>', // use onboarding@resend.dev until your domain is verified
      to: process.env.ENQUIRY_NOTIFICATION_EMAIL as string,
      replyTo: email, // lets you hit "Reply" in Gmail and respond straight to the customer
      subject: subjectLine,
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Source:</strong> ${source}</p>
        ${productName ? `<p><strong>Product:</strong> ${productName}</p>` : ''}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }

    return { success: true };
  } catch (err) {
    console.error('Failed to send enquiry email:', err);
    return { success: false, error: err };
  }
}
```

---

## 5. Wire this into an API route (or server action) — the part that must run server-side

**Using a Next.js App Router API route** (recommended, clearest to reason about):

```ts
// app/api/enquiries/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendEnquiryEmail } from '@/lib/sendEnquiryEmail';
// import { prisma } from '@/lib/prisma'; // if also saving to the Inquiry table per the main spec

export async function POST(request: NextRequest) {
  const body = await request.json();

  // 1. Validate required fields — never send/store on incomplete data
  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // 2. (Recommended) save to the Inquiry table from the main build spec, so it's never lost even if email delivery fails
  // await prisma.inquiry.create({ data: { name: body.name, email: body.email, phone: body.phone, company: body.company, message: body.message, productIds: body.productIds ?? [] } });

  // 3. Send the notification email
  const emailResult = await sendEnquiryEmail({
    name: body.name,
    email: body.email,
    phone: body.phone,
    company: body.company,
    message: body.message,
    productName: body.productName,
    source: body.source ?? 'contact_form',
  });

  if (!emailResult.success) {
    // Important: the enquiry is still saved in the database (step 2) even if email delivery fails —
    // never let an email-sending failure cause the customer's enquiry to be lost entirely.
    return NextResponse.json({ warning: 'Saved, but notification email failed to send' }, { status: 200 });
  }

  return NextResponse.json({ success: true });
}
```

**On the frontend**, every form (Phase 5's Enquire modal, the Phase 5 `/request-quote` page, the general `/contact` form, and the Phase 8 chatbot escalation flow) must call this same endpoint:

```ts
async function submitEnquiry(formData) {
  const response = await fetch('/api/enquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    // show an inline form error state — never fail silently
  }

  // show the success confirmation state defined in the Phase 10 forms section
}
```

---

## 6. Testing steps — do these in order, verify each before moving to the next

1. **Local test:** run the dev server, submit the form, check the terminal for any thrown errors first.
2. **Check the Resend dashboard** → Logs/Emails tab — this shows every send attempt and its real delivery status, even before checking the inbox. If nothing appears here, the API route isn't being reached or the API key is wrong/missing — this is the fastest way to isolate whether the problem is "email service" vs. "form/API route wiring."
3. **Check nitya.agarwal005@gmail.com, including the Spam/Promotions folder** — especially if still using the default `onboarding@resend.dev` sending address rather than a verified domain.
4. **Test with intentionally missing fields** (e.g. submit with no email) to confirm the 400 validation response works and no email is attempted.
5. **Test on the deployed production site**, not just locally — confirm the environment variables were actually added on the hosting platform (Section 3), since this is the single most common reason something works locally but not once deployed.
6. **Reply to a test email** from nitya.agarwal005@gmail.com and confirm it goes to the customer's real email address (verifying the `replyTo` field works) — this matters operationally, not just technically.

---

## 7. Fallback option: Gmail SMTP via Nodemailer (only if Resend genuinely can't be used)

```bash
npm install nodemailer
```

```ts
// lib/sendEnquiryEmail.ts (Nodemailer version)
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_SENDER_ADDRESS,   // the Gmail account actually sending the mail
    pass: process.env.GMAIL_APP_PASSWORD,      // NOT the normal Gmail password — see below
  },
});

export async function sendEnquiryEmail(data /* same shape as above */) {
  try {
    await transporter.sendMail({
      from: process.env.GMAIL_SENDER_ADDRESS,
      to: process.env.ENQUIRY_NOTIFICATION_EMAIL,
      replyTo: data.email,
      subject: `New website enquiry (${data.source})`,
      html: `/* same HTML body as the Resend example above */`,
    });
    return { success: true };
  } catch (err) {
    console.error('Failed to send enquiry email:', err);
    return { success: false, error: err };
  }
}
```

**Critical Gmail-specific step:** a normal Gmail password will **not** work here and will fail silently or with an auth error — Gmail requires a dedicated **App Password**:
1. The sending Gmail account must have **2-Step Verification enabled** first (Google Account → Security).
2. Go to Google Account → Security → App Passwords → generate a new one specifically for this app.
3. Use that generated 16-character password as `GMAIL_APP_PASSWORD` — never the account's normal login password.

Resend remains the better choice for anything beyond quick testing — Gmail SMTP has lower sending limits and is more likely to be flagged as spam at scale.

---

## 8. Handling the daily send limit — queue and retry the next day

Resend's free tier caps out at **100 emails/day**. Rather than letting an enquiry silently fail to send once that limit is hit on a busy day, add a small queue so anything that couldn't send today is automatically retried and delivered the next day, with nothing lost in between.

**This is worth building once real enquiry volume is anywhere near the daily limit — skip it for now if volume is low, and add it later without needing to change anything else in this document.**

### 8.1 Add an email status to the `Inquiry` table

Extend the `Inquiry` model already defined in the main build spec:

```prisma
model Inquiry {
  // ...existing fields (name, email, phone, company, message, productIds, createdAt)...
  emailStatus   EmailStatus @default(PENDING)
  emailSentAt   DateTime?
  emailAttempts Int         @default(0)
}

enum EmailStatus {
  PENDING
  SENT
  FAILED
}
```

Every inquiry gets saved with `emailStatus: PENDING` **before** attempting to send — this guarantees the enquiry itself is never lost, regardless of what happens with email delivery.

### 8.2 Update the API route to save first, then attempt to send immediately

```ts
// app/api/enquiries/route.ts (updated)
export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // 1. Always save first — this is the safety net
  const inquiry = await prisma.inquiry.create({
    data: {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      message: body.message,
      productIds: body.productIds ?? [],
      emailStatus: 'PENDING',
    },
  });

  // 2. Try to send immediately — most enquiries will succeed here and never touch the queue
  const emailResult = await sendEnquiryEmail({ ...body });

  if (emailResult.success) {
    await prisma.inquiry.update({
      where: { id: inquiry.id },
      data: { emailStatus: 'SENT', emailSentAt: new Date() },
    });
  } else if (emailResult.rateLimited) {
    // Leave as PENDING — the scheduled job in 8.3 will pick this up later, don't mark it FAILED
  } else {
    await prisma.inquiry.update({
      where: { id: inquiry.id },
      data: { emailStatus: 'FAILED', emailAttempts: { increment: 1 } },
    });
  }

  return NextResponse.json({ success: true }); // the customer always sees success — their enquiry is safely saved either way
}
```

Update `sendEnquiryEmail` to distinguish a rate-limit response from other failures, so the caller above can decide whether to leave it `PENDING` (retry later) vs. `FAILED` (a real error, e.g. bad API key):

```ts
// inside sendEnquiryEmail, in the catch block or on result.error:
const isRateLimited = err?.statusCode === 429 || result?.error?.name === 'rate_limit_exceeded';
return { success: false, rateLimited: isRateLimited, error: err };
```

### 8.3 Scheduled job to flush the queue

Add a scheduled job — reuse the same cron infrastructure already required for the Phase 2 nightly popularity-scoring job, just as a separate scheduled task, e.g. running **once every hour**:

```ts
// app/api/cron/send-pending-enquiries/route.ts
import { prisma } from '@/lib/prisma';
import { sendEnquiryEmail } from '@/lib/sendEnquiryEmail';

export async function GET() {
  const pending = await prisma.inquiry.findMany({
    where: { emailStatus: 'PENDING' },
    orderBy: { createdAt: 'asc' }, // oldest first — don't let new enquiries jump the queue ahead of older ones
    take: 90, // stay comfortably under the 100/day limit to leave headroom for same-day live enquiries
  });

  for (const inquiry of pending) {
    const result = await sendEnquiryEmail({
      name: inquiry.name,
      email: inquiry.email,
      phone: inquiry.phone ?? undefined,
      company: inquiry.company ?? undefined,
      message: inquiry.message,
      source: 'contact_form',
    });

    if (result.success) {
      await prisma.inquiry.update({
        where: { id: inquiry.id },
        data: { emailStatus: 'SENT', emailSentAt: new Date() },
      });
    } else if (result.rateLimited) {
      // Daily limit still hit — stop this run entirely, remaining items stay PENDING for the next run
      break;
    } else {
      await prisma.inquiry.update({
        where: { id: inquiry.id },
        data: { emailStatus: 'FAILED', emailAttempts: { increment: 1 } },
      });
    }
  }

  return new Response('OK');
}
```

Register this as a scheduled function (e.g. in `vercel.json` if hosting on Vercel):

```json
{
  "crons": [
    { "path": "/api/cron/send-pending-enquiries", "schedule": "0 * * * *" }
  ]
}
```

### 8.4 Behavior this produces

- On a normal day (well under 100 enquiries): every enquiry sends immediately, the queue stays empty, nothing changes from the customer's or your perspective.
- On a day that exceeds the limit: the first ~100 send immediately as usual; anything after that gets saved as `PENDING` and is automatically picked up and sent within the next hourly run once the daily limit resets — typically arriving the next day, exactly as intended, with **zero manual intervention** and **zero lost enquiries**.
- Nothing about the customer-facing form or its success message needs to change — they always see a successful submission, since their enquiry is safely stored the moment they submit it regardless of email timing.

### 8.5 Optional: alert yourself if the queue is backing up

If `PENDING` count stays high across multiple scheduled runs (e.g. still >20 pending after 3 consecutive hourly runs), send a separate internal alert email (or a Slack/WhatsApp message, if a webhook is already available) to flag that real enquiry volume has outgrown the free tier and it's time to upgrade the Resend plan — this turns a silent, slowly-growing backlog into something that actually gets noticed and fixed.

### 8.6 Additional acceptance checklist items for the queue

- [ ] `Inquiry` table has `emailStatus`, `emailSentAt`, and `emailAttempts` fields
- [ ] Every enquiry is saved to the database with `PENDING` status before any send attempt is made
- [ ] A rate-limit response is distinguished from a genuine failure, and only genuine failures are marked `FAILED`
- [ ] The scheduled job runs on a real schedule (hourly recommended) and processes `PENDING` items oldest-first
- [ ] The scheduled job caps how many it sends per run to stay safely under the daily limit, leaving headroom for same-day live traffic
- [ ] Tested by manually creating several `PENDING` inquiries directly in the database and confirming the scheduled job correctly sends them and updates their status
- [ ] Confirmed the customer-facing form still shows a normal success message regardless of whether the email sent immediately or was queued

---

## 9. Acceptance checklist for the coding agent

- [ ] Email sending happens entirely server-side (API route or server action) — never in client-side code
- [ ] `RESEND_API_KEY` (or Gmail credentials) exist as environment variables locally **and** on the production hosting platform, not hardcoded anywhere
- [ ] A single shared `sendEnquiryEmail` function is used by every form on the site, not duplicated logic per form
- [ ] Every enquiry is saved to the database (`Inquiry` table) independently of whether the email send succeeds
- [ ] The recipient address is exactly `nitya.agarwal005@gmail.com`, pulled from the `ENQUIRY_NOTIFICATION_EMAIL` environment variable, not hardcoded inline
- [ ] `replyTo` is set to the customer's own email so the recipient can reply directly
- [ ] Required fields are validated server-side before attempting to send
- [ ] A real test enquiry was submitted and confirmed to arrive at nitya.agarwal005@gmail.com (checked including spam folder)
- [ ] The same test was repeated on the deployed production site, not only locally
- [ ] If using Resend with the default `onboarding@resend.dev` sender, a note is left in the project README that domain verification (Section 2.1) should happen before real launch for deliverability
