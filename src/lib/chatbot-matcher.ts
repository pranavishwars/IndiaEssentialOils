import { productStore, getCategorySlug, Product, INITIAL_PRODUCTS } from "@/lib/products-store";
import { COMPANY_INFO } from "@/lib/data";

export interface RecommendedProduct {
  name: string;
  slug: string;
  botanicalName?: string;
  category: string;
  moq: string;
  shortSpec?: string;
}

export interface FaqEntry {
  id: string;
  patterns: string[];
  answer: string;
  actionLink?: {
    label: string;
    href: string;
  };
  recommendedProducts?: RecommendedProduct[];
}

export interface QuickQuestion {
  label: string;
  query: string;
  category?: string;
}

export const QUICK_QUESTIONS: QuickQuestion[] = [
  {
    label: "🌿 Essential Oils Catalog",
    query: "What essential oils do you manufacture and supply in bulk?",
  },
  {
    label: "🌱 What are CO₂ Oils?",
    query: "What are Supercritical CO2 Extracts and how do they differ from steam distilled oils?",
  },
  {
    label: "🧴 Carrier & Base Oils",
    query: "Which cold-pressed carrier oils do you produce for skincare and cosmetics?",
  },
  {
    label: "📦 Droppers & Packaging",
    query: "What packaging sizes, glass finishes, and dropper caps do you offer for private label?",
  },
  {
    label: "⚡ 48-Hour Order Dispatch",
    query: "What is your order dispatch turnaround and global shipping timeline?",
  },
  {
    label: "🔬 GC-MS Purity & CoA",
    query: "How do you guarantee 100% purity and what laboratory testing reports are provided?",
  },
  {
    label: "💰 Price & Minimum Order",
    query: "What is your wholesale Minimum Order Quantity (MOQ) and pricing structure?",
  },
  {
    label: "📑 Download 2026 Catalog",
    query: "How can I download the complete 2026 botanical wholesale catalog?",
  },
];

/**
 * Normalizes user text: lowercases, strips punctuation, replaces unicode CO₂ with co2, and collapses whitespace
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/co₂/g, "co2")
    .replace(/[^\w\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Comprehensive Botanical Synonyms and Common Names Mapping
 */
const BOTANICAL_SYNONYMS: Record<string, string[]> = {
  lavender: ["lavender oil", "organic lavender", "lavandula angustifolia"],
  peppermint: ["peppermint oil", "organic peppermint oil", "mentha piperita"],
  mint: ["peppermint oil", "spearmint oil", "mint oil", "mentha"],
  pudina: ["peppermint oil", "spearmint oil", "mint oil"],
  agarwood: ["sandalwood co2 extract", "cypriol oil (nagarmotha oil)", "aquilaria agallocha"],
  oud: ["sandalwood co2 extract", "cypriol oil (nagarmotha oil)"],
  oudh: ["sandalwood co2 extract", "cypriol oil (nagarmotha oil)"],
  "tea tree": ["tea tree oil", "melaleuca alternifolia"],
  melaleuca: ["tea tree oil"],
  eucalyptus: ["eucalyptus oil", "nilgiri", "eucalyptus globulus"],
  nilgiri: ["eucalyptus oil"],
  rosemary: ["rosemary oil", "rosemary co2 extract", "rosmarinus officinalis"],
  frankincense: ["frankincense oil", "boswellia serrata oil", "olibanum", "shallaki"],
  olibanum: ["frankincense oil"],
  shallaki: ["boswellia serrata oil (shallaki)", "frankincense oil"],
  boswellia: ["frankincense oil", "boswellia serrata oil (shallaki)"],
  sandalwood: ["sandalwood co2 extract", "chandan", "santalum album"],
  chandan: ["sandalwood co2 extract"],
  rose: ["rose oil (damascena)", "rosa damascena"],
  gulab: ["rose oil (damascena)"],
  jasmine: ["jasmine co2 extract", "organic jasmine oil", "jasminum sambac"],
  chameli: ["jasmine co2 extract", "organic jasmine oil"],
  mogra: ["jasmine co2 extract", "organic jasmine oil"],
  cardamom: ["cardamom oil", "cardamom co2 extract", "cardamom oleoresin 10%", "elettaria cardamomum"],
  elaichi: ["cardamom oil", "cardamom co2 extract"],
  ginger: ["ginger oil", "ginger co2 extract", "ginger oleoresin 30%", "ginger grass oil", "zingiber officinale"],
  adrak: ["ginger oil", "ginger co2 extract"],
  turmeric: ["turmeric oil", "turmeric co2 extract", "turmeric leaf oil", "curcuma longa", "haldi"],
  haldi: ["turmeric oil", "turmeric co2 extract", "turmeric leaf oil"],
  curcumin: ["turmeric oil", "turmeric co2 extract"],
  vanilla: ["vanilla oil", "vanilla co2 extract", "vanilla planifolia"],
  clove: ["clove oil", "clove bud oil", "clove co2 extract", "syzygium aromaticum", "laung"],
  laung: ["clove oil", "clove bud oil"],
  cinnamon: ["cinnamon bark oil", "cinnamon leaf oil", "cinnamomum verum", "dalchini"],
  dalchini: ["cinnamon bark oil", "cinnamon leaf oil"],
  lemongrass: ["lemongrass oil", "cymbopogon flexuosus"],
  bergamot: ["bergamot oil", "citrus bergamia"],
  chamomile: ["chamomile oil (blue)", "chamomile oil (roman)", "matricaria chamomilla"],
  babuna: ["chamomile oil (blue)", "chamomile oil (roman)"],
  "ylang ylang": ["ylang ylang oil", "cananga odorata"],
  ylang: ["ylang ylang oil"],
  patchouli: ["patchouli oil", "pogostemon cablin"],
  vetiver: ["vetiver oil", "vetiver co2 extract", "vetiver oil / khus (ayurvedic)", "chrysopogon zizanioides", "khus"],
  khus: ["vetiver oil", "vetiver co2 extract", "vetiver oil / khus (ayurvedic)"],
  cedarwood: ["cedarwood oil", "cedrus deodara", "devdar"],
  devdar: ["cedarwood oil"],
  neroli: ["neroli oil", "citrus aurantium"],
  "black seed": ["black seed oil", "nigella sativa", "kalonji"],
  kalonji: ["black seed oil"],
  jojoba: ["jojoba oil", "organic jojoba oil", "simmondsia chinensis"],
  argan: ["argan oil", "argania spinosa"],
  rosehip: ["rosehip seed oil", "rosa rubiginosa"],
  moringa: ["moringa oil", "moringa oleifera", "sehjan"],
  neem: ["neem oil", "azadirachta indica"],
  amla: ["amla oil", "phyllanthus emblica"],
  castor: ["castor oil", "ricinus communis", "arandi"],
  brahmi: ["brahmi oil", "bacopa monnieri"],
  almond: ["almond oil (sweet)", "almond oil (bitter)", "prunus dulcis", "badam"],
  badam: ["almond oil (sweet)"],
  tulsi: ["holy basil / tulsi oil (ayurvedic)", "holy basil / tulsi co2 extract", "holy basil oil (ocimum sanctum oil)", "ocimum sanctum"],
  "holy basil": ["holy basil / tulsi oil (ayurvedic)", "holy basil / tulsi co2 extract", "holy basil oil (ocimum sanctum oil)"],
  wintergreen: ["gaultheria (indian wintergreen)", "gaultheria fragrantissima oil"],
  gaultheria: ["gaultheria (indian wintergreen)", "gaultheria fragrantissima oil"],
  nagarmotha: ["cypriol oil (nagarmotha oil)", "cypriol oil / nagarmotha (ayurvedic)", "cyperus scariosus"],
  cypriol: ["cypriol oil (nagarmotha oil)", "cypriol oil / nagarmotha (ayurvedic)"],
  calamus: ["calamus oil (vacha)", "acorus calamus", "vacha"],
  vacha: ["calamus oil (vacha)"],
  costus: ["costus root oil", "costus root oil (kuth)", "saussurea lappa", "kuth"],
  kuth: ["costus root oil", "costus root oil (kuth)"],
  myrrh: ["myrrh oil / bol (ayurvedic)", "commiphora myrrha", "bol"],
  "black pepper": ["black pepper oil", "black pepper co2 extract", "black pepper oleoresin", "piper nigrum"],
  nutmeg: ["nutmeg oil", "myristica fragrans", "jaiphal"],
  jaiphal: ["nutmeg oil"],
  mace: ["mace oil", "javitri"],
  cumin: ["cumin seed oil", "cuminum cyminum", "jeera"],
  jeera: ["cumin seed oil"],
  fennel: ["fennel oil", "foeniculum vulgare", "saunf"],
  saunf: ["fennel oil"],
  basil: ["basil oil", "ocimum basilicum"],
  orange: ["bitter orange oil", "citrus sinensis"],
  "sweet orange": ["bitter orange oil"],
  "bitter orange": ["bitter orange oil"],
  grapefruit: ["grapefruit oil", "citrus paradisi"],
  lemon: ["lemon oil", "lemon balm oil", "lemon verbena oil", "citrus limon"],
  coffee: ["coffee oil", "coffea arabica"],
  davana: ["davana oil", "artemisia pallens"],
  elemi: ["elemi oil", "canarium luzonicum"],
  geranium: ["geranium oil", "pelargonium graveolens"],
  juniper: ["juniper berry oil", "juniperus communis"],
  kewra: ["kewra oil", "pandanus odoratissimus"],
  lotus: ["blue lotus oil", "white lotus oil", "nelumbo nucifera"],
  "blue lotus": ["blue lotus oil"],
  "white lotus": ["white lotus oil"],
  marjoram: ["marjoram oil (ayurvedic)", "origanum majorana"],
  oregano: ["oregano oil (ayurvedic)", "origanum vulgare"],
  palmarosa: ["palmarosa oil", "cymbopogon martinii"],
  petitgrain: ["petitgrain oil"],
  pine: ["pine oil", "pinus sylvestris"],
  sage: ["clary sage oil", "salvia sclarea"],
  "clary sage": ["clary sage oil"],
  spearmint: ["spearmint oil", "mentha spicata"],
  thyme: ["thyme oil", "thymus vulgaris"],
  valerian: ["valerian oil / tagara (ayurvedic)", "valeriana wallichii", "tagara"],
  tagara: ["valerian oil / tagara (ayurvedic)"],
  ashwagandha: ["withania somnifera", "ashwagandha oil"],
  bhringraj: ["eclipta alba", "bhringraj oil"],
  kumkumadi: ["kumkumadi tailam", "saffron oil"],
};

