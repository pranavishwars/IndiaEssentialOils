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

/**
 * Maps bottle format to accurate volume text matching reference photo:
 * DROPPER_10ML -> .33oz | 10 mL e
 * BOTTLE_100ML -> 3.4oz | 100 mL e
 * BOTTLE_200ML -> 6.8oz | 200 mL e
 * ROLL_ON_30ML -> 1.0oz | 30 mL e
 */
export function getAccurateVolumeText(bottleFormat?: string): string {
  switch (bottleFormat) {
    case "DROPPER_10ML":
      return ".33oz | 10 mL e";
    case "ROLL_ON_30ML":
      return "1.0oz | 30 mL e";
    case "BOTTLE_200ML":
      return "6.8oz | 200 mL e";
    case "BOTTLE_100ML":
    default:
      return "3.4oz | 100 mL e";
  }
}

/**
 * Formats the product name to clean lowercase typography matching reference:
 * "Lavender Oil" -> "lavender"
 * "Rose Oil (Damascena)" -> "rose"
 * "Peppermint Oil" -> "peppermint"
 * "Eucalyptus Oil" -> "eucalyptus"
 * "Ylang Ylang Oil" -> "ylang ylang"
 */
export function formatLabelProductName(rawName: string): string {
  let name = rawName.trim();

  // Strip parenthetical category labels
  name = name.replace(/\(ayurvedic\)/gi, "").trim();
  name = name.replace(/\(organic\)/gi, "").trim();
  name = name.replace(/\(pure\)/gi, "").trim();

  // Specific canonical cleanups matching reference aesthetic
  if (/rose.*damascena/i.test(name)) return "rose";
  if (/almond.*sweet/i.test(name)) return "sweet almond";
  if (/almond.*bitter/i.test(name)) return "bitter almond";
  if (/jojoba.*golden/i.test(name)) return "golden jojoba";
  if (/chamomile.*blue/i.test(name)) return "blue chamomile";
  if (/chamomile.*roman/i.test(name)) return "roman chamomile";
  if (/holy basil|tulsi/i.test(name)) return "holy basil";
  if (/cypriol|nagarmotha/i.test(name)) return "nagarmotha";
  if (/costus.*kuth/i.test(name)) return "costus root";
  if (/calamus.*vacha/i.test(name)) return "calamus";
  if (/gaultheria|wintergreen/i.test(name)) return "wintergreen";
  if (/hedychium|kapurkachri/i.test(name)) return "kapurkachri";
  if (/valerian.*tagara/i.test(name)) return "valerian";
  if (/vetiver.*khus/i.test(name)) return "vetiver";
  if (/zanthoxylum.*tejphal/i.test(name)) return "tejphal";
  if (/zedoaria.*kachur/i.test(name)) return "zedoary";
  if (/boswellia.*shallaki/i.test(name)) return "boswellia";
  if (/tangerine.*mandarin/i.test(name)) return "mandarin";
  if (/lemon balm|melissa/i.test(name)) return "melissa";
  if (/spearmint/i.test(name)) return "spearmint";
  if (/peppermint/i.test(name)) return "peppermint";
  if (/ylang.*ylang/i.test(name)) return "ylang ylang";
  if (/tea.*tree/i.test(name)) return "tea tree";
  if (/clove.*bud/i.test(name)) return "clove bud";
  if (/cinnamon.*bark/i.test(name)) return "cinnamon bark";

  // Strip generic suffixes
  name = name.replace(/\s*\/\s*.*$/, ""); // Keep left side of slash
  name = name.replace(/\s*\([^)]*\)/g, ""); // Strip any remaining parens
  name = name.replace(/\s+oil$/i, "");
  name = name.replace(/\s+essential oil$/i, "");
  name = name.replace(/\s+absolute$/i, "");
  name = name.replace(/\s+oleoresin$/i, "");
  name = name.replace(/\s+extract$/i, "");
  name = name.replace(/^organic\s+/i, "");

  return name.toLowerCase().trim();
}

export type PlantArchetype = 
  | "LAVENDER"
  | "PEPPERMINT"
  | "ROSE"
  | "EUCALYPTUS"
  | "YLANG_YLANG"
  | "CITRUS"
  | "TEA_TREE_HERB"
  | "JASMINE_WHITE_FLORAL"
  | "CHAMOMILE"
  | "SPICE_PODS"
  | "WOODS_RESIN"
  | "CARRIER_NUT_SEED"
  | "AYURVEDIC_LOTUS"
  | "GENERAL_BOTANICAL";

export function detectPlantArchetype(slug: string = "", name: string = "", category: string = ""): PlantArchetype {
  const s = (slug + " " + name).toLowerCase();

  if (s.includes("lavender") || s.includes("lavandin")) return "LAVENDER";
  if (s.includes("peppermint") || s.includes("spearmint") || s.includes("mint") || s.includes("mentha")) return "PEPPERMINT";
  if (s.includes("rose") && !s.includes("rosemary") && !s.includes("rosewood") && !s.includes("rosehip")) return "ROSE";
  if (s.includes("eucalyptus") || s.includes("myrtle") || s.includes("niaouli") || s.includes("cajeput")) return "EUCALYPTUS";
  if (s.includes("ylang") || s.includes("cananga")) return "YLANG_YLANG";
  if (s.includes("chamomile") || s.includes("blue tansy") || s.includes("helichrysum") || s.includes("marigold") || s.includes("calendula")) return "CHAMOMILE";
  if (s.includes("jasmine") || s.includes("neroli") || s.includes("orange blossom") || s.includes("kewra") || s.includes("champaca") || s.includes("gardenia") || s.includes("tuberose") || s.includes("mogra")) return "JASMINE_WHITE_FLORAL";
  if (s.includes("orange") || s.includes("bergamot") || s.includes("lemon") || s.includes("lime") || s.includes("grapefruit") || s.includes("mandarin") || s.includes("tangerine") || s.includes("citrus") || s.includes("petitgrain")) return "CITRUS";
  if (s.includes("tea-tree") || s.includes("tea tree") || s.includes("rosemary") || s.includes("thyme") || s.includes("basil") || s.includes("oregano") || s.includes("sage") || s.includes("marjoram") || s.includes("cypress") || s.includes("pine") || s.includes("patchouli") || s.includes("davana") || s.includes("armoise")) return "TEA_TREE_HERB";
  if (s.includes("clove") || s.includes("cardamom") || s.includes("cinnamon") || s.includes("pepper") || s.includes("ginger") || s.includes("nutmeg") || s.includes("mace") || s.includes("cumin") || s.includes("coriander") || s.includes("fennel") || s.includes("anise") || s.includes("mustard") || s.includes("curry") || category === "SPICE_OIL" || category === "OLEORESIN") return "SPICE_PODS";
  if (s.includes("sandalwood") || s.includes("cedarwood") || s.includes("frankincense") || s.includes("myrrh") || s.includes("agarwood") || s.includes("oud") || s.includes("vetiver") || s.includes("cypriol") || s.includes("costus") || s.includes("copaiba") || s.includes("benzoin") || s.includes("elemi") || s.includes("birch tar") || s.includes("cade") || s.includes("guaiacwood")) return "WOODS_RESIN";
  if (s.includes("almond") || s.includes("jojoba") || s.includes("argan") || s.includes("castor") || s.includes("sesame") || s.includes("neem") || s.includes("rosehip") || s.includes("avocado") || s.includes("olive") || s.includes("apricot") || s.includes("grapeseed") || s.includes("macadamia") || s.includes("moringa") || s.includes("black seed") || category === "CARRIER_OIL") return "CARRIER_NUT_SEED";
  if (category === "AYURVEDIC" || s.includes("kumkumadi") || s.includes("lotus") || s.includes("tailam") || s.includes("ashwagandha") || s.includes("brahmi") || s.includes("bhringraj") || s.includes("nagarmotha") || s.includes("kapurkachri") || s.includes("shallaki")) return "AYURVEDIC_LOTUS";

  return "GENERAL_BOTANICAL";
}

