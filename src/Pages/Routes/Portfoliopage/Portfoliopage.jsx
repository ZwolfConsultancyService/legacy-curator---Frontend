import { useState } from "react";

const colors = {
  forest: "#36615A",
  saddle: "#8B542B",
  copper: "#A7703D",
  eggshell: "#F5F0EA",
  porcelain: "#FDFFFC",
};

const filters = ["All", "Photography", "Fine Art", "Design", "Architecture", "Travel", "Fashion"];

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


function BookCard({ p, large = false }) {
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
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 24px 50px rgba(54,97,90,0.18)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        transition: "transform 0.35s cubic-bezier(0.25,0.8,0.25,1), box-shadow 0.35s",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: large ? 420 : 230,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#e8e4d4",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: large ? 170 : 110,
            height: large ? 250 : 160,
            background: p.bookBg,
            borderRadius: "2px 6px 6px 2px",
            boxShadow: "4px 6px 30px rgba(0,0,0,0.3), inset -3px 0 8px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px 12px",
            textAlign: "center",
            transform: hovered ? "rotate(-3deg) scale(1.07)" : "rotate(0deg) scale(1)",
            transition: "transform 0.4s ease",
          }}
        >
          <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: large ? "3.5rem" : "2.2rem", fontWeight: 300, fontStyle: "italic", color: p.bookTextColor, opacity: 0.3, lineHeight: 1 }}>
            {p.bookNum}
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: large ? "1.3rem" : "0.95rem", fontWeight: 400, color: p.bookTextColor, letterSpacing: "0.05em", lineHeight: 1.2, marginTop: 6 }}>
            {p.title}
          </div>
          <div style={{ fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", color: p.bookTextColor, opacity: 0.55, marginTop: 6 }}>
            {p.category}
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 38, height: 38, borderRadius: "50%", backgroundColor: p.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1rem", fontWeight: 600, color: colors.porcelain, flexShrink: 0 }}>
          {p.avatarLetter}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: "0.85rem", fontWeight: 500, color: "#222", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {p.title}
          </div>
          <div style={{ fontSize: "0.75rem", color: "#888", marginTop: 2 }}>
            By <span style={{ color: colors.copper, fontWeight: 500 }}>{p.author}</span>
          </div>
        </div>
        {p.tag && (
          <span style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.12em", color: colors.forest, border: `1px solid ${colors.forest}`, padding: "3px 8px", borderRadius: 2, flexShrink: 0 }}>
            {p.tag}
          </span>
        )}
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? portfolios
      : portfolios.filter((p) => p.category === activeFilter);

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div style={{ backgroundColor: colors.eggshell, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.55s ease both; }
      `}</style>

      {/* HERO */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "60px 60px 50px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "end" }}>
        <h1
          className="fade-up"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(4rem, 8vw, 7rem)", fontWeight: 300, lineHeight: 0.92, color: "#111" }}
        >
          Port<br />
          <em style={{ fontStyle: "italic", color: colors.forest }}>folios</em>
        </h1>
        <p
          className="fade-up"
          style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#666", maxWidth: 380, marginLeft: "auto", animationDelay: "0.1s" }}
        >
          Browse through a wide selection of unique portfolios from self-publishers around the world.
          Whether you're looking for examples for your{" "}
          <a href="#" style={{ color: colors.copper, textUnderlineOffset: 3 }}>own portfolio</a>
          , a particular artist, or just to discover remarkable work — you're in the right place.
        </p>
      </section>

      {/* Divider */}
      <div style={{ maxWidth: 1400, margin: "0 auto 50px", padding: "0 60px" }}>
        <div style={{ height: 1, background: `linear-gradient(90deg, ${colors.forest} 0%, ${colors.copper} 40%, transparent 100%)` }} />
      </div>

      {/* FILTER BAR */}
      <div style={{ maxWidth: 1400, margin: "0 auto 48px", padding: "0 60px", display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#999", marginRight: 8 }}>Filter by</span>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              padding: "8px 20px",
              border: `1px solid ${activeFilter === f ? colors.forest : "rgba(54,97,90,0.3)"}`,
              borderRadius: 100,
              background: activeFilter === f ? colors.forest : "transparent",
              color: activeFilter === f ? colors.porcelain : "#666",
              fontSize: "0.78rem",
              letterSpacing: "0.05em",
              cursor: "pointer",
              transition: "all 0.25s",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* GRID */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {featured && (
            <div style={{ gridColumn: "span 2", gridRow: "span 2" }}>
              <BookCard p={featured} large />
            </div>
          )}
          {rest.map((p, i) => (
            <div key={p.id} className="fade-up" style={{ animationDelay: `${0.05 + i * 0.07}s` }}>
              <BookCard p={p} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <div style={{ backgroundColor: colors.forest, padding: "70px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 300, color: colors.porcelain, lineHeight: 1.1, maxWidth: 480 }}>
          Ready to share your{" "}
          <em style={{ fontStyle: "italic", color: "#a8d4cc" }}>own story?</em>
        </h2>
        <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(253,255,252,0.65)", maxWidth: 320 }}>
          Create a professional portfolio in minutes. Showcase your work to the world — every craft deserves a beautiful home.
        </p>
        <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", backgroundColor: colors.copper, color: colors.porcelain, textDecoration: "none", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 2, whiteSpace: "nowrap" }}>
          Make your portfolio →
        </a>
      </div>

    </div>
  );
}