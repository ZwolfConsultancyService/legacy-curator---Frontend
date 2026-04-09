// import React, { useEffect, useRef, useState } from 'react';

// const reasons = [
//   {
//     number: '01',
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
//         <path d="M16 3L4 9v7c0 7 5.2 13.5 12 15.4C22.8 29.5 28 23 28 16V9L16 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
//         <path d="M11 16l3.5 3.5L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     ),
//     title: 'Heirloom-Grade Quality',
//     desc: 'Every book is printed on archival paper with premium binding — crafted to last centuries, not seasons.',
//   },
//   {
//     number: '02',
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
//         <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="1.5"/>
//         <path d="M6 27c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//         <path d="M20 14l3 2.5M24 10h3M22 7l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       </svg>
//     ),
//     title: 'Your Story, Our Expertise',
//     desc: 'Our in-house writers and designers collaborate with you to shape every word, every page, every detail.',
//   },
//   {
//     number: '03',
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
//         <path d="M8 6h16v20a2 2 0 01-2 2H10a2 2 0 01-2-2V6z" stroke="currentColor" strokeWidth="1.5"/>
//         <path d="M6 6h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//         <path d="M12 12h8M12 16h8M12 20h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       </svg>
//     ),
//     title: 'Bespoke, Not Templated',
//     desc: 'No cookie-cutter layouts. Every book is designed from scratch — a true one-of-a-kind keepsake.',
//   },
//   {
//     number: '04',
//     icon: (
//       <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
//         <path d="M16 4C10 4 5 9 5 15c0 4 2 7.5 5 9.5V28h12v-3.5c3-2 5-5.5 5-9.5 0-6-5-11-11-11z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
//         <path d="M12 28h8M16 4v4M8.5 7.5l2.5 2.5M23.5 7.5l-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       </svg>
//     ),
//     title: 'End-to-End Partnership',
//     desc: 'From your first story draft to the final printed copy — we guide you through every step with care.',
//   },
// ];

// // const stats = [
// //   { num: '500', suffix: '+', label: 'Legacy books delivered' },
// //   { num: '12', suffix: '+', label: 'Years of storytelling expertise' },
// //   { num: '98', suffix: '%', label: 'Client satisfaction rate' },
// // ];

// const WhyChooseUs = () => {
//   const [visible, setVisible] = useState([]);
//   const [statsVisible, setStatsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const cardRefs = useRef([]);
//   const statsRef = useRef(null);

//   useEffect(() => {
//     const observers = cardRefs.current.map((el, i) => {
//       if (!el) return null;
//       const obs = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setTimeout(() => setVisible(v => [...v, i]), i * 100);
//             obs.disconnect();
//           }
//         },
//         { threshold: 0.1 }
//       );
//       obs.observe(el);
//       return obs;
//     });
//     return () => observers.forEach(o => o && o.disconnect());
//   }, []);

//   useEffect(() => {
//     if (!statsRef.current) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
//       { threshold: 0.2 }
//     );
//     obs.observe(statsRef.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Outfit:wght@200;300;400;500&display=swap');

//         .wcu-wrap {
//           position: relative;
//           font-family: 'Outfit', sans-serif;
//           background: #ffffff;
//         }

//         .wcu-static-bg {
//           position: absolute;
//           inset: 0;
//           background-image: url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1800&q=80&auto=format&fit=crop');
//           background-size: cover;
//           background-position: center;
//           z-index: 0;
//           opacity: 0.06;
//           filter: grayscale(30%) sepia(15%);
//         }

//         .wcu-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             160deg,
//             rgba(255,255,255,0.97) 0%,
//             rgba(255,253,249,0.93) 55%,
//             rgba(255,250,244,0.96) 100%
//           );
//           z-index: 1;
//         }

//         .wcu-orb1 {
//           position: absolute;
//           width: 700px; height: 700px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(176,125,62,0.07) 0%, transparent 65%);
//           top: -200px; right: -180px;
//           z-index: 2; pointer-events: none;
//         }
//         .wcu-orb2 {
//           position: absolute;
//           width: 500px; height: 500px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(54,97,90,0.06) 0%, transparent 65%);
//           bottom: -100px; left: -120px;
//           z-index: 2; pointer-events: none;
//         }

//         .wcu-content {
//           position: relative;
//           z-index: 3;
//           max-width: 1220px;
//           margin: 0 auto;
//           padding: 110px 48px 100px;
//         }