/**
 * High-Level Category Mapping for Broader Inquiries
 */
interface CategoryDefinition {
  id: string;
  name: string;
  slug: string;
  patterns: string[];
  description: string;
  totalCount: number;
  highlightedSlugs: string[];
  features: string[];
}

const CATEGORY_DEFINITIONS: CategoryDefinition[] = [
  {
    id: "cat_essential_oils",
    name: "Pure Steam-Distilled Essential Oils",
    slug: "essential-oils",
    patterns: [
      "essential oil", "essential oils", "steam distilled oils", "distilled oils", "what essential oils",
      "pure essential oils", "pure essential oil", "volatile oils", "essential oil catalog", "list of essential oils"
    ],
    description: "We manufacture and export 86 pharmacopoeial-grade, 100% pure steam-distilled essential oils, batch-verified via GC-MS and distilled without synthetic diluents, phthalates, or fillers.",
    totalCount: 86,
    highlightedSlugs: ["lavender-oil", "peppermint-oil", "tea-tree-oil", "eucalyptus-oil", "rosemary-oil", "frankincense-oil", "bergamot-oil", "lemongrass-oil"],
    features: ["100% Steam-Distilled", "Dual GC-MS Tested", "IP / BP / USP Pharmacopoeial Grade", "Available in 1kg to 200kg Drums"],
  },
  {
    id: "cat_carrier_oils",
    name: "Cold-Pressed Virgin Carrier & Base Oils",
    slug: "carrier-oils",
    patterns: [
      "carrier oil", "carrier oils", "base oil", "base oils", "cold pressed oil", "cold pressed oils",
      "fixed oil", "fixed oils", "vegetable oils", "cosmetic carrier oils", "facial oils", "seed oils"
    ],
    description: "Our 32 virgin carrier oils are 100% mechanically cold-pressed at low temperatures (<45°C) without chemical solvents (hexane-free). Rich in natural squalene, tocopherols, and omega fatty acids, they serve as the foundational lipid matrix for cosmetics, hair care, and dermatological serums.",
    totalCount: 32,
    highlightedSlugs: ["jojoba-oil", "argan-oil", "rosehip-seed-oil", "moringa-oil", "neem-oil", "castor-oil", "almond-oil-sweet", "black-seed-oil"],
    features: ["Cold-Pressed (<45°C)", "Hexane-Free & Unrefined", "Rich in Natural Tocopherols & Fatty Acids", "5kg to 200kg Packaging"],
  },
  {
    id: "cat_co2_oils",
    name: "Supercritical CO₂ Extracts (CO₂ Oils)",
    slug: "co2-oils",
    patterns: [
      "co2 oil", "co2 oils", "co2 extract", "co2 extracts", "supercritical", "sfe", "carbon dioxide",
      "super critical", "co2 extracted", "what are co2 oils", "sfe extracts"
    ],
    description: "Our 15 Supercritical CO₂ extracts are obtained at physiological temperature (31.1°C) using pressurized, clean carbon dioxide rather than boiling steam or chemical petrochemical solvents. This preserves heat-sensitive aroma top notes and full bioactive profiles with 0.00 ppm solvent residue.",
    totalCount: 15,
    highlightedSlugs: ["cardamom-co2-extract", "ginger-co2-extract", "vanilla-co2-extract", "turmeric-co2-extract", "sandalwood-co2-extract", "jasmine-co2-extract"],
    features: ["Supercritical SFE (31.1°C)", "0.00 ppm Solvent Residue", "Full-Spectrum Lipophilic Actives", "True-to-Nature Scent"],
  },
  {
    id: "cat_spice_oils",
    name: "Indian Pure Spice Oils",
    slug: "spice-oils",
    patterns: [
      "spice oil", "spice oils", "culinary oil", "culinary oils", "condiment oils", "food spice oils", "spice distillates"
    ],
    description: "Our 39 pure spice oils are distilled from fresh, hand-selected spices with full batch GC-MS verification, yielding concentrated, highly pungent volatile oils for food processing, pharmaceuticals, confectionery, and perfumery.",
    totalCount: 39,
    highlightedSlugs: ["cardamom-oil", "black-pepper-oil", "clove-bud-oil", "cinnamon-bark-oil", "ginger-oil", "nutmeg-oil", "cumin-oil"],
    features: ["Distilled from Prime Spices", "High Volatile Oil Potency", "ISO 9001:2015 & GMP Certified", "UN-Certified Hazardous Export Packing"],
  },
  {
    id: "cat_floral_absolutes",
    name: "Exquisite Floral Absolutes",
    slug: "floral-absolutes",
    patterns: [
      "floral absolute", "floral absolutes", "absolutes", "flower oils", "perfumery absolutes", "enfleurage", "luxury floral"
    ],
    description: "For delicate blossoms whose aromatic compounds degrade under high steam heat, we produce 6 rare floral absolutes using traditional low-temperature solvent extraction and enfleurage techniques, providing master perfumers with unmatched sillage and depth.",
    totalCount: 6,
    highlightedSlugs: ["blue-lotus-oil", "white-lotus-oil", "boronia-absolute-oil", "calendula-oil", "mimosa-absolute-oil", "oakmoss-absolute-oil"],
    features: ["Captures Fragile Floral Petals", "Fine Fragrance & Attar Grade", "High Olfactory Tenacity", "Supplied in Aluminum Flasks"],
  },
  {
    id: "cat_floral_waters",
    name: "Pure Floral Waters & Hydrosols",
    slug: "floral-waters",
    patterns: [
      "floral water", "floral waters", "hydrosol", "hydrosols", "distillate water", "rose water", "flower water"
    ],
    description: "100% pure aqueous distillates produced as natural coproducts during the steam distillation of aromatic botanicals. Rich in micro-dispersed essential oil molecules and water-soluble plant acids, perfect for facial mists, toners, and cosmetic water phases.",
    totalCount: 35,
    highlightedSlugs: ["rose-floral-water", "lavender-floral-water", "neroli-floral-water", "rosemary-hydrosol", "tea-tree-floral-water", "saffron-floral-water"],
    features: ["100% Pure Steam Distillate", "Alcohol & Preservative Free", "Immediate Facial Tonic Base", "25kg to 200kg Food-Grade HDPE"],
  },
  {
    id: "cat_oleoresins",
    name: "Standardized Botanical Oleoresins",
    slug: "oleoresins",
    patterns: [
      "oleoresin", "oleoresins", "resin extract", "spice oleoresin", "capsicum oleoresin", "paprika oleoresin"
    ],
    description: "Our 24 standardized oleoresins contain both the volatile essential oil aromatics and the heavy, non-volatile resinous flavor principles of the spice, providing consistent color, aroma, and pungency for industrial food and pharmaceutical compounding.",
    totalCount: 24,
    highlightedSlugs: ["cardamom-oleoresin-10-percent", "ginger-oleoresin-30-percent"],
    features: ["Standardized Scoville / Pungency", "Long Ambient Shelf Life", "Microbiologically Stable", "Epoxy-Lined Drums"],
  },
  {
    id: "cat_ayurvedic",
    name: "Classical Ayurvedic & Medicated Herbal Oils",
    slug: "ayurvedic-oils",
    patterns: [
      "ayurvedic oil", "ayurvedic oils", "tailam", "tailams", "ayurveda", "herbal oils", "traditional oils", "medicated oil"
    ],
    description: "16 authentic Ayurvedic oils manufactured in compliance with classical Ayurvedic pharmacopoeial standards (Sneha Kalpana). Infused with whole botanical roots, barks, and leaves (Vacha, Kuth, Tulsi, Shallaki, Wintergreen) for holistic wellness and therapeutic massage.",
    totalCount: 16,
    highlightedSlugs: ["ayurvedic-calamus-oil", "ayurvedic-costus-root-oil", "ayurvedic-holy-basil-oil", "boswellia-serrata-oil", "ayurvedic-gaultheria-oil"],
    features: ["Classical Ayurvedic Pharmacopoeia", "Traditional Decoction Extraction", "Zero Artificial Stabilizers", "Bulk Export Approved"],
  },
  {
    id: "cat_organic",
    name: "USDA Certified Organic Oils",
    slug: "organic-oils",
    patterns: [
      "organic oil", "organic oils", "certified organic", "usda organic", "bio oils", "nop organic"
    ],
    description: "Our 20 certified organic botanical oils are steam distilled and cold pressed from crops grown without synthetic chemical pesticides, herbicides, or GMOs, verified through international organic certifying agencies.",
    totalCount: 20,
    highlightedSlugs: ["organic-jojoba-oil", "organic-ginger-oil", "organic-jasmine-oil"],
    features: ["100% Certified Organic", "Zero Pesticide Residues", "Complete Farm-to-Drum Audit Trail", "Full Organic Transaction Certificates (TC)"],
  },
];

