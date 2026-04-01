import { useState } from "react";
import { useNavigate } from "react-router-dom";

const colors = {
  forest: "#36615A",
  saddle: "#8B542B",
  copper: "#A7703D",
  eggshell: "#F5F0EA",
  porcelain: "#FDFFFC",
  dark: "#1c3632",
};

const portfolios = [
  {
    id: 1,
    title: "AMP Magazine",
    author: "Anna Marie Photo",
    category: "Photography",
    featured: true,
    bookBg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    bookNum: "10",
    bookTextColor: "#fff",
    avatarBg: "#36615A",
    avatarLetter: "A",
    tag: "Featured",
  },
  {
    id: 2,
    title: "Ambient Silver",
    author: "Montie Talbert",
    category: "Fine Art",
    bookBg: "linear-gradient(135deg, #f9c784 0%, #e8a838 100%)",
    bookNum: "III",
    bookTextColor: "#111",
    avatarBg: "#8B542B",
    avatarLetter: "M",
  },
  {
    id: 3,
    title: "Oh! My Love",
    author: "Kalise Couture",
    category: "Fashion",
    bookBg: "linear-gradient(135deg, #fce4ec 0%, #f48fb1 100%)",
    bookNum: "♥",
    bookTextColor: "#8b0030",
    avatarBg: "#A7703D",
    avatarLetter: "K",
  },
  {
    id: 4,
    title: "Round Hill Park",
    author: "Joella Clove",
    category: "Travel",
    bookBg: "linear-gradient(135deg, #36615A 0%, #2a4a44 100%)",
    bookNum: "IV",
    bookTextColor: "#fff",
    avatarBg: "#5a7a75",
    avatarLetter: "J",
  },
  {
    id: 5,
    title: "Shadow Works",
    author: "Reza Kahani",
    category: "Architecture",
    bookBg: "linear-gradient(135deg, #2d2d2d 0%, #4a4a4a 100%)",
    bookNum: "∞",
    bookTextColor: "#fff",
    avatarBg: "#3d2b1f",
    avatarLetter: "R",
  },
  {
    id: 6,
    title: "Copper & Clay",
    author: "Sara Lind",
    category: "Design",
    bookBg: "linear-gradient(135deg, #A7703D 0%, #8B542B 100%)",
    bookNum: "VI",
    bookTextColor: "#fff",
    avatarBg: "#36615A",
    avatarLetter: "S",
  },
  {
    id: 7,
    title: "Violet Hour",
    author: "Nadia Ferris",
    category: "Fine Art",
    bookBg: "linear-gradient(135deg, #e8e4f0 0%, #c8c0e0 100%)",
    bookNum: "VII",
    bookTextColor: "#2d2060",
    avatarBg: "#A7703D",
    avatarLetter: "N",
  },
  {
    id: 8,
    title: "Infinite Forms",
    author: "Tomas Vega",
    category: "Architecture",
    bookBg: "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
    bookNum: "VIII",
    bookTextColor: "#fff",
    avatarBg: "#8B542B",
    avatarLetter: "T",
  },
];

