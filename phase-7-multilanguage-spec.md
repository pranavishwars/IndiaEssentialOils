# Phase 7 — Multi-Language Support (Google Translate Website Translator)

Extends the main build spec and all prior phases. This phase adds machine-translated multi-language access across the entire site using **Google's Website Translator** — the free, script-embeddable widget served from `translate.google.com` (technically called the "Google Translate Element"). This is the tool referenced by the uploaded screenshot's "Select Language" dropdown; it is a client-side translation layer, not a separate translated copy of the site's content.

**Read this whole document before writing any code.** The widget has well-documented integration pitfalls (a default UI that looks bad, layout-shift bugs, conflicts with React/Next.js re-rendering) that must be designed around from the start, not patched afterward.

---

## 1. What this tool actually is (read before implementing)

- It is a **client-side, on-the-fly machine translation overlay**, not a content-management or static-translation system. The page's real HTML/text stays in its original language in the source code and in the URL; the browser rewrites visible text nodes in place after the page loads.
- It works by loading a script (`https://translate.google.com/translate_a/element.js`) and initializing it against a container element, with a callback function (`googleTranslateElementInit`) that configures which languages are offered.
- Selecting a language sets a cookie (`googtrans`, formatted like `/en/fr`) that the script reads on every page load to auto-apply the previously chosen language — **this is the mechanism the custom UI in Section 4 must drive**, rather than only relying on Google's own default dropdown.
- **Known limitation to flag to the client, not hide:** because translation happens client-side, this does **not** create separate crawlable URLs per language and does **not** meaningfully improve SEO in other languages. If multi-language SEO (separate indexed pages per language) becomes a goal later, that requires a different, heavier system (e.g. static pre-translated pages with `hreflang` tags) — out of scope for this phase, which is about **visitor-facing accessibility**, not search-engine-facing localization. Document this limitation in the project README so it isn't mistaken for full localization later.

---

## 2. Full language list to support