/**
 * Formulation & Application Recommendation Guides
 */
const APPLICATION_GUIDES = [
  {
    id: "skincare_anti_aging",
    patterns: ["skin", "skincare", "anti aging", "anti-aging", "wrinkles", "face serum", "facial oil", "cosmetic", "glow", "collagen", "moisturizer", "complexion"],
    title: "Botanicals Recommended for Skincare & Anti-Aging Formulations",
    description: "For high-performance cosmetic serums and restorative face oils, we recommend unrefined cold-pressed carrier oils and active botanical distillates rich in provitamin A, essential fatty acids, and cellular regeneration terpenes:",
    productTerms: ["rosehip", "argan", "jojoba", "frankincense", "moringa", "saffron", "lavender"],
    actionLink: { label: "Explore Carrier & Base Oils", href: "/products/carrier-oils" },
  },
  {
    id: "acne_blemish",
    patterns: ["acne", "pimple", "blemish", "breakout", "oily skin", "clarifying", "cleanser", "purifying"],
    title: "Botanicals Recommended for Acne & Blemish-Prone Skin Formulations",
    description: "For purifying cleansers, clarifying toners, and anti-blemish serums, these oils deliver natural antimicrobial Terpinen-4-ol and anti-inflammatory compounds without clogging pores:",
    productTerms: ["tea tree", "lavender", "clary sage", "rosemary", "bergamot", "neem"],
    actionLink: { label: "Explore Essential Oils", href: "/products/essential-oils" },
  },
  {
    id: "hair_scalp_care",
    patterns: ["hair", "hair growth", "scalp", "hair loss", "dandruff", "follicle", "shampoo", "conditioner", "hair oil", "alopecia"],
    title: "Botanicals Recommended for Scalp & Hair Growth Formulations",
    description: "For stimulating hair follicle circulation, reducing dandruff, and nourishing the hair shaft, these botanicals have established efficacy in natural hair care:",
    productTerms: ["rosemary", "brahmi", "tea tree", "peppermint", "cedarwood", "argan", "jojoba", "castor"],
    actionLink: { label: "Explore Ayurvedic & Carrier Oils", href: "/products/ayurvedic-oils" },
  },
  {
    id: "relaxation_sleep",
    patterns: ["sleep", "relaxation", "stress", "anxiety", "calming", "insomnia", "aromatherapy", "peaceful", "relax", "diffuser blend", "nervous tension"],
    title: "Botanicals Recommended for Relaxation, Sleep & Stress Relief",
    description: "These pure steam-distilled oils are rich in soothing linalool, linalyl acetate, and balancing esters clinically proven to promote parasympathetic relaxation and restful sleep:",
    productTerms: ["lavender", "chamomile", "bergamot", "frankincense", "ylang ylang", "cedarwood", "vetiver"],
    actionLink: { label: "Explore Aromatherapy Essential Oils", href: "/products/essential-oils" },
  },
  {
    id: "pain_muscle_relief",
    patterns: ["pain", "muscle", "joint", "arthritis", "inflammation", "soreness", "massage", "analgesic", "sprain", "rub", "sports balm"],
    title: "Botanicals Recommended for Muscle Relief & Pain Management",
    description: "For therapeutic rubs, sports balms, and orthopedic massage blends, these oils provide natural thermal counter-irritation, circulation stimulation, and natural methyl salicylate / menthol analgesic properties:",
    productTerms: ["eucalyptus", "peppermint", "wintergreen", "clove", "black pepper", "ginger", "costus"],
    actionLink: { label: "Explore Spice & Ayurvedic Oils", href: "/products/spice-oils" },
  },
  {
    id: "perfumery_fine_fragrance",
    patterns: ["perfume", "perfumery", "fragrance", "attar", "scent", "luxury perfume", "fine fragrance", "cologne", "floral notes", "fixative"],
    title: "Botanicals Recommended for Fine Perfumery & Luxury Fragrance",
    description: "For Master Perfumers and luxury fragrance houses, our pure floral absolutes, wood distillates, and supercritical CO₂ extracts offer exquisite tenacity, natural fixative depth, and unmatched olfactory projection:",
    productTerms: ["lotus", "jasmine", "rose", "agarwood", "sandalwood", "vanilla", "cardamom", "patchouli", "neroli"],
    actionLink: { label: "Explore Floral Absolutes", href: "/products/floral-absolutes" },
  },
  {
    id: "food_flavoring",
    patterns: ["food", "flavor", "flavour", "flavoring", "culinary", "beverage", "spice extract", "edible", "seasoning", "confectionery", "bakery"],
    title: "Botanicals Recommended for Food, Beverage & Flavoring Applications",
    description: "Our standardized spice oils, oleoresins, and supercritical CO₂ extracts provide authentic, true-to-nature aroma, soluble pungency, and clean profiles with 0.00 ppm solvent residue for food processing:",
    productTerms: ["cardamom", "black pepper", "ginger", "cinnamon", "clove", "nutmeg", "vanilla", "fennel"],
    actionLink: { label: "Explore Spice Oils & Oleoresins", href: "/products/spice-oils" },
  },
];

/**
 * Check if the user is asking about an entire category
 */
function checkCategoryInquiry(normalized: string): FaqEntry | null {
  for (const cat of CATEGORY_DEFINITIONS) {
    const matchesPattern = cat.patterns.some(p => {
      const normP = normalizeText(p);
      return (
        normalized === normP ||
        normalized.includes(`what ${normP}`) ||
        normalized.includes(`tell me about ${normP}`) ||
        normalized.includes(`list of ${normP}`) ||
        normalized.includes(`explore ${normP}`) ||
        normalized.includes(`show ${normP}`) ||
        normalized.includes(`do you have ${normP}`) ||
        normalized.includes(`do you sell ${normP}`) ||
        normalized.includes(`all ${normP}`) ||
        normalized.startsWith(normP) ||
        normalized.endsWith(normP)
      );
    });

    if (matchesPattern) {
      const allProducts = INITIAL_PRODUCTS;
      const matchedProducts = cat.highlightedSlugs
        .map(slug => allProducts.find(p => p.slug === slug))
        .filter((p): p is Product => Boolean(p))
        .slice(0, 5)
        .map(p => ({
          name: p.name,
          slug: p.slug,
          botanicalName: p.botanicalName,
          category: p.category,
          moq: p.moq || "1 kg",
          shortSpec: p.shortSpec,
        }));

      const topProductsList = matchedProducts
        .map((p, idx) => `${idx + 1}. **${p.name}** (${p.botanicalName || "Pure Botanical Extract"}) — MOQ: ${p.moq}`)
        .join("\n");

      return {
        id: `category_${cat.id}`,
        patterns: cat.patterns,
        answer: `🌿 **${cat.name} (${cat.totalCount} Products Available):**

${cat.description}

**Key Manufacturing & Quality Standards:**
${cat.features.map(f => `• ${f}`).join("\n")}

**Popular Products in this Category:**
${topProductsList}

All botanicals are batch-tested via dual GC-MS and supplied with lot Certificates of Analysis (CoA). Custom private label retail bottling (10ml–500ml) with European droppers and UN-certified bulk drums (25kg–200kg) are available.`,
        actionLink: {
          label: `Browse Complete ${cat.name} (${cat.totalCount})`,
          href: `/products/${cat.slug}`,
        },
        recommendedProducts: matchedProducts,
      };
    }
  }

  return null;
}

/**
 * Intelligent Dynamic Product Search Across all 273 Products
 */
