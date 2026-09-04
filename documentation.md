# India Essential Oils — Technical & Architectural Documentation

> **Official B2B Enterprise Web Platform & Botanical Knowledge Engine**  
> *A Global Export & Primary Distillation Division of Mother Herbs Private Limited (Est. 2004, New Delhi, India)*

---

## 1. Executive Summary & Brand Overview

**India Essential Oils** is an enterprise-grade digital catalog, technical procurement hub, and international sales portal for one of India's foremost primary distillation manufacturers and bulk botanical exporters. The platform provides global B2B procurement managers, cosmetic chemists, master perfumers, flavorists, and pharmaceutical compounders direct access to **238 pure, pharmacopoeial-grade botanical extracts** across nine specialized product divisions.

### 1.1 Core Business Pillars & Operational Principles
- **238 Pharmacopoeial Distillates**: Essential oils, cold-pressed carrier oils, supercritical CO₂ extracts, spice oils, floral absolutes, floral waters (hydrosols), oleoresins, classical Ayurvedic oils, and certified organic oils.
- **Analytical Purity Verification**: In-house analytical laboratory running dual **Shimadzu Gas Chromatography–Mass Spectrometry (GC-MS)** systems, digital polarimeters, Abbe refractometers, and Anton Paar densitometers. Every shipment is accompanied by a batch-specific Certificate of Analysis (CoA) and 16-point GHS/MSDS dossier.
- **⚡ 48-Hour Order Dispatch**: Backed by a 1,000 MT climate-controlled warehouse facility in New Delhi, standard bulk botanical distillates are packed and dispatched within **48 hours** of payment confirmation.
- **Cleanroom Bottling & Private Labeling (OEM)**: Retail bottling from 5ml to 500ml across multiple glass finishes (Amber UV-blocking, Clear optical clarity, Frosted matte, Cobalt blue, Emerald green) fitted with precision European dropper orifice reducers, calibrated pipettes, and tamper-evident caps.
- **Shock-Absorbing Cushion Box Packaging**: Custom engineered drop-tested cushion box packaging to protect delicate glassware during international air and ocean cargo.
- **99.999% Nitrogen Displacement Inerting**: Automated nitrogen headspace capping purging oxygen from bulk canisters and retail bottles to prevent lipid oxidation and shelf degradation.
- **Global Compliance (65+ Countries)**: Compliant with US FDA (facility registered), EU Cosmetics Regulation (EC No 1223/2009), REACH, IFRA, WHO-GMP, ISO 22000:2005, and ISO 9001:2015.
- **Strict Courier Policy**: In accordance with business rules, specific commercial courier brand names (e.g., DHL, FedEx, Blue Dart, Safechem) are **strictly prohibited** from customer-facing copy. All freight is referred to as **"express air cargo"** or **"priority air logistics"**.

---

## 2. Technology Stack & Dependencies

The project is built on the modern React / Next.js ecosystem, pairing server-side rendering and static page generation with high-performance edge routing, serverless database connectivity, and resilient transactional messaging.

### 2.1 Core Framework & Language
| Technology | Version | Description & Role |
| :--- | :--- | :--- |
| **Next.js** | `16.3.2` | App Router architecture, Turbopack build engine, Server Components (RSC), Dynamic Segments (`[category]/[slug]`), Static Site Generation (SSG) for 283 routes. |
| **React** | `19.2.8` | Component runtime, server actions, concurrent transitions (`useTransition`), client-side state hooks. |
| **TypeScript** | `^5.0.0` | Strict type definitions across catalog models, database adapters, API routes, and chatbot matchers. |

### 2.2 Styling, Design System & Icons
| Technology | Version | Description & Role |
| :--- | :--- | :--- |
| **Tailwind CSS** | `^4.0.0` | PostCSS plugin (`@tailwindcss/postcss`), utility-first responsive layout engine, custom CSS variables. |
| **Custom Design Tokens** | Native CSS | Tailored purple & gold botanical palette (`#7C3AED`, `#8B5CF6`, `#180D26`, `#F8F5FC`), backdrop blur glassmorphism, fluid responsive containers. |
| **Google Fonts** | Next Font | Dynamic optimization for **Inter** (modern sans-serif body) and **Lora** (editorial serif headers). |
| **Lucide React** | `^1.33.0` | Consistent vector iconography (scientific flasks, leaves, shields, droppers, arrows, navigation). |

### 2.3 Database, ORM & Storage Architecture
| Technology | Version | Description & Role |
| :--- | :--- | :--- |
| **PostgreSQL** | Cloud v16 | Serverless database hosted on **NeonDB Cloud** (ap-southeast-1 AWS region) with connection pooling. |
| **Prisma ORM** | `^7.9.1` | Type-safe schema generator, database client (`@prisma/client`), connection management. |
| **Prisma Driver Adapter** | `^7.9.1` | `@prisma/adapter-pg` utilizing the native node `pg` (`^8.23.0`) driver for low-latency pooled queries. |
| **Dual-Layer Catalog Store** | In-Memory + DB | Ultra-fast in-memory static store (`INITIAL_PRODUCTS`, 238 items) ensuring 0ms page generation and instant chatbot matching, synchronized with PostgreSQL for live event analytics and customer enquiries. |

