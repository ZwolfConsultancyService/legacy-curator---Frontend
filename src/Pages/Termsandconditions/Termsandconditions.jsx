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
    title: "Services",
    content: (
      <>
        <p style={{ color: "#5a5347", fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
          Legacy Curator provides the following personalized printed storytelling products:
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {["Legacy Books", "Memoir Books", "Coffee Table Books", "Personalized Printed Storytelling Products"].map((item) => (
            <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#3d3028" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: colors.copper, flexShrink: 0, display: "inline-block" }} />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "02",
    title: "Customer Responsibilities",
    content: (
      <>
        <p style={{ color: "#5a5347", fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
          By using our services, you agree to provide accurate information and confirm that you own or have permission to use all submitted content.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {["Accurate personal and project information", "Original photos and content", "Proper approvals before printing begins"].map((item) => (
            <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#3d3028" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: colors.copper, flexShrink: 0, display: "inline-block" }} />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "03",
    title: "Design Approval",
    content: (
      <>
        <p style={{ color: "#5a5347", fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
          Before any printing commences, the following approval process applies:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { step: "1", text: "Final design preview will be shared with you" },
            { step: "2", text: "Your explicit approval is required before printing" },
            { step: "3", text: "Once approved, printing begins immediately" },
          ].map(({ step, text }) => (
            <div key={step} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div style={{
                width: 26, height: 26, borderRadius: "50%", background: colors.forest,
                color: "#fff", fontSize: 11, fontWeight: 700, display: "flex",
                alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>{step}</div>
              <p style={{ fontSize: 14, color: "#3d3028", lineHeight: 1.75, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#7a6e64", marginTop: 14, padding: "10px 14px", background: "#ede8d8", borderRadius: 8, borderLeft: `3px solid ${colors.copper}` }}>
          After approval, major changes may incur additional charges.
        </p>
      </>
    ),
  },
  {
    num: "04",
    title: "Payment Terms",
    content: (
      <>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            "Advance payment may be required before work begins",
            "Full payment must be completed before dispatch",
          ].map((item) => (
            <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#3d3028", lineHeight: 1.7 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: colors.copper, flexShrink: 0, marginTop: 7, display: "inline-block" }} />
              {item}
            </li>
          ))}
        </ul>
        <p style={{ color: "#5a5347", fontSize: 14, marginBottom: 8 }}>Prices may vary based on:</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Number of Pages", "Customization Level", "Printing Requirements"].map((tag) => (
            <span key={tag} style={{
              fontSize: 12, fontWeight: 600, padding: "4px 14px", borderRadius: 99,
              border: `1.5px solid ${colors.forest}`, color: colors.forest,
              background: "#edf2f1", letterSpacing: "0.04em",
            }}>{tag}</span>
          ))}
        </div>
      </>
    ),
  },
  {
    num: "05",
    title: "Cancellation & Refunds",
    content: (
      <>
        <p style={{ fontSize: 13, color: "#7a3a2a", marginBottom: 14, padding: "10px 14px", background: "#f5ebe6", borderRadius: 8, borderLeft: "3px solid #c0572a" }}>
          Because all products are fully customized, orders <strong>cannot be canceled</strong> after design approval, and refunds are not available after printing starts.
        </p>
        <p style={{ color: "#5a5347", fontSize: 14, marginBottom: 10 }}>Refunds may only be considered if:</p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {["We are unable to deliver the service", "A production error occurs from our side"].map((item) => (
            <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#3d3028" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: colors.forest, flexShrink: 0, display: "inline-block" }} />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "06",
    title: "Intellectual Property",
    content: (
      <>
        <p style={{ color: "#5a5347", fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
          All website content belongs to <strong style={{ color: colors.forest }}>Legacy Curator</strong> and may not be copied, reproduced, or distributed without explicit permission.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Text", "Graphics", "Branding", "Layouts", "Design Assets"].map((item) => (
            <span key={item} style={{
              fontSize: 12, fontWeight: 600, padding: "4px 14px", borderRadius: 99,
              background: colors.eggshell, color: colors.saddle,
              border: `1px solid #d4c9aa`, letterSpacing: "0.04em",
            }}>{item}</span>
          ))}
        </div>
      </>
    ),
  },
  {
    num: "07",
    title: "Limitation of Liability",
    content: (
      <>
        <p style={{ color: "#5a5347", fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
          Legacy Curator shall not be held liable for the following:
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            "Delays caused by courier partners",
            "Incorrect customer-provided information",
            "Quality issues in low-resolution images provided by the customer",
          ].map((item) => (
            <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#3d3028", lineHeight: 1.7 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: colors.copper, flexShrink: 0, marginTop: 7, display: "inline-block" }} />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "08",
    title: "Shipping",
    content: (
      <>
        <p style={{ color: "#5a5347", fontSize: 14, lineHeight: 1.85, marginBottom: 14 }}>
          Delivery timelines may vary depending on the following factors:
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {["Your delivery location", "Current printing schedule", "Courier service availability"].map((item) => (
            <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#3d3028" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: colors.copper, flexShrink: 0, display: "inline-block" }} />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    num: "09",
    title: "Contact Information",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {[
          { label: "Company", value: "Legacy Curator", icon: "🏛" },
          { label: "Email", value: "editor@legacycurator.in", icon: "✉️", href: "mailto:editor@legacycurator.in" },
          { label: "Phone", value: "8076206304", icon: "📞", href: "tel:8076206304" },
        ].map(({ label, value, icon, href }) => (
          <div key={label} style={{
            display: "flex", alignItems: "center", gap: 14,
            padding: "12px 16px", borderRadius: 10,
            background: colors.eggshell, border: `1px solid #d4c9aa`,
          }}>
            <span style={{ fontSize: 16 }}>{icon}</span>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: colors.copper, margin: 0, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</p>
              {href ? (
                <a href={href} style={{ fontSize: 14, color: colors.forest, fontWeight: 600, textDecoration: "none" }}>{value}</a>
              ) : (
                <p style={{ fontSize: 14, color: "#3d3028", fontWeight: 600, margin: 0 }}>{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "10",
    title: "Governing Law",
    content: (
      <p style={{ color: "#5a5347", fontSize: 14, lineHeight: 1.9 }}>
        These Terms & Conditions shall be governed by and construed in accordance with the{" "}
        <strong style={{ color: colors.forest }}>laws of India</strong>. Any disputes arising
        from these terms shall be subject to the exclusive jurisdiction of the competent courts
        in India.
      </p>
    ),
  },
];

export default function TermsAndConditions() {
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
        background: colors.forest,
        padding: "72px 40px 56px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative pattern */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06,
          backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
          backgroundSize: "20px 20px",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.35em",
            textTransform: "uppercase", color: colors.copper,
            marginBottom: 16, fontFamily: "'DM Sans',sans-serif",
          }}>
            Legal Document
          </p>
          <h1 style={{
            fontSize: "clamp(32px,5vw,56px)", fontWeight: 700,
            color: colors.eggshell, margin: "0 0 16px",
            lineHeight: 1.1, letterSpacing: "-0.01em",
          }}>
            Terms &amp; Conditions
          </h1>
          <div style={{
            width: 60, height: 2, background: colors.copper,
            margin: "0 auto 20px", borderRadius: 99,
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
          By using the Legacy Curator website and services, you agree to the following terms.
          Please read them carefully before placing an order or submitting any content.
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
                  border: `1.5px solid ${isOpen ? colors.forest : "#ddd6c4"}`,
                  background: isOpen ? colors.porcelain : "#faf8f2",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  boxShadow: isOpen ? `0 6px 24px rgba(54,97,90,0.1)` : "none",
                }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%", background: "none", border: "none",
                    padding: "20px 24px", cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 18,
                    textAlign: "left",
                  }}
                >
                  <span style={{
                    fontSize: 12, fontWeight: 700, color: isOpen ? colors.porcelain : colors.copper,
                    background: isOpen ? colors.forest : "transparent",
                    border: `1.5px solid ${isOpen ? colors.forest : colors.copper}`,
                    borderRadius: 8, padding: "3px 9px",
                    fontFamily: "'DM Sans',sans-serif",
                    letterSpacing: "0.06em", flexShrink: 0,
                    transition: "all 0.25s",
                  }}>
                    {section.num}
                  </span>

                  <span style={{
                    fontSize: "clamp(15px,2vw,18px)", fontWeight: 600,
                    color: isOpen ? colors.forest : "#2e2620",
                    flex: 1, transition: "color 0.25s",
                    letterSpacing: "0.01em",
                  }}>
                    {section.title}
                  </span>

                  <span style={{
                    width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                    background: isOpen ? colors.forest : colors.eggshell,
                    border: `1.5px solid ${isOpen ? colors.forest : "#d4c9aa"}`,
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
          <p style={{ fontSize: 14, color: "#7a6e64", lineHeight: 1.8, margin: "0 0 6px" }}>
            These terms were last updated on <strong style={{ color: colors.forest }}>30 April 2026</strong>.
          </p>
          <p style={{ fontSize: 13, color: "#9a8e84", margin: 0, fontStyle: "italic" }}>
            Governed by the laws of India.
          </p>
        </div>
      </div>

    </div>
  );
}