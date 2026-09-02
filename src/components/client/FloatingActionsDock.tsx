"use client";

import React from "react";
import { LanguageSelector } from "./LanguageSelector";
import { ChatbotWidget } from "./ChatbotWidget";

export function FloatingActionsDock() {
  return (
    <div
      className="floating-actions-dock"
      style={{
        position: "fixed",
        bottom: "24px",
        insetInlineEnd: "24px",
        zIndex: "var(--z-float-dock)" as unknown as number,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <LanguageSelector variant="floating" />
      <ChatbotWidget />
    </div>
  );
}
