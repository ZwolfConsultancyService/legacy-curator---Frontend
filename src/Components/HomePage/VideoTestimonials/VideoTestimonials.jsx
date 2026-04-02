import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=900&q=85",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&rel=0",
    quote: "It preserved stories I thought were lost forever.",
    duration: "3:42",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=900&q=85",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&rel=0",
    quote: "Every photograph became a doorway to the past.",
    duration: "4:18",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=900&q=85",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&rel=0",
    quote: "My children now understand where they come from.",
    duration: "5:01",
  },
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=EB+Garamond:ital,wght@0,400;1,400&display=swap');

  * { box-sizing: border-box; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes modalIn {
    from { opacity: 0; transform: scale(0.94); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes backdropIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0px rgba(255,255,255,0.35); }
    50%       { box-shadow: 0 0 0 12px rgba(255,255,255,0.08); }
  }

  .lc-card {
    animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both;
  }
  .lc-card:nth-child(1) { animation-delay: 0.05s; }
  .lc-card:nth-child(2) { animation-delay: 0.18s; }
  .lc-card:nth-child(3) { animation-delay: 0.31s; }

  .lc-wrap {
    position: relative;
    cursor: pointer;
    border-radius: 16px;
    overflow: hidden;
    /* Vertical / reel aspect ratio */
    aspect-ratio: 9 / 15;
    box-shadow: 0 8px 32px rgba(100,80,40,0.13), 0 1px 4px rgba(100,80,40,0.08);
    transition: transform 0.45s cubic-bezier(0.22,1,0.36,1),
                box-shadow 0.45s ease;
  }
  .lc-wrap:hover {
    transform: translateY(-12px) scale(1.012);
    box-shadow: 0 32px 72px rgba(100,80,40,0.22), 0 2px 8px rgba(100,80,40,0.10);
  }

  .lc-img {
    position: absolute; inset: 0;
    width: 100%; height: 100%; object-fit: cover;
    transition: transform 0.85s cubic-bezier(0.22,1,0.36,1);
  }
  .lc-wrap:hover .lc-img { transform: scale(1.06); }

  /* Bottom gradient strong */
  .lc-grad {
    position: absolute; inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0,0,0,0.0) 0%,
      rgba(0,0,0,0.08) 40%,
      rgba(10,6,2,0.82) 100%
    );
  }
  /* Sepia top wash */
  .lc-sepia {
    position: absolute; inset: 0;
    background: rgba(70,44,8,0.18);
  }

  /* Duration pill top-right */
  .lc-duration {
    position: absolute;
    top: 16px; right: 16px;
    font-family: 'EB Garamond', serif;
    font-size: 13px;
    color: #f5ead0;
    background: rgba(0,0,0,0.48);
    border: 0.5px solid rgba(255,220,140,0.3);
    padding: 4px 12px;
    border-radius: 20px;
    letter-spacing: 0.06em;
    backdrop-filter: blur(4px);
  }

  /* Play button center */
  .lc-play-wrap {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
  }
  .lc-play {
    width: 72px; height: 72px;
    border-radius: 50%;
    border: 1.5px solid rgba(255,255,255,0.8);
    background: rgba(255,255,255,0.18);
    backdrop-filter: blur(8px);
    display: flex; align-items: center; justify-content: center;
    transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
                background 0.3s ease;
    animation: pulse 2.8s ease-in-out infinite;
    padding-left: 5px;
  }
  .lc-wrap:hover .lc-play {
    transform: scale(1.15);
    background: rgba(255,255,255,0.28);
    animation: none;
    box-shadow: 0 0 0 18px rgba(255,255,255,0.1);
  }

  /* Quote bottom */
  .lc-bottom {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 20px 22px 24px;
  }
  .lc-quote {
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-size: 16px;
    line-height: 1.55;
    color: #f0e4cc;
    text-shadow: 0 1px 10px rgba(0,0,0,0.8);
    margin: 0;
  }

  /* Watch bar at very bottom */
  .lc-watch-bar {
    margin-top: 10px;
    display: flex; align-items: center; gap: 8px;
  }
  .lc-watch-line {
    width: 20px; height: 1px;
    background: rgba(212,184,122,0.7);
    flex-shrink: 0;
  }
  .lc-watch-label {
    font-family: 'EB Garamond', serif;
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #d4b87a;
  }

  /* Modal */
  .lc-modal-backdrop {
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(20,12,2,0.82);
    display: flex; align-items: center; justify-content: center;
    padding: 24px;
    animation: backdropIn 0.28s ease;
    backdrop-filter: blur(16px);
  }
  .lc-modal {
    width: min(860px, 100%);
    animation: modalIn 0.38s cubic-bezier(0.22,1,0.36,1);
    background: #fefcf8;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #e0d4be;
    box-shadow: 0 40px 100px rgba(0,0,0,0.4);
  }
  .lc-modal-bar {
    padding: 14px 24px;
    background: #faf6ee;
    border-bottom: 1px solid #ede5d8;
    display: flex; align-items: center; justify-content: space-between;
  }
  .lc-modal-title {
    font-family: 'EB Garamond', serif;
    font-style: italic;
    color: #9b8360;
    font-size: 15px;
    letter-spacing: 0.05em;
  }
  .lc-close {
    font-family: 'EB Garamond', serif;
    font-size: 12px;
    letter-spacing: 0.15em;
    color: #5c4310;
    text-transform: uppercase;
    border: 0.5px solid rgba(139,105,20,0.4);
    padding: 7px 22px;
    border-radius: 2px;
    background: rgba(139,105,20,0.06);
    cursor: pointer;
    transition: background 0.2s;
  }
  .lc-close:hover { background: rgba(139,105,20,0.14); }
