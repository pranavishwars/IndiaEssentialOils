# Phase 8 — Lightweight Chatbot (FAQ Assistant)

Extends the main build spec and all prior phases. This phase adds a small, fast, on-site chatbot that answers common questions from a fixed knowledge base and hands off to email/phone the moment a question falls outside what it knows. **This is deliberately not an AI/LLM chatbot** — the brief calls for the lightest possible implementation, and a rule-based FAQ matcher is the correct tool for "answer basic questions, escalate the rest," not a model call. Do not over-build this into Phase 8.5's territory (an LLM-backed assistant) unless a future phase explicitly asks for it.

---

## 1. What "lightweight" means here — hard constraints

- **No LLM API calls, no vector database, no server-side inference.** The entire matching logic runs client-side against a small local dataset.
- **Total added JS for this feature: target under 15KB gzipped**, excluding the icon library already in use elsewhere on the site. If a chosen approach can't hit that budget, simplify the approach, don't raise the budget.
- **No new backend service.** The only server-side piece allowed is the existing contact/inquiry form endpoint from Phase 5 — reused, not duplicated — for the rare case where the bot needs to log an escalation.
- **Works with the FAQ dataset already living in a plain JSON/YAML file in the repo**, not a CMS, not a database table, not an admin panel. Content updates are a pull request, not a feature.
- **No conversation persisted server-side by default.** Keep the interaction ephemeral (in-memory / `sessionStorage` only) unless the client later asks for logging — don't add data-retention obligations this phase didn't ask for.

---

## 2. How it works (architecture)

1. A small, static **FAQ dataset** ships with the site bundle (Section 3).
2. When the user types a message, a **client-side matching function** compares it against the dataset's keywords/patterns and returns the best-matching answer, if confidence is high enough.
3. If no match clears the confidence threshold, the bot responds with a **fallback message** that offers the email/phone contact path (Section 5) — it never guesses, never apologizes at length, never tries to be conversational filler; it hands off cleanly.
4. Nothing here calls an external API at runtime. The only network activity this feature can trigger is the existing contact-form submission if the user chooses to send their unanswered question to the team (optional, Section 5.2).

```
User types message
        │
        ▼
Client-side matcher (keyword/intent scoring against FAQ dataset)
        │
   ┌────┴─────┐
   │           │
 Match        No confident match
 found          │
   │           ▼
   ▼        Fallback: "I can't answer that — email/call/WhatsApp us"
Show answer     (optional: pre-fill an inquiry with the user's question)
```

---

## 3. FAQ dataset structure

Store as a single JSON file, e.g. `content/chatbot-faq.json`. Keep it flat and simple — no nested categories required for the matcher to work, though grouping helps whoever maintains the content over time.

```json
[
  {
    "id": "moq",
    "patterns": ["minimum order", "moq", "smallest order", "bulk minimum"],
    "answer": "Our minimum order quantity varies by product — most essential oils start at 1kg for bulk pricing. Check the product page for the exact MOQ, or request a quote and we'll confirm."
  },
  {
    "id": "shipping",
    "patterns": ["shipping", "delivery time", "how long to ship", "do you ship internationally"],
    "answer": "We ship across India and internationally. Delivery timelines depend on destination and order size — request a quote and our team will confirm exact shipping time and cost."
  },
  {
    "id": "purity",
    "patterns": ["pure", "purity", "adulterated", "fake oil", "how do i know it's real"],
    "answer": "All our oils are GC-MS tested and come with a certificate of analysis. You can look up a specific bottle's batch report on our Batch Lookup page."
  },
  {
    "id": "certifications",
    "patterns": ["certified", "certification", "organic certificate", "iso"],
    "answer": "See our Certifications page for full details, including registrar names and certificate numbers for each certification we hold."
  },
  {
    "id": "contact",
    "patterns": ["contact", "phone number", "email", "talk to someone", "human"],
    "answer": "You can reach our team directly — see the contact options below."
  }
]
```

