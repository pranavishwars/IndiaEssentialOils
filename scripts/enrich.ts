import fs from "fs";
import path from "path";
import { INITIAL_PRODUCTS, Product, ProductBenefit, ManufacturingStep } from "../src/lib/products-store";

const DEFAULT_STEAM_STEPS: ManufacturingStep[] = [
  { stepNumber: 1, title: "Artisanal Harvesting", description: "Harvested at peak diurnal volatile concentration from organic contract farm blocks." },
  { stepNumber: 2, title: "Low-Pressure Distillation", description: "Steam distilled in 316-grade stainless steel stills at controlled vapor pressures." },
  { stepNumber: 3, title: "Filtration & Clarification", description: "Multi-stage physical filtration and moisture decanting with zero solvent residue." },
  { stepNumber: 4, title: "GC-MS Quality Verification", description: "Batch analytical testing for optical rotation, specific gravity, and chiral purity." },
];

const DEFAULT_COLD_PRESS_STEPS: ManufacturingStep[] = [
  { stepNumber: 1, title: "Seed Selection & De-hulling", description: "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold." },
  { stepNumber: 2, title: "Cold Expeller Pressing", description: "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids." },
  { stepNumber: 3, title: "Sediment Decantation", description: "Natural gravity settling followed by micro-membrane filtration for liquid clarity." },
  { stepNumber: 4, title: "Nitrogen Flushing", description: "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export." },
];

const DEFAULT_SOLVENT_STEPS: ManufacturingStep[] = [
  { stepNumber: 1, title: "Pre-Dawn Blossom Plucking", description: "Gentle manual harvesting of fresh delicate flowers before solar volatile loss." },
  { stepNumber: 2, title: "Sub-Ambient Solvent Extraction", description: "Careful food-grade hydrocarbon extraction yielding pure botanical concrete." },
  { stepNumber: 3, title: "Alcohol Washing & Chilling", description: "Separation of floral waxes from aromatic absolutes through cryogenic filtration." },
  { stepNumber: 4, title: "Vacuum Solvent Stripping", description: "Controlled low-temperature vacuum evaporation leaving <0.1 ppm residual solvent." },
];

const DEFAULT_OLEORESIN_STEPS: ManufacturingStep[] = [
  { stepNumber: 1, title: "Raw Botanical Milling", description: "Cryogenic grinding of dried spices to maximize surface area and prevent volatile loss." },
  { stepNumber: 2, title: "Supercritical Fluid / Solvent Leaching", description: "Dual-phase extraction dissolving both essential oil and active resinoid fractions." },
  { stepNumber: 3, title: "Vacuum Desolventization", description: "Concentration under vacuum to yield a pure, viscous, standardized oleoresin matrix." },
  { stepNumber: 4, title: "Analytical Standardization", description: "Standardized for Scoville Heat Units (SHU), color units (CU), or active marker %." },
];

