import fs from "fs";
import path from "path";
import sharp from "sharp";
import { INITIAL_PRODUCTS } from "../../src/lib/products-store";
import { deriveSignatureColor } from "../../src/lib/signature-colors";
import { generateLabelSvg } from "./generate_label_svg";

const LABELS_DIR = path.join(__dirname, "../../public/labels");
fs.mkdirSync(LABELS_DIR, { recursive: true });

async function main() {
  console.log(`\n🏷️  Generating authentic botanical photo labels for ${INITIAL_PRODUCTS.length} products…\n`);

  let count = 0;
  for (const product of INITIAL_PRODUCTS) {
    const signatureColor = product.signatureColor || deriveSignatureColor(product.name, product.category);
    const svg = generateLabelSvg({
      name: product.name,
      botanicalName: product.botanicalName,
      category: product.category,
      shortSpec: product.shortSpec,
      slug: product.slug,
      bottleFormat: product.bottleFormat,
      signatureColor,
    });

    const outPng = path.join(LABELS_DIR, `${product.slug}.png`);
    await sharp(Buffer.from(svg))
      .png({ quality: 100 })
      .toFile(outPng);

    count++;
    if (count % 25 === 0 || count === INITIAL_PRODUCTS.length) {
      console.log(`  ✓ ${count}/${INITIAL_PRODUCTS.length} botanical labels generated (${product.slug}.png)`);
    }
  }

  console.log(`\n✅ Generated ${count} botanical label PNGs in public/labels/\n`);
}

main().catch(err => {
  console.error("Error generating labels:", err);
  process.exit(1);
});
