import { productStore, getCategorySlug, Product } from "@/lib/products-store";
import { COMPANY_INFO } from "@/lib/data";

export interface FaqEntry {
  id: string;
  patterns: string[];
  answer: string;
  actionLink?: {
    label: string;
    href: string;
  };
  recommendedProducts?: {
    name: string;
    slug: string;
    botanicalName?: string;
    category: string;
    moq: string;
  }[];
}

export interface QuickQuestion {
  label: string;
  query: string;
  category?: string;
}

export const QUICK_QUESTIONS: QuickQuestion[] = [
  {
    label: "🌿 What are CO₂ Oils?",
    query: "What are CO2 extracted oils and how do they differ from steam distilled oils?",
  },
  {
    label: "📦 Packaging & Droppers",
    query: "What packaging sizes, glass finishes, and dropper caps do you offer?",
  },
  {
    label: "⚡ Dispatch & Shipping Time",
    query: "What is your order dispatch time and shipping speed?",
  },
  {
    label: "🧴 Skincare Oil Recommendations",
    query: "Recommend oils for cosmetic and anti-aging skincare formulation",
  },
  {
    label: "🔬 GC-MS Purity & CoA",
    query: "How do you guarantee 100% purity with GC-MS test reports?",
  },
  {
    label: "🌍 Global Export Norms",
    query: "Which countries do you export to and what compliance documents are provided?",
  },
  {
    label: "📑 Download Catalog",
    query: "How can I download the complete 2026 botanical catalog?",
  },
];

/**
 * Normalizes user text by lowercasing, stripping special punctuation, and collapsing whitespace
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Application & Formulation Recommendation Topics
 */
const APPLICATION_RECOMMENDATIONS: {
  id: string;
  patterns: string[];
  title: string;
  description: string;
  productKeywords: string[];
  actionLink: { label: string; href: string };
}[] = [
  {
    id: "skincare_anti_aging",
    patterns: [
      "skin", "skincare", "anti aging", "anti-aging", "wrinkles", "face serum", "facial oil", "cosmetic",
      "glow", "acne", "blemish", "rejuvenating", "collagen", "moisturizer", "complexion"
    ],
    title: "Botanicals Recommended for Skincare & Anti-Aging Formulations",
    description: "For cosmetic skincare and high-performance serums, we recommend nutrient-dense cold-pressed carrier oils and active botanical distillates rich in essential fatty acids and cellular regenerators:",
    productKeywords: ["rosehip", "argan", "jojoba", "frankincense", "moringa", "saffron", "tea tree", "lavender", "kumkumadi"],
    actionLink: { label: "Explore Carrier & Base Oils", href: "/products/carrier-oils" },
  },
  {
    id: "hair_care",
    patterns: [
      "hair", "hair growth", "scalp", "hair loss", "dandruff", "follicle", "shampoo", "conditioner", "hair oil"
    ],
    title: "Botanicals Recommended for Scalp & Hair Care Formulations",
    description: "For hair growth stimulators, follicle strengthening oils, and anti-dandruff formulations, the following botanicals provide verified therapeutic efficacy:",
    productKeywords: ["rosemary", "bhringraj", "brahmi", "tea tree", "peppermint", "cedarwood", "argan", "jojoba", "castor"],
    actionLink: { label: "Explore Ayurvedic & Tailams", href: "/products/ayurvedic-oils" },
  },
  {
    id: "relaxation_sleep",
    patterns: [
      "sleep", "relaxation", "stress", "anxiety", "calming", "insomnia", "aromatherapy", "peaceful", "relax", "diffuser blend"
    ],
    title: "Botanicals Recommended for Relaxation, Sleep & Aromatherapy",
    description: "These pure steam-distilled essential oils are high in relaxing linalool, esters, and sesquiterpenes proven to reduce nervous tension and promote deep sleep:",
    productKeywords: ["lavender", "chamomile", "bergamot", "frankincense", "ylang ylang", "sandalwood", "cedarwood"],
    actionLink: { label: "Explore Essential Oils", href: "/products/essential-oils" },
  },
  {
    id: "perfumery_fragrance",
    patterns: [
      "perfume", "perfumery", "fragrance", "attar", "scent", "luxury perfume", "fine fragrance", "cologne", "floral notes"
    ],
    title: "Botanicals Recommended for Fine Perfumery & Luxury Fragrance",
    description: "For Master Perfumers and high-end fragrance houses, our pure floral absolutes and supercritical CO₂ extracts offer unmatched olfactory depth and projection:",
    productKeywords: ["jasmine", "rose", "oudh", "agarwood", "lotus", "sandalwood", "vanilla", "cardamom", "patchouli", "neroli"],
    actionLink: { label: "Explore Floral Absolutes", href: "/products/floral-absolutes" },
  },
  {
    id: "pain_muscle_relief",
    patterns: [
      "pain", "muscle", "joint", "arthritis", "inflammation", "soreness", "massage", "analgesic", "sprain", "rub"
    ],
    title: "Botanicals Recommended for Muscle Relief & Pain Formulations",
    description: "For therapeutic rubs, sports balms, and orthopedic massage blends, these oils deliver natural heating, cooling, and anti-inflammatory circulation support:",
    productKeywords: ["eucalyptus", "peppermint", "wintergreen", "clove", "black pepper", "ginger", "mahanarayan", "turmeric"],
    actionLink: { label: "Explore Ayurvedic & Spice Oils", href: "/products/spice-oils" },
  },
  {
    id: "food_flavoring",
    patterns: [
      "food", "flavor", "flavour", "flavoring", "culinary", "beverage", "spice extract", "edible", "seasoning", "confectionery"
    ],
    title: "Botanicals Recommended for Food, Beverage & Flavoring Applications",
    description: "Our standardized oleoresins and supercritical CO₂ spice extracts provide true-to-nature pungency, aroma, and soluble active profiles with 0.00 ppm solvent residue:",
    productKeywords: ["cardamom", "black pepper", "ginger", "cinnamon", "clove", "nutmeg", "vanilla", "turmeric", "fennel"],
    actionLink: { label: "Explore Spice Oils & Oleoresins", href: "/products/spice-oils" },
  },
];

