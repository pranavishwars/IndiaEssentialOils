#!/usr/bin/env python3
"""
India Essential Oils — Phase 9: Authentic Factory Label 3D Bottle Compositing Pipeline
Rendered with crisp diffuse matte paper texture and luminous botanical pastel wash.
"""

import os
import json
import math
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
LABELS_DIR = os.path.join(ROOT_DIR, "public/labels")
OUTPUT_DIR = os.path.join(ROOT_DIR, "public/products")
TEMPLATES_DIR = os.path.join(ROOT_DIR, "public/templates")

os.makedirs(OUTPUT_DIR, exist_ok=True)

# Precision geometry & lighting configurations (Full Wrap-Around, zero spill):
FORMAT_CONFIGS = {
    "DROPPER_10ML": {
        "template_file": "template_DROPPER_10ML.jpg",
        "zone": {"x": 411, "y": 560, "w": 202, "h": 270},
        "theta_max": 1.22,
        "curve_amt": 5,
        "highlight_col": 445,
        "sheen_strength": 10,
    },
    "BOTTLE_100ML": {
        "template_file": "template_BOTTLE_100ML.jpg",
        "zone": {"x": 377, "y": 428, "w": 270, "h": 418},
        "theta_max": 1.20,
        "curve_amt": 9,
        "highlight_col": 425,
        "sheen_strength": 14,
    },
    "BOTTLE_200ML": {
        "template_file": "template_BOTTLE_200ML.jpg",
        "zone": {"x": 374, "y": 420, "w": 277, "h": 408},
        "theta_max": 1.18,
        "curve_amt": 8,
        "highlight_col": 420,
        "sheen_strength": 12,
    },
}

def determine_correct_bottle_format(category, slug, current_format):
    """Assigns the physically accurate bottle format based on category & botanical rarity."""
    dropper_slugs = {
        "rose-damascena-oil", "rose-oil", "rose-damascena-absolute", "jasmine-sambac-absolute",
        "chamomile-oil-blue", "chamomile-oil-roman", "champaca-oil", "lotus-oil", "blue-lotus-oil",
        "helichrysum-oil", "costus-root-oil", "davana-oil", "kewra-oil", "neroli-oil", "agarwood-oil",
        "lemon-balm-oil", "coffee-oil", "cypriol-oil"
    }
    if slug in dropper_slugs or category == "FLORAL_ABSOLUTE":
        return "DROPPER_10ML"

    if category in ["CARRIER_OIL", "OLEORESIN"]:
        return "BOTTLE_200ML"

    if category == "AYURVEDIC":
        if "tailam" in slug or "oil" in slug:
            return "BOTTLE_200ML"
        return "BOTTLE_100ML"

    return "BOTTLE_100ML"

def load_products():
    """Extracts product metadata from products-store.ts."""
    import subprocess
    cmd = ["npx", "tsx", "-e", "import { INITIAL_PRODUCTS } from './src/lib/products-store'; console.log(JSON.stringify(INITIAL_PRODUCTS.map(p => ({ slug: p.slug, name: p.name, category: p.category, bottleFormat: p.bottleFormat }))));"]
    res = subprocess.run(cmd, cwd=ROOT_DIR, capture_output=True, text=True, check=True)
    products = json.loads(res.stdout)
    for p in products:
        p["bottleFormat"] = determine_correct_bottle_format(p["category"], p["slug"], p.get("bottleFormat"))
    return products

