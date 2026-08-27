# Phase 10 — Animations & Transitions

Extends all prior phases. This phase defines every motion moment on the site: page transitions, navigation, every button's interactive states, scroll-triggered reveals, the catalog page's ambient background motion, and the Liquid Glass surfaces' own motion behavior from Phase 5. Read this whole document before adding any animation — the brief for this phase is explicit that motion should feel intentional and calm, not decorative or attention-grabbing, and that governs every rule below.

---

## 1. Motion philosophy for this brand

Essential oils are about **calm, purity, and slow natural processes** — distillation, diffusion, a drop settling into still water. Every animation on this site should read as an extension of that, not as generic "modern web app" motion:

- **Fluid over mechanical.** Prefer soft, continuous eases (`ease-out`, custom cubic-bezier curves with a gentle deceleration) over linear, bouncy, or springy motion. A dropper releasing a drop into a bottle doesn't bounce — nothing on this site should either, except where explicitly noted (Section 5.1).
- **Slow and few, not fast and many.** When in doubt, animate less. Motion should be occasional and purposeful — a signal that something changed — not a constant background hum of moving elements.
- **Never block or delay the user.** Every animation must be interruptible and must never gate an action behind its own completion (e.g. a user must be able to click a button again immediately, even mid-transition, without waiting for an animation to finish).
- **Motion communicates state, not decoration.** Every animation in this document exists to answer one of: "what just happened," "what will happen if I interact with this," or "where did this content come from/go to." If a proposed animation doesn't answer one of those three, cut it.

---

## 2. Global timing & easing tokens

Define these once as shared design tokens (CSS custom properties or a JS motion-config object) and reference them everywhere — never hardcode a one-off duration or easing curve inline in a component.

```css
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);   /* gentle deceleration, use for most UI motion */
--ease-in-out-soft: cubic-bezier(0.45, 0, 0.55, 1); /* symmetric, for elements that move both in and out equally */
--ease-liquid: cubic-bezier(0.16, 1, 0.3, 1);       /* slower-settling, use for Liquid Glass surfaces specifically */

--duration-instant: 100ms;   /* immediate feedback: button press, checkbox toggle */
--duration-fast: 180ms;      /* hover states, small UI feedback */
--duration-base: 280ms;      /* default transition — most component enter/exit */
--duration-slow: 450ms;      /* larger surfaces: modals, drawers, page-section reveals */
--duration-ambient: 40000ms+ /* background ambient motion — see Section 8, measured in seconds/minutes, not ms */
```

**Rule of thumb for picking a duration:** the larger the element or the further it travels, the longer the duration — a full-screen drawer takes longer to animate in than a small tooltip, and both should still feel like part of the same motion language via shared easing, not shared duration.

---

## 3. Page-level transitions (route changes)

- **Cross-fade, not a hard cut, between full page navigations.** On route change: fade the outgoing page's content to 0 opacity over `--duration-fast`, then fade the incoming page in over `--duration-base`, with a very slight upward drift (8–12px translate-Y) on the incoming content — this reads as "settling into place," consistent with the fluid motion philosophy.
- **Do not animate the header/nav/footer during page transitions** — only the main content region transitions; persistent chrome (header, footer, floating buttons) should feel stable and unaffected by navigation, reinforcing that they're always there.
- **Respect the Phase 7 multi-language reload behavior** — a language switch triggers a full reload by design (per that spec); do not attempt to apply this cross-fade to that specific transition, since a real reload already resets the page state cleanly.
- Show a **thin top-of-viewport progress indicator** (a slim animated bar, not a spinner) during any navigation that takes longer than ~300ms to resolve (e.g. a slow product page load) — this is a standard, unobtrusive pattern for perceived-performance feedback and fits the "communicate state" rule from Section 1.

---

## 4. Navigation & chrome transitions