### 2.4 Transactional Email & Messaging
| Technology | Version | Description & Role |
| :--- | :--- | :--- |
| **Resend SDK** | `^6.25.0` | Primary modern API transport for instant quotation delivery and sales desk notifications. |
| **Nodemailer** | `^9.0.5` | Secondary enterprise fallback transport via secure SMTP (Port 465 SSL/TLS). |

---

## 3. Repository Directory Structure

```
IndiaEssentialOils/
├── prisma/
│   ├── schema.prisma              # Prisma schema (Product, ProductEvent, Inquiry, Enums)
│   └── migrations/                # Database migration logs
├── public/
│   ├── images/
│   │   ├── industries/            # High-res photography for industries served
│   │   │   ├── cosmetics_skincare.jpg
│   │   │   ├── food_flavor.jpg
│   │   │   ├── pharma_health.jpg
│   │   │   ├── perfumery_fragrance.jpg
│   │   │   └── aromatherapy_wellness.jpg
│   │   └── infrastructure/        # Extraction machinery & facility photography
│   │       ├── steam_distillation.jpg
│   │       ├── cold_press.jpg
│   │       ├── co2_extraction.jpg
│   │       └── botanical_conditioning.jpg
│   ├── icon.png                   # Favicon / App Icon (512x512)
│   ├── apple-icon.png             # Apple Touch Icon
│   ├── essential_oil_bottle.jpg   # Social preview open-graph image
│   └── robots.txt                 # Search crawler instructions
├── src/
│   ├── app/                       # Next.js App Router (Pages, Layouts & Route Handlers)
│   │   ├── layout.tsx             # Root layout: fonts, SEO meta, JSON-LD, LanguageProvider
│   │   ├── page.tsx               # Homepage: Hero, categories, features, trust badges
│   │   ├── globals.css            # Global CSS, Tailwind v4 imports, utility classes
│   │   ├── sitemap.ts             # XML Sitemap generator covering all static and dynamic paths
│   │   │
│   │   ├── about/                 # Corporate profile & company heritage
│   │   │   ├── page.tsx           # Company overview & 3-step ordering overview
│   │   │   ├── profile/page.tsx   # Detailed corporate profile & factory background
│   │   │   ├── why-us/page.tsx    # Value propositions & manufacturing differentiators
│   │   │   ├── how-to-order/page.tsx # Streamlined 3-step B2B procurement workflow
│   │   │   ├── trust-we-built/page.tsx # Quality assurance & client history
│   │   │   ├── founders-note/page.tsx # Letter from leadership
│   │   │   ├── industries-we-serve/page.tsx # 2x2 responsive grid of industrial clients
│   │   │   └── countries-we-serve/page.tsx # Prominent export destinations (65+ countries)
│   │   │
│   │   ├── products/              # Catalog browsing & product discovery
│   │   │   ├── page.tsx           # Universal Catalog: 238 products with live search & filters
│   │   │   ├── [category]/        # Category listing (e.g. /products/essential-oils)
│   │   │   │   └── page.tsx       # Filtered category view with stats, MOQ, and specifications
│   │   │   └── [category]/[slug]/ # Dynamic Product Detail Page (PDP)
│   │   │       └── page.tsx       # Full specification, GC-MS guarantee, quote modal, benefits
│   │   │
│   │   ├── packaging/             # Cleanroom packaging & private labeling
│   │   │   ├── page.tsx           # Master packaging hub: retail glass, cushion box, UN drums
│   │   │   ├── sizes/page.tsx     # Dimension specifications (5ml to 200kg)
│   │   │   ├── process/page.tsx   # Quality bottling protocol & nitrogen displacement inerting
│   │   │   ├── shipment-policy/page.tsx # Air & sea export logistics, dangerous goods documentation
│   │   │   └── faqs/page.tsx      # Permanent redirect to global `/faqs`
│   │   │
│   │   ├── infrastructure/page.tsx # Distillation plant, cold-press units, SFE supercritical extractors
│   │   ├── quality/page.tsx       # Analytical laboratory, GC-MS testing, polarimetry, CoAs
│   │   ├── certifications/page.tsx # WHO-GMP, ISO 22000, ISO 9001:2015, US FDA, Halal, Kosher
│   │   ├── faqs/                  # Standalone Global FAQs
│   │   │   ├── page.tsx           # Server wrapper with FAQPage JSON-LD structured data
│   │   │   └── FaqsClient.tsx     # Client accordion with real-time search and category filtering
│   │   ├── contact/page.tsx       # B2B quotation form with product pre-fill & document checklist
│   │   ├── request-quote/page.tsx # Dedicated multi-item quote request portal
│   │   ├── batch-lookup/page.tsx  # Interactive GC-MS report & CoA batch verifier
│   │   ├── reviews/page.tsx       # International B2B buyer testimonials & verified case studies
│   │   ├── blog/                  # Botanical & scientific articles
│   │   │   ├── page.tsx           # Technical library listing
│   │   │   └── [slug]/page.tsx    # Technical guides (GC-MS reports, dilution, extraction types)
│   │   ├── admin/page.tsx         # Internal administrative dashboard & metrics monitor
│   │   ├── privacy/page.tsx       # GDPR / CCPA compliant privacy policy
│   │   ├── terms/page.tsx         # Commercial terms of sale, incoterms, payment terms
│   │   │
│   │   └── api/                   # Backend Route Handlers (Serverless APIs)
│   │       ├── enquiries/route.ts # Primary B2B enquiry creation & email dispatcher
│   │       ├── enquiry/route.ts   # Alias proxying to enquiries/route.ts
│   │       ├── search/route.ts    # Tokenized multi-term search & popularity ranker
│   │       ├── events/route.ts    # Analytics telemetry logger (debounced batch database flusher)
│   │       ├── catalog/download/route.ts # Official 44-page September 2026 Wholesale Catalog stream (.pdf)
│   │       ├── subscribe/route.ts # Wholesale price alert / newsletter subscription
│   │       └── cron/              # Scheduled background workers
│   │           ├── score/route.ts # 90-day popularity score recalculator
│   │           └── send-pending-enquiries/route.ts # Rate-limit-aware email queue processor
│   │
│   ├── components/
│   │   ├── client/                # Interactive Client Components ('use client')
│   │   │   ├── Navbar.tsx         # Desktop mega-menu, mobile drawer, quick links, language switch
│   │   │   ├── CatalogHoverDropdown.tsx # Interactive 9-category mega-dropdown menu
│   │   │   ├── AboutHoverDropdown.tsx   # Corporate navigation submenu
│   │   │   ├── PackagingHoverDropdown.tsx # Packaging suite submenu
│   │   │   ├── CatalogView.tsx    # Complete catalog search, filtering, sorting, pagination
│   │   │   ├── CatalogFilter.tsx  # Category pill filters and count badges
│   │   │   ├── ProductGrid.tsx    # Responsive product card grid with badges and MOQs
│   │   │   ├── ProductDetailView.tsx # Master PDP coordinator
│   │   │   ├── ProductImageGallery.tsx # High-resolution botanical image switcher
│   │   │   ├── ProductPurchasePanel.tsx # Pricing inquiry panel, packaging sizes, RFQ triggers
│   │   │   ├── ProductQuoteModal.tsx    # Overlay modal for submitting immediate product RFQs
│   │   │   ├── ProductStickyTabBar.tsx  # Sticky tab anchor navigation (Overview, Specs, Benefits)
│   │   │   ├── ProductMobileStickyBar.tsx # Mobile viewport sticky quote action bar
│   │   │   ├── ChatbotWidget.tsx  # Intelligent AI Botanical & Export Consultant floating widget
│   │   │   ├── HomeUniversalSearchBar.tsx # Hero universal search bar with live autosuggest
│   │   │   ├── SearchBar.tsx      # Reusable search input with clear button
│   │   │   ├── HeroSlideshow.tsx  # Smooth fade hero background carousel
│   │   │   ├── ExploreLatestLineSection.tsx # Category showcase cards
│   │   │   ├── PopularOilsSection.tsx # Trailing popularity showcase
│   │   │   ├── CertificationsGrid.tsx # Interactive regulatory certificate cards
│   │   │   ├── GlobalPresenceMap.tsx # Interactive SVG world map of export destinations
│   │   │   ├── GoogleTranslateWidget.tsx # Dynamic international language selector
│   │   │   ├── FloatingActionsDock.tsx # Floating bottom dock (Chatbot + WhatsApp buttons)
│   │   │   ├── WhatsAppFloatButton.tsx # Direct commercial sales desk WhatsApp trigger
│   │   │   ├── DownloadCatalogButton.tsx # Instant trigger for official 2026 catalog download
│   │   │   ├── GlassComponents.tsx # Reusable glassmorphic cards and containers
│   │   │   └── ScrollReveal.tsx   # Viewport intersection observer animation wrapper
│   │   │
│   │   ├── server/                # Server-Rendered Components
│   │   │   └── Footer.tsx         # Comprehensive multi-column footer with live links & legal info
│   │   └── icons/
│   │       └── WhatsAppIcon.tsx   # Custom SVG icon
│   │
│   ├── lib/                       # Business Logic, Utilities, Database Clients
│   │   ├── data.ts / data.tsx     # Master company metadata, address, phones, categories
│   │   ├── products-store.ts      # Plain TypeScript repository containing all 238 items + store
│   │   ├── products-db.ts         # Database fallback layer marrying Postgres with static memory
│   │   ├── prisma.ts              # PrismaClient singleton with connection pooling & edge adapter
│   │   ├── chatbot-matcher.ts     # Intelligent NLP-style matcher, synonyms, domain intelligence
│   │   ├── sendEnquiryEmail.ts    # Dual-provider email dispatcher (Resend + Nodemailer fallback)
│   │   ├── scoring.ts             # Trailing 90-day popularity scoring mathematical model
│   │   ├── language-context.tsx   # React context for global language switching
│   │   ├── languages-data.ts      # Multi-language dictionary and country codes
│   │   ├── signature-colors.ts    # Botanical color hex mappings for dynamic PDP theming
│   │   ├── batch-data.ts          # Sample batch CoA test numbers for the Batch Lookup tool
│   │   ├── blog-data.ts           # Editorial blog content, reading times, tags
│   │   ├── reviews-data.ts        # Customer testimonials & verified review ratings
│   │   └── worldMapData.ts        # SVG vector paths and country coordinates for export map
│   │
│   └── data/
│       └── chatbot-faq.json       # Structured FAQ knowledge base for static lookup fallback
├── .env                           # Active environment variables (Database, Resend, SMTP)
├── .env.example                   # Template environment file for deployment
├── next.config.ts                 # Next.js configuration (Turbopack, headers, redirects)
├── package.json                   # Project scripts and package dependencies
├── tsconfig.json                  # TypeScript compiler settings
└── documentation.md               # Master technical documentation (This file)
```

