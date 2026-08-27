# India Essential Oils — Website Rebuild: Build Spec

**Read this whole document before writing code.** This is a complete brief for rebuilding indiaessentialoils.com (currently live as gingerlywellness.com) from scratch. The current site runs on a decade-old IndiaMART directory template; this is a full replacement, not a patch.

Build in phases in this order: **Phase 1 (storefront + static catalog) → Phase 2 (search + popularity ranking) → Phase 3 (product image pipeline) → Phase 4 (marketing/trust features).** Each phase is usable on its own; don't block Phase 1 on Phase 2+ being finished.

---

## 1. Project summary

A B2B/bulk-inquiry catalog site for an essential oils and carrier oils manufacturer, selling 500+ SKUs across essential oils, carrier oils, organic oils, and related categories. Primary user is a bulk buyer researching suppliers, not a single-bottle retail shopper — though the design should not feel purely industrial.

**Core jobs the site must do well:**
1. Let a buyer find a specific oil fast (search) and see it's a real, trustworthy product (photo, purity data, certifications).
2. Let a buyer request a quote/bulk inquiry with minimal friction.
3. Build enough trust (reviews, certs, batch traceability) that a buyer chooses this supplier over the four competitors below.

**Competitors to differentiate from** (do not copy their weak points): Sivaroma Naturals, VedaOils, RV Organica, Aromaaz International. See Section 9 for what to take/avoid from each.

---

## 2. Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Frontend framework | Next.js (React), App Router | SSR/SSG for SEO on product pages; use static generation for product pages, revalidate on a schedule |
| Styling | Tailwind CSS | Use the design tokens in Section 4 as the Tailwind theme config, not ad hoc values |
| Database | PostgreSQL (managed — e.g. Supabase, Neon, or AWS RDS) | Source of truth for products, orders, inquiries, events |
| ORM | Prisma | Schema in Section 5 |
| Search engine | Meilisearch (self-hosted, open-source) or Algolia (managed) | Must support: typo tolerance, instant-search-as-you-type, custom ranking rules/boosting by a numeric field. Default to **Meilisearch** unless the team wants zero ops burden, in which case use Algolia |
| Event tracking | A `product_events` table in the same Postgres instance | No external analytics infra needed at this scale |
| Scoring job | A scheduled serverless function (Vercel Cron or a nightly GitHub Action) | Computes popularity scores, writes to `products.popularity_score`, re-indexes search |
| Image hosting/CDN | Cloudflare Images, or S3 + CloudFront | On-the-fly resizing for 500+ product photos |
| Hosting | Vercel (matches Next.js) | |
| Forms/inquiries | Server actions or a lightweight API route → stored in DB + emailed to sales | No third-party form service required |
| Chat | WhatsApp Business floating button (see Section 8) rather than a custom chatbot for v1 | Cheapest, matches what 3 of 4 competitors already use successfully |

---

## 3. Information architecture (site map)

```
/                              Homepage
/products                      Full catalog (search + filter + sort)
/products/[category]           Category listing (Essential Oils / Carrier Oils / Organic / Ayurvedic)
/products/[category]/[slug]    Single product page
/about                         Company + founder/team story
/certifications                Certifications detail page (not just a footer badge)
/batch-lookup                  Enter a batch code → see that batch's lab report + sourcing info
/blog                          Content hub (how-to-use, dilution guides, safety guides)
/blog/[slug]                   Single article
/contact                       Contact + bulk inquiry form
/request-quote                 Dedicated bulk quote form (also reachable from any product page)
/reviews                       Aggregated customer reviews (optional standalone; can also be inline on product pages)
```

**Global nav (max 6 items, per the UI-audit finding that duplicated/overloaded nav was a core problem):**
`Logo (links home, no separate "Home" item) | Essential Oils | Carrier Oils | Organic Oils | Blog | About | [Search icon] [Contact icon] [Request Quote button]`

Do not replicate RV Organica's mega-menu (8 top-level menus × 10–13 sub-items each) — that was flagged as a specific anti-pattern to avoid. Keep dropdowns to at most 2 levels deep.

---

## 4. Design system

Use this as the literal Tailwind theme — don't substitute a generic default palette.

### Colors

