import fs from "fs";
import path from "path";
import { INITIAL_PRODUCTS, Product } from "../src/lib/products-store";
import { deriveSignatureColor } from "../src/lib/signature-colors";

function determineCorrectBottleFormat(category: string, slug: string): Product["bottleFormat"] {
  const dropperSlugs = new Set([
    "rose-damascena-oil", "rose-oil", "rose-damascena-absolute", "jasmine-sambac-absolute",
    "chamomile-oil-blue", "chamomile-oil-roman", "champaca-oil", "lotus-oil", "blue-lotus-oil",
    "helichrysum-oil", "costus-root-oil", "davana-oil", "kewra-oil", "neroli-oil", "agarwood-oil",
    "lemon-balm-oil", "coffee-oil", "cypriol-oil"
  ]);

  if (dropperSlugs.has(slug) || category === "FLORAL_ABSOLUTE") {
    return "DROPPER_10ML";
  }

  if (category === "CARRIER_OIL" || category === "OLEORESIN") {
    return "BOTTLE_200ML";
  }

  if (category === "AYURVEDIC") {
    if (slug.includes("tailam") || slug.includes("oil")) {
      return "BOTTLE_200ML";
    }
    return "BOTTLE_100ML";
  }

  return "BOTTLE_100ML";
}

const updatedProducts: Product[] = INITIAL_PRODUCTS.map(p => {
  const signatureColor = p.signatureColor || deriveSignatureColor(p.name, p.category);
  const bottleFormat = determineCorrectBottleFormat(p.category, p.slug);
  const labelImageUrl = `/labels/${p.slug}.png`;
  const compositeImageUrl = `/products/${p.slug}.webp`;

  return {
    ...p,
    signatureColor,
    bottleFormat,
    labelImageUrl,
    compositeImageUrl,
  };
});

console.log(`Updated ${updatedProducts.length} products with signature colors and image URLs.`);

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
  signatureColor?: string;
  labelImageUrl?: string;
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

export const INITIAL_PRODUCTS: Product[] = ${JSON.stringify(updatedProducts, null, 2)};

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
    signatureColor: row.signatureColor ?? undefined,
    labelImageUrl: row.labelImageUrl ?? undefined,
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
console.log("✓ Successfully saved updated products-store.ts with signature colors and image paths.");
