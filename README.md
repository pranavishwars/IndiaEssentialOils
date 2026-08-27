# India Essential Oils — Pure Botanical Extracts & B2B Supply

Premier manufacturer and exporter of steam-distilled essential oils, cold-pressed carrier oils, and certified organic extracts based in New Delhi, India.

---

## Multi-Language Architecture (Phase 7)

India Essential Oils features on-the-fly multi-language accessibility powered by **Google Website Translator (Google Translate Element)** with a custom **Apple Liquid Glass UI**.

### 1. Architectural Scope & Capabilities
- **Visitor-Facing Accessibility Layer**: Provides real-time translation across 190+ supported languages (including Arabic, Hindi, Spanish, French, German, Japanese, Chinese, Russian, etc.) to empower global B2B buyers.
- **Client-Side DOM Translation vs. SEO Scope**:
  > **Important Note for Stakeholders**: Because translation happens on-the-fly client-side, the real source HTML and canonical URLs remain in English. This layer does **not** create separate crawlable URLs per language (`/fr/`, `/hi/`, `hreflang` tags) and is not indexed separately by search engines. It is designed specifically for **international buyer accessibility**, not multilingual search-engine localization.

### 2. State Persistence & React 19 Safeguards
- **Cookie Synchronization**: Selected language is persisted via the standard `googtrans` cookie (`googtrans=/en/{targetLangCode}`) alongside `localStorage` state mirror.
- **DOM Stability via Clean Reloads**: React 19 and Google Translate Element can conflict when the third-party script directly mutates virtual DOM nodes (`Failed to execute 'removeChild' on 'Node'`). To eliminate crashes, language switches and client-side route changes while translated trigger a clean full reload.
- **Right-To-Left (RTL) Mirroring**: Languages such as Arabic (`ar`), Hebrew (`iw`), Urdu (`ur`), Persian (`fa`), Pashto (`ps`), and Sindhi (`sd`) automatically apply `dir="rtl"` and `lang` to `<html>`, mirroring custom chrome like navigation, floating buttons, and mobile sticky bars.
- **Custom Liquid Glass UI**: Google's default top banner and unstyled dropdown are completely suppressed in CSS and replaced with an instant-filter search picker, suggested languages section, and mobile bottom sheet.
- **Ad-Blocker Resilience**: If Google's script is blocked by an ad-blocker or offline, the UI presents an informative warning banner rather than failing silently.

---

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Production build
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
# IndiaEssentialOils