/**
 * Technical CO2 Oils specific matcher
 */
function checkCo2OilsQuery(normalized: string): FaqEntry | null {
  const co2Patterns = [
    "co2", "co 2", "supercritical", "super critical", "sfe", "co2 extract", "co2 oil",
    "co2 extracted", "what are co2 oils", "how are co2 oils made", "difference between co2 and steam",
    "why co2", "subcritical", "liquid co2"
  ];

  const matchesCo2 = co2Patterns.some(p => normalized.includes(p));
  if (!matchesCo2) return null;

  const allProducts = productStore.getAll();
  const co2Products = allProducts
    .filter(p => p.category === "CO2_OIL" || p.name.toLowerCase().includes("co2") || p.description.toLowerCase().includes("supercritical"))
    .slice(0, 4)
    .map(p => ({
      name: p.name,
      slug: p.slug,
      botanicalName: p.botanicalName,
      category: "CO2_OIL",
      moq: p.moq || "1 kg",
    }));

  return {
    id: "co2_extracted_oils_expert",
    patterns: co2Patterns,
    answer: `🌿 **Supercritical CO₂ Fluid Extraction (SFE) Explained:**

CO₂ Extracted Oils are premium botanical extracts produced using pressurized, food-grade liquid carbon dioxide (CO₂) at ambient temperatures (~31.1°C). 

**Key Advantages over Traditional Steam Distillation & Solvents:**
1. **0.00 ppm Solvent Residue:** When pressure is released at the end of extraction, CO₂ returns to harmless gas and completely evaporates, leaving zero petrochemical or chemical residue (unlike hexane/ethanol absolutes).
2. **Thermal Degradation Free:** Operates at low temperatures (31.1°C vs. 100°C+ for steam), preserving delicate, heat-sensitive top notes and botanical biomolecules.
3. **Full-Spectrum Bioactives:** Captures both volatile aromatic terpenes and heavier therapeutic lipophilic compounds (e.g. gingerols, curcuminoids, resins, and lactones) that cannot pass through steam distillation columns.
4. **True-to-Nature Aroma:** Delivers an aroma profile nearly identical to the fresh living plant.

We manufacture bulk CO₂ extracts (Cardamom CO₂, Ginger CO₂, Vanilla CO₂, Turmeric CO₂, Jasmine CO₂, Pink Pepper CO₂) in 1kg–25kg aluminum canisters and 25kg–50kg drums.`,
    actionLink: {
      label: "Browse All CO₂ Extracted Oils",
      href: "/products/co2-oils",
    },
    recommendedProducts: co2Products,
  };
}

/**
 * Packaging & OEM Capping matcher
 */
