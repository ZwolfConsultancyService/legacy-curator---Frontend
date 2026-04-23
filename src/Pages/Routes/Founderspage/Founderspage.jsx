import React, { useState, useEffect, useRef } from 'react';
import founder from '../../../assets/Founder.jpeg';
import cofounder from '../../../assets/Abhishek.jpeg';

const FOUNDER_IMAGE = founder;
const COFOUNDER_IMAGE = cofounder;

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

const abhishekParas = [
  "Behind every enduring vision is someone who ensures it is built with structure, clarity, and purpose. Abhishek Sharma, Co-Founder of Legacy Curator, is the force that transforms ideas into sustainable systems and long-term impact.",
  "With a sharp focus on execution and growth, Abhishek plays a critical role in shaping and managing the operational backbone of the organization. His journey began by supporting his elder brother, Dr. Ashish Sharma — taking on the responsibility of organizing, managing, and streamlining day-to-day functions. What started as support soon evolved into a larger mission: building a scalable and lasting legacy.",
  "Abhishek brings a unique blend of strategic thinking and hands-on management. He specializes in creating efficient workflows, optimizing time and resources, and ensuring that vision is not lost in complexity. His approach is simple yet powerful: build systems that allow leaders to focus on what they do best, while the foundation remains strong and growth-ready.",
  "As a Legacy Curator, his role goes beyond operations. He is deeply committed to preserving the intent behind every vision while enabling it to expand and evolve. He believes that true success lies not just in achieving goals, but in creating structures that sustain success across generations.",
  "Today, as Co-Founder, Abhishek Sharma continues to drive Legacy Curator with discipline, foresight, and a clear mission — to help transform meaningful visions into enduring legacies.",
];