- **`patterns`** should include the phrasings a real buyer would actually type, not just formal terms — include misspellings/shorthand where realistic (e.g. "moq" alongside "minimum order").
- Keep each `answer` to 1–3 short sentences. This bot is for quick facts, not long explanations — if a real answer needs paragraphs of nuance, that's a sign the question belongs on the product page or blog, not in a chat bubble.
- Realistic starting scope for a launch dataset: **15–30 entries** covering MOQ, shipping, pricing/quotes, purity/certifications, batch lookup, returns/complaints, bulk discounts, product availability, and how to contact the team. Don't try to cover everything at launch — the fallback path exists specifically so gaps are safe, not embarrassing.

---

## 4. Matching logic

Keep this simple and dependency-free — this is the part most tempted to over-engineer, and over-engineering it is exactly what breaks the "lightweight" requirement.

**Recommended approach: keyword/substring scoring, not ML.**

1. Lowercase and strip punctuation from the user's input.
2. For each FAQ entry, count how many of its `patterns` appear (as substrings or whole-word matches) in the user's input.
3. Pick the entry with the highest match count.
4. **Require at least one real match** before returning an answer — never return the "closest" entry if it scored zero actual keyword hits, since a confident-sounding wrong answer is worse than an honest "I don't know."
5. If multiple entries tie, prefer the one whose pattern match is the longest/most specific substring (e.g. "minimum order quantity" should beat a generic partial hit on "order").

This can be implemented in a single small function with no dependency:

```js
function matchFaq(userInput, faqData) {
  const normalized = userInput.toLowerCase().trim();
  let best = null;
  let bestScore = 0;

  for (const entry of faqData) {
    const score = entry.patterns.reduce((acc, pattern) => {
      return normalized.includes(pattern.toLowerCase()) ? acc + pattern.length : acc;
    }, 0);
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  return bestScore > 0 ? best : null;
}
```

- Do **not** reach for a fuzzy-matching or NLP library for this — a plain substring-scoring function is enough for "answer basic questions, escalate the rest," and keeps the bundle-size constraint from Section 1 achievable. If real usage data later shows the matcher is missing things a slightly smarter algorithm would catch, revisit then — don't pre-optimize for a problem that hasn't been observed yet.
- Log (client-side only, e.g. to the browser console in dev, or optionally to a simple analytics event in production) every query that fails to match, so the FAQ dataset can be improved over time based on real gaps — this is the cheapest possible feedback loop and requires no new infrastructure.

---

## 5. Fallback / escalation flow

This is the most important part of the whole feature — the brief is explicit that anything the bot can't answer must route to a human, cleanly.

### 5.1 Fallback message
When no confident match is found, respond with something short and direct, not an apology paragraph:

> "I'm not able to answer that one. You can reach our team directly:"

Followed immediately by two clear actions, not buried in text:
- **Email** — a `mailto:` link with the company's support address, pre-filled subject line (e.g. `Subject: Website inquiry`).
- **Phone / WhatsApp** — reuse the exact WhatsApp floating-button pattern and phone number already defined in the main spec's Section 8 trust features — do not introduce a second, different contact channel here.

### 5.2 Optional (only if trivial to add): carry the question forward
If the existing Phase 5 inquiry form can accept a pre-filled message field, pre-fill it with the user's unanswered chatbot question when they click through to contact — this saves them retyping it. This is a nice-to-have, not a requirement; skip it if it adds meaningful complexity, since a working `mailto:`/WhatsApp link alone already satisfies the brief.

### 5.3 Never do these things
- Never let the bot say "let me check" or imply it's "thinking" about something it has no way to actually look up — it either matches an FAQ entry or it doesn't; don't simulate capability the system doesn't have.
- Never let the bot state a specific price, certification claim, or shipping guarantee that isn't already verified, static text pulled from the FAQ dataset — if a question requires a real-time or order-specific answer, that's automatically a fallback case, even if it sounds like something the bot "should" know.
- Never trap the user — the email/phone/WhatsApp fallback must be reachable within the same response, not after several more back-and-forth turns.