function checkPackagingQuery(normalized: string): FaqEntry | null {
  const pkgPatterns = [
    "packaging", "packing", "bottle", "bottles", "glass bottle", "dropper", "droppers",
    "euro dropper", "european dropper", "pipette", "amber glass", "matte glass", "clear glass",
    "cushion box", "outer box", "gift box", "private label", "private labeling", "oem",
    "canister", "aluminum bottle", "hdpe drum", "steel drum", "nitrogen capping", "nitrogen inerting"
  ];

  const matchesPkg = pkgPatterns.some(p => normalized.includes(p));
  if (!matchesPkg) return null;

  return {
    id: "packaging_oem_expert",
    patterns: pkgPatterns,
    answer: `📦 **Precision Packaging & OEM Private Label Capabilities:**

India Essential Oils operates climate-controlled packaging suites compliant with international export standards:

**1. Retail Glassware (5 ml, 10 ml, 20 ml, 50 ml, 100 ml, 200 ml, 500 ml, 1 kg, 2 kg):**
• **Finishes:** Amber Glass (maximum UV-shielding), Clear Glass, Matte Finish Frosted Glass, Cobalt Blue, and Emerald Green.
• **Closures:** European Dropper type droppers (orifice reducers), calibrated glass pipettes, tamper-evident sealed caps, flip top caps, treatment pumps, and rollerballs.

**2. Outer Box & Cushion Box Packing (Gift Packaging Available):**
• Specialized shock-absorbing **Cushion Box Packing** and rigid secondary outer cartons engineered to protect glass against vibration, compression, and impact forces during long-distance transit.

**3. Bulk & Wholesale Containers:**
• **Aluminum Bottles:** 1 Kg, 2 Kg, 5 Kg, 10 Kg, 25 Kg+ with epoxy barrier linings.
• **HDPE Drums & Barrels:** 5 kg, 20 Kg, 25 Kg, 50 kg, 200 kg (Open Top & Closed Top).
• **Steel & GI Drums:** 20 Kg, 40 Kg, 200 Kg with narrow mouth & bung closures.

**4. Nitrogen Capping:**
• Automated 99.999% ultra-pure nitrogen gas displacement capping to purge oxygen and protect sensitive oils against oxidative degradation on special requests.`,
    actionLink: {
      label: "Explore Packaging & OEM Solutions",
      href: "/packaging",
    },
  };
}

/**
 * Dispatch, Shipping & Transit matcher
 */
function checkShippingQuery(normalized: string): FaqEntry | null {
  const shipPatterns = [
    "shipping", "delivery", "dispatch", "lead time", "transit", "shipping time",
    "how fast", "delivery period", "when will it ship", "shipping cost", "freight",
    "air cargo", "sea freight", "dhl", "fedex", "48 hours"
  ];

  const matches = shipPatterns.some(p => normalized.includes(p));
  if (!matches) return null;

  return {
    id: "shipping_dispatch_expert",
    patterns: shipPatterns,
    answer: `⚡ **Prompt 48-Hour Order Dispatch & Global Shipping:**

• **48-Hour Dispatch:** Because we maintain substantial bulk inventories of regular products across our 1,000 MT climate-controlled warehouse in New Delhi, we usually despatch orders within **48 hours** of payment confirmation.
• **Economical Rates:** We consider shipping vital (accounting for 5–20% of business cost) and offer preferential bulk rates through direct tie-ups with major ocean shipping lines and clearing house agents.
• **Air Cargo Express (3–6 Days):** Rapid worldwide transit via DHL, FedEx, UPS, and airline cargo hubs with full Dangerous Goods (IATA/IMDG) declarations.
• **Ocean Freight (FCL / LCL):** Containerized seafreight via Mundra and Nhava Sheva (JNPT) ports with temperature-controlled reefer container options.
• **Full Post-Shipment Support:** Real-time consignment tracking, timely documentation, and country-specific customs facilitation.`,
    actionLink: {
      label: "Request a Shipping & Delivery Quote",
      href: "/request-quote",
    },
  };
}

/**
 * Prominent Export Countries & Norms matcher
 */