---

## 4. Backend APIs & Serverless Endpoints

All API endpoints are implemented as Next.js App Router Route Handlers located under `src/app/api/`. They are stateless, edge-compatible, and handle runtime error recovery gracefully.

### 4.1 `POST /api/enquiries` (and alias `POST /api/enquiry`)
**Purpose**: Handles all B2B wholesale quotation requests, product inquiries, sample requests, and chatbot escalations.
- **Request Headers**: `Content-Type: application/json`
- **Request Body Payload (`EnquiryPayload`)**:
  ```typescript
  {
    name: string;             // Mandatory: Contact person name
    email: string;            // Mandatory: Valid business email
    phone?: string;           // International telephone / WhatsApp
    company?: string;         // Business / Legal entity name
    country?: string;         // Destination country
    category?: string;        // Botanical division
    productName?: string;     // Specific product (e.g. "Lavender Oil")
    quantity?: string;        // Requested volume (e.g. "50 kg", "2 x 200kg drums")
    packaging?: string;       // Preferred packaging (e.g. "Aluminum Canisters", "Amber Droppers")
    incoterms?: string;       // CIF, FOB, EXW, DDP
    destinationPort?: string; // Airport / Sea port code
    requiredDocs?: string[];  // ["COA", "MSDS", "GCMS", "NON_GMO", "PHYTOSANITARY"]
    subject?: string;         // Custom email subject
    message: string;          // Specifications, target application, notes
    source?: string;          // "contact_form" | "product_page" | "pdp_modal" | "chatbot_escalation"
  }
  ```