---

## 6. UI/UX

- **Trigger**: a small floating chat-bubble icon, bottom corner of the viewport, on every page. Coordinate its position with the existing floating elements from Phase 6's z-index table — this bot's trigger and the WhatsApp float button must not overlap; if both are present, stack them vertically with clear spacing, or combine them into one floating-button cluster with clear icons for each option.
- **Panel**: a small chat window (not full-screen on desktop; a bottom sheet on mobile per the Phase 6 shared drawer component) with:
  - A short greeting message on open (e.g. "Hi! Ask me about MOQs, shipping, certifications, or anything else — I'll connect you with our team if I can't help.") — this sets expectations honestly up front, rather than implying general-purpose AI capability.
  - A simple text input and send button.
  - Optionally, 3–4 tappable "quick question" chips for the most common FAQ entries (e.g. "Minimum order?", "Shipping time?", "Are these certified?") so users don't have to type at all for the most common cases — this also reduces unmatched queries.
- **Styling**: same design tokens as the rest of the site — no new palette. The trigger button and chat panel are appropriate candidates for the Liquid Glass treatment defined in Phase 5 (floating, temporary control surface), styled with the site's existing accent tones and shipped with the same opaque fallback for reduced-transparency users. Keep the actual message text fully opaque and legible, consistent with the "glass on chrome, not on reading content" rule from Phase 5/7.
- **Persistence**: keep the conversation in `sessionStorage` so it survives a page reload within the same visit, but don't persist it beyond the session unless a future phase explicitly asks for that.

---

## 7. Accessibility

- Trigger button needs a clear `aria-label` (e.g. "Open chat assistant"), not just an icon.
- Chat panel must be keyboard-operable end to end: focus moves into the input on open, Enter sends a message, Escape closes the panel.
- Announce new bot responses to screen readers (e.g. an `aria-live="polite"` region around the message list) so a screen-reader user isn't left wondering whether their message sent.
- Mailto and WhatsApp fallback links must be real, focusable links (not JS-only click handlers with no href) so they work with assistive tech and “open in new tab”/right-click behavior as expected.

---

## 8. Performance checklist

- [ ] Feature's added JS is under the 15KB gzipped budget from Section 1 — measure this explicitly, don't estimate
- [ ] FAQ dataset and matching logic are loaded lazily (only when the user opens the chat trigger for the first time), not included in the initial page bundle
- [ ] No network request fires just from opening the chat panel — only from an actual message send, and only to compute the answer client-side (zero network calls) or, for an escalation, the existing contact-form endpoint
- [ ] No layout shift introduced by the floating trigger button appearing after page load — reserve its space or fade it in without affecting surrounding layout

---

## 9. Testing checklist

- [ ] At least 10 realistic buyer questions (in the exact casual phrasing a real user would type, not the clean phrasing from the dataset) correctly match the intended FAQ entry
- [ ] At least 5 out-of-scope questions (e.g. "what's the weather today," a request for a specific price the dataset doesn't contain, a complaint about a specific order) correctly trigger the fallback, not a wrong or invented answer
- [ ] Fallback message and both contact options (email, phone/WhatsApp) are reachable within the same bot turn, no extra clicks required
- [ ] Trigger button does not overlap the WhatsApp floating button or the Phase 5 sticky Enquire bar on the product page, per Phase 6's z-index rules
- [ ] Full keyboard navigation works: open, type, send, receive, close, all without a mouse
- [ ] Screen reader correctly announces new bot messages as they appear
- [ ] Mobile: chat opens as a bottom sheet consistent with the Phase 6 shared drawer component, respects safe-area insets, and does not break with the on-screen keyboard open
- [ ] Confirmed no external API call, database write, or third-party script is triggered anywhere in this feature, per the lightweight constraint in Section 1