function checkExportCountriesQuery(normalized: string): FaqEntry | null {
  const exportPatterns = [
    "export", "countries", "usa", "america", "australia", "new zealand", "nz",
    "middle east", "dubai", "saudi", "europe", "eu", "uk", "reach", "ifra", "norms", "regulations"
  ];

  const matches = exportPatterns.some(p => normalized.includes(p));
  if (!matches) return null;

  return {
    id: "export_countries_norms_expert",
    patterns: exportPatterns,
    answer: `🌍 **Prominent Global Export Corridors & Regulatory Standards:**

India Essential Oils exports bulk botanical oils to verified formulators in over 50 countries across 5 prominent regions:

1. **United States of America (USA):** High-volume corridor for USDA organic essential oils, cold-pressed base oils, and CO₂ extracts compliant with US FDA regulations and OSHA GHS Safety Data Sheets.
2. **Australia & New Zealand (Oceania):** Therapeutic and aromatherapy grade botanicals compliant with TGA, AICIS, and EPA New Zealand standards.
3. **Middle East (UAE, Saudi Arabia, Qatar, Oman):** Luxury perfumery absolutes, high-grade oudh/agarwood, and spice oils with Halal certification and GSO conformity.
4. **Europe (EU & UK) — Specialized High-Compliance Focus:** We successfully navigate complex European regulatory frameworks by providing:
   • **EU Cosmetics Regulation (EC No 1223/2009)** & CosIng ingredient dossiers.
   • **EU REACH & CLP** chemical registration support.
   • **IFRA 51st Amendment** certificates across all 11 fragrance categories.
   • Government-certified Phytosanitary & EUR.1 / REX trade facilitation.`,
    actionLink: {
      label: "Read About Our Global Trade Corridors",
      href: "/about",
    },
  };
}

/**
 * Full Catalog Download matcher
 */
function checkDownloadCatalogQuery(normalized: string): FaqEntry | null {
  const downloadPatterns = [
    "download", "download catalog", "pdf catalog", "catalog pdf", "full catalog",
    "product list", "brochure", "spec sheet", "offline catalog", "price list"
  ];

  const matches = downloadPatterns.some(p => normalized.includes(p));
  if (!matches) return null;

  return {
    id: "download_catalog_expert",
    patterns: downloadPatterns,
    answer: `📑 **Download the 2026 Botanical Wholesale Catalog:**

You can download our complete 2026 Wholesale Catalog containing all 238+ verified botanical products, botanical names, extraction methods, CAS numbers, MOQs, and technical dossiers.`,
    actionLink: {
      label: "Download Full 2026 Catalog (TXT/PDF)",
      href: "/api/catalog/download",
    },
  };
}

/**
 * Searches the entire 238-product catalog dynamically
 */
export function searchProductCatalog(normalizedInput: string): FaqEntry | null {
  const allProducts = productStore.getAll();

  // Check direct product name or botanical name match
  for (const product of allProducts) {
    const normName = normalizeText(product.name);
    const normBot = product.botanicalName ? normalizeText(product.botanicalName) : "";
    const normSlug = normalizeText(product.slug.replace(/-/g, " "));

    const isMatch =
      (normName && normalizedInput.includes(normName)) ||
      (normBot && normBot.length > 5 && normalizedInput.includes(normBot)) ||
      (normSlug && normSlug.length > 5 && normalizedInput.includes(normSlug));

    if (isMatch) {
      const categoryLabel = product.category.replace(/_/g, " ");
      const benefitSummary = product.benefits?.slice(0, 2).map(b => `• **${b.title}:** ${b.description}`).join("\n") || `• **Pure Distillate:** Batch verified via GC-MS with zero adulterants.`;

      return {
        id: `product_found_${product.slug}`,
        patterns: [product.name, product.slug],
        answer: `🌿 **${product.name}** (${product.botanicalName || "Pure Botanical Distillate"})

• **Category:** ${categoryLabel}
• **Specification:** ${product.shortSpec}
• **Standard MOQ:** ${product.moq || "1 kg / 500 Units"}
• **Packaging Options:** 10ml–500ml Glass, 1kg–25kg Aluminum, 20kg–200kg Export Drums (Cushion Box & Nitrogen Capping Available).
• **Quality:** 100% GC-MS Tested with lot-specific Certificate of Analysis (CoA).

${benefitSummary}`,
        actionLink: {
          label: `View ${product.name} Details`,
          href: `/products/${product.slug}`,
        },
        recommendedProducts: [
          {
            name: product.name,
            slug: product.slug,
            botanicalName: product.botanicalName,
            category: product.category,
            moq: product.moq || "1 kg",
          }
        ],
      };
    }
  }

  // Check general availability query for an unknown product
  const availabilityTerms = ["do you have", "do you sell", "do you supply", "do you carry", "is there any", "can i buy", "in stock"];
  const isAskingAvailability = availabilityTerms.some(term => normalizedInput.includes(term));

  if (isAskingAvailability) {
    // If asking about general catalog
    if (normalizedInput.includes("all") || normalizedInput.includes("everything") || normalizedInput.includes("catalog")) {
      return {
        id: "availability_all_yes",
        patterns: ["in stock", "available"],
        answer: `Yes, all 238+ certified pure botanical extracts in our catalog are manufactured and maintained in continuous bulk stock at our New Delhi distillation warehouse for prompt 48-hour global dispatch.`,
        actionLink: {
          label: "Explore All 238 Botanical Products",
          href: "/products",
        },
      };
    }

    // Try fuzzy match on any word
    const words = normalizedInput.split(" ").filter(w => w.length > 4);
    const candidate = allProducts.find(p => words.some(w => p.name.toLowerCase().includes(w) || (p.botanicalName && p.botanicalName.toLowerCase().includes(w))));

    if (candidate) {
      return {
        id: `product_fuzzy_${candidate.slug}`,
        patterns: [candidate.name],
        answer: `Yes! We manufacture and stock **${candidate.name}** (${candidate.botanicalName || "Pure Distillate"}). Standard wholesale MOQ is ${candidate.moq || "1 kg"}. Batch GC-MS tested with Certificate of Analysis (CoA).`,
        actionLink: {
          label: `View ${candidate.name}`,
          href: `/products/${candidate.slug}`,
        },
      };
    }
  }

  return null;
}

