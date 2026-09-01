import { NextResponse } from "next/server";
import { productStore } from "@/lib/products-store";
import { COMPANY_INFO } from "@/lib/data";

export async function GET() {
  const products = productStore.getAll();

  const header = `================================================================================
INDIA ESSENTIAL OILS — OFFICIAL BOTANICAL WHOLESALE CATALOG (2026 EDITION)
A Division of ${COMPANY_INFO.parentCompany}
Address: ${COMPANY_INFO.contact.address}
Phone: ${COMPANY_INFO.contact.phone} | Landline: ${COMPANY_INFO.contact.landline}
Email: ${COMPANY_INFO.contact.email} | ${COMPANY_INFO.contact.salesEmail}
Web: https://indiaessentialoils.com
Certifications: ISO 9001:2015, ISO 22000:2005, WHO-GMP, NPOP Organic, IndiaMART TrustSeal
================================================================================

Total Verified Botanical Products: ${products.length}
Packaging Suites: 10ml–500ml Glass (Amber, Clear, Matte) | 1kg–25kg Aluminum | 20kg–200kg HDPE/Steel
Cleanroom Nitrogen Inerting, Cushion Box Packing & Turnkey Private Labeling Available.
Standard Dispatch: Within 48 Hours of Payment.

--------------------------------------------------------------------------------
INDEX OF BOTANICAL PRODUCTS:
--------------------------------------------------------------------------------
`;

  const rows = products.map((p, idx) => {
    const benefitStr = p.benefits?.map(b => `${b.title}: ${b.description}`).join("; ") || "Aromatherapy, Formulation, Active Ingredients";
    return `[${idx + 1}] ${p.name.toUpperCase()}
Category:       ${p.category.replace(/_/g, " ")}
Botanical Name: ${p.botanicalName || "Pure Botanical Distillate"}
Specification:  ${p.shortSpec}
Standard MOQ:   ${p.moq || "1 kg / 500 Units"}
Retail Format:  ${p.bottleFormat.replace(/_/g, " ")}
Key Benefits:   ${benefitStr}
Description:    ${p.description}
--------------------------------------------------------------------------------`;
  }).join("\n\n");

  const fullText = header + "\n" + rows;

  return new Response(fullText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="India-Essential-Oils-Botanical-Catalog-2026.txt"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