- **Execution Workflow**:
  1. **Validation**: Validates that `email` is present and contains `@`, and that `name` is non-empty.
  2. **PostgreSQL Persistence (Safety Net)**: Inserts an `Inquiry` record into NeonDB with `emailStatus = 'PENDING'` and `emailAttempts = 0`. If the database is unreachable, execution continues in fail-safe mode.
  3. **Primary Dispatch (Resend)**: Calls `sendEnquiryEmail()` using Resend API to deliver a formatted HTML notification to the sales desk (`ENQUIRY_NOTIFICATION_EMAIL`).
  4. **Fallback Dispatch (SMTP / Simulated)**: If Resend encounters an error (or rate limits), the dispatcher automatically fails over to Nodemailer using SMTP over SSL (Port 465).
  5. **Status Update**: Upon successful delivery, the database record is updated to `emailStatus = 'SENT'` with a timestamp. If rate-limited, it remains `PENDING` for the background cron to drain.
- **Responses**:
  - `200 OK`: `{ success: true, message: "Enquiry submitted successfully", inquiryId: string }`
  - `400 Bad Request`: `{ error: "A valid business email address is required." }`
  - `500 Server Error`: `{ error: "Failed to process enquiry", details: string }`

---

### 4.2 `GET /api/search`
**Purpose**: Powers universal real-time search across all 238 products with multi-term text scoring and popularity boosting.
- **Query Parameters**:
  - `q`: Search string (e.g. `?q=eucalyptus+steam+distilled`)
  - `category`: Category filter slug (e.g. `?category=essential-oils` or `ALL`)
  - `sort`: `relevance` (default) | `popularity` | `name` | `name_desc`
- **Scoring Algorithm**:
  - Exact Name Match: +50 points
  - Name Starts With Term: +30 points
  - Name Contains Term: +20 points
  - Botanical Name Contains Term: +25 points
  - Short Specification Contains Term: +10 points
  - Category Contains Term: +10 points
  - Full Description Contains Term: +5 points
  - **Popularity Boost**: `totalScore = textScore + (product.popularityScore * 0.15)`
- **Response**:
  ```json
  {
    "results": [ /* Array of Product objects sorted by totalScore descending */ ],
    "total": 12
  }
  ```

---

### 4.3 `POST /api/events`
**Purpose**: Collects zero-latency telemetry events from user interactions without slowing down page rendering.
- **Supported Event Types**: `VIEW`, `SEARCH_IMPRESSION`, `INQUIRY`, `ADD_TO_QUOTE`
- **Batching & Buffering Architecture**:
  - Events are immediately recorded in the runtime memory store (0ms response time to client).
  - Enqueued in an in-memory batch buffer.
  - Automatically flushed to PostgreSQL using `prisma.productEvent.createMany()` when either:
    - 25 events accumulate in memory, OR
    - 30 seconds pass without a flush (debounced timer).
- **Response**: `200 OK: { success: true, queued: true }`

---

