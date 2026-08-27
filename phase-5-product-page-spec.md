# Phase 5 — Individual Product Page

Extends the main build spec (`india-essential-oils-build-spec.md`). Phase 5 covers the single-product page reached from any `ProductCard` click across the site (`/products/[category]/[slug]`). Treat this as an Amazon/Flipkart-style product detail page (PDP) adapted for a B2B, quote-based catalog rather than a cart-checkout flow — there is no "Buy Now" or cart; the primary conversion action is **Enquire / Request a Quote**.

Read the design-system and data-model sections of the main spec before building this — this page must use the same design tokens, spacing scale, and `Product`/`Review`/`Certification`/`BatchReport` models already defined there. Do not introduce a separate color palette or spacing scale for this page.

---

## 1. Page goal

A visitor lands here after clicking a product from search, a category listing, or a homepage "Popular Oils" card. The page has three jobs, in priority order:

1. Confirm this is the right product, and that it's real and trustworthy (photo, spec, purity/certification data).
2. Answer "why this oil, why this supplier" — history, benefits, how it's made.
3. Convert: get an approximate per-unit price in front of them and make Enquire effortless.

If a visitor leaves without either understanding the product or seeing a way to ask about pricing, the page has failed regardless of how much content is on it.

---

## 2. Overall layout structure

