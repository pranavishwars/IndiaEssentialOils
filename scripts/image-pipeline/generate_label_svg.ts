export interface LabelProps {
  name: string;
  botanicalName?: string;
  category: string;
  shortSpec?: string;
  slug?: string;
  bottleFormat?: string;
  signatureColor?: string;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function getAccurateVolumeText(bottleFormat?: string): string {
  switch (bottleFormat) {
    case "DROPPER_10ML":
      return "0.33 FL. OZ. | 10 mL e";
    case "ROLL_ON_30ML":
      return "1.0 FL. OZ. | 30 mL e";
    case "BOTTLE_200ML":
      return "6.8 FL. OZ. | 200 mL e";
    case "BOTTLE_100ML":
    default:
      return "3.4 FL. OZ. | 100 mL e";
  }
}

function getCategoryTag(category: string): string {
  switch (category) {
    case "CO2_OIL":
      return "SUPERCRITICAL CO₂ EXTRACT";
    case "SPICE_OIL":
      return "100% PURE SPICE DISTILLATE";
    case "CARRIER_OIL":
      return "COLD-PRESSED CARRIER OIL";
    case "FLORAL_ABSOLUTE":
      return "PURE FLORAL ABSOLUTE";
    case "FLORAL_WATER":
      return "THERAPEUTIC HYDROSOL WATER";
    case "OLEORESIN":
      return "STANDARDIZED OLEORESIN";
    case "ORGANIC_OIL":
      return "CERTIFIED ORGANIC OIL";
    case "AYURVEDIC":
      return "AUTHENTIC AYURVEDIC TAILAM";
    case "ESSENTIAL_OIL":
    default:
      return "100% PURE ESSENTIAL OIL";
  }
}

/**
 * Generates an ultra-realistic, textured sticker paper Private Label / OEM master bottle label SVG.
 * Features textured matte paper aesthetics, product signature color accents, and prominent
 * customizable client template zones (Logo, Batch, Barcode, Claims, Distributor).
 */
export function generateLabelSvg(props: LabelProps): string {
  const {
    name,
    botanicalName = "",
    category,
    bottleFormat = "BOTTLE_100ML",
    signatureColor = "#7C3AED",
  } = props;

  const w = 1000;
  const h = 1600;
  const uid = Math.random().toString(36).substring(2, 8);
  const volumeText = getAccurateVolumeText(bottleFormat);
  const categoryTag = getCategoryTag(category);

  // Format clean uppercase product title
  const cleanTitle = name.toUpperCase();
  const words = cleanTitle.split(" ");
  let titleLine1 = cleanTitle;
  let titleLine2 = "";

  if (cleanTitle.length > 17 && words.length > 1) {
    const mid = Math.ceil(words.length / 2);
    titleLine1 = words.slice(0, mid).join(" ");
    titleLine2 = words.slice(mid).join(" ");
  }

  const titleFontSize = titleLine2 ? 60 : 70;
  const titleY1 = titleLine2 ? 660 : 695;
  const titleY2 = titleLine2 ? 735 : 695;
  const botanicalY = titleLine2 ? 795 : 765;
  const specDividerY = titleLine2 ? 840 : 815;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- 1. Authentic Uncoated Matte Paper Texture Filter -->
    <filter id="paper-texture-${uid}" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="5" result="noise" />
      <feDiffuseLighting in="noise" lighting-color="#FFFDF9" surfaceScale="1.4" result="light">
        <feDistantLight azimuth="55" elevation="65" />
      </feDiffuseLighting>
      <feComponentTransfer>
        <feFuncR type="linear" slope="0.98" />
        <feFuncG type="linear" slope="0.97" />
        <feFuncB type="linear" slope="0.95" />
      </feComponentTransfer>
      <feBlend mode="multiply" in="SourceGraphic" result="textured" />
    </filter>

    <!-- 2. Soft Drop Shadows for Customizable Cards & Elements -->
    <filter id="box-shadow-${uid}" x="-5%" y="-10%" width="110%" height="125%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="rgba(24, 13, 38, 0.08)" />
    </filter>

    <linearGradient id="paper-base-grad-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FCFAF6" />
      <stop offset="40%" stop-color="#F7F4EC" />
      <stop offset="80%" stop-color="#F3EFE6" />
      <stop offset="100%" stop-color="#EFEAE0" />
    </linearGradient>

    <!-- Product Theme Color Accent Gradients -->
    <linearGradient id="theme-band-${uid}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${signatureColor}" />
      <stop offset="50%" stop-color="${signatureColor}EE" />
      <stop offset="100%" stop-color="${signatureColor}99" />
    </linearGradient>

    <linearGradient id="theme-soft-tint-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${signatureColor}18" />
      <stop offset="100%" stop-color="${signatureColor}06" />
    </linearGradient>
  </defs>

  <!-- ========================================== -->
  <!-- 1. MATTE STICKER PAPER BASE WITH TEXTURE   -->
  <!-- ========================================== -->
  <rect x="0" y="0" width="${w}" height="${h}" fill="url(#paper-base-grad-${uid})" filter="url(#paper-texture-${uid})" />

  <!-- Authentic 2px Die-Cut Paper Edge Highlight & Shadow Ring -->
  <rect x="2" y="2" width="${w - 4}" height="${h - 4}" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.9" />
  <rect x="18" y="18" width="${w - 36}" height="${h - 36}" fill="none" stroke="${signatureColor}33" stroke-width="1.5" />
  <rect x="26" y="26" width="${w - 52}" height="${h - 52}" fill="none" stroke="#D1D5DB" stroke-width="1.0" />

  <!-- Industrial Printer Registration & Die-Cut Crop Marks -->
  <path d="M 18 45 L 45 45 L 45 18" stroke="${signatureColor}" stroke-width="2.5" fill="none" />
  <path d="M ${w - 18} 45 L ${w - 45} 45 L ${w - 45} 18" stroke="${signatureColor}" stroke-width="2.5" fill="none" />
  <path d="M 18 ${h - 45} L 45 ${h - 45} L 45 ${h - 18}" stroke="${signatureColor}" stroke-width="2.5" fill="none" />
  <path d="M ${w - 18} ${h - 45} L ${w - 45} ${h - 45} L ${w - 45} ${h - 18}" stroke="${signatureColor}" stroke-width="2.5" fill="none" />

  <!-- Top Product Color Brand Accent Stripe -->
  <rect x="40" y="40" width="${w - 80}" height="8" rx="4" fill="url(#theme-band-${uid})" />

  <!-- ========================================== -->
  <!-- 2. CUSTOMIZABLE ELEMENT 1: CLIENT LOGO BOX -->
  <!-- ========================================== -->
  <g transform="translate(60, 72)">
    <!-- White Cutout Card with Dashed Border -->
    <rect
      x="0"
      y="0"
      width="880"
      height="265"
      rx="18"
      fill="#FFFFFF"
      stroke="${signatureColor}"
      stroke-width="2.5"
      stroke-dasharray="12,7"
      filter="url(#box-shadow-${uid})"
    />
    
    <!-- Soft Tint Layer Inside Logo Box -->
    <rect x="4" y="4" width="872" height="257" rx="14" fill="url(#theme-soft-tint-${uid})" />

    <!-- Top Badge Overlapping the Box -->
    <rect x="290" y="-13" width="300" height="26" rx="13" fill="${signatureColor}" />
    <text
      x="440"
      y="5"
      text-anchor="middle"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif"
      font-size="13"
      font-weight="900"
      letter-spacing="2.5"
      fill="#FFFFFF"
    >CUSTOM LOGO AREA</text>

    <!-- Crosshair Alignment Graphic [ + ] -->
    <g transform="translate(440, 76)" stroke="${signatureColor}" stroke-width="2" fill="none">
      <circle cx="0" cy="0" r="22" stroke-dasharray="5,4" opacity="0.85" />
      <line x1="-12" y1="0" x2="12" y2="0" stroke-linecap="round" />
      <line x1="0" y1="-12" x2="0" y2="12" stroke-linecap="round" />
    </g>

    <!-- Main "YOUR LOGO HERE" Heading -->
    <text
      x="440"
      y="152"
      text-anchor="middle"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif"
      font-size="42"
      font-weight="900"
      letter-spacing="5"
      fill="#180D26"
    >YOUR LOGO HERE</text>

    <!-- Subtitle: Private Label Indicator -->
    <text
      x="440"
      y="194"
      text-anchor="middle"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif"
      font-size="18"
      font-weight="800"
      letter-spacing="3"
      fill="${signatureColor}"
    >✦ PRIVATE LABEL · OEM CUSTOMIZABLE ✦</text>

    <!-- Bottom Instruction Bar -->
    <text
      x="440"
      y="230"
      text-anchor="middle"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif"
      font-size="13"
      font-weight="700"
      letter-spacing="1.5"
      fill="#6B7280"
    >REPLACE WITH YOUR BRAND LOGO, GRAPHICS &amp; COLOR SCHEME</text>
  </g>

  <!-- ========================================== -->
  <!-- 3. PRODUCT IDENTIFICATION & SPECS          -->
  <!-- ========================================== -->
  
  <!-- Category Pill Badge (Product Themed) -->
  <g transform="translate(80, 365)">
    <rect x="0" y="0" width="840" height="42" rx="21" fill="#FFFFFF" stroke="${signatureColor}55" stroke-width="1.5" />
    <circle cx="26" cy="21" r="7" fill="${signatureColor}" />
    <circle cx="814" cy="21" r="7" fill="${signatureColor}" />
    <text
      x="420"
      y="27"
      text-anchor="middle"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif"
      font-size="17"
      font-weight="800"
      letter-spacing="3.5"
      fill="#1F2937"
    >${escapeXml(categoryTag)}</text>
  </g>

  <!-- Product Title & Botanical Spec -->
  <!-- Horizontal Graphic Accent Rule -->
  <g transform="translate(250, 445)">
    <line x1="0" y1="0" x2="500" y2="0" stroke="${signatureColor}" stroke-width="2" />
    <circle cx="250" cy="0" r="5" fill="${signatureColor}" />
  </g>

  <!-- Product Main Title -->
  <text
    x="500"
    y="${titleY1}"
    text-anchor="middle"
    font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Helvetica, sans-serif"
    font-size="${titleFontSize}"
    font-weight="900"
    letter-spacing="2.5"
    fill="#111827"
  >${escapeXml(titleLine1)}</text>
  ${titleLine2 ? `
  <text
    x="500"
    y="${titleY2}"
    text-anchor="middle"
    font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Helvetica, sans-serif"
    font-size="${titleFontSize}"
    font-weight="900"
    letter-spacing="2.5"
    fill="#111827"
  >${escapeXml(titleLine2)}</text>
  ` : ""}

  <!-- Botanical Latin Name -->
  ${botanicalName ? `
  <text
    x="500"
    y="${botanicalY}"
    text-anchor="middle"
    font-family="Georgia, 'Lora', 'Times New Roman', serif"
    font-style="italic"
    font-size="32"
    font-weight="500"
    letter-spacing="1.5"
    fill="#4B5563"
  >${escapeXml(botanicalName)}</text>
  ` : ""}

  <!-- ========================================== -->
  <!-- 4. CUSTOMIZABLE ELEMENT 2: CLAIMS & BADGES -->
  <!-- ========================================== -->
  <g transform="translate(80, ${specDividerY})">
    <line x1="0" y1="0" x2="840" y2="0" stroke="#D1D5DB" stroke-width="1.5" stroke-dasharray="6,4" />

    <!-- 4 Customizable Certification Badges -->
    <g transform="translate(0, 20)">
      ${[
        ["100% PURE", 0],
        ["GC-MS TESTED", 220],
        ["ORGANIC", 440],
        ["CRUELTY FREE", 660]
      ].map(([label, xOffset]) => `
        <rect x="${xOffset}" y="0" width="180" height="34" rx="8" fill="#FFFFFF" stroke="${signatureColor}66" stroke-width="1.2" />
        <text x="${Number(xOffset) + 90}" y="22" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-size="12" font-weight="800" letter-spacing="1.5" fill="#374151">${label}</text>
      `).join("")}
    </g>

    <!-- Quality Claims & Extraction Line -->
    <text
      x="420"
      y="90"
      text-anchor="middle"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif"
      font-size="18"
      font-weight="800"
      letter-spacing="2"
      fill="#1F2937"
    >THERAPEUTIC GRADE · ZERO SOLVENT RESIDUE · UNADULTERATED</text>

    <!-- Client Customizable Ingredient Text Box -->
    <rect x="0" y="112" width="840" height="42" rx="8" fill="rgba(24, 13, 38, 0.03)" stroke="#E5E7EB" stroke-width="1" />
    <text
      x="420"
      y="138"
      text-anchor="middle"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif"
      font-size="13"
      font-weight="600"
      letter-spacing="1.2"
      fill="#4B5563"
    >[ EDITABLE CLAIMS: SOURCED &amp; DISTILLED IN INDIA · 100% BOTANICAL INGREDIENT ]</text>

    <line x1="0" y1="172" x2="840" y2="172" stroke="#D1D5DB" stroke-width="1.5" stroke-dasharray="6,4" />
  </g>

  <!-- ========================================== -->
  <!-- 5. CUSTOMIZABLE ELEMENT 3, 4, 5:           -->
  <!--    BARCODE, BATCH/LOT, VOLUME & OEM SEAL   -->
  <!-- ========================================== -->

  <!-- Left: Client Barcode & SKU Placeholder -->
  <g transform="translate(80, 1080)">
    <rect x="0" y="0" width="220" height="95" rx="8" fill="#FFFFFF" stroke="#9CA3AF" stroke-width="1.2" stroke-dasharray="5,3" />
    
    <!-- Realistic Barcode Vector Lines -->
    <g transform="translate(18, 12)" fill="#111827">
      <rect x="0" y="0" width="3" height="45" />
      <rect x="5" y="0" width="2" height="45" />
      <rect x="10" y="0" width="5" height="45" />
      <rect x="18" y="0" width="2" height="45" />
      <rect x="23" y="0" width="4" height="45" />
      <rect x="30" y="0" width="2" height="45" />
      <rect x="35" y="0" width="6" height="45" />
      <rect x="44" y="0" width="2" height="45" />
      <rect x="49" y="0" width="4" height="45" />
      <rect x="56" y="0" width="3" height="45" />
      <rect x="62" y="0" width="5" height="45" />
      <rect x="70" y="0" width="2" height="45" />
      <rect x="75" y="0" width="4" height="45" />
      <rect x="82" y="0" width="3" height="45" />
      <rect x="88" y="0" width="6" height="45" />
      <rect x="97" y="0" width="2" height="45" />
      <rect x="102" y="0" width="4" height="45" />
      <rect x="109" y="0" width="3" height="45" />
      <rect x="115" y="0" width="5" height="45" />
      <rect x="123" y="0" width="2" height="45" />
      <rect x="128" y="0" width="4" height="45" />
      <rect x="135" y="0" width="3" height="45" />
      <rect x="141" y="0" width="6" height="45" />
      <rect x="150" y="0" width="3" height="45" />
      <rect x="156" y="0" width="5" height="45" />
      <rect x="164" y="0" width="2" height="45" />
      <rect x="169" y="0" width="4" height="45" />
      <rect x="176" y="0" width="3" height="45" />
    </g>

    <text
      x="110"
      y="75"
      text-anchor="middle"
      font-family="monospace"
      font-size="11"
      font-weight="700"
      letter-spacing="2"
      fill="#111827"
    >SKU: 890400-OEM</text>
    <text
      x="110"
      y="88"
      text-anchor="middle"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
      font-size="9"
      font-weight="700"
      letter-spacing="1"
      fill="${signatureColor}"
    >[ YOUR BARCODE HERE ]</text>
  </g>

  <!-- Center-Left: Volume & Batch/Lot Box -->
  <g transform="translate(325, 1080)">
    <text
      x="0"
      y="18"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
      font-size="13"
      font-weight="800"
      letter-spacing="2"
      fill="#6B7280"
    >NET VOLUME</text>
    <text
      x="0"
      y="55"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
      font-size="34"
      font-weight="900"
      letter-spacing="1.5"
      fill="#111827"
    >${escapeXml(volumeText)}</text>

    <!-- Customizable Batch / Lot Tag -->
    <rect x="0" y="70" width="240" height="24" rx="6" fill="#FFFFFF" stroke="#9CA3AF" stroke-width="1" stroke-dasharray="4,3" />
    <text
      x="120"
      y="86"
      text-anchor="middle"
      font-family="monospace"
      font-size="11"
      font-weight="700"
      letter-spacing="1.5"
      fill="#4B5563"
    >[ LOT # / BATCH: CUSTOM ]</text>
  </g>

  <!-- Right: Turnkey Private Label Verification Seal -->
  <g transform="translate(775, 1130)">
    <circle cx="0" cy="0" r="75" fill="#FFFFFF" stroke="${signatureColor}" stroke-width="2.5" stroke-dasharray="8,5" filter="url(#box-shadow-${uid})" />
    <circle cx="0" cy="0" r="64" fill="none" stroke="${signatureColor}44" stroke-width="1.5" />
    
    <!-- Central Star Badge -->
    <path d="M 0 -22 L 5 -8 L 19 -8 L 8 2 L 12 16 L 0 7 L -12 16 L -8 2 L -19 -8 L -5 -8 Z" fill="${signatureColor}" />
    
    <text
      x="0"
      y="26"
      text-anchor="middle"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
      font-size="11"
      font-weight="900"
      letter-spacing="1.8"
      fill="#1F2937"
    >PRIVATE LABEL</text>
    <text
      x="0"
      y="42"
      text-anchor="middle"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
      font-size="10"
      font-weight="800"
      letter-spacing="1.5"
      fill="${signatureColor}"
    >READY TO BRAND</text>
  </g>

  <!-- ========================================== -->
  <!-- 6. CUSTOMIZABLE ELEMENT 6: DISTRIBUTOR     -->
  <!-- ========================================== -->
  <g transform="translate(80, 1220)">
    <!-- Customizable Distributor & Manufacturing Panel -->
    <rect
      x="0"
      y="0"
      width="840"
      height="125"
      rx="14"
      fill="#FFFFFF"
      stroke="#D1D5DB"
      stroke-width="1.5"
      filter="url(#box-shadow-${uid})"
    />

    <!-- Header Tag -->
    <rect x="20" y="16" width="360" height="24" rx="6" fill="${signatureColor}15" stroke="${signatureColor}44" stroke-width="1" />
    <text
      x="200"
      y="32"
      text-anchor="middle"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
      font-size="11"
      font-weight="800"
      letter-spacing="1.5"
      fill="${signatureColor}"
    >[ DISTRIBUTED BY: YOUR COMPANY / BRAND ]</text>

    <!-- Client Address & Contact Placeholder -->
    <text
      x="20"
      y="64"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
      font-size="14"
      font-weight="700"
      letter-spacing="1"
      fill="#1F2937"
    >MANUFACTURED EXCLUSIVELY FOR YOUR BRAND · CUSTOM CONTRACT PACKAGING</text>
    <text
      x="20"
      y="86"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
      font-size="12"
      font-weight="600"
      letter-spacing="1"
      fill="#6B7280"
    >Primary Distillery &amp; OEM Plant: New Delhi, India · WHO-GMP &amp; ISO 22000 Certified</text>
    <text
      x="20"
      y="108"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
      font-size="11"
      font-weight="600"
      letter-spacing="1"
      fill="#9CA3AF"
    >[ Editable Expiry, Storage Instructions &amp; Global Compliance Symbols ]</text>
  </g>

  <!-- Bottom Accent Stripe & Manufacturer Footer -->
  <rect x="40" y="${h - 48}" width="${w - 80}" height="8" rx="4" fill="url(#theme-band-${uid})" />
</svg>
`;
}
