export interface Review {
  id: string;
  author: string;
  role: string;
  company: string;
  country: string;
  productName: string;
  rating: number;
  date: string;
  verifiedBuyer: boolean;
  content: string;
}

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    author: "Dr. Marianne Weber",
    role: "Head of Formulation",
    company: "Botanica Dermocosmetics GmbH",
    country: "Germany",
    productName: "Lavender Essential Oil (Kashmir)",
    rating: 5,
    date: "October 2024",
    verifiedBuyer: true,
    content: "We have sourced bulk Lavender Oil from India Essential Oils for over 3 years. The GC-MS linalool/linalyl acetate consistency across batches is exceptional, meeting all our rigorous EU cosmetic standards.",
  },
  {
    id: "rev-2",
    author: "Laurent Mercier",
    role: "Senior Perfumer",
    company: "Maison de Parfum Grasse",
    country: "France",
    productName: "Rose Damascena Absolute",
    rating: 5,
    date: "September 2024",
    verifiedBuyer: true,
    content: "Their Indian Rose Damascena absolute possesses a deep, rich honey-rose facet that is indispensable in our niche fragrance compositions. Packaging and export documentation was flawless.",
  },
  {
    id: "rev-3",
    author: "Siddharth Nambiar",
    role: "Director of R&D",
    company: "AyurVeda Naturals Ltd.",
    country: "United Kingdom",
    productName: "Kumkumadi Tailam & Sandalwood Oil",
    rating: 5,
    date: "August 2024",
    verifiedBuyer: true,
    content: "Authentic classical Taila Paka Vidhi preparation is rare to find at export scale. India Essential Oils delivers true pharmacological grade Ayurvedic formulations with complete batch traceability.",
  },
  {
    id: "rev-4",
    author: "Elena Rostova",
    role: "Quality Assurance Lead",
    company: "PurePharma Wellness Group",
    country: "Switzerland",
    productName: "Peppermint Essential Oil (High Menthol)",
    rating: 5,
    date: "July 2024",
    verifiedBuyer: true,
    content: "The 44%+ natural menthol content in their steam-distilled Peppermint oil exceeds our pharmaceutical baseline. Fast customs clearance and impeccable CoA paperwork.",
  },
  {
    id: "rev-5",
    author: "Kenji Takahashi",
    role: "Procurement Director",
    company: "AromaBio Japan Inc.",
    country: "Japan",
    productName: "Indian Sandalwood Oil (Santalum album)",
    rating: 5,
    date: "June 2024",
    verifiedBuyer: true,
    content: "Total santalol content exceeding 92% confirmed via third-party testing in Tokyo. Transparent sourcing with legal forestry clearances. A highly trusted long-term partner.",
  },
  {
    id: "rev-6",
    author: "Claire O'Connor",
    role: "Founder & Master Blender",
    company: "Nourish Organics Skincare",
    country: "Australia",
    productName: "Golden Jojoba & Argan Carrier Oils",
    rating: 5,
    date: "May 2024",
    verifiedBuyer: true,
    content: "Cold-pressed, unrefined carrier oils with pristine color and zero solvent residue. Our customers constantly praise the velvety texture in our facial serums.",
  }
];
