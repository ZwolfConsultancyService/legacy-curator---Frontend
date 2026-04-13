// import React, { useState, useEffect, useRef } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import services from '../../../data/Services.js';

// // ─── Color Theme ─────────────────────────────────────────────────────────────
// const THEME = {
//   forest:    '#d5b18f',
//   forestDark:'#274842',
//   saddle:    '#8B542B',
//   copper:    '#A7703D',
//   copperLight:'#C8915A',
//   eggshell:  '#F3F0E1',
//   porcelain: '#FDFFFC',
//   ink:       '#274842',
//   inkLight:  '#3D3D39',
//   muted:     '#2E2E2B',      // darkened from #7A776C
//   border:    'rgba(54,97,90,0.14)',
// };

// // ─── Arrow SVG Icons ─────────────────────────────────────────────────────────
// const ChevronLeft = ({ size = 20, color = THEME.forest }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
//     stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="15 18 9 12 15 6" />
//   </svg>
// );

// const ChevronRight = ({ size = 20, color = THEME.forest }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
//     stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="9 18 15 12 9 6" />
//   </svg>
// );

// const ArrowRight = ({ size = 14, color = 'currentColor' }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
//     stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <line x1="5" y1="12" x2="19" y2="12" />
//     <polyline points="12 5 19 12 12 19" />
//   </svg>
// );

// // ─── Detail Page Component ───────────────────────────────────────────────────
// const ServiceDetailPage = () => {
//   const { slug } = useParams();
//   const service = services[slug];
//   const [carouselIndex, setCarouselIndex] = useState(0);
//   const autoRef = useRef(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: 'ease-in-out',
//       once: true,
//       offset: 80,
//     });
//   }, []);

//   useEffect(() => {
//     if (!service) return;
//     autoRef.current = setInterval(() => {
//       setCarouselIndex(i => (i + 1) % service.carouselImages.length);
//     }, 5000);
//     return () => clearInterval(autoRef.current);
//   }, [service]);

//   const goTo = (i) => {
//     clearInterval(autoRef.current);
//     setCarouselIndex((i + (service?.carouselImages.length || 1)) % (service?.carouselImages.length || 1));
//   };

//   if (!service) {
//     return (
//       <div style={{ padding: '80px 48px', textAlign: 'center', fontFamily: 'Georgia, serif', background: THEME.eggshell, minHeight: '60vh' }}>
//         <h1 style={{ marginBottom: 16, color: THEME.ink }}>Service not found</h1>
//         <Link to="/services" style={{ color: THEME.forest }}>← Back to Services</Link>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>{service.metaTitle}</title>
//         <meta name="description" content={service.metaDescription} />
//         <meta property="og:title" content={service.metaTitle} />
//         <meta property="og:description" content={service.metaDescription} />
//         <meta property="og:image" content={service.heroImage} />
//         <meta property="og:type" content="website" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <link rel="canonical" href={`https://yoursite.com/services/${service.slug}`} />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
//         <script type="application/ld+json">{JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "Service",
//           "name": service.title,
//           "description": service.metaDescription,
//           "image": service.heroImage,
//           "provider": { "@type": "Organization", "name": "Your Company" },
//         })}</script>
//       </Helmet>

//       <style>{`
//         .sdp-wrap * { box-sizing: border-box; }

//         /* ── HERO ── */
//         .sdp-hero {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           min-height: 420px;
//         }
//         .sdp-hero-left {
//           background: ${THEME.eggshell};
//           padding: 64px 56px 64px 64px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           position: relative;
//         }
//         .sdp-hero-left::after {
//           content: '';
//           position: absolute;
//           right: 0; top: 10%; bottom: 10%;
//           width: 1px;
//           background: linear-gradient(to bottom, transparent, ${THEME.border} 30%, ${THEME.border} 70%, transparent);
//         }
//         .sdp-hero-back {
//           display: inline-flex;
//           align-items: center;
//           gap: 7px;
//           font-size: 10.5px;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: ${THEME.inkLight};
//           text-decoration: none;
//           margin-bottom: 36px;
//           font-family: 'Lato', sans-serif;
//           font-weight: 600;
//           transition: color 0.2s;
//         }
//         .sdp-hero-back:hover { color: ${THEME.forest}; }
//         .sdp-hero-eyebrow {
//           font-size: 10px;
//           letter-spacing: 0.36em;
//           text-transform: uppercase;
//           color: ${THEME.copper};
//           font-weight: 700;
//           font-family: 'Lato', sans-serif;
//           margin-bottom: 14px;
//         }
//         .sdp-hero-title {
//           font-family: 'Libre Baskerville', serif;
//           font-size: clamp(28px, 3.6vw, 52px);
//           font-weight: 700;
//           color: ${THEME.ink};
//           line-height: 1.08;
//           margin: 0 0 8px;
//         }
//         .sdp-hero-subtitle {
//           font-family: 'Libre Baskerville', serif;
//           font-size: clamp(15px, 1.8vw, 22px);
//           font-weight: 400;
//           font-style: italic;
//           color: ${THEME.copper};
//           line-height: 1.3;
//           margin: 0 0 28px;
//         }
//         .sdp-hero-divider {
//           width: 48px;
//           height: 2px;
//           background: ${THEME.forest};
//           margin-bottom: 24px;
//           border-radius: 1px;
//         }
//         .sdp-hero-tagline {
//           font-size: 15px;
//           font-weight: 400;
//           color: ${THEME.inkLight};
//           line-height: 1.75;
//           font-family: 'Lato', sans-serif;
//         }
//         .sdp-hero-right {
//           background: ${THEME.ink};
//           overflow: hidden;
//           position: relative;
//         }
//         .sdp-hero-right img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//           transition: transform 0.8s ease;
//         }
//         .sdp-hero-right:hover img { transform: scale(1.03); }
//         .sdp-hero-badge {
//           position: absolute;
//           bottom: 28px;
//           left: 28px;
//           background: rgba(253,255,252,0.94);
//           padding: 10px 18px;
//           border-left: 3px solid ${THEME.copper};
//           font-family: 'Lato', sans-serif;
//         }
//         .sdp-hero-badge-top {
//           font-size: 9px;
//           letter-spacing: 0.22em;
//           text-transform: uppercase;
//           color: ${THEME.copper};
//           font-weight: 700;
//         }
//         .sdp-hero-badge-bottom {
//           font-size: 13px;
//           font-weight: 700;
//           color: ${THEME.ink};
//           margin-top: 2px;
//         }

//         /* ── PACKAGE INTRO ── */
//         .sdp-pkg {
//           background: ${THEME.porcelain};
//           padding: 80px 48px 72px;
//           text-align: center;
//           border-bottom: 1px solid ${THEME.border};
//           position: relative;
//           overflow: hidden;
//         }
//         .sdp-pkg::before {
//           content: '';
//           position: absolute;
//           top: -80px; left: 50%;
//           transform: translateX(-50%);
//           width: 600px; height: 600px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(54,97,90,0.05) 0%, transparent 70%);
//           pointer-events: none;
//         }
//         .sdp-pkg-label {
//           font-size: 9.5px;
//           letter-spacing: 0.38em;
//           text-transform: uppercase;
//           color: ${THEME.copper};
//           font-weight: 700;
//           margin-bottom: 16px;
//           font-family: 'Lato', sans-serif;
//         }
//         .sdp-pkg-name {
//           font-family: 'Libre Baskerville', serif;
//           font-size: clamp(24px, 3vw, 44px);
//           font-weight: 700;
//           color: ${THEME.ink};
//           line-height: 1.1;
//           margin: 0 0 6px;
//         }
//         .sdp-pkg-edition {
//           font-family: 'Libre Baskerville', serif;
//           font-size: clamp(14px, 1.6vw, 20px);
//           font-weight: 400;
//           font-style: italic;
//           color: ${THEME.forest};
//           margin: 0 0 36px;
//         }
//         .sdp-pkg-ornament {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 12px;
//           margin-bottom: 32px;
//         }
//         .sdp-pkg-ornament-line {
//           width: 60px;
//           height: 1px;
//           background: ${THEME.border};
//         }
//         .sdp-pkg-ornament-dot {
//           width: 6px;
//           height: 6px;
//           border-radius: 50%;
//           background: ${THEME.copper};
//         }
//         .sdp-pkg-desc {
//           font-size: 15.5px;
//           font-weight: 400;
//           color: ${THEME.inkLight};
//           line-height: 1.9;
//           max-width: 640px;
//           margin: 0 auto;
//           font-family: 'Lato', sans-serif;
//         }

