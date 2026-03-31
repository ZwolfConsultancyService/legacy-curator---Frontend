// import React, { useEffect, useRef } from "react";

// const steps = [
//   {
//     num: "01",
//     tag: "Curation",
//     color: "#36615A",
//     title: ["Select & Share Your", "Finest Moments"],
//     body: "Upload your chosen photos, memories, or manuscript. We accept all major formats and check everything instantly for print compatibility.",
//     details: [
//       "Photos, videos & written memories",
//       "Drag-and-drop or email upload",
//       "Instant format compatibility check",
//     ],
//     pin: "radial-gradient(circle at 35% 30%, #e06040, #c03020)",
//     rot: "-2deg",
//     side: "left",
//     bg: "#EAF0EE",
//   },
//   {
//     num: "02",
//     tag: "Design",
//     color: "#8B542B",
//     title: ["Artfully Designed", "by Experts"],
//     body: "Our designers lay out every page with intention — typography, spacing, image placement, and cover art are all crafted to complement your story.",
//     details: [
//       "Professional typesetting & layout",
//       "Custom cover design",
//       "Curated font & colour pairing",
//     ],
//     pin: "radial-gradient(circle at 35% 30%, #6090e0, #3060c0)",
//     rot: "2deg",
//     side: "right",
//     pinRight: true,
//     bg: "#F0EBE4",
//   },
//   {
//     num: "03",
//     tag: "Review",
//     color: "#A7703D",
//     title: ["Personalised Review", "& Approval"],
//     body: "Receive a full digital proof before anything goes to press. Review every page, request changes — we move only when you're completely happy.",
//     details: [
//       "Full digital proof delivered to you",
//       "Unlimited revision rounds",
//       "No print until you approve",
//     ],
//     pin: "radial-gradient(circle at 35% 30%, #9070d0, #6040a0)",
//     rot: "-1.5deg",
//     side: "left",
//     bg: "#EDE8F0",
//   },
//   {
//     num: "04",
//     tag: "Production",
//     color: "#36615A",
//     title: ["Precision Printing with", "Premium Materials"],
//     body: "Every page is calibrated for colour accuracy, sharpness, and feel — printed on archival paper that does your work the justice it deserves.",
//     details: [
//       "Archival-grade paper stocks",
//       "Multi-point quality inspection",
//       "Hardcover & softcover finishing",
//     ],
//     pin: "radial-gradient(circle at 35% 30%, #e08040, #b05020)",
//     rot: "2.5deg",
//     side: "right",
//     pinRight: true,
//     bg: "#EAF0EE",
//   },
//   {
//     num: "05",
//     tag: "Delivery",
//     color: "#8B542B",
//     title: ["Signature Packaging", "& Seamless Delivery"],
//     body: "Your finished book arrives wrapped in our signature packaging — beautiful from the outside in. Shipped worldwide, straight to your door or your readers.",
//     details: [
//       "Branded gift-ready packaging",
//       "Worldwide shipping — 50+ countries",
//       "Real-time tracking included",
//     ],
//     pin: "radial-gradient(circle at 35% 30%, #6090e0, #3060c0)",
//     rot: "-2deg",
//     side: "left",
//     bg: "#F0EBE4",
//   },
// ];

// export default function TrustPinboard() {
//   const cardRefs = useRef([]);
//   const svgRef = useRef(null);
//   const boardRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const delay = parseInt(entry.target.dataset.delay || 0) * 100;
//             setTimeout(() => entry.target.classList.add("visible"), delay);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.12 }
//     );
//     cardRefs.current.forEach((el) => el && observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   const drawConnectors = () => {
//     const svg = svgRef.current;
//     const board = boardRef.current;
//     if (!svg || !board) return;
//     svg.innerHTML = "";
//     const boardRect = board.getBoundingClientRect();

