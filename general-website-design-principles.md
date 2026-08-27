# General Website Design Principles & Guidelines

A reference document for building any website well — not tied to a single tech stack. Use this alongside a project-specific build spec; where the two conflict, the project-specific spec wins, but this document should govern anything it doesn't cover.

---

## 1. Information architecture

- **Nav should fit in one glance.** 5–7 top-level items max. If a mega-menu is needed to hold everything, the taxonomy is wrong, not the menu.
- **Every page needs one clear job.** If a page is trying to be a landing page, a catalog, and a blog at once, split it.
- **Logo always links home.** Don't waste a nav slot on a "Home" link.
- **Footer is not an afterthought.** A real footer (nav columns, contact, legal, socials) does real navigational work, especially on long pages. A single copyright line under-uses valuable space.
- **Breadcrumbs on anything more than two levels deep.** Users should always know where they are and be able to step back up.
- **URLs should be readable and stable.** `/products/lavender-oil`, not `/products?id=4821`. Never change a URL structure without a redirect.

---

## 2. Visual design

- **Pick a palette that's specific to the subject, not generic.** If the color choices would work equally well for a law firm and a bakery, they're not specific enough. Let one color dominate (60–70% of visual weight), one or two supporting tones, and a single sharp accent — don't give every color equal weight.
- **Commit to one spacing scale and use it everywhere** (e.g. an 8px base: 8, 16, 24, 32, 48, 64...). Inconsistent padding/margins is one of the fastest ways a site reads as "unfinished," even when nothing is technically broken.
- **Contrast is not optional.** Text needs to meet WCAG AA contrast against its background (4.5:1 for body text) — this is both an accessibility requirement and a legibility one.
- **Pick one visual motif and repeat it.** Rounded image frames, icons in colored circles, a consistent card style — repetition is what makes a site feel designed rather than assembled from defaults. Avoid decorative elements that don't repeat anywhere else on the site.
- **Avoid AI-generated-slide clichés when they leak into web design**: gratuitous underline accents under every heading, colored side-stripes on every card, generic stock-photo hero backgrounds with no relevance to the actual subject.
- **Every section needs a visual anchor** — a photo, icon, illustration, or data visualization. Long stretches of text-only content lose readers regardless of how good the writing is.

---

## 3. Typography

- **Two typefaces, maximum** — one for headings, one for body. More than that reads as indecisive.
- **Body text 16px minimum** on desktop, never smaller than 14px anywhere, including captions.
- **Line length 50–75 characters** for body copy — full-width paragraphs on wide screens are hard to read; constrain with a max-width, don't rely on the viewport.
- **Line height ~1.4–1.6× font size** for body text; tighter for large headings.
- **Left-align body text and lists.** Center only short standalone elements like titles or a hero tagline — centered paragraphs are harder to scan.

---

## 4. Performance

- **Images are almost always the biggest performance cost.** Serve responsive images (`srcset`/`sizes` or an image CDN with on-the-fly resizing), lazy-load anything below the fold, and compress aggressively — a hero image doesn't need to be 4MB.
- **Ship less JavaScript than feels natural.** Every third-party script (chat widgets, analytics, trackers) has a real cost; audit what's actually earning its place.
- **Fonts**: self-host or use `font-display: swap` so text isn't invisible while a webfont loads.
- **Target Core Web Vitals as a real constraint, not an afterthought** — LCP under 2.5s, CLS near zero (reserve space for images/ads/embeds so nothing jumps as it loads), INP under 200ms.
- **Cache aggressively for anything that doesn't change per-request** — static pages, product listings that update on a schedule rather than live.

---

## 5. Accessibility

