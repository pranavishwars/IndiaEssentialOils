"use client";

import React, { useState, useEffect, useRef, useTransition } from "react";
import Link from "next/link";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  RotateCcw,
  ExternalLink,
  Mail,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Calculator,
  ArrowRight,
  Package,
  Layers
} from "lucide-react";
import { FaqEntry, QUICK_QUESTIONS, matchFaq } from "@/lib/chatbot-matcher";
import { COMPANY_INFO } from "@/lib/data";
import faqDataRaw from "@/data/chatbot-faq.json";

const faqData = faqDataRaw as FaqEntry[];

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  isFallback?: boolean;
  queryForEscalation?: string;
  actionLink?: {
    label: string;
    href: string;
  };
  recommendedProducts?: {
    name: string;
    slug: string;
    botanicalName?: string;
    category: string;
    moq: string;
  }[];
  timestamp: string;
}

const INITIAL_BOT_GREETING: ChatMessage = {
  id: "greeting",
  sender: "bot",
  text: "👋 Hello! I am your AI Botanical & Wholesale Export Consultant. Ask me about **Supercritical CO₂ Extracts**, **Packaging & European Droppers**, **48-Hour Order Dispatch**, **GC-MS Purity Reports**, or request **Oil Recommendations** for your formulations.",
  timestamp: "Just now",
};

/**
 * Helper to render bold text and line breaks cleanly
 */