//         /* ── FEATURES ── */
//         .sdp-features {
//           background: ${THEME.eggshell};
//           padding: 80px 48px 88px;
//         }
//         .sdp-features-heading {
//           font-family: 'Libre Baskerville', serif;
//           font-size: clamp(20px, 2.4vw, 32px);
//           font-weight: 700;
//           color: ${THEME.ink};
//           text-align: center;
//           margin: 0 0 12px;
//         }
//         .sdp-features-subheading {
//           text-align: center;
//           font-size: 14px;
//           font-weight: 400;
//           color: ${THEME.inkLight};
//           font-family: 'Lato', sans-serif;
//           letter-spacing: 0.04em;
//           margin-bottom: 52px;
//         }
//         .sdp-feature-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 1px;
//           max-width: 1080px;
//           margin: 0 auto;
//           background: ${THEME.border};
//           border: 1px solid ${THEME.border};
//           border-radius: 6px;
//           overflow: hidden;
//         }
//         .sdp-feature-cell {
//           background: ${THEME.porcelain};
//           padding: 32px 28px;
//           transition: background 0.2s;
//         }
//         .sdp-feature-cell:hover { background: #fff; }
//         .sdp-feature-cell-num {
//           font-family: 'Libre Baskerville', serif;
//           font-size: 11px;
//           color: ${THEME.copper};
//           font-weight: 400;
//           letter-spacing: 0.08em;
//           margin-bottom: 8px;
//         }
//         .sdp-feature-cell-title {
//           font-family: 'Libre Baskerville', serif;
//           font-size: 15px;
//           font-weight: 700;
//           color: ${THEME.ink};
//           margin: 0 0 16px;
//           line-height: 1.3;
//         }
//         .sdp-feature-cell ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }
//         .sdp-feature-cell ul li {
//           font-size: 13px;
//           font-weight: 400;
//           color: ${THEME.inkLight};
//           line-height: 1.5;
//           padding: 6px 0;
//           border-bottom: 1px solid rgba(54,97,90,0.08);
//           font-family: 'Lato', sans-serif;
//           display: flex;
//           align-items: flex-start;
//           gap: 8px;
//         }
//         .sdp-feature-cell ul li::before {
//           content: '';
//           display: inline-block;
//           width: 4px;
//           height: 4px;
//           border-radius: 50%;
//           background: ${THEME.copper};
//           margin-top: 6px;
//           flex-shrink: 0;
//         }
//         .sdp-feature-cell ul li:last-child { border-bottom: none; }

//         /* ── CAROUSEL ── */
//         .sdp-carousel {
//           background: ${THEME.porcelain};
//           padding: 80px 48px 88px;
//           border-top: 1px solid ${THEME.border};
//         }
//         .sdp-carousel-header {
//           text-align: center;
//           margin-bottom: 52px;
//         }
//         .sdp-carousel-eyebrow {
//           font-size: 9.5px;
//           letter-spacing: 0.38em;
//           text-transform: uppercase;
//           color: ${THEME.copper};
//           font-weight: 700;
//           margin-bottom: 14px;
//           font-family: 'Lato', sans-serif;
//         }
//         .sdp-carousel-title {
//           font-family: 'Libre Baskerville', serif;
//           font-size: clamp(20px, 2.6vw, 34px);
//           font-weight: 700;
//           color: ${THEME.ink};
//           margin: 0 0 6px;
//           line-height: 1.15;
//         }
//         .sdp-carousel-edition {
//           font-family: 'Libre Baskerville', serif;
//           font-size: clamp(14px, 1.5vw, 19px);
//           font-weight: 400;
//           font-style: italic;
//           color: ${THEME.forest};
//           margin: 0 0 16px;
//         }
//         .sdp-carousel-desc {
//           font-size: 14px;
//           font-weight: 400;
//           color: ${THEME.inkLight};
//           line-height: 1.75;
//           max-width: 460px;
//           margin: 0 auto;
//           font-family: 'Lato', sans-serif;
//         }

//         /* Stage */
//         .sdp-carousel-stage {
//           position: relative;
//           max-width: 1060px;
//           margin: 0 auto 16px;
//           border-radius: 6px;
//           overflow: hidden;
//           background: ${THEME.forest};
//           box-shadow: 0 20px 72px rgba(54,97,90,0.2), 0 6px 24px rgba(0,0,0,0.1);
//         }
//         .sdp-carousel-film {
//           display: flex;
//           transition: transform 0.6s cubic-bezier(0.77,0,0.175,1);
//         }
//         .sdp-carousel-slide {
//           min-width: 100%;
//           position: relative;
//         }
//         .sdp-carousel-slide img {
//           width: 100%;
//           height: 600px;
//           object-fit: cover;
//           display: block;
//         }
//         .sdp-carousel-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to bottom,
//             rgba(54,97,90,0.1) 0%,
//             rgba(28,28,26,0.0) 40%,
//             rgba(28,28,26,0.65) 100%
//           );
//           pointer-events: none;
//         }
//         .sdp-carousel-caption {
//           position: absolute;
//           bottom: 0; left: 0; right: 0;
//           padding: 32px 40px;
//           display: flex;
//           align-items: flex-end;
//           justify-content: space-between;
//           gap: 16px;
//         }
//         .sdp-carousel-num {
//           font-family: 'Libre Baskerville', serif;
//           font-size: 52px;
//           font-weight: 700;
//           color: rgba(255,255,255,0.14);
//           line-height: 1;
//           user-select: none;
//           letter-spacing: -0.02em;
//         }
//         .sdp-carousel-cap-text {
//           font-size: 11.5px;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.9);
//           font-weight: 600;
//           font-family: 'Lato', sans-serif;
//         }

//         /* Arrows */
//         .sdp-carousel-arrow {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 52px;
//           height: 52px;
//           background: ${THEME.porcelain};
//           border: none;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 3;
//           transition: background 0.2s, transform 0.2s;
//         }
//         .sdp-carousel-arrow:hover {
//           background: #fff;
//           transform: translateY(-50%) scale(1.08);
//         }
//         .sdp-carousel-arrow.prev { left: 0; border-radius: 0 4px 4px 0; }
//         .sdp-carousel-arrow.next { right: 0; border-radius: 4px 0 0 4px; }

//         /* Thumbnails */
//         .sdp-carousel-thumbs {
//           display: flex;
//           gap: 12px;
//           justify-content: center;
//           max-width: 1060px;
//           margin: 0 auto 36px;
//         }
//         .sdp-carousel-thumb {
//           flex: 1;
//           max-width: 300px;
//           height: 88px;
//           overflow: hidden;
//           cursor: pointer;
//           border-radius: 3px;
//           border: 2px solid transparent;
//           transition: border-color 0.25s, opacity 0.25s, transform 0.2s;
//           position: relative;
//         }
//         .sdp-carousel-thumb.active {
//           border-color: ${THEME.copper};
//           transform: translateY(-3px);
//           opacity: 1;
//         }
//         .sdp-carousel-thumb:not(.active) { opacity: 0.55; }
//         .sdp-carousel-thumb:not(.active):hover { opacity: 0.82; transform: translateY(-2px); }
//         .sdp-carousel-thumb img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }
//         .sdp-carousel-thumb-bar {
//           position: absolute;
//           bottom: 0; left: 0; right: 0;
//           height: 3px;
//           background: ${THEME.copper};
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.55s cubic-bezier(0.77,0,0.175,1);
//         }
//         .sdp-carousel-thumb.active .sdp-carousel-thumb-bar {
//           transform: scaleX(1);
//         }

