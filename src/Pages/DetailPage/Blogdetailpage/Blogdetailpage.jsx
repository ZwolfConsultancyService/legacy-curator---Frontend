// src/Pages/DetailPage/Blogdetailpage/Blogdetailpage.jsx

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export default function BlogDetailPage() {
  const { slug }    = useParams();
  const navigate    = useNavigate();

  // ── State ──────────────────────────────────────────────────
  const [post, setPost]                   = useState(null);
  const [relatedPosts, setRelatedPosts]   = useState([]);
  const [loading, setLoading]             = useState(true);
  const [error, setError]                 = useState("");
  const [scrollPct, setScrollPct]         = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const articleRef = useRef(null);

  // ── Fetch blog by slug ─────────────────────────────────────
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError("");
      setPost(null);
      setRelatedPosts([]);
      window.scrollTo({ top: 0 });

      try {
        const res  = await fetch(`${API_BASE}/blogs/slug/${slug}`);
        const data = await res.json();

        if (!data.success) {
          setError(data.message || "Blog not found.");
          setLoading(false);
          return;
        }

        const fetchedPost = data.data;
        setPost(fetchedPost);

        const relRes  = await fetch(`${API_BASE}/blogs?category=${encodeURIComponent(fetchedPost.category)}`);
        const relData = await relRes.json();

        let related = [];
        if (relData.success) {
          related = relData.data.filter((b) => b._id !== fetchedPost._id).slice(0, 3);
        }

        if (related.length < 3) {
          const allRes  = await fetch(`${API_BASE}/blogs`);
          const allData = await allRes.json();
          if (allData.success) {
            const fill = allData.data
              .filter((b) => b._id !== fetchedPost._id && !related.find((r) => r._id === b._id))
              .slice(0, 3 - related.length);
            related = [...related, ...fill];
          }
        }

        setRelatedPosts(related);
      } catch (e) {
        console.error("BlogDetailPage fetch error:", e);
        setError("Could not connect to server.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // ── Scroll progress ────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const pct  = Math.min(100, Math.max(0, ((winH - top) / height) * 100));
      setScrollPct(Math.round(pct));
      const h2s = el.querySelectorAll("h2[data-section]");
      let current = 0;
      h2s.forEach((h, i) => {
        if (h.getBoundingClientRect().top < winH * 0.4) current = i + 1;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [post]);

  // ── Loading skeleton ───────────────────────────────────────
  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <style>{`
          @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
          .sk { background: linear-gradient(90deg,#e8e8e8 25%,#f4f4f4 50%,#e8e8e8 75%); background-size:200% 100%; animation: shimmer 1.4s infinite; border-radius: 4px; }
        `}</style>
        <div className="sk" style={{ height: 340 }} />
        <div className="max-w-3xl mx-auto px-14 py-12 flex flex-col gap-4">
          {[100, 82, 95, 68, 88, 74, 60, 90, 76].map((w, i) => (
            <div key={i} className="sk" style={{ height: 14, width: `${w}%` }} />
          ))}
        </div>
      </div>
    );
  }

  // ── 404 / Error ────────────────────────────────────────────
  if (error || !post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <div className="font-light" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "5rem", color: "rgba(54,97,90,0.1)" }}>404</div>
        <p className="text-sm text-gray-400">{error || "This article doesn't exist."}</p>
        <button
          onClick={() => navigate("/blog")}
          className="mt-2 px-5 py-2 rounded-full border border-forest/30 text-forest text-sm bg-transparent hover:bg-forest hover:text-white transition-all"
        >
          Back to Journal
        </button>
      </div>
    );
  }

  // ── Content split ──────────────────────────────────────────
  const content     = post.content || [];
  const firstH2     = content.findIndex((b) => b.type === "h2");
  const introBlocks = firstH2 > 0 ? content.slice(0, firstH2) : [];
  const bodyBlocks  = firstH2 >= 0 ? content.slice(firstH2) : content;

  return (
    <div className="bg-white">
      <style>{`
        @keyframes bdp-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bdp-fu { animation: bdp-up 0.55s cubic-bezier(0.22,1,0.36,1) both; }

        .bdp-progress {
          position: fixed; top: 0; left: 0; height: 2px; z-index: 9999;
          background: linear-gradient(90deg, #36615A, #A7703D);
          transition: width 0.15s linear;
        }
        .bdp-back {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
          border-radius: 100px; padding: 6px 16px; font-size: 0.72rem;
          color: rgba(255,255,255,0.7); cursor: pointer; transition: all 0.2s;
          letter-spacing: 0.04em; font-family: 'Montserrat', sans-serif;
        }
        .bdp-back:hover { background: rgba(255,255,255,0.2); color: #fff; }
        .bdp-lead {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.32rem; line-height: 1.78; color: #444; font-weight: 300;
        }
        .bdp-p {
          font-size: 0.975rem; line-height: 1.95; color: #555;
          margin-bottom: 1.5rem; font-weight: 300; letter-spacing: 0.01em;
          font-family: 'Montserrat', sans-serif;
        }
        .bdp-h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.75rem; font-weight: 400; color: #111110;
          margin: 2.8rem 0 1rem; line-height: 1.15;
          letter-spacing: -0.01em; display: flex; align-items: center; gap: 10px;
        }
        .bdp-h2-num {
          display: inline-flex; align-items: center; justify-content: center;
          width: 26px; height: 26px; border-radius: 50%;
          background: rgba(54,97,90,0.08); color: #36615A;
          font-family: 'Montserrat', sans-serif; font-size: 0.68rem;
          font-weight: 500; flex-shrink: 0;
        }
        .bdp-bq {
          margin: 2.2rem 0; padding: 1.2rem 0 1.2rem 1.6rem;
          border-left: 2px solid #36615A; position: relative;
        }
        .bdp-bq::before {
          content: '"'; position: absolute; left: -0.5rem; top: -0.6rem;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 3.5rem; color: #36615A; line-height: 1; opacity: 0.2;
        }
        .bdp-bq p {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.35rem; font-style: italic; color: #333;
          font-weight: 300; line-height: 1.65; margin: 0;
        }
        .bdp-toc-btn {
          display: flex; align-items: flex-start; gap: 8px; padding: 6px 0;
          font-size: 0.73rem; line-height: 1.4; color: #bbb;
          background: none; border: none; text-align: left;
          font-family: 'Montserrat', sans-serif; width: 100%;
          cursor: pointer; transition: color 0.2s;
        }
        .bdp-toc-btn:hover { color: #36615A; }
        .bdp-toc-btn.active { color: #36615A; font-weight: 500; }
        .bdp-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: currentColor; flex-shrink: 0; margin-top: 5px;
          transition: transform 0.2s;
        }
        .bdp-toc-btn.active .bdp-dot { transform: scale(1.7); }
        .bdp-tag {
          padding: 4px 13px; border-radius: 100px; font-size: 0.63rem;
          letter-spacing: 0.13em; text-transform: uppercase;
          background: rgba(54,97,90,0.07); color: #36615A;
          border: 1px solid rgba(54,97,90,0.15); cursor: pointer; transition: all 0.2s;
          font-family: 'Montserrat', sans-serif;
        }
        .bdp-tag:hover { background: #36615A; color: #fff; }
        .bdp-rel-card {
          background: #F3F0E1; border-radius: 8px; overflow: hidden;
          cursor: pointer; box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: all 0.32s cubic-bezier(0.25,0.8,0.25,1);
        }
        .bdp-rel-card:hover { transform: translateY(-5px); box-shadow: 0 18px 44px rgba(54,97,90,0.13); }
        .bdp-deco {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300; font-style: italic;
          color: rgba(54,97,90,0.07); user-select: none; pointer-events: none; line-height: 1;
        }

        @media (max-width: 900px) {
          .bdp-body-grid { grid-template-columns: 1fr !important; }
          .bdp-sidebar { display: none !important; }
          .bdp-related-grid { grid-template-columns: 1fr !important; }
          .bdp-intro-grid { grid-template-columns: 1fr !important; }
          .bdp-hero-inner { padding: 28px 20px 36px !important; }
          .bdp-body-wrap { padding: 32px 20px 56px !important; }
          .bdp-related-wrap { padding: 36px 20px 48px !important; }
          .bdp-intro-wrap { padding: 36px 20px !important; }
        }
      `}</style>

      {/* Progress bar */}
      <div className="bdp-progress" style={{ width: `${scrollPct}%` }} />

      {/* ══ HERO ══ */}
      <header style={{ background: post.accentBg || "linear-gradient(135deg,#36615A,#2a4a44)" }} className="relative overflow-hidden">
        <div className="bdp-deco absolute pointer-events-none select-none"
          style={{ fontSize: "28rem", right: -60, top: -80, color: "rgba(255,255,255,0.03)" }}>LC</div>
        <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to top,rgba(0,0,0,0.15),transparent)" }} />

        <div className="bdp-hero-inner relative max-w-3xl mx-auto px-14 py-10 pb-12">
          {/* Back + tag row */}
          <div className="bdp-fu flex items-center justify-between flex-wrap gap-3 mb-8">
            <button className="bdp-back" onClick={() => navigate("/blog")}>← Journal</button>
            <div className="flex items-center gap-2">
              {post.tag && (
                <span className="text-[0.57rem] uppercase tracking-[0.18em] text-white/50 border border-white/20 px-3 py-1 rounded-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {post.tag}
                </span>
              )}
              <span className="text-[0.57rem] uppercase tracking-[0.18em] text-white/40"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>{post.category}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="bdp-fu font-light leading-[1.08] mb-5"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem,5vw,3.5rem)", letterSpacing: "-0.01em", color: "#FDFFFC", animationDelay: "0.06s" }}>
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="bdp-fu leading-relaxed max-w-lg"
            style={{ fontSize: "0.95rem", color: "rgba(253,255,252,0.6)", animationDelay: "0.12s", fontFamily: "'Montserrat', sans-serif" }}>
            {post.excerpt}
          </p>

          {/* Author meta */}
          <div className="bdp-fu flex items-center flex-wrap gap-5 mt-8 pt-6 border-t border-white/10"
            style={{ animationDelay: "0.18s" }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border-2 border-white/25 flex items-center justify-center text-sm font-semibold flex-shrink-0"
                style={{ background: post.avatarBg || "#36615A", color: "#FDFFFC", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                {post.authorInitial || post.author?.[0] || "A"}
              </div>
              <div>
                <div className="text-[0.8rem] font-medium" style={{ color: "#FDFFFC", fontFamily: "'Montserrat', sans-serif" }}>{post.author}</div>
                <div className="text-[0.64rem] mt-0.5" style={{ color: "rgba(255,255,255,0.38)", fontFamily: "'Montserrat', sans-serif" }}>{post.authorRole}</div>
              </div>
            </div>
            <div className="w-px h-6" style={{ background: "rgba(255,255,255,0.12)" }} />
            <div className="text-[0.67rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.38)", fontFamily: "'Montserrat', sans-serif" }}>
              <div>{post.date}</div>
              <div>{post.readTime}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Divider */}
      <div className="h-px" style={{ background: "linear-gradient(90deg,#36615A 0%,#A7703D 30%,transparent 80%)" }} />

      {/* ══ INTRO BAND ══ */}
      {introBlocks.length > 0 && (
        <div className="bg-eggshell border-b border-forest/8">
          <div className="bdp-intro-wrap bdp-intro-grid max-w-6xl mx-auto px-14 py-12"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}>
            <div>
              <div className="text-[0.57rem] uppercase tracking-[0.2em] text-copper mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}>✦ The Story</div>
              {introBlocks.map((block, i) =>
                block.type === "p" ? (
                  <p key={i} className="bdp-lead" style={{ marginBottom: i < introBlocks.length - 1 ? "1.2rem" : 0 }}>
                    {block.text}
                  </p>
                ) : null
              )}
            </div>
            <div className="rounded-xl overflow-hidden relative flex items-center justify-center"
              style={{ background: post.accentBg || "linear-gradient(135deg,#36615A,#2a4a44)", minHeight: 230 }}>
              <div className="bdp-deco" style={{ fontSize: "9rem" }}>
                {post._id ? post._id.slice(-2).toUpperCase() : "LC"}
              </div>
              <div className="absolute inset-x-0 bottom-0 px-5 py-3"
                style={{ background: "linear-gradient(to top,rgba(0,0,0,0.38),transparent)" }}>
                <div className="text-[0.54rem] uppercase tracking-[0.15em] text-white/45"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  LegacyCurator · {post.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══ MAIN BODY ══ */}
      <div className="bdp-body-wrap max-w-6xl mx-auto px-14 py-12 pb-16">
        <div className="bdp-body-grid" ref={articleRef}
          style={{ display: "grid", gridTemplateColumns: "1fr 248px", gap: "4rem", alignItems: "start" }}>

          {/* Article */}
          <article>
            {bodyBlocks.map((block, i) => {
              if (block.type === "h2") {
                const num = bodyBlocks.slice(0, i).filter((b) => b.type === "h2").length + 1;
                return (
                  <h2 key={i} className="bdp-h2" data-section={num}>
                    <span className="bdp-h2-num">{num}</span>
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "p")          return <p key={i} className="bdp-p">{block.text}</p>;
              if (block.type === "blockquote") return <div key={i} className="bdp-bq"><p>{block.text}</p></div>;
              return null;
            })}

            {/* Tags */}
            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-forest/8">
                {post.tags.map((tag) => (
                  <span key={tag} className="bdp-tag">{tag}</span>
                ))}
              </div>
            )}

            {/* Author bio */}
            <div className="mt-8 bg-eggshell rounded-xl p-7 border border-forest/8"
              style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1.2rem", alignItems: "start" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg flex-shrink-0"
                style={{ background: post.avatarBg || "#36615A", color: "#FDFFFC", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                {post.authorInitial || post.author?.[0] || "A"}
              </div>
              <div>
                <div className="text-[0.58rem] uppercase tracking-[0.16em] text-copper mb-1"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>Written by</div>
                <div className="font-normal text-gray-900 text-lg mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{post.author}</div>
                <div className="text-[0.66rem] text-forest/50 italic mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>{post.authorRole}</div>
                <p className="text-[0.79rem] leading-[1.72] text-gray-500 m-0"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>{post.authorBio}</p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="bdp-sidebar">
            <div className="sticky flex flex-col gap-4" style={{ top: "24px" }}>

              {/* TOC */}
              {post.toc?.length > 0 && (
                <div className="bg-porcelain rounded-xl border border-forest/10 px-5 py-5">
                  <div className="text-[0.56rem] uppercase tracking-[0.2em] text-gray-300 mb-4"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>In this article</div>
                  <div className="flex flex-col">
                    {post.toc.map((item, i) => (
                      <button key={i} className={`bdp-toc-btn ${activeSection === i ? "active" : ""}`}>
                        <span className="bdp-dot" /><span>{item}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Progress */}
              <div className="bg-porcelain rounded-xl border border-forest/10 px-5 py-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[0.62rem] text-gray-300 tracking-wide"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>Progress</span>
                  <span className="text-[0.72rem] font-medium text-forest"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>{scrollPct}%</span>
                </div>
                <div className="h-[3px] rounded-full overflow-hidden bg-forest/10">
                  <div className="h-full rounded-full transition-all duration-150"
                    style={{ width: `${scrollPct}%`, background: "linear-gradient(90deg,#36615A,#A7703D)" }} />
                </div>
                <div className="mt-2 text-[0.61rem] text-gray-300"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>{post.readTime}</div>
              </div>

              {/* Category */}
              <div className="rounded-xl border border-forest/10 px-5 py-5 relative overflow-hidden"
                style={{ background: post.accentBg || "linear-gradient(135deg,#36615A,#2a4a44)" }}>
                <div className="bdp-deco absolute" style={{ fontSize: "4rem", right: -4, bottom: -10, color: "rgba(255,255,255,0.07)" }}>LC</div>
                <div className="text-[0.55rem] uppercase tracking-[0.18em] mb-2"
                  style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Montserrat', sans-serif" }}>Filed under</div>
                <div className="font-light text-xl leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "rgba(255,255,255,0.9)" }}>{post.category}</div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ══ RELATED ══ */}
      {relatedPosts.length > 0 && (
        <section className="bg-white border-t border-forest/10">
          <div className="bdp-related-wrap max-w-6xl mx-auto px-14 py-12">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
              <div>
                <div className="text-[0.57rem] uppercase tracking-[0.2em] text-copper mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}>✦ Continue reading</div>
                <h2 className="font-light text-gray-900"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem" }}>
                  More from the Journal
                </h2>
              </div>
              <button
                onClick={() => navigate("/blog")}
                className="px-5 py-2 rounded-full border border-forest/25 text-forest text-sm bg-transparent hover:bg-forest hover:text-white transition-all"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                View all →
              </button>
            </div>

            <div className="bdp-related-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.2rem" }}>
              {relatedPosts.map((p) => (
                <div key={p._id} className="bdp-rel-card"
                  onClick={() => { navigate(`/blog/${p.slug}`); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <div className="h-32 relative flex items-center justify-center overflow-hidden"
                    style={{ background: p.accentBg || "linear-gradient(135deg,#36615A,#2a4a44)" }}>
                    <div className="bdp-deco" style={{ fontSize: "5rem" }}>
                      {p._id ? p._id.slice(-2).toUpperCase() : "LC"}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 px-4 py-3"
                      style={{ background: "linear-gradient(to top,rgba(0,0,0,0.3),transparent)" }}>
                      <span className="text-[0.53rem] uppercase tracking-[0.13em] border border-white/18 px-2 py-0.5 rounded-sm"
                        style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Montserrat', sans-serif" }}>
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 pb-4">
                    <h3 className="font-normal text-gray-900 leading-snug mb-3"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.07rem" }}>
                      {p.title}
                    </h3>
                    <p className="text-[0.74rem] leading-relaxed text-gray-400 mb-4 line-clamp-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}>{p.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-forest/7">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[0.57rem] text-white font-semibold"
                          style={{ background: p.avatarBg || "#36615A", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                          {p.authorInitial || p.author?.[0] || "A"}
                        </div>
                        <span className="text-[0.67rem] text-gray-400"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}>{p.author}</span>
                      </div>
                      <span className="text-[0.62rem] text-gray-300"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}>{p.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}