Enable **every language shown in the reference list** (from the provided screenshot of Google's own language menu) — do not silently trim the list down to a "common languages" subset. The reference set includes (alphabetically, as visible in the source screenshot):

Abkhaz, Acehnese, Acholi, Afar, Afrikaans, Albanian, Alur, Amharic, Arabic, Armenian, Assamese, Avar, Awadhi, Aymara, Azerbaijani, Balinese, Baluchi, Bambara, Baoulé, Bashkir, Basque, Batak Karo, Batak Simalungun, Batak Toba, Belarusian, Bemba, Bengali, Betawi, Bhojpuri, Bikol, Bosnian, Breton, Bulgarian, Buryat, Catalan, Cebuano, Chamorro, Chechen, Chichewa, Chinese (Simplified), Chinese (Traditional), Chuukese, Chuvash, Corsican, Crimean Tatar (Cyrillic), Crimean Tatar (Latin), Croatian, Czech, Danish, Dari, Dhivehi, Dinka, Dogri, Dombe, Dutch, Dyula, Dzongkha, Esperanto, Estonian, Ewe, Faroese, Fijian, Filipino, Finnish, Fon, French, French (Canada), Frisian, Friulian, Fulani, Ga, Galician, Georgian, German, Greek, Guarani, Gujarati, Haitian Creole, Hakha Chin, Hausa, Hawaiian, Hebrew, Hiligaynon, Hindi, Hmong, Hungarian, Hunsrik, Iban, Icelandic, Igbo, Ilocano, Indonesian, Inuktut (Latin), Inuktut (Syllabics), Irish Gaelic, Italian, Jamaican Patois, Japanese, Javanese, Jingpo, Kalaallisut, Kannada, Kanuri, Kapampangan, Kazakh, Khasi, Khmer, Kiga, Kikongo, Kinyarwanda, Kituba, Kokborok, Komi, Konkani, Korean, Krio, Kurdish (Kurmanji), Kurdish (Sorani), Kyrgyz — **and every additional language that follows alphabetically in Google's current full list beyond this point** (Lao through Zulu), since the reference screenshot is the top portion of Google's complete, alphabetically-sorted language menu, not a curated subset.

**Implementation instruction for the coding agent:** rather than hand-typing 130+ language codes (error-prone and will drift out of date), configure the widget's `includedLanguages` parameter by pulling the **current full list of supported language codes directly from Google's official reference**: `https://cloud.google.com/translate/docs/languages`. Treat that page as the source of truth for exact codes (e.g. `zh-CN` / `zh-TW` for the two Chinese variants, `iw` historically used for Hebrew by some Google endpoints — verify current code per that reference rather than assuming). If the widget's supported-language set differs slightly from the Cloud Translation API list, cross-check against the widget's own behavior in a test page, since the consumer widget and the paid Cloud API do not always expose an identical language set.

---

## 3. Base widget integration

1. Add a hidden container element once in the root layout (not per-page): `<div id="google_translate_element" class="sr-only"></div>` — hidden because the **default Google dropdown UI must never be shown to the user** (Section 4 replaces it entirely).
2. Load the script asynchronously and only after the page's own critical content/JS has loaded — do not block initial page render on this third-party script:
   ```html
   <script>
     function googleTranslateElementInit() {
       new google.translate.TranslateElement(
         {
           pageLanguage: 'en',
           includedLanguages: '<comma-separated codes from Section 2>',
           layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
           autoDisplay: false
         },
         'google_translate_element'
       );
     }
   </script>
   <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async></script>
   ```
3. Set `autoDisplay: false` — never let the widget auto-trigger a translation banner on page load based on browser locale guessing; language selection in this project must always be an explicit user action through the custom UI in Section 4.
4. On language switch, **write the `googtrans` cookie directly** (`document.cookie = "googtrans=/en/" + targetLangCode`) and reload the page, rather than trying to trigger translation live via DOM events. A full reload after setting the cookie is the most reliable, least bug-prone way to apply a translation with this tool — see Section 6 for why in-place SPA translation is the main source of bugs with this widget.
5. Persist the selected language across sessions via the same cookie (already handled by the widget's own read-on-load behavior) plus a `localStorage` mirror used only to drive the custom UI's "currently selected" display state — the cookie remains the actual source of truth for the translation itself.

---

## 4. Custom UI/UX (replace Google's default entirely)

**Never ship Google's default look** — the raw widget renders as an ugly top banner or a plain unstyled `<select>`, both of which visibly clash with the site's design system and were explicitly called out as something to avoid. Build a fully custom control instead:

### 4.1 Trigger placement
- A **globe icon + current language label** (e.g. "🌐 English") in the site header, positioned in the same header row as the search and contact icons defined in the main spec's nav — do not add a second header row just for this.
- On mobile, the same icon lives in the collapsed header per the Phase 6 mobile spec, and opens a full-screen sheet (not a small dropdown) given the very long list of languages.

### 4.2 Language picker panel
- Opens as a **dropdown panel on desktop, a bottom sheet on mobile** (reuse the same drawer/sheet component and z-index rules already defined in the Phase 6 spec — do not create a one-off overlay component).
- **Must include a search/filter input at the top** — with 130+ languages, an unfiltered scrolling list is a poor experience; typing "Hin" should filter to "Hindi" instantly, client-side, no network call needed.
- Below the search box, group languages either:
  - Alphabetically with sticky letter-section headers (A, B, C…), similar to a contacts app, **or**
  - Under a "Suggested" section (site's most common visitor languages — e.g. English, Hindi, and a handful of others relevant to likely buyer geographies) pinned above the full alphabetical list.
- Each row: language name in its own script/language (e.g. "हिन्दी" not just "Hindi") plus the English name in smaller muted text underneath or beside it, so users can find their language even if they can't read the interface's current language.
- Highlight/checkmark the currently active language in the list.
- Closing behavior, focus trapping, safe-area handling, and body-scroll locking must all follow the shared modal/drawer rules already defined in the Phase 6 mobile spec — do not reimplement these behaviors separately for this component.

### 4.3 Theming
- Style this control using the site's existing design tokens (colors, spacing, typography) — no new palette.
- The trigger button and dropdown/sheet panel are appropriate candidates for the **Liquid Glass treatment** defined in the Phase 5 spec, since this is exactly the kind of floating, temporary, controls-layer surface that material is meant for — apply it there using the same accent-tinted glass approach (not a generic gray), and ship the same opaque fallback for reduced-transparency users.
- Do not apply glass styling to the language list rows themselves once the panel is open — keep the scrollable list content fully opaque and legible, consistent with the "glass belongs on the floating chrome, not on dense scrollable/read content" rule already established for the Certifications and Reviews sections in Phase 5.

### 4.4 Feedback & state
- Show a brief loading state (e.g. a subtle spinner in the trigger button) between selecting a language and the page reload completing.
- After reload, the trigger button's label updates to reflect the newly active language, read from the persisted state described in Section 3.
- If the translation script fails to load (network block, ad-blocker, offline), the trigger should still open the picker, but display a small inline notice ("Translation is currently unavailable") rather than silently failing — never leave the user tapping a control that does nothing with no explanation.

---

## 5. Right-to-left (RTL) language handling

Several languages in the full list are RTL (at minimum: Arabic, Hebrew, Dari, Dhivehi, Kurdish (Sorani), Pashto, Persian/Farsi if present in the final code list, Sindhi, Urdu, Uyghur). The Google Translate widget will correctly reverse **translated text direction inside translated content blocks**, but it does **not** automatically mirror the site's own custom layout chrome (nav, buttons, the language picker itself, icon positioning).

- Detect the active RTL state (from the same language-code state already tracked for the trigger label) and apply `dir="rtl"` at the `<html>` level when an RTL language is active, so native CSS logical properties/browser behavior handle text direction correctly.
- Explicitly test and fix mirroring for **custom chrome** the browser won't auto-mirror on its own: icon-and-label ordering in the header, the sticky Enquire bar layout from Phase 5, and the language-picker panel's own internal layout (search icon side, checkmark side, etc.).
- Do not assume "it'll just work" for RTL — this must be a distinct, explicitly tested state, not an assumption inherited from LTR layout QA.

---

## 6. Known bugs with this specific tool — design around these from the start

These are the most common, well-documented failure modes of the Google Translate widget on modern JS-framework sites (React/Next.js). Build with these in mind rather than discovering them after launch:

- **DOM-diffing crashes.** React (and similar frameworks) can throw errors like `Failed to execute 'removeChild' on 'Node'` when Google's translation script has directly mutated text nodes that the framework then tries to re-render or unmount, because the two are fighting over the same DOM nodes. **Mitigation used in this project: switch language via a full page reload (Section 3, step 4), not live in-place DOM translation.** This avoids the framework and the widget ever needing to reconcile the same live DOM tree mid-session.
- **Layout-shifting top banner.** The widget's default behavior can inject an iframe banner at the top of the page that pushes all content down, causing a visible jump. Since Section 4 replaces the default UI entirely and hides the widget's own chrome (`class="sr-only"` container, no default banner ever shown), this should not surface — but explicitly verify no residual Google-injected banner/iframe appears after a language switch on every browser tested (Section 8).
- **Font/line-height mismatch after translation.** Some translated scripts (e.g. Thai, Devanagari-based scripts, CJK) render at different natural line-heights and character widths than the Latin-script original. Test the header nav, the Phase 5 sticky Enquire bar, and any fixed-height buttons specifically with a non-Latin language selected — fixed pixel heights on text-containing buttons are the most likely thing to visually break here; prefer `min-height` and generous internal padding over fixed heights on any element that contains translatable text.
- **Re-translation on client-side route changes.** In a single-page-app style Next.js build, navigating between routes client-side (no full reload) may leave newly-rendered content untranslated even though a language is active, since the translation pass ran once against the DOM that existed at the time. Mitigation: on route change, if a non-default language is active (read from the persisted state in Section 3), trigger the same "set cookie + reload" flow used for an explicit language switch, rather than relying on the widget to re-scan a client-side-navigated page. This trades a slightly heavier navigation for translation reliability, which is the right tradeoff for this use case.
- **Ad-blockers and privacy extensions.** Some ad-blockers block `translate.google.com` entirely. Confirm the failure state described in Section 4.4 (visible notice, not silent failure) is actually triggered under a common ad-blocker during testing, not just assumed to work.

---

## 7. Accessibility

- The trigger button must have a clear accessible name (e.g. `aria-label="Change language, currently English"`), not just a bare globe icon with no label.
- The language list must be fully keyboard-navigable: arrow keys or tab order through results, Enter to select, Escape to close — consistent with the modal/drawer accessibility rules already required in Phase 6.
- Announce the language change to screen readers after the reload (e.g. via a page `<title>` that reflects the new state, and standard focus-to-top behavior on page load) rather than relying on a silent visual-only update.
- Do not rely on flag icons as the only way to identify a language — flags map to countries, not languages, and several languages in this list (e.g. Kurdish variants, Inuktut variants, multiple Chinese/Batak/Crimean Tatar variants) don't map cleanly to a single national flag. Use text (in-language name + English name) as the primary identifier, per Section 4.2 — flags may be added as a secondary visual aid only, never as the sole label.

---

## 8. Testing checklist

- [ ] Every language in the full list (Section 2) appears in the custom picker and successfully translates a test page when selected
- [ ] Search/filter in the picker correctly narrows the list as the user types, in a reasonable time with 130+ entries
- [ ] Selected language persists across a full session and across a fresh visit (cookie + localStorage state both verified)
- [ ] No default Google banner, iframe, or unstyled dropdown is ever visible to the user, before or after a language switch
- [ ] RTL languages (test at minimum Arabic and Hebrew) correctly mirror both translated content and custom site chrome (nav, sticky Enquire bar, picker panel itself)
- [ ] No fixed-height text container visibly clips or overlaps translated text in at least one CJK language (e.g. Japanese) and one Devanagari-based language (e.g. Hindi)
- [ ] Client-side route navigation while a non-default language is active correctly keeps the newly loaded route translated (per the Section 6 mitigation)
- [ ] Failure state (translation notice) correctly appears when the Google script is blocked (test with a common ad-blocker enabled)
- [ ] Full keyboard navigation and screen-reader labeling verified on the trigger button and the picker panel
- [ ] Liquid Glass styling on the trigger/panel has a working opaque fallback under `prefers-reduced-transparency`, per the Phase 5 rule
- [ ] Confirmed with the client/stakeholder that this delivers **visitor-facing translation only**, not per-language SEO — documented in the project README per Section 1
