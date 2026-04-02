import React, { useState, useEffect, useRef } from 'react';

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  useEffect(() => {
    setTimeout(() => setMounted(true), 60);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.12 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (i) => (el) => { sectionRefs.current[i] = el; };

  const values = [
    {
      num: '01',
      title: 'Craft over convenience',
      body: 'We believe every page deserves intention. From paper weight to binding style, the details that most platforms ignore are the ones we obsess over.',
    },
    {
      num: '02',
      title: 'Stories belong to their tellers',
      body: 'Your words, your vision, your rights — always. We are the platform, never the publisher. Every creator retains full ownership of what they make.',
    },
    {
      num: '03',
      title: 'Print is not dead, it is evolving',
      body: 'We are building the infrastructure for a new era of independent publishing — where anyone with a story can hold it in their hands.',
    },
    {
      num: '04',
      title: 'Simplicity as a form of respect',
      body: 'We respect your time and talent. Our tools get out of the way so you can focus on the only thing that matters — what you have to say.',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --color-forest: #36615A;
          --color-saddle: #8B542B;
          --color-copper: #A7703D;
          --color-eggshell: #F3F0E1;
          --color-porcelain: #FDFFFC;
        }

        .ab-root {
          background: var(--color-porcelain);
          font-family: 'DM Sans', sans-serif;
          color: #1a1816;
          overflow-x: hidden;
        }
        .ab-root *, .ab-root *::before, .ab-root *::after {
          box-sizing: border-box;
        }

        /* ── HERO ── */
        .ab-hero {
          padding: 80px 48px 72px;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .ab-hero.ab-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .ab-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-copper);
          margin: 0 0 32px;
        }
        .ab-eyebrow::before {
          content: '';
          width: 28px;
          height: 1px;
          background: var(--color-copper);
          display: block;
        }
        .ab-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(52px, 7vw, 96px);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: var(--color-forest);
          margin: 0 0 48px;
          padding: 0;
        }
        .ab-hero-title em {
          font-style: italic;
          color: var(--color-saddle);
        }
        .ab-hero-rule {
          width: 48px;
          height: 2px;
          background: var(--color-forest);
        }
        .ab-hero-body {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.8;
          color: #4a4540;
          margin: 0 0 40px;
          padding: 0;
        }
        .ab-hero-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          font-style: italic;
          color: var(--color-forest);
          line-height: 1.5;
          padding: 24px 0 24px 24px;
          border-left: 2px solid var(--color-copper);
          margin: 0;
        }

        /* ── DIVIDER ── */
        .ab-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, transparent, #c8c0a8 20%, #c8c0a8 80%, transparent);
        }

        /* ── MISSION ── */
        .ab-mission {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 48px;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 80px;
          align-items: start;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s;
        }
        .ab-mission.ab-visible { opacity: 1; transform: translateY(0); }
        .ab-section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-copper);
          padding-top: 6px;
          margin: 0;
        }
        .ab-mission-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 54px);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: var(--color-forest);
          margin: 0 0 32px;
          padding: 0;
        }
        .ab-mission-heading em {
          font-style: italic;
          color: var(--color-saddle);
        }
        .ab-mission-body {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.85;
          color: #4a4540;
          margin: 0;
          padding: 0;
          max-width: 600px;
        }

        /* ── VALUES ── */
        .ab-values {
          background: var(--color-forest);
          padding: 80px 48px;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s;
        }
        .ab-values.ab-visible { opacity: 1; transform: translateY(0); }
        .ab-values-inner { max-width: 1200px; margin: 0 auto; }
        .ab-values-top {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 80px;
          margin-bottom: 56px;
        }
        .ab-section-label-light {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(243,240,225,0.45);
          padding-top: 6px;
          margin: 0;
        }
        .ab-values-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 54px);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: var(--color-eggshell);
          margin: 0;
          padding: 0;
        }
        .ab-values-heading em {
          font-style: italic;
          color: var(--color-copper);
        }
        .ab-values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: rgba(243,240,225,0.12);
        }
        .ab-value-card {
          background: var(--color-forest);
          padding: 44px 48px;
          transition: background 0.25s ease;
          cursor: default;
        }
        .ab-value-card:hover { background: #2d5249; }
        .ab-value-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 400;
          color: var(--color-copper);
          letter-spacing: 0.1em;
          margin: 0 0 24px;
          padding: 0;
        }
        .ab-value-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 400;
          color: var(--color-eggshell);
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin: 0 0 14px;
          padding: 0;
        }
        .ab-value-body {
          font-size: 14px;
          font-weight: 300;
          color: rgba(243,240,225,0.55);
          line-height: 1.75;
          margin: 0;
          padding: 0;
        }

        /* ── STATS ── */
        .ab-stats {
          background: var(--color-porcelain);
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s;
        }
        .ab-stats.ab-visible { opacity: 1; transform: translateY(0); }
        .ab-stats-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid #d8d0b8;
          border-bottom: 1px solid #d8d0b8;
        }
        .ab-stat-cell {
          padding: 64px 48px;
          text-align: center;
          border-right: 1px solid #d8d0b8;
        }
        .ab-stat-cell:last-child { border-right: none; }
        .ab-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 6vw, 80px);
          font-weight: 300;
          letter-spacing: -0.04em;
          color: var(--color-forest);
          line-height: 1;
          margin: 0 0 12px;
          padding: 0;
          display: block;
        }
        .ab-stat-label {
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-copper);
          margin: 0;
          padding: 0;
        }

        /* ── CLOSING ── */
        .ab-closing {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 48px 120px;
          text-align: center;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s;
        }
        .ab-closing.ab-visible { opacity: 1; transform: translateY(0); }
        .ab-closing-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 6vw, 76px);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--color-forest);
          margin: 0 0 36px;
          padding: 0;
        }
        .ab-closing-title em {
          font-style: italic;
          color: var(--color-saddle);
        }
        .ab-closing-sub {
          font-size: 16px;
          font-weight: 300;
          color: #6a6560;
          line-height: 1.75;
          max-width: 480px;
          margin: 0 auto 44px;
          padding: 0;
        }
        .ab-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .ab-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--color-forest);
          color: var(--color-eggshell);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          padding: 14px 28px;
          border-radius: 2px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: background 0.2s, transform 0.2s;
        }
        .ab-btn-primary:hover { background: #2d5249; transform: translateY(-1px); }
        .ab-btn-primary svg { transition: transform 0.2s; }
        .ab-btn-primary:hover svg { transform: translateX(3px); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .ab-hero { grid-template-columns: 1fr; gap: 40px; padding: 64px 32px 56px; }
          .ab-hero-rule { display: none; }
          .ab-mission { grid-template-columns: 1fr; gap: 24px; padding: 56px 32px; }
          .ab-values { padding: 56px 32px; }
          .ab-values-top { grid-template-columns: 1fr; gap: 20px; }
          .ab-values-grid { grid-template-columns: 1fr; }
          .ab-value-card { padding: 32px; }
          .ab-stats-inner { grid-template-columns: 1fr; }
          .ab-stat-cell { border-right: none; border-bottom: 1px solid #d8d0b8; padding: 48px 32px; }
          .ab-stat-cell:last-child { border-bottom: none; }
          .ab-closing { padding: 64px 24px 80px; }
        }
        @media (max-width: 600px) {
          .ab-hero { padding: 56px 24px 48px; }
          .ab-hero-title { font-size: 52px; }
          .ab-mission { padding: 48px 24px; }
          .ab-values { padding: 48px 24px; }
          .ab-hero-body { font-size: 16px; }
        }
      `}</style>

      <div className="ab-root">

        {/* HERO */}
        <div className={`ab-hero${mounted ? ' ab-visible' : ''}`}>
          <div className="ab-hero-left">
            <p className="ab-eyebrow">About us</p>
            <h1 className="ab-hero-title">
              We make <em>books</em><br />
              that last.
            </h1>
            <div className="ab-hero-rule" />
          </div>
          <div className="ab-hero-right">
            <p className="ab-hero-body">
              We started with a simple belief — that anyone with a story worth telling deserves a platform worthy of telling it. Not a template. Not a shortcut. A real, beautiful, printed book.
            </p>
            <blockquote className="ab-hero-quote">
              "The world doesn't need more content.<br />
              It needs more books that matter."
            </blockquote>
          </div>
        </div>

        <div className="ab-divider" />

        {/* MISSION */}
        <div
          className={`ab-mission${visibleSections.has('1') ? ' ab-visible' : ''}`}
          data-index="1"
          ref={addRef(1)}
        >
          <p className="ab-section-label">Our mission</p>
          <div>
            <h2 className="ab-mission-heading">
              To make independent<br />
              publishing <em>feel like</em><br />
              it always should have.
            </h2>
            <p className="ab-mission-body">
              For too long, the tools to create and distribute beautiful print work were locked behind publishing gatekeepers, expensive agencies, and complicated software. We are dismantling that. Every feature we build, every decision we make, is in service of one goal — putting the power of publishing back into the hands of the people who have something to say.
            </p>
          </div>
        </div>

        <div className="ab-divider" />

        {/* VALUES */}
        <div
          className={`ab-values${visibleSections.has('2') ? ' ab-visible' : ''}`}
          data-index="2"
          ref={addRef(2)}
        >
          <div className="ab-values-inner">
            <div className="ab-values-top">
              <p className="ab-section-label-light">What we believe</p>
              <h2 className="ab-values-heading">
                Four principles<br />
                we build <em>everything</em><br />
                around.
              </h2>
            </div>
            <div className="ab-values-grid">
              {values.map((v) => (
                <div key={v.num} className="ab-value-card">
                  <p className="ab-value-num">{v.num}</p>
                  <h3 className="ab-value-title">{v.title}</h3>
                  <p className="ab-value-body">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STATS */}
        <div
          className={`ab-stats${visibleSections.has('3') ? ' ab-visible' : ''}`}
          data-index="3"
          ref={addRef(3)}
        >
          <div className="ab-stats-inner">
            <div className="ab-stat-cell">
              <span className="ab-stat-num">2M+</span>
              <p className="ab-stat-label">Creators worldwide</p>
            </div>
            <div className="ab-stat-cell">
              <span className="ab-stat-num">50+</span>
              <p className="ab-stat-label">Countries shipped to</p>
            </div>
            <div className="ab-stat-cell">
              <span className="ab-stat-num">98%</span>
              <p className="ab-stat-label">Satisfaction rate</p>
            </div>
          </div>
        </div>

        <div className="ab-divider" />

        {/* CLOSING */}
        <div
          className={`ab-closing${visibleSections.has('4') ? ' ab-visible' : ''}`}
          data-index="4"
          ref={addRef(4)}
        >
          <h2 className="ab-closing-title">
            Ready to make<br />
            <em>your</em> book?
          </h2>
          <p className="ab-closing-sub">
            Join over two million creators who have already discovered what it feels like to hold your own work in your hands.
          </p>
          <div className="ab-cta-row">
            <a href="/contact" className="ab-btn-primary">
              Start creating
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </>
  );
}