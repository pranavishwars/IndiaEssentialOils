/**
 * Signature Color Engine & WCAG Contrast Validator
 * Derived from Phase 9 Spec (Section 4) + Factory Label Pastel Tint Formula
 */

interface ColorPaletteRule {
  keywords: string[];
  color: string;
}

const CATEGORY_DEFAULT_COLORS: Record<string, string> = {
  ESSENTIAL_OIL: "#275A38", // Heritage botanical green
  SPICE_OIL: "#6E2C1C",     // Deep spice sienna
  CARRIER_OIL: "#9C6B1F",   // Warm golden amber
  FLORAL_ABSOLUTE: "#7D3856", // Opulent floral rose/mauve
  FLORAL_WATER: "#2A5F6E",  // Hydrosol aqua-teal
  OLEORESIN: "#8C2518",     // Rich crimson/resin
  ORGANIC_OIL: "#1F5434",   // Certified deep forest green
  AYURVEDIC: "#844212",     // Traditional saffron/taila amber
};

const BOTANICAL_SPECIFIC_RULES: ColorPaletteRule[] = [
  // Citrus family
  { keywords: ["lemongrass", "lemon", "lime", "citronella", "citriodora", "verbena"], color: "#2E5E35" },
  { keywords: ["orange", "mandarin", "tangerine", "grapefruit", "bergamot"], color: "#8C5008" },

  // Floral family
  { keywords: ["lavender", "lavandin"], color: "#593C72" },
  { keywords: ["rose", "geranium", "palmarosa"], color: "#7E2D48" },
  { keywords: ["jasmine", "mogra", "champaca", "kewra", "lotus"], color: "#543C62" },
  { keywords: ["chamomile", "blue tansy"], color: "#2B4B6F" },
  { keywords: ["neroli", "ylang"], color: "#7A5018" },

  // Mint & Camphoraceous family
  { keywords: ["peppermint", "spearmint", "mentha"], color: "#1B5E3C" },
  { keywords: ["eucalyptus", "tea-tree", "cajeput", "niaouli"], color: "#175B50" },
  { keywords: ["camphor", "wintergreen", "gandhapura", "gaultheria"], color: "#1E544A" },

  // Woody & Resinous family
  { keywords: ["sandalwood", "amyris"], color: "#7B4624" },
  { keywords: ["frankincense", "olibanum", "myrrh", "elemi"], color: "#7C4E25" },
  { keywords: ["cedarwood", "cypress", "juniper", "pine", "fir"], color: "#3B4E32" },
  { keywords: ["patchouli", "vetiver", "khus", "cypriol", "nagarmotha"], color: "#4E3624" },
  { keywords: ["agarwood", "oud"], color: "#3D2B1F" },

  // Herbal family
  { keywords: ["rosemary", "thyme", "oregano", "marjoram"], color: "#2A4E2B" },
  { keywords: ["basil", "tulsi", "holy basil", "clary sage", "sage"], color: "#244E31" },
  { keywords: ["davana", "armoise", "mugwort"], color: "#3E4C26" },

  // Spice family
  { keywords: ["cinnamon", "cassia"], color: "#74281A" },
  { keywords: ["clove", "nutmeg", "mace"], color: "#63261C" },
  { keywords: ["black pepper", "pepper", "pippali"], color: "#3B352E" },
  { keywords: ["cardamom"], color: "#3E5739" },
  { keywords: ["ginger", "turmeric", "curcuma", "zedoaria", "kachur"], color: "#7E4314" },
  { keywords: ["ajwain", "cumin", "fennel", "anise", "coriander", "dill"], color: "#544622" },

  // Carrier oils
  { keywords: ["jojoba", "argan", "almond", "apricot"], color: "#8E5F12" },
  { keywords: ["rosehip", "pomegranate"], color: "#7A2E3E" },
  { keywords: ["neem", "karanj", "chaulmoogra", "chulmoogra"], color: "#324A2A" },
  { keywords: ["castor", "sesame", "moringa", "avocado", "flaxseed", "hemp"], color: "#5C5624" },
  { keywords: ["black seed", "kalonji"], color: "#2E2B27" },

  // Ayurvedic Tailams
  { keywords: ["kumkumadi", "saffron", "kesar"], color: "#8C3C10" },
  { keywords: ["bhringraj", "brahmi", "amla", "triphala"], color: "#264832" },
  { keywords: ["mahanarayan", "dhanwantharam", "murivenna", "ashwagandha"], color: "#6C3A16" },

  // Oleoresins
  { keywords: ["capsicum", "paprika", "chili"], color: "#881F17" },
];

function getLuminance(hex: string): number {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  const a = [r, g, b].map(v => {
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function getContrastRatio(fgHex: string, bgHex = "#F6F0DF"): number {
  const l1 = getLuminance(fgHex);
  const l2 = getLuminance(bgHex);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function ensureAccessibleContrast(hex: string, bgHex = "#F6F0DF"): string {
  let currentHex = hex;
  let ratio = getContrastRatio(currentHex, bgHex);
  let cleanHex = currentHex.replace("#", "");
  let r = parseInt(cleanHex.substring(0, 2), 16);
  let g = parseInt(cleanHex.substring(2, 4), 16);
  let b = parseInt(cleanHex.substring(4, 6), 16);

  let iterations = 0;
  while (ratio < 4.5 && iterations < 15) {
    r = Math.max(0, Math.floor(r * 0.88));
    g = Math.max(0, Math.floor(g * 0.88));
    b = Math.max(0, Math.floor(b * 0.88));
    currentHex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
    ratio = getContrastRatio(currentHex, bgHex);
    iterations++;
  }

  return currentHex.toUpperCase();
}

export function deriveSignatureColor(name: string, category: string): string {
  const nameLower = name.toLowerCase();

  for (const rule of BOTANICAL_SPECIFIC_RULES) {
    for (const kw of rule.keywords) {
      if (nameLower.includes(kw)) {
        return ensureAccessibleContrast(rule.color);
      }
    }
  }

  const catDefault = CATEGORY_DEFAULT_COLORS[category] || "#275A38";
  return ensureAccessibleContrast(catDefault);
}

/**
 * Derives a luminous pastel watercolor wash hex code from any signature color.
 * Used for the soft glowing radial wash inside the wreath on the label.
 */
export function deriveSignatureTint(hex: string): string {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  // RGB to HSL
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  // Adjust for realistic lighting-matched muted watercolor wash: Lightness 73%, Saturation 18-38%
  const targetL = 0.73;
  const targetS = Math.min(0.38, Math.max(0.18, s * 0.45 + 0.08));

  // HSL to RGB
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  const q = targetL < 0.5 ? targetL * (1 + targetS) : targetL + targetS - targetL * targetS;
  const p = 2 * targetL - q;
  const rNew = Math.round(hue2rgb(p, q, h + 1 / 3) * 255);
  const gNew = Math.round(hue2rgb(p, q, h) * 255);
  const bNew = Math.round(hue2rgb(p, q, h - 1 / 3) * 255);

  return `#${rNew.toString(16).padStart(2, "0")}${gNew.toString(16).padStart(2, "0")}${bNew.toString(16).padStart(2, "0")}`.toUpperCase();
}
