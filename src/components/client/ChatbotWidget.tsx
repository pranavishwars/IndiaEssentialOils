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
  Calculator
} from "lucide-react";
import { FaqEntry, QUICK_QUESTIONS, CATALOG_PRODUCTS, matchFaq } from "@/lib/chatbot-matcher";
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
  timestamp: string;
}

const INITIAL_BOT_GREETING: ChatMessage = {
  id: "greeting",
  sender: "bot",
  text: "Hello! I am your Botanical FAQ Assistant. Ask me about MOQs, GC-MS testing reports, certifications, international shipping, or custom formulations.",
  timestamp: "Just now",
};

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
        let actionLink: { label: string; href: string } | undefined;

        if (matched.id.startsWith("availability_yes_")) {
          const slug = matched.id.replace("availability_yes_", "");
          const prod = CATALOG_PRODUCTS.find((p) => p.slug === slug);
          if (prod) {
            actionLink = {
              label: `View ${prod.name} & CoA`,
              href: `/products/${prod.categorySlug}/${prod.slug}`,
            };
          }
        } else if (matched.id === "availability_no" || matched.id === "availability_general_yes") {
          actionLink = {
            label: "Explore 21 In-Stock Botanical Oils",
            href: "/products",
          };
        } else if (matched.id === "batch_lookup") {
          actionLink = {
            label: "Open Batch Lookup & CoA Tool",
            href: "/batch-lookup",
          };
        } else if (matched.id === "certifications") {
          actionLink = {
            label: "View Compliance Certificates",
            href: "/certifications",
          };
        }

        const botMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: matched.answer,
          actionLink,
          timestamp: "Just now",
        };
        saveMessages([...currentList, botMsg]);
      } else {
        // Fallback message with direct human escalation
        const fallbackMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: "I'm not able to answer that specific inquiry from our static FAQ knowledge base. You can connect with our export and technical sales desk directly:",
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
              color: "white",
              fontSize: "0.82rem",
              fontWeight: 700,
              padding: "8px 14px",
              borderRadius: "9999px",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
              whiteSpace: "nowrap",
              border: "1px solid rgba(124, 58, 237, 0.35)",
              animation: "fadeIn 0.2s ease-out",
              pointerEvents: "none",
            }}
          >
            Ask FAQ Assistant
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="chatbot-trigger-btn"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: isOpen ? "#180D26" : "#7C3AED",
            backgroundImage: isOpen
              ? "none"
              : "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 60%, #6D28D9 100%)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: isOpen
              ? "0 4px 16px rgba(24, 13, 38, 0.4)"
              : "0 6px 24px rgba(124, 58, 237, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
            cursor: "pointer",
            border: "2px solid rgba(255, 255, 255, 0.8)",
            transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s, background-color 0.2s",
            transform: isHovered ? "scale(1.06)" : "scale(1)",
          }}
          aria-label={isOpen ? "Close FAQ Assistant" : "Open FAQ Chatbot Assistant"}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </button>
      </div>

      {/* Chat Window Panel */}
      {isOpen && (
        <>
          {/* Mobile Backdrop */}
          {isMobile && (
            <div
              onClick={() => setIsOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(24, 13, 38, 0.6)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                zIndex: 10001,
              }}
            />
          )}

          {/* Card / Bottom Sheet Container */}
          <div
            className="chatbot-panel"
            role="dialog"
            aria-label="Botanical FAQ Assistant"
            aria-modal="true"
            style={{
              position: "fixed",
              bottom: isMobile ? 0 : "96px",
              insetInlineEnd: isMobile ? 0 : "28px",
              width: isMobile ? "100%" : "380px",
              height: isMobile ? "82dvh" : "530px",
              maxHeight: isMobile ? "90dvh" : "calc(100vh - 120px)",
              backgroundColor: "rgba(252, 250, 246, 0.82)",
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
              border: isMobile
                ? "1px solid rgba(124, 58, 237, 0.25)"
                : "1px solid rgba(124, 58, 237, 0.22)",
              borderTopLeftRadius: "28px",
              borderTopRightRadius: "28px",
              borderBottomLeftRadius: isMobile ? "0px" : "28px",
              borderBottomRightRadius: isMobile ? "0px" : "28px",
              boxShadow: "0 24px 60px rgba(24, 13, 38, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
              zIndex: 10002,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              animation: isMobile ? "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)" : "fadeIn 0.2s ease-out",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "14px 18px",
                borderBottom: "1px solid rgba(124, 58, 237, 0.14)",
                backgroundColor: "rgba(255, 255, 255, 0.55)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 3px 10px rgba(124, 58, 237, 0.35)",
                    flexShrink: 0,
                  }}
                >
                  <Bot size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#180D26", lineHeight: 1.2 }}>
                    Botanical FAQ Assistant
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "2px" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#10B981" }} />
                    <span style={{ fontSize: "0.72rem", color: "#5B486E", fontWeight: 600 }}>
                      Fast Rule-Based Matcher
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <button
                  type="button"
                  onClick={handleResetChat}
                  title="Clear conversation"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor: "rgba(124, 58, 237, 0.08)",
                    color: "#5B486E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "background-color 0.15s",
                  }}
                  aria-label="Reset chat"
                >
                  <RotateCcw size={14} />
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor: "rgba(124, 58, 237, 0.08)",
                    color: "#180D26",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "background-color 0.15s",
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
                gap: "12px",
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
                        maxWidth: "85%",
                        padding: "11px 15px",
                        borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                        backgroundColor: isUser
                          ? "#7C3AED"
                          : "rgba(255, 255, 255, 0.78)",
                        backgroundImage: isUser
                          ? "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)"
                          : "none",
                        color: isUser ? "#FFFFFF" : "#180D26",
                        fontSize: "0.88rem",
                        lineHeight: 1.5,
                        boxShadow: isUser
                          ? "0 4px 14px rgba(124, 58, 237, 0.35)"
                          : "0 2px 10px rgba(24, 13, 38, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                        border: isUser
                          ? "none"
                          : "1px solid rgba(124, 58, 237, 0.15)",
                        wordBreak: "break-word",
                      }}
                    >
                      {msg.text}

                      {/* Contextual Action Link */}
                      {msg.actionLink && (
                        <div style={{ marginTop: "10px" }}>
                          <Link
                            href={msg.actionLink.href}
                            onClick={() => {
                              if (isMobile) setIsOpen(false);
                            }}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "6px",
                              padding: "7px 14px",
                              backgroundColor: "rgba(124, 58, 237, 0.08)",
                              border: "1px solid rgba(124, 58, 237, 0.25)",
                              borderRadius: "9999px",
                              color: "#7C3AED",
                              fontSize: "0.8rem",
                              fontWeight: 700,
                              textDecoration: "none",
                              transition: "all 0.15s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.16)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.08)";
                            }}
                          >
                            <span>{msg.actionLink.label}</span>
                            <ExternalLink size={12} />
                          </Link>
                        </div>
                      )}

                      {/* Fallback Escalation Options */}
                      {msg.isFallback && (
                        <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                          {/* Email Support Action */}
                          <a
                            href={`mailto:pranavishwars@gmail.com?subject=Website%20Inquiry&body=${encodeURIComponent(
                              msg.queryForEscalation || ""
                            )}`}
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
                              transition: "transform 0.15s",
                            }}
                          >
                            <Mail size={14} /> Email Commercial Sales Team
                          </a>

                          {/* Commercial Quote Desk Action */}
                          <Link
                            href="/request-quote"
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
                              transition: "background-color 0.15s",
                            }}
                          >
                            <Calculator size={14} /> Open B2B Quote Desk
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

              {/* Quick Question Suggestions (Rendered after initial greeting) */}
              {messages.length === 1 && (
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
                    Frequently Asked Questions
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
                          e.currentTarget.style.backgroundColor = "rgba(124, 58, 237, 0.12)";
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
                backgroundColor: "rgba(255, 255, 255, 0.60)",
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
                placeholder="Ask about MOQ, purity, shipping..."
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(124, 58, 237, 0.22)",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
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