def warp_label_cylindrical(label_img, zone_w, zone_h, theta_max, curve_amt):
    """
    Applies cylindrical projection with cosine compression, U-shaped bottom curve,
    cylindrical ambient shading, and full edge-to-edge solid opacity (zero glass gap).
    """
    lw, lh = label_img.size
    pad_h = curve_amt + 24
    warped = Image.new("RGBA", (zone_w, zone_h + pad_h), (0, 0, 0, 0))

    for dest_x in range(zone_w):
        norm_dest_x = (dest_x - zone_w / 2.0) / (zone_w / 2.0)
        norm_dest_x = max(-0.9999, min(0.9999, norm_dest_x))

        theta = math.asin(norm_dest_x * math.sin(theta_max))
        norm_src_x = theta / theta_max
        src_x = int((norm_src_x + 1.0) / 2.0 * lw)
        src_x = max(0, min(lw - 1, src_x))

        # TRUE U-SHAPED CURVE: Center dips downward along the bottle's circular base ellipse
        vert_offset = int(math.cos(theta) * curve_amt)

        col_slice = label_img.crop((src_x, 0, src_x + 1, lh))
        col_slice = col_slice.resize((1, zone_h), Image.Resampling.BICUBIC)

        # Cylindrical curvature shading (100% solid opacity across ALL dest_x, zero glass gap)
        cos_shade = 0.84 + 0.16 * math.cos(theta)

        # Extremely crisp 1px anti-aliased silhouette edge ONLY at the exact boundary
        edge_dist = abs(norm_dest_x)
        alpha_mul = 1.0
        if edge_dist > 0.992:
            alpha_mul = max(0.0, (1.0 - edge_dist) / 0.008)

        r, g, b, a = col_slice.split()
        r = ImageEnhance.Brightness(r).enhance(cos_shade)
        g = ImageEnhance.Brightness(g).enhance(cos_shade)
        b = ImageEnhance.Brightness(b).enhance(cos_shade)
        a = a.point(lambda v: int(v * alpha_mul))
        shaded_slice = Image.merge("RGBA", (r, g, b, a))

        warped.paste(shaded_slice, (dest_x, vert_offset), shaded_slice)

    return warped

def composite_product(product, templates_cache):
    slug = product["slug"]
    b_format = product.get("bottleFormat") or "BOTTLE_100ML"
    if b_format not in FORMAT_CONFIGS:
        b_format = "BOTTLE_100ML"

    cfg = FORMAT_CONFIGS[b_format]
    label_path = os.path.join(LABELS_DIR, f"{slug}.png")

    if not os.path.exists(label_path):
        print(f"  [!] Label not found for {slug}, skipping.")
        return False

    bottle = templates_cache[b_format].copy()
    label = Image.open(label_path).convert("RGBA")

    zone = cfg["zone"]
    warped_label = warp_label_cylindrical(
        label, zone["w"], zone["h"], cfg["theta_max"], cfg["curve_amt"]
    )

    # 1. Alpha composite clean matte diffuse paper label onto the bottle
    composite = bottle.copy()
    composite.alpha_composite(warped_label, (zone["x"], zone["y"]))

    # 2. Add subtle studio light sheen column
    sheen = Image.new("RGBA", composite.size, (0, 0, 0, 0))
    hl_col = cfg.get("highlight_col", zone["x"] + 45)
    hl_width = 35
    strength = cfg.get("sheen_strength", 22)

    for x in range(zone["x"], zone["x"] + zone["w"]):
        dist = abs(x - hl_col)
        if dist < hl_width:
            alpha = int(strength * math.cos(dist / float(hl_width) * (math.pi / 2)))
            for y in range(zone["y"], zone["y"] + zone["h"]):
                sheen.putpixel((x, y), (255, 255, 255, alpha))

    composite.alpha_composite(sheen)

    # Save output WebP and JPEG
    out_webp = os.path.join(OUTPUT_DIR, f"{slug}.webp")
    out_jpg = os.path.join(OUTPUT_DIR, f"{slug}.jpg")

    final_rgb = composite.convert("RGB")
    final_rgb.save(out_webp, "WEBP", quality=95)
    final_rgb.save(out_jpg, "JPEG", quality=95)
    return True

def main():
    print("\n🍾  Loading bottle templates…")
    templates_cache = {}
    for fmt, cfg in FORMAT_CONFIGS.items():
        tmpl_path = os.path.join(TEMPLATES_DIR, cfg["template_file"])
        templates_cache[fmt] = Image.open(tmpl_path).convert("RGBA")
        print(f"  ✓ Loaded template for {fmt}: {cfg['template_file']}")

    products = load_products()
    print(f"\n🚀  Compositing authentic factory-matched 3D bottles for {len(products)} products…\n")

    count = 0
    for product in products:
        if composite_product(product, templates_cache):
            count += 1
            if count % 25 == 0 or count == len(products):
                print(f"  ✓ {count}/{len(products)} composites generated ({product['slug']}.webp)")

    print(f"\n✅  Completed authentic 3D compositing for {count} products in public/products/\n")

if __name__ == "__main__":
    main()
