import fs from "fs";
import path from "path";
import sharp from "sharp";
import prisma from "../src/lib/prisma";
import { Product, INITIAL_PRODUCTS } from "../src/lib/products-store";
import { generateLabelSvg } from "./image-pipeline/generate_label_svg";

export const CO2_PRODUCTS: Product[] = [
  {
    id: "prod-co2-turmeric",
    slug: "turmeric-co2-extract",
    name: "Turmeric CO₂ Extract",
    botanicalName: "Curcuma longa",
    category: "CO2_OIL",
    subCategory: "Supercritical Rhizome Extract",
    description: "Full-spectrum supercritical CO₂ extract of Indian turmeric rhizomes, rich in natural ar-turmerone, α-turmerone, and active curcuminoids with zero solvent residue.",
    shortSpec: "Supercritical CO₂ · Erode, India · 65% Turmerones",
    moq: "1 kg",
    priceDisplay: "Request Quote",
    popularityScore: 96,
    featured: true,
    bottleFormat: "BOTTLE_100ML",
    signatureColor: "#D97706",
    labelImageUrl: "/labels/turmeric-co2-extract.png",
    compositeImageUrl: "/products/turmeric-co2-extract.webp",
    overview: "Our Turmeric CO₂ Extract is manufactured using state-of-the-art dense-phase Supercritical Fluid Extraction (SFE) at sub-45°C. This low-temperature process preserves the complete aromatic profile and heavy bioactive fractions—specifically ar-turmerone, curlone, and curcuminoids—that are traditionally destroyed or lost during conventional steam distillation.",
    history: "Sourced directly from verified organic farmer cooperatives across Erode and Alleppey, the historical epicenters of Indian turmeric cultivation. Prepared under strict WHO-GMP and ISO 22000 manufacturing standards for B2B pharmaceutical, nutraceutical, and clean-label cosmetic formulations worldwide.",
    manufacturingSteps: [
      {
        stepNumber: 1,
        title: "Selected Rhizome Milling",
        description: "Cured, high-curcumin turmeric rhizomes are cryogenic milled to an optimal particle mesh size under oxygen-free inert conditions."
      },
      {
        stepNumber: 2,
        title: "Dense-Phase CO₂ SFE Extraction",
        description: "Pressurized pharmaceutical-grade carbon dioxide (300 bar, 42°C) circulates through the bed, dissolving both volatile aromatics and non-volatile turmerones."
      },
      {
        stepNumber: 3,
        title: "Multi-Stage Depressurization",
        description: "Gentle staged pressure reduction allows total separation of pure turmeric extract, leaving completely zero solvent residues (0.00 ppm)."
      },
      {
        stepNumber: 4,
        title: "GC-MS & HPLC Standardization",
        description: "Each production batch undergoes HPLC and GC-MS fingerprinting to guarantee standardized active turmerones and strict heavy-metal compliance."
      }
    ],
    benefits: [
      {
        title: "Skincare & Anti-Inflammatory Actives",
        description: "High concentration of turmerones provides exceptional topical soothing, brightening, and barrier-repair efficacy for premium cosmetics."
      },
      {
        title: "Nutraceutical & Wellness Synergy",
        description: "Natural lipophilic carrier for curcuminoid absorption, widely utilized in softgels, functional tinctures, and wellness supplements."
      },
      {
        title: "Clean-Label Flavour & Natural Color",
        description: "Authentic fresh-cut earthy spice aroma with golden carotenoid tones, free from chemical solvent residues."
      }
    ]
  },
  {
    id: "prod-co2-ginger",
    slug: "ginger-co2-extract",
    name: "Ginger CO₂ Extract",
    botanicalName: "Zingiber officinale",
    category: "CO2_OIL",
    subCategory: "Supercritical Rhizome Extract",
    description: "Total supercritical CO₂ ginger extract capturing both volatile zingiberene aromatics and pungent active gingerols & shogaols in true-to-nature balance.",
    shortSpec: "Supercritical CO₂ · Cochin, India · High Gingerols",
    moq: "1 kg",
    priceDisplay: "Request Quote",
    popularityScore: 94,
    featured: true,
    bottleFormat: "BOTTLE_100ML",
    signatureColor: "#CA8A04",
    labelImageUrl: "/labels/ginger-co2-extract.png",
    compositeImageUrl: "/products/ginger-co2-extract.webp",
    overview: "Ginger CO₂ Extract captures the full pungency, deep warmth, and zesty fresh top-notes of Cochin ginger. Unlike steam-distilled ginger oil which only contains volatile terpenes, supercritical CO₂ extraction extracts the pungent non-volatile gingerols (6-gingerol, 8-gingerol, 10-gingerol) delivering authentic culinary heat and therapeutic potency.",
    history: "Distilled from freshly cured ginger grown in the humid, mineral-rich soils of Wayanad and Cochin in Kerala. Handled under stringent clean-room SFE protocols certified under ISO 22000 and HACCP.",
    manufacturingSteps: [
      {
        stepNumber: 1,
        title: "Rhizome Selection & Flaking",
        description: "Unbleached Cochin ginger roots are sorted for moisture content and flaked to maximize supercritical contact surface area."
      },
      {
        stepNumber: 2,
        title: "Supercritical CO₂ Dissolution",
        description: "High-pressure CO₂ solvent extracts essential aroma terpenes along with lipophilic gingerol fractions at controlled physiological temperatures."
      },
      {
        stepNumber: 3,
        title: "Precision Fractionation",
        description: "Two-stage separation chamber separates terpene-rich volatile fractions from heavy resinous pungency according to target client specifications."
      },
      {
        stepNumber: 4,
        title: "Purity & Pungency Certification",
        description: "Quantified via HPLC for total gingerols and GC-MS for zingiberene, ar-curcumene, and β-sesquiphellandrene ratios."
      }
    ],
    benefits: [
      {
        title: "Authentic Warm Culinary Pungency",
        description: "Delivers the true bite and fresh aroma of raw ginger for beverages, confectionery, and functional culinary formulations."
      },
      {
        title: "Therapeutic & Warming Body Care",
        description: "Stimulates microcirculation in warming massage balms, joint pain salves, and stimulating hair follicle formulations."
      },
      {
        title: "Aromatherapy & Olfactory Brilliance",
        description: "Adds a radiant, non-terpenic spicy freshness to high-end woody and oriental fine fragrances."
      }
    ]
  },
  {
    id: "prod-co2-black-pepper",
    slug: "black-pepper-co2-extract",
    name: "Black Pepper CO₂ Extract",
    botanicalName: "Piper nigrum",
    category: "CO2_OIL",
    subCategory: "Supercritical Berry Extract",
    description: "Exquisite supercritical fluid extract of Malabar black peppercorns offering crisp freshly-cracked pepper aroma with standardized bioavailable piperine.",
    shortSpec: "Supercritical CO₂ · Malabar, India · Standardized Piperine",
    moq: "1 kg",
    priceDisplay: "Request Quote",
    popularityScore: 92,
    featured: true,
    bottleFormat: "BOTTLE_100ML",
    signatureColor: "#475569",
    labelImageUrl: "/labels/black-pepper-co2-extract.png",
    compositeImageUrl: "/products/black-pepper-co2-extract.webp",
    overview: "Black Pepper CO₂ Extract is processed from sun-ripened Tellicherry and Malabar black peppercorns. By utilizing supercritical carbon dioxide extraction, the delicate peppery terpenes (β-caryophyllene, sabinene, limonene) and the stimulating alkaloid piperine are concentrated without thermal degradation.",
    history: "Produced from indigenous vines cultivated on the misty mountain slopes of Kerala's Western Ghats—the historical birthplace of the global pepper spice trade.",
    manufacturingSteps: [
      {
        stepNumber: 1,
        title: "Malabar Berry Inspection",
        description: "Premium sun-dried Tellicherry grade peppercorns are screened for density and essential oil content (>3.5%)."
      },
      {
        stepNumber: 2,
        title: "Subcritical / Supercritical Extraction",
        description: "Staged CO₂ pressure cycle captures both volatile top notes and dense piperine alkaloid fractions."
      },
      {
        stepNumber: 3,
        title: "Inert Gas Purging",
        description: "Recycled CO₂ evaporation yields a solventless, crystal-pure extract with zero heavy metals or pesticide residues."
      },
      {
        stepNumber: 4,
        title: "Analytical Testing",
        description: "Batch tested for piperine percentage by HPLC and volatile aromatic profile by GC-MS."
      }
    ],
    benefits: [
      {
        title: "Bioavailability Enhancement",
        description: "Standardized piperine content makes it an essential ingredient for boosting nutrient absorption in modern nutraceuticals."
      },
      {
        title: "Perfumery Sparkle & Contrast",
        description: "Provides a crisp, dry-woody, electric spice note that elevates citrus, leather, and incense fragrance accords."
      },
      {
        title: "Invigorating Topical Balms",
        description: "Natural warming properties ideal for athletic recovery rubs, warming massage oils, and scalp stimulation."
      }
    ]
  },
  {
    id: "prod-co2-cardamom",
    slug: "cardamom-co2-extract",
    name: "Cardamom CO₂ Extract",
    botanicalName: "Elettaria cardamomum",
    category: "CO2_OIL",
    subCategory: "Supercritical Seed Extract",
    description: "Supreme supercritical CO₂ green cardamom extract with unmatched sweet-balsamic, eucalyptus-citrus aroma free from burnt notes.",
    shortSpec: "Supercritical CO₂ · Idukki, India · High α-Terpinyl Acetate",
    moq: "1 kg",
    priceDisplay: "Request Quote",
    popularityScore: 95,
    featured: true,
    bottleFormat: "BOTTLE_100ML",
    signatureColor: "#15803D",
    labelImageUrl: "/labels/cardamom-co2-extract.png",
    compositeImageUrl: "/products/cardamom-co2-extract.webp",
    overview: "Cardamom CO₂ Extract represents the gold standard of green spice extraction. Unlike steam distillation which alters delicate esters due to prolonged boiling, low-temperature CO₂ SFE perfectly preserves the sweet α-terpinyl acetate and clean 1,8-cineole ratio for an intoxicating, true-to-pod aromatic experience.",
    history: "Cultivated in the shaded high-elevation rainforests of the Cardamom Hills in Idukki, Kerala. Harvested by hand at peak pod maturity to ensure maximum seed aroma intensity.",
    manufacturingSteps: [
      {
        stepNumber: 1,
        title: "Green Pod De-husking",
        description: "Whole green Alleppey cardamom pods are gently de-husked and seeds are freshly cracked immediately prior to extraction."
      },
      {
        stepNumber: 2,
        title: "Supercritical Fluid Extraction",
        description: "Extracted under low-temperature, high-density supercritical CO₂ to prevent ester hydrolysis."
      },
      {
        stepNumber: 3,
        title: "Phase Separation",
        description: "Complete CO₂ sublimation yields a pale golden, mobile oil with zero thermal degradation."
      },
      {
        stepNumber: 4,
        title: "GC-MS Quality Release",
        description: "Confirmed for high α-terpinyl acetate (>45%) and balanced cineole profile."
      }
    ],
    benefits: [
      {
        title: "Luxury Perfumery Heart Note",
        description: "Imparts an ethereal, sweet, sparkling freshness to gourmand, oriental, and amber fragrance formulations."
      },
      {
        title: "Gourmet Flavor Applications",
        description: "Highly concentrated flavoring for specialty beverages, artisan chocolates, chai blends, and bakery products."
      },
      {
        title: "Aromatherapeutic Uplift",
        description: "Promotes clear breathing, mental invigoration, and digestive comfort in holistic aromatherapy."
      }
    ]
  },
  {
    id: "prod-co2-clove",
    slug: "clove-co2-extract",
    name: "Clove CO₂ Extract",
    botanicalName: "Syzygium aromaticum",
    category: "CO2_OIL",
    subCategory: "Supercritical Bud Extract",
    description: "Dense supercritical CO₂ clove bud extract yielding superior eugenol purity and rich eugenyl acetate sweetness without harsh burnt overtones.",
    shortSpec: "Supercritical CO₂ · Kanyakumari, India · >85% Eugenol",
    moq: "1 kg",
    priceDisplay: "Request Quote",
    popularityScore: 90,
    featured: false,
    bottleFormat: "BOTTLE_100ML",
    signatureColor: "#9A3412",
    labelImageUrl: "/labels/clove-co2-extract.png",
    compositeImageUrl: "/products/clove-co2-extract.webp",
    overview: "Clove CO₂ Extract is produced exclusively from unopened, sun-dried flower buds of Syzygium aromaticum. The supercritical CO₂ process yields a golden, rich oil that retains high levels of delicate eugenyl acetate (often hydrolyzed in steam distillation) providing a sweeter, more nuanced spice profile alongside potent eugenol.",
    history: "Harvested from coastal plantation groves in Kanyakumari and the southern Western Ghats, renowned for high essential oil yield and deep aromatic resonance.",
    manufacturingSteps: [
      {
        stepNumber: 1,
        title: "Bud Cleaning & Sorting",
        description: "Hand-picked whole clove buds are cleaned to remove headless stems and mother cloves."
      },
      {
        stepNumber: 2,
        title: "Precision SFE Run",
        description: "Extracted with carbon dioxide at 280 bar and 40°C to selectively dissolve aromatic phenolics and esters."
      },
      {
        stepNumber: 3,
        title: "Depressurization & Clarification",
        description: "CO₂ gas is recovered leaving a pristine, solvent-free concentrated aromatic oil."
      },
      {
        stepNumber: 4,
        title: "GC-MS Purity Verification",
        description: "Quantified for eugenol, eugenyl acetate, and β-caryophyllene to ensure pharmaceutical grade purity."
      }
    ],
    benefits: [
      {
        title: "Oral Care & Dental Applications",
        description: "Unrivaled natural soothing and antimicrobial properties for clean-label toothpastes, mouthwashes, and oral gels."
      },
      {
        title: "Natural Antimicrobial Preservative",
        description: "Acts as a broad-spectrum natural botanical preservative in cosmetic and personal care products."
      },
      {
        title: "Warm Spicy Fragrance Dimension",
        description: "Rich sweet-spicy undertones for festive candle blends, seasonal diffusers, and luxury perfumes."
      }
    ]
  },
  {
    id: "prod-co2-tulsi",
    slug: "tulsi-holy-basil-co2-extract",
    name: "Holy Basil / Tulsi CO₂ Extract",
    botanicalName: "Ocimum sanctum",
    category: "CO2_OIL",
    subCategory: "Supercritical Leaf Extract",
    description: "Sacred Holy Basil (Tulsi) CO₂ extract preserving both volatile eugenol-caryophyllene aromatics and lipophilic ursolic acid adaptogens.",
    shortSpec: "Supercritical CO₂ · Varanasi, India · Adaptogenic Actives",
    moq: "1 kg",
    priceDisplay: "Request Quote",
    popularityScore: 93,
    featured: true,
    bottleFormat: "BOTTLE_100ML",
    signatureColor: "#166534",
    labelImageUrl: "/labels/tulsi-holy-basil-co2-extract.png",
    compositeImageUrl: "/products/tulsi-holy-basil-co2-extract.webp",
    overview: "Revered across India as 'The Incomparable One' and the 'Queen of Herbs', Holy Basil (Tulsi) is traditionally used in Ayurvedic rasayana formulations. Our supercritical CO₂ extraction captures both Krishna and Rama Tulsi leaves at low temperatures, preserving fragile aromatic monoterpenes alongside heavy triterpenic adaptogenic actives like ursolic acid.",
    history: "Grown sustainably on certified regenerative farms along the fertile Gangetic plains surrounding Varanasi. Extracted in dedicated pharmaceutical-grade stainless steel extraction columns.",
    manufacturingSteps: [
      {
        stepNumber: 1,
        title: "Organic Leaf Harvesting",
        description: "Tulsi leaves are harvested at dawn, shade-dried under controlled humidity, and gently milled."
      },
      {
        stepNumber: 2,
        title: "Supercritical SFE Cycle",
        description: "CO₂ at supercritical parameters selectively extracts volatile eugenol and lipophilic ursolic/oleanolic fractions."
      },
      {
        stepNumber: 3,
        title: "Supercritical Separation",
        description: "CO₂ returns to gas phase, yielding a dark olive, rich botanical oil with 0.00 ppm solvent residues."
      },
      {
        stepNumber: 4,
        title: "HPLC & GC-MS Standardization",
        description: "Standardized for eugenol, β-elemene, germacrene D, and bioactive triterpene content."
      }
    ],
    benefits: [
      {
        title: "Adaptogenic & Anti-Stress Formulations",
        description: "Powerful botanical adaptogen widely incorporated into holistic wellness drops, serums, and adaptogenic blends."
      },
      {
        title: "Purifying Skincare & Acne Care",
        description: "Natural antimicrobial and antioxidant actives balance sebum production and purify congested skin."
      },
      {
        title: "Sacred Herbal Olfactory Signature",
        description: "Rich clove-like, herbal, spicy-sweet aroma revered in meditation and spiritual aromatherapy."
      }
    ]
  },
  {
    id: "prod-co2-rosemary",
    slug: "rosemary-co2-extract",
    name: "Rosemary CO₂ Extract",
    botanicalName: "Salvia rosmarinus",
    category: "CO2_OIL",
    subCategory: "Supercritical Antioxidant Extract",
    description: "Standardized Rosemary CO₂ extract with high carnosic acid content, serving as the gold-standard natural botanical antioxidant for cosmetics and food oils.",
    shortSpec: "Supercritical CO₂ · Nilgiris, India · High Carnosic Acid",
    moq: "1 kg",
    priceDisplay: "Request Quote",
    popularityScore: 91,
    featured: false,
    bottleFormat: "BOTTLE_100ML",
    signatureColor: "#3F6212",
    labelImageUrl: "/labels/rosemary-co2-extract.png",
    compositeImageUrl: "/products/rosemary-co2-extract.webp",
    overview: "Rosemary CO₂ Extract is standardized for high concentrations of natural carnosic acid, carnosol, and rosmarinic acid. Widely recognized in the international clean-beauty and organic food sectors as a 100% natural, potent oil-soluble antioxidant that retards lipid oxidation and prevents rancidity in cosmetic oils and emulsions.",
    history: "Cultivated in high-altitude sub-tropical organic estates in the Nilgiri Hills of southern India, benefiting from crisp mountain air and optimal sunshine.",
    manufacturingSteps: [
      {
        stepNumber: 1,
        title: "Selected Needle Sorting",
        description: "Rosemary leaves are harvested prior to flowering to maximize phenolic diterpene content."
      },
      {
        stepNumber: 2,
        title: "Supercritical Extraction",
        description: "High-pressure dense CO₂ selectively extracts non-volatile carnosic acid and lipid-soluble polyphenols."
      },
      {
        stepNumber: 3,
        title: "Standardization & Filtration",
        description: "Separated extract is standardized to precise active carnosic acid potency (e.g. 10%–20%)."
      },
      {
        stepNumber: 4,
        title: "HPLC Antioxidant Assays",
        description: "Validated for radical-scavenging activity and active polyphenol fingerprint."
      }
    ],
    benefits: [
      {
        title: "Natural Shelf-Life Extension",
        description: "Exceptional botanical antioxidant that protects fragile carrier oils, active serums, and cosmetics from oxidation."
      },
      {
        title: "Hair Follicle Revitalization",
        description: "Stimulates scalp circulation and promotes thick, healthy hair growth in targeted scalp serums."
      },
      {
        title: "Clean Label Antioxidant Alternative",
        description: "Replaces synthetic BHT/BHA with an organic, clean-label plant extract."
      }
    ]
  },
  {
    id: "prod-co2-vetiver",
    slug: "vetiver-co2-extract",
    name: "Vetiver CO₂ Extract",
    botanicalName: "Chrysopogon zizanioides",
    category: "CO2_OIL",
    subCategory: "Supercritical Root Extract",
    description: "Deep, luminous supercritical CO₂ extract of aged Indian Ruh Khus vetiver roots with smoky-woody, balsamic-earthy longevity.",
    shortSpec: "Supercritical CO₂ · Kannauj, India · High Khusimol",
    moq: "1 kg",
    priceDisplay: "Request Quote",
    popularityScore: 89,
    featured: false,
    bottleFormat: "BOTTLE_100ML",
    signatureColor: "#713F12",
    labelImageUrl: "/labels/vetiver-co2-extract.png",
    compositeImageUrl: "/products/vetiver-co2-extract.webp",
    overview: "Vetiver CO₂ Extract offers an exceptionally clean, rich, and refined alternative to conventional hydrodistilled vetiver. By operating at mild temperatures under supercritical CO₂, the heavy sesquiterpene alcohols (khusimol, isovalencenol) and vetivones are extracted without burnt pyrogenous notes, revealing velvety balsamic woods and sweet roots.",
    history: "Harvested from wild-growing riverbed grasses in Kannauj and Bharatpur, where the roots absorb deep mineral wealth over 18 to 24 months before harvesting.",
    manufacturingSteps: [
      {
        stepNumber: 1,
        title: "Root Cleaning & Aging",
        description: "Mature vetiver root fibers are washed in natural spring water, dried, and cured."
      },
      {
        stepNumber: 2,
        title: "High-Pressure Supercritical SFE",
        description: "Dense supercritical CO₂ penetrates the dense fibrous root matrix to dissolve heavy fixative resins."
      },
      {
        stepNumber: 3,
        title: "Depressurization & Decanting",
        description: "Clean recovery of CO₂ leaves a deep amber, viscous oil of remarkable olfactory tenacity."
      },
      {
        stepNumber: 4,
        title: "GC-MS Chemical Profiling",
        description: "Quantified for khusimol, α-vetivone, and β-vetivone to ensure authentic Indian Ruh Khus character."
      }
    ],
    benefits: [
      {
        title: "Supreme Fixative in Fine Fragrance",
        description: "Exceptional basenote tenacity that anchors citrus, floral, and woody accords for 24+ hours."
      },
      {
        title: "Profound Grounding Aromatherapy",
        description: "Known as the 'Oil of Tranquility' for calming the nervous system and easing restlessness."
      },
      {
        title: "Skin Regenerating & Balancing",
        description: "Cools and nourishes dry, mature, or inflamed skin in luxury cosmetic oils and face balms."
      }
    ]
  },
  {
    id: "prod-co2-sandalwood",
    slug: "sandalwood-co2-extract",
    name: "Sandalwood CO₂ Extract",
    botanicalName: "Santalum album",
    category: "CO2_OIL",
    subCategory: "Supercritical Heartwood Extract",
    description: "Precious supercritical CO₂ extract of aged East Indian Sandalwood heartwood, rich in natural α-santalol and β-santalol with creamy-woody serenity.",
    shortSpec: "Supercritical CO₂ · Mysore, India · >90% Santalols",
    moq: "1 kg",
    priceDisplay: "Request Quote",
    popularityScore: 98,
    featured: true,
    bottleFormat: "DROPPER_10ML",
    signatureColor: "#A16207",
    labelImageUrl: "/labels/sandalwood-co2-extract.png",
    compositeImageUrl: "/products/sandalwood-co2-extract.webp",
    overview: "Sandalwood CO₂ Extract represents the ultimate expression of East Indian Sandalwood (Santalum album). Sourced from sustainable, government-certified plantation timber, this low-temperature supercritical extraction yields an ultra-pure, light golden oil with over 90% combined santalols and an incredibly creamy, sweet, long-lasting woody aroma.",
    history: "Distilled from sustainably managed, ethically grown East Indian sandalwood trees in Karnataka and Tamil Nadu, certified under strict state forest department guidelines.",
    manufacturingSteps: [
      {
        stepNumber: 1,
        title: "Heartwood Shaving & Milling",
        description: "Aged heartwood is carefully separated from sapwood and milled to fine chips under cool conditions."
      },
      {
        stepNumber: 2,
        title: "Supercritical Fluid Extraction",
        description: "Dense-phase CO₂ at 320 bar extracts the sacred santalol molecules without thermal degradation."
      },
      {
        stepNumber: 3,
        title: "Solvent-Free Separation",
        description: "CO₂ is evaporated and fully recaptured, leaving a clear, viscous, golden sandalwood extract."
      },
      {
        stepNumber: 4,
        title: "GC-MS Chiral Analysis",
        description: "Validated for authentic Santalum album enantiomeric santalol purity and total absence of synthetic adulterants."
      }
    ],
    benefits: [
      {
        title: "Elite Perfumery Benchmark",
        description: "Unmatched woody-creamy radiance and fixation for haute perfumery and bespoke niche fragrances."
      },
      {
        title: "Cellular Skin Rejuvenation",
        description: "Deeply soothing, anti-aging, and skin-tone balancing for ultra-luxury skincare and facial serums."
      },
      {
        title: "Vedic Meditative Depth",
        description: "Sacred grounding aroma revered for centuries in spiritual rituals, mindfulness, and temple meditation."
      }
    ]
  },
  {
    id: "prod-co2-vanilla",
    slug: "vanilla-co2-extract",
    name: "Vanilla CO₂ Extract",
    botanicalName: "Vanilla planifolia",
    category: "CO2_OIL",
    subCategory: "Supercritical Pod Extract",
    description: "Pure supercritical CO₂ Bourbon vanilla extract with rich natural vanillin and warm balsamic depth, completely alcohol-free and solventless.",
    shortSpec: "Supercritical CO₂ · Pollachi, India · High Natural Vanillin",
    moq: "1 kg",
    priceDisplay: "Request Quote",
    popularityScore: 97,
    featured: true,
    bottleFormat: "BOTTLE_100ML",
    signatureColor: "#78350F",
    labelImageUrl: "/labels/vanilla-co2-extract.png",
    compositeImageUrl: "/products/vanilla-co2-extract.webp",
    overview: "Unlike alcohol-based vanilla extracts or synthetic vanillin, our Vanilla CO₂ Extract is produced from cured vanilla beans using high-pressure supercritical carbon dioxide. This produces a rich, dark amber oil capturing over 200 trace volatile components alongside natural vanillin, yielding an intensely complex, creamy, sweet-gourmand aromatic profile.",
    history: "Grown on hand-pollinated organic vanilla plantations across the shaded microclimates of Pollachi and Coorg in southern India.",
    manufacturingSteps: [
      {
        stepNumber: 1,
        title: "Cured Pod Inspection",
        description: "Plump, sun-cured vanilla planifolia pods are tested for moisture and natural vanillin crystallization."
      },
      {
        stepNumber: 2,
        title: "Low-Temperature SFE",
        description: "Supercritical CO₂ dissolves fragile vanilla aromatics, hydroxybenzaldehydes, and vanillic esters."
      },
      {
        stepNumber: 3,
        title: "Inert Separation",
        description: "CO₂ depressurization yields a solventless, alcohol-free, concentrated vanilla extract."
      },
      {
        stepNumber: 4,
        title: "HPLC Standardization",
        description: "Verified for natural vanillin percentage, 4-hydroxybenzaldehyde, and vanillic acid ratios."
      }
    ],
    benefits: [
      {
        title: "Gourmand Fine Fragrance",
        description: "Adds rich, velvety, sensual sweetness and longevity to oriental, amber, and gourmand perfumes."
      },
      {
        title: "Alcohol-Free Cosmetic Formulation",
        description: "Easily dispersible in cosmetic oils and creams without the stinging or drying effects of alcohol carriers."
      },
      {
        title: "Artisanal Flavoring & Confectionery",
        description: "Superior natural vanilla flavor for high-end chocolates, pastry emulsions, and functional beverages."
      }
    ]
  },
  {
    id: "prod-co2-onion",
    slug: "onion-co2-extract",
    name: "Onion CO₂ Extract",
    botanicalName: "Allium cepa",
    category: "CO2_OIL",
    subCategory: "Supercritical Bulb Extract",
    description: "Potent supercritical CO₂ red onion extract rich in active organosulfur compounds and quercetin, widely used in clinical hair fall and follicle strengthening formulations.",
    shortSpec: "Supercritical CO₂ · Nashik, India · High Organosulfur & Quercetin",
    moq: "1 kg",
    priceDisplay: "Request Quote",
    popularityScore: 88,
    featured: false,
    bottleFormat: "BOTTLE_100ML",
    signatureColor: "#9D174D",
    labelImageUrl: "/labels/onion-co2-extract.png",
    compositeImageUrl: "/products/onion-co2-extract.webp",
    overview: "Onion CO₂ Extract is extracted from selected Nashik red onions. The supercritical CO₂ method concentrates volatile sulfur compounds (dipropyl disulfide, dipropyl trisulfide) and antioxidant flavonoids (quercetin) at low temperatures without the burnt sulfurous notes caused by steam distillation, creating the premier active for advanced hair care.",
    history: "Procured directly from the renowned agricultural belt of Nashik, Maharashtra—the onion capital of India.",
    manufacturingSteps: [
      {
        stepNumber: 1,
        title: "Bulb Flaking & Dehydration",
        description: "Fresh red onions are peeled, sliced, gently dehydrated, and milled to preserve alliinase enzyme precursors."
      },
      {
        stepNumber: 2,
        title: "Supercritical Fluid Extraction",
        description: "CO₂ at high pressure selectively extracts lipophilic sulfur actives and bioavailable quercetin."
      },
      {
        stepNumber: 3,
        title: "Gentle Deodorization Balance",
        description: "Staged pressure control optimizes therapeutic active retention while tempering harsh off-notes."
      },
      {
        stepNumber: 4,
        title: "HPLC / GC-MS Verification",
        description: "Quantified for sulfur active compounds and flavonoid concentration."
      }
    ],
    benefits: [
      {
        title: "Hair Fall Reduction & Regrowth",
        description: "Clinically proven to nourish hair follicles, reduce breakage, and stimulate scalp collagen production."
      },
      {
        title: "Antimicrobial Scalp Therapy",
        description: "Purifies scalp microflora, controlling dandruff and soothing itchy scalp conditions."
      },
      {
        title: "High-Potency Natural Flavoring",
        description: "Provides authentic sautéed/roasted onion notes for savory food and seasoning applications."
      }
    ]
  },
  {
    id: "prod-co2-garlic",
    slug: "garlic-co2-extract",
    name: "Garlic CO₂ Extract",
    botanicalName: "Allium sativum",
    category: "CO2_OIL",
    subCategory: "Supercritical Clove Extract",
    description: "Highly concentrated supercritical CO₂ garlic extract rich in standardized diallyl disulfides and allicin derivatives, with 100x flavor strength and zero carrier oil dilution.",
    shortSpec: "Supercritical CO₂ · Neemuch, India · Standardized Diallyl Disulfides",
    moq: "1 kg",
    priceDisplay: "Request Quote",
    popularityScore: 87,
    featured: false,
    bottleFormat: "BOTTLE_100ML",
    signatureColor: "#854D0E",
    labelImageUrl: "/labels/garlic-co2-extract.png",
    compositeImageUrl: "/products/garlic-co2-extract.webp",
    overview: "Garlic CO₂ Extract is an ultra-concentrated botanical extract manufactured from high-pungency Indian garlic. Supercritical CO₂ preserves the active allicin metabolites, diallyl disulfide (DADS), and diallyl trisulfide (DATS) in a 100% pure, solvent-free state, delivering clean antimicrobial power and standardized flavor intensity.",
    history: "Sourced from the prime garlic farming region of Neemuch and Mandsaur in Madhya Pradesh, renowned for dense cloves and high allicin content.",
    manufacturingSteps: [
      {
        stepNumber: 1,
        title: "Clove Milling & Enzyme Activation",
        description: "Cleaned garlic cloves are crushed to allow alliin conversion to allicin prior to extraction."
      },
      {
        stepNumber: 2,
        title: "Supercritical CO₂ Extraction",
        description: "Supercritical CO₂ dissolves the organosulfur volatiles without heating or burning."
      },
      {
        stepNumber: 3,
        title: "Cold Separation",
        description: "Solvent-free phase separation yields a crystal-clear, intensely aromatic garlic extract."
      },
      {
        stepNumber: 4,
        title: "GC-MS Sulfur Active Assay",
        description: "Quantified for diallyl disulfide and diallyl trisulfide content."
      }
    ],
    benefits: [
      {
        title: "Cardiovascular & Immunity Formulations",
        description: "Standardized active sulfur compounds used in heart health, immunity, and dietary supplements."
      },
      {
        title: "Industrial Food Seasoning & Sauces",
        description: "Ultra-concentrated flavor solution offering consistent batch-to-batch garlic strength without microbial spoilage."
      },
      {
        title: "Broad-Spectrum Antimicrobial",
        description: "Potent natural antimicrobial active for specialized cosmetic and agricultural bio-solutions."
      }
    ]
  },
  {
    id: "prod-co2-jasmine",
    slug: "jasmine-co2-extract",
    name: "Jasmine CO₂ Extract",
    botanicalName: "Jasminum sambac",
    category: "CO2_OIL",
    subCategory: "Supercritical Flower Extract",
    description: "Ethereal supercritical CO₂ extract of pre-dawn harvested Madurai Jasmine Sambac flowers, capturing radiant floral heart notes without harsh hexane residues.",
    shortSpec: "Supercritical CO₂ · Madurai, India · 0.00 ppm Hexane",
    moq: "1 kg",
    priceDisplay: "Request Quote",
    popularityScore: 99,
    featured: true,
    bottleFormat: "DROPPER_10ML",
    signatureColor: "#BE185D",
    labelImageUrl: "/labels/jasmine-co2-extract.png",
    compositeImageUrl: "/products/jasmine-co2-extract.webp",
    overview: "Jasmine flowers cannot be steam-distilled without scorching their delicate petals. While conventional perfumery relies on hexane-extracted concretes and absolutes, our Jasmine CO₂ Extract utilizes gentle dense CO₂ SFE to yield an exquisite, crystal-pure floral extract that matches the exact aroma of fresh jasmine blossoms blooming at midnight with zero petrochemical residues.",
    history: "Hand-harvested in the legendary flower markets of Madurai ('Jasmine City') in Tamil Nadu before sunrise, transported immediately in temperature-controlled crates.",
    manufacturingSteps: [
      {
        stepNumber: 1,
        title: "Pre-Dawn Hand Harvest",
        description: "Unopened jasmine buds are picked before sunrise when volatile indole and ester levels are at their natural peak."
      },
      {
        stepNumber: 2,
        title: "Subcritical / Supercritical SFE",
        description: "Gentle low-temperature CO₂ circulates through the petal bed, dissolving floral absolutes without waxes."
      },
      {
        stepNumber: 3,
        title: "Clean Phase Separation",
        description: "Complete CO₂ sublimation yields a pale golden, mobile floral extract with 0.00 ppm solvent residues."
      },
      {
        stepNumber: 4,
        title: "GC-MS Floral Fingerprint",
        description: "Quantified for benzyl acetate, linalool, methyl anthranilate, and cis-jasmone."
      }
    ],
    benefits: [
      {
        title: "High-End Haute Perfumery",
        description: "Unrivaled fresh, intoxicating floral heart note for prestige fragrance creation."
      },
      {
        title: "Mood Elevation & Euphoria",
        description: "Deeply uplifting and emotionally balancing aroma used in luxury aromatherapeutic body oils."
      },
      {
        title: "Radiant Skincare & Hydration",
        description: "Nourishes dry, sensitive skin and promotes a glowing, luminous complexion."
      }
    ]
  },
  {
    id: "prod-co2-ambrette",
    slug: "ambrette-co2-extract",
    name: "Ambrette CO₂ Extract",
    botanicalName: "Abelmoschus moschatus",
    category: "CO2_OIL",
    subCategory: "Supercritical Seed Extract",
    description: "Supreme supercritical CO₂ musk mallow extract with unmatched ambrettolide purity, serving as the premier 100% natural, cruelty-free botanical musk in luxury perfumery.",
    shortSpec: "Supercritical CO₂ · Deccan, India · High (E)-Ambrettolide",
    moq: "1 kg",
    priceDisplay: "Request Quote",
    popularityScore: 95,
    featured: true,
    bottleFormat: "BOTTLE_100ML",
    signatureColor: "#1E3A8A",
    labelImageUrl: "/labels/ambrette-co2-extract.png",
    compositeImageUrl: "/products/ambrette-co2-extract.webp",
    overview: "Ambrette CO₂ Extract is the most prized natural plant musk known to modern perfumery. The supercritical CO₂ extraction of musk mallow seeds isolates high levels of (E)-ambrettolide, farnesyl acetate, and decyl acetate while eliminating heavy fatty acids, delivering an ethereal, silky, skin-like botanical musk of extraordinary tenacity.",
    history: "Grown on traditional organic farms across the Deccan Plateau of central India. Extracted under clean-room conditions certified for ethical, cruelty-free perfumery.",
    manufacturingSteps: [
      {
        stepNumber: 1,
        title: "Seed Milling & Cleaning",
        description: "Dried ambrette seeds are sorted, de-stoned, and crushed under inert atmosphere."
      },
      {
        stepNumber: 2,
        title: "Supercritical CO₂ Extraction",
        description: "High-pressure carbon dioxide dissolves the macrocyclic lactones and delicate musk fixatives."
      },
      {
        stepNumber: 3,
        title: "Selective Dewaxing",
        description: "Staged separator temperature control separates heavy palmitic waxes, leaving a mobile, crystal-clear oil."
      },
      {
        stepNumber: 4,
        title: "GC-MS Purity Profiling",
        description: "Quantified for ambrettolide content and olfactory clarity."
      }
    ],
    benefits: [
      {
        title: "100% Natural Botanical Musk",
        description: "Cruelty-free, vegan alternative to animal and synthetic nitromusks in fine fragrance."
      },
      {
        title: "Exquisite Fragrance Fixative",
        description: "Smooths and anchors delicate floral and citrus accords, extending fragrance sillage for days."
      },
      {
        title: "Calming & Sensual Aromatherapy",
        description: "Promotes emotional peace, inner security, and grounding in holistic wellness formulations."
      }
    ]
  },
  {
    id: "prod-co2-champaca",
    slug: "champaca-co2-extract",
    name: "Champaca CO₂ Extract",
    botanicalName: "Magnolia champaca",
    category: "CO2_OIL",
    subCategory: "Supercritical Flower Extract",
    description: "Sacred golden Champaca flower CO₂ extract radiating exotic apricot-tea floral sweetness, free from solvent residues for bespoke niche perfumery.",
    shortSpec: "Supercritical CO₂ · Nilgiris, India · True-to-Flower Floral",
    moq: "1 kg",
    priceDisplay: "Request Quote",
    popularityScore: 96,
    featured: true,
    bottleFormat: "DROPPER_10ML",
    signatureColor: "#EA580C",
    labelImageUrl: "/labels/champaca-co2-extract.png",
    compositeImageUrl: "/products/champaca-co2-extract.webp",
    overview: "Known as the 'Flower of the Gods', golden Champaca blossoms possess an opulent, velvety aroma blending notes of ripe apricot, green tea, sweet spices, and deep floral nectar. Our Champaca CO₂ Extract preserves these ephemeral top notes through gentle subcritical/supercritical CO₂ extraction without thermal destruction.",
    history: "Harvested from heritage magnolia trees in the foothills of the Nilgiris and Western Ghats, where the flowers have been woven into temple offerings for thousands of years.",
    manufacturingSteps: [
      {
        stepNumber: 1,
        title: "Early Morning Blossom Picking",
        description: "Golden champaca flowers are hand-picked at sunrise and loaded immediately into extraction baskets."
      },
      {
        stepNumber: 2,
        title: "Supercritical SFE Cycle",
        description: "Dense carbon dioxide at 38°C dissolves the radiant floral essence without boiling or chemicals."
      },
      {
        stepNumber: 3,
        title: "Evaporation & Recovery",
        description: "CO₂ is depressurized and recovered, leaving a rich, golden-orange aromatic essence."
      },
      {
        stepNumber: 4,
        title: "GC-MS Floral Authentication",
        description: "Certified for linalool, methyl anthranilate, phenylacetonitrile, and indole balance."
      }
    ],
    benefits: [
      {
        title: "Bespoke Perfumery Key Ingredient",
        description: "A centerpiece floral note in iconic, luxury oriental and exotic floral fragrances."
      },
      {
        title: "Deep Spiritual Uplift & Euphoria",
        description: "Soothes grief, inspires creativity, and elevates consciousness in meditation."
      },
      {
        title: "Nourishing Botanical Elixir",
        description: "Imparts radiance and deep hydration to delicate facial oils and youth serums."
      }
    ]
  }
];

