import fs from "fs";
import path from "path";

const productsStorePath = path.resolve(__dirname, "../src/lib/products-store.ts");
let fileContent = fs.readFileSync(productsStorePath, "utf-8");

const carrierReplacements: [RegExp | string, string][] = [
  ["Intensive Lipid Barrier Restoration", "Deep Hydration & Skin Barrier Support"],
  ["Reinforces the stratum corneum with bio-identical fatty acids to prevent trans-epidermal water loss (TEWL).", "Rich in natural essential fatty acids (oleic and linoleic) that lock in moisture and nourish dry skin."],
  ["Non-Comedogenic Dermal Nutrition", "Antioxidant Rich & Clean Absorption"],
  ["Delivers high natural tocopherols and phytosterols to soothe oxidative cellular stress without clogging pores.", "Packed with natural Vitamin E and phytosterols to soothe skin without feeling greasy or heavy."],
  ["Versatile Carrier Vehicle", "Carrier Base for Essential Oils"],
  ["Serves as an optimal solubilizing and penetration-enhancing base for essential oils and cosmetic actives.", "Ideal blending base for essential oils, massage blends, body lotions, and hair care products."],
  [/Single-pass cold expeller pressed from non-GMO seeds of ([^.]+)\. Rich in bio-compatible essential fatty acids and natural lipid-soluble antioxidants, offering superb skin emollience, rapid dermal absorption, and high oxidative stability for cosmetic formulation\./g, "100% pure cold-pressed carrier oil extracted mechanically from selected non-GMO seeds of $1. High in natural fatty acids and Vitamin E, ideal for cosmetics, body lotions, massage oils, and personal care formulations."],
  [/Employed for millennia across Mediterranean, Ayurvedic, and traditional skincare rituals as nourishing lipid bases and medicinal carriers\. Sustainably harvested in partnership with smallholder farming clusters and pressed using friction-controlled expellers that preserve delicate tocopherols and essential fatty acids\./g, "Mechanically expeller-pressed in our processing plant without solvent extraction or external chemical refining. Filtered and packed under inert nitrogen blanket in 50kg to 200kg drums for international export."],
];

for (const [pattern, replacement] of carrierReplacements) {
  fileContent = typeof pattern === "string" 
    ? fileContent.replaceAll(pattern, replacement)
    : fileContent.replace(pattern, replacement);
}

fs.writeFileSync(productsStorePath, fileContent, "utf-8");
console.log("Updated carrier oil descriptions and humanized copy.");
