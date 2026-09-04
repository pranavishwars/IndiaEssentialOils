import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/client/Navbar";
import { LanguageProvider } from "@/lib/language-context";
import { GoogleTranslateWidget } from "@/components/client/GoogleTranslateWidget";
import { FloatingActionsDock } from "@/components/client/FloatingActionsDock";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://indiaessentialoils.com"),
  title: {
    default: "India Essential Oils — Pure Botanical Extracts & B2B Wholesale Exporter",
    template: "%s | India Essential Oils",
  },
  description:
    "Premier ISO 9001:2015 & GMP certified manufacturer, steam distillation distillery, and bulk exporter of 100% pure essential oils, cold-pressed carrier oils, floral absolutes, and GC-MS verified botanical extracts in New Delhi, India.",
  keywords: [
    "essential oil manufacturer India",
    "bulk essential oils supplier",
    "wholesale botanical oils exporter",
    "steam distilled essential oils",
    "GC-MS certified pure essential oils",
    "cold pressed carrier oils bulk India",
    "floral absolutes exporter",
    "ISO 9001 essential oils",
    "GMP botanical extracts",
    "Mother Herbs Pvt Ltd",
    "natural fragrance ingredients",
    "pure lavender oil bulk",
    "peppermint oil manufacturer",
    "tea tree oil wholesale",
    "sandalwood oil India",
    "organic certified essential oils",
    "pure essential oils B2B export",
  ],
  authors: [{ name: "India Essential Oils", url: "https://indiaessentialoils.com" }],
  creator: "Mother Herbs Pvt. Ltd.",
  publisher: "India Essential Oils",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://indiaessentialoils.com",
    siteName: "India Essential Oils",
    title: "India Essential Oils — Pure Botanical Extracts & B2B Wholesale Exporter",
    description:
      "Premier WHO-GMP & ISO 22000 certified manufacturer and direct global bulk exporter of 100% pure steam-distilled essential oils, carrier oils, and GC-MS verified botanical extracts.",
    images: [
      {
        url: "/essential_oil_bottle.jpg",
        width: 1200,
        height: 630,
        alt: "India Essential Oils Pure Botanical Extraction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "India Essential Oils — Pure Botanical Extracts & B2B Supply",
    description:
      "Premier manufacturer and direct bulk exporter of steam-distilled essential oils with instant online GC-MS batch verification.",
    images: ["/essential_oil_bottle.jpg"],
  },
  alternates: {
    canonical: "https://indiaessentialoils.com",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "Manufacturer"],
      "@id": "https://indiaessentialoils.com/#organization",
      "name": "India Essential Oils",
      "legalName": "Mother Herbs Pvt. Ltd.",
      "url": "https://indiaessentialoils.com",
      "logo": "https://indiaessentialoils.com/essential_oil_bottle.jpg",
      "image": "https://indiaessentialoils.com/essential_oil_bottle.jpg",
      "description":
        "Premier WHO-GMP and ISO 22000:2005 certified manufacturer, steam distillation distillery, and direct bulk exporter of 100% pure essential oils, cold-pressed carrier oils, floral absolutes, and GC-MS verified botanical extracts based in New Delhi, India.",
      "foundingDate": "2004",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110034",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-11-27041414",
        "contactType": "sales",
        "email": "pranavishwars@gmail.com",
        "availableLanguage": ["English", "Hindi", "French", "German", "Spanish", "Arabic"]
      },
      "knowsAbout": [
        "Steam Distillation",
        "Hydro-distillation",
        "Gas Chromatography-Mass Spectrometry (GC-MS)",
        "Essential Oil Manufacturing",
        "Bulk Botanical Oil Export",
        "Cold Pressed Carrier Oils",
        "Floral Absolute Solvent Extraction",
        "WHO-GMP Quality Systems",
        "ISO 22000 Food Safety Standards",
        "Certificate of Analysis (CoA) Verification",
        "Aromatherapy Grade Essential Oils",
        "Cosmetic Raw Materials",
        "Pharmaceutical Grade Herbal Extracts",
        "Private Label Botanical Oils"
      ],
      "areaServed": [
        "United States",
        "European Union",
        "United Kingdom",
        "United Arab Emirates",
        "Australia",
        "Japan",
        "Canada",
        "Worldwide"
      ],
      "sameAs": [
        "https://www.indiamart.com/indiaessentialoils/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://indiaessentialoils.com/#website",
      "url": "https://indiaessentialoils.com",
      "name": "India Essential Oils",
      "publisher": {
        "@id": "https://indiaessentialoils.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://indiaessentialoils.com/products?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FCFAF6] text-[#180D26]">
        {/* Hidden element needed by Google Translate engine */}
        <div
          id="google_translate_element"
          aria-hidden="true"
          style={{
            position: "fixed",
            top: -9999,
            left: -9999,
            width: "1px",
            height: "1px",
            opacity: 0,
            pointerEvents: "none",
          }}
        />

        <Script
          id="rtl-lang-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var match = document.cookie.match(/googtrans=\\/[^\\/]+\\/([^;]+)/);
                  var lang = match ? match[1] : (localStorage.getItem('user_selected_language') || 'en');
                  var rtlCodes = ['ar','arc','ckb','dv','fa','he','iw','ks','ku','mzn','pa-Arab','pnb','ps','sd','ug','ur','yi'];
                  if (lang && rtlCodes.indexOf(lang) !== -1) {
                    document.documentElement.setAttribute('dir', 'rtl');
                  } else {
                    document.documentElement.setAttribute('dir', 'ltr');
                  }
                  if (lang) {
                    document.documentElement.setAttribute('lang', lang);
                  }
                } catch(e) {}
              })();
              window.googleTranslateElementInit = function() {
                try {
                  if (window.google && window.google.translate && window.google.translate.TranslateElement) {
                    var el = document.getElementById('google_translate_element');
                    if (el && !el.querySelector('select')) {
                      new window.google.translate.TranslateElement({
                        pageLanguage: 'en',
                        autoDisplay: false
                      }, 'google_translate_element');
                    }
                  }
                } catch(e) {}
              };
            `,
          }}
        />

        <Script
          id="google-translate-script"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        <LanguageProvider>
          <GoogleTranslateWidget />
          <Navbar />
          <div className="flex-1">{children}</div>
          <FloatingActionsDock />
        </LanguageProvider>
      </body>
    </html>
  );
}