const TERROIR_MAP: Record<string, { region: string; actives: string; terroir: string }> = {
  "lavender": { region: "Kashmir Valley, Western Himalayas", actives: "Linalool (38%+), Linalyl Acetate (35%+)", terroir: "Temperate sub-alpine slopes at 1,800m altitude" },
  "peppermint": { region: "Uttar Pradesh Terai alluvial plains", actives: "Menthol (45%+), Menthone (20%+)", terroir: "Rich Gangetic loam with high summer solar radiation" },
  "tea-tree": { region: "Assam Valley & Southern plantations", actives: "Terpinen-4-ol (42%+), Gamma-Terpinene", terroir: "Sub-tropical humid lowlands with pristine riverine irrigation" },
  "rosemary": { region: "Nilgiri Hills, Tamil Nadu", actives: "1,8-Cineole (45%+), Alpha-Pinene, Camphor", terroir: "Cool montane elevation with continuous misty cloud cover" },
  "eucalyptus": { region: "Nilgiri Blue Mountains, South India", actives: "Eucalyptol / 1,8-Cineole (82%+), Alpha-Pinene", terroir: "High-altitude eucalyptus plantations harvested since 1843" },
  "frankincense": { region: "Shekhawati / Aravalli Hills, Rajasthan", actives: "Alpha-Pinene (52%+), Boswellic derivatives", terroir: "Arid rocky calcareous soils yielding high-resin oleogum" },
  "sandalwood": { region: "Mysore & Western Ghats, Karnataka", actives: "Alpha-Santalol (48%+), Beta-Santalol (24%+)", terroir: "Deccan red laterite soils with traditional agroforestry stewardship" },
  "lemongrass": { region: "Cochin / Wayanad, Kerala", actives: "Citral (78%+), Geraniol, Myrcene", terroir: "Malabar tropical coastal terroir receiving dual monsoons" },
  "citronella": { region: "Assam & Brahmaputra valley", actives: "Citronellal (35%+), Geraniol (22%+)", terroir: "Humid tropical alluvial floodplains with fertile organic silt" },
  "palmarosa": { region: "Satpura Range, Madhya Pradesh", actives: "Geraniol (85%+), Geranyl Acetate", terroir: "Wild grassland plateaus harvested before midday peak heat" },
  "patchouli": { region: "Coastal Karnataka & Western Ghats", actives: "Patchoulol (32%+), Alpha-Bulnesene", terroir: "Shaded tropical understory with deep humus forest floor" },
  "vetiver": { region: "Bharatpur, Rajasthan & Bundelkhand", actives: "Khusimol (18%+), Vetivone, Isovalencenol", terroir: "Heavy alluvial clay soil where root systems anchor 3 meters deep" },
  "black-pepper": { region: "Wayanad & Idukki, Kerala", actives: "Beta-Caryophyllene (28%+), Piperine, Limonene", terroir: "Malabar spice highlands legendary since Roman trade routes" },
  "cardamom": { region: "Cardamom Hills, Idukki, Kerala", actives: "Terpinyl Acetate (40%+), 1,8-Cineole (32%+)", terroir: "Shaded evergreen rainforest canopy at 1,000m elevation" },
  "ginger": { region: "Cochin & Wayanad, Kerala", actives: "Zingiberene (35%+), Curcumene, Gingerols", terroir: "Organic mountain loam renowned for intense aromatic pungency" },
  "clove": { region: "Kanyakumari & Nilgiris, Tamil Nadu", actives: "Eugenol (86%+), Eugenyl Acetate", terroir: "Coastal maritime humid microclimate of Southern peninsular India" },
  "cinnamon": { region: "Malabar Coast & Sri Lanka borderlands", actives: "Cinnamaldehyde (72%+), Eugenol (8%+)", terroir: "Tropical coastal laterite belt harvested from peeled coppiced shoots" },
  "holy-basil": { region: "Vrindavan / Mathura plains, Uttar Pradesh", actives: "Eugenol (55%+), Beta-Caryophyllene", terroir: "Sacred organic cultivation under strict Ayurvedic protocols" },
  "jojoba": { region: "Thar Desert, Rajasthan", actives: "Gadoleic Acid (72%), Erucic Acid, Wax Esters", terroir: "Arid sunshine terroir producing ultra-stable liquid wax esters" },
  "castor": { region: "Kutch & Saurashtra, Gujarat", actives: "Ricinoleic Acid (88%+), Oleic Acid", terroir: "Semi-arid saline-tolerant soil with high seed oil concentration" },
  "moringa": { region: "Madurai & Dindigul, Tamil Nadu", actives: "Oleic Acid (73%+), Behenic Acid", terroir: "Semi-arid tropical plains yielding cold-hardy nutrient-rich seeds" },
  "rosehip": { region: "Himalayan alpine valleys & Kashmir", actives: "Linoleic Acid (44%), Alpha-Linolenic Acid (34%)", terroir: "Sub-zero winter frost hardening seed antioxidant reserves" },
  "argan": { region: "Souss Valley / Atlas Biosphere", actives: "Oleic Acid (48%), Linoleic Acid (33%), Tocopherols", terroir: "UNESCO Biosphere reserve arid limestone mineral soils" },
  "neem": { region: "Bundelkhand & Central Deccan, India", actives: "Azadirachtin A/B, Nimbin, Salannin", terroir: "Sun-baked drought-tolerant native woodland agroforestry" },
  "rose": { region: "Pushkar, Rajasthan & Aligarh, UP", actives: "Citronellol (38%), Geraniol (20%), Rose Oxide", terroir: "Chaitri Rose blooming cycle harvested before sunrise" },
  "jasmine": { region: "Madurai, Tamil Nadu", actives: "Benzyl Acetate (25%), Linalool, Jasmone", terroir: "Geographical Indication (GI) certified dawn flower harvest" },
};