### 4.4 `GET /api/catalog/download`
**Purpose**: Streams and downloads the official 44-page **Botanical Product Catalog (September 2026 Edition)** as an export-ready PDF document.
- **Output Format**: Binary PDF (`application/pdf`) with RFC 2183 headers:
  - `Content-Type: application/pdf`
  - `Content-Disposition: attachment; filename="India-Essential-Oils-Botanical-Catalog-September-2026.pdf"`
  - `Cache-Control: public, max-age=86400, stale-while-revalidate=604800`
- **Content**: Comprehensive 44-page corporate publication detailing corporate credentials, 9 category indexes, bestselling/trending extracts, full 238 product specifications with Latin botanical names, distillation methods, harvest origins, minimum order quantities, and direct quotation contact details.

---

### 4.5 `POST /api/subscribe`
**Purpose**: Subscribes commercial buyers and distributors to seasonal harvest updates, price drops, and quarterly catalog releases.
- **Input**: `{ email: string }`
- **Response**: `200 OK: { success: true, message: "Subscription active." }`

---

### 4.6 `GET` / `POST /api/cron/score`
**Purpose**: Recomputes catalog-wide popularity rankings according to Section 6.1 of the enterprise specification.
- **Mathematical Formula**:
  $$\text{Raw Score} = (0.50 \times \text{Inquiries}_{90d}) + (0.30 \times \text{Quotes}_{90d}) + (0.20 \times \text{Views}_{90d})$$
- **Normalization**: Normalized on a scale of `0.0` to `100.0` across the entire 238-item catalog and persisted back to PostgreSQL and the runtime store.

---

### 4.7 `GET /api/cron/send-pending-enquiries`
**Purpose**: Background scheduled worker designed to drain queued `PENDING` inquiries that could not be delivered immediately due to provider rate limits.
- **Batch Size**: Up to 90 items per run (sequential processing to respect provider burst quotas).
- **Retry Mechanism**: Increments `emailAttempts`; after 3 failed tries, flags as `FAILED` for administrator review.

---

## 5. Database Schema & Models (Prisma ORM)

The database schema is defined in [`prisma/schema.prisma`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/prisma/schema.prisma) and deployed on NeonDB Cloud PostgreSQL.

```mermaid
erDiagram
    PRODUCT ||--o{ PRODUCT_EVENT : "logs"
    PRODUCT {
        string id PK "cuid()"
        string slug UK "Unique URL slug"
        string name "Commercial trade name"
        string botanicalName "Binomial Latin nomenclature"
        enum category "ESSENTIAL_OIL, CARRIER_OIL, etc."
        string subCategory "Optional regional subtype"
        string description "Full technical profile"
        string shortSpec "Analytical spec summary"
        string overview "Botanical source & origin"
        string history "Traditional use & heritage"
        json benefits "Array of structured benefits"
        json manufacturingSteps "Process flow steps"
        enum bottleFormat "DROPPER_10ML, BOTTLE_100ML, etc."
        string signatureColor "Hex accent for theming"
        string labelImageUrl "High-res bottle render"
        string compositeImageUrl "Lifestyle / Botanical composite"
        string priceDisplay "Wholesale price tier / Request Quote"
        string moq "Minimum Order Quantity"
        float popularityScore "Computed 90-day score"
        boolean featured "Featured showcase flag"
        datetime createdAt
        datetime updatedAt
    }

    PRODUCT_EVENT {
        string id PK "cuid()"
        string productId FK
        enum type "VIEW, SEARCH_IMPRESSION, INQUIRY, ADD_TO_QUOTE"
        datetime createdAt
    }

    INQUIRY {
        string id PK "cuid()"
        string name "Client contact name"
        string email "Business email"
        string phone "Telephone / WhatsApp"
        string company "Company / Brand name"
        string country "Destination country"
        string category "Requested product / division"
        string[] productIds "Associated product IDs"
        string message "Specifications & notes"
        enum emailStatus "PENDING, SENT, FAILED"
        datetime emailSentAt
        int emailAttempts "Retry count"
        datetime createdAt
    }
```

### 5.1 Enums Defined
- `Category`: `ESSENTIAL_OIL`, `SPICE_OIL`, `CARRIER_OIL`, `FLORAL_ABSOLUTE`, `FLORAL_WATER`, `OLEORESIN`, `ORGANIC_OIL`, `AYURVEDIC`, `CO2_OIL`
- `BottleFormat`: `DROPPER_10ML`, `BOTTLE_100ML`, `BOTTLE_200ML`, `ROLL_ON_30ML`, `GIFT_BOX`
- `EventType`: `SEARCH_IMPRESSION`, `VIEW`, `INQUIRY`, `ADD_TO_QUOTE`
- `EmailStatus`: `PENDING`, `SENT`, `FAILED`

---

## 6. Frontend Pages & Routing Architecture

Next.js App Router renders **30 dedicated pages** across four distinct functional clusters:

