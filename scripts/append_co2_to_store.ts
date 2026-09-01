import fs from "fs";
import path from "path";
import { CO2_PRODUCTS } from "./seed_co2_products";

const STORE_PATH = path.join(__dirname, "../src/lib/products-store.ts");
let fileContent = fs.readFileSync(STORE_PATH, "utf-8");

// Check which products are not yet in products-store.ts
const missingProducts = CO2_PRODUCTS.filter(p => !fileContent.includes(`"${p.slug}"`));

if (missingProducts.length === 0) {
  console.log("All CO2 products are already in products-store.ts");
  process.exit(0);
}

console.log(`Adding ${missingProducts.length} CO2 products to products-store.ts...`);

// Format the missing products as JSON entries with 4-space indentation
const formattedProducts = missingProducts.map(p => {
  return JSON.stringify(p, null, 4)
    .split("\n")
    .map((line, idx) => (idx === 0 ? "  " + line : "  " + line))
    .join("\n");
}).join(",\n");

// Insert right before `\n];\n\n// ============================`
const target = "\n];\n\n// ============================";
if (!fileContent.includes(target)) {
  console.error("Could not find end of INITIAL_PRODUCTS in products-store.ts");
  process.exit(1);
}

fileContent = fileContent.replace(
  target,
  `,\n${formattedProducts}\n];\n\n// ============================`
);

fs.writeFileSync(STORE_PATH, fileContent, "utf-8");
console.log(`✅ Successfully appended ${missingProducts.length} CO2 products to products-store.ts.`);