//         /* Dots */
//         .sdp-carousel-dots {
//           display: flex;
//           gap: 10px;
//           justify-content: center;
//           margin-bottom: 48px;
//         }
//         .sdp-carousel-dot {
//           width: 32px;
//           height: 3px;
//           background: rgba(54,97,90,0.2);
//           border: none;
//           cursor: pointer;
//           border-radius: 2px;
//           padding: 0;
//           transition: background 0.25s, transform 0.25s;
//         }
//         .sdp-carousel-dot.active {
//           background: ${THEME.forest};
//           transform: scaleX(1.25);
//         }

//         /* CTA btn */
//         .sdp-carousel-cta { text-align: center; }
//         .sdp-pricing-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           background: ${THEME.forest};
//           color: ${THEME.porcelain};
//           text-decoration: none;
//           font-size: 10.5px;
//           letter-spacing: 0.22em;
//           text-transform: uppercase;
//           font-weight: 700;
//           padding: 16px 44px;
//           border-radius: 2px;
//           font-family: 'Lato', sans-serif;
//           transition: background 0.2s, transform 0.2s;
//         }
//         .sdp-pricing-btn:hover {
//           background: ${THEME.forestDark};
//           transform: translateY(-2px);
//         }

//         /* ── TESTIMONIAL ── */
//         .sdp-testimonial {
//           background: ${THEME.forest};
//           padding: 88px 80px;
//           text-align: center;
//           position: relative;
//           overflow: hidden;
//         }
//         .sdp-testimonial::before {
//           content: '\u201C';
//           position: absolute;
//           top: -20px; left: 50%;
//           transform: translateX(-50%);
//           font-family: 'Libre Baskerville', serif;
//           font-size: 280px;
//           color: rgba(253,255,252,0.04);
//           line-height: 1;
//           pointer-events: none;
//           user-select: none;
//         }
//         .sdp-testimonial-nav {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 42px;
//           height: 42px;
//           border-radius: 50%;
//           border: 1px solid rgba(253,255,252,0.25);
//           background: transparent;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: border-color 0.2s, background 0.2s;
//         }
//         .sdp-testimonial-nav:hover {
//           border-color: rgba(253,255,252,0.6);
//           background: rgba(253,255,252,0.08);
//         }
//         .sdp-testimonial-nav.prev { left: 48px; }
//         .sdp-testimonial-nav.next { right: 48px; }
//         .sdp-testimonial-ornament {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//           margin-bottom: 28px;
//         }
//         .sdp-testimonial-ornament span {
//           display: block;
//           width: 28px;
//           height: 1px;
//           background: rgba(167,112,61,0.6);
//         }
//         .sdp-testimonial-ornament i {
//           font-style: normal;
//           font-size: 10px;
//           color: ${THEME.copper};
//           letter-spacing: 0.22em;
//           text-transform: uppercase;
//           font-family: 'Lato', sans-serif;
//           font-weight: 700;
//         }
//         .sdp-testimonial-quote {
//           font-family: 'Libre Baskerville', serif;
//           font-size: clamp(17px, 2.2vw, 26px);
//           font-weight: 400;
//           font-style: italic;
//           color: ${THEME.porcelain};
//           line-height: 1.65;
//           max-width: 620px;
//           margin: 0 auto 24px;
//           position: relative;
//           z-index: 1;
//         }
//         .sdp-testimonial-author {
//           font-size: 11.5px;
//           font-weight: 700;
//           color: ${THEME.copper};
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           font-family: 'Lato', sans-serif;
//         }

//         /* ── CTA DARK ── */
//         .sdp-cta {
//           background: ${THEME.ink};
//           padding: 88px 48px;
//           text-align: center;
//           position: relative;
//           overflow: hidden;
//         }
//         .sdp-cta::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0; bottom: 0;
//           background: repeating-linear-gradient(
//             -45deg,
//             transparent,
//             transparent 40px,
//             rgba(54,97,90,0.03) 40px,
//             rgba(54,97,90,0.03) 41px
//           );
//           pointer-events: none;
//         }
//         .sdp-cta-eyebrow {
//           font-size: 9.5px;
//           letter-spacing: 0.38em;
//           text-transform: uppercase;
//           color: ${THEME.copper};
//           font-weight: 700;
//           margin-bottom: 18px;
//           font-family: 'Lato', sans-serif;
//           position: relative;
//         }
//         .sdp-cta-title {
//           font-family: 'Libre Baskerville', serif;
//           font-size: clamp(22px, 3vw, 42px);
//           font-weight: 700;
//           color: ${THEME.porcelain};
//           margin: 0 0 16px;
//           line-height: 1.25;
//           position: relative;
//         }
//         .sdp-cta-title em {
//           font-style: italic;
//           color: ${THEME.copperLight};
//         }
//         .sdp-cta-sub {
//           font-size: 15px;
//           font-weight: 400;
//           color: rgba(253,255,252,0.75);
//           max-width: 480px;
//           margin: 0 auto 44px;
//           line-height: 1.85;
//           font-family: 'Lato', sans-serif;
//           position: relative;
//         }
//         .sdp-cta-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           background: ${THEME.porcelain};
//           color: ${THEME.ink};
//           text-decoration: none;
//           font-size: 10.5px;
//           letter-spacing: 0.22em;
//           text-transform: uppercase;
//           font-weight: 700;
//           padding: 17px 48px;
//           border-radius: 2px;
//           font-family: 'Lato', sans-serif;
//           transition: background 0.2s, color 0.2s, transform 0.2s;
//           position: relative;
//         }
//         .sdp-cta-btn:hover {
//           background: ${THEME.copper};
//           color: ${THEME.porcelain};
//           transform: translateY(-2px);
//         }

//         /* ── RESPONSIVE ── */
//         @media (max-width: 860px) {
//           .sdp-hero { grid-template-columns: 1fr; }
//           .sdp-hero-right { min-height: 260px; }
//           .sdp-hero-left { padding: 48px 32px; }
//           .sdp-hero-left::after { display: none; }
//           .sdp-feature-grid { grid-template-columns: 1fr 1fr; }
//           .sdp-testimonial { padding: 72px 56px; }
//           .sdp-testimonial-nav.prev { left: 12px; }
//           .sdp-testimonial-nav.next { right: 12px; }
//           .sdp-carousel-slide img { height: 420px; }
//         }
//         @media (max-width: 580px) {
//           .sdp-feature-grid { grid-template-columns: 1fr; }
//           .sdp-features,
//           .sdp-pkg,
//           .sdp-carousel,
//           .sdp-testimonial,
//           .sdp-cta { padding-left: 20px; padding-right: 20px; }
//           .sdp-testimonial-nav { display: none; }
//           .sdp-carousel-thumbs { display: none; }
//           .sdp-carousel-slide img { height: 280px; }
//           .sdp-carousel-num { font-size: 36px; }
//         }
//       `}</style>

//       <div className="sdp-wrap" style={{ background: THEME.eggshell }}>

//         {/* ── HERO ── */}
//         <section className="sdp-hero">
//           <div className="sdp-hero-left" data-aos="fade-right" data-aos-duration="900">
//             <p className="sdp-hero-eyebrow">{service.packageLabel}</p>
//             <h1 className="sdp-hero-title">{service.title}</h1>
//             <p className="sdp-hero-subtitle">{service.subtitle}</p>
//             <div className="sdp-hero-divider" />
//             <p className="sdp-hero-tagline">{service.tagline}</p>
//           </div>
//           <div className="sdp-hero-right" data-aos="fade-left" data-aos-duration="900">
//             <img src={service.heroImage} alt={service.title} loading="eager" />
//             <div className="sdp-hero-badge">
//               <div className="sdp-hero-badge-top">Package</div>
//               <div className="sdp-hero-badge-bottom">{service.packageName} — {service.packageSubtitle}</div>
//             </div>
//           </div>
//         </section>

//         {/* ── PACKAGE INTRO ── */}
//         <section className="sdp-pkg">
//           <p className="sdp-pkg-label" data-aos="fade-up">{service.packageLabel}</p>
//           <h2 className="sdp-pkg-name" data-aos="fade-up" data-aos-delay="100">{service.packageName}</h2>
//           <p className="sdp-pkg-edition" data-aos="fade-up" data-aos-delay="150">{service.packageSubtitle}</p>
//           <div className="sdp-pkg-ornament" data-aos="fade-up" data-aos-delay="200">
//             <span className="sdp-pkg-ornament-line" />
//             <span className="sdp-pkg-ornament-dot" />
//             <span className="sdp-pkg-ornament-line" />
//           </div>
//           <p className="sdp-pkg-desc" data-aos="fade-up" data-aos-delay="250">{service.packageDesc}</p>
//         </section>

