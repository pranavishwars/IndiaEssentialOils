export interface FaqEntry {
  id: string;
  patterns: string[];
  answer: string;
}

export interface QuickQuestion {
  label: string;
  query: string;
}

export interface CatalogItemRef {
  name: string;
  botanicalName: string;
  categorySlug: string;
  slug: string;
  moq: string;
  keywords: string[];
}

export const CATALOG_PRODUCTS: CatalogItemRef[] = [
  {
    name: "Lavender Essential Oil",
    botanicalName: "Lavandula angustifolia",
    categorySlug: "essential-oils",
    slug: "lavender-oil",
    moq: "1 kg",
    keywords: ["lavender", "lavandula", "kashmir lavender", "lavender oil"],
  },
  {
    name: "Peppermint Essential Oil",
    botanicalName: "Mentha piperita",
    categorySlug: "essential-oils",
    slug: "peppermint-oil",
    moq: "1 kg",
    keywords: ["peppermint", "mentha piperita", "menthol", "peppermint oil"],
  },
  {
    name: "Tea Tree Essential Oil",
    botanicalName: "Melaleuca alternifolia",
    categorySlug: "essential-oils",
    slug: "tea-tree-oil",
    moq: "1 kg",
    keywords: ["tea tree", "melaleuca", "melaleuca alternifolia", "tea tree oil"],
  },
  {
    name: "Frankincense Essential Oil",
    botanicalName: "Boswellia serrata",
    categorySlug: "essential-oils",
    slug: "frankincense-oil",
    moq: "1 kg",
    keywords: ["frankincense", "boswellia", "boswellia serrata", "olibanum", "frankincense oil"],
  },
  {
    name: "Eucalyptus Essential Oil",
    botanicalName: "Eucalyptus globulus",
    categorySlug: "essential-oils",
    slug: "eucalyptus-oil",
    moq: "1 kg",
    keywords: ["eucalyptus", "eucalyptus globulus", "nilgiri", "eucalyptus oil"],
  },
  {
    name: "Lemongrass Essential Oil",
    botanicalName: "Cymbopogon flexuosus",
    categorySlug: "essential-oils",
    slug: "lemongrass-oil",
    moq: "1 kg",
    keywords: ["lemongrass", "cymbopogon", "cymbopogon flexuosus", "lemongrass oil"],
  },
  {
    name: "Rosemary Essential Oil",
    botanicalName: "Rosmarinus officinalis",
    categorySlug: "essential-oils",
    slug: "rosemary-oil",
    moq: "1 kg",
    keywords: ["rosemary", "rosmarinus", "rosmarinus officinalis", "rosemary oil"],
  },
  {
    name: "Indian Sandalwood Oil",
    botanicalName: "Santalum album",
    categorySlug: "essential-oils",
    slug: "sandalwood-oil",
    moq: "1 kg",
    keywords: ["sandalwood", "santalum album", "chandan", "indian sandalwood", "sandalwood oil"],
  },
  {
    name: "Black Pepper Essential Oil",
    botanicalName: "Piper nigrum",
    categorySlug: "spice-oils",
    slug: "black-pepper-oil",
    moq: "1 kg",
    keywords: ["black pepper", "piper nigrum", "pepper oil", "black pepper oil"],
  },
  {
    name: "Green Cardamom Oil",
    botanicalName: "Elettaria cardamomum",
    categorySlug: "spice-oils",
    slug: "cardamom-oil",
    moq: "1 kg",
    keywords: ["cardamom", "green cardamom", "elettaria cardamomum", "elaichi", "cardamom oil"],
  },
  {
    name: "Cinnamon Bark Oil",
    botanicalName: "Cinnamomum zeylanicum",
    categorySlug: "spice-oils",
    slug: "cinnamon-bark-oil",
    moq: "1 kg",
    keywords: ["cinnamon", "cinnamon bark", "cinnamomum zeylanicum", "dalchini", "cinnamon oil"],
  },
  {
    name: "Golden Jojoba Carrier Oil",
    botanicalName: "Simmondsia chinensis",
    categorySlug: "carrier-oils",
    slug: "jojoba-oil",
    moq: "5 kg",
    keywords: ["jojoba", "golden jojoba", "simmondsia chinensis", "jojoba oil"],
  },
  {
    name: "Virgin Argan Carrier Oil",
    botanicalName: "Argania spinosa",
    categorySlug: "carrier-oils",
    slug: "argan-oil",
    moq: "5 kg",
    keywords: ["argan", "virgin argan", "argania spinosa", "moroccan argan", "argan oil"],
  },
  {
    name: "Sweet Almond Oil",
    botanicalName: "Prunus amygdalus dulcis",
    categorySlug: "carrier-oils",
    slug: "sweet-almond-oil",
    moq: "5 kg",
    keywords: ["almond", "sweet almond", "prunus amygdalus", "badam", "almond oil"],
  },
  {
    name: "Rose Damascena Absolute",
    botanicalName: "Rosa damascena",
    categorySlug: "floral-absolutes",
    slug: "rose-absolute",
    moq: "500 g",
    keywords: ["rose absolute", "rose damascena absolute", "damask rose absolute", "rose oil absolute"],
  },
  {
    name: "Jasmine Sambac Absolute",
    botanicalName: "Jasminum sambac",
    categorySlug: "floral-absolutes",
    slug: "jasmine-absolute",
    moq: "500 g",
    keywords: ["jasmine", "jasmine absolute", "jasmine sambac", "mogra", "jasmine oil"],
  },
  {
    name: "Pure Rose Floral Water (Hydrosol)",
    botanicalName: "Rosa damascena distillate",
    categorySlug: "floral-waters",
    slug: "rose-floral-water",
    moq: "10 kg",
    keywords: ["rose water", "hydrosol", "rose hydrosol", "floral water", "gulab jal"],
  },
  {
    name: "Capsicum Oleoresin",
    botanicalName: "Capsicum annuum",
    categorySlug: "oleoresins",
    slug: "capsicum-oleoresin",
    moq: "5 kg",
    keywords: ["capsicum", "capsicum oleoresin", "capsaicin", "chilli oleoresin", "chili extract"],
  },
  {
    name: "Certified Organic Lavender Oil",
    botanicalName: "Lavandula angustifolia (Organic)",
    categorySlug: "organic-oils",
    slug: "organic-lavender-oil",
    moq: "1 kg",
    keywords: ["organic lavender", "certified organic lavender", "usda organic lavender"],
  },
  {
    name: "Kumkumadi Tailam (Ayurvedic Oil)",
    botanicalName: "Traditional Ayurvedic Formulation",
    categorySlug: "ayurvedic-oils",
    slug: "kumkumadi-tailam",
    moq: "5 kg",
    keywords: ["kumkumadi", "kumkumadi tailam", "kumkumadi oil"],
  },
  {
    name: "Bhringraj Herbal Scalp Oil",
    botanicalName: "Eclipta alba extract in Sesamum indicum",
    categorySlug: "ayurvedic-oils",
    slug: "bhringraj-oil",
    moq: "5 kg",
    keywords: ["bhringraj", "bhringraj oil", "eclipta alba", "bringraj oil"],
  },
];