```
primary:    #028090   /* deep teal — primary buttons, headers, links */
secondary:  #00A896   /* seafoam — secondary accents, hover states */
accent:     #02C39A   /* mint — highlights, badges, CTAs on dark bg */
ink:        #1F2D2D   /* body text on light backgrounds */
sub:        #5C6E6E   /* muted/secondary text */
bg-light:   #FBFBF9   /* page background */
card:       #F2F6F5   /* card/section background */
white:      #FFFFFF
warn:       #B85042   /* terracotta — used sparingly for flagged/negative states only, not general UI */
```

One color (teal/primary) should visually dominate; mint/accent is a sparingly-used highlight, not a second dominant color.

### Typography

- Headings: a serif with character (e.g. a Google-Fonts equivalent of Cambria/Century Schoolbook — **Lora** or **Source Serif 4** are good self-hostable substitutes) — bold weight.
- Body: a clean sans (Inter or system-ui stack).
- Scale: H1 36–44px bold / H2 24–28px bold / body 15–16px / captions 12–13px muted.

### Spacing

- 8px base spacing scale throughout (this directly fixes the "inconsistent padding/borders" finding from the audit — pick one scale and apply it everywhere, no ad hoc pixel values).
- Section vertical padding: 64–96px desktop, 40–56px mobile.
- Card/content block gaps: 24–32px.

### Visual motif

Pick one recurring device and repeat it site-wide — organic rounded shapes/blobs (fits "essential oils," natural product positioning) in colored circles behind hero sections and section breaks. Do **not** use accent color bars/stripes on cards or under headings — this reads as generic/templated. Use whitespace, a subtle background tint, or a soft shadow instead.

### Components to build (shared library)

- `Button` (primary filled, secondary outline, ghost)
- `ProductCard` (image, name, category tag, short spec line, "View Product" / "Request Quote")
- `SearchBar` (autocomplete dropdown, see Section 6)
- `Badge` (certification badges, "Trending" badge driven by popularity score)
- `ReviewCard` (reviewer name, photo, star rating, quote, verified-buyer tag)
- `StatBlock` (big number + label — for "25 years," "500+ products," etc.)
- `Breadcrumb`
- `WhatsAppFloatButton` (fixed position, pre-filled greeting message — copy this pattern, it was flagged as effective on a competitor site)
- `Footer` (full nav columns + certifications + socials + contact — the current site has only a copyright line; this must not ship that thin)

---

## 5. Data model

Prisma schema (adapt field types to your ORM/DB of choice, but keep this shape):

```prisma
model Product {
  id              String   @id @default(cuid())
  slug            String   @unique
  name            String
  category        Category
  subCategory     String?
  description     String
  shortSpec       String?           // e.g. "10ml · Steam Distilled · India"
  bottleFormat    BottleFormat      // drives which image template is used — see Section 7
  labelImageUrl   String?           // uploaded label design
  compositeImageUrl String?         // generated product photo (template + label)
  priceDisplay    String?           // "Request Quote" or a price string
  moq             String?           // minimum order quantity, B2B context
  certifications  Certification[]
  batchLookupCode String?           // links to BatchReport
  popularityScore Float    @default(0)   // written by the nightly scoring job
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  events          ProductEvent[]
  reviews         Review[]
}

enum Category {
  ESSENTIAL_OIL
  CARRIER_OIL
  ORGANIC_OIL
  AYURVEDIC
}

enum BottleFormat {
  DROPPER_10ML
  BOTTLE_100ML
  BOTTLE_200ML
  ROLL_ON_30ML
  GIFT_BOX
}

model ProductEvent {
  id         String      @id @default(cuid())
  productId  String
  product    Product     @relation(fields: [productId], references: [id])
  type       EventType   // SEARCH_IMPRESSION | VIEW | INQUIRY | ADD_TO_QUOTE
  createdAt  DateTime    @default(now())
}

enum EventType {
  SEARCH_IMPRESSION
  VIEW
  INQUIRY
  ADD_TO_QUOTE
}

model Review {
  id           String   @id @default(cuid())
  productId    String?
  product      Product? @relation(fields: [productId], references: [id])
  reviewerName String
  reviewerPhotoUrl String?
  rating       Int      // 1–5
  quote        String
  verified     Boolean  @default(false)
  createdAt    DateTime @default(now())
}

model Certification {
  id            String   @id @default(cuid())
  name          String
  registrarName String?
  certNumber    String?
  imageUrl      String
  products      Product[]
}

model BatchReport {
  id            String   @id @default(cuid())
  batchCode     String   @unique
  productId     String
  sourcingFarm  String?
  gcmsReportUrl String?  // PDF/lab report link
  coaUrl        String?  // certificate of analysis
  producedAt    DateTime
}

model Inquiry {
  id          String   @id @default(cuid())
  name        String
  email       String
  phone       String?
  company     String?
  message     String
  productIds  String[] // products included in the bulk quote request
  createdAt   DateTime @default(now())
}
```

