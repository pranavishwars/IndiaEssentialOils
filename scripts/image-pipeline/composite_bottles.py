#!/usr/bin/env python3
"""
India Essential Oils — Automated Product Image Compositing Pipeline
Generates studio-quality 3D composite bottle images for all catalog SKUs.
"""

import os
import json
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance

CONFIG_PATH = os.path.join(os.path.dirname(__file__), "templates_config.json")
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "../../public/products")

with open(CONFIG_PATH, "r") as f:
    TEMPLATES_CONFIG = json.load(f)

# Ensure output directory exists
os.makedirs(OUTPUT_DIR, exist_ok=True)

# List of products to generate
PRODUCTS = [
  {
    "id": "prod-lavender",
    "slug": "lavender-oil",
    "name": "Lavender Oil",
    "botanicalName": "Lavandula angustifolia",
    "format": "BOTTLE_100ML",
    "spec": "Steam Distilled · Kashmir",
    "volume": "100 ML",
    "accentColor": "#6B4C82"
  },
  {
    "id": "prod-peppermint",
    "slug": "peppermint-oil",
    "name": "Peppermint Oil",
    "botanicalName": "Mentha piperita",
    "format": "BOTTLE_100ML",
    "spec": "High Menthol · Uttar Pradesh",
    "volume": "100 ML",
    "accentColor": "#2D6A4F"
  },
  {
    "id": "prod-tea-tree",
    "slug": "tea-tree-oil",
    "name": "Tea Tree Oil",
    "botanicalName": "Melaleuca alternifolia",
    "format": "BOTTLE_100ML",
    "spec": "Terpinen-4-ol >40%",
    "volume": "100 ML",
    "accentColor": "#3D5A40"
  },
  {
    "id": "prod-frankincense",
    "slug": "frankincense-oil",
    "name": "Frankincense Oil",
    "botanicalName": "Boswellia serrata",
    "format": "BOTTLE_100ML",
    "spec": "Hydro-Distilled · India",
    "volume": "100 ML",
    "accentColor": "#8B5E3C"
  },
  {
    "id": "prod-eucalyptus",
    "slug": "eucalyptus-oil",
    "name": "Eucalyptus Oil",
    "botanicalName": "Eucalyptus globulus",
    "format": "BOTTLE_100ML",
    "spec": "Cineole 80-85% · Nilgiris",
    "volume": "100 ML",
    "accentColor": "#2A6F68"
  },
  {
    "id": "prod-lemongrass",
    "slug": "lemongrass-oil",
    "name": "Lemongrass Oil",
    "botanicalName": "Cymbopogon flexuosus",
    "format": "BOTTLE_100ML",
    "spec": "Citral >75% · Kerala",
    "volume": "100 ML",
    "accentColor": "#7E8D34"
  },
  {
    "id": "prod-rosemary",
    "slug": "rosemary-oil",
    "name": "Rosemary Oil",
    "botanicalName": "Rosmarinus officinalis",
    "format": "BOTTLE_100ML",
    "spec": "1,8-Cineole Type · Pure",
    "volume": "100 ML",
    "accentColor": "#405948"
  },
  {
    "id": "prod-sandalwood",
    "slug": "sandalwood-oil",
    "name": "Indian Sandalwood",
    "botanicalName": "Santalum album",
    "format": "DROPPER_10ML",
    "spec": "Hydro-Distilled · Santalol >90%",
    "volume": "10 ML",
    "accentColor": "#9C6644"
  },
  {
    "id": "prod-black-pepper",
    "slug": "black-pepper-oil",
    "name": "Black Pepper Oil",
    "botanicalName": "Piper nigrum",
    "format": "BOTTLE_100ML",
    "spec": "Steam Distilled · Kerala",
    "volume": "100 ML",
    "accentColor": "#3E3B32"
  },
  {
    "id": "prod-cardamom",
    "slug": "cardamom-oil",
    "name": "Cardamom Oil",
    "botanicalName": "Elettaria cardamomum",
    "format": "BOTTLE_100ML",
    "spec": "Green Cardamom · Idukki",
    "volume": "100 ML",
    "accentColor": "#4A6B4E"
  },
  {
    "id": "prod-cinnamon-bark",
    "slug": "cinnamon-bark-oil",
    "name": "Cinnamon Bark Oil",
    "botanicalName": "Cinnamomum zeylanicum",
    "format": "BOTTLE_100ML",
    "spec": "Cinnamaldehyde >70%",
    "volume": "100 ML",
    "accentColor": "#803828"
  },
  {
    "id": "prod-jojoba",
    "slug": "golden-jojoba-oil",
    "name": "Golden Jojoba Oil",
    "botanicalName": "Simmondsia chinensis",
    "format": "BOTTLE_200ML",
    "spec": "Cold Pressed · Unrefined",
    "volume": "200 ML",
    "accentColor": "#B8860B"
  },
  {
    "id": "prod-argan",
    "slug": "argan-carrier-oil",
    "name": "Virgin Argan Oil",
    "botanicalName": "Argania spinosa",
    "format": "BOTTLE_200ML",
    "spec": "Cold Pressed · 100% Pure",
    "volume": "200 ML",
    "accentColor": "#A06D3B"
  },
  {
    "id": "prod-sweet-almond",
    "slug": "sweet-almond-oil",
    "name": "Sweet Almond Oil",
    "botanicalName": "Prunus amygdalus dulcis",
    "format": "BOTTLE_200ML",
    "spec": "Expeller Pressed · Pure",
    "volume": "200 ML",
    "accentColor": "#9B7E4B"
  },
  {
    "id": "prod-rose-absolute",
    "slug": "rose-damascena-absolute",
    "name": "Rose Absolute",
    "botanicalName": "Rosa damascena",
    "format": "DROPPER_10ML",
    "spec": "Pure Floral Absolute · Luxury",
    "volume": "10 ML",
    "accentColor": "#8E3B56"
  },
  {
    "id": "prod-jasmine-sambac",
    "slug": "jasmine-sambac-absolute",
    "name": "Jasmine Absolute",
    "botanicalName": "Jasminum sambac",
    "format": "DROPPER_10ML",
    "spec": "Madurai Mogra · Fine Grade",
    "volume": "10 ML",
    "accentColor": "#5E4B66"
  },
  {
    "id": "prod-rose-water",
    "slug": "pure-rose-water-hydrosol",
    "name": "Rose Floral Water",
    "botanicalName": "Rosa damascena distillate",
    "format": "BOTTLE_200ML",
    "spec": "Hydro-Distilled · Alcohol Free",
    "volume": "200 ML",
    "accentColor": "#9E4770"
  },
  {
    "id": "prod-capsicum-oleoresin",
    "slug": "capsicum-oleoresin",
    "name": "Capsicum Extract",
    "botanicalName": "Capsicum annuum",
    "format": "BOTTLE_200ML",
    "spec": "Standardized SHU · Pure",
    "volume": "200 ML",
    "accentColor": "#9E2A2B"
  },
  {
    "id": "prod-organic-lavender",
    "slug": "certified-organic-lavender-oil",
    "name": "Organic Lavender",
    "botanicalName": "Lavandula angustifolia (Org)",
    "format": "BOTTLE_100ML",
    "spec": "USDA Organic · Steam Distilled",
    "volume": "100 ML",
    "accentColor": "#58427C"
  },
  {
    "id": "prod-kumkumadi",
    "slug": "kumkumadi-tailam",
    "name": "Kumkumadi Tailam",
    "botanicalName": "Classical Ayurvedic Formula",
    "format": "BOTTLE_100ML",
    "spec": "Kashmiri Saffron Infused",
    "volume": "100 ML",
    "accentColor": "#B45309"
  },
  {
    "id": "prod-bhringraj",
    "slug": "bhringraj-herbal-oil",
    "name": "Bhringraj Scalp Oil",
    "botanicalName": "Eclipta alba in Sesame Oil",
    "format": "BOTTLE_200ML",
    "spec": "Ayurvedic Pharmacopoeia Grade",
    "volume": "200 ML",
    "accentColor": "#2C4C38"
  }
]

