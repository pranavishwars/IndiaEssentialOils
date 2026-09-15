const fs = require("fs");
const path = require("path");

const storePath = path.join(__dirname, "../src/lib/products-store.ts");
const rawPath = "/Users/pranavishwar/.gemini/antigravity-ide/brain/3b2af1c9-874f-4809-9c67-d0961d9deb55/scratch/oleoresins-raw-sections.json";

const storeContent = fs.readFileSync(storePath, "utf8");
const scraped = JSON.parse(fs.readFileSync(rawPath, "utf8"));

const scrapedMap = {};
scraped.forEach(s => {
  scrapedMap[s.slug] = s;
});

function cleanText(t) {
  if (!t) return "";
  return t.replace(/&#150;/g, "–")
          .replace(/&#187;/g, "»")
          .replace(/&szlig;/g, "ß")
          .replace(/&nbsp;/g, " ")
          .replace(/\s+/g, " ")
          .trim();
}

function getPlantPart(slug) {
  if (slug.includes("seed")) return "dried seeds";
  if (slug.includes("capsicum") || slug.includes("paprika") || slug.includes("pepper")) return "dried fruits / berries";
  if (slug.includes("clove")) return "dried flower buds";
  if (slug.includes("cardamom")) return "dried ripe fruit pods";
  if (slug.includes("ginger")) return "dried rhizomes";
  if (slug.includes("onion")) return "fresh bulbs";
  if (slug.includes("mace")) return "dried arils of nutmeg fruit";
  if (slug.includes("nutmeg")) return "dried seeds (nutmeg kernels)";
  if (slug.includes("rosemary") || slug.includes("basil") || slug.includes("oregano")) return "dried leaves";
  if (slug.includes("asafoetida")) return "gum oleoresin exudate";
  return "dried spice material";
}

// Find INITIAL_PRODUCTS array block
const match = storeContent.match(/export const INITIAL_PRODUCTS: Product\[\] = (\[[\s\S]*?\n\]);/);
if (!match) {
  console.error("Could not find INITIAL_PRODUCTS");
  process.exit(1);
}

const products = JSON.parse(match[1]);
const matchStart = match.index;
const matchEnd = match.index + match[0].length;

let updatedCount = 0;

products.forEach(p => {
  if (p.category === "OLEORESIN") {
    const sc = scrapedMap[p.slug];
    if (!sc) {
      console.warn("No scraped data found for oleoresin:", p.slug);
      return;
    }

    const t = sc.tableData || {};
    const s = sc.sections || {};

    const botanical = cleanText(t["Botanical Name"]) || p.botanicalName;
    const extraction = cleanText(t["Extraction Method"] || t["Extraction"]) || "Solvent Extraction";
    const plantPart = getPlantPart(p.slug);
    const appearance = cleanText(t["Appearance"] || t["Color & Odor"]) || "Characteristic appearance and odor";
    const solubility = cleanText(t["Solubility"]);
    const flavor = cleanText(t["Flavor"] || t["Odor"]);
    const cas = cleanText(t["CAS #"]);
    const einecs = cleanText(t["EINEC"] || t["EINECS"]);
    const majorConsts = cleanText(s["Major Constituents"]);
    const spec = cleanText(s["Specification"]);
    const desc = cleanText(s["Description"]);
    const blends = cleanText(s["Blends Offered"]);
    const shelf = cleanText(s["Shelf Life"]);

    // 1. Overview
    const overviewParts = [];
    overviewParts.push(`${p.name} (${botanical}), obtained by ${extraction} from ${plantPart}.`);
    if (cas) overviewParts.push(`CAS #: ${cas}.`);
    if (einecs) overviewParts.push(`EINECS: ${einecs}.`);
    if (solubility) overviewParts.push(`Solubility: ${solubility}.`);
    if (flavor) overviewParts.push(`Flavor: ${flavor}.`);
    if (majorConsts) overviewParts.push(`Major Constituents: ${majorConsts}.`);
    if (spec) overviewParts.push(`Specification: ${spec}.`);
    overviewParts.push(`Supplied as 100% authentic spice oleoresin extract, batch-verified for active compound strength, volatile oil percentage, and conforming to ISO 9001:2015 and GMP export standards.`);
    p.overview = overviewParts.join(" ");

    // 2. History
    const historyParts = [];
    historyParts.push(`Color & Odor: ${appearance}.`);
    if (desc) historyParts.push(`Description: ${desc}`);
    if (blends) historyParts.push(`Blends Offered: ${blends}`);
    if (shelf) historyParts.push(`Shelf Life: ${shelf}`);
    historyParts.push(`Packaged in UN-certified export containers with tamper-evident seals and nitrogen head-spacing. Accompanied by lot-specific Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), and comprehensive technical data sheets.`);
    p.history = historyParts.join(" ");

    // 3. Description
    if (desc) {
      p.description = desc;
    }

    updatedCount++;
  }
});

console.log(`Updated ${updatedCount} Oleoresin products.`);

const newContent = storeContent.substring(0, matchStart) + "export const INITIAL_PRODUCTS: Product[] = " + JSON.stringify(products, null, 2) + ";" + storeContent.substring(matchEnd);
fs.writeFileSync(storePath, newContent, "utf8");
console.log("Successfully wrote updated products back to src/lib/products-store.ts");