| Element | Trigger | Transition |
|---|---|---|
| Desktop nav link | Hover | Underline draws in from left to right under the text over `--duration-fast`, `--ease-standard` — not an instant snap-in underline |
| Mobile nav drawer (Phase 6) | Open/close | Slide in from the trigger's edge + fade, `--duration-slow`, `--ease-liquid`; backdrop fades in behind it simultaneously |
| Search bar (Phase 6) expand/autocomplete dropdown | Focus / typing | Dropdown panel fades + drifts down 6–8px into place, `--duration-fast`; individual result rows can stagger in with a ~20ms delay between each (cap the stagger at the first 6 rows so a long list doesn't feel slow to finish appearing) |
| Language picker panel (Phase 7) | Open/close | Same drawer/sheet motion as the mobile nav drawer — reuse the pattern, don't invent a second one |
| Sticky section tab bar (Phase 5) | Becomes active on scroll | Active tab's underline/indicator slides horizontally to the new active tab position rather than instantly jumping — this is the one place a slightly more visible "sliding" motion is appropriate, since it's tracking scroll position live |
| WhatsApp / chatbot floating buttons | Page load | Fade + scale in from 90% to 100%, `--duration-base`, once on initial load only — never re-trigger this on every scroll or route change |

---

## 5. Button and interactive-element transitions (every click, by type)

Every clickable element on the site needs, at minimum, a **hover state, an active/pressed state, and a focus state** — treat all three as required, not optional polish.

### 5.1 Primary CTA (e.g. "Enquire Now" / "Request a Quote")
- **Hover:** subtle brightness lift or a gentle background shift (no color change to a different hue — stay within the site's existing accent tones), `--duration-fast`.
- **Active/press:** slight scale-down (~97%) over `--duration-instant` — this is the one place a snappier, more mechanical-feeling response is correct, since a primary action button should feel immediately responsive to a physical press, distinct from the slower "liquid" motion used elsewhere.
- **Loading state (e.g. quote form submitting):** replace label text with a small inline spinner or a subtle pulsing opacity on the button itself — never let the button silently do nothing while a request is in flight.
- **Success feedback:** a brief checkmark icon cross-fades in over the button label for ~1.2s before reverting or navigating away — confirms the action succeeded without needing a separate toast for this specific action.

### 5.2 Secondary / outline buttons
- **Hover:** background fades in from transparent to a light tint of the button's accent color, `--duration-fast`.
- **Active/press:** same slight scale-down as primary, kept consistent across all clickable buttons site-wide.

### 5.3 Icon-only buttons (search, contact, language globe, chatbot trigger)
- **Hover:** icon color shifts to the accent tone + a soft circular background fade-in behind it (mirrors the "icon in a colored circle" motif already established as this site's visual repetition device in the general design principles doc).
- **Active/press:** same instant scale-down as other buttons.
- **Badge/notification dot** (if a future feature needs one, e.g. an unread chatbot message): a small pulse animation (scale 100%→110%→100%, low frequency, ~2s cycle) — use sparingly, only for something that genuinely needs attention, never decoratively.

### 5.4 Toggle/switch controls, checkboxes, radio buttons (forms)
- Standard smooth slide/fill transition on state change, `--duration-fast` — a toggle should visibly slide, not snap, between states.

### 5.5 Tappable cards (product cards, review cards, related-product cards)
- **Hover (desktop only):** a gentle lift — small `translateY(-4px)` plus a soft shadow increase, `--duration-fast`, `--ease-standard`. Do not scale the whole card up (scaling product images distorts perceived proportions); lift, don't grow.
- **Active/press (mobile tap):** a brief opacity dip (to ~85%) instead of a lift, since translateY hover effects don't make sense on touch — confirm tap registered without needing a hover-style effect that touch devices can't naturally trigger.

### 5.6 Links within body text (blog, product descriptions)
- Simple underline color/opacity transition on hover, `--duration-fast` — no movement, no scale, this is inline text and should stay calm.

### 5.7 "Copy" or utility icon buttons (e.g. copying a batch code)
- On successful action: icon briefly swaps to a checkmark for ~1s via a cross-fade, then reverts — the same success-confirmation pattern as the primary CTA, scaled down for a minor action.

---

## 6. Scroll-triggered reveal animations

- Use a simple **fade + slight upward drift (10–16px)** for content sections entering the viewport on scroll (homepage sections, blog article images, category page section headers) — `--duration-base`, `--ease-standard`, triggered once per element the first time it enters view (do not re-trigger every time the user scrolls past it again).
- **Stat blocks / counters** (e.g. "500+ Products," "25 Years") should count up from 0 to their final value once, the first time they scroll into view, over ~1.2–1.6s with an ease-out curve — this is a good candidate for one of the few "energetic" animations on the site, since it draws appropriate attention to a genuine credibility signal.
- **Stagger, don't animate everything at once.** For a grid of items entering together (e.g. a row of certification badges, a row of feature highlights), stagger each item's fade-in by ~40–60ms rather than firing all of them simultaneously — this reads as more natural and less like a jarring flash of content.
- **Never use scroll-triggered animation on the product grid itself in the catalog** — the catalog's background gets its own dedicated ambient motion (Section 8); the product cards/images in the foreground should appear immediately and reliably without a fade-in delay, since users are scanning quickly through many items and any per-card entrance animation would slow down browsing and feel repetitive at scale.

---

## 7. Product image gallery & zoom (Phase 5 product page)

- **Thumbnail-to-main-image swap:** cross-fade, `--duration-fast` — never a hard cut, since an instant swap on a product photo can read as a glitch.
- **Swipe between gallery images (mobile):** native CSS scroll-snap momentum motion (already specified in Phase 6) — no custom JS-driven animation layered on top.
- **Hover-zoom (desktop):** the zoomed region should track the cursor smoothly with a very slight motion-smoothing/lag (a few ms of easing on the follow, not an instant 1:1 cursor lock) so it feels fluid rather than mechanical — but keep this lag subtle enough that it doesn't feel unresponsive.

---

## 8. Catalog page — ambient background motion (the requested "gentle, slow, non-distracting" layer)

This is a deliberate, minimal ambient layer sitting **behind** the product grid — never behind or interfering with legibility of product cards, price, or the search/filter controls in front of it.

**Recommended treatment:** a small number (3–5) of large, very softly blurred, low-opacity color blobs — using the same organic-blob visual motif already established for the homepage hero (Phase 5/general design docs) — drifting extremely slowly across the background layer, evoking the slow diffusion of oil or scent spreading through still air/water rather than anything mechanical.

**Precise specification:**
- **Opacity:** 4–8% max — this must read as an atmospheric tint, not a visible design element competing with the product grid in front of it.
- **Speed:** each blob completes one drift cycle (a slow loop across a large area and back, or a slow rotation) over **60–120 seconds**. This is intentionally far slower than any other motion on the site — the whole point is that it should be nearly imperceptible moment-to-moment and only noticeable as "the page feels alive" over a longer glance.
- **Blur:** heavy blur (equivalent to a large CSS `filter: blur(80–120px)` or an SVG Gaussian blur at a similar radius) so there are no hard edges anywhere in this layer.
- **Position:** `position: fixed` or `absolute` behind the product grid, contained to the catalog page's background only — this layer must not extend behind or interfere with the header, footer, or any modal/drawer that opens on top of the page.
- **Color:** use the site's existing accent tones at low opacity — do not introduce a new palette for this effect, consistent with every other theming rule in this project.
- **Implementation:** pure CSS `@keyframes` animating `transform: translate()`/`rotate()` on a few absolutely-positioned blurred `div`s (or SVG shapes) is sufficient — this does not need JavaScript, a canvas, or a particle library. Keep it to the lightest possible implementation, consistent with the general performance-conscious approach used throughout this project.
- **Must never distract or move any layout.** These elements must use `transform` only (never animate `width`, `height`, `top`, or `left` directly) so the browser compositor handles the motion on the GPU without triggering layout recalculation or affecting the position of any real content.
- **Reduced motion:** freeze this layer entirely (render the blobs in a single static position, no animation) under `prefers-reduced-motion: reduce` — this ambient layer is a pure aesthetic nice-to-have and has zero functional cost when frozen.

---

## 9. Liquid Glass surfaces — motion behavior specifically

Building on the Phase 5 Liquid Glass theming rules: the glass surfaces defined there (sticky Enquire bar, sticky tab bar, language picker, chatbot panel) should use `--ease-liquid` specifically for their enter/exit transitions, and their appearance/disappearance should feel like the material itself is condensing into view or dissolving away, not simply sliding — a very slight blur-in (animate blur radius from 0 to its target value alongside the opacity fade) on appearance reinforces the "material forming" quality unique to this style, rather than treating it as an ordinary panel.

- Do not apply this blur-in treatment to non-glass elements — it should stay a distinguishing motion signature unique to Liquid Glass surfaces, so it keeps meaning something.

---

## 10. Forms (quote request, contact, batch lookup, chatbot)

- **Field focus:** border/underline color transitions to the accent tone over `--duration-fast`, with a very subtle glow/shadow fade-in — a calm confirmation of focus, not an abrupt color snap.
- **Validation error:** the field's border transitions to an error state color and the error message fades + drifts down into place below the field (do not have it pop in instantly or shake the field — shaking/jitter motion reads as harsh and doesn't fit this brand's calm motion language).
- **Successful submission:** the form's content cross-fades out and a confirmation message/icon cross-fades in, in place, `--duration-slow` — avoid a jarring page redirect immediately after submission if an inline confirmation can do the job instead.

---

## 11. Loading states

- **Skeleton screens, not spinners, for content that takes a moment to load** (product grid initial load, product page data fetch) — a soft, slowly-pulsing gray/tinted placeholder shape matching the final content's layout, using a gentle opacity breathing animation (~1.5s cycle) rather than a spinning icon, consistent with the calm motion language.
- **Spinners reserved for short, button-level actions** only (form submission, chatbot "thinking" — though note the chatbot has no real "thinking" state per Phase 8's constraints, so this applies mainly to forms and search).
- **Search-as-you-type (Phase 6):** show a very subtle loading indicator only if a result take longer than ~250ms to return — for anything faster, no loading indicator is needed at all, since flashing a spinner for a few milliseconds reads as noisier than just showing the result.

---

## 12. Modals, drawers, and sheets (shared component, referenced across phases)

One shared transition pattern for every modal/drawer/sheet on the site (mobile nav, language picker, chatbot panel, quote form modal, image zoom overlay) — do not let each feature invent its own:

- **Backdrop:** fades in from 0 to its target opacity, `--duration-base`.
- **Panel (bottom sheet, mobile):** slides up from below the viewport + fades in simultaneously, `--duration-slow`, `--ease-liquid`.
- **Panel (dropdown/side panel, desktop):** fades in + drifts in slightly from its anchor point (e.g. 8px from the trigger button), `--duration-base`.
- **Close:** reverse of the open animation, at a slightly faster duration (`--duration-fast` instead of `--duration-slow`) — closing should feel quicker/lighter than opening, since the user's attention is already leaving.

---

## 13. Notifications / toasts

- Slide in from a consistent screen edge (e.g. top-right desktop, top-center mobile) + fade, `--duration-base`.
- Auto-dismiss after a set duration (4–6 seconds) with a fade-out, unless it requires user action to dismiss (e.g. an error requiring acknowledgment).
- Never stack more than 2–3 visible toasts — queue additional ones rather than flooding the screen.

---

## 14. Accessibility: `prefers-reduced-motion`

This is a hard requirement, not a nice-to-have, and applies to every animation defined in this document:

- Under `prefers-reduced-motion: reduce`: disable all translate/scale/parallax-style motion; keep only simple opacity cross-fades where an animation is communicating a real state change (e.g. a page transition or modal open/close still needs *some* visual signal that something happened) but remove any movement, blur-in, or drift component from it.
- The Section 8 ambient catalog background must fully freeze (no animation at all) under this setting, as already specified there.
- The Section 5.3 pulse/attention animations must not repeat indefinitely under this setting — reduce to a single, brief occurrence or a static indicator instead.
- Test this setting explicitly on every page as part of QA (Section 16) — do not assume conditional CSS/JS logic works correctly without verifying it directly.

---

## 15. Implementation approach & performance constraints

- **Prefer CSS transitions/animations for all simple state changes** (hover, focus, fades, the ambient background layer) — reserve a JS animation library only for genuinely complex, interruptible, physics-based sequences if any arise (most of this document does not require one).
- If a JS animation library is justified (e.g. for the coordinated stagger effects in Section 6, or for gesture-driven drawer motion), a lightweight option like **Motion (formerly Framer Motion)** for React is appropriate — avoid heavier general-purpose animation engines (e.g. full GSAP timelines) unless a specific need genuinely requires them; this project's motion needs are modest by design.
- **Animate only `transform` and `opacity`** wherever possible — these are the two properties browsers can animate on the GPU compositor without triggering layout/paint recalculation. Avoid animating `width`, `height`, `top`, `left`, `margin`, or box-shadow spread directly; use `transform: scale()`/`translate()` and opacity-based tricks instead.
- **Respect the Phase 1/6 performance budgets** — no animation in this phase should push any page's Core Web Vitals (particularly CLS and INP) outside the targets already established. Test this explicitly after implementing, not just assumed safe because the animations are "small."
- **Every animation must be interruptible** — if a user re-triggers a hover/click/scroll event mid-animation, the new state should take over smoothly (via transition, not a jarring reset), never queue up or block behind the previous animation finishing.

---

## 16. Acceptance checklist

- [ ] Global timing/easing tokens (Section 2) are defined once and referenced everywhere — no hardcoded one-off durations found in a code review pass
- [ ] Every button type in Section 5 has a working hover, active/press, and focus state
- [ ] Primary CTA shows a real loading state during form submission and a success confirmation on completion
- [ ] Page transitions cross-fade correctly and do not animate persistent header/footer/floating-button chrome
- [ ] Scroll-triggered reveals fire once per element, not repeatedly on every scroll pass
- [ ] Stat-block counters animate up once when first scrolled into view
- [ ] Catalog page ambient background is present, subtle (4–8% opacity), heavily blurred, and does not affect layout or legibility of any product card
- [ ] Ambient background freezes completely under `prefers-reduced-motion: reduce`
- [ ] All modal/drawer/sheet instances across the site use the single shared transition pattern from Section 12, not individually reinvented ones
- [ ] Liquid Glass surfaces use the distinct `--ease-liquid` blur-in treatment, and non-glass elements do not borrow this same treatment
- [ ] `prefers-reduced-motion: reduce` verified directly (not assumed) on at least: homepage, catalog page, product page, and the chatbot/language-picker panels
- [ ] No animation in this phase measurably regresses CLS or INP against the performance budgets set in earlier phases
- [ ] All animations use only `transform`/`opacity` except where explicitly noted otherwise in this document