function getOverview(name: string, botanical: string | undefined, category: string): string {
  const nameLower = name.toLowerCase();
  for (const [key, val] of Object.entries(TERROIR_MAP)) {
    if (nameLower.includes(key)) {
      return `Distilled from prime ${botanical || name} cultivated in the renowned terroir of ${val.region}. This botanical lot exhibits an exceptional volatile fraction highlighted by ${val.actives}, grown under ${val.terroir}. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.`;
    }
  }

  if (category === "SPICE_OIL") {
    return `Derived from steam distillation of select ${botanical || name} sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.`;
  }
  if (category === "CARRIER_OIL") {
    return `Single-pass cold expeller pressed from non-GMO seeds of ${botanical || name}. Rich in bio-compatible essential fatty acids and natural lipid-soluble antioxidants, offering superb skin emollience, rapid dermal absorption, and high oxidative stability for cosmetic formulation.`;
  }
  if (category === "FLORAL_ABSOLUTE") {
    return `Artisanal low-temperature solvent extracted from freshly blossomed ${botanical || name}. Captures the true, unadulterated olfactory identity of the living flower with extraordinary aromatic depth, fixative persistence, and multifaceted floral nuances for luxury fine fragrance creation.`;
  }
  if (category === "OLEORESIN") {
    return `Standardized full-spectrum botanical extract derived from ${botanical || name}. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.`;
  }
  if (category === "ORGANIC_OIL") {
    return `Certified organic extraction of ${botanical || name} grown on certified organic farms adhering to USDA NOP and EU organic standards. Harvested with zero synthetic agrochemicals and steam-distilled under gentle vapor pressure to preserve the full energetic and chemical integrity of the raw botanical.`;
  }
  if (category === "AYURVEDIC") {
    return `Authentic Ayurvedic grade botanical oil of ${botanical || name}, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols.`;
  }
  return `100% pure steam distilled ${name} (${botanical || "Botanical"}) sourced from prime Indian harvesting regions. Features a clean, characteristic aromatic signature with high chromatographic purity verified by rigorous GC-MS testing for commercial perfumery, aromatherapy, and cosmetics.`;
}

function getHistory(name: string, botanical: string | undefined, category: string): string {
  const nameLower = name.toLowerCase();
  if (category === "AYURVEDIC" || nameLower.includes("holy basil") || nameLower.includes("tulsi") || nameLower.includes("vetiver") || nameLower.includes("calamus") || nameLower.includes("boswellia")) {
    return `Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.`;
  }
  if (category === "SPICE_OIL" || nameLower.includes("pepper") || nameLower.includes("cardamom") || nameLower.includes("clove") || nameLower.includes("ginger") || nameLower.includes("cinnamon")) {
    return `Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.`;
  }
  if (category === "FLORAL_ABSOLUTE" || nameLower.includes("jasmine") || nameLower.includes("rose") || nameLower.includes("lotus") || nameLower.includes("champaca")) {
    return `Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.`;
  }
  if (category === "CARRIER_OIL") {
    return `Employed for millennia across Mediterranean, Ayurvedic, and traditional skincare rituals as nourishing lipid bases and medicinal carriers. Sustainably harvested in partnership with smallholder farming clusters and pressed using friction-controlled expellers that preserve delicate tocopherols and essential fatty acids.`;
  }
  return `Cultivated and distilled across India's microclimatic agricultural zones through multi-generational farming partnerships. Combines age-old regional harvesting wisdom with modern zero-solvent distillation engineering to supply global cosmetic, pharmaceutical, and aromatherapy houses.`;
}

