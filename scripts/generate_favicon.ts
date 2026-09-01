import fs from "fs";
import path from "path";
import sharp from "sharp";

async function main() {
  const inputPath = "/Users/pranavishwar/.gemini/antigravity-ide/brain/3b2af1c9-874f-4809-9c67-d0961d9deb55/.user_uploaded/media_1788297781288.png";
  
  console.log("Processing tight-crop logo emblem from:", inputPath);

  // Exact tight pixel bounds of the emblem:
  // minX: 311, minY: 105, maxX: 667, maxY: 555 -> width: 356, height: 450
  const tightCropBox = {
    left: 310,
    top: 104,
    width: 358,
    height: 452,
  };

  // 1. Tight crop the emblem with zero outer margin
  const cropped = sharp(inputPath).extract(tightCropBox);

  // 2. Make white background transparent with smooth anti-aliased alpha
  const { data, info } = await cropped.raw().toBuffer({ resolveWithObject: true });
  const numPixels = info.width * info.height;
  const outputData = Buffer.alloc(numPixels * 4);

  for (let i = 0; i < numPixels; i++) {
    const srcIdx = i * info.channels;
    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];
    const a = info.channels === 4 ? data[srcIdx + 3] : 255;

    const brightness = (r + g + b) / 3;
    const maxColor = Math.max(r, g, b);
    const minColor = Math.min(r, g, b);
    const saturation = maxColor - minColor;

    let alpha = a;
    if (brightness > 246 && saturation < 10) {
      alpha = 0;
    } else if (brightness > 230 && saturation < 18) {
      const factor = (246 - brightness) / 16;
      alpha = Math.round(a * Math.max(0, Math.min(1, factor)));
    }

    const destIdx = i * 4;
    outputData[destIdx] = r;
    outputData[destIdx + 1] = g;
    outputData[destIdx + 2] = b;
    outputData[destIdx + 3] = alpha;
  }

  // 3. Maximize emblem scale to fill 500px of the 512px canvas (98% fill, zero wasted space)
  const emblemPngBuffer = await sharp(outputData, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .resize({
      width: 500,
      height: 500,
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  // 4. Center on 512x512 canvas
  const final512Png = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      {
        input: emblemPngBuffer,
        gravity: "center",
      },
    ])
    .png()
    .toBuffer();

  // 5. Generate 180x180 Apple Touch Icon
  const appleIconPng = await sharp(final512Png)
    .resize(180, 180)
    .png()
    .toBuffer();

  // 6. Generate 32x32 and 48x48 Favicon PNG / ICO
  const favicon32Png = await sharp(final512Png)
    .resize(32, 32)
    .png()
    .toBuffer();

  const favicon48Png = await sharp(final512Png)
    .resize(48, 48)
    .png()
    .toBuffer();

  // 7. Write to all target locations
  fs.writeFileSync(path.join(__dirname, "../src/app/icon.png"), final512Png);
  fs.writeFileSync(path.join(__dirname, "../src/app/apple-icon.png"), appleIconPng);
  fs.writeFileSync(path.join(__dirname, "../src/app/favicon.ico"), favicon48Png);
  fs.writeFileSync(path.join(__dirname, "../public/icon.png"), final512Png);
  fs.writeFileSync(path.join(__dirname, "../public/apple-icon.png"), appleIconPng);
  fs.writeFileSync(path.join(__dirname, "../public/favicon.ico"), favicon48Png);
  fs.writeFileSync(path.join(__dirname, "../public/favicon-32x32.png"), favicon32Png);

  console.log("\n✅ Maximized tight-crop favicon generated with edge-to-edge prominence!\n");
}

main().catch(console.error);
