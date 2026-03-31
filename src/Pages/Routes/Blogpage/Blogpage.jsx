import { useState } from "react";

const colors = {
  forest: "#36615A",
  saddle: "#8B542B",
  copper: "#A7703D",
  eggshell: "#F5F0EA",
  porcelain: "#FDFFFC",
};

const categories = ["All", "Curation", "Photography", "Design", "Architecture", "Stories", "Behind the Work"];

const blogs = [
  {
    id: 1,
    featured: true,
    category: "Curation",
    title: "The Art of Preserving a Creative Legacy in the Digital Age",
    excerpt: "What does it mean to truly preserve a body of work? We explore how contemporary curators are bridging the gap between physical archives and digital permanence — and why it matters more than ever.",
    author: "Priya Mehta",
    authorInitial: "P",
    avatarBg: "#36615A",
    date: "March 28, 2026",
    readTime: "8 min read",
    tag: "Editor's Pick",
    accentBg: `linear-gradient(135deg, #36615A 0%, #2a4a44 100%)`,
  },
  {
    id: 2,
    category: "Photography",
    title: "Shooting with Intent: How Anna Marie Built a 10-Year Visual Archive",
    excerpt: "Anna Marie Photo on discipline, storage, and the emotional weight of cataloguing a decade of work into a single cohesive portfolio.",
    author: "Rohit Das",
    authorInitial: "R",
    avatarBg: "#8B542B",
    date: "March 22, 2026",
    readTime: "5 min read",
    accentBg: `linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)`,
  },
  {
    id: 3,
    category: "Design",
    title: "Why White Space is the Most Underrated Design Tool",
    excerpt: "In a world of maximalism, restraint is radical. A deep dive into how negative space shapes perception and elevates creative work.",
    author: "Sara Lind",
    authorInitial: "S",
    avatarBg: "#A7703D",
    date: "March 18, 2026",
    readTime: "4 min read",
    accentBg: `linear-gradient(135deg, #A7703D 0%, #8B542B 100%)`,
  },
  {
    id: 4,
    category: "Stories",
    title: "From Sketch to Print: The Making of 'Round Hill Park'",
    excerpt: "Joella Clove walks us through her creative process — from field notes to final folio — and the decisions that shaped every page.",
    author: "Joella Clove",
    authorInitial: "J",
    avatarBg: "#5a7a75",
    date: "March 14, 2026",
    readTime: "6 min read",
    accentBg: `linear-gradient(135deg, #36615A 0%, #2a4a44 100%)`,
  },
  {
    id: 5,
    category: "Architecture",
    title: "Infinite Forms: When Structure Becomes Story",
    excerpt: "Tomas Vega on how architectural photography is not about buildings — it's about the invisible tension between space and light.",
    author: "Tomas Vega",
    authorInitial: "T",
    avatarBg: "#3d2b1f",
    date: "March 10, 2026",
    readTime: "7 min read",
    accentBg: `linear-gradient(135deg, #1a1a1a 0%, #333 100%)`,
  },
  {
    id: 6,
    category: "Behind the Work",
    title: "How We Curate: The LegacyCurator Editorial Process Revealed",
    excerpt: "A rare look inside our review process — what we look for, what we pass on, and why every portfolio tells a story before it's even opened.",
    author: "Priya Mehta",
    authorInitial: "P",
    avatarBg: "#36615A",
    date: "March 5, 2026",
    readTime: "9 min read",
    accentBg: `linear-gradient(135deg, #f9c784 0%, #e8a838 100%)`,
  },
];

function FeaturedCard({ post }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderRadius: 6,
        overflow: "hidden",
        boxShadow: hovered ? "0 28px 60px rgba(54,97,90,0.16)" : "0 4px 24px rgba(0,0,0,0.07)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.25,0.8,0.25,1)",
        cursor: "pointer",
        background: colors.porcelain,
      }}
    >
      {/* Visual side */}
      <div style={{ background: post.accentBg, minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center", padding: 48, position: "relative" }}>
        <div style={{ position: "absolute", top: 24, left: 24 }}>
          <span style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.25)", padding: "4px 10px", borderRadius: 2 }}>
            {post.tag}
          </span>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "6rem", fontWeight: 300, fontStyle: "italic", color: "rgba(255,255,255,0.12)", lineHeight: 1 }}>LC</div>
          <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.3)", margin: "16px auto" }} />
          <div style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)" }}>{post.category}</div>
        </div>
      </div>
      {/* Text side */}
      <div style={{ padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <span style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: colors.copper, fontWeight: 500 }}>{post.category}</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 300, color: "#111", lineHeight: 1.2, marginTop: 12, marginBottom: 20 }}>
            {post.title}
          </h2>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "#666" }}>{post.excerpt}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 36, paddingTop: 24, borderTop: "1px solid rgba(54,97,90,0.1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: post.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "0.9rem", fontWeight: 600, color: colors.porcelain }}>
              {post.authorInitial}
            </div>
            <div>
              <div style={{ fontSize: "0.8rem", fontWeight: 500, color: "#333" }}>{post.author}</div>
              <div style={{ fontSize: "0.7rem", color: "#aaa" }}>{post.date}</div>
            </div>
          </div>
          <span style={{ fontSize: "0.72rem", color: "#bbb", letterSpacing: "0.05em" }}>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}