function getBenefits(name: string, category: string): ProductBenefit[] {
  if (category === "CARRIER_OIL") {
    return [
      { title: "Intensive Lipid Barrier Restoration", description: "Reinforces the stratum corneum with bio-identical fatty acids to prevent trans-epidermal water loss (TEWL)." },
      { title: "Non-Comedogenic Dermal Nutrition", description: "Delivers high natural tocopherols and phytosterols to soothe oxidative cellular stress without clogging pores." },
      { title: "Versatile Carrier Vehicle", description: "Serves as an optimal solubilizing and penetration-enhancing base for essential oils and cosmetic actives." }
    ];
  }
  if (category === "SPICE_OIL" || category === "OLEORESIN") {
    return [
      { title: "Thermal Microcirculation Stimulation", description: "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation." },
      { title: "Broad-Spectrum Antimicrobial Activity", description: "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation." },
      { title: "Standardized Pungency & Flavor Potency", description: "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing." }
    ];
  }
  if (category === "FLORAL_ABSOLUTE") {
    return [
      { title: "Extraordinary Olfactory Tenacity", description: "Acts as an opulent heart-to-base note with unmatched fixative longevity in luxury fine fragrances." },
      { title: "Emotional Calming & Mood Elevation", description: "Inhalation naturally down-regulates sympathetic nervous tension, promoting psychological tranquility." },
      { title: "Cellular Rejuvenation for Mature Skin", description: "Nourishes delicate skin tissue and restores suppleness in premium anti-aging botanical elixirs." }
    ];
  }
  if (category === "AYURVEDIC") {
    return [
      { title: "Classical Tridoshic Harmonization", description: "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles." },
      { title: "Adaptogenic & Nervine Vitality", description: "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress." },
      { title: "Dermal Detoxification & Tissue Tonification", description: "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage." }
    ];
  }
  return [
    { title: "Aromatherapeutic Neurological Balance", description: "Inhaled monoterpenes interact with the limbic olfactory receptors to induce mental focus and relaxation." },
    { title: "Topical Purification & Clarifying Care", description: "Possesses natural cleansing and astringent properties suited for blemish-prone and oily skin types." },
    { title: "Natural Antiseptic & Airborne Refreshment", description: "Purifies ambient air in vaporizers and strengthens commercial formulations with clean plant actives." }
  ];
}

function getManufacturingSteps(category: string): ManufacturingStep[] {
  if (category === "CARRIER_OIL") return DEFAULT_COLD_PRESS_STEPS;
  if (category === "FLORAL_ABSOLUTE") return DEFAULT_SOLVENT_STEPS;
  if (category === "OLEORESIN") return DEFAULT_OLEORESIN_STEPS;
  return DEFAULT_STEAM_STEPS;
}

const enrichedProducts: Product[] = INITIAL_PRODUCTS.map((p) => {
  const overview = p.overview || getOverview(p.name, p.botanicalName, p.category);
  const history = p.history || getHistory(p.name, p.botanicalName, p.category);
  const benefits = p.benefits && p.benefits.length > 0 ? p.benefits : getBenefits(p.name, p.category);
  const manufacturingSteps = p.manufacturingSteps && p.manufacturingSteps.length > 0
    ? p.manufacturingSteps
    : getManufacturingSteps(p.category);

  return {
    ...p,
    overview,
    history,
    benefits,
    manufacturingSteps,
  };
});

console.log(`Enriched ${enrichedProducts.length} products.`);

