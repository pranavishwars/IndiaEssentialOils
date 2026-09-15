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

export const SLUG_TO_CATEGORY: Record<string, string> = {
  ...Object.fromEntries(Object.entries(CATEGORY_SLUGS).map(([k, v]) => [v, k])),
  "floral-water": "FLORAL_WATER",
  "floral-waters": "FLORAL_WATER",
  "floral-absolute-oils": "FLORAL_ABSOLUTE",
  "floral-absolutes": "FLORAL_ABSOLUTE",
};

export function getCategorySlug(category: string): string {
  return CATEGORY_SLUGS[category] || "essential-oils";
}

export const INITIAL_PRODUCTS: Product[] = [
  {
    "id": "prod-ambrette-seed",
    "slug": "ambrette-seed-oil",
    "name": "Ambrette Seed Oil",
    "botanicalName": "Abelmoschus Moschatus",
    "category": "ESSENTIAL_OIL",
    "description": "Ambrette Seed Oil (Abelmoschus Moschatus), extracted by steam distillation. CAS #: 8015-62-1,. F.E.M.A. : 2051.",
    "shortSpec": "Steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Ambrette Seed Oil (Abelmoschus Moschatus), extracted by steam distillation. CAS #: 8015-62-1,. F.E.M.A. : 2051. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Amberette Seed Oil is the major ingredient in the high class perfumery. Wonderful sweet musky smell of this essential oil is perfect choice in many aromatherapy preparation and widely used by the experts. Used as bath oil as well. It is also known as an excellent cure fir many ailment related to stomach such as indigestion, acidity, cramps and other disorders. It relieve the mental fatigue, anxiety, depression or tensions. This oil has excellent qualities that induce positive thoughts to your mind and elevates your mood,. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Amberette Seed Oil is the major ingredient in the high class perfumery. Wonderful sweet musky smell of this essential oil is perfect choice in many aromatherapy preparation and widely used by the experts."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Used as bath oil as well. It is also known as an excellent cure fir many ailment related to stomach such as indigestion, acidity, cramps and other disorders."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It relieve the mental fatigue, anxiety, depression or tensions. This oil has excellent qualities that induce positive thoughts to your mind and elevates your mood."
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
    "description": "Amyris oil is obtained by steam distillation of wood from this tree that belongs to the rue family. The oil has a pleasantly woody with a balsamic touch.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Amyris Oil (Amyris balsamifera), extracted by steam distillation. CAS #: 8015-65-4,. F.E.M.A. : 2018. Specific Gravity: 0.940 - 0.980 @ 72&#176;F. Refractive Index: 1.498 - 1.526 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It has antiseptic, balsamic, sedative &amp; calming. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It has antiseptic, balsamic, sedative & calming properties and aids in providing relief from stress. It also acts as muscle relaxant, soothing agent, emollient and stimulant."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Further, it is also used as a room fragrance or mood fragrance, fixative or as component of soap fragrance. It also has limited use in flavoring work especially liqueurs."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Amyris essential oil has been used for wound washes, influenza, childbirth recovery, diarrhea."
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
    "botanicalName": "Angelica Archangelica",
    "category": "ESSENTIAL_OIL",
    "description": "Angelica Root Essential Oil is a soft oil which is distilled from the dried roots, rhizome and seeds of Angelica plant.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 42,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Angelica Root Oil (Angelica Archangelica), extracted by steam distillation. CAS #: 8015-64-3,. F.E.M.A. : 2088. Specific Gravity: 0.85000 - 0.88000 @ 20&#176;C. Refractive Index: 1.46900 - 1.47800 @ 20.00&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Angelica Root Essential Oil is well-recognized for effectively treating diverse ailments and diseases. For centuries it has been popular for promoting fertility as well as curing the respiratory and digestive problems. The other various ailments, in which Angelica Root Essential Oil is recommend include accumulation of toxins, bronchitis, coughs, colds, dull &amp; congested skin, gout, fatigue, indigestion, migraine, stress related disorders as well as water retention problems. Angelica Root Essential Oil has been used in Folk Medicine throughout history due to its antibacterial &amp; anti-fungal. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Angelica Root Essential Oil is well-recognized for effectively treating diverse ailments and diseases. For centuries it has been popular for promoting fertility as well as curing respiratory and digestive problems. Other ailments in which Angelica Root Essential Oil is recommended include accumulation of toxins, bronchitis, coughs, colds, dull and congested skin, gout, fatigue, and indigestion."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Angelica Root Essential Oil has been used in Folk Medicine throughout history due to its antibacterial & anti-fungal properties. This oil is great for giving your constitution a boost by invigorating the lymphatic system. It generally detoxifies the body."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It can also be used to great effect on respiratory ailments and is a great help in stomach related problems; including flatulence, dyspepsia, nausea, discomfort and indigestion."
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
    "botanicalName": "Artemisia Vulgaris",
    "category": "ESSENTIAL_OIL",
    "description": "Armoise is shrub-like plant that has hairy, silvery leaves that can be flourished in parched conditions.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Armoise Oil (Artemisia Vulgaris), extracted by steam distillation. CAS #: 8008-93-3,. Specific Gravity: 0.940 - 0.980 @ 72&#176;F. Refractive Index: 1.498 - 1.526 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Armoise essential oil is very efficient in assassination of intestinal worms. It invigorates digestive system of the body. Armoise essential oil also works well as a local anesthetic for rheumatism, neuralgia, and arthritis. It also has the anesthetic and insomnia. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Armoise essential oil is very efficient in assassination of intestinal worms. It invigorates digestive system of the body."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Armoise essential oil also works well as a local anesthetic for rheumatism, neuralgia, and arthritis. It also has the anesthetic and insomnia properties Used for painful or delayed maturation cycle Has great healing capacity Used in fragrances in soaps, colognes, perfumery."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It has anesthetic and insomnia properties that make it effective for the treatment of the aforementioned problems."
      }
    ],
    "signatureColor": "#3E4C26",
    "labelImageUrl": "/labels/armoise-oil.png",
    "compositeImageUrl": "/products/armoise-oil.webp"
  },
  {
    "id": "prod-basil",
    "slug": "basil-oil",
    "name": "Basil Oil (Ocimum Basilicum)",
    "botanicalName": "Ocimum Basilicum",
    "category": "ESSENTIAL_OIL",
    "description": "Basil, originally from India[1], is a half-hardy annual plant, best known as a culinary herb prominently featured in Italian cuisine, and also plays a major role in theNortheast Asian cuisine",
    "shortSpec": "Steam Distillation Description : Basil, originally from India[1], is a half-hardy annual plant, best known as a culinary herb prominently featured in Italian cuisine, and also plays a major role in theNortheast Asian cuisine",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 62,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Basil Oil (Ocimum Basilicum) (Ocimum Basilicum), extracted by steam distillation description : basil, originally from india[1], is a half-hardy annual plant, best known as a culinary herb prominently featured in italian cuisine, and also plays a major role in thenortheast asian cuisine. CAS #: 8015-73-4,. F.E.M.A. : 2119. Specific Gravity: 0.89000 - 0.93000 @ 25&#176;C. Refractive Index: 1.47950 - 1.48950 @ 20 &#176;C Eucalyptus globulus. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It also acts as a powerful antiseptic and mostly used for inhalation, baths, massages. Basil essential oil is used typically to massage the skin. Asil is particularly favored with tomatoes, but can also be used to flavor salads, stuffings, sauces and omelette&#146;s as well as soups (pistou) and pasta dishes. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It also acts as a powerful antiseptic and mostly used for inhalation, baths, massages."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Basil essential oil is used typically to massage the skin."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Asil is particularly favored with tomatoes, but can also be used to flavor salads, stuffings, sauces and omelette's as well as soups (pistou) and pasta dishes."
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
    "description": "Betel Leaf Oil is derived from Betal Leaf plant leaves that yield this aromatic essential oil. The heart-shaped leaves have distinct pleasant aroma &amp; are commonly chewed alone or with other plant materials.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 34,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Betel Leaf Oil (Piper betle), extracted by steam distillation. CAS #: 84775-81-5. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: The betel leaf essential oil is valued in Ayurveda for its stimulating, carminative, aromatic, antiseptic, warming and aphrodisiac. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "The betel leaf essential oil is valued in Ayurveda for its stimulating, carminative, aromatic, antiseptic, warming and aphrodisiac properties."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It has several medicinal applications among natives and is especially used to harden gums, preserve teeth and sweeten breath."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It also improves voice and is reputed aphrodisiac."
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
    "botanicalName": "Betula alba",
    "category": "ESSENTIAL_OIL",
    "description": "The birch tree is native to North America, Asia and grows up to 15-20 meters in height. It has slender branches, silver-white bark broken into scales and light green oval leaves.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 28,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Birch Tar Oil (Betula alba), extracted by steam distillation. CAS #: 8001-88-5,. Specific Gravity: 1.13000 - 1.35000 @ 25&#176;C. Refractive Index: 1.52200 - 1.59000 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Birch Tar Essential Oil is used for external application in the form of ointment (10%) or soap (10%). It can be used in treatments for eczema, psoriasis, and general dry skin. When mixed with other essential oils it is used as an insect repellent. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Birch Tar Essential Oil is used for external application in the form of ointment (10%) or soap (10%)."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It can be used in treatments for eczema, psoriasis, and general dry skin."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "When mixed with other essential oils it is used as an insect repellent."
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
    "description": "It is distilled from the peel of the fruit. It has a lively, fruity, sweet aroma much aromatic than sweet orange.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Bitter Orange Oil (Citrus aurantium), extracted by cold pressed. CAS #: 68916-04-1. Specific Gravity: 0.84500 - 0.85100 @ 25.00 &#176;C. Refractive Index: 1.46900 - 1.47800 @ 20.00 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It finds application in providing relief from colds, dull skin, constipation, flatulence, gums, flu, mouth, slow digestion and stress. It is useful bronchitis, colds, constipation, dull and oily complexions, flu, flatulence, nervous tension, palpitations, poor circulation, slow digestion, spasm, water retention. It is used in high class perfumery &amp; other fragrances. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It finds application in providing relief from colds, dull skin, constipation, flatulence, gums, flu, mouth, slow digestion and stress."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is useful bronchitis, colds, constipation, dull and oily complexions, flu, flatulence, nervous tension, palpitations, poor circulation, slow digestion, spasm, water retention."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is used in high class perfumery & other fragrances."
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
    "botanicalName": "Nigella Sativa",
    "category": "ESSENTIAL_OIL",
    "description": "Nigella sativa is an annual flowering plant, native to south and southwest Asia. The seed &amp; its oil are used as a spice &amp; also for medicinal purpose.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 70,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Black Seed Oil (Nigella Sativa), extracted by cold pressed. CAS #: 8014-13-9,. F.E.M.A. : 2343. Specific Gravity: 0.90000 - 0.93500 @ 25.00 &#176;C. Refractive Index: 1.50100 - 1.50600 @ 20.00 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Black seed oil is the blessed oil and can be used as a go-to treatment for almost any ailment, small or serious. Black seed oil has been proven to help treat the following problems: headaches, toothaches, nasal congestion, colds and flus, digestive and gastrointestinal problems, hair and skin problems, allergies, diabetes, insomnia. It is also use to stimulate metabolism and against discouragement and lethargy. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Black seed oil is the blessed oil and can be used as a go-to treatment for almost any ailment, small or serious."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Black seed oil has been proven to help treat the following problems: headaches, toothaches, nasal congestion, colds and flus, digestive and gastrointestinal problems, hair and skin problems, allergies, diabetes, insomnia."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is also use to stimulate metabolism and against discouragement and lethargy."
      }
    ],
    "signatureColor": "#2E2B27",
    "labelImageUrl": "/labels/black-seed-oil.png",
    "compositeImageUrl": "/products/black-seed-oil.webp"
  },
  {
    "id": "prod-bergamot-eo",
    "slug": "bergamot-oil",
    "name": "Bargamot Oil",
    "botanicalName": "Citrus bergamia",
    "category": "ESSENTIAL_OIL",
    "description": "Iconic Italian citrus essential oil with a bright, uplifting, floral-fruity scent — one of the most important perfumery materials.",
    "shortSpec": "Steam Distilled · 100% Pure",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 82,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Bergamot Oil (Citrus bergamia). 87600 - 0.88400 @ 25 °C. 46400 - 1.46600 @ 20 °C. Key constituents include Limonene, nerol, linalyl acetate, linalool, γ-terpinene. Specific Gravity : 0.87600 - 0.88400 @ 25 °C. Refractive Index : 1.46400 - 1.46600 @ 20 °C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Bergamot Oil is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
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
    "description": "Cade Oil gives the oil a smoky scent. Cade essential oil comes in dark red brown and dark brown colors.",
    "shortSpec": "Steam distillation and expression.",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 26,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Cade Oil (Juniperus oxycedrus), extracted by steam distillation and expression. CAS #: 8013-10-3,. F.E.M.A. : 2108. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Cade Oil is used for a number of medicinal ways like diabetes, high blood pressure, bronchitis, pneumonia, diarrhea and peptic ulcer disease. Cade Oil is also used to treat skin problems such as eczema, dermatitis, hair loss. Cade Oil is used to deal with hair and skin conditions that may be dandruff, scalp infections with hair loss, eczema, dermatitis, psoriasis and other skin irritations or eruptions. Cade essential oil is used as an ingredient of liniments and ointments for chronic skin diseases of the scaly. Pure Cade essential oil is one of the best remedies for hair loss, dandruff; hair weakened by dyeing and bleaching, and skin eruptions. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Cade Oil is used for a number of medicinal ways like diabetes, high blood pressure, bronchitis, pneumonia, diarrhea and peptic ulcer disease. Cade Oil is also used to treat skin problems such as eczema, dermatitis, hair loss."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Cade Oil is used to deal with hair and skin conditions that may be dandruff, scalp infections with hair loss, eczema, dermatitis, psoriasis and other skin irritations or eruptions. Cade essential oil is used as an ingredient of liniments and ointments for chronic skin diseases of the scaly."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Pure Cade essential oil is one of the best remedies for hair loss, dandruff, hair weakened by dyeing and bleaching, and skin eruptions."
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
    "botanicalName": "Melaleuca Cajuputi",
    "category": "ESSENTIAL_OIL",
    "description": "Cajeput essential oil is produced by steam distillation of the fresh leaves and twigs from a tall evergreen tree up to 30 meters high, having thick pointed leaves and white flowers.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 44,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Cajeput Oil (Melaleuca Cajuputi), extracted by steam distillation. CAS #: 8008-98-8,. F.E.M.A. : 2225. Specific Gravity: 0.910 - 0.919 @ 72&#176;F. Refractive Index: 1.4670 - 1.470 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Clears and stimulates the mind, aiding in concentration. Spiritually used to elevate the spirit and encourages the creation of new pathways. Use in chest rub to bring down high temperatures and encourage the expulsion of mucus and congestion. Use in massage oils or salves (liniments) to relieve pain in muscular aches, arthritis, and rheumatism. It is used for chronic laryngitis and bronchitis, cystitis, rheumatism and to expel roundworm. Used in dentistry and pharmaceutical work as an antiseptic; in expectorant and tonic formulations, throat lozenges, gargles, etc. Used as a fragrance and freshening agent in soaps, cosmetics, detergents and perfumes. Occasionally employed as a flavor component in food products and soft drinks. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Clears and stimulates the mind, aiding in concentration. Spiritually used to elevate the spirit and encourages the creation of new pathways. Use in chest rub to bring down high temperatures and encourage the expulsion of mucus and congestion."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Use in massage oils or salves (liniments) to relieve pain in muscular aches, arthritis, and rheumatism. It is used for chronic laryngitis and bronchitis, cystitis, rheumatism and to expel roundworm. Used in dentistry and pharmaceutical work as an antiseptic; in expectorant and tonic formulations, throat lozenges, gargles, etc."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Used as a fragrance and freshening agent in soaps, cosmetics, detergents and perfumes. Occasionally employed as a flavor component in food products and soft drinks."
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
    "botanicalName": "Cinnamonum Camphora",
    "category": "ESSENTIAL_OIL",
    "description": "Camphor essential oil offered is extracted from Cinnamomum Camphora (also known as Laurus camphora) of Lauraceae family.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 56,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Camphor Oil (Cinnamonum Camphora), extracted by steam distillation. CAS #: 92704-03-5. Specific Gravity: 0.950 - 0.958 @ 72&#176;F. Refractive Index: 1.472 - 1.479 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Camphor oil is used in treatment of nervous depression, inflammation, acne, arthritis, muscular aches &amp; pains, rheumatism, sprains, bronchitis, colds, coughs, fever, flu &amp; infectious diseases. As oil is toxic, it can be used in vapor therapy to ease respiratory problems. It is often used for Depression, insomnia, shock, respiratory problems, oily skin and pains. Apply immediately in cold compress to reduce swelling of bruises and sprains.Camphor has a strong, penetrating, fragrant odour, and is slightly cold to the touch like menthol leaves; locally it is an irritant, numbs the peripheral sensory nerves, and is slightly antiseptic; it is not readily absorbed by the mucous membrane, but is easily absorbed by the subcutaneous tissue. It combines in the body with glucuronic acid, and in this condition is voided by the urine. Authorities vary as to its effect on blood pressure; some think it raises it, others take an opposite view; but it has been proved valuable as an excitant in cases of heart failure, whether due to diseases or as a result of infectious fevers, such as typhoid and pneumonia, not only in the latter case as a stimulant to circulation, but as preventing the growth of pneumococci. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Camphor oil is used in treatment of nervous depression, inflammation, acne, arthritis, muscular aches & pains, rheumatism, sprains, bronchitis, colds, coughs, fever, flu & infectious diseases. As oil is toxic, it can be used in vapor therapy to ease respiratory problems."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is often used for depression, insomnia, shock, respiratory problems, oily skin and pains. Apply immediately in cold compress to reduce swelling of bruises and sprains. Camphor has a strong, penetrating, fragrant odour; locally it is an irritant, numbs the peripheral sensory nerves, and is slightly antiseptic; it is not readily absorbed by the skin."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Authorities note it has been proved valuable as an excitant in cases of heart failure, whether due to diseases or as a result of infectious fevers such as typhoid and pneumonia, not only in the latter case as a stimulant."
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
    "description": "Carrot Seed oil comes from wild Queen Anne's Lace also known as Wild Carrot",
    "shortSpec": "Steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Carrot Seed Oil (Daucus carota), extracted by steam distillation. CAS #: 8015-88-1,. F.E.M.A. : 2244. Specific Gravity: 0.90000 - 0.93400 @ 25&#176;C. Refractive Index: 1.48900 – 1.49200 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Carrot seed oil contains carotene and vitamin A, it is also very good for healthy skin, hair, gums and teeth and is also associated with good eyesight. It is used for cancer patients, especially those with stomach and throat problems. It is helpful for arthritis, rheumatism, gout, edema and the accumulation of toxins in muscles and joints and also strengthens the mucus membranes in the nose, throat and lungs and thus having a beneficial effect on problems such as bronchitis and influenza. It is also used in diffusers, candles, perfumery and blending,acqa essentials, carrier oils. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Carrot seed oil contains carotene and vitamin A, it is also very good for healthy skin, hair, gums and teeth and is also associated with good eyesight. It is used for cancer patients, especially those with stomach and throat problems."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is helpful for arthritis, rheumatism, gout, edema and the accumulation of toxins in muscles and joints and also strengthens the mucus membranes in the nose, throat and lungs and thus having a beneficial effect on problems such as bronchitis and influenza. It is also used in diffusers, candles, perfumery and blending,acqa essentials, carrier oils."
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
    "botanicalName": "Cedrus deodara",
    "category": "ESSENTIAL_OIL",
    "description": "The trees grows upto 30 m, single-stemmed, crown narrowly erect to conical, round or flattened. Bark is brown, exfoliating in thin strips, that of small branchlets (5-10 mm diam.)",
    "shortSpec": "Steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 75,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Cedarwood Oil (Cedrus deodara), extracted by steam distillation. CAS #: 8000-27-9. Specific Gravity: 0.97200 - 0.98300 @ 25&#176;C. Refractive Index: 1.51400 - 1.52900 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Cedarwood oil. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Cedarwood oil benefits the skin by its sedating ability which relieves itching. Its astringent action is great for acne, oily skin as well as for hair and dandruff."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is useful for chest and urinary infections, arthritis and rheumatism. This high graded fragrance oil is excellent to scent candles, freshen potpourri, in soap making, massage oils and bath oil and high class perfumery."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Cedarwood is excellent repellent used for mothproofing and other insects."
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
    "description": "Camomile is a small perennial herb with a hairy stem and feathery pinnate leaves, daisy like white flowers (larger than those of German camomile) and grows about 25 cm high.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Chamomile Oil (Blue) (Matricaria chamomilla), extracted by cold pressed. CAS #: 8002-66-2,. F.E.M.A. : 2273. Specific Gravity: 0.91300 - 0.95300 @ 25&#176;C. Refractive Index: 1.48000 - 1.50500 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Blue chamomile oil is used for treating any type of internal or external inflammation as well as is very effective on urinary stones (bladder gravel) as well. It helps in stimulating liver &amp; gall bladder, thereby improving digestion and in treating menstrual &amp; menopausal problems. It has miracle effect for treating red, dry &amp; irritated skin as well as calming allergies, psoriasis, eczema and all other flaky skin problems. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Blue chamomile oil is used for treating any type of internal or external inflammation as well as is very effective on urinary stones (bladder gravel) as well."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It helps in stimulating liver & gall bladder, thereby improving digestion and in treating menstrual & menopausal problems."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It has miracle effect for treating red, dry & irritated skin as well as calming allergies, psoriasis, eczema and all other flaky skin problems."
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
    "description": "Camomile is a small perennial herb with a hairy stem and feathery pinnate leaves, daisy like white flowers (larger than those of German camomile) and grows about 25 cm high.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Chamomile Oil (Roman) (Anthemis nobilis), extracted by cold pressed. CAS #: 8015-88-1,. F.E.M.A. : 2272. Specific Gravity: 0.87900 - 0.90400 @ 25&#176;C. Refractive Index: 1.43450 - 1.13990 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Roman Chamomile oil can be used for pain reliever, muscle aches, rheumatism, headaches, migraine, neuralgia, toothache and earache, skin problems, eczema, rashes, wounds, dermatitis, dry itchy skin and allergic conditions in general. It relaxes and soothes the nerves, digestive system and gynecological conditions. For babies, diluted soothes an irritated and teething baby and helps for colic, diarrhoea and gastric spasms. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Roman Chamomile oil can be used for pain reliever, muscle aches, rheumatism, headaches, migraine, neuralgia, toothache and earache, skin problems, eczema, rashes, wounds, dermatitis, dry itchy skin and allergic conditions in general."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It relaxes and soothes the nerves, digestive system and gynecological conditions."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "For babies, diluted soothes an irritated and teething baby and helps for colic, diarrhoea and gastric spasms."
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
    "botanicalName": "Magnolia champaca",
    "category": "ESSENTIAL_OIL",
    "description": "Champaca Oil is derived from a subtropical tree with gorgeous &amp; deeply fragrant flowers.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Champaca Oil (Magnolia champaca), extracted by steam distillation. CAS #: 8006-76-6. Specific Gravity: 0.91 - 1. 01 @ 20 &#176;C. Refractive Index: 1.44 - 1.49 @ 20 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: The flower extract is used as a primary ingredient in world&#146;s most expensive perfumes. It is Aphrodisiac, emollient, febrifuge. Used to warm, calm, reduce stress, aid breathing and induce euphoria. Used in aroma lamp, diffusor, bath, inhaler, massage, light bulb ring, mist spray It is a holistic therapy using therapeutic essential oils,. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "The flower extract is used as a primary ingredient in world's most expensive perfumes. It is Aphrodisiac, emollient, febrifuge."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Champaca Oil is used in holistic therapy using therapeutic essential oils to relieve stress and tension."
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
    "botanicalName": "Hydnocarpus wightiana",
    "category": "ESSENTIAL_OIL",
    "description": "Chaulmoogra belongs to the Hydnocarpus family, which is a common plant family in southern Asia. This plant can grow up to 15 to 20 meters high and has drooping branches with long leaves.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 22,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Chulmoogra Oil (Hydnocarpus wightiana), extracted by cold pressed. CAS #: 8001-74-9,. F.E.M.A. : 2657. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Chaulmoogra Essential Oil is useful in the treatment of skin diseases, scrofula, rheumatism, eczema, as a counter irritant for bruises, sprains, etc., and sometimes applied to open wounds and sores. The essential oil contains chaulmoogric acid and palmitic acid, and the fatty oil has been found to yield glycerol, a very small quantity of phytosterol and a mixture of fatty acids. The ripe and fresh seeds yield essential oil reputed to be a specific remedy against leprosy when the disease has just started to develop. Chaulmoogra has been used as traditional medicine in India since ancient times to treat Leprosy, chronic skin diseases, wounds and ulcers. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Chaulmoogra Essential Oil is useful in the treatment of skin diseases, scrofula, rheumatism, eczema, as a counter irritant for bruises, sprains, etc., and sometimes applied to open wounds and sores. The essential oil contains chaulmoogric acid and palmitic acid, and the fatty oil has been found to yield glycerol, a very small quantity of phytosterol and a mixture of fatty acids."
      },
      {
        "title": "Therapeutic Properties",
        "description": "The ripe and fresh seeds yield essential oil reputed to be a specific remedy against leprosy when the disease has just started to develop. Chaulmoogra has been used as traditional medicine in India since ancient times to treat Leprosy, chronic skin diseases, wounds and ulcers."
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
    "botanicalName": "Eucalyptus Citriodora",
    "category": "ESSENTIAL_OIL",
    "description": "A tall, aromatic evergreen tree of the myrtaceae family. An essential oil obtained from the leaves by steam distillation.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 50,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Citriodora Oil (Eucalyptus Citriodora), extracted by steam distillation. CAS #: 129828-24-6. Specific Gravity: 0.85800 - 0.87700 @ 25.00 &#176;C. Refractive Index: 1.45100 - 1.46400 @ 20.00 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Citriodora is a lemon scented essential oil especially used in perfumery and fragrance creation, being excellent for smelly shoes, cooking smells and pets.Bath, compress, inhalation, aromatherapy diffuser, local wash, massage and as a perfume in cupboards. It is used as an ingredient in some mouthwash and dental preparations, The oil is found in numerous over-the-counter cough and cold lozenges as well as in inhalation vapors or topical ointments. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Citriodora is a lemon scented essential oil especially used in perfumery and fragrance creation, being excellent for smelly shoes, cooking smells and pets.Bath, compress, inhalation, aromatherapy diffuser, local wash, massage and as a perfume in cupboards."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is used as an ingredient in some mouthwash and dental preparations, The oil is found in numerous over-the-counter cough and cold lozenges as well as in inhalation vapors or topical ointments."
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
    "botanicalName": "Cymbopogon winterianus",
    "category": "ESSENTIAL_OIL",
    "description": "Citronella oil is extracted from a hardy grass, found in eastern parts of India and nortern Himalayan range.",
    "shortSpec": "Steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 66,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Citronella Oil (Cymbopogon winterianus), extracted by steam distillation. CAS #: 8000-29-1. Specific Gravity: 0.85000 - 0.92000 @ 25&#176;C. Refractive Index: 1.43000 - 1.52000 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Citronella oil is used for relieving headaches, migraines and rheumatism. Its antiseptic qualities are good for fighting colds and flu. It is also used in candle making, scented soaps, potpourri, room spray, refresher oil fragrance oil, scented envelope candles and cubes votive candle. It is mostly used in the fragrance industry as turning candle making like Parfum Magnifique, Spa Luxury, Fragrance Oils and Yummy Fragrance and feng shui candle, natural wax candles, unity candle arrangements, roman candles and environmentally friendly candles. It is used as insect repellents. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Citronella oil is used for relieving headaches, migraines and rheumatism. Its antiseptic qualities are good for fighting colds and flu."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Citronella oil is widely used in perfumery, soap scenting, insect repellent sprays, scented candles, and environmentally friendly insect repellent products."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is used as insect repellents."
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
    "description": "Clary Sage is a stout biennial herb that grows up to 1 meter (3 feet) tall with large, hairy leaves and small blue/ white flowers growing directly off the long, thin stem.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 67,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Clary Sage Oil (Salvia sclarea), extracted by steam distillation. CAS #: 8016-63-5,. F.E.M.A. : 2321. Specific Gravity: 0.88900 to 0.92300 @ 25.00 &#176;C. Refractive Index: 1.45800 to 1.47300 @ 20.00 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Clary sage essential oil is used widely in perfumes and as a muscatel flavoring for vermouths, wines, and liqueurs. It is also used in aromatherapy for relieving anxiety and fear, menstrual-related problems such as PMS and cramping, and helping with insomnia. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Clary sage essential oil is used widely in perfumes and as a muscatel flavoring for vermouths, wines, and liqueurs."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is also used in aromatherapy for relieving anxiety and fear, menstrual-related problems such as PMS and cramping, and helping with insomnia."
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
    "description": "Coffea Arabica is the earliest cultivated species of the coffee tree and still the most widely grown.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 40,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Coffee Oil (Coffea arabica), extracted by cold pressed. CAS #: 84650-00-0. Specific Gravity: 0.925 - 0.960 @ 25&#176;C. Refractive Index: 1.45 to 1.48 @ 25&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Coffee Essential Oil has a multitude of possible. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Coffee Essential Oil has a multitude of possible uses. It can be burned as a room deodorizer and is considered to be an excellent anti-oxidant."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It has also been used to combat depression, respiratory issues, stings, fevers, and general nausea. Coffee oil is used for flavouring confectionery such as chocolate and baked goods, cosmetic products such as sun blocks and colognes, and medical treatments for headaches, asthma and increasing blood pressure and heart and lung activity."
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
    "description": "Costus Root is a large, erect, perennial plant up to 2m high with a thick tapering root and numerous black flowers.",
    "shortSpec": "Steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Costus Root Oil (Saussurea costus), extracted by steam distillation. CAS #: 8023-88-9,. F.E.M.A. : 2336. Specific Gravity: 0.970 - 1.035 @ 25&#176;C. Refractive Index: 1.5000 – 1.5700 @ 25&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It helps to normalize and strengthen digestion, cleanse the body of toxic accumulations, enhance fertility, and reduce pain. It is also used as incense, as a fixative and fragrance component in cosmetics and perfumes. it is also a hair wash. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It helps to normalize and strengthen digestion, cleanse the body of toxic accumulations, enhance fertility, and reduce pain."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is also used as incense, as a fixative and fragrance component in cosmetics and perfumes."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is also a hair wash."
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
    "botanicalName": "Croton Tiglium Linn",
    "category": "ESSENTIAL_OIL",
    "description": "Croton essential oil, commonly known as oleum tiglii, is gelatinous and translucent liquor that is regularly yellow to light brown in color.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 18,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Croton Oil (Croton Tiglium Linn), extracted by cold pressed. CAS #: 8007-06-5. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Croton oil is used as a liniment. This essential oil also plays a major role as it works as a counter-irritant. Croton oil is used to treat constipation. This essential oil is a powerful purgative and irritant. Useful in abdominal pain and diarrhea. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Croton oil is used as a liniment. This essential oil also plays a major role as it works as a counter-irritant."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Croton oil is used to treat constipation. This essential oil is a powerful purgative and irritant."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Useful in abdominal pain and diarrhea."
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
    "description": "A small tropical tree, indigenous to the Amazon rainforest, growing up to 20' tall. The leaves are thin, oblong while the flowers are greenish – yellow.",
    "shortSpec": "Cold pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 20,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Custard Apple Oil (Annona squamosa), extracted by cold pressed. CAS #: 8007-06-5. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is used in flavorings the salad, dishes, ice cream or blended with milk to make a cool beverages. It is used in the manufacture of soap and can be detoxified by an alkali treatment and used for edible purposes. It is effective pesticides against head lice, southern army worms and pea aphids. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is used in flavorings the salad, dishes, ice cream or blended with milk to make a cool beverages."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is used in the manufacture of soap and can be detoxified by an alkali treatment and used for edible purposes."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is effective pesticides against head lice, southern army worms and pea aphids."
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
    "description": "The tree is a perennial tree, conical-shaped about 28 meters (80 feet) high, tiny dark green leaves, and having male and female cones.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Cypress Oil (Cupressus sempervirens), extracted by steam distillation. CAS #: 8013-86-3. Specific Gravity: 0.87000 - 0.89100 @ 25.00 &#176;C. Refractive Index: 1.47100 - 1.48200 @ 20.00 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is beneficial in conditions of excess fluid such as bleeding, nosebleeds, heavy menstruation, heavy perspiration, cough and bronchitis, haemorrhages and fluid retention. It helps to regulate the menstrual cycle, helps to ease arthritis and rheumatic pain. Cypress essential oil can also be used in soap making ingredients, lotions, massage oils, diffusers, potpourri, scent, air fresheners, body fragrance, perfume oils, aromatherapy products, bath oils, towel scenting, spa's, incense, light rings, laundry, facial steams, hair treatments and more. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is beneficial in conditions of excess fluid such as bleeding, nosebleeds, heavy menstruation, heavy perspiration, cough and bronchitis, haemorrhages and fluid retention."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It helps to regulate the menstrual cycle, helps to ease arthritis and rheumatic pain."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Cypress essential oil can also be used in soap making ingredients, lotions, massage oils, diffusers, potpourri, scent, air fresheners, body fragrance, perfume oils, aromatherapy products, bath oils, towel scenting, spa's, incense, light rings, laundry, facial steams, hair treatments and more."
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
    "description": "Cyperus scariosus is a smooth, erect, perennial sedge. An woody, earthy, spicy essential oil is distilled from its roots.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Cypriol Oil (Nagarmotha Oil) (Cyperus scariosus), extracted by steam distillation. CAS #: 91771-62-9. Specific Gravity: 1.00520 to 1.00680 @ 25&#176;C. Refractive Index: 1.51062 to 1.51100 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Cypriol oil is also used in various other ailments like fever, burning maturation, skin diseases, rheumatoid arthritis, painful menstruation, neurasthenia, general debility, kidney stones, fibromyalgia, gout and other uric acid sensitive conditions.Cypriol Essential Oil is often used in compounding perfumes, in the manufacturing of soaps, medicine and incense sticks. It is also used as an insect repellent. It is used as a hair wash and treating hair and scalp disorders. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Cypriol oil is also used in various other ailments like fever, burning maturation, skin diseases, rheumatoid arthritis, painful menstruation, neurasthenia, general debility, kidney stones, fibromyalgia, gout and other uric acid sensitive conditions.Cypriol Essential Oil is often used in compounding perfumes, in the manufacturing of soaps, medicine and incense sticks."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is also used as an insect repellent."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is used as a hair wash and treating hair and scalp disorders."
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
    "botanicalName": "Artemisia Pallens",
    "category": "ESSENTIAL_OIL",
    "description": "A tall aromatic perenniel shrub villous throughout, often gregarious,lower leaves ovate in outline deeply pinnatisect. Oil is admired for its long-lasting, sweet, balsamic and fruity aroma.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Davana Oil (Artemisia Pallens), extracted by steam distillation. CAS #: 8016-03-3,. F.E.M.A. : 2359. Specific Gravity: 0.94200 - 0.97030 @ 25.00 &#176;C. Refractive Index: 1.47900 - 1.49100 @ 20.00 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Davana Oil is regarded as being anti-infectious, soothing to dry rough skin, and stimulating to the endocrine system. Davana is popular in the perfume industry where it is capable of making a scent unique to the individual. It also has some history in aromatherapy as being a fantastic aphrodisiac and as an agent to combat anxiety. It is also extensively used in flavorings of food, liquor and pastry industries. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Davana Oil is regarded as being anti-infectious, soothing to dry rough skin, and stimulating to the endocrine system. Davana is popular in the perfume industry where it is capable of making a scent unique to the individual."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Davana oil is used in fine perfumery and in flavorings of food, liquor, and pastry industries."
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
    "botanicalName": "Canarium Luzonicum",
    "category": "ESSENTIAL_OIL",
    "description": "Elemi resin is majorly used in Elemi essential oil has a very fresh, citrusy, peppery and spicy aroma. The oil is extracted from the plant for commercial usage in pharmaceutical industry.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 36,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Elemi Oil (Canarium Luzonicum), extracted by steam distillation. CAS #: 8023-89-0,. F.E.M.A. : 2408. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: This oil is used in treating Bronchitis, catarrh, extreme coughing, mature skin, scars, stress, and wounds. Breathing troubles, congestion in lungs &amp; nose, coughs due to acccumulation of phalegm can all be treated by use of this essential oil. It can stimulate almost all the functions that our body performs. Be it blood circilation , secretion of hormones &amp; enzymes, discharge of juices in stomach, nervous system, heartbeat, respiration, menstrual discharge, etc. It is a very well non anti septic. It is analgesic and hels in curing pain which results from fever, cold and sprains. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "This oil is used in treating Bronchitis, catarrh, extreme coughing, mature skin, scars, stress, and wounds. Breathing troubles, congestion in lungs & nose, coughs due to acccumulation of phalegm can all be treated by use of this essential oil."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It can stimulate almost all the functions that our body performs. Be it blood circilation , secretion of hormones & enzymes, discharge of juices in stomach, nervous system, heartbeat, respiration, menstrual discharge, etc."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is a very well non anti septic. It is analgesic and hels in curing pain which results from fever, cold and sprains."
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
    "description": "Eucalyptus essential oil is obtained from the leaves and the branches of the eucalyptus tree.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 90,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Eucalyptus Oil (Eucalyptus globulus), extracted by steam distillation. CAS #: 8000-48-4. F.E.M.A. : 2466. Specific Gravity: 0.90500 - 0.92500 @ 25&#176;C. Refractive Index: 1.45800 - 1.46500 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Eucalyptus Globulus Essential Oil is fantastic on skin ailments such as burns, blisters, wounds, insect bites, lice and skin infections, as well as to combat the effects of colds and the flu. It provides quite natural treatment for respiratory ailments, bronchitis, feverish conditions, the flu and skin problems such as burns, ulcers and wounds. Eucalyptus essential oil is highly antiseptic but also very inexpensive, so it's used specifically in aftershaves, colognes, mouthwashes, and household cleansers. It is used in making deodrants for men due to its balsamic odour. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Eucalyptus Globulus Essential Oil is fantastic on skin ailments such as burns, blisters, wounds, insect bites, lice and skin infections, as well as to combat the effects of colds and the flu. It provides quite natural treatment for respiratory ailments, bronchitis, feverish conditions, the flu and skin problems such as burns, ulcers and wounds."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Eucalyptus essential oil is highly antiseptic but also very inexpensive, so it's used specifically in aftershaves, colognes, mouthwashes, and household cleansers. It is used in making deodrants for men due to its balsamic odour."
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
    "botanicalName": "Boswellia Serrata",
    "category": "ESSENTIAL_OIL",
    "description": "Olibanum is basically a gum-resin from small trees and thorny bushes of the Burseracean family.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 87,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Frankincense Oil (Boswellia Serrata), extracted by steam distillation. CAS #: 8016-36-2,. F.E.M.A. : 2816. Specific Gravity: 0.844 - 0.849 @ 72&#176;F. Refractive Index: 1.465 - 1.469 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Olibanum Oil gives peaceful and calming effect on the mind. It perk up and revamp the lost energy, respiratory disorders can be cured. Beneficial results can be observed in combating anxiety, asthma, bronchitis, stress, cough, scars &amp; stretch marks. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Olibanum Oil gives peaceful and calming effect on the mind."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It perk up and revamp the lost energy, respiratory disorders can be cured."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Beneficial results can be observed in combating anxiety, asthma, bronchitis, stress, cough, scars & stretch marks."
      }
    ],
    "signatureColor": "#7C4E25",
    "labelImageUrl": "/labels/frankincense-oil.png",
    "compositeImageUrl": "/products/frankincense-oil.webp"
  },
  {
    "id": "prod-gandhapura",
    "slug": "gandhapura-oil",
    "name": "Gandhapura Oil / Gandharan Oil",
    "botanicalName": "Gaultheria Fragrantissima",
    "category": "ESSENTIAL_OIL",
    "description": "It is shrub has height about 3.2meter high. Stem is branched and bark colour mostly orange-brown, leaves are mostly 12 cm long, leathery, dotted, and with glands.",
    "shortSpec": "Steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 52,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Gandhapura Oil / Gandharan Oil (Gaultheria Fragrantissima), extracted by steam distillation. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Gandhapura oil is applied externally with success in acute rheumatism, sciatica and neuralgia. It is used in aches and pains. Oil is valuable for local inflammatory swellings, neuralgic pain, pleurodynia, myalgia, itching, and swelling and stiffness of the joints. It provides a good pain relieving application for acute articular and chronic rheumatism and in gonorrheal arthritis. The oil is useful as a maintaining argentine soft drinks, and toothpastes etc. The oil is also useful in many preparation of killing mosquitoes and other insects. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Gandhapura oil is applied externally with success in acute rheumatism, sciatica and neuralgia. It is used in aches and pains."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Oil is valuable for local inflammatory swellings, neuralgic pain, pleurodynia, myalgia, itching, and swelling and stiffness of the joints. It provides a good pain relieving application for acute articular and chronic rheumatism and in gonorrheal arthritis."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Wintergreen oil (Gandhapura) is widely used in analgesic balms and in preparations for repelling mosquitoes and other insects."
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
    "description": "Geranium essential oils is extracted by steam distillation from the leaves, stalks and flowers.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 83,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Geranium Oil (Pelargonium graveolens), extracted by steam distillation. CAS #: 8000-46-2 ,. F.E.M.A. : 2508. Specific Gravity: 0.89000 - 0.89900 @ 25&#176;C. Refractive Index: 1.51800 - 1.52000 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Geranium essential oil is highly effective in assisting with pre-menstrual tension, excessive fluid retention, menopausal problems, uterine and breast cancers. It is used as a fragrance in all kinds of cosmetic products like soaps, creams, perfumery, air fresheners, skin disorders, eczema and haemorrhoids. Geranium oil is also insect repellent and is good for headaches, dental abscess, stings and bites. It is also used in flavoring food additives like preparation of jams, jellies, cakes and puddings, drink and beverages, sauce and ice creams. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Geranium essential oil is highly effective in assisting with pre-menstrual tension, excessive fluid retention, menopausal problems, uterine and breast cancers. It is used as a fragrance in all kinds of cosmetic products like soaps, creams, perfumery, air fresheners, skin disorders, eczema and haemorrhoids."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Geranium oil is also insect repellent and is good for headaches, dental abscess, stings and bites. It is also used in flavoring food additives like preparation of jams, jellies, cakes and puddings, drink and beverages, sauce and ice creams."
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
    "botanicalName": "Cymbopogon martinii (sofia)",
    "category": "ESSENTIAL_OIL",
    "description": "It is a perennial growing herbaceous plant having long slender stems with terminal flowering tops. The grass is the source of oil and is very fragrant.",
    "shortSpec": "Steam Distillation method",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Ginger Grass Oil (Cymbopogon martinii (sofia)), extracted by steam distillation method. CAS #: 8023-92-5. Specific Gravity: 0.9100 - 1. 0100 @ 20 &#176;C. Refractive Index: 1.4880 - 1.4940 @ 20 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Provide relief from anxiety, tension, and headaches; while energizing property fights fatigue and provides revitalization. It strengthen mood when feeling low or stressed out. Gingergrass essential oil improves blood circulation and provides calmness. Gingergrass oil very effectively treats cold, cough, sinusitis, and throat allergies. In addition to this, ginger grass oil is the perfect treatment of sore muscles, inflammation, muscle or joint pains etc. Used in the treatment of sore muscles, inflammation, muscle or joint pains etc. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Provide relief from anxiety, tension, and headaches; while energizing property fights fatigue and provides revitalization. It strengthen mood when feeling low or stressed out."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Gingergrass essential oil improves blood circulation and provides calmness. Gingergrass oil very effectively treats cold, cough, sinusitis, and throat allergies."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "In addition to this, ginger grass oil is the perfect treatment of sore muscles, inflammation, muscle or joint pains etc. Used in the treatment of sore muscles, inflammation, muscle or joint pains etc."
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
    "description": "The grapefruit tree is originated in Asia. It is a large, shiny gloss-leaved tree that can grow about 10 meters (30 feet) high, with white flowers and large leaves",
    "shortSpec": "Cold pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 70,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Grapefruit Oil (Citrus paradisi), extracted by cold pressed. CAS #: 8016-20-4. F.E.M.A. : 2530. Specific Gravity: 0.84800 - 0.85600 @ 25&#176;C. Refractive Index: 1.47300 - 1.47900 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Grapefruit has a high vitamin C content and is therefore valuable to the immune system. It helps protect against colds and flu, has a very positive effect on obesity. It has an uplifting effect on the mood and helps with stress and depression. It has been used for acne, appetite supprestant, cellulite, chills, circulation, colds, depression, detoxification, exhaustion-- physical and mental, flu/influenza, hair growth and tension headaches. It is a great nontoxic spray or wash for the cleaning of all pet areas, cages and bedding etc. to provide a germ free environment. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Grapefruit has a high vitamin C content and is therefore valuable to the immune system. It helps protect against colds and flu, has a very positive effect on obesity."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It has an uplifting effect on the mood and helps with stress and depression. It has been used for acne, appetite supprestant, cellulite, chills, circulation, colds, depression, detoxification, exhaustion-- physical and mental, flu/influenza, hair growth and tension headaches."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is a great nontoxic spray or wash for the cleaning of all pet areas, cages and bedding etc. to provide a germ free environment."
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
    "description": "Gaultheria fragrantissima (Indian Wintergreen) is a fragrant evergreen shrub native to the Himalayas. Its steam-distilled oil contains over 98% natural methyl salicylate, providing powerful warming, analgesic, and anti-inflammatory properties for therapeutic pain liniments and sports balms.",
    "shortSpec": "Steam Distilled · 100% Pure",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 44,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Gaultheria Fragrantissima Oil (Gaultheria fragrantissima). 5%), mucilage, resin, tannins. Key constituents include gaultherin, salicylic acid, methyl salicylate (98–100.5%), mucilage, resin, tannins. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Gaultheria Fragrantissima Oil is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
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
    "description": "It is an annual herb with horizontal root-stock and tubesous root fibres, leaves are 30 cms or at times more than that in length",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Hedychium Oil (Hedychium spicatum), extracted by steam distillation. CAS #: 93455-95-9. Specific Gravity: 1.4800 - 1.4890 @ 25&#176;C. Refractive Index: 1.4800 - 1.4890 @ 20 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Due to its woody,spicy &amp; peculiar odour like roots, it is used in perfume formulations. It is used in hair oil especially to prevent baldness and hairfall and makes them more manageable It is useful in local inflammations, nausea, asthma, bronchitis, hiccups and in pain. It counteracts had mouth taste and smell. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Due to its woody,spicy & peculiar odour like roots, it is used in perfume formulations."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is used in hair oil especially to prevent baldness and hairfall and makes them more manageable It is useful in local inflammations, nausea, asthma, bronchitis, hiccups and in pain."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It counteracts had mouth taste and smell."
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
    "botanicalName": "Helichrysum Italicum",
    "category": "ESSENTIAL_OIL",
    "description": "Helichrysum essential oil is extracted from Helichrysum flowers and extensively used in many healing applications. Helichrysum is known by its French synonym Immortelle that means everlasting.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 78,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Helichrysum Oil (Immortelle) (Helichrysum Italicum), extracted by steam distillation. CAS #: 8023-95-8,. F.E.M.A. : 2592. Specific Gravity: 0.9650 - 0.9900 @ 20 &#176;C. Refractive Index: 1.4820 - 1.5500 @ 20 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Helichrysum essential oil plays a major role in treating circutory disorders The essential oil is also helpful in relieving the pain of arthritis and rheumatism. Helichrysum oil leaves beneficial effects on cold, flu, bronchitis, cough and asthma as well. Helichrysum essential oil is also known for superb regenerating qualities as well as assistance in the healing of scars, acne, dermatitis, stretch marks, boils and abscesses. The essential oil also helps maintain the digestive system and reduce liver as well as spleen congestion. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Helichrysum essential oil plays a major role in treating circutory disorders The essential oil is also helpful in relieving the pain of arthritis and rheumatism. Helichrysum oil leaves beneficial effects on cold, flu, bronchitis, cough and asthma as well."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Helichrysum essential oil is renowned for detoxifying the liver and relieving spleen congestion."
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
    "botanicalName": "Lowsonia Inermis",
    "category": "ESSENTIAL_OIL",
    "description": "A glabrous much-branched deciduous shrub with 4-gonous lateral branches often ending in spines, leaves simple, flowers are white or rose colored.",
    "shortSpec": "Steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Henna Oil (Lowsonia Inermis), extracted by steam distillation. CAS #: 8007-01-0,. F.E.M.A. : 2989. Specific Gravity: 0.94340 - 0.99000 @ 25&#176;C. Refractive Index: 1.49000 - 1.49000 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Henna oil is used in preparation of perfume for both men and women. Its pure constitution also makes it excellent for aromatherapy based applications. It promotes mental peace, calmness,emotions, relaxation and cheerfulness. Reduces mental fatigue and confusion. An invaluable hair oil treatment. Controls premature greying. Prevent hair loss and promote luxurious hair growth. Henna oil is also used in body art &amp; tattos when mix with henna leaves powder to give staining proofing. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Henna oil is used in preparation of perfume for both men and women. Its pure constitution also makes it excellent for aromatherapy based applications. It promotes mental peace, calmness,emotions, relaxation and cheerfulness."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Reduces mental fatigue and confusion. An invaluable hair oil treatment. Controls premature greying."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Prevent hair loss and promote luxurious hair growth. Henna oil is also used in body art & tattos when mix with henna leaves powder to give staining proofing."
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
    "botanicalName": "Ocimum Sanctum",
    "category": "ESSENTIAL_OIL",
    "description": "It is derived form the plant of Ocimum sanctum belonging to family Labiatae. It has been widely grown throughout the world and commonly cultivated in gardens.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Holy Basil Oil (Ocimum Sanctum Oil) (Ocimum Sanctum), extracted by steam distillation. CAS #: 91845-35-1. Specific Gravity: 0.92550 - 0.9260. Refractive Index: 1.242 - 1.249. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Basil oil used in flavoring liquor, chewing Tooth paste, cold rub oil etc. It is used in flavoring, cosmetics, soap, Pharmaceuticals and perfumery. Traditionally Ocimum sanctum is used in malarial fevers, gastric disorders and in hepatic infections. Ocimum sanctum leaves is also used in bronchitis, ringworm and other cutaneous diseases and earache. The leaves are used as a nerve tonic and to sharpen memory. Ocimum sanctum leaves are abundant in tannins like gallic acid, chlorogenic acid etc and also contain alkaloids, glycosides, and saponins along with the volatile oil. The major active. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Basil oil used in flavoring liquor, chewing Tooth paste, cold rub oil etc. It is used in flavoring, cosmetics, soap, Pharmaceuticals and perfumery. Traditionally Ocimum sanctum is used in malarial fevers, gastric disorders and in hepatic infections."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Ocimum sanctum leaves is also used in bronchitis, ringworm and other cutaneous diseases and earache. The leaves are used as a nerve tonic and to sharpen memory. Ocimum sanctum leaves are abundant in tannins like gallic acid, chlorogenic acid etc and also contain alkaloids, glycosides, and saponins along with the volatile oil."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "The major active constituents of Holy basil leaves include urosolic acid."
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
    "botanicalName": "Juniperus Communis",
    "category": "ESSENTIAL_OIL",
    "description": "Juniper oil can be extracted from the berries, as well as the needles and wood. It has a fresh, clear but slightly woody aroma and is a pale oil with a watery viscosity.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Juniper Berry Oil (Juniperus Communis), extracted by steam distillation. CAS #: 8012-91-7,. F.E.M.A. : 2604. Specific Gravity: 0.86900 - 0.85900 @ 25&#176;C. Refractive Index: 1.47200 - 1.48400 @ 20 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Juniper oil acts on the urinary, respiratory, nervous and digestive systems as an antiseptic. It has great effect in the brain as supportive, restoring and a great nervine tonic. It cleans the atmosphere of the surroundings. Good oil for meditation. Juniper berry is very popular ingredient in masculine, outdoor-type perfumes and after shaves due to its spiced woody smell that is ideal for use in aftershave and other men's products. It can be used in skincare, body care, beeswax candles and all other general cosmetics, also in diffusers, pot potpourri, soaps both cold process and melt &amp; pour. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Juniper oil acts on the urinary, respiratory, nervous and digestive systems as an antiseptic. It has great effect in the brain as supportive, restoring and a great nervine tonic."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It cleans the atmosphere of the surroundings. Good oil for meditation."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Juniper berry is very popular ingredient in masculine, outdoor-type perfumes and after shaves due to its spiced woody smell that is ideal for use in aftershave and other men's products. It can be used in skincare, body care, beeswax candles and all other general cosmetics, also in diffusers, pot potpourri, soaps both cold process and melt & pour."
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
    "botanicalName": "Pandanus Odoratissimus",
    "category": "ESSENTIAL_OIL",
    "description": "Kewda (Pandanus odoratissimus) absolute oil is hydro-distilled from the flower part of the plant.",
    "shortSpec": "Steam Distillation Description : Kewda (Pandanus odoratissimus) absolute oil is hydro-distilled from the flower part of the plant.",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 45,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Kewra Oil (Pandanus Odoratissimus), extracted by steam distillation description : kewda (pandanus odoratissimus) absolute oil is hydro-distilled from the flower part of the plant. CAS #: 91770-47-7. Specific Gravity: 0.932 - 0.934. Refractive Index: 1.483 - 1.500. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Having excellent fixative. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Having excellent fixative properties, it is mainly used in perfumery industry and in aromatherapy applications."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Further, it is also used in traditional medicines It has very Strong Floral note used primarily for Sweet Supari , Pan Masala and Chewing Tobacco Compounds."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Can also be used for making Attars."
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
    "botanicalName": "Lavandula Officinalis",
    "category": "ESSENTIAL_OIL",
    "description": "Lavender Oil is derived from Lavender, which is an evergreen woody shrub that has pale green, narrow linear leaves &amp; violet blue flowers",
    "shortSpec": "Steam Distillation Description : Lavender Oil is derived from Lavender, which is an evergreen woody shrub that has pale green, narrow linear leaves &amp; violet blue flowers",
    "overview": "Lavender Oil (Lavandula Officinalis), extracted by steam distillation description : lavender oil is derived from lavender, which is an evergreen woody shrub that has pale green, narrow linear leaves &amp; violet blue flowers. CAS #: 8000-28-0,. F.E.M.A. : 2622. Specific Gravity: 0.87500 - 0.88800 @ 25 &#176;C. Refractive Index: 1.45900 - 1.46900 @ 20 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 96,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "history": "Known properties: Lavender oil soothes nervous exhaustion. It is mostly used for inhalation, bath , room spray and massage. Used to treating asthma, colds, halitosis, laryngitis, throat infections &amp; whooping cough. Further, it also helps digestive system deal with colic, nausea, vomiting &amp; flatulence It is also used in facial pack, shampoo, hair conditioners and ladies perfume for it's sweet odour. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Lavender oil soothes nervous exhaustion. It is mostly used for inhalation, bath , room spray and massage."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Used to treating asthma, colds, halitosis, laryngitis, throat infections & whooping cough. Further, it also helps digestive system deal with colic, nausea, vomiting & flatulence It is also used in facial pack, shampoo, hair conditioners and ladies perfume for it's sweet odour."
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
    "description": "Melissa Oil comes from plants just before first flowers appear as aroma is less interesting when plant is in full bloom. The oil is steam distilled from melissa leaves &amp; tops.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Lemon Balm Oil (Melissa officinalis), extracted by steam distillation. CAS #: 8014-71-9,. F.E.M.A. : 2113. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is useful in anxiety, depression, hypertension, insomnia, migraine, menstrual cramping, indigestion, nausea, asthma, bronchitis, coughing, insect repellent, eczema It is a very known mood lifter and has been used as an anti depressant since ages. It calms the nervous system and remove tensions or depression. It is considered quite warm oil which gives a feeling of warmth., function of respiratory system and cardio-vascular system. Lemon balm oil is considered to be a tonic for nervous system which keeps it in best of the shape and induces proper functioning. Any bacterial infections in our could be effectively treated be using lemon balm oil. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is useful in anxiety, depression, hypertension, insomnia, migraine, menstrual cramping, indigestion, nausea, asthma, bronchitis, coughing, insect repellent, eczema It is a very known mood lifter and has been used as an anti depressant since ages. It calms the nervous system and remove tensions or depression."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is considered quite warm oil which gives a feeling of warmth., function of respiratory system and cardio-vascular system. Lemon balm oil is considered to be a tonic for nervous system which keeps it in best of the shape and induces proper functioning."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Any bacterial infections in our could be effectively treated be using lemon balm oil."
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
    "description": "This evergreen tree grows up to about 6 meters (20 feet) and has dark green serrated oval leaves with pink/white flowers that are highly perfumed.",
    "shortSpec": "Cold pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 85,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Lemon Oil (Citrus limon), extracted by cold pressed. CAS #: 8008-56-8,. F.E.M.A. : 2625. Specific Gravity: 0.84900 to 0.85500 @ 25&#176;C. Refractive Index: 1.47200 to 1.47400 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is highly detoxifying and energizing and also fresh and zesty. It works like general tonic, infections, detoxification, general fatigue, obesity, balances sebum, acne, oils, warts. It further enhances the shine and growth of hair and nails. It reduces physical exhaustion, digestion, rheumatism, arthritis, colds, flu and all respiratory disorders. It is also used for clearing skin problems related to acne, greasy skin, removing dead skin cells and easing painful cold sores. It has high value in flavorings &amp; fragrances industries. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is highly detoxifying and energizing and also fresh and zesty. It works like general tonic, infections, detoxification, general fatigue, obesity, balances sebum, acne, oils, warts."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It further enhances the shine and growth of hair and nails. It reduces physical exhaustion, digestion, rheumatism, arthritis, colds, flu and all respiratory disorders."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is also used for clearing skin problems related to acne, greasy skin, removing dead skin cells and easing painful cold sores. It has high value in flavorings & fragrances industries."
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
    "botanicalName": "Aloysia citrodora",
    "category": "ESSENTIAL_OIL",
    "description": "It is a deciduous, perennial shrub that grows up to 5 meters (16 feet) in height and has a woody stem, very fragrant, delicate, pale green leaves and small purple flowers.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Lemon Verbena Oil (Aloysia citrodora), extracted by steam distillation. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Lemon verbena oil helps to reduce depression and relaxes as well as refreshes the body and mind, while uplifting the spirits and promoting stress control. It is used to add lemony flavor to fish and poultry dishes, vegetable marinades, salad dressings, jams, puddings, and beverages. It has a softening effect on the skin and help to reduce puffiness as well. Verbena can be used as fragrance raw material as the odour has been described being a strong, pleasant and lemony odour with a delightful fresh rosy tone and is extensively used for perfumery formulation. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Lemon verbena oil helps to reduce depression and relaxes as well as refreshes the body and mind, while uplifting the spirits and promoting stress control. It is used to add lemony flavor to fish and poultry dishes, vegetable marinades, salad dressings, jams, puddings, and beverages."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It has a softening effect on the skin and help to reduce puffiness as well. Verbena can be used as fragrance raw material as the odour has been described being a strong, pleasant and lemony odour with a delightful fresh rosy tone and is extensively used for perfumery formulation."
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
    "botanicalName": "Cymbopogon citratus",
    "category": "ESSENTIAL_OIL",
    "description": "Lemongrass Oil is derived from Lemongrass, which is a fast growing, tall, aromatic perennial grass native to Asia.",
    "shortSpec": "Steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 92,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Lemongrass Oil (Cymbopogon citratus), extracted by steam distillation. CAS #: 8007-02-1,. F.E.M.A. : 2624. Specific Gravity: 0.88700 - 0.89900 @ 25&#176;C. Refractive Index: 1.47800 - 1.49700 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Its aroma inspires and brings fresh energy, clears the mind. This reviving oil will re-energize a person and helps the body recover after illness by invigorating the glandular system. It is popular skin care ingredient for oily, mature and inflamed skin (in moderation). It is used in insect repellents, room sprays, soaps and detergents. Lemongrass essential oil can also be used as a deodorant to curb perspiration. Lemon grass features in Indonesian, Malaysian, Sri Lankan and Indian cooking and is widely used in savoury dishes and meat, poultry, seafood and vegetable curries and also in herbal tea. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Its aroma inspires and brings fresh energy, clears the mind. This reviving oil will re-energize a person and helps the body recover after illness by invigorating the glandular system."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is popular skin care ingredient for oily, mature and inflamed skin (in moderation). It is used in insect repellents, room sprays, soaps and detergents."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Lemongrass essential oil can also be used as a deodorant to curb perspiration. Lemon grass features in Indonesian, Malaysian, Sri Lankan and Indian cooking and is widely used in savoury dishes and meat, poultry, seafood and vegetable curries and also in herbal tea."
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
    "botanicalName": "Lilium auratum",
    "category": "ESSENTIAL_OIL",
    "description": "Representative of purity, Lilies have been used in ceremonies since ancient times. In Ancient Greece, the bride in wedding ceremonies would wear a crown of lilies and wheat symbolizing purity and abundance.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Lily Oil (Lilium auratum), extracted by cold pressed. CAS #: 84776-67-0. Specific Gravity: 0.94300 to 0.95900 @ 15&#176;C. Refractive Index: 1.47800 to 1.48600 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Lily Oil is one of the popular fragrance oil available on the earth. The Lily Oil is having very sweet aroma and can last for days if applied on the cloths. It is undiluted, uncut and pure Lily flower fragrance oil and highly used in cosmetic and perfume preparations for giving a great flowery note. Used in treatment of cuperosis or spider veins. Lily oil (with Calendula) can be used for massage, in a bath, after a bath, for dry cuticles and elbows, as a facial moisturizer, under-eye oil and hot-oil treatment. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Lily Oil is one of the popular fragrance oil available on the earth. The Lily Oil is having very sweet aroma and can last for days if applied on the cloths."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is undiluted, uncut and pure Lily flower fragrance oil and highly used in cosmetic and perfume preparations for giving a great flowery note. Used in treatment of cuperosis or spider veins."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Lily oil (with Calendula) can be used for massage, in a bath, after a bath, for dry cuticles and elbows, as a facial moisturizer, under-eye oil and hot-oil treatment."
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
    "botanicalName": "Melissa Officinalis",
    "category": "ESSENTIAL_OIL",
    "description": "Melissa oil has a sweet, fresh and citrus-like smell. The natural essential oil comes in pale yellow color and has a watery viscosity.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 52,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Melissa Oil (Melissa Officinalis), extracted by steam distillation. CAS #: 8014-71-9,. F.E.M.A. : 2113. Specific Gravity: 0.880 - 0.920 @ 20&#176;C. Refractive Index: 1.455 - 1.485 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Melissa essential oil has therapeutic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Melissa essential oil has therapeutic properties used for nerve calming applications Melissa oil also has anti-viral, anti-inflammatory, anti-spasmodic, stomachic and choleretic properties. Melissa essential oil tranquil the nerves and has brilliant qualities in fighting depression."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Melissa oil has a sweet, fresh and citrus-like scent. Traditionally used for digestive complaints, flatulence, nausea, vomiting, dyspepsia, and dysentery, Melissa oil has antispasmodic and calming actions."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It can help with headaches and migraines associated with colds. Melissa oil can also be used as a topical treatment for cold sores or herpes simplex."
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
    "botanicalName": "Mentha Citrata",
    "category": "ESSENTIAL_OIL",
    "description": "These oils are originated in asia, central and southern europe and are colourless to yellowish clear liquid.",
    "shortSpec": "Steam Distillation method",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 40,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Mentha Citrata Oil (Mentha Citrata), extracted by steam distillation method. CAS #: 68917-15-7. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is used in stomach aches, nausea, parasites and other digestive disorders, for nerves and sick stomach, andfor fevers and headaches. It is also used in the manufacturing process of perfuming agents, detergents, soaps, pain balms and cough syrups and more. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is used in stomach aches, nausea, parasites and other digestive disorders, for nerves and sick stomach, andfor fevers and headaches."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is also used in the manufacturing process of perfuming agents, detergents, soaps, pain balms and cough syrups and more."
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
    "description": "Mints are aromatic, almost exclusively perennial, rarely annual, herbs. The leaves are arranged in opposite pairs, from oblong tolanceolate, often downy, and with a serrate margin.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 88,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Mint Oil (Mentha arvensis), extracted by steam distillation. CAS #: 8006-99-3. F.E.M.A. : 2848. Specific Gravity: 0.82000 - 0.90000 @ 25 &#176;C. Refractive Index: 0.89000 - 0.91000 @ 20 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is used as refreshing, mental stimulant, energizing, used to enhance well-being of digestive and respiratory system. It helps against upset stomachs, inhibits the growth of certain bacteria and can help smooth and relax muscles when inhaled or applied to the skin Mint oil is used as a flavouring in tea, ice creams, confectinery, chewing gum and toothpaste. It is used in different cosmetics and toiletries preparations especially in preparation of shampoos and soaps, which give the hair a minty scent and produce a cooling sensation on the skin. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is used as refreshing, mental stimulant, energizing, used to enhance well-being of digestive and respiratory system."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It helps against upset stomachs, inhibits the growth of certain bacteria and can help smooth and relax muscles when inhaled or applied to the skin Mint oil is used as a flavouring in tea, ice creams, confectinery, chewing gum and toothpaste."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is used in different cosmetics and toiletries preparations especially in preparation of shampoos and soaps, which give the hair a minty scent and produce a cooling sensation on the skin."
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
    "description": "This evergreen tree grows up to about 6 meters (20 feet) and has dark green serrated oval leaves with pink/white flowers that are highly perfumed.",
    "shortSpec": "Cold pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Myrrh Oil (Commiphora myrrha), extracted by cold pressed. CAS #: 8016-37-3,. F.E.M.A. : 2766. Specific Gravity: 0.98800 to 1.01700 @ 25&#176;C. Refractive Index: 1.51700 to 1.52800 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Myrrh oil is effective against excessive mucus in the lungs and helps to clear ailments such as cold, catarrh, coughs, sore throats and bronchitis. It is used for diarrhoea, dyspepsia, flatulence and hemorrhoids (haemorrhoids). It is used after a stressful event or an extended illness, to revitalizes both body and mind. It is also used in soap making ingredients, lotions, massage oils, diffusers, potpourri, scent, air fresheners, body fragrance, perfume oils, aromatherapy products, bath oils, towel scenting, spa's, incense, light rings, laundry, facial steams, hair treatments and more. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Myrrh oil is effective against excessive mucus in the lungs and helps to clear ailments such as cold, catarrh, coughs, sore throats and bronchitis. It is used for diarrhoea, dyspepsia, flatulence and hemorrhoids (haemorrhoids)."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is used after a stressful event or an extended illness, to revitalizes both body and mind. It is also used in soap making ingredients, lotions, massage oils, diffusers, potpourri, scent, air fresheners, body fragrance, perfume oils, aromatherapy products, bath oils, towel scenting, spa's, incense, light rings, laundry, facial steams, hair treatments and more."
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
    "description": "Myrtle Oil is a pale yellow or yellow mobile liquid that has intensely fresh lemon-like odor with pleasant sweet-green undertone. Its odor is much cleaner &amp; fresher than lemongrass oil.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 42,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Myrtle Oil (Myrtus communis), extracted by steam distillation. CAS #: 8008-46-6. Specific Gravity: 0.950 - 0.980 @ 20&#176;C. Refractive Index: 1.5010 - 1.5160 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Myrtle oil is used for fortifying natural defenses of body and is very effective in treating colds, bronchitis and fever. The natural essential oil is used as aromatherapy oil too Myrtle oil is the right treatment for alleviating effects of stress as well as is a great mood booster. The oil is also effective in treating thyroid related problems The natural essential oil also possesses antiseptic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Myrtle oil is used for fortifying natural defenses of body and is very effective in treating colds, bronchitis and fever."
      },
      {
        "title": "Therapeutic Properties",
        "description": "The natural essential oil is used as aromatherapy oil too Myrtle oil is the right treatment for alleviating effects of stress as well as is a great mood booster."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "The oil is also effective in treating thyroid related problems The natural essential oil also possesses antiseptic properties that are very effective in treatment of skin wounds and other skin conditions."
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
    "botanicalName": "Citrus Auratium",
    "category": "ESSENTIAL_OIL",
    "description": "Neroli Essential Oil is extracted from small, white, waxy flowers of Citrus aurantium var. amara (also known as Citrus vulgaris) of Rutaceae family. Extracted through steam distillation process.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 80,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Neroli Oil (Citrus Auratium), extracted by steam distillation. CAS #: 8016-38-4 ,. F.E.M.A. : 2771. Specific Gravity: 1.00520 to 1.00680 @ 25&#176;C. Refractive Index: 1.51062 to 1.51100 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Neroli oil is very relaxing &amp; helps in providing relief from chronic anxiety, depression, fear, shock &amp; stress. It also has a calming effect and can be beneficial to digestive track. It acts like a great nerve tonic, uplifting and easing the mind, restoring ones energy, supreme skincare ingredient. It is used to scent candles; freshen potpourri; in soap making; massage oils; bath oil and as a perfume body oil. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Neroli oil is very relaxing & helps in providing relief from chronic anxiety, depression, fear, shock & stress. It also has a calming effect and can be beneficial to digestive track."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It acts like a great nerve tonic, uplifting and easing the mind, restoring ones energy, supreme skincare ingredient. It is used to scent candles; freshen potpourri; in soap making; massage oils; bath oil and as a perfume body oil."
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
    "botanicalName": "Melaleuca Viridiflora",
    "category": "ESSENTIAL_OIL",
    "description": "Niaouli essential oil is taken out from Melaleuca viridiflora of Myrtaceae family. It has slightly sweet, fresh smell with color varying from colorless to pale yellow and greenish.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Niaouli Oil (Melaleuca Viridiflora), extracted by steam distillation. CAS #: 8014-68-4. Specific Gravity: 0.920 - 0.940 @ 72&#176;F. Refractive Index: 1.460 - 1.490 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Niaouli essential oil plays a major role in boosting concentration and clearing the head and at the same time lifting spirits. The natural essential oil has wonderfully antiseptic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Niaouli oil is used in vapor therapy for asthma, whooping cough, sinusitis, catarrh, and sore throat."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Niaouli oil also plays a major role against enteritis, intestinal parasites, dysentery, cystitis and urinary infection The useful essential oil endows you with relief from pains of rheumatism and neuralgia. Niaouli oil is also a disinfectant and valuable for washing wounds to clearing up ulcers, blemishes, acne, boils, cuts, burns, and insect bites It also acts as decongestant on oily skin."
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
    "description": "A spreading deciduous evergreen tree 15 to 20-meters (49 to 66 ft) high, with dark green leaves, yellow flowers without petals and large yellowish fruit. Nutmeg is the actual seed of the tree.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Nutmeg Oil (Myristica fragrans), extracted by steam distillation. CAS #: 8008-45-5 ,. F.E.M.A. : 2793. Specific Gravity: 0.88000 to 0.91000 @ 25&#176;C. Refractive Index: 1.47500 to 1.48800 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Nutmeg essential oil helps in removing problems which results in arthritis, constipation, fatigue, muscle aches, nausea, neralgia, poor circulation, rheumatism and slow digestion. It is rejuvenating, uplifting and energizing. Nutmeg oil is a component in men's fragrances and spicy perfumes. Nutmeg oil in little quantity be used for skin care in general, any cream containing it can help with relieving muscular pains and aches, it has a good toning action on hair. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Nutmeg essential oil helps in removing problems which results in arthritis, constipation, fatigue, muscle aches, nausea, neralgia, poor circulation, rheumatism and slow digestion. It is rejuvenating, uplifting and energizing."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Nutmeg oil is a component in men's fragrances and spicy perfumes. Nutmeg oil in little quantity be used for skin care in general, any cream containing it can help with relieving muscular pains and aches, it has a good toning action on hair."
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
    "botanicalName": "Cymbopogon martinii (Motia)",
    "category": "ESSENTIAL_OIL",
    "description": "A perennial, sweet scented grass, 1.5-2.5 m in height. Palmarosa is a bright and cheerful oil with slightly floral and woodsy notes and just a hint of citrus undertones.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 70,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Palmarosa Oil (Cymbopogon martinii (Motia)), extracted by steam distillation. CAS #: 8014-19-5,. F.E.M.A. : 2831. Specific Gravity: 0.88000 - 0.89400 @ 25&#176;C. Refractive Index: 1.47100 - 1.47800 @ 20 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Palmarosa oil calms the mind, yet has an uplifting effect, while clearing muddled thinking. It is used to counter physical and nervous exhaustion, stress-related problems and nervousness. Palmarosa oil moisturizes the skin, while balancing the hydration levels and stimulating cell regeneration. Palmarosa oil could be used with good effect on the skin, for nervous and stress-related problems and for the digestive system. It is also used in various toiletries preparations. It is used extensively as a fragrance component in cosmetics, perfumes and especially soaps due to its excellent tenacity. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Palmarosa oil calms the mind, yet has an uplifting effect, while clearing muddled thinking. It is used to counter physical and nervous exhaustion, stress-related problems and nervousness."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Palmarosa oil moisturizes the skin, while balancing the hydration levels and stimulating cell regeneration. Palmarosa oil could be used with good effect on the skin, for nervous and stress-related problems and for the digestive system."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Palmarosa oil is extensively used in cosmetic preparations, perfumes, and soaps due to its excellent tenacity and natural geraniol content."
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
    "botanicalName": "Polygonatum cablin",
    "category": "ESSENTIAL_OIL",
    "description": "Patchouli is a member of the mint family. It is a large 3 feet perennial mint which grows in tropical climates. Patchouli oil has a rich musky-sweet, strong spicy and herbaceous smell.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 86,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Patchouli Oil (Polygonatum cablin), extracted by steam distillation. CAS #: 8014-09-3. F.E.M.A. : 2838. Specific Gravity: 0.88000 - 0.89400 @ 25&#176;C. Refractive Index: 1.47100 - 1.47800 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Patchouli essential oil is used as a tropical remedy for skin problems such as acne, eczema, inflamed, cracked, chapped and irritated skin. It is known as a cell rejuvenator and helpful in healing wounds and scars. It combat depression, frigidity, anxiety, dandruff, wrinkles, herpes and other fungal infections. Patchouli oil is considered as an excellent base note and fixative in perfumery, being a component in many famous perfumes. Patchouli incense are very popular and preferred form of incense. Patchouli is a pest deterrent used to keep wool moths out of Indian shawls and rugs. It is an important ingredient in toiletries, cosmetics, breath fresheners, insecticides, disinfectants, and commercial food flavoring. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Patchouli essential oil is used as a tropical remedy for skin problems such as acne, eczema, inflamed, cracked, chapped and irritated skin. It is known as a cell rejuvenator and helpful in healing wounds and scars. It combat depression, frigidity, anxiety, dandruff, wrinkles, herpes and other fungal infections."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Patchouli oil is considered as an excellent base note and fixative in perfumery, being a component in many famous perfumes. Patchouli incense are very popular and preferred form of incense. Patchouli is a pest deterrent used to keep wool moths out of Indian shawls and rugs."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is an important ingredient in toiletries, cosmetics, breath fresheners, insecticides, disinfectants, and commercial food flavoring."
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
    "description": "Peppermint is a perennial herb that grows up to 1 meter (3 feet) high and has slightly hairy serrated leaves with pinkish-mauve flowers arranged in a long conical shape.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 93,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Peppermint Oil (Mentha piperita), extracted by steam distillation. CAS #: 8006-99-3. F.E.M.A. : 2848. Specific Gravity: 0.89600 - 0.90800 @ 25 &#176;C. Refractive Index: 0.89900 - 0.91100 @ 20 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is used as refreshing, mental stimulant, energizing, used to enhance well-being of digestive and respiratory system. It helps against upset stomachs, inhibits the growth of certain bacteria and can help smooth and relax muscles when inhaled or applied to the skin Peppermint has a high menthol content, and is often used as a flavouring in tea, ice creams, confectinery, chewing gum and toothpaste. It is used in different cosmetics and toiletries preparations especially in preparation of shampoos and soaps, which give the hair a minty scent and produce a cooling sensation on the skin. Used in perfumery &amp; other fragrances. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Widely used as flavoring in ice creams, confectionery, chewing gum and toothpaste."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is used in different cosmetics and toiletries preparations especially in preparation of shampoos and soaps, which give the hair a minty scent and produce a cooling sensation on the skin. Used in perfumery & other fragrances."
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
    "botanicalName": "Myroxylon pereirae",
    "category": "ESSENTIAL_OIL",
    "description": "Balsam oil is derived from Balsam Peru, which is a large tropical tree having straight smooth trunk &amp; beautiful foliage including very fragrant flowers.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 32,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Peru Balsam Oil (Myroxylon pereirae), extracted by steam distillation. CAS #: 8007-00-9,. F.E.M.A. : 2117. Specific Gravity: 1.100 – 1.160 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is useful in Bronchitis, chapped skin, colds, coughing, eczema, flu, poor circulation, rashes, sensitive skin, stress, anti dandruff , anti bacterial, diuretic. Peru Balsam essential oil acts as a stimulant, parasiticide &amp; expectorant and helps in asthma, nervous tension, bronchitis, stress, eczema and rashes. It is also used as fixative &amp; fragrance component in soaps, detergents, creams, lotions &amp; perfumes. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is useful in Bronchitis, chapped skin, colds, coughing, eczema, flu, poor circulation, rashes, sensitive skin, stress, anti dandruff , anti bacterial, diuretic."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Peru Balsam essential oil acts as a stimulant, parasiticide & expectorant and helps in asthma, nervous tension, bronchitis, stress, eczema and rashes."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is also used as fixative & fragrance component in soaps, detergents, creams, lotions & perfumes."
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
    "botanicalName": "Citrus aurantium",
    "category": "ESSENTIAL_OIL",
    "description": "Petitgrain is an essential oil that is extracted from the green twigs of the bitter orange plant (Citrus aurantium var. amara) via steam distillation.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 62,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Petitgrain Oil (Citrus aurantium), extracted by steam distillation. CAS #: 8014-17-3,. F.E.M.A. : 2855. Specific Gravity: 0.87800 to 0.88900 @ 25.00 &#176;C. Refractive Index: 1.45000 to 1.46000 @ 20.00 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Petitgrain essential oil will help to calm anger and reduce panic. It has a relaxing effect on the nervous system and helps to calm a racing heart and relax muscles. It has been used to treat impotence, mental fatigue, colic, indigestion, nausea, diarrhea, fainting, vertigo, halitosis and many respiratory conditions. It is helpful to acne, pimples, scars and other skin related problems. It has antiseptic and tonic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Petitgrain essential oil will help to calm anger and reduce panic. It has a relaxing effect on the nervous system and helps to calm a racing heart and relax muscles. It has been used to treat impotence, mental fatigue, colic, indigestion, nausea, diarrhea, fainting, vertigo, halitosis and many respiratory conditions."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is helpful to acne, pimples, scars and other skin related problems. It has antiseptic and tonic properties and is helpful in toning skin. It is used in manufacture of superior quality skin care and cosmetic products."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Used for high graded perfumery & other fragrances."
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
    "botanicalName": "Pimento Officinalis Myrtaceae",
    "category": "ESSENTIAL_OIL",
    "description": "Pimento Berry Oil is steam purification from the fully grown, crushed, and dried fruit. Unripe fruits are from the West Indian plant is known as Pimenta Officinalis.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 44,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Pimento Berry Oil (Pimento Officinalis Myrtaceae), extracted by steam distillation. CAS #: 8006-77-7,. F.E.M.A. : 2018. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Pimento berry essential oil is used widely in frozen food industry for flavoring. This natural essential oil is also used extensively as an ingredient in creating men&#146;s perfumes. There are a number of other health complications for them, this natural essential oil can also be Used It is widely used in the flavoring and perfumery industry Pimento Berry Oil is also used as a remedy to cure muscular aches, chest infections and various types of body pain. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Pimento berry essential oil is used widely in frozen food industry for flavoring."
      },
      {
        "title": "Therapeutic Properties",
        "description": "This natural essential oil is also used extensively as an ingredient in creating men's perfumes."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "There are a number of other health complications for them, this natural essential oil can also be Used It is widely used in the flavoring and perfumery industry Pimento Berry Oil is also used as a remedy to cure muscular aches, chest infections and various types of body pain."
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
    "description": "This evergreen tree can grow up to 40 meters (130 feet) and has a flat crown. The bark is a reddish-brown that is deeply fissured with needle-like gray-green leaves.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 56,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Pine Oil (Pinus sylvestris), extracted by steam distillation. CAS #: 8002-09-3. Specific Gravity: 0.86000 – 0.89000 @ 25 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Pine oil is used to treat a number of health problems including Influenza, Respiratory problems, Rheumatism, Arthritis, Fatigue, Poor circulation Bladder and kidney issues, Gout, Muscle pains and aches Pine oil is most useful to relieve mental, physical and sexual fatigue. it can help in cases of bronchitis, asthma, catarrh, coughs, laryngitis, colds and flu. It eases breathlessness and sinusitis. It is used mainly in cosmetic purposes like perfumery, soaps, shampoos, air fresheners, deodorants and various types of creams. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Pine oil is used to treat a number of health problems including Influenza, Respiratory problems, Rheumatism, Arthritis, Fatigue, Poor circulation Bladder and kidney issues, Gout, Muscle pains and aches Pine oil is most useful to relieve mental, physical and sexual fatigue. it can help in cases of bronchitis, asthma, catarrh, coughs, laryngitis, colds and flu."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It eases breathlessness and sinusitis. It is used mainly in cosmetic purposes like perfumery, soaps, shampoos, air fresheners, deodorants and various types of creams."
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
    "description": "An erect herbaceous annual, 60-120 cm high with grooved and gland dotted stems and branches. It is found throughout India in Himalayas.",
    "shortSpec": "Steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 42,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Psoralea Corylifolia Oil (Psoralea corylifolia), extracted by steam distillation. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is useful in treatment of vomiting, piles, bronchitis, inflammation, anemia etc. It improves hair growth and complexion. It is used to treat vitiligo, leprosy and leucoderma internally. It was shown to improve the. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is useful in treatment of vomiting, piles, bronchitis, inflammation, anemia etc. It improves hair growth and complexion. It is used to treat vitiligo, leprosy and leucoderma internally."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It was shown to improve the color of skin (including removing white spots), hair and nails. It is effective in treating leucoderma, white leprosy, psoriasis and other inflammatory skin diseases and febrile conditions. The oil can be used both internally or as a simple ointment externally It is used to make a perfumed oil."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It also used for scorpion sting and snake-bite."
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
    "description": "A deciduous shrub growing to 2.2 m tall, the stems densely armed with stout, curved prickles and stiff bristles. The roses are a light, clear pink with a wonderfully sweet and rich fragrance. Precious Bulgarian/Indian rose otto — the world's most prized floral oil. Extraordinary complexity with geraniol, citronellol, and rose oxide.",
    "shortSpec": "Steam Distilled · 100% Pure",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 96,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Rose Oil (Damascena) (Rosa damascena). Key constituents include Citronellol, phenyl ethanol, nerol, farnesol, stearpoten, nonanol, linalool, nonanal, phenyl acetaldehyde, citral, carvone, citronellyl acetate, 2-phenylmenthyl acetate, methyl eugenol, eugenol, rose oxide. Specific Gravity : 0.84800 - 0.86100 @ 25 °C. Refractive Index : 1.45200 - 1.46600 @ 25 °C. CAS No: 8007-01-0 F.E.M.A. : 2989. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale yellow to clear liquid with rich, sweet, deep floral rosy aroma. Description : A deciduous shrub growing to 2.2 m tall, the stems densely armed with stout, curved prickles and stiff bristles. The roses are a light, clear pink with a wonderfully sweet and rich fragrance. Known properties: Antidepressant, antiphlogistic, antiseptic, antispasmodic, antiviral, astringent, bactericidal, choleretic, cicatrisant, depurative, emmenagogue, haemostatic, hepatic, laxative, stomachic, and a tonic for the heart, liver, stomach, and uterus. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Rose Oil (Damascena) is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
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
    "description": "This evergreen tree can grow up to 40 meters (130 feet) and has a flat crown. The bark is a reddish-brown that is deeply fissured with needle-like gray-green leaves.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 84,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Rosemary Oil (Rosmarinus officinalis), extracted by steam distillation. CAS #: 8000-25-7,. F.E.M.A. : 2992. Specific Gravity: 0.89800 - 0.92200 @ 25&#176;C. Refractive Index: 1.46600 - 1.47000 @ 25&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Rosemary oil is used for all variety respiratory problems colds, sinusitis, lung congestion and asthma. Traditionally used for healing skin problems, it is commonly added in preparations to help acne, eczema, over production of skin oil, dermatitis, etc. It's used in many citrus colognes, forest and oriental perfumes and eau de cologne. Rinses for dark hair often contain rosemary, as do room deodorants, household sprays, disinfectants and soaps. It is also used in inhalation, bath and massage. Rosemary has a very old reputation for improving memory, and has been used as a symbol for remembrance. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Rosemary oil is used for all variety respiratory problems colds, sinusitis, lung congestion and asthma. Traditionally used for healing skin problems, it is commonly added in preparations to help acne, eczema, over production of skin oil, dermatitis, etc."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It's used in many citrus colognes, forest and oriental perfumes and eau de cologne. Rinses for dark hair often contain rosemary, as do room deodorants, household sprays, disinfectants and soaps."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is also used in inhalation, bath and massage. Rosemary has a very old reputation for improving memory, and has been used as a symbol for remembrance."
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
    "description": "Rosewood oil offered by us retains the natural healing qualities of the original plant. Its effectiveness in curing various skin infections is a proof of its purity.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 44,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Rosewood Oil (Aniba rosaeodora), extracted by steam distillation. CAS #: 8015-77-8,. F.E.M.A. : 2156. Specific Gravity: 0.970 - 1.100 @ 72&#176;F. Refractive Index: 1.430 - 1.480 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: The Rosewood oil that we offer finds usage in the pharmaceutical and cosmetic industry. It is very good for the skin and helps protect the skin from acne, dryness, dullness, excessive oil, etc. It also helps in curing cold, flu and headache, along with being an effective cure against frigidity. Rose Wood oil creates a soothing effect for human mind and body. Rose Wood oil also helps in reducing headaches, coughs and colds. It can also treat skin infections. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "The Rosewood oil that we offer finds usage in the pharmaceutical and cosmetic industry. It is very good for the skin and helps protect the skin from acne, dryness, dullness, excessive oil, etc."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It also helps in curing cold, flu and headache, along with being an effective cure against frigidity. Rose Wood oil creates a soothing effect for human mind and body."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Rose Wood oil also helps in reducing headaches, coughs and colds. It can also treat skin infections."
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
    "botanicalName": "Mentha Spicata",
    "category": "ESSENTIAL_OIL",
    "description": "Spearmint is a hardy perennial herb that reaches about 1 meter (3 feet) in height. It has bright green lance-shaped, sharply serrated leaves and pink or lilac-colored flowers.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 65,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Spearmint Oil (Mentha Spicata), extracted by steam distillation. CAS #: 8008-79-5,. F.E.M.A. : 3032. Specific Gravity: 0.91700 to 0.93400 @ 25&#176;C. Refractive Index: 1.47900 to 1.48900 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It stimulates a tired mind and helps with headaches, migraines, nervous strain, fatigue, stress acne, dermatitis, congested skin and sore gums. Spearmint is commonly used in enhancing flavor for the food ingredients due to its pleasant aroma. It is widely used for making chutney and for preparing other culinary dishes like vinegar, jellies, iced drinks and lemonades. Also for flavoring chewing gums, tooth pastes, confectionaries and other preparations. Spearmint oil is used in a cream or lotion as it can help for decongesting the skin and to a lesser degree acne as well. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It stimulates a tired mind and helps with headaches, migraines, nervous strain, fatigue, stress acne, dermatitis, congested skin and sore gums. Spearmint is commonly used in enhancing flavor for the food ingredients due to its pleasant aroma."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is widely used for making chutney and for preparing other culinary dishes like vinegar, jellies, iced drinks and lemonades. Also for flavoring chewing gums, tooth pastes, confectionaries and other preparations."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Spearmint oil is effective for refreshing the skin, clearing the mind, and treating mild acne as well."
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
    "description": "Jatamansi is a tender aromatic herb with a pungent rhizome root and native to the mountainous regions of northern India, as well as China and Japan.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Spikenard Oil (Jatamansi Oil) (Nardostachys jatamansi), extracted by steam distillation. CAS #: 8022-22-8. Specific Gravity: 0.93000 - 0.95870 @ 25.00 &#176;C. Refractive Index: 1.50550 - 1.54580 @ 20.00 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Spikenard oil can be effective for tension, stress, migraine, nervous indigestion and insomnia. It seems to have rejuvenating qualities especially for the mature skin and can help with allergies, skin inflammations and rashes. Jatamansi oil can be employed in the treatment of epilepsy, hysteria and in many varieties of convulsive affections. Jatamansi oil is said to fight insomnia, flatulence, birth difficulties and other minor ailments. It is used extensively in perfumery applications and manufacturing of incence. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Spikenard oil can be effective for tension, stress, migraine, nervous indigestion and insomnia. It seems to have rejuvenating qualities especially for the mature skin and can help with allergies, skin inflammations and rashes."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Jatamansi oil can be employed in the treatment of epilepsy, hysteria and in many varieties of convulsive affections. Jatamansi oil is said to fight insomnia, flatulence, birth difficulties and other minor ailments."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is used extensively in perfumery applications and manufacturing of incence."
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
    "botanicalName": "Hypericum Perforatum",
    "category": "ESSENTIAL_OIL",
    "description": "It is a plant that is commonly called just St. John's Wort. The herb is a European perennial herb with serrated or perforated leaves.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 45,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "St. John's Wort Oil (Hypericum Perforatum), extracted by steam distillation. CAS #: 68917-49-7. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is used topically for bruises, neuralgia, sciatica, inflamed nerves, and sunburn. Ironically skin. St. John&#146;s wort essential oil is used as antidepressant treatment The natural essential oil is effective in fighting the depression and anxiety. The use of St. John&#146;s wort oil also helps you to avoid the side effects of the anti-depressants. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is used topically for bruises, neuralgia, sciatica, inflamed nerves, and sunburn. Ironically skin."
      },
      {
        "title": "Therapeutic Properties",
        "description": "John's wort essential oil is used as antidepressant treatment The natural essential oil is effective in fighting the depression and anxiety. John's wort oil also helps you to avoid the side effects of the anti-depressants."
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
    "botanicalName": "Homalomena aromatica Schott",
    "category": "ESSENTIAL_OIL",
    "description": "Sugandh mantri essential oils are known for high purity and have a mesmerizing aroma that makes them widely used in aromatherapy applications.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 22,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Sugandh Mantri Oil (Homalomena aromatica Schott), extracted by steam distillation. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is a calming oil with an exotic aroma that is rich and earthy with slight, light floral undertone. It is used for immune support as well as for treating cold, infection, injury or emotional stress. The popular essential oil is used with an exotic aroma that is rich and earthy with slight, light floral undertone. Sugandh mantri essential oil is used for immune support as well as for treating cold, infection, injury or emotional stress. This natural essential oil is anti-inflammatory and anti-spasmodic and helps in fighting infections and reducing pain. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is a calming oil with an exotic aroma that is rich and earthy with slight, light floral undertone. It is used for immune support as well as for treating cold, infection, injury or emotional stress."
      },
      {
        "title": "Therapeutic Properties",
        "description": "The popular essential oil is used with an exotic aroma that is rich and earthy with slight, light floral undertone. Sugandh mantri essential oil is used for immune support as well as for treating cold, infection, injury or emotional stress."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "This natural essential oil is anti-inflammatory and anti-spasmodic and helps in fighting infections and reducing pain."
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
    "botanicalName": "Citrus Sinensis",
    "category": "ESSENTIAL_OIL",
    "description": "It is distilled from the peel of the fruit. It has a lively, fruity, sweet aroma.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 90,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Sweet Orange Oil (Citrus Sinensis), extracted by cold pressed. CAS #: 8008-57-9. Specific Gravity: 0.84200 to 0.84600 @ 25.00 &#176;C. Refractive Index: 1.47200 to 1.47400 @ 20.00 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Orange oil is a tonic for anxiety and depression.It also stimulates the digestive system and is effective for constipation. Orange oil can be used effectively on the immune system as well as for colds and flu and to eliminate toxins from the body. It is a good diuretic and is most useful in balancing water retention and obesity. It is widely used as a flavoring of food and drinks. It is also used in perfumery, soap making, skin care products and other cosmetics products. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Orange oil is a tonic for anxiety and depression.It also stimulates the digestive system and is effective for constipation. Orange oil can be used effectively on the immune system as well as for colds and flu and to eliminate toxins from the body."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is a good diuretic and is most useful in balancing water retention and obesity. It is widely used as a flavoring of food and drinks."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is also used in perfumery, soap making, skin care products and other cosmetics products."
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
    "botanicalName": "Tagetes Minuta",
    "category": "ESSENTIAL_OIL",
    "description": "Tagetes is an annual herb up to 60 cm high with soft, oval, pale leaves and bright orange daisy-like flowers. The essential oil is obtained by steam distillation from the fresh flowering herb.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Tagetes Oil (Tagetes Minuta), extracted by steam distillation. CAS #: 8008-79-5. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Tagetes oil is valuable in keeping insects at bay and can help with parasitic and fungal infestation. It is used for chest infections, coughs and catarrh, dilating the bronchi, facilitating the flow of mucus and dislodging congestion and can be used in cases of skin infections. Tagetes is used in making herbal soap bar due to its excellence. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Tagetes oil is valuable in keeping insects at bay and can help with parasitic and fungal infestation. It is used for chest infections, coughs and catarrh, dilating the bronchi, facilitating the flow of mucus and dislodging congestion and can be used in cases of skin infections."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Tagetes is used in making herbal soap bar due to its excellence properties and sweet, citrus odour. Tagete oil has unique place in perfumery being used in men's perfumes, and for general use to support floral themes It is also used for flavoring tobacco and in most major food categories, including alcoholic and soft drinks."
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
    "botanicalName": "Citrus Reticulata",
    "category": "ESSENTIAL_OIL",
    "description": "The Tangerine oil is extracted from Citrus reticulata of the Rutaceae family by cold pressed method.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 62,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Tangerine (Mandarine) Oil (Citrus Reticulata), extracted by cold pressed. CAS #: 8008-31-9,. F.E.M.A. : 2657. Specific Gravity: 0.84700 - 0.84820 @ 72&#176;F. Refractive Index: 1.47420 – 1.47540 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Tangerine oil is soothing to the nervous system and has a tonic effect on the digestive system, while helping flatulence, diarrhea and constipation. It is also useful for the skin and is used to help with stretch marks, increasing circulation and reducing fluid retention. This tangy and zesty essential oil has some great. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Tangerine oil is soothing to the nervous system and has a tonic effect on the digestive system, while helping flatulence, diarrhea and constipation."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is also useful for the skin and is used to help with stretch marks, increasing circulation and reducing fluid retention."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Mandarin oil is beneficial not only for constipation and other digestive complaints, but also for soothing the nervous system and easing nervous tension."
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
    "description": "The Tea tree is a small tree or shrub with needle-like leaves. The light yellow tea tree oil is produced by steaming the pine-needle-like tea tree leaves to force out the oil.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 94,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Tea Tree Oil (Melaleuca alternifolia), extracted by steam distillation. CAS #: 68647-73-4,. F.E.M.A. : 3902. Specific Gravity: 0.88800 - 0.90900 @ 25&#176;C. Refractive Index: 1.47500 - 1.48200 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Tea Tree essential oil is best known as a very powerful immune stimulant. Tea tree oil may also be used to treat oral bacteria that cause cavities, gum disease, and halitosis. Commercially tea tree oil is considered an effective addition to antiseptic oral rinses and toothpastes. It is used in vapor therapy and can help with colds, measles, sinusitis and viral infections. Tea tree oil has been used for skin and hair and to combat acne, oily skin, head lice and dandruff. It is being used in number of applications like all purpose cleaner, deoderizer, bedsores, dishwashers, humidifiers, plant sprays, vaporisers etc. It has proved helpful in eau de Cologne, hair oils, powder perfumes, hair washes and shampoo preparation. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Tea Tree essential oil is best known as a very powerful immune stimulant. Tea tree oil may also be used to treat oral bacteria that cause cavities, gum disease, and halitosis. Commercially tea tree oil is considered an effective addition to antiseptic oral rinses and toothpastes."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is used in vapor therapy and can help with colds, measles, sinusitis and viral infections. Tea tree oil has been used for skin and hair and to combat acne, oily skin, head lice and dandruff. It is being used in number of applications like all purpose cleaner, deoderizer, bedsores, dishwashers, humidifiers, plant sprays, vaporisers etc."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It has proved helpful in eau de Cologne, hair oils, powder perfumes, hair washes and shampoo preparation."
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
    "description": "The shoots of trees are usually flat, with side shoots only in a single plane. The leaves have scale shape-like 1–10 mm long, except young seedlings in their first year, which have needle-like leaves.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 22,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Thuja Wood Oil (Thuja occidentalis), extracted by steam distillation. CAS #: 8007-20-3,. F.E.M.A. : NA. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Thuja essential oil is extensively used for the treatment of various ailments. The natural essential oil is effective and productive to the respiratory tract. Thuja oil also helps in preventing hair loss. Undiluted, it can cause skin irritation. It is strongly astringent and makes an excellent treatment for oily hair. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Thuja essential oil is extensively used for the treatment of various ailments. The natural essential oil is effective and productive to the respiratory tract."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Thuja oil also helps in preventing hair loss. Undiluted, it can cause skin irritation."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is strongly astringent and makes an excellent treatment for oily hair."
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
    "botanicalName": "Curcuma longa",
    "category": "ESSENTIAL_OIL",
    "description": "Turmeric is a perennial plant with roots or tubers about 1 metre in height. Indian turmeric is considered the best in the world.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 34,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Turmeric Leaf Oil (Curcuma longa), extracted by steam distillation. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Turmeric leaf essential oil is viewed as a strong relaxant and balancer. It also has historical applications as an antiseptic and for skin care use against acne and facial hair in women. It has a great role in flavorings for food additives. It is one of the most important colouring materials of India. The leaf oil yield the orange-red dye. It is much used to impart a yellow colour to cloth. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Turmeric leaf essential oil is viewed as a strong relaxant and balancer. It also has historical applications as an antiseptic and for skin care use against acne and facial hair in women."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It has a great role in flavorings for food additives. It is one of the most important colouring materials of India."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "The leaf oil yield the orange-red dye. It is much used to impart a yellow colour to cloth."
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
    "botanicalName": "Vanilla Planifolia",
    "category": "ESSENTIAL_OIL",
    "description": "Vanilla Oil is a solvent extracted from the beans of Vanilla plant. Vanilla is grown in India, Egypt and Bourbon. The absolute is dark brown in color and has a sweet, heavy and warm odor.",
    "shortSpec": "Solvent Extraction",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 78,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Vanilla Oil (Vanilla Planifolia), extracted by solvent extraction. CAS #: 8024-06-4,. F.E.M.A. : 3104. Specific Gravity: 0.90200 - 1.00200 @ 20 C. Refractive Index: 1.42200 – 1.42300 @ 20 C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is used in perfumery compounds, aromatherapy, flavors, pharmaceuticals and tobacco compounds. Vanilla oil is used as a flavoring agent in pharmaceutical products, in food and in tobacco and is also an ingredient in some oriental type perfumes. It is used as prime sensual aphrodisiac. It is also used for food flavoring. Vanilla oil is also very relaxing as well as comforting. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is used in perfumery compounds, aromatherapy, flavors, pharmaceuticals and tobacco compounds. Vanilla oil is used as a flavoring agent in pharmaceutical products, in food and in tobacco and is also an ingredient in some oriental type perfumes."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is used as prime sensual aphrodisiac. It is also used for food flavoring."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Vanilla oil is also very relaxing as well as comforting."
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
    "description": "Valerian has about 200 perennial herb and small shrub. The plant is found throughout Europe and Northern Asia.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 50,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Valerian Oil (Valeriana officinalis), extracted by steam distillation. CAS #: 8008-88-6,. F.E.M.A. : 3100. Specific Gravity: 0.94200 to 0.98400 @ 25.00 &#176;C. Refractive Index: 1.48600 to 1.50250 @ 20.00 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Valerian essential oil has been used for hypochondria, nervous headaches, irritability, mild spasmodic affections, diarrhea, epilepsy, migraine headaches, croup, hysteria, convulsions, vertigo, nervous cough, delirium, neuralgia, muscle cramps, gas pains, stomach cramps, spasms, palpitations. The oil of valerian is used in many blended perfumes as it gives a different leathery note to a fragrance. It is used for making tea which has medicinal value. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Valerian essential oil has been used for hypochondria, nervous headaches, irritability, mild spasmodic affections, diarrhea, epilepsy, migraine headaches, croup, hysteria, convulsions, vertigo, nervous cough, delirium, neuralgia, muscle cramps, gas pains, stomach cramps, spasms, palpitations."
      },
      {
        "title": "Therapeutic Properties",
        "description": "The oil of valerian is used in many blended perfumes as it gives a different leathery note to a fragrance."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is used for making tea which has medicinal value."
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
    "botanicalName": "Vetiveria zizanioides",
    "category": "ESSENTIAL_OIL",
    "description": "It is a tall, tufted, perennial, scented grass with long narrow leaves. The oil is obtained from the root by distillation. It has a long-lasting woody fragrance.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 84,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Vetiver Oil (Vetiveria zizanioides), extracted by steam distillation. CAS #: 8016-96-4. Specific Gravity: 0.99200 - 1.04200 @ 25&#176;C. Refractive Index: 1.52100 - 1.53100 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Vetiver oil strengthens the central nervous system and is helpful in overcoming depression, insomnia, anxiety, stress, tension and nervousness. It also helps in curing nervous system, acne, arthritis, cuts, depression, exhaustion, insomnia, muscular aches, oily skin, rheumatism, sores, stress, skin care, aged skin, anorexia, immune system, insomnia, nervousness, high blood pressure, calming and deeply relaxing, eases muscular cramps and improves immune response. It is a popular ingredient for soaps, toiletries and perfumes. Vetiver is known to the world of perfumes, and its use in scents (attar) is known in India much before the world became familiar with rose scents. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Renowned for reducing nervousness, high blood pressure, and calming and deeply grounding the nervous system."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is a popular ingredient for soaps, toiletries and perfumes. Vetiver is known to the world of perfumes, and its use in scents (attar) is known in India much before the world became familiar with rose scents."
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
    "description": "Wintergreen is a small evergreen herb which grows up to 15cm (6 in) high, with slender stems, leathery serrated leaves and drooping white flowers, followed by fleshy scarlet berries.",
    "shortSpec": "Steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 62,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Wintergreen Oil (Gaultheria procumbens), extracted by steam distillation. CAS #: 68917-75-6,. F.E.M.A. : 3113. Specific Gravity: 1.1804 - 1.1814 @ 72&#176;F. Refractive Index: 1.5361 - 1.5372 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Wintergreen Oil is strong antidote against animal bites and insect bites. Wintergreen Oil is mainly used for joint and muscular problems when diluted with carrier oil. It can also be used for respiratory conditions such as chronic mucous discharge. Wintergreen can help with lumbago, sciatica, arthritis, gout, bursitis, bunions, rheumatism, sprains/strains, neuralgia, fibromyalgia, muscular aches and pains, respiratory conditions, sinusitis, coughs, tendonitis, nasal congestion, colds/flu, asthma, cramps, muscle spasms, digestive problems, fluid retention, PMT, and irregular/lack of periods. Wintergreen essential oil should not be used by people who are allergic to aspirin. It is not recommended for ingestion; if internal use is desired, consultation with a physician is strongly recommended. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Wintergreen Oil is strong antidote against animal bites and insect bites. Wintergreen Oil is mainly used for joint and muscular problems when diluted with carrier oil."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Wintergreen oil is used for rheumatic conditions, muscular spasms, digestive problems, fluid retention, PMT, and muscular aches."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Wintergreen essential oil should not be used by people who are allergic to aspirin. It is not recommended for ingestion; if internal use is desired, consultation with a physician is strongly recommended."
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
    "shortSpec": "Steam Distilled · 100% Pure",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 20,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Worm Wood Oil (Artemisia absinthium). Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Worm Wood Oil is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/wormwood-oil.png",
    "compositeImageUrl": "/products/wormwood-oil.webp"
  },
  {
    "id": "prod-yarrow",
    "slug": "yarrow-oil",
    "name": "Yara Yara Oil (Yarrow Oil)",
    "botanicalName": "Achillea millefolium",
    "category": "ESSENTIAL_OIL",
    "description": "Deep blue chamazulene-rich yarrow oil with anti-inflammatory and astringent properties for cosmetic and therapeutic use.",
    "shortSpec": "Steam Distilled · 100% Pure",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 44,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Yarrow Oil (Yara Yara) (Achillea millefolium). Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Yarrow Oil (Yara Yara) is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#275A38",
    "labelImageUrl": "/labels/yarrow-oil.png",
    "compositeImageUrl": "/products/yarrow-oil.webp"
  },
  {
    "id": "prod-ylang-ylang",
    "slug": "ylang-ylang-oil",
    "name": "Ylang Ylang Oil (Cananga Oil)",
    "botanicalName": "Cananga Odorata",
    "category": "ESSENTIAL_OIL",
    "description": "It is a tall tropical tree about 20 meters (60 feet) high with large, tender, fragrant pink, mauve or yellow flowers. It is generally the yellow flower from which ylang ylang essential oil is extracted.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 88,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "featured": true,
    "overview": "Ylang Ylang Oil (Cananga Oil) (Cananga Odorata), extracted by steam distillation. CAS #: 8006-81-3,. F.E.M.A. : 3119. Specific Gravity: 0.92500 - 0.94000 @ 25&#176;C. Refractive Index: 1.40200 - 1.50550 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is useful in situation like depression, nervous tension, high blood pressure, hyperpnoea (abnormally fast breathing), tachycardia, palpitations and digestive upsets and try to overcome these hindrances. It is very useful for skin care such as for acne, hair growth, hair rinse, insect bites, irritated and oily skin. Ylang oil is also used as a body moisturizer and also to prevent fevers and combat infections. Ylang ylang is used in perfumery industry due to its rich aroma and is regarded top quality oil. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is useful in situation like depression, nervous tension, high blood pressure, hyperpnoea (abnormally fast breathing), tachycardia, palpitations and digestive upsets and try to overcome these hindrances. It is very useful for skin care such as for acne, hair growth, hair rinse, insect bites, irritated and oily skin."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Ylang oil is also used as a body moisturizer and also to prevent fevers and combat infections. Ylang ylang is used in perfumery industry due to its rich aroma and is regarded top quality oil."
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
    "description": "It grows throughout Nepal between 1100m-2500m. Also found in the Himalayas (Kashmir to Bhutan), N. India, East to China, Taiwan, Philippines, Lesser Sunda Islands.",
    "shortSpec": "Steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Raw Material Sourcing",
        "description": "Botanical material sourced directly from verified cultivation networks and selected at peak seasonal maturity for maximum active constituent concentration."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Material processed through 316L stainless steel distillation units under optimized temperature and pressure to yield pure essential oil without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Cooling & Separation",
        "description": "Distillate passed through a condensation coil and Florentine flask for gravity separation of oil from hydrosol co-product."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Verification",
        "description": "Every batch analyzed by dual Gas Chromatography-Mass Spectrometry, measuring specific gravity, optical rotation, refractive index, and full chemical profile against reference standards."
      }
    ],
    "overview": "Zanthoxylum Oil (Zanthoxylum armatum), extracted by steam distillation. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Analgesic, Antibiotic, Antiseptic, Carminative, Febrifuge, Odontalgic, Sedative, Stimulant, Stomachic, Tonic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Benefits the nervous system and useful in treatment of stress-related conditions such as headache, insomnia and nervous tension. Useful in the treatment of circulation, muscles and joints complications and relieves arthritis, inflamed joints, muscular pains, rheumatism and sprains."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Prevents the spreading of infectious diseases. Useful in the treatment of tooth problems.Aids the digestive system and helps to improve appetite."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Being rich in linalool, and also containing limonene, methyl cinnamate and cineole, it is used in the fragrance and flavor industry Used as a flavouring agent in the confectionery industry and in the manufacture of soft drinks. Also used in the pharmaceutical and perfumery industries."
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
    "description": "An valuable unani ingredient Ajwain or bishop's weed is cultivated in black soil particularly along the riverbank throughout India and also Iran, Egypt and Afghanistan.",
    "shortSpec": "Seam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 50,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Ajowan Oil (Trachyspermum ammi), extracted by seam distillation. CAS #: 8001-99-8. Specific Gravity: 0.89000 - 0.98000. Refractive Index: 1.45000 - 1.60000. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Ajowan oil has antibacterial, anti-infectious, antiviral, anti-parasitic, anti-fungal, antiseptic Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Wildly used in pharmaceuticals, fine fragrances, cosmetics, Food and Beverages. Ajwain also enjoys some popularity in the Arabic world and is found in berbere, a spice mixture of Ethiopia which both shows Indian and Arabic heritage."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Ajwain Oil is widely used in food, flavour, cosmetic, pharmaceutica"
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
    "botanicalName": "Pimenta officinalis",
    "category": "SPICE_OIL",
    "description": "Allspice can be a small scrubby tree, quite similar to the bay laurel in size and form. Allspice is the dried fruit of the Pimenta dioica/officinalis plant.",
    "shortSpec": "Allspice oil (from both the leaf and the fruit) is extracted by steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 45,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Allspice Oil (Pimenta officinalis), extracted by allspice oil (from both the leaf and the fruit) is extracted by steam distillation. CAS #: 8006-77-7,. F.E.M.A. : 2018. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Anesthetic, analgesic, antioxidant, antiseptic, carminative, muscle relaxant, rubefacient, stimulant and tonic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Allspice oil can be helpful for the digestive system, for cramp, flatulence, indigestion and nausea, especially useful in rheumatism, chest complaints and to combat stress and depression. It can help in cases of depression, nervous exhaustion, tension, neuralgia and stress."
      },
      {
        "title": "Therapeutic Properties",
        "description": "When a bout of the blues "
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
    "description": "Anise is a herbaceous annual plant growing to 3 ft (0.91 m) tall. Anise plants grow best in light, fertile, well drained soil.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Anise Oil (Pimpinella anisum), extracted by steam distillation. CAS #: 8007-70-3,. F.E.M.A. : 2094. Specific Gravity: 0.97400 - 0.98800 @ 72&#176;F. Refractive Index: 1.55400 - 1.55480 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Carminative, Digestive, Promotes Harmony and Balance (Green), Expectorant Anise Oil is a wonderful perfumey addition in subtle quantities, especially in Citrus blends or as an foundation to a Vanilla blend. Anise oil has a high concentration of anethole, as much as 90%, and should be avoided if you are pregnant or have estrogen dependent cancers. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Anise oil is helpful for digestive system, it acts as a general tonic to the circulatory system and the respiratory tract. It helps to calm the nerves of tense and anxiety , also calms menstrual pains and eases nauseous migraines."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is also used to flavor pizzels, cakes, etc."
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
    "botanicalName": "Ferula Asafoetida",
    "category": "SPICE_OIL",
    "description": "Asafoetida is a perennial herb (1 to 1.5 m high). The species is native to the mountains of Afghanistan, and is mainly cultivated in nearby India.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 40,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Asafoetida Oil (Ferula Asafoetida), extracted by steam distillation. CAS #: 9000-04-8,. F.E.M.A. : 2108. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Asafoetida or Hing is known to possess anti flatulent, antiepileptic,antimicrobial, anti inflammatory, antispasmodic, anthelminthic, laxative, nervine stimulant and expectorant Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "This spice oil is used as a digestive aid, in food as a condiment, and in pickles. It typically works as a flavor enhancer and, used along with turmeric."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is good for influenza, digestion, asthma and bronchitis. it is used to aid digestion and is smeared on the abdomen in an alcohol or water tinct"
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
    "description": "Fresh bay leaves are very strongly aromatic but also quite bitter. An essential oil is a concentrated, aromatic, volatile liquid composed of small oil-like molecules.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Bay Leaf Oil (Laurus nobilis), extracted by steam distillation. CAS #: 8006-78-8,. F.E.M.A. : 2122. Specific Gravity: 0.94300 - 0.98400 @ 25&#176;C. Refractive Index: 1.50500 - 1.51700 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Analgesic, anticonvulsant, anti neuralgic, expectorant, anti rheumatic, antiseptic, astrigent, stimulant and tonic(for hair) that control dandruff and promote hair growt Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Bay leaves are used to make perfumes to add fragrance to skin care products. Most popular use is in a liniment or massage oil to stimulant lymph and blood circulation."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It improves memory and helps relieve headaches as well as sinus and lung congestion and useful for treating high blood sugar, migrai"
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
    "description": "Black Cumin Seed Oil is taken from an annual herbaceous plant that is member of Ranunculaceae (buttercup) family. The fruit of plant, the black seeds is used for extracting the oil.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Black Cumin Seed Oil (Nigella sativa), extracted by steam distillation. CAS #: 8014-13-9,. F.E.M.A. : 2343. Specific Gravity: 0.90000 - 0.93500 @ 25.00 &#176;C. Refractive Index: 1.50100 - 1.50600 @ 20.00 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Black Cumin are vasodilating, mucous reducing and relax the airways, making it perfect for the treatment of asthma and chronic bronchitis. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is used for treating respiratory & digestive problems, parasites & inflammation. Further, it also helps in health conditions including colds, headaches, infections and toothaches."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Black cumin is used as a remedy for dry skin, skin diseases, dandruff and wounds. It is a popular medicine for vitili"
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
    "description": "Black pepper oil is a pale yellow irritating liquid with a sharp peppery odor and is obtained by steam distillation of the unripe dried fruit of the plant Piper nigrum.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 75,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "featured": true,
    "overview": "Black Pepper Oil (Piper nigrum), extracted by steam distillation. CAS #: 8007-75-8,. F.E.M.A. : 2153. Specific Gravity: 0.87600 - 0.88400 @ 25 &#176;C. Refractive Index: 1.46400 - 1.46600 @ 20 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: A warming oil, excellent for poor circulation, anemia and after heavy bleeding, invaluable for muscular aches and pains of all descriptions, restores tone to the skeletal muscles and generally dispels toxins. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is mainly used as gourmet in food additives. Pepper is mainly marinate with salt and vinegar and as a preservative.Ingredients. It is an wonderful addition to men fragrances."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is an excellent anti-oxidant agent. It is used as an fixative and as well as binding agent in resin industry. Black pep"
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
    "description": "Calamus oil has a warm and spicy odor that is reminiscent of a sweet forest.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Calamus Oil (Acorus calamus), extracted by steam distillation. CAS #: 84775-39-3. Specific Gravity: 0.99200 - 0.99300 @ 72&#176;F. Refractive Index: 1.54502 - 1.55500 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Aromatic stimulant & tonic, for curing nervous complaints, vertigo and headaches, antiseptic, anticonvulsant, bactericidal, diaphoretic, carminative, expectorant, insecticide, hypotensive, spasmolytic, stomachic, stimulant, tonic and vermifuge. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Calamus essential oil, Acorus calamus, is highly esteemed as an aromatic stimulant and tonic, often used for nervous complaints, vertigo, headaches, and dysentery."
      },
      {
        "title": "Therapeutic Properties",
        "description": "A fluid extract is an official preparation in the United States and some other Pharmacopceias, but it is not now official in the British"
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
    "botanicalName": "Garcinia Cambogia",
    "category": "SPICE_OIL",
    "description": "Cambodge (Garcinia cambogia Desr.) is a tropical fruit commonly known as Malabar tamarind.",
    "shortSpec": "Steam Distillation Description : Cambodge (Garcinia cambogia Desr.) is a tropical fruit commonly known as Malabar tamarind.",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 32,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Cambodge Oil (Garcinia Cambogia), extracted by steam distillation description : cambodge (garcinia cambogia desr.) is a tropical fruit commonly known as malabar tamarind. CAS #: 90045-23-1,. F.E.M.A. : 2826. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It has refrigerant Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Cambodge is used as condiment of flavoring curries. It is also rich in acids & possess marked antiseptic properties."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Further, it is also used as a substitute for acetic & formic acids in coagulation of latex. Its other medicinal values include helping in rheumatism & bowel complaints as well as a ri"
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
    "botanicalName": "Capsicum annum",
    "category": "SPICE_OIL",
    "description": "Capsicum Oil (Paprika) (Capsicum annum), extracted by steam distillation.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Capsicum Oil (Paprika) (Capsicum annum), extracted by steam distillation. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Capsicum Oil (Paprika) is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
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
    "description": "Caraway oil is extracted from Carum carvi that is also known as Apium carvi. The oil is extracted by steam distillation from dried ripe seeds and yields 2 - 8 %.",
    "shortSpec": "Steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 44,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Caraway Oil (Carum carvi), extracted by steam distillation. CAS #: 8000-42-8,. F.E.M.A. : 2238. Specific Gravity: 0.90000 - 0.91000 @ 25&#176;C. Refractive Index: 1.47900 - 1.49520 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Caraway oil is anti-histaminic, antispasmodic, antiseptic, aperitif, astringent, cardiac, carminative, digestive, disinfectant, diuretic, emmenagogue, galactagogue, expectorant, parasiticide, stimulant, stomachic, tonic and vermifuge. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Caraway oil calms the nerves and soothes mental fatigue, while settling the stomach, nervous digestion, colic, flatulence and gastric spasms. As an expectorant it helps clear bronchitis, bronchial asthma and coughs."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is also helpful in cases of sore throats and laryngitis and beneficial to the uri"
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
    "description": "Cardamom is one of the most significant, valuable spices in the world. It consists of the small, highly aromatic pods or seed capsules of a perennial plant of the ginger family (Zingiberaceae).",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 80,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "featured": true,
    "overview": "Cardamom Oil (Elettaria cardamomum), extracted by steam distillation. CAS #: 8000-66-6,. F.E.M.A. : 2241. Specific Gravity: 0.91700 - 0.94700 @ 25&#176;C. Refractive Index: 1.46200 - 1.46600 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Antiseptic, aphrodisiac, carminative, digestive, diuretic, stimulant, stomachic, tonic and anti-spasmodic. It also has uplifting and invigorating Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Cardamom oil is used internally for indigestion, nausea, vomiting and pulmonary disease with copious phlegm. Cardamom oil is used for memory enhancement It is used to flavor coffee, baked goods, curries and pickles, milk desserts and mulled wine."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is also used for perfumery, beverages, cosmetics a"
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
    "botanicalName": "Cinnamomum Cassia",
    "category": "SPICE_OIL",
    "description": "Cassia essential oil is derivative from leaves all the way through vapor sanitization process. If compared to other oils and natural supplements like Ceylon variety, then it is cheaper as well as supplementary profuse.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 52,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Cassia Oil (Cinnamomum Cassia), extracted by steam distillation. CAS #: 8007-80-5,. F.E.M.A. : 2258. Specific Gravity: 1.0561 - 1.0568 @ 72&#176;F. Refractive Index: 1.6080 - 1.6090 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Cassia essential oil has the therapeutic Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Cassia essential oil can be identified after feeling its sweet, spicy-hot aroma. This essential oil is widely used for the treatment of physical and emotional refreshment."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is also known for affecting the libido as well as due to its aphrodisiac qualities. The delicate scent of Cassia essential oi"
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
    "description": "Celery is a biennial plant with a grooved, fleshy, erect stalk &amp; skinny pennant leaves.",
    "shortSpec": "Steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Celery Oil (Apium graveolens), extracted by steam distillation. CAS #: 8015-90-5,. F.E.M.A. : 2271. Specific Gravity: 0.87000 - 0.91000 @ 25&#176;C. Refractive Index: 1.47700 - 1.49300 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Celeryseed Essential Oil has antioxidant, antiseptic (urinary), anti-rheumatic, antispasmodic, aperitif, digestive diuretic, depurative & stomachic Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It can be used in sedative, tonic and carminative preparations as well as fragrance component in soaps, cosmetics, detergents and perfumes. The volatile oil of celery is used in making of perfumes and in pharmaceutical industries."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Also, all parts of a celery plant are edible and usable including the"
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
    "description": "The leaves as well as bark are the plant parts from which cinnamon oil is extracted. . Cinnamon Oil is known for it's peppery, earthy oil that is bright, yet slightly woody scent.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 78,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "featured": true,
    "overview": "Cinnamon Bark Oil (Cinnamomum zeylanicum), extracted by steam distillation. CAS #: 8015-91-6,. F.E.M.A. : 2291. Specific Gravity: 1.01000 - 1.03000 @ 25.00 &#176;C. Refractive Index: 1.57300 - 1.59100 @ 20.00 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Anthelmintic, antidiarrheal, antidote, antimicrobal, antiseptic, antispasmodic, antiputrescent, aphrodisiac, astingent, carminative, digestive, emmenagogue, hemostatic, orexigenic, parasticide, refrigerant, spasmolytic, stimulant, stomachic and vermifuge Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Oil is used for flavoring confectionery and liqueurs. It is also used in pharmaceutical and dental preparations. Cinnamon is used as spice flavor, can be readily oxidized."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Cinnamon bark oils are used as a stimulant for the circulation, as an antiseptic, as an occasional aphrodisiac. Good for easing "
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
    "botanicalName": "Cinnamomum zeylanicum",
    "category": "SPICE_OIL",
    "description": "The leaves as well as bark are the plant parts from which cinnamon oil is extracted. . Cinnamon Oil is known for it's peppery, earthy oil that is bright, yet slightly woody scent.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 66,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Cinnamon Leaf Oil (Cinnamomum zeylanicum), extracted by steam distillation. CAS #: 8015-91-6,. F.E.M.A. : 2291. Specific Gravity: 1.03000 - 1.05000 @ 25 &#176;C. Refractive Index: 1.52200 - 1.54200 @ 20 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Anthelmintic, antidiarrheal, antidote, antimicrobal, antiseptic, antispasmodic, antiputrescent, aphrodisiac, astingent, carminative, digestivec, orexigenic, parasticide, refrigerant, spasmolytic, stimulant, stomachic and vermifuge Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is used in soap making ingredients, lotions, massage oils, diffusers, potpourri, scent, air fresheners, body fragrance, perfume oils, aromatherapy products, bath oils, towel scenting, spa's, incense, light rings, laundry, facial steams and hair treatments."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Used for purifying the atmosphere, dispe"
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
    "botanicalName": "Eugenia caryophyllus",
    "category": "SPICE_OIL",
    "description": "A slender evergreen with a smooth gray trunk, up to 12 meters high. At the start of the rainy season long buds appear that have a rosy-pink corolla at the tip.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 82,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "featured": true,
    "overview": "Clove Bud Oil (Eugenia caryophyllus), extracted by steam distillation. CAS #: 8000-34-8. F.E.M.A. : 2323. Specific Gravity: 1.03800 - 1.06000 @ 25 &#176;C. Refractive Index: 1.52700 - 1.53500 @ 20 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It acts like antiseptic ,antihistamine, antioxidant, aphrodisiac, antifungal, anti-viral, powerful bactericidal-large spectrum, antiparasitic, anthelmintic, antiemetic, expectorant, cicatrizant, spasmolytic, splenetic, stimulant (general, digestive, sexual) and tonic(nervous, hypertensive). Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Clove bud oil is useful in the treatment of arthritis, asthma, bronchitis, rheumatism, sprains, strains and toothache. It can be used for acne, bruises, burns and cuts, keeping infection at bay and as a pain reliever."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It helps with toothache, mouth sores, rheumatism and arthritis. It is beneficial t"
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
    "botanicalName": "Eugenia caryophyllata",
    "category": "SPICE_OIL",
    "description": "It is a slender evergreen that grows up to 12 meters in height (approximately 36 feet). It change color over time and is beaten from the trees and dried.",
    "shortSpec": "Steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Clove Leaf Oil (Eugenia caryophyllata), extracted by steam distillation. CAS #: 8000-34-8,. F.E.M.A. : 2324. Specific Gravity: 1.03600 - 1.04600 @ 25&#176;C. Refractive Index: 1.53000 - 1.53800 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Analgesic, antiseptic, antispasmodic, anti-neuralgic, anti-infectious, carminative, disinfectant, insecticide, stimulant, stomachic, uterine and tonic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Clove leaf oil is a strong germicide, a powerful antiseptic, a weak local anaesthetic applied to decayed teeth and has been used with success as a stimulating expectorant in phthisis and bronchial troubles. Clove oil is used for toothpastes, soaps, toiletries, cosmetics and perfumes."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Clove oil is us"
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
    "description": "This annual or biennial plant is a native of Morocco having sparse, fine, feathery leaves and pinkish/white flowers. The oil is extracted from the seeds of the plant",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Coriander Oil (Coriandrum sativum), extracted by steam distillation. CAS #: 8008-52-4. F.E.M.A. : 2334. Specific Gravity: 0.86300 - 0.87500 @ 25.00 &#176;C. Refractive Index: 0.86200 - 0.87800 @ 20.00 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Analgesic, aphrodisiac, anti-spasmodic, antispasmodic, carminative, depurative, deodorant, digestive, carminative, fungicidal, lipolytic, revitalizing, stimulant and stomachic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Coriander oil can be useful to refresh and to uplift the mind. It can be helpful for mental fatigue, migraine, tension and nervous weakness."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It has a warming effect on the stomach and relieve wind and cramps, while revitalizing the glandular system. It is applied externally as a lotion for rheumatic"
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
    "description": "The cumin oil has a spicy and very penetrating smell. The seeds of the plant are used to extract the oil which is mainly used in food preparations.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 62,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Cumin Oil (Cuminum cyminum), extracted by steam distillation. CAS #: 8014-13-9,. F.E.M.A. : 2343. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Astringent, cardiac, carminative, digestive, stimulant Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Cumin is useful as a warming oil and helps relieve muscular pains and osteoarthritis. In the digestive system, it acts as a stimulant that helps with colic, dyspepsia, flatulence, bloating and indigestion."
      },
      {
        "title": "Therapeutic Properties",
        "description": "The Cumin seed essential oil is used in a variety of food products. It is also majorly used in"
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
    "botanicalName": "Murraya Koenigii",
    "category": "SPICE_OIL",
    "description": "An aromatic shrub or small tree. The tree is an aromatic deciduous one, five meter in height, 15-40 cm in diameter. The leaves are distilled to extract the oil from the plant.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Curry Leaf Oil (Murraya Koenigii), extracted by steam distillation. CAS #: 8008-52-4. F.E.M.A. : 2334. Specific Gravity: 0.86300 - 0.87500 @ 25&#176;C. Refractive Index: 0.86200 - 0.87800 @ 20 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Analgesic, aphrodisiac, anti-spasmodic, antispasmodic, carminative, depurative, deodorant, digestive, carminative, fungicidal, lipolytic, revitalizing, stimulant and stomachic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It has also been found to prevent hair loss and as a means of helping the skin maintain it&#146;s natural pigmentation. Curry leaf oil is found to be used in the cure of diabetes."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is extensively used for flavoring curries, pickles, soups, chutneys.Curry It is used for the production of soap.Volat"
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
    "botanicalName": "Anethum Sowa",
    "category": "SPICE_OIL",
    "description": "It ts an annual aromatic herb. The oil has a powerful and fresh, sweet spicy, peppery and aromatic odor.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 40,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Dill Seed Oil (Anethum Sowa), extracted by steam distillation. CAS #: 8006-75-5,. F.E.M.A. : 2383. Specific Gravity: 0.88400 - 0.90000 @ 25&#176;C. Refractive Index: 1.47900 - 1.49700 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is stimulating, revitalizing, restoring, purifying, balancing, antispasmodic, carminative, diuretic, stimulant, stomachic and cleansing agent.t has also been used as a remedy for colic and insomnia and as a stimulant for lactation. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "The oil is used extensively in beverage and foodstuffs. Dill oil is almost exclusively used for flavouring purposes in pickle industry due to high concentration of a chemical called carvone, Dill oil is used in cosmetics and perfumes."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Myristicin, apiol, and dillapiol present in dill oil are effectiv"
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
    "description": "Fennel grows up to 2 meters (6 feet) in height, the ultimate leaves very numerous, filiform, the superior leaves with sheaths longer than the blade. Fennel essential oil extracted from the seed.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Fennel Oil (Foeniculum vulgare), extracted by steam distillation. CAS #: 8006-84-6 ,. F.E.M.A. : 2482. Specific Gravity: 0.95300 - 0.97300 @ 25&#176;C. Refractive Index: 1.51000 - 1.56200 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Aperitif, antiseptic, antispasmodic, carminative, depurative, diuretic, emmenagogue, expectorant, galactagogue, laxative, stimulant, stomachic, splenic, tonic and vermifuge. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Fennel oil is a remedy for digestive complaints such as flatulence, constipation, colic, nausea, vomiting, anorexia, dyspepsia and hiccups."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is also used in cases of obesity Used in a base cream or lotion, fennel oil can be helpful for general skin care and especially for dispersing bruises, liven"
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
    "botanicalName": "Trigonella foenum",
    "category": "SPICE_OIL",
    "description": "Fenugreek is an ancient spice, although currently not influenced much in the West. It has been grown as a medicinal plant in India and Europe during the Middle Ages.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 50,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Fenugreek Oil (Trigonella foenum), extracted by steam distillation. CAS #: 84625-40-1. Specific Gravity: 0.97900 - 0.98400 @ 25&#176;C. Refractive Index: 1.48900 - 1.49300 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is aphrodisiac , carminative, demulcent, expectorant, laxative, dibetic and stomachic Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Fenugreek is used to treat diabetes in adults (late-onset diabetes), poor digestion, gastric inflammation, digestive disorders and tuberculosis It is used to promote lactation and as an aphrodisiac."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is also an excellent source of selenium, an anti-radiant which helps the body utilize oxygen and i"
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
    "botanicalName": "Alpina Officinalis",
    "category": "SPICE_OIL",
    "description": "Galangal is the dried root of the plant which found mainly in eastern Himalayas and south west India. It is used as a spice and has wide usage in various medicinal preparations.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 36,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Galangal Oil (Alpina Officinalis), extracted by steam distillation. CAS #: 8024-40-6,. F.E.M.A. : 2500. Specific Gravity: 0.955 - 0.975 @ 72&#176;F. Refractive Index: 1.4940 - 1.4952 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Antiseptic, bactericidal, carminative, diaphoretic, stimulant, and stomachic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Used as spice, this oil also finds wide application in various medicinal preparations. It is useful in respiratory troubles and in rheumatism & catarrhal affections, especially in bronchial catarrh."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Very useful for upsets digestive system, indicated for dyspepsia, flatulence, colic, nausea, and vomi"
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
    "description": "Garlic is an important condiment crop. It is an erect biennial herb normally grown as an annual&#151;i.e. a plant that only lasts for an year",
    "shortSpec": "Steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Garlic Oil (Allium sativum), extracted by steam distillation. CAS #: 8000-78-0,. F.E.M.A. : 2503. Specific Gravity: 1.04000 - 1.09000 @ 25&#176;C. Refractive Index: 1.55900 - 1.57900 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Analgesic, antiseptic, anti-microbial,, antidibetic, anti-catarrhal, nutritive, antispasmodic, anti-neuralgic, anti-infectious, carminative, disinfectant, insecticide, stimulant, stomachic, uterine and cardiovascular tonic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "In herbal medicine, garlic has been traditionally used for such ailments as asthma, deafness, leprosy, bronchial, congestion, arteriosclerosis, fevers, worms and liver and gall bladder troubles. It is a very good immune enhancer and cell protector."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is used as spice oil worldwide for flavorings th"
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
    "botanicalName": "Zingiber Officinalis",
    "category": "SPICE_OIL",
    "description": "Ginger is a perennial herb that can stand up to about 3 - 4 feet high and has a thick spreading tuberous rhizome. The root of ginger is macerated and distilled over high heat, for extracting the oil.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 80,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "featured": true,
    "overview": "Ginger Oil (Zingiber Officinalis), extracted by steam distillation. CAS #: 8007-08-7,. F.E.M.A. : 2522. Specific Gravity: 0.8900 - 0.8990 @ 72&#176;F. Refractive Index: 1.4950 - 1.5600 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Ginger oil is analgesic, anti-emetic, antiseptic, antispasmodic, bactericidal, carminative, cephalic, expectorant, febrifuge, laxative, rubefacient, stimulant, stomachic, sudorific and tonic. Ginger is warming, stimulating and grounding. It aids memory and is an aphrodisiac and also helps with pain relief and detoxification. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Ginger oil is used in the treatment of fractures, rheumatism, arthritis, bruising, carbuncles, diarrhea, colic, cramps, nausea, hangovers, travel and sea sickness, colds and flu, sores on the skin, sore throat,catarrh, congestion, coughs, sinusitis, chills and fever."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Ginger oil is a seasoning and fl"
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
    "botanicalName": "Hyssopus Officinalis",
    "category": "SPICE_OIL",
    "description": "Found in Mediterranean area, Hyssop plant from which Hyssop oil is extracted has a woody, hairy stem, small lance-shaped green leaves &amp; purple-blue flowers.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Hyssop Oil (Hyssopus Officinalis), extracted by steam distillation. CAS #: 8006-83-5,. F.E.M.A. : 2591. Specific Gravity: 0.93300 - 0.94500 @ 72&#176;F. Refractive Index: 1.48100 - 1.48900 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Anti-rheumatic, antispasmodic, antiseptic, carminative, digestive, cicatrizant, diuretic, expectorant, emmenagogue, nervine, sedative, tonic, stimulant and as a vulnerary agent. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Used in aromatherapy for various purpose. Provides relief against bronchial spasms & thus helpful for asthma attacks."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is easing sore throats caused by sinus issues."
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
    "botanicalName": "Laurus nobilis",
    "category": "SPICE_OIL",
    "description": "Laurel Berry oil is pale yellow, greenish yellow, or olive green, with a fresh medicinal, but pleasantly spicy and warm aroma, reminiscent of myrtle, juniperberry, hyssop, and similar oils.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Laurel Berry Oil (Laurus nobilis), extracted by steam distillation. CAS #: 8007-48-5. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is anti-rheumatic, antiseptic, bactericidal, diaphoretic, digestive, diuretic, emmenagogue, fungicidal, hypotensive, stomachic, sedative Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is useful in dyspepsia, flatulence, loss of appetite, scanty periods, colds, flu, tonsillitis, viral infections etc."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Laurel Berry oil has been used as an insect repellant, a spice oil, and a culinary herb oil."
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
    "botanicalName": "Myristica Fragrans",
    "category": "SPICE_OIL",
    "description": "The nutmeg fruit is pendulous and similar in presentation to a peach. When fully mature, it splits in two, exposing a crimson-colored aril. This is the mace which surrounds the nutmeg pit.",
    "shortSpec": "Steam distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 44,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Mace Oil (Myristica Fragrans), extracted by steam distillation. CAS #: 8007-12-3,. F.E.M.A. : 2653. Specific Gravity: 0.86000 - 0.89200 @ 20 C. Refractive Index: 1.47200 - 1.47900 @ 20 C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Mace oil is Non-toxic, non-irritant and non-sensitizing. The oils has analgesic, anti-oxidant, anti-septic and digestive Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Mace oil is used in the curing of cardiac disorders, pre-menstrual pain, digestive troubles like colic and flatulence. It is highly effective stimulant for the brain and the cardiac system."
      },
      {
        "title": "Therapeutic Properties",
        "description": "widely used in electuaries and tonics. It is also recommended for treating various inflammations found in the "
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
    "description": "Marjoram oil has a warm, slightly spicy smell and is colorless to pale yellow/amber in color. This tender bushy perennial herb, dark green oval leaves and small white or pink flowers.",
    "shortSpec": "Stem Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Marjoram Oil (Origanum majorana), extracted by stem distillation. CAS #: 8015-01-8,. F.E.M.A. : 2663. Specific Gravity: 0.86000 - 0.89200 @ 20 C. Refractive Index: 1.47200 - 1.47900 @ 20 C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Marjoram oil is non-toxic, non-irritant and non-sensitizing but should not be used during pregnancy. It was a very popular herb amongst the Greeks and widely used in medicine and perfumes. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Marjoram has been used as a folk remedy, culinary herb, fragrance and medicine. It is also used as an analgesic and anti-spasmodic and also been used traditionally treat depression."
      },
      {
        "title": "Therapeutic Properties",
        "description": "The oil is used as an external application for sprains, bruises, stiff and paralytic limb. The oil finds application i"
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
    "description": "Onion Oil is 100% natural and features clear amber yellow to amber orange color .It is a volatile Oil obtained by steam distillation process.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Onion Oil (Allium cepa), extracted by steam distillation. CAS #: 8002-72-0,. F.E.M.A. : 2817. Specific Gravity: 1.04020 - 1.142045 @ 72&#176;F. Refractive Index: 1.53000 - 1.57 000 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Anthelmintic, antimicrobial, anti-rheumatic, antiseptic, anti-sclerotic, antispasmodic, antiviral, bactericidal, carminative, depurative, digestive, diuretic, expectorant, fungicidal, hypoglycemic, hypotensive, stomachic, tonic and vermifuge. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Onions have been useful for treating various human diseases such as tumors, persistent coughs and cold. Medicine practitioners consider this plant form as a perfect home remedy for relieving disease syndromes."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Onion consumption can help in prevention of stomach and breast cancer. Onions are often us"
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
    "description": "Oregano is a member of the the mint family. Oregano essential oil is produced from the oregano plant through the process of steam distillation.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Oregano Oil (Origanum vulgare), extracted by steam distillation. CAS #: 8007-11-2,. F.E.M.A. : 2827. Specific Gravity: 0.93800 - 0.93880 @ 20C. Refractive Index: 1.50900 - 1.51600 @ 20C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is analgesic, anthelmintic, antirheumatic, antiseptic, antispasmodic, antitoxic, antiviral, bactericidal, carminative, choleretic, cytophylactic, diaphoretic, diuretic, emmenagogue, expectorant, febrifuge, fungicidal, parasiticide, rubefacient, stimulant, tonic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Used commonly in medicines for wounds, headaches, and venomous bites and even hemlock poisoning. Oregano oil has powerful anti-microbial properties which are used to assist in the prevention of infections and to treat skin fungi such as athlete's foot."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It has also been used to eliminate lice infesta"
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
    "description": "Parsley Seed Oil is steam extracted from a short-lived perennial herb that has bright green foliage and small greenish-yellow flowers that produce small brown seeds.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Parsley Seed Oil (Petroselinum crispum), extracted by steam distillation. CAS #: 8000-68-8,. F.E.M.A. : 2836. Specific Gravity: 0.9062 - 0.9068 @ 72&#176;F. Refractive Index: 1.4842 - 1.4849 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Antimicrobal, antirheumatic, antiseptic, astringent, carminative, diuretic, depurative, emmenagogue, febrifuge, hypotensive, laxative, stimulant (mild), stomachic, tonic (uterine). Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is used cosmetics and body care products, it is used in soaps, detergents, colognes, cosmetics and perfumes, especially men&#146;s fragrances."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Further, it is also extensively used in varied types of food flavorings, especially meats, pickles & sauces as well as alcoholic & soft drinks."
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
    "description": "Saffron is one of the most expensive spices. The oil has a woody, spicy and hay like odour.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Saffron Oil (Crocus sativus), extracted by steam distillation. CAS #: 8022-19-3. Specific Gravity: 0.91000 - 0.91500 @ 25 &#176;C. Refractive Index: 1.47600 - 1.48000 @ 20 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Strong antipoisonous, aphrodisiac, cardiotonic, carminative, diaphoretic, diuretic, emmenagogue, febrifuge, stimulant, lactogogue, livotonic, nervine tonic, sedative and styptic Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Saffron is a great medicine for the heart, and its fragrance in incense has been used traditionally for its heart-opening and compassion-enhancing powers. It fragrance is clean and purifying, and its color is that of bright golden sunlight."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is used in acne, apoplexy, arthritis, asthma, colic, cou"
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
    "description": "Sage Essential Oil, extracted from herbs that are considered sacred by the ancient Egyptians. The oil has a distinct spicy fragrance and is distilled from dried leaves of the herbs.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 50,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Sage Oil (Salvia officinalis), extracted by steam distillation. CAS #: 8022-56-8,. F.E.M.A. : 3001. Specific Gravity: 0.9110 - 0.9120 @ 72&#176;F. Refractive Index: 1.4666 - 1.4678 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is anti microbial, anti fungal, anti oxidant, antiseptic, anti inflammatory, anti spasmodic and anti bacterial. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "The Sage Essential Oil is widely used in the pharmaceutical industry because of its diverse medicinal properties."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Moreover, it is also choleretic, cicatrisant, depurative, a very effective digestive, disinfectant, laxative as well as stimulant."
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
    "description": "These are perennial herbs that have smooth narrow leaves; an erect stem up to 1,2 metres tall. Native to Europe, southern Russia and western Asia, these are available all over the world.",
    "shortSpec": "Steam Distillation method",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 32,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Tarragon Oil (Artemisia dracunculus), extracted by steam distillation method. CAS #: 8016-88-4,. F.E.M.A. : 2412. Specific Gravity: 0.860 - 0.950 @ 25.00 &#176;C. Refractive Index: 1.50400 - 1.52000 @ 20.00 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Anti-rheumatic, aperitif, digestive, deodorant, emmenagogue, stimulant and vermifuge. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Tarragon oil stimulates the appetite and has a pronounced effect on the sluggish digestive system. It can be helpful for anorexia, dyspepsia, flatulence, hiccups, internal spasm and nervous indigestion, as well as helpful for menstrual pains and to regulate periods."
      },
      {
        "title": "Therapeutic Properties",
        "description": "In vapor therapy and diluted in t"
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
    "description": "Thyme oil has a fresh, herbaceous, medicinal scent. It has often been described as sharp and warming.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 66,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Thyme Oil (Thymus vulgaris), extracted by steam distillation. CAS #: 8007-46-3,. F.E.M.A. : 3064. Specific Gravity: 0.91100 - 0.91800 @ 25&#176;C. Refractive Index: 1.48900 - 1.51000 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It has antirheumatic, antiseptic, antispasmodic, bactericidal, bechic, cardiac, carminative, cicatrisant, diuretic, emmenagogue, expectorant, hypertensive, insecticide, stimulant, tonic and vermifuge Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Thyme oil used to treat colds, coughs and sore throats, nose and chest infections when used as an inhalation or as a mouthwash or gargle. It helps in soothing and relaxation of skin and act as a compress."
      },
      {
        "title": "Therapeutic Properties",
        "description": "This oils extensively used by manufacturing perfumers for scenting soaps. It is used in flavour"
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
    "description": "Turmeric is a perennial plant with roots or tubers about 1 metre in height. Indian turmeric is considered the best in the world.",
    "shortSpec": "Steam Distillation",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Selection",
        "description": "Premium quality dried spices sourced from prime growing regions, inspected for purity, moisture content, and absence of adulterants."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Spice material steam-distilled in 316L stainless steel units; distillation parameters optimized per spice type to maximize yield of key aroma compounds."
      },
      {
        "stepNumber": 3,
        "title": "Clarification & Separation",
        "description": "Oil separated from hydrosol by gravity in Florentine flask; fine-filtered to remove any particulate matter."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & Purity Testing",
        "description": "Active compound content (e.g., piperine, eugenol, carvacrol) verified by GC-MS; specific gravity, optical rotation, and refractive index measured and documented."
      }
    ],
    "overview": "Turmeric Oil (Curcuma longa), extracted by steam distillation. CAS #: 8024-37-1. Specific Gravity: 0.9160 - 0.9366 @ 25&#176;C. Refractive Index: 1.5023 - 1.5138 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is natural antiseptic. aphrodisiac, analgesic, anti-arthritic, anti-inflammatory, anti-oxidant, anti-tumoral, bactericidal, diuretic, hypotensive, insecticidal, laxative, rubefacient and digestive stimulant Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Turmeric oil assist digestion and prevent the formation of gas. It promotes proper metabolism in the body, correcting both excesses and deficiencies."
      },
      {
        "title": "Therapeutic Properties",
        "description": "A good blood purifier, and works as a tonic to aid digestion and relieve congestion. It is used to give golden color to foods such as curries, mustard"
      }
    ],
    "signatureColor": "#7E4314",
    "labelImageUrl": "/labels/turmeric-oil.png",
    "compositeImageUrl": "/products/turmeric-oil.webp"
  },
  {
    "id": "carrier-almond-bitter",
    "slug": "almond-oil-bitter",
    "name": "Almond Oil Bitter",
    "botanicalName": "Prunus Amygdalus var amara",
    "category": "CARRIER_OIL",
    "description": "A middle sized tree upto 8 metre in height, leaves simple, flowers white tinged with red, fruits velvety drupes about 3-6 cm long, separating into two valves.",
    "shortSpec": "Cold pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Almond Oil Bitter (Prunus Amygdalus var amara), extracted by cold pressed. CAS #: 8013-76-1,. F.E.M.A. : 2046. Specific Gravity: 1.04200 - 1.05400 @ 25&#176;C. Refractive Index: 1.54100 - 1.55400 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Aphrodisiac, febrifuge, vermifuge, bactericidal, germicidal, fungicidal and anti viral, sedative & anesthetic,anti spasmodic & anti hydrophobic, aperient, diuretic, anti intoxicating:, anti carcinogenic, nervine, regulator, sedative, stimulant and tonic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Almonds are a rich source of vitamin E oil. It is uses such as, an antibacterial, anti-itch, local anesthetic and muscle relaxant."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is used to remove black spots and black marks on the skin Almond oil has been used worldwide as an alternative cancer treatment. It is widely used in flavorings & fra"
      }
    ],
    "signatureColor": "#8E5F12",
    "labelImageUrl": "/labels/almond-oil-bitter.png",
    "compositeImageUrl": "/products/almond-oil-bitter.webp"
  },
  {
    "id": "carrier-almond-sweet",
    "slug": "almond-oil-sweet",
    "name": "Almond Oil Sweet",
    "botanicalName": "Prunus Amygdalus",
    "category": "CARRIER_OIL",
    "description": "A middle sized tree upto 8 metre in height, leaves simple, flowers white tinged with red, fruits velvety drupes about 3-6 cm long, separating into two valves.",
    "shortSpec": "Cold pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 88,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "featured": true,
    "overview": "Almond Oil Sweet (Prunus Amygdalus), extracted by cold pressed. CAS #: 9032-37-9. Specific Gravity: 0.92500 - 0.94000 @ 25&#176;C. Refractive Index: 1.40200 - 1.50550 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Laxative, diuretic, aphrodisiac, demulcent, nutritious, aphrodisiac, lithontripic, emollient , nervine, regulator, sedative, stimulant and tonic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Sweet almond oil is used as a moisturizer and as a carrier oil in aromatherapy, It provides minerals, vitamins and proteins that are essential for beautiful skin. Commonly used to relieve itching, dryness or inflammation, this oil is excellent for all skin types."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Almond oil is used extensively in ma"
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
    "botanicalName": "Emblica officinalis",
    "category": "CARRIER_OIL",
    "description": "Amla Oil is one of the world's oldest natural hair care product.. As an Indian herb, amla oil has been used in India since a very long time.",
    "shortSpec": "Cold pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Amla Oil (Emblica officinalis), extracted by cold pressed. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Amla oil is aperient, carminative, diuretic, aphrodasiac . It has astringent and antibacterial Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Amla Oil enriches hair growth and pigmentation by stimulating the hair roots and scalp . It prevents premature graying of hair, dandruff, increases the strength of hair follicles (and thus preventing hair-fall)."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Application of Amla oil over the scalp has a cooling effect and therefore , keeps the mi"
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
    "botanicalName": "Prunus Armeniaca",
    "category": "CARRIER_OIL",
    "description": "A medium sized deciduous tree. The leaves are broad and roundish with pointed apex, smooth, margin, finely serrated, petiole &#189; inch to an inch long, generally tinged with red.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 70,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Apricot Oil (Prunus Armeniaca), extracted by cold pressed. CAS #: 72869-69-3,. F.E.M.A. : 2105. Specific Gravity: 0.95000 to 0.98000 @ 25&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Antitussive, anti-asthmatic , anti-inflammatory, anti-pyretic, calmative, sedative, laxative and tonic diuretic, carminative, stomachic. It has moisturizing, nourishing and revitalizing Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Apricot carrier oil is ideal for incorporation into skin care products, it is particularly rich in both linoleic acid and oleic acid. Apricot flavour uses for natural taste and flavour in food, sauce, bakery and confectionery applications and also as flavour ingredient in tobacco industry."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Apricot o"
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
    "description": "Arachis Oil (Peanut Oil) (Arachis hypogaea), extracted by cold pressed.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Arachis Oil (Peanut Oil) (Arachis hypogaea), extracted by cold pressed. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Arachis Oil (Peanut Oil) is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
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
    "description": "Argan Oil (Argania spinosa), extracted by cold pressed.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 90,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "featured": true,
    "overview": "Argan Oil (Argania spinosa), extracted by cold pressed. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Argan Oil is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
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
    "botanicalName": "Persea Americana",
    "category": "CARRIER_OIL",
    "description": "The tree grows to 20 m (65 ft), with alternately arranged, evergreen leaves, 12-25 cm long. The pear-shaped fruit is botanically a berry. It is a rich heavy oil, that is deeply penetrating.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 78,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Avocado Oil (Persea Americana), extracted by cold pressed. CAS #: 8024-32-6. Specific Gravity: 0.90900 - 0.91900 @ 25&#176;C. Refractive Index: 1.45700 - 1.47200 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It's Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Avocado oil is a penetrating oil that is easily absorbed and suitable for all skin types. It is an effective skin moisturizer due to its regenerating and structuring abilities."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is also believed to be an effective sexual stimulant and is used to make ointments aimed at delaying old age. The oil is"
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
    "botanicalName": "Bacopa Monnieri",
    "category": "CARRIER_OIL",
    "description": "Bacopa monnieri is a perennial, creeping herb whose habitat includes wetlands and muddy shores. Brahmi oil is the infusion of brahmi with the other carrier oils.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 65,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Brahmi Oil (Bacopa Monnieri), extracted by cold pressed. CAS #: 8016-24-8. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Tensions, anxiety, restlessness, joint pains, hair fall, insomnia and many more small and big health issues can all be taken care of by one stimulant: &#145;Brahmi Oil&#146;. Brahmi oil is a renowned oil used worldwide and is popular mainly because of its memory boosting Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Brahmi oil is a world renowned oil that is said to boost your memory, promote intelligence and improve your brain functioning. Massaging your scalp with brahmi oil promotes alertness, improves your concentration level and helps your brain to stay active and alert all the time."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Effective hair tonic a"
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
    "botanicalName": "Borago officinalis L",
    "category": "CARRIER_OIL",
    "description": "Borage Oil is derived from the seeds of the Borago Officinalis (Borage) plant, also know as a starflower. It is an annual herb native to the Mediterranean that has been naturalized in many regions.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Borage Seed Oil (Borago officinalis L), extracted by cold pressed. CAS #: 840112-16-8,. F.E.M.A. : NA. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It contains high amount of gamma-linolenic acid (GLA) of various seed oils. The GLA has the quality of converting into the precursors of a variety of prostaglandins and leukotrienes Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is used for premenstrual syndrome (PMS) and menopausal symptoms."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Known for anti-inflammatory properties It is also used while treating gum disease, rheumatoid arthritis, and asthma."
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
    "botanicalName": "Ricinus Communis",
    "category": "CARRIER_OIL",
    "description": "Castor oil is a vegetable oil obtained from the castor bean. Castor oil is a colorless to very pale yellow liquid with mild or no odor or taste.",
    "shortSpec": "Cold pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 88,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "featured": true,
    "overview": "Castor Oil (Ricinus Communis), extracted by cold pressed. CAS #: 8001 – 79 – 4,. F.E.M.A. : 2263. Specific Gravity: 0.95500 - 0.96100 @ 25 &#176;C. Refractive Index: 1.46200 - 1.47200 @ 20 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is antifungal, anti-inflammatory, Immune enhancer, laxative, stometic, tonic, skin tonic as well. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is widely used as carrier oil and best for hairs, massage scalp, also use on skin disorders or skin problems. Castor oil penetrates deep into the skin due to its molecular mass."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It can be use in shampoo, lipstick and lip balm. In the food industry, castor oil (food grade) is used in food additive"
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
    "botanicalName": "Cucumis Sativus",
    "category": "CARRIER_OIL",
    "description": "Cucumber oil is extracted by cold press method to obtain high mineral content.",
    "shortSpec": "Cold pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Cucumber Seed Oil (Cucumis Sativus), extracted by cold pressed. CAS #: 557-48-2,. F.E.M.A. : 3377. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is known for its cooling , calming effects, skin tonic and moisturizer Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Cucumber oil is used in various cosmetic applications for its cooling, nutritive, and soothing properties, and plays a function in skin care, hair care and nail creams. A little dash of cucumber essential oil in face masks or freshening gels and your skin starts glowing like never before."
      },
      {
        "title": "Therapeutic Properties",
        "description": "The combin"
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
    "description": "Evening Primrose is a common wildflower found in North America, Europe and parts of Asia.",
    "shortSpec": "Cold pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 80,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "featured": true,
    "overview": "Evening Primrose Oil (Oenothera biennis), extracted by cold pressed. CAS #: 65546-85-2. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It provides nutritional support and to treat against conditions such as sore throats, stomachaches, hemorrhoids, and bruises. It's antioxidant and other Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It cure, treat or prevent practically everything-from rheumatoid arthritis, breast pain, hot flushes, premenstrual syndrome, eczema, psoriasis, dermatitis and dry skin, relief of allergies, reducing joint inflammation and swelling asociated with arthritis, promoting healthy heart function, blood pre"
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
    "description": "Flax Seed Oil (Linseed) (Linum usitatissimum), extracted by cold pressed.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 62,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Flax Seed Oil (Linseed) (Linum usitatissimum), extracted by cold pressed. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Flax Seed Oil (Linseed) is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
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
    "botanicalName": "Vitis Vinifera",
    "category": "CARRIER_OIL",
    "description": "Grapeseed oil is obtained by cold pressing the Grape seeds.",
    "shortSpec": "Cold pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Grapeseed Oil (Vitis Vinifera), extracted by cold pressed. CAS #: 8024-22-4. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It has an strong anti-oxidants, anti-inflammatory, anti-allergic, anti-cancerous, anti-microbial activity. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is used as cooking oil. It is cholesterol free and helps lower the bad cholesterol and raise the good one."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It can be used for treating acne and dermatitis, sun burns, age spots, diabetes, high-blood pressure, rheumatoid arthritis, cataracts and macular degenerations, wrinkles and stretch marks. T"
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
    "description": "Hazelnut oil, pressed from hazelnuts, is strongly flavoured. The nut falls out of the husk when ripe, about seven to eight months after pollination.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Hazelnut Oil (Corylus avellana), extracted by cold pressed. CAS #: 185630-72-2. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: This oil is deeply penetrating and stimulating to the circulatory system. It helps to tighten and tone the skin, and is applicable for all skin types. Hazel nuts oils contain Vitamins A, B, D, E and various other minerals. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Hazelnut oil acts as an excellent emollient and moisturizer because it has a number of essential fatty acids such as linoleic acid, which can rehydrate the skin. So, this oil is extensively used in treating dry skin."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Moreover, this oil is very light and easily gets absorbed into the skin. The health"
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
    "description": "The jojoba oil is extracted from the seed of the plant. Female jojoba plants produce a seed that contains 40-60% liquid wax.",
    "shortSpec": "Cold pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 92,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "featured": true,
    "overview": "Jojoba Oil (Simmondsia chinensis), extracted by cold pressed. CAS #: 90045-98-0. Specific Gravity: 0.90500 - 0.92500 @ 25&#176;C. Refractive Index: 1.46000 - 1.46800 @ 25&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It has antioxidant, anti-inflammatory, mosturinzing, soothing, lubricat, non irritant, anti-bacterial Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Jojoba Oil is a most popular addition for skin care products, and is often used alone as a facial oil as it contains natural collagen. Jojoba Oil can help heal acne, athlete&#146;s foot, cuts, mouth sores, pimples and warts."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is very good moisturinser and used as make up remover. It is used for fr"
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
    "botanicalName": "Macadamia ternifolia",
    "category": "CARRIER_OIL",
    "description": "Macadamia oil is the non-volatile oil expressed from the nut meat of the macadamia (Macadamia integrifolia) tree.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 64,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Macadamia Oil (Macadamia ternifolia), extracted by cold pressed. CAS #: 128497-20-1. Specific Gravity: 0.9100 - 0.92000. Refractive Index: 1.46300 - 1.46500. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is calming and revitalizing Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Macadamia Carrier Oil is popular in cosmetic manufacturing and in combination with other carrier oils, can be used in both massage and aromatherapy."
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
    "botanicalName": "Moringa Oliefera",
    "category": "CARRIER_OIL",
    "description": "It is a very stable oil which is highly nutritious for the skin. This oil is much similar olive oil in composition but still it's very light.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 74,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Moringa Oil (Moringa Oliefera), extracted by cold pressed. CAS #: 93165-54-9,. F.E.M.A. : 2406. Specific Gravity: 0.95 - 0.96 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It has numerous antioxidants in it, the oil does not become rancid for several years after it is produced. This makes Moringa oil sought after for a number of health and beauty applications. Moringa oil is viable for use as a cooking oil, it is occasionally used as a dressing for vegetables, salads, and other green dishes. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Moringa carrier oil is highly valued in cosmetic industries. It is considered to best for massage and aromatherapy applications."
      },
      {
        "title": "Therapeutic Properties",
        "description": "The oil finds application in a range of products including anti-aging cream, hair care products, soap and body wash, face cream, perfume and deodrant. Moringa oil is a pop"
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
    "description": "Musk melons are majorly cultivated in India, it is cultivated in the summer season from April to July. Musk melon being an annual plant is cultivated from the seeds by Cold Pressed mathod.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Muskmelon Oil (Cucumis melo), extracted by cold pressed. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Musk Melons are rich in potassium, a nutrient that may help control blood pressure, regulate heart beat, and possibly prevent strokes. It is a good source of Vitamins A, B, and C. It has moisturizing Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Muskmelon Seed Oil contains a high levels of Linoleic, Fatty Acid or Omega 6, The oil also contains notable amounts of Oleic and Palmitic Fatty Acids. Cold Pressed Muskmelon Seed Oil is used in Skincare Products to enhance the products with surprising benefits of the Muskmelon Plant."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Muskmelon oil h"
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
    "botanicalName": "Azadirachta Indica",
    "category": "CARRIER_OIL",
    "description": "Neem is a medium sized to large tree characterized by its short straight trunk, furrowed dark brown to gray bark and dense rounded crowns of pinnate leaves.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 80,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "featured": true,
    "overview": "Neem Oil (Azadirachta Indica), extracted by cold pressed. CAS #: 8002-65-1. Specific Gravity: 0.89000 to 0.89900 @ 25&#176;C. Refractive Index: 1.47600 to 1.49000 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It has antibacterial, antiviral, antifungal, antiseptic, and antiparasitic, astrigent, purgative, emollien, anti inflammatory, digestive, diuretic, laxative, expectorant, blood purifire, anti diabetic and tonic Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Neem is a herbal remedy for the medication of fever, gastrointestinal disease, skin disorders, respiratory disease, intestinal parasites, immune system disorder and yeast infections in pets and many. It may inhibit the development of viruses and prevent them from entering and infecting cells."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Neem o"
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
    "botanicalName": "Olea Europaea",
    "category": "CARRIER_OIL",
    "description": "This golden brown oil has a rich, full bodied aroma. It is highly stable in nature.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 75,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Olive Oil (Olea Europaea), extracted by cold pressed. CAS #: 8001-25-0. Specific Gravity: 0.91500 - 0.92500. Refractive Index: 1.46520 - 1.47540. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It has repellent anti-oxidizing Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Olive oil has an effect in preventing the formation of blood clots and platelet aggregation. It helps in avoiding excessive blood coagulation."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It can attenuate the effect of fatty foods in encouraging blood clot formation. Regular consumption of olive oil decreases both systolic (maximum) and diasto"
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
    "botanicalName": "Prunus Persica",
    "category": "CARRIER_OIL",
    "description": "Peach kernel oil is obtained from the kernel, or the nut of the ripe fruit. The fine textured golden oil has a delicate, sweet aroma. It contains minerals and vitamins, especially Vitamin E. Peach kernel oil has a very similar consistency to Almond Oil and they are often stated as substitutes for each other.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Peach Oil (Prunus Persica), extracted by cold pressed. CAS #: 8002-78-6. Specific Gravity: 1.469 – 1.473 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: This oil contains vitamin E which has therapeutic, antioxidant and preservative Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Peach Kernel oil is used in massage, cosmetics and soap manufacturing especially favored for facial massages as it encourages suppleness and elasticity."
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
    "description": "An attractive shrub or small tree, to 20 or 30 ft (6 or 10 m) high, the pomegranate is much-branched, more or less spiny and extremely long-lived.",
    "shortSpec": "Cold pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 76,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Pomegranate Seed Oil (Punica granatum), extracted by cold pressed. CAS #: 8007-01-0,. F.E.M.A. : 2989. Specific Gravity: 0.94340 - 0.99000 @ 25&#176;C. Refractive Index: 1.49000 - 1.49000 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Pomegranate seed oil adds moisture, has natural estrogenic Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Pomegranate seed oil has been found to be of help prevent the formation of skin cancer by reducing the frequency of lesions and limit the occurrence of tumors. A moisturising and nourishing oil containing over 60% punicic acid which gives the oil anti-inflammatory and anti-ageing properties."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is u"
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
    "description": "Pumpkin oil is viscous and its color ranges from very faint red to bright red.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 52,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Pumpkin Oil (Cucurbita pepo), extracted by cold pressed. CAS #: 871582-63-7. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: A lot of antioxidant against the free radicals in the blood helps to keep young and healthy. It has Omega 3 and Omega 6: also known as essential fatty acids(EFAs). Also a lot of phytosterole which is well known for a positive effect against high cholesterol. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is used as a cooking oil , it can be serves as a salad dressing when combined with honey or olive oil. Drizzle the oil on pasta, rissotto, soups, stews, steamed vegetables, cooked meats, cold meats and vanilla ice cream."
      },
      {
        "title": "Therapeutic Properties",
        "description": "The oil is rich in fatty acids, which are good for the joints. The oil is ri"
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
    "botanicalName": "Oryza Sativa",
    "category": "CARRIER_OIL",
    "description": "Rice is normally grown as an annual plant, the rice plant can grow to 1–1.8 m (3.3–5.9 ft) tall, the edible seed is a grain (caryopsis) 5–12 mm (0.20–0.47 in) long and 2–3 mm (0.079–0.12 in) thick.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 65,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Rice Bran Oil (Oryza Sativa), extracted by cold pressed. CAS #: 68553-81-1. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Rice Bran Oil is truly The World's Healthiest edible oil, containing vitamins, antioxidants, nutrients and trans fat free. It is extremely light, versatile and delicious. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Rice bran oil can help lower cholesterol, fight diseases, enhance the immune system, fight free radicals and more.. Use it to fry, saute, in salad dressings, baking, dipping oils and where ever you use cooking oil."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Once you use it you will be amazed cooking light and healthy is also the best tasting"
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
    "botanicalName": "Rosa canina",
    "category": "CARRIER_OIL",
    "description": "Rosehip seed oil can also be extracted from Rosa canina, which grows in many regions of the world including South Africa and Europe. Borage oil contains provitamin A (mostly beta-Carotene)",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 90,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "featured": true,
    "overview": "Rosehip Seed Oil (Rosa canina), extracted by cold pressed. CAS #: 92347-25-6,. F.E.M.A. : NA. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is considered a &#147;dry&#148; oil, meaning that it soaks into the skin easily, and does not leave a greasy residue. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Rosehip oil fights against dry, weathered, and dehydrated skin. It works wonders on scars and is the predominant oil used for treating wrinkles and premature aging."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is used for the treatment of skin conditions, including dermatitis, acne and eczema, for mature and sun burnt skin as well as brittl"
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
    "description": "Safflower is a highly branched, herbaceous, thistle-like annual plant. It is commercially cultivated for vegetable oil extracted from the seeds.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Safflower Oil (Carthamus tinctorius), extracted by cold pressed. CAS #: 8001-23-8. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Safflower Carrier Oil is heavily used in manufacturing, massage therapy, and to a lesser degree, as a carrier oil in aromatherapy. Safflower Carrier Oil is easily absorbed."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Safflower oils use as a supplement, it is also used in cooking, salad dressings and other culinary applications. Safflower oil "
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
    "botanicalName": "Sesamum Indicum",
    "category": "CARRIER_OIL",
    "description": "This oil has a rich golden color, with a bold, nutty flavor. It is an edible vegetable oil derived from sesame seeds.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 74,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Sesame Seed Oil (Sesamum Indicum), extracted by cold pressed. CAS #: 8008-74-0. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is excellent laxative. moisturizer, Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Sesame oil is widely used as a natural moisturizer and added to moisturizing skin care products. This oil also makes a good choice for those who like body oils."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Add a few drops of your favorite essential oil to a tablespoon of sesame oil and you have a light, pure body perfume. Sesame oil is used in"
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
    "botanicalName": "Helianthus Annuus",
    "category": "CARRIER_OIL",
    "description": "Sunflower oil is cold expressed from the seeds of the plant.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Sunflower Oil (Helianthus Annuus), extracted by cold pressed. CAS #: 8001-21-6. Specific Gravity: 0.92200 - 0.99600 @ 25.00 &#176;C. Refractive Index: 1.46630 - 1.68400 @ 40.00 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It has smoothing Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Sunflower oil is a versatile oil that can be used for aromatherapy oil, massage blends and manufacturing cosmetics."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Sunflower Oil useful to improve heart health, provide natural energy, lower risk of infant infection, stops free radicals, natural antioxidants, natural moisturizer, prevents arthritis"
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
    "botanicalName": "Juglans Regia",
    "category": "CARRIER_OIL",
    "description": "Walnut oil is better known for culinary use, where chefs prefer to use it cold as heating may destroy its nutty quality.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Walnut Oil (Juglans Regia), extracted by cold pressed. CAS #: 8024-09-7. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is an excellent emollient with moisturizing Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Walnuts are rich in phytonutrients and are an excellent source of selenium, phosphorous, magnesium, zinc, iron, and calcium and hefty levels of Vitamins B-1, B-2, and B-3, coupled with Vitamin-E and niacin. Walnut Oil makes a perfect choice for aromatherapy and massage."
      },
      {
        "title": "Therapeutic Properties",
        "description": "In both, the walnut oil is di"
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
    "botanicalName": "Citrullus Vulgaris",
    "category": "CARRIER_OIL",
    "description": "Watermelon Oil is in Yellow in color with faint, slightly nutty odor. Watermelon Carrier Oil is light, penetrating and emollient oil.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 52,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Watermelon Oil (Citrullus Vulgaris), extracted by cold pressed. CAS #: 871582-63-7. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Watermelon oil is light in texture, non-greasy, penetrating, absorbs quickly, highly moisturizing, emollient, rich in Omega 6 and 9 EFAs, dissolves Sebum buildup, stable shelf-life and excellent substitute for mineral oil Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Water melon oil is a preferred base for various cosmetics and hair care products for its non-greasy feel and moisturizing properties. This oil can be used as a natural baby oil and is a good option for a carrier oil in aromatherapy."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Watermelon seed oil is also a perfect choice for inclusion in hair "
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
    "description": "A tufted annual grass of 60-150 cm height, stems hollow, tufted and erect. Leaves are very long and narrow with lingule and auricles.",
    "shortSpec": "Cold Pressed",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 70,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed/Kernel Selection",
        "description": "Premium grade seeds or kernels selected and inspected for moisture content, purity, and freedom from pesticide residue prior to processing."
      },
      {
        "stepNumber": 2,
        "title": "Cold Pressing",
        "description": "Mechanical cold-press extraction at below 45°C preserves heat-sensitive fatty acids, vitamins, and phytonutrients in the final oil."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Clarification",
        "description": "Pressed oil passed through multi-stage filtration to remove sediment, wax, and particulates while retaining beneficial plant compounds."
      },
      {
        "stepNumber": 4,
        "title": "Quality Testing",
        "description": "Acid value, peroxide value, saponification value, iodine value, and fatty acid profile verified against pharmacopoeial standards."
      }
    ],
    "overview": "Wheat Germ Oil (Triticum vulgare), extracted by cold pressed. CAS #: 68917-73-7. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is Anti-oxidant, nervine, purgative, relaxing, rejuvenating , tonic (skin, liver). It is excellent moisturizer , anti-oxidant and very nutritious. It regulate cardiovascular, immune, nervous, reproductive systems and to maintain healthy cells and body functions. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Wheatgerm oil is a perfect addition for massage oil or for preparing carrier blends. In beauty, skincare, and aromatherapy, wheatgerm massage blends assist in promoting circulation and formation of new cells."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It will help in revitalizing skin and repairing damaged tissues Wheat germ oil consists of "
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
    "botanicalName": "Nelumbo nucifera",
    "category": "FLORAL_ABSOLUTE",
    "description": "Owing to its therapeutic properties, it turns out to be a greatest health tonic ever found. The Blue Lotus was a symbol of sexuality some people says that flower has a sort of Viagra effect, sometimes in scenes of sexual debauchery. Traditionally used to promote sexual desire. It helps in providing relief from pain, creating a feeling of well being, ecstasy, euphoria as well as helps in increasing circulation. Further, it also contains an anti-spasmotic called Nuciferin. It can be diluted in base oil for massage, burned as incense, spray as potpourri, to smell, 3-5 drops Botanical Bath, some people steeps in wine, hot water or tea.",
    "shortSpec": "Solvent Extracted · Blue",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 65,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Flower Harvesting",
        "description": "Petals harvested at dawn when aromatic compound concentration is highest, handled carefully to prevent bruising and enzymatic degradation."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Flowers processed with food-grade hexane or ethanol to produce a concrete, capturing both volatile and non-volatile aromatic molecules."
      },
      {
        "stepNumber": 3,
        "title": "Concrete to Absolute Conversion",
        "description": "Concrete washed with anhydrous alcohol and chilled to precipitate waxes, then filtered and vacuum-distilled to yield the absolute."
      },
      {
        "stepNumber": 4,
        "title": "Residual Solvent Testing",
        "description": "Finished absolute tested for residual solvent content by GC headspace analysis, ensuring compliance with IFRA and food-grade specifications."
      }
    ],
    "overview": "Blue Lotus Oil (Nelumbo nucifera), extracted by high standard extraction technique., from flowers petals. Key constituents include Phytosterols, bioflavonoids and phosphodiesterase Specific Gravity : 0.9802 - 0.98.9 @ 72&#176;F Refractive Index : 1.5510 - 1.5518 @ 72&#176;F. CAS No: 476-66-4. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Anti-spasmotic , sexual desire enhancer, Aphrodisiac, Anti carcinogenic, Febrifuge, Anti depressant, Sedative, blood circulatory. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Owing to its therapeutic properties, it turns out to be a greatest health tonic ever found. The Blue Lotus was a symbol of sexuality some people says that flower has a sort of Viagra effect, sometimes in scenes of sexual debauchery."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Traditionally used to promote sexual desire. It helps in providing relief from pain, creating a feeling of well being, ecstasy, euphoria as well as helps in increasing circulation."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Further, it also contains an anti-spasmotic called Nuciferin. It can be diluted in base oil for massage, burned as incense, spray as potpourri, to smell, 3-5 drops Botanical Bath, some people steeps in wine, hot water or tea."
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
    "description": "Boronia absolute has a dark yellow viscous liquid fresh, spicy, fruit-like scent with a rich, floral undertone. The essential oil is derived through solvent extraction. It is primarily used in perfumery and aromatics industry. It's sweet, honey notes also makes it suitable for aromatherapy based applications. Soothing, inspiring and aiding in depression, the derived essential oil is also known for its aphrodisiac properties.",
    "shortSpec": "Solvent Extracted · Dark green viscous",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 40,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Flower Harvesting",
        "description": "Petals harvested at dawn when aromatic compound concentration is highest, handled carefully to prevent bruising and enzymatic degradation."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Flowers processed with food-grade hexane or ethanol to produce a concrete, capturing both volatile and non-volatile aromatic molecules."
      },
      {
        "stepNumber": 3,
        "title": "Concrete to Absolute Conversion",
        "description": "Concrete washed with anhydrous alcohol and chilled to precipitate waxes, then filtered and vacuum-distilled to yield the absolute."
      },
      {
        "stepNumber": 4,
        "title": "Residual Solvent Testing",
        "description": "Finished absolute tested for residual solvent content by GC headspace analysis, ensuring compliance with IFRA and food-grade specifications."
      }
    ],
    "overview": "Boronia Absolute Oil (Boronia megastigma), extracted by solvent extraction, from flowers petals. Key constituents include Ionon, eugenol, triacontane etc. Specific Gravity : 0.95000 - 1.02000 @ 25.00 &#176;C. CAS No: 8053-33-6. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Dark green viscous liquid with floral odor Description : Boronia absolute has a dark yellow viscous liquid fresh, spicy, fruit-like scent with a rich, floral undertone. The essential oil is derived through solvent extraction. Known properties: Aphrodisiac, deodorant, relaxing, sedative, warming, Soothing, anti depressing. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is primarily used in perfumery and aromatics industry."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It's sweet, honey notes also makes it suitable for aromatherapy based applications."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Soothing, inspiring and aiding in depression, the derived essential oil is also known for its aphrodisiac properties."
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
    "description": "Calendula infused oil is macerated from the vivid orange and yellow petals of Calendula officinalis. Celebrated for its gentle anti-inflammatory and vulnerary virtues, it is a primary soothing agent for eczema, burns, ulcers, and cracked skin.",
    "shortSpec": "Solvent Extracted · Yellow",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 78,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Flower Harvesting",
        "description": "Petals harvested at dawn when aromatic compound concentration is highest, handled carefully to prevent bruising and enzymatic degradation."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Flowers processed with food-grade hexane or ethanol to produce a concrete, capturing both volatile and non-volatile aromatic molecules."
      },
      {
        "stepNumber": 3,
        "title": "Concrete to Absolute Conversion",
        "description": "Concrete washed with anhydrous alcohol and chilled to precipitate waxes, then filtered and vacuum-distilled to yield the absolute."
      },
      {
        "stepNumber": 4,
        "title": "Residual Solvent Testing",
        "description": "Finished absolute tested for residual solvent content by GC headspace analysis, ensuring compliance with IFRA and food-grade specifications."
      }
    ],
    "featured": true,
    "overview": "Calendula Oil (Calendula officinalis), extracted by solvent extraction, from flowers. Key constituents include Carotenoids, triterpenes, pentacyclic alcohols loke faradol, anidiol, calenduladiol, heliantriol, flavonoids, isorhamnetin clycosides, plant acids and a variety of alcoholic compounds. CAS No: 70955-25-8. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Yellow with rich and balsamic odor Description : Calendula absolute is extracted by the solvent method from the flowers and contains Calendulin, waxes and a little amount of volatile oil. Known properties: Perfume, aphrodisiac, deodorant, relaxing, sedative, anti-inflammatory, having great healing, soothing and softening qualities. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Calendula oil is renowned for soothing inflamed skin, rashes, burns, eczema, bed sores, and varicose veins."
      },
      {
        "title": "Therapeutic Properties",
        "description": "This oil is great to help with sore, inflamed and itchy skin conditions, also for burns, eczema and nappy rash, as well as sore cracked nipples. It is also used to treat thread and spider veins as well as varicose veins. Calendula massage oil has great healing, soothing and softening qualities which makes it a good choice to include when mixing a massage oil or preparing a carrier oil blend."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "When looking for a base oil for massaging to use when suffering from skin problems, either with or without the addition of essential oils, then consider calendula oil."
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
    "description": "Mimosa absolute is solvent-extracted from the delicate flower clusters of Acacia decurrens. Featuring a warm, sweet, powdery floral aroma with green undertones, it is cherished as a precious heart note in high perfumery and soothing cosmetic elixirs.",
    "shortSpec": "Solvent Extracted · Pale yellow brown semi-solid",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Flower Harvesting",
        "description": "Petals harvested at dawn when aromatic compound concentration is highest, handled carefully to prevent bruising and enzymatic degradation."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Flowers processed with food-grade hexane or ethanol to produce a concrete, capturing both volatile and non-volatile aromatic molecules."
      },
      {
        "stepNumber": 3,
        "title": "Concrete to Absolute Conversion",
        "description": "Concrete washed with anhydrous alcohol and chilled to precipitate waxes, then filtered and vacuum-distilled to yield the absolute."
      },
      {
        "stepNumber": 4,
        "title": "Residual Solvent Testing",
        "description": "Finished absolute tested for residual solvent content by GC headspace analysis, ensuring compliance with IFRA and food-grade specifications."
      }
    ],
    "overview": "Mimosa Absolute Oil (Acacia dealbata), extracted by solvent extraction, from flowers & twigs. CAS No: 8031-03-6, F.E.M.A. : 2755. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale yellow brown semi-solid with floral odor Description : The Mimosa plant is a small thorny tree which produces lightly fragrant yellow pompoml flower. The pure oil has sweet floral scent with woody undertone. Known properties: Deodorant, relaxing, sedative, warming, Soothing, anti depressing. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Mimosa Absolute is widely used in aromatherapy, cosmetics and soap manufacturing. It is relaxing and warming; and helps to overcome anxiety and sensitivity."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Mimosa absolute has an exquisite sweet-floral aroma used in luxury perfumes and nourishing creams for sensitive skin."
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
    "description": "Oakmoss Absolute oil is a solvent extracted from light green lichen that is found growing primarily on oak trees as well as sometimes on other species. It is used as a fixative, in soaps and perfumes. It is used in skin care products, sprays and many such cosmetics mainly due to its anti septic and demulcent properties.",
    "shortSpec": "Solvent Extracted · Dark green viscous",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 42,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Flower Harvesting",
        "description": "Petals harvested at dawn when aromatic compound concentration is highest, handled carefully to prevent bruising and enzymatic degradation."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Flowers processed with food-grade hexane or ethanol to produce a concrete, capturing both volatile and non-volatile aromatic molecules."
      },
      {
        "stepNumber": 3,
        "title": "Concrete to Absolute Conversion",
        "description": "Concrete washed with anhydrous alcohol and chilled to precipitate waxes, then filtered and vacuum-distilled to yield the absolute."
      },
      {
        "stepNumber": 4,
        "title": "Residual Solvent Testing",
        "description": "Finished absolute tested for residual solvent content by GC headspace analysis, ensuring compliance with IFRA and food-grade specifications."
      }
    ],
    "overview": "Oakmoss Absolute Oil (Evernia Prunastri), extracted by solvent extraction, from moss or lichens. Key constituents include Evernic acid, d-usnic acid, Atranorine, Chloratronorine Specific Gravity : 0.900 - 1.150 @ 20&#176;C Refractive Index : 1.550 - 1.575 @ 20&#176;C. CAS No: 68917-10-2. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Dark green viscous liquid with sweet, phenolic, mossy odor Description : Oakmoss Absolute oil is a solvent extracted from light green lichen that is found growing primarily on oak trees as well as sometimes on other species. Known properties: Antiseptic, demulcent, expectorant, fixative, Restorative. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is used as a fixative, in soaps and perfumes."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is used in skin care products, sprays and many such cosmetics mainly due to its anti septic and demulcent properties."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "This oil is also known for its fixative values."
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
    "botanicalName": "Nymphea Alba",
    "category": "FLORAL_ABSOLUTE",
    "description": "White Lotus Absolute is distilled from wild flowers mainly founded in Tamilnadu, India. It is less pungent & floral than Pink Lotus, but has a clarity & smoothness of its own. It has a mix of subtle aroma with powerful emotional and spiritual effect that provides a feeling of serenity & tranquility. Wonderful meditation oil, it is also associated with crown chakra and help in connecting the mind and the heart. It creates in the mind an image of perfect beauty for those who have beheld this wondrous flower. It is used to treat weak sexual function in men and leucorrhea in women. It is helpful in heart and liver disorders. It's an antidote for mushroom poisoning.",
    "shortSpec": "Solvent Extracted · Brown red oily viscous",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "DROPPER_10ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Flower Harvesting",
        "description": "Petals harvested at dawn when aromatic compound concentration is highest, handled carefully to prevent bruising and enzymatic degradation."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Flowers processed with food-grade hexane or ethanol to produce a concrete, capturing both volatile and non-volatile aromatic molecules."
      },
      {
        "stepNumber": 3,
        "title": "Concrete to Absolute Conversion",
        "description": "Concrete washed with anhydrous alcohol and chilled to precipitate waxes, then filtered and vacuum-distilled to yield the absolute."
      },
      {
        "stepNumber": 4,
        "title": "Residual Solvent Testing",
        "description": "Finished absolute tested for residual solvent content by GC headspace analysis, ensuring compliance with IFRA and food-grade specifications."
      }
    ],
    "overview": "White Lotus Oil (Nymphea Alba), extracted by high standard, from flowers petals. Key constituents include Polysaccharids 2.5%, Polysaccharids 5%, Saponin 5%. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Brown red oily viscous liquid with pleasant flower odour Description : White Lotus Absolute is distilled from wild flowers mainly founded in Tamilnadu, India. Known properties: Perfume, aphrodisiac, deodorant, relaxing, Calming, liver-tonic, and provides a feeling of serenity & tranquility. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is less pungent & floral than Pink Lotus, but has a clarity & smoothness of its own. It has a mix of subtle aroma with powerful emotional and spiritual effect that provides a feeling of serenity & tranquility. Wonderful meditation oil, it is also associated with crown chakra and help in connecting the mind and the heart."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It creates in the mind an image of perfect beauty for those who have beheld this wondrous flower. It is used to treat weak sexual function in men and leucorrhea in women. It is helpful in heart and liver disorders."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It's an antidote for mushroom poisoning."
      }
    ],
    "signatureColor": "#543C62",
    "labelImageUrl": "/labels/white-lotus-oil.png",
    "compositeImageUrl": "/products/white-lotus-oil.webp"
  },
  {
    "id": "oleo-asafoetida",
    "slug": "asafoetida-oleoresin",
    "name": "Asafoetida Oleoresin 10-17%",
    "botanicalName": "Ferula assafoetida",
    "category": "OLEORESIN",
    "description": "Asafoetida Oleoresin has a characteristic aromatic order and bitter acidic taste. It is actually a gum oleoresin from the various plants of ferula varieties. Asafoetida oleoresin is used in diluted form. The pure resin is very strong and with disagreeable odour.",
    "shortSpec": "Solvent Extracted · Resin: 40-64% · Volatile Oil: 10-17% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 45,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Asafoetida Oleoresin 10-17% (Ferula assafoetida), obtained by Solvent extraction from gum oleoresin exudate. Solubility: Soluble in Oils. Flavor: A characteristic aromatic order and bitter acidic taste.. Major Constituents: Asafoetida contains Resin (40 - 64 %), Gum (approx. 25%), Voltile Oil (10-17%), Ash (1.5 to 10 %). Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Yellow colored fluid liquid. Description: Asafoetida Oleoresin has a characteristic aromatic order and bitter acidic taste. It is actually a gum oleoresin from the various plants of ferula varieties. Asafoetida oleoresin is used in diluted form. The pure resin is very strong and with disagreeable odour. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 18 months under the specified storage conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "As medicine it is useful for curing colic flatulence."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "Uses have been mentioned for toothache cure."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "In cooking asafoetida sprinkled in very minute quantity on fried snacks give an agreeable flavour."
      }
    ],
    "signatureColor": "#8C2518",
    "labelImageUrl": "/labels/asafoetida-oleoresin.png",
    "compositeImageUrl": "/products/asafoetida-oleoresin.webp"
  },
  {
    "id": "oleo-ajowan",
    "slug": "ajowan-oleoresin",
    "name": "Ajowan Seed Oleoresin 35-60%",
    "botanicalName": "Trachyspermum Copticum",
    "category": "OLEORESIN",
    "description": "Ajowan oleorisin represent overall flavor Profile of spices. It comprises of volatile essential oil and non volatile resinous fraction comprising taste components. Oleoresin of ajowan is pale green oily liquid with characteristic aroma and sharp taste attribute. The high content of thymol makes ajowin oleoresin ideal for medicinal uses.",
    "shortSpec": "Solvent Extracted · Thymol: 35-60% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Ajowan Seed Oleoresin 35-60% (Trachyspermum Copticum), obtained by Solvent Extraction from dried spice material. Solubility: Soluble in oil, insoluble in water. Flavor: A characteristic aroma and sharp taste. Major Constituents: Primarily contains 35 – 60% thymol, p-cymine (10-16%), a-terepinene (10-16%), ß-pinene (4-5%) and dipenene (4-6%).. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Pale green oily liquid with characteristic aroma. Description: Ajowan oleorisin represent overall flavor Profile of spices. It comprises of volatile essential oil and non volatile resinous fraction comprising taste components. Oleoresin of ajowan is pale green oily liquid with characteristic aroma and sharp taste attribute. The high content of thymol makes ajowin oleoresin ideal for medicinal uses. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 18 months under the specified storage conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Ajowain Seed Oleoresin is widely used for food preparation as a spice."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "It has antiseptic, germicidal, and digestive property."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "AJOWAN SEED OLEORESIN offers uniform flavor strength across production batches, superior shelf stability (18 months under the specified storage conditions.), and clean dissolution in food-grade carriers."
      }
    ],
    "signatureColor": "#8C2518",
    "labelImageUrl": "/labels/ajowan-oleoresin.png",
    "compositeImageUrl": "/products/ajowan-oleoresin.webp"
  },
  {
    "id": "oleo-basil",
    "slug": "basil-oleoresin",
    "name": "Basil Oleoresin 4-8%",
    "botanicalName": "Ocimum basilicum",
    "category": "OLEORESIN",
    "description": "Basil Oleoresin is made by solvent extraction of the dried leaves of basil Ocimum Basilicum L (family:Lamiaceae) of Egyptsian origin.",
    "shortSpec": "Solvent Extracted · Volatile Oil: 4-8% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 40,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Basil Oleoresin 4-8% (Ocimum Basilicum), obtained by Extracted by solvent extraction of the dried leaves from dried leaves. CAS #: 8015-73-4. Solubility: Soluble in fixed oils. Flavor: A floral-spicy odour typical of basil and with a spicy flavour with mild bitterness. Major Constituents: a-pinene, camphene, b-pinene, myrcene, limonene, geraniol, methyl cinnamate and eugenol.. Specification: Volatile Oil Content (v/w) : 4% to 8% Residual Solvent : Less than 20ppm. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: A dark green pasty to semifluid. Description: Basil Oleoresin is made by solvent extraction of the dried leaves of basil Ocimum Basilicum L (family:Lamiaceae) of Egyptsian origin. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 18 months under the specified storage conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Basil oleoresin is employed in culinary coverings with good achiever, adding together a noticeable, productive basil flavor."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "It has been marked towards improving capabilities in blood circulation and the gastrointestinal system in a few citizenries."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "BASIL OLEORESIN offers uniform flavor strength across production batches, superior shelf stability (18 months under the specified storage conditions.), and clean dissolution in food-grade carriers."
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
    "botanicalName": "Capsicum annum",
    "category": "OLEORESIN",
    "description": "The product is natural and is obtained by solvent extraction of ground dried fruits of Capsicum Annum L or Capsicum Fruitescens L with complete aroma and taste of the Fruit",
    "shortSpec": "Solvent Extracted · Capsaicin: Min. 10% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Capsicum Oleoresin 10% (Capsicum Annuum), obtained by Solvent extracted product with permitted diluents and emulsifieres from dried fruits / berries. CAS #: 8023-77-6. Solubility: Soluble in alcohol. Flavor: A powerful and refreshing aroma of freshly ground dried fruits of Capsicum. Major Constituents: Capsaicin, Dihydrocapsaicin, and Nordihydrocapsaicin. Specification: Capsaicin Content (by UV) : Min. 10% Colour Value : CU2000 Residual solvent : Less than 25 ppm. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Light reddish homogeneous free flowing liquid. Description: The product is natural and is obtained by solvent extraction of ground dried fruits of Capsicum Annum L or Capsicum Fruitescens L with complete aroma and taste of the Fruit Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 18 months under the specified storage conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Used to add flavor to various food preparations."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "This product is a powerful irritant and a carminative, which is also used as a counter irritant in lumbago and neuralgia."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "It can also be used to treat stomach ache that involves poorly functioning stomach muscles and as an antibacterial agents."
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
    "botanicalName": "Capsicum annum",
    "category": "OLEORESIN",
    "description": "The product is natural and is obtained by the solvent extraction of dried fruits of Capsicum annum L. The oleoresin in the powder is generally extracted with the addition of an organic solvent. It contains natural Oleoresin Capsicum as the active ingredient.",
    "shortSpec": "Solvent Extracted · Capsaicin: Min. 13% (2 MSHU) · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 42,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Capsicum Oleoresin 2 MSHU 13% (Capsicum annum), obtained by Solvent extracted product with permitted diluents and emulsifieres from dried fruits / berries. CAS #: 8023-77-6. Solubility: Soluble in oils, insoluble in water. Flavor: A powerful and refreshing aroma of freshly ground dried fruits of Capsicum. Major Constituents: Capsaicin, Dihydrocapsaicin, and Nordihydrocapsaicin. Specification: Capsaicin Content (by HPLC) : Min. 2MShu Residual solvent : Less than 25 ppm Capsaicin : Not less than 13%. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Dark red-brown with spicy,strong burning odor. Description: The product is natural and is obtained by the solvent extraction of dried fruits of Capsicum annum L. The oleoresin in the powder is generally extracted with the addition of an organic solvent. It contains natural Oleoresin Capsicum as the active ingredient. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 18 months under the specified storage conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Used to add flavor to various food preparations."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "This product is a powerful irritant and a carminative, which is also used as a counter irritant in lumbago and neuralgia."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "It can also be used to treat stomach ache that involves poorly functioning stomach muscles and as an antibacterial agents."
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
    "botanicalName": "Capsicum annum",
    "category": "OLEORESIN",
    "description": "The product is natural and is obtained by solvent extraction of ground dried fruits of Capsicum Annum L or Capsicum Fruitescens L with complete aroma and taste of the Fruit",
    "shortSpec": "Solvent Extracted · Capsaicin: Min. 40% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Capsicum Oleoresin 40% (Capsicum annum), obtained by Solvent extracted product with permitted diluents and emulsifieres from dried fruits / berries. CAS #: 8023-77-6. Solubility: Soluble in alcohol. Flavor: A powerful and refreshing aroma of freshly ground dried fruits of Capsicum. Major Constituents: Capsaicin, Dihydrocapsaicin, and Nordihydrocapsaicin. Specification: Capsaicin Content (by UV) : Min. 40% Colour Value : CU2000 Residual solvent : Less than 25 ppm. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Light reddish homogeneous free flowing liquid. Description: The product is natural and is obtained by solvent extraction of ground dried fruits of Capsicum Annum L or Capsicum Fruitescens L with complete aroma and taste of the Fruit Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 18 months under the specified storage conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Used to add flavor to various food preparations."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "This product is a powerful irritant and a carminative, which is also used as a counter irritant in lumbago and neuralgia."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "CAPSICUM OLEORESIN 40% offers uniform flavor strength across production batches, superior shelf stability (18 months under the specified storage conditions.), and clean dissolution in food-grade carriers."
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
    "botanicalName": "Capsicum annum",
    "category": "OLEORESIN",
    "description": "The product is natural and is obtained by solvent extraction of ground dried fruits of Capsicum Annum L or Capsicum Fruitescens L with complete aroma and taste of the Fruit",
    "shortSpec": "Solvent Extracted · Capsaicin: Min. 6.6% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 36,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Capsicum Oleoresin 6.6% (Capsicum annum), obtained by Solvent extracted product with permitted diluents and emulsifieres from dried fruits / berries. CAS #: 8023-77-6. Solubility: Soluble in alcohol. Flavor: A powerful and refreshing aroma of freshly ground dried fruits of Capsicum. Major Constituents: Capsaicin, Dihydrocapsaicin, and Nordihydrocapsaicin. Specification: Capsaicin Content (by UV) : Min. 6.6% Colour Value : Max. 500 units Residual solvent : Less than 25 ppm. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Light reddish homogeneous free flowing liquid. Description: The product is natural and is obtained by solvent extraction of ground dried fruits of Capsicum Annum L or Capsicum Fruitescens L with complete aroma and taste of the Fruit Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 18 months under the specified storage conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Used to add flavor to various food preparations."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "This product is a powerful irritant and a carminative, which is also used as a counter irritant in lumbago and neuralgia."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "It can also be used to treat stomach ache that involves poorly functioning stomach muscles and as an antibacterial agents."
      }
    ],
    "signatureColor": "#881F17",
    "labelImageUrl": "/labels/capsicum-oleoresin-6-6-percent.png",
    "compositeImageUrl": "/products/capsicum-oleoresin-6-6-percent.webp"
  },
  {
    "id": "oleo-cardamom",
    "slug": "cardamom-oleoresin-10-percent",
    "name": "Cardamom Oleoresins 10%",
    "botanicalName": "Elettaria cardamomum",
    "category": "OLEORESIN",
    "description": "Cardamom Oleoresin is produced by steam distillation from the dried ripe fruit (pods). The dark brown oleoresin is a yellow liquid with a sweet-spicy, warming fragrance. It is non toxic in nature and is widely used as a food condiment. Cardmom oleoresin is listed in the British Herbal Pharmacopoeia as a 'specific' for flatulence and dyspepsia.",
    "shortSpec": "Solvent Extracted · Volatile Oil: Min. 10% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 52,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Cardamom Oleoresins 10% (Elettaria cardamomum), obtained by Solvent Extraction of dried ripe fruit from dried ripe fruit pods. CAS #: 977090-82-6. EINECS: 288-922-1. Major Constituents: Alpha Terpinyl Acetate 50%, Cineol 20%, Linalol 5%, Linalyl Acetate 4% & Limonene. Specification: Volatile Oil Content : Min. 10% Residual solvent : Below 15 ppm. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Colorless to pale yellow liquid with a sweet-spicy, warming fragrance. Description: Cardamom Oleoresin is produced by steam distillation from the dried ripe fruit (pods). The dark brown oleoresin is a yellow liquid with a sweet-spicy, warming fragrance. It is non toxic in nature and is widely used as a food condiment. Cardmom oleoresin is listed in the British Herbal Pharmacopoeia as a 'specific' for flatulence and dyspepsia. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 18 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "It used extensively as a domestic spice, especially in India, Europe, Latin America and Middle Eastern countries. The oleoresin is employed in some carminative, stomachic and laxative preparations."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "Widely used as a fragrance component in soaps, cosmetics and perfumes especially oriental types. Important flavor ingredient particularly in curry and spice products."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "CARDAMOM OLEORESINS 10% offers uniform flavor strength across production batches, superior shelf stability (18 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions.), and clean dissolution in food-grade carriers."
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
    "botanicalName": "Apium Graveolens",
    "category": "OLEORESIN",
    "description": "Celery oleoresin is obtained by solvent extraction of the dry seeds of Apium graveolens L.(family: Umbelliferae) of Indian origin. The volatile oil has a very strong aromatic flavour, which chiefly contains d-limonene and sedanolides responsible for the characteristic flavour.",
    "shortSpec": "Solvent Extracted · Volatile Oil: 8-9% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Celery Seed Oleoresin 8% (Apium Graveolens), obtained by Solvent extraction of the dry seeds from dried seeds. CAS #: 129828-28-0. Solubility: The product is soluble in fixed oils.. Flavor: Typical warm aroma and bitter taste of celery. Major Constituents: d-limonene and sedanolides. Specification: Volatile Oil Content (v/w) : 8% to 9% Residual solvent : Below 20 ppm. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Greenish brown oily liquid.. Description: Celery oleoresin is obtained by solvent extraction of the dry seeds of Apium graveolens L.(family: Umbelliferae) of Indian origin. The volatile oil has a very strong aromatic flavour, which chiefly contains d-limonene and sedanolides responsible for the characteristic flavour. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 18 months under the specified storage conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Celery oleoresin is extensively used as flavoring or spice."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "It is also used as stimulant, carminative, nervine, sedative and even in tonic."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "It is also used to flavor soft drinks and unpleasant medicament."
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
    "botanicalName": "Syzgium aromaticum",
    "category": "OLEORESIN",
    "description": "Clove Bud Oleoresin is prepared by solvent extraction of clove bud. This oleoresin is extremely concentrated product which contains more flavoring ingredients that can be soluble in the particular solvent used, as it turns much close to original clove flavor and odor. A concrete, absolute and oleoresin are also produced by the buds in small quantities.",
    "shortSpec": "Solvent Extracted · Volatile Oil: 25-26% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Clove Bud Oleoresin 25% (Syzgium aromaticum), obtained by obtained by the solvent extraction of dried buds of Syzgium aromaticum from dried flower buds. CAS #: 8000-34-8. Solubility: Soluble in oils, Insoluble in water. Flavor: Close to original clove flavor and odor. Major Constituents: eugenol, eugenol acetate, iso-eugenol and caryophyllene.. Specification: Volatile Oil Content : 25-26% (v/w) Residual solvent : Below 25 ppm. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Dark Brown free flowing liquid at ambient temperature. Description: Clove Bud Oleoresin is prepared by solvent extraction of clove bud. This oleoresin is extremely concentrated product which contains more flavoring ingredients that can be soluble in the particular solvent used, as it turns much close to original clove flavor and odor. A concrete, absolute and oleoresin are also produced by the buds in small quantities. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Extensively used as domestic spice worldwide."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "It has been used for skin infections (scabies, athlete&#146;s foot); for digestive upset; to dress the umbilical cord; for intestinal parasites; to ease the pain of child birth (steeped in wine); and notably for toothache."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "The tea is used to relieve nausea."
      }
    ],
    "signatureColor": "#63261C",
    "labelImageUrl": "/labels/clove-bud-oleoresin-25-percent.png",
    "compositeImageUrl": "/products/clove-bud-oleoresin-25-percent.webp"
  },
  {
    "id": "oleo-coriander",
    "slug": "coriander-oleoresin",
    "name": "Corriander Oleoresin 1.5%",
    "botanicalName": "Coriandrum sativum",
    "category": "OLEORESIN",
    "description": "Coriander oleoresin is derived from dried seeds of Coriandrum sativum. The caramel colour liquid with the characteristic odour and flavour of Coriander. Petroselinic acid is the primary constituent of coriander oleoresin. It is soluble in fixed oil and can be dispersed on dry/liquid carriers such as salt, propylene glycol, glycerine etc.",
    "shortSpec": "Solvent Extracted · Volatile Oil: Max. 1.57% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 32,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Corriander Oleoresin 1.5% (Coriandrum sativum), obtained by Obtained by the cold pressing of the ripe dried seeds from dried spice material. CAS #: 8008-52-4. Solubility: Soluble in fixed oil. Flavor: Characteristic, powerful odor & taste of coriander. Major Constituents: Fibre, carbohydrates, fatty oil, protiens and essential oils. Specification: Volatile Oil Content : Max. 1.57%(v/w) Acid value : Max. 15 (10.2) Non saponified substances : Max. 1.5% (0.93). Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Yellowish to slightly greenish liquid. Description: Coriander oleoresin is derived from dried seeds of Coriandrum sativum. The caramel colour liquid with the characteristic odour and flavour of Coriander. Petroselinic acid is the primary constituent of coriander oleoresin. It is soluble in fixed oil and can be dispersed on dry/liquid carriers such as salt, propylene glycol, glycerine etc. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 18 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Used in pharmaceutical applications especially for digestive remedies and used as a fragrance in soaps and perfumes."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "It is also used by the food industry especially in meat products."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "CORRIANDER OLEORESIN 1.5% offers uniform flavor strength across production batches, superior shelf stability (18 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions.), and clean dissolution in food-grade carriers."
      }
    ],
    "signatureColor": "#544622",
    "labelImageUrl": "/labels/coriander-oleoresin.png",
    "compositeImageUrl": "/products/coriander-oleoresin.webp"
  },
  {
    "id": "oleo-cubeb",
    "slug": "cubeb-oleoresin",
    "name": "Cubeb Oleoresin 40%",
    "botanicalName": "Piper cubeba",
    "category": "OLEORESIN",
    "description": "The product is natural and is obtained by solvent extraction of the berries of Piper Cubeba.",
    "shortSpec": "Solvent Extracted · Volatile Oil: Min. 40% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 28,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Cubeb Oleoresin 40% (Piper Cubeba), obtained by Solvent extraction of the berries of Piper Cubeba from dried spice material. CAS #: 8002-61-7. Solubility: Soluble in alcohol ( 95%). Flavor: A characteristic aroma of cubeb. Major Constituents: Piperine, Volatile Oil. Specification: Piperine Content : Min. 0.3% Volatile Oil Content : Min. 40% (v/w) Residual Solvent : Less than 25ppm. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Free flowing, dark brown liquid .. Description: The product is natural and is obtained by solvent extraction of the berries of Piper Cubeba. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Pepper can be used in tonic and is also used as a flavor ingredient in food products."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "In meat products it is used for curing and preserving."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "Has great culinary and pharmaceutical value."
      }
    ],
    "signatureColor": "#8C2518",
    "labelImageUrl": "/labels/cubeb-oleoresin.png",
    "compositeImageUrl": "/products/cubeb-oleoresin.webp"
  },
  {
    "id": "oleo-cumin-seed",
    "slug": "cumin-seed-oleoresin",
    "name": "Cumin Seed Oleoresin 30%",
    "botanicalName": "Cuminum cyminum",
    "category": "OLEORESIN",
    "description": "The completely natural product is obtained by solvent extraction of ground roasted seeds of Cuminum cyminum. It is extremely powerful, green spicy, but not sharp, more of a soft and mellow scent. This oil is wonderful for digestive disorders, and colic too. It is good for exhaustion and works well in blends for that purpose.",
    "shortSpec": "Solvent Extracted · Volatile Oil: Min. 30% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 42,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Cumin Seed Oleoresin 30% (Cuminum Cyminum), obtained by Obtained by solvent extraction of dried seeds from dried seeds. CAS #: 68650-46-4. Solubility: Soluble in water, insoluble in oil. Flavor: Powerful, green spicy, but not sharp odor with characteristic cumin taste. Major Constituents: Volatile oil, cuminic, cymene, dipentene, limonene. Specification: Volatile Oil Content : Min 30% Residual solvent : Below 25 ppm. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Dark brown colored free flowing liquid. Description: The completely natural product is obtained by solvent extraction of ground roasted seeds of Cuminum cyminum. It is extremely powerful, green spicy, but not sharp, more of a soft and mellow scent. This oil is wonderful for digestive disorders, and colic too. It is good for exhaustion and works well in blends for that purpose. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "The oleoresins can be used as an anti-oxidant, antiseptic, antispasmodic, antitoxic, aphrodisiac, bactericidal, carminative, depurative, digestive, diuretic, emmenagogue, larvicidal, nervine, stimulant and as a tonic. Cumin essential oil is also useful as a warming oil that helps relieve muscular pains and osteoarthritis."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "For the digestive system it is a stimulant that helps with colic, dyspepsia, flatulence, bloating and indigestion. For the nervous system, Cumin essential oil is a tonic with beneficial effect on headaches, migraine pain and nervous exhaustion."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "CUMIN SEED OLEORESIN offers uniform flavor strength across production batches, superior shelf stability (24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions.), and clean dissolution in food-grade carriers."
      }
    ],
    "signatureColor": "#544622",
    "labelImageUrl": "/labels/cumin-seed-oleoresin.png",
    "compositeImageUrl": "/products/cumin-seed-oleoresin.webp"
  },
  {
    "id": "oleo-fenugreek",
    "slug": "fenugreek-oleoresin",
    "name": "Fenugreek Oleoresin 0.2%",
    "botanicalName": "Trigonella foenum-graecum",
    "category": "OLEORESIN",
    "description": "Fenugreek oleoresin is derived from the dried ripe seeds of Trigonella foenum-graccum. The seeds of Fenugreek contain 50 percent fibre of which 20 percent is mucilaginous fiber. The Oleoresin of the spice contains proteins, saponins and possesses nutritive and restorative properties. It does not contain fiber.",
    "shortSpec": "Solvent Extracted · Volatile Oil: Max. 0.2% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Fenugreek Oleoresin 0.2% (Trigonella foenum-graecum), obtained by Solvent extracted product with permitted food grade diluent or emulsifiers. from dried spice material. CAS #: 84625-40-1. Solubility: Soluble in Oil. Flavor: A characteristic aroma of typical roasted fenugreek. Major Constituents: Volatile Oil, Alkaloids. Specification: Volatile Oil Content : Max. 0.2%(v/w) Residual solvent : Less than 25 ppm. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: light brown colored, free flowing liquid. Description: Fenugreek oleoresin is derived from the dried ripe seeds of Trigonella foenum-graccum. The seeds of Fenugreek contain 50 percent fibre of which 20 percent is mucilaginous fiber. The Oleoresin of the spice contains proteins, saponins and possesses nutritive and restorative properties. It does not contain fiber. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Fennel Sweet is attributed with being an antiseptic, expectorant, carminative, laxative, diuretic, stimulant, stomachic. It is also considered to be invigorating, stimulating and warming."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "The resins in the fennel contains much essential oil and is widely used for flavoring food. It is also used for tobacco fragrance."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "FENUGREEK OLEORESIN offers uniform flavor strength across production batches, superior shelf stability (24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions.), and clean dissolution in food-grade carriers."
      }
    ],
    "signatureColor": "#8C2518",
    "labelImageUrl": "/labels/fenugreek-oleoresin.png",
    "compositeImageUrl": "/products/fenugreek-oleoresin.webp"
  },
  {
    "id": "oleo-fennel",
    "slug": "fennel-oleoresin",
    "name": "Fennel Seed Oleoresin 15%",
    "botanicalName": "Foeniculum vulgare dulce",
    "category": "OLEORESIN",
    "description": "This oleoresin is obtained by solvent extraction of the fennel seeds with the subsequent removal of the solvent. The extracts of fennel has anti-toxic properties and finds most valuable application in counterbalancing alcoholic poisoning. It has played an important part in the treatment and rehabilitation of alcoholics. The dark brown liquid has the characteristic odour and flavour of Sweet Fennel.",
    "shortSpec": "Solvent Extracted · Volatile Oil: Min. 15% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Fennel Seed Oleoresin 15% (Foeniculum vulgare dulce), obtained by Obtained by solvent extraction of the fennel seeds from dried spice material. Solubility: Soluble in fixed oil. Flavor: Light spicy and soft licorice. Major Constituents: Volatile oil, a-pinene, myrcene. Specification: Volatile Oil : Min. 15% Residual solvent : Less than 15 ppm. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Dark brown liquid. Description: This oleoresin is obtained by solvent extraction of the fennel seeds with the subsequent removal of the solvent. The extracts of fennel has anti-toxic properties and finds most valuable application in counterbalancing alcoholic poisoning. It has played an important part in the treatment and rehabilitation of alcoholics. The dark brown liquid has the characteristic odour and flavour of Sweet Fennel. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Fennel oleoresin is attributed with being an antiseptic, expectorant, carminative, laxative, diuretic, stimulant, stomachic."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "It is commonly used in food processing industry as a spice."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "FENNEL SEED OLEORESIN offers uniform flavor strength across production batches, superior shelf stability (24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions.), and clean dissolution in food-grade carriers."
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
    "botanicalName": "Zingiber Officinalis",
    "category": "OLEORESIN",
    "description": "Garlic oleoresin is obtained from the crushed bulb of the garlic, Allium sativum Linn. It has a powerful obnoxious odour due to the presence of disulphides. The bulb contains 0.06% to 0.1% of volatile oil whose active constituents are propyl /-disulphide, alliin and allicin.",
    "shortSpec": "Solvent Extracted · Volatile Oil: Min. 30% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Ginger Oleoresin 30% (Zingiber Officinalis), obtained by Obtained by the solvent extraction of dried rhizomes of Zingiber Officinalle from dried rhizomes. CAS #: 8002-60-6. Flavor: Characteristic aroma of fresh Garlic. Major Constituents: gingerol and shogaol, volatile oil. Specification: Volatile Oil Content : Not less then 30%(v/w) (30.4%) Residual solvent : Less than 25 ppm (12 ppm). Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Dark Brown free flowing liquid at ambient temperature. Description: Garlic oleoresin is obtained from the crushed bulb of the garlic, Allium sativum Linn. It has a powerful obnoxious odour due to the presence of disulphides. The bulb contains 0.06% to 0.1% of volatile oil whose active constituents are propyl /-disulphide, alliin and allicin. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "It is employed for flavoring all kinds of food products and finds limited use in perfumery."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "It is used as an aromatic, carminative, stomachic and as a stimulant"
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "GINGER OLEORESIN 30% offers uniform flavor strength across production batches, superior shelf stability (24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions.), and clean dissolution in food-grade carriers."
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
    "botanicalName": "Myristica fragrans Houttuyn",
    "category": "OLEORESIN",
    "description": "Mace Oleoresin is the end product obtained by solvent extraction of the dried flowers of Myristica fragrance van Houtte, Myristicaceae with the subsequent removal of the solvent. It is a semisolid, waxy material. The color of the oleoresins ranges from pale buff to amber to dark orange, odour and taste are characteristic of nutmeg.",
    "shortSpec": "Solvent Extracted · Volatile Oil: 30-31% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Mace Oleoresin 30% (Myristica fragrans Houttuyn), obtained by Obtained by the solvent extraction of dried arillodes of seeds of Myristica fragrans Houttuyn from dried arils of nutmeg fruit. CAS #: 8007-12-3. Solubility: Soluble in fixed oils. Flavor: Characteristic aroma like nutmeg. Major Constituents: Volatile Oil, camphene and pinene. Specification: Volatile Oil Content : Not less then 30%-31%(v/w) (30.3%) Residual solvent : Less than 25 ppm (14 ppm). Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Free flowing transparent reddish liquid at ambient temperature. Description: Mace Oleoresin is the end product obtained by solvent extraction of the dried flowers of Myristica fragrance van Houtte, Myristicaceae with the subsequent removal of the solvent. It is a semisolid, waxy material. The color of the oleoresins ranges from pale buff to amber to dark orange, odour and taste are characteristic of nutmeg. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 18 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Mace Oleoresins are used as spice and seasoning mixes, for meats, sausages and other food preparations."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "Extensively utilized in therapeutic formulations, topical applications, digestive preparations, and nutraceutical products demanding high-potency active constituents."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "MACE OLEORESIN 30% offers uniform flavor strength across production batches, superior shelf stability (18 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions.), and clean dissolution in food-grade carriers."
      }
    ],
    "signatureColor": "#63261C",
    "labelImageUrl": "/labels/mace-oleoresin-30-percent.png",
    "compositeImageUrl": "/products/mace-oleoresin-30-percent.webp"
  },
  {
    "id": "oleo-nutmeg",
    "slug": "nutmeg-oleoresin",
    "name": "Nutmeg Oleoresin 30%",
    "botanicalName": "Myristica fragrans Houttuyn",
    "category": "OLEORESIN",
    "description": "Nutmeg oleoresin is the natural extract of dried seeds of Myristica Fragrans Houttyn of family Myristicaceae. It bears a tenacious history of hailed alternative and magical abilities. The oleoresin has gratifying aroma and slightly warmly taste sensation.",
    "shortSpec": "Solvent Extracted · Volatile Oil: 30-31% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 40,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Nutmeg Oleoresin 30% (Myristica fragrans Houttuyn), obtained by Obtained by the solvent extraction of dried seeds of Myristica fragrans Houttuyn from dried seeds (nutmeg kernels). CAS #: 8008-45-5. Solubility: Soluble in fixed oils. Flavor: Gratifying aroma and slightly warmly taste. Major Constituents: Volatile Oil, camphene and pinene. Specification: Volatile Oil Content : Not less then 30%-31%(v/w) (30.3%) Residual solvent : Less than 25 ppm (14 ppm). Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: a yellowish red to light brown viscous liquid with pungent smell. Description: Nutmeg oleoresin is the natural extract of dried seeds of Myristica Fragrans Houttyn of family Myristicaceae. It bears a tenacious history of hailed alternative and magical abilities. The oleoresin has gratifying aroma and slightly warmly taste sensation. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 18 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Nutmeg oleoresin is widely used to flavor varieties of cooked foods, confectioneries, puddings, meats, sausages, sauces, veggies, and drinks."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "Extensively utilized in therapeutic formulations, topical applications, digestive preparations, and nutraceutical products demanding high-potency active constituents."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "NUTMEG OLEORESIN 30% offers uniform flavor strength across production batches, superior shelf stability (18 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions.), and clean dissolution in food-grade carriers."
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
    "description": "The product is natural and is obtained by solvent extraction of the berries of Piper nigrum L. The extraction is performed by percolating with variety of solvents, primarily hexane, which are removed prior to use. Black pepper oleoresins have heavier flavor and is far more popular than other varieties.",
    "shortSpec": "Solvent Extracted · Piperine: 40-41% · Volatile Oil: 17-18% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Oleoresin Black Pepper 40% (Piper nigrum), obtained by Solvent extracted product with permitted food grade diluents or emulsifiers. from dried fruits / berries. CAS #: 84929-41-9. Solubility: Soluble in alcohol ( 95%). Flavor: A characteristic aroma of Pepper with pungent taste. Major Constituents: Volatile oil, piperine. Specification: Piperine Content : 40-41% Volatile Oil Content : 17 -18% (v/w) Residual Solvent : Less than 25ppm. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Free flowing, olive green liquid at ambient temperatures.. Description: The product is natural and is obtained by solvent extraction of the berries of Piper nigrum L. The extraction is performed by percolating with variety of solvents, primarily hexane, which are removed prior to use. Black pepper oleoresins have heavier flavor and is far more popular than other varieties. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Black pepper oleoresin is widely used in food industry as a coloring and flavoring agent."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "The oleresins represent complete spice flavor whereas essential oils only the aroma."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "OLEORESIN BLACK PEPPER 40% offers uniform flavor strength across production batches, superior shelf stability (24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions.), and clean dissolution in food-grade carriers."
      }
    ],
    "signatureColor": "#3B352E",
    "labelImageUrl": "/labels/oleoresin-black-pepper-40-percent.png",
    "compositeImageUrl": "/products/oleoresin-black-pepper-40-percent.webp"
  },
  {
    "id": "oleo-onion",
    "slug": "onion-oleoresin-20-to-1",
    "name": "Onion Oleoresins 20:1",
    "botanicalName": "Allium cepa",
    "category": "OLEORESIN",
    "description": "The oleoresin is extracted from fresh bulb of the onion, which are harvested between September and April. Onion has an ancient reputation as a curative agent. It is high in vitamins A, B and C and shares many of the properties of garlic, to which it is closely related. The oleoresins have lightly sweet & characteristic flavors of onion.",
    "shortSpec": "Solvent Extracted · Concentration Assay: 20:1 · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Onion Oleoresins 20:1 (Allium cepa), obtained by Obtained by the solvent extraction of dried seeds of Myristica fragrans Houttuyn from fresh bulbs. CAS #: 130007-42-0. Solubility: soluble in water. Flavor: lightly sweet & characteristic flavors of onion. Major Constituents: Menthanol. Specification: Assay : 20 : 1 50 % v/v Methanol from Fresh Onion. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Brown Thick Paste with characteristic odour. Description: The oleoresin is extracted from fresh bulb of the onion, which are harvested between September and April. Onion has an ancient reputation as a curative agent. It is high in vitamins A, B and C and shares many of the properties of garlic, to which it is closely related. The oleoresins have lightly sweet & characteristic flavors of onion. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Onion Oleoresin can be used as spice and seasoning mixes, for meats, sausages and other food preparations."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "It is also used in some pharmaceutical preparations for colds, coughs."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "ONION OLEORESINS 20:1 offers uniform flavor strength across production batches, superior shelf stability (24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions.), and clean dissolution in food-grade carriers."
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
    "description": "Oregano oleoresin is made by solvent extraction of the dried herbs of Oregano, Origanum vulgare L (family: Labiatae) of Mediterranean origin.",
    "shortSpec": "Solvent Extracted · Volatile Oil: 10-12% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Oregano Oleoresin 10% (Origanum vulgare), obtained by Obtained by solvent extraction of the dried herbs of Oregano from dried leaves. CAS #: 8007-11-12. Solubility: Soluble in fixed oils. Flavor: a thyme aroma with mild bitterness. Major Constituents: Volatile Oil, Carvacrol and Thymol. Specification: Volatile Oil Content : 10% to 12% Residual solvent : Less than 16 ppm. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Dark greenish brown viscous liquid with a floral odour typical of oregano. Description: Oregano oleoresin is made by solvent extraction of the dried herbs of Oregano, Origanum vulgare L (family: Labiatae) of Mediterranean origin. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Oregano Oleoresin widely used as spice and seasoning mixes, for meats, sausages and other food preparations."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "Extensively utilized in therapeutic formulations, topical applications, digestive preparations, and nutraceutical products demanding high-potency active constituents."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "OREGANO OLEORESIN 10% offers uniform flavor strength across production batches, superior shelf stability (24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions.), and clean dissolution in food-grade carriers."
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
    "botanicalName": "Capsicum annum",
    "category": "OLEORESIN",
    "description": "The product is natural and is obtained by the solvent extraction of dried fruits of Capsicum annum. The oleoresins are free from solvent, pesticide residues; heavy metal traces and therefore are ideal for high quality pharmaceutical, cosmetic, cosmoceutical, nutraceutical formulations and food products",
    "shortSpec": "Solvent Extracted · Color Value: 100,000–110,000 CU · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 52,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Paprika Oleoresin 100000 CU (Capsicum annum), obtained by Obtained by the solvent extraction of dried fruits of Capsicum annum from dried fruits / berries. CAS #: 8002-56-0. Solubility: Soluble in vegetable oils. Flavor: A characteristic aroma of Pepper with pungent taste. Major Constituents: Alkaloids, Piperine and Chavicine. Specification: Color Value : 100000 – 110000cu Residual Solvent : Less than 25 ppm (18). Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: A viscous reddish homogeneous liquid, pourable at ambient temperature. Description: The product is natural and is obtained by the solvent extraction of dried fruits of Capsicum annum. The oleoresins are free from solvent, pesticide residues; heavy metal traces and therefore are ideal for high quality pharmaceutical, cosmetic, cosmoceutical, nutraceutical formulations and food products Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "These are used to add colour to cheese, sauces, sweets, orange juice, spice mixtures, emulsified processed meats and egg yolks. Pepper can be used in tonic and is also used as a flavor ingredient in food products."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "In meat products it is used for curing and preserving. Has great culinary and pharmaceutical value."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "offers uniform flavor strength across production batches, superior shelf stability (24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions.), and clean dissolution in food-grade carriers."
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
    "description": "Parsely seed oleoresin is obtained by solvent extraction of the dry seeds of parsley, Petroselinum crispum (family: Umbelliferae) of Indian origin. It is an oily liquid with dark brown color with a base greenish tint. It has pleasant spicy aroma and slight bitter taste.",
    "shortSpec": "Solvent Extracted · Volatile Oil: 10-15% · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 28,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Parsley Seed Oleoresin 10% (Petroselinum crispum), obtained by Obtained by solvent extraction of the dry seeds of parsley from dried seeds. CAS #: 8007-11-12. Solubility: Soluble in Fixed Oils. Flavor: a thyme aroma with mild bitterness. Major Constituents: Volatile Oil, myristicin, limonene and menthatriene. Specification: Volatile Oil Content : 10% to 15% Residual solvent : Less than 20 ppm. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Dark greenish brown viscous liquid with a floral odour typical of oregano. Description: Parsely seed oleoresin is obtained by solvent extraction of the dry seeds of parsley, Petroselinum crispum (family: Umbelliferae) of Indian origin. It is an oily liquid with dark brown color with a base greenish tint. It has pleasant spicy aroma and slight bitter taste. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Parsley Seed Oleoresin can be used as spice and seasoning mixes, for meats, sausages and other food preparations."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "It is also used in some pharmaceutical preparations."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "PARSLEY SEED OLEORESIN 10% offers uniform flavor strength across production batches, superior shelf stability (24 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions.), and clean dissolution in food-grade carriers."
      }
    ],
    "signatureColor": "#8C2518",
    "labelImageUrl": "/labels/parsley-seed-oleoresin-10-percent.png",
    "compositeImageUrl": "/products/parsley-seed-oleoresin-10-percent.webp"
  },
  {
    "id": "oleo-rosemary",
    "slug": "rosemary-oleoresin",
    "name": "Rosemary Oleoresins 5%",
    "botanicalName": "Rosmarinus Officinalis L",
    "category": "OLEORESIN",
    "description": "Rosemary Oleoresin, also known as Rosemary Oil Extract or ROE is an oil soluble, natural extract used to retard rancidity in natural oils. Its potent antioxidant properties are attributed in large part to carnosic acid, one of its major constituents.",
    "shortSpec": "Solvent Extracted · Carnosic Acid: Min. 10% (5% Active) · Standardized",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Spice Material Preparation",
        "description": "Dried spice material ground to optimal particle size and verified for moisture content and purity before extraction."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Processed with food-grade solvents to extract both the volatile essential oil fraction and the fixed resinous compounds."
      },
      {
        "stepNumber": 3,
        "title": "Solvent Recovery",
        "description": "Solvent recovered under vacuum evaporation, leaving a concentrated oleoresin with consistent pungency and aroma profile."
      },
      {
        "stepNumber": 4,
        "title": "Standardization & Testing",
        "description": "Piperine, capsaicin, or curcumin content standardized and verified by HPLC; heavy metals and pesticide residues checked against international food safety limits."
      }
    ],
    "overview": "Rosemary Oleoresins 5% (Rosmarinus Officinalis L), obtained by Solvent extraction of dried leaves from dried leaves. CAS #: 3650-09-7. EINECS: 283-291-9. Major Constituents: Carnosic acid. Specification: Carnosic acid : Min. 10% Residual solvent : Below 20 ppm. Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.",
    "history": "Color & Odor: Viscous liquid with greenish brown colour and with typical herbal aroma.. Description: Rosemary Oleoresin, also known as Rosemary Oil Extract or ROE is an oil soluble, natural extract used to retard rancidity in natural oils. Its potent antioxidant properties are attributed in large part to carnosic acid, one of its major constituents. Blends Offered: The above quality is our standard specification. In addition to this customized blends are also offered to meet specific requirements. Shelf Life: 18 months from the date of manufacture when stored below 25oC in closed containers away from direct light and not under humid conditions. Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.",
    "benefits": [
      {
        "title": "Food Seasoning & Industrial Flavoring",
        "description": "Rosemary Oleoresin is a oil soluble antioxidant."
      },
      {
        "title": "Pharmaceutical & Functional Applications",
        "description": "This means it protects vulnerable oils from oxidation, which causes the smell of rancid oil."
      },
      {
        "title": "Standardized Stability & Formulation Economy",
        "description": "Use just like Vitamin E Acetate or Vitamin E Natural, in products which need or benefit from antioxidants."
      }
    ],
    "signatureColor": "#7E2D48",
    "labelImageUrl": "/labels/rosemary-oleoresin.png",
    "compositeImageUrl": "/products/rosemary-oleoresin.webp"
  },
  {
    "id": "organic-bergamot",
    "slug": "organic-bergamot-oil",
    "name": "Organic Bargamot Oil",
    "botanicalName": "Citrus bergamia",
    "category": "ORGANIC_OIL",
    "description": "The bergamot orange is a fruit, small and roughly pear shaped. The fruit is sour and its aromatic peel is used to produce an essential oil.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 70,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "BARGAMOT OIL (Citrus Bergamia), extracted by Cold Pressed, from Peel. Key constituents include Limonene, nerol, linalyl acetate, linalool, linalyl acetate, linalool, limonene and -terpinene.. Specific Gravity: 0.87600 - 0.88400 @ 25 °C. Refractive Index: 1.46400 - 1.46600 @ 20 °C. CAS No: 8007-75-8, F.E.M.A. : 2153. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Golden yellow amber clear liquid with citrus woody orange odor. Common Name: Bergamot Essential Oil. Description: The bergamot orange is a fruit, small and roughly pear shaped. The fruit is sour and its aromatic peel is used to produce an essential oil. Known properties: Analgesic, antidepressant, antiseptic, antibiotic, anti-spasmodic, stomachic, calmative, cicatrisant, deodorant, digestive, febrifuge, insect repellents.. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is mostly used in blending aromatherapy oils used for massaging."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is useful to treat coughs and colds, indigestion and hiccups in Widely used in intestinal parasites, nervous eczema, stress, fear, anxiety, depression and tension."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It also has cosmetic applications including skin infections and in psoriasis"
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
    "description": "The trees grows upto 30 m, single-stemmed, crown narrowly erect to conical, round or flattened. Bark is brown, exfoliating in thin strips, that of small branchlets (5-10 mm diam.)",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "CEDARWOOD OIL (Cedrus deodara), extracted by Steam distillation, from Wood. Key constituents include Cedarwood oil has various chemical compounds that include atlantone, caryophyllene, cedrol, cadinene, a-cedrene, b-cedrene, thujopsene, other sesquiterpenes and widdrol.. Specific Gravity: 0.97200 - 0.98300 @ 25°C. Refractive Index: 1.51400 - 1.52900 @ 20°C. CAS No: 8000-27-9. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Light golden yellow viscous transparent liquid with woody, sweet, slight aroma. Common Name: Cedar oil, Cedrus deodara oil. Description: The trees grows upto 30 m, single-stemmed, crown narrowly erect to conical, round or flattened. Bark is brown, exfoliating in thin strips, that of small branchlets (5-10 mm diam.) Known properties: Antiseborrhoeic, antiseptic, antispasmodic, astringent, diuretic, emmenagogue, expectorant, fungicide insecticide, sedative and tonic. It has a calming and soothing effect on the mind and is of great help in conditions associated with anxiety and nervous tension. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Cedarwood oil benefits the skin by its sedating ability which relieves itching."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Its astringent action is great for acne, oily skin as well as for hair and dandruff."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is useful for chest and urinary infections, arthritis and This high graded fragrance oil is excellent to scent candles, freshen potpourri, in soap making, massage oils and bath oil and high class Cedarwood is excellent repellent used for mothproofing and other"
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
    "description": "Camomile is a small perennial herb with a hairy stem and feathery pinnate leaves, daisy like white flowers (larger than those of German camomile) and grows about 25 cm high.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 65,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "CHAMOMILE OIL (BLUE) (Matricaria chamomilla), extracted by Cold Pressed, from Flowers. Key constituents include Chamomile oil has various chemical compounds that include Chamazulene, bisabolol oxide A, a-bisabolol, bisabolol oxide B & bisabolone oxide A, Volatile oil, flavonoids, coumarins, plant acids, fatty acids, cyanogenic gly-cosides, salicylate derivatives, polysa. Specific Gravity: 0.91300 - 0.95300 @ 25°C. Refractive Index: 1.48000 - 1.50500 @ 20°C. CAS No: 8002-66-2, F.E.M.A. : 2273. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale yellow to amber liquid with herbal like chamomile odor. Common Name: Blue chamomile oil, Camomile oil, German Chamomile, Wild chamomile. Description: Camomile is a small perennial herb with a hairy stem and feathery pinnate leaves, daisy like white flowers (larger than those of German camomile) and grows about 25 cm high. Known properties: Analgesic, anti-spasmodic, antiseptic, antibiotic, anti-inflammatory, anti-infectious, anti-depressant, anti-neuralgic, carminative, vulnerary, sedative, nervine, digestive, tonic and digestive.. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Blue chamomile oil is used for treating any type of internal or external inflammation as well as is very effective on urinary stones (bladder gravel) as well."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It helps in stimulating liver & gall bladder, thereby improving digestion and in treating menstrual & menopausal problems."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It has miracle effect for treating red, dry & irritated skin as well as calming allergies, psoriasis, eczema and all other flaky skin"
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
    "description": "The leaves as well as bark are the plant parts from which cinnamon oil is extracted. . Cinnamon Oil is known for it's peppery, earthy oil that is bright, yet slightly woody scent.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "CINNAMON BARK OIL (Cinnamomum zeylanicum), extracted by Steam Distillation, from Bark. Key constituents include Cinnamon oil has various chemical compounds that include eugenol, eugenol acetate, cinnamic aldehyde and benzyl benzoate.. Specific Gravity: 1.01000 - 1.03000 @ 25.00 °C. Refractive Index: 1.57300 - 1.59100 @ 20.00 °C. CAS No: 8015-91-6, F.E.M.A. : 2291. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Reddish brown with warm, spicy scent.. Common Name: Cinnamon Oil, Cinnamon Bark Essential Oil. Description: The leaves as well as bark are the plant parts from which cinnamon oil is extracted. . Cinnamon Oil is known for it's peppery, earthy oil that is bright, yet slightly woody scent. Known properties: Anthelmintic, antidiarrheal, antidote, antimicrobal, antiseptic, antispasmodic, antiputrescent, aphrodisiac, astingent, carminative, digestive, emmenagogue, hemostatic, orexigenic, parasticide, refrigerant, spasmolytic, stimulant, stomachic and vermifuge. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Oil is used for flavoring confectionery and liqueurs. It is also used in pharmaceutical and dental preparations."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Cinnamon is used as spice flavor, can be readily oxidized. Cinnamon bark oils are used as a stimulant for the circulation, as an antiseptic, as an occasional aphrodisiac."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Good for easing arthritis pain, muscle pain and adding heat to the body, but should only be used when highly diluted in a carrier oil."
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
    "botanicalName": "Eugenia caryophyllus",
    "category": "ORGANIC_OIL",
    "description": "A slender evergreen with a smooth gray trunk, up to 12 meters high. At the start of the rainy season long buds appear that have a rosy-pink corolla at the tip.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 66,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "CLOVE BUD OIL (Eugenia caryophyllus), extracted by Steam Distillation, from Bud. Key constituents include Clove bud oil has various chemical compounds that include Eugenol, eugenyl acetate and caryophyllene.. Specific Gravity: 1.03800 - 1.06000 @ 25 °C. Refractive Index: 1.52700 - 1.53500 @ 20 °C. CAS No: 8000-34-8 F.E.M.A. : 2323. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Light golden yellow clear liquid with Spicy, warming yet slightly bitter, woody, reminiscent of true clove buds but richer aroma.. Common Name: Syzygium aromaticum l. bud oil, Eugenia caryophyllus l. bud oil. Description: A slender evergreen with a smooth gray trunk, up to 12 meters high. At the start of the rainy season long buds appear that have a rosy-pink corolla at the tip. Known properties: It acts like antiseptic ,antihistamine, antioxidant, aphrodisiac, antifungal, anti-viral, powerful bactericidal-large spectrum, antiparasitic, anthelmintic, antiemetic, expectorant, cicatrizant, spasmolytic, splenetic, stimulant (general, digestive, sexual) and tonic(nervous, hypertensive).. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Clove bud oil is useful in the treatment of arthritis, asthma, bronchitis, rheumatism, sprains, strains and toothache. It can be used for acne, bruises, burns and cuts, keeping infection at bay and as a pain reliever. It helps with toothache, mouth sores, rheumatism and arthritis."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is beneficial to the digestive system, effective against vomiting, diarrhea, flatulence, spasms and parasites, as well as bad breath. Clove bud oil is used as an ingredient in food, alcoholic beverages and soft drinks. It is also used in the production of printing ink, glue, and varnish."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Clove is reported to stop nicotine addiction."
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
    "description": "Eucalyptus essential oil is obtained from the leaves and the branches of the eucalyptus tree.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "EUCALYPTUS OIL (Eucalyptus globulus), extracted by Steam Distillation, from Leaves & branches. Key constituents include Eucalyptus oil has various chemical compounds that include Cineol, pinene, limonene, cymene, phellandrene, terpinene, aromadendrene.. Specific Gravity: 0.90500 - 0.92500 @ 25°C. Refractive Index: 1.45800 - 1.46500 @ 20°C. CAS No: 8000-48-4 F.E.M.A. : 2466. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Colorless to pale yellow clear liquid with fresh, balsamic, camphor-like odor.. Common Name: Eucalyptus globulus oil, Eucalyptus globulus leaf oil. Description: Eucalyptus essential oil is obtained from the leaves and the branches of the eucalyptus tree. Known properties: Aperitif, antiseptic, antispasmodic, carminative, depurative, diuretic, emmenagogue, expectorant, galactagogue, laxative, stimulant, stomachic, splenic, tonic and vermifuge.. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Eucalyptus Globulus Essential Oil is fantastic on skin ailments such as burns, blisters, wounds, insect bites, lice and skin infections, as well as to combat the effects of colds and the flu. It provides quite natural treatment for respiratory ailments, bronchitis, feverish conditions, the flu and skin problems such as burns, ulcers and wounds."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Eucalyptus essential oil is highly antiseptic but also very inexpensive, so it's used specifically in aftershaves, colognes, mouthwashes, and household cleansers. It is used in making deodrants for men due to its balsamic odour."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "EUCALYPTUS OIL is used in the perfumery, cosmetics and pharmaceutical industries."
      }
    ],
    "signatureColor": "#175B50",
    "labelImageUrl": "/labels/organic-eucalyptus-oil.png",
    "compositeImageUrl": "/products/organic-eucalyptus-oil.webp"
  },
  {
    "id": "organic-frankincense",
    "slug": "organic-frankincense-oil",
    "name": "Organic Frankincense Oil (Olibanum Oil)",
    "botanicalName": "Boswellia serrata",
    "category": "ORGANIC_OIL",
    "description": "Olibanum is basically a gum-resin from small trees and thorny bushes of the Burseracean family.",
    "shortSpec": "Certified Organic · Pale-yellow or pale-amber",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 74,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "ORGANIC FRANKINCENSE OIL (OLIBANUM OIL) (Boswellia Serrata), extracted by Steam Distillation, from Resin. Key constituents include Beta-caryophyllene, alpha-copaene, alpha-humulene and caryophyllene oxide. Specific Gravity: 0.844 - 0.849 @ 72°F. Refractive Index: 1.465 - 1.469 @ 72°F. CAS No: 8016-36-2, F.E.M.A. : 2816. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: pale-yellow or pale-amber in color with a strong, fresh, balsamic scent. Common Name: Olibanum oil or Frankincense essential oil, Luban, Gond. Description: Olibanum is basically a gum-resin from small trees and thorny bushes of the Burseracean family. Known properties: Antiseptic, astringent, carminative, digestive, diuretic, sedative and as a tonic. Also used in high class incense, perfumery & other fragrances.. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Olibanum Oil gives peaceful and calming effect on the mind."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It perk up and revamp the lost energy, respiratory disorders can be Beneficial results can be observed in combating anxiety, asthma, bronchitis, stress, cough, scars & stretch marks."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "ORGANIC FRANKINCENSE OIL (OLIBANUM OIL) is used in the perfumery, cosmetics and pharmaceutical industries."
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
    "botanicalName": "Zingiber Officinalis",
    "category": "ORGANIC_OIL",
    "description": "Ginger is a perennial herb that can stand up to about 3 - 4 feet high and has a thick spreading tuberous rhizome. The root of ginger is macerated and distilled over high heat, for extracting the oil.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "GINGER OIL (Zingiber Officinalis), extracted by Steam Distillation, from Root (Rhizomes). Key constituents include Ginger oil has various chemical compounds that include pinene, camphene, pinene, cineole, linalool, borneol, terpineol, nerol, neral, geraniol, geranial, geranyl acetate, bisabolene, zingiberene. Specific Gravity: 0.8900 - 0.8990 @ 72°F. Refractive Index: 1.4950 - 1.5600 @ 72°F. CAS No: 8007-08-7, F.E.M.A. : 2522. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale yellow to yellow clear liquid with spicy, woody, warm ginger odor. Common Name: Ginger root oil, Ginger essential oil. Description: Ginger is a perennial herb that can stand up to about 3 - 4 feet high and has a thick spreading tuberous rhizome. The root of ginger is macerated and distilled over high heat, for extracting the oil. Known properties: Ginger oil is analgesic, anti-emetic, antiseptic, antispasmodic, bactericidal, carminative, cephalic, expectorant, febrifuge, laxative, rubefacient, stimulant, stomachic, sudorific and tonic. Ginger is warming, stimulating and grounding. It aids memory and is an aphrodisiac and also helps with pain relief and detoxification.. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Ginger oil is used in the treatment of fractures, rheumatism, arthritis, bruising, carbuncles, diarrhea, colic, cramps, nausea, hangovers, travel and sea sickness, colds and flu, sores on the skin, sore throat,catarrh, congestion, coughs, sinusitis, chills and fever."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Ginger oil is a seasoning and flavors sweets, including cakes, cookies, breads, and beverages."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Also used in lot of perfumery creation and blending with other essential oils."
      }
    ],
    "signatureColor": "#7E4314",
    "labelImageUrl": "/labels/organic-ginger-oil.png",
    "compositeImageUrl": "/products/organic-ginger-oil.webp"
  },
  {
    "id": "organic-holy-basil",
    "slug": "organic-holy-basil-oil",
    "name": "Organic Holy Basil Oil (Ocimum Sanctum Oil)",
    "botanicalName": "Ocimum sanctum",
    "category": "ORGANIC_OIL",
    "description": "It is derived form the plant of Ocimum sanctum belonging to family Labiatae. It has been widely grown throughout the world and commonly cultivated in gardens.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "HOLY BASIL OIL (OCIMUM SANCTUM OIL) (Ocimum Sanctum), extracted by Steam Distillation, from Leaves & Seeds. Specific Gravity: 0.92550 - 0.9260. Refractive Index: 1.242 - 1.249. CAS No: 91845-35-1. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale Yellow to Yellow colour with Sweet, Pungent and typical odour of Eugenol. Common Name: Holy Basil Oil, Tulsi. Description: It is derived form the plant of Ocimum sanctum belonging to family Labiatae. It has been widely grown throughout the world and commonly cultivated in gardens. Known properties: Helpful for nervous system disorders such as depression, headache, hypertension, insomnia, migraine, nervous tension, stress.. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Basil oil used in flavoring liquor, chewing Tooth paste, cold rub oil It is used in flavoring, cosmetics, soap, Pharmaceuticals and Traditionally Ocimum sanctum is used in malarial fevers, gastric disorders and in hepatic infections. Ocimum sanctum leaves is also used in bronchitis, ringworm and other cutaneous diseases and earache."
      },
      {
        "title": "Therapeutic Properties",
        "description": "The leaves are used as a nerve tonic and to sharpen memory. Ocimum sanctum leaves are abundant in tannins like gallic acid, chlorogenic acid etc and also contain alkaloids, glycosides, and saponins along with the volatile oil."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "The major active constituents of Holy basil leaves include"
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
    "description": "Jasmine is an evergreen, fragile, climbing shrub, that can grow up to 10 meters (33 feet) high and has dark green leaves and small white star-shaped flowers.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 76,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "JASMINE OIL (JASMINUM GRANDIFLORUM) (Jasminum grandiflorum), extracted by Steam Distillation, from Flowers. Key constituents include Jasmine oil has various chemical compounds that include Benzyl acetate,inalool, benzyl alcohol, indole, benzyl benzoate, cis-jasmone, geraniol, methyl anthranilate, p.cresol, farnesol, cis-3-hexenyl benzoate, eugenol, nerol, ceosol, benzoic acide, benzaldehyde, terpineol, nerolidol, isophytol and phytol.. Specific Gravity: 0.92000 - 0.97500 @ 25.00 °C. Refractive Index: 1.47500 - 1.49500 @ 20.00 °C. CAS No: 8022-96-6, F.E.M.A. : 2600. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Deep brown with a golden tinge viscouse liquid with warm, floral, exotic odor. Common Name: Jasmin oil, jasminum grandiflorum l. oil, Jasmine essential oil. Description: Jasmine is an evergreen, fragile, climbing shrub, that can grow up to 10 meters (33 feet) high and has dark green leaves and small white star-shaped flowers. Known properties: Analgesic (mild), antidepressant, anti-inflammatory, antiseptic, antispasmodic, aphrodisiac, carminative, cicatrisant, expectorant, galactagogue, parturient, perfume, deodorant, sedative and tonic (uterine).. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Jasmine Grandiflorum is well respected for its aphrodisiac properties. It is a sensual, soothing, calming oil that promotes love Jasmine oil helps with sexual problems such as impotence, premature ejaculation and frigidity."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Jasmine oil is used extensively in creation of fragrance for perfumery industry. It is used to scent candles, Incence, freshen potpourri, in soap making, massage oils and bath oil, air fresheners."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "JASMINE OIL (JASMINUM GRANDIFLORUM) is used in the perfumery, cosmetics and pharmaceutical industries."
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
    "description": "The jojoba oil is extracted from the seed of the plant. Female jojoba plants produce a seed that contains 40-60% liquid wax.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 80,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "JOJOBA OIL (Simmondsia chinensis), extracted by Cold pressed, from Seeds. Key constituents include Jojoba oil has various chemical compounds that include chained C20 and C22 fatty acids and alcohols and two unsaturated bonds, which make the oil susceptible to many different types of chemical manipulations.. Specific Gravity: 0.90500 - 0.92500 @ 25°C. Refractive Index: 1.46000 - 1.46800 @ 25°C. CAS No: 90045-98-0. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Golden colored liquid with blend herbal odor.. Common Name: Jojoba seed oil, Jojoba carrier oil, Jojoba oil golden. Description: The jojoba oil is extracted from the seed of the plant. Female jojoba plants produce a seed that contains 40-60% liquid wax. Known properties: It has antioxidant, anti-inflammatory, mosturinzing, soothing, lubricat, non irritant, anti-bacterial properties. It is used as liquid wax and due to its odorless property it can easily be used in homemade skin creams, perfumes and body oil. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Jojoba Oil is a most popular addition for skin care products, and is often used alone as a facial oil as it contains natural collagen. Jojoba Oil can help heal acne, athlete&#146;s foot, cuts, mouth sores, pimples and warts."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is very good moisturinser and used as make It is used for fragrance because of its advanced molecular stability. Jojoba Oil is superb in Massage Oils, Hair Oils, Soaps, and Skin & Hair Preparations."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "JOJOBA OIL is used in the perfumery, cosmetics and pharmaceutical industries."
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
    "description": "This evergreen tree grows up to about 6 meters (20 feet) and has dark green serrated oval leaves with pink/white flowers that are highly perfumed.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "LEMON OIL (Citrus limon), extracted by Cold pressed, from Peel. Key constituents include Lemon oil has various chemical compounds that include Limonene, Citral, Geranial, Citronellyl Acetate, Pinene, carotene and pectin.. Specific Gravity: 0.84900 to 0.85500 @ 25°C. Refractive Index: 1.47200 to 1.47400 @ 20°C. CAS No: 8008-56-8, F.E.M.A. : 2625. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale yellow with greenish tint with Strong, Clear, Citrus odor. Common Name: Lemon oil, Lemon peel oil, Lemon essential oil. Description: This evergreen tree grows up to about 6 meters (20 feet) and has dark green serrated oval leaves with pink/white flowers that are highly perfumed. Known properties: It is anti-viral, antitoxic, adaptogen, antifungal, antiseptic, antisclerotic, bactericidal, cicatrizant, insecticidal, diuretic, diaphoretic, febrifuge, vermifuge, hemostatic, hypotensive, vasoconstrictor and decongestant,. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is highly detoxifying and energizing and also fresh and zesty. It works like general tonic, infections, detoxification, general fatigue, obesity, balances sebum, acne, oils, warts."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It further enhances the shine and growth of hair and nails. It reduces physical exhaustion, digestion, rheumatism, arthritis, colds, flu and all respiratory disorders."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is also used for clearing skin problems related to acne, greasy skin, removing dead skin cells and easing painful cold sores. It has high value in flavorings & fragrances industries."
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
    "botanicalName": "Cymbopogon citratus",
    "category": "ORGANIC_OIL",
    "description": "Lemongrass Oil is derived from Lemongrass, which is a fast growing, tall, aromatic perennial grass native to Asia.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 76,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "LEMONGRASS OIL (Cymbopogon citratus), extracted by Steam distillation, from Leaves. Key constituents include Lemongrass oil has various chemical compounds that include myrcene, citronellal, geranyl acetate, nerol, geraniol, neral and traces of limonene and citral.. Specific Gravity: 0.88700 - 0.89900 @ 25°C. Refractive Index: 1.47800 - 1.49700 @ 20°C. CAS No: 8007-02-1, F.E.M.A. : 2624. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale yellow to yellow liquid with lemony, green, citral, floral and citrus-like odor. Common Name: Lemon grass oil, Lemongrass essential oil. Description: Lemongrass Oil is derived from Lemongrass, which is a fast growing, tall, aromatic perennial grass native to Asia. Known properties: It has antidepressant, antiseptic, bactericide, carminative, deodorant, digestive, diuretic, fungicide, galactagogue, insecticide, prophylactic, stimulant and tonic properties.. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Its aroma inspires and brings fresh energy, clears the mind. This reviving oil will re-energize a person and helps the body recover after illness by invigorating the glandular system."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is popular skin care ingredient for oily, mature and inflamed skin (in moderation). It is used in insect repellents, room sprays, soaps and detergents."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Lemongrass essential oil can also be used as a deodorant to curb Lemon grass features in Indonesian, Malaysian, Sri Lankan and Indian cooking and is widely used in savoury dishes and meat, poultry, seafood and vegetable curries and also in herbal tea."
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
    "botanicalName": "Moringa Oliefera",
    "category": "ORGANIC_OIL",
    "description": "It is a very stable oil which is highly nutritious for the skin. This oil is much similar olive oil in composition but still it's very light.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 62,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "MORINGA OIL (Moringa Oliefera), extracted by Cold Pressed, from Seeds. Key constituents include Oleic (67% to 72%), Palmitic and Stearic. Specific Gravity: 0.95 - 0.96 @ 72°F. CAS No: 93165-54-9, F.E.M.A. : 2406. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale yellow to green in colour and odourless. Common Name: Moringa, Horse Radish Tree, Drumstick Tree, Sahijan. Description: It is a very stable oil which is highly nutritious for the skin. This oil is much similar olive oil in composition but still it's very light. Known properties: It has numerous antioxidants in it, the oil does not become rancid for several years after it is produced. This makes Moringa oil sought after for a number of health and beauty applications. Moringa oil is viable for use as a cooking oil, it is occasionally used as a dressing for vegetables, salads, and other green dishes.. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Moringa carrier oil is highly valued in cosmetic industries. It is considered to best for massage and aromatherapy applications. The oil finds application in a range of products including anti-aging cream, hair care products, soap and body wash, face cream, perfume and Moringa oil is a popular natural supplement to increase the health and strength of the hair and scalp."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Moringa oil can be massaged into the hair and scalp and allowed to remain there for several minutes, delivering rejuvenating vitamins and minerals to the follicles of the hair and tissue of the scalp. Regular massage with this oil can help reduce split ends and dandruff. Moringa oil can also be found in hand lotions, lip balm, and other products that target dry and flaking skin, and is a popular ingredient in blended massage oils."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is pleasant to the touch, warms well, is not sticky, and combines well with other oils and fragrances."
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
    "description": "Neem is a medium sized to large tree characterized by its short straight trunk, furrowed dark brown to gray bark and dense rounded crowns of pinnate leaves.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "NEEM OIL (Azadirachta Indica), extracted by Cold Pressed, from Seed. Key constituents include Neem oil has various chemical compounds that include Margosic Acid, Nimbin,Nimbidin, Nimbinin, Kaempeerol, Azadirone, Quercursertin, B &#150; Sitosterol, Praisine,Vanilic Acid, Nimbicetin and Meliacins.. Specific Gravity: 0.89000 to 0.89900 @ 25°C. Refractive Index: 1.47600 to 1.49000 @ 20°C. CAS No: 8002-65-1. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale brow liquid with rich, earthy and green musty smell. Common Name: Neem seed oil, Azadirachta Indica oil, Azadirachta indica l. seed oil, Margosa oil. Description: Neem is a medium sized to large tree characterized by its short straight trunk, furrowed dark brown to gray bark and dense rounded crowns of pinnate leaves. Known properties: It has antibacterial, antiviral, antifungal, antiseptic, and antiparasitic, astrigent, purgative, emollien, anti inflammatory, digestive, diuretic, laxative, expectorant, blood purifire, anti diabetic and tonic properties. It has strong contraceptive & repellant properties as well. It is excellent moisturizer.. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Neem is a herbal remedy for the medication of fever, gastrointestinal disease, skin disorders, respiratory disease, intestinal parasites, immune system disorder and yeast infections in pets and many. It may inhibit the development of viruses and prevent them from entering and infecting cells."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Neem oil is an appropriate herbal remedy for numerous skin disorders like acne, eczema, psoriasis, scabies etc. It is widely used for production of cosmetics like medicated sops, facial creams, nail polishes, nail oils, shampoos, conditioners etc."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Neem oil helps to control common pests like white flies, aphids, scales, mealy bugs, spider mites, locusts, thrips, and Japanese beetles, Neem oil contains several compounds which have proven medicinal and agricultural uses of high value."
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
    "botanicalName": "Citrus aurantium",
    "category": "ORGANIC_OIL",
    "description": "It is distilled from the peel of the fruit. It has a lively, fruity, sweet aroma much aromatic than sweet orange.",
    "shortSpec": "Certified Organic · Pale yellow to yellow clear",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 75,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "ORGANIC ORANGE OIL (Citrus aurantium), extracted by Cold Pressed, from Peel. Key constituents include Orange oil has various chemical compounds that include limonene, camphene, myrcene, pinene, cymene, ocimene. Specific Gravity: 0.84500 - 0.85100 @ 25.00 °C. Refractive Index: 1.46900 - 1.47800 @ 20.00 °C. CAS No: 68916-04-1. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale yellow to yellow clear liquid with lively, fruity, sweet, citrusy fragrances much aromatic than sweet orange.. Common Name: Seville orange oil, Bitter orange peel oil, Sour orange oil. Description: It is distilled from the peel of the fruit. It has a lively, fruity, sweet aroma much aromatic than sweet orange. Known properties: Antidepressant, anti-inflammatory, antiseptic, antispasmodic, astringent, bactericidal, carminative, deodorant, digestive, fungicidal, stimulant, stomachic and tonic.. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It finds application in providing relief from colds, dull skin, constipation, flatulence, gums, flu, mouth, slow digestion and stress."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is useful bronchitis, colds, constipation, dull and oily complexions, flu, flatulence, nervous tension, palpitations, poor circulation, slow digestion, spasm, water retention."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is used in high class perfumery & other fragrances."
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
    "description": "Peppermint is a perennial herb that grows up to 1 meter (3 feet) high and has slightly hairy serrated leaves with pinkish-mauve flowers arranged in a long conical shape.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 82,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "PEPPERMINT OIL (Mentha piperita), extracted by Steam Distillation, from Leaves & Stem. Key constituents include Peppermint oil has various chemical compounds that include Menthyl Acetate, Menthone, Cineole, Limonene, Phellandrene, Pinene and Beta-Caryophyllene.. Specific Gravity: 0.89600 - 0.90800 @ 25 °C. Refractive Index: 0.89900 - 0.91100 @ 20 °C. CAS No: 8006-99-3 F.E.M.A. : 2848. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Clear to pale yellow, sometimes greenish thin liquid with fresh, sweet, menthol-minty, herbaceous fragrance. Common Name: Mentha piperita oil. Description: Peppermint is a perennial herb that grows up to 1 meter (3 feet) high and has slightly hairy serrated leaves with pinkish-mauve flowers arranged in a long conical shape. Known properties: It is nalgesic, anesthetic, econgestant, emmenagogue, expectorant, febrifuge, antiseptic, antigalactagogue, antiphlogistic, antispasmodic, astringent, carminative, cephalic, cholagogue, cordial, decongestant, emmenagogue, expectorant, febrifuge, hepatic, nervine, stimulant, stomachic, sudorific, vasoconstrictor and vermifuge.. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is used as refreshing, mental stimulant, energizing, used to enhance well-being of digestive and respiratory system. It helps against upset stomachs, inhibits the growth of certain bacteria and can help smooth and relax muscles when inhaled or applied to the skin Peppermint has a high menthol content, and is often used as a flavouring in tea, ice creams, confectinery, chewing gum and toothpaste."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is used in different cosmetics and toiletries preparations especially in preparation of shampoos and soaps, which give the hair a minty scent and produce a cooling sensation on the skin. Used in perfumery & other fragrances."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "PEPPERMINT OIL is used in the perfumery, cosmetics and pharmaceutical industries."
      }
    ],
    "signatureColor": "#1B5E3C",
    "labelImageUrl": "/labels/organic-peppermint-oil.png",
    "compositeImageUrl": "/products/organic-peppermint-oil.webp"
  },
  {
    "id": "organic-rose",
    "slug": "organic-rose-oil",
    "name": "Organic Rose Oil (Centifolia)",
    "botanicalName": "Rosa centifolia",
    "category": "ORGANIC_OIL",
    "description": "A small, erect, prickly shrub with unequal, large, hooked prickles and many bristles, leaves compound, alternate, leaflets usually five, rachis not prickly, flowers usually pink, very fragrant.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 86,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "featured": true,
    "overview": "ROSE OIL (CENTIFOLIA) (Rosa centifolia), extracted by Steam distillation, from Flowers. Key constituents include Rose oil has various chemical compounds that include Citronellol, phenyl ethanol, geraniol, nerol, farnesol and stearpoten with traces of nonanol, linalool, nonanal, phenyl acetaldehyde, citral, carvone, citronellyl acetate, 2-phenylmenthyl acetate, methyl eugenol, eugenol and rose oxide.. Specific Gravity: 0.94340 - 0.99000 @ 25°C. Refractive Index: 1.49000 - 1.49000 @ 20°C. CAS No: 8007-01-0, F.E.M.A. : 2989. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale yellow clear liquid with sweet, floral, rosy odor. Common Name: Rose De MaI Oil, Rosa centifolia oil. Description: A small, erect, prickly shrub with unequal, large, hooked prickles and many bristles, leaves compound, alternate, leaflets usually five, rachis not prickly, flowers usually pink, very fragrant. Known properties: Antidepressant, antiphlogistic, antiseptic, antispasmodic, antiviral, aphrodisiac, astringent, bactericidal, choleretic, cicatrisant, depurative, emmenagogue, haemostatic, hepatic, laxative, nervous system sedative, stomachic and a tonic for the heart, liver, stomach and uterus.. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Rose oil soothes and balances the mind. It has antidepressant properties and can help alleviate anxiety, stress, nervous tension and help people deal with emotional problems such as anger, grief, sadness, Rose is one of the best oils for treating female reproductive problems, PMT, menopausal symptoms and irregular periods."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is also beneficial for the physical heart and the respiratory and digestive systems. It can also help with headaches and migraines and is reputed to have aphrodisiac properties."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Rose oil stimulates the skin, while moisturizing and hydrating. It boosts all skin types and is particularly beneficial for dry, mature, inflamed and sensitive skin."
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
    "description": "This evergreen tree can grow up to 40 meters (130 feet) and has a flat crown. The bark is a reddish-brown that is deeply fissured with needle-like gray-green leaves.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 70,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "ROSEMARY OIL (Rosmarinus officinalis), extracted by Steam Distillation, from Leaves and flowering tops. Key constituents include Rosemary oil has various chemical compounds that include Pinenes, camphene, limonene, cineol, borneal, camphor, linalol, terpineol, octanone and bornyl acetate.. Specific Gravity: 0.89800 - 0.92200 @ 25°C. Refractive Index: 1.46600 - 1.47000 @ 25°C.. CAS No: 8000-25-7, F.E.M.A. : 2992. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Colorless to pale yellow clear liquid with herbal, camphor, woody, balsam fragrance. Common Name: Rosmarinus officinalis l. leaf oil, Rosemary essential oil. Description: This evergreen tree can grow up to 40 meters (130 feet) and has a flat crown. The bark is a reddish-brown that is deeply fissured with needle-like gray-green leaves. Known properties: Analgesic, antibacterial, antifungal, antiseptic, antispasmodic, astringent, carminative, cholagogue, hypertensive, nervine, rubefacient, stimulant, stomachic and sudorific. It is also considered antidepressant and uplifting. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Rosemary oil is used for all variety respiratory problems colds, sinusitis, lung congestion and asthma. Traditionally used for healing skin problems, it is commonly added in preparations to help acne, eczema, over production of skin oil, dermatitis, etc."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It's used in many citrus colognes, forest and oriental perfumes and eau de cologne. Rinses for dark hair often contain rosemary, as do room deodorants, household sprays, disinfectants and soaps."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is also used in inhalation, bath and massage. Rosemary has a very old reputation for improving memory, and has been used as a symbol for remembrance."
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
    "description": "An attractive shrub or small tree, to 20 or 30 ft (6 or 10 m) high, the pomegranate is much-branched, more or less spiny and extremely long-lived.",
    "shortSpec": "Certified Organic · USDA Certified",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 65,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Certified Organic Cultivation",
        "description": "Raw material cultivated without synthetic pesticides, herbicides, or chemical fertilizers under USDA NOP / EU organic certification protocols."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation / Cold Press",
        "description": "Extracted using certified organic-compliant equipment with no cross-contamination from conventional batches."
      },
      {
        "stepNumber": 3,
        "title": "Organic Certification Audit",
        "description": "Production batch cross-referenced with organic farm lot documentation and third-party certification body inspection records."
      },
      {
        "stepNumber": 4,
        "title": "Certificate of Analysis",
        "description": "Full CoA including organic certification number, GC-MS profile, and pesticide residue analysis provided for each batch."
      }
    ],
    "overview": "POMEGRANATE SEED OIL (Punica granatum), extracted by Cold pressed, from Seeds. Key constituents include Pomegranate seed oil has various chemical compounds that include Punicic acids, oleic acid, Linolenic acid, Palmitic acid etc. In which the Punicic acids about is about 80%.. Specific Gravity: 0.94340 - 0.99000 @ 25°C. Refractive Index: 1.49000 - 1.49000 @ 20°C. CAS No: 8007-01-0, F.E.M.A. : 2989. Supplied as 100% pure organic botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale yellow mobile liquid with little or no scent. Common Name: Pomegranate oil, Punica granatum seed oil. Description: An attractive shrub or small tree, to 20 or 30 ft (6 or 10 m) high, the pomegranate is much-branched, more or less spiny and extremely long-lived. Known properties: Pomegranate seed oil adds moisture, has natural estrogenic properties, emollients, anti-oxidants, antibacterial, anti-inflammatory, anti-microbial, vermifuge,, improves skin elasticity, and protects the skin. It has unique healing properties and can revitalize dull or mature skin, assist with wrinkles, and to soothe minor skin irritations.. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Pomegranate seed oil has been found to be of help prevent the formation of skin cancer by reducing the frequency of lesions and limit the occurrence of tumors. A moisturising and nourishing oil containing over 60% punicic acid which gives the oil anti-inflammatory and anti-ageing properties."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is used in making a very relishing syrups and sauces which are savoured in most European and Asian countries. Pomegranate seeds add flavor and color to any fruit salad."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "POMEGRANATE SEED OIL is used in the perfumery, cosmetics and pharmaceutical industries."
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
    "description": "Angelica Root Essential Oil is a soft oil which is distilled from the dried roots, rhizome and seeds of Angelica plant. Angelica Root Essential Oil is well-recognized for effectively treating diverse ailments and diseases. For centuries it has been popular for promoting fertility as well as curing the respiratory and digestive problems. It invigorates the lymphatic system, helps flatulence, dyspepsia, nausea, discomfort, and indigestion.",
    "shortSpec": "Steam Distilled · Ayurvedic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 35,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Ayurvedic Herb Selection",
        "description": "Herbs selected per classical Ayurvedic text specifications (Charaka Samhita / Sushruta Samhita) for regional origin, harvesting season, and doshic properties."
      },
      {
        "stepNumber": 2,
        "title": "Traditional Processing",
        "description": "Herbs processed using time-honored Pak Vidhi methods: combining base oils with herb decoctions and applying controlled heat for prescribed periods."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Maturation",
        "description": "Processed oil filtered to remove herb marc and allowed to mature in stainless vessels for optimal potency and stability."
      },
      {
        "stepNumber": 4,
        "title": "Quality Verification",
        "description": "Finished oil tested for heavy metals, microbial contamination, and active compound profile in accordance with Ayurvedic Pharmacopoeia of India (API) standards."
      }
    ],
    "overview": "Angelica Root Oil (Angelica Archangelica), extracted by steam distillation, from roots. Key constituents include Camphene, B-pinene, Sabinene, Limonene, B-phellandrene, Cis-ocimene, Copaene, Bornyl acetate, Terpinen-4-ol, Tridecanolide, Pentadecanolide. Specific Gravity : 0.85000 - 0.88000 @ 20°C. Refractive Index : 1.46900 - 1.47800 @ 20.00°C. CAS No: 8015-64-3. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale yellow to orange brown clear liquid with amber odor. Description : Angelica Root Essential Oil is a soft oil which is distilled from the dried roots, rhizome and seeds of Angelica plant. Known properties: Antispasmodic, aphrodisiac, carminative, diuretic, emmenagogue, expectorant, febrifuge, hepatic, nervine, stimulant, stomachic, and a general tonic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Angelica Root Essential Oil is well-recognized for effectively treating diverse ailments and diseases. For centuries it has been popular for promoting fertility as well as curing the respiratory and digestive problems."
      },
      {
        "title": "Therapeutic Properties",
        "description": "The other various ailments, in which Angelica Root Essential Oil is recommend include accumulation of toxins, bronchitis, coughs, colds, dull & congested skin, gout, fatigue, indigestion, migraine, stress related disorders as well as water retention problems."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Angelica Root Essential Oil has been used in Folk Medicine throughout history due to its antibacterial & anti-fungal properties. This oil is great for giving your constitution a boost by invigorating the lymphatic system. It generally detoxifies the body. It can also be used to great effect on respiratory ailments and is a great help in stomach related problems; including flatulence, dyspepsia, nausea, discomfort and indigestion."
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
    "description": "Calamus oil has a warm and spicy odor that is reminiscent of a sweet forest. Calamus essential oil, Acorus calamus, is highly esteemed as an aromatic stimulant and tonic, often used for nervous complaints, vertigo, headaches, and dysentery. It also acts as a carminative, removing the discomfort caused by flatulence and checking the growth of the bacteria which give rise to this problem.",
    "shortSpec": "Steam Distilled · Ayurvedic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 45,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Ayurvedic Herb Selection",
        "description": "Herbs selected per classical Ayurvedic text specifications (Charaka Samhita / Sushruta Samhita) for regional origin, harvesting season, and doshic properties."
      },
      {
        "stepNumber": 2,
        "title": "Traditional Processing",
        "description": "Herbs processed using time-honored Pak Vidhi methods: combining base oils with herb decoctions and applying controlled heat for prescribed periods."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Maturation",
        "description": "Processed oil filtered to remove herb marc and allowed to mature in stainless vessels for optimal potency and stability."
      },
      {
        "stepNumber": 4,
        "title": "Quality Verification",
        "description": "Finished oil tested for heavy metals, microbial contamination, and active compound profile in accordance with Ayurvedic Pharmacopoeia of India (API) standards."
      }
    ],
    "overview": "Calamus Oil (Acorus calamus), extracted by steam distillation, from roots. Key constituents include Acorenone, b-gurjunene, Isoshyobunine, b-asarone, Calamendiol, a-selinene, a-calacorene, Calamusenone, Camphone, Shyobunone. Specific Gravity : 0.99200 - 0.99300 @ 72°F. Refractive Index : 1.54502 - 1.55500 @ 72°F. CAS No: 84775-39-3. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Yellow brownish liquid with Characteristic odour of Calamus. Description : Calamus oil has a warm and spicy odor that is reminiscent of a sweet forest. Known properties: Aromatic stimulant & tonic, for curing nervous complaints, vertigo and headaches, antiseptic, anticonvulsant, bactericidal, diaphoretic, carminative, expectorant, insecticide, hypotensive, spasmolytic, stomachic, stimulant, tonic and vermifuge. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Calamus essential oil, Acorus calamus, is highly esteemed as an aromatic stimulant and tonic, often used for nervous complaints, vertigo, headaches, and dysentery."
      },
      {
        "title": "Therapeutic Properties",
        "description": "A fluid extract is an official preparation in the United States and some other Pharmacopceias, but it is not now official in the British Pharmacopceia, though it is much used in herbal medicine as an aromatic bitter. It also acts as a carminative, removing the discomfort caused by flatulence and checking the growth of the bacteria which give rise to this problem."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It has been often used to increase the appetite and benefit digestion, given as a fluid extract, infusion or tincture. The tincture is, obtained by macerating the finely-cut rhizome in alcohol for seven days and filtering, is used as a stomachic and flavouring agent. The essential is used as an addition to, and included in inhalations blends."
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
    "botanicalName": "Sassuriea costus",
    "category": "AYURVEDIC",
    "description": "Costus Root is a large, erect, perennial plant up to 2m high with a thick tapering root and numerous black flowers. It helps to normalize and strengthen digestion, cleanse the body of toxic accumulations, enhance fertility, and reduce pain.",
    "shortSpec": "Steam Distilled · Ayurvedic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Ayurvedic Herb Selection",
        "description": "Herbs selected per classical Ayurvedic text specifications (Charaka Samhita / Sushruta Samhita) for regional origin, harvesting season, and doshic properties."
      },
      {
        "stepNumber": 2,
        "title": "Traditional Processing",
        "description": "Herbs processed using time-honored Pak Vidhi methods: combining base oils with herb decoctions and applying controlled heat for prescribed periods."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Maturation",
        "description": "Processed oil filtered to remove herb marc and allowed to mature in stainless vessels for optimal potency and stability."
      },
      {
        "stepNumber": 4,
        "title": "Quality Verification",
        "description": "Finished oil tested for heavy metals, microbial contamination, and active compound profile in accordance with Ayurvedic Pharmacopoeia of India (API) standards."
      }
    ],
    "overview": "Costus Root Oil (Saussurea costus), extracted by steam distillation, from roots. Key constituents include Aplotaxene, Costus Acid, Costol, Lactone, Dihydro Costus lactone. Specific Gravity : 0.970 - 1.035 @ 25°C. Refractive Index : 1.5000 – 1.5700 @ 25°C. CAS No: 8023-88-9. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Yellow to brownish yellow viscous liquid with an extremely tenacious odor. Description : Costus Root is a large, erect, perennial plant up to 2m high with a thick tapering root and numerous black flowers. Known properties: Antiseptic, antispasmodic, antiviral, bactericidal, carminative, digestive, expectorant, febrifuge, stimulant, stomachic, and tonic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It helps to normalize and strengthen digestion, cleanse the body of toxic accumulations, enhance fertility, and reduce pain."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is also used as incense, as a fixative and fragrance component in cosmetics and perfumes."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is also a hair wash."
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
    "description": "The tree is a perennial tree, conical-shaped about 28 meters (80 feet) high, tiny dark green leaves, and having male and female cones. It is beneficial in conditions of excess fluid such as bleeding, nosebleeds, heavy menstruation, heavy perspiration, cough and bronchitis.",
    "shortSpec": "Steam Distilled · Ayurvedic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 38,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Ayurvedic Herb Selection",
        "description": "Herbs selected per classical Ayurvedic text specifications (Charaka Samhita / Sushruta Samhita) for regional origin, harvesting season, and doshic properties."
      },
      {
        "stepNumber": 2,
        "title": "Traditional Processing",
        "description": "Herbs processed using time-honored Pak Vidhi methods: combining base oils with herb decoctions and applying controlled heat for prescribed periods."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Maturation",
        "description": "Processed oil filtered to remove herb marc and allowed to mature in stainless vessels for optimal potency and stability."
      },
      {
        "stepNumber": 4,
        "title": "Quality Verification",
        "description": "Finished oil tested for heavy metals, microbial contamination, and active compound profile in accordance with Ayurvedic Pharmacopoeia of India (API) standards."
      }
    ],
    "overview": "Cypress Oil (Cupressus sempervirens), extracted by steam distillation, from needles. Key constituents include volatile oil and tannins. Specific Gravity : 0.87000 - 0.89100 @ 25.00°C. Refractive Index : 1.47100 - 1.48200 @ 20.00°C. CAS No: 8013-86-3. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale amber clear oily liquid with sweet, balsamic and spicy odor. Description : The tree is a perennial tree, conical-shaped about 28 meters (80 feet) high, tiny dark green leaves, and having male and female cones. Known properties: Astringent, antiseptic, vasoconstrictor, antispasmodic, deodorant, diuretic, deodorant, haemostatic, hepatic, respiratory tonic and sedative. Cypress oil has a calming and soothing effect on the irritable, angry and stressed-out person. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "It is beneficial in conditions of excess fluid such as bleeding, nosebleeds, heavy menstruation, heavy perspiration, cough and bronchitis, haemorrhages and fluid retention."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It helps to regulate the menstrual cycle, helps to ease arthritis and rheumatic pain. Cypress essential oil can also be used in aromatherapy."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is used in men's fragrances, aftershaves and lotions. It is used as a fragrance component in soaps, colognes and perfumes, especially men's fragrances. Employed to some extent as a flavouring agent, mainly in meat products and pizzas."
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
    "description": "Cyperus scariosus is a smooth, erect, perennial sedge. An woody, earthy, spicy essential oil is distilled from its roots. Cypriol oil is also used in various other ailments like fever, burning maturation, skin diseases, rheumatoid arthritis, painful menstruation, neurasthenia, general debility, kidney stones, fibromyalgia, gout and other uric acid sensitive conditions.",
    "shortSpec": "Steam Distilled · Ayurvedic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 48,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Ayurvedic Herb Selection",
        "description": "Herbs selected per classical Ayurvedic text specifications (Charaka Samhita / Sushruta Samhita) for regional origin, harvesting season, and doshic properties."
      },
      {
        "stepNumber": 2,
        "title": "Traditional Processing",
        "description": "Herbs processed using time-honored Pak Vidhi methods: combining base oils with herb decoctions and applying controlled heat for prescribed periods."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Maturation",
        "description": "Processed oil filtered to remove herb marc and allowed to mature in stainless vessels for optimal potency and stability."
      },
      {
        "stepNumber": 4,
        "title": "Quality Verification",
        "description": "Finished oil tested for heavy metals, microbial contamination, and active compound profile in accordance with Ayurvedic Pharmacopoeia of India (API) standards."
      }
    ],
    "overview": "Cypriol Oil (Cyperus scariosus), extracted by steam distillation, from root. Key constituents include cyperone, selinene, cyperene, cyperotundone, patchoulenone, sugeonol, kobusone and isokobusone. Specific Gravity : 1.00520 to 1.00680 @ 25°C. Refractive Index : 1.51062 to 1.51100 @ 20°C. CAS No: 91771-62-9. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Amber clear viscous liquid with woody, earthy, spicy like cinnamon odor. Description : Cyperus scariosus is a smooth, erect, perennial sedge. An woody, earthy, spicy essential oil is distilled from its roots. Known properties: It is digestive, carminative anti-inflammatory, a general and nervine tonic, diuretic, diaphoretic, febrifuge, vermifuge, hemostatic, hypotensive etc. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Cypriol oil is also used in various other ailments like fever, burning maturation, skin diseases, rheumatoid arthritis, painful menstruation, neurasthenia, general debility, kidney stones, fibromyalgia, gout and other uric acid sensitive conditions."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Cypriol Essential Oil is often used in compounding fragrances, luxury cosmetics, and traditional attars."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It has a distinctive woody, earthy, spicy aroma that makes it a valued ingredient in high-end perfumery and cosmetic formulations."
      }
    ],
    "signatureColor": "#4E3624",
    "labelImageUrl": "/labels/ayurvedic-cypriol-oil.png",
    "compositeImageUrl": "/products/ayurvedic-cypriol-oil.webp"
  },
  {
    "id": "ayur-gaultheria",
    "slug": "ayurvedic-gaultheria-oil",
    "name": "Gandhapura Oil / Gandharan Oil (Ayurvedic)",
    "botanicalName": "Gaultheria fragrantissima",
    "category": "AYURVEDIC",
    "description": "It is shrub has height about 3.2meter high. Stem is branched and bark colour mostly orange-brown, leaves are mostly 12 cm long, leathery, dotted, and with glands. Gandhapura oil is applied externally with success in acute rheumatism, sciatica and neuralgia.",
    "shortSpec": "Steam Distilled · Ayurvedic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Ayurvedic Herb Selection",
        "description": "Herbs selected per classical Ayurvedic text specifications (Charaka Samhita / Sushruta Samhita) for regional origin, harvesting season, and doshic properties."
      },
      {
        "stepNumber": 2,
        "title": "Traditional Processing",
        "description": "Herbs processed using time-honored Pak Vidhi methods: combining base oils with herb decoctions and applying controlled heat for prescribed periods."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Maturation",
        "description": "Processed oil filtered to remove herb marc and allowed to mature in stainless vessels for optimal potency and stability."
      },
      {
        "stepNumber": 4,
        "title": "Quality Verification",
        "description": "Finished oil tested for heavy metals, microbial contamination, and active compound profile in accordance with Ayurvedic Pharmacopoeia of India (API) standards."
      }
    ],
    "overview": "Gaultheria Oil / Indian Wintergreen (Gaultheria Fragrantissima), extracted by steam distillation, from seeds. Key constituents include Gandhapura oil has various chemical compounds that include phenols including gaultherin and salicylic acid, approximately 98% to 100.5% of the methyl ester, methyl salicylate, mucilage, resin and tannins. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Brownish liquid with typical aroma. Description : It is shrub has height about 3.2meter high. Stem is branched and bark colour mostly orange-brown, leaves are mostly 12 cm long, leathery, dotted, and with glands. Known properties: It is aromatic, anti rheumatic, anti inflammatory, stimulator, repellents, pain reliever, antibacterial, antiseptic etc. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Gandhapura oil is applied externally with success in acute rheumatism, sciatica and neuralgia. It is used in aches and pains."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Oil is valuable for local inflammatory swellings, neuralgic pain, pleurodynia, myalgia, itching, and swelling and stiffness of the joints. It provides a good pain relieving action."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Wintergreen oil (Gandhapura) is widely used in analgesic balms and in preparations for repelling mosquitoes and other insects."
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
    "description": "It is an annual herb with horizontal root-stock and tubesous root fibres, leaves are 30 cms or at times more than that in length. Due to its woody, spicy & peculiar odour like roots, it is used in perfume formulations.",
    "shortSpec": "Steam Distilled · Ayurvedic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Ayurvedic Herb Selection",
        "description": "Herbs selected per classical Ayurvedic text specifications (Charaka Samhita / Sushruta Samhita) for regional origin, harvesting season, and doshic properties."
      },
      {
        "stepNumber": 2,
        "title": "Traditional Processing",
        "description": "Herbs processed using time-honored Pak Vidhi methods: combining base oils with herb decoctions and applying controlled heat for prescribed periods."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Maturation",
        "description": "Processed oil filtered to remove herb marc and allowed to mature in stainless vessels for optimal potency and stability."
      },
      {
        "stepNumber": 4,
        "title": "Quality Verification",
        "description": "Finished oil tested for heavy metals, microbial contamination, and active compound profile in accordance with Ayurvedic Pharmacopoeia of India (API) standards."
      }
    ],
    "overview": "Hedychium Oil (Hedychium spicatum), extracted by steam distillation, from root (rizomes). Key constituents include Hedychium oil has various chemical compounds that include ethyl ester of p-methoxy cinnamic acid, sesquiterpenes and methyl paracumarine acetate. It also contains sitosterol and its glycoside. Specific Gravity : 1.4800 - 1.4890 @ 25°C. Refractive Index : 1.4800 - 1.4890 @ 20°C. CAS No: 93455-95-9. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale yellow viscous liquid with warm woody, slightly spicy, slightly sweet smell. Description : It is an annual herb with horizontal root-stock and tubesous root fibres, leaves are 30 cms or at times more than that in length. Known properties: It is anti-inflammator, bactericide, carminative, fungicide, stomachic, tonic and expectorant, febrifuge, excitant, stimulant and anti-rheumatic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Due to its woody, spicy & peculiar odour like roots, it is used in perfume formulations. It is used in hair oil especially to prevent baldness and hairfall and makes them more manageable."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is useful in local inflammations, nausea, asthma, bronchitis, hiccups and in pain. It counteracts bad mouth taste."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is used in perfume formulations and hair care products. Its antimicrobial and anti-inflammatory properties make it valuable for pharmaceutical and cosmetic applications."
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
    "description": "It is derived form the plant of Ocimum sanctum belonging to family Labiatae. It has been widely grown throughout the world and commonly cultivated in gardens. Basil oil used in flavoring liquor, chewing tooth paste, cold rub oil etc. It is used in flavoring, cosmetics, soap, Pharmaceuticals and perfumery. Traditionally Ocimum sanctum is used in malarial fevers, gastric disorders and in hepatic infections.",
    "shortSpec": "Steam Distilled · Ayurvedic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Ayurvedic Herb Selection",
        "description": "Herbs selected per classical Ayurvedic text specifications (Charaka Samhita / Sushruta Samhita) for regional origin, harvesting season, and doshic properties."
      },
      {
        "stepNumber": 2,
        "title": "Traditional Processing",
        "description": "Herbs processed using time-honored Pak Vidhi methods: combining base oils with herb decoctions and applying controlled heat for prescribed periods."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Maturation",
        "description": "Processed oil filtered to remove herb marc and allowed to mature in stainless vessels for optimal potency and stability."
      },
      {
        "stepNumber": 4,
        "title": "Quality Verification",
        "description": "Finished oil tested for heavy metals, microbial contamination, and active compound profile in accordance with Ayurvedic Pharmacopoeia of India (API) standards."
      }
    ],
    "featured": true,
    "overview": "Holy Basil / Tulsi Oil (Ocimum Sanctum), extracted by steam distillation, from leaves & seeds. Specific Gravity : 0.92550 - 0.9260. Refractive Index : 1.242 - 1.249. CAS No: 91845-35-1. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale Yellow to Yellow colour with Sweet, Pungent and typical odour of Eugenol. Description : It is derived form the plant of Ocimum sanctum belonging to family Labiatae. It has been widely grown throughout the world and commonly cultivated in gardens. Known properties: Helpful for nervous system disorders such as depression, headache, hypertension, insomnia, migraine, nervous tension, stress. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Basil oil used in flavoring liquor, chewing Tooth paste, cold rub oil etc. It is used in flavoring, cosmetics, soap, Pharmaceuticals and perfumery."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Traditionally Ocimum sanctum is used in malarial fevers, gastric disorders and in hepatic infections. Ocimum sanctum leaves is also used in bronchitis."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Helpful for nervous system disorders such as depression, headache, hypertension, insomnia, migraine, nervous tension, stress."
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
    "description": "Marjoram oil has a warm, slightly spicy smell and is known to calm and induce sleep. Marjoram has been used as a folk remedy, culinary herb, fragrance and medicine. It is also used as an analgesic and anti-spasmodic and also been used traditionally treat depression.",
    "shortSpec": "Steam Distilled · Ayurvedic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 40,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Ayurvedic Herb Selection",
        "description": "Herbs selected per classical Ayurvedic text specifications (Charaka Samhita / Sushruta Samhita) for regional origin, harvesting season, and doshic properties."
      },
      {
        "stepNumber": 2,
        "title": "Traditional Processing",
        "description": "Herbs processed using time-honored Pak Vidhi methods: combining base oils with herb decoctions and applying controlled heat for prescribed periods."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Maturation",
        "description": "Processed oil filtered to remove herb marc and allowed to mature in stainless vessels for optimal potency and stability."
      },
      {
        "stepNumber": 4,
        "title": "Quality Verification",
        "description": "Finished oil tested for heavy metals, microbial contamination, and active compound profile in accordance with Ayurvedic Pharmacopoeia of India (API) standards."
      }
    ],
    "overview": "Marjoram Oil (Origanum majorana), extracted by steam distillation, from flowering leaves and tops. Key constituents include sabinene, a-terpinene, y-terpinene, p-cymene, terpinolene, linalool, cis-sabinene hydrate, linalyl acetate, terpinen-4-ol and y-terpineol. Specific Gravity : 0.86000 - 0.89200 @ 20°C. Refractive Index : 1.47200 - 1.47900 @ 20°C. CAS No: 8015-01-8. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale yellow to orange amber clear liquid with spicy odor. Description : Marjoram oil has a warm, slightly spicy smell and is known to calm and induce sleep. Known properties: Marjoram oil is non-toxic, non-irritant and non-sensitizing but should not be used during pregnancy. It was a very popular herb amongst the Greeks and widely used in medicine and perfumes. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Marjoram has been used as a folk remedy, culinary herb, fragrance and medicine. It is also used as an analgesic and anti-spasmodic and also been used traditionally treat depression."
      },
      {
        "title": "Therapeutic Properties",
        "description": "The oil is used as an external application for sprains, bruises, stiff and paralytic limb. The oil finds application in migraine, headaches, sinusitis and rheumatic pains."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Marjoram is used as a flavouring agent in food, condiments and liqueurs. It is used in soaps, shampoos, lotions and perfumes."
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
    "description": "This evergreen tree grows up to about 6 meters (20 feet) and has dark green serrated oval leaves with pink/white flowers that are highly perfumed. Myrrh oil is effective against excessive mucus in the lungs and helps to clear ailments such as cold, catarrh, coughs, sore throats and bronchitis.",
    "shortSpec": "Steam Distilled · Ayurvedic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 58,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Ayurvedic Herb Selection",
        "description": "Herbs selected per classical Ayurvedic text specifications (Charaka Samhita / Sushruta Samhita) for regional origin, harvesting season, and doshic properties."
      },
      {
        "stepNumber": 2,
        "title": "Traditional Processing",
        "description": "Herbs processed using time-honored Pak Vidhi methods: combining base oils with herb decoctions and applying controlled heat for prescribed periods."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Maturation",
        "description": "Processed oil filtered to remove herb marc and allowed to mature in stainless vessels for optimal potency and stability."
      },
      {
        "stepNumber": 4,
        "title": "Quality Verification",
        "description": "Finished oil tested for heavy metals, microbial contamination, and active compound profile in accordance with Ayurvedic Pharmacopoeia of India (API) standards."
      }
    ],
    "overview": "Myrrh Oil (Commiphora myrrha), extracted by cold pressed, from resin. Key constituents include Heerabolene, limonene, dipentene, pinene, eugenol, cinnamaldehyde, cuminaldehyde and cadinene. Specific Gravity : 0.98800 to 1.01700 @ 25°C. Refractive Index : 1.51700 to 1.52800 @ 20°C. CAS No: 8016-37-3. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Yellow amber to greenish brown clear oily liquid with rich, balsamic, spicy, warm, earthy, woody aroma. Description : This evergreen tree grows up to about 6 meters (20 feet) and has dark green serrated oval leaves with pink/white flowers that are highly perfumed. Known properties: It is anticatarrhal, anti-inflammatory, antimicrobial, antiphlogistic, astringent, balsamic, expectorant, antiseptic, fungicidal, revitalizing, sedative, stimulant-digestive and pulmonary tonic, tonic-uterine(emmenagogue) hormone-like (thyroid modulator) and aphrodisiac. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Myrrh oil is effective against excessive mucus in the lungs and helps to clear ailments such as cold, catarrh, coughs, sore throats and bronchitis."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It is used for diarrhoea, dyspepsia, flatulence and hemorrhoids (haemorrhoids). It is used after a stressful event or an extended illness, to revitalize and restore."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is a popular ingredient in mouthwashes, toothpastes and gargles for infections of the mouth and throat. It is used in creams and lotions for ageing, wrinkled skin."
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
    "description": "Oregano is a member of the mint family. Oregano essential oil is produced from the oregano plant through the process of steam distillation. Used commonly in medicines for wounds, headaches, and venomous bites and even hemlock poisoning.",
    "shortSpec": "Steam Distilled · Ayurvedic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 55,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Ayurvedic Herb Selection",
        "description": "Herbs selected per classical Ayurvedic text specifications (Charaka Samhita / Sushruta Samhita) for regional origin, harvesting season, and doshic properties."
      },
      {
        "stepNumber": 2,
        "title": "Traditional Processing",
        "description": "Herbs processed using time-honored Pak Vidhi methods: combining base oils with herb decoctions and applying controlled heat for prescribed periods."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Maturation",
        "description": "Processed oil filtered to remove herb marc and allowed to mature in stainless vessels for optimal potency and stability."
      },
      {
        "stepNumber": 4,
        "title": "Quality Verification",
        "description": "Finished oil tested for heavy metals, microbial contamination, and active compound profile in accordance with Ayurvedic Pharmacopoeia of India (API) standards."
      }
    ],
    "overview": "Oregano Oil (Origanum vulgare), extracted by steam distillation, from leaves. Key constituents include carvacrol (share 40-70%), gamma-terpinene (8-10%), p-cymene (5-10%), alpha-pinene, myrcene, thymol, flavonoids, caffeic acid derivatives. Specific Gravity : 0.93800 - 0.93880 @ 20°C. Refractive Index : 1.50900 - 1.51600 @ 20°C. CAS No: 8007-11-2. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Yellowish or greenish with sweet odour. Description : Oregano is a member of the mint family. Oregano essential oil is produced from the oregano plant through the process of steam distillation. Known properties: It is analgesic, anthelmintic, antirheumatic, antiseptic, antispasmodic, antitoxic, antiviral, bactericidal, carminative, choleretic, cytophylactic, diaphoretic, diuretic, emmenagogue, expectorant, febrifuge, fungicidal, parasiticide, rubefacient, stimulant, tonic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Used commonly in medicines for wounds, headaches, and venomous bites and even hemlock poisoning. Oregano oil has powerful anti-microbial properties which are used to assist in the prevention of infections and to treat skin fungi such as athlete's foot."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It has also been used to eliminate lice infestations and has been used to treat food poisoning and other gastrointestinal complaints. It is used to treat itchy skin conditions."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Used as a fragrance component in soaps, colognes and perfumes, especially men's fragrances. Employed to some extent as a flavouring agent, mainly in meat products and pizzas."
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
    "description": "Olibanum is basically a gum-resin from small trees and thorny bushes of the Burseracean family. Olibanum Oil gives peaceful and calming effect on the mind. It perk up and revamp the lost energy, respiratory disorders can be cured.",
    "shortSpec": "Steam Distilled · Ayurvedic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Ayurvedic Herb Selection",
        "description": "Herbs selected per classical Ayurvedic text specifications (Charaka Samhita / Sushruta Samhita) for regional origin, harvesting season, and doshic properties."
      },
      {
        "stepNumber": 2,
        "title": "Traditional Processing",
        "description": "Herbs processed using time-honored Pak Vidhi methods: combining base oils with herb decoctions and applying controlled heat for prescribed periods."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Maturation",
        "description": "Processed oil filtered to remove herb marc and allowed to mature in stainless vessels for optimal potency and stability."
      },
      {
        "stepNumber": 4,
        "title": "Quality Verification",
        "description": "Finished oil tested for heavy metals, microbial contamination, and active compound profile in accordance with Ayurvedic Pharmacopoeia of India (API) standards."
      }
    ],
    "featured": true,
    "overview": "Boswellia Serrata Oil (Boswellia Serrata), extracted by steam distillation, from resin. Key constituents include Beta-caryophyllene, alpha-copaene, alpha-humulene and caryophyllene oxide. Specific Gravity : 0.844 - 0.849 @ 72°F. Refractive Index : 1.465 - 1.469 @ 72°F. CAS No: 8016-36-2. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: pale-yellow or pale-amber in color with a strong, fresh, balsamic scent. Description : Olibanum is basically a gum-resin from small trees and thorny bushes of the Burseracean family. Known properties: Antiseptic, astringent, carminative, digestive, diuretic, sedative and as a tonic. Also used in high class incense, perfumery & other fragrances. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Olibanum Oil gives peaceful and calming effect on the mind. It perk up and revamp the lost energy, respiratory disorders can be cured."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Beneficial results can be observed in combating anxiety, asthma, bronchitis, stress, cough, scars & stretch marks."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Also used in high class incense, perfumery & other fragrances."
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
    "description": "Valerian has about 200 perennial herb and small shrub. The plant is found throughout Europe and Northern Asia. Valerian essential oil has been used for hypochondria, nervous headaches, irritability, mild spasmodic affections, diarrhea, epilepsy, migraine headaches, croup, hysteria, convulsions, vertigo, nervous cough, delirium, neuralgia, muscle cramps, gas pains, stomach cramps, spasms, palpitations.",
    "shortSpec": "Steam Distilled · Ayurvedic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 45,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Ayurvedic Herb Selection",
        "description": "Herbs selected per classical Ayurvedic text specifications (Charaka Samhita / Sushruta Samhita) for regional origin, harvesting season, and doshic properties."
      },
      {
        "stepNumber": 2,
        "title": "Traditional Processing",
        "description": "Herbs processed using time-honored Pak Vidhi methods: combining base oils with herb decoctions and applying controlled heat for prescribed periods."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Maturation",
        "description": "Processed oil filtered to remove herb marc and allowed to mature in stainless vessels for optimal potency and stability."
      },
      {
        "stepNumber": 4,
        "title": "Quality Verification",
        "description": "Finished oil tested for heavy metals, microbial contamination, and active compound profile in accordance with Ayurvedic Pharmacopoeia of India (API) standards."
      }
    ],
    "overview": "Valerian Oil (Valeriana officinalis), extracted by steam distillation, from roots (rhizomes). Key constituents include Valepotriates, glycoside, volatile oil (up to 2%) containing esters of acetic, butyric and isovalerianic acid, limonene, sesquiterpene, calerian camphor, alkaloids, chatinine, valerianine, actinidine and valerine, choline, tannins, resins, bornyl acetate, caryophyllene, valeranone, valerenal, bornyl isovalerate and valerenic acid. Specific Gravity : 0.94200 to 0.98400 @ 25.00°C. Refractive Index : 1.48600 to 1.50250 @ 20.00°C. CAS No: 8008-88-6. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Olive green clear liquid liquid with earthy, woody, slightly sweet scent. Description : Valerian has about 200 perennial herb and small shrub. The plant is found throughout Europe and Northern Asia. Known properties: Anti-inflammatory, anti-pyretic, calmative, sedative, laxative and tonic diuretic, carminative, stomachic, nervine, relaxing, anti-spasmodic etc. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Valerian essential oil has been used for hypochondria, nervous headaches, irritability, mild spasmodic affections, diarrhea, epilepsy, migraine headaches, croup, hysteria, convulsions, vertigo, nervous cough, delirium, neuralgia, muscle cramps, gas pains, stomach cramps, spasms, palpitations."
      },
      {
        "title": "Therapeutic Properties",
        "description": "The oil of valerian is used in many blended perfumes as it gives a different leathery note to a fragrance."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is used for making tea which has medicinal value."
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
    "botanicalName": "Vetiveria zizanioides",
    "category": "AYURVEDIC",
    "description": "It is a tall, tufted, perennial, scented grass with long narrow leaves. The oil is obtained from the root by distillation. It has a long-lasting woody fragrance. Vetiver oil strengthens the central nervous system and is helpful in overcoming depression, insomnia, anxiety, stress, tension and nervousness.",
    "shortSpec": "Steam Distilled · Ayurvedic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 65,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Ayurvedic Herb Selection",
        "description": "Herbs selected per classical Ayurvedic text specifications (Charaka Samhita / Sushruta Samhita) for regional origin, harvesting season, and doshic properties."
      },
      {
        "stepNumber": 2,
        "title": "Traditional Processing",
        "description": "Herbs processed using time-honored Pak Vidhi methods: combining base oils with herb decoctions and applying controlled heat for prescribed periods."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Maturation",
        "description": "Processed oil filtered to remove herb marc and allowed to mature in stainless vessels for optimal potency and stability."
      },
      {
        "stepNumber": 4,
        "title": "Quality Verification",
        "description": "Finished oil tested for heavy metals, microbial contamination, and active compound profile in accordance with Ayurvedic Pharmacopoeia of India (API) standards."
      }
    ],
    "overview": "Vetiver Oil (Vetiveria zizanioides), extracted by steam distillation, from roots. Key constituents include benzoic acid, vetiverol, furfurol, vetivone, vetivene and vetivenyl vetivenate. Specific Gravity : 0.99200 - 1.04200 @ 25°C. Refractive Index : 1.52100 - 1.53100 @ 20°C. CAS No: 8016-96-4. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Yellow brown viscous liquid with woody, rooty, balsam odor. Description : It is a tall, tufted, perennial, scented grass with long narrow leaves. The oil is obtained from the root by distillation. It has a long-lasting woody fragrance. Known properties: Antiseptic, antispasmodic, depurative, rubefacient, sedative (nervous system), stimulant (circulatory, production of red corpuscles), tonic, vermifuge. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Vetiver oil strengthens the central nervous system and is helpful in overcoming depression, insomnia, anxiety, stress, tension and nervousness."
      },
      {
        "title": "Therapeutic Properties",
        "description": "It also helps in curing nervous system, acne, arthritis, cuts, depression, exhaustion, insomnia, muscular aches, oily skin, rheumatism, sores, stress, skin care, aged skin, anorexia, immune system, insomnia, nervousness, high blood pressure, calming and deeply relaxing, eases muscular cramps and improves immune response."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It is a popular ingredient for soaps, toiletries and perfumes. Vetiver is known to the world of perfumes, and its use in scents (attar) is known in India much before the world became familiar with rose scents."
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
    "description": "It grows throughout Nepal between 1100m-2500m. Also found in the Himalayas (Kashmir to Bhutan), N. India, East to China, Taiwan, Philippines, Lesser Sunda Islands. Benefits the nervous system and useful in treatment of stress-related conditions such as headache, insomnia and nervous tension.",
    "shortSpec": "Steam Distilled · Ayurvedic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 30,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Ayurvedic Herb Selection",
        "description": "Herbs selected per classical Ayurvedic text specifications (Charaka Samhita / Sushruta Samhita) for regional origin, harvesting season, and doshic properties."
      },
      {
        "stepNumber": 2,
        "title": "Traditional Processing",
        "description": "Herbs processed using time-honored Pak Vidhi methods: combining base oils with herb decoctions and applying controlled heat for prescribed periods."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Maturation",
        "description": "Processed oil filtered to remove herb marc and allowed to mature in stainless vessels for optimal potency and stability."
      },
      {
        "stepNumber": 4,
        "title": "Quality Verification",
        "description": "Finished oil tested for heavy metals, microbial contamination, and active compound profile in accordance with Ayurvedic Pharmacopoeia of India (API) standards."
      }
    ],
    "overview": "Zanthoxylum Oil (Zanthoxylum armatum), extracted by steam distillation, from fruits. Key constituents include a-pinene, Sabinene, β-myrcene, β-pinene, Limonene, β-phellandrene, Linalool, Trans methyl cinnamate, among others. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Pale Yellow To Reddish Brown Liquid @22°C with Fresh Sweet Wintergreen odor. Description : It grows throughout Nepal between 1100m-2500m. Also found in the Himalayas (Kashmir to Bhutan), N. India, East to China, Taiwan, Philippines, Lesser Sunda Islands. Known properties: Analgesic, Antibiotic, Antiseptic, Carminative, Febrifuge, Odontalgic, Sedative, Stimulant, Stomachic, Tonic. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Benefits the nervous system and useful in treatment of stress-related conditions such as headache, insomnia and nervous tension. Useful in the treatment of circulation, muscles and joints complications and relieves arthritis, inflamed joints, muscular pains, rheumatism and sprains. Prevents the spreading of infectious diseases. Useful in the treatment of tooth problems. Aids the digestive system and helps to improve appetite."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Being rich in linalool, and also containing limonene, methyl cinnamate and cineole, it is used in the fragrance and flavor industry."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "Used as a flavouring agent in the confectionery industry and in the manufacture of soft drinks. Also used in the pharmaceutical and perfumery industries."
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
    "description": "Zedoaria Essential Oil is one of the most widely used ingredients in the perfumery and flavor industry. This oil has, since long, been a part of the folk medicine. Improves blood circulation, ant contusion, and improves menstrual flow.",
    "shortSpec": "Steam Distilled · Ayurvedic Grade",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 28,
    "bottleFormat": "BOTTLE_200ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Ayurvedic Herb Selection",
        "description": "Herbs selected per classical Ayurvedic text specifications (Charaka Samhita / Sushruta Samhita) for regional origin, harvesting season, and doshic properties."
      },
      {
        "stepNumber": 2,
        "title": "Traditional Processing",
        "description": "Herbs processed using time-honored Pak Vidhi methods: combining base oils with herb decoctions and applying controlled heat for prescribed periods."
      },
      {
        "stepNumber": 3,
        "title": "Filtration & Maturation",
        "description": "Processed oil filtered to remove herb marc and allowed to mature in stainless vessels for optimal potency and stability."
      },
      {
        "stepNumber": 4,
        "title": "Quality Verification",
        "description": "Finished oil tested for heavy metals, microbial contamination, and active compound profile in accordance with Ayurvedic Pharmacopoeia of India (API) standards."
      }
    ],
    "overview": "Zedoaria Oil (Curcuma zedoaria), extracted by steam distillation, from rhizomes. Key constituents include germacrone-4,5-epoxide, germacrone, furanodienon, zederone, curzerenone, monoterpene hydrocarbon. Specific Gravity : 0.89900 - 0.93130 @ 27°C. Refractive Index : 1.39000 - 1.48200 @ 27°C. CAS No: 977052-57-5. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Color & Odor: Golden yellow viscous liquid having a warm-spicy, woody & camphoraceous cineolic odor. Description : Zedoaria Essential Oil is one of the most widely used ingredients in the perfumery and flavor industry. This oil has, since long, been a part of the folk medicine. Known properties: Zedoaria has strong antioxidant property. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Primary Applications",
        "description": "Zedoaria Essential Oil is widely used in the perfumery and flavor industry because of its rich aroma. Used In fragrance and flavor industry."
      },
      {
        "title": "Therapeutic Properties",
        "description": "Improves blood circulation, ant contusion, and improves menstrual flow. It helps in abdominal cramps, amenorrhea-abdominal pain and rheumatic pain."
      },
      {
        "title": "Industrial & Commercial Uses",
        "description": "It also helps in pain and swelling associated with sprains."
      }
    ],
    "signatureColor": "#7E4314",
    "labelImageUrl": "/labels/zedoaria-oil.png",
    "compositeImageUrl": "/products/zedoaria-oil.webp"
  },
  {
    "id": "prod-co2-turmeric",
    "slug": "turmeric-co2-extract",
    "name": "Turmeric CO₂ Extract",
    "botanicalName": "Curcuma longa",
    "category": "CO2_OIL",
    "subCategory": "Supercritical Rhizome Extract",
    "description": "Full-spectrum supercritical CO₂ extract of Indian turmeric rhizomes, rich in natural ar-turmerone, α-turmerone, and active curcuminoids with zero solvent residue.",
    "shortSpec": "Supercritical CO₂ · 65% Turmerones",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 96,
    "featured": true,
    "bottleFormat": "BOTTLE_100ML",
    "signatureColor": "#D97706",
    "labelImageUrl": "/labels/turmeric-co2-extract.png",
    "compositeImageUrl": "/products/turmeric-co2-extract.webp",
    "overview": "Our Turmeric CO₂ Extract is manufactured using state-of-the-art dense-phase Supercritical Fluid Extraction (SFE) at sub-45°C. This low-temperature process preserves the complete aromatic profile and heavy bioactive fractions—specifically ar-turmerone, curlone, and curcuminoids—that are traditionally destroyed or lost during conventional steam distillation.",
    "history": "Prepared under strict WHO-GMP and ISO 22000 manufacturing standards for B2B pharmaceutical, nutraceutical, and clean-label cosmetic formulations worldwide.",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Selected Rhizome Milling",
        "description": "Cured, high-curcumin turmeric rhizomes are cryogenic milled to an optimal particle mesh size under oxygen-free inert conditions."
      },
      {
        "stepNumber": 2,
        "title": "Dense-Phase CO₂ SFE Extraction",
        "description": "Pressurized pharmaceutical-grade carbon dioxide (300 bar, 42°C) circulates through the bed, dissolving both volatile aromatics and non-volatile turmerones."
      },
      {
        "stepNumber": 3,
        "title": "Multi-Stage Depressurization",
        "description": "Gentle staged pressure reduction allows total separation of pure turmeric extract, leaving completely zero solvent residues (0.00 ppm)."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS & HPLC Standardization",
        "description": "Each production batch undergoes HPLC and GC-MS fingerprinting to guarantee standardized active turmerones and strict heavy-metal compliance."
      }
    ],
    "benefits": [
      {
        "title": "Skincare & Anti-Inflammatory Actives",
        "description": "High concentration of turmerones provides exceptional topical soothing, brightening, and barrier-repair efficacy for premium cosmetics."
      },
      {
        "title": "Nutraceutical & Wellness Synergy",
        "description": "Natural lipophilic carrier for curcuminoid absorption, widely utilized in softgels, functional tinctures, and wellness supplements."
      },
      {
        "title": "Clean-Label Flavour & Natural Color",
        "description": "Authentic fresh-cut earthy spice aroma with golden carotenoid tones, free from chemical solvent residues."
      }
    ]
  },
  {
    "id": "prod-co2-ginger",
    "slug": "ginger-co2-extract",
    "name": "Ginger CO₂ Extract",
    "botanicalName": "Zingiber officinale",
    "category": "CO2_OIL",
    "subCategory": "Supercritical Rhizome Extract",
    "description": "Total supercritical CO₂ ginger extract capturing both volatile zingiberene aromatics and pungent active gingerols & shogaols in true-to-nature balance.",
    "shortSpec": "Supercritical CO₂ · High Gingerols",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 94,
    "featured": true,
    "bottleFormat": "BOTTLE_100ML",
    "signatureColor": "#CA8A04",
    "labelImageUrl": "/labels/ginger-co2-extract.png",
    "compositeImageUrl": "/products/ginger-co2-extract.webp",
    "overview": "Ginger CO₂ Extract captures the full pungency, deep warmth, and zesty fresh top-notes of fresh ginger. Unlike steam-distilled ginger oil which only contains volatile terpenes, supercritical CO₂ extraction extracts the pungent non-volatile gingerols (6-gingerol, 8-gingerol, 10-gingerol) delivering authentic culinary heat and therapeutic potency.",
    "history": "Distilled from freshly cured ginger selected for extraordinarily dense oleoresin concentrations and high natural gingerol content.",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Rhizome Selection & Flaking",
        "description": "Unbleached ginger roots are sorted for moisture content and flaked to maximize supercritical contact surface area."
      },
      {
        "stepNumber": 2,
        "title": "Supercritical CO₂ Dissolution",
        "description": "High-pressure CO₂ solvent extracts essential aroma terpenes along with lipophilic gingerol fractions at controlled physiological temperatures."
      },
      {
        "stepNumber": 3,
        "title": "Precision Fractionation",
        "description": "Two-stage separation chamber separates terpene-rich volatile fractions from heavy resinous pungency according to target client specifications."
      },
      {
        "stepNumber": 4,
        "title": "Purity & Pungency Certification",
        "description": "Quantified via HPLC for total gingerols and GC-MS for zingiberene, ar-curcumene, and β-sesquiphellandrene ratios."
      }
    ],
    "benefits": [
      {
        "title": "Authentic Warm Culinary Pungency",
        "description": "Delivers the true bite and fresh aroma of raw ginger for beverages, confectionery, and functional culinary formulations."
      },
      {
        "title": "Therapeutic & Warming Body Care",
        "description": "Stimulates microcirculation in warming massage balms, joint pain salves, and stimulating hair follicle formulations."
      },
      {
        "title": "Aromatherapy & Olfactory Brilliance",
        "description": "Adds a radiant, non-terpenic spicy freshness to high-end woody and oriental fine fragrances."
      }
    ]
  },
  {
    "id": "prod-co2-black-pepper",
    "slug": "black-pepper-co2-extract",
    "name": "Black Pepper CO₂ Extract",
    "botanicalName": "Piper nigrum",
    "category": "CO2_OIL",
    "subCategory": "Supercritical Berry Extract",
    "description": "Exquisite supercritical fluid extract of select black peppercorns offering crisp freshly-cracked pepper aroma with standardized bioavailable piperine.",
    "shortSpec": "Supercritical CO₂ · Standardized Piperine",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 92,
    "featured": true,
    "bottleFormat": "BOTTLE_100ML",
    "signatureColor": "#475569",
    "labelImageUrl": "/labels/black-pepper-co2-extract.png",
    "compositeImageUrl": "/products/black-pepper-co2-extract.webp",
    "overview": "Black Pepper CO₂ Extract is processed from sun-ripened black peppercorns. By utilizing supercritical carbon dioxide extraction, the delicate peppery terpenes (β-caryophyllene, sabinene, limonene) and the stimulating alkaloid piperine are concentrated without thermal degradation.",
    "history": "Produced from selected peppercorn vines renowned for high piperine density and characteristic pungent warmth.",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Malabar Berry Inspection",
        "description": "Premium sun-dried Tellicherry grade peppercorns are screened for density and essential oil content (>3.5%)."
      },
      {
        "stepNumber": 2,
        "title": "Subcritical / Supercritical Extraction",
        "description": "Staged CO₂ pressure cycle captures both volatile top notes and dense piperine alkaloid fractions."
      },
      {
        "stepNumber": 3,
        "title": "Inert Gas Purging",
        "description": "Recycled CO₂ evaporation yields a solventless, crystal-pure extract with zero heavy metals or pesticide residues."
      },
      {
        "stepNumber": 4,
        "title": "Analytical Testing",
        "description": "Batch tested for piperine percentage by HPLC and volatile aromatic profile by GC-MS."
      }
    ],
    "benefits": [
      {
        "title": "Bioavailability Enhancement",
        "description": "Standardized piperine content makes it an essential ingredient for boosting nutrient absorption in modern nutraceuticals."
      },
      {
        "title": "Perfumery Sparkle & Contrast",
        "description": "Provides a crisp, dry-woody, electric spice note that elevates citrus, leather, and incense fragrance accords."
      },
      {
        "title": "Invigorating Topical Balms",
        "description": "Natural warming properties ideal for athletic recovery rubs, warming massage oils, and scalp stimulation."
      }
    ]
  },
  {
    "id": "prod-co2-cardamom",
    "slug": "cardamom-co2-extract",
    "name": "Cardamom CO₂ Extract",
    "botanicalName": "Elettaria cardamomum",
    "category": "CO2_OIL",
    "subCategory": "Supercritical Seed Extract",
    "description": "Supreme supercritical CO₂ green cardamom extract with unmatched sweet-balsamic, eucalyptus-citrus aroma free from burnt notes.",
    "shortSpec": "Supercritical CO₂ · High α-Terpinyl Acetate",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 95,
    "featured": true,
    "bottleFormat": "BOTTLE_100ML",
    "signatureColor": "#15803D",
    "labelImageUrl": "/labels/cardamom-co2-extract.png",
    "compositeImageUrl": "/products/cardamom-co2-extract.webp",
    "overview": "Cardamom CO₂ Extract represents the gold standard of green spice extraction. Unlike steam distillation which alters delicate esters due to prolonged boiling, low-temperature CO₂ SFE perfectly preserves the sweet α-terpinyl acetate and clean 1,8-cineole ratio for an intoxicating, true-to-pod aromatic experience.",
    "history": "Harvested at peak pod maturity under controlled processing parameters to ensure maximum seed aroma intensity.",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Green Pod De-husking",
        "description": "Whole green cardamom pods are gently de-husked and seeds are freshly cracked immediately prior to extraction."
      },
      {
        "stepNumber": 2,
        "title": "Supercritical Fluid Extraction",
        "description": "Extracted under low-temperature, high-density supercritical CO₂ to prevent ester hydrolysis."
      },
      {
        "stepNumber": 3,
        "title": "Phase Separation",
        "description": "Complete CO₂ sublimation yields a pale golden, mobile oil with zero thermal degradation."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Quality Release",
        "description": "Confirmed for high α-terpinyl acetate (>45%) and balanced cineole profile."
      }
    ],
    "benefits": [
      {
        "title": "Luxury Perfumery Heart Note",
        "description": "Imparts an ethereal, sweet, sparkling freshness to gourmand, oriental, and amber fragrance formulations."
      },
      {
        "title": "Gourmet Flavor Applications",
        "description": "Highly concentrated flavoring for specialty beverages, artisan chocolates, chai blends, and bakery products."
      },
      {
        "title": "Aromatherapeutic Uplift",
        "description": "Promotes clear breathing, mental invigoration, and digestive comfort in holistic aromatherapy."
      }
    ]
  },
  {
    "id": "prod-co2-clove",
    "slug": "clove-co2-extract",
    "name": "Clove CO₂ Extract",
    "botanicalName": "Syzygium aromaticum",
    "category": "CO2_OIL",
    "subCategory": "Supercritical Bud Extract",
    "description": "Dense supercritical CO₂ clove bud extract yielding superior eugenol purity and rich eugenyl acetate sweetness without harsh burnt overtones.",
    "shortSpec": "Supercritical CO₂ · >85% Eugenol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 90,
    "featured": false,
    "bottleFormat": "BOTTLE_100ML",
    "signatureColor": "#9A3412",
    "labelImageUrl": "/labels/clove-co2-extract.png",
    "compositeImageUrl": "/products/clove-co2-extract.webp",
    "overview": "Clove CO₂ Extract is produced exclusively from unopened, sun-dried flower buds of Syzygium aromaticum. The supercritical CO₂ process yields a golden, rich oil that retains high levels of delicate eugenyl acetate (often hydrolyzed in steam distillation) providing a sweeter, more nuanced spice profile alongside potent eugenol.",
    "history": "Produced from unopened, sun-dried flower buds renowned for high essential oil yield and deep aromatic resonance.",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Bud Cleaning & Sorting",
        "description": "Hand-picked whole clove buds are cleaned to remove headless stems and mother cloves."
      },
      {
        "stepNumber": 2,
        "title": "Precision SFE Run",
        "description": "Extracted with carbon dioxide at 280 bar and 40°C to selectively dissolve aromatic phenolics and esters."
      },
      {
        "stepNumber": 3,
        "title": "Depressurization & Clarification",
        "description": "CO₂ gas is recovered leaving a pristine, solvent-free concentrated aromatic oil."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Purity Verification",
        "description": "Quantified for eugenol, eugenyl acetate, and β-caryophyllene to ensure pharmaceutical grade purity."
      }
    ],
    "benefits": [
      {
        "title": "Oral Care & Dental Applications",
        "description": "Unrivaled natural soothing and antimicrobial properties for clean-label toothpastes, mouthwashes, and oral gels."
      },
      {
        "title": "Natural Antimicrobial Preservative",
        "description": "Acts as a broad-spectrum natural botanical preservative in cosmetic and personal care products."
      },
      {
        "title": "Warm Spicy Fragrance Dimension",
        "description": "Rich sweet-spicy undertones for festive candle blends, seasonal diffusers, and luxury perfumes."
      }
    ]
  },
  {
    "id": "prod-co2-tulsi",
    "slug": "tulsi-holy-basil-co2-extract",
    "name": "Holy Basil / Tulsi CO₂ Extract",
    "botanicalName": "Ocimum sanctum",
    "category": "CO2_OIL",
    "subCategory": "Supercritical Leaf Extract",
    "description": "Sacred Holy Basil (Tulsi) CO₂ extract preserving both volatile eugenol-caryophyllene aromatics and lipophilic ursolic acid adaptogens.",
    "shortSpec": "Supercritical CO₂ · Adaptogenic Actives",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 93,
    "featured": true,
    "bottleFormat": "BOTTLE_100ML",
    "signatureColor": "#166534",
    "labelImageUrl": "/labels/tulsi-holy-basil-co2-extract.png",
    "compositeImageUrl": "/products/tulsi-holy-basil-co2-extract.webp",
    "overview": "Revered across India as 'The Incomparable One' and the 'Queen of Herbs', Holy Basil (Tulsi) is traditionally used in Ayurvedic rasayana formulations. Our supercritical CO₂ extraction captures both Krishna and Rama Tulsi leaves at low temperatures, preserving fragile aromatic monoterpenes alongside heavy triterpenic adaptogenic actives like ursolic acid.",
    "history": "Grown sustainably under regenerative agricultural standards. Extracted under precise low-temperature conditions to preserve volatile monoterpenes alongside therapeutic phenolic acids.",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Leaf Selection",
        "description": "Tulsi leaves are harvested at dawn, shade-dried under controlled humidity, and gently milled."
      },
      {
        "stepNumber": 2,
        "title": "Supercritical SFE Cycle",
        "description": "CO₂ at supercritical parameters selectively extracts volatile eugenol and lipophilic ursolic/oleanolic fractions."
      },
      {
        "stepNumber": 3,
        "title": "Supercritical Separation",
        "description": "CO₂ returns to gas phase, yielding a dark olive, rich botanical oil with 0.00 ppm solvent residues."
      },
      {
        "stepNumber": 4,
        "title": "HPLC & GC-MS Standardization",
        "description": "Standardized for eugenol, β-elemene, germacrene D, and bioactive triterpene content."
      }
    ],
    "benefits": [
      {
        "title": "Adaptogenic & Anti-Stress Formulations",
        "description": "Powerful botanical adaptogen widely incorporated into holistic wellness drops, serums, and adaptogenic blends."
      },
      {
        "title": "Purifying Skincare & Acne Care",
        "description": "Natural antimicrobial and antioxidant actives balance sebum production and purify congested skin."
      },
      {
        "title": "Sacred Herbal Olfactory Signature",
        "description": "Rich clove-like, herbal, spicy-sweet aroma revered in meditation and spiritual aromatherapy."
      }
    ]
  },
  {
    "id": "prod-co2-rosemary",
    "slug": "rosemary-co2-extract",
    "name": "Rosemary CO₂ Extract",
    "botanicalName": "Salvia rosmarinus",
    "category": "CO2_OIL",
    "subCategory": "Supercritical Antioxidant Extract",
    "description": "Standardized Rosemary CO₂ extract with high carnosic acid content, serving as the gold-standard natural botanical antioxidant for cosmetics and food oils.",
    "shortSpec": "Supercritical CO₂ · High Carnosic Acid",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 91,
    "featured": false,
    "bottleFormat": "BOTTLE_100ML",
    "signatureColor": "#3F6212",
    "labelImageUrl": "/labels/rosemary-co2-extract.png",
    "compositeImageUrl": "/products/rosemary-co2-extract.webp",
    "overview": "Rosemary CO₂ Extract is standardized for high concentrations of natural carnosic acid, carnosol, and rosmarinic acid. Widely recognized in the international clean-beauty and organic food sectors as a 100% natural, potent oil-soluble antioxidant that retards lipid oxidation and prevents rancidity in cosmetic oils and emulsions.",
    "history": "Cultivated in certified organic estates under clean agricultural practices for maximum purity.",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Selected Needle Sorting",
        "description": "Rosemary leaves are harvested prior to flowering to maximize phenolic diterpene content."
      },
      {
        "stepNumber": 2,
        "title": "Supercritical Extraction",
        "description": "High-pressure dense CO₂ selectively extracts non-volatile carnosic acid and lipid-soluble polyphenols."
      },
      {
        "stepNumber": 3,
        "title": "Standardization & Filtration",
        "description": "Separated extract is standardized to precise active carnosic acid potency (e.g. 10%–20%)."
      },
      {
        "stepNumber": 4,
        "title": "HPLC Antioxidant Assays",
        "description": "Validated for radical-scavenging activity and active polyphenol fingerprint."
      }
    ],
    "benefits": [
      {
        "title": "Natural Shelf-Life Extension",
        "description": "Exceptional botanical antioxidant that protects fragile carrier oils, active serums, and cosmetics from oxidation."
      },
      {
        "title": "Hair Follicle Revitalization",
        "description": "Stimulates scalp circulation and promotes thick, healthy hair growth in targeted scalp serums."
      },
      {
        "title": "Clean Label Antioxidant Alternative",
        "description": "Replaces synthetic BHT/BHA with an organic, clean-label plant extract."
      }
    ]
  },
  {
    "id": "prod-co2-vetiver",
    "slug": "vetiver-co2-extract",
    "name": "Vetiver CO₂ Extract",
    "botanicalName": "Chrysopogon zizanioides",
    "category": "CO2_OIL",
    "subCategory": "Supercritical Root Extract",
    "description": "Deep, luminous supercritical CO₂ extract of aged Indian Ruh Khus vetiver roots with smoky-woody, balsamic-earthy longevity.",
    "shortSpec": "Supercritical CO₂ · High Khusimol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 89,
    "featured": false,
    "bottleFormat": "BOTTLE_100ML",
    "signatureColor": "#713F12",
    "labelImageUrl": "/labels/vetiver-co2-extract.png",
    "compositeImageUrl": "/products/vetiver-co2-extract.webp",
    "overview": "Vetiver CO₂ Extract offers an exceptionally clean, rich, and refined alternative to conventional hydrodistilled vetiver. By operating at mild temperatures under supercritical CO₂, the heavy sesquiterpene alcohols (khusimol, isovalencenol) and vetivones are extracted without burnt pyrogenous notes, revealing velvety balsamic woods and sweet roots.",
    "history": "Extracted from mature botanical roots known for deep aromatic density and longevity.",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Root Cleaning & Aging",
        "description": "Mature vetiver root fibers are washed in natural spring water, dried, and cured."
      },
      {
        "stepNumber": 2,
        "title": "High-Pressure Supercritical SFE",
        "description": "Dense supercritical CO₂ penetrates the dense fibrous root matrix to dissolve heavy fixative resins."
      },
      {
        "stepNumber": 3,
        "title": "Depressurization & Decanting",
        "description": "Clean recovery of CO₂ leaves a deep amber, viscous oil of remarkable olfactory tenacity."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Chemical Profiling",
        "description": "Quantified for khusimol, α-vetivone, and β-vetivone to ensure authentic Indian Ruh Khus character."
      }
    ],
    "benefits": [
      {
        "title": "Supreme Fixative in Fine Fragrance",
        "description": "Exceptional basenote tenacity that anchors citrus, floral, and woody accords for 24+ hours."
      },
      {
        "title": "Profound Grounding Aromatherapy",
        "description": "Known as the 'Oil of Tranquility' for calming the nervous system and easing restlessness."
      },
      {
        "title": "Skin Regenerating & Balancing",
        "description": "Cools and nourishes dry, mature, or inflamed skin in luxury cosmetic oils and face balms."
      }
    ]
  },
  {
    "id": "prod-co2-sandalwood",
    "slug": "sandalwood-co2-extract",
    "name": "Sandalwood CO₂ Extract",
    "botanicalName": "Santalum album",
    "category": "CO2_OIL",
    "subCategory": "Supercritical Heartwood Extract",
    "description": "Precious supercritical CO₂ extract of aged East Indian Sandalwood heartwood, rich in natural α-santalol and β-santalol with creamy-woody serenity.",
    "shortSpec": "Supercritical CO₂ · >90% Santalols",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 98,
    "featured": true,
    "bottleFormat": "DROPPER_10ML",
    "signatureColor": "#A16207",
    "labelImageUrl": "/labels/sandalwood-co2-extract.png",
    "compositeImageUrl": "/products/sandalwood-co2-extract.webp",
    "overview": "Sandalwood CO₂ Extract represents the ultimate expression of Sandalwood (Santalum album). Produced from certified timber, this low-temperature supercritical extraction yields an ultra-pure, light golden oil with over 90% combined santalols and an incredibly creamy, sweet, long-lasting woody aroma.",
    "history": "Distilled from sustainably managed, ethically grown sandalwood timber under strict forestry department oversight.",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Heartwood Shaving & Milling",
        "description": "Aged heartwood is carefully separated from sapwood and milled to fine chips under cool conditions."
      },
      {
        "stepNumber": 2,
        "title": "Supercritical Fluid Extraction",
        "description": "Dense-phase CO₂ at 320 bar extracts the sacred santalol molecules without thermal degradation."
      },
      {
        "stepNumber": 3,
        "title": "Solvent-Free Separation",
        "description": "CO₂ is evaporated and fully recaptured, leaving a clear, viscous, golden sandalwood extract."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Chiral Analysis",
        "description": "Validated for authentic Santalum album enantiomeric santalol purity and total absence of synthetic adulterants."
      }
    ],
    "benefits": [
      {
        "title": "Elite Perfumery Benchmark",
        "description": "Unmatched woody-creamy radiance and fixation for haute perfumery and bespoke niche fragrances."
      },
      {
        "title": "Cellular Skin Rejuvenation",
        "description": "Deeply soothing, anti-aging, and skin-tone balancing for ultra-luxury skincare and facial serums."
      },
      {
        "title": "Vedic Meditative Depth",
        "description": "Sacred grounding aroma revered for centuries in spiritual rituals, mindfulness, and temple meditation."
      }
    ]
  },
  {
    "id": "prod-co2-vanilla",
    "slug": "vanilla-co2-extract",
    "name": "Vanilla CO₂ Extract",
    "botanicalName": "Vanilla planifolia",
    "category": "CO2_OIL",
    "subCategory": "Supercritical Pod Extract",
    "description": "Pure supercritical CO₂ Bourbon vanilla extract with rich natural vanillin and warm balsamic depth, completely alcohol-free and solventless.",
    "shortSpec": "Supercritical CO₂ · High Natural Vanillin",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 97,
    "featured": true,
    "bottleFormat": "BOTTLE_100ML",
    "signatureColor": "#78350F",
    "labelImageUrl": "/labels/vanilla-co2-extract.png",
    "compositeImageUrl": "/products/vanilla-co2-extract.webp",
    "overview": "Unlike alcohol-based vanilla extracts or synthetic vanillin, our Vanilla CO₂ Extract is produced from cured vanilla beans using high-pressure supercritical carbon dioxide. This produces a rich, dark amber oil capturing over 200 trace volatile components alongside natural vanillin, yielding an intensely complex, creamy, sweet-gourmand aromatic profile.",
    "history": "Grown on hand-pollinated organic vanilla plantations and cured to perfection for maximum aromatic richness.",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Cured Pod Inspection",
        "description": "Plump, sun-cured vanilla planifolia pods are tested for moisture and natural vanillin crystallization."
      },
      {
        "stepNumber": 2,
        "title": "Low-Temperature SFE",
        "description": "Supercritical CO₂ dissolves fragile vanilla aromatics, hydroxybenzaldehydes, and vanillic esters."
      },
      {
        "stepNumber": 3,
        "title": "Inert Separation",
        "description": "CO₂ depressurization yields a solventless, alcohol-free, concentrated vanilla extract."
      },
      {
        "stepNumber": 4,
        "title": "HPLC Standardization",
        "description": "Verified for natural vanillin percentage, 4-hydroxybenzaldehyde, and vanillic acid ratios."
      }
    ],
    "benefits": [
      {
        "title": "Gourmand Fine Fragrance",
        "description": "Adds rich, velvety, sensual sweetness and longevity to oriental, amber, and gourmand perfumes."
      },
      {
        "title": "Alcohol-Free Cosmetic Formulation",
        "description": "Easily dispersible in cosmetic oils and creams without the stinging or drying effects of alcohol carriers."
      },
      {
        "title": "Artisanal Flavoring & Confectionery",
        "description": "Superior natural vanilla flavor for high-end chocolates, pastry emulsions, and functional beverages."
      }
    ]
  },
  {
    "id": "prod-co2-onion",
    "slug": "onion-co2-extract",
    "name": "Onion CO₂ Extract",
    "botanicalName": "Allium cepa",
    "category": "CO2_OIL",
    "subCategory": "Supercritical Bulb Extract",
    "description": "Potent supercritical CO₂ red onion extract rich in active organosulfur compounds and quercetin, widely used in clinical hair fall and follicle strengthening formulations.",
    "shortSpec": "Supercritical CO₂ · High Organosulfur & Quercetin",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 88,
    "featured": false,
    "bottleFormat": "BOTTLE_100ML",
    "signatureColor": "#9D174D",
    "labelImageUrl": "/labels/onion-co2-extract.png",
    "compositeImageUrl": "/products/onion-co2-extract.webp",
    "overview": "Onion CO₂ Extract is extracted from selected red onions. The supercritical CO₂ method concentrates volatile sulfur compounds (dipropyl disulfide, dipropyl trisulfide) and antioxidant flavonoids (quercetin) at low temperatures without the burnt sulfurous notes caused by steam distillation, creating the premier active for advanced hair care.",
    "history": "Manufactured from select alliums under controlled low-temperature extraction parameters.",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Bulb Flaking & Dehydration",
        "description": "Fresh red onions are peeled, sliced, gently dehydrated, and milled to preserve alliinase enzyme precursors."
      },
      {
        "stepNumber": 2,
        "title": "Supercritical Fluid Extraction",
        "description": "CO₂ at high pressure selectively extracts lipophilic sulfur actives and bioavailable quercetin."
      },
      {
        "stepNumber": 3,
        "title": "Gentle Deodorization Balance",
        "description": "Staged pressure control optimizes therapeutic active retention while tempering harsh off-notes."
      },
      {
        "stepNumber": 4,
        "title": "HPLC / GC-MS Verification",
        "description": "Quantified for sulfur active compounds and flavonoid concentration."
      }
    ],
    "benefits": [
      {
        "title": "Hair Fall Reduction & Regrowth",
        "description": "Clinically proven to nourish hair follicles, reduce breakage, and stimulate scalp collagen production."
      },
      {
        "title": "Antimicrobial Scalp Therapy",
        "description": "Purifies scalp microflora, controlling dandruff and soothing itchy scalp conditions."
      },
      {
        "title": "High-Potency Natural Flavoring",
        "description": "Provides authentic sautéed/roasted onion notes for savory food and seasoning applications."
      }
    ]
  },
  {
    "id": "prod-co2-garlic",
    "slug": "garlic-co2-extract",
    "name": "Garlic CO₂ Extract",
    "botanicalName": "Allium sativum",
    "category": "CO2_OIL",
    "subCategory": "Supercritical Clove Extract",
    "description": "Highly concentrated supercritical CO₂ garlic extract rich in standardized diallyl disulfides and allicin derivatives, with 100x flavor strength and zero carrier oil dilution.",
    "shortSpec": "Supercritical CO₂ · Standardized Diallyl Disulfides",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 87,
    "featured": false,
    "bottleFormat": "BOTTLE_100ML",
    "signatureColor": "#854D0E",
    "labelImageUrl": "/labels/garlic-co2-extract.png",
    "compositeImageUrl": "/products/garlic-co2-extract.webp",
    "overview": "Garlic CO₂ Extract is an ultra-concentrated botanical extract manufactured from high-pungency garlic. Supercritical CO₂ preserves the active allicin metabolites, diallyl disulfide (DADS), and diallyl trisulfide (DATS) in a 100% pure, solvent-free state, delivering clean antimicrobial power and standardized flavor intensity.",
    "history": "Manufactured from selected alliums renowned for dense cloves and high allicin content.",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Clove Milling & Enzyme Activation",
        "description": "Cleaned garlic cloves are crushed to allow alliin conversion to allicin prior to extraction."
      },
      {
        "stepNumber": 2,
        "title": "Supercritical CO₂ Extraction",
        "description": "Supercritical CO₂ dissolves the organosulfur volatiles without heating or burning."
      },
      {
        "stepNumber": 3,
        "title": "Cold Separation",
        "description": "Solvent-free phase separation yields a crystal-clear, intensely aromatic garlic extract."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Sulfur Active Assay",
        "description": "Quantified for diallyl disulfide and diallyl trisulfide content."
      }
    ],
    "benefits": [
      {
        "title": "Cardiovascular & Immunity Formulations",
        "description": "Standardized active sulfur compounds used in heart health, immunity, and dietary supplements."
      },
      {
        "title": "Industrial Food Seasoning & Sauces",
        "description": "Ultra-concentrated flavor solution offering consistent batch-to-batch garlic strength without microbial spoilage."
      },
      {
        "title": "Broad-Spectrum Antimicrobial",
        "description": "Potent natural antimicrobial active for specialized cosmetic and agricultural bio-solutions."
      }
    ]
  },
  {
    "id": "prod-co2-jasmine",
    "slug": "jasmine-co2-extract",
    "name": "Jasmine CO₂ Extract",
    "botanicalName": "Jasminum sambac",
    "category": "CO2_OIL",
    "subCategory": "Supercritical Flower Extract",
    "description": "Ethereal supercritical CO₂ extract of pre-dawn harvested Jasmine Sambac flowers, capturing radiant floral heart notes without harsh hexane residues.",
    "shortSpec": "Supercritical CO₂ · 0.00 ppm Hexane",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 99,
    "featured": true,
    "bottleFormat": "DROPPER_10ML",
    "signatureColor": "#BE185D",
    "labelImageUrl": "/labels/jasmine-co2-extract.png",
    "compositeImageUrl": "/products/jasmine-co2-extract.webp",
    "overview": "Jasmine flowers cannot be steam-distilled without scorching their delicate petals. While conventional perfumery relies on hexane-extracted concretes and absolutes, our Jasmine CO₂ Extract utilizes gentle dense CO₂ SFE to yield an exquisite, crystal-pure floral extract that matches the exact aroma of fresh jasmine blossoms blooming at midnight with zero petrochemical residues.",
    "history": "Hand-harvested before sunrise and transported immediately in temperature-controlled crates to preserve delicate floral notes.",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Fresh Botanical Selection",
        "description": "Unopened jasmine buds are picked before sunrise when volatile indole and ester levels are at their natural peak."
      },
      {
        "stepNumber": 2,
        "title": "Subcritical / Supercritical SFE",
        "description": "Gentle low-temperature CO₂ circulates through the petal bed, dissolving floral absolutes without waxes."
      },
      {
        "stepNumber": 3,
        "title": "Clean Phase Separation",
        "description": "Complete CO₂ sublimation yields a pale golden, mobile floral extract with 0.00 ppm solvent residues."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Floral Fingerprint",
        "description": "Quantified for benzyl acetate, linalool, methyl anthranilate, and cis-jasmone."
      }
    ],
    "benefits": [
      {
        "title": "High-End Haute Perfumery",
        "description": "Unrivaled fresh, intoxicating floral heart note for prestige fragrance creation."
      },
      {
        "title": "Mood Elevation & Euphoria",
        "description": "Deeply uplifting and emotionally balancing aroma used in luxury aromatherapeutic body oils."
      },
      {
        "title": "Radiant Skincare & Hydration",
        "description": "Nourishes dry, sensitive skin and promotes a glowing, luminous complexion."
      }
    ]
  },
  {
    "id": "prod-co2-ambrette",
    "slug": "ambrette-co2-extract",
    "name": "Ambrette CO₂ Extract",
    "botanicalName": "Abelmoschus moschatus",
    "category": "CO2_OIL",
    "subCategory": "Supercritical Seed Extract",
    "description": "Supreme supercritical CO₂ musk mallow extract with unmatched ambrettolide purity, serving as the premier 100% natural, cruelty-free botanical musk in luxury perfumery.",
    "shortSpec": "Supercritical CO₂ · High (E)-Ambrettolide",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 95,
    "featured": true,
    "bottleFormat": "BOTTLE_100ML",
    "signatureColor": "#1E3A8A",
    "labelImageUrl": "/labels/ambrette-co2-extract.png",
    "compositeImageUrl": "/products/ambrette-co2-extract.webp",
    "overview": "Ambrette CO₂ Extract is the most prized natural plant musk known to modern perfumery. The supercritical CO₂ extraction of musk mallow seeds isolates high levels of (E)-ambrettolide, farnesyl acetate, and decyl acetate while eliminating heavy fatty acids, delivering an ethereal, silky, skin-like botanical musk of extraordinary tenacity.",
    "history": "Grown on traditional organic farms and extracted under clean-room conditions to yield an uncompromisingly pure plant musk.",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Seed Milling & Cleaning",
        "description": "Dried ambrette seeds are sorted, de-stoned, and crushed under inert atmosphere."
      },
      {
        "stepNumber": 2,
        "title": "Supercritical CO₂ Extraction",
        "description": "High-pressure carbon dioxide dissolves the macrocyclic lactones and delicate musk fixatives."
      },
      {
        "stepNumber": 3,
        "title": "Selective Dewaxing",
        "description": "Staged separator temperature control separates heavy palmitic waxes, leaving a mobile, crystal-clear oil."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Purity Profiling",
        "description": "Quantified for ambrettolide content and olfactory clarity."
      }
    ],
    "benefits": [
      {
        "title": "100% Natural Botanical Musk",
        "description": "Cruelty-free, vegan alternative to animal and synthetic nitromusks in fine fragrance."
      },
      {
        "title": "Exquisite Fragrance Fixative",
        "description": "Smooths and anchors delicate floral and citrus accords, extending fragrance sillage for days."
      },
      {
        "title": "Calming & Sensual Aromatherapy",
        "description": "Promotes emotional peace, inner security, and grounding in holistic wellness formulations."
      }
    ]
  },
  {
    "id": "prod-co2-champaca",
    "slug": "champaca-co2-extract",
    "name": "Champaca CO₂ Extract",
    "botanicalName": "Magnolia champaca",
    "category": "CO2_OIL",
    "subCategory": "Supercritical Flower Extract",
    "description": "Sacred golden Champaca flower CO₂ extract radiating exotic apricot-tea floral sweetness, free from solvent residues for bespoke niche perfumery.",
    "shortSpec": "Supercritical CO₂ · True-to-Flower Floral",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 96,
    "featured": true,
    "bottleFormat": "DROPPER_10ML",
    "signatureColor": "#EA580C",
    "labelImageUrl": "/labels/champaca-co2-extract.png",
    "compositeImageUrl": "/products/champaca-co2-extract.webp",
    "overview": "Known as the 'Flower of the Gods', golden Champaca blossoms possess an opulent, velvety aroma blending notes of ripe apricot, green tea, sweet spices, and deep floral nectar. Our Champaca CO₂ Extract preserves these ephemeral top notes through gentle subcritical/supercritical CO₂ extraction without thermal destruction.",
    "history": "Harvested from heritage magnolia trees where the flowers have been prized for their sacred, opulent fragrance for centuries.",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Early Morning Blossom Picking",
        "description": "Golden champaca flowers are hand-picked at sunrise and loaded immediately into extraction baskets."
      },
      {
        "stepNumber": 2,
        "title": "Supercritical SFE Cycle",
        "description": "Dense carbon dioxide at 38°C dissolves the radiant floral essence without boiling or chemicals."
      },
      {
        "stepNumber": 3,
        "title": "Evaporation & Recovery",
        "description": "CO₂ is depressurized and recovered, leaving a rich, golden-orange aromatic essence."
      },
      {
        "stepNumber": 4,
        "title": "GC-MS Floral Authentication",
        "description": "Certified for linalool, methyl anthranilate, phenylacetonitrile, and indole balance."
      }
    ],
    "benefits": [
      {
        "title": "Bespoke Perfumery Key Ingredient",
        "description": "A centerpiece floral note in iconic, luxury oriental and exotic floral fragrances."
      },
      {
        "title": "Deep Spiritual Uplift & Euphoria",
        "description": "Soothes grief, inspires creativity, and elevates consciousness in meditation."
      },
      {
        "title": "Nourishing Botanical Elixir",
        "description": "Imparts radiance and deep hydration to delicate facial oils and youth serums."
      }
    ]
  },
  {
    "id": "fw-angelica-floral-water",
    "slug": "angelica-floral-water",
    "name": "Angelica Floral Water",
    "botanicalName": "Angelica Archangelica",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Angelica Floral Water (Angelica Archangelica). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Angelica Floral Water (Angelica Archangelica), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water. Essential Oil Content: &gt;0.025 %. Major Constituents: Camphene, B-pinene, Sabinene, Limonene, B-phellandrene, Cis-ocimene, Copaene, Bornyl acetate, Terpinen-4-ol, Tridecanolide, Pentadecanolide.. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Angelica Floral Water can be added to creams &amp; lotions. It can also be added to a bath in place of normal water and can be used as a deodorant, facial spritzer and as a cooling agent in saunas. Known properties: Angelica is used as a flavouring agent in culinary applications. It also has medicinal use, topical/ aromatic use as well as use in therapeutic practices, for its Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Angelica Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/angelica-floral-water.png",
    "compositeImageUrl": "/products/angelica-floral-water.webp"
  },
  {
    "id": "fw-aniseed-floral-water",
    "slug": "aniseed-floral-water",
    "name": "Aniseed Floral Water",
    "botanicalName": "Pimpinella anisum",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Aniseed Floral Water (Pimpinella anisum). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Clear to slightly hazy",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 61,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Aniseed Floral Water (Pimpinella anisum), extracted by hydro distillation. Solubility: Soluble in ethyl alcohol &amp; water. Major Constituents: It has trans-anethole that makes up to 90% of the oil. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Sweet Almond oil, Wood Oils: Cedarwood; Flower Oils: Lavender, Chamomile, Rose, Neroli, Geranium; Peel Oils: Orange, Lime; Herb Oils: Rosemary, Peppermint; Leaf/Cone/Needle Oils: Tea Tree, Petitgrain, Cypress; Seed Oils: Nutmeg, Sweet Fennel Known properties: It is a aromatherapy quality, additive free, undiluted therapeutic Essential Oil. The pure extract can be used for adding flavour to candies, specialty dishes, beverages, baked goods and desserts. Its distinctive taste like black liquorice also makes it work great in cakes &amp; cookies, vegetable dishes and in lamb &amp; beef stews. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Aniseed Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/aniseed-floral-water.png",
    "compositeImageUrl": "/products/aniseed-floral-water.webp"
  },
  {
    "id": "fw-cardamom-floral-water",
    "slug": "cardamom-floral-water",
    "name": "Cardamom Floral Water",
    "botanicalName": "Ellettaria Cardamomum",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Cardamom Floral Water (Elettaria cardamomum). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Pale yellow",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 62,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Cardamom Floral Water (Ellettaria Cardamomum), extracted by hydro distillation. Solubility: Soluble in alcohol and other organics solvents and insoluble in water. Essential Oil Content: &gt;0.025 %. Major Constituents: myrcene (27%), a-terpineol (45%), limonene (8%), b-phellandrene (3%), menthone (6%), 1,8-cineol (2%), smaller amounts of heptanes and sabinene (2%).. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: It blends well with alcohol, water and cardamom oil. Known properties: Cardamom medicinal Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Cardamom Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/cardamom-floral-water.png",
    "compositeImageUrl": "/products/cardamom-floral-water.webp"
  },
  {
    "id": "fw-cedarwood-floral-water",
    "slug": "cedarwood-floral-water",
    "name": "Cedarwood Floral Water",
    "botanicalName": "Cedrus deodara",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Cedarwood Floral Water (Cedrus deodara). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Pale yellow to green",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 63,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Cedarwood Floral Water (Cedrus deodara), extracted by hydro distillation. Solubility: Soluble in water. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: It works well with Chamomile, Rosemary and Eucalyptus. Known properties: It is well recognized for its aromatic qualities and used as antiseptic, antiseborrheic, anti putrescent, aphrodesiac, diuretic, astringent, expectorant, mucilytic, fungicidal, sedative (nervous), tonic and stimulant (circulatory). It also has insecticidal &amp; antifungal Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Cedarwood Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/cedarwood-floral-water.png",
    "compositeImageUrl": "/products/cedarwood-floral-water.webp"
  },
  {
    "id": "fw-chamomile-blue-floral-water",
    "slug": "chamomile-blue-floral-water",
    "name": "Chamomile Blue Floral Water",
    "botanicalName": "Matricaria chamomilla",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Chamomile Blue Floral Water (Matricaria chamomilla). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Deep blue to bluish",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 64,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Chamomile Blue Floral Water (Matricaria chamomilla), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water.. Essential Oil Content: &gt;0.025 %. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Clary sage, Bergamot, Lavender, Jasmine, Geranium, Tea tree, Rose, Lemon, Grapefruit and Ylang Ylang. Known properties: It is used as Analgesic, antibiotic, anti-spasmodic, anti-inflammatory, digestive, emmenagogue, hepatic &amp; vulnerary. It is also a powerful anti-inflammatory agent, used against sore stomach, gentle sleep aid and irritable bowel syndnome. It can also be used as a mouthwash against oral mucositis. Calming and relaxing, Chamomile is perfect as a linen spray or as an addition to your next line of skin care products. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Chamomile Blue Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/chamomile-blue-floral-water.png",
    "compositeImageUrl": "/products/chamomile-blue-floral-water.webp"
  },
  {
    "id": "fw-cinnamon-floral-water",
    "slug": "cinnamon-floral-water",
    "name": "Cinnamon Floral Water",
    "botanicalName": "Cinnamomum zeylanicum",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Cinnamon Floral Water (Cinnamomum zeylanicum). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Golden-yellow & pungent odor",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 65,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Cinnamon Floral Water (Cinnamomum zeylanicum), extracted by hydro distillation. Solubility: Water soluble. Essential Oil Content: &gt;0.025 %. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Cinnamon Leaf Oil blends well with any oil from the Citrus family, other spice oils (particularly Clove), as well as Lavender, Rosemary and Thyme. Known properties: It is extensively used in perfume and pharmaceutical industry, as a vapouriser for scenting the surroundings and in body care products. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Cinnamon Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/cinnamon-floral-water.png",
    "compositeImageUrl": "/products/cinnamon-floral-water.webp"
  },
  {
    "id": "fw-clary-sage-floral-water",
    "slug": "clary-sage-floral-water",
    "name": "Clary Sage Floral Water",
    "botanicalName": "Salvia sclarea",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Clary Sage Floral Water (Salvia sclarea). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 66,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Clary Sage Floral Water (Salvia sclarea), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water. Essential Oil Content: &gt;0.025 %. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Sandalwood Oil, Hyssop, Lemon, Hedychium Known properties: These are used as an excellent linen spray for aromatic purposes as well as delivers therapeutic Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Clary Sage Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/clary-sage-floral-water.png",
    "compositeImageUrl": "/products/clary-sage-floral-water.webp"
  },
  {
    "id": "fw-clove-floral-water",
    "slug": "clove-floral-water",
    "name": "Clove Floral Water",
    "botanicalName": "Eugenia caryophyllus",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Clove Floral Water (Eugenia caryophyllus). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 67,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Clove Floral Water (Eugenia caryophyllus), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water. Essential Oil Content: &gt;0.025 %. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Basil, benzoin, cinnamon, lavender, ginger, sandalwood and clary sage Known properties: Clove oil can be used for acne, bruises, burns and cuts, keeping infection at bay and as a pain reliever. It helps in toothache, mouth sores, rheumatism and arthritis. It is also of use for skin problems - especially for skin sores and leg ulcers and as an insect repellent. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Clove Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/clove-floral-water.png",
    "compositeImageUrl": "/products/clove-floral-water.webp"
  },
  {
    "id": "fw-cypress-floral-water",
    "slug": "cypress-floral-water",
    "name": "Cypress Floral Water",
    "botanicalName": "Cupressus sempervirens",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Cypress Floral Water (Cupressus sempervirens). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Cypress Floral Water (Cupressus sempervirens), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water. Essential Oil Content: &gt;0.025 %. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: The oils Known properties: Cypress water is used for treating broken veins, oily and congested skin. The water is used in many aromatheraphy treatments. Cellulite can be broken down with use cypress water. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Cypress Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/cypress-floral-water.png",
    "compositeImageUrl": "/products/cypress-floral-water.webp"
  },
  {
    "id": "fw-eucalyptus-floral-water",
    "slug": "eucalyptus-floral-water",
    "name": "Eucalyptus Floral Water",
    "botanicalName": "Eucalyptus globulus",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Eucalyptus Floral Water (Eucalyptus globulus). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 69,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Eucalyptus Floral Water (Eucalyptus globulus), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water. Essential Oil Content: &gt;0.025 %. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Cedarwood, lemon, lavender, rosemary, marjoram, thyme. Known properties: Eucalyptus floral water has a powerful antiseptic nature and finds wide application in baths &amp; massage during cold season. Eucalyptus leaf water extract is also very effective against airborne vir Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Eucalyptus Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/eucalyptus-floral-water.png",
    "compositeImageUrl": "/products/eucalyptus-floral-water.webp"
  },
  {
    "id": "fw-frankincense-floral-water",
    "slug": "frankincense-floral-water",
    "name": "Frankincense Floral Water",
    "botanicalName": "Boswellia carterii",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Frankincense Floral Water (Boswellia carterii). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Light Yellow",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 70,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Frankincense Floral Water (Boswellia Carterii), extracted by hydro distillation. Solubility: Soluble in water. Essential Oil Content: &gt;0.025 %. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Sandalwood, geranium, pine, lavender, bergamot, neroli, orange, cinnamon, basil, camphor, jasmine, vetiver, myrrh, rose. Known properties: Frankincense Hydrosol water is an excellent tonic &amp; skin toner that makes it ideal for mature skins. It is also claimed to have rejuvenating qualities and is used in bath, shampoos &amp; moisturizers. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Frankincense Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/frankincense-floral-water.png",
    "compositeImageUrl": "/products/frankincense-floral-water.webp"
  },
  {
    "id": "fw-geranium-floral-water",
    "slug": "geranium-floral-water",
    "name": "Geranium Floral Water",
    "botanicalName": "Pelargonium graveolens",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Geranium Floral Water (Pelargonium graveolens). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Yellow to brown green",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 71,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Geranium Floral Water (Pelargonium graveolens), extracted by hydro distillation. Solubility: Soluble in water. Essential Oil Content: &gt;0.025 %. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Peppermint Hydrosol - as either spritzer or in glass of cool water, frankincense, Hedychium Known properties: It is used as a facial spritz for refreshing both skin as well as mind. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Geranium Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/geranium-floral-water.png",
    "compositeImageUrl": "/products/geranium-floral-water.webp"
  },
  {
    "id": "fw-hedychium-floral-water",
    "slug": "hedychium-floral-water",
    "name": "Hedychium Floral Water",
    "botanicalName": "Hedychium spicatum",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Hedychium Floral Water (Hedychium spicatum). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Clear brown",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 72,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Hedychium Floral Water (Hedychium spicatum), extracted by hydro distillation. Solubility: Soluble in Oils and Fats. Essential Oil Content: &gt;0.025 %. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Cajeput, Cedarwood, Cassia, Clary Sage, Lavender , Geranium Known properties: It acts as an anti-nausea agent and has carminative Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Hedychium Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/hedychium-floral-water.png",
    "compositeImageUrl": "/products/hedychium-floral-water.webp"
  },
  {
    "id": "fw-helichrysum-floral-water",
    "slug": "helichrysum-floral-water",
    "name": "Helichrysum Floral Water",
    "botanicalName": "Helichrysum italicum",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Helichrysum Floral Water (Helichrysum italicum). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Pale Yellow to Red",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 73,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Helichrysum Floral Water (Helichrysum italicum), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water. Essential Oil Content: &gt;0.025%. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: clary sage, geranium, lemon, myrrh, lavender, nutmeg, rosemary, rosewood and thyme Known properties: Helichrysum Floral Water has incredible skin healing Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Helichrysum Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/helichrysum-floral-water.png",
    "compositeImageUrl": "/products/helichrysum-floral-water.webp"
  },
  {
    "id": "fw-hyssop-floral-water",
    "slug": "hyssop-floral-water",
    "name": "Hyssop Floral Water",
    "botanicalName": "Hyssopus officinalis Linn",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Hyssop Floral Water (Hyssopus officinalis). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 74,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Hyssop Floral Water (Hyssopus officinalis Linn), extracted by hydro distillation. Solubility: Insoluble in water, soluble in oils &amp; alcohol. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Lavender, sage, bay leaf, clary sage, geranium, myrtle, rosemary, camphor, citrus oils. Known properties: Hyssop floral water is popular for its various therapeutic Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Hyssop Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/hyssop-floral-water.png",
    "compositeImageUrl": "/products/hyssop-floral-water.webp"
  },
  {
    "id": "fw-jasmine-grandiflorum-floral-water",
    "slug": "jasmine-grandiflorum-floral-water",
    "name": "Jasmine Grandiflorum Floral Water",
    "botanicalName": "Jasminum Grandiflorum",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Jasmine Grandiflorum Floral Water (Jasminum grandiflorum). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Orange to brown & sweet",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 75,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Jasmine Grandiflorum Floral Water (Jasminum Grandiflorum), extracted by hydro distillation. Solubility: Soluble in alcohol and oils. Essential Oil Content: &gt;0.025 %. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Jasmine Grandiflorum works with all oils and helps to round out scents. It tends to work particularly well aphrodisiac oils including Sandalwood and Ylang-ylang Known properties: Jasmine Grandiflorum Absolute has in it aphrodisiac Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Jasmine Grandiflorum Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/jasmine-grandiflorum-floral-water.png",
    "compositeImageUrl": "/products/jasmine-grandiflorum-floral-water.webp"
  },
  {
    "id": "fw-jasminum-sambac-floral-water",
    "slug": "jasminum-sambac-floral-water",
    "name": "Jasminum Sambac Floral Water",
    "botanicalName": "Jasminum sambac",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Jasminum Sambac Floral Water (Jasminum sambac). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Brownish yellow",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 76,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Jasminum Sambac Floral Water (Jasminum sambac), extracted by hydro distillation. Solubility: Soluble in Alcohols, Essential Oils and insoluble in water. Essential Oil Content: &gt;0.025 %. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Jasmine Grandiflorum works with all oils and helps to round out scents. It tends to work particularly well aphrodisiac oils including Sandalwood and Ylang-ylang Known properties: This Jasmine Sambac Attar assists people who want to undertake spiritual journey and discover intimate aspect of their relationships. Further, it also finds application as a flavouring agent as well as a base material for perfumes/perfumery based products. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Jasminum Sambac Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/jasminum-sambac-floral-water.png",
    "compositeImageUrl": "/products/jasminum-sambac-floral-water.webp"
  },
  {
    "id": "fw-juniperus-floral-water",
    "slug": "juniperus-floral-water",
    "name": "Juniperus Floral Water",
    "botanicalName": "Juniperus communis",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Juniperus Floral Water (Juniperus communis). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 77,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Juniperus Floral Water (Juniperus communis), extracted by hydro distillation. Solubility: Soluble in Alcohols, Essential Oils and insoluble in water. Essential Oil Content: &gt;0.025 %. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Lavender, lavandin, pine, clary sage, cypress, vetiver, sandalwood, rosemary, fir needle, basil, fennel. Known properties: Juniper berries are used to provide flavour to meat dishes, in treating infections, especially within urinary tract, bladder, kidneys &amp; prostate. Its antiseptic Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Juniperus Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/juniperus-floral-water.png",
    "compositeImageUrl": "/products/juniperus-floral-water.webp"
  },
  {
    "id": "fw-khus-vetiver-floral-water",
    "slug": "khus-vetiver-floral-water",
    "name": "Khus (Vetiver) Floral Water",
    "botanicalName": "Vetiveria zizanoides",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Khus (Vetiver) Floral Water (Chrysopogon zizanioides). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 78,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Khus (Vetiver) Floral Water (Vetiveria zizanoides), extracted by hydro distillation. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Khus (Vetiver) Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/khus-vetiver-floral-water.png",
    "compositeImageUrl": "/products/khus-vetiver-floral-water.webp"
  },
  {
    "id": "fw-lavender-floral-water",
    "slug": "lavender-floral-water",
    "name": "Lavender Floral Water",
    "botanicalName": "Lavendula angustofolia",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Lavender Floral Water (Lavandula angustifolia). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 79,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Lavender Floral Water (Lavendula angustofolia), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water. Essential Oil Content: &gt;0.030 %. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Ylang Ylang, jojoba and Sandalwood Oil Known properties: Lavender is perfect to use as a toner, or, use it to reduce anxiety, stress and promote sleep. It also helps in gently toning oily, dry &amp; mature skin by cleansing it gently and safely. Hydrosol present in the oil also makes it a wonderful ingredient for face masks (All skin types) as well as a great mister to ease sunburn/ windburn. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Lavender Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/lavender-floral-water.png",
    "compositeImageUrl": "/products/lavender-floral-water.webp"
  },
  {
    "id": "fw-lemon-floral-water",
    "slug": "lemon-floral-water",
    "name": "Lemon Floral Water",
    "botanicalName": "Citrus limonum",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Lemon Floral Water (Citrus limonum). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 80,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Lemon Floral Water (Citrus Limonum), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water. Essential Oil Content: &gt;0.030 %. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Ylang Ylang, jojoba and Sandalwood Oil Known properties: Lavender is perfect to use as a toner, or, use it to reduce anxiety, stress and promote sleep. It also helps in gently toning oily, dry &amp; mature skin by cleansing it gently and safely. Hydrosol present in the oil also makes it a wonderful ingredient for face masks (All skin types) as well as a great mister to ease sunburn/ windburn. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Lemon Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/lemon-floral-water.png",
    "compositeImageUrl": "/products/lemon-floral-water.webp"
  },
  {
    "id": "fw-lemongrass-floral-water",
    "slug": "lemongrass-floral-water",
    "name": "Lemongrass Floral Water",
    "botanicalName": "Cymbopogon flexuosus",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Lemongrass Floral Water (Cymbopogon flexuosus). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 81,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Lemongrass Floral Water (Cymbopogon flexuosus), extracted by hydro distillation. Solubility: water soluble. Essential Oil Content: &gt;0.025%. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Shrimp, chilli pepper, cilantro, chicken, basil, kaffir lime, crab and scallops. Known properties: The extract is used as an herb in Asian cuisine. Some of the common usage includes in teas, soups, curries, poultry, fish, seafood. Lemon Grass Oil is also used as pesticide and preservative especially for old manuscripts as it has anti-fungal Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Lemongrass Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/lemongrass-floral-water.png",
    "compositeImageUrl": "/products/lemongrass-floral-water.webp"
  },
  {
    "id": "fw-lime-floral-water",
    "slug": "lime-floral-water",
    "name": "Lime Floral Water",
    "botanicalName": "Citrus aurantifolia",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Lime Floral Water (Citrus aurantifolia). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Green",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 82,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Lime Floral Water (Citrus aurantifolia), extracted by hydro distillation. Solubility: water soluble. Essential Oil Content: &gt;0.025%. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Citronella, lavandin, rosemary, lavender, clary sage, lemon, neroli, ylang ylang Known properties: Lime oil finds application in aromatherapy and acts as a equalizing, refreshing and cheering vector for human sould. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Lime Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/lime-floral-water.png",
    "compositeImageUrl": "/products/lime-floral-water.webp"
  },
  {
    "id": "fw-melissa-floral-water",
    "slug": "melissa-floral-water",
    "name": "Melissa Floral Water",
    "botanicalName": "Melissa officinalis",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Melissa Floral Water (Melissa officinalis). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 83,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Melissa Floral Water (Melissa officinalis), extracted by hydro distillation. Solubility: water soluble. Essential Oil Content: &gt;0.025%. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Ylang ylang Known properties: Lime oil due to its special Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Melissa Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/melissa-floral-water.png",
    "compositeImageUrl": "/products/melissa-floral-water.webp"
  },
  {
    "id": "fw-neroli-floral-water",
    "slug": "neroli-floral-water",
    "name": "Neroli Floral Water",
    "botanicalName": "Citrus aurantium",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Neroli Floral Water (Citrus aurantium). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Pale yellow & sweet,",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 84,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Neroli Floral Water (Citrus aurantium), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water. Essential Oil Content: &gt;0.025%. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Lavender, clary sage, lavandin, sandalwood, bay, hyssop, bergamot, lemon, lime, laurel, cinnamon, geranium, clove, ylang ylang, coriander, jasmine, chamomile, rose. Known properties: It is used in aromatherapy based applications as it has a relaxing, soothing, sensual and exotic aroma. This beautiful Floral Water captures the essence of Neroli like no other! Use it in skin care, as a linen spray or countless other applications Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Neroli Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/neroli-floral-water.png",
    "compositeImageUrl": "/products/neroli-floral-water.webp"
  },
  {
    "id": "fw-orange-floral-water",
    "slug": "orange-floral-water",
    "name": "Orange Floral Water",
    "botanicalName": "Citrus aurantium",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Orange Floral Water (Citrus aurantium). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 60,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Orange Floral Water (Citrus aurantium), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water. Essential Oil Content: &gt;0.025%. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: It blends well with any citrus oils, various floral absolutes as well as most of synthetic components available in the market. Known properties: Orange Blossom water is the most common used fragrance in the industry. It also has limited use in the making of flavors. It also tones the complexion and reduces creation of wrinkles. It is also helpful in palpitations, diarrhea (chronic), poor circulation, colic, spasm, nervous dyspepsia, flatulence, anxiety, nervous tension, depression and shock. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Orange Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/orange-floral-water.png",
    "compositeImageUrl": "/products/orange-floral-water.webp"
  },
  {
    "id": "fw-parsley-floral-water",
    "slug": "parsley-floral-water",
    "name": "Parsley Floral Water",
    "botanicalName": "Petroselinum sativum",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Parsley Floral Water (Petroselinum sativum). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 61,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Parsley Floral Water (Petroselinum sativum), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water. Essential Oil Content: &gt;0.025%. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Rose Floral Water,Saffron Peppermint Water. Known properties: They can be used in aromatherapist to enjoy the therapeutic Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Parsley Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/parsley-floral-water.png",
    "compositeImageUrl": "/products/parsley-floral-water.webp"
  },
  {
    "id": "fw-peppermint-floral-water",
    "slug": "peppermint-floral-water",
    "name": "Peppermint Floral Water",
    "botanicalName": "Mentha piperata",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Peppermint Floral Water (Mentha piperita). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 62,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Peppermint Floral Water (Mentha piperata), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water. Essential Oil Content: &gt;0.025%. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Lavender, lemon, rosemary, eucalyptus, sage, marjoram, lime, lavandin. piperitone Known properties: The extract has a fresh, minty and slightly camphor like scent that adds to the energizing effect as well as helps in reducing mental fatigue, thereby improving concentration. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Peppermint Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/peppermint-floral-water.png",
    "compositeImageUrl": "/products/peppermint-floral-water.webp"
  },
  {
    "id": "fw-rose-floral-water",
    "slug": "rose-floral-water",
    "name": "Rose Floral Water",
    "botanicalName": "Rosa Damascene",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Rose Floral Water (Rosa damascena). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Clear pale yellow &",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 63,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Rose Floral Water (Rosa Damascene), extracted by hydro distillation. Solubility: Insoluble in water. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Mostly all the essential oils Known properties: Our floral waters are extremely versatile. They can be added to your creams and lotions instead of water, or alternatively employed as an aromatic face or body spritz. They are an excellent linen spray and a simple way for the novice aromatherapist to enjoy the therapeutic Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Rose Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/rose-floral-water.png",
    "compositeImageUrl": "/products/rose-floral-water.webp"
  },
  {
    "id": "fw-rosemary-hydrosol",
    "slug": "rosemary-hydrosol",
    "name": "Rosemary Hydrosol",
    "botanicalName": "Rosmarinus officinalis",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Rosemary Hydrosol (Rosmarinus officinalis). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Green & distinctive odor",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 64,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Rosemary Hydrosol (Rosmarinus officinalis), extracted by hydro distillation. Solubility: soluble in water. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Cedarwood, thyme, lavender, oregano, marjoram, pine, basil, petitgrain, peppermint, cinnamon, lavandin, clove Known properties: Containing antioxidants as well as natural camphor, it has rich antibacterial Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Rosemary Hydrosol is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/rosemary-hydrosol.png",
    "compositeImageUrl": "/products/rosemary-hydrosol.webp"
  },
  {
    "id": "fw-saffron-floral-water",
    "slug": "saffron-floral-water",
    "name": "Saffron Floral Water",
    "botanicalName": "Crocus sativus",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Saffron Floral Water (Crocus sativus). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 65,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Saffron Floral Water (Crocus sativus), extracted by hydro distillation. Solubility: Water soluble. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Partially soluble in alcohol &amp; fixed/carrier oils Known properties: It finds usage in ayurvedic medicine &amp; in treating remedies from arthritis &amp; asthma to infertility and impotence. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Saffron Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/saffron-floral-water.png",
    "compositeImageUrl": "/products/saffron-floral-water.webp"
  },
  {
    "id": "fw-spearmint-floral-water",
    "slug": "spearmint-floral-water",
    "name": "Spearmint Floral Water",
    "botanicalName": "Mentha spicata",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Spearmint Floral Water (Mentha spicata). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 66,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Spearmint Floral Water (Mentha spicata), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water. Essential Oil Content: &gt;0.025%. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: It is used in chewing gums as well as in toothpastes. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Spearmint Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/spearmint-floral-water.png",
    "compositeImageUrl": "/products/spearmint-floral-water.webp"
  },
  {
    "id": "fw-spikenard-floral-water",
    "slug": "spikenard-floral-water",
    "name": "Spikenard Floral Water",
    "botanicalName": "Nardostachys jatamansi",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Spikenard Floral Water (Nardostachys jatamansi). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 67,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Spikenard Floral Water (Nardostachys Jatamansi), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water. Essential Oil Content: &gt;0.025%. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: It blends well with Lemon, Lavender, Clary sage, Patchouli, Neroli and Vetiver Known properties: It finds extensive application in meeting the treatment needs of tension, migraine, stress, nervous indigestion &amp; insomnia. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Spikenard Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/spikenard-floral-water.png",
    "compositeImageUrl": "/products/spikenard-floral-water.webp"
  },
  {
    "id": "fw-tea-tree-floral-water",
    "slug": "tea-tree-floral-water",
    "name": "Tea Tree Floral Water",
    "botanicalName": "Melaleuca alternifolia",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Tea Tree Floral Water (Melaleuca alternifolia). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 68,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Tea Tree Floral Water (Melaleuca alternifolia), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water. Essential Oil Content: &gt;0.025%. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Cinnamon, clove, clary sage, geranium, lemon, myrrh, lavender, nutmeg, rosemary, rosewood and thyme Known properties: It is extremely good as a topical antiseptic and is ideal for gargling, as well as on skin applications including cuts and grazes. It can also be added to bath water as well as facial masks instead of water. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Tea Tree Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/tea-tree-floral-water.png",
    "compositeImageUrl": "/products/tea-tree-floral-water.webp"
  },
  {
    "id": "fw-ylang-ylang-floral-water",
    "slug": "ylang-ylang-floral-water",
    "name": "Ylang Ylang Floral Water",
    "botanicalName": "Cananga odorata",
    "category": "FLORAL_WATER",
    "description": "100% pure steam-distilled Ylang Ylang Floral Water (Cananga odorata). Produced during the gentle primary distillation of fresh aromatic botanicals, delivering micro-dispersed water-soluble plant actives.",
    "shortSpec": "Steam Distilled · Hydrosol",
    "moq": "1 kg",
    "priceDisplay": "Request Quote",
    "popularityScore": 69,
    "bottleFormat": "BOTTLE_100ML",
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Botanical Preparation",
        "description": "Fresh or dried botanical material prepared and placed in distillation vessel for steam processing."
      },
      {
        "stepNumber": 2,
        "title": "Steam Distillation",
        "description": "Steam passed through the botanical material, carrying volatile aromatic molecules into the condensation system."
      },
      {
        "stepNumber": 3,
        "title": "Hydrosol Collection",
        "description": "Water-phase condensate collected separately from the essential oil layer, capturing water-soluble aromatic compounds and trace essential oil components."
      },
      {
        "stepNumber": 4,
        "title": "pH & Purity Testing",
        "description": "pH, microbial load, and organoleptic properties verified before packaging in food-grade HDPE containers."
      }
    ],
    "overview": "Ylang Ylang Floral Water (Cananga odorata), extracted by hydro distillation. Solubility: Insoluble in alcohol and oils. Soluble in water. Essential Oil Content: &gt;0.025%. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Blends Offered: Bergamot, Sandalwood, Melissa &amp; Jasmine Known properties: Having high therapeutic value, the derived extract finds application in baths as well as in massage based applications. Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Ylang Ylang Floral Water is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "signatureColor": "#2A5F6E",
    "labelImageUrl": "/labels/ylang-ylang-floral-water.png",
    "compositeImageUrl": "/products/ylang-ylang-floral-water.webp"
  },
  {
    "id": "fa-benzoin-absolute-oil",
    "name": "Benzoin Absolute Oil",
    "slug": "benzoin-absolute-oil",
    "botanicalName": "Styrax benzoin",
    "category": "FLORAL_ABSOLUTE",
    "overview": "Benzoin Absolute Oil (Styrax benzoin), extracted by solvent extraction. CAS #: 91845-21-5. Specific Gravity: 0.990 - 0.980 @ 72&#176;F. Refractive Index: 1.4021 - 1.4022 @ 72&#176;F. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: This oil has various therapeutic Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Benzoin Absolute Oil is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Flower Harvesting",
        "description": "Petals harvested at dawn when aromatic compound concentration is highest, handled carefully to prevent bruising and enzymatic degradation."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Flowers processed with food-grade hexane or ethanol to produce a concrete, capturing both volatile and non-volatile aromatic molecules."
      },
      {
        "stepNumber": 3,
        "title": "Concrete to Absolute Conversion",
        "description": "Concrete washed with anhydrous alcohol and chilled to precipitate waxes, then filtered and vacuum-distilled to yield the absolute."
      },
      {
        "stepNumber": 4,
        "title": "Residual Solvent Testing",
        "description": "Finished absolute tested for residual solvent content by GC headspace analysis, ensuring compliance with IFRA and food-grade specifications."
      }
    ],
    "shortSpec": "Solvent Extraction",
    "description": "Benzoin Absolute Oil is an essential oil extracted from the fine resin of the Styrax benzoin tree. It is generally described as a thick, resinous liquid and is typically brown or pale yellow in color. It is well-regarded for its sweet, warm, and vanilla-like aroma, which often serves as a base note in perfumery. The oil is often noted for its soothing, stimulating, warming, and comforting properties."
  },
  {
    "id": "fa-honeysuckle-absolute-oil",
    "name": "Honeysuckle Absolute Oil",
    "slug": "honeysuckle-absolute-oil",
    "botanicalName": "Lonicera caprifolium",
    "category": "FLORAL_ABSOLUTE",
    "overview": "Honeysuckle Absolute Oil (Lonicera caprifolium), extracted by solvent extraction. CAS #: 8023-93-6. Specific Gravity: 0.922 - 0.965 @ 20&#176;C. Refractive Index: 1.470 - 1.490 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Honeysuckle oil is uncut, alcohol free, long lasting, high grade essence oil - excellent for aromatherapy Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Honeysuckle Absolute Oil is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Flower Harvesting",
        "description": "Petals harvested at dawn when aromatic compound concentration is highest, handled carefully to prevent bruising and enzymatic degradation."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Flowers processed with food-grade hexane or ethanol to produce a concrete, capturing both volatile and non-volatile aromatic molecules."
      },
      {
        "stepNumber": 3,
        "title": "Concrete to Absolute Conversion",
        "description": "Concrete washed with anhydrous alcohol and chilled to precipitate waxes, then filtered and vacuum-distilled to yield the absolute."
      },
      {
        "stepNumber": 4,
        "title": "Residual Solvent Testing",
        "description": "Finished absolute tested for residual solvent content by GC headspace analysis, ensuring compliance with IFRA and food-grade specifications."
      }
    ],
    "shortSpec": "Solvent Extraction",
    "description": "Honeysuckle absolute is generally obtained through solvent extraction from the fresh or dried flowers of the Lonicera caprifolium. It is a highly valued ingredient in the fragrance industry, prized for its captivating scent, and is also used in cosmetics and aromatherapy for its calming and skin-soothing properties. It possesses an intensely sweet, fatty-floral, exotic, and long-lasting aroma."
  },
  {
    "id": "fa-linden-blossom-absolute-oil",
    "name": "Linden Blossom Absolute Oil",
    "slug": "linden-blossom-absolute-oil",
    "botanicalName": "Tilia vulgaris",
    "category": "FLORAL_ABSOLUTE",
    "overview": "Linden Blossom Absolute Oil (Tilia vulgaris), extracted by solvent extraction. CAS #: 132539-00-5. Specific Gravity: 0.96550 - 0.97240 @ 25.00 &#176;C. Refractive Index: 1.48730 - 1.49390 @ 20.00 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: This yellow fluid has fresh and sweet floral odor which is attractive. It contains high amount of farnesol. Linden oil is exceedingly compatible in perfumery. This absolute oil is one of the most valid and highly valued oil. It is of great value in cosmetic industries as it offers flavor to enhancive products like lotions, perfumes, etc Useful in Headache, insomnia, migraine, stress. Yes! I am Interested Product Range Essential Oils Spice Oils Popular Oils Carrier &amp; Base Oils Floral Absolute Oils Floral Water Oleoresins Organic Oils Ayurvedic Oils Home | Profile | Products | Infrastructure | Contact Us | Send Enquiry | Video &copy; India Essential Oils . All Rights Reserved ( Terms of Use ) Developed and Managed by IndiaMART InterMESH Limited Thank you Your Enquiry has been sent successfully. Looking for Product Name ? Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Linden Blossom Absolute Oil is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Flower Harvesting",
        "description": "Petals harvested at dawn when aromatic compound concentration is highest, handled carefully to prevent bruising and enzymatic degradation."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Flowers processed with food-grade hexane or ethanol to produce a concrete, capturing both volatile and non-volatile aromatic molecules."
      },
      {
        "stepNumber": 3,
        "title": "Concrete to Absolute Conversion",
        "description": "Concrete washed with anhydrous alcohol and chilled to precipitate waxes, then filtered and vacuum-distilled to yield the absolute."
      },
      {
        "stepNumber": 4,
        "title": "Residual Solvent Testing",
        "description": "Finished absolute tested for residual solvent content by GC headspace analysis, ensuring compliance with IFRA and food-grade specifications."
      }
    ],
    "shortSpec": "Solvent Extraction",
    "description": "Linden Blossom Absolute Oil is a highly valued aromatic material characterized by its warm, honey-like, and floral scent with subtle citrus or herbal tea nuances. Derived from the flowers of the Tilia species, most commonly Tilia cordata (also known as the lime or linden tree), it is usually obtained through solvent extraction to capture the delicate volatile compounds of the flowers."
  },
  {
    "id": "fa-narcissus-absolute-oil",
    "name": "Narcissus Absolute Oil",
    "slug": "narcissus-absolute-oil",
    "botanicalName": "Narcissus poeticus",
    "category": "FLORAL_ABSOLUTE",
    "overview": "Narcissus Absolute Oil (Narcissus poeticus), extracted by solvent extraction. CAS #: 68917-12-4. Specific Gravity: 0.9400 - 0.9650 @ 20&#176;C. Refractive Index: 1.4800 - 1.5100 @ 20&#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Used in cosmetics as additive to powders, soaps &amp; lipsticks. This oil as an aphrodisiac and a cure for baldness. Used in high-class perfumery. Yes! I am Interested Product Range Essential Oils Spice Oils Popular Oils Carrier &amp; Base Oils Floral Absolute Oils Floral Water Oleoresins Organic Oils Ayurvedic Oils Home | Profile | Products | Infrastructure | Contact Us | Send Enquiry | Video &copy; India Essential Oils . All Rights Reserved ( Terms of Use ) Developed and Managed by IndiaMART InterMESH Limited Thank you Your Enquiry has been sent successfully. Looking for Product Name ? Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Narcissus Absolute Oil is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Flower Harvesting",
        "description": "Petals harvested at dawn when aromatic compound concentration is highest, handled carefully to prevent bruising and enzymatic degradation."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Flowers processed with food-grade hexane or ethanol to produce a concrete, capturing both volatile and non-volatile aromatic molecules."
      },
      {
        "stepNumber": 3,
        "title": "Concrete to Absolute Conversion",
        "description": "Concrete washed with anhydrous alcohol and chilled to precipitate waxes, then filtered and vacuum-distilled to yield the absolute."
      },
      {
        "stepNumber": 4,
        "title": "Residual Solvent Testing",
        "description": "Finished absolute tested for residual solvent content by GC headspace analysis, ensuring compliance with IFRA and food-grade specifications."
      }
    ],
    "shortSpec": "Solvent Extraction",
    "description": "Narcissus Absolute Oil (botanical name: Narcissus poeticus) is a rare and highly prized floral extract, often referred to by common names such as Poet’s Daffodil, Nargis, and Pinkster Lily. It is renowned for its complex, luxurious, and intoxicating fragrance. It is a highly concentrated material, typically appearing as a dark green-brown to golden-amber viscous liquid."
  },
  {
    "id": "fa-tuberose-oil",
    "name": "Tuberose Absolute Oil",
    "slug": "tuberose-oil",
    "botanicalName": "Polianthes tuberosa",
    "category": "FLORAL_ABSOLUTE",
    "overview": "Tuberose Absolute Oil (Polianthes tuberosa), extracted by solvent extraction. CAS #: 8024-05-3,. F.E.M.A. : 3084. Specific Gravity: 0.9200 - 0.9800 @ 25 &#176;C. Refractive Index: 1.4800 - 1.5200 @ 20 &#176;C. Supplied as 100% pure botanical extract, batch-verified by dual GC-MS chromatography and conforming to ISO 9001:2015 and GMP manufacturing standards.",
    "history": "Known properties: Tuberose oil Known by its romantic and sensual names &#147;Night Queen&#148; and &#147;Mistress of the Night&#148; Tuberose essential oil behaves as an aphrodisiac and its very strong, intense and intoxicating floral fragrance fills the air and creates an atmosphere of love. It also relaxes the mind and relieves tension and has a warming effect on the organs as it increases circulation of blood which in turn helps cure erectile dysfunctions, impotency etc. Tuberose Essential Oil is world famous for its use in perfumes and the rich, intense and long lasting floral fragrance is an ideal choice for a deodorant and that is why it is so popular in the countries with hot and humid climate, as they have to deal with sweat and resultant body odor. This essential oil is good in sedating inflammations,particularly pertaining to nervous system and the respiratory system. But to have this sedating effect, it should be used in good dilution. Yes! I am Interested Product Range Essential Oils Spice Oils Popular Oils Carrier &amp; Base Oils Floral Absolute Oils Floral Water Oleoresins Organic Oils Ayurvedic Oils Home | Profile | Products | Infrastructure | Contact Us | Send Enquiry | Video &copy; India Essential Oils . All Rights Reserved ( Terms of Use ) Developed and Managed by IndiaMART InterMESH Limited Thank you Your Enquiry has been sent successfully. Looking for Product Name ? Packaged in UN-certified export drums under inert nitrogen capping. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and IFRA compliance documentation for international shipment.",
    "benefits": [
      {
        "title": "Aromatherapy & Fragrance",
        "description": "Tuberose Absolute Oil is widely used in aromatherapy, perfumery, and therapeutic blending applications."
      },
      {
        "title": "Cosmetic Formulations",
        "description": "Used as an active ingredient in skin care, hair care, and personal care product manufacturing."
      },
      {
        "title": "Industrial Applications",
        "description": "Suitable for use in food flavoring, pharmaceutical preparations, and natural product formulations."
      }
    ],
    "manufacturingSteps": [
      {
        "stepNumber": 1,
        "title": "Flower Harvesting",
        "description": "Petals harvested at dawn when aromatic compound concentration is highest, handled carefully to prevent bruising and enzymatic degradation."
      },
      {
        "stepNumber": 2,
        "title": "Solvent Extraction",
        "description": "Flowers processed with food-grade hexane or ethanol to produce a concrete, capturing both volatile and non-volatile aromatic molecules."
      },
      {
        "stepNumber": 3,
        "title": "Concrete to Absolute Conversion",
        "description": "Concrete washed with anhydrous alcohol and chilled to precipitate waxes, then filtered and vacuum-distilled to yield the absolute."
      },
      {
        "stepNumber": 4,
        "title": "Residual Solvent Testing",
        "description": "Finished absolute tested for residual solvent content by GC headspace analysis, ensuring compliance with IFRA and food-grade specifications."
      }
    ],
    "shortSpec": "Solvent Extraction",
    "description": "Tuberose oil is typically extracted from the fresh flowers of the perennial Polianthes tuberosa plant, which is known for its long stems and highly fragrant white blossoms. Due to the delicate nature of the flowers, the oil is most commonly obtained through solvent extraction. It possesses a very strong, intense, and intoxicating floral fragrance described as heavy, sweet, and honey-like."
  }
];

// ============================
// CLIENT-SAFE PRODUCT STORE
// ============================

export function cleanShortSpec(spec: string): string {
  if (!spec) return "";
  const parts = spec.split("·").map(s => s.trim());
  if (parts.length >= 3) {
    return `${parts[0]} · ${parts.slice(2).join(" · ")}`;
  }
  return spec;
}

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
    shortSpec: cleanShortSpec(row.shortSpec ?? ""),
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
    this.products = initialProducts.map(p => ({ ...p, shortSpec: cleanShortSpec(p.shortSpec) }));
    this.events = [];
  }

  setProducts(newProducts: Product[]): void {
    this.products = newProducts.map(p => ({ ...p, shortSpec: cleanShortSpec(p.shortSpec) }));
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
if (!globalForStore.productStore) {
  globalForStore.productStore = new ProductStore(INITIAL_PRODUCTS);
} else {
  globalForStore.productStore.setProducts(INITIAL_PRODUCTS);
}
export const productStore: ProductStore = globalForStore.productStore;