//         {/* ── FEATURES GRID ── */}
//         <section className="sdp-features">
//           <h2 className="sdp-features-heading" data-aos="fade-up">{service.detailTitle}</h2>
//           <p className="sdp-features-subheading" data-aos="fade-up" data-aos-delay="100">
//             Everything is included. Nothing is left to chance.
//           </p>
//           <div className="sdp-feature-grid" role="list">
//             {service.featureGroups.map((group, i) => (
//               <div
//                 key={i}
//                 className="sdp-feature-cell"
//                 role="listitem"
//                 data-aos="fade-up"
//                 data-aos-delay={i * 100}
//               >
//                 <div className="sdp-feature-cell-num">0{i + 1}</div>
//                 <h3 className="sdp-feature-cell-title">{group.title}</h3>
//                 <ul>
//                   {group.items.map((item, j) => (
//                     <li key={j}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ── IMAGE CAROUSEL ── */}
//         <section className="sdp-carousel">
//           <div className="sdp-carousel-header" data-aos="fade-up">
//             <p className="sdp-carousel-eyebrow">Gallery</p>
//             <h2 className="sdp-carousel-title">{service.carouselTitle}</h2>
//             <p className="sdp-carousel-edition">{service.carouselEdition}</p>
//             <p className="sdp-carousel-desc">{service.carouselDesc}</p>
//           </div>

//           <div className="sdp-carousel-stage" data-aos="zoom-in" data-aos-delay="100">
//             <div
//               className="sdp-carousel-film"
//               style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
//             >
//               {service.carouselImages.map((slide, i) => (
//                 <div key={i} className="sdp-carousel-slide">
//                   <img
//                     src={slide.src}
//                     alt={`${service.title} — ${i + 1} of ${service.carouselImages.length}`}
//                     loading={i === 0 ? 'eager' : 'lazy'}
//                   />
//                   <div className="sdp-carousel-overlay" />
//                   <div className="sdp-carousel-caption">
//                     <span className="sdp-carousel-num">{String(i + 1).padStart(2, '0')}</span>
//                     <span className="sdp-carousel-cap-text">{slide.caption}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button className="sdp-carousel-arrow prev" onClick={() => goTo(carouselIndex - 1)} aria-label="Previous image">
//               <ChevronLeft size={20} color={THEME.forest} />
//             </button>
//             <button className="sdp-carousel-arrow next" onClick={() => goTo(carouselIndex + 1)} aria-label="Next image">
//               <ChevronRight size={20} color={THEME.forest} />
//             </button>
//           </div>

//           <div className="sdp-carousel-thumbs" data-aos="fade-up" data-aos-delay="150">
//             {service.carouselImages.map((slide, i) => (
//               <div
//                 key={i}
//                 className={`sdp-carousel-thumb${i === carouselIndex ? ' active' : ''}`}
//                 onClick={() => goTo(i)}
//                 role="button"
//                 aria-label={`View image ${i + 1}`}
//                 tabIndex={0}
//                 onKeyDown={e => e.key === 'Enter' && goTo(i)}
//               >
//                 <img src={slide.src.replace('w=1200', 'w=400')} alt="" />
//                 <div className="sdp-carousel-thumb-bar" />
//               </div>
//             ))}
//           </div>

//           <div className="sdp-carousel-dots" role="tablist" data-aos="fade-up" data-aos-delay="200">
//             {service.carouselImages.map((_, i) => (
//               <button
//                 key={i}
//                 className={`sdp-carousel-dot${i === carouselIndex ? ' active' : ''}`}
//                 onClick={() => goTo(i)}
//                 aria-label={`Image ${i + 1}`}
//                 aria-selected={i === carouselIndex}
//               />
//             ))}
//           </div>
//         </section>

//         {/* ── TESTIMONIAL ── */}
//         <section className="sdp-testimonial">
//           <button className="sdp-testimonial-nav prev" aria-label="Previous testimonial">
//             <ChevronLeft size={18} color="rgba(253,255,252,0.6)" />
//           </button>
//           <div data-aos="fade-up">
//             <div className="sdp-testimonial-ornament">
//               <span />
//               <i>Client Stories</i>
//               <span />
//             </div>
//             <blockquote>
//               <p className="sdp-testimonial-quote">{service.testimonial}</p>
//               <footer className="sdp-testimonial-author">{service.testimonialAuthor}</footer>
//             </blockquote>
//           </div>
//           <button className="sdp-testimonial-nav next" aria-label="Next testimonial">
//             <ChevronRight size={18} color="rgba(253,255,252,0.6)" />
//           </button>
//         </section>

//         {/* ── CTA DARK ── */}
//         <section className="sdp-cta" id="contact">
//           <p className="sdp-cta-eyebrow" data-aos="fade-up">Begin Your Journey</p>
//           <h2 className="sdp-cta-title" data-aos="fade-up" data-aos-delay="100">
//             Don't wait for <em>{service.ctaItalic1}</em>;<br />start <em>{service.ctaItalic2}</em>
//           </h2>
//           <p className="sdp-cta-sub" data-aos="fade-up" data-aos-delay="150">{service.ctaSubtitle}</p>
//           <div data-aos="fade-up" data-aos-delay="200">
//             <a href="/contact" className="sdp-cta-btn">
//               Get in Touch <ArrowRight size={13} />
//             </a>
//           </div>
//         </section>

//       </div>
//     </>
//   );
// };

// export default ServiceDetailPage;

import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import services from '../../../data/Services.js';

// ─── Color Theme ─────────────────────────────────────────────────────────────
const THEME = {
  forest:    '#d5b18f',
  forestDark:'#274842',
  saddle:    '#8B542B',
  copper:    '#A7703D',
  copperLight:'#C8915A',
  eggshell:  '#F3F0E1',
  porcelain: '#FDFFFC',
  ink:       '#274842',
  inkLight:  '#3D3D39',
  muted:     '#2E2E2B',
  border:    'rgba(54,97,90,0.14)',
};

