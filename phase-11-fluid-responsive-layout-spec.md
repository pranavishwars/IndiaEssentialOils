# Phase 11 — Fluid Responsive Layout Overhaul

Extends all prior phases, especially Phase 6 (mobile layout) and Phase 10 (animations). **This phase is a root-cause fix, not a patch.** The symptoms reported — buttons overlapping and text becoming invisible on some screen sizes while the laptop view looks fine — are not isolated bugs to fix one at a time. They are signals that the underlying layout system is built on **fixed, breakpoint-specific assumptions** (hardcoded pixel positions/sizes, absolute positioning used for structural layout, font sizes that don't scale, z-index values picked ad hoc per component) rather than a genuinely fluid system that works at *any* size by construction.

**Do not chase these bugs one at a time by adding more breakpoint-specific overrides.** That approach is exactly what caused the current problem — every additional `@media` patch bolted onto a non-fluid base makes the system more fragile, not less. This phase replaces the underlying approach so the bug class stops occurring at all, everywhere, permanently.

---

## 1. Diagnosis — why this class of bug happens

Before rebuilding anything, understand what's actually causing "works on my laptop, breaks elsewhere":

| Symptom | Most likely root cause |
|---|---|
| Buttons overlapping each other | Structural layout built with `position: absolute`/`fixed` and hardcoded `top`/`left`/`width` values instead of Flexbox/Grid — absolute positioning doesn't reflow when content or viewport size changes, so two elements positioned for a 1440px screen collide at 375px |
| Text becoming invisible | Fixed pixel font sizes combined with fixed-height/fixed-width containers cause text to overflow and get clipped by `overflow: hidden`, or a `clamp()`/responsive font calculation is missing and the text renders at 0 or near-0 size at some viewport width, or a color/opacity value tied to a specific breakpoint's theme logic doesn't apply correctly at other sizes |
| "Works on my laptop" specifically | The site was very likely built and eyeballed at one common desktop resolution only, with breakpoint CSS added reactively per screen rather than the base layout being fluid from the start — this is the core architectural gap this phase closes |

**The fix is architectural: replace fixed values with fluid, context-aware sizing everywhere, and replace absolute-positioning-as-layout with Flexbox/Grid almost everywhere.** Sections 2–6 define exactly how.

---

## 2. Core principle: fluid-first, not breakpoint-patched

Adopt this as a non-negotiable rule for every component built or touched from this phase forward:

> **A component must be built to work correctly at every width between 320px and 2560px by default, using relative units and flexible layout — breakpoints are for adjusting the arrangement of content (e.g. stacking columns), never for fixing values that were wrong at other sizes.**

If a component only looks right at specific pixel widths and needs a new `@media` override every time a bug is found at a new size, it's built wrong at the foundation — rebuild it fluidly rather than adding another patch.

---

## 3. Layout system rules

### 3.1 Use Flexbox/Grid for structure; reserve `position: absolute`/`fixed` for true overlays only
- **Structural page layout** (headers, content columns, card grids, form layouts, the Phase 5 product page's two-column arrangement) must be built with **CSS Flexbox or Grid**, which reflow naturally as space changes — never with manually calculated `position: absolute` coordinates.
- **`position: absolute`/`fixed` is reserved for things that are genuinely meant to float independent of document flow**: the Phase 6 sticky Enquire bar, the WhatsApp floating button, modals/drawers, tooltips, badge overlays on the Phase 9 product images. Even these must still use relative units and safe-area-aware positioning (per Phase 6), not hardcoded pixel coordinates.
- **Audit every existing use of `position: absolute`/`fixed` in the codebase** as part of this phase — for each one found, confirm it's one of the legitimate overlay cases above; if it's being used to structurally place page content (the actual bug pattern causing the reported overlap), rebuild that section with Flexbox/Grid instead.

### 3.2 Never hardcode pixel widths/heights on containers that hold text or multiple children
- Use `width: 100%` + `max-width` (in `rem`, not `px`, so it respects user font-size preferences too) instead of fixed `width: 400px`-style values.
- Use `min-height`, not `height`, on any container whose content length can vary (buttons, cards, form fields) — a fixed `height` is exactly what causes text to get clipped/invisible when a translated string (per Phase 7), a longer product name, or a larger system font size doesn't fit the space that was sized for the original English/laptop-width case.
- Add `min-width: 0` to flex/grid children that contain text — this is a common, easy-to-miss fix for text overflowing its container and getting hidden, since Flexbox/Grid children default to `min-width: auto`, which can force a sibling to overlap or push out of view when the container gets narrow.

### 3.3 Container queries for components that appear in multiple contexts
- Components like `ProductCard` appear in different container widths across the site (a 3-column desktop grid vs. a full-width mobile list vs. a narrow "related products" rail) — **use CSS Container Queries (`@container`)** so the component adapts to the space it's actually given, not just the overall viewport width. This directly prevents the "looks right in one place, broken in another" pattern, since the component becomes self-contained and correct regardless of where it's dropped.
- Reserve viewport-width media queries (`@media`) for true page-level layout decisions (e.g. "collapse the nav to a drawer below 1024px") — use container queries for anything about how an individual component's *own* internal layout should adapt to its available space.

---

## 4. Typography rules — the direct fix for "text becomes invisible"

### 4.1 Fluid type scale using `clamp()`
Replace every fixed `font-size` value with a `clamp(min, preferred, max)` fluid value so text scales smoothly between viewport sizes instead of needing separate breakpoint overrides that can be forgotten or miscalculated:

```css
--font-size-h1: clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem);
--font-size-h2: clamp(1.375rem, 1.1rem + 1.4vw, 1.75rem);
--font-size-body: clamp(0.95rem, 0.9rem + 0.25vw, 1rem);
--font-size-caption: clamp(0.75rem, 0.72rem + 0.1vw, 0.8125rem);
```

- Define this once as shared tokens (matching the pattern already established for spacing/color tokens in the main design system) and reference them everywhere — no component should declare its own one-off `font-size` value.
- **Never let a `clamp()` minimum go below what's legible** — cross-check every fluid font token against the "16px minimum body text" rule already established in the general design principles doc; the minimum bound in `clamp()` must respect that floor.

### 4.2 Root-cause checklist for any text that goes invisible
When auditing existing components for this specific bug, check for all of these, since any one of them can produce "invisible text" independently:
- A fixed-height container with `overflow: hidden` and text that doesn't fit at some width (Section 3.2's fix).
- A `color` value that resolves incorrectly at some breakpoint — e.g. a light-on-light or dark-on-dark combination only triggered by a specific responsive class toggling incorrectly. Fix by using the same design-token colors everywhere rather than breakpoint-conditional color overrides.
- An animation/transition (per Phase 10) that leaves an element's `opacity` stuck at 0 because a transition class wasn't correctly toggled at that breakpoint — audit any conditional animation classes for a state that can get "stuck."
- A `font-size` computed via `clamp()` or `vw` units with a calculation error that resolves to 0 or a near-zero value at some specific width — always test the actual computed pixel value across the full range, don't just trust the formula by inspection.
- Text sitting behind another element due to a z-index conflict (Section 5) — this reads as "invisible" even though the text itself is rendering correctly underneath.

---

## 5. Z-index and stacking — prevent overlap for good

Reuse and extend the z-index registry already established in Phase 6 (Section 4 of that document) as the **single source of truth for every stacked/floating element on the site** — this phase's job is to make sure it's actually being followed everywhere, since ad hoc z-index values on individual components is a direct cause of buttons overlapping unpredictably at different sizes.

- **Audit every component with an explicit `z-index` value in the codebase.** Any value not pulled from the shared registry token is a bug to fix, not a one-off exception to leave alone.
- Add one more discipline on top of the existing Phase 6 table: **any two fixed/sticky/absolute elements that can be visible at the same time must have their positions explicitly coordinated** (e.g. via a shared layout container that stacks them with `gap`, not two independently-positioned elements that happen not to overlap at one specific screen size tested during development). This is the structural version of the same principle already stated for the WhatsApp button vs. sticky Enquire bar in Phase 6 — apply it as a blanket rule to every pair of floating elements site-wide, not just that one pair.

---

## 6. Aesthetic preservation rules

Making the layout fluid must not change how the site looks at the sizes that already work correctly (i.e. desktop/laptop). Enforce this explicitly:

- **Reuse the exact same design tokens** (colors, spacing scale, typography families, border radii, the Liquid Glass treatment rules) already defined in the main spec and Phase 5 — this phase changes *how* layout responds to size, not *what* the design looks like at any given size.
- After each component is rebuilt fluidly, **visually diff it against the current working desktop appearance** at the laptop width that was already confirmed correct — the fluid version should render pixel-equivalent (or intentionally identical) to the current look at that specific width, with the improvement being that it now also works correctly at every other width.
- Do not use this phase as an opportunity to redesign — if a component's current desktop appearance is correct, the fluid rebuild should preserve it exactly, not "improve" it stylistically along the way.

---

## 7. Breakpoint & testing matrix

Even in a fluid-first system, define a small number of **structural breakpoints** for genuine layout-arrangement changes (e.g. column count, nav collapse) — these are about *rearranging* content, not fixing values:

```css
--bp-xs: 320px;   /* smallest supported phone */
--bp-sm: 480px;
--bp-md: 768px;   /* tablet portrait / nav collapse threshold */
--bp-lg: 1024px;  /* tablet landscape / small laptop */
--bp-xl: 1280px;
--bp-2xl: 1536px; /* large desktop */
```

**Test matrix — every component and every full page must be checked at all of these**, not just the two or three that happen to be handy in dev tools:

| Category | Widths to test |
|---|---|
| Small phones | 320px, 360px, 375px |
| Standard/large phones | 390px, 414px, 430px |
| Tablets | 768px, 834px, 1024px (both orientations) |
| Laptops | 1280px, 1440px |
| Large desktop | 1920px |
| Ultra-wide (spot check only) | 2560px |
| Foldables (spot check only) | ~280px folded-inner width if the audience is likely to include foldable devices |

- Test with **at least one real, long, unusually-shaped piece of content** at every width — a long translated product name (per Phase 7), a long certification name, a long email address in a form field — since short placeholder text in dev hides exactly the overflow bugs this phase exists to fix.
- Re-run the **Phase 6 mobile pre-launch checklist** in full once this phase's changes are in place — this phase doesn't replace that checklist, it's what makes passing it reliable across sizes instead of by luck at one tested size.

---

## 8. Touch gestures and mobile-specific interaction

Layered on top of the fluid layout fixes above — this section makes sure the *interaction* model, not just the visual layout, is genuinely built for touch rather than a mouse-first design with touch bolted on.

- **Never rely on `:hover` to reveal content or controls that are required to complete a task.** Anything shown only on hover (e.g. a "quick view" icon on a product card) must also be reachable via tap on touch devices — use the `@media (hover: hover) and (pointer: fine)` query to detect genuine mouse-and-hover-capable devices, and provide an always-visible or tap-triggered equivalent otherwise.
- **Swipeable surfaces** (the Phase 5 product image gallery, any carousel) must use native CSS scroll-snap with real momentum scrolling — already specified in Phase 6, restate here as a hard requirement of this phase's touch-gesture audit.
- **Bottom sheets/drawers** (mobile nav, language picker, chatbot panel) should support **drag-to-dismiss** — a downward swipe on the sheet's handle/header area closes it, in addition to the existing tap-outside/close-icon methods. This is standard mobile-native behavior users expect and its absence reads as a broken gesture, not a missing nice-to-have.
- **Pinch-to-zoom must never be disabled site-wide** (already stated in Phase 6 — restate as a hard blocking requirement of this phase's audit, since a broken viewport meta tag is a common accidental regression).
- **Touch target audit**: re-verify the 44×44px minimum with 8px spacing rule (Phase 6) specifically on any button that was part of the reported overlap bug — overlapping buttons are very often *also* under-sized/under-spaced touch targets, and both should be fixed together.

---

## 9. Navigation bar — collapse and containment

Addressing "nav bar inside the button and everything else that's supposed to work in a mobile layout" specifically:

- Below the `--bp-md` (768px) breakpoint, the header nav collapses into a **hamburger-triggered drawer**, per Phase 6 — this phase's job is to make sure the collapsed header itself is built fluidly:
  - The hamburger icon button must be a proper button element sized to the 44×44px touch-target minimum, with icon content that scales via `em`/relative units inside it so the icon never overflows or gets clipped by its own button bounds at any font-size setting.
  - The logo, hamburger icon, and any always-visible icons (search, language, cart/enquire) in the collapsed mobile header must be laid out with Flexbox and `gap`, with `min-width: 0` and `text-overflow: ellipsis` applied to the logo/text elements — this specifically prevents the header's contents from overlapping each other on narrow phones, which is a very common version of the exact bug reported.
  - Confirm the collapsed header's total height stays consistent across all supported widths (use `min-height`, not a fixed `height`) so nothing sitting below it (e.g. a page's hero section) shifts unpredictably at different sizes.

---

## 10. Refactor & migration checklist

Work through the codebase systematically rather than only fixing the specific buttons/text currently reported as broken — the goal is to eliminate the underlying pattern everywhere it exists:

- [ ] Every `font-size` declaration replaced with a shared fluid `clamp()` token (Section 4.1)
- [ ] Every structural layout section rebuilt with Flexbox/Grid; every remaining `position: absolute`/`fixed` usage confirmed to be a legitimate overlay case (Section 3.1)
- [ ] Every fixed pixel `width`/`height` on a text- or multi-child-containing element replaced with `max-width`/`min-height` + relative units (Section 3.2)
- [ ] `min-width: 0` added to flex/grid children that contain text and previously could overflow their container
- [ ] `ProductCard` and any other multi-context component converted to use container queries (Section 3.3)
- [ ] Every explicit `z-index` value in the codebase traced back to the shared registry token — no ad hoc values remain (Section 5)
- [ ] Mobile header rebuilt per Section 9 and specifically re-tested for the originally reported overlap bug
- [ ] Full breakpoint test matrix (Section 7) run against every page template, using long/real content, not placeholder text
- [ ] Visual diff against the previously-correct desktop appearance confirms no unintended aesthetic changes (Section 6)
- [ ] Touch-gesture audit (Section 8) completed: hover-only content has a touch equivalent, swipeable surfaces use native scroll-snap, drawers support drag-to-dismiss, pinch-zoom is not disabled anywhere
- [ ] The full Phase 6 mobile pre-launch checklist re-run and passing after this phase's changes

---

## 11. Regression prevention going forward

To stop this class of bug from reappearing as new features are added in later phases:

- **Any new component must be checked against the fluid-first principle (Section 2) before merging** — if it only works at specific pixel widths, it doesn't meet the bar, regardless of how it looks on a laptop during development.
- **Never develop or review a new component at only one browser window size.** At minimum, resize the browser window fluidly from ~320px to full width while watching the component, rather than only checking a couple of fixed device presets — this catches the "breaks somewhere in between" bugs that discrete device testing alone misses.
- Treat any future report of "works on my screen but not on someone else's" as a signal to check for a reintroduced fixed-value or absolute-positioning regression first, before assuming it's a new, unrelated bug.
