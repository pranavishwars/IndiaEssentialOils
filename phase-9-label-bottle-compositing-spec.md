# Phase 9 — Automated Product Label Generation & Bottle Compositing

Extends the main build spec (Phase 3's image-templating concept) with a fully executable pipeline. This phase turns "template + layered label" from an idea into a concrete two-stage system: (1) generate a flat, print-accurate label image per product, and (2) warp and composite that flat label realistically onto the correct bottle photo for that product's category. **Read this whole document before writing any code or touching the provided reference image.**

**Inputs provided alongside this spec:**
- One reference label image (attached separately) showing the general design language — ornamental border, floral emblem, wreath, product name, botanical name, and descriptor line. **This reference photo has slight perspective/lens curvature baked in from how it was photographed — it is not yet a usable flat template.** Correcting this is the first task (Section 2), not something to route around.

---

## 1. System overview

Two independent asset types feed the pipeline, and they must stay decoupled — never bake bottle-specific distortion into a label asset, and never bake product-specific text into a bottle asset:

1. **Label templates** — flat, 2D, rectangular artwork per product category (essential oil label layout vs. carrier oil label layout, etc.), generated fresh per product with the right name/botanical name/descriptor/signature color, but otherwise undistorted and perspective-free.
2. **Bottle templates** — one clean, high-res, evenly-lit master photograph per bottle format, each with a predefined **label placement mesh** describing exactly how a flat rectangle maps onto that bottle's curved surface, plus an extracted **lighting/shading map** used to make the composited label look physically printed on the glass rather than pasted on top of it.

```
Reference photo (curved, imperfect)
        │
        ▼  (Section 2 — one-time rectification)
Flat master label template (perspective-free, per category)
        │
        ▼  (Section 3-4 — per product, automated)
Flat label image: [Product Name] + [Botanical Name] + [Descriptor] + [Signature Color]
        │
        ▼  (Section 6 — per product, automated)
Mesh-warped + shaded label, matched to the correct bottle template's geometry
        │
        ▼
Final composited product photo → Product.compositeImageUrl
```

---

## 2. Step 1 — Rectify the reference image into a true flat template (do this first, once)

The provided reference photo has curvature from the angle/lens it was shot at — if this distortion is used as-is as the base template, it will compound with the bottle-warp step later and produce a visibly wrong, doubly-curved result. Fix it before it enters the pipeline.

1. **Identify the reference frame's true geometry.** The label's outer border lines (top and bottom horizontal rules, the label's overall rounded-rectangle shape) should be straight/uniformly curved by design, not by photo distortion. Use the visible ornamental border lines as calibration guides.
2. **Apply a perspective/lens correction pass** (e.g. `cv2.getPerspectiveTransform` + `cv2.warpPerspective` in Python/OpenCV, or Photoshop's Lens Correction / Perspective Warp) to map the photographed border curves back to true straight horizontal lines and a true rectangular (or intentionally-designed rounded-rectangle, per the actual label die-cut shape) outer boundary.
3. **Verify correction visually**: overlay a straight horizontal grid on the corrected image — the top and bottom ornamental rule lines should now sit parallel and level, not bowed.
4. **Output**: one clean, flat, high-resolution master template PNG/SVG per label layout with the perspective artifact fully removed. This corrected file — not the original reference photo — is what every future step in this pipeline uses as the base.
5. If a vector re-creation is feasible (redrawing the border flourish, floral emblem, and wreath as clean vector art based on the reference's design rather than only photo-correcting the raster) prefer that — vector source scales cleanly to any bottle size and avoids upscaling artifacts later. If time-constrained, a well-corrected raster is an acceptable fallback for v1.

---

## 3. Label layout: fixed elements vs. variable slots

Once the flat master template exists, define exactly which parts are **fixed** (identical on every label, carrying brand identity) and which are **variable** (change per product):

**Fixed on every label (do not alter per product):**
- Overall border/frame layout, corner flourish style, the arching double-line rule top and bottom
- The wreath illustration at the bottom
- Typography choice and layout position for each text line (same fonts, same relative sizing/placement every time)
- Background parchment/cream tone

**Variable per product:**
| Slot | Source | Example |
|---|---|---|
| Product name (large serif headline) | `Product.name` | "Lemongrass" |
| Botanical/scientific name (italic subtitle) | new `Product.botanicalName` field | "Cymbopogon flexuosus" |
| Descriptor line | derived from `Product.category` | "100% Pure Organic Essential Oil" / "Cold-Pressed Carrier Oil" / "Pure Hydrosol" |
| Signature accent color | new `Product.signatureColor` field (Section 4) | a specific green/purple/amber hex value |

**What the signature color actually recolors:** the floral emblem, the wreath, and the ornamental border lines — i.e. every green element in the reference photo becomes this product's signature color instead. Text stays a fixed dark ink color (near-black or a fixed deep brown) on every label regardless of signature color, exactly as in the reference — do not recolor the text itself, since legibility and brand consistency depend on that staying constant.

---

## 4. Signature color logic

Each product gets one signature accent color, chosen to intuitively match the oil itself rather than assigned randomly or reused identically across the whole catalog — this is what makes each label feel specific to its product while the layout stays consistent.

**Default derivation table** (use as a starting mapping; allow a manual per-product override field for cases where a specific SKU should differ from its category default):

| Oil family / examples | Suggested signature color direction |
|---|---|
| Citrus (lemongrass, lemon, orange, bergamot) | Fresh green to yellow-green |
| Floral (lavender, rose, jasmine, geranium) | Purple to soft pink |
| Minty/camphoraceous (peppermint, eucalyptus, tea tree) | Teal to cool blue-green |
| Woody (sandalwood, cedarwood, vetiver) | Warm brown to amber |
| Herbal (rosemary, basil, clary sage) | Deep forest green |
| Spice (clove, cinnamon, ginger) | Deep red to burnt orange |
| Carrier oils generally (almond, jojoba, coconut) | Warm gold/amber, distinct from the essential-oil greens so the two categories feel visually distinguishable even before reading the descriptor line |

**Implementation approach:**
1. Store `signatureColor` as a hex value directly on the `Product` record (add this field — see Section 8) rather than deriving it live at render time, so it's stable, auditable, and manually adjustable.
2. Seed the initial value per product using the table above based on category/subcategory, then allow a human to review and adjust any that look wrong before the batch label-generation run — don't fully automate color choice with zero review pass, since "does this feel right for the oil" is a judgment call worth a quick human check the first time.
3. Ensure every generated signature color maintains sufficient contrast against the cream/parchment background (the same accessibility contrast principle used elsewhere in this project) — validate this programmatically (contrast ratio check) as part of the generation script, not just by eye.

---

## 5. Generating the flat per-product label (automated)

1. Load the rectified flat master template from Section 2 as a base layer (or as an SVG template with named text/color slots, which is the cleaner approach if a vector version exists).
2. Recolor the fixed green ornamental elements (emblem, wreath, border lines) to the product's `signatureColor` — if working from a vector source, this is a direct fill-color swap; if working from a corrected raster, isolate the green channel via a hue-based mask and remap it to the target hue while preserving the original's shading/line detail (don't flatten the artwork to a solid color and lose the line art's depth).
3. Render the three text slots (name, botanical name, descriptor) into their fixed positions using the template's established typography — auto-shrink font size gracefully for unusually long product names rather than letting text overflow the label's border.
4. Output one clean, flat PNG (or high-res raster export from SVG) per product: this is `Product.labelImageUrl`.
5. Batch this step across the catalog only after manually reviewing 5–10 outputs for text overflow, color-contrast issues, and any recoloring artifacts — the same "validate a small batch before scaling" principle already established in Phase 3 of the main spec.

---

## 6. Bottle templates — one per category, shared across every product in that category

**Core rule restated from the brief: every product within a category shares exactly one bottle photograph. Only the label differs. Do not create bottle-photo variants within a category.**

Recommended category → bottle format mapping (extend the `BottleFormat` enum from the main spec if a needed shape isn't already listed, e.g. add `HYDROSOL_SPRAY` if hydrosols are in scope):

| Product category | Bottle format | Typical shape |
|---|---|---|
| Essential Oil | `DROPPER_10ML` | Small amber/dark glass bottle, dropper cap — one shared template for every essential oil SKU |
| Carrier Oil | `BOTTLE_100ML` / `BOTTLE_200ML` | Larger clear or green glass bottle, flip-cap or pump |
| Hydrosol / hydro oil | `HYDROSOL_SPRAY` *(add to enum if needed)* | Frosted glass spray bottle |
| Organic Oil | Same bottle as its underlying type (essential vs. carrier) — organic is a designation, not a distinct physical format, unless the client specifically wants a visually distinct organic-line bottle |
| Ayurvedic | Define one dedicated shared bottle/jar format if this line has a genuinely different physical product (e.g. a jar vs. a bottle); otherwise reuse the closest existing format |

**Per bottle template, capture/define the following once:**
1. A clean, high-resolution, evenly and diffusely lit studio photo of the empty bottle, front-facing, in the exact orientation every generated product photo will use.
2. **A label placement mesh** — not just a flat 4-corner quad, since bottles are curved. Define a grid of control points (e.g. a 5×3 or 6×4 grid) tracing exactly how a flat rectangular label would sit against the bottle's visible curvature: top edge curve, bottom edge curve, and how much the left/right edges recede/foreshorten toward the bottle's visible "equator" line where the surface curves away from camera.
3. **A lighting/shading map** extracted from the same bottle photo — a grayscale pass capturing the highlights, shadows, and any glass reflections visible on the bottle's surface in the label's placement zone. This is what gets blended back on top of the warped label in Section 7 to make it look physically adhered to glass rather than flatly overlaid.
4. Store all of this once per bottle format, reused for every product in that category — this is the entire point of the templating approach: the expensive setup (photography + mesh + lighting map) happens once, not per SKU.

---

## 7. Warping and compositing the label onto the bottle (per product, automated)

This is the step most likely to look "uncanny" if done as a simple flat perspective warp — bottles are cylindrical, not planar, so a naive 4-point homography (like a simple book-cover mockup) will look subtly wrong, especially at the label's left/right edges. Do it as a proper mesh warp instead:

1. **Mesh-based warp, not a flat homography.** Use the flat label image and the bottle template's label placement mesh (Section 6) to perform a piecewise/mesh warp — e.g. `skimage.transform.PiecewiseAffineTransform` or a thin-plate-spline warp mapping the flat label's grid onto the bottle mesh's corresponding curved grid. A single 4-point perspective transform is not sufficient for a cylindrical surface and will produce visibly incorrect curvature at the label edges — this is the most common cause of a "pasted-on sticker" look and must be avoided.
2. **Edge falloff.** The far left and right edges of the label (where the bottle's surface curves away from the camera) should fade in opacity/darken slightly rather than end in a hard vertical line — this simulates the label wrapping around and out of view rather than looking like a flat sticker stopped short.
3. **Reapply the bottle's lighting/shading map** on top of the warped label using a multiply or overlay blend mode, at a moderate strength — this reintroduces the bottle's real highlights, shadows, and glass reflections on top of the label art, which is what actually sells the effect as "printed on the bottle" rather than "image pasted on top of a photo." Skipping this step is the single most common reason a template-based composite looks fake.
4. **Do not add independent, mismatched shadow/lighting effects to the label layer itself** (e.g. a generic drop shadow filter) — any lighting cue on the label must come from the bottle template's own captured lighting map so it's physically consistent with the actual photo, not a generic Photoshop-filter effect layered on top of a different lighting setup.
5. **Output**: the final flattened composite image → `Product.compositeImageUrl`, used across search results, category listings, and the Phase 5 product-page gallery.
6. **Validate manually before batching** — per the same principle in Phase 3/5, generate composites for 10–15 real products across every bottle format in use, at both thumbnail size and full product-page size, and check specifically for: visible seams at the label edges, any doubled/compounded curvature (a sign Section 2's rectification wasn't applied first), and lighting mismatches. Only batch-run the remaining catalog after this passes review.

---

## 8. Data model additions

Add the following to the `Product` model already defined in the main spec:

```prisma
model Product {
  // ...existing fields from main spec + Phase 5 additions...
  botanicalName    String?   // e.g. "Cymbopogon flexuosus"
  signatureColor   String?   // hex value, e.g. "#3A6B45"
  labelImageUrl    String?   // flat generated label (Section 5 output)
  // compositeImageUrl already exists from the main spec — this phase is what actually populates it
}
```

Also persist the bottle-template assets (photo, mesh control points, lighting map) as static files/config per `BottleFormat`, not as database rows tied to individual products — they are shared category-level assets, not per-product data.

---

## 9. Acceptance checklist

- [ ] Reference label image has been rectified into a true flat master template (Section 2) before being used as a base for anything else
- [ ] Fixed vs. variable label elements are clearly separated in the generation script — no accidental per-product changes to border/wreath/layout beyond color and text
- [ ] Signature color derivation table applied and manually reviewed for at least one product per oil family before batch generation
- [ ] Every generated label's signature color passes a contrast check against the parchment background
- [ ] One shared bottle template exists per `BottleFormat`, and no two products in the same category use visually different bottle photos
- [ ] Each bottle template has a defined label placement mesh (not a flat 4-point quad) and an extracted lighting/shading map
- [ ] Compositing uses a mesh/piecewise warp, not a single flat perspective transform
- [ ] Bottle's lighting/shading map is reapplied on top of the warped label via blend mode — verified visually, not just implemented
- [ ] Label edges show falloff/fade rather than a hard cutoff at the bottle's curve
- [ ] Manual validation pass completed on 10–15 real products across every bottle format before running the full batch
- [ ] No product ships with a broken or missing composite image — placeholder fallback confirmed working for any product still pending generation