def create_label(product, width, height):
    """Generates a luxury apothecary minimalist label with typography and decorative rules."""
    # Base label: warm luxury cream background
    label = Image.new("RGBA", (width, height), (250, 247, 240, 255))
    draw = ImageDraw.Draw(label)

    # Outer fine border (inset 8px)
    margin = 8
    draw.rectangle(
        [(margin, margin), (width - margin, height - margin)],
        outline=(190, 175, 155, 200),
        width=1
    )
    # Inner border (inset 12px)
    inner_margin = 12
    draw.rectangle(
        [(inner_margin, inner_margin), (width - inner_margin, height - inner_margin)],
        outline=(210, 195, 180, 120),
        width=1
    )

    # Fonts
    try:
        font_brand = ImageFont.truetype("/System/Library/Fonts/Times.ttc", int(height * 0.048))
        font_title = ImageFont.truetype("/System/Library/Fonts/Times.ttc", int(height * 0.082))
        font_bot = ImageFont.truetype("/System/Library/Fonts/Georgia.ttf", int(height * 0.046))
        font_spec = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", int(height * 0.038))
        font_footer = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", int(height * 0.036))
    except Exception:
        font_brand = font_title = font_bot = font_spec = font_footer = ImageFont.load_default()

    # 1. Brand Header
    brand_text = "INDIA ESSENTIAL OILS"
    bbox_brand = draw.textbbox((0, 0), brand_text, font=font_brand)
    w_brand = bbox_brand[2] - bbox_brand[0]
    draw.text(((width - w_brand) // 2, int(height * 0.10)), brand_text, fill=(74, 59, 82), font=font_brand)

    # Gold Divider Line
    line_y = int(height * 0.19)
    line_w = int(width * 0.55)
    draw.line([((width - line_w) // 2, line_y), ((width + line_w) // 2, line_y)], fill=(185, 150, 110), width=1)

    # 2. Product Name (Center hero)
    name_text = product["name"].upper()
    # Split into 2 lines if long
    if len(name_text) > 14 and " " in name_text:
        parts = name_text.rsplit(" ", 1)
        lines = [parts[0], parts[1]]
    else:
        lines = [name_text]

    y_offset = int(height * 0.30)
    for line in lines:
        bbox_name = draw.textbbox((0, 0), line, font=font_title)
        w_name = bbox_name[2] - bbox_name[0]
        draw.text(((width - w_name) // 2, y_offset), line, fill=(45, 36, 56), font=font_title)
        y_offset += int(height * 0.09)

    # 3. Botanical Subtitle
    bot_text = f"({product['botanicalName']})"
    bbox_bot = draw.textbbox((0, 0), bot_text, font=font_bot)
    w_bot = bbox_bot[2] - bbox_bot[0]
    draw.text(((width - w_bot) // 2, int(height * 0.55)), bot_text, fill=(120, 100, 130), font=font_bot)

    # 4. Thin divider
    line_y2 = int(height * 0.65)
    draw.line([((width - line_w) // 2, line_y2), ((width + line_w) // 2, line_y2)], fill=(210, 195, 180), width=1)

    # 5. Extraction Spec & Origin
    spec_text = product["spec"]
    bbox_spec = draw.textbbox((0, 0), spec_text, font=font_spec)
    w_spec = bbox_spec[2] - bbox_spec[0]
    draw.text(((width - w_spec) // 2, int(height * 0.72)), spec_text, fill=(74, 59, 82), font=font_spec)

    # 6. Footer (Volume & Purity Seal)
    footer_text = f"100% PURE & NATURAL  ·  {product['volume']}"
    bbox_footer = draw.textbbox((0, 0), footer_text, font=font_footer)
    w_footer = bbox_footer[2] - bbox_footer[0]
    draw.text(((width - w_footer) // 2, int(height * 0.85)), footer_text, fill=(130, 115, 100), font=font_footer)

    return label


def apply_cylindrical_warp_and_lighting(label, curve_strength=0.12):
    """
    Applies cylindrical side-darkening and curve shading to mimic a 3D glass cylinder.
    """
    w, h = label.size
    warped = label.copy()
    
    # Create shadow overlay for cylinder edges
    gradient = Image.new("L", (w, h), 0)
    for x in range(w):
        # Normalized distance from center (-1 to 1)
        nx = (x - (w / 2)) / (w / 2)
        # Cosine shading dropoff on sides
        factor = math.pow(abs(nx), 2.2)
        shadow_val = int(factor * 110)
        for y in range(h):
            gradient.putpixel((x, y), shadow_val)

    # Invert shadow overlay to black with alpha
    shadow_img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    shadow_img.putalpha(gradient)
    
    warped.alpha_composite(shadow_img)
    return warped


def composite_product(product):
    """Composites product label onto matching bottle template."""
    fmt = product.get("format", "BOTTLE_100ML")
    cfg = TEMPLATES_CONFIG.get(fmt, TEMPLATES_CONFIG["BOTTLE_100ML"])
    
    template_path = os.path.join(os.path.dirname(__file__), "../../", cfg["template_path"])
    if not os.path.exists(template_path):
        print(f"[WARN] Template missing: {template_path}")
        return False

    template = Image.open(template_path).convert("RGBA")
    zone = cfg["zone"]
    
    # 1. Generate crisp high-res label
    label_w = zone["width"]
    label_h = zone["height"]
    label = create_label(product, label_w, label_h)
    
    # 2. Apply 3D cylindrical lighting & shading
    shaded_label = apply_cylindrical_warp_and_lighting(label, cfg.get("cylinder_curve", 0.12))
    
    # 3. Paste onto template
    template.alpha_composite(shaded_label, (zone["x"], zone["y"]))
    
    # 4. Glass reflection specular highlight streak across bottle and label
    highlight = Image.new("RGBA", template.size, (255, 255, 255, 0))
    h_draw = ImageDraw.Draw(highlight)
    # Left specular streak
    streak_x1 = zone["x"] + int(label_w * 0.15)
    streak_x2 = streak_x1 + int(label_w * 0.08)
    h_draw.rectangle([(streak_x1, zone["y"] - 30), (streak_x2, zone["y"] + label_h + 30)], fill=(255, 255, 255, 38))
    
    # Blur highlight
    highlight = highlight.filter(ImageFilter.GaussianBlur(radius=6))
    template.alpha_composite(highlight)
    
    # 5. Save output WebP and JPG
    out_webp = os.path.join(OUTPUT_DIR, f"{product['slug']}.webp")
    out_jpg = os.path.join(OUTPUT_DIR, f"{product['slug']}.jpg")
    
    # Convert RGBA to RGB for webp/jpg
    final_rgb = template.convert("RGB")
    final_rgb.save(out_webp, "WEBP", quality=92)
    final_rgb.save(out_jpg, "JPEG", quality=90)
    
    print(f"[SUCCESS] Generated: {product['slug']}.webp ({product['name']})")
    return True


def main():
    print(f"Starting Product Image Pipeline for {len(PRODUCTS)} SKUs...")
    count = 0
    for p in PRODUCTS:
        if composite_product(p):
            count += 1
    print(f"\nPipeline complete! Successfully generated {count}/{len(PRODUCTS)} studio product images.")


if __name__ == "__main__":
    main()