### 6.1 Corporate & Heritage Cluster (`/about/*`)
- [`/about`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/about/page.tsx): Master corporate landing page detailing Mother Herbs heritage (since 2004), manufacturing capacities, and 3-step ordering process.
- [`/about/profile`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/about/profile/page.tsx): In-depth background on distillery facilities, warehousing, and corporate structure.
- [`/about/why-us`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/about/why-us/page.tsx): Strategic advantages: direct-from-source Indian growing belts, zero adulteration, competitive factory-gate pricing.
- [`/about/how-to-order`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/about/how-to-order/page.tsx): Clear, modern **3-step B2B purchasing flow** (Submit Enquiry &rarr; Quotation & Sample Verification &rarr; Order Confirmation & 48-Hour Dispatch).
- [`/about/trust-we-built`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/about/trust-we-built/page.tsx): 20+ years of continuous supply relationships with multinational cosmetic and pharmaceutical buyers.
- [`/about/founders-note`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/about/founders-note/page.tsx): Executive perspective on authentic Indian botanical heritage.
- [`/about/industries-we-serve`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/about/industries-we-serve/page.tsx): 2x2 responsive image grid detailing cosmetics, perfumery, food flavoring, pharmaceuticals, and aromatherapy.
- [`/about/countries-we-serve`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/about/countries-we-serve/page.tsx): Overview of export distribution across North America, Europe, Australia/NZ, Middle East, and Asia.

### 6.2 Product Discovery & Catalog Cluster (`/products/*`)
- [`/products`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/products/page.tsx): Universal catalog with live search, category pills, sorting by popularity or alphabet, and responsive product cards.
- [`/products/[category]`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/products/%5Bcategory%5D/page.tsx): Filtered category view highlighting division stats, extraction method, pharmacopoeial grades, and division-specific FAQs.
- [`/products/[category]/[slug]`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/products/%5Bcategory%5D/%5Bslug%5D/page.tsx): Full **Product Detail Page (PDP)**:
  - Botanical taxonomy and active constituent profiles.
  - Image gallery with dynamic signature color accenting.
  - Interactive sticky tab bar (`Overview`, `Specifications`, `Benefits`, `Packaging`).
  - Purchase panel with tiered MOQs and one-click RFQ trigger.
  - Mobile bottom sticky action bar for immediate touch quote submission.

### 6.3 Packaging & Infrastructure Cluster
- [`/packaging`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/packaging/page.tsx): Cleanroom packaging suites, retail glass bottles with European droppers, shock-absorbing cushion box packing, and industrial UN drums.
- [`/packaging/sizes`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/packaging/sizes/page.tsx): Exact dimensional tolerances, neck finishes (DIN 18, GPI 20/400), and container weights.
- [`/packaging/process`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/packaging/process/page.tsx): 99.999% nitrogen gas displacement inerting and automated torque-controlled closure capping.
- [`/packaging/shipment-policy`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/packaging/shipment-policy/page.tsx): Priority air cargo logistics, ocean container freight (FCL/LCL), and IATA dangerous goods packaging.
- [`/infrastructure`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/infrastructure/page.tsx): 2-column image grid illustrating stainless steel steam distillation stills, hydraulic cold presses, and supercritical CO₂ extraction units.

### 6.4 Technical & Interactive Hub Cluster
- [`/quality`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/quality/page.tsx): Detailed walkthrough of Shimadzu GC-MS chromatography, optical rotation, refractive index, and zero adulteration guarantees.
- [`/certifications`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/certifications/page.tsx): Interactive certificates matrix (WHO-GMP, ISO 22000, ISO 9001, US FDA, Halal, Kosher, FSSAI).
- [`/faqs`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/faqs/page.tsx): Centralized, dedicated FAQ page with real-time query search, category filters (General, Ordering, Quality, Packaging, Shipping), and Schema.org `FAQPage` structured data.
- [`/contact`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/contact/page.tsx): Commercial sales desk contact page with text box for product of interest, volume tiering, and direct inquiry submission.
- [`/request-quote`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/request-quote/page.tsx): Specialized B2B quote portal with document checkboxes (CoA, MSDS, GC-MS).
- [`/batch-lookup`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/batch-lookup/page.tsx): Verification tool allowing clients to enter a production lot code to review analytical parameters.
- [`/reviews`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/reviews/page.tsx): Verified client feedback from international cosmetic brands, flavor houses, and aromatherapists.
- [`/blog`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/blog/page.tsx) & [`/blog/[slug]`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/blog/%5Bslug%5D/page.tsx): Scientific articles on dilution safety, reading GC-MS chromatograms, and comparing distillation methods.
- [`/admin`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/app/admin/page.tsx): Administrative monitoring console.

---

## 7. AI Botanical & Export Chatbot Architecture

The AI Chatbot ([`src/components/client/ChatbotWidget.tsx`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/components/client/ChatbotWidget.tsx) and [`src/lib/chatbot-matcher.ts`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/lib/chatbot-matcher.ts)) acts as an automated 24/7 technical sales consultant and botanical database navigator.

