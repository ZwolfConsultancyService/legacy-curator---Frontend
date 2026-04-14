import React, { useState, useEffect, useRef } from 'react';
import founder from '../../../assets/Founder.jpeg'

const FOUNDER_IMAGE = founder;

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
  "Somewhere between consultations and conversations, his role began to shift. He was no longer just listening to treat — he was listening to remember.",
  "That's when the path changed. From healing with medicine to preserving with meaning. From writing prescriptions to writing legacies.",
  "Today, through Fior Legacy Curator, he works with individuals, families, and founders to shape their journeys into something lasting — books that can be held, shared, and passed on.",
  "Because while health sustains life, it is stories that give it depth — and ensure it is never forgotten.",
];

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

        .fp *{box-sizing:border-box;margin:0;padding:0}
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

        /* ── HERO ── */
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

        .fp-hero-img img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top center;
          display: block;
          filter: grayscale(20%) contrast(1.05);
        }

        .fp-hero-img-placeholder {
          width: 100%; height: 100%;
          background: linear-gradient(160deg, #1e3530 0%, #1a1816 55%, #2d1f0e 100%);
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }

        .fp-placeholder-dots {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(167,112,61,0.18) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        .fp-silhouette {
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 65%; max-width: 340px;
        }

        .fp-initials-bg {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(100px, 16vw, 180px);
          font-weight: 300;
          color: rgba(243,240,225,0.06);
          letter-spacing: 0.06em;
          user-select: none;
          line-height: 1;
          position: relative; z-index: 1;
        }

        .fp-hero-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, transparent 60%, rgba(26,24,22,0.15) 100%);
          pointer-events: none;
        }

        .fp-hero-tag {
          position: absolute; top: 36px; left: 36px;
          background: var(--copper); color: var(--egg);
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase;
          padding: 8px 18px;
        }

        .fp-bracket { position: absolute; width: 36px; height: 36px; }
        .fp-bracket-tl { top: 28px; left: 28px; border-top: 1.5px solid rgba(167,112,61,.4); border-left: 1.5px solid rgba(167,112,61,.4); }
        .fp-bracket-tr { top: 28px; right: 28px; border-top: 1.5px solid rgba(167,112,61,.4); border-right: 1.5px solid rgba(167,112,61,.4); }
        .fp-bracket-bl { bottom: 28px; left: 28px; border-bottom: 1.5px solid rgba(167,112,61,.4); border-left: 1.5px solid rgba(167,112,61,.4); }
        .fp-bracket-br { bottom: 28px; right: 28px; border-bottom: 1.5px solid rgba(167,112,61,.4); border-right: 1.5px solid rgba(167,112,61,.4); }

        .fp-hero-right {
          display: flex; flex-direction: column;
          justify-content: center;
          padding: 72px 64px;
          background: var(--ink);
        }

        .fp-overline {
          display: inline-flex; align-items: center; gap: 12px;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--copper); margin-bottom: 14px;
        }
        .fp-overline::before {
          content: ''; width: 32px; height: 1px;
          background: var(--copper); flex-shrink: 0;
        }

        .fp-founder-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(16px, 1.8vw, 22px);
          font-weight: 400;
          letter-spacing: 0.12em;
          color: rgba(196,149,106,0.75);
          margin-bottom: 18px;
          text-transform: uppercase;
        }

        .fp-hero-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 6vw, 84px);
          font-weight: 300; line-height: 0.9;
          letter-spacing: -0.04em; color: var(--egg);
          margin-bottom: 24px;
        }
        .fp-hero-name em { font-style: italic; color: #c4956a; }

        .fp-hero-role {
          font-size: 11px; font-weight: 400;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--faint); margin-bottom: 28px; padding-bottom: 28px;
          border-bottom: 1px solid rgba(216,208,184,0.2);
        }

        .fp-hero-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(17px, 1.9vw, 23px);
          font-style: italic; font-weight: 300;
          color: #c4956a; line-height: 1.5; margin-bottom: 24px;
        }

        .fp-hero-blurb {
          font-size: 14px; font-weight: 300;
          color: rgba(243,240,225,0.55); line-height: 1.9;
        }

        /* ── POEM SECTION ── */
        .fp-poem-section {
          max-width: 1200px; margin: 0 auto;
          padding: 100px 64px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
          opacity: 0; transform: translateY(40px);
          transition: opacity 0.9s, transform 0.9s;
        }
        .fp-poem-section.vis { opacity: 1; transform: none; }

        .fp-section-label {
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--copper); display: flex; align-items: center;
          gap: 12px; margin-bottom: 32px;
        }
        .fp-section-label::before {
          content: ''; width: 32px; height: 1px;
          background: var(--copper); flex-shrink: 0;
        }

        .fp-poem {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(20px, 2.5vw, 32px);
          font-weight: 300; font-style: italic;
          line-height: 1.7; color: var(--forest);
        }
        .fp-poem span { display: block; }
        .fp-poem span.indent { padding-left: 2em; color: var(--saddle); }

        .fp-poem-right-head {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4.5vw, 60px);
          font-weight: 300; line-height: 0.92;
          letter-spacing: -0.035em; color: var(--ink); margin-bottom: 28px;
        }
        .fp-poem-right-head em { font-style: italic; color: var(--forest); }

        .fp-poem-right-body {
          font-size: 16px; font-weight: 300;
          color: var(--muted); line-height: 1.9;
        }

        /* ── DIVIDER ── */
        .fp-rule-wrap { max-width: 1200px; margin: 0 auto; padding: 0 64px; }
        .fp-rule { height: 1px; background: var(--rule); }

        /* ── STORY SECTION ── */
        .fp-story { background: var(--cream); border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule); }

        .fp-story-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 100px 64px;
          display: grid; grid-template-columns: 300px 1fr;
          gap: 80px;
          opacity: 0; transform: translateY(40px);
          transition: opacity 0.9s, transform 0.9s;
        }
        .fp-story-inner.vis { opacity: 1; transform: none; }

        .fp-story-left { position: sticky; top: 60px; align-self: start; }

        .fp-story-big-initial {
          font-family: 'Cormorant Garamond', serif;
          font-size: 180px; font-weight: 300;
          line-height: 0.8; color: rgba(45,82,73,0.1);
          user-select: none; margin-bottom: -20px;
        }

        .fp-story-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(30px, 3.2vw, 44px);
          font-weight: 300; line-height: 1.05;
          color: var(--forest); margin-bottom: 20px;
        }
        .fp-story-heading em { font-style: italic; color: var(--saddle); }

        .fp-story-sub {
          font-size: 13px; font-weight: 300;
          color: var(--faint); line-height: 1.8;
        }

        .fp-story-paras p {
          font-size: 17px; font-weight: 300;
          color: var(--muted); line-height: 1.95; margin-bottom: 24px;
        }
        .fp-story-paras p:last-child { margin-bottom: 0; }

        .fp-story-pullquote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px; font-style: italic;
          color: var(--forest); line-height: 1.55;
          padding: 28px 0 28px 28px;
          border-left: 2px solid var(--copper);
          margin: 36px 0; border-radius: 0;
        }

        /* ── CLOSING ── */
        .fp-closing {
          max-width: 1200px; margin: 0 auto;
          padding: 100px 64px;
          display: grid; grid-template-columns: 1fr 480px;
          gap: 80px; align-items: center;
          opacity: 0; transform: translateY(40px);
          transition: opacity 0.9s, transform 0.9s;
        }
        .fp-closing.vis { opacity: 1; transform: none; }

        .fp-closing-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 300; line-height: 1.1;
          letter-spacing: -0.03em; color: var(--ink);
        }
        .fp-closing-text em { font-style: italic; color: var(--forest); }

        .fp-closing-body {
          font-size: 15px; font-weight: 300;
          color: var(--muted); line-height: 1.9; margin-bottom: 32px;
        }

        .fp-cta {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 12px; font-weight: 400;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--egg); background: var(--forest);
          padding: 14px 28px; text-decoration: none;
          transition: background 0.2s; border: none; cursor: pointer;
        }
        .fp-cta:hover { background: var(--saddle); }

        /* ── FOOTER STRIP ── */
        .fp-footer-strip { background: var(--ink); border-top: 1px solid rgba(216,208,184,0.15); }
        .fp-footer-strip-in {
          max-width: 1200px; margin: 0 auto;
          padding: 32px 64px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
        }
        .fp-footer-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px; font-weight: 300;
          color: rgba(243,240,225,0.7); letter-spacing: 0.04em;
        }
        .fp-footer-label { font-size: 11px; color: rgba(243,240,225,0.3); letter-spacing: 0.08em; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .fp-hero { grid-template-columns: 1fr; min-height: auto; }
          .fp-hero-img { min-height: 65vw; }
          .fp-hero-right { padding: 48px 32px; }
          .fp-poem-section { grid-template-columns: 1fr; gap: 48px; padding: 64px 32px; }
          .fp-story-inner { grid-template-columns: 1fr; gap: 40px; padding: 64px 32px; }
          .fp-story-left { position: static; }
          .fp-closing { grid-template-columns: 1fr; gap: 40px; padding: 64px 32px; }
          .fp-footer-strip-in { flex-direction: column; align-items: flex-start; padding: 28px 32px; gap: 12px; }
          .fp-rule-wrap { padding: 0 32px; }
        }
        @media (max-width: 600px) {
          .fp-hero-right { padding: 36px 24px; }
          .fp-poem-section, .fp-story-inner, .fp-closing { padding: 48px 24px; }
          .fp-rule-wrap { padding: 0 24px; }
        }
      `}</style>

      <div className="fp-root">

        {/* ── HERO ── */}
        <section className="fp-hero">
          <div className="fp-hero-img">
            {FOUNDER_IMAGE
              ? <img src={FOUNDER_IMAGE} alt="Dr. Ashish Sharma" />
              : (
                <div className="fp-hero-img-placeholder">
                  <div className="fp-placeholder-dots" />
                  <div className="fp-bracket fp-bracket-tl" />
                  <div className="fp-bracket fp-bracket-tr" />
                  <div className="fp-bracket fp-bracket-bl" />
                  <div className="fp-bracket fp-bracket-br" />
                  <svg className="fp-silhouette" viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="150" cy="72" rx="42" ry="48" fill="rgba(167,112,61,0.18)" />
                    <ellipse cx="150" cy="68" rx="32" ry="36" fill="rgba(167,112,61,0.28)" />
                    <rect x="132" y="108" width="36" height="28" rx="4" fill="rgba(167,112,61,0.22)" />
                    <path d="M50 420 C50 300 90 240 130 220 L150 230 L170 220 C210 240 250 300 250 420 Z" fill="rgba(167,112,61,0.15)" />
                    <path d="M70 420 C70 310 105 255 135 236 L150 244 L165 236 C195 255 230 310 230 420 Z" fill="rgba(167,112,61,0.25)" />
                    <path d="M135 236 L150 270 L120 250 Z" fill="rgba(243,240,225,0.08)" />
                    <path d="M165 236 L150 270 L180 250 Z" fill="rgba(243,240,225,0.08)" />
                    <path d="M146 244 L154 244 L158 310 L150 322 L142 310 Z" fill="rgba(167,112,61,0.35)" />
                    <text x="150" y="370" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontSize="52" fontWeight="300" fill="rgba(243,240,225,0.12)" letterSpacing="4">AS</text>
                  </svg>
                  <span className="fp-initials-bg">AS</span>
                </div>
              )
            }
            <div className="fp-hero-img-overlay" />
            <div className="fp-hero-tag">Founder &amp; Legacy Curator</div>
          </div>

          <div className="fp-hero-right">
            <p className="fp-overline">Fior Legacy Curator</p>
            <p className="fp-founder-name">Dr. Ashish Sharma</p>
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
              around what he heard. Fior Legacy Curator exists because
              every life deserves a book worthy of it.
            </p>
          </div>
        </section>

        {/* ── POEM SECTION ── */}
        <section
          className={`fp-poem-section${visible.has('poem') ? ' vis' : ''}`}
          ref={r('poem')}
        >
          <div>
            <p className="fp-section-label">In his words</p>
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
              Twelve years as a medical practitioner taught him to see beyond
              the clinical. In the pauses between consultations, he began
              collecting something medicine had no chart for — the full arc
              of a human life. That realisation became Fior Legacy Curator.
            </p>
          </div>
        </section>

        <div className="fp-rule-wrap">
          <div className="fp-rule" />
        </div>

        {/* ── STORY SECTION ── */}
        <section className="fp-story">
          <div
            className={`fp-story-inner${visible.has('story') ? ' vis' : ''}`}
            ref={r('story')}
          >
            <div className="fp-story-left">
              <div className="fp-story-big-initial">A</div>
              <h2 className="fp-story-heading">
                The path<br />
                that <em>changed.</em>
              </h2>
              <p className="fp-story-sub">
                From healing with medicine to preserving with meaning —
                Dr. Ashish Sharma's journey across two callings.
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
          <div>
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
            <span className="fp-footer-label">Preserving lives through the books that hold them</span>
          </div>
        </footer>

      </div>
    </>
  );
}