// ─── Arrow SVG Icons ─────────────────────────────────────────────────────────
const ChevronLeft = ({ size = 20, color = THEME.forest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = ({ size = 20, color = THEME.forest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ArrowRight = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ─── FAQ Accordion Item ───────────────────────────────────────────────────────
const FaqItem = ({ faq, index, isOpen, onToggle }) => (
  <div
    style={{
      borderBottom: `1px solid ${THEME.border}`,
      transition: 'background 0.2s',
    }}
  >
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      style={{
        width: '100%',
        background: 'none',
        border: 'none',
        padding: '28px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        cursor: 'pointer',
        textAlign: 'left',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, flex: 1 }}>
        <span
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 11,
            color: THEME.copper,
            fontWeight: 400,
            letterSpacing: '0.08em',
            lineHeight: 1,
            marginTop: 3,
            flexShrink: 0,
            minWidth: 24,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            fontWeight: 700,
            color: THEME.ink,
            lineHeight: 1.35,
          }}
        >
          {faq.q}
        </span>
      </div>
      {/* Plus / Minus icon */}
      <span
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: `1px solid ${isOpen ? THEME.copper : THEME.border}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'border-color 0.25s, background 0.25s, transform 0.35s',
          background: isOpen ? THEME.copper : 'transparent',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <line x1="7" y1="1" x2="7" y2="13" stroke={isOpen ? THEME.porcelain : THEME.copper} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="1" y1="7" x2="13" y2="7" stroke={isOpen ? THEME.porcelain : THEME.copper} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
    </button>

    {/* Answer panel — smooth height transition via max-height */}
    <div
      style={{
        maxHeight: isOpen ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div style={{ paddingLeft: 44, paddingBottom: 28, paddingRight: 60 }}>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: 15,
            fontWeight: 400,
            color: THEME.inkLight,
            lineHeight: 1.85,
            margin: 0,
          }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  </div>
);

// ─── Sub-Type Selector (shown only on parent photo-book page) ─────────────────
const SubTypeSelector = ({ subTypes, parentSlug }) => {
  const subList = Object.entries(subTypes);
  return (
    <section
      style={{
        background: THEME.porcelain,
        padding: '72px 48px',
        borderTop: `1px solid ${THEME.border}`,
        borderBottom: `1px solid ${THEME.border}`,
      }}
    >
      <p
        data-aos="fade-up"
        style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: '9.5px',
          letterSpacing: '0.38em',
          textTransform: 'uppercase',
          color: THEME.copper,
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: 16,
        }}
      >
        Choose Your Edition
      </p>
      <h2
        data-aos="fade-up"
        data-aos-delay="80"
        style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: 'clamp(20px, 2.4vw, 32px)',
          fontWeight: 700,
          color: THEME.ink,
          textAlign: 'center',
          margin: '0 0 10px',
        }}
      >
        Explore Our Photo Book Collections
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="120"
        style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: 14,
          color: THEME.inkLight,
          textAlign: 'center',
          marginBottom: 52,
        }}
      >
        Each edition is crafted for a different story. Find yours below.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          maxWidth: 1080,
          margin: '0 auto',
        }}
      >
        {subList.map(([key, sub], i) => (
          <Link
            key={key}
            to={`/services/${parentSlug}/${key}`}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            style={{
              display: 'block',
              textDecoration: 'none',
              borderRadius: 4,
              overflow: 'hidden',
              border: `1px solid ${THEME.border}`,
              background: THEME.eggshell,
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(54,97,90,0.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Thumbnail */}
            <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
              <img
                src={sub.heroImage}
                alt={sub.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
              />
              {/* Overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, transparent 40%, rgba(39,72,66,0.55) 100%)',
                pointerEvents: 'none',
              }} />
              {/* Badge */}
              <div style={{
                position: 'absolute', bottom: 12, left: 12,
                background: 'rgba(253,255,252,0.92)',
                padding: '6px 12px',
                borderLeft: `3px solid ${THEME.copper}`,
              }}>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 8, letterSpacing: '0.22em', textTransform: 'uppercase', color: THEME.copper, fontWeight: 700 }}>
                  {sub.packageSubtitle}
                </div>
              </div>
            </div>

            {/* Card body */}
            <div style={{ padding: '20px 22px 24px' }}>
              <p style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: 15,
                fontWeight: 700,
                color: THEME.ink,
                margin: '0 0 6px',
                lineHeight: 1.3,
              }}>
                {sub.title}
              </p>
              <p style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: 13,
                fontStyle: 'italic',
                color: THEME.copper,
                margin: '0 0 12px',
              }}>
                {sub.tagline}
              </p>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 12,
                color: THEME.inkLight,
                margin: 0,
                lineHeight: 1.6,
              }}>
                {sub.subtitle}
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                marginTop: 16,
                fontFamily: "'Lato', sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: THEME.forestDark,
                borderBottom: `1px solid ${THEME.copper}`,
                paddingBottom: 2,
              }}>
                Explore <ArrowRight size={10} color={THEME.forestDark} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

// ─── Resolve service from slug / subSlug ─────────────────────────────────────
/**
 * Returns { service, parentService, isSubType }
 * - If slug = 'photo-book' and subSlug = 'travel'  → returns the sub-type data
 * - If slug = 'photo-book' and no subSlug           → returns parent photo-book
 * - Any other top-level slug                        → returns that service
 */
const resolveService = (slug, subSlug) => {
  const parent = services[slug];
  if (!parent) return { service: null, parentService: null, isSubType: false };

  if (subSlug && parent.subTypes && parent.subTypes[subSlug]) {
    return {
      service: parent.subTypes[subSlug],
      parentService: parent,
      isSubType: true,
    };
  }

  return { service: parent, parentService: null, isSubType: false };
};

// ─── Detail Page Component ───────────────────────────────────────────────────
const ServiceDetailPage = () => {
  // Support both /services/:slug  and  /services/:slug/:subSlug
  const { slug, subSlug } = useParams();

  const { service, parentService, isSubType } = resolveService(slug, subSlug);

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const autoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true, offset: 80 });
  }, []);

  // Reset carousel & FAQ when navigating between sub-types
  useEffect(() => {
    setCarouselIndex(0);
    setOpenFaq(0);
  }, [slug, subSlug]);

  useEffect(() => {
    if (!service) return;
    autoRef.current = setInterval(() => {
      setCarouselIndex(i => (i + 1) % service.carouselImages.length);
    }, 5000);
    return () => clearInterval(autoRef.current);
  }, [service]);

  const goTo = (i) => {
    clearInterval(autoRef.current);
    setCarouselIndex((i + (service?.carouselImages.length || 1)) % (service?.carouselImages.length || 1));
  };

  const handleFaqToggle = (index) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  // ── Not found ──
  if (!service) {
    return (
      <div style={{ padding: '80px 48px', textAlign: 'center', fontFamily: 'Georgia, serif', background: THEME.eggshell, minHeight: '60vh' }}>
        <h1 style={{ marginBottom: 16, color: THEME.ink }}>Service not found</h1>
        <Link to="/services" style={{ color: THEME.forest }}>← Back to Services</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:image" content={service.heroImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://yoursite.com/services/${service.slug}`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.metaDescription,
          "image": service.heroImage,
          "provider": { "@type": "Organization", "name": "Your Company" },
        })}</script>
        {service.faqs && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": service.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a },
            })),
          })}</script>
        )}
      </Helmet>

      <style>{`
        .sdp-wrap * { box-sizing: border-box; }

        /* ── HERO ── */
        .sdp-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 420px;
        }
        .sdp-hero-left {
          background: ${THEME.eggshell};
          padding: 64px 56px 64px 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }
        .sdp-hero-left::after {
          content: '';
          position: absolute;
          right: 0; top: 10%; bottom: 10%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, ${THEME.border} 30%, ${THEME.border} 70%, transparent);
        }
        .sdp-hero-back {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 10.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${THEME.inkLight};
          text-decoration: none;
          margin-bottom: 36px;
          font-family: 'Lato', sans-serif;
          font-weight: 600;
          transition: color 0.2s;
        }
        .sdp-hero-back:hover { color: ${THEME.forest}; }
        .sdp-hero-eyebrow {
          font-size: 10px;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          color: ${THEME.copper};
          font-weight: 700;
          font-family: 'Lato', sans-serif;
          margin-bottom: 14px;
        }
        .sdp-hero-title {
          font-family: 'Libre Baskerville', serif;
          font-size: clamp(28px, 3.6vw, 52px);
          font-weight: 700;
          color: ${THEME.ink};
          line-height: 1.08;
          margin: 0 0 8px;
        }
        .sdp-hero-subtitle {
          font-family: 'Libre Baskerville', serif;
          font-size: clamp(15px, 1.8vw, 22px);
          font-weight: 400;
          font-style: italic;
          color: ${THEME.copper};
          line-height: 1.3;
          margin: 0 0 28px;
        }
        .sdp-hero-divider {
          width: 48px;
          height: 2px;
          background: ${THEME.forest};
          margin-bottom: 24px;
          border-radius: 1px;
        }
        .sdp-hero-tagline {
          font-size: 15px;
          font-weight: 400;
          color: ${THEME.inkLight};
          line-height: 1.75;
          font-family: 'Lato', sans-serif;
        }
        .sdp-hero-right {
          background: ${THEME.ink};
          overflow: hidden;
          position: relative;
        }
        .sdp-hero-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s ease;
        }
        .sdp-hero-right:hover img { transform: scale(1.03); }
        .sdp-hero-badge {
          position: absolute;
          bottom: 28px;
          left: 28px;
          background: rgba(253,255,252,0.94);
          padding: 10px 18px;
          border-left: 3px solid ${THEME.copper};
          font-family: 'Lato', sans-serif;
        }
        .sdp-hero-badge-top {
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${THEME.copper};
          font-weight: 700;
        }
        .sdp-hero-badge-bottom {
          font-size: 13px;
          font-weight: 700;
          color: ${THEME.ink};
          margin-top: 2px;
        }

        /* ── BREADCRUMB (sub-type only) ── */
        .sdp-breadcrumb {
          background: ${THEME.eggshell};
          padding: 14px 64px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Lato', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-bottom: 1px solid ${THEME.border};
         margin-top: 20px;
        }
        .sdp-breadcrumb a {
          color: ${THEME.inkLight};
          text-decoration: none;
          transition: color 0.2s;
        }
        .sdp-breadcrumb a:hover { color: ${THEME.copper}; }
        .sdp-breadcrumb-sep {
          color: ${THEME.border};
          font-size: 14px;
          margin: 0 2px;
       
        }
        .sdp-breadcrumb-current { color: ${THEME.copper}; }

        /* ── PACKAGE INTRO ── */
        .sdp-pkg {
          background: ${THEME.porcelain};
          padding: 80px 48px 72px;
          text-align: center;
          border-bottom: 1px solid ${THEME.border};
          position: relative;
          overflow: hidden;
        }
        .sdp-pkg::before {
          content: '';
          position: absolute;
          top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(54,97,90,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .sdp-pkg-label {
          font-size: 9.5px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: ${THEME.copper};
          font-weight: 700;
          margin-bottom: 16px;
          font-family: 'Lato', sans-serif;
        }
        .sdp-pkg-name {
          font-family: 'Libre Baskerville', serif;
          font-size: clamp(24px, 3vw, 44px);
          font-weight: 700;
          color: ${THEME.ink};
          line-height: 1.1;
          margin: 0 0 6px;
        }
        .sdp-pkg-edition {
          font-family: 'Libre Baskerville', serif;
          font-size: clamp(14px, 1.6vw, 20px);
          font-weight: 400;
          font-style: italic;
          color: ${THEME.forest};
          margin: 0 0 36px;
        }
        .sdp-pkg-ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 32px;
        }
        .sdp-pkg-ornament-line { width: 60px; height: 1px; background: ${THEME.border}; }
        .sdp-pkg-ornament-dot { width: 6px; height: 6px; border-radius: 50%; background: ${THEME.copper}; }
        .sdp-pkg-desc {
          font-size: 15.5px;
          font-weight: 400;
          color: ${THEME.inkLight};
          line-height: 1.9;
          max-width: 640px;
          margin: 0 auto;
          font-family: 'Lato', sans-serif;
        }

        /* ── FEATURES ── */
        .sdp-features {
          background: ${THEME.eggshell};
          padding: 80px 48px 88px;
        }
        .sdp-features-heading {
          font-family: 'Libre Baskerville', serif;
          font-size: clamp(20px, 2.4vw, 32px);
          font-weight: 700;
          color: ${THEME.ink};
          text-align: center;
          margin: 0 0 12px;
        }
        .sdp-features-subheading {
          text-align: center;
          font-size: 14px;
          font-weight: 400;
          color: ${THEME.inkLight};
          font-family: 'Lato', sans-serif;
          letter-spacing: 0.04em;
          margin-bottom: 52px;
        }
        .sdp-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          max-width: 1080px;
          margin: 0 auto;
          background: ${THEME.border};
          border: 1px solid ${THEME.border};
          border-radius: 6px;
          overflow: hidden;
        }
        .sdp-feature-cell {
          background: ${THEME.porcelain};
          padding: 32px 28px;
          transition: background 0.2s;
        }
        .sdp-feature-cell:hover { background: #fff; }
        .sdp-feature-cell-num {
          font-family: 'Libre Baskerville', serif;
          font-size: 11px;
          color: ${THEME.copper};
          font-weight: 400;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }
        .sdp-feature-cell-title {
          font-family: 'Libre Baskerville', serif;
          font-size: 15px;
          font-weight: 700;
          color: ${THEME.ink};
          margin: 0 0 16px;
          line-height: 1.3;
        }
        .sdp-feature-cell ul { list-style: none; padding: 0; margin: 0; }
        .sdp-feature-cell ul li {
          font-size: 13px;
          font-weight: 400;
          color: ${THEME.inkLight};
          line-height: 1.5;
          padding: 6px 0;
          border-bottom: 1px solid rgba(54,97,90,0.08);
          font-family: 'Lato', sans-serif;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .sdp-feature-cell ul li::before {
          content: '';
          display: inline-block;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: ${THEME.copper};
          margin-top: 6px;
          flex-shrink: 0;
        }
        .sdp-feature-cell ul li:last-child { border-bottom: none; }

        /* ── CAROUSEL ── */
        .sdp-carousel {
          background: ${THEME.porcelain};
          padding: 80px 48px 88px;
          border-top: 1px solid ${THEME.border};
        }
        .sdp-carousel-header { text-align: center; margin-bottom: 52px; }
        .sdp-carousel-eyebrow {
          font-size: 9.5px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: ${THEME.copper};
          font-weight: 700;
          margin-bottom: 14px;
          font-family: 'Lato', sans-serif;
        }
        .sdp-carousel-title {
          font-family: 'Libre Baskerville', serif;
          font-size: clamp(20px, 2.6vw, 34px);
          font-weight: 700;
          color: ${THEME.ink};
          margin: 0 0 6px;
          line-height: 1.15;
        }
        .sdp-carousel-edition {
          font-family: 'Libre Baskerville', serif;
          font-size: clamp(14px, 1.5vw, 19px);
          font-weight: 400;
          font-style: italic;
          color: ${THEME.forest};
          margin: 0 0 16px;
        }
        .sdp-carousel-desc {
          font-size: 14px;
          font-weight: 400;
          color: ${THEME.inkLight};
          line-height: 1.75;
          max-width: 460px;
          margin: 0 auto;
          font-family: 'Lato', sans-serif;
        }
        .sdp-carousel-stage {
          position: relative;
          max-width: 1060px;
          margin: 0 auto 16px;
          border-radius: 6px;
          overflow: hidden;
          background: ${THEME.forest};
          box-shadow: 0 20px 72px rgba(54,97,90,0.2), 0 6px 24px rgba(0,0,0,0.1);
        }
        .sdp-carousel-film {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.77,0,0.175,1);
        }
        .sdp-carousel-slide { min-width: 100%; position: relative; }
        .sdp-carousel-slide img {
          width: 100%; height: 600px;
          object-fit: cover; display: block;
        }
        .sdp-carousel-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(54,97,90,0.1) 0%, rgba(28,28,26,0.0) 40%, rgba(28,28,26,0.65) 100%);
          pointer-events: none;
        }
        .sdp-carousel-caption {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 32px 40px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
        }
        .sdp-carousel-num {
          font-family: 'Libre Baskerville', serif;
          font-size: 52px;
          font-weight: 700;
          color: rgba(255,255,255,0.14);
          line-height: 1;
          user-select: none;
          letter-spacing: -0.02em;
        }
        .sdp-carousel-cap-text {
          font-size: 11.5px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.9);
          font-weight: 600;
          font-family: 'Lato', sans-serif;
        }
        .sdp-carousel-arrow {
          position: absolute; top: 50%;
          transform: translateY(-50%);
          width: 52px; height: 52px;
          background: ${THEME.porcelain};
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          z-index: 3;
          transition: background 0.2s, transform 0.2s;
        }
        .sdp-carousel-arrow:hover { background: #fff; transform: translateY(-50%) scale(1.08); }
        .sdp-carousel-arrow.prev { left: 0; border-radius: 0 4px 4px 0; }
        .sdp-carousel-arrow.next { right: 0; border-radius: 4px 0 0 4px; }
        .sdp-carousel-thumbs {
          display: flex; gap: 12px; justify-content: center;
          max-width: 1060px; margin: 0 auto 36px;
        }
        .sdp-carousel-thumb {
          flex: 1; max-width: 300px; height: 88px;
          overflow: hidden; cursor: pointer; border-radius: 3px;
          border: 2px solid transparent;
          transition: border-color 0.25s, opacity 0.25s, transform 0.2s;
          position: relative;
        }
        .sdp-carousel-thumb.active { border-color: ${THEME.copper}; transform: translateY(-3px); opacity: 1; }
        .sdp-carousel-thumb:not(.active) { opacity: 0.55; }
        .sdp-carousel-thumb:not(.active):hover { opacity: 0.82; transform: translateY(-2px); }
        .sdp-carousel-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .sdp-carousel-thumb-bar {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px; background: ${THEME.copper};
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.55s cubic-bezier(0.77,0,0.175,1);
        }
        .sdp-carousel-thumb.active .sdp-carousel-thumb-bar { transform: scaleX(1); }
        .sdp-carousel-dots {
          display: flex; gap: 10px; justify-content: center; margin-bottom: 48px;
        }
        .sdp-carousel-dot {
          width: 32px; height: 3px;
          background: rgba(54,97,90,0.2);
          border: none; cursor: pointer; border-radius: 2px; padding: 0;
          transition: background 0.25s, transform 0.25s;
        }
        .sdp-carousel-dot.active { background: ${THEME.forest}; transform: scaleX(1.25); }
        .sdp-carousel-cta { text-align: center; }
        .sdp-pricing-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: ${THEME.forest}; color: ${THEME.porcelain};
          text-decoration: none;
          font-size: 10.5px; letter-spacing: 0.22em; text-transform: uppercase;
          font-weight: 700; padding: 16px 44px; border-radius: 2px;
          font-family: 'Lato', sans-serif;
          transition: background 0.2s, transform 0.2s;
        }
        .sdp-pricing-btn:hover { background: ${THEME.forestDark}; transform: translateY(-2px); }

        /* ── TESTIMONIAL ── */
        .sdp-testimonial {
          background: ${THEME.forest};
          padding: 88px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .sdp-testimonial::before {
          content: '\u201C';
          position: absolute;
          top: -20px; left: 50%;
          transform: translateX(-50%);
          font-family: 'Libre Baskerville', serif;
          font-size: 280px;
          color: rgba(253,255,252,0.04);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
        .sdp-testimonial-nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 42px; height: 42px; border-radius: 50%;
          border: 1px solid rgba(253,255,252,0.25);
          background: transparent; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s, background 0.2s;
        }
        .sdp-testimonial-nav:hover { border-color: rgba(253,255,252,0.6); background: rgba(253,255,252,0.08); }
        .sdp-testimonial-nav.prev { left: 48px; }
        .sdp-testimonial-nav.next { right: 48px; }
        .sdp-testimonial-ornament {
          display: flex; align-items: center; justify-content: center;
          gap: 8px; margin-bottom: 28px;
        }
        .sdp-testimonial-ornament span { display: block; width: 28px; height: 1px; background: rgba(167,112,61,0.6); }
        .sdp-testimonial-ornament i {
          font-style: normal; font-size: 10px; color: ${THEME.copper};
          letter-spacing: 0.22em; text-transform: uppercase;
          font-family: 'Lato', sans-serif; font-weight: 700;
        }
        .sdp-testimonial-quote {
          font-family: 'Libre Baskerville', serif;
          font-size: clamp(17px, 2.2vw, 26px);
          font-weight: 400; font-style: italic;
          color: ${THEME.porcelain};
          line-height: 1.65; max-width: 620px;
          margin: 0 auto 24px;
          position: relative; z-index: 1;
        }
        .sdp-testimonial-author {
          font-size: 11.5px; font-weight: 700;
          color: ${THEME.copper};
          letter-spacing: 0.12em; text-transform: uppercase;
          font-family: 'Lato', sans-serif;
        }

        /* ── FAQ ── */
        .sdp-faq {
          background: ${THEME.eggshell};
          padding: 88px 48px 96px;
          border-top: 1px solid ${THEME.border};
        }
        .sdp-faq-inner { max-width: 820px; margin: 0 auto; }
        .sdp-faq-eyebrow {
          font-size: 9.5px; letter-spacing: 0.38em; text-transform: uppercase;
          color: ${THEME.copper}; font-weight: 700;
          font-family: 'Lato', sans-serif;
          text-align: center; margin-bottom: 16px;
        }
        .sdp-faq-heading {
          font-family: 'Libre Baskerville', serif;
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 700; color: ${THEME.ink};
          text-align: center; margin: 0 0 10px; line-height: 1.2;
        }
        .sdp-faq-subheading {
          font-family: 'Lato', sans-serif; font-size: 14px;
          font-weight: 400; color: ${THEME.inkLight};
          text-align: center; letter-spacing: 0.03em; margin-bottom: 56px;
        }
        .sdp-faq-list { border-top: 1px solid ${THEME.border}; }
        .sdp-faq-cta {
          margin-top: 48px; text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 16px;
        }
        .sdp-faq-cta-text {
          font-family: 'Lato', sans-serif; font-size: 14px;
          color: ${THEME.inkLight}; line-height: 1.6;
        }
        .sdp-faq-cta-text strong { color: ${THEME.ink}; font-weight: 700; }
        .sdp-faq-cta-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Lato', sans-serif; font-size: 10.5px;
          font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
          color: ${THEME.ink}; text-decoration: none;
          border-bottom: 1px solid ${THEME.copper}; padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .sdp-faq-cta-link:hover { color: ${THEME.copper}; }

        /* ── CTA DARK ── */
        .sdp-cta {
          background: ${THEME.ink};
          padding: 88px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .sdp-cta::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: repeating-linear-gradient(
            -45deg, transparent, transparent 40px,
            rgba(54,97,90,0.03) 40px, rgba(54,97,90,0.03) 41px
          );
          pointer-events: none;
        }
        .sdp-cta-eyebrow {
          font-size: 9.5px; letter-spacing: 0.38em; text-transform: uppercase;
          color: ${THEME.copper}; font-weight: 700; margin-bottom: 18px;
          font-family: 'Lato', sans-serif; position: relative;
        }
        .sdp-cta-title {
          font-family: 'Libre Baskerville', serif;
          font-size: clamp(22px, 3vw, 42px);
          font-weight: 700; color: ${THEME.porcelain};
          margin: 0 0 16px; line-height: 1.25; position: relative;
        }
        .sdp-cta-title em { font-style: italic; color: ${THEME.copperLight}; }
        .sdp-cta-sub {
          font-size: 15px; font-weight: 400;
          color: rgba(253,255,252,0.75);
          max-width: 480px; margin: 0 auto 44px;
          line-height: 1.85; font-family: 'Lato', sans-serif; position: relative;
        }
        .sdp-cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: ${THEME.porcelain}; color: ${THEME.ink};
          text-decoration: none;
          font-size: 10.5px; letter-spacing: 0.22em; text-transform: uppercase;
          font-weight: 700; padding: 17px 48px; border-radius: 2px;
          font-family: 'Lato', sans-serif;
          transition: background 0.2s, color 0.2s, transform 0.2s; position: relative;
        }
        .sdp-cta-btn:hover { background: ${THEME.copper}; color: ${THEME.porcelain}; transform: translateY(-2px); }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .sdp-hero { grid-template-columns: 1fr; }
          .sdp-hero-right { min-height: 260px; }
          .sdp-hero-left { padding: 48px 32px; }
          .sdp-hero-left::after { display: none; }
          .sdp-feature-grid { grid-template-columns: 1fr 1fr; }
          .sdp-testimonial { padding: 72px 56px; }
          .sdp-testimonial-nav.prev { left: 12px; }
          .sdp-testimonial-nav.next { right: 12px; }
          .sdp-carousel-slide img { height: 420px; }
          .sdp-breadcrumb { padding: 14px 32px; }
        }
        @media (max-width: 580px) {
          .sdp-feature-grid { grid-template-columns: 1fr; }
          .sdp-features, .sdp-pkg, .sdp-carousel,
          .sdp-testimonial, .sdp-faq, .sdp-cta { padding-left: 20px; padding-right: 20px; }
          .sdp-testimonial-nav { display: none; }
          .sdp-carousel-thumbs { display: none; }
          .sdp-carousel-slide img { height: 280px; }
          .sdp-carousel-num { font-size: 36px; }
          .sdp-faq-inner { padding: 0; }
          .sdp-breadcrumb { padding: 12px 20px; font-size: 10px; }
        }
      `}</style>

      <div className="sdp-wrap" style={{ background: THEME.eggshell }}>

        {/* ── BREADCRUMB (sub-type pages only) ── */}
        {isSubType && parentService && (
          <nav className="sdp-breadcrumb" aria-label="Breadcrumb">
            <Link to="/services">Services</Link>
            <span className="sdp-breadcrumb-sep">›</span>
            <Link to={`/services/${slug}`}>{parentService.title}</Link>
            <span className="sdp-breadcrumb-sep">›</span>
            <span className="sdp-breadcrumb-current">{service.title}</span>
          </nav>
        )}

        {/* ── HERO ── */}
        <section className="sdp-hero">
          <div className="sdp-hero-left" data-aos="fade-right" data-aos-duration="900">
            {/* Back link — goes to parent for sub-types, to /services otherwise */}
            <Link
              to={isSubType ? `/services/${slug}` : '/services'}
              className="sdp-hero-back"
            >
              <ChevronLeft size={14} color={THEME.inkLight} />
              {isSubType ? `Back to ${parentService.title}` : 'All Services'}
            </Link>
            <p className="sdp-hero-eyebrow">{service.packageLabel}</p>
            <h1 className="sdp-hero-title">{service.title}</h1>
            <p className="sdp-hero-subtitle">{service.subtitle}</p>
            <div className="sdp-hero-divider" />
            <p className="sdp-hero-tagline">{service.tagline}</p>
          </div>
          <div className="sdp-hero-right" data-aos="fade-left" data-aos-duration="900">
            <img src={service.heroImage} alt={service.title} loading="eager" />
            <div className="sdp-hero-badge">
              <div className="sdp-hero-badge-top">Package</div>
              <div className="sdp-hero-badge-bottom">{service.packageName} — {service.packageSubtitle}</div>
            </div>
          </div>
        </section>

        {/* ── PACKAGE INTRO ── */}
        <section className="sdp-pkg">
          <p className="sdp-pkg-label" data-aos="fade-up">{service.packageLabel}</p>
          <h2 className="sdp-pkg-name" data-aos="fade-up" data-aos-delay="100">{service.packageName}</h2>
          <p className="sdp-pkg-edition" data-aos="fade-up" data-aos-delay="150">{service.packageSubtitle}</p>
          <div className="sdp-pkg-ornament" data-aos="fade-up" data-aos-delay="200">
            <span className="sdp-pkg-ornament-line" />
            <span className="sdp-pkg-ornament-dot" />
            <span className="sdp-pkg-ornament-line" />
          </div>
          <p className="sdp-pkg-desc" data-aos="fade-up" data-aos-delay="250">{service.packageDesc}</p>
        </section>

        {/* ── SUB-TYPE SELECTOR (parent photo-book page only) ── */}
        {!isSubType && service.subTypes && (
          <SubTypeSelector subTypes={service.subTypes} parentSlug={slug} />
        )}

        {/* ── FEATURES GRID ── */}
        <section className="sdp-features">
          <h2 className="sdp-features-heading" data-aos="fade-up">{service.detailTitle}</h2>
          <p className="sdp-features-subheading" data-aos="fade-up" data-aos-delay="100">
            Everything is included. Nothing is left to chance.
          </p>
          <div className="sdp-feature-grid" role="list">
            {service.featureGroups.map((group, i) => (
              <div
                key={i}
                className="sdp-feature-cell"
                role="listitem"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="sdp-feature-cell-num">0{i + 1}</div>
                <h3 className="sdp-feature-cell-title">{group.title}</h3>
                <ul>
                  {group.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── IMAGE CAROUSEL ── */}
        <section className="sdp-carousel">
          <div className="sdp-carousel-header" data-aos="fade-up">
            <p className="sdp-carousel-eyebrow">Gallery</p>
            <h2 className="sdp-carousel-title">{service.carouselTitle}</h2>
            <p className="sdp-carousel-edition">{service.carouselEdition}</p>
            <p className="sdp-carousel-desc">{service.carouselDesc}</p>
          </div>

          <div className="sdp-carousel-stage" data-aos="zoom-in" data-aos-delay="100">
            <div
              className="sdp-carousel-film"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              {service.carouselImages.map((slide, i) => (
                <div key={i} className="sdp-carousel-slide">
                  <img
                    src={slide.src}
                    alt={`${service.title} — ${i + 1} of ${service.carouselImages.length}`}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="sdp-carousel-overlay" />
                  <div className="sdp-carousel-caption">
                    <span className="sdp-carousel-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="sdp-carousel-cap-text">{slide.caption}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="sdp-carousel-arrow prev" onClick={() => goTo(carouselIndex - 1)} aria-label="Previous image">
              <ChevronLeft size={20} color={THEME.forest} />
            </button>
            <button className="sdp-carousel-arrow next" onClick={() => goTo(carouselIndex + 1)} aria-label="Next image">
              <ChevronRight size={20} color={THEME.forest} />
            </button>
          </div>

          <div className="sdp-carousel-thumbs" data-aos="fade-up" data-aos-delay="150">
            {service.carouselImages.map((slide, i) => (
              <div
                key={i}
                className={`sdp-carousel-thumb${i === carouselIndex ? ' active' : ''}`}
                onClick={() => goTo(i)}
                role="button"
                aria-label={`View image ${i + 1}`}
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && goTo(i)}
              >
                <img src={slide.src.replace('w=1200', 'w=400')} alt="" />
                <div className="sdp-carousel-thumb-bar" />
              </div>
            ))}
          </div>

          <div className="sdp-carousel-dots" role="tablist" data-aos="fade-up" data-aos-delay="200">
            {service.carouselImages.map((_, i) => (
              <button
                key={i}
                className={`sdp-carousel-dot${i === carouselIndex ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Image ${i + 1}`}
                aria-selected={i === carouselIndex}
              />
            ))}
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="sdp-testimonial">
          <button className="sdp-testimonial-nav prev" aria-label="Previous testimonial">
            <ChevronLeft size={18} color="rgba(253,255,252,0.6)" />
          </button>
          <div data-aos="fade-up">
            <div className="sdp-testimonial-ornament">
              <span /><i>Client Stories</i><span />
            </div>
            <blockquote>
              <p className="sdp-testimonial-quote">{service.testimonial}</p>
              <footer className="sdp-testimonial-author">{service.testimonialAuthor}</footer>
            </blockquote>
          </div>
          <button className="sdp-testimonial-nav next" aria-label="Next testimonial">
            <ChevronRight size={18} color="rgba(253,255,252,0.6)" />
          </button>
        </section>

        {/* ── FAQ ── */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="sdp-faq">
            <div className="sdp-faq-inner">
              <p className="sdp-faq-eyebrow" data-aos="fade-up">Common Questions</p>
              <h2 className="sdp-faq-heading" data-aos="fade-up" data-aos-delay="80">
                Everything you need to know
              </h2>
              <p className="sdp-faq-subheading" data-aos="fade-up" data-aos-delay="140">
                A few answers to the questions we hear most often.
              </p>
              <div className="sdp-faq-list" data-aos="fade-up" data-aos-delay="180">
                {service.faqs.map((faq, i) => (
                  <FaqItem
                    key={i} faq={faq} index={i}
                    isOpen={openFaq === i}
                    onToggle={() => handleFaqToggle(i)}
                  />
                ))}
              </div>
              <div className="sdp-faq-cta" data-aos="fade-up" data-aos-delay="100">
                <p className="sdp-faq-cta-text">
                  Still have questions? <strong>We would love to hear from you.</strong>
                </p>
                <a href="/contact" className="sdp-faq-cta-link">
                  Get in Touch <ArrowRight size={11} />
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ── CTA DARK ── */}
        <section className="sdp-cta" id="contact">
          <p className="sdp-cta-eyebrow" data-aos="fade-up">Begin Your Journey</p>
          <h2 className="sdp-cta-title" data-aos="fade-up" data-aos-delay="100">
            Don't wait for <em>{service.ctaItalic1}</em>;<br />start <em>{service.ctaItalic2}</em>
          </h2>
          <p className="sdp-cta-sub" data-aos="fade-up" data-aos-delay="150">{service.ctaSubtitle}</p>
          <div data-aos="fade-up" data-aos-delay="200">
            <a href="/contact" className="sdp-cta-btn">
              Get in Touch <ArrowRight size={13} />
            </a>
          </div>
        </section>

      </div>
    </>
  );
};

export default ServiceDetailPage;