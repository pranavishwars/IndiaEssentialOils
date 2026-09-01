export interface ProductBenefit {
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
  category: "ESSENTIAL_OIL" | "SPICE_OIL" | "CARRIER_OIL" | "FLORAL_ABSOLUTE" | "FLORAL_WATER" | "OLEORESIN" | "ORGANIC_OIL" | "AYURVEDIC" | "CO2_OIL";
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
  CO2_OIL: "co2-oils",
};

export const SLUG_TO_CATEGORY: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_SLUGS).map(([k, v]) => [v, k])
);

export function getCategorySlug(category: string): string {
  return CATEGORY_SLUGS[category] || "essential-oils";
}

export const INITIAL_PRODUCTS: Product[] = [
  {
    "id": "prod-ambrette-seed",
    "slug": "ambrette-seed-oil",
    "name": "Ambrette Seed Oil",
    "botanicalName": "Abelmoschus moschatus",
    "category": "ESSENTIAL_OIL",
    "description": "Rich musk-like aromatic oil steam distilled from ambrette seeds, widely used in premium perfumery and fixative blends.",
    "shortSpec": "Steam Distilled · India · Musk Note",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Ambrette Seed Oil (Abelmoschus moschatus) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/ambrette-seed-oil.png",
    "compositeImageUrl": "/products/ambrette-seed-oil.webp"
  },
  {
    "id": "prod-amyris",
    "slug": "amyris-oil",
    "name": "Amyris Oil",
    "botanicalName": "Amyris balsamifera",
    "category": "ESSENTIAL_OIL",
    "description": "Creamy, woody essential oil steam distilled from amyris wood, an economical sandalwood alternative in perfumery.",
    "shortSpec": "Steam Distilled · Caribbean · Woody Fixative",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Amyris Oil (Amyris balsamifera) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7B4624",
    "labelImageUrl": "/labels/amyris-oil.png",
    "compositeImageUrl": "/products/amyris-oil.webp"
  },
  {
    "id": "prod-angelica-root",
    "slug": "angelica-root-oil",
    "name": "Angelica Root Oil",
    "botanicalName": "Angelica archangelica",
    "category": "ESSENTIAL_OIL",
    "description": "Complex, earthy-herbaceous oil distilled from angelica roots, prized in fine perfumery and herbal medicine.",
    "shortSpec": "Steam Distilled · European Origin · Complex Aroma",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 42,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Angelica Root Oil (Angelica archangelica) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/angelica-root-oil.png",
    "compositeImageUrl": "/products/angelica-root-oil.webp"
  },
  {
    "id": "prod-armoise",
    "slug": "armoise-oil",
    "name": "Armoise Oil",
    "botanicalName": "Artemisia vulgaris",
    "category": "ESSENTIAL_OIL",
    "description": "Herbaceous oil from mugwort leaves used in aromatherapy and as a starting material in flavour applications.",
    "shortSpec": "Steam Distilled · India · Herbaceous",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Armoise Oil (Artemisia vulgaris) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#3E4C26",
    "labelImageUrl": "/labels/armoise-oil.png",
    "compositeImageUrl": "/products/armoise-oil.webp"
  },
  {
    "id": "prod-basil",
    "slug": "basil-oil",
    "name": "Basil Oil",
    "botanicalName": "Ocimum basilicum",
    "category": "ESSENTIAL_OIL",
    "description": "Sweet, spicy-herbaceous essential oil from fresh basil leaves with high methyl chavicol and linalool content.",
    "shortSpec": "Steam Distilled · India · Sweet Basil",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 62,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Basil Oil (Ocimum basilicum) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#244E31",
    "labelImageUrl": "/labels/basil-oil.png",
    "compositeImageUrl": "/products/basil-oil.webp"
  },
  {
    "id": "prod-betel-leaf",
    "slug": "betel-leaf-oil",
    "name": "Betel Leaf Oil",
    "botanicalName": "Piper betle",
    "category": "ESSENTIAL_OIL",
    "description": "Pungent, phenolic oil from betel leaves used in oral care, flavourings, and traditional medicine.",
    "shortSpec": "Steam Distilled · India · Phenolic Profile",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 34,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Betel Leaf Oil (Piper betle) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/betel-leaf-oil.png",
    "compositeImageUrl": "/products/betel-leaf-oil.webp"
  },
  {
    "id": "prod-birch-tar",
    "slug": "birch-tar-oil",
    "name": "Birch Tar Oil",
    "botanicalName": "Betula pendula",
    "category": "ESSENTIAL_OIL",
    "description": "Smoky, tarry oil obtained from destructive distillation of birch bark. Used in leather scents and dermatological preparations.",
    "shortSpec": "Destructive Distillation · Eastern Europe · Smoky",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 28,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Birch Tar Oil (Betula pendula) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/birch-tar-oil.png",
    "compositeImageUrl": "/products/birch-tar-oil.webp"
  },
  {
    "id": "prod-bitter-orange",
    "slug": "bitter-orange-oil",
    "name": "Bitter Orange Oil",
    "botanicalName": "Citrus aurantium",
    "category": "ESSENTIAL_OIL",
    "description": "Cold-pressed peel oil with a rich, intense citrus character, preferred over sweet orange in high-end fragrance compositions.",
    "shortSpec": "Cold Pressed · Mediterranean · Bitter Citrus",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Bitter Orange Oil (Citrus aurantium) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#8C5008",
    "labelImageUrl": "/labels/bitter-orange-oil.png",
    "compositeImageUrl": "/products/bitter-orange-oil.webp"
  },
  {
    "id": "prod-black-seed",
    "slug": "black-seed-oil",
    "name": "Black Seed Oil",
    "botanicalName": "Nigella sativa",
    "category": "ESSENTIAL_OIL",
    "description": "Valued for its thymoquinone-rich profile and therapeutic reputation across Middle Eastern, South Asian, and Unani traditions.",
    "shortSpec": "Cold Pressed · India · Therapeutic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 70,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure steam distilled Black Seed Oil (Nigella sativa) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#2E2B27",
    "labelImageUrl": "/labels/black-seed-oil.png",
    "compositeImageUrl": "/products/black-seed-oil.webp"
  },
  {
    "id": "prod-bergamot-eo",
    "slug": "bergamot-oil",
    "name": "Bergamot Oil",
    "botanicalName": "Citrus bergamia",
    "category": "ESSENTIAL_OIL",
    "description": "Iconic Italian citrus essential oil with a bright, uplifting, floral-fruity scent — one of the most important perfumery materials.",
    "shortSpec": "Cold Pressed · Calabria, Italy Origin · Bergapten-Free",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 82,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "100% pure steam distilled Bergamot Oil (Citrus bergamia) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#8C5008",
    "labelImageUrl": "/labels/bergamot-oil.png",
    "compositeImageUrl": "/products/bergamot-oil.webp"
  },
  {
    "id": "prod-cade",
    "slug": "cade-oil",
    "name": "Cade Oil",
    "botanicalName": "Juniperus oxycedrus",
    "category": "ESSENTIAL_OIL",
    "description": "Smoky, creosolic oil distilled from cade juniper wood, historically used in dermatological preparations and leather perfumery.",
    "shortSpec": "Dry Distillation · Mediterranean · Tarry-Smoky",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 26,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Cade Oil (Juniperus oxycedrus) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/cade-oil.png",
    "compositeImageUrl": "/products/cade-oil.webp"
  },
  {
    "id": "prod-cajeput",
    "slug": "cajeput-oil",
    "name": "Cajeput Oil",
    "botanicalName": "Melaleuca cajuputi",
    "category": "ESSENTIAL_OIL",
    "description": "Camphorous, medicinal oil closely related to tea tree, commonly used in respiratory and analgesic liniment preparations.",
    "shortSpec": "Steam Distilled · Southeast Asia · Medicinal",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 44,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Cajeput Oil (Melaleuca cajuputi) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#175B50",
    "labelImageUrl": "/labels/cajeput-oil.png",
    "compositeImageUrl": "/products/cajeput-oil.webp"
  },
  {
    "id": "prod-camphor",
    "slug": "camphor-oil",
    "name": "Camphor Oil",
    "botanicalName": "Cinnamomum camphora",
    "category": "ESSENTIAL_OIL",
    "description": "Powerfully camphorous oil from camphor wood. Used in analgesic balms, moth repellents, and pharmaceutical preparations.",
    "shortSpec": "Steam Distilled · India/China · Camphor Dominant",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 56,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Camphor Oil (Cinnamomum camphora) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#1E544A",
    "labelImageUrl": "/labels/camphor-oil.png",
    "compositeImageUrl": "/products/camphor-oil.webp"
  },
  {
    "id": "prod-carrot-seed",
    "slug": "carrot-seed-oil",
    "name": "Carrot Seed Oil",
    "botanicalName": "Daucus carota",
    "category": "ESSENTIAL_OIL",
    "description": "Earthy, warm root oil valued in cosmetics for its carotol content and skin-rejuvenating and toning properties.",
    "shortSpec": "Steam Distilled · India/France · Skin Renewing",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Carrot Seed Oil (Daucus carota) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/carrot-seed-oil.png",
    "compositeImageUrl": "/products/carrot-seed-oil.webp"
  },
  {
    "id": "prod-cedarwood",
    "slug": "cedarwood-oil",
    "name": "Cedarwood Oil",
    "botanicalName": "Cedrus atlantica / Cedrus deodara",
    "category": "ESSENTIAL_OIL",
    "description": "Warm, woody fixative oil distilled from Himalayan or Atlas cedar wood. An essential base note in Oriental and woody fragrances.",
    "shortSpec": "Steam Distilled · Himalayas, India · Woody Base Note",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 75,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "100% pure steam distilled Cedarwood Oil (Cedrus atlantica / Cedrus deodara) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#3B4E32",
    "labelImageUrl": "/labels/cedarwood-oil.png",
    "compositeImageUrl": "/products/cedarwood-oil.webp"
  },
  {
    "id": "prod-chamomile-blue",
    "slug": "chamomile-oil-blue",
    "name": "Chamomile Oil (Blue)",
    "botanicalName": "Matricaria chamomilla",
    "category": "ESSENTIAL_OIL",
    "description": "Deep indigo-blue essential oil rich in chamazulene, revered for its potent anti-inflammatory and skin-calming properties.",
    "shortSpec": "Steam Distilled · Egypt/Germany · High Chamazulene",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "100% pure steam distilled Chamomile Oil (Blue) (Matricaria chamomilla) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#2B4B6F",
    "labelImageUrl": "/labels/chamomile-oil-blue.png",
    "compositeImageUrl": "/products/chamomile-oil-blue.webp"
  },
  {
    "id": "prod-chamomile-roman",
    "slug": "chamomile-oil-roman",
    "name": "Chamomile Oil (Roman)",
    "botanicalName": "Anthemis nobilis",
    "category": "ESSENTIAL_OIL",
    "description": "Sweet, apple-scented Roman chamomile oil with gentle, sedating therapeutic properties and wide use in luxury skincare.",
    "shortSpec": "Steam Distilled · France/UK · Sweet Floral",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Chamomile Oil (Roman) (Anthemis nobilis) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#2B4B6F",
    "labelImageUrl": "/labels/chamomile-oil-roman.png",
    "compositeImageUrl": "/products/chamomile-oil-roman.webp"
  },
  {
    "id": "prod-champaca-eo",
    "slug": "champaca-oil",
    "name": "Champaca Oil",
    "botanicalName": "Michelia champaca",
    "category": "ESSENTIAL_OIL",
    "description": "Intensely floral, jasmine-like champaca oil distilled from golden magnolia flowers, central to Indian perfumery and attar making.",
    "shortSpec": "Steam Distilled · India · Floral Absolute-Like",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Champaca Oil (Michelia champaca) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#543C62",
    "labelImageUrl": "/labels/champaca-oil.png",
    "compositeImageUrl": "/products/champaca-oil.webp"
  },
  {
    "id": "prod-chulmoogra",
    "slug": "chulmoogra-oil",
    "name": "Chulmoogra Oil",
    "botanicalName": "Hydnocarpus wightianus",
    "category": "ESSENTIAL_OIL",
    "description": "Traditional Ayurvedic oil from chaulmoogra seeds used in dermatological and anti-fungal preparations.",
    "shortSpec": "Cold Pressed · India · Traditional Medicinal",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 22,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure steam distilled Chulmoogra Oil (Hydnocarpus wightianus) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#324A2A",
    "labelImageUrl": "/labels/chulmoogra-oil.png",
    "compositeImageUrl": "/products/chulmoogra-oil.webp"
  },
  {
    "id": "prod-citriodora",
    "slug": "citriodora-oil",
    "name": "Citriodora Oil",
    "botanicalName": "Eucalyptus citriodora",
    "category": "ESSENTIAL_OIL",
    "description": "Lemon-scented eucalyptus oil high in citronellal, used as a natural insect repellent and in fragrance applications.",
    "shortSpec": "Steam Distilled · India/Australia · Citrus-Eucalyptus",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 50,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Citriodora Oil (Eucalyptus citriodora) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#2E5E35",
    "labelImageUrl": "/labels/citriodora-oil.png",
    "compositeImageUrl": "/products/citriodora-oil.webp"
  },
  {
    "id": "prod-citronella",
    "slug": "citronella-oil",
    "name": "Citronella Oil",
    "botanicalName": "Cymbopogon nardus",
    "category": "ESSENTIAL_OIL",
    "description": "Classic natural insect-repellent oil with a fresh, lemon-like scent widely used in outdoor candles, sprays, and personal care.",
    "shortSpec": "Steam Distilled · Sri Lanka/India · Insect Repellent",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 66,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Cymbopogon nardus cultivated in the renowned terroir of Assam & Brahmaputra valley. This botanical lot exhibits an exceptional volatile fraction highlighted by Citronellal (35%+), Geraniol (22%+), grown under Humid tropical alluvial floodplains with fertile organic silt. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#2E5E35",
    "labelImageUrl": "/labels/citronella-oil.png",
    "compositeImageUrl": "/products/citronella-oil.webp"
  },
  {
    "id": "prod-clary-sage",
    "slug": "clary-sage-oil",
    "name": "Clary Sage Oil",
    "botanicalName": "Salvia sclarea",
    "category": "ESSENTIAL_OIL",
    "description": "Nutty, sweet-herbaceous oil with natural sclareol and linalyl acetate. Highly valued in female wellness formulations and fixatives.",
    "shortSpec": "Steam Distilled · France/India · High Linalyl Acetate",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 67,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "100% pure steam distilled Clary Sage Oil (Salvia sclarea) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#244E31",
    "labelImageUrl": "/labels/clary-sage-oil.png",
    "compositeImageUrl": "/products/clary-sage-oil.webp"
  },
  {
    "id": "prod-coffee",
    "slug": "coffee-oil",
    "name": "Coffee Oil",
    "botanicalName": "Coffea arabica",
    "category": "ESSENTIAL_OIL",
    "description": "Rich, roasted CO2-extracted or steam-distilled coffee oil used in niche perfumery and anti-cellulite cosmetic formulas.",
    "shortSpec": "CO2 Extracted · India · Rich Roasted Aroma",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 40,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Coffee Oil (Coffea arabica) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/coffee-oil.png",
    "compositeImageUrl": "/products/coffee-oil.webp"
  },
  {
    "id": "prod-costus-root",
    "slug": "costus-root-oil",
    "name": "Costus Root Oil",
    "botanicalName": "Saussurea costus",
    "category": "ESSENTIAL_OIL",
    "description": "Rare, animal-like, deeply earthy fixative oil from costus roots. Heavily prized in Oriental and Indian attars.",
    "shortSpec": "Steam Distilled · India · Fixative Base Note",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Costus Root Oil (Saussurea costus) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/costus-root-oil.png",
    "compositeImageUrl": "/products/costus-root-oil.webp"
  },
  {
    "id": "prod-croton",
    "slug": "croton-oil",
    "name": "Croton Oil",
    "botanicalName": "Croton tiglium",
    "category": "ESSENTIAL_OIL",
    "description": "Potent fixed oil used in pharmaceutical and research applications. Requires careful handling due to high phorbol ester content.",
    "shortSpec": "Cold Pressed · India · Pharmaceutical Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 18,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure steam distilled Croton Oil (Croton tiglium) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/croton-oil.png",
    "compositeImageUrl": "/products/croton-oil.webp"
  },
  {
    "id": "prod-custard-apple",
    "slug": "custard-apple-oil",
    "name": "Custard Apple Oil",
    "botanicalName": "Annona squamosa",
    "category": "ESSENTIAL_OIL",
    "description": "Traditional Indian botanical oil from custard apple seeds, used in hair care and Ayurvedic pesticidal preparations.",
    "shortSpec": "Cold Pressed · India · Hair Care",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 20,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure steam distilled Custard Apple Oil (Annona squamosa) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/custard-apple-oil.png",
    "compositeImageUrl": "/products/custard-apple-oil.webp"
  },
  {
    "id": "prod-cypress",
    "slug": "cypress-oil",
    "name": "Cypress Oil",
    "botanicalName": "Cupressus sempervirens",
    "category": "ESSENTIAL_OIL",
    "description": "Fresh, woody-herbaceous oil with natural terpinol and cedrol content, used in men's fragrances and lymphatic massage blends.",
    "shortSpec": "Steam Distilled · Mediterranean · Fresh-Woody",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Cypress Oil (Cupressus sempervirens) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#3B4E32",
    "labelImageUrl": "/labels/cypress-oil.png",
    "compositeImageUrl": "/products/cypress-oil.webp"
  },
  {
    "id": "prod-cypriol",
    "slug": "cypriol-oil",
    "name": "Cypriol Oil (Nagarmotha Oil)",
    "botanicalName": "Cyperus scariosus",
    "category": "ESSENTIAL_OIL",
    "description": "Earthy, woody oud-like oil from cypriol tubers, popular in Middle Eastern perfumery and attar compositions.",
    "shortSpec": "Steam Distilled · India · Earthy-Woody-Oud",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Cypriol Oil (Nagarmotha Oil) (Cyperus scariosus) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#4E3624",
    "labelImageUrl": "/labels/cypriol-oil.png",
    "compositeImageUrl": "/products/cypriol-oil.webp"
  },
  {
    "id": "prod-davana",
    "slug": "davana-oil",
    "name": "Davana Oil",
    "botanicalName": "Artemisia pallens",
    "category": "ESSENTIAL_OIL",
    "description": "Unique, sweet-fruity Indian essential oil from Davana plant. Smells differently on each person due to interaction with skin chemistry.",
    "shortSpec": "Steam Distilled · Karnataka, India · Unique Fruity-Sweet",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Davana Oil (Artemisia pallens) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#3E4C26",
    "labelImageUrl": "/labels/davana-oil.png",
    "compositeImageUrl": "/products/davana-oil.webp"
  },
  {
    "id": "prod-elemi",
    "slug": "elemi-oil",
    "name": "Elemi Oil",
    "botanicalName": "Canarium luzonicum",
    "category": "ESSENTIAL_OIL",
    "description": "Fresh, spicy-citrus resinous oil from elemi gum, used in skin care for cell regeneration and as a base note in fine perfumery.",
    "shortSpec": "Steam Distilled · Philippines · Resinous-Citrus",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 36,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Elemi Oil (Canarium luzonicum) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7C4E25",
    "labelImageUrl": "/labels/elemi-oil.png",
    "compositeImageUrl": "/products/elemi-oil.webp"
  },
  {
    "id": "prod-eucalyptus",
    "slug": "eucalyptus-oil",
    "name": "Eucalyptus Oil",
    "botanicalName": "Eucalyptus globulus",
    "category": "ESSENTIAL_OIL",
    "description": "The world's leading medicinal essential oil, with 80–85% cineole (eucalyptol), used in pharmaceutical, dental, and cleaning products.",
    "shortSpec": "Steam Distilled · India/Australia · 80% Cineole Min",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 90,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Eucalyptus globulus cultivated in the renowned terroir of Nilgiri Blue Mountains, South India. This botanical lot exhibits an exceptional volatile fraction highlighted by Eucalyptol / 1,8-Cineole (82%+), Alpha-Pinene, grown under High-altitude eucalyptus plantations harvested since 1843. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#175B50",
    "labelImageUrl": "/labels/eucalyptus-oil.png",
    "compositeImageUrl": "/products/eucalyptus-oil.webp"
  },
  {
    "id": "prod-frankincense",
    "slug": "frankincense-oil",
    "name": "Frankincense Oil",
    "botanicalName": "Boswellia serrata",
    "category": "ESSENTIAL_OIL",
    "description": "Sacred steam-distilled Indian olibanum (frankincense) with alpha-pinene and incensole. Used in luxury skin care, meditation, and high-end perfumery.",
    "shortSpec": "Steam Distilled · Rajasthan, India · Sacred Resin",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 87,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Boswellia serrata cultivated in the renowned terroir of Shekhawati / Aravalli Hills, Rajasthan. This botanical lot exhibits an exceptional volatile fraction highlighted by Alpha-Pinene (52%+), Boswellic derivatives, grown under Arid rocky calcareous soils yielding high-resin oleogum. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7C4E25",
    "labelImageUrl": "/labels/frankincense-oil.png",
    "compositeImageUrl": "/products/frankincense-oil.webp"
  },
  {
    "id": "prod-gandhapura",
    "slug": "gandhapura-oil",
    "name": "Gandhapura Oil",
    "botanicalName": "Gaultheria fragrantissima",
    "category": "ESSENTIAL_OIL",
    "description": "Indian wintergreen oil rich in natural methyl salicylate, widely used in pain relief balms and topical analgesic preparations.",
    "shortSpec": "Steam Distilled · Himalayas · High Methyl Salicylate",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 52,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Gandhapura Oil (Gaultheria fragrantissima) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#1E544A",
    "labelImageUrl": "/labels/gandhapura-oil.png",
    "compositeImageUrl": "/products/gandhapura-oil.webp"
  },
  {
    "id": "prod-geranium",
    "slug": "geranium-oil",
    "name": "Geranium Oil",
    "botanicalName": "Pelargonium graveolens",
    "category": "ESSENTIAL_OIL",
    "description": "Rose-like, balancing geranium oil from India and Egypt. A top perfumery material and skin care active with high citronellol content.",
    "shortSpec": "Steam Distilled · India · High Citronellol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 83,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "100% pure steam distilled Geranium Oil (Pelargonium graveolens) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7E2D48",
    "labelImageUrl": "/labels/geranium-oil.png",
    "compositeImageUrl": "/products/geranium-oil.webp"
  },
  {
    "id": "prod-ginger-grass",
    "slug": "ginger-grass-oil",
    "name": "Ginger Grass Oil",
    "botanicalName": "Cymbopogon martinii var. sofia",
    "category": "ESSENTIAL_OIL",
    "description": "Earthy, fresh-grassy oil distilled from ginger grass with high perillyl alcohol. Distinct from palmarosa — frequently used in soap making.",
    "shortSpec": "Steam Distilled · India · Earthy-Grassy",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Cymbopogon martinii var. sofia cultivated in the renowned terroir of Cochin & Wayanad, Kerala. This botanical lot exhibits an exceptional volatile fraction highlighted by Zingiberene (35%+), Curcumene, Gingerols, grown under Organic mountain loam renowned for intense aromatic pungency. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7E4314",
    "labelImageUrl": "/labels/ginger-grass-oil.png",
    "compositeImageUrl": "/products/ginger-grass-oil.webp"
  },
  {
    "id": "prod-grapefruit",
    "slug": "grapefruit-oil",
    "name": "Grapefruit Oil",
    "botanicalName": "Citrus paradisi",
    "category": "ESSENTIAL_OIL",
    "description": "Bright, uplifting cold-pressed grapefruit peel oil with high limonene. Used in slimming products, detox blends, and fresh fragrances.",
    "shortSpec": "Cold Pressed · USA/Israel · High Limonene",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 70,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Grapefruit Oil (Citrus paradisi) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#8C5008",
    "labelImageUrl": "/labels/grapefruit-oil.png",
    "compositeImageUrl": "/products/grapefruit-oil.webp"
  },
  {
    "id": "prod-gaultheria",
    "slug": "gaultheria-fragrantissima-oil",
    "name": "Gaultheria Fragrantissima Oil",
    "botanicalName": "Gaultheria fragrantissima",
    "category": "ESSENTIAL_OIL",
    "description": "Natural Indian wintergreen — methyl salicylate dominant oil used in analgesic and anti-inflammatory formulations.",
    "shortSpec": "Steam Distilled · Himalayas · Wintergreen",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 44,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Gaultheria Fragrantissima Oil (Gaultheria fragrantissima) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#1E544A",
    "labelImageUrl": "/labels/gaultheria-fragrantissima-oil.png",
    "compositeImageUrl": "/products/gaultheria-fragrantissima-oil.webp"
  },
  {
    "id": "prod-hedychium",
    "slug": "hedychium-oil",
    "name": "Hedychium Oil",
    "botanicalName": "Hedychium spicatum",
    "category": "ESSENTIAL_OIL",
    "description": "Rare Himalayan ginger lily oil with a unique floral-spicy aroma, used in traditional Ayurvedic applications and Indian attars.",
    "shortSpec": "Steam Distilled · Himalayas · Floral-Spicy",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Hedychium Oil (Hedychium spicatum) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/hedychium-oil.png",
    "compositeImageUrl": "/products/hedychium-oil.webp"
  },
  {
    "id": "prod-helichrysum",
    "slug": "helichrysum-oil",
    "name": "Helichrysum Oil (Immortelle)",
    "botanicalName": "Helichrysum italicum",
    "category": "ESSENTIAL_OIL",
    "description": "Prestigious Italian everlasting flower oil with strong anti-inflammatory and skin-regenerating properties. A key activa in anti-ageing cosmetics.",
    "shortSpec": "Steam Distilled · Corsica/Balkans · Skin Regenerating",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 78,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "100% pure steam distilled Helichrysum Oil (Immortelle) (Helichrysum italicum) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/helichrysum-oil.png",
    "compositeImageUrl": "/products/helichrysum-oil.webp"
  },
  {
    "id": "prod-henna",
    "slug": "henna-oil",
    "name": "Henna Oil",
    "botanicalName": "Lawsonia inermis",
    "category": "ESSENTIAL_OIL",
    "description": "Traditional Indian oil from henna flowers, used in hair oils, body care, and as a floral accent in Indian attars.",
    "shortSpec": "Steam Distilled · India · Floral-Herbaceous",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Henna Oil (Lawsonia inermis) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/henna-oil.png",
    "compositeImageUrl": "/products/henna-oil.webp"
  },
  {
    "id": "prod-holy-basil",
    "slug": "holy-basil-oil",
    "name": "Holy Basil Oil (Ocimum Sanctum Oil)",
    "botanicalName": "Ocimum sanctum",
    "category": "ESSENTIAL_OIL",
    "description": "Sacred tulsi essential oil with high eugenol content, used in Ayurvedic medicine and natural health products globally.",
    "shortSpec": "Steam Distilled · India · High Eugenol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Holy Basil Oil (Ocimum Sanctum Oil) (Ocimum sanctum) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#244E31",
    "labelImageUrl": "/labels/holy-basil-oil.png",
    "compositeImageUrl": "/products/holy-basil-oil.webp"
  },
  {
    "id": "prod-juniper-berry",
    "slug": "juniper-berry-oil",
    "name": "Juniper Berry Oil",
    "botanicalName": "Juniperus communis",
    "category": "ESSENTIAL_OIL",
    "description": "Fresh, coniferous juniper berry oil with high alpha-pinene content. Used in detox blends, men's fragrances, and gin flavoring.",
    "shortSpec": "Steam Distilled · Europe/India · Alpine-Fresh",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Juniper Berry Oil (Juniperus communis) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#3B4E32",
    "labelImageUrl": "/labels/juniper-berry-oil.png",
    "compositeImageUrl": "/products/juniper-berry-oil.webp"
  },
  {
    "id": "prod-kewra",
    "slug": "kewra-oil",
    "name": "Kewra Oil",
    "botanicalName": "Pandanus odoratissimus",
    "category": "ESSENTIAL_OIL",
    "description": "Exotic floral oil from screwpine flowers. Intensely sweet, rose-like with tropical character, central to Indian and Middle Eastern perfumery.",
    "shortSpec": "Steam Distilled · India · Tropical Floral",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 45,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Kewra Oil (Pandanus odoratissimus) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#543C62",
    "labelImageUrl": "/labels/kewra-oil.png",
    "compositeImageUrl": "/products/kewra-oil.webp"
  },
  {
    "id": "prod-lavender",
    "slug": "lavender-oil",
    "name": "Lavender Oil",
    "botanicalName": "Lavandula angustifolia",
    "category": "ESSENTIAL_OIL",
    "description": "100% pure steam-distilled Lavender Oil known for its calming, therapeutic aroma and soothing skincare properties. Certified GC-MS tested.",
    "shortSpec": "Steam Distilled · Kashmir, India · 100% Pure",
    "overview": "Our Kashmiri Lavender Essential Oil is harvested from high-altitude slopes in the Kashmir Valley, characterized by an exceptionally sweet, floral-herbaceous aroma with high natural concentrations of linalool (38%+) and linalyl acetate (34%+). Revered globally by cosmetic chemists and luxury perfumers.",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 96,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#593C72",
    "labelImageUrl": "/labels/lavender-oil.png",
    "compositeImageUrl": "/products/lavender-oil.webp"
  },
  {
    "id": "prod-lemon-balm-eo",
    "slug": "lemon-balm-oil",
    "name": "Lemon Balm Oil",
    "botanicalName": "Melissa officinalis",
    "category": "ESSENTIAL_OIL",
    "description": "One of the most prized and expensive essential oils, rich in citral and citronellal, used in natural pharmacy and high-end cosmetics.",
    "shortSpec": "Steam Distilled · Europe · High Citral",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Lemon Balm Oil (Melissa officinalis) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#2E5E35",
    "labelImageUrl": "/labels/lemon-balm-oil.png",
    "compositeImageUrl": "/products/lemon-balm-oil.webp"
  },
  {
    "id": "prod-lemon",
    "slug": "lemon-oil",
    "name": "Lemon Oil",
    "botanicalName": "Citrus limon",
    "category": "ESSENTIAL_OIL",
    "description": "Bright, zesty cold-pressed lemon peel oil with high limonene. Versatile in fragrances, flavor systems, and cleaning product formulations.",
    "shortSpec": "Cold Pressed · India/Italy · High Limonene",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 85,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "100% pure steam distilled Lemon Oil (Citrus limon) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#2E5E35",
    "labelImageUrl": "/labels/lemon-oil.png",
    "compositeImageUrl": "/products/lemon-oil.webp"
  },
  {
    "id": "prod-lemon-verbena",
    "slug": "lemon-verbena-oil",
    "name": "Lemon Verbena Oil",
    "botanicalName": "Aloysia citriodora",
    "category": "ESSENTIAL_OIL",
    "description": "Delicate, intensely lemony oil from verbena leaves. Used in high-end fragrances, tea flavouring, and luxury personal care.",
    "shortSpec": "Steam Distilled · France/Spain · Delicate Lemon",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Lemon Verbena Oil (Aloysia citriodora) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#2E5E35",
    "labelImageUrl": "/labels/lemon-verbena-oil.png",
    "compositeImageUrl": "/products/lemon-verbena-oil.webp"
  },
  {
    "id": "prod-lemongrass",
    "slug": "lemongrass-oil",
    "name": "Lemongrass Oil",
    "botanicalName": "Cymbopogon flexuosus",
    "category": "ESSENTIAL_OIL",
    "description": "India's most exported essential oil — high-citral lemongrass with a bold, grassy-lemon character used in soaps, cosmetics, and flavoring.",
    "shortSpec": "Steam Distilled · Kerala, India · High Citral",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 92,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Cymbopogon flexuosus cultivated in the renowned terroir of Cochin / Wayanad, Kerala. This botanical lot exhibits an exceptional volatile fraction highlighted by Citral (78%+), Geraniol, Myrcene, grown under Malabar tropical coastal terroir receiving dual monsoons. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#2E5E35",
    "labelImageUrl": "/labels/lemongrass-oil.png",
    "compositeImageUrl": "/products/lemongrass-oil.webp"
  },
  {
    "id": "prod-lily",
    "slug": "lily-oil",
    "name": "Lily Oil",
    "botanicalName": "Lilium candidum",
    "category": "ESSENTIAL_OIL",
    "description": "Delicate floral absolute-style oil from white lily blooms used in luxury perfumery and high-end skincare formulations.",
    "shortSpec": "Solvent Extracted · India · Delicate Floral",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Lily Oil (Lilium candidum) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/lily-oil.png",
    "compositeImageUrl": "/products/lily-oil.webp"
  },
  {
    "id": "prod-melissa",
    "slug": "melissa-oil",
    "name": "Melissa Oil",
    "botanicalName": "Melissa officinalis",
    "category": "ESSENTIAL_OIL",
    "description": "True steam-distilled melissa oil (lemon balm). Very rare and expensive due to extremely low yield, with calming and antiviral properties.",
    "shortSpec": "Steam Distilled · Europe · Ultra-Rare",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 52,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Melissa Oil (Melissa officinalis) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/melissa-oil.png",
    "compositeImageUrl": "/products/melissa-oil.webp"
  },
  {
    "id": "prod-mentha-citrata",
    "slug": "mentha-citrata-oil",
    "name": "Mentha Citrata Oil",
    "botanicalName": "Mentha aquatica var. citrata",
    "category": "ESSENTIAL_OIL",
    "description": "Bergamot mint oil with a distinctive citrus-mint blend, used in personal care, perfumery, and flavour applications.",
    "shortSpec": "Steam Distilled · India · Citrus-Mint",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 40,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Mentha Citrata Oil (Mentha aquatica var. citrata) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#1B5E3C",
    "labelImageUrl": "/labels/mentha-citrata-oil.png",
    "compositeImageUrl": "/products/mentha-citrata-oil.webp"
  },
  {
    "id": "prod-mint",
    "slug": "mint-oil",
    "name": "Mint Oil",
    "botanicalName": "Mentha arvensis",
    "category": "ESSENTIAL_OIL",
    "description": "Indian cornmint oil — the world's primary natural menthol source. Used in oral care, pharmaceuticals, and confectionery globally.",
    "shortSpec": "Steam Distilled · Uttar Pradesh · High Natural Menthol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 88,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "100% pure steam distilled Mint Oil (Mentha arvensis) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/mint-oil.png",
    "compositeImageUrl": "/products/mint-oil.webp"
  },
  {
    "id": "prod-myrrh",
    "slug": "myrrh-oil",
    "name": "Myrrh Oil",
    "botanicalName": "Commiphora myrrha",
    "category": "ESSENTIAL_OIL",
    "description": "Ancient sacred resin oil from Somalia and Ethiopia, used in incense, luxury skincare, oral care, and spiritual aromatherapy.",
    "shortSpec": "Steam Distilled · East Africa · Sacred Resin",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Myrrh Oil (Commiphora myrrha) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7C4E25",
    "labelImageUrl": "/labels/myrrh-oil.png",
    "compositeImageUrl": "/products/myrrh-oil.webp"
  },
  {
    "id": "prod-myrtle",
    "slug": "myrtle-oil",
    "name": "Myrtle Oil",
    "botanicalName": "Myrtus communis",
    "category": "ESSENTIAL_OIL",
    "description": "Fresh, camphor-like Mediterranean myrtle oil used in respiratory preparations, skincare for oily skin, and light perfumery.",
    "shortSpec": "Steam Distilled · Morocco/Iran · Fresh-Camphor",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 42,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Myrtle Oil (Myrtus communis) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/myrtle-oil.png",
    "compositeImageUrl": "/products/myrtle-oil.webp"
  },
  {
    "id": "prod-neroli",
    "slug": "neroli-oil",
    "name": "Neroli Oil",
    "botanicalName": "Citrus aurantium",
    "category": "ESSENTIAL_OIL",
    "description": "Exquisite, precious orange blossom essential oil — the most expensive citrus oil in perfumery. Calming and deeply floral.",
    "shortSpec": "Steam Distilled · Egypt/Tunisia · Luxury Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 80,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "100% pure steam distilled Neroli Oil (Citrus aurantium) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7A5018",
    "labelImageUrl": "/labels/neroli-oil.png",
    "compositeImageUrl": "/products/neroli-oil.webp"
  },
  {
    "id": "prod-niaouli",
    "slug": "niaouli-oil",
    "name": "Niaouli Oil",
    "botanicalName": "Melaleuca quinquenervia",
    "category": "ESSENTIAL_OIL",
    "description": "Therapeutic cineole-rich oil from New Caledonia, used in pharmaceutical respiratory preparations and wound-healing applications.",
    "shortSpec": "Steam Distilled · Oceania · Medicinal Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Niaouli Oil (Melaleuca quinquenervia) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#175B50",
    "labelImageUrl": "/labels/niaouli-oil.png",
    "compositeImageUrl": "/products/niaouli-oil.webp"
  },
  {
    "id": "prod-nutmeg-eo",
    "slug": "nutmeg-oil",
    "name": "Nutmeg Oil",
    "botanicalName": "Myristica fragrans",
    "category": "ESSENTIAL_OIL",
    "description": "Warm, spicy-woody nutmeg essential oil used in flavour systems, traditional medicine, and as a middle note in Oriental perfumery.",
    "shortSpec": "Steam Distilled · Kerala, India · Spicy-Woody",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Nutmeg Oil (Myristica fragrans) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#63261C",
    "labelImageUrl": "/labels/nutmeg-oil.png",
    "compositeImageUrl": "/products/nutmeg-oil.webp"
  },
  {
    "id": "prod-palmarosa",
    "slug": "palmarosa-oil",
    "name": "Palmarosa Oil",
    "botanicalName": "Cymbopogon martinii",
    "category": "ESSENTIAL_OIL",
    "description": "High-geraniol palmarosa oil from Indian grass species — the most geraniol-rich natural material, extensively used as a rose extender.",
    "shortSpec": "Steam Distilled · India · 85%+ Geraniol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 70,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Cymbopogon martinii cultivated in the renowned terroir of Satpura Range, Madhya Pradesh. This botanical lot exhibits an exceptional volatile fraction highlighted by Geraniol (85%+), Geranyl Acetate, grown under Wild grassland plateaus harvested before midday peak heat. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7E2D48",
    "labelImageUrl": "/labels/palmarosa-oil.png",
    "compositeImageUrl": "/products/palmarosa-oil.webp"
  },
  {
    "id": "prod-patchouli",
    "slug": "patchouli-oil",
    "name": "Patchouli Oil",
    "botanicalName": "Pogostemon cablin",
    "category": "ESSENTIAL_OIL",
    "description": "Deep, earthy, sweet-musky patchouli from aged Indian leaves. An irreplaceable fixative and base note in modern perfumery.",
    "shortSpec": "Steam Distilled · India/Indonesia · Aged Dark Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 86,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Pogostemon cablin cultivated in the renowned terroir of Coastal Karnataka & Western Ghats. This botanical lot exhibits an exceptional volatile fraction highlighted by Patchoulol (32%+), Alpha-Bulnesene, grown under Shaded tropical understory with deep humus forest floor. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#4E3624",
    "labelImageUrl": "/labels/patchouli-oil.png",
    "compositeImageUrl": "/products/patchouli-oil.webp"
  },
  {
    "id": "prod-peppermint",
    "slug": "peppermint-oil",
    "name": "Peppermint Oil",
    "botanicalName": "Mentha piperita",
    "category": "ESSENTIAL_OIL",
    "description": "High-menthol steam distilled peppermint oil offering a crisp, invigorating scent and cooling effect for pharmaceuticals, aromatherapy, and cosmetics.",
    "shortSpec": "Steam Distilled · Uttar Pradesh · High Menthol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 93,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Mentha piperita cultivated in the renowned terroir of Uttar Pradesh Terai alluvial plains. This botanical lot exhibits an exceptional volatile fraction highlighted by Menthol (45%+), Menthone (20%+), grown under Rich Gangetic loam with high summer solar radiation. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#1B5E3C",
    "labelImageUrl": "/labels/peppermint-oil.png",
    "compositeImageUrl": "/products/peppermint-oil.webp"
  },
  {
    "id": "prod-peru-balsam",
    "slug": "peru-balsam-oil",
    "name": "Peru Balsam Oil",
    "botanicalName": "Myroxylon balsamum",
    "category": "ESSENTIAL_OIL",
    "description": "Sweet, vanilla-like balsamic resin oil from El Salvador used as a fixative in perfumery and in pharmaceutical ointments.",
    "shortSpec": "Steam Distilled · El Salvador · Balsamic Fixative",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 32,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Peru Balsam Oil (Myroxylon balsamum) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/peru-balsam-oil.png",
    "compositeImageUrl": "/products/peru-balsam-oil.webp"
  },
  {
    "id": "prod-petitgrain",
    "slug": "petitgrain-oil",
    "name": "Petitgrain Oil",
    "botanicalName": "Citrus aurantium (leaf)",
    "category": "ESSENTIAL_OIL",
    "description": "Fresh, woody-green oil from bitter orange leaves and twigs. A key ingredient in men's fragrances and eau de colognes.",
    "shortSpec": "Steam Distilled · Paraguay/India · Woody-Green",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 62,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Petitgrain Oil (Citrus aurantium (leaf)) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/petitgrain-oil.png",
    "compositeImageUrl": "/products/petitgrain-oil.webp"
  },
  {
    "id": "prod-pimento-berry",
    "slug": "pimento-berry-oil",
    "name": "Pimento Berry Oil",
    "botanicalName": "Pimenta dioica",
    "category": "ESSENTIAL_OIL",
    "description": "Allspice oil — spicy, clove-like with warm cinnamon undertones. Used in flavour, fragrance, and as a topical warming agent.",
    "shortSpec": "Steam Distilled · Jamaica/India · Spicy-Warm",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 44,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Pimento Berry Oil (Pimenta dioica) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/pimento-berry-oil.png",
    "compositeImageUrl": "/products/pimento-berry-oil.webp"
  },
  {
    "id": "prod-pine",
    "slug": "pine-oil",
    "name": "Pine Oil",
    "botanicalName": "Pinus sylvestris",
    "category": "ESSENTIAL_OIL",
    "description": "Fresh, clean coniferous pine oil with high alpha-pinene. Used in household cleaners, industrial disinfectants, and woodland fragrances.",
    "shortSpec": "Steam Distilled · Europe/India · High Alpha-Pinene",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 56,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Pine Oil (Pinus sylvestris) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#3B4E32",
    "labelImageUrl": "/labels/pine-oil.png",
    "compositeImageUrl": "/products/pine-oil.webp"
  },
  {
    "id": "prod-psoralea",
    "slug": "psoralea-corylifolia-oil",
    "name": "Psoralea Corylifolia Oil",
    "botanicalName": "Psoralea corylifolia",
    "category": "ESSENTIAL_OIL",
    "description": "Bakuchi seed oil used in Ayurvedic medicine and increasingly in natural cosmetics for its bakuchiol content as a retinol alternative.",
    "shortSpec": "Cold Pressed · India · Bakuchiol Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 42,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure steam distilled Psoralea Corylifolia Oil (Psoralea corylifolia) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/psoralea-corylifolia-oil.png",
    "compositeImageUrl": "/products/psoralea-corylifolia-oil.webp"
  },
  {
    "id": "prod-rose-damascena",
    "slug": "rose-damascena-oil",
    "name": "Rose Oil (Damascena)",
    "botanicalName": "Rosa damascena",
    "category": "ESSENTIAL_OIL",
    "description": "Precious Bulgarian/Indian rose otto — the world's most prized floral oil. Extraordinary complexity with geraniol, citronellol, and rose oxide.",
    "shortSpec": "Steam Distilled · Bulgaria/India · Rose Otto",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 96,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Rosa damascena cultivated in the renowned terroir of Pushkar, Rajasthan & Aligarh, UP. This botanical lot exhibits an exceptional volatile fraction highlighted by Citronellol (38%), Geraniol (20%), Rose Oxide, grown under Chaitri Rose blooming cycle harvested before sunrise. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7E2D48",
    "labelImageUrl": "/labels/rose-damascena-oil.png",
    "compositeImageUrl": "/products/rose-damascena-oil.webp"
  },
  {
    "id": "prod-rosemary",
    "slug": "rosemary-oil",
    "name": "Rosemary Oil",
    "botanicalName": "Rosmarinus officinalis",
    "category": "ESSENTIAL_OIL",
    "description": "Invigorating camphor-cineole rosemary oil from Spain and India. Used in hair care, muscle blends, and memory-enhancement aromatherapy.",
    "shortSpec": "Steam Distilled · India/Spain · Cineole Chemotype",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 84,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Rosmarinus officinalis cultivated in the renowned terroir of Nilgiri Hills, Tamil Nadu. This botanical lot exhibits an exceptional volatile fraction highlighted by 1,8-Cineole (45%+), Alpha-Pinene, Camphor, grown under Cool montane elevation with continuous misty cloud cover. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7E2D48",
    "labelImageUrl": "/labels/rosemary-oil.png",
    "compositeImageUrl": "/products/rosemary-oil.webp"
  },
  {
    "id": "prod-rosewood",
    "slug": "rosewood-oil",
    "name": "Rosewood Oil",
    "botanicalName": "Aniba rosaeodora",
    "category": "ESSENTIAL_OIL",
    "description": "Soft, floral-woody oil from South American rosewood (sustainably sourced), high in linalool and used in luxury skincare.",
    "shortSpec": "Steam Distilled · Brazil · Sustainable Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 44,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Aniba rosaeodora cultivated in the renowned terroir of Pushkar, Rajasthan & Aligarh, UP. This botanical lot exhibits an exceptional volatile fraction highlighted by Citronellol (38%), Geraniol (20%), Rose Oxide, grown under Chaitri Rose blooming cycle harvested before sunrise. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7E2D48",
    "labelImageUrl": "/labels/rosewood-oil.png",
    "compositeImageUrl": "/products/rosewood-oil.webp"
  },
  {
    "id": "prod-spearmint",
    "slug": "spearmint-oil",
    "name": "Spearmint Oil",
    "botanicalName": "Mentha spicata",
    "category": "ESSENTIAL_OIL",
    "description": "Sweeter, milder mint oil compared to peppermint, dominated by carvone rather than menthol. Used in flavour, oral care, and cosmetics.",
    "shortSpec": "Steam Distilled · India · High Carvone",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 65,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Spearmint Oil (Mentha spicata) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#1B5E3C",
    "labelImageUrl": "/labels/spearmint-oil.png",
    "compositeImageUrl": "/products/spearmint-oil.webp"
  },
  {
    "id": "prod-spikenard",
    "slug": "spikenard-oil",
    "name": "Spikenard Oil (Jatamansi Oil)",
    "botanicalName": "Nardostachys jatamansi",
    "category": "ESSENTIAL_OIL",
    "description": "Ancient Himalayan root oil mentioned in the Bible and Vedas. Earthy, animalic, and profoundly calming — prized in spiritual and luxury perfumery.",
    "shortSpec": "Steam Distilled · Himalayas · Sacred Ancient",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Spikenard Oil (Jatamansi Oil) (Nardostachys jatamansi) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/spikenard-oil.png",
    "compositeImageUrl": "/products/spikenard-oil.webp"
  },
  {
    "id": "prod-st-johns-wort",
    "slug": "st-johns-wort-oil",
    "name": "St. John's Wort Oil",
    "botanicalName": "Hypericum perforatum",
    "category": "ESSENTIAL_OIL",
    "description": "Hypericin-rich macerated oil used in topical formulations for nerve pain, wound healing, and light sensitivity applications.",
    "shortSpec": "Macerated · Europe · Hypericin Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 45,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled St. John's Wort Oil (Hypericum perforatum) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/st-johns-wort-oil.png",
    "compositeImageUrl": "/products/st-johns-wort-oil.webp"
  },
  {
    "id": "prod-sugandh-mantri",
    "slug": "sugandh-mantri-oil",
    "name": "Sugandh Mantri Oil",
    "botanicalName": "Homalomena aromatica",
    "category": "ESSENTIAL_OIL",
    "description": "Rare northeast Indian aromatic oil with anise-like aroma, used in traditional medicine and high-value attar compositions.",
    "shortSpec": "Steam Distilled · Northeast India · Anisic-Spicy",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 22,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Sugandh Mantri Oil (Homalomena aromatica) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/sugandh-mantri-oil.png",
    "compositeImageUrl": "/products/sugandh-mantri-oil.webp"
  },
  {
    "id": "prod-sweet-orange",
    "slug": "sweet-orange-oil",
    "name": "Sweet Orange Oil",
    "botanicalName": "Citrus sinensis",
    "category": "ESSENTIAL_OIL",
    "description": "Bright, cheerful cold-pressed orange peel oil — the world's most widely used fragrance material. High limonene content with a happy citrus burst.",
    "shortSpec": "Cold Pressed · India/Brazil · High Limonene",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 90,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "100% pure steam distilled Sweet Orange Oil (Citrus sinensis) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#8C5008",
    "labelImageUrl": "/labels/sweet-orange-oil.png",
    "compositeImageUrl": "/products/sweet-orange-oil.webp"
  },
  {
    "id": "prod-tagetes",
    "slug": "tagetes-oil",
    "name": "Tagetes Oil",
    "botanicalName": "Tagetes minuta",
    "category": "ESSENTIAL_OIL",
    "description": "Pungent, tropical marigold oil from India with high tagetone content, used as a natural insecticide and in flavour/fragrance.",
    "shortSpec": "Steam Distilled · India · High Tagetone",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Tagetes Oil (Tagetes minuta) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/tagetes-oil.png",
    "compositeImageUrl": "/products/tagetes-oil.webp"
  },
  {
    "id": "prod-tangerine",
    "slug": "tangerine-mandarine-oil",
    "name": "Tangerine (Mandarine) Oil",
    "botanicalName": "Citrus reticulata",
    "category": "ESSENTIAL_OIL",
    "description": "Sweet, mild citrus oil from mandarine peel, gentle enough for children's blends and widely used in confectionery flavor systems.",
    "shortSpec": "Cold Pressed · India/Sicily · Sweet-Mild Citrus",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 62,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Tangerine (Mandarine) Oil (Citrus reticulata) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#8C5008",
    "labelImageUrl": "/labels/tangerine-mandarine-oil.png",
    "compositeImageUrl": "/products/tangerine-mandarine-oil.webp"
  },
  {
    "id": "prod-tea-tree",
    "slug": "tea-tree-oil",
    "name": "Tea Tree Oil",
    "botanicalName": "Melaleuca alternifolia",
    "category": "ESSENTIAL_OIL",
    "description": "Australia's most famous medicinal oil — ISO 4730 compliant with 40%+ terpinen-4-ol. The global standard for natural antimicrobial skincare.",
    "shortSpec": "Steam Distilled · Australia · ISO 4730 Compliant",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 94,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "100% pure steam distilled Tea Tree Oil (Melaleuca alternifolia) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/tea-tree-oil.png",
    "compositeImageUrl": "/products/tea-tree-oil.webp"
  },
  {
    "id": "prod-thuja-wood",
    "slug": "thuja-wood-oil",
    "name": "Thuja Wood Oil",
    "botanicalName": "Thuja occidentalis",
    "category": "ESSENTIAL_OIL",
    "description": "Cedar-like medicinal oil from white cedar wood used in pharmaceutical applications. Handle with care due to high thujone content.",
    "shortSpec": "Steam Distilled · Canada/India · Thujone-Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 22,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Thuja Wood Oil (Thuja occidentalis) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/thuja-wood-oil.png",
    "compositeImageUrl": "/products/thuja-wood-oil.webp"
  },
  {
    "id": "prod-turmeric-leaf",
    "slug": "turmeric-leaf-oil",
    "name": "Turmeric Leaf Oil",
    "botanicalName": "Curcuma longa (leaf)",
    "category": "ESSENTIAL_OIL",
    "description": "Spicy, earthy oil distilled from turmeric leaves rather than rhizomes, offering a distinct aromatic profile used in perfumery and spas.",
    "shortSpec": "Steam Distilled · India · Leaf-Distilled",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 34,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Turmeric Leaf Oil (Curcuma longa (leaf)) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7E4314",
    "labelImageUrl": "/labels/turmeric-leaf-oil.png",
    "compositeImageUrl": "/products/turmeric-leaf-oil.webp"
  },
  {
    "id": "prod-vanilla-eo",
    "slug": "vanilla-oil",
    "name": "Vanilla Oil",
    "botanicalName": "Vanilla planifolia",
    "category": "ESSENTIAL_OIL",
    "description": "Warm, sweet vanilla CO2 extract or absolute, a cornerstone of oriental, gourmand, and dessert-inspired fragrance compositions.",
    "shortSpec": "CO2 Extract · Madagascar/India · Vanillin Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 78,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Vanilla Oil (Vanilla planifolia) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/vanilla-oil.png",
    "compositeImageUrl": "/products/vanilla-oil.webp"
  },
  {
    "id": "prod-valerian-eo",
    "slug": "valerian-oil",
    "name": "Valerian Oil",
    "botanicalName": "Valeriana officinalis",
    "category": "ESSENTIAL_OIL",
    "description": "Earthy, musty root oil with powerful sedative and anxiolytic properties, used in natural sleep and stress-relief formulations.",
    "shortSpec": "Steam Distilled · Europe/India · Sedative Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 50,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Valerian Oil (Valeriana officinalis) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/valerian-oil.png",
    "compositeImageUrl": "/products/valerian-oil.webp"
  },
  {
    "id": "prod-vetiver",
    "slug": "vetiver-oil",
    "name": "Vetiver Oil",
    "botanicalName": "Chrysopogon zizanioides",
    "category": "ESSENTIAL_OIL",
    "description": "Deep, smoky, earthy vetiver from Indian roots — an essential perfumery fixative and base note prized in high-end masculine fragrances.",
    "shortSpec": "Steam Distilled · Rajasthan, India · Earthy Fixative",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 84,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Chrysopogon zizanioides cultivated in the renowned terroir of Bharatpur, Rajasthan & Bundelkhand. This botanical lot exhibits an exceptional volatile fraction highlighted by Khusimol (18%+), Vetivone, Isovalencenol, grown under Heavy alluvial clay soil where root systems anchor 3 meters deep. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#4E3624",
    "labelImageUrl": "/labels/vetiver-oil.png",
    "compositeImageUrl": "/products/vetiver-oil.webp"
  },
  {
    "id": "prod-wintergreen",
    "slug": "wintergreen-oil",
    "name": "Wintergreen Oil",
    "botanicalName": "Gaultheria procumbens",
    "category": "ESSENTIAL_OIL",
    "description": "Natural methyl salicylate-dominant oil from wintergreen leaves. The foundational ingredient in pain-relief balms and sports preparations.",
    "shortSpec": "Steam Distilled · Nepal/India · 99%+ Methyl Salicylate",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 62,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Wintergreen Oil (Gaultheria procumbens) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#1E544A",
    "labelImageUrl": "/labels/wintergreen-oil.png",
    "compositeImageUrl": "/products/wintergreen-oil.webp"
  },
  {
    "id": "prod-wormwood",
    "slug": "wormwood-oil",
    "name": "Worm Wood Oil",
    "botanicalName": "Artemisia absinthium",
    "category": "ESSENTIAL_OIL",
    "description": "Bitter, camphorous wormwood oil used in pharmaceutical preparations. Contains thujone — regulated use in food applications.",
    "shortSpec": "Steam Distilled · Europe · High Thujone",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 20,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Worm Wood Oil (Artemisia absinthium) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/wormwood-oil.png",
    "compositeImageUrl": "/products/wormwood-oil.webp"
  },
  {
    "id": "prod-yarrow",
    "slug": "yarrow-oil",
    "name": "Yarrow Oil (Yara Yara)",
    "botanicalName": "Achillea millefolium",
    "category": "ESSENTIAL_OIL",
    "description": "Deep blue chamazulene-rich yarrow oil with anti-inflammatory and astringent properties for cosmetic and therapeutic use.",
    "shortSpec": "Steam Distilled · India/Europe · Blue-Chamazulene",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 44,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Yarrow Oil (Yara Yara) (Achillea millefolium) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/yarrow-oil.png",
    "compositeImageUrl": "/products/yarrow-oil.webp"
  },
  {
    "id": "prod-ylang-ylang",
    "slug": "ylang-ylang-oil",
    "name": "Ylang Ylang Oil",
    "botanicalName": "Cananga odorata",
    "category": "ESSENTIAL_OIL",
    "description": "Intoxicating tropical flower oil from the Comoro Islands. A cornerstone of luxury perfumery and romantic, floral fragrance families.",
    "shortSpec": "Fractional Steam Distilled · Comoros · Extra Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 88,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "100% pure steam distilled Ylang Ylang Oil (Cananga odorata) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7A5018",
    "labelImageUrl": "/labels/ylang-ylang-oil.png",
    "compositeImageUrl": "/products/ylang-ylang-oil.webp"
  },
  {
    "id": "prod-zanthoxylum",
    "slug": "zanthoxylum-oil",
    "name": "Zanthoxylum Oil",
    "botanicalName": "Zanthoxylum armatum",
    "category": "ESSENTIAL_OIL",
    "description": "Himalayan spice oil from prickly ash berries with fresh, lemon-pepper character used in culinary flavouring and cosmetics.",
    "shortSpec": "Steam Distilled · Himalayas · Lemon-Pepper",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "100% pure steam distilled Zanthoxylum Oil (Zanthoxylum armatum) sourced from prime Indian harvesting regions. Tested by Gas Chromatography-Mass Spectrometry to ensure batch-to-batch consistency for B2B cosmetic, pharmaceutical, and perfumery manufacturing.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/zanthoxylum-oil.png",
    "compositeImageUrl": "/products/zanthoxylum-oil.webp"
  },
  {
    "id": "spice-ajowan",
    "slug": "ajowan-oil",
    "name": "Ajowan Oil",
    "botanicalName": "Trachyspermum ammi",
    "category": "SPICE_OIL",
    "description": "Thyme-like Indian spice oil from carom seeds, very high in thymol. Powerful antimicrobial agent used in pharmaceutical applications.",
    "shortSpec": "Steam Distilled · India · High Thymol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 50,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Trachyspermum ammi sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/ajowan-oil.png",
    "compositeImageUrl": "/products/ajowan-oil.webp"
  },
  {
    "id": "spice-allspice",
    "slug": "allspice-oil",
    "name": "Allspice Oil",
    "botanicalName": "Pimenta dioica",
    "category": "SPICE_OIL",
    "description": "Warm, clove-cinnamon-nutmeg combined spice oil from allspice berries used in flavour, fragrance, and warming massage blends.",
    "shortSpec": "Steam Distilled · Jamaica/India · Warm Spice",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 45,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Pimenta dioica sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/allspice-oil.png",
    "compositeImageUrl": "/products/allspice-oil.webp"
  },
  {
    "id": "spice-anise",
    "slug": "anise-oil",
    "name": "Anise Oil",
    "botanicalName": "Pimpinella anisum",
    "category": "SPICE_OIL",
    "description": "Sweet, liquorice-like anise seed oil with high trans-anethole content, used in confectionery flavoring and oral care products.",
    "shortSpec": "Steam Distilled · Turkey/India · High Anethole",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Pimpinella anisum sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#544622",
    "labelImageUrl": "/labels/anise-oil.png",
    "compositeImageUrl": "/products/anise-oil.webp"
  },
  {
    "id": "spice-asafoetida",
    "slug": "asafoetida-oil",
    "name": "Asafoetida Oil",
    "botanicalName": "Ferula asafoetida",
    "category": "SPICE_OIL",
    "description": "Intensely pungent hing oil from asafoetida resin, used in culinary flavoring, digestive preparations, and Indian traditional medicine.",
    "shortSpec": "Steam Distilled · Iran/Afghanistan · Sulfurous-Pungent",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 40,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Ferula asafoetida sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/asafoetida-oil.png",
    "compositeImageUrl": "/products/asafoetida-oil.webp"
  },
  {
    "id": "spice-bay-leaf",
    "slug": "bay-leaf-oil",
    "name": "Bay Leaf Oil",
    "botanicalName": "Laurus nobilis",
    "category": "SPICE_OIL",
    "description": "Warm, spicy-herbal bay laurel oil rich in cineole and eugenol, used in men's fragrances, flavour, and skin care.",
    "shortSpec": "Steam Distilled · Turkey/India · Cineole-Eugenol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Laurus nobilis sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/bay-leaf-oil.png",
    "compositeImageUrl": "/products/bay-leaf-oil.webp"
  },
  {
    "id": "spice-black-cumin",
    "slug": "black-cumin-seed-oil",
    "name": "Black Cumin Seed Oil",
    "botanicalName": "Nigella sativa",
    "category": "SPICE_OIL",
    "description": "Therapeutic spice oil from Nigella sativa seeds, rich in thymoquinone with proven immunomodulatory and anti-inflammatory activity.",
    "shortSpec": "Cold Pressed · India/Egypt · Thymoquinone Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "Derived from steam distillation of select Nigella sativa sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#544622",
    "labelImageUrl": "/labels/black-cumin-seed-oil.png",
    "compositeImageUrl": "/products/black-cumin-seed-oil.webp"
  },
  {
    "id": "spice-black-pepper",
    "slug": "black-pepper-oil",
    "name": "Black Pepper Oil",
    "botanicalName": "Piper nigrum",
    "category": "SPICE_OIL",
    "description": "Sharp, warm black pepper spice oil with high beta-caryophyllene and piperine content. Used in flavour, fragrance, and warming massage oils.",
    "shortSpec": "Steam Distilled · Kerala, India · Spicy-Warming",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 75,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Derived from steam distillation of select Piper nigrum sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#3B352E",
    "labelImageUrl": "/labels/black-pepper-oil.png",
    "compositeImageUrl": "/products/black-pepper-oil.webp"
  },
  {
    "id": "spice-calamus",
    "slug": "calamus-oil",
    "name": "Calamus Oil",
    "botanicalName": "Acorus calamus",
    "category": "SPICE_OIL",
    "description": "Sweet, warm root oil from calamus (sweet flag) with traditional Ayurvedic applications in cognition and neurological preparations.",
    "shortSpec": "Steam Distilled · India · Warm-Woody",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Acorus calamus sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/calamus-oil.png",
    "compositeImageUrl": "/products/calamus-oil.webp"
  },
  {
    "id": "spice-cambodge",
    "slug": "cambodge-oil",
    "name": "Cambodge Oil",
    "botanicalName": "Garcinia cambogia",
    "category": "SPICE_OIL",
    "description": "CO2 extract from Garcinia cambogia rind used in weight management products and as a flavour agent in nutraceutical formulations.",
    "shortSpec": "CO2 Extract · India · Hydroxycitric Acid",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 32,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Garcinia cambogia sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/cambodge-oil.png",
    "compositeImageUrl": "/products/cambodge-oil.webp"
  },
  {
    "id": "spice-capsicum",
    "slug": "capsicum-oil-paprika",
    "name": "Capsicum Oil (Paprika)",
    "botanicalName": "Capsicum annuum",
    "category": "SPICE_OIL",
    "description": "Warming capsaicin-rich chili oil used in topical pain management preparations, muscle relaxants, and warming liniment formulations.",
    "shortSpec": "Oleoresin/CO2 · India · Capsaicin-Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Capsicum annuum sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#881F17",
    "labelImageUrl": "/labels/capsicum-oil-paprika.png",
    "compositeImageUrl": "/products/capsicum-oil-paprika.webp"
  },
  {
    "id": "spice-caraway",
    "slug": "caraway-oil",
    "name": "Caraway Oil",
    "botanicalName": "Carum carvi",
    "category": "SPICE_OIL",
    "description": "Distinctive warm-spicy caraway seed oil with high carvone content used in rye bread flavoring, digestive health preparations, and perfumery.",
    "shortSpec": "Steam Distilled · India/Europe · High Carvone",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 44,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Carum carvi sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/caraway-oil.png",
    "compositeImageUrl": "/products/caraway-oil.webp"
  },
  {
    "id": "spice-cardamom",
    "slug": "cardamom-oil",
    "name": "Cardamom Oil",
    "botanicalName": "Elettaria cardamomum",
    "category": "SPICE_OIL",
    "description": "The queen of spices oil — sweet, spicy, and richly aromatic with high terpinyl acetate. Used in luxury perfumery and flavour applications.",
    "shortSpec": "Steam Distilled · Kerala, India · High Terpinyl Acetate",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 80,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Elettaria cardamomum cultivated in the renowned terroir of Cardamom Hills, Idukki, Kerala. This botanical lot exhibits an exceptional volatile fraction highlighted by Terpinyl Acetate (40%+), 1,8-Cineole (32%+), grown under Shaded evergreen rainforest canopy at 1,000m elevation. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#3E5739",
    "labelImageUrl": "/labels/cardamom-oil.png",
    "compositeImageUrl": "/products/cardamom-oil.webp"
  },
  {
    "id": "spice-cassia",
    "slug": "cassia-oil",
    "name": "Cassia Oil",
    "botanicalName": "Cinnamomum cassia",
    "category": "SPICE_OIL",
    "description": "Chinese cinnamon oil with high cinnamaldehyde content — bolder and less complex than Ceylon cinnamon but widely used in flavouring.",
    "shortSpec": "Steam Distilled · China/India · High Cinnamaldehyde",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 52,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Cinnamomum cassia sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#74281A",
    "labelImageUrl": "/labels/cassia-oil.png",
    "compositeImageUrl": "/products/cassia-oil.webp"
  },
  {
    "id": "spice-celery",
    "slug": "celery-oil",
    "name": "Celery Oil",
    "botanicalName": "Apium graveolens",
    "category": "SPICE_OIL",
    "description": "Warm, spicy seed oil from celery with phthalide content. Used in food flavouring, men's fragrances, and traditional diuretic preparations.",
    "shortSpec": "Steam Distilled · India · Phthalide-Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Apium graveolens sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/celery-oil.png",
    "compositeImageUrl": "/products/celery-oil.webp"
  },
  {
    "id": "spice-cinnamon-bark",
    "slug": "cinnamon-bark-oil",
    "name": "Cinnamon Bark Oil",
    "botanicalName": "Cinnamomum zeylanicum",
    "category": "SPICE_OIL",
    "description": "True Ceylon cinnamon bark oil — the gold standard of cinnamon with 65–75% cinnamaldehyde. Used in premium flavouring and spice perfumery.",
    "shortSpec": "Steam Distilled · Sri Lanka/India · 70% Cinnamaldehyde",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 78,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Cinnamomum zeylanicum cultivated in the renowned terroir of Malabar Coast & Sri Lanka borderlands. This botanical lot exhibits an exceptional volatile fraction highlighted by Cinnamaldehyde (72%+), Eugenol (8%+), grown under Tropical coastal laterite belt harvested from peeled coppiced shoots. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#74281A",
    "labelImageUrl": "/labels/cinnamon-bark-oil.png",
    "compositeImageUrl": "/products/cinnamon-bark-oil.webp"
  },
  {
    "id": "spice-cinnamon-leaf",
    "slug": "cinnamon-leaf-oil",
    "name": "Cinnamon Leaf Oil",
    "botanicalName": "Cinnamomum zeylanicum (leaf)",
    "category": "SPICE_OIL",
    "description": "Eugenol-dominant cinnamon leaf oil — more affordable than bark oil and widely used in soaps, antiseptic preparations, and flavouring.",
    "shortSpec": "Steam Distilled · Sri Lanka/India · 85% Eugenol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 66,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Cinnamomum zeylanicum (leaf) cultivated in the renowned terroir of Malabar Coast & Sri Lanka borderlands. This botanical lot exhibits an exceptional volatile fraction highlighted by Cinnamaldehyde (72%+), Eugenol (8%+), grown under Tropical coastal laterite belt harvested from peeled coppiced shoots. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#74281A",
    "labelImageUrl": "/labels/cinnamon-leaf-oil.png",
    "compositeImageUrl": "/products/cinnamon-leaf-oil.webp"
  },
  {
    "id": "spice-clove-bud",
    "slug": "clove-bud-oil",
    "name": "Clove Bud Oil",
    "botanicalName": "Syzygium aromaticum",
    "category": "SPICE_OIL",
    "description": "Premium 85%+ eugenol clove bud oil from Zanzibar and South India. The most powerful natural eugenol source used in dental anaesthetics.",
    "shortSpec": "Steam Distilled · India/Zanzibar · 85%+ Eugenol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 82,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Syzygium aromaticum cultivated in the renowned terroir of Kanyakumari & Nilgiris, Tamil Nadu. This botanical lot exhibits an exceptional volatile fraction highlighted by Eugenol (86%+), Eugenyl Acetate, grown under Coastal maritime humid microclimate of Southern peninsular India. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#63261C",
    "labelImageUrl": "/labels/clove-bud-oil.png",
    "compositeImageUrl": "/products/clove-bud-oil.webp"
  },
  {
    "id": "spice-clove-leaf",
    "slug": "clove-leaf-oil",
    "name": "Clove Leaf Oil",
    "botanicalName": "Syzygium aromaticum (leaf)",
    "category": "SPICE_OIL",
    "description": "Higher-yield, more economical clove eugenol source from leaves rather than buds. Widely used in soap making and industrial applications.",
    "shortSpec": "Steam Distilled · India/Zanzibar · Industrial Eugenol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Syzygium aromaticum (leaf) cultivated in the renowned terroir of Kanyakumari & Nilgiris, Tamil Nadu. This botanical lot exhibits an exceptional volatile fraction highlighted by Eugenol (86%+), Eugenyl Acetate, grown under Coastal maritime humid microclimate of Southern peninsular India. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#63261C",
    "labelImageUrl": "/labels/clove-leaf-oil.png",
    "compositeImageUrl": "/products/clove-leaf-oil.webp"
  },
  {
    "id": "spice-coriander",
    "slug": "coriander-oil",
    "name": "Coriander Oil",
    "botanicalName": "Coriandrum sativum",
    "category": "SPICE_OIL",
    "description": "Sweet, aromatic coriander seed oil rich in linalool. A lighter, floral-spicy oil used in gin flavouring, perfumery, and digestive preparations.",
    "shortSpec": "Steam Distilled · India · High Linalool",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Coriandrum sativum sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#544622",
    "labelImageUrl": "/labels/coriander-oil.png",
    "compositeImageUrl": "/products/coriander-oil.webp"
  },
  {
    "id": "spice-cumin",
    "slug": "cumin-oil",
    "name": "Cumin Oil",
    "botanicalName": "Cuminum cyminum",
    "category": "SPICE_OIL",
    "description": "Pungent, warm spice oil from cumin seeds used in Middle Eastern and Indian flavor systems, and in amber/oriental fragrance compositions.",
    "shortSpec": "Steam Distilled · Rajasthan, India · Cumin Aldehyde",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 62,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Cuminum cyminum sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#544622",
    "labelImageUrl": "/labels/cumin-oil.png",
    "compositeImageUrl": "/products/cumin-oil.webp"
  },
  {
    "id": "spice-curry-leaf",
    "slug": "curry-leaf-oil",
    "name": "Curry Leaf Oil",
    "botanicalName": "Murraya koenigii",
    "category": "SPICE_OIL",
    "description": "Distinctive South Indian spice oil from curry leaves with a characteristic green-spicy aroma. Used in flavouring and hair care applications.",
    "shortSpec": "Steam Distilled · South India · Aromatic",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Murraya koenigii sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/curry-leaf-oil.png",
    "compositeImageUrl": "/products/curry-leaf-oil.webp"
  },
  {
    "id": "spice-dill-seed",
    "slug": "dill-seed-oil",
    "name": "Dill Seed Oil",
    "botanicalName": "Anethum graveolens",
    "category": "SPICE_OIL",
    "description": "Fresh, herby dill seed oil with high carvone and limonene content used in pickle flavoring, antispasmodic preparations, and aromatherapy.",
    "shortSpec": "Steam Distilled · India · High Carvone",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 40,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Anethum graveolens sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#544622",
    "labelImageUrl": "/labels/dill-seed-oil.png",
    "compositeImageUrl": "/products/dill-seed-oil.webp"
  },
  {
    "id": "spice-fennel",
    "slug": "fennel-oil",
    "name": "Fennel Oil",
    "botanicalName": "Foeniculum vulgare",
    "category": "SPICE_OIL",
    "description": "Sweet aniseed-like fennel oil with high trans-anethole. Used in oral care, digestive aids, flavour systems, and anti-cellulite cosmetics.",
    "shortSpec": "Steam Distilled · India/Mediterranean · High Anethole",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Foeniculum vulgare sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#544622",
    "labelImageUrl": "/labels/fennel-oil.png",
    "compositeImageUrl": "/products/fennel-oil.webp"
  },
  {
    "id": "spice-fenugreek",
    "slug": "fenugreek-oil",
    "name": "Fenugreek Oil",
    "botanicalName": "Trigonella foenum-graecum",
    "category": "SPICE_OIL",
    "description": "Maple syrup-like aromatic oil from fenugreek seeds used in hair growth preparations, Indian flavouring, and traditional medicine.",
    "shortSpec": "Steam Distilled/Cold Press · India · Sotolone-Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 50,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Trigonella foenum-graecum sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/fenugreek-oil.png",
    "compositeImageUrl": "/products/fenugreek-oil.webp"
  },
  {
    "id": "spice-galangal",
    "slug": "galangal-oil",
    "name": "Galangal Oil",
    "botanicalName": "Alpinia galanga",
    "category": "SPICE_OIL",
    "description": "Ginger-related spice oil from galangal rhizomes with a medicinal, camphor-like aroma used in Southeast Asian food and pharmaceuticals.",
    "shortSpec": "Steam Distilled · India/Thailand · Spicy-Camphor",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 36,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Alpinia galanga sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/galangal-oil.png",
    "compositeImageUrl": "/products/galangal-oil.webp"
  },
  {
    "id": "spice-garlic",
    "slug": "garlic-oil",
    "name": "Garlic Oil",
    "botanicalName": "Allium sativum",
    "category": "SPICE_OIL",
    "description": "Potent allicin-containing garlic oil used in pharmaceutical cardiovascular preparations, natural insect repellents, and food flavouring.",
    "shortSpec": "Steam Distilled · India · Allicin-Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Allium sativum sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/garlic-oil.png",
    "compositeImageUrl": "/products/garlic-oil.webp"
  },
  {
    "id": "spice-ginger",
    "slug": "ginger-oil",
    "name": "Ginger Oil",
    "botanicalName": "Zingiber officinale",
    "category": "SPICE_OIL",
    "description": "Warm, pungent steam-distilled ginger oil from Cochin, India. Used in nausea relief, warming massage blends, and spice fragrance accords.",
    "shortSpec": "Steam Distilled · Cochin, India · Zingiber Content",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 80,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Zingiber officinale cultivated in the renowned terroir of Cochin & Wayanad, Kerala. This botanical lot exhibits an exceptional volatile fraction highlighted by Zingiberene (35%+), Curcumene, Gingerols, grown under Organic mountain loam renowned for intense aromatic pungency. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#7E4314",
    "labelImageUrl": "/labels/ginger-oil.png",
    "compositeImageUrl": "/products/ginger-oil.webp"
  },
  {
    "id": "spice-hyssop",
    "slug": "hyssop-oil",
    "name": "Hyssop Oil",
    "botanicalName": "Hyssopus officinalis",
    "category": "SPICE_OIL",
    "description": "Herbaceous, camphor-like European herb oil used in expectorant preparations, liqueur flavoring (Chartreuse), and respiratory aromatherapy.",
    "shortSpec": "Steam Distilled · France/Spain · Pinocamphone-Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Hyssopus officinalis sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/hyssop-oil.png",
    "compositeImageUrl": "/products/hyssop-oil.webp"
  },
  {
    "id": "spice-laurel-berry",
    "slug": "laurel-berry-oil",
    "name": "Laurel Berry Oil",
    "botanicalName": "Laurus nobilis (fruit)",
    "category": "SPICE_OIL",
    "description": "Traditional Syrian and Turkish extraction from laurel berry fruit, yielding a uniquely thick, herbal-spicy oil used in Aleppo soap making.",
    "shortSpec": "Cold Pressed · Syria/Turkey · Traditional",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "Derived from steam distillation of select Laurus nobilis (fruit) sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/laurel-berry-oil.png",
    "compositeImageUrl": "/products/laurel-berry-oil.webp"
  },
  {
    "id": "spice-mace",
    "slug": "mace-oil",
    "name": "Mace Oil",
    "botanicalName": "Myristica fragrans (mace)",
    "category": "SPICE_OIL",
    "description": "Nutmeg's reddish outer husk yields a softer, more floral spice oil with elegant woody-spicy notes used in high-end Oriental perfumery.",
    "shortSpec": "Steam Distilled · Indonesia/India · Softer-Nutmeg",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 44,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Myristica fragrans (mace) sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#63261C",
    "labelImageUrl": "/labels/mace-oil.png",
    "compositeImageUrl": "/products/mace-oil.webp"
  },
  {
    "id": "spice-marjoram",
    "slug": "marjoram-oil",
    "name": "Marjoram Oil",
    "botanicalName": "Origanum majorana",
    "category": "SPICE_OIL",
    "description": "Warm, spicy-herbaceous marjoram oil used in muscle massage blends, respiratory aromatherapy, and Mediterranean food flavouring.",
    "shortSpec": "Steam Distilled · Egypt/India · Terpinene-4-ol Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Origanum majorana sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#2A4E2B",
    "labelImageUrl": "/labels/marjoram-oil.png",
    "compositeImageUrl": "/products/marjoram-oil.webp"
  },
  {
    "id": "spice-onion",
    "slug": "onion-oil",
    "name": "Onion Oil",
    "botanicalName": "Allium cepa",
    "category": "SPICE_OIL",
    "description": "Sulfurous, pungent onion oil used in pharmaceutical preparations, hair growth stimulation, and savoury food flavouring.",
    "shortSpec": "Steam Distilled · India · Allyl Sulfide-Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Allium cepa sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/onion-oil.png",
    "compositeImageUrl": "/products/onion-oil.webp"
  },
  {
    "id": "spice-oregano",
    "slug": "oregano-oil",
    "name": "Oregano Oil",
    "botanicalName": "Origanum vulgare",
    "category": "SPICE_OIL",
    "description": "High-carvacrol oregano oil — one of nature's most powerful natural antimicrobials. Used in natural antibiotic supplements and immune support.",
    "shortSpec": "Steam Distilled · Turkey/India · High Carvacrol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Origanum vulgare sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#2A4E2B",
    "labelImageUrl": "/labels/oregano-oil.png",
    "compositeImageUrl": "/products/oregano-oil.webp"
  },
  {
    "id": "spice-parsley-seed",
    "slug": "parsley-seed-oil",
    "name": "Parsley Seed Oil",
    "botanicalName": "Petroselinum crispum",
    "category": "SPICE_OIL",
    "description": "Spicy, warm herbaceous oil from parsley seeds with apiole content. Used in diuretic preparations and as a flavour ingredient.",
    "shortSpec": "Steam Distilled · Europe/India · Apiole-Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Petroselinum crispum sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/parsley-seed-oil.png",
    "compositeImageUrl": "/products/parsley-seed-oil.webp"
  },
  {
    "id": "spice-saffron",
    "slug": "saffron-oil",
    "name": "Saffron Oil",
    "botanicalName": "Crocus sativus",
    "category": "SPICE_OIL",
    "description": "Precious saffron CO2 extract or attar from the world's most expensive spice. Safranal-rich — used in luxury perfumery and cosmetics.",
    "shortSpec": "CO2 Extract · Kashmir, India · Ultra Premium",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Crocus sativus sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#8C3C10",
    "labelImageUrl": "/labels/saffron-oil.png",
    "compositeImageUrl": "/products/saffron-oil.webp"
  },
  {
    "id": "spice-sage",
    "slug": "sage-oil",
    "name": "Sage Oil",
    "botanicalName": "Salvia officinalis",
    "category": "SPICE_OIL",
    "description": "Herbaceous, camphor-dominant Dalmatian sage oil used in oral care, deodorant formulations, and flavouring for processed meats.",
    "shortSpec": "Steam Distilled · Balkans/India · High Thujone/Camphor",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 50,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Salvia officinalis sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#244E31",
    "labelImageUrl": "/labels/sage-oil.png",
    "compositeImageUrl": "/products/sage-oil.webp"
  },
  {
    "id": "spice-tarragon",
    "slug": "tarragon-oil",
    "name": "Tarragon Oil",
    "botanicalName": "Artemisia dracunculus",
    "category": "SPICE_OIL",
    "description": "Anise-herbal French tarragon oil with methyl chavicol dominant profile used in high-end culinary flavouring and fine fragrance.",
    "shortSpec": "Steam Distilled · France/India · Methyl Chavicol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 32,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Artemisia dracunculus sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#6E2C1C",
    "labelImageUrl": "/labels/tarragon-oil.png",
    "compositeImageUrl": "/products/tarragon-oil.webp"
  },
  {
    "id": "spice-thyme",
    "slug": "thyme-oil",
    "name": "Thyme Oil",
    "botanicalName": "Thymus vulgaris",
    "category": "SPICE_OIL",
    "description": "Potent antimicrobial thyme oil with high thymol content. Used in antiseptic preparations, mouthwashes, and respiratory aromatherapy.",
    "shortSpec": "Steam Distilled · Spain/India · High Thymol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 66,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Thymus vulgaris sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#2A4E2B",
    "labelImageUrl": "/labels/thyme-oil.png",
    "compositeImageUrl": "/products/thyme-oil.webp"
  },
  {
    "id": "spice-turmeric",
    "slug": "turmeric-oil",
    "name": "Turmeric Oil",
    "botanicalName": "Curcuma longa",
    "category": "SPICE_OIL",
    "description": "Ar-turmerone rich spice oil from turmeric rhizomes with strong anti-inflammatory activity and warm, spicy-woody scent.",
    "shortSpec": "Steam Distilled · India · High Turmerone",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Derived from steam distillation of select Curcuma longa sourced directly from India's prime spice growing belts. Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical analgesic formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#7E4314",
    "labelImageUrl": "/labels/turmeric-oil.png",
    "compositeImageUrl": "/products/turmeric-oil.webp"
  },
  {
    "id": "carrier-almond-bitter",
    "slug": "almond-oil-bitter",
    "name": "Almond Oil (Bitter)",
    "botanicalName": "Prunus amygdalus var. amara",
    "category": "CARRIER_OIL",
    "description": "Dearomatized bitter almond fatty oil used as a carrier and in pharmaceutical preparations. Not for undiluted use.",
    "shortSpec": "Cold Pressed · India · Pharmaceutical Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Prunus amygdalus var. amara. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#8E5F12",
    "labelImageUrl": "/labels/almond-oil-bitter.png",
    "compositeImageUrl": "/products/almond-oil-bitter.webp"
  },
  {
    "id": "carrier-almond-sweet",
    "slug": "almond-oil-sweet",
    "name": "Almond Oil (Sweet)",
    "botanicalName": "Prunus dulcis",
    "category": "CARRIER_OIL",
    "description": "Classic, light, emollient sweet almond oil — one of the most widely used carrier oils in massage and skincare formulations globally.",
    "shortSpec": "Cold Pressed · India · Light Emollient",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 88,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "featured": true,
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Prunus dulcis. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#8E5F12",
    "labelImageUrl": "/labels/almond-oil-sweet.png",
    "compositeImageUrl": "/products/almond-oil-sweet.webp"
  },
  {
    "id": "carrier-amla",
    "slug": "amla-oil",
    "name": "Amla Oil",
    "botanicalName": "Phyllanthus emblica",
    "category": "CARRIER_OIL",
    "description": "Indian gooseberry oil rich in Vitamin C and gallic acid. An Ayurvedic hair care powerhouse used in scalp oils and hair tonics.",
    "shortSpec": "Cold Pressed · India · Vitamin C Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Phyllanthus emblica. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#264832",
    "labelImageUrl": "/labels/amla-oil.png",
    "compositeImageUrl": "/products/amla-oil.webp"
  },
  {
    "id": "carrier-apricot",
    "slug": "apricot-oil",
    "name": "Apricot Oil",
    "botanicalName": "Prunus armeniaca",
    "category": "CARRIER_OIL",
    "description": "Lightweight, skin-softening apricot kernel oil with high oleic acid. Excellent for sensitive and mature skin formulations.",
    "shortSpec": "Cold Pressed · India/Turkey · Lightweight Emollient",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 70,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Prunus armeniaca. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#8E5F12",
    "labelImageUrl": "/labels/apricot-oil.png",
    "compositeImageUrl": "/products/apricot-oil.webp"
  },
  {
    "id": "carrier-arachis",
    "slug": "arachis-oil-peanut-oil",
    "name": "Arachis Oil (Peanut Oil)",
    "botanicalName": "Arachis hypogaea",
    "category": "CARRIER_OIL",
    "description": "Refined peanut carrier oil used in pharmaceutical injections (oleaginous vehicle), topical preparations, and as a cooking oil.",
    "shortSpec": "Cold Pressed · India · USP Pharmaceutical Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Arachis hypogaea. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/arachis-oil-peanut-oil.png",
    "compositeImageUrl": "/products/arachis-oil-peanut-oil.webp"
  },
  {
    "id": "carrier-argan",
    "slug": "argan-oil",
    "name": "Argan Oil",
    "botanicalName": "Argania spinosa",
    "category": "CARRIER_OIL",
    "description": "Moroccan 'liquid gold' — rich in oleic acid and natural Vitamin E. Premier luxury skin and hair oil with exceptional oxidative stability.",
    "shortSpec": "Cold Pressed · Morocco · Virgin Unrefined",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 90,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Argania spinosa cultivated in the renowned terroir of Souss Valley / Atlas Biosphere. This botanical lot exhibits an exceptional volatile fraction highlighted by Oleic Acid (48%), Linoleic Acid (33%), Tocopherols, grown under UNESCO Biosphere reserve arid limestone mineral soils. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#8E5F12",
    "labelImageUrl": "/labels/argan-oil.png",
    "compositeImageUrl": "/products/argan-oil.webp"
  },
  {
    "id": "carrier-avocado",
    "slug": "avocado-oil",
    "name": "Avocado Oil",
    "botanicalName": "Persea americana",
    "category": "CARRIER_OIL",
    "description": "Rich, heavy avocado oil high in oleic acid and vitamins A, D, E. Superb for dry, aged skin and deeply nourishing hair masks.",
    "shortSpec": "Cold Pressed · Mexico/India · Deep Nourishing",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 78,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Persea americana. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#5C5624",
    "labelImageUrl": "/labels/avocado-oil.png",
    "compositeImageUrl": "/products/avocado-oil.webp"
  },
  {
    "id": "carrier-brahmi",
    "slug": "brahmi-oil",
    "name": "Brahmi Oil",
    "botanicalName": "Bacopa monnieri",
    "category": "CARRIER_OIL",
    "description": "Ayurvedic medicated hair oil infused with Brahmi herb in sesame or coconut base. Used for scalp health and cognitive support.",
    "shortSpec": "Infused/Pressed · India · Ayurvedic Hair Oil",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 65,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Bacopa monnieri. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#264832",
    "labelImageUrl": "/labels/brahmi-oil.png",
    "compositeImageUrl": "/products/brahmi-oil.webp"
  },
  {
    "id": "carrier-borage",
    "slug": "borage-seed-oil",
    "name": "Borage Seed Oil",
    "botanicalName": "Borago officinalis",
    "category": "CARRIER_OIL",
    "description": "The richest plant source of gamma-linolenic acid (GLA, 20–24%). Essential for anti-inflammatory cosmetic formulations and eczema relief.",
    "shortSpec": "Cold Pressed · Europe/India · 22% GLA",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Borago officinalis. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/borage-seed-oil.png",
    "compositeImageUrl": "/products/borage-seed-oil.webp"
  },
  {
    "id": "carrier-castor",
    "slug": "castor-oil",
    "name": "Castor Oil",
    "botanicalName": "Ricinus communis",
    "category": "CARRIER_OIL",
    "description": "India's #1 industrial and cosmetic oil export. Rich in ricinoleic acid (90%). Used in lip glosses, hair serums, and pharmaceutical laxatives.",
    "shortSpec": "Cold Pressed · India · 90% Ricinoleic Acid",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 88,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Ricinus communis cultivated in the renowned terroir of Kutch & Saurashtra, Gujarat. This botanical lot exhibits an exceptional volatile fraction highlighted by Ricinoleic Acid (88%+), Oleic Acid, grown under Semi-arid saline-tolerant soil with high seed oil concentration. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#5C5624",
    "labelImageUrl": "/labels/castor-oil.png",
    "compositeImageUrl": "/products/castor-oil.webp"
  },
  {
    "id": "carrier-cucumber-seed",
    "slug": "cucumber-seed-oil",
    "name": "Cucumber Seed Oil",
    "botanicalName": "Cucumis sativus",
    "category": "CARRIER_OIL",
    "description": "Light, linoleic acid-rich cucumber seed oil with natural cooling properties used in after-sun, anti-aging, and sensitive skin formulations.",
    "shortSpec": "Cold Pressed · India · Linoleic-Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Cucumis sativus. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/cucumber-seed-oil.png",
    "compositeImageUrl": "/products/cucumber-seed-oil.webp"
  },
  {
    "id": "carrier-evening-primrose",
    "slug": "evening-primrose-oil",
    "name": "Evening Primrose Oil",
    "botanicalName": "Oenothera biennis",
    "category": "CARRIER_OIL",
    "description": "GLA-rich evening primrose oil with proven efficacy for hormonal skin conditions, eczema, and PMS management in supplement formulations.",
    "shortSpec": "Cold Pressed · Europe/China · 9% GLA",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 80,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Oenothera biennis cultivated in the renowned terroir of Pushkar, Rajasthan & Aligarh, UP. This botanical lot exhibits an exceptional volatile fraction highlighted by Citronellol (38%), Geraniol (20%), Rose Oxide, grown under Chaitri Rose blooming cycle harvested before sunrise. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#7E2D48",
    "labelImageUrl": "/labels/evening-primrose-oil.png",
    "compositeImageUrl": "/products/evening-primrose-oil.webp"
  },
  {
    "id": "carrier-flax-seed",
    "slug": "flax-seed-oil-linseed",
    "name": "Flax Seed Oil (Linseed)",
    "botanicalName": "Linum usitatissimum",
    "category": "CARRIER_OIL",
    "description": "Omega-3 rich flaxseed oil (55% ALA) used in anti-inflammatory nutritional supplements and in industrial paint/coating applications.",
    "shortSpec": "Cold Pressed · Canada/India · 55% ALA",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 62,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Linum usitatissimum. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/flax-seed-oil-linseed.png",
    "compositeImageUrl": "/products/flax-seed-oil-linseed.webp"
  },
  {
    "id": "carrier-grapeseed",
    "slug": "grapeseed-oil",
    "name": "Grapeseed Oil",
    "botanicalName": "Vitis vinifera",
    "category": "CARRIER_OIL",
    "description": "Light, non-greasy carrier oil from wine industry by-products. High in linoleic acid and OPC antioxidants for oily skin formulations.",
    "shortSpec": "Cold Pressed · Italy/France · Non-Greasy",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Vitis vinifera. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/grapeseed-oil.png",
    "compositeImageUrl": "/products/grapeseed-oil.webp"
  },
  {
    "id": "carrier-hazelnut",
    "slug": "hazelnut-oil",
    "name": "Hazelnut Oil",
    "botanicalName": "Corylus avellana",
    "category": "CARRIER_OIL",
    "description": "Dry, slightly astringent hazelnut carrier oil with high oleic acid — ideal for oily/combination skin types in light facial formulations.",
    "shortSpec": "Cold Pressed · Turkey · Dry-Finish",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Corylus avellana. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/hazelnut-oil.png",
    "compositeImageUrl": "/products/hazelnut-oil.webp"
  },
  {
    "id": "carrier-jojoba",
    "slug": "jojoba-oil",
    "name": "Jojoba Oil",
    "botanicalName": "Simmondsia chinensis",
    "category": "CARRIER_OIL",
    "description": "Technically a liquid wax, jojoba mimics human sebum and offers exceptional oxidative stability. A universal carrier for serums and hair oils.",
    "shortSpec": "Cold Pressed · India/USA · Liquid Wax",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 92,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Simmondsia chinensis cultivated in the renowned terroir of Thar Desert, Rajasthan. This botanical lot exhibits an exceptional volatile fraction highlighted by Gadoleic Acid (72%), Erucic Acid, Wax Esters, grown under Arid sunshine terroir producing ultra-stable liquid wax esters. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#8E5F12",
    "labelImageUrl": "/labels/jojoba-oil.png",
    "compositeImageUrl": "/products/jojoba-oil.webp"
  },
  {
    "id": "carrier-macadamia",
    "slug": "macadamia-oil",
    "name": "Macadamia Oil",
    "botanicalName": "Macadamia integrifolia",
    "category": "CARRIER_OIL",
    "description": "Rich in palmitoleic acid (omega-7) which mirrors skin's natural lipids. Exceptional for mature skin care and dry hair conditioning.",
    "shortSpec": "Cold Pressed · Australia/India · Palmitoleic-Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 64,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Macadamia integrifolia. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/macadamia-oil.png",
    "compositeImageUrl": "/products/macadamia-oil.webp"
  },
  {
    "id": "carrier-moringa",
    "slug": "moringa-oil",
    "name": "Moringa Oil",
    "botanicalName": "Moringa oleifera",
    "category": "CARRIER_OIL",
    "description": "Ben oil from moringa seeds — exceptionally stable, high oleic acid carrier resistant to rancidity. Used in luxury face oils and hair serums.",
    "shortSpec": "Cold Pressed · India · 73% Oleic Acid",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 74,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "Distilled from prime Moringa oleifera cultivated in the renowned terroir of Madurai & Dindigul, Tamil Nadu. This botanical lot exhibits an exceptional volatile fraction highlighted by Oleic Acid (73%+), Behenic Acid, grown under Semi-arid tropical plains yielding cold-hardy nutrient-rich seeds. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#5C5624",
    "labelImageUrl": "/labels/moringa-oil.png",
    "compositeImageUrl": "/products/moringa-oil.webp"
  },
  {
    "id": "carrier-muskmelon",
    "slug": "muskmelon-oil",
    "name": "Muskmelon Oil",
    "botanicalName": "Cucumis melo",
    "category": "CARRIER_OIL",
    "description": "Light carrier oil from muskmelon (cantaloupe) seeds with linoleic acid dominance for sensitive and oily skin formulations.",
    "shortSpec": "Cold Pressed · India · Linoleic-Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Cucumis melo. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/muskmelon-oil.png",
    "compositeImageUrl": "/products/muskmelon-oil.webp"
  },
  {
    "id": "carrier-neem",
    "slug": "neem-oil",
    "name": "Neem Oil",
    "botanicalName": "Azadirachta indica",
    "category": "CARRIER_OIL",
    "description": "India's most powerful natural pesticide oil. Azadirachtin-rich for agricultural use plus skincare benefits in anti-acne and scalp preparations.",
    "shortSpec": "Cold Pressed · India · High Azadirachtin",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 80,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Azadirachta indica cultivated in the renowned terroir of Bundelkhand & Central Deccan, India. This botanical lot exhibits an exceptional volatile fraction highlighted by Azadirachtin A/B, Nimbin, Salannin, grown under Sun-baked drought-tolerant native woodland agroforestry. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#324A2A",
    "labelImageUrl": "/labels/neem-oil.png",
    "compositeImageUrl": "/products/neem-oil.webp"
  },
  {
    "id": "carrier-olive",
    "slug": "olive-oil",
    "name": "Olive Oil",
    "botanicalName": "Olea europaea",
    "category": "CARRIER_OIL",
    "description": "Mediterranean extra virgin olive carrier oil rich in squalene, oleic acid, and polyphenols for traditional soap making and skincare.",
    "shortSpec": "Cold Pressed · Mediterranean/India · Extra Virgin Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 75,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Olea europaea. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/olive-oil.png",
    "compositeImageUrl": "/products/olive-oil.webp"
  },
  {
    "id": "carrier-peach",
    "slug": "peach-oil",
    "name": "Peach Oil",
    "botanicalName": "Prunus persica",
    "category": "CARRIER_OIL",
    "description": "Delicate, light carrier from peach kernels very similar to apricot oil. Suitable for facial products and delicate baby care formulations.",
    "shortSpec": "Cold Pressed · India/China · Delicate & Light",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Prunus persica. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/peach-oil.png",
    "compositeImageUrl": "/products/peach-oil.webp"
  },
  {
    "id": "carrier-pomegranate",
    "slug": "pomegranate-seed-oil",
    "name": "Pomegranate Seed Oil",
    "botanicalName": "Punica granatum",
    "category": "CARRIER_OIL",
    "description": "The only plant source of punicic acid (CLnA omega-5). Potent antioxidant carrier used in anti-aging, sun damage repair, and skin rejuvenation.",
    "shortSpec": "Cold Pressed · India · Punicic Acid (CLnA)",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 76,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Punica granatum. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#7A2E3E",
    "labelImageUrl": "/labels/pomegranate-seed-oil.png",
    "compositeImageUrl": "/products/pomegranate-seed-oil.webp"
  },
  {
    "id": "carrier-pumpkin",
    "slug": "pumpkin-oil",
    "name": "Pumpkin Oil",
    "botanicalName": "Cucurbita pepo",
    "category": "CARRIER_OIL",
    "description": "Deep green, nutty pumpkin seed oil high in tocopherols, zinc, and phytosterols. Used in hair loss prevention and prostate health supplements.",
    "shortSpec": "Cold Pressed · India/Austria · Tocopherol-Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 52,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Cucurbita pepo. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/pumpkin-oil.png",
    "compositeImageUrl": "/products/pumpkin-oil.webp"
  },
  {
    "id": "carrier-rice-bran",
    "slug": "rice-bran-oil",
    "name": "Rice Bran Oil",
    "botanicalName": "Oryza sativa",
    "category": "CARRIER_OIL",
    "description": "Gamma-oryzanol rich rice bran oil widely used in Asian skincare, sunscreen, and hair care formulations for its UV-filtering properties.",
    "shortSpec": "Refined/Cold Pressed · India · Gamma-Oryzanol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 65,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Oryza sativa. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/rice-bran-oil.png",
    "compositeImageUrl": "/products/rice-bran-oil.webp"
  },
  {
    "id": "carrier-rosehip",
    "slug": "rosehip-seed-oil",
    "name": "Rosehip Seed Oil",
    "botanicalName": "Rosa rubiginosa / Rosa canina",
    "category": "CARRIER_OIL",
    "description": "Chile's prized rosehip oil with 42% linoleic and 34% alpha-linolenic acid plus natural trans-retinoic acid. A gold-standard anti-aging active.",
    "shortSpec": "Cold Pressed · Chile/India · Trans-Retinoic Active",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 90,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Rosa rubiginosa / Rosa canina cultivated in the renowned terroir of Himalayan alpine valleys & Kashmir. This botanical lot exhibits an exceptional volatile fraction highlighted by Linoleic Acid (44%), Alpha-Linolenic Acid (34%), grown under Sub-zero winter frost hardening seed antioxidant reserves. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#7E2D48",
    "labelImageUrl": "/labels/rosehip-seed-oil.png",
    "compositeImageUrl": "/products/rosehip-seed-oil.webp"
  },
  {
    "id": "carrier-safflower",
    "slug": "safflower-oil",
    "name": "Safflower Oil",
    "botanicalName": "Carthamus tinctorius",
    "category": "CARRIER_OIL",
    "description": "Ultra-light, high-linoleic acid safflower oil ideal for oily skin formulations requiring a fast-absorbing, non-comedogenic carrier.",
    "shortSpec": "Cold Pressed · India · High Linoleic Non-Comedogenic",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Carthamus tinctorius. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/safflower-oil.png",
    "compositeImageUrl": "/products/safflower-oil.webp"
  },
  {
    "id": "carrier-sesame",
    "slug": "sesame-seed-oil",
    "name": "Sesame Seed Oil",
    "botanicalName": "Sesamum indicum",
    "category": "CARRIER_OIL",
    "description": "Ancient Ayurvedic base oil rich in sesamol and sesamin with natural UV protection (SPF ~4). The foundational oil in Abhyanga massage.",
    "shortSpec": "Cold Pressed · India · Natural Antioxidant",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 74,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Sesamum indicum. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#5C5624",
    "labelImageUrl": "/labels/sesame-seed-oil.png",
    "compositeImageUrl": "/products/sesame-seed-oil.webp"
  },
  {
    "id": "carrier-sunflower",
    "slug": "sunflower-oil",
    "name": "Sunflower Oil",
    "botanicalName": "Helianthus annuus",
    "category": "CARRIER_OIL",
    "description": "High-oleic sunflower carrier oil — cost-effective, lightweight, and non-greasy. Widely used as a base in commercial cosmetic formulations.",
    "shortSpec": "Cold Pressed · India · High-Oleic Variant",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Helianthus annuus. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/sunflower-oil.png",
    "compositeImageUrl": "/products/sunflower-oil.webp"
  },
  {
    "id": "carrier-walnut",
    "slug": "walnut-oil",
    "name": "Walnut Oil",
    "botanicalName": "Juglans regia",
    "category": "CARRIER_OIL",
    "description": "Rich in ALA omega-3, walnut oil is used in anti-inflammatory skin preparations, hair treatments, and as a culinary-grade carrier.",
    "shortSpec": "Cold Pressed · India/France · 10% ALA Omega-3",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Juglans regia. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/walnut-oil.png",
    "compositeImageUrl": "/products/walnut-oil.webp"
  },
  {
    "id": "carrier-watermelon",
    "slug": "watermelon-oil",
    "name": "Watermelon Oil",
    "botanicalName": "Citrullus lanatus",
    "category": "CARRIER_OIL",
    "description": "Kalahari melon seed oil — ultra-light, fast-absorbing with high linoleic acid. A modern cosmetic carrier for lightweight serums and lotions.",
    "shortSpec": "Cold Pressed · Africa/India · Ultra-Light",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 52,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Citrullus lanatus. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/watermelon-oil.png",
    "compositeImageUrl": "/products/watermelon-oil.webp"
  },
  {
    "id": "carrier-wheat-germ",
    "slug": "wheat-germ-oil",
    "name": "Wheat Germ Oil",
    "botanicalName": "Triticum vulgare",
    "category": "CARRIER_OIL",
    "description": "The richest natural source of Vitamin E (tocopherols). An antioxidant power carrier oil ideal for anti-aging and scar-healing preparations.",
    "shortSpec": "Cold Pressed · India/Germany · Highest Vitamin E",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 70,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of Triticum vulgare. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations.",
    "history": "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export.",
    "benefits": [
      {
        "title": "Deep Hydration & Skin Barrier Support",
        "description": "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."
      },
      {
        "title": "Antioxidant Rich & Clean Absorption",
        "description": "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."
      },
      {
        "title": "Carrier Base for Essential Oils",
        "description": "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."
      }
    ],
    "signatureColor": "#895E1B",
    "labelImageUrl": "/labels/wheat-germ-oil.png",
    "compositeImageUrl": "/products/wheat-germ-oil.webp"
  },
  {
    "id": "absolute-blue-lotus",
    "slug": "blue-lotus-oil",
    "name": "Blue Lotus Oil",
    "botanicalName": "Nymphaea caerulea",
    "category": "FLORAL_ABSOLUTE",
    "description": "Sacred Egyptian blue lotus absolute — deeply spiritual, rich, and narcotic floral with blue nuances used in luxury perfumery.",
    "shortSpec": "Solvent Extracted · Egypt/India · Sacred Floral",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 65,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Artisanal low-temperature solvent extracted from freshly blossomed Nymphaea caerulea. Captures the true, unadulterated olfactory identity of the living flower with extraordinary aromatic depth, fixative persistence, and multifaceted floral nuances for luxury fine fragrance creation.",
    "history": "Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.",
    "benefits": [
      {
        "title": "Extraordinary Olfactory Tenacity",
        "description": "Acts as an opulent heart-to-base note with unmatched fixative longevity in luxury fine fragrances."
      },
      {
        "title": "Emotional Calming & Mood Elevation",
        "description": "Inhalation naturally down-regulates sympathetic nervous tension, promoting psychological tranquility."
      },
      {
        "title": "Cellular Rejuvenation for Mature Skin",
        "description": "Nourishes delicate skin tissue and restores suppleness in premium anti-aging botanical elixirs."
      }
    ],
    "signatureColor": "#543C62",
    "labelImageUrl": "/labels/blue-lotus-oil.png",
    "compositeImageUrl": "/products/blue-lotus-oil.webp"
  },
  {
    "id": "absolute-boronia",
    "slug": "boronia-absolute-oil",
    "name": "Boronia Absolute Oil",
    "botanicalName": "Boronia megastigma",
    "category": "FLORAL_ABSOLUTE",
    "description": "Australian floral absolute from boronia flowers with an extraordinary violet-rose-fruity character used in the most exclusive fragrances.",
    "shortSpec": "Solvent Extracted · Australia · Ultra Premium",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 40,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Artisanal low-temperature solvent extracted from freshly blossomed Boronia megastigma. Captures the true, unadulterated olfactory identity of the living flower with extraordinary aromatic depth, fixative persistence, and multifaceted floral nuances for luxury fine fragrance creation.",
    "history": "Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.",
    "benefits": [
      {
        "title": "Extraordinary Olfactory Tenacity",
        "description": "Acts as an opulent heart-to-base note with unmatched fixative longevity in luxury fine fragrances."
      },
      {
        "title": "Emotional Calming & Mood Elevation",
        "description": "Inhalation naturally down-regulates sympathetic nervous tension, promoting psychological tranquility."
      },
      {
        "title": "Cellular Rejuvenation for Mature Skin",
        "description": "Nourishes delicate skin tissue and restores suppleness in premium anti-aging botanical elixirs."
      }
    ],
    "signatureColor": "#7D3856",
    "labelImageUrl": "/labels/boronia-absolute-oil.png",
    "compositeImageUrl": "/products/boronia-absolute-oil.webp"
  },
  {
    "id": "absolute-calendula",
    "slug": "calendula-oil",
    "name": "Calendula Oil",
    "botanicalName": "Calendula officinalis",
    "category": "FLORAL_ABSOLUTE",
    "description": "CO2 extracted marigold absolute rich in carotenoids and flavonoids. Premier healing botanical oil for sensitive and inflamed skin.",
    "shortSpec": "CO2 Extracted · Europe/India · High Carotenoids",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 78,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Artisanal low-temperature solvent extracted from freshly blossomed Calendula officinalis. Captures the true, unadulterated olfactory identity of the living flower with extraordinary aromatic depth, fixative persistence, and multifaceted floral nuances for luxury fine fragrance creation.",
    "history": "Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.",
    "benefits": [
      {
        "title": "Extraordinary Olfactory Tenacity",
        "description": "Acts as an opulent heart-to-base note with unmatched fixative longevity in luxury fine fragrances."
      },
      {
        "title": "Emotional Calming & Mood Elevation",
        "description": "Inhalation naturally down-regulates sympathetic nervous tension, promoting psychological tranquility."
      },
      {
        "title": "Cellular Rejuvenation for Mature Skin",
        "description": "Nourishes delicate skin tissue and restores suppleness in premium anti-aging botanical elixirs."
      }
    ],
    "signatureColor": "#7D3856",
    "labelImageUrl": "/labels/calendula-oil.png",
    "compositeImageUrl": "/products/calendula-oil.webp"
  },
  {
    "id": "absolute-mimosa",
    "slug": "mimosa-absolute-oil",
    "name": "Mimosa Absolute Oil",
    "botanicalName": "Acacia dealbata",
    "category": "FLORAL_ABSOLUTE",
    "description": "Soft, powdery, honey-like French mimosa absolute from wattle flowers. A classic perfumery material used in chypre and floral accords.",
    "shortSpec": "Solvent Extracted · France/India · Powdery-Floral",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Artisanal low-temperature solvent extracted from freshly blossomed Acacia dealbata. Captures the true, unadulterated olfactory identity of the living flower with extraordinary aromatic depth, fixative persistence, and multifaceted floral nuances for luxury fine fragrance creation.",
    "history": "Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.",
    "benefits": [
      {
        "title": "Extraordinary Olfactory Tenacity",
        "description": "Acts as an opulent heart-to-base note with unmatched fixative longevity in luxury fine fragrances."
      },
      {
        "title": "Emotional Calming & Mood Elevation",
        "description": "Inhalation naturally down-regulates sympathetic nervous tension, promoting psychological tranquility."
      },
      {
        "title": "Cellular Rejuvenation for Mature Skin",
        "description": "Nourishes delicate skin tissue and restores suppleness in premium anti-aging botanical elixirs."
      }
    ],
    "signatureColor": "#7D3856",
    "labelImageUrl": "/labels/mimosa-absolute-oil.png",
    "compositeImageUrl": "/products/mimosa-absolute-oil.webp"
  },
  {
    "id": "absolute-oakmoss",
    "slug": "oakmoss-absolute-oil",
    "name": "Oakmoss Absolute Oil",
    "botanicalName": "Evernia prunastri",
    "category": "FLORAL_ABSOLUTE",
    "description": "Deep, forest-earthy oakmoss absolute — a treasured ingredient in classic chypre fragrances and green, woody compositions.",
    "shortSpec": "Solvent Extracted · Europe · Chypre Accord",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 42,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Artisanal low-temperature solvent extracted from freshly blossomed Evernia prunastri. Captures the true, unadulterated olfactory identity of the living flower with extraordinary aromatic depth, fixative persistence, and multifaceted floral nuances for luxury fine fragrance creation.",
    "history": "Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.",
    "benefits": [
      {
        "title": "Extraordinary Olfactory Tenacity",
        "description": "Acts as an opulent heart-to-base note with unmatched fixative longevity in luxury fine fragrances."
      },
      {
        "title": "Emotional Calming & Mood Elevation",
        "description": "Inhalation naturally down-regulates sympathetic nervous tension, promoting psychological tranquility."
      },
      {
        "title": "Cellular Rejuvenation for Mature Skin",
        "description": "Nourishes delicate skin tissue and restores suppleness in premium anti-aging botanical elixirs."
      }
    ],
    "signatureColor": "#7D3856",
    "labelImageUrl": "/labels/oakmoss-absolute-oil.png",
    "compositeImageUrl": "/products/oakmoss-absolute-oil.webp"
  },
  {
    "id": "absolute-white-lotus",
    "slug": "white-lotus-oil",
    "name": "White Lotus Oil",
    "botanicalName": "Nymphaea lotus",
    "category": "FLORAL_ABSOLUTE",
    "description": "Delicate white lotus absolute with a clean, subtle aquatic-floral character. Used in meditation blends and luxury skin care serums.",
    "shortSpec": "Solvent Extracted · India/Egypt · Aquatic-Floral",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Artisanal low-temperature solvent extracted from freshly blossomed Nymphaea lotus. Captures the true, unadulterated olfactory identity of the living flower with extraordinary aromatic depth, fixative persistence, and multifaceted floral nuances for luxury fine fragrance creation.",
    "history": "Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.",
    "benefits": [
      {
        "title": "Extraordinary Olfactory Tenacity",
        "description": "Acts as an opulent heart-to-base note with unmatched fixative longevity in luxury fine fragrances."
      },
      {
        "title": "Emotional Calming & Mood Elevation",
        "description": "Inhalation naturally down-regulates sympathetic nervous tension, promoting psychological tranquility."
      },
      {
        "title": "Cellular Rejuvenation for Mature Skin",
        "description": "Nourishes delicate skin tissue and restores suppleness in premium anti-aging botanical elixirs."
      }
    ],
    "signatureColor": "#543C62",
    "labelImageUrl": "/labels/white-lotus-oil.png",
    "compositeImageUrl": "/products/white-lotus-oil.webp"
  },
  {
    "id": "oleo-asafoetida",
    "slug": "asafoetida-oleoresin",
    "name": "Asafoetida Oleoresin",
    "botanicalName": "Ferula asafoetida",
    "category": "OLEORESIN",
    "description": "Concentrated hing oleoresin capturing the full volatile and resin spectrum from asafoetida gum for food flavouring applications.",
    "shortSpec": "Oleoresin · Iran/India · Sulphur Compounds",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 45,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Ferula asafoetida. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#8C2518",
    "labelImageUrl": "/labels/asafoetida-oleoresin.png",
    "compositeImageUrl": "/products/asafoetida-oleoresin.webp"
  },
  {
    "id": "oleo-ajowan",
    "slug": "ajowan-oleoresin",
    "name": "Ajowan Oleoresin",
    "botanicalName": "Trachyspermum ammi",
    "category": "OLEORESIN",
    "description": "Thymol-rich ajowan oleoresin with superior stability over the essential oil. Used in pharmaceutical and functional food applications.",
    "shortSpec": "Oleoresin · India · High Thymol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Trachyspermum ammi. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#8C2518",
    "labelImageUrl": "/labels/ajowan-oleoresin.png",
    "compositeImageUrl": "/products/ajowan-oleoresin.webp"
  },
  {
    "id": "oleo-basil",
    "slug": "basil-oleoresin",
    "name": "Basil Oleoresin",
    "botanicalName": "Ocimum basilicum",
    "category": "OLEORESIN",
    "description": "Full-spectrum basil oleoresin capturing both volatile and non-volatile components for intense, stable basil flavour applications.",
    "shortSpec": "Oleoresin · India · Full-Spectrum",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 40,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Ocimum basilicum. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#244E31",
    "labelImageUrl": "/labels/basil-oleoresin.png",
    "compositeImageUrl": "/products/basil-oleoresin.webp"
  },
  {
    "id": "oleo-capsicum-10",
    "slug": "capsicum-oleoresin-10-percent",
    "name": "Capsicum Oleoresin 10%",
    "botanicalName": "Capsicum annuum",
    "category": "OLEORESIN",
    "description": "Standardized 10% capsaicin/capsaicinoid oleoresin for topical pain relief formulations and pharmaceutical grade applications.",
    "shortSpec": "Oleoresin · India · 10% Capsaicin",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Capsicum annuum. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#881F17",
    "labelImageUrl": "/labels/capsicum-oleoresin-10-percent.png",
    "compositeImageUrl": "/products/capsicum-oleoresin-10-percent.webp"
  },
  {
    "id": "oleo-capsicum-13",
    "slug": "capsicum-oleoresin-13-percent",
    "name": "Capsicum Oleoresin 2 MSHU 13%",
    "botanicalName": "Capsicum annuum",
    "category": "OLEORESIN",
    "description": "2 MSHU (Million Scoville Heat Units) standardized capsicum oleoresin at 13% concentration for nutraceutical and defensive applications.",
    "shortSpec": "Oleoresin · India · 2 MSHU / 13% Capsaicin",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 42,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Capsicum annuum. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#881F17",
    "labelImageUrl": "/labels/capsicum-oleoresin-13-percent.png",
    "compositeImageUrl": "/products/capsicum-oleoresin-13-percent.webp"
  },
  {
    "id": "oleo-capsicum-40",
    "slug": "capsicum-oleoresin-40-percent",
    "name": "Capsicum Oleoresin 40%",
    "botanicalName": "Capsicum annuum",
    "category": "OLEORESIN",
    "description": "High-concentration 40% capsaicin oleoresin for pharmaceutical active ingredient supply and high-potency topical analgesics.",
    "shortSpec": "Oleoresin · India · 40% Capsaicin",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Capsicum annuum. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#881F17",
    "labelImageUrl": "/labels/capsicum-oleoresin-40-percent.png",
    "compositeImageUrl": "/products/capsicum-oleoresin-40-percent.webp"
  },
  {
    "id": "oleo-capsicum-6",
    "slug": "capsicum-oleoresin-6-6-percent",
    "name": "Capsicum Oleoresin 6.6%",
    "botanicalName": "Capsicum annuum",
    "category": "OLEORESIN",
    "description": "6.6% capsaicinoid standardized oleoresin for food grade chili heat applications in hot sauces and seasoning blends.",
    "shortSpec": "Oleoresin · India · Food Grade 6.6%",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 36,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Capsicum annuum. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#881F17",
    "labelImageUrl": "/labels/capsicum-oleoresin-6-6-percent.png",
    "compositeImageUrl": "/products/capsicum-oleoresin-6-6-percent.webp"
  },
  {
    "id": "oleo-cardamom",
    "slug": "cardamom-oleoresin-10-percent",
    "name": "Cardamom Oleoresin 10%",
    "botanicalName": "Elettaria cardamomum",
    "category": "OLEORESIN",
    "description": "Premium cardamom oleoresin with full aroma spectrum — superior stability and colour for use in food, beverages, and nutraceuticals.",
    "shortSpec": "Oleoresin · India · 10% Volatile Oil",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 52,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Elettaria cardamomum cultivated in the renowned terroir of Cardamom Hills, Idukki, Kerala. This botanical lot exhibits an exceptional volatile fraction highlighted by Terpinyl Acetate (40%+), 1,8-Cineole (32%+), grown under Shaded evergreen rainforest canopy at 1,000m elevation. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#3E5739",
    "labelImageUrl": "/labels/cardamom-oleoresin-10-percent.png",
    "compositeImageUrl": "/products/cardamom-oleoresin-10-percent.webp"
  },
  {
    "id": "oleo-celery",
    "slug": "celery-seed-oleoresin-8-percent",
    "name": "Celery Seed Oleoresin 8%",
    "botanicalName": "Apium graveolens",
    "category": "OLEORESIN",
    "description": "Full-spectrum celery seed oleoresin with 8% volatile oil — used in savoury flavourings, seasoning blends, and pharmaceutical diuretic products.",
    "shortSpec": "Oleoresin · India · 8% Volatile Oil",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Apium graveolens. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#8C2518",
    "labelImageUrl": "/labels/celery-seed-oleoresin-8-percent.png",
    "compositeImageUrl": "/products/celery-seed-oleoresin-8-percent.webp"
  },
  {
    "id": "oleo-clove-bud",
    "slug": "clove-bud-oleoresin-25-percent",
    "name": "Clove Bud Oleoresin 25%",
    "botanicalName": "Syzygium aromaticum",
    "category": "OLEORESIN",
    "description": "25% eugenol-standardized clove bud oleoresin for pharmaceutical dental applications, food flavouring, and antiseptic preparations.",
    "shortSpec": "Oleoresin · India/Zanzibar · 25% Eugenol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Syzygium aromaticum cultivated in the renowned terroir of Kanyakumari & Nilgiris, Tamil Nadu. This botanical lot exhibits an exceptional volatile fraction highlighted by Eugenol (86%+), Eugenyl Acetate, grown under Coastal maritime humid microclimate of Southern peninsular India. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#63261C",
    "labelImageUrl": "/labels/clove-bud-oleoresin-25-percent.png",
    "compositeImageUrl": "/products/clove-bud-oleoresin-25-percent.webp"
  },
  {
    "id": "oleo-coriander",
    "slug": "coriander-oleoresin",
    "name": "Coriander Oleoresin 1.5%",
    "botanicalName": "Coriandrum sativum",
    "category": "OLEORESIN",
    "description": "Full-spectrum coriander oleoresin combining fixed and volatile fractions for stable, intense coriander flavour in processed food applications.",
    "shortSpec": "Oleoresin · India · 1.5% Volatile Oil",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 32,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Coriandrum sativum. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#544622",
    "labelImageUrl": "/labels/coriander-oleoresin.png",
    "compositeImageUrl": "/products/coriander-oleoresin.webp"
  },
  {
    "id": "oleo-cubeb",
    "slug": "cubeb-oleoresin",
    "name": "Cubeb Oleoresin",
    "botanicalName": "Piper cubeba",
    "category": "OLEORESIN",
    "description": "Cubeb pepper oleoresin with characteristic warm, spicy, slightly camphor-like character used in gin botanicals and pharmaceutical preparations.",
    "shortSpec": "Oleoresin · Indonesia/India · Warm-Camphor",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 28,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Piper cubeba. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#8C2518",
    "labelImageUrl": "/labels/cubeb-oleoresin.png",
    "compositeImageUrl": "/products/cubeb-oleoresin.webp"
  },
  {
    "id": "oleo-cumin-seed",
    "slug": "cumin-seed-oleoresin",
    "name": "Cumin Seed Oleoresin",
    "botanicalName": "Cuminum cyminum",
    "category": "OLEORESIN",
    "description": "Concentrated cumin oleoresin capturing the full pungent, warm character for use in Middle Eastern cuisine seasoning and flavouring extracts.",
    "shortSpec": "Oleoresin · Rajasthan, India · Cumin Aldehyde",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 42,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Cuminum cyminum. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#544622",
    "labelImageUrl": "/labels/cumin-seed-oleoresin.png",
    "compositeImageUrl": "/products/cumin-seed-oleoresin.webp"
  },
  {
    "id": "oleo-fenugreek",
    "slug": "fenugreek-oleoresin",
    "name": "Fenugreek Oleoresin",
    "botanicalName": "Trigonella foenum-graecum",
    "category": "OLEORESIN",
    "description": "Maple syrup-character fenugreek oleoresin for flavouring applications in artificial maple, imitation dairy, and savoury product categories.",
    "shortSpec": "Oleoresin · India · Sotolone-Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Trigonella foenum-graecum. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#8C2518",
    "labelImageUrl": "/labels/fenugreek-oleoresin.png",
    "compositeImageUrl": "/products/fenugreek-oleoresin.webp"
  },
  {
    "id": "oleo-fennel",
    "slug": "fennel-oleoresin",
    "name": "Fennel Oleoresin",
    "botanicalName": "Foeniculum vulgare dulce",
    "category": "OLEORESIN",
    "description": "Sweet anise-character fennel oleoresin for stable, heat-processable flavour delivery in beverages, confections, and dietary supplements.",
    "shortSpec": "Oleoresin · India · Anethole-Rich",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Foeniculum vulgare dulce. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#544622",
    "labelImageUrl": "/labels/fennel-oleoresin.png",
    "compositeImageUrl": "/products/fennel-oleoresin.webp"
  },
  {
    "id": "oleo-ginger",
    "slug": "ginger-oleoresin-30-percent",
    "name": "Ginger Oleoresin 30%",
    "botanicalName": "Zingiber officinale",
    "category": "OLEORESIN",
    "description": "30% volatile oil ginger oleoresin for full pungency and heat in beverages, ginger extracts, pharmaceutical antinausea, and confectionery.",
    "shortSpec": "Oleoresin · Cochin, India · 30% Volatile Oil",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Zingiber officinale cultivated in the renowned terroir of Cochin & Wayanad, Kerala. This botanical lot exhibits an exceptional volatile fraction highlighted by Zingiberene (35%+), Curcumene, Gingerols, grown under Organic mountain loam renowned for intense aromatic pungency. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#7E4314",
    "labelImageUrl": "/labels/ginger-oleoresin-30-percent.png",
    "compositeImageUrl": "/products/ginger-oleoresin-30-percent.webp"
  },
  {
    "id": "oleo-mace",
    "slug": "mace-oleoresin-30-percent",
    "name": "Mace Oleoresin 30%",
    "botanicalName": "Myristica fragrans (mace)",
    "category": "OLEORESIN",
    "description": "Full-spectrum mace oleoresin at 30% volatile oil for superior flavour stability in spice blends, bakery, meat processing, and sauces.",
    "shortSpec": "Oleoresin · Indonesia/India · 30% Volatile Oil",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Myristica fragrans (mace). Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#63261C",
    "labelImageUrl": "/labels/mace-oleoresin-30-percent.png",
    "compositeImageUrl": "/products/mace-oleoresin-30-percent.webp"
  },
  {
    "id": "oleo-nutmeg",
    "slug": "nutmeg-oleoresin",
    "name": "Nutmeg Oleoresin",
    "botanicalName": "Myristica fragrans Houttuyn",
    "category": "OLEORESIN",
    "description": "Full-spectrum nutmeg oleoresin with both volatile and fixed components for stable, rich nutmeg flavour in bakery, beverages, and dairy.",
    "shortSpec": "Oleoresin · Indonesia/India · Full-Spectrum",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 40,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Myristica fragrans Houttuyn. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#63261C",
    "labelImageUrl": "/labels/nutmeg-oleoresin.png",
    "compositeImageUrl": "/products/nutmeg-oleoresin.webp"
  },
  {
    "id": "oleo-black-pepper",
    "slug": "oleoresin-black-pepper-40-percent",
    "name": "Oleoresin Black Pepper 40%",
    "botanicalName": "Piper nigrum",
    "category": "OLEORESIN",
    "description": "Premium 40% piperine black pepper oleoresin for bioavailability enhancement in nutraceuticals, and intense pepper flavour in processed foods.",
    "shortSpec": "Oleoresin · Kerala, India · 40% Piperine",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Piper nigrum. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#3B352E",
    "labelImageUrl": "/labels/oleoresin-black-pepper-40-percent.png",
    "compositeImageUrl": "/products/oleoresin-black-pepper-40-percent.webp"
  },
  {
    "id": "oleo-onion",
    "slug": "onion-oleoresin-20-to-1",
    "name": "Onion Oleoresin 20:1",
    "botanicalName": "Allium cepa",
    "category": "OLEORESIN",
    "description": "20:1 concentrated onion oleoresin with full flavour profile for use in savory seasoning, condiment manufacturing, and food processing.",
    "shortSpec": "Oleoresin · India · 20:1 Concentration",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Allium cepa. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#8C2518",
    "labelImageUrl": "/labels/onion-oleoresin-20-to-1.png",
    "compositeImageUrl": "/products/onion-oleoresin-20-to-1.webp"
  },
  {
    "id": "oleo-oregano",
    "slug": "oregano-oleoresin-10-percent",
    "name": "Oregano Oleoresin 10%",
    "botanicalName": "Origanum vulgare",
    "category": "OLEORESIN",
    "description": "High-carvacrol oregano oleoresin at 10% volatile oil. Used in natural antimicrobial supplements, food preservation, and flavoring.",
    "shortSpec": "Oleoresin · Turkey/India · 10% Carvacrol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Origanum vulgare. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#2A4E2B",
    "labelImageUrl": "/labels/oregano-oleoresin-10-percent.png",
    "compositeImageUrl": "/products/oregano-oleoresin-10-percent.webp"
  },
  {
    "id": "oleo-paprika",
    "slug": "paprika-oleoresin-100000-cu",
    "name": "Paprika Oleoresin 100000 CU",
    "botanicalName": "Capsicum annuum (sweet)",
    "category": "OLEORESIN",
    "description": "Deep red 100,000 colour unit paprika oleoresin for natural red food colouring in processed meats, dairy, snacks, and sauces.",
    "shortSpec": "Oleoresin · India/Spain · 100,000 CU",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 52,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Capsicum annuum (sweet). Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#881F17",
    "labelImageUrl": "/labels/paprika-oleoresin-100000-cu.png",
    "compositeImageUrl": "/products/paprika-oleoresin-100000-cu.webp"
  },
  {
    "id": "oleo-parsley-seed",
    "slug": "parsley-seed-oleoresin-10-percent",
    "name": "Parsley Seed Oleoresin 10%",
    "botanicalName": "Petroselinum crispum",
    "category": "OLEORESIN",
    "description": "Parsley seed oleoresin with 10% volatile content for stable herbal flavour in savoury foods, seasoning blends, and pharmaceuticals.",
    "shortSpec": "Oleoresin · India/Europe · 10% Volatile Oil",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 28,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Standardized full-spectrum botanical extract derived from Petroselinum crispum. Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#8C2518",
    "labelImageUrl": "/labels/parsley-seed-oleoresin-10-percent.png",
    "compositeImageUrl": "/products/parsley-seed-oleoresin-10-percent.webp"
  },
  {
    "id": "oleo-rosemary",
    "slug": "rosemary-oleoresin",
    "name": "Rosemary Oleoresin",
    "botanicalName": "Rosmarinus officinalis",
    "category": "OLEORESIN",
    "description": "Antioxidant-rich rosemary oleoresin (rosemary extract) used as a natural food preservative, antioxidant supplement, and flavouring agent.",
    "shortSpec": "Oleoresin · Spain/India · Carnosic Acid Antioxidant",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Rosmarinus officinalis cultivated in the renowned terroir of Nilgiri Hills, Tamil Nadu. This botanical lot exhibits an exceptional volatile fraction highlighted by 1,8-Cineole (45%+), Alpha-Pinene, Camphor, grown under Cool montane elevation with continuous misty cloud cover. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.",
    "benefits": [
      {
        "title": "Thermal Microcirculation Stimulation",
        "description": "Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."
      },
      {
        "title": "Broad-Spectrum Antimicrobial Activity",
        "description": "Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."
      },
      {
        "title": "Standardized Pungency & Flavor Potency",
        "description": "Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."
      }
    ],
    "signatureColor": "#7E2D48",
    "labelImageUrl": "/labels/rosemary-oleoresin.png",
    "compositeImageUrl": "/products/rosemary-oleoresin.webp"
  },
  {
    "id": "organic-bergamot",
    "slug": "organic-bergamot-oil",
    "name": "Organic Bergamot Oil",
    "botanicalName": "Citrus bergamia",
    "category": "ORGANIC_OIL",
    "description": "USDA/EU certified organic bergamot essential oil from sustainably certified Italian farms. Bergapten-free variant available.",
    "shortSpec": "Organic Steam Distilled · Italy · Certified Organic",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 70,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Certified organic extraction of Citrus bergamia grown on certified organic farms adhering to USDA NOP and EU organic standards. Harvested with zero synthetic agrochemicals and steam-distilled under gentle vapor pressure to preserve the full energetic and chemical integrity of the raw botanical.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#8C5008",
    "labelImageUrl": "/labels/organic-bergamot-oil.png",
    "compositeImageUrl": "/products/organic-bergamot-oil.webp"
  },
  {
    "id": "organic-cedarwood",
    "slug": "organic-cedarwood-oil",
    "name": "Organic Cedarwood Oil",
    "botanicalName": "Cedrus deodara",
    "category": "ORGANIC_OIL",
    "description": "Certified organic Himalayan deodara cedarwood oil from responsibly managed forest blocks with full organic chain of custody.",
    "shortSpec": "Organic Steam Distilled · Himalayas · Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Certified organic extraction of Cedrus deodara grown on certified organic farms adhering to USDA NOP and EU organic standards. Harvested with zero synthetic agrochemicals and steam-distilled under gentle vapor pressure to preserve the full energetic and chemical integrity of the raw botanical.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#3B4E32",
    "labelImageUrl": "/labels/organic-cedarwood-oil.png",
    "compositeImageUrl": "/products/organic-cedarwood-oil.webp"
  },
  {
    "id": "organic-chamomile",
    "slug": "organic-chamomile-oil",
    "name": "Organic Chamomile Oil",
    "botanicalName": "Matricaria chamomilla",
    "category": "ORGANIC_OIL",
    "description": "Certified organic blue chamomile with guaranteed chamazulene content from organically farmed Egyptian or German crops.",
    "shortSpec": "Organic Steam Distilled · Egypt/Germany · Blue Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 65,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Certified organic extraction of Matricaria chamomilla grown on certified organic farms adhering to USDA NOP and EU organic standards. Harvested with zero synthetic agrochemicals and steam-distilled under gentle vapor pressure to preserve the full energetic and chemical integrity of the raw botanical.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#2B4B6F",
    "labelImageUrl": "/labels/organic-chamomile-oil.png",
    "compositeImageUrl": "/products/organic-chamomile-oil.webp"
  },
  {
    "id": "organic-cinnamon",
    "slug": "organic-cinnamon-oil",
    "name": "Organic Cinnamon Oil",
    "botanicalName": "Cinnamomum zeylanicum",
    "category": "ORGANIC_OIL",
    "description": "Certified organic Ceylon cinnamon bark oil from USDA/EU certified Sri Lankan organic farms. Full cinnamaldehyde profile.",
    "shortSpec": "Organic Steam Distilled · Sri Lanka · Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Cinnamomum zeylanicum cultivated in the renowned terroir of Malabar Coast & Sri Lanka borderlands. This botanical lot exhibits an exceptional volatile fraction highlighted by Cinnamaldehyde (72%+), Eugenol (8%+), grown under Tropical coastal laterite belt harvested from peeled coppiced shoots. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#74281A",
    "labelImageUrl": "/labels/organic-cinnamon-oil.png",
    "compositeImageUrl": "/products/organic-cinnamon-oil.webp"
  },
  {
    "id": "organic-clove-bud",
    "slug": "organic-clove-bud-oil",
    "name": "Organic Clove Bud Oil",
    "botanicalName": "Syzygium aromaticum",
    "category": "ORGANIC_OIL",
    "description": "Certified organic clove bud oil from Zanzibar or South India with full third-party organic certification and GC-MS report.",
    "shortSpec": "Organic Steam Distilled · Zanzibar · Certified Eugenol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 66,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Syzygium aromaticum cultivated in the renowned terroir of Kanyakumari & Nilgiris, Tamil Nadu. This botanical lot exhibits an exceptional volatile fraction highlighted by Eugenol (86%+), Eugenyl Acetate, grown under Coastal maritime humid microclimate of Southern peninsular India. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#63261C",
    "labelImageUrl": "/labels/organic-clove-bud-oil.png",
    "compositeImageUrl": "/products/organic-clove-bud-oil.webp"
  },
  {
    "id": "organic-eucalyptus",
    "slug": "organic-eucalyptus-oil",
    "name": "Organic Eucalyptus Oil",
    "botanicalName": "Eucalyptus globulus",
    "category": "ORGANIC_OIL",
    "description": "Certified organic eucalyptus oil with 80%+ cineole from Indian USDA-certified organic eucalyptus plantations.",
    "shortSpec": "Organic Steam Distilled · India · 80%+ Cineole",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Eucalyptus globulus cultivated in the renowned terroir of Nilgiri Blue Mountains, South India. This botanical lot exhibits an exceptional volatile fraction highlighted by Eucalyptol / 1,8-Cineole (82%+), Alpha-Pinene, grown under High-altitude eucalyptus plantations harvested since 1843. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#175B50",
    "labelImageUrl": "/labels/organic-eucalyptus-oil.png",
    "compositeImageUrl": "/products/organic-eucalyptus-oil.webp"
  },
  {
    "id": "organic-frankincense",
    "slug": "organic-frankincense-oil",
    "name": "Organic Frankincense Oil (Olibanum)",
    "botanicalName": "Boswellia serrata",
    "category": "ORGANIC_OIL",
    "description": "Certified organic Indian olibanum oil from wild-harvested and certified Boswellia trees in Rajasthan with organic chain-of-custody.",
    "shortSpec": "Organic Steam Distilled · Rajasthan · Wild-Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 74,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Boswellia serrata cultivated in the renowned terroir of Shekhawati / Aravalli Hills, Rajasthan. This botanical lot exhibits an exceptional volatile fraction highlighted by Alpha-Pinene (52%+), Boswellic derivatives, grown under Arid rocky calcareous soils yielding high-resin oleogum. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7C4E25",
    "labelImageUrl": "/labels/organic-frankincense-oil.png",
    "compositeImageUrl": "/products/organic-frankincense-oil.webp"
  },
  {
    "id": "organic-ginger",
    "slug": "organic-ginger-oil",
    "name": "Organic Ginger Oil",
    "botanicalName": "Zingiber officinale",
    "category": "ORGANIC_OIL",
    "description": "Certified organic ginger oil from Cochin, Kerala — full zingiber content from USDA/EU certified ginger farms.",
    "shortSpec": "Organic Steam Distilled · Kerala · Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Zingiber officinale cultivated in the renowned terroir of Cochin & Wayanad, Kerala. This botanical lot exhibits an exceptional volatile fraction highlighted by Zingiberene (35%+), Curcumene, Gingerols, grown under Organic mountain loam renowned for intense aromatic pungency. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7E4314",
    "labelImageUrl": "/labels/organic-ginger-oil.png",
    "compositeImageUrl": "/products/organic-ginger-oil.webp"
  },
  {
    "id": "organic-holy-basil",
    "slug": "organic-holy-basil-oil",
    "name": "Organic Holy Basil Oil",
    "botanicalName": "Ocimum sanctum",
    "category": "ORGANIC_OIL",
    "description": "Sacred certified organic tulsi oil from Ayurvedic certified farms. High eugenol content with complete organic certification documentation.",
    "shortSpec": "Organic Steam Distilled · India · Certified Tulsi",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Certified organic extraction of Ocimum sanctum grown on certified organic farms adhering to USDA NOP and EU organic standards. Harvested with zero synthetic agrochemicals and steam-distilled under gentle vapor pressure to preserve the full energetic and chemical integrity of the raw botanical.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#244E31",
    "labelImageUrl": "/labels/organic-holy-basil-oil.png",
    "compositeImageUrl": "/products/organic-holy-basil-oil.webp"
  },
  {
    "id": "organic-jasmine",
    "slug": "organic-jasmine-oil",
    "name": "Organic Jasmine Oil",
    "botanicalName": "Jasminum grandiflorum",
    "category": "ORGANIC_OIL",
    "description": "Certified organic jasmine absolute from hand-picked Jasminum grandiflorum blossoms. One of the most precious organic florals.",
    "shortSpec": "Organic Solvent Extracted · India · Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 76,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Jasminum grandiflorum cultivated in the renowned terroir of Madurai, Tamil Nadu. This botanical lot exhibits an exceptional volatile fraction highlighted by Benzyl Acetate (25%), Linalool, Jasmone, grown under Geographical Indication (GI) certified dawn flower harvest. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#543C62",
    "labelImageUrl": "/labels/organic-jasmine-oil.png",
    "compositeImageUrl": "/products/organic-jasmine-oil.webp"
  },
  {
    "id": "organic-jojoba",
    "slug": "organic-jojoba-oil",
    "name": "Organic Jojoba Oil",
    "botanicalName": "Simmondsia chinensis",
    "category": "ORGANIC_OIL",
    "description": "Certified organic golden jojoba wax from USDA-certified farms. Exceptional stability and sebum-matching properties for luxury cosmetics.",
    "shortSpec": "Organic Cold Pressed · USA/India · Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 80,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "Distilled from prime Simmondsia chinensis cultivated in the renowned terroir of Thar Desert, Rajasthan. This botanical lot exhibits an exceptional volatile fraction highlighted by Gadoleic Acid (72%), Erucic Acid, Wax Esters, grown under Arid sunshine terroir producing ultra-stable liquid wax esters. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#8E5F12",
    "labelImageUrl": "/labels/organic-jojoba-oil.png",
    "compositeImageUrl": "/products/organic-jojoba-oil.webp"
  },
  {
    "id": "organic-lemon",
    "slug": "organic-lemon-oil",
    "name": "Organic Lemon Oil",
    "botanicalName": "Citrus limon",
    "category": "ORGANIC_OIL",
    "description": "Certified organic cold-pressed lemon peel oil from Italian or Indian certified organic lemon groves.",
    "shortSpec": "Organic Cold Pressed · Italy/India · Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Certified organic extraction of Citrus limon grown on certified organic farms adhering to USDA NOP and EU organic standards. Harvested with zero synthetic agrochemicals and steam-distilled under gentle vapor pressure to preserve the full energetic and chemical integrity of the raw botanical.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#2E5E35",
    "labelImageUrl": "/labels/organic-lemon-oil.png",
    "compositeImageUrl": "/products/organic-lemon-oil.webp"
  },
  {
    "id": "organic-lemongrass",
    "slug": "organic-lemongrass-oil",
    "name": "Organic Lemongrass Oil",
    "botanicalName": "Cymbopogon flexuosus",
    "category": "ORGANIC_OIL",
    "description": "Certified organic lemongrass oil from Kerala certified organic farms with full volatile citral content and traceability.",
    "shortSpec": "Organic Steam Distilled · Kerala · Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 76,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Cymbopogon flexuosus cultivated in the renowned terroir of Cochin / Wayanad, Kerala. This botanical lot exhibits an exceptional volatile fraction highlighted by Citral (78%+), Geraniol, Myrcene, grown under Malabar tropical coastal terroir receiving dual monsoons. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#2E5E35",
    "labelImageUrl": "/labels/organic-lemongrass-oil.png",
    "compositeImageUrl": "/products/organic-lemongrass-oil.webp"
  },
  {
    "id": "organic-moringa",
    "slug": "organic-moringa-oil",
    "name": "Organic Moringa Oil",
    "botanicalName": "Moringa oleifera",
    "category": "ORGANIC_OIL",
    "description": "Certified organic moringa (ben oil) from USDA-certified Indian farms with full chain of custody. Ultra-stable luxury carrier.",
    "shortSpec": "Organic Cold Pressed · India · Certified Ben Oil",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 62,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "Distilled from prime Moringa oleifera cultivated in the renowned terroir of Madurai & Dindigul, Tamil Nadu. This botanical lot exhibits an exceptional volatile fraction highlighted by Oleic Acid (73%+), Behenic Acid, grown under Semi-arid tropical plains yielding cold-hardy nutrient-rich seeds. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#5C5624",
    "labelImageUrl": "/labels/organic-moringa-oil.png",
    "compositeImageUrl": "/products/organic-moringa-oil.webp"
  },
  {
    "id": "organic-neem",
    "slug": "organic-neem-oil",
    "name": "Organic Neem Oil",
    "botanicalName": "Azadirachta indica",
    "category": "ORGANIC_OIL",
    "description": "Certified organic cold-pressed neem oil from USDA/EU certified Indian farms. Full azadirachtin profile for agriculture and personal care.",
    "shortSpec": "Organic Cold Pressed · India · Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "Distilled from prime Azadirachta indica cultivated in the renowned terroir of Bundelkhand & Central Deccan, India. This botanical lot exhibits an exceptional volatile fraction highlighted by Azadirachtin A/B, Nimbin, Salannin, grown under Sun-baked drought-tolerant native woodland agroforestry. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#324A2A",
    "labelImageUrl": "/labels/organic-neem-oil.png",
    "compositeImageUrl": "/products/organic-neem-oil.webp"
  },
  {
    "id": "organic-orange",
    "slug": "organic-orange-oil",
    "name": "Organic Orange Oil",
    "botanicalName": "Citrus sinensis",
    "category": "ORGANIC_OIL",
    "description": "Certified organic sweet orange peel oil from Indian or Brazilian certified organic orange groves. High limonene, full organic paperwork.",
    "shortSpec": "Organic Cold Pressed · India/Brazil · Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 75,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Certified organic extraction of Citrus sinensis grown on certified organic farms adhering to USDA NOP and EU organic standards. Harvested with zero synthetic agrochemicals and steam-distilled under gentle vapor pressure to preserve the full energetic and chemical integrity of the raw botanical.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#8C5008",
    "labelImageUrl": "/labels/organic-orange-oil.png",
    "compositeImageUrl": "/products/organic-orange-oil.webp"
  },
  {
    "id": "organic-peppermint",
    "slug": "organic-peppermint-oil",
    "name": "Organic Peppermint Oil",
    "botanicalName": "Mentha piperita",
    "category": "ORGANIC_OIL",
    "description": "Certified organic peppermint oil from Uttar Pradesh certified organic mentha farms. High natural menthol with complete organic documentation.",
    "shortSpec": "Organic Steam Distilled · Uttar Pradesh · Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 82,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Mentha piperita cultivated in the renowned terroir of Uttar Pradesh Terai alluvial plains. This botanical lot exhibits an exceptional volatile fraction highlighted by Menthol (45%+), Menthone (20%+), grown under Rich Gangetic loam with high summer solar radiation. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#1B5E3C",
    "labelImageUrl": "/labels/organic-peppermint-oil.png",
    "compositeImageUrl": "/products/organic-peppermint-oil.webp"
  },
  {
    "id": "organic-rose",
    "slug": "organic-rose-oil",
    "name": "Organic Rose Oil",
    "botanicalName": "Rosa damascena",
    "category": "ORGANIC_OIL",
    "description": "Certified organic rose otto distilled from certified Damascus rose gardens in Bulgaria or certified Indian rose fields.",
    "shortSpec": "Organic Steam Distilled · Bulgaria/India · Certified Otto",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 86,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Distilled from prime Rosa damascena cultivated in the renowned terroir of Pushkar, Rajasthan & Aligarh, UP. This botanical lot exhibits an exceptional volatile fraction highlighted by Citronellol (38%), Geraniol (20%), Rose Oxide, grown under Chaitri Rose blooming cycle harvested before sunrise. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7E2D48",
    "labelImageUrl": "/labels/organic-rose-oil.png",
    "compositeImageUrl": "/products/organic-rose-oil.webp"
  },
  {
    "id": "organic-rosemary",
    "slug": "organic-rosemary-oil",
    "name": "Organic Rosemary Oil",
    "botanicalName": "Rosmarinus officinalis",
    "category": "ORGANIC_OIL",
    "description": "Certified organic rosemary oil from USDA-certified Spanish or Indian farms. Cineole chemotype, full analytical documentation.",
    "shortSpec": "Organic Steam Distilled · Spain/India · Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 70,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Rosmarinus officinalis cultivated in the renowned terroir of Nilgiri Hills, Tamil Nadu. This botanical lot exhibits an exceptional volatile fraction highlighted by 1,8-Cineole (45%+), Alpha-Pinene, Camphor, grown under Cool montane elevation with continuous misty cloud cover. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7E2D48",
    "labelImageUrl": "/labels/organic-rosemary-oil.png",
    "compositeImageUrl": "/products/organic-rosemary-oil.webp"
  },
  {
    "id": "organic-pomegranate",
    "slug": "organic-pomegranate-seed-oil",
    "name": "Organic Pomegranate Seed Oil",
    "botanicalName": "Punica granatum",
    "category": "ORGANIC_OIL",
    "description": "Certified organic pomegranate seed oil from Indian USDA-certified pomegranate farms. Full punicic acid (CLnA) profile with organic cert.",
    "shortSpec": "Organic Cold Pressed · India · Certified Punicic Acid",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 65,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Selection & De-hulling",
        "description": "Hand-sorted premium botanical seeds and nuts inspected for moisture and mold."
      },
      {
        "stepNumber": 2,
        "title": "Cold Expeller Pressing",
        "description": "Single-pass mechanical pressing strictly kept under 42°C to preserve fatty acids."
      },
      {
        "stepNumber": 3,
        "title": "Sediment Decantation",
        "description": "Natural gravity settling followed by micro-membrane filtration for liquid clarity."
      },
      {
        "stepNumber": 4,
        "title": "Nitrogen Flushing",
        "description": "Packaged under inert nitrogen blanket to prevent lipid peroxidation during export."
      }
    ],
    "overview": "Certified organic extraction of Punica granatum grown on certified organic farms adhering to USDA NOP and EU organic standards. Harvested with zero synthetic agrochemicals and steam-distilled under gentle vapor pressure to preserve the full energetic and chemical integrity of the raw botanical.",
    "history": "Distilled from sustainably cultivated harvests in India under strict WHO-GMP and ISO 22000 processing protocols. Packaged for international container and air freight in sealed UN-rated drums.",
    "benefits": [
      {
        "title": "Aromatherapy & Olfactory Depth",
        "description": "Provides a rich, true-to-nature aromatic profile suited for fine fragrance, diffusers, and therapeutic blends."
      },
      {
        "title": "Skincare & Topical Formulations",
        "description": "Natural balancing and cleansing properties for cosmetic formulations, facial oils, and body washes."
      },
      {
        "title": "Industrial & Personal Care Applications",
        "description": "Adds natural antimicrobial actives and clean plant aroma to soaps, lotions, and home care products."
      }
    ],
    "signatureColor": "#7A2E3E",
    "labelImageUrl": "/labels/organic-pomegranate-seed-oil.png",
    "compositeImageUrl": "/products/organic-pomegranate-seed-oil.webp"
  },
  {
    "id": "ayur-angelica-root",
    "slug": "ayurvedic-angelica-root-oil",
    "name": "Angelica Root Oil (Ayurvedic)",
    "botanicalName": "Angelica archangelica",
    "category": "AYURVEDIC",
    "description": "Used in Ayurvedic and Unani systems for digestive complaints, respiratory conditions, and as an aromatic nervine tonic.",
    "shortSpec": "Ayurvedic Grade · India · Digestive & Nervine",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Authentic Ayurvedic grade botanical oil of Angelica archangelica, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Classical Tridoshic Harmonization",
        "description": "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."
      },
      {
        "title": "Adaptogenic & Nervine Vitality",
        "description": "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."
      },
      {
        "title": "Dermal Detoxification & Tissue Tonification",
        "description": "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."
      }
    ],
    "signatureColor": "#844212",
    "labelImageUrl": "/labels/ayurvedic-angelica-root-oil.png",
    "compositeImageUrl": "/products/ayurvedic-angelica-root-oil.webp"
  },
  {
    "id": "ayur-calamus",
    "slug": "ayurvedic-calamus-oil",
    "name": "Calamus Oil (Vacha)",
    "botanicalName": "Acorus calamus",
    "category": "AYURVEDIC",
    "description": "Vacha — one of Ayurveda's most revered herbs for the mind. Calamus oil used for cognitive enhancement and Panchakarma preparations.",
    "shortSpec": "Ayurvedic Grade · India · Vacha/Cognitive",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 45,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Authentic Ayurvedic grade botanical oil of Acorus calamus, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Classical Tridoshic Harmonization",
        "description": "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."
      },
      {
        "title": "Adaptogenic & Nervine Vitality",
        "description": "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."
      },
      {
        "title": "Dermal Detoxification & Tissue Tonification",
        "description": "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."
      }
    ],
    "signatureColor": "#844212",
    "labelImageUrl": "/labels/ayurvedic-calamus-oil.png",
    "compositeImageUrl": "/products/ayurvedic-calamus-oil.webp"
  },
  {
    "id": "ayur-costus-root",
    "slug": "ayurvedic-costus-root-oil",
    "name": "Costus Root Oil (Kuth)",
    "botanicalName": "Saussurea costus",
    "category": "AYURVEDIC",
    "description": "Kuth root oil — a highly sacred Ayurvedic botanical with anti-inflammatory, anti-asthmatic, and deep fixative aromatic properties.",
    "shortSpec": "Ayurvedic Grade · India · Kuth Sacred",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Authentic Ayurvedic grade botanical oil of Saussurea costus, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Classical Tridoshic Harmonization",
        "description": "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."
      },
      {
        "title": "Adaptogenic & Nervine Vitality",
        "description": "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."
      },
      {
        "title": "Dermal Detoxification & Tissue Tonification",
        "description": "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."
      }
    ],
    "signatureColor": "#844212",
    "labelImageUrl": "/labels/ayurvedic-costus-root-oil.png",
    "compositeImageUrl": "/products/ayurvedic-costus-root-oil.webp"
  },
  {
    "id": "ayur-cypress",
    "slug": "ayurvedic-cypress-oil",
    "name": "Cypress Oil (Ayurvedic)",
    "botanicalName": "Cupressus sempervirens",
    "category": "AYURVEDIC",
    "description": "Used in Ayurvedic applications for lymphatic circulation, varicose vein management, and respiratory support preparations.",
    "shortSpec": "Ayurvedic Grade · India · Circulatory Support",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Authentic Ayurvedic grade botanical oil of Cupressus sempervirens, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Classical Tridoshic Harmonization",
        "description": "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."
      },
      {
        "title": "Adaptogenic & Nervine Vitality",
        "description": "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."
      },
      {
        "title": "Dermal Detoxification & Tissue Tonification",
        "description": "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."
      }
    ],
    "signatureColor": "#3B4E32",
    "labelImageUrl": "/labels/ayurvedic-cypress-oil.png",
    "compositeImageUrl": "/products/ayurvedic-cypress-oil.webp"
  },
  {
    "id": "ayur-cypriol",
    "slug": "ayurvedic-cypriol-oil",
    "name": "Cypriol Oil / Nagarmotha (Ayurvedic)",
    "botanicalName": "Cyperus scariosus",
    "category": "AYURVEDIC",
    "description": "Nagarmotha — classical Ayurvedic herb for Pitta and skin conditions. Earthy, oud-like oil used in skin treatments and attars.",
    "shortSpec": "Ayurvedic Grade · India · Nagarmotha/Pitta",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Authentic Ayurvedic grade botanical oil of Cyperus scariosus, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Classical Tridoshic Harmonization",
        "description": "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."
      },
      {
        "title": "Adaptogenic & Nervine Vitality",
        "description": "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."
      },
      {
        "title": "Dermal Detoxification & Tissue Tonification",
        "description": "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."
      }
    ],
    "signatureColor": "#4E3624",
    "labelImageUrl": "/labels/ayurvedic-cypriol-oil.png",
    "compositeImageUrl": "/products/ayurvedic-cypriol-oil.webp"
  },
  {
    "id": "ayur-gaultheria",
    "slug": "ayurvedic-gaultheria-oil",
    "name": "Gaultheria (Indian Wintergreen)",
    "botanicalName": "Gaultheria fragrantissima",
    "category": "AYURVEDIC",
    "description": "Gandhapura — Himalayan wintergreen rich in methyl salicylate. Classical Ayurvedic external application for joint pain and muscle relief.",
    "shortSpec": "Ayurvedic Grade · Himalayas · Methyl Salicylate Pain Relief",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Authentic Ayurvedic grade botanical oil of Gaultheria fragrantissima, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Classical Tridoshic Harmonization",
        "description": "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."
      },
      {
        "title": "Adaptogenic & Nervine Vitality",
        "description": "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."
      },
      {
        "title": "Dermal Detoxification & Tissue Tonification",
        "description": "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."
      }
    ],
    "signatureColor": "#1E544A",
    "labelImageUrl": "/labels/ayurvedic-gaultheria-oil.png",
    "compositeImageUrl": "/products/ayurvedic-gaultheria-oil.webp"
  },
  {
    "id": "ayur-hedychium",
    "slug": "ayurvedic-hedychium-oil",
    "name": "Hedychium Oil (Kapurkachri)",
    "botanicalName": "Hedychium spicatum",
    "category": "AYURVEDIC",
    "description": "Kapurkachri — Himalayan ginger lily used in classical Ayurveda for Kapha balance, skin brightening, and aromatic ritual preparations.",
    "shortSpec": "Ayurvedic Grade · Himalayas · Kapha Balance",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Authentic Ayurvedic grade botanical oil of Hedychium spicatum, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Classical Tridoshic Harmonization",
        "description": "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."
      },
      {
        "title": "Adaptogenic & Nervine Vitality",
        "description": "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."
      },
      {
        "title": "Dermal Detoxification & Tissue Tonification",
        "description": "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."
      }
    ],
    "signatureColor": "#844212",
    "labelImageUrl": "/labels/ayurvedic-hedychium-oil.png",
    "compositeImageUrl": "/products/ayurvedic-hedychium-oil.webp"
  },
  {
    "id": "ayur-holy-basil",
    "slug": "ayurvedic-holy-basil-oil",
    "name": "Holy Basil / Tulsi Oil (Ayurvedic)",
    "botanicalName": "Ocimum sanctum",
    "category": "AYURVEDIC",
    "description": "Tulsi — the queen of Ayurvedic herbs. Sacred to Vaishnavism and clinically validated for adaptogenic, immunomodulatory, and antimicrobial activity.",
    "shortSpec": "Ayurvedic Grade · India · Tulsi Sacred Adaptogen",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Authentic Ayurvedic grade botanical oil of Ocimum sanctum, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Classical Tridoshic Harmonization",
        "description": "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."
      },
      {
        "title": "Adaptogenic & Nervine Vitality",
        "description": "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."
      },
      {
        "title": "Dermal Detoxification & Tissue Tonification",
        "description": "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."
      }
    ],
    "signatureColor": "#244E31",
    "labelImageUrl": "/labels/ayurvedic-holy-basil-oil.png",
    "compositeImageUrl": "/products/ayurvedic-holy-basil-oil.webp"
  },
  {
    "id": "ayur-marjoram",
    "slug": "ayurvedic-marjoram-oil",
    "name": "Marjoram Oil (Ayurvedic)",
    "botanicalName": "Origanum majorana",
    "category": "AYURVEDIC",
    "description": "Ayurvedic grade marjoram for Vata-pacifying massage, digestive support, and as part of rejuvenation (Rasayana) preparations.",
    "shortSpec": "Ayurvedic Grade · India · Vata Balance",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 40,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Authentic Ayurvedic grade botanical oil of Origanum majorana, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Classical Tridoshic Harmonization",
        "description": "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."
      },
      {
        "title": "Adaptogenic & Nervine Vitality",
        "description": "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."
      },
      {
        "title": "Dermal Detoxification & Tissue Tonification",
        "description": "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."
      }
    ],
    "signatureColor": "#2A4E2B",
    "labelImageUrl": "/labels/ayurvedic-marjoram-oil.png",
    "compositeImageUrl": "/products/ayurvedic-marjoram-oil.webp"
  },
  {
    "id": "ayur-myrrh",
    "slug": "ayurvedic-myrrh-oil",
    "name": "Myrrh Oil / Bol (Ayurvedic)",
    "botanicalName": "Commiphora myrrha",
    "category": "AYURVEDIC",
    "description": "Bol — myrrh gum resin oil with deep Ayurvedic applications for wound healing, oral care, anti-ageing, and spiritual purification rituals.",
    "shortSpec": "Ayurvedic Grade · India/East Africa · Wound & Oral",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Authentic Ayurvedic grade botanical oil of Commiphora myrrha, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Classical Tridoshic Harmonization",
        "description": "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."
      },
      {
        "title": "Adaptogenic & Nervine Vitality",
        "description": "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."
      },
      {
        "title": "Dermal Detoxification & Tissue Tonification",
        "description": "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."
      }
    ],
    "signatureColor": "#7C4E25",
    "labelImageUrl": "/labels/ayurvedic-myrrh-oil.png",
    "compositeImageUrl": "/products/ayurvedic-myrrh-oil.webp"
  },
  {
    "id": "ayur-oregano",
    "slug": "ayurvedic-oregano-oil",
    "name": "Oregano Oil (Ayurvedic)",
    "botanicalName": "Origanum vulgare",
    "category": "AYURVEDIC",
    "description": "Ajwain ka patta — Ayurvedic grade wild oregano for immune support, respiratory care, and natural antimicrobial formulations.",
    "shortSpec": "Ayurvedic Grade · India · Immune & Respiratory",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Authentic Ayurvedic grade botanical oil of Origanum vulgare, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Classical Tridoshic Harmonization",
        "description": "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."
      },
      {
        "title": "Adaptogenic & Nervine Vitality",
        "description": "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."
      },
      {
        "title": "Dermal Detoxification & Tissue Tonification",
        "description": "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."
      }
    ],
    "signatureColor": "#2A4E2B",
    "labelImageUrl": "/labels/ayurvedic-oregano-oil.png",
    "compositeImageUrl": "/products/ayurvedic-oregano-oil.webp"
  },
  {
    "id": "ayur-boswellia",
    "slug": "boswellia-serrata-oil",
    "name": "Boswellia Serrata Oil (Shallaki)",
    "botanicalName": "Boswellia serrata",
    "category": "AYURVEDIC",
    "description": "Shallaki — Indian frankincense oil from Boswellia serrata with high boswellic acid content. Classical Ayurvedic anti-arthritic and anti-inflammatory.",
    "shortSpec": "Ayurvedic Grade · India · Boswellic Acid Anti-Inflammatory",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "featured": true,
    "overview": "Authentic Ayurvedic grade botanical oil of Boswellia serrata, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Classical Tridoshic Harmonization",
        "description": "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."
      },
      {
        "title": "Adaptogenic & Nervine Vitality",
        "description": "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."
      },
      {
        "title": "Dermal Detoxification & Tissue Tonification",
        "description": "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."
      }
    ],
    "signatureColor": "#844212",
    "labelImageUrl": "/labels/boswellia-serrata-oil.png",
    "compositeImageUrl": "/products/boswellia-serrata-oil.webp"
  },
  {
    "id": "ayur-valerian",
    "slug": "ayurvedic-valerian-oil",
    "name": "Valerian Oil / Tagara (Ayurvedic)",
    "botanicalName": "Valeriana officinalis",
    "category": "AYURVEDIC",
    "description": "Tagara — classical Ayurvedic nervine sedative used for sleep disorders, anxiety, and Vata-aggravated neurological conditions.",
    "shortSpec": "Ayurvedic Grade · India/Himalayas · Tagara Sedative",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 45,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Authentic Ayurvedic grade botanical oil of Valeriana officinalis, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Classical Tridoshic Harmonization",
        "description": "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."
      },
      {
        "title": "Adaptogenic & Nervine Vitality",
        "description": "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."
      },
      {
        "title": "Dermal Detoxification & Tissue Tonification",
        "description": "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."
      }
    ],
    "signatureColor": "#844212",
    "labelImageUrl": "/labels/ayurvedic-valerian-oil.png",
    "compositeImageUrl": "/products/ayurvedic-valerian-oil.webp"
  },
  {
    "id": "ayur-vetiver",
    "slug": "ayurvedic-vetiver-oil",
    "name": "Vetiver Oil / Khus (Ayurvedic)",
    "botanicalName": "Chrysopogon zizanioides",
    "category": "AYURVEDIC",
    "description": "Khus — sacred Indian vetiver oil for Pitta balance, mental cooling, and as a tonic for the nervous system and skin conditions.",
    "shortSpec": "Ayurvedic Grade · Rajasthan · Khus/Pitta Cooling",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 65,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Distilled from prime Chrysopogon zizanioides cultivated in the renowned terroir of Bharatpur, Rajasthan & Bundelkhand. This botanical lot exhibits an exceptional volatile fraction highlighted by Khusimol (18%+), Vetivone, Isovalencenol, grown under Heavy alluvial clay soil where root systems anchor 3 meters deep. Revered across industrial fragrance compounding, luxury skincare, and therapeutic wellness formulations.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Classical Tridoshic Harmonization",
        "description": "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."
      },
      {
        "title": "Adaptogenic & Nervine Vitality",
        "description": "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."
      },
      {
        "title": "Dermal Detoxification & Tissue Tonification",
        "description": "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."
      }
    ],
    "signatureColor": "#4E3624",
    "labelImageUrl": "/labels/ayurvedic-vetiver-oil.png",
    "compositeImageUrl": "/products/ayurvedic-vetiver-oil.webp"
  },
  {
    "id": "ayur-zanthoxylum",
    "slug": "ayurvedic-zanthoxylum-oil",
    "name": "Zanthoxylum Oil / Tejphal (Ayurvedic)",
    "botanicalName": "Zanthoxylum armatum",
    "category": "AYURVEDIC",
    "description": "Tejphal — Himalayan Ayurvedic spice oil used for dental care, digestive support, and as a warming nervine in classical preparations.",
    "shortSpec": "Ayurvedic Grade · Himalayas · Tejphal Dental & Digestive",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Authentic Ayurvedic grade botanical oil of Zanthoxylum armatum, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Classical Tridoshic Harmonization",
        "description": "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."
      },
      {
        "title": "Adaptogenic & Nervine Vitality",
        "description": "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."
      },
      {
        "title": "Dermal Detoxification & Tissue Tonification",
        "description": "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."
      }
    ],
    "signatureColor": "#844212",
    "labelImageUrl": "/labels/ayurvedic-zanthoxylum-oil.png",
    "compositeImageUrl": "/products/ayurvedic-zanthoxylum-oil.webp"
  },
  {
    "id": "ayur-zedoaria",
    "slug": "zedoaria-oil",
    "name": "Zedoaria Oil (Kachur)",
    "botanicalName": "Curcuma zedoaria",
    "category": "AYURVEDIC",
    "description": "Kachur — a close relative of turmeric used in Ayurvedic preparations for liver conditions, digestive disorders, and as an aromatic anti-inflammatory.",
    "shortSpec": "Ayurvedic Grade · India · Kachur/Liver-Digestive",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 28,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Harvested at peak seasonal maturity from verified agricultural contract farms across India."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Direct steam distilled in 316-grade stainless steel distillation units under controlled temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Filtration",
        "description": "Gravity decanting and fine-mesh filtration to remove condensation moisture and natural particulates."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Laboratory Analysis",
        "description": "Complete GC-MS analysis verifying specific gravity, optical rotation, refractive index, and chemical purity."
      }
    ],
    "overview": "Authentic Ayurvedic grade botanical oil of Curcuma zedoaria, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols.",
    "history": "Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by multi-generational farming communities.",
    "benefits": [
      {
        "title": "Classical Tridoshic Harmonization",
        "description": "Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."
      },
      {
        "title": "Adaptogenic & Nervine Vitality",
        "description": "Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."
      },
      {
        "title": "Dermal Detoxification & Tissue Tonification",
        "description": "Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."
      }
    ],
    "signatureColor": "#7E4314",
    "labelImageUrl": "/labels/zedoaria-oil.png",
    "compositeImageUrl": "/products/zedoaria-oil.webp"
  }
];

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
    moq: row.moq ?? "25 kg",
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