/**
 * Searches application / formulation recommendations
 */
export function matchApplicationRecommendations(normalizedInput: string): FaqEntry | null {
  for (const app of APPLICATION_RECOMMENDATIONS) {
    const isMatch = app.patterns.some(p => normalizedInput.includes(p));
    if (isMatch) {
      const allProducts = productStore.getAll();
      const matched = allProducts
        .filter(p => app.productKeywords.some(kw => p.name.toLowerCase().includes(kw) || p.slug.includes(kw)))
        .slice(0, 4)
        .map(p => ({
          name: p.name,
          slug: p.slug,
          botanicalName: p.botanicalName,
          category: p.category,
          moq: p.moq || "1 kg",
        }));

      const productListText = matched.map((p, i) => `${i + 1}. **${p.name}** (${p.botanicalName || "Pure Extract"}) — MOQ: ${p.moq}`).join("\n");

      return {
        id: `rec_${app.id}`,
        patterns: app.patterns,
        answer: `✨ **${app.title}**

${app.description}

${productListText}

All botanicals are GC-MS verified with custom retail dropper bottling (10ml–500ml), cushion box packing, and private labeling available.`,
        actionLink: app.actionLink,
        recommendedProducts: matched,
      };
    }
  }

  return null;
}

/**
 * Master Intelligent Matcher
 */
export function matchFaq(userInput: string, faqData: FaqEntry[]): FaqEntry | null {
  const normalized = normalizeText(userInput);
  if (!normalized) return null;

  // 1. High Priority: CO2 Oils & Supercritical Extraction Queries
  const co2Match = checkCo2OilsQuery(normalized);
  if (co2Match) return co2Match;

  // 2. High Priority: Dynamic Product Catalog Search across 238 items
  const productMatch = searchProductCatalog(normalized);
  if (productMatch) return productMatch;

  // 3. High Priority: Formulation & Application Recommendations
  const appMatch = matchApplicationRecommendations(normalized);
  if (appMatch) return appMatch;

  // 4. Priority: Packaging, Dropper Caps & Cushion Box Packing
  const pkgMatch = checkPackagingQuery(normalized);
  if (pkgMatch) return pkgMatch;

  // 5. Priority: Shipping, Dispatch Time & Logistics
  const shipMatch = checkShippingQuery(normalized);
  if (shipMatch) return shipMatch;

  // 6. Priority: Global Export Countries & European Norms
  const exportMatch = checkExportCountriesQuery(normalized);
  if (exportMatch) return exportMatch;

  // 7. Priority: Full Catalog Download
  const downloadMatch = checkDownloadCatalogQuery(normalized);
  if (downloadMatch) return downloadMatch;

  // 8. General Length-Weighted Pattern Scoring against static FAQ database
  let bestEntry: FaqEntry | null = null;
  let highestScore = 0;

  for (const entry of faqData) {
    let entryScore = 0;

    for (const pattern of entry.patterns) {
      const normPattern = normalizeText(pattern);
      if (!normPattern) continue;

      if (normalized === normPattern) {
        entryScore += normPattern.length * 4 + 20;
        continue;
      }

      if (normalized.includes(normPattern)) {
        const weight = normPattern.length > 5 ? normPattern.length * 2 : normPattern.length;
        entryScore += weight;

        const regex = new RegExp(`(^|\\s)${normPattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\s|$)`, "i");
        if (regex.test(normalized)) {
          entryScore += 8;
        }
      }
    }

    if (entryScore > highestScore) {
      highestScore = entryScore;
      bestEntry = entry;
    }
  }

  return highestScore > 0 ? bestEntry : null;
}