export const QUICK_QUESTIONS: QuickQuestion[] = [
  {
    label: "What is your MOQ?",
    query: "What is your minimum order quantity (MOQ)?",
  },
  {
    label: "Is Lavender Oil in stock?",
    query: "Do you have Lavender Essential Oil available in stock?",
  },
  {
    label: "Do you test with GC-MS?",
    query: "Do you provide GC-MS purity test reports and CoA?",
  },
  {
    label: "International shipping?",
    query: "What are your international export shipping timelines?",
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
 * Checks if a query is specifically asking about product availability / stock
 */
const AVAILABILITY_PHRASES = [
  "do you have",
  "do you sell",
  "do you supply",
  "do you carry",
  "is there any",
  "are there any",
  "in stock",
  "available",
  "availability",
  "can i buy",
  "can i get",
  "can i order",
  "have you got",
  "stock of",
  "got any",
];

export function checkProductAvailability(normalizedInput: string): FaqEntry | null {
  const isAvailabilityQuery = AVAILABILITY_PHRASES.some((phrase) =>
    normalizedInput.includes(phrase)
  );

  // 1. Check if query matches a specific catalog product first
  for (const product of CATALOG_PRODUCTS) {
    const hasKeyword = product.keywords.some((kw) => normalizedInput.includes(kw));

    if (hasKeyword) {
      return {
        id: `availability_yes_${product.slug}`,
        patterns: product.keywords,
        answer: `Yes, ${product.name} (${product.botanicalName}) is currently in stock and available for wholesale supply with a minimum order quantity (MOQ) of ${product.moq}. Every production batch is GC-MS certified with a full Certificate of Analysis (CoA).`,
      };
    }
  }

  // 2. Check general catalog stock inquiry (e.g. "is everything in stock", "are products in stock")
  const isGeneralStock =
    normalizedInput === "is everything in stock" ||
    normalizedInput === "are all products in stock" ||
    normalizedInput.includes("all products in stock") ||
    normalizedInput.includes("everything in stock") ||
    normalizedInput.includes("products in stock") ||
    normalizedInput.includes("stock available") ||
    normalizedInput.includes("in stock for dispatch") ||
    (isAvailabilityQuery &&
      (normalizedInput.includes("all products") ||
        normalizedInput.includes("all oils") ||
        normalizedInput.includes("full catalog") ||
        normalizedInput.includes("everything")));

  if (isGeneralStock) {
    return {
      id: "availability_general_yes",
      patterns: ["in stock", "available"],
      answer:
        "Yes, all 21 certified pure botanical extracts listed in our catalog are in stock and manufactured year-round at our New Delhi distillation facilities for immediate domestic and international bulk dispatch.",
    };
  }

  // 3. If user explicitly asked an availability question for an item NOT in our catalog:
  if (isAvailabilityQuery) {
    return {
      id: "availability_no",
      patterns: ["do you have", "do you sell", "is in stock"],
      answer:
        "No, we currently do not stock that specific item in our standard catalog. India Essential Oils specializes exclusively in 21 pure steam-distilled essential oils, cold-pressed carrier oils, floral absolutes, and certified Ayurvedic formulations. You can view our Catalog for in-stock botanicals or contact our sales desk for custom contract distillation.",
    };
  }

  return null;
}

/**
 * High-speed, zero-dependency pattern matcher against static FAQ dataset and product catalog
 */
export function matchFaq(userInput: string, faqData: FaqEntry[]): FaqEntry | null {
  const normalized = normalizeText(userInput);
  if (!normalized) return null;

  // 1. First priority: Check dedicated product availability Yes/No matcher
  const availabilityMatch = checkProductAvailability(normalized);
  if (availabilityMatch) {
    return availabilityMatch;
  }

  // 2. Second priority: Standard length-weighted FAQ pattern scoring
  let bestEntry: FaqEntry | null = null;
  let highestScore = 0;

  for (const entry of faqData) {
    let entryScore = 0;

    for (const pattern of entry.patterns) {
      const normPattern = normalizeText(pattern);
      if (!normPattern) continue;

      // Exact full match gets maximum boost
      if (normalized === normPattern) {
        entryScore += normPattern.length * 4 + 20;
        continue;
      }

      // Substring match
      if (normalized.includes(normPattern)) {
        // Longer patterns have exponentially higher specificity
        const weight = normPattern.length > 5 ? normPattern.length * 2 : normPattern.length;
        entryScore += weight;

        // Word boundary match bonus
        const regex = new RegExp(
          `(^|\\s)${normPattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\s|$)`,
          "i"
        );
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

  // Strict threshold: Require authentic match
  return highestScore > 0 ? bestEntry : null;
}