//         .wcu-header {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 60px;
//           align-items: end;
//           margin-bottom: 72px;
//         }

//         .wcu-eyebrow {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           font-size: 9px;
//           letter-spacing: 0.45em;
//           text-transform: uppercase;
//           color: #b07d3e;
//           font-weight: 500;
//           margin-bottom: 20px;
//         }
//         .wcu-eyebrow-line {
//           width: 36px; height: 1px;
//           background: #b07d3e;
//           flex-shrink: 0;
//         }

//         .wcu-title {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(38px, 5vw, 68px);
//           font-weight: 900;
//           color: #14201a;
//           line-height: 1.02;
//           letter-spacing: -0.02em;
//         }
//         .wcu-title .line2 {
//           display: block;
//           color: transparent;
//           -webkit-text-stroke: 1.5px rgba(20,32,26,0.22);
//           font-style: italic;
//         }
//         .wcu-title .accent {
//           color: #b07d3e;
//           font-style: italic;
//         }

//         .wcu-subtitle-block {
//           display: flex;
//           flex-direction: column;
//           justify-content: flex-end;
//           gap: 28px;
//         }
//         .wcu-subtitle {
//           font-size: 15px;
//           font-weight: 300;
//           color: rgba(20,32,26,0.48);
//           line-height: 1.9;
//           border-left: 2px solid rgba(176,125,62,0.3);
//           padding-left: 24px;
//         }

//         .wcu-cta {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           font-size: 10px;
//           letter-spacing: 0.28em;
//           text-transform: uppercase;
//           font-weight: 500;
//           color: #36615a;
//           cursor: pointer;
//           width: fit-content;
//           transition: gap 0.3s ease;
//         }
//         .wcu-cta:hover { gap: 18px; }
//         .wcu-cta-arrow {
//           width: 32px; height: 1px;
//           background: #36615a;
//           position: relative;
//           transition: width 0.3s ease;
//         }
//         .wcu-cta:hover .wcu-cta-arrow { width: 44px; }
//         .wcu-cta-arrow::after {
//           content: '';
//           position: absolute;
//           right: 0; top: -3px;
//           width: 7px; height: 7px;
//           border-right: 1px solid #36615a;
//           border-top: 1px solid #36615a;
//           transform: rotate(45deg);
//         }

//         .wcu-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 1px;
//           background: rgba(54,97,90,0.1);
//           border-radius: 22px;
//           overflow: hidden;
//           border: 1px solid rgba(54,97,90,0.1);
//           box-shadow: 0 4px 40px rgba(20,32,26,0.06), 0 1px 0 rgba(255,255,255,0.8) inset;
//         }

//         .wcu-card {
//           position: relative;
//           padding: 44px 32px 40px;
//           background: #ffffff;
//           transition: opacity 0.6s ease, transform 0.6s ease, background 0.4s ease;
//           opacity: 0;
//           transform: translateY(28px);
//           overflow: hidden;
//           cursor: default;
//         }
//         .wcu-card.visible { opacity: 1; transform: translateY(0); }
//         .wcu-card:hover { background: #f8fcf9; }

//         .wcu-card::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 2.5px;
//           background: linear-gradient(90deg, transparent, #b07d3e, transparent);
//           transform: scaleX(0);
//           transition: transform 0.45s ease;
//         }
//         .wcu-card:hover::before { transform: scaleX(1); }

//         .wcu-card::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(ellipse at 40% 20%, rgba(176,125,62,0.04) 0%, transparent 60%);
//           opacity: 0;
//           transition: opacity 0.5s ease;
//         }
//         .wcu-card:hover::after { opacity: 1; }

//         .wcu-num {
//           font-family: 'Playfair Display', serif;
//           font-size: 11px;
//           letter-spacing: 0.3em;
//           color: rgba(54,97,90,0.2);
//           margin-bottom: 24px;
//           display: block;
//         }

//         .wcu-icon-wrap {
//           width: 52px; height: 52px;
//           border-radius: 12px;
//           border: 1px solid rgba(54,97,90,0.13);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #36615a;
//           margin-bottom: 24px;
//           transition: border-color 0.3s ease, color 0.3s ease, background 0.3s ease;
//           background: rgba(54,97,90,0.04);
//           position: relative; z-index: 1;
//         }
//         .wcu-card:hover .wcu-icon-wrap {
//           border-color: rgba(176,125,62,0.4);
//           color: #b07d3e;
//           background: rgba(176,125,62,0.07);
//         }

