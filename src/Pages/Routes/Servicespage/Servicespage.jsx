import React, { useState, useEffect, useRef } from 'react';

export default function ServicesPage() {
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

  const services = [
    {
      num: '01',
      title: 'Book Printing & Publishing',
      tag: 'Print',
      body: 'From softcover to hardbound, we handle every detail of the print process — paper selection, binding, colour calibration, and quality control. Your manuscript, perfected on press.',
      features: ['Offset & digital printing', 'Custom paper weights', 'Hardcover & softcover', 'Bulk order discounts'],
    },
    {
      num: '02',
      title: 'Design & Editing Services',
      tag: 'Creative',
      body: 'Our in-house team of editors and designers transform raw manuscripts into polished, publishable works. Layout, typography, cover design — all crafted with intention.',
      features: ['Professional copyediting', 'Interior layout & typesetting', 'Cover design', 'ISBN & metadata setup'],
    },
    {
      num: '03',
      title: 'Distribution & Shipping',
      tag: 'Fulfilment',
      body: 'We ship to over 50 countries, direct to your readers or to bookstores worldwide. Fulfil orders on demand or in bulk — without holding inventory.',
      features: ['Global shipping network', 'Print-on-demand fulfilment', 'Retail & bookstore distribution', 'Real-time order tracking'],
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Upload your manuscript',
      body: 'Submit your file in any major format — Word, PDF, InDesign. Our system checks it instantly for print compatibility.',
    },
    {
      num: '02',
      title: 'Choose your finish',
      body: 'Select paper, binding, trim size, and cover finish. Preview a digital proof before anything goes to press.',
    },
    {
      num: '03',
      title: 'We print & inspect',
      body: 'Every order passes a multi-point quality check. Colour, alignment, and binding are verified before leaving our facility.',
    },
    {
      num: '04',
      title: 'Delivered to your door',
      body: 'Your books ship worldwide with full tracking. From our press to your hands — or directly to your readers.',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .sv-root {
          background: #faf9f7;
          font-family: 'DM Sans', sans-serif;
          color: #1a1816;
          overflow-x: hidden;
        }
        .sv-root *, .sv-root *::before, .sv-root *::after { box-sizing: border-box; }

        /* ── HERO ── */
        .sv-hero {
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
        .sv-hero.sv-visible { opacity: 1; transform: translateY(0); }

        .sv-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9a938a;
          margin: 0 0 32px;
        }
        .sv-eyebrow::before {
          content: '';
          width: 28px;
          height: 1px;
          background: #c8c0b8;
          display: block;
        }
        .sv-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(52px, 7vw, 96px);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #0f0e0c;
          margin: 0 0 48px;
          padding: 0;
        }
        .sv-hero-title em { font-style: italic; }
        .sv-hero-rule { width: 48px; height: 1px; background: #0f0e0c; }
        .sv-hero-body {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.8;
          color: #4a4540;
          margin: 0 0 40px;
          padding: 0;
        }
        .sv-hero-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          font-style: italic;
          color: #0f0e0c;
          line-height: 1.5;
          padding: 24px 0 24px 24px;
          border-left: 1.5px solid #0f0e0c;
          margin: 0;
        }

        /* ── DIVIDER ── */
        .sv-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, transparent, #d8d0c8 20%, #d8d0c8 80%, transparent);
        }

        /* ── SERVICES LIST ── */
        .sv-services {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 48px;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s;
        }
        .sv-services.sv-visible { opacity: 1; transform: translateY(0); }

        .sv-services-header {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 80px;
          margin-bottom: 64px;
          align-items: start;
        }
        .sv-section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9a938a;
          padding-top: 6px;
          margin: 0;
        }
        .sv-section-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 54px);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: #0f0e0c;
          margin: 0;
          padding: 0;
        }
        .sv-section-heading em { font-style: italic; }

        /* service cards */
        .sv-card {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 80px;
          align-items: start;
          padding: 48px 0;
          border-top: 1px solid #e8e2da;
          transition: background 0.2s;
        }
        .sv-card:last-child { border-bottom: 1px solid #e8e2da; }

        .sv-card-left {}
        .sv-card-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 400;
          color: #c8c0b8;
          letter-spacing: 0.1em;
          margin: 0 0 12px;
          padding: 0;
        }
        .sv-card-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #9a938a;
          border: 1px solid #d8d0c8;
          padding: 4px 10px;
          border-radius: 2px;
        }
        .sv-card-right {}
        .sv-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: #0f0e0c;
          margin: 0 0 20px;
          padding: 0;
        }
        .sv-card-body {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.85;
          color: #4a4540;
          margin: 0 0 32px;
          padding: 0;
          max-width: 560px;
        }
        .sv-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 40px;
          max-width: 480px;
        }
        .sv-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 400;
          color: #6a6560;
        }
        .sv-feature::before {
          content: '';
          width: 16px;
          height: 1px;
          background: #c8c0b8;
          flex-shrink: 0;
        }

        /* ── PROCESS ── */
        .sv-process {
          background: #0f0e0c;
          padding: 80px 48px;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s;
        }
        .sv-process.sv-visible { opacity: 1; transform: translateY(0); }
        .sv-process-inner { max-width: 1200px; margin: 0 auto; }

        .sv-process-top {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 80px;
          margin-bottom: 64px;
          align-items: start;
        }
        .sv-section-label-light {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #5a5550;
          padding-top: 6px;
          margin: 0;
        }
        .sv-process-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 54px);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: #f5f2ee;
          margin: 0;
          padding: 0;
        }
        .sv-process-heading em { font-style: italic; }

        .sv-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #2a2824;
        }
        .sv-step {
          background: #0f0e0c;
          padding: 40px 36px 44px;
          transition: background 0.25s;
          cursor: default;
          position: relative;
        }
        .sv-step:hover { background: #1a1916; }

        .sv-step-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          color: #3a3830;
          letter-spacing: 0.1em;
          margin: 0 0 48px;
          padding: 0;
          display: block;
        }
        .sv-step-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          color: #f5f2ee;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin: 0 0 14px;
          padding: 0;
        }
        .sv-step-body {
          font-size: 13px;
          font-weight: 300;
          color: #6a6560;
          line-height: 1.75;
          margin: 0;
          padding: 0;
        }

        /* connector arrow between steps */
        .sv-step-arrow {
          position: absolute;
          top: 40px;
          right: -1px;
          width: 1px;
          height: 20px;
          background: #2a2824;
        }

        /* ── FEATURE STRIP ── */
        .sv-features-strip {
          background: #faf9f7;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s;
        }
        .sv-features-strip.sv-visible { opacity: 1; transform: translateY(0); }
        .sv-features-inner {
          max-width: 1200px;
          margin: 0 auto;
          border-top: 1px solid #e8e2da;
          border-bottom: 1px solid #e8e2da;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .sv-feat-cell {
          padding: 48px 40px;
          border-right: 1px solid #e8e2da;
          text-align: center;
        }
        .sv-feat-cell:last-child { border-right: none; }
        .sv-feat-icon {
          width: 32px;
          height: 32px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sv-feat-icon svg { width: 28px; height: 28px; stroke: #0f0e0c; }
        .sv-feat-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 400;
          color: #0f0e0c;
          margin: 0 0 10px;
          padding: 0;
          letter-spacing: -0.01em;
        }
        .sv-feat-body {
          font-size: 13px;
          font-weight: 300;
          color: #9a938a;
          line-height: 1.7;
          margin: 0;
          padding: 0;
        }

        /* ── CLOSING ── */
        .sv-closing {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 48px 120px;
          text-align: center;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s;
        }
        .sv-closing.sv-visible { opacity: 1; transform: translateY(0); }
        .sv-closing-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 6vw, 76px);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #0f0e0c;
          margin: 0 0 36px;
          padding: 0;
        }
        .sv-closing-title em { font-style: italic; }
        .sv-closing-sub {
          font-size: 16px;
          font-weight: 300;
          color: #6a6560;
          line-height: 1.75;
          max-width: 480px;
          margin: 0 auto 44px;
          padding: 0;
        }
        .sv-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .sv-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0f0e0c;
          color: #faf9f7;
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
        .sv-btn-primary:hover { background: #2a2824; transform: translateY(-1px); }
        .sv-btn-primary svg { transition: transform 0.2s; }
        .sv-btn-primary:hover svg { transform: translateX(3px); }
        .sv-btn-secondary {
          display: inline-flex;
          align-items: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #4a4540;
          text-decoration: none;
          letter-spacing: 0.02em;
          padding: 14px 0;
          border-bottom: 1px solid rgba(74,69,64,0.3);
          transition: color 0.2s, border-color 0.2s;
          background: none;
          border-top: none; border-left: none; border-right: none;
          cursor: pointer;
        }
        .sv-btn-secondary:hover { color: #0f0e0c; border-bottom-color: #0f0e0c; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1000px) {
          .sv-steps { grid-template-columns: 1fr 1fr; }
          .sv-features-inner { grid-template-columns: 1fr 1fr; }
          .sv-feat-cell:nth-child(2) { border-right: none; }
          .sv-feat-cell:nth-child(3) { border-top: 1px solid #e8e2da; }
          .sv-feat-cell:nth-child(4) { border-right: none; border-top: 1px solid #e8e2da; }
        }
        @media (max-width: 900px) {
          .sv-hero { grid-template-columns: 1fr; gap: 40px; padding: 64px 32px 56px; }
          .sv-hero-rule { display: none; }
          .sv-services { padding: 56px 32px; }
          .sv-services-header { grid-template-columns: 1fr; gap: 20px; margin-bottom: 40px; }
          .sv-card { grid-template-columns: 1fr; gap: 20px; padding: 36px 0; }
          .sv-process { padding: 56px 32px; }
          .sv-process-top { grid-template-columns: 1fr; gap: 20px; margin-bottom: 40px; }
          .sv-closing { padding: 64px 32px 80px; }
        }
        @media (max-width: 640px) {
          .sv-hero { padding: 56px 24px 48px; }
          .sv-hero-title { font-size: 52px; }
          .sv-steps { grid-template-columns: 1fr; }
          .sv-features-inner { grid-template-columns: 1fr; }
          .sv-feat-cell { border-right: none !important; border-top: 1px solid #e8e2da; }
          .sv-feat-cell:first-child { border-top: none; }
          .sv-features { grid-template-columns: 1fr; }
          .sv-services { padding: 48px 24px; }
          .sv-process { padding: 48px 24px; }
          .sv-closing { padding: 56px 24px 72px; }
        }
      `}</style>

      <div className="sv-root">

        {/* ── HERO ── */}
        <div className={`sv-hero${mounted ? ' sv-visible' : ''}`}>
          <div>
            <p className="sv-eyebrow">What we offer</p>
            <h1 className="sv-hero-title">
              Every service<br />
              your book<br />
              <em>deserves.</em>
            </h1>
            <div className="sv-hero-rule" />
          </div>
          <div>
            <p className="sv-hero-body">
              From your first draft to a reader's hands — we handle every step. Print, design, editing, fulfilment. All under one roof, built for independent creators who refuse to compromise.
            </p>
            <blockquote className="sv-hero-quote">
              "We don't offer packages.<br />
              We offer possibilities."
            </blockquote>
          </div>
        </div>

        <div className="sv-divider" />

        {/* ── SERVICES LIST ── */}
        <div
          className={`sv-services${visibleSections.has('1') ? ' sv-visible' : ''}`}
          data-index="1"
          ref={addRef(1)}
        >
          <div className="sv-services-header">
            <p className="sv-section-label">Our services</p>
            <h2 className="sv-section-heading">
              Three pillars,<br />
              one <em>seamless</em><br />
              experience.
            </h2>
          </div>

          {services.map((s) => (
            <div className="sv-card" key={s.num}>
              <div className="sv-card-left">
                <p className="sv-card-num">{s.num}</p>
                <span className="sv-card-tag">{s.tag}</span>
              </div>
              <div className="sv-card-right">
                <h3 className="sv-card-title">{s.title}</h3>
                <p className="sv-card-body">{s.body}</p>
                <div className="sv-features">
                  {s.features.map((f) => (
                    <span className="sv-feature" key={f}>{f}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sv-divider" />

        {/* ── PROCESS ── */}
        <div
          className={`sv-process${visibleSections.has('2') ? ' sv-visible' : ''}`}
          data-index="2"
          ref={addRef(2)}
        >
          <div className="sv-process-inner">
            <div className="sv-process-top">
              <p className="sv-section-label-light">How it works</p>
              <h2 className="sv-process-heading">
                Four steps from<br />
                manuscript to<br />
                <em>masterpiece.</em>
              </h2>
            </div>
            <div className="sv-steps">
              {steps.map((s) => (
                <div className="sv-step" key={s.num}>
                  <span className="sv-step-num">{s.num}</span>
                  <h3 className="sv-step-title">{s.title}</h3>
                  <p className="sv-step-body">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FEATURE STRIP ── */}
        <div
          className={`sv-features-strip${visibleSections.has('3') ? ' sv-visible' : ''}`}
          data-index="3"
          ref={addRef(3)}
        >
          <div className="sv-features-inner">
            <div className="sv-feat-cell">
              <div className="sv-feat-icon">
                <svg viewBox="0 0 28 28" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="3" width="16" height="22" rx="2"/>
                  <path d="M8 8h8M8 12h8M8 16h5"/>
                  <path d="M20 18l4 4"/>
                  <circle cx="20" cy="18" r="4"/>
                </svg>
              </div>
              <h4 className="sv-feat-title">Quality checked</h4>
              <p className="sv-feat-body">Every order passes a multi-point inspection before it leaves our facility.</p>
            </div>
            <div className="sv-feat-cell">
              <div className="sv-feat-icon">
                <svg viewBox="0 0 28 28" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 3L3 8v6c0 5.5 4.7 10.7 11 12 6.3-1.3 11-6.5 11-12V8L14 3z"/>
                  <path d="M9 14l3 3 7-7"/>
                </svg>
              </div>
              <h4 className="sv-feat-title">Rights retained</h4>
              <p className="sv-feat-body">You own everything. Always. We're a platform, not a publisher.</p>
            </div>
            <div className="sv-feat-cell">
              <div className="sv-feat-icon">
                <svg viewBox="0 0 28 28" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="14" cy="14" r="11"/>
                  <path d="M14 3C14 3 8 9 8 14s6 11 6 11"/>
                  <path d="M14 3c0 0 6 6 6 11s-6 11-6 11"/>
                  <path d="M3 14h22"/>
                </svg>
              </div>
              <h4 className="sv-feat-title">Ships worldwide</h4>
              <p className="sv-feat-body">50+ countries. Your readers are everywhere — so are we.</p>
            </div>
            <div className="sv-feat-cell">
              <div className="sv-feat-icon">
                <svg viewBox="0 0 28 28" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 7h18M5 14h12M5 21h8"/>
                  <path d="M21 17l3 3-3 3"/>
                </svg>
              </div>
              <h4 className="sv-feat-title">Print on demand</h4>
              <p className="sv-feat-body">No minimums. No inventory. Print exactly what you need, when you need it.</p>
            </div>
          </div>
        </div>

        <div className="sv-divider" />

        {/* ── CLOSING ── */}
        <div
          className={`sv-closing${visibleSections.has('4') ? ' sv-visible' : ''}`}
          data-index="4"
          ref={addRef(4)}
        >
          <h2 className="sv-closing-title">
            Ready to bring<br />
            your book <em>to life?</em>
          </h2>
          <p className="sv-closing-sub">
            Tell us where you are in your journey. We'll take care of everything from here.
          </p>
          <div className="sv-cta-row">
            <a href="#" className="sv-btn-primary">
              Get started
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="sv-btn-secondary">Talk to our team</a>
          </div>
        </div>

      </div>
    </>
  );
}