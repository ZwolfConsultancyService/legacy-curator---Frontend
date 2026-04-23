import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const colors = {
  forest: "#36615A",
  saddle: "#8B542B",
  copper: "#A7703D",
  eggshell: "#F5F0EA",
  porcelain: "#FDFFFC",
};

export default function ContactPage() {
  const [form, setForm] = useState({ fullName: "", email: "", subject: "", interestedIn: "", message: "" });
  const [focused, setFocused] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.fullName || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setLoading(true);

    const payload = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      interestedIn: form.interestedIn,
      message: form.message.trim(),
    };

    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data = {};
      try { data = await res.json(); } catch (_) {}

      if (!res.ok) {
        const msg =
          data.message || data.error || data.msg ||
          (typeof data === "string" ? data : null) ||
          `Request failed with status ${res.status}`;
        throw new Error(msg);
      }

      setSent(true);
    } catch (err) {
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (name) => ({
    width: "100%",
    padding: "14px 0",
    background: "transparent",
    border: "none",
    borderBottom: `1.5px solid ${focused === name ? colors.forest : "rgba(54,97,90,0.25)"}`,
    outline: "none",
    fontSize: "0.9rem",
    fontFamily: "'Montserrat', sans-serif",
    color: "#222",
    transition: "border-color 0.3s",
    borderRadius: 0,
  });

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", fontFamily: "'Montserrat', sans-serif" }}>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.55s ease both; }
        ::placeholder { color: #aaa; font-size: 0.85rem; font-family: 'Montserrat', sans-serif; }
        textarea { resize: none; }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-wrap { padding: 48px 24px 60px !important; }
          .hero-band { padding: 50px 24px 44px !important; }
          .form-box { padding: 36px 24px !important; }
          .form-two-col { grid-template-columns: 1fr !important; }
          .bottom-strip { padding: 28px 24px !important; flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>

      {/* HERO BAND */}
      <div className="hero-band" style={{ backgroundColor: colors.forest, padding: "70px 60px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(253,255,252,0.5)", marginBottom: 16, fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
            LegacyCurator · Get in Touch
          </p>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2.6rem, 7vw, 5rem)", fontWeight: 700, color: colors.porcelain, lineHeight: 0.95 }}>
            Let's talk<br />
            <em style={{ fontStyle: "italic", color: "#a8d4cc", fontWeight: 300 }}>about your vision.</em>
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div
        className="contact-wrap"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 60px 100px", display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: 80, alignItems: "start" }}
      >

        {/* LEFT */}
        <div className="fade-up contact-grid">
          <p style={{ fontSize: "0.92rem", lineHeight: 1.85, color: "#666", marginBottom: 48, maxWidth: 320, fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
            Have a question or want to work with us? Fill in the form or give us a call — we'd love to hear from you.
          </p>

          <div style={{ padding: "28px 24px", background: colors.eggshell, borderRadius: 4, border: `1px solid rgba(54,97,90,0.12)`, display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div style={{ width: 42, height: 42, borderRadius: "50%", backgroundColor: colors.forest, display: "flex", alignItems: "center", justifyContent: "center", color: colors.porcelain, fontSize: "1rem", flexShrink: 0 }}>
              ◎
            </div>
            <div>
              <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#aaa", marginBottom: 6, fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>Call Us</div>
              <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "#222", marginBottom: 4, fontFamily: "'Montserrat', sans-serif" }}>+91 98100 45678</div>
              <div style={{ fontSize: "0.76rem", color: "#999", fontFamily: "'Montserrat', sans-serif" }}>Mon – Sat, 10am – 6pm IST</div>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="fade-up" style={{ animationDelay: "0.12s" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "80px 40px" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "3rem", color: colors.forest, lineHeight: 1, marginBottom: 20, fontWeight: 700 }}>✦</div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "2rem", fontWeight: 700, color: "#111", marginBottom: 16 }}>
                Message <em style={{ color: colors.forest, fontWeight: 300 }}>received.</em>
              </h2>
              <p style={{ fontSize: "0.9rem", color: "#888", lineHeight: 1.7, fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ fullName: "", email: "", subject: "", interestedIn: "", message: "" }); }}
                style={{ marginTop: 32, padding: "12px 28px", background: "transparent", border: `1px solid ${colors.forest}`, color: colors.forest, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 2, cursor: "pointer", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
              >
                Send another
              </button>
            </div>
          ) : (
            <div className="form-box" style={{ backgroundColor: colors.porcelain, borderRadius: 4, padding: "52px 48px", boxShadow: "0 4px 40px rgba(54,97,90,0.08)" }}>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "#111", marginBottom: 8 }}>
                Send a <em style={{ fontStyle: "italic", color: colors.copper, fontWeight: 300 }}>message</em>
              </h2>
              <p style={{ fontSize: "0.78rem", color: "#aaa", marginBottom: 40, letterSpacing: "0.03em", fontFamily: "'Montserrat', sans-serif" }}>
                All fields marked * are required
              </p>

              {error && (
                <div style={{ marginBottom: 24, padding: "12px 16px", background: "#fff0f0", border: "1px solid #f5c2c2", borderRadius: 3, fontSize: "0.82rem", color: "#c0392b", fontFamily: "'Montserrat', sans-serif" }}>
                  ⚠ {error}
                </div>
              )}

              <div className="form-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 28px" }}>
                <div style={{ marginBottom: 32 }}>
                  <label style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#999", display: "block", marginBottom: 4, fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>Full Name *</label>
                  <input name="fullName" value={form.fullName} onChange={handleChange} onFocus={() => setFocused("fullName")} onBlur={() => setFocused("")} placeholder="Your name" style={inputStyle("fullName")} />
                </div>
                <div style={{ marginBottom: 32 }}>
                  <label style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#999", display: "block", marginBottom: 4, fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused("")} placeholder="your@email.com" style={inputStyle("email")} />
                </div>
              </div>

              <div style={{ marginBottom: 32 }}>
                <label style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#999", display: "block", marginBottom: 4, fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} onFocus={() => setFocused("subject")} onBlur={() => setFocused("")} placeholder="What's this about?" style={inputStyle("subject")} />
              </div>

             

              <div style={{ marginBottom: 40 }}>
                <label style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#999", display: "block", marginBottom: 4, fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>Message *</label>
                <textarea name="message" rows={5} value={form.message} onChange={handleChange} onFocus={() => setFocused("message")} onBlur={() => setFocused("")} placeholder="Tell us about your project, idea, or question..." style={{ ...inputStyle("message"), paddingTop: 12 }} />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{ width: "100%", padding: "16px 32px", backgroundColor: loading ? colors.copper : colors.forest, color: colors.porcelain, border: "none", borderRadius: 2, fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Montserrat', sans-serif", transition: "background 0.3s", opacity: loading ? 0.8 : 1 }}
                onMouseEnter={(e) => { if (!loading) e.target.style.backgroundColor = colors.copper; }}
                onMouseLeave={(e) => { if (!loading) e.target.style.backgroundColor = colors.forest; }}
              >
                {loading ? "Sending…" : "Send Message →"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="bottom-strip" style={{ borderTop: `1px solid rgba(54,97,90,0.12)`, padding: "36px 60px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.2rem", fontWeight: 700, letterSpacing: "0.08em", color: colors.forest }}>
          Legacy<em style={{ fontStyle: "italic", color: colors.copper, fontWeight: 300 }}>Curator</em>
        </div>
        <p style={{ fontSize: "0.78rem", color: "#aaa", letterSpacing: "0.04em", fontFamily: "'Montserrat', sans-serif" }}>
          Preserving creative legacies — one portfolio at a time.
        </p>
      </div>
    </div>
  );
}