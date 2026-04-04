// src/Pages/Routes/Blogpage/Blogpage.jsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const colors = {
  forest: "#36615A",
  saddle: "#8B542B",
  copper: "#A7703D",
  eggshell: "#F5F0EA",
  porcelain: "#FDFFFC",
};

const categories = ["All", "Curation", "Photography", "Design", "Architecture", "Stories", "Behind the Work"];

// ─── HELPER ──────────────────────────────────────────────────
export function slugify(title) {
  return title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
}

// ─── SKELETON ────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div style={{ background: "#FDFFFC", borderRadius: 4, overflow: "hidden", opacity: 0.7 }}>
      <div style={{ height: 160, background: "linear-gradient(90deg,#e8e8e8 25%,#f4f4f4 50%,#e8e8e8 75%)", backgroundSize: "200% 100%", animation: "shimmer 1.4s infinite" }} />
      <div style={{ padding: "24px 24px 20px" }}>
        <div style={{ height: 13, background: "#e8e8e8", borderRadius: 3, marginBottom: 10, width: "75%" }} />
        <div style={{ height: 13, background: "#e8e8e8", borderRadius: 3, marginBottom: 10, width: "55%" }} />
        <div style={{ height: 10, background: "#efefef", borderRadius: 3, width: "38%", marginTop: 24 }} />
      </div>
    </div>
  );
}

// ─── FEATURED CARD ───────────────────────────────────────────
function FeaturedCard({ post, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
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
      <div style={{ background: post.accentBg || "linear-gradient(135deg,#36615A,#2a4a44)", minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center", padding: 48, position: "relative" }}>
        {post.tag && (
          <div style={{ position: "absolute", top: 24, left: 24 }}>
            <span style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.25)", padding: "4px 10px", borderRadius: 2 }}>
              {post.tag}
            </span>
          </div>
        )}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "6rem", fontWeight: 300, fontStyle: "italic", color: "rgba(255,255,255,0.12)", lineHeight: 1 }}>LC</div>
          <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.3)", margin: "16px auto" }} />
          <div style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)" }}>{post.category}</div>
        </div>
      </div>
      <div style={{ padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <span style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: colors.copper, fontWeight: 500 }}>{post.category}</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 300, color: "#111", lineHeight: 1.2, marginTop: 12, marginBottom: 20 }}>{post.title}</h2>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "#666" }}>{post.excerpt}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 36, paddingTop: 24, borderTop: "1px solid rgba(54,97,90,0.1)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: post.avatarBg || colors.forest, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "0.9rem", fontWeight: 600, color: colors.porcelain }}>
              {post.authorInitial || post.author?.[0] || "A"}
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