```mermaid
flowchart TD
    UserQuery([User Enters Query]) --> Normalize[Normalize Text: lower, strip punctuation, replace co2]
    Normalize --> FaqCheck{Matches FAQs direct?}
    FaqCheck -- Yes --> ReturnFaq[Return FAQs Page link & summary]
    FaqCheck -- No --> CatCheck{Matches Category Intent?}
    CatCheck -- Yes --> ReturnCat[Return Category Profile, Specs, MOQ & Product Cards]
    CatCheck -- No --> ExportCheck{Matches Global Export?}
    ExportCheck -- Yes --> ReturnExport[Return 65+ Countries Compliance Profile]
    ExportCheck -- No --> ShipCheck{Matches Shipping / 48-Hr?}
    ShipCheck -- Yes --> ReturnShip[Return 48-Hour Order Dispatch & Logistics Profile]
    ShipCheck -- No --> QualityCheck{Matches GC-MS / Quality?}
    QualityCheck -- Yes --> ReturnQuality[Return Analytical Lab & CoA Standards]
    QualityCheck -- No --> CertCheck{Matches Certifications / Company?}
    CertCheck -- Yes --> ReturnCert[Return WHO-GMP, ISO & Mother Herbs Profile]
    CertCheck -- No --> PriceCheck{Matches Pricing / MOQ / Quote?}
    PriceCheck -- Yes --> ReturnPrice[Return Wholesale Tiering & Pre-filled RFQ Link]
    PriceCheck -- No --> PkgCheck{Matches Packaging / Droppers?}
    PkgCheck -- Yes --> ReturnPkg[Return Glass Finishes, European Droppers & Cushion Box]
    PkgCheck -- No --> OrderCheck{Matches How to Order / Samples?}
    OrderCheck -- Yes --> ReturnOrder[Return 3-Step Procurement & Pre-Shipment Sample Guide]
    OrderCheck -- No --> ProductSearch{Matches Any of 238 Catalog Products?}
    ProductSearch -- Yes --> ReturnProduct[Return Botanical Name, Spec, MOQ, Formats & Clean Link]
    ProductSearch -- No --> AppGuide{Matches Formulation / Application?}
    AppGuide -- Yes --> ReturnApp[Return Bioactive Recommendations & Products]
    AppGuide -- No --> StaticFaq{Matches Static FAQ Weighted Scoring?}
    StaticFaq -- Yes --> ReturnStatic[Return Matched FAQ Entry]
    StaticFaq -- No --> Fallback[Return Intelligent Smart Escalation: Phone, Email, RFQ]
```

### 7.1 Key Technical Algorithms
1. **Dynamic Category Slug Resolution**:
   All product links are resolved using `getCategorySlug(product.category)`, preventing broken routes and ensuring all catalog cards link to `/products/[category]/[slug]`.
2. **Botanical & Hindi Synonym Resolution Dictionary**:
   Maps colloquial, trade, and botanical roots to verified catalog entries:
   - `"khus"` &rarr; Vetiver Oil
   - `"nilgiri"` &rarr; Eucalyptus Oil
   - `"chandan"` &rarr; Sandalwood CO₂ Extract
   - `"haldi"` / `"curcumin"` &rarr; Turmeric Oil & CO₂ Extract
   - `"pudina"` &rarr; Peppermint & Spearmint Oil
   - `"elaichi"` &rarr; Cardamom Oil & CO₂ Extract
   - `"shallaki"` &rarr; Boswellia Serrata (Frankincense) Oil
   - `"vacha"` &rarr; Calamus Oil
   - `"kuth"` &rarr; Costus Root Oil
   - `"tagara"` &rarr; Valerian Oil
   - `"oud"` / `"oudh"` / `"agarwood"` &rarr; Cypriol & Sandalwood CO₂
3. **Intent Priority Ladder**:
   Evaluates broad operational queries (export, shipping, certifications, pricing) **before** running single-token botanical searches. This prevents inquiries like *"do you export to america"* from erroneously matching *Persea americana* (avocado oil).

---

## 8. Services Used & External Integrations

| Service | Category | Endpoint / Host | Functionality |
| :--- | :--- | :--- | :--- |
| **NeonDB** | Cloud Database | `ep-lingering-butterfly-b3n472vf-pooler.c-4.ap-southeast-1.aws.neon.tech` | Serverless PostgreSQL database with pooled and direct connections. Stores products, analytics telemetry events, and customer quotation records. |
| **Resend** | Transactional Email | `api.resend.com` | Primary API for delivering instant wholesale quote alerts and technical inquiry dossiers directly to the commercial sales desk. |
| **Google Workspace / Gmail** | SMTP Transport | `smtp.gmail.com:465` (SSL) | Enterprise fallback mail transport if primary API is interrupted or throttled. |
| **Google Translate** | Internationalization | `translate.google.com/translate_a/element.js` | Embedded runtime translation widget enabling international buyers in Japan, Germany, France, UAE, and South Korea to view catalog in native languages. |
| **WhatsApp Business API** | Instant Messaging | `https://wa.me/919312603330` | One-click direct connection from mobile/desktop floating dock to technical sales desk. |

---

## 9. Environment Variables & Configuration Keys

All environment variables are declared in `.env` (with template in `.env.example`):

