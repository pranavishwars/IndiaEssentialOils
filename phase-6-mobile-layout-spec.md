# Phase 6 — Mobile Layout

Extends the main build spec, Phase 5 product page spec, and the general design principles doc. Phase 6 is not a new set of pages — it's the mobile-specific implementation pass across every page already specced (homepage, `/products`, product detail page, blog, forms, batch lookup, nav). Read this end to end before touching layout code; most mobile bugs come from handling one page correctly in isolation while breaking a shared component used everywhere else.

**Primary goal of this phase: ship zero of the common, easily-avoidable mobile UI bugs listed in Section 9.** Treat that section as a literal pre-launch checklist, not background reading.

---

## 1. Baseline rules (apply to every page, no exceptions)

- **Design mobile-first in code, not just in Figma.** Write the base (no-media-query) CSS for the smallest supported width first, then add `min-width` breakpoints upward for tablet/desktop. Do not write desktop-first CSS and override it downward with `max-width` queries — this is the single most common source of mobile-only bugs, because it's easy to forget a desktop-only property that never gets unset on mobile.
- **Support down to 320px width** (smallest common phone viewport) without horizontal scroll, and test at 375px (iPhone SE/standard) and 390–430px (most modern phones) as the realistic default range.
- **Never use fixed pixel widths on containers.** Use `%`, `max-width`, `min()`/`clamp()`, or fluid grid units. A single hardcoded `width: 400px` on a card is enough to break layout on a 320px device.
- **Viewport meta tag must be correct and never disable zoom**: `<meta name="viewport" content="width=device-width, initial-scale=1">`. Do not add `maximum-scale=1` or `user-scalable=no` — disabling pinch-zoom is an accessibility violation and a common accidental bug when copying boilerplate.
- **All touch targets ≥ 44×44px** with ≥ 8px spacing from any other tappable element — this was already stated in the general principles doc; it applies with extra weight here since this is the mobile-specific implementation phase.
- **Test on real conditions, not just Chrome DevTools device mode**: at minimum, real iOS Safari and real Android Chrome. DevTools emulation does not catch iOS Safari's address-bar resize behavior, safe-area insets, or momentum-scroll quirks — several of the specific bugs below only appear on real devices.

---

## 2. Viewport height & the iOS Safari address bar bug

This is the single most common source of "invisible content" and "layout jumps" bugs on mobile web. Handle it explicitly:

- **Never use `100vh` for a full-screen section, hero, or modal on mobile.** `100vh` on iOS Safari measures the viewport *without* accounting for the collapsible address bar, so a `100vh` hero can be taller than the visible screen, hiding content or a CTA below the fold that the user can't see without scrolling — and the value changes as the address bar shows/hides, causing visible layout jumps.
- Use `100dvh` (dynamic viewport height) as the primary unit, with a `100vh` fallback only for browsers that don't support `dvh`, and test that the fallback doesn't reintroduce the bug on any currently-supported browser.
- For anything that must never jump (e.g. a full-screen mobile nav overlay), also apply `min-height: 100%` combined with `dvh` and confirm no visible resize when the address bar collapses/expands during scroll.

---

## 3. Safe areas (notches, home indicators, rounded corners)

- Any content or interactive element that touches the edge of the screen (fixed headers, fixed footers, the sticky Enquire bar from Phase 5, full-bleed images with buttons on them) **must respect `env(safe-area-inset-*)`**.
- Apply `padding: env(safe-area-inset-bottom)` (or equivalent) to the sticky mobile Enquire bar from Phase 5 specifically — without this, the button can sit underneath the iPhone home-indicator gesture bar and become difficult or impossible to tap reliably.
- Apply the same treatment to any bottom-sheet modal, the WhatsApp floating button, and the mobile nav drawer.
- Add `viewport-fit=cover` to the viewport meta tag only if safe-area insets are actually being handled everywhere they're needed — adding `viewport-fit=cover` without safe-area padding is what causes content to render underneath the notch/home-indicator in the first place.

---

## 4. Sticky & fixed elements — layering rules