function BlogCard({ post }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: colors.porcelain,
        borderRadius: 4,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: hovered ? "0 20px 48px rgba(54,97,90,0.14)" : "0 2px 12px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.25,0.8,0.25,1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: 160, background: post.accentBg, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3.5rem", fontWeight: 300, fontStyle: "italic", color: "rgba(255,255,255,0.1)", userSelect: "none" }}>
          {post.id < 10 ? `0${post.id}` : post.id}
        </div>
        <div style={{ position: "absolute", bottom: 14, left: 18 }}>
          <span style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.2)", padding: "3px 9px", borderRadius: 2 }}>
            {post.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "24px 24px 20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", fontWeight: 400, color: "#111", lineHeight: 1.3, marginBottom: 12 }}>
            {post.title}
          </h3>
          <p style={{ fontSize: "0.8rem", lineHeight: 1.75, color: "#777" }}>{post.excerpt}</p>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 24, paddingTop: 16, borderTop: "1px solid rgba(54,97,90,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: post.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 600, color: colors.porcelain, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              {post.authorInitial}
            </div>
            <span style={{ fontSize: "0.75rem", color: "#888" }}>{post.author}</span>
          </div>
          <span style={{ fontSize: "0.68rem", color: "#bbb" }}>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = blogs.find((b) => b.featured);
  const rest = blogs.filter((b) => !b.featured);

  const filteredRest =
    activeCategory === "All"
      ? rest
      : rest.filter((b) => b.category === activeCategory);

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.55s ease both; }
      `}</style>

      {/* HERO BAND */}
      <div style={{ backgroundColor: colors.forest, padding: "70px 60px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(253,255,252,0.5)", marginBottom: 16 }}>
            LegacyCurator · Journal
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(3.5rem, 7vw, 6rem)", fontWeight: 300, color: colors.porcelain, lineHeight: 0.9 }}>
              Stories &<br />
              <em style={{ fontStyle: "italic", color: "#a8d4cc" }}>Perspectives.</em>
            </h1>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(253,255,252,0.55)", maxWidth: 340 }}>
              Thoughts on curation, craft, and the creative lives worth documenting. Written by artists, curators, and the people who love their work.
            </p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div style={{ height: 1, background: `linear-gradient(90deg, ${colors.forest} 0%, ${colors.copper} 40%, transparent 100%)` }} />

      {/* CATEGORY FILTER */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 60px 0", display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <span style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#bbb", marginRight: 6 }}>Browse</span>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            style={{
              padding: "7px 18px",
              borderRadius: 100,
              border: `1px solid ${activeCategory === c ? colors.forest : "rgba(54,97,90,0.2)"}`,
              background: activeCategory === c ? colors.forest : "transparent",
              color: activeCategory === c ? "#fff" : "#777",
              fontSize: "0.75rem",
              letterSpacing: "0.04em",
              cursor: "pointer",
              transition: "all 0.22s",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* FEATURED POST */}
      {featured && activeCategory === "All" && (
        <div className="fade-up" style={{ maxWidth: 1200, margin: "48px auto 0", padding: "0 60px" }}>
          <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "#bbb", marginBottom: 16 }}>✦ Featured Story</div>
          <FeaturedCard post={featured} />
        </div>
      )}

      {/* GRID */}
      <section style={{ maxWidth: 1200, margin: "60px auto 0", padding: "0 60px 100px" }}>
        {filteredRest.length > 0 && (
          <>
            <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "#bbb", marginBottom: 28 }}>
              {activeCategory === "All" ? "Latest Articles" : activeCategory}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
              {filteredRest.map((post, i) => (
                <div key={post.id} className="fade-up" style={{ animationDelay: `${0.05 + i * 0.08}s` }}>
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </>
        )}

        {filteredRest.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#bbb" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3rem", marginBottom: 12, opacity: 0.3 }}>✦</div>
            <p style={{ fontSize: "0.85rem", letterSpacing: "0.05em" }}>No articles in this category yet.</p>
          </div>
        )}
      </section>

      {/* NEWSLETTER STRIP */}
      <div style={{ backgroundColor: colors.eggshell, borderTop: `1px solid rgba(54,97,90,0.1)`, padding: "70px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
        <div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.4rem", fontWeight: 300, color: "#111", lineHeight: 1.1 }}>
            Stay in the <em style={{ fontStyle: "italic", color: colors.forest }}>loop.</em>
          </h2>
          <p style={{ fontSize: "0.82rem", color: "#888", marginTop: 10, maxWidth: 320, lineHeight: 1.7 }}>
            New stories, curated picks, and behind-the-scenes dispatches — straight to your inbox.
          </p>
        </div>
        <div style={{ display: "flex", gap: 0, flexShrink: 0 }}>
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              padding: "14px 20px",
              border: `1.5px solid rgba(54,97,90,0.3)`,
              borderRight: "none",
              borderRadius: "2px 0 0 2px",
              fontSize: "0.85rem",
              fontFamily: "'DM Sans', sans-serif",
              outline: "none",
              width: 260,
              background: colors.porcelain,
              color: "#333",
            }}
          />
          <button style={{ padding: "14px 28px", backgroundColor: colors.forest, color: colors.porcelain, border: "none", borderRadius: "0 2px 2px 0", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}>
            Subscribe →
          </button>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div style={{ borderTop: `1px solid rgba(54,97,90,0.1)`, padding: "30px 60px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, backgroundColor: "#fff" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.2rem", fontWeight: 300, letterSpacing: "0.08em", color: colors.forest }}>
          Legacy<em style={{ fontStyle: "italic", color: colors.copper }}>Curator</em>
        </div>
        <p style={{ fontSize: "0.75rem", color: "#bbb" }}>Preserving creative legacies — one portfolio at a time.</p>
      </div>
    </div>
  );
}