// Reconstruct products-store.ts file
const fileContent = `export interface ProductBenefit {
  title: string;
  description: string;
}

export interface ManufacturingStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  botanicalName?: string;
  category: "ESSENTIAL_OIL" | "SPICE_OIL" | "CARRIER_OIL" | "FLORAL_ABSOLUTE" | "FLORAL_WATER" | "OLEORESIN" | "ORGANIC_OIL" | "AYURVEDIC";
  subCategory?: string;
  description: string;
  shortSpec: string;
  overview?: string;
  history?: string;
  benefits?: ProductBenefit[];
  manufacturingSteps?: ManufacturingStep[];
  bottleFormat: "DROPPER_10ML" | "BOTTLE_100ML" | "BOTTLE_200ML" | "ROLL_ON_30ML" | "GIFT_BOX";
  compositeImageUrl?: string;
  priceDisplay: string;
  moq: string;
  popularityScore: number;
  featured?: boolean;
}

export interface ProductEvent {
  id: string;
  productId: string;
  type: "SEARCH_IMPRESSION" | "VIEW" | "INQUIRY" | "ADD_TO_QUOTE";
  createdAt: Date;
}

export const CATEGORY_SLUGS: Record<string, string> = {
  ESSENTIAL_OIL: "essential-oils",
  SPICE_OIL: "spice-oils",
  CARRIER_OIL: "carrier-oils",
  FLORAL_ABSOLUTE: "floral-absolutes",
  FLORAL_WATER: "floral-waters",
  OLEORESIN: "oleoresins",
  ORGANIC_OIL: "organic-oils",
  AYURVEDIC: "ayurvedic-oils",
};

export const SLUG_TO_CATEGORY: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_SLUGS).map(([k, v]) => [v, k])
);

export function getCategorySlug(category: string): string {
  return CATEGORY_SLUGS[category] || "essential-oils";
}

export const INITIAL_PRODUCTS: Product[] = ${JSON.stringify(enrichedProducts, null, 2)};

// ============================
// CLIENT-SAFE PRODUCT STORE
// ============================

// Maps a raw Prisma DB row to our Product interface
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapDbProduct(row: any): Product {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    botanicalName: row.botanicalName ?? undefined,
    category: row.category as Product["category"],
    subCategory: row.subCategory ?? undefined,
    description: row.description,
    shortSpec: row.shortSpec ?? "",
    overview: row.overview ?? undefined,
    history: row.history ?? undefined,
    benefits: Array.isArray(row.benefits) ? (row.benefits as ProductBenefit[]) : undefined,
    manufacturingSteps: Array.isArray(row.manufacturingSteps)
      ? (row.manufacturingSteps as ManufacturingStep[])
      : undefined,
    bottleFormat: row.bottleFormat as Product["bottleFormat"],
    compositeImageUrl: row.compositeImageUrl ?? undefined,
    priceDisplay: row.priceDisplay ?? "Request Quote",
    moq: row.moq ?? "1 kg",
    popularityScore: row.popularityScore ?? 0,
    featured: row.featured ?? false,
  };
}

export class ProductStore {
  private products: Product[];
  private events: ProductEvent[];

  constructor(initialProducts: Product[]) {
    this.products = initialProducts.map(p => ({ ...p }));
    this.events = [];
  }

  setProducts(newProducts: Product[]): void {
    this.products = newProducts.map(p => ({ ...p }));
  }

  getAll(): Product[] { return this.products; }
  getById(id: string): Product | undefined { return this.products.find(p => p.id === id); }
  getBySlug(slug: string): Product | undefined { return this.products.find(p => p.slug === slug); }
  getFeatured(): Product[] { return this.products.filter(p => p.featured); }
  getByCategory(category: string): Product[] { return this.products.filter(p => p.category === category); }
  getEventsTrailing90Days(): ProductEvent[] {
    const cutoff = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000);
    return this.events.filter(e => e.createdAt >= cutoff);
  }

  logEvent(productId: string, type: ProductEvent["type"]): ProductEvent {
    const evt: ProductEvent = {
      id: "evt-" + Date.now() + "-" + Math.random().toString(36).slice(2),
      productId,
      type,
      createdAt: new Date(),
    };
    this.events.push(evt);
    const cutoff = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000);
    this.events = this.events.filter(e => e.createdAt >= cutoff);
    return evt;
  }

  updatePopularityScores(scoreMap: Record<string, number>): void {
    this.products = this.products.map(p => ({
      ...p,
      popularityScore: scoreMap[p.id] ?? p.popularityScore,
    }));
  }
}

// Global singleton — shared across the Node.js process & client bundle safely
const globalForStore = global as unknown as { productStore?: ProductStore };
export const productStore: ProductStore =
  globalForStore.productStore ?? (globalForStore.productStore = new ProductStore(INITIAL_PRODUCTS));
`;

fs.writeFileSync(path.join(__dirname, "../src/lib/products-store.ts"), fileContent, "utf-8");
console.log("Successfully wrote enriched products to src/lib/products-store.ts");