function searchProductCatalogSmart(normalized: string): FaqEntry | null {
  const allProducts = INITIAL_PRODUCTS;

  // Strip common inquiry conversational framing to isolate botanical search tokens
  const cleanQuery = normalized
    .replace(/^(do you have|do you sell|do you supply|do you carry|can i buy|can i order|can you supply|i want|i need|looking for|tell me about|information on|details on|what is|how much is|price of|specifications of)\s+/i, "")
    .replace(/\s+(oil|essential oil|extract|seeds|seed|leaf|bark|root|tailam|absolute|oleoresin)$/i, "")
    .trim();

  // 1. Check Synonym / Alias Dictionary First
  for (const [aliasKey, targetProductNames] of Object.entries(BOTANICAL_SYNONYMS)) {
    const isAliasMatch =
      normalized === aliasKey ||
      normalized.includes(` ${aliasKey} `) ||
      normalized.startsWith(`${aliasKey} `) ||
      normalized.endsWith(` ${aliasKey}`) ||
      cleanQuery === aliasKey;

    if (isAliasMatch) {
      // Find matching products
      const matched = allProducts.filter(p => {
        const normName = normalizeText(p.name);
        return targetProductNames.some(target => {
          const nt = normalizeText(target);
          return normName.includes(nt) || nt.includes(normName) || (p.botanicalName && normalizeText(p.botanicalName).includes(nt));
        });
      });

      if (matched.length > 0) {
        // If query mentions co2, sort co2 products first
        if (normalized.includes("co2")) {
          matched.sort((a, b) => (b.category === "CO2_OIL" ? 1 : 0) - (a.category === "CO2_OIL" ? 1 : 0));
        }

        const primaryProduct = matched[0];
        const categorySlug = getCategorySlug(primaryProduct.category);
        const categoryLabel = primaryProduct.category.replace(/_/g, " ");

        // Build benefits text
        const benefitText = primaryProduct.benefits && primaryProduct.benefits.length > 0
          ? primaryProduct.benefits.slice(0, 2).map(b => `• **${b.title}:** ${b.description}`).join("\n")
          : `• **Analytical Purity:** 100% verified pure distillate via in-house Shimadzu GC-MS chromatography.`;

        // If multiple related products match (e.g. cardamom oil vs cardamom co2)
        const multiProductText = matched.length > 1
          ? `\n\n**Also Available in Alternative Extraction Formats:**\n${matched.slice(1, 4).map(m => `• **${m.name}** (${m.category.replace(/_/g, " ")}) — MOQ: ${m.moq}`).join("\n")}`
          : "";

        return {
          id: `product_${primaryProduct.slug}`,
          patterns: [aliasKey, primaryProduct.name],
          answer: `🌿 **${primaryProduct.name}**
*Botanical Name:* **${primaryProduct.botanicalName || "Pure Botanical Distillate"}**

• **Category:** ${categoryLabel}
• **Technical Specification:** ${primaryProduct.shortSpec}
• **Standard Wholesale MOQ:** ${primaryProduct.moq || "1 kg (Samples Available)"}
• **Packaging Formats:** 10ml–500ml Glass Bottles (Amber/Clear with European Droppers), 1kg–25kg UN Aluminum Canisters, and 200kg Steel Drums with Nitrogen Inerting.
• **Quality Assurance:** 100% pure & unadulterated. Supplied with lot-specific GC-MS Chromatogram, Certificate of Analysis (CoA), and 16-point SDS/MSDS.

${benefitText}${multiProductText}`,
          actionLink: {
            label: `View ${primaryProduct.name} Specifications`,
            href: `/products/${categorySlug}/${primaryProduct.slug}`,
          },
          recommendedProducts: matched.slice(0, 4).map(p => ({
            name: p.name,
            slug: p.slug,
            botanicalName: p.botanicalName,
            category: p.category,
            moq: p.moq || "1 kg",
            shortSpec: p.shortSpec,
          })),
        };
      }
    }
  }

  // 2. Direct exact or substring match on product name, botanical name, or slug
  for (const product of allProducts) {
    const normName = normalizeText(product.name);
    const normBot = product.botanicalName ? normalizeText(product.botanicalName) : "";
    const normSlug = normalizeText(product.slug.replace(/-/g, " "));

    // Check if clean query or normalized input matches
    const isDirectMatch =
      normName === cleanQuery ||
      normName === normalized ||
      (cleanQuery.length > 3 && normName.startsWith(cleanQuery)) ||
      (cleanQuery.length > 4 && normName.includes(cleanQuery)) ||
      (normBot.length > 5 && (normalized.includes(normBot) || cleanQuery.includes(normBot))) ||
      (normSlug.length > 4 && cleanQuery === normSlug);

    if (isDirectMatch) {
      const categorySlug = getCategorySlug(product.category);
      const categoryLabel = product.category.replace(/_/g, " ");

      const benefitText = product.benefits && product.benefits.length > 0
        ? product.benefits.slice(0, 2).map(b => `• **${b.title}:** ${b.description}`).join("\n")
        : `• **Analytical Purity:** Batch tested via Shimadzu GC-MS with zero artificial diluents or additives.`;

      return {
        id: `product_${product.slug}`,
        patterns: [product.name, product.slug],
        answer: `🌿 **${product.name}**
*Botanical Name:* **${product.botanicalName || "Pure Botanical Distillate"}**

• **Category:** ${categoryLabel}
• **Technical Specification:** ${product.shortSpec}
• **Standard Wholesale MOQ:** ${product.moq || "1 kg"}
• **Bulk Packaging:** 1kg, 5kg, 25kg Seamless Aluminum Canisters, 50kg HDPE Carboys, and 200kg Epoxy-Lined Export Drums.
• **Private Label & Droppers:** Amber / Clear glass bottles (10ml–500ml) with European dropper inserts, calibrated glass pipettes, and shock-absorbing cushion box packing.
• **Regulatory Documents:** Full Certificate of Analysis (CoA), GC-MS test report, and GHS-compliant MSDS provided with every shipment.

${benefitText}`,
        actionLink: {
          label: `View ${product.name} Details & COA`,
          href: `/products/${categorySlug}/${product.slug}`,
        },
        recommendedProducts: [
          {
            name: product.name,
            slug: product.slug,
            botanicalName: product.botanicalName,
            category: product.category,
            moq: product.moq || "1 kg",
            shortSpec: product.shortSpec,
          },
        ],
      };
    }
  }

  // 3. Fallback: Fuzzy word token match
  const searchTokens = cleanQuery.split(" ").filter(w => w.length > 3 && !["what", "have", "sell", "best", "some", "good", "need"].includes(w));
  if (searchTokens.length > 0) {
    const candidates = allProducts.filter(p => {
      const pName = normalizeText(p.name);
      const pBot = p.botanicalName ? normalizeText(p.botanicalName) : "";
      return searchTokens.some(token => pName.includes(token) || pBot.includes(token));
    });

    if (candidates.length > 0) {
      const topCand = candidates[0];
      const categorySlug = getCategorySlug(topCand.category);

      return {
        id: `fuzzy_match_${topCand.slug}`,
        patterns: searchTokens,
        answer: `Yes! We manufacture and supply **${topCand.name}** (${topCand.botanicalName || "Pure Botanical Distillate"}).

• **Category:** ${topCand.category.replace(/_/g, " ")}
• **Specification:** ${topCand.shortSpec}
• **Wholesale MOQ:** ${topCand.moq || "1 kg"}
• **Packaging:** UN Aluminum canisters (1kg–25kg), HDPE drums, and 200kg steel barrels.
• **Lab Quality:** 100% GC-MS analyzed with Certificate of Analysis (CoA).

${candidates.length > 1 ? `**Other closely related products:**\n${candidates.slice(1, 4).map(c => `• **${c.name}** (${c.moq})`).join("\n")}` : ""}`,
        actionLink: {
          label: `Explore ${topCand.name}`,
          href: `/products/${categorySlug}/${topCand.slug}`,
        },
        recommendedProducts: candidates.slice(0, 4).map(p => ({
          name: p.name,
          slug: p.slug,
          botanicalName: p.botanicalName,
          category: p.category,
          moq: p.moq || "1 kg",
          shortSpec: p.shortSpec,
        })),
      };
    }
  }

  return null;
}

/**
 * Check for Pricing, MOQ, Cost and Quotation Inquiries
 */
function checkPricingQuery(normalized: string): FaqEntry | null {
  const pricingKeywords = ["price", "pricing", "cost", "how much", "rate", "rates", "quotation", "quote", "price list", "pricelist", "moq", "minimum order"];
  const isPricing = pricingKeywords.some(kw => normalized.includes(kw));
  if (!isPricing) return null;

  // Check if a specific oil was mentioned in the price query
  const allProducts = INITIAL_PRODUCTS;
  const mentionedProduct = allProducts.find(p => {
    const norm = normalizeText(p.name);
    return normalized.includes(norm) || (p.botanicalName && normalized.includes(normalizeText(p.botanicalName)));
  });

  if (mentionedProduct) {
    const categorySlug = getCategorySlug(mentionedProduct.category);
    return {
      id: `pricing_${mentionedProduct.slug}`,
      patterns: pricingKeywords,
      answer: `💰 **Wholesale Pricing & Quotation for ${mentionedProduct.name}:**

As a direct B2B primary distillation manufacturer, our commercial prices are tiered based on batch volume and container specifications:
• **Evaluation / Sample Tier (100g – 1 kg):** Available for laboratory R&D and pilot formulation with complete batch CoA.
• **Commercial Wholesale Tier (5 kg – 25 kg):** UN-certified seamless aluminum canisters or HDPE drums.
• **Industrial Export Tier (200 kg Steel Drums & Container Loads):** Direct factory-gate wholesale contracts.

• **Standard Minimum Order (MOQ):** ${mentionedProduct.moq || "1 kg"}
• **Specification:** ${mentionedProduct.shortSpec}
• **Purity Verification:** 100% GC-MS analyzed before dispatch.

Submit your volume requirement via our Contact Desk for immediate, customized lot pricing.`,
      actionLink: {
        label: `Request Official Quote for ${mentionedProduct.name}`,
        href: `/contact?product=${encodeURIComponent(mentionedProduct.name)}`,
      },
      recommendedProducts: [
        {
          name: mentionedProduct.name,
          slug: mentionedProduct.slug,
          botanicalName: mentionedProduct.botanicalName,
          category: mentionedProduct.category,
          moq: mentionedProduct.moq || "1 kg",
        },
      ],
    };
  }

  return {
    id: "general_wholesale_pricing",
    patterns: pricingKeywords,
    answer: `💰 **Wholesale B2B Pricing Structure & MOQs:**

India Essential Oils operates as a primary distillation manufacturer and direct global exporter. We offer competitive, tiered factory-gate wholesale rates:

• **Minimum Order Quantity (MOQ):**
  - **Evaluation Samples:** 1 kg for formulation testing and laboratory CoA audits.
  - **Standard Wholesale:** 5 kg to 25 kg in UN-certified aluminum canisters or food-grade HDPE carboys.
  - **Industrial Bulk:** 200 kg heavy-gauge steel export drums and multi-metric ton supply agreements.

• **Custom Wholesale Quotations:**
Because prices vary according to crop seasonal yields, extraction grades (Steam vs Supercritical CO₂), and volume scale, we issue lot-specific Proforma Invoices (PI) with firm pricing and GC-MS reports.`,
    actionLink: {
      label: "Request Custom Wholesale Quotation",
      href: "/contact",
    },
  };
}