/**
 * Renders full 360-degree botanical backgrounds with high color contrast and prominent foliage.
 */
function renderBotanicalPlantBackground(archetype: PlantArchetype, uid: string): string {
  const w = 1000;
  const h = 1500;

  switch (archetype) {
    case "LAVENDER":
      return `
        <!-- Lavender Botanical Canvas -->
        <defs>
          <linearGradient id="lav-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#9333EA" />
            <stop offset="35%" stop-color="#C084FC" />
            <stop offset="65%" stop-color="#E9D5FF" />
            <stop offset="100%" stop-color="#6B21A8" />
          </linearGradient>
          <linearGradient id="lav-petal-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFFFFF" />
            <stop offset="25%" stop-color="#DDD6FE" />
            <stop offset="65%" stop-color="#9333EA" />
            <stop offset="100%" stop-color="#581C87" />
          </linearGradient>
          <linearGradient id="lav-stem-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4ADE80" />
            <stop offset="100%" stop-color="#15803D" />
          </linearGradient>
        </defs>

        <rect width="${w}" height="${h}" fill="url(#lav-bg-${uid})" />

        <!-- Side Floral Sprigs -->
        <g opacity="0.96">
          <path d="M -20 350 Q 120 750 -20 1150" stroke="url(#lav-stem-${uid})" stroke-width="14" fill="none" />
          ${[
            [45, 450, 54, 30], [20, 580, 58, -25], [50, 720, 62, 35], [20, 860, 58, -30], [45, 1000, 54, 25]
          ].map(([x, y, r, ang]) => `
            <ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.52}" transform="rotate(${ang} ${x} ${y})" fill="url(#lav-petal-${uid})" />
            <circle cx="${x}" cy="${y}" r="${r * 0.22}" fill="#FFFFFF" opacity="0.8" />
          `).join("")}

          <path d="M 1020 350 Q 880 750 1020 1150" stroke="url(#lav-stem-${uid})" stroke-width="14" fill="none" />
          ${[
            [955, 450, 54, -30], [980, 580, 58, 25], [950, 720, 62, -35], [980, 860, 58, 30], [955, 1000, 54, -25]
          ].map(([x, y, r, ang]) => `
            <ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.52}" transform="rotate(${ang} ${x} ${y})" fill="url(#lav-petal-${uid})" />
            <circle cx="${x}" cy="${y}" r="${r * 0.22}" fill="#FFFFFF" opacity="0.8" />
          `).join("")}
        </g>

        <!-- Top Floral Lavender Spikes -->
        <g opacity="0.98">
          <path d="M 20 -100 Q 180 100 240 330" stroke="url(#lav-stem-${uid})" stroke-width="14" fill="none" />
          ${[
            [20, -50, 62, -35], [95, 10, 66, 40], [60, 70, 70, -30], [150, 135, 74, 30],
            [105, 205, 72, -25], [185, 275, 68, 25]
          ].map(([x, y, r, ang]) => `
            <ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.54}" transform="rotate(${ang} ${x} ${y})" fill="url(#lav-petal-${uid})" />
            <circle cx="${x}" cy="${y}" r="${r * 0.22}" fill="#FFFFFF" opacity="0.8" />
          `).join("")}

          <path d="M 500 -120 Q 525 90 535 300" stroke="url(#lav-stem-${uid})" stroke-width="12" fill="none" />
          ${[
            [470, -70, 56, -25], [530, -15, 60, 35], [485, 45, 64, -25], [540, 110, 64, 25],
            [495, 175, 62, -20], [545, 240, 58, 20]
          ].map(([x, y, r, ang]) => `
            <ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.54}" transform="rotate(${ang} ${x} ${y})" fill="url(#lav-petal-${uid})" />
            <circle cx="${x}" cy="${y}" r="${r * 0.22}" fill="#FFFFFF" opacity="0.8" />
          `).join("")}

          <path d="M 980 -100 Q 820 100 760 330" stroke="url(#lav-stem-${uid})" stroke-width="14" fill="none" />
          ${[
            [980, -50, 62, 35], [905, 10, 66, -40], [940, 70, 70, 30], [850, 135, 74, -30],
            [895, 205, 72, 25], [815, 275, 68, -25]
          ].map(([x, y, r, ang]) => `
            <ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.54}" transform="rotate(${ang} ${x} ${y})" fill="url(#lav-petal-${uid})" />
            <circle cx="${x}" cy="${y}" r="${r * 0.22}" fill="#FFFFFF" opacity="0.8" />
          `).join("")}
        </g>

        <!-- Bottom Lavender Sprigs -->
        <g opacity="0.98">
          <path d="M 40 1620 Q 180 1400 300 1190" stroke="url(#lav-stem-${uid})" stroke-width="14" fill="none" />
          ${[
            [300, 1190, 66, -35], [235, 1265, 70, 30], [175, 1340, 74, -30], [115, 1420, 76, 25],
            [55, 1500, 72, -20]
          ].map(([x, y, r, ang]) => `
            <ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.54}" transform="rotate(${ang} ${x} ${y})" fill="url(#lav-petal-${uid})" />
            <circle cx="${x}" cy="${y}" r="${r * 0.22}" fill="#FFFFFF" opacity="0.8" />
          `).join("")}

          <path d="M 960 1620 Q 820 1400 700 1190" stroke="url(#lav-stem-${uid})" stroke-width="14" fill="none" />
          ${[
            [700, 1190, 66, 35], [765, 1265, 70, -30], [825, 1340, 74, 30], [885, 1420, 76, -25],
            [945, 1500, 72, 20]
          ].map(([x, y, r, ang]) => `
            <ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.54}" transform="rotate(${ang} ${x} ${y})" fill="url(#lav-petal-${uid})" />
            <circle cx="${x}" cy="${y}" r="${r * 0.22}" fill="#FFFFFF" opacity="0.8" />
          `).join("")}
        </g>
      `;

    case "PEPPERMINT":
      return `
        <!-- Peppermint Botanical Canvas -->
        <defs>
          <linearGradient id="mnt-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#047857" />
            <stop offset="35%" stop-color="#10B981" />
            <stop offset="65%" stop-color="#A7F3D0" />
            <stop offset="100%" stop-color="#064E3B" />
          </linearGradient>
          <linearGradient id="mnt-leaf-l-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#6EE7B7" />
            <stop offset="40%" stop-color="#10B981" />
            <stop offset="100%" stop-color="#064E3B" />
          </linearGradient>
          <linearGradient id="mnt-leaf-d-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#34D399" />
            <stop offset="50%" stop-color="#059669" />
            <stop offset="100%" stop-color="#022C22" />
          </linearGradient>
        </defs>

        <rect width="${w}" height="${h}" fill="url(#mnt-bg-${uid})" />

        <!-- Side Foliage -->
        <g opacity="0.96">
          <path d="M -70 420 C 70 360 150 530 130 680 C 80 800 -70 730 -70 420 Z" fill="url(#mnt-leaf-d-${uid})" />
          <path d="M -70 820 C 80 760 160 930 130 1060 C 70 1170 -70 1100 -70 820 Z" fill="url(#mnt-leaf-l-${uid})" />

          <path d="M 1070 420 C 930 360 850 530 870 680 C 920 800 1070 730 1070 420 Z" fill="url(#mnt-leaf-d-${uid})" />
          <path d="M 1070 820 C 920 760 840 930 870 1060 C 930 1170 1070 1100 1070 820 Z" fill="url(#mnt-leaf-l-${uid})" />
        </g>

        <!-- Top Mint Foliage -->
        <g opacity="0.98">
          <path d="M -80 -80 C 100 -150 340 -70 380 120 C 400 240 300 320 150 290 C 0 250 -150 90 -80 -80 Z" fill="url(#mnt-leaf-l-${uid})" />
          <path d="M -10 -25 Q 190 80 290 190" stroke="#D1FAE5" stroke-width="8" fill="none" opacity="0.9" />
          <path d="M 90 20 Q 50 75 40 125 M 170 75 Q 130 130 125 185 M 235 130 Q 200 185 200 240" stroke="#D1FAE5" stroke-width="5" fill="none" opacity="0.8" />

          <path d="M 430 -90 C 590 -140 780 -30 800 110 C 810 210 705 280 570 250 C 420 210 340 40 430 -90 Z" fill="url(#mnt-leaf-d-${uid})" />
          <path d="M 500 -30 Q 640 70 720 170" stroke="#A7F3D0" stroke-width="7" fill="none" opacity="0.85" />

          <path d="M 1080 -80 C 900 -150 660 -70 620 120 C 600 240 700 320 850 290 C 1000 250 1150 90 1080 -80 Z" fill="url(#mnt-leaf-l-${uid})" />
          <path d="M 1010 -25 Q 810 80 710 190" stroke="#D1FAE5" stroke-width="8" fill="none" opacity="0.9" />
        </g>

        <!-- Bottom Curving Mint Leaves -->
        <g opacity="0.98">
          <path d="M -110 1310 C 80 1160 330 1190 430 1320 C 500 1420 445 1565 275 1585 C 105 1600 -140 1500 -110 1310 Z" fill="url(#mnt-leaf-d-${uid})" />
          <path d="M 10 1310 Q 220 1380 345 1470" stroke="#A7F3D0" stroke-width="8" fill="none" opacity="0.9" />

          <path d="M 350 1230 C 540 1140 790 1180 850 1340 C 890 1440 765 1560 600 1550 C 420 1540 245 1370 350 1230 Z" fill="url(#mnt-leaf-l-${uid})" />
          <path d="M 460 1255 Q 650 1335 750 1435" stroke="#D1FAE5" stroke-width="7" fill="none" opacity="0.9" />

          <path d="M 1110 1310 C 920 1160 670 1190 570 1320 C 500 1420 555 1565 725 1585 C 895 1600 1140 1500 1110 1310 Z" fill="url(#mnt-leaf-d-${uid})" />
          <path d="M 990 1310 Q 780 1380 655 1470" stroke="#A7F3D0" stroke-width="8" fill="none" opacity="0.9" />
        </g>
      `;

    case "ROSE":
      return `
        <!-- Rose Damascena Botanical Canvas -->
        <defs>
          <linearGradient id="ros-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#E11D48" />
            <stop offset="35%" stop-color="#FDA4AF" />
            <stop offset="65%" stop-color="#FFF1F2" />
            <stop offset="100%" stop-color="#9F1239" />
          </linearGradient>
          <radialGradient id="ros-petal-soft-${uid}" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#FFF1F2" />
            <stop offset="40%" stop-color="#FDA4AF" />
            <stop offset="80%" stop-color="#F43F5E" />
            <stop offset="100%" stop-color="#9F1239" />
          </radialGradient>
          <radialGradient id="ros-petal-deep-${uid}" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#FDA4AF" />
            <stop offset="50%" stop-color="#E11D48" />
            <stop offset="100%" stop-color="#881337" />
          </radialGradient>
        </defs>

        <rect width="${w}" height="${h}" fill="url(#ros-bg-${uid})" />

        <!-- Side Petals -->
        <g opacity="0.96">
          <path d="M -70 420 C 80 360 160 530 130 680 C 80 800 -70 730 -70 420 Z" fill="url(#ros-petal-deep-${uid})" />
          <path d="M -50 840 C 90 780 160 950 125 1080 C 70 1170 -70 1100 -50 840 Z" fill="url(#ros-petal-soft-${uid})" />

          <path d="M 1070 420 C 920 360 840 530 870 680 C 920 800 1070 730 1070 420 Z" fill="url(#ros-petal-deep-${uid})" />
          <path d="M 1050 840 C 910 780 840 950 875 1080 C 930 1170 1070 1100 1050 840 Z" fill="url(#ros-petal-soft-${uid})" />
        </g>

        <!-- Top Velvet Rose Petals -->
        <g opacity="0.98">
          <path d="M -90 -80 C 80 -170 300 -80 340 80 C 355 200 235 290 110 270 C -40 240 -160 70 -90 -80 Z" fill="url(#ros-petal-deep-${uid})" />
          <path d="M 30 -40 C 160 -90 280 -10 280 110 C 280 210 195 245 110 210 C 25 175 -10 70 30 -40 Z" fill="url(#ros-petal-soft-${uid})" />

          <path d="M 480 -80 C 650 -140 860 -80 870 50 C 880 160 760 235 620 220 C 475 210 395 70 480 -80 Z" fill="url(#ros-petal-soft-${uid})" />

          <path d="M 1090 -80 C 920 -170 700 -80 660 80 C 645 200 765 290 890 270 C 1040 240 1160 70 1090 -80 Z" fill="url(#ros-petal-deep-${uid})" />
          <path d="M 970 -40 C 840 -90 720 -10 720 110 C 720 210 805 245 890 210 C 975 175 1010 70 970 -40 Z" fill="url(#ros-petal-soft-${uid})" />
        </g>

        <!-- Bottom Velvet Rose Petals -->
        <g opacity="0.98">
          <path d="M -120 1290 C 105 1130 360 1170 420 1320 C 480 1450 390 1600 200 1610 C 25 1620 -170 1500 -120 1290 Z" fill="url(#ros-petal-deep-${uid})" />
          <path d="M 30 1245 C 220 1165 370 1245 380 1365 C 390 1470 305 1570 175 1550 C 45 1530 -40 1395 30 1245 Z" fill="url(#ros-petal-soft-${uid})" />

          <path d="M 460 1340 C 620 1205 900 1205 1050 1340 C 1120 1460 1040 1590 840 1600 C 640 1610 480 1520 460 1340 Z" fill="url(#ros-petal-soft-${uid})" />

          <path d="M 1120 1290 C 895 1130 640 1170 580 1320 C 520 1450 610 1600 800 1610 C 975 1620 1170 1500 1120 1290 Z" fill="url(#ros-petal-deep-${uid})" />
          <path d="M 970 1245 C 780 1165 630 1245 620 1365 C 610 1470 695 1570 825 1550 C 955 1530 1040 1395 970 1245 Z" fill="url(#ros-petal-soft-${uid})" />
        </g>
      `;

    case "EUCALYPTUS":
      return `
        <!-- Eucalyptus Botanical Canvas -->
        <defs>
          <linearGradient id="euc-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0F766E" />
            <stop offset="35%" stop-color="#5EEAD4" />
            <stop offset="65%" stop-color="#F0FDFA" />
            <stop offset="100%" stop-color="#115E59" />
          </linearGradient>
          <linearGradient id="euc-leaf-1-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#99F6E4" />
            <stop offset="40%" stop-color="#2DD4BF" />
            <stop offset="100%" stop-color="#0F766E" />
          </linearGradient>
          <linearGradient id="euc-leaf-2-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#5EEAD4" />
            <stop offset="50%" stop-color="#0D9488" />
            <stop offset="100%" stop-color="#134E4A" />
          </linearGradient>
        </defs>

        <rect width="${w}" height="${h}" fill="url(#euc-bg-${uid})" />

        <!-- Side Foliage -->
        <g opacity="0.96">
          <path d="M -60 440 C 90 380 170 530 135 670 C 80 780 -60 720 -60 440 Z" fill="url(#euc-leaf-1-${uid})" />
          <path d="M -60 840 C 100 780 180 930 145 1070 C 90 1180 -60 1120 -60 840 Z" fill="url(#euc-leaf-2-${uid})" />

          <path d="M 1060 440 C 910 380 830 530 865 670 C 920 780 1060 720 1060 440 Z" fill="url(#euc-leaf-1-${uid})" />
          <path d="M 1060 840 C 900 780 820 930 855 1070 C 910 1180 1060 1120 1060 840 Z" fill="url(#euc-leaf-2-${uid})" />
        </g>

        <!-- Top Foliage -->
        <g opacity="0.98">
          <path d="M -80 -80 Q 250 80 520 220" stroke="#042F2E" stroke-width="10" fill="none" opacity="0.6" />
          <path d="M 0 -45 C 125 -105 275 -35 310 70 C 320 160 225 230 110 195 C 5 160 -70 65 0 -45 Z" fill="url(#euc-leaf-1-${uid})" />
          <path d="M 220 20 C 345 -35 480 20 495 120 C 500 205 405 260 305 225 C 225 190 175 90 220 20 Z" fill="url(#euc-leaf-2-${uid})" />

          <path d="M 1080 -80 Q 750 80 480 220" stroke="#042F2E" stroke-width="10" fill="none" opacity="0.6" />
          <path d="M 1000 -45 C 875 -105 725 -35 690 70 C 680 160 775 230 890 195 C 995 160 1070 65 1000 -45 Z" fill="url(#euc-leaf-1-${uid})" />
          <path d="M 780 20 C 655 -35 520 20 505 120 C 500 205 595 260 695 225 C 775 190 825 90 780 20 Z" fill="url(#euc-leaf-2-${uid})" />
        </g>

        <!-- Bottom Foliage -->
        <g opacity="0.98">
          <path d="M -70 1620 Q 290 1480 530 1330" stroke="#042F2E" stroke-width="11" fill="none" opacity="0.6" />
          <path d="M 45 1360 C 195 1275 380 1310 435 1430 C 450 1515 365 1600 225 1590 C 90 1580 -20 1475 45 1360 Z" fill="url(#euc-leaf-1-${uid})" />
          <path d="M 300 1265 C 435 1185 605 1225 640 1345 C 660 1430 570 1515 450 1500 C 330 1490 245 1380 300 1265 Z" fill="url(#euc-leaf-2-${uid})" />

          <path d="M 1070 1620 Q 710 1480 470 1330" stroke="#042F2E" stroke-width="11" fill="none" opacity="0.6" />
          <path d="M 955 1360 C 805 1275 620 1310 565 1430 C 550 1515 635 1600 775 1590 C 910 1580 1020 1475 955 1360 Z" fill="url(#euc-leaf-1-${uid})" />
          <path d="M 700 1265 C 565 1185 395 1225 360 1345 C 340 1430 430 1515 550 1500 C 670 1490 755 1380 700 1265 Z" fill="url(#euc-leaf-2-${uid})" />
        </g>
      `;

    case "YLANG_YLANG":
      return `
        <!-- Ylang Ylang Botanical Canvas -->
        <defs>
          <linearGradient id="ylg-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#CA8A04" />
            <stop offset="35%" stop-color="#FACC15" />
            <stop offset="65%" stop-color="#FEFCE8" />
            <stop offset="100%" stop-color="#65A30D" />
          </linearGradient>
          <linearGradient id="ylg-petal-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FEF08A" />
            <stop offset="45%" stop-color="#FACC15" />
            <stop offset="100%" stop-color="#A16207" />
          </linearGradient>
          <linearGradient id="ylg-leaf-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#84CC16" />
            <stop offset="100%" stop-color="#166534" />
          </linearGradient>
        </defs>

        <rect width="${w}" height="${h}" fill="url(#ylg-bg-${uid})" />

        <!-- Side Petals & Tropical Leaves -->
        <g opacity="0.96">
          <path d="M -60 450 C 90 400 160 550 130 680 C 80 800 -60 740 -60 450 Z" fill="url(#ylg-leaf-${uid})" />
          <path d="M -40 820 C 100 760 170 930 130 1060 C 70 1170 -60 1100 -40 820 Z" fill="url(#ylg-petal-${uid})" />

          <path d="M 1060 450 C 910 400 840 550 870 680 C 920 800 1060 740 1060 450 Z" fill="url(#ylg-leaf-${uid})" />
          <path d="M 1040 820 C 900 760 830 930 870 1060 C 930 1170 1060 1100 1040 820 Z" fill="url(#ylg-petal-${uid})" />
        </g>

        <!-- Top Drooping Star Petals -->
        <g opacity="0.98">
          <path d="M 10 -40 C 110 65 180 185 130 275 C 90 215 65 105 -30 40 Z" fill="url(#ylg-petal-${uid})" />
          <path d="M 160 -50 C 260 75 350 195 300 285 C 245 210 190 85 115 30 Z" fill="url(#ylg-petal-${uid})" />
          <path d="M 340 -40 C 375 85 440 205 525 255 C 450 200 375 105 300 20 Z" fill="url(#ylg-petal-${uid})" />

          <path d="M 990 -40 C 890 65 820 185 870 275 C 910 215 935 105 1030 40 Z" fill="url(#ylg-petal-${uid})" />
          <path d="M 840 -50 C 740 75 650 195 700 285 C 755 210 810 85 885 30 Z" fill="url(#ylg-petal-${uid})" />
          <path d="M 660 -40 C 625 85 560 205 475 255 C 550 200 625 105 700 20 Z" fill="url(#ylg-petal-${uid})" />
        </g>

        <!-- Bottom Tropical Leaves & Petals -->
        <g opacity="0.98">
          <path d="M -50 1400 C 120 1300 330 1330 420 1465 C 310 1465 150 1435 -20 1560 Z" fill="url(#ylg-leaf-${uid})" />
          <path d="M 120 1300 C 245 1225 390 1290 420 1410 C 345 1395 220 1350 100 1410 Z" fill="url(#ylg-petal-${uid})" />

          <path d="M 1050 1400 C 880 1300 670 1330 580 1465 C 690 1465 850 1435 1020 1560 Z" fill="url(#ylg-leaf-${uid})" />
          <path d="M 880 1300 C 755 1225 610 1290 580 1410 C 655 1395 780 1350 900 1410 Z" fill="url(#ylg-petal-${uid})" />
        </g>
      `;

    case "CITRUS":
      return `
        <!-- Citrus Botanical Canvas -->
        <defs>
          <linearGradient id="cit-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#EA580C" />
            <stop offset="35%" stop-color="#FB923C" />
            <stop offset="65%" stop-color="#FFF7ED" />
            <stop offset="100%" stop-color="#15803D" />
          </linearGradient>
          <radialGradient id="cit-slice-${uid}" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#FEF08A" />
            <stop offset="55%" stop-color="#FB923C" />
            <stop offset="100%" stop-color="#C2410C" />
          </radialGradient>
          <linearGradient id="cit-leaf-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4ADE80" />
            <stop offset="60%" stop-color="#16A34A" />
            <stop offset="100%" stop-color="#14532D" />
          </linearGradient>
        </defs>

        <rect width="${w}" height="${h}" fill="url(#cit-bg-${uid})" />

        <!-- Side Citrus Orbs & Leaves -->
        <g opacity="0.96">
          <circle cx="-10" cy="550" r="110" fill="url(#cit-slice-${uid})" />
          <path d="M -30 850 C 90 790 170 940 140 1070 C 80 1170 -50 1110 -30 850 Z" fill="url(#cit-leaf-${uid})" />

          <circle cx="1010" cy="550" r="110" fill="url(#cit-slice-${uid})" />
          <path d="M 1030 850 C 910 790 830 940 860 1070 C 920 1170 1050 1110 1030 850 Z" fill="url(#cit-leaf-${uid})" />
        </g>

        <!-- Top Citrus Orbs & Blossoms -->
        <g opacity="0.98">
          <circle cx="100" cy="50" r="145" fill="url(#cit-slice-${uid})" />
          <path d="M 100 50 C 200 -35 325 -5 360 85 C 375 165 285 210 190 195 Z" fill="url(#cit-leaf-${uid})" />

          <g transform="translate(500, 80)">
            <ellipse cx="0" cy="-42" rx="20" ry="38" fill="#FFFFFF" />
            <ellipse cx="40" cy="-13" rx="20" ry="38" transform="rotate(72 40 -13)" fill="#FFFFFF" />
            <ellipse cx="25" cy="36" rx="20" ry="38" transform="rotate(144 25 36)" fill="#FFFFFF" />
            <ellipse cx="-25" cy="36" rx="20" ry="38" transform="rotate(216 -25 36)" fill="#FFFFFF" />
            <ellipse cx="-40" cy="-13" rx="20" ry="38" transform="rotate(288 -40 -13)" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="16" fill="#FACC15" />
          </g>

          <circle cx="900" cy="50" r="145" fill="url(#cit-slice-${uid})" />
          <path d="M 900 50 C 800 -35 675 -5 640 85 C 625 165 715 210 810 195 Z" fill="url(#cit-leaf-${uid})" />
        </g>

        <!-- Bottom Citrus Fruit Spread -->
        <g opacity="0.98">
          <circle cx="120" cy="1440" r="165" fill="url(#cit-slice-${uid})" />
          <path d="M 150 1360 C 300 1260 450 1300 500 1420 C 515 1495 410 1570 275 1550 Z" fill="url(#cit-leaf-${uid})" />

          <circle cx="880" cy="1440" r="165" fill="url(#cit-slice-${uid})" />
          <path d="M 850 1360 C 700 1260 550 1300 500 1420 C 485 1495 590 1570 725 1550 Z" fill="url(#cit-leaf-${uid})" />
        </g>
      `;

    case "SPICE_PODS":
      return `
        <!-- Spices & Pods Canvas -->
        <defs>
          <linearGradient id="spc-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#C2410C" />
            <stop offset="35%" stop-color="#D97706" />
            <stop offset="65%" stop-color="#FEF3C7" />
            <stop offset="100%" stop-color="#78350F" />
          </linearGradient>
          <linearGradient id="spc-cardamom-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#A3E635" />
            <stop offset="50%" stop-color="#65A30D" />
            <stop offset="100%" stop-color="#365314" />
          </linearGradient>
          <linearGradient id="spc-cinnamon-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#9A3412" />
            <stop offset="70%" stop-color="#451A03" />
          </linearGradient>
        </defs>

        <rect width="${w}" height="${h}" fill="url(#spc-bg-${uid})" />

        <!-- Side Spices -->
        <g opacity="0.96">
          <ellipse cx="20" cy="550" rx="46" ry="75" transform="rotate(-25 20 550)" fill="url(#spc-cardamom-${uid})" />
          <ellipse cx="980" cy="550" rx="46" ry="75" transform="rotate(25 980 550)" fill="url(#spc-cardamom-${uid})" />
        </g>

        <!-- Top Cardamom Pods & Clove Buds -->
        <g opacity="0.98">
          <ellipse cx="160" cy="60" rx="50" ry="80" transform="rotate(-30 160 60)" fill="url(#spc-cardamom-${uid})" />
          <line x1="160" y1="-20" x2="160" y2="140" stroke="#FEF08A" stroke-width="4.5" opacity="0.7" />

          <ellipse cx="840" cy="60" rx="50" ry="80" transform="rotate(30 840 60)" fill="url(#spc-cardamom-${uid})" />
          <line x1="840" y1="-20" x2="840" y2="140" stroke="#FEF08A" stroke-width="4.5" opacity="0.7" />

          <circle cx="500" cy="50" r="42" fill="url(#spc-cinnamon-${uid})" />
        </g>

        <!-- Bottom Cinnamon Quills -->
        <g opacity="0.98">
          <rect x="-40" y="1380" width="420" height="54" rx="18" transform="rotate(-12 170 1400)" fill="url(#spc-cinnamon-${uid})" />
          <rect x="20" y="1435" width="370" height="50" rx="16" transform="rotate(-8 205 1460)" fill="#78350F" />

          <rect x="620" y="1380" width="420" height="54" rx="18" transform="rotate(12 830 1400)" fill="url(#spc-cinnamon-${uid})" />
          <rect x="610" y="1435" width="370" height="50" rx="16" transform="rotate(8 795 1460)" fill="#78350F" />
        </g>
      `;

    case "CARRIER_NUT_SEED":
      return `
        <!-- Carrier Oils & Seed Kernels Canvas -->
        <defs>
          <linearGradient id="car-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#D97706" />
            <stop offset="35%" stop-color="#FDE68A" />
            <stop offset="65%" stop-color="#FEFCE8" />
            <stop offset="100%" stop-color="#15803D" />
          </linearGradient>
          <radialGradient id="almond-nut-${uid}" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#FEF08A" />
            <stop offset="60%" stop-color="#D97706" />
            <stop offset="100%" stop-color="#78350F" />
          </radialGradient>
          <linearGradient id="car-leaf-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4ADE80" />
            <stop offset="100%" stop-color="#15803D" />
          </linearGradient>
        </defs>

        <rect width="${w}" height="${h}" fill="url(#car-bg-${uid})" />

        <!-- Side Kernels -->
        <g opacity="0.96">
          <path d="M -40 520 C 60 490 110 590 80 680 C 40 750 -40 710 -40 520 Z" fill="url(#almond-nut-${uid})" />
          <path d="M 1040 520 C 940 490 890 590 920 680 C 960 750 1040 710 1040 520 Z" fill="url(#almond-nut-${uid})" />
        </g>

        <!-- Top Almond / Botanical Kernels -->
        <g opacity="0.98">
          <path d="M 130 -20 C 220 -20 260 60 220 140 C 185 205 105 180 85 100 C 55 35 75 -20 130 -20 Z" fill="url(#almond-nut-${uid})" />
          <path d="M 230 20 C 320 -35 410 10 420 85 C 425 150 355 190 275 165 Z" fill="url(#car-leaf-${uid})" />

          <path d="M 870 -20 C 780 -20 740 60 780 140 C 815 205 895 180 915 100 C 945 35 925 -20 870 -20 Z" fill="url(#almond-nut-${uid})" />
          <path d="M 770 20 C 680 -35 590 10 580 85 C 575 150 645 190 725 165 Z" fill="url(#car-leaf-${uid})" />
        </g>

        <!-- Bottom Kernels & Leaves -->
        <g opacity="0.98">
          <path d="M 70 1380 C 180 1315 295 1345 320 1440 C 345 1515 260 1585 155 1555 Z" fill="url(#almond-nut-${uid})" />
          <path d="M 225 1330 C 340 1265 465 1305 490 1400 C 500 1465 425 1530 320 1520 Z" fill="url(#car-leaf-${uid})" />

          <path d="M 930 1380 C 820 1315 705 1345 680 1440 C 655 1515 740 1585 845 1555 Z" fill="url(#almond-nut-${uid})" />
          <path d="M 775 1330 C 660 1265 535 1305 510 1400 C 500 1465 575 1530 680 1520 Z" fill="url(#car-leaf-${uid})" />
        </g>
      `;

    case "WOODS_RESIN":
      return `
        <!-- Woods & Resins Canvas -->
        <defs>
          <linearGradient id="wd-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#92400E" />
            <stop offset="35%" stop-color="#D97706" />
            <stop offset="65%" stop-color="#FEF3C7" />
            <stop offset="100%" stop-color="#78350F" />
          </linearGradient>
          <radialGradient id="wd-resin-${uid}" cx="45%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#FEF08A" />
            <stop offset="60%" stop-color="#F59E0B" />
            <stop offset="100%" stop-color="#B45309" />
          </radialGradient>
        </defs>

        <rect width="${w}" height="${h}" fill="url(#wd-bg-${uid})" />

        <!-- Top Woodgrain & Cedar Sprigs -->
        <g opacity="0.98">
          <ellipse cx="140" cy="50" rx="60" ry="90" transform="rotate(-30 140 50)" fill="url(#wd-resin-${uid})" />
          <ellipse cx="860" cy="50" rx="60" ry="90" transform="rotate(30 860 50)" fill="url(#wd-resin-${uid})" />
          <circle cx="500" cy="60" r="50" fill="url(#wd-resin-${uid})" />
        </g>

        <!-- Bottom Amber Tears -->
        <g opacity="0.98">
          <circle cx="140" cy="1420" r="110" fill="url(#wd-resin-${uid})" />
          <circle cx="860" cy="1420" r="110" fill="url(#wd-resin-${uid})" />
        </g>
      `;

    default: // General Botanical Foliage
      return `
        <!-- Natural Botanical Leaves Background -->
        <defs>
          <linearGradient id="gen-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#047857" />
            <stop offset="35%" stop-color="#6EE7B7" />
            <stop offset="65%" stop-color="#F0FDF4" />
            <stop offset="100%" stop-color="#065F46" />
          </linearGradient>
          <linearGradient id="gen-leaf-1-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#34D399" />
            <stop offset="50%" stop-color="#10B981" />
            <stop offset="100%" stop-color="#064E3B" />
          </linearGradient>
          <linearGradient id="gen-leaf-2-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4ADE80" />
            <stop offset="100%" stop-color="#15803D" />
          </linearGradient>
        </defs>

        <rect width="${w}" height="${h}" fill="url(#gen-bg-${uid})" />

        <!-- Side Foliage -->
        <g opacity="0.96">
          <path d="M -60 450 C 90 390 170 540 135 680 C 80 800 -60 740 -60 450 Z" fill="url(#gen-leaf-1-${uid})" />
          <path d="M -60 840 C 100 780 180 930 145 1060 C 90 1170 -60 1110 -60 840 Z" fill="url(#gen-leaf-2-${uid})" />

          <path d="M 1060 450 C 910 390 830 540 865 680 C 920 800 1060 740 1060 450 Z" fill="url(#gen-leaf-1-${uid})" />
          <path d="M 1060 840 C 900 780 820 930 855 1060 C 910 1170 1060 1110 1060 840 Z" fill="url(#gen-leaf-2-${uid})" />
        </g>

        <!-- Top Foliage -->
        <g opacity="0.98">
          <path d="M -30 -50 C 130 -120 320 -50 350 90 C 365 190 260 260 140 225 C 10 190 -75 65 -30 -50 Z" fill="url(#gen-leaf-1-${uid})" />
          <path d="M 330 -40 C 445 -90 610 -15 620 95 C 625 185 540 230 435 210 Z" fill="url(#gen-leaf-2-${uid})" />

          <path d="M 1030 -50 C 870 -120 680 -50 650 90 C 635 190 740 260 860 225 C 990 190 1075 65 1030 -50 Z" fill="url(#gen-leaf-1-${uid})" />
          <path d="M 670 -40 C 555 -90 390 -15 380 95 C 375 185 460 230 565 210 Z" fill="url(#gen-leaf-2-${uid})" />
        </g>

        <!-- Bottom Foliage -->
        <g opacity="0.98">
          <path d="M 35 1350 C 190 1260 400 1295 445 1420 C 470 1520 345 1600 210 1570 Z" fill="url(#gen-leaf-1-${uid})" />
          <path d="M 965 1350 C 810 1260 600 1295 555 1420 C 530 1520 655 1600 790 1570 Z" fill="url(#gen-leaf-1-${uid})" />
        </g>
      `;
  }
}

