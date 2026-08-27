export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Formulation" | "Quality & Testing" | "Sourcing" | "Safety";
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  contentHtml: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "essential-oil-dilution-guide",
    title: "The B2B Formulator's Guide to Essential Oil Dilution & Safety Ratios",
    excerpt: "Essential safety ratios, dermal limits (IFRA standards), and carrier oil vehicle selection for commercial cosmetic formulations.",
    category: "Formulation",
    readTime: "6 min read",
    publishedDate: "October 14, 2024",
    author: {
      name: "Dr. R. K. Sharma",
      role: "Chief Botanist & Formulation Scientist",
    },
    contentHtml: `
      <h2>Understanding Dermal Limits and IFRA Compliance</h2>
      <p>When developing commercial skincare, hair care, and therapeutic aromatherapy products, precise dilution calculations are vital to ensure efficacy while complying with International Fragrance Association (IFRA) standards and dermatological safety guidelines.</p>
      
      <h3>Standard Dilution Guidelines for Formulators</h3>
      <ul>
        <li><strong>0.5% to 1% Dilution:</strong> Ideal for facial applications, delicate skin products, and leave-on daily moisturizers. (Approx. 3 to 6 drops per 30ml of carrier oil).</li>
        <li><strong>2% to 3% Dilution:</strong> Standard formulation ratio for body oils, massage lotions, bath preparations, and wash-off cosmetic products. (Approx. 12 to 18 drops per 30ml).</li>
        <li><strong>5% to 10% Dilution:</strong> Targeted therapeutic applications, pulse-point roll-ons, and muscle relief balms designed for short-term application over small body areas.</li>
      </ul>

      <h2>Selecting the Optimal Carrier Oil Base</h2>
      <p>The therapeutic efficacy and skin absorption rate of an essential oil depends heavily on its lipid vehicle. For dry skin preparations, high-oleic virgin carrier oils like Sweet Almond and Argan offer deep barrier replenishment. For acne-prone or lightweight facial serums, Golden Jojoba and Grapeseed oil provide fast-absorbing, non-comedogenic bases.</p>

      <h2>Phototoxicity and Cold-Pressed Citrus Considerations</h2>
      <p>Certain cold-pressed citrus oils contain furanocoumarins (such as bergapten) which induce phototoxic reactions under UV exposure. When formulating daytime cosmetic products, steam-distilled or FCF (furanocoumarin-free) extracts must be utilized to maintain regulatory safety compliance.</p>
    `,
  },
  {
    slug: "understanding-gc-ms-purity-reports",
    title: "How to Read and Interpret GC-MS Purity Reports for Botanical Sourcing",
    excerpt: "A technical guide for procurement teams on gas chromatography mass spectrometry, marker constituents, and identifying adulteration.",
    category: "Quality & Testing",
    readTime: "8 min read",
    publishedDate: "September 28, 2024",
    author: {
      name: "Ananya Deshmukh",
      role: "Quality Assurance Director",
    },
    contentHtml: `
      <h2>The Gold Standard in Botanical Authentication</h2>
      <p>Gas Chromatography-Mass Spectrometry (GC-MS) provides an undisputed molecular fingerprint of an essential oil. While gas chromatography separates volatile chemical constituents based on boiling point and polarity, the mass spectrometer identifies each constituent by its specific molecular mass fragmentation pattern.</p>

      <h3>Key Chemical Marker Windows to Inspect</h3>
      <p>When reviewing a Certificate of Analysis (CoA) for Lavender Oil (<em>Lavandula angustifolia</em>), procurement teams should verify that:</p>
      <ul>
        <li><strong>Linalool:</strong> Measures within 25.0% - 45.0%</li>
        <li><strong>Linalyl Acetate:</strong> Measures within 25.0% - 40.0%</li>
        <li><strong>Camphor:</strong> Remains strictly below 0.6% (elevated camphor indicates adulteration with cheaper Lavandin or synthetic blends).</li>
      </ul>

      <h2>Detecting Synthetic Adulteration & Chiral Testing</h2>
      <p>Standard GC-MS can detect common extenders (such as propylene glycol, DEP, or carrier oil cuts). For more sophisticated synthetic compound spiking (e.g. synthetic linalool added to natural lavender), Chiral GC analysis is performed to verify enantiomeric ratios unique to natural enzymatic plant synthesis.</p>
    `,
  },
  {
    slug: "steam-distilled-vs-cold-pressed-oils",
    title: "Steam Distilled vs. Cold Pressed Oils: Extraction Methods Explained",
    excerpt: "Comparing steam distillation, expeller cold pressing, and solvent extraction methods for industrial cosmetic and pharmaceutical grade botanicals.",
    category: "Sourcing",
    readTime: "5 min read",
    publishedDate: "September 12, 2024",
    author: {
      name: "Dr. R. K. Sharma",
      role: "Chief Botanist & Formulation Scientist",
    },
    contentHtml: `
      <h2>The Science of Botanical Extraction</h2>
      <p>The chosen extraction method determines both the yield and the biochemical integrity of active plant metabolites. Different botanical structures require distinct extraction dynamics:</p>

      <h3>1. Steam Distillation</h3>
      <p>Used primarily for leaves, flowers, barks, and roots (e.g. Peppermint, Eucalyptus, Lavender, Frankincense). Pressurized steam passes through plant biomass, vaporizing volatile aromatic compounds. The condensed mixture separates naturally into pure essential oil and water-soluble hydrosol.</p>

      <h3>2. Cold Pressing (Expeller Extraction)</h3>
      <p>Mechanically extracts seed and nut lipids at controlled temperatures (below 45°C) without chemical solvents. This preserves heat-sensitive vitamins, polyphenols, and essential fatty acids in carrier oils like Golden Jojoba and Virgin Argan.</p>

      <h3>3. Solvent & Supercritical CO2 Extraction</h3>
      <p>Delicate floral petals (such as Jasmine Sambac and Rose Damascena) degrade under steam temperatures. Solvent extraction yields rich absolutes with unmatched olfactory fidelity, while CO2 extraction delivers heavy botanical waxes and oleoresins with zero solvent residue.</p>
    `,
  }
];
