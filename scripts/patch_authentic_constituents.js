const fs = require("fs");
const path = require("path");

const STORE_PATH = path.join(__dirname, "../src/lib/products-store.ts");

const AUTHENTIC_LEGACY_DATA = {
  "rose-damascena-oil": {
    constituents: "Citronellol, phenyl ethanol, nerol, farnesol, stearpoten, nonanol, linalool, nonanal, phenyl acetaldehyde, citral, carvone, citronellyl acetate, 2-phenylmenthyl acetate, methyl eugenol, eugenol, rose oxide",
    specificGravity: "0.84800 - 0.86100 @ 25 °C",
    refractiveIndex: "1.45200 - 1.46600 @ 25 °C",
    casNo: "8007-01-0",
    femaNo: "2989",
    plantPart: "fresh flowers petals",
    colorOdor: "Pale yellow to clear liquid with rich, sweet, deep floral rosy aroma",
    description: "A deciduous shrub growing to 2.2 m tall, the stems densely armed with stout, curved prickles and stiff bristles. The roses are a light, clear pink with a wonderfully sweet and rich fragrance.",
    properties: "Antidepressant, antiphlogistic, antiseptic, antispasmodic, antiviral, astringent, bactericidal, choleretic, cicatrisant, depurative, emmenagogue, haemostatic, hepatic, laxative, stomachic, and a tonic for the heart, liver, stomach, and uterus",
  },
  "organic-rose-oil": {
    constituents: "Citronellol, phenyl ethanol, nerol, farnesol, stearpoten, nonanol, linalool, nonanal, phenyl acetaldehyde, citral, carvone, citronellyl acetate, 2-phenylmenthyl acetate, methyl eugenol, eugenol, rose oxide",
    specificGravity: "0.84800 - 0.86100 @ 25 °C",
    refractiveIndex: "1.45200 - 1.46600 @ 25 °C",
    casNo: "8007-01-0",
    femaNo: "2989",
    plantPart: "fresh flowers petals",
    colorOdor: "Pale yellow to clear liquid with rich, sweet, deep floral rosy aroma",
    description: "A deciduous shrub growing to 2.2 m tall, the stems densely armed with stout, curved prickles and stiff bristles. Certified 100% organic Rosa damascena petals steam distilled.",
    properties: "Antidepressant, antiphlogistic, antiseptic, antispasmodic, antiviral, astringent, bactericidal, choleretic, cicatrisant, depurative, emmenagogue, haemostatic, hepatic, laxative, stomachic, and a tonic for the heart, liver, stomach, and uterus",
  },
  "lemon-oil": {
    constituents: "Limonene, Citral, Geranial, Citronellyl Acetate, Pinene, carotene, pectin",
    specificGravity: "0.84900 - 0.85500 @ 25 °C",
    refractiveIndex: "1.47400 - 1.47600 @ 20 °C",
    casNo: "8008-56-8",
    femaNo: "2625",
    plantPart: "fruit peel",
    colorOdor: "Pale yellow to greenish yellow liquid with fresh, clean, rich, sweet lemon odor",
    properties: "Anti-anemic, antimicrobial, anti-rheumatic, anti-sclerotic, antiseptic, bactericidal, carminative, cicatrisant, depurative, diaphoretic, diuretic, febrifuge, haemostatic, hepatic, hypotensive, insecticidal, rubefacient, tonic, vermifuge",
  },
  "organic-lemon-oil": {
    constituents: "Limonene, Citral, Geranial, Citronellyl Acetate, Pinene, carotene, pectin",
    specificGravity: "0.84900 - 0.85500 @ 25 °C",
    refractiveIndex: "1.47400 - 1.47600 @ 20 °C",
    casNo: "8008-56-8",
    femaNo: "2625",
    plantPart: "organic fruit peel",
    colorOdor: "Pale yellow to greenish yellow liquid with fresh, clean, rich, sweet lemon odor",
    properties: "Anti-anemic, antimicrobial, anti-rheumatic, anti-sclerotic, antiseptic, bactericidal, carminative, cicatrisant, depurative, diaphoretic, diuretic, febrifuge, haemostatic, hepatic, hypotensive, insecticidal, rubefacient, tonic, vermifuge",
  },
  "sweet-orange-oil": {
    constituents: "Pinene, sabinene, myrcene, limonene, linalool, citronellal, neral, geranial, decylic aldehyde, terpineol, carotin",
    specificGravity: "0.84200 - 0.84600 @ 25 °C",
    refractiveIndex: "1.47200 - 1.47400 @ 20 °C",
    casNo: "8008-57-9",
    femaNo: "2825",
    plantPart: "fruit peel",
    colorOdor: "Yellow-orange to dark orange liquid with sweet, fresh, fruity orange aroma",
    properties: "Antidepressant, antiseptic, antispasmodic, carminative, cholagogue, digestive, febrifuge, sedative, stomachic, tonic",
  },
  "organic-orange-oil": {
    constituents: "Pinene, sabinene, myrcene, limonene, linalool, citronellal, neral, geranial, decylic aldehyde, terpineol, carotin",
    specificGravity: "0.84200 - 0.84600 @ 25 °C",
    refractiveIndex: "1.47200 - 1.47400 @ 20 °C",
    casNo: "8008-57-9",
    femaNo: "2825",
    plantPart: "organic fruit peel",
    colorOdor: "Yellow-orange to dark orange liquid with sweet, fresh, fruity orange aroma",
    properties: "Antidepressant, antiseptic, antispasmodic, carminative, cholagogue, digestive, febrifuge, sedative, stomachic, tonic",
  },
  "spearmint-oil": {
    constituents: "Pinene, carvone, cineole, linalool, limonene, myrcene, caryophyllene, menthol",
    specificGravity: "0.91700 - 0.93400 @ 25 °C",
    refractiveIndex: "1.48400 - 1.49100 @ 20 °C",
    casNo: "8008-79-5",
    femaNo: "3032",
    plantPart: "flowering tops and leaves",
    colorOdor: "Pale yellow to greenish yellow clear liquid with characteristic fresh, sweet, minty herbaceous odor",
    properties: "Antiseptic, antispasmodic, carminative, cephalic, emmenagogue, insecticide, restorative, stimulant",
  },
  "neroli-oil": {
    constituents: "methulacetophenone, carotenoids, monoterpenes, sesquiterpenes, alkaloids synerphrine, methyl, methyl tyramines, triterpenoids, ergosterol, stigmasterol",
    specificGravity: "1.00520 - 1.00680 @ 25 °C",
    refractiveIndex: "1.46800 - 1.47400 @ 20 °C",
    casNo: "8016-38-4",
    femaNo: "2771",
    plantPart: "fresh blossom flowers",
    colorOdor: "Pale yellow to amber liquid with intensely floral, sweet, fresh citrus blossom aroma",
    properties: "Anti-depressant, antispasmodic, anti-bacterial, anti-hypertension, bactericidal, cicatrisant, antiseptic, deodorant, fungicidal, emollient, cytophylactic, hypnotic, tonic, digestive-carminative",
  },
  "myrrh-oil": {
    constituents: "Heerabolene, Limonene, Dipentene, Pinene, Eugenol, Cinnamaldehyde, Cuminaldehyde, Cadinene",
    specificGravity: "0.99500 - 1.01400 @ 25 °C",
    refractiveIndex: "1.51900 - 1.52700 @ 20 °C",
    casNo: "8016-37-3",
    femaNo: "2766",
    plantPart: "gum resin",
    colorOdor: "Dark amber to brown viscous liquid with warm, rich, spicy-balsamic aroma",
    properties: "Anti-catarrhal, anti-inflammatory, antimicrobial, antiphlogistic, antiseptic, astringent, balsamic, carminative, cicatrisant, emmenagogue, expectorant, fungicidal, sedative, stomachic, tonic, vulnerary",
  },
  "bay-leaf-oil": {
    constituents: "Cineole, linalool, alpha-pinene, beta-pinene, alpha-terpineol, chavicol, eugenol, limonene, geranyl acetate, myrcene, methyl chavicol, neral, methyl eugenol",
    specificGravity: "0.94300 - 0.98400 @ 25 °C",
    refractiveIndex: "1.50000 - 1.51000 @ 20 °C",
    casNo: "8002-41-3",
    femaNo: "2121",
    plantPart: "leaves and branchlets",
    colorOdor: "Yellowish brown liquid with strong, spicy, clove-like herbal aroma",
    properties: "Antiseptic, antibiotic, anti-neuralgic, antispasmodic, analgesic, aperitif, astringent, cholagogue, emmenagogue, febrifuge, hepatic, insecticide, stomachic, sudorific, tonic",
  },
  "apricot-oil": {
    constituents: "arginine, histidine, lysine, phenylalanine, valine, leucine, crystine, tryptophanmethionine, linoleic acid, oleic acid",
    specificGravity: "0.95000 - 0.98000 @ 25 °C",
    refractiveIndex: "1.46900 - 1.47300 @ 20 °C",
    casNo: "72869-69-3",
    plantPart: "kernels",
    colorOdor: "Pale yellow to golden yellow liquid with faint, nutty aroma",
    properties: "Emollient, anti-inflammatory, antioxidant, restorative, nourishing, skin conditioning",
  },
  "clove-bud-oil": {
    constituents: "Eugenol, eugenyl acetate, caryophyllene",
    specificGravity: "1.03800 - 1.06000 @ 25 °C",
    refractiveIndex: "1.52700 - 1.53500 @ 20 °C",
  },
  "clove-leaf-oil": {
    constituents: "eugenol, eugenol acetate, iso-eugenol, caryophyllene",
    specificGravity: "1.03600 - 1.04600 @ 25 °C",
    refractiveIndex: "1.53000 - 1.53800 @ 20 °C",
  },
  "peppermint-oil": {
    constituents: "Menthyl Acetate, Menthone, Cineole, Limonene, Phellandrene, Pinene, Beta-Caryophyllene",
    specificGravity: "0.89600 – 0.90800 @ 25 °C",
    refractiveIndex: "1.45800 - 1.46800 @ 20 °C",
  },
  "organic-peppermint-oil": {
    constituents: "Menthyl Acetate, Menthone, Cineole, Limonene, Phellandrene, Pinene, Beta-Caryophyllene",
    specificGravity: "0.89600 – 0.90800 @ 25 °C",
    refractiveIndex: "1.45800 - 1.46800 @ 20 °C",
  },
  "cardamom-oil": {
    constituents: "pinene, sabinene, myrcene, phellandrene, limonene, cineole, terpinene, cymene, terpinolene, linalool, linalyl acetate, terpinen-4-oil, terpineol, terpineol acetate, citronellol, nerol, geraniol, methyl eugenol, trans-nerolidol",
    specificGravity: "0.91700 - 0.94700 @ 25 °C",
    refractiveIndex: "1.46200 - 1.46600 @ 20 °C",
  },
  "black-pepper-oil": {
    constituents: "Limonene, Pinene, Myrcene, Phellandrene, Beta-caryophyllene, Beta-bisabolene, Sabinene, Linalol, Pinocarveol, Alpha-terpineol, Camphene, Terpenene",
  },
  "rosemary-oil": {
    constituents: "Pinenes, Camphene, Limonene, Cineol, Borneol, Camphor, Linalool, Terpineol, Octanone, Bornyl acetate",
    specificGravity: "0.89800 - 0.92200 @ 25 °C",
    refractiveIndex: "1.46600 - 1.47000 @ 25 °C",
  },
  "organic-rosemary-oil": {
    constituents: "Pinenes, Camphene, Limonene, Cineol, Borneol, Camphor, Linalool, Terpineol, Octanone, Bornyl acetate",
    specificGravity: "0.89800 - 0.92200 @ 25 °C",
    refractiveIndex: "1.46600 - 1.47000 @ 25 °C",
  },
  "lemongrass-oil": {
    constituents: "Myrcene, Citronellal, Geranyl acetate, Nerol, Geraniol, Neral, Traces of Limonene and Citral",
    specificGravity: "0.88700 - 0.89900 @ 25 °C",
    refractiveIndex: "1.47800 - 1.49700 @ 20 °C",
  },
  "organic-lemongrass-oil": {
    constituents: "Myrcene, Citronellal, Geranyl acetate, Nerol, Geraniol, Neral, Traces of Limonene and Citral",
    specificGravity: "0.88700 - 0.89900 @ 25 °C",
    refractiveIndex: "1.47800 - 1.49700 @ 20 °C",
  },
  "patchouli-oil": {
    constituents: "b-patchoulene, Guaiene, Caryophyllene, Patchoulene, Seychellene, Bulnesene, Norpatchoulenol, Patchouli alcohol, Pogostol",
    specificGravity: "0.88000 - 0.89400 @ 25 °C",
    refractiveIndex: "1.47100 - 1.47800 @ 20 °C",
  },
  "citronella-oil": {
    constituents: "acetylizable alcohols and aldehydes (citronellal), citronellic acid, borneol, citronellol, nerol, citral, camphene, dipentene, limonene",
    specificGravity: "0.85000 - 0.92000 @ 25 °C",
    refractiveIndex: "1.43000 - 1.52000 @ 20 °C",
  },
  "palmarosa-oil": {
    constituents: "myrcene, linalool, geranyl acetate, dipentene, limonene",
    specificGravity: "0.88000 - 0.89400 @ 25 °C",
    refractiveIndex: "1.47100 - 1.47800 @ 20 °C",
  },
  "eucalyptus-oil": {
    constituents: "cineol, pinene, limonene, cymene, phellandrene, terpinene, aromadendrene",
  },
  "citriodora-oil": {
    constituents: "eucalyptol, pinene, limonene, linalool, alpha-terpineol",
    specificGravity: "0.85800 - 0.87700 @ 25.00 °C",
    refractiveIndex: "1.45100 - 1.46400 @ 20.00 °C",
  },
  "cinnamon-bark-oil": {
    constituents: "Eugenol, Eugenol acetate, Cinnamic aldehyde, Benzyl benzoate",
    specificGravity: "1.01000 - 1.03000 @ 25 °C",
  },
  "coriander-oil": {
    constituents: "Borneol, Linalool, Cineole, Cymene, Terpineol, Dipentene, Phellandrene, Pinene, Terpinolene",
  },
  "fennel-oil": {
    constituents: "trans-anethole, a-pinene, myrcene, fenchone, methyl chavicol, limonene, cineole, anisic aldehyde",
    specificGravity: "0.95300 - 0.97300 @ 25 °C",
    refractiveIndex: "1.51000 - 1.56200 @ 20 °C",
  },
  "ginger-oil": {
    constituents: "pinene, camphene, cineole, linalool, borneol, terpineol, nerol, neral, geranial, geranyl acetate, bisabolene, zingiberene",
    specificGravity: "0.8900 - 0.8990 @ 72 °F",
    refractiveIndex: "1.4950 - 1.5600 @ 72 °F",
  },
  "curry-leaf-oil": {
    constituents: "ß-caryophyllene, ß-gurjunene, ß-elemene, ß-phellandrene, ß-thujene, a-selinene, ß-bisabolene, limonene, ß-trans-ocimene, ß-cadinene",
    specificGravity: "0.86300 - 0.87500 @ 25 °C",
    refractiveIndex: "0.86200 - 0.87800 @ 20 °C",
  },
  "cumin-oil": {
    constituents: "Thymoquinone, nigellone, oleic acid, linoleic acid, calcium, iron, potassium, zinc, selenium, magnesium, vitamin A, vitamin B, niacin, vitamin B2, vitamin C",
    specificGravity: "0.90000 - 0.93500 @ 25.00 °C",
    refractiveIndex: "1.50100 - 1.50600 @ 20.00 °C",
  },
  "black-cumin-seed-oil": {
    constituents: "Thymoquinone, nigellone, oleic acid, linoleic acid, calcium, iron, potassium, zinc, selenium, magnesium, vitamin A, vitamin B, niacin, vitamin B2, vitamin C",
    specificGravity: "0.90000 - 0.93500 @ 25.00 °C",
    refractiveIndex: "1.50100 - 1.50600 @ 20.00 °C",
  },
  "nutmeg-oil": {
    constituents: "Monoterpene hydrocarbons, Oxygenated monoterpenes, Terpinen-4-ol, Pinene, Sabinene, Cineole, Camphene, Limonene, Myristicin, Alpha Terpenene",
  },
  "basil-oil": {
    constituents: "Citronellol, linalool, myrcene, pinene, ocimene, terpineol, linalyl acetate, fenchyl acetate, trans-ocimene, 1,8-cineole, camphor, octanane, methyl eugenol, eugenol, beta-caryophyllene",
    specificGravity: "0.89000 – 0.93000 @ 25 °C",
    refractiveIndex: "1.47950 – 1.48950 @ 20 °C",
  },
  "bergamot-oil": {
    constituents: "Limonene, nerol, linalyl acetate, linalool, γ-terpinene",
    specificGravity: "0.87600 - 0.88400 @ 25 °C",
    refractiveIndex: "1.46400 - 1.46600 @ 20 °C",
  },
  "jojoba-oil": {
    constituents: "Chained C20 and C22 fatty acids and alcohols, two unsaturated bonds",
    specificGravity: "0.90500 - 0.92500 @ 25 °C",
    refractiveIndex: "1.46000 - 1.46800 @ 25 °C",
  },
  "neem-oil": {
    constituents: "Margosic Acid, Nimbin, Nimbidin, Nimbinin, Kaempferol, Azadirone, Quercetin, B-Sitosterol, Praisin, Vanillic Acid, Nimbicetin, Meliacins",
    specificGravity: "0.89000 to 0.89900 @ 25 °C",
    refractiveIndex: "1.47600 to 1.49000 @ 20 °C",
  },
  "almond-oil-sweet": {
    constituents: "benzaldehyde, leucine, valine, phenylalanine, lysine, arginine, hydrocyanic acid",
    specificGravity: "0.92500 – 0.94000 @ 25 °C",
    refractiveIndex: "1.40200 – 1.50550 @ 20 °C",
  },
  "sweet-almond-oil": {
    constituents: "benzaldehyde, leucine, valine, phenylalanine, lysine, arginine, hydrocyanic acid",
    specificGravity: "0.92500 – 0.94000 @ 25 °C",
    refractiveIndex: "1.40200 – 1.50550 @ 20 °C",
  },
  "vetiver-oil": {
    constituents: "benzoic acid, vetiverol, furfurol, vetivone, vetivene, vetivenyl vetivenate",
    specificGravity: "0.99200 - 1.04200 @ 25 °C",
    refractiveIndex: "1.52100 - 1.53100 @ 20 °C",
  },
  "ayurvedic-vetiver-oil": {
    constituents: "benzoic acid, vetiverol, furfurol, vetivone, vetivene, vetivenyl vetivenate",
    specificGravity: "0.99200 - 1.04200 @ 25 °C",
    refractiveIndex: "1.52100 - 1.53100 @ 20 °C",
  },
  "cypriol-oil": {
    constituents: "Cyperene, Selinene, Cyperotundone, Cyperone, Patchoulenone, Sugeonol, Kobusone, Isokobusone",
    specificGravity: "1.00520 to 1.00680 @ 25 °C",
    refractiveIndex: "1.51062 to 1.51100 @ 20 °C",
  },
  "ayurvedic-cypriol-oil": {
    constituents: "Cyperene, Selinene, Cyperotundone, Cyperone, Patchoulenone, Sugeonol, Kobusone, Isokobusone",
    specificGravity: "1.00520 to 1.00680 @ 25 °C",
    refractiveIndex: "1.51062 to 1.51100 @ 20 °C",
  },
  "cedarwood-oil": {
    constituents: "Atlantone, Caryophyllene, Cedrol, Cadinene, α-Cedrene, β-Cedrene, Thujopsene, Widdrol, sesquiterpenes",
  },
  "petitgrain-oil": {
    constituents: "Linalyl Acetate (30–35%), Linalol, Nerol, Alpha-Terpineol, Geranyl Acetate, Limonene, Myrcene",
  },
  "angelica-root-oil": {
    constituents: "Camphene, β-pinene, Sabinene, Limonene, β-phellandrene, Cis-ocimene, Copaene, Bornyl acetate, Terpinen-4-ol, Tridecanolide, Pentadecanolide",
  },
  "ayurvedic-angelica-root-oil": {
    constituents: "Camphene, β-pinene, Sabinene, Limonene, β-phellandrene, Cis-ocimene, Copaene, Bornyl acetate, Terpinen-4-ol, Tridecanolide, Pentadecanolide",
  },
  "hedychium-oil": {
    constituents: "Ethyl ester of p-methoxy cinnamic acid, Sesquiterpenes, Methyl paracumarine acetate, Sitosterol and its glycoside",
  },
  "ayurvedic-hedychium-oil": {
    constituents: "Ethyl ester of p-methoxy cinnamic acid, Sesquiterpenes, Methyl paracumarine acetate, Sitosterol and its glycoside",
  },
  "calamus-oil": {
    constituents: "Acorenone, b-gurjunene, Isoshyobunine, b-asarone, Calamendiol, a-selinene, a-calacorene, Calamusenone, Camphone, Shyobunone",
  },
  "ayurvedic-calamus-oil": {
    constituents: "Acorenone, b-gurjunene, Isoshyobunine, b-asarone, Calamendiol, a-selinene, a-calacorene, Calamusenone, Camphone, Shyobunone",
  },
  "wintergreen-oil": {
    constituents: "gaultherin, salicylic acid, methyl salicylate (98–100.5%), mucilage, resin, tannins",
  },
  "gandhapura-oil": {
    constituents: "gaultherin, salicylic acid, methyl salicylate (98–100.5%), mucilage, resin, tannins",
  },
  "ayurvedic-gaultheria-oil": {
    constituents: "gaultherin, salicylic acid, methyl salicylate (98–100.5%), mucilage, resin, tannins",
  },
  "gaultheria-fragrantissima-oil": {
    constituents: "gaultherin, salicylic acid, methyl salicylate (98–100.5%), mucilage, resin, tannins",
  },
  "clary-sage-oil": {
    constituents: "Linalol, Sclareol, Myrcene, Phellandrene, Pinene",
  },
  "thyme-oil": {
    constituents: "α-thujene, pinene, camphene, cymene, terpinene, linalool, borneol, caryophyllene, thymol, carvacrol",
    specificGravity: "0.91100 - 0.91800 @ 25 °C",
  },
  "oregano-oil": {
    constituents: "Carvacrol (40–70%), gamma-terpinene (8–10%), p-cymene (5–10%), alpha-pinene, myrcene, thymol, flavonoids, caffeic acid derivatives",
    specificGravity: "0.93800 - 0.93880 @ 20 °C",
  },
  "ayurvedic-oregano-oil": {
    constituents: "Carvacrol (40–70%), gamma-terpinene (8–10%), p-cymene (5–10%), alpha-pinene, myrcene, thymol, flavonoids, caffeic acid derivatives",
    specificGravity: "0.93800 - 0.93880 @ 20 °C",
  },
  "caraway-oil": {
    constituents: "Acetaldehyde, Furfurol, Carvone, Cumuninic aldehyde, Limonene",
    specificGravity: "0.90000 – 0.91000 @ 25 °C",
  },
  "tea-tree-oil": {
    constituents: "Terpinen-4-ol, Cineol, Pinene, Terpinenes, Cymene, Sesquiterpenes",
  },
  "lavender-oil": {
    specificGravity: "0.87500 – 0.88800 @ 25 °C",
    refractiveIndex: "1.45900 – 1.46900 @ 20 °C",
  },
  "carrot-seed-oil": {
    constituents: "α-pinene, camphene, β-pinene, sabinene, myrcene, γ-terpinene, limonene, β-bisabolene, geranyl acetate, carotol",
    specificGravity: "0.90000 – 0.93400 @ 25 °C",
  },
  "davana-oil": {
    constituents: "crystalline pentacyclic alcohol, fernenol, cymene, azulene, thujone, linalool, thujyl alcohol, amyrin, sitosterol, stigmasterol",
    specificGravity: "0.94200 – 0.97030 @ 25 °C",
  },
  "garlic-oil": {
    constituents: "Volatile oil, aliin, allicin, ajoene, allylpropl, diallyl, trisulfide, sallylcysteine, vinyldithiines, S-allylmercaptocystein, glycosides, arginine, allinase, peroxidases, myrosinase",
    specificGravity: "1.04000 - 1.09000 @ 25 °C",
  },
  "onion-oil": {
    constituents: "Major constituents are sulfides",
    specificGravity: "1.04020 - 1.142045 @ 72 °F",
  },
  "celery-oil": {
    constituents: "Limonene (70 to 80%), sesquiterpenes ß-selinene (10%) and humulene",
    specificGravity: "0.87000 - 0.91000 @ 25 °C",
  },
  "chamomile-oil-blue": {
    constituents: "Chamazulene, bisabolol oxide A, a-bisabolol, bisabolol oxide B, bisabolone oxide A, flavonoids, coumarins, plant acids, fatty acids",
    specificGravity: "0.91300 - 0.95300 @ 25 °C",
  },
  "chamomile-oil-roman": {
    constituents: "Angelic, Azulene, Methacrylic, Butyric, and Tiglic Acids",
    specificGravity: "0.87900 - 0.90400 @ 25 °C",
  },
  "bitter-orange-oil": {
    constituents: "limonene, camphene, myrcene, pinene, cymene, ocimene",
    specificGravity: "0.84500 – 0.85100 @ 25.00 °C",
  },
};