/* ─── BookCard ─────────────────────────────────────────── */
function BookCard({ p }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: colors.porcelain,
        borderRadius: 4,
        overflow: "hidden",
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 24px 50px rgba(54,97,90,0.18)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        transition: "transform 0.35s cubic-bezier(0.25,0.8,0.25,1), box-shadow 0.35s",
      }}
    >
      {/* Book thumbnail */}
      <div style={{
        height:         240,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        background:     "#e8e4d4",
        flexShrink:     0,
      }}>
        <div style={{
          width:         116,
          height:        168,
          background:    p.bookBg,
          borderRadius:  "2px 6px 6px 2px",
          boxShadow:     "4px 6px 30px rgba(0,0,0,0.30), inset -3px 0 8px rgba(0,0,0,0.15)",
          display:       "flex",
          flexDirection: "column",
          alignItems:    "center",
          justifyContent:"center",
          padding:       "16px 12px",
          textAlign:     "center",
          transform:     hovered ? "rotate(-3deg) scale(1.07)" : "rotate(0deg) scale(1)",
          transition:    "transform 0.4s ease",
        }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize:   "2.2rem",
            fontWeight: 300,
            fontStyle:  "italic",
            color:      p.bookTextColor,
            opacity:    0.3,
            lineHeight: 1,
          }}>
            {p.bookNum}
          </div>
          <div style={{
            fontFamily:    "'Cormorant Garamond', Georgia, serif",
            fontSize:      "0.92rem",
            fontWeight:    400,
            color:         p.bookTextColor,
            letterSpacing: "0.05em",
            lineHeight:    1.2,
            marginTop:     6,
          }}>
            {p.title}
          </div>
          <div style={{
            fontSize:      "0.55rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color:         p.bookTextColor,
            opacity:       0.52,
            marginTop:     6,
          }}>
            {p.category}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding:    "14px 18px",
        display:    "flex",
        alignItems: "center",
        gap:        10,
        borderTop:  "1px solid rgba(0,0,0,0.05)",
      }}>
        <div style={{
          width:           36,
          height:          36,
          borderRadius:    "50%",
          backgroundColor: p.avatarBg,
          display:         "flex",
          alignItems:      "center",
          justifyContent:  "center",
          fontFamily:      "'Cormorant Garamond', Georgia, serif",
          fontSize:        "0.95rem",
          fontWeight:      600,
          color:           colors.porcelain,
          flexShrink:      0,
        }}>
          {p.avatarLetter}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize:     "0.82rem",
            fontWeight:   500,
            color:        "#222",
            whiteSpace:   "nowrap",
            overflow:     "hidden",
            textOverflow: "ellipsis",
          }}>
            {p.title}
          </div>
          <div style={{ fontSize: "0.72rem", color: "#888", marginTop: 2 }}>
            By <span style={{ color: colors.copper, fontWeight: 500 }}>{p.author}</span>
          </div>
        </div>

        {p.tag && (
          <span style={{
            fontSize:      "0.58rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color:         colors.forest,
            border:        `1px solid ${colors.forest}`,
            padding:       "3px 7px",
            borderRadius:  2,
            flexShrink:    0,
          }}>
            {p.tag}
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── PortfolioSection ──────────────────────────────────── */
export default function PortfolioSection() {
  const navigate = useNavigate();

  // Sirf pehle 4 dikho — sabhi equal size
  const visible = portfolios.slice(0, 4);

  return (
    <div style={{
      backgroundColor: colors.eggshell,
      fontFamily:      "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes ps-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ps-fade { animation: ps-fadeUp 0.5s ease both; }

        .ps-view-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 32px;
          background: transparent;
          color: #36615A;
          border: 1.5px solid #36615A;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border-radius: 2px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.22s, color 0.22s, transform 0.2s, box-shadow 0.2s;
        }
        .ps-view-btn:hover {
          background: #36615A;
          color: #FDFFFC;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(54,97,90,0.2);
        }
        .ps-view-btn:hover .ps-arrow { transform: translateX(4px); }
        .ps-arrow { transition: transform 0.2s; }

        @media (max-width: 900px) {
          .ps-head   { padding: 48px 28px 36px !important; }
          .ps-rule   { padding: 0 28px !important; }
          .ps-grid   { grid-template-columns: repeat(2,1fr) !important; padding: 0 28px !important; }
          .ps-feat   { grid-column: span 2 !important; grid-row: span 1 !important; }
          .ps-foot   { padding: 36px 28px 52px !important; }
        }
        @media (max-width: 540px) {
          .ps-grid { grid-template-columns: 1fr !important; }
          .ps-feat { grid-column: span 1 !important; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <div className="ps-head ps-fade" style={{
        maxWidth:       1400,
        margin:         "0 auto",
        padding:        "64px 60px 40px",
        display:        "flex",
        alignItems:     "flex-end",
        justifyContent: "space-between",
        gap:            32,
        flexWrap:       "wrap",
      }}>
        <div>
          <span style={{
            fontSize:      "0.68rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color:         colors.copper,
            display:       "block",
            marginBottom:  12,
          }}>
            LegacyCurator · Portfolios
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize:   "clamp(2.4rem, 4vw, 3.8rem)",
            fontWeight: 300,
            lineHeight: 1.0,
            color:      "#111",
            margin:     0,
          }}>
            Discover <em style={{ fontStyle: "italic", color: colors.forest }}>remarkable</em>
            <br />work from creators
          </h2>
        </div>
        <p style={{
          fontSize:   "0.9rem",
          lineHeight: 1.8,
          color:      "#777",
          maxWidth:   300,
          margin:     0,
        }}>
          A curated selection of portfolios from self-publishers around the world.
        </p>
      </div>

      {/* ── DIVIDER ── */}
      <div className="ps-rule" style={{
        maxWidth: 1400, margin: "0 auto 40px", padding: "0 60px",
      }}>
        <div style={{
          height:     1,
          background: `linear-gradient(90deg, ${colors.forest} 0%, ${colors.copper} 38%, transparent 100%)`,
        }} />
      </div>

      {/* ── GRID — 4 cards ── */}
      <section className="ps-grid" style={{
        maxWidth:            1400,
        margin:              "0 auto",
        padding:             "0 60px",
        display:             "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap:                 22,
      }}>
        {visible.map((p, i) => (
          <div key={p.id} className="ps-fade" style={{ animationDelay: `${0.05 + i * 0.07}s` }}>
            <BookCard p={p} />
          </div>
        ))}
      </section>

      {/* ── FOOTER — count + View More ── */}
      <div className="ps-foot" style={{
        maxWidth:       1400,
        margin:         "0 auto",
        padding:        "40px 60px 60px",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "space-between",
        gap:            24,
        flexWrap:       "wrap",
      }}>
       
        {/* View all button → /portfolio */}
        <button
          className="ps-view-btn"
          onClick={() => navigate("/portfolio")}
        >
          View all portfolios
          <svg className="ps-arrow" width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
              stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}