/**
 * Check for Application & Formulation Inquiries
 */
function matchApplicationRecommendations(normalized: string): FaqEntry | null {
  for (const guide of APPLICATION_GUIDES) {
    const matches = guide.patterns.some(p => normalized.includes(p));
    if (matches) {
      const allProducts = INITIAL_PRODUCTS;
      const matched = allProducts
        .filter(p => guide.productTerms.some(term => {
          const normName = normalizeText(p.name);
          return normName.includes(term) || p.slug.includes(term);
        }))
        .slice(0, 4)
        .map(p => ({
          name: p.name,
          slug: p.slug,
          botanicalName: p.botanicalName,
          category: p.category,
          moq: p.moq || "1 kg",
          shortSpec: p.shortSpec,
        }));

      const productList = matched
        .map((p, i) => `${i + 1}. **${p.name}** (${p.botanicalName || "Pure Botanical Distillate"}) — MOQ: ${p.moq}`)
        .join("\n");

      return {
        id: `rec_${guide.id}`,
        patterns: guide.patterns,
        answer: `✨ **${guide.title}**

${guide.description}

${productList}

All oils are 100% pure, unadulterated, and GC-MS tested. We support contract packaging with 10ml–500ml dropper bottles, European orifice reducers, and custom labeling.`,
        actionLink: guide.actionLink,
        recommendedProducts: matched,
      };
    }
  }

  return null;
}

/**
 * Packaging & OEM Capping matcher
 */
function checkPackagingQuery(normalized: string): FaqEntry | null {
  const pkgPatterns = [
    "packaging", "packing", "bottle", "bottles", "glass bottle", "dropper", "droppers",
    "euro dropper", "european dropper", "pipette", "amber glass", "matte glass", "clear glass",
    "cushion box", "outer box", "gift box", "private label", "private labeling", "oem",
    "canister", "aluminum bottle", "hdpe drum", "steel drum", "nitrogen capping", "nitrogen inerting", "closure"
  ];

  const matchesPkg = pkgPatterns.some(p => normalized.includes(p));
  if (!matchesPkg) return null;

  return {
    id: "packaging_oem_expert",
    patterns: pkgPatterns,
    answer: `📦 **Precision Packaging, Glassware & OEM Private Label Solutions:**

India Essential Oils operates climate-controlled cleanroom packaging suites compliant with international export standards:

**1. Retail Glass Bottling (5ml, 10ml, 20ml, 50ml, 100ml, 200ml, 500ml):**
• **Finishes:** Amber Glass (maximum UV-blocking), Clear Optical Glass, Matte Frosted Velvet Touch, Cobalt Blue, and Emerald Green.
• **Closures:** European Dropper type droppers (controlled drop-by-drop orifice reducers), calibrated glass pipettes, tamper-evident breakaway seal caps, treatment pumps, mist atomizers, and stainless steel rollerballs.

**2. Protective Cushion Box & Outer Carton Packing:**
• Specialized shock-absorbing **Cushion Box Packing** with custom-molded inserts engineered to protect delicate glass from vibrations and drop impact during ocean/air cargo transit. Bespoke gift presentation boxes also available.

**3. Bulk & Industrial Export Containers:**
• **Aluminum Bottles & Canisters:** 1 kg, 2 kg, 5 kg, 10 kg, 25 kg seamless canisters with food-grade epoxy barrier linings.
• **HDPE Drums & Carboys:** 5 kg, 20 kg, 25 kg, 50 kg, 200 kg virgin high-density polyethylene.
• **Steel & GI Drums:** 20 kg, 40 kg, 200 kg heavy-duty drums with dual 2" & 3/4" bung closures.

**4. Nitrogen Displacement Inerting:**
• Automated 99.999% ultra-pure nitrogen headspace displacement capping to purge oxygen and protect oils against oxidative rancidity.`,
    actionLink: {
      label: "Explore Complete Packaging Solutions",
      href: "/packaging",
    },
  };
}

/**
 * Dispatch, Shipping & Transit matcher (Zero courier brand names)
 */
function checkShippingQuery(normalized: string): FaqEntry | null {
  const shipPatterns = [
    "shipping", "delivery", "dispatch", "lead time", "transit", "shipping time",
    "how fast", "delivery period", "when will it ship", "shipping cost", "freight",
    "air cargo", "sea freight", "48 hours", "dispatch time"
  ];

  const matches = shipPatterns.some(p => normalized.includes(p));
  if (!matches) return null;

  return {
    id: "shipping_dispatch_expert",
    patterns: shipPatterns,
    answer: `⚡ **Prompt 48-Hour Order Dispatch & Global Shipping Policy:**

• **⚡ 48-Hour Order Dispatch:** Our specialty is promptness in service. We maintain substantial bulk stocks of regular products in our climate-controlled warehouse, which enables us to dispatch standard orders within **48 hours** of payment confirmation (unless custom packaging or urgent priority schedules apply).
• **Vital Shipping Function:** India Essential Oils considers Shipping as one of the most vital functions. Shipping accounts for **5–20% of the total cost** of any business — timely and economical shipment movement is as important as quality.
• **Best Shipping Rates Worldwide:** We offer one of the best shipping rates for all major destinations of the world, backed by direct tie-ups with major shipping lines and reputed Clearing House agents.
• **Comprehensive Post-Shipment Services:** We provide shipment movement tracking, timely documentation, country-specific documentation facilitation, and typical materials movement facilitation.
• **Dedicated Customer Care Tracking:** Our Customer Care Executive keeps complete tracking of all the shipments at different points of time and keeps customers abreast of all movements.`,
    actionLink: {
      label: "View Full Shipment Policy",
      href: "/packaging/shipment-policy",
    },
  };
}

/**
 * Quality, GC-MS & Lab Verification matcher
 */
function checkQualityQuery(normalized: string): FaqEntry | null {
  const qualityPatterns = [
    "gc ms", "gc-ms", "gcms", "purity", "pure", "quality", "lab test", "laboratory",
    "gas chromatography", "certificate of analysis", "coa", "adulteration", "fake oil",
    "optical rotation", "refractive index", "heavy metals", "pesticides", "authentic", "spec sheet", "tds"
  ];

  const matches = qualityPatterns.some(p => normalized.includes(p));
  if (!matches) return null;

  return {
    id: "quality_gcms_expert",
    patterns: qualityPatterns,
    answer: `🔬 **100% Analytical Purity Verification & GC-MS Laboratory Testing:**

India Essential Oils operates an advanced in-house analytical laboratory to guarantee 100% pure, natural, and therapeutic-grade botanicals:

• **Dual Gas Chromatography–Mass Spectrometry (GC-MS):** High-resolution Shimadzu GC-MS profiling quantifies every active terpene, ester, alcohol, and sesquiterpene to ensure true botanical chemotypes.
• **Zero Adulteration Guarantee:** Rigorously screened for zero synthetic fragrance boosters, phthalates, parabens, mineral oil extenders, pesticide residues, and heavy metals.
• **Physical & Optical Constant Audits:** Digital polarimeters (optical rotation), Abbe refractometers (refractive index), and Anton Paar densitometers (specific gravity).
• **Lot-Specific Certificate of Analysis (CoA):** Every single dispatch is accompanied by a certified CoA and 16-point GHS/MSDS dossier.
• **Pharmacopoeial Compliance:** Fully compliant with IP, BP, USP, and Ph. Eur. standards.`,
    actionLink: {
      label: "Explore Quality & Laboratory Infrastructure",
      href: "/quality",
    },
  };
}

/**
 * Certifications, Standards & Company Heritage matcher
 */
