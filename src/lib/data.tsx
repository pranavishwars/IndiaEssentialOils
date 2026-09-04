import React from "react";
import { 
  Flower2, Flame, Droplet, Flower, Waves, Beaker, Leaf, Sprout,
  Trophy, CheckCircle, Microscope, ShieldCheck, Sparkles
} from "lucide-react";

// Real product data from indiaessentialoils.com
export const PRODUCT_CATEGORIES = [
  {
    id: "co2-oils",
    name: "CO2 Oils (Extracts)",
    slug: "co2-oils",
    isTrending: true,
    badge: "Trending ✨",
    description: "Supercritical fluid CO2 extracted botanical oils capturing full-spectrum, pristine aromatic profiles without thermal degradation or solvent residue.",
    icon: <Sparkles size={24} strokeWidth={1.5} />,
    sampleProducts: ["Ginger CO2 Extract", "Cardamom CO2 Extract", "Turmeric CO2 Extract", "Frankincense CO2 Extract", "Vanilla CO2 Extract", "Pink Pepper CO2 Extract", "German Chamomile CO2 Extract"],
  },
  {
    id: "essential-oils",
    name: "Essential Oils",
    slug: "essential-oils",
    description: "Pure steam distilled and cold pressed essential oils sourced from across India and the world. Available in bulk from 1kg to 200kg drums.",
    icon: <Flower2 size={24} strokeWidth={1.5} />,
    sampleProducts: ["Ambrette Seed Oil", "Amyris Oil", "Angelica Root Oil", "Basil Oil", "Bergamot Oil", "Cedarwood Oil", "Clary Sage Oil", "Clove Bud Oil", "Eucalyptus Oil", "Frankincense Oil", "Geranium Oil", "Ginger Oil", "Jasmine Oil", "Juniper Berry Oil", "Lavender Oil", "Lemon Oil", "Lemongrass Oil", "Marjoram Oil", "Myrrh Oil", "Neroli Oil", "Niaouli Oil", "Orange Oil", "Patchouli Oil", "Peppermint Oil", "Rose Otto Oil", "Rosemary Oil", "Sandalwood Oil", "Tea Tree Oil", "Vetiver Oil", "Ylang Ylang Oil"],
  },
  {
    id: "spice-oils",
    name: "Spice Oils",
    slug: "spice-oils",
    description: "Authentic Indian spice essential oils steam distilled from the finest quality spices grown in India's premier spice-growing regions.",
    icon: <Flame size={24} strokeWidth={1.5} />,
    sampleProducts: ["Black Pepper Oil", "Cardamom Oil", "Cinnamon Bark Oil", "Cinnamon Leaf Oil", "Clove Oil", "Coriander Seed Oil", "Cumin Oil", "Fennel Oil", "Fenugreek Oil", "Ginger Oil", "Mace Oil", "Nutmeg Oil", "Turmeric Oil"],
  },
  {
    id: "carrier-oils",
    name: "Carrier & Base Oils",
    slug: "carrier-oils",
    description: "Premium cold-pressed carrier oils used for diluting essential oils in aromatherapy, massage therapy, and cosmetic formulations.",
    icon: <Droplet size={24} strokeWidth={1.5} />,
    sampleProducts: ["Almond Oil", "Apricot Kernel Oil", "Argan Oil", "Avocado Oil", "Castor Oil", "Coconut Oil", "Evening Primrose Oil", "Grapeseed Oil", "Jojoba Oil", "Neem Oil", "Olive Oil", "Rosehip Oil", "Sesame Oil", "Sunflower Oil", "Wheat Germ Oil"],
  },
  {
    id: "floral-absolute-oils",
    name: "Floral Absolute Oils",
    slug: "floral-absolute-oils",
    description: "Solvent-extracted floral absolutes capturing the true fragrance of flowers, used in high-end perfumery and luxury cosmetics.",
    icon: <Flower size={24} strokeWidth={1.5} />,
    sampleProducts: ["Champaca Absolute", "Jasmine Absolute", "Lotus Absolute", "Mimosa Absolute", "Narcissus Absolute", "Rose Absolute", "Tuberose Absolute", "Violet Leaf Absolute"],
  },
  {
    id: "floral-water",
    name: "Floral Water (Hydrosols)",
    slug: "floral-waters",
    description: "Pure hydrosols and floral waters — the water-based byproduct of steam distillation, rich in therapeutic compounds.",
    icon: <Waves size={24} strokeWidth={1.5} />,
    sampleProducts: ["Chamomile Water", "Jasmine Water", "Lavender Water", "Neroli Water", "Rose Water", "Rosemary Water", "Tea Tree Water"],
  },
  {
    id: "oleoresins",
    name: "Oleoresins",
    slug: "oleoresins",
    description: "Concentrated plant extracts combining essential oil and resinous matter, widely used in food flavouring, pharmaceuticals, and industrial applications.",
    icon: <Beaker size={24} strokeWidth={1.5} />,
    sampleProducts: ["Black Pepper Oleoresin", "Capsicum Oleoresin", "Cardamom Oleoresin", "Celery Oleoresin", "Coriander Oleoresin", "Cumin Oleoresin", "Garlic Oleoresin", "Ginger Oleoresin", "Paprika Oleoresin", "Turmeric Oleoresin"],
  },
  {
    id: "organic-oils",
    name: "Organic Oils",
    slug: "organic-oils",
    description: "Certified organic essential and carrier oils grown without synthetic pesticides or fertilizers. USDA and EU organic certified.",
    icon: <Leaf size={24} strokeWidth={1.5} />,
    sampleProducts: ["Organic Basil Oil", "Organic Clary Sage Oil", "Organic Eucalyptus Oil", "Organic Frankincense Oil", "Organic Geranium Oil", "Organic Lavender Oil", "Organic Lemon Oil", "Organic Peppermint Oil", "Organic Rose Hip Oil", "Organic Rosemary Oil", "Organic Tea Tree Oil"],
  },
  {
    id: "ayurvedic-oils",
    name: "Ayurvedic Oils",
    slug: "ayurvedic-oils",
    description: "Traditional Indian Ayurvedic herbal oils formulated following ancient Ayurvedic texts, used in holistic wellness and therapeutic massage.",
    icon: <Sprout size={24} strokeWidth={1.5} />,
    sampleProducts: ["Ashwagandha Oil", "Bhringraj Oil", "Brahmi Oil", "Kumkumadi Oil", "Mahanarayan Oil", "Neem Oil", "Sesame Ayurvedic Oil", "Triphala Oil"],
  },
];