export default function FounderPage() {
  const [visible, setVisible] = useState(new Set());
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
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

  const handleContact = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap');

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
          font-family: 'Montserrat', sans-serif;
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

        /* ── CO-FOUNDER SECTION ── */
        .fp-cofounder {
          background: var(--ink);
          border-top: 1px solid rgba(216,208,184,0.12);
        }

        .fp-cofounder-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 100px 64px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: start;
          opacity: 0; transform: translateY(40px);
          transition: opacity 0.9s, transform 0.9s;
        }
        .fp-cofounder-inner.vis { opacity: 1; transform: none; }

        .fp-cofounder-img-wrap {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
        }

        .fp-cofounder-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top center;
          display: block;
          filter: grayscale(20%) contrast(1.05);
        }

        .fp-cofounder-img-placeholder {
          width: 100%; height: 100%;
          background: linear-gradient(160deg, #1e2d3a 0%, #1a1816 55%, #1e3530 100%);
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          aspect-ratio: 4/5;
        }

        .fp-cofounder-img-tag {
          position: absolute; bottom: 28px; left: 28px;
          background: var(--forest); color: var(--egg);
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          padding: 8px 18px;
        }

        .fp-cofounder-corner {
          position: absolute;
          width: 28px; height: 28px;
        }
        .fp-cofounder-tl { top: 20px; left: 20px; border-top: 1.5px solid rgba(45,82,73,.5); border-left: 1.5px solid rgba(45,82,73,.5); }
        .fp-cofounder-tr { top: 20px; right: 20px; border-top: 1.5px solid rgba(45,82,73,.5); border-right: 1.5px solid rgba(45,82,73,.5); }
        .fp-cofounder-bl { bottom: 20px; left: 20px; border-bottom: 1.5px solid rgba(45,82,73,.5); border-left: 1.5px solid rgba(45,82,73,.5); }
        .fp-cofounder-br { bottom: 20px; right: 20px; border-bottom: 1.5px solid rgba(45,82,73,.5); border-right: 1.5px solid rgba(45,82,73,.5); }

        .fp-cf-initials {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(90px, 14vw, 160px);
          font-weight: 300;
          color: rgba(243,240,225,0.05);
          letter-spacing: 0.06em;
          user-select: none;
          line-height: 1;
        }

        .fp-cofounder-right {
          display: flex; flex-direction: column;
          justify-content: center; padding-top: 16px;
        }

        .fp-cf-overline {
          display: inline-flex; align-items: center; gap: 12px;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--forest-light); margin-bottom: 14px;
        }
        .fp-cf-overline::before {
          content: ''; width: 32px; height: 1px;
          background: var(--forest-light); flex-shrink: 0;
        }

        .fp-cf-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(14px, 1.6vw, 19px);
          font-weight: 400; letter-spacing: 0.12em;
          color: rgba(45,97,90,0.8);
          margin-bottom: 16px; text-transform: uppercase;
        }

        .fp-cf-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(42px, 5.5vw, 76px);
          font-weight: 300; line-height: 0.9;
          letter-spacing: -0.04em; color: var(--egg);
          margin-bottom: 22px;
        }
        .fp-cf-name em { font-style: italic; color: #6fada3; }

        .fp-cf-role {
          font-size: 11px; font-weight: 400;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--faint); margin-bottom: 28px; padding-bottom: 28px;
          border-bottom: 1px solid rgba(216,208,184,0.15);
        }

        .fp-cf-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(17px, 1.9vw, 23px);
          font-style: italic; font-weight: 300;
          color: #6fada3; line-height: 1.55; margin-bottom: 24px;
        }

        .fp-cf-blurb {
          font-size: 14px; font-weight: 300;
          color: rgba(243,240,225,0.5); line-height: 1.9;
        }

        /* ── ABHISHEK STORY ── */
        .fp-cf-story {
          background: var(--page);
          border-top: 1px solid var(--rule);
        }

        .fp-cf-story-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 100px 64px;
          display: grid; grid-template-columns: 300px 1fr;
          gap: 80px;
          opacity: 0; transform: translateY(40px);
          transition: opacity 0.9s, transform 0.9s;
        }
        .fp-cf-story-inner.vis { opacity: 1; transform: none; }

        .fp-cf-story-left { position: sticky; top: 60px; align-self: start; }

        .fp-cf-big-initial {
          font-family: 'Cormorant Garamond', serif;
          font-size: 180px; font-weight: 300;
          line-height: 0.8; color: rgba(45,82,73,0.08);
          user-select: none; margin-bottom: -20px;
        }

        .fp-cf-story-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(30px, 3.2vw, 44px);
          font-weight: 300; line-height: 1.05;
          color: var(--forest); margin-bottom: 20px;
        }
        .fp-cf-story-heading em { font-style: italic; color: var(--saddle); }

        .fp-cf-story-sub {
          font-size: 13px; font-weight: 300;
          color: var(--faint); line-height: 1.8;
        }

        .fp-cf-paras p {
          font-size: 17px; font-weight: 300;
          color: var(--muted); line-height: 1.95; margin-bottom: 24px;
        }
        .fp-cf-paras p:last-child { margin-bottom: 0; }

        .fp-cf-pullquote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px; font-style: italic;
          color: var(--forest); line-height: 1.55;
          padding: 28px 0 28px 28px;
          border-left: 2px solid var(--forest-light);
          margin: 36px 0;
        }

        /* ── PILLARS ── */
        .fp-pillars {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 2px; margin-top: 48px;
          border: 1px solid var(--rule);
        }
        .fp-pillar {
          padding: 28px 24px;
          border-right: 1px solid var(--rule);
        }
        .fp-pillar:last-child { border-right: none; }
        .fp-pillar-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px; font-weight: 300;
          color: rgba(45,82,73,0.2); line-height: 1;
          margin-bottom: 10px;
        }
        .fp-pillar-label {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--forest); margin-bottom: 8px;
        }
        .fp-pillar-text {
          font-size: 13px; font-weight: 300;
          color: var(--faint); line-height: 1.75;
        }

        /* ── CONTACT SECTION ── */
        .fp-contact {
          background: var(--cream);
          border-top: 1px solid var(--rule);
          border-bottom: 1px solid var(--rule);
        }

        .fp-contact-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 100px 64px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: start;
          opacity: 0; transform: translateY(40px);
          transition: opacity 0.9s, transform 0.9s;
        }
        .fp-contact-inner.vis { opacity: 1; transform: none; }

        .fp-contact-left {}

        .fp-contact-big {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5vw, 68px);
          font-weight: 300; line-height: 0.95;
          letter-spacing: -0.03em; color: var(--ink);
          margin-bottom: 28px;
        }
        .fp-contact-big em { font-style: italic; color: var(--forest); }

        .fp-contact-desc {
          font-size: 15px; font-weight: 300;
          color: var(--muted); line-height: 1.9;
          margin-bottom: 40px;
        }

        /* Contact info cards */
        .fp-contact-cards {
          display: flex; flex-direction: column; gap: 12px;
        }

        .fp-contact-card {
          display: flex; align-items: center; gap: 16px;
          padding: 18px 20px;
          background: var(--page);
          border: 1px solid var(--rule);
          border-radius: 2px;
          transition: border-color 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .fp-contact-card:hover {
          border-color: var(--copper);
          transform: translateX(4px);
        }

        .fp-contact-card-icon {
          width: 42px; height: 42px; flex-shrink: 0;
          background: var(--forest);
          display: flex; align-items: center; justify-content: center;
        }

        .fp-contact-card-label {
          font-size: 9px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--faint); margin-bottom: 4px;
        }

        .fp-contact-card-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px; font-weight: 400;
          color: var(--ink); letter-spacing: 0.01em;
        }

        /* Form */
        .fp-form {
          display: flex; flex-direction: column; gap: 16px;
        }

        .fp-form-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(26px, 2.8vw, 36px);
          font-weight: 300; color: var(--ink);
          margin-bottom: 4px; line-height: 1.1;
        }
        .fp-form-title em { font-style: italic; color: var(--forest); }

        .fp-form-sub {
          font-size: 13px; font-weight: 300;
          color: var(--faint); line-height: 1.7;
          margin-bottom: 8px;
        }

        .fp-form-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }

        .fp-field {
          display: flex; flex-direction: column; gap: 6px;
        }

        .fp-field label {
          font-size: 9px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--faint);
        }

        .fp-field input,
        .fp-field textarea {
          padding: 13px 16px;
          border: 1px solid var(--rule);
          background: var(--page);
          font-family: 'Montserrat', sans-serif;
          font-size: 14px; font-weight: 300;
          color: var(--ink);
          outline: none;
          transition: border-color 0.2s;
          resize: none;
          border-radius: 0;
        }
        .fp-field input:focus,
        .fp-field textarea:focus {
          border-color: var(--forest);
        }
        .fp-field input::placeholder,
        .fp-field textarea::placeholder { color: var(--faint); }

        .fp-submit {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--egg); background: var(--forest);
          padding: 16px 32px;
          border: none; cursor: pointer;
          transition: background 0.2s;
          align-self: flex-start;
          font-family: 'Montserrat', sans-serif;
        }
        .fp-submit:hover { background: var(--saddle); }

        .fp-form-success {
          padding: 28px;
          background: rgba(45,82,73,0.07);
          border: 1px solid var(--forest);
          text-align: center;
        }
        .fp-form-success-icon {
          font-size: 32px; margin-bottom: 12px;
        }
        .fp-form-success-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px; font-weight: 300;
          color: var(--forest); margin-bottom: 8px;
        }
        .fp-form-success-sub {
          font-size: 13px; font-weight: 300;
          color: var(--faint); line-height: 1.7;
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
          .fp-cofounder-inner { grid-template-columns: 1fr; gap: 48px; padding: 64px 32px; }
          .fp-cf-story-inner { grid-template-columns: 1fr; gap: 40px; padding: 64px 32px; }
          .fp-cf-story-left { position: static; }
          .fp-pillars { grid-template-columns: 1fr; }
          .fp-pillar { border-right: none; border-bottom: 1px solid var(--rule); }
          .fp-pillar:last-child { border-bottom: none; }
          .fp-contact-inner { grid-template-columns: 1fr; gap: 48px; padding: 64px 32px; }
          .fp-closing { grid-template-columns: 1fr; gap: 40px; padding: 64px 32px; }
          .fp-footer-strip-in { flex-direction: column; align-items: flex-start; padding: 28px 32px; gap: 12px; }
          .fp-rule-wrap { padding: 0 32px; }
          .fp-form-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .fp-hero-right { padding: 36px 24px; }
          .fp-poem-section, .fp-story-inner, .fp-closing { padding: 48px 24px; }
          .fp-cofounder-inner, .fp-cf-story-inner, .fp-contact-inner { padding: 48px 24px; }
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
                  <span className="fp-initials-bg">AS</span>
                </div>
              )
            }
            <div className="fp-hero-img-overlay" />
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

        <div className="fp-rule-wrap"><div className="fp-rule" /></div>

        {/* ── DR. ASHISH STORY ── */}
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

        {/* ── CO-FOUNDER HERO ── */}
        <section className="fp-cofounder">
          <div
            className={`fp-cofounder-inner${visible.has('cf-hero') ? ' vis' : ''}`}
            ref={r('cf-hero')}
          >
            <div className="fp-cofounder-img-wrap">
              {COFOUNDER_IMAGE
                ? (
                  <>
                    <img src={COFOUNDER_IMAGE} alt="Abhishek Sharma" />
                    <div className="fp-cofounder-img-tag">Co-Founder</div>
                  </>
                )
                : (
                  <div className="fp-cofounder-img-placeholder">
                    <div className="fp-placeholder-dots" style={{ backgroundImage: 'radial-gradient(circle, rgba(45,82,73,0.25) 1px, transparent 1px)' }} />
                    <div className="fp-cofounder-corner fp-cofounder-tl" />
                    <div className="fp-cofounder-corner fp-cofounder-tr" />
                    <div className="fp-cofounder-corner fp-cofounder-bl" />
                    <div className="fp-cofounder-corner fp-cofounder-br" />
                    <span className="fp-cf-initials">AS</span>
                    <div className="fp-cofounder-img-tag">Co-Founder</div>
                  </div>
                )
              }
            </div>

            <div className="fp-cofounder-right">
              <p className="fp-cf-overline">Fior Legacy Curator</p>
              <p className="fp-cf-label">Abhishek Sharma</p>
              <h2 className="fp-cf-name">
                Structure<br />
                behind every<br />
                <em>vision.</em>
              </h2>
              <p className="fp-cf-role">Co-Founder & Legacy Curator · Operations & Growth</p>
              <p className="fp-cf-tagline">
                "True success lies not just in achieving goals,<br />
                but in creating structures that sustain them."
              </p>
              <p className="fp-cf-blurb">
                The force that transforms ideas into sustainable systems —
                Abhishek ensures that every vision built at Fior Legacy Curator
                is matched with the discipline and structure to last across generations.
              </p>
            </div>
          </div>
        </section>

        {/* ── ABHISHEK STORY ── */}
        <section className="fp-cf-story">
          <div
            className={`fp-cf-story-inner${visible.has('cf-story') ? ' vis' : ''}`}
            ref={r('cf-story')}
          >
            <div className="fp-cf-story-left">
              <div className="fp-cf-big-initial">A</div>
              <h2 className="fp-cf-story-heading">
                Vision meets<br />
                <em>structure.</em>
              </h2>
              <p className="fp-cf-story-sub">
                Behind every enduring vision is someone who ensures it is built
                with clarity, discipline, and purpose.
              </p>
            </div>

            <div className="fp-cf-paras">
              <p className="fp-section-label" style={{ marginBottom: 32 }}>The co-founder's story</p>

              {abhishekParas.map((para, i) => (
                <React.Fragment key={i}>
                  {i === 2 && (
                    <blockquote className="fp-cf-pullquote">
                      "Build systems that allow leaders to focus on what they do best — while the foundation remains strong and growth-ready."
                    </blockquote>
                  )}
                  <p>{para}</p>
                </React.Fragment>
              ))}

              <div className="fp-pillars">
                <div className="fp-pillar">
                  <div className="fp-pillar-num">01</div>
                  <div className="fp-pillar-label">Strategic Thinking</div>
                  <p className="fp-pillar-text">Translating vision into actionable, scalable systems that endure.</p>
                </div>
                <div className="fp-pillar">
                  <div className="fp-pillar-num">02</div>
                  <div className="fp-pillar-label">Operational Clarity</div>
                  <p className="fp-pillar-text">Creating efficient workflows so complexity never obscures purpose.</p>
                </div>
                <div className="fp-pillar">
                  <div className="fp-pillar-num">03</div>
                  <div className="fp-pillar-label">Generational Impact</div>
                  <p className="fp-pillar-text">Ensuring every legacy is structured to sustain and grow across time.</p>
                </div>
              </div>
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
            <a href="/contacts" className="fp-cta">
              Start your legacy
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
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