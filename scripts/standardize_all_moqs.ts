import fs from "fs";
import path from "path";

const productsStorePath = path.resolve(__dirname, "../src/lib/products-store.ts");
let content = fs.readFileSync(productsStorePath, "utf-8");

// Regex replace every moq line based on category or directly to standard wholesale MOQs
// First replace all "moq": "X" to standard values
// Let's replace any gram values (5 g, 50 g, 100 g, 250 g, 500 g, etc.) and small kg values (1 kg, 5 kg)
content = content.replace(/"moq":\s*"(?:5\s*g|10\s*g|25\s*g|50\s*g|100\s*g|250\s*g|500\s*g|1\s*kg|5\s*kg)"/gi, '"moq": "25 kg"');

// Clean up any verbose suffixes like "(Steel Drum)", "(Carboy)", "(Drum)" so the MOQ string is clean and concise: "25 kg", "50 kg", "100 kg", "10 kg"
content = content.replace(/"moq":\s*"50 kg \(Steel Drum\)"/g, '"moq": "50 kg"');
content = content.replace(/"moq":\s*"100 kg \(Drum\)"/g, '"moq": "100 kg"');
content = content.replace(/"moq":\s*"10 kg \(Carboy\)"/g, '"moq": "10 kg"');
content = content.replace(/"moq":\s*"25 kg \(Carboy\)"/g, '"moq": "25 kg"');

// Specifically ensure Carrier Oils have "50 kg"
content = content.replace(/"category":\s*"CARRIER_OIL",([\s\S]*?)"moq":\s*"[^"]*"/g, '"category": "CARRIER_OIL",$1"moq": "50 kg"');

// Specifically ensure Floral Waters have "100 kg"
content = content.replace(/"category":\s*"FLORAL_WATER",([\s\S]*?)"moq":\s*"[^"]*"/g, '"category": "FLORAL_WATER",$1"moq": "100 kg"');

// Specifically ensure Floral Absolutes have "10 kg"
content = content.replace(/"category":\s*"FLORAL_ABSOLUTE",([\s\S]*?)"moq":\s*"[^"]*"/g, '"category": "FLORAL_ABSOLUTE",$1"moq": "10 kg"');

fs.writeFileSync(productsStorePath, content, "utf-8");
console.log("Successfully standardized all MOQs across products-store.ts.");