//     for (let i = 0; i < cardRefs.current.length - 1; i++) {
//       const a = cardRefs.current[i];
//       const b = cardRefs.current[i + 1];
//       if (!a || !b) continue;
//       const ar = a.getBoundingClientRect();
//       const br = b.getBoundingClientRect();
//       const x1 = ar.left + ar.width / 2 - boardRect.left;
//       const y1 = ar.bottom - boardRect.top - 8;
//       const x2 = br.left + br.width / 2 - boardRect.left;
//       const y2 = br.top - boardRect.top + 8;
//       const cy = (y1 + y2) / 2;
//       const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//       path.setAttribute("d", `M ${x1} ${y1} C ${x1} ${cy}, ${x2} ${cy}, ${x2} ${y2}`);
//       path.setAttribute("fill", "none");
//       path.setAttribute("stroke", "rgba(139,84,43,0.2)");
//       path.setAttribute("stroke-width", "1.5");
//       path.setAttribute("stroke-dasharray", "7 5");
//       path.setAttribute("stroke-linecap", "round");
//       svg.appendChild(path);
//     }
//   };

//   useEffect(() => {
//     const timer = setTimeout(drawConnectors, 300);
//     window.addEventListener("resize", drawConnectors);
//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener("resize", drawConnectors);
//     };
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Lora:ital,wght@0,400;1,400&family=DM+Sans:wght@300;400;500&display=swap');

//         :root {
//           --forest:    #36615A;
//           --saddle:    #8B542B;
//           --copper:    #A7703D;
//           --porcelain: #FDFFFC;
//           --warm-dark: #1a1410;
//           --muted:     #6a6058;
//         }

//         .pb-root {
//           background: #ffffff;
//           font-family: 'DM Sans', sans-serif;
//           padding: 64px 0 80px;
//           position: relative;
//           overflow: hidden;
//         }

//         .pb-root *, .pb-root *::before, .pb-root *::after {
//           box-sizing: border-box;
//         }

//         /* Dot grid */
//         .pb-root::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: radial-gradient(circle, rgba(139,112,60,0.12) 1px, transparent 1px);
//           background-size: 32px 32px;
//           pointer-events: none;
//           z-index: 0;
//         }

//         /* HEADER */
//         .pb-header {
//           text-align: center;
//           margin-bottom: 72px;
//           position: relative;
//           z-index: 2;
//           padding: 0 24px;
//         }

//         .pb-eyebrow {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           font-size: 11px;
//           font-weight: 500;
//           letter-spacing: 0.22em;
//           text-transform: uppercase;
//           color: var(--copper);
//           margin: 0 0 18px;
//         }
//         .pb-eyebrow::before, .pb-eyebrow::after {
//           content: '';
//           width: 28px; height: 1px;
//           background: var(--copper);
//           opacity: 0.45;
//           display: block;
//         }

//         .pb-title {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(32px, 5vw, 54px);
//           font-weight: 800;
//           line-height: 1.08;
//           letter-spacing: -0.025em;
//           color: var(--warm-dark);
//           margin: 0; padding: 0;
//         }
//         .pb-title em { font-style: italic; color: var(--forest); }

//         /* BOARD */
//         .pb-board {
//           position: relative;
//           z-index: 2;
//           width: 100%;
//         }

//         .pb-svg {
//           position: absolute;
//           top: 0; left: 0;
//           width: 100%; height: 100%;
//           pointer-events: none;
//           z-index: 1;
//           overflow: visible;
//         }

//         /* ROW */
//         .pb-row {
//           display: flex;
//           align-items: center;
//           position: relative;
//           min-height: 260px;
//           padding: 20px 0;
//         }
//         .pb-row.left  { justify-content: flex-start; padding-left: 48px; }
//         .pb-row.right { justify-content: flex-end;  padding-right: 48px; }

//         /* CARD */
//         .pb-card {
//           position: relative;
//           border-radius: 6px 20px 20px 20px;
//           padding: 44px 44px 40px;
//           width: min(560px, calc(100vw - 96px));
//           box-shadow:
//             0 8px 24px rgba(26,20,10,0.1),
//             0 2px 6px rgba(26,20,10,0.06),
//             inset 0 1px 0 rgba(255,255,255,0.85);
//           opacity: 0;
//           transform: translateY(28px) rotate(var(--rot));
//           transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.25s ease;
//           z-index: 2;
//         }