Phase 5 introduced multiple sticky/fixed elements on the product page alone (sticky Enquire bar, sticky section tab bar, WhatsApp floating button). Multiple independent sticky elements are the most common cause of mobile-only overlap bugs. Define a single explicit z-index and stacking order up front, do not let each component pick its own value ad hoc:

| Layer | z-index | Elements |
|---|---|---|
| Base content | 0 | Page content |
| Sticky in-page nav | 10 | Section tab bar (Phase 5) |
| Fixed header | 20 | Site header/nav bar |
| Floating action buttons | 30 | WhatsApp float button |
| Sticky bottom bar | 40 | Mobile Enquire bar (Phase 5) |
| Modals / drawers / sheets | 50 | Mobile nav drawer, quote form modal, image zoom overlay |
| Toasts / alerts | 60 | Form success/error toasts |

- **Only one bottom-fixed element may occupy the bottom of the viewport at a time.** If the sticky Enquire bar and a cookie-consent banner or a toast notification could theoretically both be bottom-fixed at once, they must be composed to stack above each other with correct spacing (never overlap), or the lower-priority one must yield/hide while the higher-priority one is visible.
- The WhatsApp floating button must reposition (move up) when the sticky Enquire bar is visible on the product page, so the two never overlap — do not let two independently-positioned fixed elements collide; explicitly account for each other's presence.
- When a modal/drawer opens (mobile nav, quote form), the page behind it must not remain scrollable ("scroll-through" bug) — lock body scroll while any modal/drawer with a z-index of 50 is open, and restore it exactly on close.

---

## 5. Navigation on mobile