//         .wcu-dash {
//           width: 20px; height: 1.5px;
//           background: rgba(176,125,62,0.4);
//           margin-bottom: 18px;
//           transition: width 0.4s ease;
//           position: relative; z-index: 1;
//         }
//         .wcu-card:hover .wcu-dash { width: 38px; }

//         .wcu-card-title {
//           font-family: 'Playfair Display', serif;
//           font-size: 19px;
//           font-weight: 700;
//           color: #14201a;
//           line-height: 1.25;
//           margin-bottom: 12px;
//           position: relative; z-index: 1;
//         }

//         .wcu-card-desc {
//           font-size: 13px;
//           font-weight: 300;
//           color: rgba(20,32,26,0.46);
//           line-height: 1.8;
//           position: relative; z-index: 1;
//         }

//         .wcu-stats {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           margin-top: 40px;
//           border-radius: 20px;
//           overflow: hidden;
//           border: 1px solid rgba(54,97,90,0.1);
//           background: #ffffff;
//           box-shadow: 0 2px 32px rgba(20,32,26,0.05);
//         }

//         .wcu-stat {
//           padding: 44px 48px;
//           position: relative;
//           border-right: 1px solid rgba(54,97,90,0.1);
//           overflow: hidden;
//           transition: background 0.4s ease;
//         }
//         .wcu-stat:last-child { border-right: none; }
//         .wcu-stat:hover { background: #f8fdf9; }

//         .wcu-stat::before {
//           content: '';
//           position: absolute;
//           bottom: 0; left: 0; right: 0;
//           height: 2px;
//           background: linear-gradient(90deg, transparent, rgba(176,125,62,0.45), transparent);
//           transform: scaleX(0);
//           transition: transform 0.5s ease;
//         }
//         .wcu-stat:hover::before { transform: scaleX(1); }

//         .wcu-stat-num {
//           font-family: 'Playfair Display', serif;
//           font-size: 56px;
//           font-weight: 900;
//           color: #14201a;
//           line-height: 1;
//           margin-bottom: 8px;
//           display: flex;
//           align-items: baseline;
//           gap: 4px;
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.7s ease, transform 0.7s ease;
//         }
//         .wcu-stat-num.sv { opacity: 1; transform: translateY(0); }
//         .wcu-stat:nth-child(2) .wcu-stat-num { transition-delay: 0.12s; }
//         .wcu-stat:nth-child(3) .wcu-stat-num { transition-delay: 0.24s; }

//         .wcu-stat-suffix {
//           font-size: 32px;
//           color: #b07d3e;
//           font-family: 'Playfair Display', serif;
//         }
//         .wcu-stat-label {
//           font-size: 11px;
//           font-weight: 400;
//           color: rgba(20,32,26,0.36);
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//         }

//         .wcu-badge {
//           position: absolute;
//           top: 60px; right: 48px;
//           z-index: 4;
//           width: 100px; height: 100px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .wcu-badge-ring {
//           position: absolute; inset: 0;
//           border-radius: 50%;
//           border: 1px solid rgba(176,125,62,0.22);
//           animation: rotateBadge 20s linear infinite;
//         }
//         .wcu-badge-text { position: absolute; inset: 0; }
//         @keyframes rotateBadge {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .wcu-badge-center {
//           font-family: 'Playfair Display', serif;
//           font-size: 10px;
//           font-style: italic;
//           color: rgba(176,125,62,0.6);
//           text-align: center;
//           line-height: 1.3;
//           z-index: 1;
//         }

//         @media (max-width: 1024px) {
//           .wcu-grid { grid-template-columns: repeat(2, 1fr); }
//           .wcu-header { grid-template-columns: 1fr; gap: 28px; }
//           .wcu-badge { display: none; }
//         }
//         @media (max-width: 640px) {
//           .wcu-content { padding: 80px 24px; }
//           .wcu-grid { grid-template-columns: 1fr; }
//           .wcu-stats { grid-template-columns: 1fr; }
//           .wcu-stat { border-right: none; border-bottom: 1px solid rgba(54,97,90,0.1); }
//           .wcu-stat:last-child { border-bottom: none; }
//         }
//       `}</style>

//       <section className="wcu-wrap" ref={sectionRef}>
//         <div className="wcu-static-bg" />
//         <div className="wcu-overlay" />
//         <div className="wcu-orb1" />
//         <div className="wcu-orb2" />