Structure the page as **two zones**: an above-the-fold "purchase-decision" zone (mirrors Amazon/Flipkart's top-of-PDP layout), followed by a scrolling "deep content" zone below it.

```
┌─────────────────────────────────────────────────────────────┐
│ Breadcrumb                                                   │
├───────────────────────────┬───────────────────────────────── ┤
│                           │  Product name (H1)                │
│                           │  Category / subcategory tag       │
│   Image gallery           │  Short spec line                  │
│   (composite product      │  Star rating + review count       │
│    image + thumbnails)    │  ─────────────────────            │
│                           │  Approximate price per unit        │
│                           │  MOQ (minimum order quantity)      │
│                           │  [ Enquire / Request Quote ] (CTA) │
│                           │  Secondary: WhatsApp icon button   │
│                           │  Certification badges (inline)     │
│                           │  Batch lookup link                 │
├───────────────────────────┴───────────────────────────────── ┤
│  Section tab bar: Overview | History | Benefits | How It's    │
│  Made | Certifications | Reviews                              │
├─────────────────────────────────────────────────────────────┤
│  Overview                                                     │
│  History                                                      │
│  Benefits                                                      │
│  Manufacturing process                                        │
│  Certifications & lab reports                                 │
│  Reviews                                                       │
├─────────────────────────────────────────────────────────────┤
│  Related / similar products (carousel or grid, 4–6 items)     │
├─────────────────────────────────────────────────────────────┤
│  Footer                                                        │
└─────────────────────────────────────────────────────────────┘
```

On desktop, the top zone is a **two-column layout**: image gallery on the left (~50–55% width), purchase-decision panel on the right (~45–50% width) — this is the direct Amazon/Flipkart pattern and should not be reinvented. On mobile, stack vertically: image gallery first, full-width, then the purchase-decision panel directly below it, then the tab/section content.

---

## 3. Above-the-fold: image gallery (left column)

- Large primary image = `Product.compositeImageUrl` (falls back to a category placeholder if not yet generated, per the Phase 3 image pipeline — never show a broken image).
- Thumbnail strip below or beside the main image if additional angles/lifestyle shots exist; clicking a thumbnail swaps the main image. If only one image exists, omit the thumbnail strip rather than showing a strip of one.
- Support pinch-zoom on mobile and hover-zoom on desktop for the primary image — buyers inspecting a product photo closely is standard PDP behavior worth preserving.
- Certification badges may appear as small icons overlaid in a corner of the gallery *or* moved to the info panel — pick one location, do not duplicate them in both.

---

## 4. Above-the-fold: purchase-decision panel (right column)

Top to bottom, in this order:

1. **Product name** (H1, one line if possible; wrap gracefully if long).
2. **Category/subcategory tag** — small badge (e.g. "Essential Oil · Floral").
3. **Short spec line** — the `Product.shortSpec` field, e.g. "10ml · Steam Distilled · Sourced from Kannauj, India."
4. **Rating summary** — average star rating + review count, e.g. "★★★★☆ 4.6 (128 reviews)" — clicking it should jump-scroll to the Reviews section.
5. **Divider.**
6. **Approximate price per unit** — displayed clearly and labeled as an estimate, not a locked price, since this is a B2B bulk context. Use language like *"Approx. ₹XXX per 10ml unit (bulk pricing available on request)"* rather than presenting it as a final checkout price. Pull from `Product.priceDisplay`; if no price is set, show "Request Quote for Pricing" instead of hiding the field entirely — the price slot should always be visually present, even when the value is a prompt to ask rather than a number.
7. **MOQ line** — `Product.moq`, e.g. "Minimum order: 5kg."
8. **Primary CTA button — "Enquire Now" / "Request a Quote."** This is the single most important interactive element on the page:
   - Large, high-contrast, impossible to miss on both desktop and mobile.
   - Opens the `/request-quote` flow (or an inline modal/drawer form) pre-filled with this product already attached — do not send the user to a blank quote form that requires them to re-search for the product they were just looking at.
   - Sticky behavior on mobile: as the user scrolls down into the deep-content zone, this button should persist as a slim sticky bar fixed to the bottom of the viewport (name + price + Enquire button, condensed), so the conversion action is never more than a thumb-reach away. On desktop, this is handled naturally since the whole right column can remain visible via a sticky/pinned position as the user scrolls (position: sticky on the panel container, not the whole page).
9. **Secondary action — WhatsApp icon button**, using the same pre-filled-message pattern defined in the main spec's Section 8, with the product name automatically included in the pre-filled text.
10. **Certification badges row** (if not shown in the gallery) — small icon row, e.g. ISO / Organic / GC-MS tested, each clickable through to the Certifications section below.
11. **Batch lookup link** — a small text link, "Have a bottle? Look up your batch report →", linking to `/batch-lookup`.

---

## 5. Deep-content zone: sections

Render as a **sticky section tab bar** (Overview / History / Benefits / How It's Made / Certifications / Reviews) that scroll-links to each section below it — clicking a tab smooth-scrolls to that section, and the active tab highlights based on scroll position. This is the same interaction pattern as Amazon's/Flipkart's in-page anchor navigation. Do not build this as separate pages/routes — it must stay a single scrollable page with anchored sections, since splitting it would fragment SEO value and add unnecessary clicks.

### 5.1 Overview
- 2–4 sentence expanded description (separate from the short spec line above the fold) — what the oil is, its primary characteristics (scent profile, color, extraction method), and its most common uses.

### 5.2 History
- A short narrative (100–200 words) on the oil's origin — where it's traditionally sourced/used, how long it's been used in the region or culturally, any notable historical context. This is content, not a data field — write it per-product, don't auto-generate generic filler that could apply to any oil.

### 5.3 Benefits
- A scannable list (not a wall of text) of primary benefits/use cases — e.g. aromatherapy, skincare, wellness applications. Use short bolded benefit headers with one supporting sentence each, not bare bullet fragments.
- Include a visible, honest disclaimer if any wellness/health claims are made — do not present therapeutic claims as medical fact.

### 5.4 How It's Made (manufacturing overview)
- A brief, visual step sequence (3–6 steps) — e.g. Harvesting → Steam Distillation → Filtering → Quality Testing → Bottling. Use a horizontal step layout with a short icon or number per step and 1–2 lines of description each, not a long paragraph — buyers scan this, they don't read a manufacturing essay.
- This section is a strong candidate for a small looping process photo/video if available (ties back to the hero-video sourcing guidance from the general design principles doc) — optional, not required for launch.

### 5.5 Certifications & lab reports
- Full certification cards (not just badges) — reuse the `Certification` model: name, registrar name, certificate number, and the badge image, matching the "specific, checkable trust claims beat vague badges" principle from the general guidelines doc.
- If this product has an associated `BatchReport`, surface a direct link/preview here in addition to the standalone `/batch-lookup` page.

### 5.6 Reviews
- Use the shared `ReviewCard` component from the main design system — reviewer name, photo, star rating, quote, "Verified Buyer" tag where applicable.
- Show a rating distribution summary (e.g. bar breakdown of 5-star/4-star/etc. counts) above the individual review list, matching standard Amazon/Flipkart review-section conventions.
- Include a "Was this helpful?" or similar lightweight interaction only if a backend exists to support it — do not fake interactive elements that don't persist anywhere.

---

## 6. Related products

- Below the deep-content zone, a horizontal carousel or 4–6 item grid of related products — same category/subcategory, or products frequently viewed together if that signal exists from the `ProductEvent` data.
- Use the same `ProductCard` component as the rest of the site — do not create a one-off card style for this section.

---

## 7. Data requirements

This page needs the following from the `Product` model (see main spec Section 5) plus new fields to add for Phase 5:

```prisma
model Product {
  // ...existing fields from main spec...
  overview            String?   // 2-4 sentence expanded description
  history              String?   // 100-200 word narrative
  benefits            Json?     // array of { title: string, description: string }
  manufacturingSteps  Json?     // array of { title: string, description: string, imageUrl?: string }
}
```

Reuse `Review`, `Certification`, and `BatchReport` from the main spec as-is — no changes needed there.

Fire a `VIEW` `ProductEvent` on page load and an `ADD_TO_QUOTE` or `INQUIRY` event when the Enquire button is used — this page is a primary input to the popularity-scoring pipeline from Phase 2, so instrumentation here directly feeds the homepage's dynamic "Popular Oils" section.

---

## 8. Theming: Liquid Glass treatment

Apply the Apple Liquid Glass aesthetic (see `apple-liquid-glass-design-style.md`) to this page's **floating/interactive surfaces only** — this is a controls-and-navigation treatment, not a page-background treatment. Do not restyle the whole page in glass; overuse is the most common failure mode of this style.

**Do not introduce a new color palette for this effect.** The glass material should be built from the existing site's accent tones — i.e. take the current primary/secondary/accent colors already defined in the site's design system and apply them as tinted translucency (a low-opacity color wash under the blur/refraction), rather than defaulting to a neutral gray or white glass. The glass should still visibly read as *this site's* brand colors seen through a translucent layer, not a generic frosted-glass gray laid on top of the brand colors.

**Apply glass treatment specifically to:**
- The **sticky mobile bottom bar** (name + price + Enquire button) — this is the clearest candidate: a floating control surface over scrolling content, which is exactly the intended use case for this material.
- The **sticky section tab bar** as it pins to the top of the viewport while scrolling through the deep-content zone.
- The **certification badge row/icons**, if presented as a floating overlay on the image gallery rather than inline in the info panel.
- Optionally, the **Enquire button itself** on hover/press state — a subtle glass highlight/expansion on interaction, not a permanent glass fill, to keep it read as the loudest, most solid, most clickable element on the page rather than a translucent one.

**Do not apply glass treatment to:**
- The main product image, gallery thumbnails, or any product photography — these must stay fully solid/opaque, since legibility and color accuracy of the actual product are more important here than anywhere else on the page.
- Body text blocks (History, Benefits, manufacturing descriptions) — glass belongs on floating controls, not on static reading content, per the core principle that this material signals depth/hierarchy for controls, not decoration for prose.
- Certification cards in the dedicated Certifications section (Section 5.5) — these should stay fully opaque and high-contrast, since they are carrying a specific trust/legal claim (registrar name, cert number) that must never have reduced legibility.

**Required fallback:** every glass surface on this page must have a solid, fully opaque fallback style for `prefers-reduced-transparency` / `prefers-reduced-motion` users and for lower-power devices, per the accessibility requirements already defined in the Liquid Glass reference doc — do not ship a glass-only implementation with no fallback path.

**Rounded geometry:** carry the same continuous, generously-rounded corner treatment onto this page's cards (certification cards, review cards, related-product cards) to stay consistent with the glass surfaces above them, even where those specific cards remain opaque.

---

## 9. Responsive behavior summary

| Breakpoint | Gallery | Purchase panel | Section tabs |
|---|---|---|---|
| Desktop (≥1024px) | Left column, ~50–55% width | Right column, sticky as user scrolls | Horizontal tab bar, sticky on scroll |
| Tablet (768–1023px) | Full width, above panel | Full width, below gallery, not sticky | Horizontal tab bar, sticky on scroll |
| Mobile (<768px) | Full width, swipeable | Full width, below gallery | Horizontal scrollable tab bar; **Enquire condenses into the fixed glass bottom bar** once scrolled past the panel |

---

## 10. Acceptance checklist

- [ ] Clicking any `ProductCard` site-wide routes to `/products/[category]/[slug]` for that exact product
- [ ] Above-the-fold shows image, name, spec, rating, price (or "Request Quote"), MOQ, and a working Enquire CTA without scrolling on a standard desktop viewport
- [ ] Enquire CTA opens a quote flow with this product pre-attached — never a blank form
- [ ] WhatsApp button pre-fills a message including the product name
- [ ] All six sections (Overview, History, Benefits, How It's Made, Certifications, Reviews) render with real per-product content, not placeholder text, before launch
- [ ] Section tab bar scroll-links correctly and highlights the active section
- [ ] Mobile: sticky bottom Enquire bar appears once the user scrolls past the main purchase panel
- [ ] `VIEW` and `INQUIRY`/`ADD_TO_QUOTE` events fire correctly and are visible in the `ProductEvent` table
- [ ] Glass treatment appears only on the surfaces listed in Section 8 — spot check that body text, product photography, and certification cards remain fully opaque
- [ ] Glass surfaces use the site's existing accent-color tones, not a generic neutral gray glass
- [ ] Reduced-transparency fallback verified on at least one glass surface
- [ ] Related products section shows real, relevant items, not a repeated/duplicated block (QA against the repetition bug flagged in the competitor audit)