// ─── BLOG CARD ───────────────────────────────────────────────
function BlogCard({ post, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
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
      <div style={{ height: 160, background: post.accentBg || "linear-gradient(135deg,#36615A,#2a4a44)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3.5rem", fontWeight: 300, fontStyle: "italic", color: "rgba(255,255,255,0.1)", userSelect: "none" }}>✦</div>
        <div style={{ position: "absolute", bottom: 14, left: 18 }}>
          <span style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.2)", padding: "3px 9px", borderRadius: 2 }}>
            {post.category}
          </span>
        </div>
      </div>
      <div style={{ padding: "24px 24px 20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", fontWeight: 400, color: "#111", lineHeight: 1.3, marginBottom: 12 }}>{post.title}</h3>
          <p style={{ fontSize: "0.8rem", lineHeight: 1.75, color: "#777" }}>{post.excerpt}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 24, paddingTop: 16, borderTop: "1px solid rgba(54,97,90,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: post.avatarBg || colors.forest, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 600, color: colors.porcelain, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              {post.authorInitial || post.author?.[0] || "A"}
            </div>
            <span style={{ fontSize: "0.75rem", color: "#888" }}>{post.author}</span>
          </div>
          <span style={{ fontSize: "0.68rem", color: "#bbb" }}>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [featured, setFeatured]   = useState(null);
  const [blogs, setBlogs]         = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState("");
  const navigate = useNavigate();

  const fetchBlogs = async (category) => {
    setLoading(true);
    setError("");
    try {
      // ── 1. Featured (always fresh, ignore category filter) ──
      if (category === "All") {
        const fRes  = await fetch(`${API_BASE}/blogs/featured`);
        const fData = await fRes.json();
        if (fData.success && fData.data?.length > 0) {
          setFeatured(fData.data[0]);
        } else {
          setFeatured(null);
        }
      } else {
        setFeatured(null); // category filter mein featured band karo
      }

      // ── 2. All blogs list (content/toc excluded by backend) ──
      const params = new URLSearchParams();
      if (category !== "All") params.set("category", category);

      const res  = await fetch(`${API_BASE}/blogs?${params.toString()}`);
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to load blogs.");
      setBlogs(data.data || []);
    } catch (e) {
      console.error("Blog fetch error:", e);
      setError(e.message || "Could not connect to server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBlogs(activeCategory); }, [activeCategory]);

  // Featured ko grid se alag karo
  const gridBlogs = featured ? blogs.filter((b) => b._id !== featured._id) : blogs;

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.55s ease both; }
        .cat-btn:hover { border-color: rgba(54,97,90,0.5) !important; color: #444 !important; }
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
      `}</style>

      {/* HERO BAND */}
      <div style={{ backgroundColor: colors.forest, padding: "60px 60px 50px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(253,255,252,0.5)", marginBottom: 16 }}>LegacyCurator · Journal</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(3.5rem, 7vw, 6rem)", fontWeight: 300, color: colors.porcelain, lineHeight: 0.9 }}>
              Stories &<br /><em style={{ fontStyle: "italic", color: "#a8d4cc" }}>Perspectives.</em>
            </h1>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(253,255,252,0.55)", maxWidth: 340 }}>
              Thoughts on curation, craft, and the creative lives worth documenting.
            </p>
          </div>
        </div>
      </div>

      <div style={{ height: 1, background: `linear-gradient(90deg,${colors.forest} 0%,${colors.copper} 40%,transparent 100%)` }} />

      {/* CATEGORY FILTER */}
     
      

      {/* ERROR */}
      {error && (
        <div style={{ maxWidth: 1200, margin: "24px auto 0", padding: "0 60px" }}>
          <div style={{ background: "#fff0f0", border: "1px solid #f5c2c2", borderRadius: 4, padding: "14px 20px", fontSize: "0.84rem", color: "#c0392b", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>⚠ {error}</span>
            <button onClick={() => fetchBlogs(activeCategory)} style={{ background: "none", border: "none", color: "#c0392b", textDecoration: "underline", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Retry</button>
          </div>
        </div>
      )}

      {/* FEATURED */}
      <div className="fade-up" style={{ maxWidth: 1200, margin: "44px auto 0", padding: "0 60px" }}>
        {loading && activeCategory === "All" ? (
          <div style={{ height: 380, borderRadius: 6, background: "linear-gradient(90deg,#e8e8e8 25%,#f4f4f4 50%,#e8e8e8 75%)", backgroundSize: "200% 100%", animation: "shimmer 1.4s infinite" }} />
        ) : featured && activeCategory === "All" ? (
          <>
            <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "#bbb", marginBottom: 16 }}>✦ Featured Story</div>
            <FeaturedCard post={featured} onClick={() => navigate(`/blog/${featured.slug}`)} />
          </>
        ) : null}
      </div>

      {/* GRID */}
      <section style={{ maxWidth: 1200, margin: "52px auto 0", padding: "0 60px 80px" }}>
        {loading ? (
          <>
            <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "#ddd", marginBottom: 28 }}>Loading articles…</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
              {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
            </div>
          </>
        ) : gridBlogs.length > 0 ? (
          <>
            <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "#bbb", marginBottom: 28 }}>
              {activeCategory === "All" ? "Latest Articles" : activeCategory}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
              {gridBlogs.map((post, i) => (
                <div key={post._id} className="fade-up" style={{ animationDelay: `${0.05 + i * 0.08}s` }}>
                  <BlogCard post={post} onClick={() => navigate(`/blog/${post.slug}`)} />
                </div>
              ))}
            </div>
          </>
        ) : !error ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#bbb" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3rem", marginBottom: 12, opacity: 0.3 }}>✦</div>
            <p style={{ fontSize: "0.85rem", letterSpacing: "0.05em" }}>No articles in this category yet.</p>
          </div>
        ) : null}
      </section>
    </div>
  );
}