//         <div className="wcu-badge">
//           <div className="wcu-badge-ring" />
//           <svg className="wcu-badge-text" viewBox="0 0 100 100">
//             <defs>
//               <path id="circle-path" d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" />
//             </defs>
//             <text fill="rgba(176,125,62,0.45)" fontSize="8.5" letterSpacing="3.5" fontFamily="Outfit, sans-serif" fontWeight="400">
//               <textPath href="#circle-path">SINCE 2012 · LEGACY BOOKS ·</textPath>
//             </text>
//           </svg>
//           <div className="wcu-badge-center">EST<br/>2012</div>
//         </div>

//         <div className="wcu-content">
//           <div className="wcu-header">
//             <div>
//               <div className="wcu-eyebrow">
//                 <span className="wcu-eyebrow-line" />
//                 Why Choose Us
//               </div>
//               <h2 className="wcu-title">
//                 Crafted with
//                 {' '}<span className="accent">intention,</span>
//                 <span className="line2">built to endure</span>
//               </h2>
//             </div>
//             <div className="wcu-subtitle-block">
//               <p className="wcu-subtitle">
//                 We don't just make books. We build legacies —
//                 with the precision of artisans and the heart
//                 of storytellers who understand what truly matters.
//               </p>
//             </div>
//           </div>

//           <div className="wcu-grid">
//             {reasons.map((r, i) => (
//               <div
//                 key={i}
//                 ref={el => cardRefs.current[i] = el}
//                 className={`wcu-card${visible.includes(i) ? ' visible' : ''}`}
//               >
//                 <span className="wcu-num">{r.number}</span>
//                 <div className="wcu-icon-wrap">{r.icon}</div>
//                 <div className="wcu-dash" />
//                 <h3 className="wcu-card-title">{r.title}</h3>
//                 <p className="wcu-card-desc">{r.desc}</p>
//               </div>
//             ))}
//           </div>

//           {/* <div className="wcu-stats" ref={statsRef}>
//             {stats.map((s, i) => (
//               <div className="wcu-stat" key={i}>
//                 <div className={`wcu-stat-num${statsVisible ? ' sv' : ''}`}>
//                   {s.num}<span className="wcu-stat-suffix">{s.suffix}</span>
//                 </div>
//                 <div className="wcu-stat-label">{s.label}</div>
//               </div>
//             ))}
//           </div> */}
//         </div>
//       </section>
//     </>
//   );
// };

// export default WhyChooseUs;

import React, { useEffect, useState } from 'react';