function checkCertificationsQuery(normalized: string): FaqEntry | null {
  const certPatterns = [
    "certification", "certifications", "certified", "iso", "who gmp", "gmp",
    "iso 22000", "iso 9001", "usda", "organic certificate", "halal", "kosher",
    "fssai", "who-gmp", "mother herbs", "heritage", "company profile", "about us", "who are you"
  ];

  const matches = certPatterns.some(p => normalized.includes(p));
  if (!matches) return null;

  return {
    id: "certifications_company_expert",
    patterns: certPatterns,
    answer: `🏆 **Company Heritage & International Quality Certifications:**

• **Company Profile:** India Essential Oils is a premier manufacturing and global export division of **Mother Herbs Pvt. Ltd.** (incorporated in 2006 in New Delhi, India).
• **ISO 9001:2015 Certified:** Certified Quality Management System (QAMS / UKAF accredited) guaranteeing international standardization across extraction, distillation, and bulk dispatch.
• **GMP Compliant:** State-of-the-art facilities complying with Good Manufacturing Practices for essential oils and botanical extracts.
• **Ministry of MSME Registered:** Recognized under Udyam Registration (UDYAM-DL-02-0101578), Govt. of India.
• **IndiaMART TrustSeal Verified:** Audited physical premises, statutory certifications, and verified export operations.`,
    actionLink: {
      label: "View All Audit Certifications",
      href: "/certifications",
    },
  };
}

/**
 * Ordering Process & Pre-Shipment Samples matcher
 */
function checkOrderAndSamplesQuery(normalized: string): FaqEntry | null {
  const orderPatterns = [
    "how to order", "order process", "how do i place an order", "buying process",
    "sample", "samples", "trial order", "sample kit", "pre shipment sample", "evaluation sample",
    "payment", "payment terms", "bank transfer", "wire transfer", "t/t", "letter of credit", "l/c"
  ];

  const matches = orderPatterns.some(p => normalized.includes(p));
  if (!matches) return null;

  return {
    id: "ordering_and_samples_expert",
    patterns: orderPatterns,
    answer: `📋 **Streamlined 3-Step B2B Procurement Process:**

1. **Step 1: Submit Your Enquiry**
   Send your required botanicals, volume (kg, canisters, or drums), and destination country via our online form or commercial sales desk.
2. **Step 2: Quotation & Technical Verification**
   Receive a comprehensive Proforma Quote with tiered volume pricing, batch specifications, Certificate of Analysis (CoA), and pre-shipment evaluation samples (100g–1kg) for laboratory R&D approval.
3. **Step 3: Order Confirmation & 48-Hour Dispatch**
   Upon payment confirmation (T/T Wire or L/C), your order is filled from our ready warehouse stock and dispatched within **48 hours**.

• **Supported Payment Currencies:** USD, EUR, GBP, and INR via standard commercial banking wire transfers.`,
    actionLink: {
      label: "Submit Order Enquiry",
      href: "/contact",
    },
  };
}


/**
 * Specific Country Delivery Query — "Can you deliver to X?" / "Do you ship to X?"
 * Returns a worldwide-delivery confirmation + directs to contact for country-specific details
 */
function checkDeliveryToCountryQuery(normalized: string): FaqEntry | null {
  // Detect country-specific delivery intent
  const deliveryTriggers = [
    "deliver to", "ship to", "export to", "supply to", "send to", "shipping to",
    "delivery to", "can you send", "do you deliver to", "do you ship to", "do you export to",
    "can you deliver", "can you ship", "worldwide", "international delivery", "global delivery"
  ];
  const hasTrigger = deliveryTriggers.some(t => normalized.includes(t));
  if (!hasTrigger) return null;

  // Extract mentioned country name (simple word extraction after trigger phrase)
  let mentionedCountry: string | null = null;
  for (const trigger of deliveryTriggers) {
    const idx = normalized.indexOf(trigger);
    if (idx !== -1) {
      const after = normalized.slice(idx + trigger.length).trim();
      const words = after.split(/\s+/).slice(0, 3).join(" ").replace(/[^a-z\s]/gi, "").trim();
      if (words.length > 1) {
        mentionedCountry = words.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        break;
      }
    }
  }

  const countryPhrase = mentionedCountry && mentionedCountry.length > 1
    ? `**${mentionedCountry}** and all other countries worldwide`
    : "countries worldwide";

  return {
    id: "delivery_to_country_query",
    patterns: deliveryTriggers,
    answer: `🌍 **Yes — India Essential Oils ships to ${countryPhrase}.**

We provide worldwide delivery across all major regions, including North America (USA, Canada), Europe & UK, Middle East (UAE, Saudi Arabia, Qatar), Asia-Pacific (Japan, South Korea, Singapore, Australia), South America, and Africa.

For details specific to your destination — such as applicable import duties, regulatory documentation, preferred Incoterms (FOB/CIF), or freight routing — please reach out to our export desk directly. Our team will provide accurate, country-specific guidance for your shipment.`,
    actionLink: {
      label: "Contact Our Export Desk",
      href: "/contact",
    },
  };
}

/**
 * General Export Countries & Regions handler
 */
function checkExportCountriesQuery(normalized: string): FaqEntry | null {
  const exportPatterns = [
    "export countries", "which countries", "what countries", "countries you serve", "countries do you serve",
    "countries do u serve", "countries you export", "countries served", "global reach", "where do you export",
    "where do you ship", "countries we serve", "list of countries", "countries do you deliver"
  ];

  const matches = exportPatterns.some(p => normalized.includes(p));
  if (!matches) return null;

  return {
    id: "export_countries_expert",
    patterns: exportPatterns,
    answer: `🌍 **Prominent Global Export Destinations:**

India Essential Oils exports bulk botanical oils across major international regions:

1. **North America (USA & Canada):** US FDA-registered supplier of pure essential oils, carrier oils, and supercritical CO₂ extracts.
2. **Europe & United Kingdom:** Compliant with EU Cosmetic Regulation (EC No 1223/2009), REACH, and IFRA standards.
3. **Australia & New Zealand:** Supplying pure aromatherapeutic distillates and cosmetic carrier oils to leading wellness brands.
4. **Middle East & GCC (UAE, Saudi Arabia, Qatar, Oman):** Supplying luxury floral absolutes, oudh/agarwood, and spice oils.
5. **Asia-Pacific (Japan, South Korea, Singapore):** Standardized cosmetic raw materials for advanced skincare formulators.

For your specific destination, contact our export desk for country-level import duty information and documentation requirements.`,
    actionLink: {
      label: "Read About Our Global Export Destinations",
      href: "/about/why-us",
    },
  };
}

/**
 * Conversational Yes/No Business Questions Handler
 * Handles simple questions about business operations, ordering, contact, minimums, etc.
 * All answers are strictly grounded in website content — no invented information.
 */