//         .pb-card.visible {
//           opacity: 1;
//           transform: translateY(0) rotate(var(--rot));
//         }

//         .pb-card:hover {
//           transform: translateY(-8px) rotate(0deg) scale(1.01) !important;
//           box-shadow:
//             0 28px 60px rgba(26,20,10,0.18),
//             0 8px 16px rgba(26,20,10,0.08),
//             inset 0 1px 0 rgba(255,255,255,0.9) !important;
//           z-index: 20 !important;
//         }

//         /* PIN */
//         .pb-pin {
//           position: absolute;
//           top: -18px;
//           width: 26px; height: 30px;
//           z-index: 5;
//         }
//         .pb-pin.pl { left: 36px; }
//         .pb-pin.pr { right: 36px; left: auto; }

//         .pb-pin-head {
//           width: 22px; height: 22px;
//           border-radius: 50%;
//           position: absolute;
//           top: 0; left: 2px;
//           box-shadow:
//             0 4px 10px rgba(0,0,0,0.4),
//             inset 0 -2px 4px rgba(0,0,0,0.25),
//             inset 0 2px 4px rgba(255,255,255,0.45);
//         }

//         .pb-pin-needle {
//           width: 3px; height: 14px;
//           border-radius: 0 0 2px 2px;
//           background: linear-gradient(to bottom, #c0c0c0, #888);
//           position: absolute;
//           bottom: -10px; left: 50%;
//           transform: translateX(-50%);
//         }

//         /* CARD INNER */
//         .pb-card-top {
//           display: flex;
//           align-items: flex-start;
//           justify-content: space-between;
//           margin-bottom: 20px;
//           gap: 16px;
//         }

//         .pb-card-left { flex: 1; }

//         .pb-tag-row {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           margin-bottom: 10px;
//         }

//         .pb-num {
//           font-family: 'Playfair Display', serif;
//           font-size: 13px;
//           font-weight: 700;
//           color: var(--copper);
//           letter-spacing: 0.1em;
//           opacity: 0.75;
//           margin: 0;
//         }

//         .pb-tag {
//           font-size: 10px;
//           font-weight: 500;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           padding: 3px 10px;
//           border-radius: 20px;
//           border: 1px solid currentColor;
//           opacity: 0.5;
//         }

//         .pb-card-title {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(20px, 2.6vw, 26px);
//           font-weight: 800;
//           line-height: 1.12;
//           color: var(--warm-dark);
//           letter-spacing: -0.02em;
//           margin: 0;
//         }
//         .pb-card-title em { font-style: italic; opacity: 0.65; }

//         .pb-watermark {
//           font-family: 'Playfair Display', serif;
//           font-size: 88px;
//           font-weight: 800;
//           line-height: 1;
//           letter-spacing: -0.06em;
//           color: rgba(26,20,10,0.06);
//           user-select: none;
//           flex-shrink: 0;
//           align-self: flex-start;
//           margin-top: -8px;
//         }

//         .pb-divider {
//           width: 100%;
//           height: 1px;
//           background: rgba(26,20,10,0.1);
//           margin: 20px 0;
//         }

//         .pb-card-body {
//           font-family: 'Lora', serif;
//           font-size: 14px;
//           line-height: 1.85;
//           color: var(--muted);
//           margin: 0 0 20px;
//         }

//         .pb-details {
//           display: flex;
//           flex-direction: column;
//           gap: 9px;
//         }

//         .pb-detail {
//           display: flex;
//           align-items: flex-start;
//           gap: 12px;
//           font-size: 12.5px;
//           font-weight: 400;
//           color: var(--warm-dark);
//           line-height: 1.5;
//         }

//         .pb-dot {
//           width: 5px; height: 5px;
//           border-radius: 50%;
//           flex-shrink: 0;
//           margin-top: 6px;
//         }

//         @media (max-width: 680px) {
//           .pb-row.left, .pb-row.right {
//             justify-content: center;
//             padding-left: 16px;
//             padding-right: 16px;
//           }
//           .pb-card { width: 100%; }
//           .pb-watermark { font-size: 60px; }
//         }
//       `}</style>

