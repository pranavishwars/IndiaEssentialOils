import re, json

# Specialized knowledge mapping for popular plants and regions in India & world
BOTANICAL_TERROIR = {
    "lavender": ("Kashmir Valley, Western Himalayas", "Linalool (38%+), Linalyl Acetate (35%+)", "Temperate sub-alpine slopes at 1,800m altitude"),
    "peppermint": ("Uttar Pradesh Terai alluvial plains", "Menthol (45%+), Menthone (20%+)", "Rich Gangetic loam with high summer solar radiation"),
    "tea-tree": ("Assam Valley & Southern plantations", "Terpinen-4-ol (42%+), Gamma-Terpinene", "Sub-tropical humid lowlands with pristine riverine irrigation"),
    "rosemary": ("Nilgiri Hills, Tamil Nadu", "1,8-Cineole (45%+), Alpha-Pinene, Camphor", "Cool montane elevation with continuous misty cloud cover"),
    "eucalyptus": ("Nilgiri Blue Mountains, South India", "Eucalyptol / 1,8-Cineole (82%+), Alpha-Pinene", "High-altitude eucalyptus plantations harvested since 1843"),
    "frankincense": ("Shekhawati / Aravalli Hills, Rajasthan", "Alpha-Pinene (52%+), Boswellic derivatives", "Arid rocky calcareous soils yielding high-resin oleogum"),
    "sandalwood": ("Mysore & Western Ghats, Karnataka", "Alpha-Santalol (48%+), Beta-Santalol (24%+)", "Deccan red laterite soils with traditional agroforestry stewardship"),
    "lemongrass": ("Cochin / Wayanad, Kerala", "Citral (78%+), Geraniol, Myrcene", "Malabar tropical coastal terroir receiving dual monsoons"),
    "citronella": ("Assam & Brahmaputra valley", "Citronellal (35%+), Geraniol (22%+)", "Humid tropical alluvial floodplains with fertile organic silt"),
    "palmarosa": ("Satpura Range, Madhya Pradesh", "Geraniol (85%+), Geranyl Acetate", "Wild grassland plateaus harvested before midday peak heat"),
    "patchouli": ("Coastal Karnataka & Western Ghats", "Patchoulol (32%+), Alpha-Bulnesene", "Shaded tropical understory with deep humus forest floor"),
    "vetiver": ("Bharatpur, Rajasthan & Bundelkhand", "Khusimol (18%+), Vetivone, Isovalencenol", "Heavy alluvial clay soil where root systems anchor 3 meters deep"),
    "black-pepper": ("Wayanad & Idukki, Kerala", "Beta-Caryophyllene (28%+), Piperine, Limonene", "Malabar spice highlands legendary since Roman trade routes"),
    "cardamom": ("Cardamom Hills, Idukki, Kerala", "Terpinyl Acetate (40%+), 1,8-Cineole (32%+)", "Shaded evergreen rainforest canopy at 1,000m elevation"),
    "ginger": ("Cochin & Wayanad, Kerala", "Zingiberene (35%+), Curcumene, Gingerols", "Organic mountain loam renowned for intense aromatic pungency"),
    "clove": ("Kanyakumari & Nilgiris, Tamil Nadu", "Eugenol (86%+), Eugenyl Acetate", "Coastal maritime humid microclimate of Southern peninsular India"),
    "cinnamon": ("Malabar Coast & Sri Lanka borderlands", "Cinnamaldehyde (72%+), Eugenol (8%+)", "Tropical coastal laterite belt harvested from peeled coppiced shoots"),
    "holy-basil": ("Vrindavan / Mathura plains, Uttar Pradesh", "Eugenol (55%+), Beta-Caryophyllene", "Sacred organic cultivation under strict Ayurvedic protocols"),
    "jojoba": ("Thar Desert, Rajasthan", "Gadoleic Acid (72%), Erucic Acid, Wax Esters", "Arid sunshine terroir producing ultra-stable liquid wax esters"),
    "castor": ("Kutch & Saurashtra, Gujarat", "Ricinoleic Acid (88%+), Oleic Acid", "Semi-arid saline-tolerant soil with high seed oil concentration"),
    "moringa": ("Madurai & Dindigul, Tamil Nadu", "Oleic Acid (73%+), Behenic Acid", "Semi-arid tropical plains yielding cold-hardy nutrient-rich seeds"),
    "rosehip": ("Himalayan alpine valleys & Kashmir", "Linoleic Acid (44%), Alpha-Linolenic Acid (34%)", "Sub-zero winter frost hardening seed antioxidant reserves"),
    "argan": ("Souss Valley / Atlas Biosphere", "Oleic Acid (48%), Linoleic Acid (33%), Tocopherols", "UNESCO Biosphere reserve arid limestone mineral soils"),
    "neem": ("Bundelkhand & Central Deccan, India", "Azadirachtin A/B, Nimbin, Salannin", "Sun-baked drought-tolerant native woodland agroforestry"),
    "rose": ("Pushkar, Rajasthan & Aligarh, UP", "Citronellol (38%), Geraniol (20%), Rose Oxide", "Chaitri Rose blooming cycle harvested before sunrise"),
    "jasmine": ("Madurai, Tamil Nadu", "Benzyl Acetate (25%), Linalool, Jasmone", "Geographical Indication (GI) certified dawn flower harvest"),
}

