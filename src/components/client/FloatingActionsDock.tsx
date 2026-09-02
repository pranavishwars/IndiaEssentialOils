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
        bottom: "calc(20px + env(safe-area-inset-bottom, 0px))",
        insetInlineEnd: "calc(20px + env(safe-area-inset-right, 0px))",
        zIndex: "var(--z-float-dock)" as unknown as number,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "10px",
      }}
    >
      <LanguageSelector variant="floating" />
      <ChatbotWidget />
    </div>
  );
}
