import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, X } from "lucide-react";

export default function ChatWidget() {
  const { pathname } = useLocation();
  if (pathname === "/get-started" || pathname === "/audit-booked") return null;
  const [open, setOpen] = useState<boolean>(() => {
    try { return localStorage.getItem("cortek-chat-open") === "1"; } catch { return false; }
  });

  useEffect(() => {
    try { localStorage.setItem("cortek-chat-open", open ? "1" : "0"); } catch {}
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Chat Launcher Button */}
      <button
        id="cortek-chat-launcher"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen(v => !v)}
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          zIndex: 999999,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 16px",
          borderRadius: "9999px",
          border: "none",
          background: "linear-gradient(135deg, #8B5CF6, #6366F1)",
          color: "#ffffff",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.4)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(139, 92, 246, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 10px 30px -10px rgba(139, 92, 246, 0.4)";
        }}
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
        <span style={{ display: window.innerWidth < 640 ? "none" : "inline" }}>Chat</span>
      </button>

      {/* Chat Panel */}
      {open && (
        <div
          id="cortek-chat-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Cortek AI Assistant"
          style={{
            position: "fixed",
            right: "20px",
            bottom: "80px",
            zIndex: 999998,
            width: "384px",
            height: "600px",
            maxWidth: "95vw",
            maxHeight: "calc(100vh - 120px)",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            animation: "fadeInUp 0.3s ease-out",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #8B5CF6, #6366F1)",
              color: "#ffffff",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MessageCircle size={18} />
              </div>
              <div>
                <h3 style={{ fontWeight: "600", fontSize: "14px", margin: "0" }}>
                  Cortek AI Assistant
                </h3>
                <p style={{ fontSize: "12px", opacity: "0.9", margin: "0" }}>
                  Online now
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                padding: "4px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "transparent",
                color: "#ffffff",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Chat iframe */}
          <div style={{ height: "calc(100% - 80px)", overflow: "auto" }}>
            <iframe
              id="cortek-chat-iframe"
              src="https://cortek-disco-bot.vercel.app/chat?v=5"
              title="Cortek AI Assistant"
              style={{ width: "100%", height: "100%", border: "0" }}
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-pointer-lock"
              allow="clipboard-write; microphone; camera; display-capture; web-share"
              referrerPolicy="no-referrer"
              scrolling="yes"
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          #cortek-chat-launcher { right: 12px !important; bottom: 12px !important; }
          #cortek-chat-panel { right: 12px !important; bottom: 76px !important; width: 95vw !important; height: 80vh !important; }
        }
      `}</style>
    </>
  );
}