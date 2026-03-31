import { useState } from "react";

const colors = {
  forest: "#36615A",
  saddle: "#8B542B",
  copper: "#A7703D",
  eggshell: "#F5F0EA",
  porcelain: "#FDFFFC",
};

const contactInfo = [
  {
    icon: "✦",
    label: "Studio Address",
    value: "12 Artisan Lane, Mehrauli",
    sub: "New Delhi, India 110030",
  },
  {
    icon: "◈",
    label: "Email Us",
    value: "hello@legacycurator.in",
    sub: "We reply within 24 hours",
  },
  {
    icon: "◎",
    label: "Call Us",
    value: "+91 98100 45678",
    sub: "Mon – Sat, 10am – 6pm IST",
  },
  {
    icon: "⬡",
    label: "Follow the Work",
    value: "@legacycurator",
    sub: "Instagram · Behance · LinkedIn",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [focused, setFocused] = useState("");
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  const inputStyle = (name) => ({
    width: "100%",
    padding: "14px 0",
    background: "transparent",
    border: "none",
    borderBottom: `1.5px solid ${focused === name ? colors.forest : "rgba(54,97,90,0.25)"}`,
    outline: "none",
    fontSize: "0.9rem",
    fontFamily: "'DM Sans', sans-serif",
    color: "#222",
    transition: "border-color 0.3s",
    borderRadius: 0,
  });

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.55s ease both; }
        ::placeholder { color: #aaa; font-size: 0.85rem; }
        textarea { resize: none; }
      `}</style>

      {/* HERO BAND */}
      <div style={{ backgroundColor: colors.forest, padding: "70px 60px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(253,255,252,0.5)", marginBottom: 16 }}>
            LegacyCurator · Get in Touch
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(3.5rem, 7vw, 6rem)", fontWeight: 300, color: colors.porcelain, lineHeight: 0.9 }}>
            Let's talk<br />
            <em style={{ fontStyle: "italic", color: "#a8d4cc" }}>about your vision.</em>
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 60px 100px", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>

        {/* LEFT — Info */}
        <div className="fade-up">
          <p style={{ fontSize: "0.92rem", lineHeight: 1.85, color: "#666", marginBottom: 56, maxWidth: 360 }}>
            Whether you're looking to showcase a lifetime of work, collaborate on a curated collection, or simply want to know more about what we do — we'd love to hear from you.
          </p>

          {/* Contact Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {contactInfo.map((c, i) => (
              <div
                key={i}
                style={{
                  padding: "24px 0",
                  borderBottom: `1px solid rgba(54,97,90,0.12)`,
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                }}
              >
                <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: i % 2 === 0 ? colors.forest : colors.copper, display: "flex", alignItems: "center", justifyContent: "center", color: colors.porcelain, fontSize: "0.85rem", flexShrink: 0, marginTop: 2 }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#aaa", marginBottom: 4 }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 500, color: "#222" }}>{c.value}</div>
                  <div style={{ fontSize: "0.75rem", color: "#999", marginTop: 2 }}>{c.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div
            style={{
              marginTop: 40,
              height: 180,
              borderRadius: 4,
              background: `linear-gradient(135deg, ${colors.forest}22 0%, ${colors.copper}15 100%)`,
              border: `1px solid rgba(54,97,90,0.15)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 8,
              cursor: "pointer",
            }}
          >
            <div style={{ fontSize: "1.5rem", color: colors.forest, opacity: 0.5 }}>◎</div>
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: colors.forest, opacity: 0.6 }}>View on Map</div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="fade-up" style={{ animationDelay: "0.12s" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "80px 40px" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "4rem", color: colors.forest, lineHeight: 1, marginBottom: 20 }}>✦</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.5rem", fontWeight: 300, color: "#111", marginBottom: 16 }}>
                Message <em style={{ color: colors.forest }}>received.</em>
              </h2>
              <p style={{ fontSize: "0.9rem", color: "#888", lineHeight: 1.7 }}>
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                style={{ marginTop: 32, padding: "12px 28px", background: "transparent", border: `1px solid ${colors.forest}`, color: colors.forest, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 2, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
              >
                Send another
              </button>
            </div>
          ) : (
            <div style={{ backgroundColor: colors.porcelain, borderRadius: 4, padding: "52px 48px", boxShadow: "0 4px 40px rgba(54,97,90,0.08)" }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 300, color: "#111", marginBottom: 8 }}>
                Send a <em style={{ fontStyle: "italic", color: colors.copper }}>message</em>
              </h2>
              <p style={{ fontSize: "0.78rem", color: "#aaa", marginBottom: 40, letterSpacing: "0.03em" }}>
                All fields marked * are required
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 28px" }}>
                {/* Name */}
                <div style={{ marginBottom: 32 }}>
                  <label style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#999", display: "block", marginBottom: 4 }}>Full Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    placeholder="Your name"
                    style={inputStyle("name")}
                  />
                </div>

                {/* Email */}
                <div style={{ marginBottom: 32 }}>
                  <label style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#999", display: "block", marginBottom: 4 }}>Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    placeholder="your@email.com"
                    style={inputStyle("email")}
                  />
                </div>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: 32 }}>
                <label style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#999", display: "block", marginBottom: 4 }}>Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused("")}
                  placeholder="What's this about?"
                  style={inputStyle("subject")}
                />
              </div>

              {/* Interest pills */}
              <div style={{ marginBottom: 32 }}>
                <label style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#999", display: "block", marginBottom: 12 }}>I'm interested in</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Portfolio Creation", "Collaboration", "Prints & Editions", "General Inquiry"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setForm({ ...form, subject: tag })}
                      style={{
                        padding: "6px 16px",
                        borderRadius: 100,
                        border: `1px solid ${form.subject === tag ? colors.forest : "rgba(54,97,90,0.25)"}`,
                        background: form.subject === tag ? colors.forest : "transparent",
                        color: form.subject === tag ? colors.porcelain : "#777",
                        fontSize: "0.73rem",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: 40 }}>
                <label style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#999", display: "block", marginBottom: 4 }}>Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                  placeholder="Tell us about your project, idea, or question..."
                  style={{ ...inputStyle("message"), paddingTop: 12 }}
                />
              </div>

              <button
                onClick={handleSubmit}
                style={{
                  width: "100%",
                  padding: "16px 32px",
                  backgroundColor: colors.forest,
                  color: colors.porcelain,
                  border: "none",
                  borderRadius: 2,
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = colors.copper}
                onMouseLeave={(e) => e.target.style.backgroundColor = colors.forest}
              >
                Send Message →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div style={{ borderTop: `1px solid rgba(54,97,90,0.12)`, padding: "36px 60px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.2rem", fontWeight: 300, letterSpacing: "0.08em", color: colors.forest }}>
          Legacy<em style={{ fontStyle: "italic", color: colors.copper }}>Curator</em>
        </div>
        <p style={{ fontSize: "0.78rem", color: "#aaa", letterSpacing: "0.04em" }}>
          Preserving creative legacies — one portfolio at a time.
        </p>
      </div>

    </div>
  );
}