//       <div className="pb-root">
//         {/* HEADER */}
//         <div className="pb-header">
//           <p className="pb-eyebrow">Our Process</p>
//           <h1 className="pb-title">
//             From moments to <em>masterpiece.</em>
//           </h1>
//         </div>

//         {/* BOARD */}
//         <div className="pb-board" ref={boardRef}>
//           <svg ref={svgRef} className="pb-svg" />

//           {steps.map((s, i) => (
//             <div key={s.num} className={`pb-row ${s.side}`}>
//               <div
//                 className="pb-card"
//                 style={{ "--rot": s.rot, background: s.bg }}
//                 data-delay={i}
//                 ref={(el) => { cardRefs.current[i] = el; }}
//               >
//                 {/* Pin */}
//                 <div className={`pb-pin ${s.pinRight ? "pr" : "pl"}`}>
//                   <div className="pb-pin-head" style={{ background: s.pin }} />
//                   <div className="pb-pin-needle" />
//                 </div>

//                 <div className="pb-card-top">
//                   <div className="pb-card-left">
//                     <div className="pb-tag-row">
//                       <p className="pb-num">{s.num}</p>
//                       <span className="pb-tag" style={{ color: s.color }}>{s.tag}</span>
//                     </div>
//                     <h3 className="pb-card-title">
//                       {s.title[0]} <em>{s.title[1]}</em>
//                     </h3>
//                   </div>
//                   <div className="pb-watermark">{s.num}</div>
//                 </div>

//                 <div className="pb-divider" />

//                 <p className="pb-card-body">{s.body}</p>

//                 <div className="pb-details">
//                   {s.details.map((d) => (
//                     <div className="pb-detail" key={d}>
//                       <span className="pb-dot" style={{ background: s.color }} />
//                       {d}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState, useRef, useEffect } from "react";
import bgVideo from "../../../assets/video.mp4";

const steps = [
  {
    num: "01",
    tag: "Curation",
    color: "#36615A",
    title: ["Select & Share Your", "Finest Moments"],
    body: "Upload your chosen photos, memories, or manuscript. We accept all major formats and check everything instantly for print compatibility.",
    details: [
      "Photos, videos & written memories",
      "Drag-and-drop or email upload",
      "Instant format compatibility check",
    ],
    pin: "radial-gradient(circle at 35% 30%, #e06040, #c03020)",
    rot: "-2deg",
    bg: "rgba(234,240,238,0.82)",
  },
  {
    num: "02",
    tag: "Design",
    color: "#8B542B",
    title: ["Artfully Designed", "by Experts"],
    body: "Our designers lay out every page with intention — typography, spacing, image placement, and cover art are all crafted to complement your story.",
    details: [
      "Professional typesetting & layout",
      "Custom cover design",
      "Curated font & colour pairing",
    ],
    pin: "radial-gradient(circle at 35% 30%, #6090e0, #3060c0)",
    rot: "2deg",
    bg: "rgba(240,235,228,0.82)",
  },
  {
    num: "03",
    tag: "Review",
    color: "#A7703D",
    title: ["Personalised Review", "& Approval"],
    body: "Receive a full digital proof before anything goes to press. Review every page, request changes — we move only when you're completely happy.",
    details: [
      "Full digital proof delivered to you",
      "Unlimited revision rounds",
      "No print until you approve",
    ],
    pin: "radial-gradient(circle at 35% 30%, #9070d0, #6040a0)",
    rot: "-1.5deg",
    bg: "rgba(237,232,240,0.82)",
  },
  {
    num: "04",
    tag: "Production",
    color: "#36615A",
    title: ["Precision Printing with", "Premium Materials"],
    body: "Every page is calibrated for colour accuracy, sharpness, and feel — printed on archival paper that does your work the justice it deserves.",
    details: [
      "Archival-grade paper stocks",
      "Multi-point quality inspection",
      "Hardcover & softcover finishing",
    ],
    pin: "radial-gradient(circle at 35% 30%, #e08040, #b05020)",
    rot: "2.5deg",
    bg: "rgba(234,240,238,0.82)",
  },
  {
    num: "05",
    tag: "Delivery",
    color: "#8B542B",
    title: ["Signature Packaging", "& Seamless Delivery"],
    body: "Your finished book arrives wrapped in our signature packaging — beautiful from the outside in. Shipped worldwide, straight to your door or your readers.",
    details: [
      "Branded gift-ready packaging",
      "Worldwide shipping — 50+ countries",
      "Real-time tracking included",
    ],
    pin: "radial-gradient(circle at 35% 30%, #6090e0, #3060c0)",
    rot: "-2deg",
    bg: "rgba(240,235,228,0.82)",
  },
];