---

## 6. Search + popularity ranking (build this exactly as scoped)

**Goal:** search results are ranked by *text relevance filtered/boosted by real popularity*, not alphabetically and not by raw text-match score alone.

### 6.1 Popularity score

Computed nightly, not live:

```
score = (0.5 × orders_90d) + (0.3 × inquiries_90d) + (0.2 × views_90d)
```

- Normalize to 0–100 across the catalog after computing raw scores.
- `orders_90d`, `inquiries_90d`, `views_90d` are counts of `ProductEvent` rows of the matching type in the trailing 90 days (use `INQUIRY` and `ADD_TO_QUOTE` events as the closest available signal to "orders" if true order data isn't wired in yet).
- Write the result to `Product.popularityScore`.
- Recency matters: a 90-day trailing window naturally decays old spikes — don't use all-time totals.

### 6.2 Scoring job

- A scheduled function (nightly cron) that: queries `ProductEvent` grouped by `productId` and `type` for the last 90 days → computes the score per product → writes `popularityScore` back to `Product` → triggers a re-index of the search engine so it picks up the new scores.
- This job can be slow/heavy — it must never run on the request path of a live search.

### 6.3 Search index

- Index `name`, `description`, `category`, `subCategory` for text relevance.
- Add `popularityScore` as a **sortable/rankable** field and configure the search engine's ranking rules so results are ordered by: text-match relevance first, then `popularityScore` as a tiebreaker/boost among similarly-relevant results (Meilisearch: add `popularityScore:desc` to the custom ranking rules after the default relevance criteria; Algolia: use a custom ranking with `popularityScore` as a secondary tier).
- Re-index on: (a) any product create/update, (b) after every nightly scoring run.

### 6.4 Frontend behavior

- `SearchBar` component: as-you-type autocomplete, calling the search API with debounce (~200ms).
- Autocomplete dropdown shows top-scored matches first — this is what should make it feel "smart," not just filtered.
- Full `/products` page: same search + explicit filter controls (category, bottle format) + sort control (Relevance [default] / Popularity / Name A–Z).
- Fire a `SEARCH_IMPRESSION` event when a product appears in results the user actually scrolls to/clicks, and a `VIEW` event on product-page load — these feed next night's scoring run.

### 6.5 API shape

```
GET /api/search?q=lavender&category=ESSENTIAL_OIL&sort=relevance
→ { results: Product[], total: number }
```

The frontend must never query the database directly for search — always through this API, which itself queries the search engine, not Postgres, for the actual search operation.

---

## 7. Product image pipeline (template + layered label)

**Approach:** rather than photographing 500+ individual bottles, shoot one clean master template photo per `BottleFormat` (dropper 10ml, bottle 100ml, bottle 200ml, roll-on 30ml, gift box — 5 formats covers the current enum), then composite each product's label design onto the matching template.

**Build this as a real pipeline, not a manual one-off:**

1. **Template assets**: one high-res, evenly-lit, front-on photo per `BottleFormat`, stored with a defined "label placement zone" (a rectangle/quad with known coordinates for where the label sits on that bottle in the photo).
2. **Label assets**: per-product flat label design (a rectangle image, uploaded per SKU).
3. **Compositing script**: given a `bottleFormat` + `labelImageUrl`, warp the label into the template's label-placement zone (perspective transform if the bottle isn't perfectly flat-front, otherwise a simple resize+paste) and output a single composite image. Implement with **Python + Pillow/OpenCV** (`cv2.warpPerspective` for the quad mapping) as a standalone script callable via a queue/job (e.g. triggered on product create/update), not inline in the request path.
4. Store the result in `Product.compositeImageUrl` via the image CDN.
5. **Validate manually first**: before automating all 500+, run this for 10–15 real products across 2–3 bottle formats and visually confirm the composite doesn't look "pasted on" (lighting/shadow mismatch is the main failure mode — mitigated by using templates with flat, even lighting). Only after that validation, batch-run the rest.