function checkConversationalQuery(normalized: string): FaqEntry | null {
  // ── Phone, WhatsApp & Contact Ordering ──────────────────────────────────
  if (
    normalized.includes("phone") || normalized.includes("call us") || normalized.includes("call you") ||
    normalized.includes("telephone") || normalized.includes("order by phone") || normalized.includes("order via phone") ||
    normalized.includes("order on phone") || normalized.includes("whatsapp") ||
    normalized.includes("can i call") || normalized.includes("contact by phone")
  ) {
    return {
      id: "conv_phone_contact",
      patterns: ["phone", "call", "telephone"],
      answer: `📞 **Yes — you can reach us by phone and email.**

Our commercial sales desk is available during business hours (Monday to Friday, 9 AM – 6 PM IST). You can:
• **Call us** directly at the phone number listed on our Contact page.
• **Email us** for written enquiries, quotation requests, or product specifications.
• **Online Enquiry Form** available 24/7 on our Contact page — typically responded to within one business day.

For bulk orders, we recommend submitting your product list and required quantities via the enquiry form so our team can prepare a Proforma Invoice for you.`,
      actionLink: {
        label: "Go to Contact Page",
        href: "/contact",
      },
    };
  }

  // ── Minimum Order Quantity / MOQ Yes/No ────────────────────────────────
  if (
    normalized.includes("minimum order") || normalized.includes("min order") ||
    normalized.includes("moq") || normalized.includes("how much can i order") ||
    (normalized.includes("minimum") && normalized.includes("order")) ||
    (normalized.includes("small") && (normalized.includes("order") || normalized.includes("quantity"))) ||
    normalized.includes("any minimum") || normalized.includes("is there a minimum")
  ) {
    return {
      id: "conv_moq_yes_no",
      patterns: ["minimum order", "moq", "min order"],
      answer: `📦 **Yes — there is a Minimum Order Quantity (MOQ) of 1 kg across all products.**

Our standard MOQ is **1 kg** for every product in our catalog of 273+ botanicals — whether essential oils, carrier oils, CO₂ extracts, spice oils, oleoresins, floral waters, or floral absolutes.

For higher volumes, we offer bulk packaging in UN-certified seamless aluminum canisters (5 kg, 25 kg), food-grade HDPE drums, and heavy-gauge steel export drums (200 kg) for large-scale industrial requirements.

To get pricing for your required quantity and product, please submit an enquiry and our sales team will prepare a Proforma Invoice.`,
      actionLink: {
        label: "Request a Quotation",
        href: "/contact",
      },
    };
  }

  // ── Organic / Natural / Chemical-Free questions ────────────────────────
  if (
    normalized.includes("are your oils organic") || normalized.includes("is it organic") ||
    normalized.includes("are they organic") || normalized.includes("do you have organic") ||
    normalized.includes("organic certified") || normalized.includes("natural oils") ||
    (normalized.includes("organic") && (normalized.includes("oil") || normalized.includes("oils")))
  ) {
    return {
      id: "conv_organic_yes_no",
      patterns: ["organic", "natural oils"],
      answer: `🌿 **Yes — we supply both certified organic and conventional pure botanical oils.**

• **Certified Organic Range:** We offer **20 USDA/NPOP certified organic oils**, including Organic Lavender, Organic Peppermint, Organic Jojoba, Organic Ginger, Organic Jasmine, and others. These are cultivated without synthetic pesticides, herbicides, or GMOs and are verified by accredited international organic certification agencies with full Organic Transaction Certificates (TC).

• **Conventional Pure Range:** Our broader catalog of 273+ products covers 100% pure, unadulterated steam-distilled and cold-pressed botanicals — all rigorously GC-MS tested and free of synthetic extenders or adulterants, even in the non-certified organic range.

If you specifically require certified organic grade with transaction certificates, please mention it in your enquiry.`,
      actionLink: {
        label: "Browse Certified Organic Oils",
        href: "/products/organic-oils",
      },
    };
  }

  // ── Private Label / Custom Label ────────────────────────────────────────
  if (
    normalized.includes("private label") || normalized.includes("custom label") ||
    normalized.includes("my own label") || normalized.includes("white label") ||
    normalized.includes("can i put my brand") || normalized.includes("custom branding") ||
    normalized.includes("label design") || normalized.includes("oem")
  ) {
    return {
      id: "conv_private_label",
      patterns: ["private label", "custom label", "white label", "oem"],
      answer: `🏷️ **Yes — we offer full Private Label and OEM packaging services.**

Our cleanroom bottling facility can produce:
• Custom-labeled retail bottles in your brand name in **Amber, Clear, Matte Frosted, Cobalt Blue, or Emerald Green** glass finishes.
• Sizes from **5ml up to 500ml** with European dropper inserts, calibrated glass pipettes, treatment pumps, mist atomizers, or rollerballs.
• Shock-absorbing **cushion box packing** for secure retail presentation during transit.

We work with both small brands (starting from a few hundred units) and large distributors with multi-pallet orders. To get started, simply share your product list, preferred bottle size and finish, and label artwork with our packaging team.`,
      actionLink: {
        label: "Explore Packaging & Private Label",
        href: "/packaging",
      },
    };
  }

  // ── Samples / Trials ────────────────────────────────────────────────────
  if (
    normalized.includes("can i get a sample") || normalized.includes("do you have samples") ||
    normalized.includes("can i try") || normalized.includes("send me a sample") ||
    normalized.includes("trial sample") || normalized.includes("evaluation sample") ||
    normalized.includes("pre-shipment sample") || normalized.includes("sample before") ||
    (normalized.includes("sample") && normalized.includes("order"))
  ) {
    return {
      id: "conv_samples_yes_no",
      patterns: ["sample", "trial sample", "evaluation sample"],
      answer: `🔬 **Enquire about evaluation samples directly with our team.**

India Essential Oils supplies products at a minimum order of **1 kg per product**. For specific information on evaluation samples, pre-shipment arrangements, or trial quantities for laboratory R&D, please contact our sales desk directly — our team will advise you on the best way to proceed based on your requirements.`,
      actionLink: {
        label: "Contact Sales Desk",
        href: "/contact",
      },
    };
  }

  // ── Retail / Consumer / End-User Purchasing ─────────────────────────────
  if (
    normalized.includes("can i buy for personal") || normalized.includes("retail buyer") ||
    normalized.includes("individual buyer") || normalized.includes("buy for personal use") ||
    normalized.includes("small quantities") || normalized.includes("single bottle") ||
    (normalized.includes("buy") && normalized.includes("personal"))
  ) {
    return {
      id: "conv_retail_buyer",
      patterns: ["personal use", "retail buyer", "single bottle", "small quantity"],
      answer: `ℹ️ **India Essential Oils primarily serves wholesale B2B buyers** — manufacturers, formulators, distributors, and brand owners.

Our **minimum order quantities start at 100g to 1 kg** for evaluation samples, and 5kg+ for standard wholesale. We do not typically sell single retail bottles direct to consumers.

However, if you have a specific requirement, please contact our sales desk — our team can advise the most suitable minimum order for your situation.`,
      actionLink: {
        label: "Contact Sales Desk",
        href: "/contact",
      },
    };
  }

  // ── Payment Methods ──────────────────────────────────────────────────────
  if (
    normalized.includes("payment method") || normalized.includes("how to pay") || normalized.includes("how do i pay") ||
    normalized.includes("accept paypal") || normalized.includes("credit card") || normalized.includes("do you accept") ||
    normalized.includes("wire transfer") || normalized.includes("bank transfer") ||
    (normalized.includes("payment") && (normalized.includes("accept") || normalized.includes("mode") || normalized.includes("options")))
  ) {
    return {
      id: "conv_payment_methods",
      patterns: ["payment", "how to pay", "wire transfer", "credit card"],
      answer: `💳 **Payment methods — please contact us for details.**

For information on accepted payment modes, currencies, and terms for your wholesale order, please reach out to our commercial sales desk directly. Our team will provide full payment instructions along with your Proforma Invoice.`,
      actionLink: {
        label: "Contact Commercial Desk",
        href: "/contact",
      },
    };
  }

  // ── Certificates / Documentation Availability ────────────────────────────
  if (
    normalized.includes("do you have a coa") || normalized.includes("can you provide coa") ||
    normalized.includes("do you provide msds") || normalized.includes("do you have msds") ||
    normalized.includes("certificate of analysis") || normalized.includes("phytosanitary") ||
    normalized.includes("do you have certificate") || normalized.includes("documentation available") ||
    (normalized.includes("provide") && (normalized.includes("coa") || normalized.includes("msds") || normalized.includes("certificate")))
  ) {
    return {
      id: "conv_documentation",
      patterns: ["coa", "msds", "certificate", "documentation"],
      answer: `📄 **Documentation and certificates — please contact us for specifics.**

For details on available export documentation, certificates, and quality reports for any product or shipment, please reach out to our team directly. Our commercial desk will advise on what is available and can be provided for your order.`,
      actionLink: {
        label: "Contact Us for Documentation",
        href: "/contact",
      },
    };
  }

  // ── Lead Time / How Long ─────────────────────────────────────────────────
  if (
    normalized.includes("how long") || normalized.includes("when will i receive") ||
    normalized.includes("how many days") || normalized.includes("lead time") ||
    (normalized.includes("how") && normalized.includes("long") && (normalized.includes("ship") || normalized.includes("deliver") || normalized.includes("order")))
  ) {
    return {
      id: "conv_lead_time",
      patterns: ["how long", "lead time", "how many days"],
      answer: `⏱️ **Order Dispatch & Delivery Timelines:**

• **Order Dispatch:** Standard wholesale orders are **packed and dispatched within 48 hours** of payment confirmation from our warehouse in New Delhi.
• **Transit Time:** Delivery timelines vary depending on your destination and chosen freight method (air or sea). For an accurate estimate to your location, please contact our export desk.

For a full shipping quote and timeline specific to your order, reach out to our team directly.`,
      actionLink: {
        label: "Ask About Your Order Timeline",
        href: "/contact",
      },
    };
  }

  // ── Return / Refund Policy ───────────────────────────────────────────────
  if (
    normalized.includes("refund") || normalized.includes("return") || normalized.includes("return policy") ||
    normalized.includes("money back") || normalized.includes("can i return") ||
    (normalized.includes("policy") && (normalized.includes("refund") || normalized.includes("return")))
  ) {
    return {
      id: "conv_refund_return",
      patterns: ["refund", "return", "money back"],
      answer: `↩️ **Returns & refund policy — please contact us directly.**

For information on our returns or refund policy, or to raise a concern about an existing order, please contact our commercial export desk. Our team will assist you based on the specifics of your situation.`,
      actionLink: {
        label: "Contact Export Desk",
        href: "/contact",
      },
    };
  }

  // ── Halal / Kosher / Vegan / Cruelty-Free ──────────────────────────────
  if (
    normalized.includes("halal") || normalized.includes("kosher") || normalized.includes("vegan") ||
    normalized.includes("cruelty free") || normalized.includes("cruelty-free") || normalized.includes("animal testing") ||
    normalized.includes("not tested on animals")
  ) {
    return {
      id: "conv_halal_kosher_vegan",
      patterns: ["halal", "kosher", "vegan", "cruelty free"],
      answer: `ℹ️ **Halal, Kosher, and other certifications — please contact us for details.**

For information on specific product certifications (Halal, Kosher, cruelty-free, etc.), please contact our team directly. Our sales desk will confirm what certifications are available for the products you are interested in.`,
      actionLink: {
        label: "Contact Us for Certification Details",
        href: "/contact",
      },
    };
  }

  // ── Shelf Life / Expiry ──────────────────────────────────────────────────
  if (
    normalized.includes("shelf life") || normalized.includes("expiry") || normalized.includes("expire") ||
    normalized.includes("expiration") || normalized.includes("how long do they last") ||
    normalized.includes("best before") || normalized.includes("how long will it last")
  ) {
    return {
      id: "conv_shelf_life",
      patterns: ["shelf life", "expiry", "expire", "how long do they last"],
      answer: `📅 **Shelf life varies by product — please contact us for specifics.**

Shelf life depends on the type of botanical, extraction method, and storage conditions. For accurate shelf life information for a specific product you are interested in, please contact our team — we will provide the details from the product's Certificate of Analysis (CoA).`,
      actionLink: {
        label: "Contact Us for Product Details",
        href: "/contact",
      },
    };
  }

  // ── GMO-Free / Non-GMO ───────────────────────────────────────────────────
  if (
    normalized.includes("gmo") || normalized.includes("non gmo") || normalized.includes("non-gmo") ||
    normalized.includes("genetically modified") || normalized.includes("are your oils gmo")
  ) {
    return {
      id: "conv_non_gmo",
      patterns: ["gmo", "non gmo", "non-gmo", "genetically modified"],
      answer: `🧬 **GMO status — please contact us for product-specific details.**

For information on the GMO status of a specific product, please reach out to our team. Our sales desk will provide the relevant details and documentation for the product you are enquiring about.`,
      actionLink: {
        label: "Contact Us for Product Details",
        href: "/certifications",
      },
    };
  }

  // ── Business Hours / Availability ───────────────────────────────────────
  if (
    normalized.includes("business hours") || normalized.includes("working hours") ||
    normalized.includes("office hours") || normalized.includes("when are you open") ||
    normalized.includes("when can i contact") || normalized.includes("are you available") ||
    normalized.includes("response time")
  ) {
    return {
      id: "conv_business_hours",
      patterns: ["business hours", "working hours", "office hours", "response time"],
      answer: `🕐 **Business Hours & Response Times:**

Our commercial sales desk operates **Monday to Friday, 9 AM – 6 PM IST (India Standard Time / UTC+5:30)**.

• **Phone:** Call us during business hours at the number listed on our Contact page.
• **Email / Enquiry Form:** Available 24/7 — our team typically responds within one business day.

If your message is sent outside business hours, our team will get back to you on the next working day.`,
      actionLink: {
        label: "Contact Our Sales Desk",
        href: "/contact",
      },
    };
  }

  // ── Who is India Essential Oils / Tell me about yourself ────────────────
  if (
    normalized.includes("who are you") || normalized.includes("who is india essential oil") ||
    normalized.includes("tell me about yourself") || normalized.includes("tell me about your company") ||
    normalized.includes("about the company") || normalized.includes("company background") ||
    normalized.includes("what is india essential oil") || normalized.includes("what do you do") ||
    normalized.includes("what does your company do")
  ) {
    return {
      id: "conv_about_company",
      patterns: ["who are you", "about company", "what do you do"],
      answer: `🏢 **About India Essential Oils:**

India Essential Oils is a premier manufacturing and global export division of **Mother Herbs Pvt. Ltd.**, established in **New Delhi, India in 2004**.

We specialize in:
• Manufacturing and exporting **273+ pharmacopoeial-grade botanical extracts** across 9 product divisions — Essential Oils, CO₂ Extracts, Carrier Oils, Spice Oils, Floral Absolutes, Floral Waters, Oleoresins, Ayurvedic Oils, and Organic Oils.
• In-house **Shimadzu GC-MS analytical laboratory** for batch purity verification.
• Certified under **ISO 9001:2015, GMP Compliance, and Ministry of MSME Udyam Registration** standards.
• Exporting worldwide with 48-hour order dispatch from our 1,000 MT climate-controlled warehouse.

We serve manufacturers, formulators, cosmetic brands, pharmaceutical companies, and distributors globally.`,
      actionLink: {
        label: "Learn More About Us",
        href: "/about/profile",
      },
    };
  }

  return null;
}