export default function TrustPinboard() {
  const [active, setActive]       = useState(0);
  const [phase, setPhase]         = useState("idle"); // 'idle' | 'out' | 'in'
  const [dir, setDir]             = useState("left"); // slide direction
  const [shown, setShown]         = useState(0);      // card currently rendered
  const animRef = useRef(false);

  const goTo = (idx) => {
    if (animRef.current || idx === active) return;
    animRef.current = true;
    const d = idx > active ? "left" : "right";
    setDir(d);
    setPhase("out");
    setTimeout(() => {
      setShown(idx);
      setActive(idx);
      setPhase("in");
      setTimeout(() => {
        setPhase("idle");
        animRef.current = false;
      }, 420);
    }, 320);
  };

  const prev = () => goTo(active > 0 ? active - 1 : steps.length - 1);
  const next = () => goTo(active < steps.length - 1 ? active + 1 : 0);

  // keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  // touch/swipe support
  const touchStartX = useRef(null);
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
    touchStartX.current = null;
  };

  const s = steps[shown];

  // animation class for the card
  const cardAnim =
    phase === "out" ? (dir === "left"  ? "pb-out-left"  : "pb-out-right") :
    phase === "in"  ? (dir === "left"  ? "pb-in-left"   : "pb-in-right")  :
    "";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Lora:ital,wght@0,400;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --copper:    #A7703D;
          --warm-dark: #1a1410;
          --muted:     #5a5248;
        }

        /* ── ROOT ── */
        .pb-root {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          padding: 60px 24px 72px;
        }
        .pb-root *, .pb-root *::before, .pb-root *::after { box-sizing: border-box; }

        /* ── VIDEO BG (fixed, no parallax) ── */
        .pb-vbg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }
        .pb-vbg video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .pb-vbg-ov {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(
            160deg,
            rgba(8,5,2,0.74)   0%,
            rgba(20,12,5,0.58) 50%,
            rgba(5,16,12,0.72) 100%
          );
        }
        .pb-vbg-dots {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,210,130,0.09) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        /* ── HEADER ── */
        .pb-header {
          position: relative; z-index: 10;
          text-align: center;
          margin-bottom: 44px;
        }
        .pb-eyebrow {
          display: inline-flex; align-items: center; gap: 12px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.24em;
          text-transform: uppercase; color: #d4a96a; margin: 0 0 14px;
        }
        .pb-eyebrow::before, .pb-eyebrow::after {
          content: ''; width: 30px; height: 1px; background: #d4a96a; opacity: 0.5;
        }
        .pb-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4.5vw, 52px); font-weight: 800;
          line-height: 1.08; letter-spacing: -0.025em;
          color: #fff; margin: 0;
          text-shadow: 0 4px 28px rgba(0,0,0,0.5);
        }
        .pb-title em { font-style: italic; color: #d4a96a; }

        /* ── SLIDER WRAP ── */
        .pb-slider {
          position: relative; z-index: 10;
          width: 100%;
          max-width: 640px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }

        /* ── PROGRESS BAR ── */
        .pb-bar {
          width: 100%; height: 2px;
          background: rgba(255,255,255,0.12);
          border-radius: 2px; overflow: hidden;
        }
        .pb-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #d4a96a, #a7703d);
          border-radius: 2px;
          transition: width 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        /* ── CARD STAGE ── */
        .pb-stage {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        /* ── CARD ── */
        .pb-card {
          width: 100%;
          border-radius: 6px 20px 20px 20px;
          padding: 50px 50px 46px;
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow:
            0 12px 48px rgba(0,0,0,0.42),
            0 3px 10px rgba(0,0,0,0.22),
            inset 0 1px 0 rgba(255,255,255,0.75);
          backdrop-filter: blur(22px) saturate(1.6);
          -webkit-backdrop-filter: blur(22px) saturate(1.6);
          position: relative;
          transform: rotate(var(--rot));
          transition: box-shadow 0.28s ease;
        }
        .pb-card:hover {
          transform: rotate(0deg) translateY(-6px) scale(1.012);
          box-shadow:
            0 32px 72px rgba(0,0,0,0.52),
            0 8px 20px rgba(0,0,0,0.26),
            inset 0 1px 0 rgba(255,255,255,0.85);
        }

        /* slide animations */
        .pb-out-left  { animation: outLeft  0.30s cubic-bezier(0.4,0,1,1)   forwards; }
        .pb-out-right { animation: outRight 0.30s cubic-bezier(0.4,0,1,1)   forwards; }
        .pb-in-left   { animation: inLeft   0.42s cubic-bezier(0,0,0.2,1)   forwards; }
        .pb-in-right  { animation: inRight  0.42s cubic-bezier(0,0,0.2,1)   forwards; }

        @keyframes outLeft  { to { opacity:0; transform: translateX(-72px) rotate(var(--rot)) scale(0.94); } }
        @keyframes outRight { to { opacity:0; transform: translateX(72px)  rotate(var(--rot)) scale(0.94); } }
        @keyframes inLeft   { from { opacity:0; transform: translateX(72px)  rotate(var(--rot)) scale(0.94); } to { opacity:1; transform: translateX(0) rotate(var(--rot)); } }
        @keyframes inRight  { from { opacity:0; transform: translateX(-72px) rotate(var(--rot)) scale(0.94); } to { opacity:1; transform: translateX(0) rotate(var(--rot)); } }

        /* ── PIN ── */
        .pb-pin {
          position: absolute; top: -18px; left: 36px;
          width: 26px; height: 30px; z-index: 5;
        }
        .pb-pin-head {
          width: 22px; height: 22px; border-radius: 50%;
          position: absolute; top: 0; left: 2px;
          box-shadow:
            0 4px 12px rgba(0,0,0,0.55),
            inset 0 -2px 4px rgba(0,0,0,0.30),
            inset 0 2px 5px rgba(255,255,255,0.45);
        }
        .pb-pin-needle {
          width: 3px; height: 14px; border-radius: 0 0 2px 2px;
          background: linear-gradient(to bottom, #c8c8c8, #888);
          position: absolute; bottom: -10px; left: 50%;
          transform: translateX(-50%);
        }

        /* ── CARD CONTENT ── */
        .pb-card-top {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 16px; margin-bottom: 20px;
        }
        .pb-card-left { flex: 1; }
        .pb-tag-row   { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
        .pb-num {
          font-family: 'Playfair Display', serif;
          font-size: 13px; font-weight: 700; color: var(--copper);
          letter-spacing: 0.1em; opacity: 0.85; margin: 0;
        }
        .pb-tag {
          font-size: 10px; font-weight: 500; letter-spacing: 0.18em;
          text-transform: uppercase; padding: 3px 10px; border-radius: 20px;
          border: 1px solid currentColor; opacity: 0.55;
        }
        .pb-card-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(20px, 2.8vw, 27px); font-weight: 800;
          line-height: 1.12; color: var(--warm-dark); letter-spacing: -0.02em; margin: 0;
        }
        .pb-card-title em { font-style: italic; opacity: 0.60; }
        .pb-watermark {
          font-family: 'Playfair Display', serif;
          font-size: 90px; font-weight: 800; line-height: 1;
          letter-spacing: -0.06em; color: rgba(26,20,10,0.07);
          user-select: none; flex-shrink: 0; align-self: flex-start; margin-top: -8px;
        }
        .pb-divider { width:100%; height:1px; background:rgba(26,20,10,0.10); margin: 20px 0; }
        .pb-body {
          font-family: 'Lora', serif; font-size: 14.5px;
          line-height: 1.88; color: var(--muted); margin: 0 0 22px;
        }
        .pb-details { display: flex; flex-direction: column; gap: 9px; }
        .pb-detail  {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: 12.5px; font-weight: 400; color: var(--warm-dark); line-height: 1.5;
        }
        .pb-dot { width:5px; height:5px; border-radius:50%; flex-shrink:0; margin-top:6px; }

        /* ── BOTTOM CONTROLS ── */
        .pb-controls {
          display: flex; align-items: center; gap: 20px;
        }
        .pb-arrow {
          width: 48px; height: 48px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          color: #fff; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, transform 0.18s, border-color 0.2s;
        }
        .pb-arrow:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.45);
          transform: scale(1.08);
        }
        .pb-arrow:active { transform: scale(0.94); }
        .pb-arrow svg { width:18px; height:18px; stroke:currentColor; stroke-width:2; fill:none; stroke-linecap:round; stroke-linejoin:round; }

        .pb-pips { display:flex; align-items:center; gap:8px; }
        .pb-pip {
          height: 8px; border-radius: 4px;
          border: none; padding: 0; cursor: pointer;
          background: rgba(255,255,255,0.28);
          transition: background 0.24s, width 0.32s cubic-bezier(0.22,1,0.36,1);
          width: 8px;
        }
        .pb-pip.on {
          background: #d4a96a;
          width: 26px;
        }

        /* ── STEP COUNTER ── */
        .pb-counter {
          font-family: 'Playfair Display', serif;
          font-size: 13px; color: rgba(255,255,255,0.45);
          letter-spacing: 0.08em; min-width: 36px; text-align: center;
        }

        @media (max-width: 600px) {
          .pb-card { padding: 38px 28px 34px; }
          .pb-watermark { font-size: 64px; }
        }
      `}</style>

      <div className="pb-root">

        {/* ── VIDEO BACKGROUND ── */}
        <div className="pb-vbg">
          <video autoPlay muted loop playsInline>
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="pb-vbg-ov" />
          <div className="pb-vbg-dots" />
        </div>

        {/* ── HEADER ── */}
        <div className="pb-header">
          <p className="pb-eyebrow">Our Process</p>
          <h1 className="pb-title">From moments to <em>masterpiece.</em></h1>
        </div>

        {/* ── SLIDER ── */}
        <div className="pb-slider">

          {/* Progress bar */}
          <div className="pb-bar">
            <div className="pb-bar-fill" style={{ width: `${((active + 1) / steps.length) * 100}%` }} />
          </div>

          {/* Card stage */}
          <div
            className="pb-stage"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              key={shown}
              className={`pb-card ${cardAnim}`}
              style={{ "--rot": s.rot, background: s.bg }}
            >
              {/* Pin */}
              <div className="pb-pin">
                <div className="pb-pin-head" style={{ background: s.pin }} />
                <div className="pb-pin-needle" />
              </div>

              {/* Card top */}
              <div className="pb-card-top">
                <div className="pb-card-left">
                  <div className="pb-tag-row">
                    <p className="pb-num">{s.num}</p>
                    <span className="pb-tag" style={{ color: s.color }}>{s.tag}</span>
                  </div>
                  <h3 className="pb-card-title">
                    {s.title[0]} <em>{s.title[1]}</em>
                  </h3>
                </div>
                <div className="pb-watermark">{s.num}</div>
              </div>

              <div className="pb-divider" />
              <p className="pb-body">{s.body}</p>

              <div className="pb-details">
                {s.details.map((d) => (
                  <div className="pb-detail" key={d}>
                    <span className="pb-dot" style={{ background: s.color }} />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="pb-controls">
            <button className="pb-arrow" onClick={prev} aria-label="Previous">
              <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
            </button>

            <div className="pb-pips">
              {steps.map((_, i) => (
                <button
                  key={i}
                  className={`pb-pip${active === i ? " on" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Step ${i + 1}`}
                />
              ))}
            </div>

            <button className="pb-arrow" onClick={next} aria-label="Next">
              <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>

          {/* Step counter */}
          <div className="pb-counter">{active + 1} / {steps.length}</div>

        </div>
      </div>
    </>
  );
}