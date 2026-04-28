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
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    interestedIn: "",
    message: "",
  });
  const [focused, setFocused] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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
      try {
        data = await res.json();
      } catch (_) {}

      if (!res.ok) {
        const msg =
          data.message ||
          data.error ||
          data.msg ||
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
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,300;1,400&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.55s ease both; }
        ::placeholder { color: #aaa; font-size: 0.85rem; font-family: 'Montserrat', sans-serif; }
        textarea { resize: none; }

        /* ── Hero ── */
        .hero-band {
          background-color: #36615A;
          padding: clamp(36px, 6vw, 70px) clamp(20px, 5vw, 60px) clamp(32px, 5vw, 60px);
        }
        .hero-h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2rem, 8vw, 5rem);
          font-weight: 700;
          color: #FDFFFC;
          line-height: 0.95;
        }

        /* ── Main layout ── */
        .contact-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(36px, 6vw, 80px) clamp(20px, 5vw, 60px) clamp(48px, 8vw, 100px);
          display: grid;
          grid-template-columns: 1fr 1.8fr;
          gap: clamp(32px, 5vw, 80px);
          align-items: start;
        }

        /* ── Form box ── */
        .form-box {
          background-color: #FDFFFC;
          border-radius: 4px;
          padding: clamp(28px, 5vw, 52px) clamp(20px, 5vw, 48px);
          box-shadow: 0 4px 40px rgba(54,97,90,0.08);
        }

        /* ── Two-column inside form ── */
        .form-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 28px;
        }

        /* ── Bottom strip ── */
        .bottom-strip {
          border-top: 1px solid rgba(54,97,90,0.12);
          padding: clamp(20px, 3vw, 36px) clamp(20px, 5vw, 60px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* ── Submit button touch target ── */
        .submit-btn {
          min-height: 48px;
        }

        /* ══ TABLET (≤ 900px) ══ */
        @media (max-width: 900px) {
          .contact-wrap {
            grid-template-columns: 1fr;
          }
        }

        /* ══ MOBILE (≤ 560px) ══ */
        @media (max-width: 560px) {
          .form-two-col {
            grid-template-columns: 1fr;
          }

          .hero-band {
            padding: 40px 20px 36px;
          }

          .form-box {
            padding: 28px 18px;
          }

          .contact-wrap {
            padding: 36px 18px 52px;
          }

          .bottom-strip {
            flex-direction: column;
            align-items: flex-start;
            padding: 24px 18px;
          }
        }
      `}</style>

      {/* ── HERO BAND ── */}
      <div className="hero-band">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "rgba(253,255,252,0.5)",
              marginBottom: 16,
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
            }}
          >
            LegacyCurator · Get in Touch
          </p>
          <h1 className="hero-h1">
            Let's talk
            <br />
            <em
              style={{ fontStyle: "italic", color: "#a8d4cc", fontWeight: 300 }}
            >
              about your vision.
            </em>
          </h1>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="contact-wrap">
        {/* LEFT */}
        <div className="fade-up">
          <p
            style={{
              fontSize: "0.92rem",
              lineHeight: 1.85,
              color: "#666",
              marginBottom: 40,
              maxWidth: 320,
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
            }}
          >
            Have a question or want to work with us? Fill in the form or give us
            a call — we'd love to hear from you.
          </p>

          <div
            style={{
              padding: "24px 20px",
              background: colors.eggshell,
              borderRadius: 4,
              border: `1px solid rgba(54,97,90,0.12)`,
              display: "flex",
              gap: 18,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                backgroundColor: colors.forest,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colors.porcelain,
                fontSize: "1rem",
                flexShrink: 0,
              }}
            >
              ◎
            </div>
            <div>
              {/* Call Section */}
              <div
                style={{
                  fontSize: "0.68rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#aaa",
                  marginBottom: 6,
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                }}
              >
                Call Us
              </div>
              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#222",
                  marginBottom: 4,
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                +91 8076206304
              </div>
              <div
                style={{
                  fontSize: "0.76rem",
                  color: "#999",
                  fontFamily: "'Montserrat', sans-serif",
                  marginBottom: 16,
                }}
              >
                Mon – Sat, 10am – 6pm IST
              </div>

              {/* Email Section */}
              <div
                style={{
                  fontSize: "0.68rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#aaa",
                  marginBottom: 6,
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                }}
              >
                Email Us
              </div>
              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#222",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <a
                  href="mailto:editor@legacycurator.in"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  editor@legacycurator.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="fade-up" style={{ animationDelay: "0.12s" }}>
          {sent ? (
            <div
              style={{
                textAlign: "center",
                padding: "clamp(40px, 8vw, 80px) 24px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "3rem",
                  color: colors.forest,
                  lineHeight: 1,
                  marginBottom: 20,
                  fontWeight: 700,
                }}
              >
                ✦
              </div>
              <h2
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(1.4rem, 4vw, 2rem)",
                  fontWeight: 700,
                  color: "#111",
                  marginBottom: 16,
                }}
              >
                Message{" "}
                <em style={{ color: colors.forest, fontWeight: 300 }}>
                  received.
                </em>
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#888",
                  lineHeight: 1.7,
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                }}
              >
                Thank you for reaching out. We'll get back to you within 24
                hours.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({
                    fullName: "",
                    email: "",
                    subject: "",
                    interestedIn: "",
                    message: "",
                  });
                }}
                style={{
                  marginTop: 32,
                  padding: "12px 28px",
                  background: "transparent",
                  border: `1px solid ${colors.forest}`,
                  color: colors.forest,
                  fontSize: "0.78rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  borderRadius: 2,
                  cursor: "pointer",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  minHeight: 44,
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <div className="form-box">
              <h2
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(1.3rem, 4vw, 1.75rem)",
                  fontWeight: 700,
                  color: "#111",
                  marginBottom: 8,
                }}
              >
                Send a{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: colors.copper,
                    fontWeight: 300,
                  }}
                >
                  message
                </em>
              </h2>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#aaa",
                  marginBottom: 36,
                  letterSpacing: "0.03em",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                All fields marked * are required
              </p>

              {error && (
                <div
                  style={{
                    marginBottom: 24,
                    padding: "12px 16px",
                    background: "#fff0f0",
                    border: "1px solid #f5c2c2",
                    borderRadius: 3,
                    fontSize: "0.82rem",
                    color: "#c0392b",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  ⚠ {error}
                </div>
              )}

              <div className="form-two-col">
                <div style={{ marginBottom: 28 }}>
                  <label
                    style={{
                      fontSize: "0.68rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#999",
                      display: "block",
                      marginBottom: 4,
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    onFocus={() => setFocused("fullName")}
                    onBlur={() => setFocused("")}
                    placeholder="Your name"
                    style={inputStyle("fullName")}
                  />
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label
                    style={{
                      fontSize: "0.68rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#999",
                      display: "block",
                      marginBottom: 4,
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Email Address *
                  </label>
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

              <div style={{ marginBottom: 28 }}>
                <label
                  style={{
                    fontSize: "0.68rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#999",
                    display: "block",
                    marginBottom: 4,
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Subject
                </label>
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

              <div style={{ marginBottom: 36 }}>
                <label
                  style={{
                    fontSize: "0.68rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#999",
                    display: "block",
                    marginBottom: 4,
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Message *
                </label>
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
                className="submit-btn"
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "15px 32px",
                  backgroundColor: loading ? colors.copper : colors.forest,
                  color: colors.porcelain,
                  border: "none",
                  borderRadius: 2,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontFamily: "'Montserrat', sans-serif",
                  transition: "background 0.3s",
                  opacity: loading ? 0.8 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!loading) e.target.style.backgroundColor = colors.copper;
                }}
                onMouseLeave={(e) => {
                  if (!loading) e.target.style.backgroundColor = colors.forest;
                }}
              >
                {loading ? "Sending…" : "Send Message →"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── BOTTOM STRIP ── */}
      <div className="bottom-strip">
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: colors.forest,
          }}
        >
          Legacy
          <em
            style={{
              fontStyle: "italic",
              color: colors.copper,
              fontWeight: 300,
            }}
          >
            Curator
          </em>
        </div>
        <p
          style={{
            fontSize: "0.78rem",
            color: "#aaa",
            letterSpacing: "0.04em",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Preserving creative legacies — one portfolio at a time.
        </p>
      </div>
    </div>
  );
}