```bash
# ==============================================================================
# DATABASE CONFIGURATION (POSTGRESQL — NEON CLOUD)
# ==============================================================================
# Pooled connection string used at runtime by Prisma Client & Node pg driver:
DATABASE_URL="postgresql://neondb_owner:npg_W9plvYAQMjZ7@ep-lingering-butterfly-b3n472vf-pooler.c-4.ap-southeast-1.aws.neon.tech/IndiaEssentialOils?sslmode=require"

# Direct connection string used for running Prisma CLI migrations:
DIRECT_DATABASE_URL="postgresql://neondb_owner:npg_W9plvYAQMjZ7@ep-lingering-butterfly-b3n472vf-pooler.c-4.ap-southeast-1.aws.neon.tech/IndiaEssentialOils?sslmode=require"

# ==============================================================================
# EMAIL DISPATCH CONFIGURATION (ENQUIRIES & B2B QUOTES)
# ==============================================================================
# Primary Provider: Resend (https://resend.com)
RESEND_API_KEY="re_N8q1rzLp_9c7skVRkUB1mYLT473JhsCTd"
RESEND_FROM_EMAIL="India Essential Oils <onboarding@resend.dev>"
ENQUIRY_NOTIFICATION_EMAIL="rahul@motherherbs.com"
ENQUIRY_RECIPIENT_EMAIL="rahul@motherherbs.com"

# Secondary Fallback: Gmail SMTP Credentials (e.g. Gmail App Password)
# Host: smtp.gmail.com | Port: 465 | Secure: true
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="465"
SMTP_SECURE="true"
SMTP_USER="nitya.agarwal005@gmail.com"
SMTP_PASS="" # 16-character Google App Password
SMTP_FROM="\"India Essential Oils Commercial Desk\" <nitya.agarwal005@gmail.com>"
```

---

## 10. Major Concepts & Engineering Highlights

### 10.1 Dual-Layer Catalog Store
- **Challenge**: Relying on live remote database calls for every search keystroke, category navigation, and chatbot lookup introduces network latency, cold-start delays, and database connection exhaustion.
- **Solution**: The 238 verified botanical catalog is compiled as a static, strongly typed in-memory array (`INITIAL_PRODUCTS` in [`src/lib/products-store.ts`](file:///Users/pranavishwar/VisualStudio/IndiaEssentialOils/src/lib/products-store.ts)). Reads, category filtering, and chatbot token lookups occur in **0ms** in-process memory. PostgreSQL is accessed only when persisting customer inquiries, tracking analytics events, or calculating cron popularity scores.

### 10.2 Mathematical Popularity Scoring
- Products receive an algorithmic popularity rating ($0.0 - 100.0$) derived from 90-day trailing customer behavior:
  $$\text{Popularity Score} = \text{Normalize}\left(0.50 \times \text{Inquiries} + 0.30 \times \text{Quotes} + 0.20 \times \text{Views}\right)$$
- High-intent actions (RFQs and sample requests) are weighted 2.5x higher than passive page impressions, ensuring the catalog naturally promotes high-demand wholesale botanicals.

### 10.3 SEO & Schema.org JSON-LD Structured Data
- Every page automatically outputs rich semantic JSON-LD structured data for Google, Bing, and AI search crawlers:
  - **`Organization` Schema**: Declares Mother Herbs Private Limited parentage, official address, telephone, and social profiles.
  - **`Product` Schema**: On all 238 PDPs, outputs `name`, `image`, `description`, `brand`, `sku`, `category`, and `offers` with `priceSpecification` and `availability: "InStock"`.
  - **`FAQPage` Schema**: On `/faqs`, encodes all questions and answers into Google-compliant FAQ rich snippets.
  - **`BreadcrumbList` Schema**: Emits clean hierarchical navigation chains.

### 10.4 Mobile-First Responsive Optimization
- **Newline Catalog View**: Mobile viewports adapt the product carousel to display **1 product per page** to accommodate tall vertical aspect ratios without text truncation.
- **Floating Action Docks**: Non-intrusive bottom dock houses WhatsApp and AI Chatbot buttons with auto-collapse triggers during page scroll.
- **PDP Mobile Sticky Bar**: A floating quick-quote bar sticks to the bottom of the viewport on mobile devices, allowing buyers to request quotations without scrolling back to top.

---

## 11. Maintenance, Development & Build Workflows

### 11.1 Local Development
```bash
# Install dependencies
npm install

# Generate Prisma Client
npx prisma generate

# Run local development server
npm run dev
# Server listening at http://localhost:3000
```

### 11.2 Production Build & Validation
```bash
# Typecheck TypeScript source
npx tsc --noEmit

# Compile production bundle (Turbopack + SSG for 283 routes)
npm run build

# Start production server
npm start
```

### 11.3 Database Operations
```bash
# Push schema changes directly to NeonDB Cloud
npx prisma db push

# Launch Prisma Studio web GUI to inspect inquiries & events
npx prisma studio
```

### 11.4 Chatbot Matcher Test Suite
```bash
# Run automated verification across 64+ multi-category test queries
npx tsx -e '
import { matchFaq } from "./src/lib/chatbot-matcher";
import faqData from "./src/data/chatbot-faq.json";
// Runs 64 validation queries against 238 catalog products
'
```

---

## 12. Conclusion & Enterprise Readiness

The **India Essential Oils** platform combines high visual aesthetics with an industrial-grade B2B infrastructure. It fulfills modern wholesale export demands: instant access to technical chromatography data, clear minimum order quantities, 48-hour order dispatch commitments, and an intelligent AI chatbot that routes buyers directly to the products and documentation they require.