def generate_overview(name, botanical, cat, spec):
    name_clean = name.lower()
    for key, (region, actives, terroir) in BOTANICAL_TERROIR.items():
        if key in name_clean:
            return (
                f"Distilled from prime {botanical if botanical else name} cultivated in the renowned terroir of {region}. "
                f"This botanical lot exhibits an exceptional volatile fraction highlighted by {actives}, grown under {terroir}. "
                f"Revered across industrial fragrance, skincare compounding, and therapeutic wellness formulations."
            )
    
    # Generic intelligent generator based on Category & Botanical
    if cat == "SPICE_OIL":
        return (
            f"Derived from steam distillation of select {botanical if botanical else name} sourced directly from India's prime spice growing belts. "
            f"Characterized by intense pungent and warming aromatic notes with superior volatile purity, making it ideal for flavor compounding, nutraceutical active supply, and topical formulations."
        )
    elif cat == "CARRIER_OIL":
        return (
            f"Single-pass cold expeller pressed from non-GMO seeds of {botanical if botanical else name}. "
            f"Rich in bio-compatible essential fatty acids and natural lipid-soluble antioxidants, offering superb skin emollience, rapid dermal absorption, and high oxidative stability for cosmetic formulation."
        )
    elif cat == "FLORAL_ABSOLUTE":
        return (
            f"Artisanal low-temperature solvent extracted from freshly blossomed {botanical if botanical else name}. "
            f"Captures the true, unadulterated olfactory identity of the living flower with extraordinary aromatic depth, fixative persistence, and multifaceted floral nuances for luxury fine fragrance creation."
        )
    elif cat == "OLEORESIN":
        return (
            f"Standardized full-spectrum botanical extract derived from {botanical if botanical else name}. "
            f"Combines both volatile essential oil components and non-volatile pungent/pigment fractions, delivering standardized active potency, reliable consistency, and extended shelf stability for food and pharmaceutical applications."
        )
    elif cat == "ORGANIC_OIL":
        return (
            f"Certified organic extraction of {botanical if botanical else name} grown on certified organic farms adhering to USDA NOP and EU organic standards. "
            f"Harvested with zero synthetic agrochemicals and steam-distilled under gentle vapor pressure to preserve the full energetic and chemical integrity of the raw botanical."
        )
    elif cat == "AYURVEDIC":
        return (
            f"Authentic Ayurvedic grade botanical oil of {botanical if botanical else name}, processed in strict accordance with classical Ayurvedic Pharmacopoeia guidelines. "
            f"Prized for balancing elemental Doshas (Vata, Pitta, Kapha) and serving as an active therapeutic agent in classical external taila formulations and wellness protocols."
        )
    else:
        return (
            f"100% pure steam distilled {name} ({botanical if botanical else 'Botanical'}) sourced from prime Indian harvesting regions. "
            f"Features a clean, characteristic aromatic signature with high chromatographic purity verified by rigorous GC-MS testing for commercial perfumery, aromatherapy, and cosmetics."
        )