This is a background job, not something that blocks page load — products without a generated composite yet should fall back to a generic category placeholder image, never a broken image.

---

## 8. Trust & marketing features (build in this priority order)

1. **WhatsApp floating button** — fixed-position button, all pages, pre-filled greeting message (e.g. `https://wa.me/<number>?text=Hi, I'd like to ask about your essential oils.`). Cheapest, highest-leverage addition per the competitor audit.
2. **Reviews** — `Review` model above; show on product pages and an aggregate `/reviews` page. Show reviewer name + photo + "Verified Buyer" tag where applicable — named, photographed reviews build more trust in this category than anonymous star ratings alone.
3. **Certifications page** — don't just show badge images (current site's weakness); show registrar name + certificate number per cert, matching the stronger competitor pattern.
4. **Batch lookup** (`/batch-lookup`) — a simple form: enter the batch code printed on the bottle → look up `BatchReport` by `batchCode` → show sourcing farm, GC-MS report link, COA link. This is a stated differentiator — no competitor in the reference set currently offers it.
5. **Blog** — even a minimal MDX-based blog is fine for v1: dilution charts, blend recipes, pet/child safety guides. This is intentionally an SEO/authority play, not a news feed.
6. **Dynamic "Popular Oils" section on homepage** — query the top N products by `popularityScore`, not a hardcoded list. Reuses the exact scoring pipeline from Section 6.
7. **Founder/team section on `/about`** — a real photo + short bio, not stock imagery.

---

## 9. Competitor reference (what to take / what to avoid)

| Competitor | Take | Avoid |
|---|---|---|
| Sivaroma Naturals | Clean single-scroll structure: hero → trust logos → about → offerings → certs → product grid → stats → blog teaser → contact | — |
| VedaOils | Full catalog scale (1,000+ SKUs), sortable/filterable listing, per-product reviews | Pure DTC cart-first layout if this stays B2B-first |
| RV Organica | Floating WhatsApp CTA, named testimonials with photos, certs with registrar+number, GC-MS/COA messaging | 8-menu × 10–13-item mega-nav — do not replicate this nav depth |
| Aromaaz International | Header-level Call/Mail/WhatsApp/Search icons, CEO-forward about section | Repeated trust-badge rows and repeated "Best Sellers" blocks (looked like a broken carousel) — QA against this specific bug pattern |

---

## 10. Non-functional requirements

- **SEO**: SSG/ISR for all product and blog pages, proper meta tags, sitemap.xml, structured data (`Product` schema.org markup on product pages).
- **Performance**: product images served via CDN with responsive `srcset`; target Lighthouse performance ≥ 90 on product/category pages.
- **Accessibility**: semantic HTML, alt text on every product image (auto-populate from product name if not manually set), keyboard-navigable search/autocomplete.
- **Mobile-first**: nav collapses to a hamburger + persistent search icon; WhatsApp button remains fixed and doesn't overlap content.
- **No fake data in production**: batch lookup, certifications, and reviews must only show real records — do not seed production with placeholder/lorem content.

---

## 11. Acceptance checklist (per phase)

**Phase 1 — Storefront**
- [ ] All site-map pages in Section 3 exist and route correctly
- [ ] Nav has no duplicate items and matches the max-6-item spec
- [ ] Full footer with nav columns, certifications, socials, contact (not a single copyright line)
- [ ] Every product listing shows a real or placeholder image, never a bare text link
- [ ] 8px spacing scale applied consistently (spot-check 5 random pages)

**Phase 2 — Search & popularity**
- [ ] `/api/search` returns results ranked by relevance + popularity, verified against the scoring formula in 6.1
- [ ] Nightly scoring job runs and updates `popularityScore` + re-indexes search
- [ ] Homepage "Popular Oils" section is dynamically queried, not hardcoded

**Phase 3 — Image pipeline**
- [ ] Compositing script validated manually on 10–15 products across 2–3 bottle formats
- [ ] Batch pipeline run for remaining catalog with a placeholder fallback for any product missing a composite

**Phase 4 — Trust & marketing**
- [ ] WhatsApp button live on all pages with pre-filled message
- [ ] Reviews visible on product pages and `/reviews`
- [ ] `/batch-lookup` returns a real report for a valid batch code and a clear "not found" state otherwise
- [ ] At least 2 blog posts published before launch (not zero — the current site has no content marketing)
