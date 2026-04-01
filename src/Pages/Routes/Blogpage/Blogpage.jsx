// src/Pages/Routes/Blogpage/Blogpage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const colors = {
  forest: "#36615A",
  saddle: "#8B542B",
  copper: "#A7703D",
  eggshell: "#F5F0EA",
  porcelain: "#FDFFFC",
};

const categories = ["All", "Curation", "Photography", "Design", "Architecture", "Stories", "Behind the Work"];

// ─── DATA ────────────────────────────────────────────────────────────────────
// API READY: Jab API lagani ho, bas yeh "blogs" array ko
//   fetch("/api/blogs").then(r => r.json()) se replace kar dena.
//   Har ek object ka shape same rehna chahiye.
export const blogs = [
  {
    id: 1,
    slug: "art-of-preserving-creative-legacy",   // <-- SEO slug
    featured: true,
    category: "Curation",
    title: "The Art of Preserving a Creative Legacy in the Digital Age",
    excerpt:
      "What does it mean to truly preserve a body of work? We explore how contemporary curators are bridging the gap between physical archives and digital permanence — and why it matters more than ever.",
    author: "Priya Mehta",
    authorRole: "Senior Curator · LegacyCurator",
    authorBio:
      "Senior Curator at LegacyCurator. Former Head of Digital Collections at the National Portrait Gallery. Writes about the intersection of art, memory, and technology.",
    authorInitial: "P",
    avatarBg: "#36615A",
    date: "March 28, 2026",
    readTime: "8 min read",
    tag: "Editor's Pick",
    accentBg: `linear-gradient(135deg, #36615A 0%, #2a4a44 100%)`,
    tags: ["Curation", "Digital Preservation", "Creative Legacy", "Archives"],
    content: [
      { type: "p", text: "In an era where hard drives fail, platforms disappear, and formats become obsolete, the question of how we preserve a creative legacy has never been more urgent. Every year, thousands of photographers, designers, illustrators, and architects leave behind bodies of work that are simultaneously everywhere and nowhere — scattered across devices, social feeds, and forgotten cloud accounts." },
      { type: "p", text: "The curators working at the intersection of preservation and technology are grappling with a paradox: digital formats offer infinite copies but no permanence. A Daguerreotype from 1845 is still readable today. Will a 2018 Lightroom catalog be accessible in 2045?" },
      { type: "h2", text: "The Archive as a Living Document" },
      { type: "p", text: "Traditional archivists have long understood that preservation is not merely storage — it is curation. What you choose to save is as significant as how you save it. Martha Langley, who spent two decades at the Victoria & Albert Museum before founding her own independent archive practice, puts it plainly: the first act of preservation is selection." },
      { type: "blockquote", text: "Every archive is also a biography. You cannot separate the work from the decisions made about what survives." },
      { type: "p", text: "The digital turn has made this selection process at once easier and more treacherous. Easier because storage is cheap and duplication is instant. More treacherous because abundance breeds indiscrimination — when everything is kept, nothing is truly curated." },
      { type: "h2", text: "Format, Platform, and the Illusion of Permanence" },
      { type: "p", text: "Contemporary digital preservation relies on a set of fragile assumptions: that file formats will remain readable, that platforms will remain accessible, that the organisations hosting our work will remain solvent. Each of these assumptions has already been violated in living memory." },
      { type: "p", text: "Flash websites from the early 2000s are now inaccessible. MySpace lost twelve years of uploaded music in a server migration. Adobe has discontinued products that were the primary authoring environment for entire careers. The lesson is that format independence — the ability to export, migrate, and convert — is not a luxury feature. It is the foundation of any serious preservation strategy." },
      { type: "h2", text: "What Thoughtful Curation Actually Looks Like" },
      { type: "p", text: "The practitioners we spoke with across this series share certain habits. They maintain redundant physical and digital storage. They document context — not just the work, but the conditions, dates, and thinking behind it. They treat their archive as a living document, regularly audited and updated, rather than a static deposit." },
      { type: "p", text: "Perhaps most importantly, they think about audience. Who is this archive for? A private archive for personal reflection requires different architecture than one intended for eventual public access, licensing, or institutional donation. Clarity of purpose shapes every decision that follows." },
    ],
    toc: ["Introduction", "The archive as a living document", "Format, platform & permanence", "What thoughtful curation looks like"],
  },
  {
    id: 2,
    slug: "shooting-with-intent-anna-marie-visual-archive",
    category: "Photography",
    title: "Shooting with Intent: How Anna Marie Built a 10-Year Visual Archive",
    excerpt: "Anna Marie Photo on discipline, storage, and the emotional weight of cataloguing a decade of work into a single cohesive portfolio.",
    author: "Rohit Das",
    authorRole: "Staff Writer · LegacyCurator",
    authorBio: "Rohit Das is a writer and editor covering creative practices, photography, and visual culture. Based between Mumbai and London.",
    authorInitial: "R",
    avatarBg: "#8B542B",
    date: "March 22, 2026",
    readTime: "5 min read",
    accentBg: `linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)`,
    tags: ["Photography", "Archive", "Visual Culture"],
    content: [
      { type: "p", text: "Anna Marie has been shooting professionally for over a decade. But it wasn't until year seven that she sat down and truly looked at what she had made — not as individual photographs, but as a single sustained body of work." },
      { type: "p", text: "The experience was disorienting. 'I had tens of thousands of images,' she says, 'and I had no idea what they added up to. I didn't know my own work.'" },
      { type: "h2", text: "The Discipline of Looking Back" },
      { type: "p", text: "For many photographers, the forward momentum of shooting — the next project, the next commission, the next deadline — leaves little room for retrospection. The archive accumulates passively rather than growing intentionally." },
      { type: "blockquote", text: "You have to be willing to sit with the work long enough to understand it. Most photographers never do that." },
      { type: "p", text: "Anna Marie's process involved a full month away from new shooting. She dedicated herself entirely to reviewing, organizing, and culling — reducing ten years of work to a curated archive of around three thousand images." },
      { type: "h2", text: "Storage as Practice" },
      { type: "p", text: "The technical infrastructure Anna Marie built over that month has since become the backbone of her practice. Three redundant backup locations — a local drive, a NAS on her home network, and cold storage in the cloud. Every folder organized by year, then project, then selects." },
      { type: "p", text: "But the organizational structure matters as much as the redundancy. 'If you can't find it, it doesn't exist,' she says. 'An archive you can't navigate is just a pile of files.'" },
    ],
    toc: ["Introduction", "The discipline of looking back", "Storage as practice"],
  },
  {
    id: 3,
    slug: "white-space-most-underrated-design-tool",
    category: "Design",
    title: "Why White Space is the Most Underrated Design Tool",
    excerpt: "In a world of maximalism, restraint is radical. A deep dive into how negative space shapes perception and elevates creative work.",
    author: "Sara Lind",
    authorRole: "Design Contributor",
    authorBio: "Sara Lind is a graphic designer and design critic based in Stockholm. She writes regularly on typography, spatial composition, and visual communication.",
    authorInitial: "S",
    avatarBg: "#A7703D",
    date: "March 18, 2026",
    readTime: "4 min read",
    accentBg: `linear-gradient(135deg, #A7703D 0%, #8B542B 100%)`,
    tags: ["Design", "Typography", "Visual Theory"],
    content: [
      { type: "p", text: "Open any design magazine from the 1990s and the pages feel breathless. Content pushes against every edge. Every column is full. White space, if it existed at all, was accidental — the residue of content that didn't quite reach the margin." },
      { type: "p", text: "Something shifted in the 2010s. Perhaps it was the influence of Swiss modernism on tech companies. Perhaps it was the rise of mobile, where content had to breathe to remain legible. Whatever the cause, white space became fashionable — and then, inevitably, it became clichéd." },
      { type: "h2", text: "Negative Space as Active Element" },
      { type: "p", text: "The mistake most designers make is treating white space as the absence of design. In reality, negative space is as active as any element on the page. It creates rhythm. It directs attention. It communicates tone." },
      { type: "blockquote", text: "The space around a word is as meaningful as the word itself. Both are choices." },
      { type: "p", text: "When Jan Tschichold published Die neue Typographie in 1928, he articulated a principle that remains radical nearly a century later: that asymmetric layouts with generous margins communicate differently — more dynamically, more honestly — than centered, symmetrical compositions. The space was doing work." },
      { type: "h2", text: "Restraint as a Creative Act" },
      { type: "p", text: "The discipline of restraint is harder than it sounds. Filling space is easy. Leaving it empty requires confidence in what remains — a belief that what you have chosen to include is sufficient. For many designers, especially early in their careers, that confidence takes years to develop." },
    ],
    toc: ["Introduction", "Negative space as active element", "Restraint as a creative act"],
  },
  {
    id: 4,
    slug: "from-sketch-to-print-round-hill-park",
    category: "Stories",
    title: "From Sketch to Print: The Making of 'Round Hill Park'",
    excerpt: "Joella Clove walks us through her creative process — from field notes to final folio — and the decisions that shaped every page.",
    author: "Joella Clove",
    authorRole: "Artist · Illustrator",
    authorBio: "Joella Clove is an illustrator and printmaker based in rural Vermont. Her work explores botanical observation, local landscape, and the meditative quality of slow looking.",
    authorInitial: "J",
    avatarBg: "#5a7a75",
    date: "March 14, 2026",
    readTime: "6 min read",
    accentBg: `linear-gradient(135deg, #36615A 0%, #2a4a44 100%)`,
    tags: ["Stories", "Illustration", "Process", "Print"],
    content: [
      { type: "p", text: "Round Hill Park began as a sketchbook. Every morning for eight months, I walked the same 2.3-kilometre loop through a patch of second-growth woodland in the hills behind my house. I carried the same notebook. I stopped at the same spots. I tried to see what I had missed the day before." },
      { type: "p", text: "By spring I had filled six notebooks. The question — the problem I hadn't anticipated — was what to do with them." },
      { type: "h2", text: "The Gap Between Observation and Object" },
      { type: "p", text: "Field notes are for the field. They are provisional, unresolved, alive with uncertainty. A folio is a finished thing. The challenge of Round Hill Park was crossing that gap without losing what made the notebooks worth looking at in the first place — the hesitation, the overworked passages, the notes to self." },
      { type: "blockquote", text: "I didn't want a portfolio. I wanted to make a book that felt like being in the woods." },
      { type: "p", text: "The solution was structural. Rather than translating the notebooks into finished illustrations, I worked from them directly — photographing spreads, selecting fragments, combining sketched observations with written notes on facing pages. The book would be a document of process as much as of place." },
      { type: "h2", text: "Decisions at Every Scale" },
      { type: "p", text: "What surprised me most about making Round Hill Park was how consequential every decision turned out to be. Paper weight affects how a page feels in the hand, which affects how a reader slows down or speeds through. Binding style determines whether a book opens flat, which determines whether a double-page spread works as a single composition." },
    ],
    toc: ["Introduction", "The gap between observation and object", "Decisions at every scale"],
  },
  {
    id: 5,
    slug: "infinite-forms-when-structure-becomes-story",
    category: "Architecture",
    title: "Infinite Forms: When Structure Becomes Story",
    excerpt: "Tomas Vega on how architectural photography is not about buildings — it's about the invisible tension between space and light.",
    author: "Tomas Vega",
    authorRole: "Architectural Photographer",
    authorBio: "Tomas Vega is an architectural photographer and essayist based in Mexico City. His work has been exhibited across Latin America and Europe.",
    authorInitial: "T",
    avatarBg: "#3d2b1f",
    date: "March 10, 2026",
    readTime: "7 min read",
    accentBg: `linear-gradient(135deg, #1a1a1a 0%, #333 100%)`,
    tags: ["Architecture", "Photography", "Light", "Space"],
    content: [
      { type: "p", text: "I am not interested in buildings. I am interested in what happens between a building and its light — that charged, unstable relationship that changes by the hour, by the season, by the angle of approach. The building is the occasion. The light is the subject." },
      { type: "p", text: "This is not a popular position among clients, who generally want their buildings to look as designed as possible — clean lines, controlled shadows, a geometry that reads as intended. What they often do not want is the messiness of actual time, the way a building looks at 4pm in November versus 9am in July." },
      { type: "h2", text: "The Photograph as Argument" },
      { type: "p", text: "Every architectural photograph makes an argument about what architecture is for. A photograph that flattens a building into pure geometry argues that architecture is primarily a visual art — that what matters is the relationship of forms in space. A photograph taken from a human perspective, with people moving through it, argues that architecture is primarily an experiential art." },
      { type: "blockquote", text: "The camera position is always a philosophical position. There's no neutral angle." },
      { type: "h2", text: "Structure and Duration" },
      { type: "p", text: "The most interesting architectural photography, to my eye, is work that introduces time into a medium that is inherently static. Not long-exposure blurs or composite images — something subtler. The suggestion that the moment captured is one of many moments, that the building exists in duration rather than as an eternal object." },
      { type: "p", text: "This is, ultimately, what I mean when I say that structure becomes story. A building rendered as pure geometry has no past and no future. A building photographed with attention to the specific quality of a specific light at a specific hour is a building embedded in the world — contingent, alive, subject to change." },
    ],
    toc: ["Introduction", "The photograph as argument", "Structure and duration"],
  },
  {
    id: 6,
    slug: "how-we-curate-legacycurator-editorial-process",
    category: "Behind the Work",
    title: "How We Curate: The LegacyCurator Editorial Process Revealed",
    excerpt: "A rare look inside our review process — what we look for, what we pass on, and why every portfolio tells a story before it's even opened.",
    author: "Priya Mehta",
    authorRole: "Senior Curator · LegacyCurator",
    authorBio: "Senior Curator at LegacyCurator. Former Head of Digital Collections at the National Portrait Gallery. Writes about the intersection of art, memory, and technology.",
    authorInitial: "P",
    avatarBg: "#36615A",
    date: "March 5, 2026",
    readTime: "9 min read",
    accentBg: `linear-gradient(135deg, #f9c784 0%, #e8a838 100%)`,
    tags: ["Behind the Work", "Curation", "Editorial", "Process"],
    content: [
      { type: "p", text: "Every month, we receive several hundred portfolio submissions. We accept, on average, twelve. That ratio — roughly one in thirty — is not a reflection of quality so much as fit. Many of the portfolios we pass on represent genuinely extraordinary work. They simply don't belong here, for reasons that are worth trying to articulate." },
      { type: "p", text: "What follows is an honest account of how we think, what we look for, and why we make the decisions we make. We share it not to demystify the process in a way that helps people game it — a portfolio shaped to pass our filters is exactly the kind of portfolio we don't want — but because we believe transparency about how decisions are made is itself a form of respect." },
      { type: "h2", text: "What We Are Looking For" },
      { type: "p", text: "The simplest formulation is: sustained vision. A portfolio that demonstrates not just skill but a consistent, developed, idiosyncratic way of seeing. Work that could only have been made by the person who made it." },
      { type: "blockquote", text: "We are looking for evidence of a mind at work over time. Not a greatest hits. A development." },
      { type: "p", text: "This rules out work that is technically accomplished but generically so — photographs that look like other photographs, designs that look like other designs. We are not interested in work that demonstrates mastery of a tradition without departing from it." },
      { type: "h2", text: "The First Thirty Seconds" },
      { type: "p", text: "Every portfolio tells a story before you look at a single piece of work. The sequencing, the presentation, the way a maker has chosen to introduce themselves — all of this is information. A portfolio that leads with its strongest work tells a different story than one that buries it three pages in." },
      { type: "p", text: "We look at how work is sequenced before we look at what it contains. A strong opening that leads to work that doesn't sustain it is a problem. A modest opening that earns increasing attention is often a sign of a maker who trusts their work enough not to oversell it." },
    ],
    toc: ["Introduction", "What we are looking for", "The first thirty seconds"],
  },
];

