export interface GCMSCompound {
  name: string;
  percentage: number;
  expectedRange: string;
}

export interface BatchReport {
  batchCode: string;
  productName: string;
  botanicalName: string;
  distillationDate: string;
  expiryDate: string;
  origin?: string;
  harvestFarm?: string;
  extractionMethod: string;
  specificGravity: string;
  refractiveIndex: string;
  opticalRotation: string;
  appearance: string;
  status: "PASSED" | "AUTHENTICATED";
  compounds: GCMSCompound[];
}

export const BATCH_DATABASE: Record<string, BatchReport> = {
  "IEO-LAV-2024-08": {
    batchCode: "IEO-LAV-2024-08",
    productName: "Lavender Essential Oil",
    botanicalName: "Lavandula angustifolia",
    distillationDate: "August 12, 2024",
    expiryDate: "August 2027",
    extractionMethod: "Steam Distillation (Low Pressure)",
    specificGravity: "0.884 @ 20°C (Standard: 0.880 - 0.890)",
    refractiveIndex: "1.461 @ 20°C (Standard: 1.458 - 1.464)",
    opticalRotation: "-9.2° (Standard: -11° to -6°)",
    appearance: "Clear, pale yellow liquid with fresh sweet-floral aroma",
    status: "PASSED",
    compounds: [
      { name: "Linalool", percentage: 38.4, expectedRange: "25.0 - 45.0%" },
      { name: "Linalyl Acetate", percentage: 34.8, expectedRange: "25.0 - 40.0%" },
      { name: "Lavandulyl Acetate", percentage: 4.2, expectedRange: "2.0 - 6.0%" },
      { name: "beta-Caryophyllene", percentage: 3.6, expectedRange: "1.5 - 5.0%" },
      { name: "Terpinen-4-ol", percentage: 2.8, expectedRange: "1.0 - 5.0%" },
      { name: "Lavandulol", percentage: 1.5, expectedRange: "0.5 - 3.0%" },
      { name: "Ocimene (cis/trans)", percentage: 4.1, expectedRange: "2.0 - 8.0%" },
    ],
  },
  "IEO-SAN-2024-05": {
    batchCode: "IEO-SAN-2024-05",
    productName: "Indian Sandalwood Essential Oil",
    botanicalName: "Santalum album",
    distillationDate: "May 18, 2024",
    expiryDate: "May 2030",
    extractionMethod: "Hydro-Distillation of Heartwood",
    specificGravity: "0.974 @ 20°C (Standard: 0.965 - 0.980)",
    refractiveIndex: "1.505 @ 20°C (Standard: 1.500 - 1.510)",
    opticalRotation: "-17.8° (Standard: -20° to -15°)",
    appearance: "Viscous pale yellow liquid with warm precious woody aroma",
    status: "PASSED",
    compounds: [
      { name: "alpha-Santalol", percentage: 53.8, expectedRange: "> 41.0%" },
      { name: "beta-Santalol", percentage: 21.4, expectedRange: "> 16.0%" },
      { name: "epi-beta-Santalol", percentage: 4.6, expectedRange: "2.0 - 6.0%" },
      { name: "alpha-Bergamotol", percentage: 3.2, expectedRange: "1.0 - 4.0%" },
      { name: "Total Santalol Content", percentage: 92.6, expectedRange: "> 90.0%" },
    ],
  },
  "IEO-PEP-2024-09": {
    batchCode: "IEO-PEP-2024-09",
    productName: "Peppermint Essential Oil",
    botanicalName: "Mentha piperita",
    distillationDate: "September 04, 2024",
    expiryDate: "September 2027",
    extractionMethod: "Steam Distillation of Flowering Tops",
    specificGravity: "0.902 @ 20°C (Standard: 0.896 - 0.910)",
    refractiveIndex: "1.460 @ 20°C (Standard: 1.458 - 1.465)",
    opticalRotation: "-24.6° (Standard: -30° to -18°)",
    appearance: "Colorless to pale green clear liquid with crisp menthol aroma",
    status: "PASSED",
    compounds: [
      { name: "Menthol", percentage: 44.2, expectedRange: "35.0 - 55.0%" },
      { name: "Menthone", percentage: 22.6, expectedRange: "14.0 - 32.0%" },
      { name: "Menthyl Acetate", percentage: 6.4, expectedRange: "3.0 - 9.0%" },
      { name: "Menthofuran", percentage: 3.1, expectedRange: "1.0 - 6.0%" },
      { name: "1,8-Cineole", percentage: 5.8, expectedRange: "3.5 - 8.0%" },
      { name: "Isomenthone", percentage: 4.2, expectedRange: "2.0 - 8.0%" },
    ],
  },
  "IEO-TEA-2024-07": {
    batchCode: "IEO-TEA-2024-07",
    productName: "Tea Tree Essential Oil",
    botanicalName: "Melaleuca alternifolia",
    distillationDate: "July 22, 2024",
    expiryDate: "July 2027",
    extractionMethod: "Steam Distillation of Leaves",
    specificGravity: "0.894 @ 20°C (Standard: 0.885 - 0.906)",
    refractiveIndex: "1.478 @ 20°C (Standard: 1.475 - 1.482)",
    opticalRotation: "+8.4° (Standard: +5° to +15°)",
    appearance: "Clear water-white liquid with warm spicy-medicinal aroma",
    status: "PASSED",
    compounds: [
      { name: "Terpinen-4-ol", percentage: 42.6, expectedRange: "> 35.0%" },
      { name: "gamma-Terpinene", percentage: 21.2, expectedRange: "14.0 - 28.0%" },
      { name: "alpha-Terpinene", percentage: 9.4, expectedRange: "6.0 - 12.0%" },
      { name: "1,8-Cineole", percentage: 2.8, expectedRange: "< 5.0%" },
      { name: "alpha-Terpineol", percentage: 3.5, expectedRange: "1.5 - 8.0%" },
      { name: "p-Cymene", percentage: 2.1, expectedRange: "0.5 - 8.0%" },
    ],
  },
  "IEO-ROSE-2024-06": {
    batchCode: "IEO-ROSE-2024-06",
    productName: "Rose Damascena Absolute",
    botanicalName: "Rosa damascena",
    distillationDate: "June 10, 2024",
    expiryDate: "June 2028",
    extractionMethod: "Food Grade Solvent Extraction",
    specificGravity: "0.962 @ 20°C (Standard: 0.950 - 0.990)",
    refractiveIndex: "1.512 @ 20°C (Standard: 1.500 - 1.520)",
    opticalRotation: "-2.8° (Standard: -5° to +1°)",
    appearance: "Deep orange-red viscous liquid with intense rich floral honey aroma",
    status: "PASSED",
    compounds: [
      { name: "Phenylethyl Alcohol", percentage: 68.4, expectedRange: "60.0 - 75.0%" },
      { name: "Citronellol", percentage: 11.2, expectedRange: "8.0 - 15.0%" },
      { name: "Geraniol", percentage: 5.6, expectedRange: "4.0 - 8.0%" },
      { name: "Nerol", percentage: 3.8, expectedRange: "2.0 - 5.0%" },
      { name: "Eugenol", percentage: 1.4, expectedRange: "0.5 - 2.5%" },
    ],
  }
};