function FormattedBotText({ text }: { text: string }) {
  const lines = text.split("\n");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {lines.map((line, lIdx) => {
        if (!line.trim()) return <div key={lIdx} style={{ height: "4px" }} />;

        // Parse **bold** parts
        const parts = line.split(/(\*\*.*?\*\*)/g);

        return (
          <p key={lIdx} style={{ margin: 0, lineHeight: 1.55 }}>
            {parts.map((part, pIdx) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={pIdx} style={{ color: "#180D26", fontWeight: 700 }}>
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return <span key={pIdx}>{part}</span>;
            })}
          </p>
        );
      })}
    </div>
  );
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_BOT_GREETING]);
  const [inputValue, setInputValue] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [, startTransition] = useTransition();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Check mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Restore session messages if available
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("ieo_chat_history");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch { }
  }, []);

  // Save session messages
  const saveMessages = (updated: ChatMessage[]) => {
    setMessages(updated);
    try {
      sessionStorage.setItem("ieo_chat_history", JSON.stringify(updated));
    } catch { }
  };

  // Scroll to bottom on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Focus input and lock body scroll on mobile
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      if (isMobile) {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = originalOverflow;
        };
      }
    }
  }, [isOpen, isMobile]);

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: "Just now",
    };

    const currentList = [...messages, userMsg];
    saveMessages(currentList);
    setInputValue("");

    // Run client-side matcher instantly without external API latency
    startTransition(() => {
      const matched = matchFaq(query, faqData);

      if (matched) {
        const botMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: matched.answer,
          actionLink: matched.actionLink,
          recommendedProducts: matched.recommendedProducts,
          timestamp: "Just now",
        };
        saveMessages([...currentList, botMsg]);
      } else {
        // Fallback message with direct human escalation
        const fallbackMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: `I'm not able to find an exact answer for that in our botanical database. Connect with our export desk directly for immediate technical assistance:`,
          isFallback: true,
          queryForEscalation: query,
          timestamp: "Just now",
        };
        saveMessages([...currentList, fallbackMsg]);
      }
    });
  };

  const handleResetChat = () => {
    const fresh = [INITIAL_BOT_GREETING];
    setMessages(fresh);
    try {
      sessionStorage.removeItem("ieo_chat_history");
    } catch { }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div
        className="chatbot-float-container"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Tooltip on hover */}
        {isHovered && !isOpen && (
          <div
            style={{
              position: "absolute",
              bottom: "calc(100% + 10px)",
              insetInlineEnd: 0,
              backgroundColor: "rgba(24, 13, 38, 0.94)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              color: "#FFFFFF",
              padding: "7px 14px",
              borderRadius: "12px",
              fontSize: "0.8rem",
              fontWeight: 600,
              whiteSpace: "nowrap",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
              pointerEvents: "none",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              animation: "fadeIn 0.2s ease-out",
            }}
          >
            Ask AI Botanical Consultant
          </div>
        )}

        {/* Floating Action Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="liquid-glass-dock-btn"
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            backgroundColor: isOpen ? "#7C3AED" : "rgba(124, 58, 237, 0.92)",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 28px rgba(124, 58, 237, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.35)",
            cursor: "pointer",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            position: "relative",
          }}
          aria-label={isOpen ? "Close Botanical Assistant" : "Open Botanical Chat Assistant"}
        >
          {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
        </button>
      </div>

      {/* Chat Window Panel */}
      {isOpen && (
        <>
          {/* Backdrop on mobile */}
          {isMobile && (
            <div
              onClick={() => setIsOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(4px)",
                zIndex: "var(--z-chatbot)" as unknown as number,
              }}
            />
          )}

          <div
            className="chatbot-window-panel"
            style={{
              position: "fixed",
              bottom: isMobile ? "0" : "88px",
              insetInlineEnd: isMobile ? "0" : "24px",
              width: isMobile ? "100%" : "440px",
              maxWidth: "min(440px, calc(100vw - 32px))",
              height: isMobile ? "calc(100dvh - 20px)" : "600px",
              maxHeight: "calc(100dvh - 100px)",
              backgroundColor: "rgba(252, 250, 246, 0.94)",
              backdropFilter: "blur(32px) saturate(200%)",
              WebkitBackdropFilter: "blur(32px) saturate(200%)",
              border: "1px solid rgba(124, 58, 237, 0.22)",
              borderRadius: isMobile ? "24px 24px 0 0" : "28px",
              boxShadow: "0 24px 64px rgba(24, 13, 38, 0.25), 0 4px 20px rgba(124, 58, 237, 0.15)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              zIndex: "var(--z-chatbot-ui)" as unknown as number,
              animation: isMobile ? "slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)" : "fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "16px 20px",
                background: "linear-gradient(135deg, #2A1744 0%, #180D26 100%)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "12px",
                    backgroundColor: "#7C3AED",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(124, 58, 237, 0.4)",
                  }}
                >
                  <Bot size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.2 }}>
                    Botanical AI Consultant
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#C4B5FD", display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10B981" }} />
                    238+ In-Stock Oils · Ready to Assist
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                    padding: "6px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-label="Reset chat"
                >
                  <RotateCcw size={15} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                    padding: "6px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-label="Close chat window"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Scrollable Messages Area */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "16px 14px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
              aria-live="polite"
            >
              {messages.map((msg) => {
                const isUser = msg.sender === "user";

                return (
                  <div
                    key={msg.id}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: isUser ? "flex-end" : "flex-start",
                      maxWidth: "100%",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "90%",
                        padding: "12px 16px",
                        borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                        backgroundColor: isUser ? "#7C3AED" : "rgba(255, 255, 255, 0.85)",
                        backgroundImage: isUser ? "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)" : "none",
                        color: isUser ? "#FFFFFF" : "#2E1A47",
                        fontSize: "0.88rem",
                        lineHeight: 1.5,
                        boxShadow: isUser
                          ? "0 4px 14px rgba(124, 58, 237, 0.35)"
                          : "0 2px 10px rgba(24, 13, 38, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                        border: isUser ? "none" : "1px solid rgba(124, 58, 237, 0.16)",
                        wordBreak: "break-word",
                      }}
                    >
                      {isUser ? (
                        msg.text
                      ) : (
                        <FormattedBotText text={msg.text} />
                      )}

                      {/* Recommended Products Chips */}
                      {msg.recommendedProducts && msg.recommendedProducts.length > 0 && (
                        <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                          <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                            Quick Catalog Access:
                          </div>
                          {msg.recommendedProducts.map((p) => (
                            <Link
                              key={p.slug}
                              href={`/products/${p.slug}`}
                              onClick={() => {
                                if (isMobile) setIsOpen(false);
                              }}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "8px 12px",
                                backgroundColor: "rgba(124, 58, 237, 0.08)",
                                border: "1px solid rgba(124, 58, 237, 0.22)",
                                borderRadius: "12px",
                                textDecoration: "none",
                                transition: "all 0.15s ease",
                              }}
                            >
                              <div>
                                <span style={{ fontWeight: 700, color: "#180D26", fontSize: "0.84rem" }}>
                                  {p.name}
                                </span>
                                {p.botanicalName && (
                                  <span style={{ fontSize: "0.72rem", color: "#5B486E", display: "block", fontStyle: "italic" }}>
                                    {p.botanicalName}
                                  </span>
                                )}
                              </div>
                              <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#7C3AED", backgroundColor: "rgba(255,255,255,0.8)", padding: "2px 8px", borderRadius: "9999px" }}>
                                MOQ {p.moq}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* Contextual Action Link */}
                      {msg.actionLink && (
                        <div style={{ marginTop: "12px" }}>
                          <Link
                            href={msg.actionLink.href}
                            onClick={() => {
                              if (isMobile) setIsOpen(false);
                            }}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "6px",
                              padding: "8px 16px",
                              backgroundColor: "#7C3AED",
                              color: "#FFFFFF",
                              borderRadius: "9999px",
                              fontSize: "0.82rem",
                              fontWeight: 700,
                              textDecoration: "none",
                              boxShadow: "0 4px 12px rgba(124, 58, 237, 0.35)",
                              transition: "all 0.15s ease",
                            }}
                          >
                            <span>{msg.actionLink.label}</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      )}

                      {/* Fallback Escalation Options */}
                      {msg.isFallback && (
                        <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                          <a
                            href={`tel:${COMPANY_INFO.contact.phone}`}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              padding: "9px 14px",
                              backgroundColor: "#7C3AED",
                              color: "white",
                              borderRadius: "9999px",
                              fontWeight: 700,
                              fontSize: "0.82rem",
                              textDecoration: "none",
                              boxShadow: "0 3px 10px rgba(124, 58, 237, 0.35)",
                            }}
                          >
                            <Phone size={14} /> Call Technical Desk ({COMPANY_INFO.contact.phone})
                          </a>

                          <a
                            href={`mailto:${COMPANY_INFO.contact.salesEmail}?subject=Wholesale%20Botanical%20Inquiry&body=${encodeURIComponent(
                              msg.queryForEscalation || ""
                            )}`}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              padding: "8px 14px",
                              backgroundColor: "rgba(124, 58, 237, 0.12)",
                              border: "1px solid rgba(124, 58, 237, 0.3)",
                              color: "#7C3AED",
                              borderRadius: "9999px",
                              fontWeight: 700,
                              fontSize: "0.82rem",
                              textDecoration: "none",
                            }}
                          >
                            <Mail size={14} /> Email Technical Sales Team
                          </a>

                          <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              padding: "8px 14px",
                              backgroundColor: "rgba(124, 58, 237, 0.12)",
                              border: "1px solid rgba(124, 58, 237, 0.3)",
                              color: "#7C3AED",
                              borderRadius: "9999px",
                              fontWeight: 700,
                              fontSize: "0.82rem",
                              textDecoration: "none",
                            }}
                          >
                            <Calculator size={14} /> Contact Us
                          </Link>
                        </div>
                      )}
                    </div>

                    <span
                      style={{
                        fontSize: "0.68rem",
                        color: "#7A6985",
                        marginTop: "3px",
                        padding: "0 4px",
                      }}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                );
              })}

              {/* Quick Question Suggestions */}
              {messages.length <= 2 && (
                <div style={{ marginTop: "4px" }}>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: "#5B486E",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "8px",
                      paddingLeft: "2px",
                    }}
                  >
                    💡 Popular Questions &amp; Technical Queries
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {QUICK_QUESTIONS.map((q) => (
                      <button
                        key={q.label}
                        type="button"
                        onClick={() => handleSendMessage(q.query)}
                        style={{
                          textAlign: "start",
                          padding: "8px 12px",
                          borderRadius: "12px",
                          backgroundColor: "rgba(124, 58, 237, 0.06)",
                          border: "1px solid rgba(124, 58, 237, 0.18)",
                          color: "#180D26",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          transition: "all 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.14)";
                          e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.35)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.06)";
                          e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.18)";
                        }}
                      >
                        <span>{q.label}</span>
                        <span style={{ color: "#7C3AED", fontSize: "0.9rem" }}>&rarr;</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              style={{
                padding: "10px 14px",
                borderTop: "1px solid rgba(124, 58, 237, 0.14)",
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about CO2 oils, packaging, MOQ, shipping..."
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(124, 58, 237, 0.22)",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  fontSize: "0.85rem",
                  color: "#180D26",
                  outline: "none",
                  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.04)",
                  fontFamily: "inherit",
                }}
              />

              <button
                type="submit"
                disabled={!inputValue.trim()}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "none",
                  background: inputValue.trim()
                    ? "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)"
                    : "rgba(124, 58, 237, 0.15)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: inputValue.trim() ? "pointer" : "default",
                  boxShadow: inputValue.trim() ? "0 4px 12px rgba(124, 58, 237, 0.4)" : "none",
                  transition: "all 0.15s ease",
                  flexShrink: 0,
                }}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