def generate_history(name, botanical, cat):
    name_clean = name.lower()
    if "ayurved" in cat.lower() or "holy basil" in name_clean or "tulsi" in name_clean or "vetiver" in name_clean or "calamus" in name_clean:
        return (
            f"Documented extensively in the ancient Charaka Samhita and Sushruta Samhita treatises spanning over 3,000 years of traditional Indian medicinal heritage. "
            f"Harvesting follows time-tested seasonal cycles aligned with lunar and diurnal peaks in plant bio-energy, preserved by generational farming communities."
        )
    elif cat == "SPICE_OIL" or "pepper" in name_clean or "cardamom" in name_clean or "clove" in name_clean or "ginger" in name_clean:
        return (
            f"Central to the historic Maritime Spice Routes connecting the Malabar Coast of India to ancient Alexandria, Venice, and Lisbon. "
            f"Traditional spice-grower cooperatives hand-harvest crops at peak maturity, utilizing solar drying and traditional hydro-distillation stills upgraded with modern 316 stainless steel condensation chambers."
        )
    elif cat == "FLORAL_ABSOLUTE" or "jasmine" in name_clean or "rose" in name_clean or "lotus" in name_clean:
        return (
            f"Integral to the historic royal perfumery of Kannauj (the Grasse of the East) dating back to the Mughal courts. "
            f"The delicate petals are hand-harvested exclusively at pre-dawn twilight before direct sunlight can evaporate delicate floral volatiles, ensuring complete olfactory fidelity."
        )
    elif cat == "CARRIER_OIL" or "argan" in name_clean or "castor" in name_clean or "almond" in name_clean:
        return (
            f"Employed for millennia across Mediterranean, Ayurvedic, and traditional skincare rituals as nourishing lipid bases and medicinal carriers. "
            f"Sustainably harvested in partnership with smallholder farming clusters and pressed using friction-controlled expellers that preserve delicate tocopherols and essential fatty acids."
        )
    else:
        return (
            f"Cultivated and distilled across India's microclimatic agricultural zones through multi-generational farming partnerships. "
            f"Combines age-old regional harvesting wisdom with modern zero-solvent distillation engineering to supply global cosmetic, pharmaceutical, and aromatherapy houses."
        )

def generate_benefits(name, botanical, cat):
    name_clean = name.lower()
    if cat == "CARRIER_OIL":
        return [
            {"title": "Intensive Lipid Barrier Restoration", "description": f"Reinforces the stratum corneum with bio-identical fatty acids to prevent trans-epidermal water loss (TEWL)."},
            {"title": "Non-Comedogenic Dermal Nutrition", "description": f"Delivers high natural tocopherols and phytosterols to soothe oxidative cellular stress without clogging pores."},
            {"title": "Versatile Carrier Vehicle", "description": f"Serves as an optimal solubilizing and penetration-enhancing base for essential oils and cosmetic actives."}
        ]
    elif cat == "SPICE_OIL" or cat == "OLEORESIN":
        return [
            {"title": "Thermal Microcirculation Stimulation", "description": f"Contains natural warming active compounds that encourage localized vascular circulation and muscular relaxation."},
            {"title": "Broad-Spectrum Antimicrobial Activity", "description": f"Demonstrates documented efficacy against common microbial strains, aiding natural formulation preservation."},
            {"title": "Standardized Pungency & Flavor Potency", "description": f"Provides consistent organoleptic and flavor characteristics for high-end culinary and nutraceutical manufacturing."}
        ]
    elif cat == "FLORAL_ABSOLUTE":
        return [
            {"title": "Extraordinary Olfactory Tenacity", "description": f"Acts as an opulent heart-to-base note with unmatched fixative longevity in luxury fine fragrances."},
            {"title": "Emotional Calming & Mood Elevation", "description": f"Inhalation naturally down-regulates sympathetic nervous tension, promoting psychological tranquility."},
            {"title": "Cellular Rejuvenation for Mature Skin", "description": f"Nourishes delicate skin tissue and restores suppleness in premium anti-aging botanical elixirs."}
        ]
    elif cat == "AYURVEDIC":
        return [
            {"title": "Classical Tridoshic Harmonization", "description": f"Formulated to pacify aggravated Doshas according to traditional Ayurvedic pharmacological principles."},
            {"title": "Adaptogenic & Nervine Vitality", "description": f"Supports physical homeostasis and cognitive grounding during times of metabolic and environmental stress."},
            {"title": "Dermal Detoxification & Tissue Tonification", "description": f"Enhances lymphatic drainage and deep tissue revitalization in classical Abhyanga massage."}
        ]
    else: # ESSENTIAL_OIL & ORGANIC_OIL
        return [
            {"title": "Aromatherapeutic Neurological Balance", "description": f"Inhaled monoterpenes interact with the limbic olfactory receptors to induce mental focus and relaxation."},
            {"title": "Topical Purification & Clarifying Care", "description": f"Possesses natural cleansing and astringent properties suited for blemish-prone and oily skin types."},
            {"title": "Natural Antiseptic & Airborne Refreshment", "description": f"Purifies ambient air in vaporizers and strengthens commercial formulations with clean plant actives."}
        ]