async function main() {
  console.log(`\n🌿 Seeding ${CO2_PRODUCTS.length} CO₂ Products into Database and Store...\n`);

  // 1. Generate PNG labels for all 15 CO2 oils
  const LABELS_DIR = path.join(__dirname, "../public/labels");
  fs.mkdirSync(LABELS_DIR, { recursive: true });

  for (const product of CO2_PRODUCTS) {
    const svg = generateLabelSvg({
      name: product.name,
      botanicalName: product.botanicalName,
      category: product.category,
      shortSpec: product.shortSpec,
      slug: product.slug,
      bottleFormat: product.bottleFormat,
      signatureColor: product.signatureColor,
    });

    const outPng = path.join(LABELS_DIR, `${product.slug}.png`);
    await sharp(Buffer.from(svg))
      .png({ quality: 100 })
      .toFile(outPng);

    console.log(`  ✓ Label generated: public/labels/${product.slug}.png`);
  }

  // 2. Upsert into PostgreSQL DB via Prisma (if connected)
  if (prisma) {
    console.log("\n📦 Upserting into PostgreSQL database...");
    for (const p of CO2_PRODUCTS) {
      await prisma.product.upsert({
        where: { slug: p.slug },
        update: {
          name: p.name,
          botanicalName: p.botanicalName,
          category: p.category as any,
          subCategory: p.subCategory,
          description: p.description,
          shortSpec: p.shortSpec,
          overview: p.overview,
          history: p.history,
          benefits: p.benefits as any,
          manufacturingSteps: p.manufacturingSteps as any,
          bottleFormat: p.bottleFormat as any,
          signatureColor: p.signatureColor,
          labelImageUrl: p.labelImageUrl,
          compositeImageUrl: p.compositeImageUrl,
          priceDisplay: p.priceDisplay,
          moq: p.moq,
          popularityScore: p.popularityScore,
          featured: p.featured || false,
        },
        create: {
          id: p.id,
          slug: p.slug,
          name: p.name,
          botanicalName: p.botanicalName,
          category: p.category as any,
          subCategory: p.subCategory,
          description: p.description,
          shortSpec: p.shortSpec,
          overview: p.overview,
          history: p.history,
          benefits: p.benefits as any,
          manufacturingSteps: p.manufacturingSteps as any,
          bottleFormat: p.bottleFormat as any,
          signatureColor: p.signatureColor,
          labelImageUrl: p.labelImageUrl,
          compositeImageUrl: p.compositeImageUrl,
          priceDisplay: p.priceDisplay,
          moq: p.moq,
          popularityScore: p.popularityScore,
          featured: p.featured || false,
        },
      });
    }
    console.log(`  ✅ Successfully upserted ${CO2_PRODUCTS.length} products in Postgres database.`);
  }

  console.log("\n✨ Done seeding CO₂ products.\n");
}

main().catch((err) => {
  console.error("Seeding error:", err);
  process.exit(1);
});