const reasons = [
  {
    number: '01',
    title: 'Heirloom Quality',
    desc: 'Archival paper & premium binding crafted to last centuries.',
  },
  {
    number: '02',
    title: 'Expert Hands',
    desc: 'In-house writers & designers shaping every single word.',
  },
  {
    number: '03',
    title: 'Bespoke Art',
    desc: 'Zero templates. Every layout is a one-of-a-kind piece.',
  },
  {
    number: '04',
    title: 'Full Guidance',
    desc: 'From first draft to print, we navigate the path with care.',
  },
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!document.getElementById('wcu-premium-fonts')) {
      const link = document.createElement('link');
      link.id = 'wcu-premium-fonts';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Outfit:wght@300;400;500&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <>
      <style>{`
        :root {
          --c-forest: #36615A;
          --c-saddle: #8B542B;
          --c-copper: #A7703D;
          --c-porcelain: #FDFFFC;
        }

        .wcu-section {
          background: var(--c-porcelain);
          padding: 100px 0;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
        }

        .wcu-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 0 40px;
          gap: 40px;
        }

        /* --- DESKTOP CIRCLE LOGIC --- */
        .wcu-visual-area {
          position: relative;
          width: 450px;
          height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .wcu-main-circle {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(54, 97, 90, 0.1);
          border-radius: 50%;
          animation: rotateCircle 60s linear infinite;
        }

        @keyframes rotateCircle {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .wcu-orbit-item {
          position: absolute;
          width: 70px;
          height: 70px;
          background: white;
          border: 1px solid var(--c-copper);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cinzel', serif;
          font-weight: 700;
          color: var(--c-forest);
          cursor: pointer;
          transition: all 0.4s ease;
          z-index: 2;
        }

        /* Fixed Positions for Desktop */
        .item-0 { top: 0; left: 50%; transform: translate(-50%, -50%); }
        .item-1 { top: 50%; right: 0; transform: translate(50%, -50%); }
        .item-2 { bottom: 0; left: 50%; transform: translate(-50%, 50%); }
        .item-3 { top: 50%; left: 0; transform: translate(-50%, -50%); }

        .wcu-orbit-item:hover, .wcu-orbit-item.active {
          background: var(--c-forest);
          color: white;
          box-shadow: 0 10px 20px rgba(54, 97, 90, 0.2);
        }
        
        /* Proper Scaling for each position */
        .item-0:hover, .item-0.active { transform: translate(-50%, -50%) scale(1.2); }
        .item-1:hover, .item-1.active { transform: translate(50%, -50%) scale(1.2); }
        .item-2:hover, .item-2.active { transform: translate(-50%, 50%) scale(1.2); }
        .item-3:hover, .item-3.active { transform: translate(-50%, -50%) scale(1.2); }

        .wcu-center-content {
          text-align: center;
          max-width: 280px;
          z-index: 3;
        }

        .wcu-center-content h2 {
          font-family: 'Cinzel', serif;
          font-size: 24px;
          color: var(--c-forest);
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .wcu-center-content p {
          font-size: 14px;
          color: rgba(54, 97, 90, 0.8);
          line-height: 1.6;
        }

        .wcu-side-text { max-width: 450px; }
        .wcu-side-text h1 {
          font-family: 'Cinzel', serif;
          font-size: 54px;
          color: var(--c-forest);
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .wcu-side-text h1 span { color: var(--c-copper); display: block; }
        .wcu-side-text p {
          font-size: 18px;
          color: var(--c-saddle);
          opacity: 0.8;
          border-left: 2px solid var(--c-copper);
          padding-left: 20px;
        }

        .mobile-reasons-grid { display: none; }

        /* --- TABLET ADAPTATION --- */
        @media (max-width: 1024px) {
          .wcu-container { padding: 0 30px; gap: 20px; }
          .wcu-visual-area { width: 360px; height: 360px; }
          .wcu-side-text h1 { font-size: 42px; }
          .wcu-orbit-item { width: 60px; height: 60px; font-size: 14px; }
        }

        /* --- MOBILE ADAPTATION (Switch to Grid) --- */
        @media (max-width: 768px) {
          .wcu-section { padding: 60px 20px; }
          .wcu-container { flex-direction: column; text-align: center; }
          .wcu-side-text { max-width: 100%; margin-bottom: 40px; }
          .wcu-side-text p { border-left: none; padding: 0; font-size: 16px; }
          
          /* Hide the Circle on Phone */
          .wcu-visual-area { display: none; }

          /* Show a nice Grid instead */
          .mobile-reasons-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            width: 100%;
          }

          .mobile-card {
            background: white;
            padding: 25px 15px;
            border-radius: 15px;
            border: 1px solid rgba(171, 112, 61, 0.15);
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          }

          .mobile-card .num {
            font-family: 'Cinzel', serif;
            color: var(--c-copper);
            font-weight: 700;
            font-size: 18px;
            display: block;
            margin-bottom: 10px;
          }

          .mobile-card h3 {
            font-family: 'Cinzel', serif;
            font-size: 15px;
            color: var(--c-forest);
            margin-bottom: 8px;
            text-transform: uppercase;
          }

          .mobile-card p {
            font-size: 13px;
            color: rgba(54, 97, 90, 0.7);
            line-height: 1.4;
          }
        }

        @media (max-width: 480px) {
          .mobile-reasons-grid { grid-template-columns: 1fr; }
          .wcu-side-text h1 { font-size: 32px; }
        }
      `}</style>

      <section className="wcu-section">
        <div className="wcu-container">
          
          <div className="wcu-side-text">
            <h1>Crafted with <span>Intention.</span></h1>
            <p>We don't just make books. We build legacies that stand the test of time.</p>
          </div>

          {/* CIRCLE VIEW (Laptop/Tab) */}
          <div className="wcu-visual-area">
            <div className="wcu-main-circle"></div>
            {reasons.map((r, i) => (
              <div
                key={i}
                className={`wcu-orbit-item item-${i} ${activeIndex === i ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(i)}
              >
                {r.number}
              </div>
            ))}
            <div className="wcu-center-content">
              <h2>{reasons[activeIndex].title}</h2>
              <p>{reasons[activeIndex].desc}</p>
            </div>
          </div>

          {/* GRID VIEW (Phone Only) */}
          <div className="mobile-reasons-grid">
            {reasons.map((r, i) => (
              <div key={i} className="mobile-card">
                <span className="num">{r.number}</span>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;