function injectSpecs(overview, data, commonName, botanicalName) {
  let cleaned = overview || "";
  cleaned = cleaned.replace(/Key constituents include [^.]+\.\s*/gi, "");
  cleaned = cleaned.replace(/Specific Gravity\s*:[^.]+\.\s*/gi, "");
  cleaned = cleaned.replace(/Refractive Index\s*:[^.]+\.\s*/gi, "");
  if (data.casNo) cleaned = cleaned.replace(/CAS\s*(?:No|#)?[^F.]+\.?\s*/gi, "");
  if (data.femaNo) cleaned = cleaned.replace(/F\.?E\.?M\.?A\.?\s*:[^.]+\.?\s*/gi, "");

  const insertParts = [];
  if (data.plantPart && !cleaned.includes("from " + data.plantPart)) {
    // If not already in overview header, add it
  }
  if (data.constituents) insertParts.push("Key constituents include " + data.constituents + ".");
  if (data.specificGravity) insertParts.push("Specific Gravity : " + data.specificGravity + ".");
  if (data.refractiveIndex) insertParts.push("Refractive Index : " + data.refractiveIndex + ".");
  if (data.casNo) insertParts.push("CAS No: " + data.casNo);
  if (data.femaNo) insertParts.push("F.E.M.A. : " + data.femaNo + ".");

  if (insertParts.length === 0) return overview;
  const insertStr = insertParts.join(" ");

  if (data.plantPart && !cleaned.includes("from " + data.plantPart)) {
    cleaned = cleaned.replace(
      new RegExp(`^${commonName}(?: \\([^)]+\\))?\\.?`, "i"),
      `${commonName} (${botanicalName}), extracted by steam distillation, from ${data.plantPart}.`
    );
  }

  if (cleaned.includes("CAS No")) {
    return cleaned.replace(/\s*CAS No/, " " + insertStr + " CAS No");
  } else if (cleaned.includes("CAS #")) {
    return cleaned.replace(/\s*CAS #/, " " + insertStr + " CAS #");
  } else if (cleaned.includes("Supplied as")) {
    return cleaned.replace(/\s*Supplied as/, " " + insertStr + " Supplied as");
  } else {
    return (cleaned + " " + insertStr).trim();
  }
}

function injectHistory(history, data) {
  let h = history || "";
  if (data.properties && !h.includes("Known properties:")) {
    h = "Known properties: " + data.properties + ".. " + h;
  }
  if (data.description && !h.includes("Description :")) {
    h = "Description : " + data.description + ".. " + h;
  }
  if (data.colorOdor && !h.includes("Color & Odor:")) {
    h = "Color & Odor: " + data.colorOdor + ". " + h;
  }
  return h;
}

// Read products-store.ts
const content = fs.readFileSync(STORE_PATH, "utf8");
const match = content.match(/export const INITIAL_PRODUCTS: Product\[\] = (\[[\s\S]*?\n\]);/);
if (!match) {
  console.error("Could not find INITIAL_PRODUCTS in products-store.ts");
  process.exit(1);
}

const products = JSON.parse(match[1]);
let updatedCount = 0;

for (const p of products) {
  const data = AUTHENTIC_LEGACY_DATA[p.slug];
  if (data) {
    p.overview = injectSpecs(p.overview, data, p.name, p.botanicalName);
    p.history = injectHistory(p.history, data);
    updatedCount++;
    console.log(`Updated authentic specs & history for ${p.slug}`);
  }
}

console.log(`Total products updated: ${updatedCount}`);

// Serialize back with proper 2-space indentation
const newJson = JSON.stringify(products, null, 2);
const newContent = content.replace(
  /export const INITIAL_PRODUCTS: Product\[\] = \[[\s\S]*?\n\];/,
  `export const INITIAL_PRODUCTS: Product[] = ${newJson};`
);

fs.writeFileSync(STORE_PATH, newContent, "utf8");
console.log("Successfully wrote updated products-store.ts!");
