import React, { useState } from "react";

const colors = {
  forest: "#36615A",
  saddle: "#8B542B",
  copper: "#A7703D",
  eggshell: "#F3F0E1",
  porcelain: "#FDFFFC",
};

const sections = [
  {
    num: "01",
    title: "Information We Collect",
    icon: "📋",
    content: (
      <>
        <p style={{ color: "#5a5347", fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
          When you use our services, we may collect the following personal information:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            "Full Name",
            "Phone Number",
            "Email Address",
            "Shipping Address",
            "Photos & Documents",
            "Payment Details",
          ].map((item) => (
            <div key={item} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "10px 14px", borderRadius: 8,
              background: colors.eggshell, border: "1px solid #d4c9aa",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: colors.copper, flexShrink: 0, display: "inline-block" }} />
              <span style={{ fontSize: 13, color: "#3d3028", fontWeight: 600, fontFamily: "'DM Sans',sans-serif" }}>{item}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#7a6e64", marginTop: 14, padding: "10px 14px", background: "#f0ece0", borderRadius: 8, borderLeft: `3px solid ${colors.copper}`, fontFamily: "'DM Sans',sans-serif" }}>
          Payment details are handled exclusively through secure third-party payment providers.
        </p>
      </>
    ),
  },
  {
    num: "02",
    title: "How We Use Your Information",
    icon: "⚙️",
    content: (
      <>
        <p style={{ color: "#5a5347", fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
          Your information is used solely to deliver and improve our services:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { label: "Create your personalized books", desc: "Your content is used exclusively for production" },
            { label: "Communicate about your order", desc: "Updates, confirmations, and support" },
            { label: "Process payments", desc: "Secure transaction handling" },
            { label: "Deliver products", desc: "Shipping and logistics coordination" },
            { label: "Improve our services", desc: "Internal analytics and quality enhancement" },
            { label: "Provide customer support", desc: "Addressing queries and concerns" },
          ].map(({ label, desc }) => (
            <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 0", borderBottom: "1px solid #ede8d8" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: colors.forest, flexShrink: 0, marginTop: 6, display: "inline-block" }} />
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#3d3028", margin: "0 0 2px", fontFamily: "'DM Sans',sans-serif" }}>{label}</p>
                <p style={{ fontSize: 12, color: "#9a8e84", margin: 0, fontFamily: "'DM Sans',sans-serif" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: "03",
    title: "Content Ownership",
    icon: "🔒",
    content: (
      <>
        <div style={{
          padding: "16px 20px", borderRadius: 10,
          background: `linear-gradient(135deg, #edf2f1, #f3f0e1)`,
          border: `1.5px solid ${colors.forest}`, marginBottom: 18,
        }}>
          <p style={{ fontSize: 15, fontWeight: 600, color: colors.forest, margin: "0 0 6px", fontFamily: "'DM Sans',sans-serif" }}>
            Your content remains your property.
          </p>
          <p style={{ fontSize: 13, color: "#5a5347", margin: 0, lineHeight: 1.7, fontFamily: "'DM Sans',sans-serif" }}>
            All photos, stories, and materials shared by you are and remain yours.
          </p>
        </div>
        <p style={{ color: "#5a5347", fontSize: 14, lineHeight: 1.85, marginBottom: 12 }}>
          By submitting content, you grant Legacy Curator a limited, non-exclusive permission to use it only for:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
          {[
            { step: "1", text: "Designing your requested product" },
            { step: "2", text: "Printing your book" },
            { step: "3", text: "Delivering your order" },
          ].map(({ step, text }) => (
            <div key={step} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 26, height: 26, borderRadius: "50%", background: colors.forest,
                color: "#fff", fontSize: 11, fontWeight: 700, display: "flex",
                alignItems: "center", justifyContent: "center", flexShrink: 0,
                fontFamily: "'DM Sans',sans-serif",
              }}>{step}</div>
              <p style={{ fontSize: 14, color: "#3d3028", margin: 0, fontFamily: "'DM Sans',sans-serif" }}>{text}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#6a3a2a", padding: "10px 14px", background: "#f5ebe6", borderRadius: 8, borderLeft: "3px solid #c0572a", margin: 0, fontFamily: "'DM Sans',sans-serif" }}>
          We do <strong>not</strong> sell or share your personal content with any third parties.
        </p>
      </>
    ),
  },
  {
    num: "04",
    title: "Data Protection",
    icon: "🛡️",
    content: (
      <>
        <p style={{ color: "#5a5347", fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
          We implement reasonable security measures to protect your personal information from:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[
            { label: "Unauthorized Access", icon: "🚫" },
            { label: "Misuse", icon: "⛔" },
            { label: "Data Loss", icon: "💾" },
            { label: "Unauthorized Disclosure", icon: "🔐" },
          ].map(({ label, icon }) => (
            <div key={label} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "14px 16px", borderRadius: 10,
              background: "#edf2f1", border: `1px solid #c4d9d6`,
            }}>
              <span style={{ fontSize: 18 }}>{icon}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: colors.forest, fontFamily: "'DM Sans',sans-serif" }}>{label}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: "05",
    title: "Third-Party Services",
    icon: "🔗",
    content: (
      <>
        <p style={{ color: "#5a5347", fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
          We may engage trusted third-party providers for specific operational needs:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { label: "Payment Processing", desc: "Secure handling of all transactions" },
            { label: "Shipping & Logistics", desc: "Order delivery coordination" },
            { label: "Website Analytics", desc: "Understanding site usage patterns" },
          ].map(({ label, desc }) => (
            <div key={label} style={{
              display: "flex", alignItems: "center", gap: 16,
              padding: "14px 18px", borderRadius: 10,
              background: colors.eggshell, border: "1px solid #d4c9aa",
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: colors.copper, flexShrink: 0, display: "inline-block" }} />
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#3d3028", margin: "0 0 2px", fontFamily: "'DM Sans',sans-serif" }}>{label}</p>
                <p style={{ fontSize: 12, color: "#9a8e84", margin: 0, fontFamily: "'DM Sans',sans-serif" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#5a5347", marginTop: 14, fontStyle: "italic", fontFamily: "'DM Sans',sans-serif" }}>
          These providers handle your data under their own respective privacy policies.
        </p>
      </>
    ),
  },
  {
    num: "06",
    title: "Marketing Communication",
    icon: "📣",
    content: (
      <>
        <p style={{ color: "#5a5347", fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
          We may occasionally contact you with the following types of communication:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
          {["Order updates and confirmations", "Service announcements", "Promotional offers and discounts"].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: colors.copper, flexShrink: 0, display: "inline-block" }} />
              <span style={{ fontSize: 14, color: "#3d3028", fontFamily: "'DM Sans',sans-serif" }}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{
          padding: "14px 18px", borderRadius: 10,
          background: "#edf2f1", border: `1.5px solid ${colors.forest}`,
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <span style={{ fontSize: 20 }}>✅</span>
          <p style={{ fontSize: 13, color: colors.forest, fontWeight: 600, margin: 0, fontFamily: "'DM Sans',sans-serif" }}>
            You can opt out of marketing communications at any time.
          </p>
        </div>
      </>
    ),
  },
  {
    num: "07",
    title: "Your Rights",
    icon: "⚖️",
    content: (
      <>
        <p style={{ color: "#5a5347", fontSize: 14, lineHeight: 1.85, marginBottom: 16 }}>
          You have the following rights regarding your personal data:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
          {[
            { right: "Access", desc: "Request a copy of the data we hold about you" },
            { right: "Correction", desc: "Ask us to correct inaccurate or incomplete data" },
            { right: "Deletion", desc: "Request removal of your personal data from our records" },
          ].map(({ right, desc }) => (
            <div key={right} style={{
              display: "flex", alignItems: "flex-start", gap: 14,
              padding: "14px 18px", borderRadius: 10,
              background: colors.eggshell, border: "1px solid #d4c9aa",
            }}>
              <span style={{
                fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 99,
                background: colors.forest, color: "#fff",
                fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.06em", flexShrink: 0,
              }}>{right}</span>
              <p style={{ fontSize: 13, color: "#5a5347", margin: 0, lineHeight: 1.7, fontFamily: "'DM Sans',sans-serif" }}>{desc}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, fontWeight: 600, color: "#3d3028", marginBottom: 10, fontFamily: "'DM Sans',sans-serif" }}>To exercise your rights, contact us:</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { label: "Email", value: "editor@legacycurator.in", href: "mailto:editor@legacycurator.in", icon: "✉️" },
            { label: "Phone", value: "8076206304", href: "tel:8076206304", icon: "📞" },
          ].map(({ label, value, href, icon }) => (
            <div key={label} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "10px 16px", borderRadius: 8,
              background: "#edf2f1", border: `1px solid #c4d9d6`,
            }}>
              <span style={{ fontSize: 15 }}>{icon}</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: colors.copper, fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", minWidth: 48 }}>{label}</span>
              <a href={href} style={{ fontSize: 14, color: colors.forest, fontWeight: 600, textDecoration: "none", fontFamily: "'DM Sans',sans-serif" }}>{value}</a>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: "08",
    title: "Changes to This Policy",
    icon: "🔄",
    content: (
      <>
        <p style={{ color: "#5a5347", fontSize: 14, lineHeight: 1.9, marginBottom: 14 }}>
          We may update this Privacy Policy from time to time to reflect changes in our practices
          or for legal and operational reasons. When we do:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            "The updated version will be published on this page",
            "The effective date will be revised accordingly",
            "Continued use of our services implies acceptance of the updated policy",
          ].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: colors.copper, flexShrink: 0, marginTop: 7, display: "inline-block" }} />
              <span style={{ fontSize: 14, color: "#3d3028", lineHeight: 1.75, fontFamily: "'DM Sans',sans-serif" }}>{item}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{
      fontFamily: "'Cormorant Garamond','Georgia',serif",
      background: colors.porcelain,
      minHeight: "100vh",
      color: "#2e2620",
    }}>

      {/* ── HEADER ── */}
      <div style={{
        background: colors.saddle,
        padding: "72px 40px 56px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06,
          backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
          backgroundSize: "20px 20px",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.35em",
            textTransform: "uppercase", color: colors.eggshell,
            marginBottom: 16, fontFamily: "'DM Sans',sans-serif", opacity: 0.7,
          }}>
            Legal Document
          </p>
          <h1 style={{
            fontSize: "clamp(32px,5vw,56px)", fontWeight: 700,
            color: colors.eggshell, margin: "0 0 16px",
            lineHeight: 1.1, letterSpacing: "-0.01em",
          }}>
            Privacy Policy
          </h1>
          <div style={{
            width: 60, height: 2, background: colors.eggshell,
            margin: "0 auto 20px", borderRadius: 99, opacity: 0.4,
          }} />
          <p style={{
            fontSize: 13, color: "rgba(243,240,225,0.65)",
            fontFamily: "'DM Sans',sans-serif", letterSpacing: "0.04em",
          }}>
            Effective Date: 30 April 2026
          </p>
        </div>
      </div>

      {/* ── INTRO ── */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "48px 32px 0" }}>
        <p style={{
          fontSize: 16, lineHeight: 2, color: "#5a5347",
          borderLeft: `4px solid ${colors.copper}`,
          paddingLeft: 20, margin: 0,
          fontStyle: "italic",
        }}>
          At Legacy Curator, we value your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and protect your
          information when you use our website and services.
        </p>
      </div>

      {/* ── SECTIONS ── */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "40px 32px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {sections.map((section, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={section.num}
                style={{
                  borderRadius: 14,
                  border: `1.5px solid ${isOpen ? colors.saddle : "#ddd6c4"}`,
                  background: isOpen ? colors.porcelain : "#faf8f2",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  boxShadow: isOpen ? `0 6px 24px rgba(139,84,43,0.1)` : "none",
                }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%", background: "none", border: "none",
                    padding: "20px 24px", cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 16,
                    textAlign: "left",
                  }}
                >
                  <span style={{
                    fontSize: 12, fontWeight: 700, color: isOpen ? colors.porcelain : colors.copper,
                    background: isOpen ? colors.saddle : "transparent",
                    border: `1.5px solid ${isOpen ? colors.saddle : colors.copper}`,
                    borderRadius: 8, padding: "3px 9px",
                    fontFamily: "'DM Sans',sans-serif",
                    letterSpacing: "0.06em", flexShrink: 0,
                    transition: "all 0.25s",
                  }}>
                    {section.num}
                  </span>

                  <span style={{ fontSize: 18, flexShrink: 0 }}>{section.icon}</span>

                  <span style={{
                    fontSize: "clamp(15px,2vw,18px)", fontWeight: 600,
                    color: isOpen ? colors.saddle : "#2e2620",
                    flex: 1, transition: "color 0.25s",
                    letterSpacing: "0.01em",
                  }}>
                    {section.title}
                  </span>

                  <span style={{
                    width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                    background: isOpen ? colors.saddle : colors.eggshell,
                    border: `1.5px solid ${isOpen ? colors.saddle : "#d4c9aa"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 14, color: isOpen ? "#fff" : colors.saddle,
                    transition: "all 0.25s",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}>
                    +
                  </span>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div style={{
                    padding: "0 24px 24px 24px",
                    borderTop: `1px solid ${colors.eggshell}`,
                    paddingTop: 20,
                  }}>
                    {section.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── FOOTER NOTE ── */}
        <div style={{
          marginTop: 48, textAlign: "center",
          padding: "32px 24px",
          background: colors.eggshell,
          borderRadius: 16,
          border: `1px solid #d4c9aa`,
        }}>
          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.2em",
            textTransform: "uppercase", color: colors.copper,
            fontFamily: "'DM Sans',sans-serif", marginBottom: 10,
          }}>
            Legacy Curator
          </p>
          <p style={{ fontSize: 14, color: "#7a6e64", lineHeight: 1.8, margin: "0 0 6px", fontFamily: "'DM Sans',sans-serif" }}>
            This policy was last updated on <strong style={{ color: colors.saddle }}>30 April 2026</strong>.
          </p>
          <p style={{ fontSize: 13, color: "#9a8e84", margin: 0, fontStyle: "italic" }}>
            We are committed to keeping your data safe and your trust intact.
          </p>
        </div>
      </div>

    </div>
  );
}