// ─── HELPER: Title se slug banana (API se data aane par bhi use kar sakte ho) ──
export function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

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
  const navigate = useNavigate();

  const featured = blogs.find((b) => b.featured);
  const rest = blogs.filter((b) => !b.featured);
  const filteredRest = activeCategory === "All" ? rest : rest.filter((b) => b.category === activeCategory);

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.55s ease both; }
        .cat-btn:hover { border-color: rgba(54,97,90,0.5) !important; color: #444 !important; }
      `}</style>

      {/* HERO BAND */}
      <div style={{ backgroundColor: colors.forest, padding: "60px 60px 50px" }}>
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

      <div style={{ height: 1, background: `linear-gradient(90deg, ${colors.forest} 0%, ${colors.copper} 40%, transparent 100%)` }} />

      {/* CATEGORY FILTER */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 60px 0", display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        {categories.map((c) => (
          <button
            key={c}
            className="cat-btn"
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

      {/* FEATURED */}
      {featured && activeCategory === "All" && (
        <div className="fade-up" style={{ maxWidth: 1200, margin: "44px auto 0", padding: "0 60px" }}>
          <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "#bbb", marginBottom: 16 }}>✦ Featured Story</div>
          {/* slug use ho raha hai navigate mein, id nahi */}
          <FeaturedCard post={featured} onClick={() => navigate(`/blog/${featured.slug}`)} />
        </div>
      )}

      {/* GRID */}
      <section style={{ maxWidth: 1200, margin: "52px auto 0", padding: "0 60px 80px" }}>
        {filteredRest.length > 0 && (
          <>
            <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "#bbb", marginBottom: 28 }}>
              {activeCategory === "All" ? "Latest Articles" : activeCategory}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
              {filteredRest.map((post, i) => (
                <div key={post.id} className="fade-up" style={{ animationDelay: `${0.05 + i * 0.08}s` }}>
                  {/* slug use ho raha hai navigate mein */}
                  <BlogCard post={post} onClick={() => navigate(`/blog/${post.slug}`)} />
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
    </div>
  );
}