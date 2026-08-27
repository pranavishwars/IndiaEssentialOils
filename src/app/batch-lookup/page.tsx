"use client";

import React, { useState } from "react";
import { Search, ShieldCheck, CheckCircle2, FileText, Download, Calendar, MapPin, FlaskConical, Award } from "lucide-react";
import { BATCH_DATABASE, BatchReport } from "@/lib/batch-data";

export default function BatchLookupPage() {
  const [inputCode, setInputCode] = useState("IEO-LAV-2024-08");
  const [activeReport, setActiveReport] = useState<BatchReport | null>(BATCH_DATABASE["IEO-LAV-2024-08"]);
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (codeToSearch?: string) => {
    const code = (codeToSearch || inputCode).trim().toUpperCase();
    setHasSearched(true);
    if (BATCH_DATABASE[code]) {
      setActiveReport(BATCH_DATABASE[code]);
    } else {
      setActiveReport(null);
    }
  };

  const sampleCodes = Object.keys(BATCH_DATABASE);

  return (
    <div style={{ backgroundColor: "#FCFAF6", minHeight: "100vh", paddingTop: "110px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>

        {/* Hero Title */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(124, 58, 237, 0.1)",
              border: "1px solid rgba(124, 58, 237, 0.25)",
              color: "#7C3AED",
              padding: "6px 18px",
              borderRadius: "9999px",
              fontSize: "0.8rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "16px",
            }}
          >
            <ShieldCheck size={16} color="#059669" /> Complete Purity Traceability
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontFamily: "var(--font-lora), Georgia, serif",
              fontWeight: 700,
              color: "#180D26",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Batch Lab & GC-MS Verification
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#5B486E", maxWidth: "680px", margin: "0 auto", lineHeight: 1.6 }}>
            Enter the batch code printed on your bottle or container to inspect the gas chromatography (GC-MS) purity breakdown, physical constants, and sourcing farm origin.
          </p>
        </div>

        {/* Search Card */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.76)",
            backdropFilter: "blur(24px) saturate(160%)",
            WebkitBackdropFilter: "blur(24px) saturate(160%)",
            border: "1px solid rgba(124, 58, 237, 0.2)",
            borderRadius: "24px",
            padding: "24px 32px",
            boxShadow: "0 10px 30px rgba(24, 13, 38, 0.05)",
            marginBottom: "32px",
          }}
        >
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <div
              style={{
                flex: 1,
                minWidth: "260px",
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                border: "1px solid rgba(124, 58, 237, 0.3)",
                borderRadius: "9999px",
                padding: "0 18px",
                height: "50px",
              }}
            >
              <Search size={18} color="#7C3AED" style={{ marginRight: "10px", flexShrink: 0 }} />
              <input
                type="text"
                value={inputCode}
                onChange={e => setInputCode(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSearch()}
                placeholder="e.g. IEO-LAV-2024-08"
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#180D26",
                }}
              />
            </div>
            <button
              onClick={() => handleSearch()}
              style={{
                background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                color: "white",
                border: "none",
                borderRadius: "9999px",
                padding: "0 32px",
                height: "50px",
                fontWeight: 700,
                fontSize: "0.95rem",
                cursor: "pointer",
                boxShadow: "0 4px 18px rgba(124, 58, 237, 0.45)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-1.5px)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(124, 58, 237, 0.65)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 18px rgba(124, 58, 237, 0.45)";
              }}
            >
              Verify Batch
            </button>
          </div>

          {/* Sample quick buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "16px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.78rem", color: "#5B486E", fontWeight: 700 }}>Try sample batch codes:</span>
            {sampleCodes.map(code => (
              <button
                key={code}
                onClick={() => {
                  setInputCode(code);
                  handleSearch(code);
                }}
                style={{
                  backgroundColor: inputCode === code ? "#7C3AED" : "rgba(124, 58, 237, 0.1)",
                  color: inputCode === code ? "white" : "#7C3AED",
                  border: inputCode === code ? "1px solid #7C3AED" : "1px solid rgba(124, 58, 237, 0.2)",
                  borderRadius: "9999px",
                  padding: "4px 14px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Results View */}
        {activeReport ? (
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.78)",
              backdropFilter: "blur(24px) saturate(160%)",
              WebkitBackdropFilter: "blur(24px) saturate(160%)",
              border: "1px solid rgba(124, 58, 237, 0.22)",
              borderRadius: "28px",
              padding: "36px",
              boxShadow: "0 14px 44px rgba(24, 13, 38, 0.06)",
            }}
          >
            {/* Report Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", borderBottom: "1px solid rgba(124, 58, 237, 0.15)", paddingBottom: "24px", marginBottom: "28px" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    BATCH #{activeReport.batchCode}
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      backgroundColor: "rgba(16, 185, 129, 0.12)",
                      color: "#059669",
                      padding: "3px 12px",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                    }}
                  >
                    <CheckCircle2 size={13} /> {activeReport.status}
                  </span>
                </div>
                <h2 style={{ fontSize: "1.8rem", fontWeight: 700, fontFamily: "var(--font-lora), Georgia, serif", color: "#180D26", marginBottom: "4px" }}>
                  {activeReport.productName}
                </h2>
                <div style={{ fontSize: "0.95rem", fontStyle: "italic", color: "#5B486E" }}>
                  {activeReport.botanicalName}
                </div>
              </div>

              {/* Download mock CoA button */}
              <button
                onClick={() => alert(`Downloading Certificate of Analysis for Batch ${activeReport.batchCode}...`)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "9999px",
                  padding: "11px 22px",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(124, 58, 237, 0.4)",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-1px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <Download size={15} /> Download Full CoA (PDF)
              </button>
            </div>

            {/* Quick Sourcing Metadata Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "32px" }}>
              <div style={{ backgroundColor: "rgba(124, 58, 237, 0.08)", border: "1px solid rgba(124, 58, 237, 0.15)", padding: "16px", borderRadius: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "#7C3AED", fontWeight: 700, marginBottom: "4px" }}>
                  <MapPin size={14} color="#7C3AED" /> Origin & Harvest
                </div>
                <div style={{ fontWeight: 700, color: "#180D26", fontSize: "0.92rem" }}>{activeReport.origin}</div>
                <div style={{ fontSize: "0.75rem", color: "#5B486E" }}>{activeReport.harvestFarm}</div>
              </div>

              <div style={{ backgroundColor: "rgba(124, 58, 237, 0.08)", border: "1px solid rgba(124, 58, 237, 0.15)", padding: "16px", borderRadius: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "#7C3AED", fontWeight: 700, marginBottom: "4px" }}>
                  <Calendar size={14} color="#7C3AED" /> Distillation Date
                </div>
                <div style={{ fontWeight: 700, color: "#180D26", fontSize: "0.92rem" }}>{activeReport.distillationDate}</div>
                <div style={{ fontSize: "0.75rem", color: "#5B486E" }}>Expiry: {activeReport.expiryDate}</div>
              </div>

              <div style={{ backgroundColor: "rgba(124, 58, 237, 0.08)", border: "1px solid rgba(124, 58, 237, 0.15)", padding: "16px", borderRadius: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "#7C3AED", fontWeight: 700, marginBottom: "4px" }}>
                  <FlaskConical size={14} color="#7C3AED" /> Extraction Method
                </div>
                <div style={{ fontWeight: 700, color: "#180D26", fontSize: "0.92rem" }}>{activeReport.extractionMethod}</div>
                <div style={{ fontSize: "0.75rem", color: "#5B486E" }}>GC-MS Authenticated</div>
              </div>
            </div>

            {/* GC-MS Compounds Breakdown */}
            <div style={{ marginBottom: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <Award size={18} color="#7C3AED" />
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#180D26", margin: 0 }}>
                  GC-MS Chemical Constituent Profile
                </h3>
              </div>

              <div style={{ backgroundColor: "white", borderRadius: "16px", border: "1px solid rgba(124, 58, 237, 0.18)", overflow: "hidden" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.875rem" }}>
                  <thead>
                    <tr style={{ backgroundColor: "rgba(124, 58, 237, 0.08)", borderBottom: "1px solid rgba(124, 58, 237, 0.15)" }}>
                      <th style={{ padding: "12px 16px", fontWeight: 700, color: "#180D26" }}>Compound Name</th>
                      <th style={{ padding: "12px 16px", fontWeight: 700, color: "#180D26" }}>Measured %</th>
                      <th style={{ padding: "12px 16px", fontWeight: 700, color: "#5B486E" }}>Pharmacopoeia Spec</th>
                      <th style={{ padding: "12px 16px", fontWeight: 700, color: "#180D26" }}>Profile Distribution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeReport.compounds.map((comp, i) => (
                      <tr key={comp.name} style={{ borderBottom: i < activeReport.compounds.length - 1 ? "1px solid rgba(124, 58, 237, 0.08)" : "none" }}>
                        <td style={{ padding: "12px 16px", fontWeight: 600, color: "#180D26" }}>{comp.name}</td>
                        <td style={{ padding: "12px 16px", fontWeight: 700, color: "#7C3AED" }}>{comp.percentage}%</td>
                        <td style={{ padding: "12px 16px", color: "#5B486E", fontSize: "0.82rem" }}>{comp.expectedRange}</td>
                        <td style={{ padding: "12px 16px", width: "200px" }}>
                          <div style={{ width: "100%", height: "8px", backgroundColor: "rgba(124, 58, 237, 0.12)", borderRadius: "9999px", overflow: "hidden" }}>
                            <div style={{ width: `${Math.min(comp.percentage * 1.5, 100)}%`, height: "100%", background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)", borderRadius: "9999px" }} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Physical & Chemical Constants Table */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <FileText size={18} color="#7C3AED" />
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#180D26", margin: 0 }}>
                  Physical & Optical Constants
                </h3>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
                <div style={{ backgroundColor: "white", padding: "14px 18px", borderRadius: "14px", border: "1px solid rgba(124, 58, 237, 0.18)" }}>
                  <div style={{ fontSize: "0.75rem", color: "#5B486E", fontWeight: 600 }}>Specific Gravity</div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#180D26", marginTop: "2px" }}>{activeReport.specificGravity}</div>
                </div>
                <div style={{ backgroundColor: "white", padding: "14px 18px", borderRadius: "14px", border: "1px solid rgba(124, 58, 237, 0.18)" }}>
                  <div style={{ fontSize: "0.75rem", color: "#5B486E", fontWeight: 600 }}>Refractive Index</div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#180D26", marginTop: "2px" }}>{activeReport.refractiveIndex}</div>
                </div>
                <div style={{ backgroundColor: "white", padding: "14px 18px", borderRadius: "14px", border: "1px solid rgba(124, 58, 237, 0.18)" }}>
                  <div style={{ fontSize: "0.75rem", color: "#5B486E", fontWeight: 600 }}>Optical Rotation</div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#180D26", marginTop: "2px" }}>{activeReport.opticalRotation}</div>
                </div>
                <div style={{ backgroundColor: "white", padding: "14px 18px", borderRadius: "14px", border: "1px solid rgba(124, 58, 237, 0.18)" }}>
                  <div style={{ fontSize: "0.75rem", color: "#5B486E", fontWeight: 600 }}>Visual Appearance</div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#180D26", marginTop: "2px" }}>{activeReport.appearance}</div>
                </div>
              </div>
            </div>

          </div>
        ) : hasSearched ? (
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.76)",
              backdropFilter: "blur(24px) saturate(160%)",
              WebkitBackdropFilter: "blur(24px) saturate(160%)",
              borderRadius: "24px",
              padding: "48px 24px",
              textAlign: "center",
              border: "1px solid rgba(124, 58, 237, 0.2)",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#180D26", marginBottom: "8px" }}>
              Batch Code Not Found
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#5B486E", maxWidth: "450px", margin: "0 auto 20px" }}>
              No published GC-MS report matches &quot;{inputCode}&quot;. Please double check the code printed on the label or contact quality control.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
              <button
                onClick={() => {
                  setInputCode("IEO-LAV-2024-08");
                  handleSearch("IEO-LAV-2024-08");
                }}
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "9999px",
                  padding: "10px 24px",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(124, 58, 237, 0.4)",
                }}
              >
                Try Lavender Batch (IEO-LAV-2024-08)
              </button>
            </div>
          </div>
        ) : null}

      </div>
    </div>
  );
}
