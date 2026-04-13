import React, { useState, useEffect, useRef } from 'react';

// ── PASTE YOUR FOUNDER PHOTO URL HERE ──────────────────────────────
const FOUNDER_IMAGE = null; // e.g. 'https://your-site.com/photo.jpg'
// ───────────────────────────────────────────────────────────────────

const poemLines = [
  "I spent years in clinics and corridors,",
  "where time moved in appointments and quiet pauses.",
  "As a medical practitioner, I was taught to observe,",
  "to listen carefully, to understand what wasn't always said.",
  "And in those moments, I noticed something beyond illness —",
  "people didn't just carry symptoms,",
  "they carried stories.",
];

const storyParas = [
  "Stories of beginnings and setbacks, of families, dreams, sacrifices — pieces of life that never made it into reports, yet mattered the most.",
  "Somewhere between consultations and conversations, my role began to shift. I was no longer just listening to treat — I was listening to remember.",
  "That's when the path changed. From healing with medicine to preserving with meaning. From writing prescriptions to writing legacies.",
  "Today, through Fior Legacy Curator, I work with individuals, families, and founders to shape their journeys into something lasting — books that can be held, shared, and passed on.",
  "Because while health sustains life, it is stories that give it depth — and ensure it is never forgotten.",
];

// const stats = [
//   { num: '500+', label: 'Legacies Preserved' },
//   { num: '12+', label: 'Years in Practice' },
//   { num: '18', label: 'Languages' },
//   { num: '3', label: 'Continents' },
// ];