/**
 * Catalog Download matcher
 */
function checkDownloadCatalogQuery(normalized: string): FaqEntry | null {
  const downloadPatterns = [
    "download", "catalog", "catalogue", "pdf", "brochure", "product list", "complete list", "all products"
  ];

  const matches = downloadPatterns.some(p => normalized.includes(p));
  if (!matches) return null;

  return {
    id: "download_catalog_expert",
    patterns: downloadPatterns,
    answer: `📑 **Official 2026 Botanical Wholesale Catalog (PDF):**

You can download our official 44-page September 2026 Wholesale Catalog (PDF) containing all 273+ verified pure botanical extracts, botanical names, processing methods, specifications, MOQs, and technical dossiers.`,
    actionLink: {
      label: "Download Official 2026 Catalog (PDF)",
      href: "/api/catalog/download",
    },
  };
}

/**
 * FAQs Page matcher
 */
function checkFaqsPageQuery(normalized: string): FaqEntry | null {
  const faqPatterns = ["faq", "faqs", "frequently asked questions", "common questions", "help questions"];
  const matches = faqPatterns.some(p => normalized === p || normalized.includes(p));
  if (!matches) return null;

  return {
    id: "faqs_page_expert",
    patterns: faqPatterns,
    answer: `❓ **Comprehensive Frequently Asked Questions (FAQs):**

We have an extensive, dedicated FAQs page answering all questions across:
• **General & Company Background** (Mother Herbs division, ISO 9001:2015 & GMP facility)
• **Ordering & Dispatch** (3-step ordering process, 48-hour order dispatch, evaluation samples)
• **Product Quality & Testing** (Dual GC-MS batch profiling, CoAs, non-GMO assurance)
• **Packaging & OEM** (10ml–500ml droppers, cushion box packing, UN aluminum & steel drums)
• **Shipping & Global Export** (Exporting worldwide, MSDS 16-point dossiers, COO)`,
    actionLink: {
      label: "Visit Dedicated FAQs Page",
      href: "/faqs",
    },
  };
}

/**
 * Master Intelligent Matcher
 */
export function matchFaq(userInput: string, faqData: FaqEntry[]): FaqEntry | null {
  const normalized = normalizeText(userInput);
  if (!normalized) return null;

  // 1. FAQs Page Direct Query
  const faqMatch = checkFaqsPageQuery(normalized);
  if (faqMatch) return faqMatch;

  // 2. Conversational Yes/No Business Questions (phone, samples, MOQ, organic, payment, etc.)
  //    Run EARLY so simple questions don't fall through to product search
  const convMatch = checkConversationalQuery(normalized);
  if (convMatch) return convMatch;

  // 3. Specific Country Delivery Queries ("do you ship to X?", "can you deliver to X?")
  const deliveryCountryMatch = checkDeliveryToCountryQuery(normalized);
  if (deliveryCountryMatch) return deliveryCountryMatch;

  // 4. High Priority: Category-Level Inquiries (Essential Oils, Carrier Oils, CO2 Extracts, etc.)
  const categoryMatch = checkCategoryInquiry(normalized);
  if (categoryMatch) return categoryMatch;

  // 5. General Export Countries & Regions Page
  const exportMatch = checkExportCountriesQuery(normalized);
  if (exportMatch) return exportMatch;

  // 6. Shipping, Dispatch Turnaround & Global Logistics
  const shipMatch = checkShippingQuery(normalized);
  if (shipMatch) return shipMatch;

  // 7. Laboratory Testing, GC-MS & CoA Verification
  const qualityMatch = checkQualityQuery(normalized);
  if (qualityMatch) return qualityMatch;

  // 8. Certifications, Standards & Company Profile
  const certMatch = checkCertificationsQuery(normalized);
  if (certMatch) return certMatch;

  // 9. Pricing, MOQ & Wholesale Cost Inquiries
  const priceMatch = checkPricingQuery(normalized);
  if (priceMatch) return priceMatch;

  // 10. Packaging, Dropper Caps & Cushion Box Packing
  const pkgMatch = checkPackagingQuery(normalized);
  if (pkgMatch) return pkgMatch;

  // 11. Ordering Procedure, Samples & Payment Terms
  const orderMatch = checkOrderAndSamplesQuery(normalized);
  if (orderMatch) return orderMatch;

  // 12. High Priority: Direct & Intelligent Product Catalog Search across all 273 items
  const productMatch = searchProductCatalogSmart(normalized);
  if (productMatch) return productMatch;

  // 13. Formulation & Application Recommendations (Skincare, Hair, Sleep, Pain, Flavor, Perfume)
  const appMatch = matchApplicationRecommendations(normalized);
  if (appMatch) return appMatch;

  // 14. Complete Catalog Download
  const downloadMatch = checkDownloadCatalogQuery(normalized);
  if (downloadMatch) return downloadMatch;

  // 15. Substring & Length-Weighted Scoring against Static FAQ Database
  let bestEntry: FaqEntry | null = null;
  let highestScore = 0;

  for (const entry of faqData) {
    let entryScore = 0;

    for (const pattern of entry.patterns) {
      const normPattern = normalizeText(pattern);
      if (!normPattern) continue;

      if (normalized === normPattern) {
        entryScore += normPattern.length * 4 + 25;
        continue;
      }

      if (normalized.includes(normPattern)) {
        const weight = normPattern.length > 5 ? normPattern.length * 2 : normPattern.length;
        entryScore += weight;

        const regex = new RegExp(`(^|\\s)${normPattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\s|$)`, "i");
        if (regex.test(normalized)) {
          entryScore += 10;
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