`;

const Modal = ({ item, onClose }) => (
  <div className="lc-modal-backdrop" onClick={onClose}>
    <div className="lc-modal" onClick={e => e.stopPropagation()}>
      <div className="lc-modal-bar">
        <span className="lc-modal-title">"{item.quote}"</span>
        <button className="lc-close" onClick={onClose}>Close</button>
      </div>
      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src={item.videoUrl}
          title="Testimonial"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
        />
      </div>
    </div>
  </div>
);

const Card = ({ item, onClick, index }) => (
  <div className="lc-card">
    <div className="lc-wrap" onClick={() => onClick(item)}>
      <img className="lc-img" src={item.thumbnail} alt="testimonial" />
      <div className="lc-sepia" />
      <div className="lc-grad" />

      <div className="lc-duration">{item.duration}</div>

      <div className="lc-play-wrap">
        <div className="lc-play">
          <svg viewBox="0 0 24 24" fill="#fff" width="28" height="28">
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
        </div>
      </div>

      <div className="lc-bottom">
        <p className="lc-quote">"{item.quote}"</p>
        <div className="lc-watch-bar">
          <div className="lc-watch-line" />
          <span className="lc-watch-label">Watch Story</span>
        </div>
      </div>
    </div>
  </div>
);

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const handler = e => { if (e.key === "Escape") setActiveVideo(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <style>{CSS}</style>

      <section style={{
        background:'#ffffff',
        minHeight: "100vh",
        padding: "88px 28px 100px",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Header */}
        <header style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "26px" }}>
            <div style={{ flex: 1, height: "0.5px", background: "linear-gradient(90deg,transparent,#c8a96e)" }} />
            <span style={{ fontFamily: "'EB Garamond', serif", color: "#b8a07a", fontSize: "11px", letterSpacing: "0.35em", textTransform: "uppercase" }}>
              Legacy Curator
            </span>
            <div style={{ flex: 1, height: "0.5px", background: "linear-gradient(90deg,#c8a96e,transparent)" }} />
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontSize: "clamp(28px, 4vw, 46px)",
            color: "#1e1408",
            margin: 0,
            lineHeight: 1.18,
          }}>
            Trusted by over<br />one million families
          </h2>

          <p style={{
            fontFamily: "'EB Garamond', serif",
            fontStyle: "italic",
            fontSize: "18px",
            color: "#9b8360",
            marginTop: "14px",
            lineHeight: 1.6,
          }}>
            Real voices. Real stories. Preserved for generations.
          </p>

          <div style={{ marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
            <div style={{ width: "32px", height: "0.5px", background: "#d4b87a" }} />
            <svg viewBox="0 0 20 20" fill="#c8a96e" width="12" height="12" opacity="0.75">
              <path d="M10 1l2.4 6.4H19l-5.3 3.9 2 6.5L10 14l-5.7 3.8 2-6.5L1 7.4h6.6z" />
            </svg>
            <div style={{ width: "32px", height: "0.5px", background: "#d4b87a" }} />
          </div>
        </header>

        {/* Vertical reel cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "28px",
          maxWidth: "960px",
          margin: "0 auto",
        }}>
          {testimonials.map((item, i) => (
            <Card key={item.id} item={item} index={i} onClick={setActiveVideo} />
          ))}
        </div>

        
      </section>

      {activeVideo && <Modal item={activeVideo} onClose={() => setActiveVideo(null)} />}
    </>
  );
}