export const COMPANY_INFO = {
  name: "India Essential Oils",
  parentCompany: "Mother Herbs Pvt. Ltd.",
  location: "New Delhi, India",
  certifications: [
    { name: "ISO 9001:2015", body: "Quality Management System (UKAF/QAMS)", icon: <CheckCircle size={40} strokeWidth={1.5} /> },
    { name: "GMP Compliant", body: "Good Manufacturing Practice (QAMS)", icon: <Microscope size={40} strokeWidth={1.5} /> },
    { name: "Udyam Registration", body: "Ministry of MSME, Govt. of India", icon: <Trophy size={40} strokeWidth={1.5} /> },
    { name: "Incorporation Charter", body: "Registrar of Companies, MCA", icon: <ShieldCheck size={40} strokeWidth={1.5} /> },
    { name: "IndiaMART TrustSeal", body: "Verified Star B2B Exporter", icon: <ShieldCheck size={40} strokeWidth={1.5} /> },
  ],
  about: `India Essential Oils is a commercial manufacturing division of Mother Herbs Pvt. Ltd., operating steam distillation plants and botanical processing facilities in New Delhi, India. Established in 2004, we manufacture and export bulk essential oils, cold-pressed carrier oils, oleoresins, floral absolutes, and certified organic extracts.

We supply verified B2B formulators, cosmetic manufacturers, pharmaceutical houses, and commercial fragrance brands worldwide. Every production run is distilled without synthetic carriers, mineral oil, or chemical extenders, and batch-verified in our laboratory via Gas Chromatography-Mass Spectrometry (GC-MS).

Our industrial catalog spans over 200 botanical oils across 8 primary categories. We fulfill commercial wholesale orders in 25kg fluorinated carboys, 50kg steel drums, and 200kg export drums, accompanied by lot-specific Certificates of Analysis (CoA) and full technical dossiers.`,
  contact: {
    address: "C-39, 2nd Floor, 13th Street, Madhu Vihar, Patparganj, New Delhi - 110092, Delhi, India",
    phone: "+91 8043807715",
    landline: "+91-11-22233301",
    email: "info@motherherbs.com",
    salesEmail: "sales@indiaessentialoils.com",
    indiamart: "https://trustseal.indiamart.com/members/indiaessentialoils/",
  },
  stats: [
    { value: "200+", label: "Botanical Oils" },
    { value: "8", label: "Product Categories" },
    { value: "25+", label: "Years Experience" },
    { value: "Worldwide", label: "Global Delivery" },
  ],
};

export const CERTIFICATIONS = [
  { id: "iso-9001", name: "ISO 9001:2015", issuer: "Quality Management (UKAF/QAMS)", licenseNo: "23UQBJ2932" },
  { id: "gmp", name: "GMP Compliance", issuer: "Good Manufacturing Practices (QAMS)", licenseNo: "23UGBJ3032" },
  { id: "udyam", name: "Udyam MSME Registration", issuer: "Ministry of MSME, Govt. of India", licenseNo: "UDYAM-DL-02-0101578" },
  { id: "incorporation", name: "Certificate of Incorporation", issuer: "Registrar of Companies, Delhi", licenseNo: "U01122DL2006PTC145334" },
  { id: "indiamart", name: "IndiaMART TrustSeal", issuer: "Verified Star B2B Exporter", licenseNo: "IM-TS-981002" },
];