export default function FounderPage() {
  const [visible, setVisible] = useState(new Set());
  const refs = useRef({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setVisible(p => new Set([...p, e.target.dataset.vi]));
      }),
      { threshold: 0.1 }
    );
    Object.values(refs.current).forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const r = (k) => (el) => { refs.current[k] = el; if (el) el.dataset.vi = k; };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

       *.fp *{box-sizing:border-box;margin:0;padding:0}

        :root {
          --forest: #2d5249;
          --forest-light: #36615A;
          --copper: #A7703D;
          --saddle: #8B542B;
          --egg: #F3F0E1;
          --cream: #F7F4EC;
          --ink: #1a1816;
          --muted: #4a4540;
          --faint: #8a8480;
          --rule: #d8d0b8;
          --page: #FDFFFC;
        }

        .fp-root {
          background: var(--page);
          font-family: 'DM Sans', sans-serif;
          color: var(--ink);
          overflow-x: hidden;
        }

        /* ── HERO ───────────────────────────────────────────── */
        .fp-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
        }

        .fp-hero-img {
          position: relative;
          background: #1a1816;
          overflow: hidden;
        }

        .fp-hero-img img,
        .fp-hero-img-placeholder {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          filter: grayscale(20%) contrast(1.05);
        }

        .fp-hero-img-placeholder {
          background: linear-gradient(160deg, #243f3b 0%, #1a1816 60%, #2d1f0e 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fp-initials {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(120px, 18vw, 200px);
          font-weight: 300;
          color: rgba(243, 240, 225, 0.12);
          letter-spacing: 0.06em;
          user-select: none;
          line-height: 1;
        }

        .fp-hero-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, transparent 60%, rgba(253,255,252,0.08) 100%);
          pointer-events: none;
        }

        .fp-hero-tag {
          position: absolute;
          top: 36px;
          left: 36px;
          background: var(--copper);
          color: var(--egg);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding: 8px 18px;
        }

        .fp-hero-right {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 72px 64px;
          background: var(--ink);
        }

        .fp-overline {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--copper);
          margin-bottom: 24px;
        }
        .fp-overline::before {
          content: '';
          width: 32px;
          height: 1px;
          background: var(--copper);
          flex-shrink: 0;
        }

        .fp-hero-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 7vw, 96px);
          font-weight: 300;
          line-height: 0.88;
          letter-spacing: -0.04em;
          color: var(--egg);
          margin-bottom: 32px;
        }
        .fp-hero-name em {
          font-style: italic;
          color: #c4956a;
        }

        .fp-hero-role {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--faint);
          margin-bottom: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(216,208,184,0.2);
        }

        .fp-hero-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(20px, 2.2vw, 28px);
          font-style: italic;
          font-weight: 300;
          color: #c4956a;
          line-height: 1.5;
          margin-bottom: 36px;
        }

        .fp-hero-blurb {
          font-size: 14px;
          font-weight: 300;
          color: rgba(243,240,225,0.55);
          line-height: 1.9;
        }

        /* ── STATS BAR ──────────────────────────────────────── */
        .fp-stats {
          background: var(--forest);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .fp-stat {
          padding: 36px 32px;
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .fp-stat:last-child { border-right: none; }

        .fp-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 300;
          color: var(--egg);
          line-height: 1;
          margin-bottom: 8px;
        }
        .fp-stat-label {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(243,240,225,0.5);
        }

        /* ── POEM SECTION ───────────────────────────────────── */
        .fp-poem-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 64px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s, transform 0.9s;
        }
        .fp-poem-section.vis { opacity: 1; transform: none; }

        .fp-section-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--copper);
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
        }
        .fp-section-label::before {
          content: '';
          width: 32px;
          height: 1px;
          background: var(--copper);
          flex-shrink: 0;
        }

        .fp-poem {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 300;
          font-style: italic;
          line-height: 1.65;
          color: var(--forest);
        }
        .fp-poem span {
          display: block;
        }
        .fp-poem span.indent {
          padding-left: 2em;
          color: var(--saddle);
        }

        .fp-poem-right-head {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4.5vw, 60px);
          font-weight: 300;
          line-height: 0.92;
          letter-spacing: -0.035em;
          color: var(--ink);
          margin-bottom: 28px;
        }
        .fp-poem-right-head em {
          font-style: italic;
          color: var(--forest);
        }

        .fp-poem-right-body {
          font-size: 16px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.9;
        }

        /* ── STORY SECTION ──────────────────────────────────── */
        .fp-story {
          background: var(--cream);
          border-top: 1px solid var(--rule);
          border-bottom: 1px solid var(--rule);
        }

        .fp-story-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 64px;
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 80px;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s, transform 0.9s;
        }
        .fp-story-inner.vis { opacity: 1; transform: none; }

        .fp-story-left {
          position: sticky;
          top: 60px;
          align-self: start;
        }

        .fp-story-big-initial {
          font-family: 'Cormorant Garamond', serif;
          font-size: 200px;
          font-weight: 300;
          line-height: 0.8;
          color: rgba(45,82,73,0.1);
          user-select: none;
          margin-bottom: -24px;
        }

        .fp-story-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 3.5vw, 48px);
          font-weight: 300;
          line-height: 1.05;
          color: var(--forest);
          margin-bottom: 20px;
        }
        .fp-story-heading em { font-style: italic; color: var(--saddle); }

        .fp-story-sub {
          font-size: 13px;
          font-weight: 300;
          color: var(--faint);
          line-height: 1.8;
        }

        .fp-story-paras p {
          font-size: 17px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.95;
          margin-bottom: 24px;
        }
        .fp-story-paras p:last-child { margin-bottom: 0; }

        .fp-story-pullquote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-style: italic;
          color: var(--forest);
          line-height: 1.55;
          padding: 28px 0 28px 28px;
          border-left: 2px solid var(--copper);
          margin: 36px 0;
          border-radius: 0;
        }

        /* ── CLOSING ────────────────────────────────────────── */
        .fp-closing {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 64px;
          display: grid;
          grid-template-columns: 1fr 480px;
          gap: 80px;
          align-items: center;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s, transform 0.9s;
        }
        .fp-closing.vis { opacity: 1; transform: none; }

        .fp-closing-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--ink);
        }
        .fp-closing-text em { font-style: italic; color: var(--forest); }

        .fp-closing-right {}

        .fp-closing-body {
          font-size: 15px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.9;
          margin-bottom: 32px;
        }

        .fp-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--egg);
          background: var(--forest);
          padding: 14px 28px;
          text-decoration: none;
          transition: background 0.2s;
          border: none;
          cursor: pointer;
        }
        .fp-cta:hover { background: var(--saddle); }

        /* ── FOOTER STRIP ───────────────────────────────────── */
        .fp-footer-strip {
          background: var(--ink);
          border-top: 1px solid rgba(216,208,184,0.15);
        }
        .fp-footer-strip-in {
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .fp-footer-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 300;
          color: rgba(243,240,225,0.7);
          letter-spacing: 0.04em;
        }
        .fp-footer-label {
          font-size: 11px;
          color: rgba(243,240,225,0.3);
          letter-spacing: 0.08em;
        }

        /* ── RESPONSIVE ─────────────────────────────────────── */
        @media (max-width: 900px) {
          .fp-hero { grid-template-columns: 1fr; min-height: auto; }
          .fp-hero-img { min-height: 60vw; }
          .fp-hero-right { padding: 48px 32px; }
          .fp-stats { grid-template-columns: repeat(2, 1fr); }
          .fp-stat { border-bottom: 1px solid rgba(255,255,255,0.1); }
          .fp-poem-section { grid-template-columns: 1fr; gap: 48px; padding: 64px 32px; }
          .fp-story-inner { grid-template-columns: 1fr; gap: 40px; padding: 64px 32px; }
          .fp-story-left { position: static; }
          .fp-closing { grid-template-columns: 1fr; gap: 40px; padding: 64px 32px; }
          .fp-footer-strip-in { flex-direction: column; align-items: flex-start; padding: 28px 32px; gap: 12px; }
        }
        @media (max-width: 600px) {
          .fp-hero-right { padding: 36px 24px; }
          .fp-stats { grid-template-columns: repeat(2, 1fr); }
          .fp-poem-section, .fp-story-inner, .fp-closing { padding: 48px 24px; }
        }
      `}</style>

      <div className="fp-root">

        {/* ── HERO ── */}
        <section className="fp-hero">
          <div className="fp-hero-img">
            {FOUNDER_IMAGE
              ? <img src={FOUNDER_IMAGE} alt="Founder" />
              : <div className="fp-hero-img-placeholder">
                  <span className="fp-initials">FL</span>
                </div>
            }
            <div className="fp-hero-img-overlay" />
            <div className="fp-hero-tag">Founder &amp; Legacy Curator</div>
          </div>

          <div className="fp-hero-right">
            <p className="fp-overline">Fior Legacy Curator</p>
            <h1 className="fp-hero-name">
              From<br />
              Medicine<br />
              to <em>Memory.</em>
            </h1>
            <p className="fp-hero-role">Medical Practitioner · Author · Legacy Curator</p>
            <p className="fp-hero-tagline">
              "Books are the only technology that has<br />
              never needed an upgrade."
            </p>
            <p className="fp-hero-blurb">
              A practitioner who listened differently — and built a company
              around what she heard. Fior Legacy Curator exists because
              every life deserves a book worthy of it.
            </p>
          </div>
        </section>

        {/* ── STATS BAR ── */}
       

        {/* ── POEM SECTION ── */}
        <section
          className={`fp-poem-section${visible.has('poem') ? ' vis' : ''}`}
          ref={r('poem')}
        >
          <div>
            <p className="fp-section-label">In her words</p>
            <div className="fp-poem">
              {poemLines.map((line, i) => (
                <span key={i} className={i >= 5 ? 'indent' : ''}>{line}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="fp-poem-right-head">
              People don't just<br />
              carry symptoms —<br />
              they carry <em>stories.</em>
            </h2>
            <p className="fp-poem-right-body">
              Twelve years as a medical practitioner taught her to see beyond
              the clinical. In the pauses between consultations, she began
              collecting something medicine had no chart for — the full arc
              of a human life. That realisation became Fior Legacy Curator.
            </p>
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 64px' }}>
          <div style={{ height: 1, background: 'var(--rule)' }} />
        </div>

        {/* ── STORY SECTION ── */}
        <section className="fp-story">
          <div
            className={`fp-story-inner${visible.has('story') ? ' vis' : ''}`}
            ref={r('story')}
          >
            <div className="fp-story-left">
              <div className="fp-story-big-initial">F</div>
              <h2 className="fp-story-heading">
                The path<br />
                that <em>changed.</em>
              </h2>
              <p className="fp-story-sub">
                From healing with medicine to preserving with meaning —
                one founder's journey across two callings.
              </p>
            </div>

            <div className="fp-story-paras">
              <p className="fp-section-label" style={{ marginBottom: 32 }}>The founder's story</p>
              {storyParas.map((para, i) => (
                <React.Fragment key={i}>
                  {i === 2 && (
                    <blockquote className="fp-story-pullquote">
                      "From writing prescriptions to writing legacies."
                    </blockquote>
                  )}
                  <p>{para}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING ── */}
        <section
          className={`fp-closing${visible.has('closing') ? ' vis' : ''}`}
          ref={r('closing')}
        >
          <div className="fp-closing-text">
            Because while health<br />
            sustains life, it is <em>stories</em><br />
            that give it depth.
          </div>
          <div className="fp-closing-right">
            <p className="fp-closing-body">
              Fior Legacy Curator works with individuals, families, and founders
              to shape their journeys into something lasting — books that can be
              held, shared, and passed on across generations. Every life
              deserves to be remembered with the depth it lived.
            </p>
            <a href="/contact" className="fp-cta">
              Start your legacy
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>

        {/* ── FOOTER STRIP ── */}
        <footer className="fp-footer-strip">
          <div className="fp-footer-strip-in">
            <span className="fp-footer-brand">Fior Legacy Curator</span>
            <span className="fp-footer-label">
              Preserving lives through the books that hold them
            </span>
          </div>
        </footer>

      </div>
    </>
  );
}