- Collapse the header nav from Section 3 of the main spec into a hamburger-triggered drawer or full-screen overlay below the tablet breakpoint. Keep visible in the collapsed header, always: logo, search icon, and either the hamburger or the primary CTA — do not hide search behind two taps.
- The nav drawer/overlay must:
  - Trap focus while open (keyboard users can't tab to content behind it).
  - Close on: tapping the close icon, tapping outside the drawer, pressing Escape (for external keyboards), and on route change (never leave the drawer open after a link inside it navigates).
  - Respect safe-area insets on all sides, per Section 3.
  - Use `100dvh` if it's a full-screen overlay, per Section 2.
- Do not nest more than one level of expandable submenu inside the mobile drawer — if the desktop mega-menu-avoidance guidance from the main spec is followed (max 6 top-level items, 2 dropdown levels), the mobile drawer inherits a simple structure automatically; don't reintroduce complexity in the mobile-only version.

---

## 6. Forms on mobile (quote request, contact, batch lookup)

- Set the correct `inputmode` and `type` per field so the right mobile keyboard appears: `type="email"` for email, `type="tel"` + `inputmode="tel"` for phone, `inputmode="numeric"` for the batch-code field if it's numeric.
- Font size on form inputs must be **at least 16px**. Below 16px, iOS Safari automatically zooms in on focus, which is a jarring, hard-to-undo layout shift that reads as a bug even though it's default browser behavior — this is a very common and very avoidable mobile-only bug.
- Labels stay visible above the field at all times (per the accessibility requirement in the general principles doc) — do not use placeholder-as-label on mobile, where the reduced screen space makes people more likely to lose track of which field they're in once they start typing.
- Sticky/fixed submit buttons on long forms must respect the same safe-area and z-index rules as Section 3–4, and must not cover the field currently being edited when the on-screen keyboard is open — test that the keyboard opening doesn't push the submit button off-screen or, conversely, that the keyboard doesn't cover the field the user is actively typing into.
- Test the full form flow with an on-screen keyboard open on a real device — keyboard-open layout is a distinct state from keyboard-closed and must be checked separately, not assumed to inherit correctly from the closed state.

---

## 7. Images, media, and layout shift

- **Every image must have explicit `width`/`height` attributes (or an aspect-ratio box)** so the browser reserves the correct space before the image loads — missing this is the most common cause of Cumulative Layout Shift (CLS) on content-heavy mobile pages like the product page and blog.
- Product gallery images (Phase 5) must use responsive `srcset`/`sizes` so mobile devices download an appropriately-sized image, not the same large asset served to desktop.
- Any hero video (per the general principles doc's hero-video guidance) must have a static poster-frame image and must not autoplay with sound; confirm it also respects `prefers-reduced-motion` by falling back to the static poster frame entirely when that preference is set.
- Swipeable image galleries (Phase 5 thumbnail/gallery interaction) must use native, momentum-friendly scroll behavior (CSS scroll-snap) rather than a JS-only touch handler reimplementing swipe — custom JS swipe handlers are a frequent source of janky, bug-prone mobile interactions when a native CSS solution would work.

---

## 8. Performance constraints specific to mobile

- Treat mobile 4G, not desktop broadband, as the default performance target — re-confirm the Core Web Vitals targets from the general principles doc (LCP < 2.5s, CLS near zero, INP < 200ms) are measured against a throttled mobile profile, not just desktop.
- Lazy-load everything below the fold, but never lazy-load the largest above-the-fold image (the product gallery's primary image, or the homepage hero) — lazy-loading the LCP element is a common mistake that directly hurts the LCP metric it's meant to help.
- Reduce/skip decorative animation (parallax, elaborate hero motion) on mobile if it risks jank on mid-range devices — motion should degrade gracefully, not just be scaled down proportionally.

---

## 9. Pre-launch mobile bug checklist

Go through this list on a real iOS device and a real Android device, not just emulators, before considering Phase 6 complete.

**Layout & viewport**
- [ ] No horizontal scroll/overflow on any page at 320px width
- [ ] No `100vh`-only full-screen sections; `dvh` used with safe fallback
- [ ] No layout jump when the iOS Safari address bar shows/hides during scroll
- [ ] All images have reserved space (no layout shift as they load)

**Safe areas & fixed elements**
- [ ] Sticky Enquire bar, WhatsApp button, and nav drawer all respect safe-area insets
- [ ] Sticky Enquire bar and WhatsApp button never visually overlap each other
- [ ] Only one element ever occupies the bottom-fixed position at a time; stacking order matches Section 4's table
- [ ] Body scroll is locked while any modal/drawer is open, and correctly restored on close

**Navigation**
- [ ] Hamburger/nav drawer opens and closes correctly, traps focus, and closes on route change
- [ ] Search icon is reachable within one tap from the collapsed header

**Forms**
- [ ] All form inputs are ≥16px font size (no iOS auto-zoom-on-focus)
- [ ] Correct mobile keyboard appears per field type
- [ ] Submit button remains visible and usable with the on-screen keyboard open
- [ ] Labels remain visible at all times, never placeholder-only

**Touch & interaction**
- [ ] Every tappable element is ≥44×44px with ≥8px spacing from neighbors
- [ ] Product gallery swipe uses native scroll-snap, feels smooth, no dead zones
- [ ] Pinch-zoom is not disabled anywhere on the site

**Cross-device**
- [ ] Verified on real iOS Safari and real Android Chrome, not emulator-only
- [ ] Verified at 320px, 375px, and 414–430px widths, plus one tablet width
- [ ] Verified in both portrait and landscape orientation on at least one device

**Performance**
- [ ] LCP, CLS, and INP measured against a throttled mobile network profile, not desktop broadband
- [ ] Largest above-the-fold image is not lazy-loaded
- [ ] Hero video (if used) falls back to a static poster frame under `prefers-reduced-motion`

---

## 10. Theming note (Liquid Glass on mobile specifically)

The Liquid Glass treatment defined in Phase 5 (sticky Enquire bar, sticky tab bar, floating badge overlays) is used *more*, not less, on mobile, since more of the layout is fixed/floating by necessity on a small screen. Two mobile-specific additions to the Phase 5 glass rules:

- **Reduce blur radius on mobile relative to desktop.** Heavier blur is more expensive to render on mobile GPUs and more likely to visibly stutter during scroll on mid-range devices — favor a lighter blur/refraction setting on small viewports rather than the same value used on desktop.
- **Always test the glass sticky bar with the safe-area padding from Section 3 already applied** — glass surfaces are exactly the elements most likely to visually collide with the home-indicator area if safe-area insets are forgotten, since they're the ones deliberately anchored to the bottom edge.
