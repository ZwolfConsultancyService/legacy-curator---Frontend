

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
      { threshold: 0.08 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (i) => (el) => { sectionRefs.current[i] = el; };

  const services = [
    {
      num: '01',
      slug: 'memoir',
      title: 'Memoir Books',
      tag: 'Bookshelf Edition',
      tagline: 'Your Life. Your Words. Forever.',
      body: 'Over twelve face-to-face meetings, we capture the memories that matter most — weaving them into a beautifully crafted 200-page hardback your family will treasure for generations.',
      image: 'https://i.pinimg.com/1200x/9f/2a/28/9f2a28a0b3dbd7e0fb145d1aca1c19b0.jpg',
      features: ['12 face-to-face meetings', 'Expert ghostwriter & editor', 'Up to 200 pages', 'Hand-bound in London'],
    },
    {
      num: '02',
      slug: 'legacy-book',
      title: 'Legacy Books',
      tag: 'Heritage Edition',
      tagline: 'Stories Passed Down Forever.',
      body: 'Threads of memories woven gently through time — your family's roots, values, and love stories captured across generations in one heirloom volume.',
      image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=800&q=80',
      features: ['9 family interviews', 'Family tree spread', 'Audio highlights recording', 'Presentation box included'],
    },
    {
      num: '03',
      slug: 'coffee-table',
      title: 'Coffee Table Books',
      tag: 'Statement Edition',
      tagline: 'Art You Can Hold.',
      body: 'Large-format, visually breathtaking books designed to be seen, felt, and admired — turning every page into an experience and every room into a gallery.',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80',
      features: ['Up to 35×35 cm format', 'Foil stamping available', 'Lay-flat binding', 'Luxury gift box'],
    },
    {
      num: '04',
      slug: 'business',
      title: 'Business Story Books',
      tag: 'Brand Edition',
      tagline: 'Your Brand. Your Legacy.',
      body: 'Behind every great brand is a remarkable story. We chronicle your journey — the struggles, breakthroughs, and people who made it possible — into lasting brand heritage.',
      image: 'https://i.pinimg.com/736x/56/ca/a8/56caa84f4bdc8c6292a4a91b90b13770.jpg',
      features: ['6 stakeholder interviews', 'Brand milestone timeline', 'Investor edition available', '25 hardback copies'],
    },
    {
      num: '05',
      slug: 'photo-book',
      title: 'Photo Books',
      tag: 'Memory Edition',
      tagline: 'Memories Frozen in Time.',
      body: 'A curated journey of storytelling — selecting, restoring, and printing your photographs into a beautifully crafted hardback your family will return to again and again.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      features: ['Up to 200 curated photos', 'Photo scanning service', 'Custom cover design', 'USB keepsake included'],
    },
    {
      num: '06',
      slug: 'vision-book',
      title: 'Vision & Passion Books',
      tag: 'Purpose Edition',
      tagline: 'Inspire. Motivate. Transform.',
      body: 'More than a journal — a declaration of intent. We help leaders, coaches, and visionaries articulate their purpose into a book that inspires everyone who holds it.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
      features: ['3 deep-dive vision sessions', 'Brand color integration', 'Social media asset pack', '20 hardback copies'],
    },
    {
      num: '07',
      slug: 'devotional-book',
      title: 'Devotional Books',
      tag: 'Faith Edition',
      tagline: 'Where Faith Finds Its Voice.',
      body: 'Faith is not just what we believe — it is how we live and what we leave behind. We shape your spiritual journey, prayers, and sacred memories into a soulful keepsake.',
      image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80',
      features: ['6 spiritual story sessions', 'Sacred art consultant', 'Personalised prayer page', 'Gold or silver embossing'],
    },
  ];

  const steps = [
    { num: '01', title: 'We listen first', body: 'Every book begins with a conversation. We learn your story, your vision, and what you want to leave behind before a single word is written.' },
    { num: '02', title: 'We craft your story', body: 'Our handpicked team of interviewers, ghostwriters, and designers work together to shape your memories into a compelling, publishable narrative.' },
    { num: '03', title: 'You review & refine', body: 'You receive drafts at every stage. Nothing is finalised without your approval — this is your story, told in your voice.' },
    { num: '04', title: 'Bound & delivered', body: 'Your finished book is hand-bound in London and delivered in a presentation box — ready to be held, gifted, and treasured forever.' },
  ];

  const highlights = [
    {
      title: 'Hand-bound in London',
      body: 'Every book is stitched, bound, and quality-checked by hand before it leaves our bindery.',
      icon: (
        <svg viewBox="0 0 28 28" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="3" width="14" height="22" rx="2"/>
          <path d="M18 7h3a2 2 0 012 2v12a2 2 0 01-2 2h-3"/>
          <path d="M8 8h6M8 12h6M8 16h4"/>
        </svg>
      ),
    },
    {
      title: 'Your voice, always',
      body: 'You own every word. We are ghostwriters and curators — never co-authors claiming credit.',
      icon: (
        <svg viewBox="0 0 28 28" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 3L3 8v6c0 5.5 4.7 10.7 11 12 6.3-1.3 11-6.5 11-12V8L14 3z"/>
          <path d="M9 14l3 3 7-7"/>
        </svg>
      ),
    },
    {
      title: 'Archival quality',
      body: 'Printed on acid-free archival paper designed to last over 200 years — for the generations that follow.',
      icon: (
        <svg viewBox="0 0 28 28" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="14" cy="14" r="10"/>
          <path d="M14 9v5l3 3"/>
        </svg>
      ),
    },
    {
      title: 'Delivered worldwide',
      body: 'From London to Mumbai to New York — your books arrive in a presentation box, wherever you are.',
      icon: (
        <svg viewBox="0 0 28 28" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="14" cy="14" r="11"/>
          <path d="M14 3C14 3 8 9 8 14s6 11 6 11M14 3c0 0 6 6 6 11s-6 11-6 11M3 14h22"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@200;300;400;500&display=swap');

        .sv-root { background: #F5F0EA; font-family: 'Jost', sans-serif; color: #1a1816; overflow-x: hidden; }
        .sv-root *, .sv-root *::before, .sv-root *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HERO ── */
        .sv-hero {
          padding: 88px 64px 80px;
          max-width: 1260px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .85s ease, transform .85s ease;
        }
        .sv-hero.vis { opacity: 1; transform: none; }
        .sv-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: .26em;
          text-transform: uppercase;
          color: #A7703D;
          margin-bottom: 28px;
        }
        .sv-eyebrow::before { content:''; width: 28px; height: 1px; background: #A7703D; flex-shrink: 0; }
        .sv-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(54px, 7.5vw, 100px);
          font-weight: 300;
          line-height: .9;
          letter-spacing: -.035em;
          color: #2d5249;
          margin-bottom: 40px;
        }
        .sv-hero-title em { font-style: italic; color: #8B542B; }
        .sv-rule { width: 44px; height: 1px; background: #d0c8b0; }
        .sv-hero-body {
          font-size: 17px;
          font-weight: 300;
          line-height: 1.9;
          color: #5a5550;
          margin-bottom: 36px;
        }
        .sv-hero-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 21px;
          font-weight: 300;
          font-style: italic;
          color: #2d5249;
          line-height: 1.55;
          padding: 22px 0 22px 24px;
          border-left: 1.5px solid #A7703D;
        }

        /* ── FULL-WIDTH DIVIDER ── */
        .sv-divider { height: 1px; background: linear-gradient(to right, transparent, #d8d0c4 20%, #d8d0c4 80%, transparent); }

        /* ── SERVICES GRID ── */
        .sv-svc-section { max-width: 1260px; margin: 0 auto; padding: 88px 64px; opacity: 0; transform: translateY(32px); transition: opacity .8s, transform .8s; }
        .sv-svc-section.vis { opacity: 1; transform: none; }
        .sv-svc-head { margin-bottom: 64px; }
        .sv-section-label { font-size: 9px; font-weight: 500; letter-spacing: .26em; text-transform: uppercase; color: #A7703D; display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .sv-section-label::before { content: ''; width: 28px; height: 1px; background: #A7703D; flex-shrink: 0; }
        .sv-section-heading { font-family: 'Cormorant Garamond', serif; font-size: clamp(36px, 4vw, 56px); font-weight: 300; line-height: 1.05; letter-spacing: -.03em; color: #1a1816; }
        .sv-section-heading em { font-style: italic; color: #2d5249; }

        /* service cards — alternating layout */
        .sv-card {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 0;
          border-top: 1px solid #ddd6c8;
          transition: background .2s;
          margin-bottom: 2px;
          overflow: hidden;
        }
        .sv-card:last-child { border-bottom: 1px solid #ddd6c8; }
        .sv-card.rev { grid-template-columns: 1fr 400px; }

        .sv-card-img-wrap { position: relative; overflow: hidden; aspect-ratio: 4/3; }
        .sv-card-img { width: 100%; height: 100%; object-fit: cover; object-position: center; transition: transform .6s ease; display: block; }
        .sv-card:hover .sv-card-img { transform: scale(1.04); }
        .sv-card-img-overlay { position: absolute; inset: 0; background: linear-gradient(160deg, rgba(20,30,26,.35) 0%, transparent 60%); pointer-events: none; }
        .sv-card-num-badge { position: absolute; top: 20px; left: 20px; font-family: 'Cormorant Garamond', serif; font-size: 13px; color: rgba(243,240,225,.55); letter-spacing: .1em; }
        .sv-card-tag-badge { position: absolute; bottom: 20px; left: 20px; font-size: 9px; font-weight: 500; letter-spacing: .2em; text-transform: uppercase; color: #F3F0E1; background: #A7703D; padding: 5px 12px; }

        .sv-card-content { background: #fff; border-left: 1px solid #ddd6c8; padding: 48px 52px; display: flex; flex-direction: column; justify-content: center; }
        .sv-card.rev .sv-card-content { border-left: none; border-right: 1px solid #ddd6c8; order: -1; }
        .sv-card-tagline { font-size: 9px; font-weight: 500; letter-spacing: .22em; text-transform: uppercase; color: #A7703D; margin-bottom: 14px; }
        .sv-card-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(32px, 3.5vw, 48px); font-weight: 300; line-height: .95; letter-spacing: -.03em; color: #2d5249; margin-bottom: 22px; }
        .sv-card-body { font-size: 14px; font-weight: 300; color: #6a6560; line-height: 1.9; margin-bottom: 28px; }
        .sv-card-features { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 24px; margin-bottom: 36px; }
        .sv-card-feat { display: flex; align-items: center; gap: 9px; font-size: 12px; font-weight: 300; color: #8a8480; }
        .sv-card-feat::before { content: ''; width: 14px; height: 1px; background: #A7703D; flex-shrink: 0; }
        .sv-card-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #2d5249;
          text-decoration: none;
          padding-bottom: 2px;
          border-bottom: 1px solid rgba(45,82,73,.3);
          width: fit-content;
          transition: color .2s, border-color .2s;
        }
        .sv-card-link:hover { color: #A7703D; border-color: #A7703D; }
        .sv-card-link-arrow { width: 16px; height: 1px; background: currentColor; position: relative; flex-shrink: 0; transition: width .2s; }
        .sv-card-link-arrow::after { content: ''; position: absolute; right: 0; top: -3px; width: 6px; height: 6px; border-right: 1px solid currentColor; border-top: 1px solid currentColor; transform: rotate(45deg); }
        .sv-card-link:hover .sv-card-link-arrow { width: 22px; }

        /* ── PROCESS ── */
        .sv-process { background: #1a1816; padding: 88px 64px; opacity: 0; transform: translateY(32px); transition: opacity .8s, transform .8s; }
        .sv-process.vis { opacity: 1; transform: none; }
        .sv-process-inner { max-width: 1260px; margin: 0 auto; }
        .sv-process-top { display: grid; grid-template-columns: 320px 1fr; gap: 80px; margin-bottom: 64px; align-items: start; }
        .sv-process-heading { font-family: 'Cormorant Garamond', serif; font-size: clamp(36px, 4vw, 56px); font-weight: 300; line-height: 1.05; letter-spacing: -.03em; color: #F3F0E1; }
        .sv-process-heading em { font-style: italic; color: #D4A96A; }
        .sv-section-label-light { font-size: 9px; font-weight: 500; letter-spacing: .26em; text-transform: uppercase; color: #5a5550; display: flex; align-items: center; gap: 12px; margin-bottom: 0; padding-top: 6px; }
        .sv-section-label-light::before { content: ''; width: 28px; height: 1px; background: #5a5550; flex-shrink: 0; }

        .sv-steps { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: #2a2824; }
        .sv-step { background: #1a1816; padding: 44px 36px 48px; transition: background .25s; }
        .sv-step:hover { background: #222018; }
        .sv-step-num { font-family: 'Cormorant Garamond', serif; font-size: 13px; color: #3a3830; letter-spacing: .1em; display: block; margin-bottom: 52px; }
        .sv-step-title { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 300; color: #F3F0E1; line-height: 1.25; letter-spacing: -.02em; margin-bottom: 14px; }
        .sv-step-title em { font-style: italic; color: #D4A96A; }
        .sv-step-body { font-size: 13px; font-weight: 300; color: #6a6560; line-height: 1.8; }

        /* ── HIGHLIGHTS STRIP ── */
        .sv-highlights { background: #F5F0EA; opacity: 0; transform: translateY(32px); transition: opacity .8s, transform .8s; }
        .sv-highlights.vis { opacity: 1; transform: none; }
        .sv-highlights-inner { max-width: 1260px; margin: 0 auto; border-top: 1px solid #ddd6c8; border-bottom: 1px solid #ddd6c8; display: grid; grid-template-columns: repeat(4,1fr); }
        .sv-hl-cell { padding: 52px 40px; border-right: 1px solid #ddd6c8; text-align: center; }
        .sv-hl-cell:last-child { border-right: none; }
        .sv-hl-icon { width: 36px; height: 36px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; }
        .sv-hl-icon svg { width: 30px; height: 30px; stroke: #2d5249; }
        .sv-hl-title { font-family: 'Cormorant Garamond', serif; font-size: 21px; font-weight: 300; color: #1a1816; margin-bottom: 10px; letter-spacing: -.01em; }
        .sv-hl-body { font-size: 13px; font-weight: 300; color: #9a9490; line-height: 1.75; }

        /* ── CLOSING CTA ── */
        .sv-closing { max-width: 900px; margin: 0 auto; padding: 104px 64px 120px; text-align: center; opacity: 0; transform: translateY(32px); transition: opacity .8s, transform .8s; }
        .sv-closing.vis { opacity: 1; transform: none; }
        .sv-closing-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(42px, 6vw, 76px); font-weight: 300; line-height: .95; letter-spacing: -.035em; color: #1a1816; margin-bottom: 32px; }
        .sv-closing-title em { font-style: italic; color: #2d5249; }
        .sv-closing-divider { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 28px; }
        .sv-closing-line { width: 48px; height: 1px; background: rgba(167,112,61,.4); }
        .sv-closing-diamond { width: 6px; height: 6px; background: #A7703D; transform: rotate(45deg); }
        .sv-closing-sub { font-size: 15px; font-weight: 300; color: #7a7570; line-height: 1.85; max-width: 480px; margin: 0 auto 44px; }
        .sv-cta-row { display: flex; align-items: center; justify-content: center; gap: 14px; flex-wrap: wrap; }
        .sv-btn-primary { display: inline-flex; align-items: center; gap: 10px; background: #2d5249; color: #F3F0E1; font-family: 'Jost', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: .24em; text-transform: uppercase; text-decoration: none; padding: 18px 36px; border-radius: 3px; border: none; cursor: pointer; transition: background .25s, transform .2s; }
        .sv-btn-primary:hover { background: #A7703D; transform: translateY(-2px); }
        .sv-btn-secondary { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: #5a5550; font-family: 'Jost', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: .24em; text-transform: uppercase; text-decoration: none; padding: 17px 36px; border-radius: 3px; border: 1px solid #ddd6c8; cursor: pointer; transition: border-color .25s, color .25s, transform .2s; }
        .sv-btn-secondary:hover { border-color: #2d5249; color: #2d5249; transform: translateY(-2px); }

        /* ── RESPONSIVE ── */
        @media(max-width:1000px) {
          .sv-card, .sv-card.rev { grid-template-columns: 1fr; }
          .sv-card-img-wrap { aspect-ratio: 16/9; }
          .sv-card.rev .sv-card-content { order: 0; border-right: none; border-top: 1px solid #ddd6c8; }
          .sv-card-content { border-left: none !important; border-top: 1px solid #ddd6c8; }
          .sv-steps { grid-template-columns: 1fr 1fr; }
          .sv-highlights-inner { grid-template-columns: 1fr 1fr; }
          .sv-hl-cell:nth-child(2) { border-right: none; }
          .sv-hl-cell:nth-child(3) { border-top: 1px solid #ddd6c8; }
          .sv-hl-cell:nth-child(4) { border-right: none; border-top: 1px solid #ddd6c8; }
          .sv-process-top { grid-template-columns: 1fr; gap: 24px; }
        }
        @media(max-width:768px) {
          .sv-hero, .sv-svc-section, .sv-process { padding-left: 28px; padding-right: 28px; }
          .sv-hero { grid-template-columns: 1fr; gap: 40px; padding-top: 64px; }
          .sv-closing { padding: 72px 28px 88px; }
        }
        @media(max-width:560px) {
          .sv-steps { grid-template-columns: 1fr; }
          .sv-highlights-inner { grid-template-columns: 1fr; }
          .sv-hl-cell { border-right: none !important; border-top: 1px solid #ddd6c8; }
          .sv-hl-cell:first-child { border-top: none; }
          .sv-card-content { padding: 32px 24px; }
          .sv-card-features { grid-template-columns: 1fr; }
          .sv-hero { padding: 52px 20px; }
          .sv-svc-section { padding: 56px 20px; }
          .sv-process { padding: 56px 20px; }
          .sv-closing { padding: 60px 20px 80px; }
        }
      `}</style>

      <div className="sv-root">

        {/* ── HERO ── */}
        <div className={`sv-hero${mounted ? ' vis' : ''}`}>
          <div>
            <p className="sv-eyebrow">What we offer</p>
            <h1 className="sv-hero-title">
              Every story<br />
              deserves a<br />
              <em>beautiful book.</em>
            </h1>
            <div className="sv-rule" />
          </div>
          <div>
            <p className="sv-hero-body">
              From your first memory to a hand-bound hardback — we guide you through every step. Memoir, legacy, coffee table, devotional, vision — seven ways to preserve what matters most.
            </p>
            <blockquote className="sv-hero-quote">
              "Because while health sustains life,<br />
              it is stories that give it depth."
            </blockquote>
          </div>
        </div>

        <div className="sv-divider" />

        {/* ── SERVICES LIST ── */}
        <div className={`sv-svc-section${visibleSections.has('1') ? ' vis' : ''}`} data-index="1" ref={addRef(1)}>
          <div className="sv-svc-head">
            <p className="sv-section-label">Our services</p>
            <h2 className="sv-section-heading">
              Seven ways to preserve<br />what <em>matters most.</em>
            </h2>
          </div>

          {services.map((s, i) => (
            <div className={`sv-card${i % 2 === 1 ? ' rev' : ''}`} key={s.num}>
              {/* Image */}
              <div className="sv-card-img-wrap">
                <img className="sv-card-img" src={s.image} alt={s.title} loading="lazy" />
                <div className="sv-card-img-overlay" />
                <span className="sv-card-num-badge">{s.num}</span>
                <span className="sv-card-tag-badge">{s.tag}</span>
              </div>
              {/* Content */}
              <div className="sv-card-content">
                <p className="sv-card-tagline">{s.tagline}</p>
                <h3 className="sv-card-title">{s.title}</h3>
                <p className="sv-card-body">{s.body}</p>
                <div className="sv-card-features">
                  {s.features.map(f => (
                    <span className="sv-card-feat" key={f}>{f}</span>
                  ))}
                </div>
                <Link to={`/services/${s.slug}`} className="sv-card-link">
                  Explore {s.title}
                  <span className="sv-card-link-arrow" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="sv-divider" />

        {/* ── PROCESS ── */}
        <div className={`sv-process${visibleSections.has('2') ? ' vis' : ''}`} data-index="2" ref={addRef(2)}>
          <div className="sv-process-inner">
            <div className="sv-process-top">
              <p className="sv-section-label-light">How it works</p>
              <h2 className="sv-process-heading">
                Four steps from<br />memory to<br /><em>masterpiece.</em>
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

        {/* ── HIGHLIGHTS ── */}
        <div className={`sv-highlights${visibleSections.has('3') ? ' vis' : ''}`} data-index="3" ref={addRef(3)}>
          <div className="sv-highlights-inner">
            {highlights.map((h) => (
              <div className="sv-hl-cell" key={h.title}>
                <div className="sv-hl-icon">{h.icon}</div>
                <h4 className="sv-hl-title">{h.title}</h4>
                <p className="sv-hl-body">{h.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sv-divider" />

        {/* ── CLOSING CTA ── */}
        <div className={`sv-closing${visibleSections.has('4') ? ' vis' : ''}`} data-index="4" ref={addRef(4)}>
          <h2 className="sv-closing-title">
            Don't leave it<br />for <em>someday.</em>
          </h2>
          <div className="sv-closing-divider">
            <span className="sv-closing-line" />
            <span className="sv-closing-diamond" />
            <span className="sv-closing-line" />
          </div>
          <p className="sv-closing-sub">
            Tell us where you are in your journey. We will take care of everything from here — beautifully.
          </p>
          <div className="sv-cta-row">
            <Link to="/contacts" className="sv-btn-primary">
              Begin your book
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/about" className="sv-btn-secondary">Our story</Link>
          </div>
        </div>

      </div>
    </>
  );
}