/**
 * Generates the clean reference label SVG with proportional front-facing placement matching the user's uploaded photo.
 */
export function generateLabelSvg(props: LabelProps): string {
  const w = 1000;
  const h = 1500;

  const uid = (props.slug || "label").replace(/[^a-zA-Z0-9]/g, "");
  const archetype = detectPlantArchetype(props.slug, props.name, props.category);

  // Exact lowercase name formatting matching reference bottles
  const displayName = formatLabelProductName(props.name);

  // Purity & Category Subtitles matching reference photo
  let subtitle1 = "100% PURE";
  let subtitle2 = "ESSENTIAL OIL";

  switch (props.category) {
    case "CARRIER_OIL":
      subtitle1 = "100% PURE";
      subtitle2 = "CARRIER OIL";
      break;
    case "SPICE_OIL":
      subtitle1 = "100% PURE";
      subtitle2 = "ESSENTIAL OIL";
      break;
    case "FLORAL_ABSOLUTE":
      subtitle1 = "ESSENTIAL OIL";
      subtitle2 = "BLEND";
      break;
    case "OLEORESIN":
      subtitle1 = "100% STANDARDIZED";
      subtitle2 = "OLEORESIN";
      break;
    case "ORGANIC_OIL":
      subtitle1 = "100% PURE";
      subtitle2 = "ESSENTIAL OIL";
      break;
    case "AYURVEDIC":
      subtitle1 = "ESSENTIAL OIL";
      subtitle2 = "BLEND";
      break;
    default:
      subtitle1 = "100% PURE";
      subtitle2 = "ESSENTIAL OIL";
      break;
  }

  // Accurate volume string based on bottle format
  const volumeText = getAccurateVolumeText(props.bottleFormat);

  // Balanced  // Proportional centered white card dimensions:
  const cardX = 130;
  const cardY = 300;
  const cardW = 740;
  const cardH = 880;

  // Left-aligned margin coordinate inside the white card:
  const leftX = 200;

  // Circular seal accent color
  const sealColor = props.signatureColor || "#059669";

  // Check if name has 2 words and is long -> split onto 2 lines for clean bold typography
  const words = displayName.split(" ");
  const isMultiLine = words.length >= 2 && displayName.length > 10;

  let nameXml = "";
  let sub1Y = 740;
  let sub2Y = 795;

  if (isMultiLine) {
    const line1 = words[0];
    const line2 = words.slice(1).join(" ");
    nameXml = `
      <text
        x="${leftX}"
        y="545"
        text-anchor="start"
        font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Helvetica, Arial, sans-serif"
        font-size="82"
        font-weight="900"
        letter-spacing="-1"
        fill="#18181B"
      >${escapeXml(line1)}</text>
      <text
        x="${leftX}"
        y="635"
        text-anchor="start"
        font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Helvetica, Arial, sans-serif"
        font-size="82"
        font-weight="900"
        letter-spacing="-1"
        fill="#18181B"
      >${escapeXml(line2)}</text>
    `;
    sub1Y = 745;
    sub2Y = 800;
  } else {
    let singleFontSize = 104;
    if (displayName.length > 14) singleFontSize = 74;
    else if (displayName.length > 9) singleFontSize = 90;

    nameXml = `
      <text
        x="${leftX}"
        y="590"
        text-anchor="start"
        font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Helvetica, Arial, sans-serif"
        font-size="${singleFontSize}"
        font-weight="900"
        letter-spacing="-1"
        fill="#18181B"
      >${escapeXml(displayName)}</text>
    `;
    sub1Y = 715;
    sub2Y = 770;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Soft realistic drop shadow for central white card -->
    <filter id="card-shadow-${uid}" x="-10%" y="-10%" width="125%" height="125%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="rgba(0,0,0,0.28)" />
    </filter>
  </defs>

  <!-- 1. Full 360 Botanical Plant Species Background (Leaves, Flowers, Stems) -->
  ${renderBotanicalPlantBackground(archetype, uid)}

  <!-- 2. Central Clean White Label Card (Framed by top, bottom, and side botanical visuals) -->
  <rect
    x="${cardX}"
    y="${cardY}"
    width="${cardW}"
    height="${cardH}"
    rx="28"
    ry="28"
    fill="#FFFFFF"
    filter="url(#card-shadow-${uid})"
  />
  <rect
    x="${cardX}"
    y="${cardY}"
    width="${cardW}"
    height="${cardH}"
    rx="28"
    ry="28"
    fill="none"
    stroke="rgba(0, 0, 0, 0.05)"
    stroke-width="1.5"
  />

  <!-- 3. Top Brand Header: Customizable White-Label Logo Placeholder -->
  <g>
    <!-- Elegant Minimalist White-Label Frame -->
    <rect
      x="${leftX}"
      y="380"
      width="430"
      height="50"
      rx="10"
      ry="10"
      fill="rgba(124, 58, 237, 0.03)"
      stroke="#9CA3AF"
      stroke-width="1.8"
      stroke-dasharray="6,4"
    />
    <text
      x="${leftX + 20}"
      y="414"
      text-anchor="start"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Helvetica, Arial, sans-serif"
      font-size="24"
      font-weight="800"
      letter-spacing="3.5"
      fill="#4B5563"
    >YOUR LOGO HERE</text>
    <text
      x="${leftX + 335}"
      y="413"
      text-anchor="start"
      font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Helvetica, Arial, sans-serif"
      font-size="14"
      font-weight="700"
      letter-spacing="1.5"
      fill="#8B5CF6"
    >• OEM</text>
  </g>

  <!-- 4. Main Product Name in Bold Lowercase -->
  ${nameXml}

  <!-- 5. Purity Subtitle Line 1: 100% PURE -->
  <text
    x="${leftX}"
    y="${sub1Y}"
    text-anchor="start"
    font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Helvetica, Arial, sans-serif"
    font-size="38"
    font-weight="800"
    letter-spacing="2.5"
    fill="#374151"
  >${escapeXml(subtitle1)}</text>

  <!-- 6. Category Classification Line 2: ESSENTIAL OIL -->
  <text
    x="${leftX}"
    y="${sub2Y}"
    text-anchor="start"
    font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Helvetica, Arial, sans-serif"
    font-size="38"
    font-weight="800"
    letter-spacing="2.5"
    fill="#374151"
  >${escapeXml(subtitle2)}</text>

  <!-- 7. Bottom Row: Volume Accurate to Bottle Type (.33oz | 10 mL e, 3.4oz | 100 mL e, 6.8oz | 200 mL e) -->
  <text
    x="${leftX}"
    y="1080"
    text-anchor="start"
    font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Helvetica, Arial, sans-serif"
    font-size="38"
    font-weight="700"
    letter-spacing="0.5"
    fill="#4B5563"
  >${escapeXml(volumeText)}</text>

  <!-- 8. Bottom Row: Circular Custom White-Label Seal on the Right -->
  <g transform="translate(730, 1060)">
    <!-- Thin Circular Ring with dashed custom indicator -->
    <circle cx="0" cy="0" r="48" fill="none" stroke="#6B7280" stroke-width="3" stroke-dasharray="7,3" />
    
    <!-- Stylized Botanical Sprout Branch -->
    <path d="M -15 22 C -7 7 8 -10 20 -22" fill="none" stroke="${sealColor}" stroke-width="4" stroke-linecap="round" />
    <!-- Leaf 1 (Top Tip) -->
    <path d="M 20 -22 Q 35 -35 38 -18 Q 23 -12 20 -22 Z" fill="${sealColor}" />
    <!-- Leaf 2 (Upper Right) -->
    <path d="M 8 -10 Q 23 -23 26 -6 Q 11 0 8 -10 Z" fill="${sealColor}" />
    <!-- Leaf 3 (Lower Left) -->
    <path d="M -3 5 Q -20 -5 -20 13 Q -6 13 -3 5 Z" fill="${sealColor}" />
  </g>
</svg>
`;
}