- **Semantic HTML first.** A `<button>` that looks like a link should still behave like a button; use headings (`h1`–`h6`) in actual hierarchical order, not for their font size.
- **Every image needs alt text** that describes its content or function — decorative images get an empty `alt=""`, not a missing attribute.
- **Everything must be operable by keyboard alone** — tab order should follow visual order, focus states must be visible (never `outline: none` without a replacement focus style).
- **Forms need real labels**, not just placeholder text (placeholders disappear once a user starts typing and don't count as labels for screen readers).
- **Don't rely on color alone to convey information** — pair a color change with an icon, text, or pattern (e.g. an error state needs more than red text).
- **Respect `prefers-reduced-motion`** for anyone who's set that OS-level preference — cut or simplify animations for them.

---

## 6. Mobile & responsive design

- **Design mobile-first, not "shrink the desktop layout."** Content priority often needs to change on small screens, not just size.
- **Touch targets at least 44×44px**, with real spacing between them — nothing tappable should sit closer than ~8px to another tappable element.
- **Sticky elements (nav, floating buttons) must never cover content** a user needs to interact with — test scrolling behavior specifically on small viewports.
- **Test real breakpoints**, not just "does it look fine at 1440px and 375px" — check the awkward middle sizes (tablet portrait/landscape) too.

---

## 7. Content & conversion

- **Every page needs a clear next action.** If a visitor finishes reading and doesn't know what to click, the page has failed regardless of how well-written it is.
- **Above the fold should answer "what is this and why should I care" in under 5 seconds** — a vague hero headline is a wasted first impression.
- **Reduce form friction ruthlessly.** Every additional required field measurably lowers completion rate — ask only for what's truly needed to take the next step, and offer the option to add more detail after, not before, initial submission.
- **Trust signals need specificity.** A vague "trusted by thousands" is weaker than a named certification with a registrar and number, a named testimonial with a photo, or a real statistic. Generic trust badges read as filler; specific, checkable claims read as real.
- **Don't repeat the same content block multiple times on one page** (a common bug from carousels/loops that fail silently) — always QA for accidental repetition, especially on auto-generated or CMS-driven sections.

---

## 8. SEO fundamentals

- **One clear H1 per page**, matching what the page is actually about.
- **Unique title tags and meta descriptions per page** — never a single templated description copied across every product.
- **Structured data (schema.org)** for anything with a standard type — products, articles, FAQs, reviews — so search engines can render rich results.
- **A real, current sitemap.xml and robots.txt.**
- **Internal linking matters** — every page should be reachable within a few clicks from the homepage, and related content (e.g. blog posts, related products) should link to each other.
- **Fix broken links and redirects before launch** — a 404 on a page a search engine has already indexed actively hurts rankings.

---

## 9. Trust & credibility signals (especially for e-commerce/B2B)

- **Specific over vague**: "GC-MS tested, batch #4471, certified by [registrar]" beats a generic purity badge.
- **Named, photographed testimonials** outperform anonymous star ratings for credibility.
- **Show real people** — a founder photo or team page humanizes a brand more than any amount of copywriting.
- **Make contact effortless** — a visible phone/WhatsApp/email option in the header does more for trust than burying contact info in a footer link.
- **Certifications should be verifiable**, not just a badge image — link to or describe how a buyer could confirm it's real.

---

## 10. Before launch — general QA pass

- [ ] Every page has a working meta title/description
- [ ] No placeholder/lorem ipsum content remains anywhere
- [ ] All forms submit successfully and show a clear success/error state
- [ ] Site is tested on at least: one desktop browser, one mobile browser (iOS Safari and Android Chrome ideally), and at 3+ viewport widths
- [ ] Every image has alt text
- [ ] Lighthouse (or equivalent) run on key pages — check Performance, Accessibility, SEO scores
- [ ] All internal links resolve; no orphaned/broken pages
- [ ] Analytics/event tracking verified as actually firing, not just present in code

---

## 11. Hero-section video sourcing (for the landing page)

The homepage hero is a strong candidate for a short looping background video rather than a static image — motion in a hero section (steam rising off distilled oil, a dropper releasing a drop, herbs/flowers swaying, a production/bottling shot) reinforces the "natural, pure, crafted" positioning better than a still photo, as long as it's short, subtle, and doesn't fight with the headline text for attention.

**What to look for:** essential oils, aromatherapy, herbal distillation, lavender/eucalyptus fields, dropper bottles, spa/wellness ambience, botanical/nature close-ups. Keep clips short (6–15 seconds, seamlessly loopable), muted, and low-motion so they don't compete with hero text or hurt page performance.

**Free stock video sources (no cost, most require only attribution or none at all — check each license):**
- [Pexels Videos](https://www.pexels.com/videos/) — search "essential oil," "lavender," "aromatherapy," "herbal"
- [Pixabay Videos](https://pixabay.com/videos/) — same search terms; good royalty-free library
- [Coverr](https://coverr.co/) — curated, cinematic, hero-background-oriented clips; search "spa," "nature," "wellness"
- [Mixkit](https://mixkit.co/free-stock-video/) — free video clips, has a dedicated nature/wellness section
- [Videvo](https://www.videvo.net/) — free tier available; search "essential oil," "botanical"

**Paid stock video sources (higher production value, more oils/wellness-specific footage):**
- [Shutterstock](https://www.shutterstock.com/video/search/essential-oil) — deep catalog, direct "essential oil" search category
- [Adobe Stock](https://stock.adobe.com/search/video?k=essential+oil) — integrates well if any Adobe tools are already in the workflow
- [Storyblocks](https://www.storyblocks.com/video) — subscription model, unlimited downloads, strong wellness/spa category
- [Artgrid](https://artgrid.io/) — cinema-grade footage, pricier but the most polished option if budget allows
- [Envato Elements](https://elements.envato.com/stock-video) — subscription bundles video with the same library already suggested for product photo mockups, worth checking first since one subscription could cover both needs

**Practical note for whoever (human or AI) sources the final clip:** confirm the specific license permits commercial/web use before publishing, compress the final video (H.264 MP4 and a WebM fallback, ideally under 3–5MB for a 10-second loop) and always provide a static poster-frame image as a fallback for slow connections or `prefers-reduced-motion`.
