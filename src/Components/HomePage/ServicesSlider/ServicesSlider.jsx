// import React, { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Coffee from "../../../assets/stories/CoffeeTableBooks.jpeg";
// import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, BookOpen, Users, Briefcase, Heart } from "lucide-react";

// import img1 from "../../../assets/stories/FamilyLegacy.jpg";
// import img2 from "../../../assets/stories/Business.jpeg";
// import img3 from "../../../assets/stories/Devotional.jpeg";
// import img4 from "../../../assets/stories/Individual.png";

// const THEME = {
//   copper: "#8B6A3E",
//   copperLight: "#B8935F",
//   copperDark: "#6B4F2A",
//   ink: "#1E2B24",
//   inkLight: "#5C665F",
//   porcelain: "#F6F2EC",
//   cream: "#FBF9F5",
//   gold: "#C9A961",
// };

// const ServicesCards = () => {
//   const parent = {
//     title: "Coffee Table Books",
//     tagline: "Art You Can Hold.",
//     description:
//       "Not a photo album. An heirloom. Each book is hand-bound on archival paper, designed by storytellers, and built to sit on coffee tables for fifty years — not fade in a phone gallery in five.",
//     image: Coffee,
//     path: "/services/coffee-table",
//     stats: [
//       { value: "500+", label: "Books Crafted" },
//       { value: "12", label: "Craft Days" },
//       { value: "50yr", label: "Archival Life" },
//     ],
//   };

//   const editions = [
//     {
//       number: "01",
//       title: "Family Legacy Book",
//       short: "Family Legacy",
//       tagline: "Because your family's story shouldn't end with you.",
//       image: img1,
//       path: "/services/coffee-table-family-legacy-book",
//       icon: Users,
//     },
//     {
//       number: "02",
//       title: "Business Story Book",
//       short: "Business Story",
//       tagline: "Your brand built an empire. Give it a book it deserves.",
//       image: img2,
//       path: "/services/coffee-table-business-story-book",
//       icon: Briefcase,
//     },
//     {
//       number: "03",
//       title: "Devotional Book",
//       short: "Devotional",
//       tagline: "Some faith is too sacred to stay only in memory.",
//       image: img3,
//       path: "/services/coffee-table-devotional-book",
//       icon: Heart,
//     },
//     {
//       number: "04",
//       title: "Individual Legacy Book",
//       short: "Individual Legacy",
//       tagline: "One life. One story. One book that outlives you.",
//       image: img4,
//       path: "/services/coffee-table-individual-legacy-book",
//       icon: BookOpen,
//     },
//   ];

//   const EditionCarousel = ({ editions }) => {
//     const trackRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [canScrollLeft, setCanScrollLeft] = useState(false);
//     const [canScrollRight, setCanScrollRight] = useState(true);

//     const checkScroll = () => {
//       const track = trackRef.current;
//       if (!track) return;
//       setCanScrollLeft(track.scrollLeft > 10);
//       setCanScrollRight(
//         track.scrollLeft < track.scrollWidth - track.clientWidth - 10
//       );
//       const card = track.querySelector(".edition-card");
//       if (card) {
//         const cardW = card.offsetWidth + 32;
//         const idx = Math.round(track.scrollLeft / cardW);
//         setActiveIndex(Math.min(idx, editions.length - 1));
//       }
//     };

//     useEffect(() => {
//       checkScroll();
//       const track = trackRef.current;
//       if (track) {
//         track.addEventListener("scroll", checkScroll);
//         return () => track.removeEventListener("scroll", checkScroll);
//       }
//     }, []);

//     const scrollByCard = (dir) => {
//       const track = trackRef.current;
//       if (!track) return;
//       const card = track.querySelector(".edition-card");
//       const cardWidth = card ? card.offsetWidth + 32 : 340;
//       track.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
//     };

//     const scrollToIndex = (i) => {
//       const track = trackRef.current;
//       if (!track) return;
//       const card = track.querySelectorAll(".edition-card")[i];
//       if (card) {
//         track.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
//       }
//     };

//     return (
//       <div className="edition-carousel">
//         <div ref={trackRef} className="edition-track">
//           {editions.map((ed, i) => {
//             const Icon = ed.icon;
//             const isActive = i === activeIndex;
//             return (
//               <Link
//                 key={ed.path}
//                 to={ed.path}
//                 className={`edition-card ${isActive ? "is-active" : ""}`}
//               >
//                 <div className="edition-media">
//                   <img className="edition-img" src={ed.image} alt={ed.title} loading="lazy" />
//                   <div className="edition-gradient" />
//                   <div className="edition-grain" />

//                   <div className="edition-top">
//                     <span className="edition-icon">
//                       <Icon size={16} strokeWidth={1.8} />
//                     </span>
//                     <span className="edition-num">{ed.number}</span>
//                   </div>

//                   <div className="edition-cta-bubble">
//                     <ArrowUpRight size={18} strokeWidth={2} />
//                   </div>
//                 </div>

//                 <div className="edition-body">
//                   <span className="edition-mini">EDITION {ed.number}</span>
//                   <h4 className="edition-name">{ed.title}</h4>
//                   <p className="edition-line">{ed.tagline}</p>

//                   <span className="edition-link">
//                     Explore
//                     <span className="link-arrow">→</span>
//                   </span>
//                 </div>

//                 <div className="edition-halo" />
//               </Link>
//             );
//           })}
//         </div>

//         <div className="edition-controls">
//           <button
//             className={`edition-arrow-btn ${!canScrollLeft ? "disabled" : ""}`}
//             onClick={() => scrollByCard(-1)}
//             aria-label="Previous"
//           >
//             <ChevronLeft size={20} strokeWidth={2} />
//           </button>

//           <div className="edition-dots">
//             {editions.map((_, i) => (
//               <button
//                 key={i}
//                 className={`edition-dot ${i === activeIndex ? "active" : ""}`}
//                 onClick={() => scrollToIndex(i)}
//                 aria-label={`Go to edition ${i + 1}`}
//               />
//             ))}
//           </div>

//           <button
//             className={`edition-arrow-btn ${!canScrollRight ? "disabled" : ""}`}
//             onClick={() => scrollByCard(1)}
//             aria-label="Next"
//           >
//             <ChevronRight size={20} strokeWidth={2} />
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700;800&display=swap');

//         * { box-sizing: border-box; }

//         /* =========================================
//            ROOT
//         ========================================= */
//         .svx {
//           position: relative;
//           background: #0f1411;
//           color: #FBF9F5;
//           padding: 130px 0 0;
//           overflow: hidden;
//           font-family: 'Inter', sans-serif;
//           isolation: isolate;
//         }

//         /* Ambient gradient orbs */
//         .svx::before {
//           content: "";
//           position: absolute;
//           top: -10%; left: -5%;
//           width: 700px; height: 700px;
//           background: radial-gradient(circle, rgba(201,169,97,.18), transparent 65%);
//           filter: blur(60px);
//           z-index: 0;
//           pointer-events: none;
//         }

//         .svx::after {
//           content: "";
//           position: absolute;
//           top: 40%; right: -10%;
//           width: 800px; height: 800px;
//           background: radial-gradient(circle, rgba(139,106,62,.14), transparent 65%);
//           filter: blur(70px);
//           z-index: 0;
//           pointer-events: none;
//         }

//         /* Fine grid texture */
//         .svx-grid {
//           position: absolute;
//           inset: 0;
//           background-image:
//             linear-gradient(rgba(201,169,97,.035) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(201,169,97,.035) 1px, transparent 1px);
//           background-size: 90px 90px;
//           mask-image: radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%);
//           -webkit-mask-image: radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%);
//           pointer-events: none;
//           z-index: 1;
//         }

//         .svx-inner {
//           position: relative;
//           z-index: 2;
//         }

//         /* =========================================
//            HEADER
//         ========================================= */
//         .svx-head {
//           max-width: 1000px;
//           margin: 0 auto 100px;
//           padding: 0 40px;
//           text-align: center;
//         }

//         .svx-eyebrow {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           margin: 0 0 30px;
//           padding: 9px 18px;
//           border-radius: 999px;
//           background: rgba(201,169,97,.08);
//           border: 1px solid rgba(201,169,97,.2);
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: .28em;
//           text-transform: uppercase;
//           color: ${THEME.gold};
//         }

//         .svx-eyebrow-dot {
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background: ${THEME.gold};
//           box-shadow: 0 0 12px ${THEME.gold};
//           animation: svx-pulse 2s ease-in-out infinite;
//         }

//         @keyframes svx-pulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: .55; transform: scale(.8); }
//         }

//         .svx-title {
//           margin: 0;
//           font-family: "Cormorant Garamond", serif;
//           font-size: clamp(52px, 7vw, 104px);
//           font-weight: 500;
//           line-height: .92;
//           letter-spacing: -.045em;
//           color: #FBF9F5;
//         }

//         .svx-title em {
//           font-style: italic;
//           font-weight: 400;
//           color: ${THEME.gold};
//           position: relative;
//           display: inline-block;
//         }

//         .svx-title em::after {
//           content: "";
//           position: absolute;
//           left: 5%; right: 5%;
//           bottom: 8px;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, ${THEME.gold}, transparent);
//           opacity: .6;
//         }

//         .svx-sub {
//           max-width: 620px;
//           margin: 32px auto 0;
//           font-size: 15px;
//           line-height: 1.85;
//           color: rgba(251,249,245,.6);
//           font-weight: 300;
//         }

//         /* =========================================
//            PARENT — CINEMATIC FULL-WIDTH BANNER
//         ========================================= */
//         .parent-cinema {
//           position: relative;
//           max-width: 1360px;
//           margin: 0 auto;
//           padding: 0 40px;
//         }

//         .parent-banner {
//           position: relative;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           min-height: 640px;
//           border-radius: 44px;
//           overflow: hidden;
//           background: #1a1f1c;
//           border: 1px solid rgba(201,169,97,.18);
//           box-shadow:
//             0 60px 130px -50px rgba(0,0,0,.7),
//             0 0 0 1px rgba(255,255,255,.02) inset;
//         }

//         /* Left — image side with overlay copy */
//         .parent-visual {
//           position: relative;
//           overflow: hidden;
//           background: #0a0a0a;
//         }

//         .parent-visual img {
//           position: absolute;
//           inset: 0;
//           width: 100%; height: 100%;
//           object-fit: cover;
//           transform: scale(1.02);
//           transition: transform 1.6s cubic-bezier(.2,.7,.2,1);
//           filter: brightness(.85) saturate(.95);
//         }

//         .parent-banner:hover .parent-visual img {
//           transform: scale(1.08);
//           filter: brightness(.75) saturate(1);
//         }

//         .parent-visual::after {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background:
//             linear-gradient(180deg, rgba(15,20,17,.35) 0%, transparent 30%, transparent 45%, rgba(15,20,17,.85) 100%),
//             linear-gradient(90deg, transparent 55%, rgba(15,20,17,.6));
//         }

//         /* Floating meta on image */
//         .parent-float {
//           position: absolute;
//           z-index: 2;
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//         }

//         .parent-float.top-left {
//           top: 32px; left: 32px;
//         }

//         .parent-float.bottom-left {
//           bottom: 34px; left: 36px;
//           right: 36px;
//         }

//         .parent-tag {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           width: fit-content;
//           padding: 8px 14px;
//           border-radius: 999px;
//           background: rgba(15,20,17,.7);
//           backdrop-filter: blur(12px);
//           -webkit-backdrop-filter: blur(12px);
//           border: 1px solid rgba(201,169,97,.3);
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: .22em;
//           text-transform: uppercase;
//           color: ${THEME.gold};
//         }

//         .parent-float-title {
//           font-family: "Cormorant Garamond", serif;
//           font-size: clamp(34px, 3.6vw, 54px);
//           font-weight: 500;
//           line-height: .95;
//           letter-spacing: -.03em;
//           color: #FBF9F5;
//         }

//         .parent-float-sub {
//           font-family: "Cormorant Garamond", serif;
//           font-size: 18px;
//           font-style: italic;
//           color: ${THEME.gold};
//           margin-top: 4px;
//         }

//         /* Right — content side */
//         .parent-panel {
//           position: relative;
//           padding: 70px 60px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           background:
//             radial-gradient(circle at 90% 10%, rgba(201,169,97,.13), transparent 45%),
//             linear-gradient(180deg, #181d1a 0%, #121614 100%);
//           overflow: hidden;
//         }

//         .parent-panel::before {
//           content: "PARENT";
//           position: absolute;
//           top: 30px; right: 40px;
//           font-family: "Cormorant Garamond", serif;
//           font-size: 90px;
//           font-weight: 600;
//           letter-spacing: -.04em;
//           color: rgba(201,169,97,.06);
//           pointer-events: none;
//           line-height: 1;
//         }

//         .parent-kicker {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           margin-bottom: 26px;
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: .3em;
//           color: ${THEME.gold};
//         }

//         .parent-kicker-bar {
//           width: 30px;
//           height: 1px;
//           background: ${THEME.gold};
//           opacity: .7;
//         }

//         .parent-heading {
//           margin: 0 0 28px;
//           font-family: "Cormorant Garamond", serif;
//           font-size: clamp(40px, 4.2vw, 62px);
//           font-weight: 500;
//           line-height: 1;
//           letter-spacing: -.035em;
//           color: #FBF9F5;
//         }

//         .parent-copy {
//           max-width: 480px;
//           margin: 0 0 40px;
//           font-size: 14.5px;
//           line-height: 1.95;
//           color: rgba(251,249,245,.55);
//           font-weight: 300;
//         }

//         /* Stats row */
//         .parent-metrics {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 0;
//           margin-bottom: 42px;
//           border-top: 1px solid rgba(201,169,97,.15);
//           border-bottom: 1px solid rgba(201,169,97,.15);
//           padding: 24px 0;
//         }

//         .parent-metric {
//           padding: 0 20px;
//           border-right: 1px solid rgba(201,169,97,.12);
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//         }

//         .parent-metric:last-child { border-right: none; }
//         .parent-metric:first-child { padding-left: 0; }

//         .parent-metric strong {
//           font-family: "Cormorant Garamond", serif;
//           font-size: 32px;
//           font-weight: 600;
//           color: ${THEME.gold};
//           line-height: 1;
//         }

//         .parent-metric span {
//           font-size: 9px;
//           font-weight: 600;
//           letter-spacing: .14em;
//           text-transform: uppercase;
//           color: rgba(251,249,245,.45);
//         }

//         /* CTA */
//         .parent-btn {
//           position: relative;
//           width: fit-content;
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           padding: 18px 30px;
//           border-radius: 999px;
//           background: ${THEME.gold};
//           color: #0f1411;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: .16em;
//           text-transform: uppercase;
//           text-decoration: none;
//           overflow: hidden;
//           transition: transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s ease;
//           box-shadow: 0 20px 45px -15px rgba(201,169,97,.5);
//         }

//         .parent-btn span {
//           position: relative;
//           z-index: 2;
//         }

//         .parent-btn::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg, #FBF9F5, ${THEME.gold});
//           opacity: 0;
//           transition: opacity .4s ease;
//         }

//         .parent-btn:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 28px 60px -15px rgba(201,169,97,.7);
//         }

//         .parent-btn:hover::before { opacity: 1; }

//         /* =========================================
//            CONNECTOR — Verticle "family tree" line
//         ========================================= */
//         .tree-link {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           padding: 70px 0 55px;
//           position: relative;
//         }

//         .tree-line {
//           width: 1px;
//           height: 70px;
//           background: linear-gradient(180deg, transparent, rgba(201,169,97,.6), transparent);
//         }

//         .tree-node {
//           width: 14px;
//           height: 14px;
//           border-radius: 50%;
//           background: ${THEME.gold};
//           position: relative;
//           box-shadow:
//             0 0 0 4px rgba(15,20,17,1),
//             0 0 0 5px rgba(201,169,97,.4),
//             0 0 20px ${THEME.gold};
//           margin: -1px 0;
//         }

//         .tree-node::after {
//           content: "";
//           position: absolute;
//           inset: -8px;
//           border-radius: 50%;
//           border: 1px solid rgba(201,169,97,.35);
//           animation: tree-ring 2.5s ease-out infinite;
//         }

//         @keyframes tree-ring {
//           0% { transform: scale(.7); opacity: 1; }
//           100% { transform: scale(1.8); opacity: 0; }
//         }

//         .tree-label {
//           margin-top: 26px;
//           padding: 10px 22px;
//           border-radius: 999px;
//           background: rgba(201,169,97,.08);
//           border: 1px solid rgba(201,169,97,.28);
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: .32em;
//           text-transform: uppercase;
//           color: ${THEME.gold};
//           backdrop-filter: blur(10px);
//         }

//         /* =========================================
//            CHILDREN SECTION HEADER
//         ========================================= */
//         .children-head {
//           max-width: 760px;
//           margin: 0 auto 60px;
//           padding: 0 30px;
//           text-align: center;
//         }

//         .children-kicker {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           margin-bottom: 22px;
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: .3em;
//           color: ${THEME.gold};
//           text-transform: uppercase;
//         }

//         .children-kicker::before,
//         .children-kicker::after {
//           content: "";
//           width: 30px;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, ${THEME.gold}, transparent);
//         }

//         .children-title {
//           margin: 0;
//           font-family: "Cormorant Garamond", serif;
//           font-size: clamp(38px, 4.4vw, 60px);
//           font-weight: 500;
//           line-height: 1;
//           letter-spacing: -.03em;
//           color: #FBF9F5;
//         }

//         .children-title em {
//           font-style: italic;
//           font-weight: 400;
//           color: ${THEME.gold};
//         }

//         .children-sub {
//           max-width: 520px;
//           margin: 22px auto 0;
//           font-size: 13.5px;
//           line-height: 1.85;
//           color: rgba(251,249,245,.5);
//           font-weight: 300;
//         }

//         /* =========================================
//            EDITION CAROUSEL
//         ========================================= */
//         .edition-carousel {
//           position: relative;
//           max-width: 1360px;
//           margin: 0 auto;
//           padding: 0 40px;
//         }

//         .edition-track {
//           display: flex;
//           gap: 28px;
//           overflow-x: auto;
//           padding: 30px 4px 40px;
//           scroll-snap-type: x mandatory;
//           scrollbar-width: none;
//           -ms-overflow-style: none;
//         }

//         .edition-track::-webkit-scrollbar { display: none; }

//         .edition-card {
//           position: relative;
//           flex: 0 0 calc((100% - 84px) / 4);
//           min-width: 270px;
//           text-decoration: none;
//           color: inherit;
//           scroll-snap-align: start;
//           transition: transform .5s cubic-bezier(.2,.7,.2,1);
//         }

//         .edition-card:hover {
//           transform: translateY(-12px);
//         }

//         .edition-media {
//           position: relative;
//           height: 400px;
//           overflow: hidden;
//           border-radius: 28px;
//           background: #0a0a0a;
//           border: 1px solid rgba(201,169,97,.15);
//           box-shadow:
//             0 30px 60px -25px rgba(0,0,0,.6),
//             0 0 0 1px rgba(255,255,255,.02) inset;
//         }

//         .edition-card.is-active .edition-media {
//           border-color: rgba(201,169,97,.45);
//           box-shadow:
//             0 35px 70px -25px rgba(0,0,0,.7),
//             0 0 40px -10px rgba(201,169,97,.35),
//             0 0 0 1px rgba(201,169,97,.2) inset;
//         }

//         .edition-img {
//           width: 100%; height: 100%;
//           display: block;
//           object-fit: cover;
//           transition: transform 1s cubic-bezier(.2,.7,.2,1), filter .5s ease;
//           filter: brightness(.8) saturate(.95);
//         }

//         .edition-card:hover .edition-img {
//           transform: scale(1.08);
//           filter: brightness(.9) saturate(1.05);
//         }

//         .edition-gradient {
//           position: absolute;
//           inset: 0;
//           background:
//             linear-gradient(180deg, rgba(15,20,17,.3) 0%, transparent 35%, transparent 50%, rgba(15,20,17,.92) 100%);
//           pointer-events: none;
//         }

//         .edition-grain {
//           position: absolute;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E");
//           opacity: .12;
//           mix-blend-mode: overlay;
//           pointer-events: none;
//         }

//         .edition-top {
//           position: absolute;
//           top: 20px; left: 20px; right: 20px;
//           z-index: 2;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }

//         .edition-icon {
//           width: 40px; height: 40px;
//           display: flex; align-items: center; justify-content: center;
//           border-radius: 12px;
//           background: rgba(15,20,17,.7);
//           backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//           border: 1px solid rgba(201,169,97,.3);
//           color: ${THEME.gold};
//         }

//         .edition-num {
//           font-family: "Cormorant Garamond", serif;
//           font-size: 22px;
//           font-weight: 500;
//           color: rgba(251,249,245,.85);
//           letter-spacing: .05em;
//         }

//         .edition-cta-bubble {
//           position: absolute;
//           right: 18px; bottom: 18px;
//           z-index: 3;
//           width: 52px; height: 52px;
//           display: flex; align-items: center; justify-content: center;
//           border-radius: 50%;
//           background: ${THEME.gold};
//           color: #0f1411;
//           transform: translateY(10px) scale(.85);
//           opacity: 0;
//           transition: all .45s cubic-bezier(.2,.7,.2,1);
//           box-shadow: 0 15px 30px rgba(201,169,97,.5);
//         }

//         .edition-card:hover .edition-cta-bubble {
//           opacity: 1;
//           transform: translateY(0) scale(1);
//         }

//         /* Halo glow behind active card */
//         .edition-halo {
//           position: absolute;
//           inset: -20px;
//           border-radius: 40px;
//           background: radial-gradient(circle, rgba(201,169,97,.25), transparent 65%);
//           opacity: 0;
//           transition: opacity .5s ease;
//           z-index: -1;
//           filter: blur(25px);
//           pointer-events: none;
//         }

//         .edition-card:hover .edition-halo { opacity: 1; }

//         .edition-body {
//           padding: 26px 6px 0;
//         }

//         .edition-mini {
//           display: inline-block;
//           margin-bottom: 10px;
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: .28em;
//           color: ${THEME.gold};
//         }

//         .edition-name {
//           margin: 0;
//           font-family: "Cormorant Garamond", serif;
//           font-size: 28px;
//           font-weight: 500;
//           line-height: 1.05;
//           letter-spacing: -.02em;
//           color: #FBF9F5;
//           transition: color .3s ease;
//         }

//         .edition-card:hover .edition-name { color: ${THEME.gold}; }

//         .edition-line {
//           margin: 10px 0 0;
//           font-family: "Cormorant Garamond", serif;
//           font-size: 15px;
//           font-style: italic;
//           line-height: 1.55;
//           color: rgba(251,249,245,.55);
//         }

//         .edition-link {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           margin-top: 18px;
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: .2em;
//           text-transform: uppercase;
//           color: rgba(251,249,245,.5);
//           transition: all .35s ease;
//         }

//         .link-arrow {
//           transition: transform .35s ease;
//           font-size: 13px;
//         }

//         .edition-card:hover .edition-link {
//           color: ${THEME.gold};
//           gap: 12px;
//         }

//         .edition-card:hover .link-arrow {
//           transform: translateX(4px);
//         }

//         /* =========================================
//            CAROUSEL CONTROLS
//         ========================================= */
//         .edition-controls {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 30px;
//           margin-top: 40px;
//           padding-bottom: 110px;
//         }

//         .edition-arrow-btn {
//           width: 52px; height: 52px;
//           display: flex; align-items: center; justify-content: center;
//           border-radius: 50%;
//           background: rgba(201,169,97,.06);
//           border: 1px solid rgba(201,169,97,.28);
//           color: ${THEME.gold};
//           cursor: pointer;
//           transition: all .35s cubic-bezier(.2,.7,.2,1);
//         }

//         .edition-arrow-btn:hover:not(.disabled) {
//           background: ${THEME.gold};
//           color: #0f1411;
//           border-color: ${THEME.gold};
//           transform: scale(1.08);
//           box-shadow: 0 15px 35px -10px rgba(201,169,97,.6);
//         }

//         .edition-arrow-btn.disabled {
//           opacity: .3;
//           cursor: not-allowed;
//         }

//         .edition-dots {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }

//         .edition-dot {
//           width: 30px;
//           height: 3px;
//           border-radius: 3px;
//           border: none;
//           padding: 0;
//           background: rgba(201,169,97,.22);
//           cursor: pointer;
//           transition: all .4s cubic-bezier(.2,.7,.2,1);
//         }

//         .edition-dot.active {
//           background: ${THEME.gold};
//           width: 50px;
//           box-shadow: 0 0 12px rgba(201,169,97,.7);
//         }

//         /* =========================================
//            FOOT
//         ========================================= */
//         .svx-foot {
//           padding: 45px 0 90px;
//           text-align: center;
//           position: relative;
//         }

//         .svx-foot-line {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 18px;
//         }

//         .svx-foot-bar {
//           width: 50px;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(201,169,97,.4), transparent);
//         }

//         .svx-foot span:not(.svx-foot-bar) {
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: .35em;
//           color: rgba(251,249,245,.4);
//         }

//         /* =========================================
//            TABLET
//         ========================================= */
//         @media (max-width: 1024px) {
//           .parent-banner { grid-template-columns: 1fr; min-height: auto; }
//           .parent-visual { min-height: 460px; }
//           .parent-panel { padding: 55px 45px; }

//           .edition-card { flex-basis: calc((100% - 28px) / 2); }
//         }

//         /* =========================================
//            MOBILE
//         ========================================= */
//         @media (max-width: 640px) {
//           .svx { padding-top: 80px; }

//           .svx-head { margin-bottom: 60px; padding: 0 22px; }
//           .svx-title { font-size: 48px; }
//           .svx-sub { font-size: 13.5px; margin-top: 24px; }

//           .parent-cinema { padding: 0 16px; }

//           .parent-banner { border-radius: 28px; }

//           .parent-visual { min-height: 380px; }
//           .parent-float.top-left { top: 20px; left: 20px; }
//           .parent-float.bottom-left { bottom: 22px; left: 24px; right: 24px; }
//           .parent-float-title { font-size: 34px; }
//           .parent-float-sub { font-size: 16px; }

//           .parent-panel { padding: 42px 28px; }
//           .parent-heading { font-size: 40px; }
//           .parent-copy { font-size: 13px; line-height: 1.85; }
//           .parent-metrics { padding: 20px 0; }
//           .parent-metric { padding: 0 12px; }
//           .parent-metric strong { font-size: 24px; }
//           .parent-metric span { font-size: 8px; }
//           .parent-panel::before { font-size: 60px; top: 20px; right: 24px; }

//           .tree-link { padding: 50px 0 40px; }
//           .tree-line { height: 50px; }
//           .tree-label { font-size: 8px; padding: 8px 16px; letter-spacing: .25em; }

//           .children-head { margin-bottom: 40px; padding: 0 22px; }
//           .children-title { font-size: 36px; }
//           .children-sub { font-size: 12.5px; }

//           .edition-carousel { padding: 0 20px; }
//           .edition-track { gap: 18px; padding: 20px 2px 30px; }
//           .edition-card { flex-basis: 84%; min-width: 84%; }
//           .edition-media { height: 420px; border-radius: 24px; }
//           .edition-name { font-size: 26px; }
//           .edition-body { padding-top: 20px; }

//           .edition-controls {
//             gap: 18px;
//             margin-top: 25px;
//             padding-bottom: 70px;
//           }

//           .edition-arrow-btn {
//             width: 46px; height: 46px;
//           }

//           .svx-foot { padding: 30px 0 60px; }
//           .svx-foot-bar { width: 30px; }
//           .svx-foot span:not(.svx-foot-bar) {
//             font-size: 8px;
//             letter-spacing: .25em;
//           }
//         }
//       `}</style>

//       <section className="svx">
//         <div className="svx-grid" />

//         <div className="svx-inner">

//           {/* ========== HEADER ========== */}
//           <div className="svx-head">
//             <p className="svx-eyebrow">
//               <span className="svx-eyebrow-dot" />
//               Our Services
//             </p>
//             <h2 className="svx-title">
//               Some Stories Deserve More Than <em>a Screen.</em>
//             </h2>
//             <p className="svx-sub">
//               We turn the moments that matter — a family's history, a founder's
//               journey, a life well-lived — into handcrafted books you can hold,
//               gift, and pass forward for generations.
//             </p>
//           </div>

//           {/* ========== PARENT — Cinematic Banner ========== */}
//           <div className="parent-cinema">
//             <div className="parent-banner">
//               <div className="parent-visual">
//                 <img src={parent.image} alt={parent.title} />

//                 <div className="parent-float top-left">
//                   <span className="parent-tag">
//                     <Sparkles size={11} strokeWidth={2} />
//                     The Parent Collection
//                   </span>
//                 </div>

//                 <div className="parent-float bottom-left">
//                   <div className="parent-float-title">{parent.title}</div>
//                   <div className="parent-float-sub">{parent.tagline}</div>
//                 </div>
//               </div>

//               <div className="parent-panel">
//                 <div className="parent-kicker">
//                   <span className="parent-kicker-bar" />
//                   The Art of Preserving
//                 </div>

//                 <h3 className="parent-heading">
//                   Crafted to outlive us all.
//                 </h3>

//                 <p className="parent-copy">{parent.description}</p>

//                 <div className="parent-metrics">
//                   {parent.stats.map((s, i) => (
//                     <div key={i} className="parent-metric">
//                       <strong>{s.value}</strong>
//                       <span>{s.label}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <Link to={parent.path} className="parent-btn">
//                   <span>Explore the Collection</span>
//                   <ArrowUpRight size={16} strokeWidth={2.5} />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* ========== CONNECTOR (Parent → Children) ========== */}
//           <div className="tree-link">
//             <div className="tree-line" />
//             <div className="tree-node" />
//             <div className="tree-line" />
//             <div className="tree-label">Four Editions Inside</div>
//           </div>

//           {/* ========== CHILDREN HEADER ========== */}
//           <div className="children-head">
//             <span className="children-kicker">Choose Your Edition</span>
//             <h3 className="children-title">
//               One format. <em>Four ways</em> to be remembered.
//             </h3>
//             <p className="children-sub">
//               Every edition is built on the same craft — shaped around the
//               story you want to preserve forever.
//             </p>
//           </div>

//           {/* ========== CHILDREN — Carousel ========== */}
//           <EditionCarousel editions={editions} />

//           {/* ========== FOOT ========== */}
//           <div className="svx-foot">
//             <div className="svx-foot-line">
//               <span className="svx-foot-bar" />
//               <span>EVERY BOOK BEGINS WITH A CONVERSATION</span>
//               <span className="svx-foot-bar" />
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default ServicesCards;



// import React, { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Coffee from "../../../assets/stories/CoffeeTableBooks.jpeg";
// import {
//   ChevronLeft, ChevronRight, ArrowUpRight, Sparkles,
//   BookOpen, Users, Briefcase, Heart, Award, Clock, Package
// } from "lucide-react";

// import img1 from "../../../assets/stories/FamilyLegacy.jpg";
// import img2 from "../../../assets/stories/Business.jpeg";
// import img3 from "../../../assets/stories/Devotional.jpeg";
// import img4 from "../../../assets/stories/Individual.png";

// const THEME = {
//   gold: "#C9A961",
//   goldLight: "#E4CB8E",
//   goldDeep: "#8B6A3E",
//   ink: "#0B0E0C",
//   cream: "#FBF9F5",
// };

// const ServicesCards = () => {
//   const [time, setTime] = useState("");

//   useEffect(() => {
//     const tick = () => {
//       const d = new Date();
//       setTime(`${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`);
//     };
//     tick();
//     const id = setInterval(tick, 30000);
//     return () => clearInterval(id);
//   }, []);

//   const parent = {
//     title: "Coffee Table Books",
//     tagline: "Art You Can Hold.",
//     description:
//       "The master collection. Every edition we craft lives inside this single format — hand-bound, archival, and built to sit on coffee tables for fifty years.",
//     image: Coffee,
//     path: "/services/coffee-table",
//     stats: [
//       { value: "500+", label: "Books Crafted" },
//       { value: "12", label: "Craft Days" },
//       { value: "50", label: "Year Archive" },
//     ],
//   };

//   const editions = [
//     {
//       number: "01",
//       title: "Family Legacy Book",
//       short: "Family",
//       tagline: "Because your family's story shouldn't end with you.",
//       image: img1,
//       path: "/services/coffee-table-family-legacy-book",
//       icon: Users,
//       chapter: "Chapter I",
//     },
//     {
//       number: "02",
//       title: "Business Story Book",
//       short: "Business",
//       tagline: "Your brand built an empire. Give it a book it deserves.",
//       image: img2,
//       path: "/services/coffee-table-business-story-book",
//       icon: Briefcase,
//       chapter: "Chapter II",
//     },
//     {
//       number: "03",
//       title: "Devotional Book",
//       short: "Devotional",
//       tagline: "Some faith is too sacred to stay only in memory.",
//       image: img3,
//       path: "/services/coffee-table-devotional-book",
//       icon: Heart,
//       chapter: "Chapter III",
//     },
//     {
//       number: "04",
//       title: "Individual Legacy Book",
//       short: "Individual",
//       tagline: "One life. One story. One book that outlives you.",
//       image: img4,
//       path: "/services/coffee-table-individual-legacy-book",
//       icon: BookOpen,
//       chapter: "Chapter IV",
//     },
//   ];

//   const EditionCarousel = ({ editions }) => {
//     const trackRef = useRef(null);
//     const [active, setActive] = useState(0);
//     const [left, setLeft] = useState(false);
//     const [right, setRight] = useState(true);

//     const update = () => {
//       const track = trackRef.current;
//       if (!track) return;
//       setLeft(track.scrollLeft > 10);
//       setRight(track.scrollLeft < track.scrollWidth - track.clientWidth - 10);
//       const card = track.querySelector(".edx-card");
//       if (card) {
//         const w = card.offsetWidth + 32;
//         const idx = Math.round(track.scrollLeft / w);
//         setActive(Math.min(idx, editions.length - 1));
//       }
//     };

//     useEffect(() => {
//       update();
//       const track = trackRef.current;
//       if (track) {
//         track.addEventListener("scroll", update);
//         return () => track.removeEventListener("scroll", update);
//       }
//     }, []);

//     const scrollBy = (dir) => {
//       const track = trackRef.current;
//       if (!track) return;
//       const card = track.querySelector(".edx-card");
//       const w = card ? card.offsetWidth + 32 : 340;
//       track.scrollBy({ left: dir * w, behavior: "smooth" });
//     };

//     const jumpTo = (i) => {
//       const track = trackRef.current;
//       if (!track) return;
//       const cards = track.querySelectorAll(".edx-card");
//       if (cards[i]) {
//         track.scrollTo({ left: cards[i].offsetLeft - 20, behavior: "smooth" });
//       }
//     };

//     return (
//       <div className="edx-carousel">
//         <div ref={trackRef} className="edx-track">
//           {editions.map((ed, i) => {
//             const Icon = ed.icon;
//             const isActive = i === active;
//             return (
//               <Link
//                 key={ed.path}
//                 to={ed.path}
//                 className={`edx-card ${isActive ? "is-active" : ""}`}
//               >
//                 <div className="edx-media">
//                   <img className="edx-img" src={ed.image} alt={ed.title} loading="lazy" />
//                   <div className="edx-vignette" />
//                   <div className="edx-grain" />
//                   <div className="edx-sheen" />

//                   <div className="edx-top">
//                     <span className="edx-chapter">{ed.chapter}</span>
//                     <span className="edx-num">{ed.number}</span>
//                   </div>

//                   <span className="edx-icon">
//                     <Icon size={18} strokeWidth={1.6} />
//                   </span>

//                   <div className="edx-bottom">
//                     <h4 className="edx-title">{ed.title}</h4>
//                     <p className="edx-tag">{ed.tagline}</p>
//                   </div>

//                   <span className="edx-cta">
//                     <ArrowUpRight size={20} strokeWidth={2} />
//                   </span>

//                   <span className="edx-tick edx-tick-tl" />
//                   <span className="edx-tick edx-tick-br" />
//                 </div>

//                 <div className="edx-meta">
//                   <span>EDITION {ed.number}</span>
//                   <span className="edx-meta-dot">•</span>
//                   <span>{ed.chapter}</span>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>

//         <div className="edx-controls">
//           <button
//             className={`edx-nav ${!left ? "disabled" : ""}`}
//             onClick={() => scrollBy(-1)}
//             aria-label="Previous"
//           >
//             <ChevronLeft size={20} strokeWidth={1.8} />
//           </button>

//           <div className="edx-dots">
//             {editions.map((_, i) => (
//               <button
//                 key={i}
//                 className={`edx-dot ${i === active ? "active" : ""}`}
//                 onClick={() => jumpTo(i)}
//                 aria-label={`Edition ${i + 1}`}
//               />
//             ))}
//           </div>

//           <button
//             className={`edx-nav ${!right ? "disabled" : ""}`}
//             onClick={() => scrollBy(1)}
//             aria-label="Next"
//           >
//             <ChevronRight size={20} strokeWidth={1.8} />
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&display=swap');

//         * { box-sizing: border-box; }

//         /* =========================================
//            ROOT
//         ========================================= */
//         .lux {
//           position: relative;
//           background:
//             radial-gradient(ellipse at 20% 0%, rgba(201,169,97,.14), transparent 55%),
//             radial-gradient(ellipse at 85% 90%, rgba(139,106,62,.10), transparent 55%),
//             #0B0E0C;
//           color: ${THEME.cream};
//           padding: 120px 0 0;
//           overflow: hidden;
//           font-family: 'Inter', sans-serif;
//         }

//         .lux-grid {
//           position: absolute;
//           inset: 0;
//           background-image:
//             linear-gradient(rgba(201,169,97,.028) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(201,169,97,.028) 1px, transparent 1px);
//           background-size: 100px 100px;
//           mask-image: radial-gradient(ellipse at 50% 25%, black 15%, transparent 70%);
//           -webkit-mask-image: radial-gradient(ellipse at 50% 25%, black 15%, transparent 70%);
//           pointer-events: none;
//           z-index: 1;
//         }

//         .lux-noise {
//           position: absolute;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
//           opacity: .04;
//           mix-blend-mode: overlay;
//           pointer-events: none;
//           z-index: 1;
//         }

//         .lux-inner {
//           position: relative;
//           z-index: 2;
//         }

//         /* =========================================
//            TOP EDITORIAL BAR
//         ========================================= */
//         .lux-bar {
//           max-width: 1360px;
//           margin: 0 auto 70px;
//           padding: 0 40px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 20px;
//           font-size: 10px;
//           font-weight: 600;
//           letter-spacing: .3em;
//           text-transform: uppercase;
//           color: rgba(251,249,245,.4);
//         }

//         .lux-bar-left,
//         .lux-bar-right {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//         }

//         .lux-bar-dot {
//           width: 5px; height: 5px;
//           border-radius: 50%;
//           background: ${THEME.gold};
//           box-shadow: 0 0 10px ${THEME.gold};
//         }

//         .lux-bar-sep {
//           width: 1px; height: 12px;
//           background: rgba(201,169,97,.25);
//         }

//         .lux-bar-time {
//           font-weight: 500;
//           letter-spacing: .2em;
//           color: rgba(201,169,97,.7);
//         }

//         /* =========================================
//            HEADER
//         ========================================= */
//         .lux-head {
//           max-width: 1080px;
//           margin: 0 auto 100px;
//           padding: 0 40px;
//           text-align: center;
//         }

//         .lux-eyebrow {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           margin-bottom: 34px;
//           padding: 10px 20px;
//           border-radius: 999px;
//           background: rgba(201,169,97,.06);
//           border: 1px solid rgba(201,169,97,.22);
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: .32em;
//           text-transform: uppercase;
//           color: ${THEME.gold};
//         }

//         .lux-eyebrow-dot {
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background: ${THEME.gold};
//           box-shadow: 0 0 12px ${THEME.gold};
//           animation: lux-pulse 2.4s ease-in-out infinite;
//         }

//         @keyframes lux-pulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: .5; transform: scale(.75); }
//         }

//         .lux-title {
//           margin: 0;
//           font-family: "Cormorant Garamond", serif;
//           font-size: clamp(54px, 8vw, 118px);
//           font-weight: 500;
//           line-height: .9;
//           letter-spacing: -.05em;
//           color: ${THEME.cream};
//         }

//         .lux-title em {
//           font-style: italic;
//           font-weight: 400;
//           background: linear-gradient(135deg, ${THEME.goldLight}, ${THEME.gold}, ${THEME.goldDeep});
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           background-size: 200% 200%;
//           animation: lux-shimmer 6s ease-in-out infinite;
//         }

//         @keyframes lux-shimmer {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         .lux-sub {
//           max-width: 640px;
//           margin: 36px auto 0;
//           font-size: 15px;
//           line-height: 1.85;
//           color: rgba(251,249,245,.55);
//           font-weight: 300;
//         }

//         /* =========================================
//            PARENT — "CONTAINER" STYLE
//         ========================================= */
//         .lux-parent {
//           position: relative;
//           max-width: 1360px;
//           margin: 0 auto;
//           padding: 0 40px;
//         }

//         /* Outer container with dashed border = "container" feel */
//         .lux-container {
//           position: relative;
//           border-radius: 10px;
//           background:
//             radial-gradient(circle at 90% 5%, rgba(201,169,97,.12), transparent 40%),
//             linear-gradient(180deg, #141915 0%, #0F130F 100%);
//           border: 1px solid rgba(201,169,97,.28);
//           box-shadow:
//             0 80px 160px -60px rgba(0,0,0,.85),
//             0 0 0 1px rgba(201,169,97,.08) inset;
//           overflow: hidden;
//         }

//         /* "CONTAINER" corner brackets = shows it's holding things */
//         .lux-container::before,
//         .lux-container::after {
//           content: "";
//           position: absolute;
//           width: 40px;
//           height: 40px;
//           pointer-events: none;
//           z-index: 5;
//         }

//         .lux-container::before {
//           top: 20px; left: 20px;
//           border-top: 2px solid ${THEME.gold};
//           border-left: 2px solid ${THEME.gold};
//           opacity: .55;
//         }

//         .lux-container::after {
//           bottom: 20px; right: 20px;
//           border-bottom: 2px solid ${THEME.gold};
//           border-right: 2px solid ${THEME.gold};
//           opacity: .55;
//         }

//         /* Container header strip — "The Parent" identity */
//         .lux-container-head {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 20px;
//           padding: 20px 40px;
//           border-bottom: 1px solid rgba(201,169,97,.18);
//           background: linear-gradient(180deg, rgba(201,169,97,.06), transparent);
//         }

//         .lux-container-head-left {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//         }

//         .lux-container-tag {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 8px 15px;
//           border-radius: 999px;
//           background: rgba(201,169,97,.1);
//           border: 1px solid rgba(201,169,97,.35);
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: .28em;
//           text-transform: uppercase;
//           color: ${THEME.gold};
//         }

//         .lux-container-label {
//           font-family: "Cormorant Garamond", serif;
//           font-size: 24px;
//           font-style: italic;
//           color: rgba(251,249,245,.7);
//         }

//         .lux-container-head-right {
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: .3em;
//           text-transform: uppercase;
//           color: rgba(201,169,97,.65);
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }

//         .lux-container-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           padding: 6px 12px;
//           border-radius: 999px;
//           background: ${THEME.gold};
//           color: #0B0E0C;
//           font-weight: 800;
//           letter-spacing: .2em;
//         }

//         /* Body — split visual + panel */
//         .lux-container-body {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           min-height: 620px;
//         }

//         /* Left — Visual */
//         .lux-visual {
//           position: relative;
//           overflow: hidden;
//           background: #0a0a0a;
//           border-right: 1px solid rgba(201,169,97,.15);
//         }

//         .lux-visual img {
//           position: absolute;
//           inset: 0;
//           width: 100%; height: 100%;
//           object-fit: cover;
//           transform: scale(1.02);
//           transition: transform 1.8s cubic-bezier(.2,.7,.2,1);
//           filter: brightness(.82) saturate(.95);
//         }

//         .lux-container:hover .lux-visual img {
//           transform: scale(1.08);
//           filter: brightness(.72) saturate(1.02);
//         }

//         .lux-visual::after {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background:
//             linear-gradient(180deg, rgba(11,14,12,.55) 0%, transparent 30%, transparent 42%, rgba(11,14,12,.92) 100%),
//             linear-gradient(90deg, transparent 55%, rgba(11,14,12,.4));
//         }

//         .lux-visual-float {
//           position: absolute;
//           z-index: 3;
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//         }

//         .lux-visual-float.tl { top: 30px; left: 30px; }
//         .lux-visual-float.bl { bottom: 34px; left: 34px; right: 34px; }

//         .lux-visual-title {
//           font-family: "Cormorant Garamond", serif;
//           font-size: clamp(36px, 3.8vw, 56px);
//           font-weight: 500;
//           line-height: .95;
//           letter-spacing: -.035em;
//           color: ${THEME.cream};
//         }

//         .lux-visual-sub {
//           font-family: "Cormorant Garamond", serif;
//           font-size: 19px;
//           font-style: italic;
//           color: ${THEME.gold};
//           margin-top: 6px;
//         }

//         /* Right — Panel */
//         .lux-panel {
//           position: relative;
//           padding: 65px 60px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           overflow: hidden;
//         }

//         .lux-panel::before {
//           content: "PARENT";
//           position: absolute;
//           top: 20px; right: 30px;
//           font-family: "Cormorant Garamond", serif;
//           font-size: 120px;
//           font-weight: 600;
//           letter-spacing: -.05em;
//           color: rgba(201,169,97,.05);
//           pointer-events: none;
//           line-height: 1;
//         }

//         .lux-kicker {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           margin-bottom: 24px;
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: .32em;
//           text-transform: uppercase;
//           color: ${THEME.gold};
//         }

//         .lux-kicker-bar {
//           width: 32px;
//           height: 1px;
//           background: ${THEME.gold};
//           opacity: .7;
//         }

//         .lux-heading {
//           margin: 0 0 28px;
//           font-family: "Cormorant Garamond", serif;
//           font-size: clamp(40px, 4.4vw, 62px);
//           font-weight: 500;
//           line-height: 1;
//           letter-spacing: -.04em;
//           color: ${THEME.cream};
//         }

//         .lux-heading em {
//           font-style: italic;
//           font-weight: 400;
//           background: linear-gradient(135deg, ${THEME.goldLight}, ${THEME.gold});
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .lux-copy {
//           max-width: 480px;
//           margin: 0 0 40px;
//           font-size: 14.5px;
//           line-height: 1.95;
//           color: rgba(251,249,245,.55);
//           font-weight: 300;
//         }

//         .lux-metrics {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           margin-bottom: 40px;
//           border-top: 1px solid rgba(201,169,97,.18);
//           border-bottom: 1px solid rgba(201,169,97,.18);
//           padding: 24px 0;
//         }

//         .lux-metric {
//           padding: 0 22px;
//           border-right: 1px solid rgba(201,169,97,.13);
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//         }

//         .lux-metric:last-child { border-right: none; }
//         .lux-metric:first-child { padding-left: 0; }

//         .lux-metric strong {
//           font-family: "Cormorant Garamond", serif;
//           font-size: 38px;
//           font-weight: 500;
//           line-height: 1;
//           color: ${THEME.gold};
//           letter-spacing: -.02em;
//         }

//         .lux-metric span {
//           font-size: 9px;
//           font-weight: 600;
//           letter-spacing: .16em;
//           text-transform: uppercase;
//           color: rgba(251,249,245,.42);
//         }

//         .lux-cta {
//           position: relative;
//           width: fit-content;
//           display: inline-flex;
//           align-items: center;
//           gap: 14px;
//           padding: 18px 32px;
//           border-radius: 2px;
//           background: linear-gradient(135deg, ${THEME.gold}, ${THEME.goldDeep});
//           color: #0B0E0C;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: .18em;
//           text-transform: uppercase;
//           text-decoration: none;
//           overflow: hidden;
//           transition: transform .45s cubic-bezier(.2,.7,.2,1), box-shadow .45s ease;
//           box-shadow:
//             0 20px 50px -15px rgba(201,169,97,.55),
//             0 0 0 1px rgba(255,255,255,.1) inset;
//         }

//         .lux-cta::before {
//           content: "";
//           position: absolute;
//           top: 0; left: -100%;
//           width: 100%; height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent);
//           transform: skewX(-22deg);
//           transition: left .9s cubic-bezier(.2,.7,.2,1);
//         }

//         .lux-cta:hover {
//           transform: translateY(-3px);
//           box-shadow:
//             0 30px 65px -15px rgba(201,169,97,.75),
//             0 0 0 1px rgba(255,255,255,.15) inset;
//         }

//         .lux-cta:hover::before { left: 100%; }

//         .lux-cta span,
//         .lux-cta svg { position: relative; z-index: 2; }

//         /* =========================================
//            ⭐ INSIDE STRIP — Shows "what's inside" the parent
//         ========================================= */
//         .lux-inside {
//           position: relative;
//           padding: 32px 40px 40px;
//           border-top: 1px solid rgba(201,169,97,.18);
//           background: linear-gradient(180deg, rgba(11,14,12,.6), rgba(11,14,12,.2));
//         }

//         .lux-inside-head {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//           margin-bottom: 22px;
//         }

//         .lux-inside-head-icon {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 7px 13px;
//           border-radius: 3px;
//           background: rgba(201,169,97,.1);
//           border: 1px solid rgba(201,169,97,.3);
//           color: ${THEME.gold};
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: .25em;
//           text-transform: uppercase;
//         }

//         .lux-inside-head-line {
//           flex: 1;
//           height: 1px;
//           background: linear-gradient(90deg, rgba(201,169,97,.35), transparent);
//         }

//         .lux-inside-head-label {
//           font-family: "Cormorant Garamond", serif;
//           font-size: 20px;
//           font-style: italic;
//           color: rgba(251,249,245,.7);
//         }

//         /* Mini grid of 4 editions inside parent */
//         .lux-inside-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 14px;
//         }

//         .lux-inside-item {
//           position: relative;
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           padding: 12px 14px;
//           border-radius: 8px;
//           background: rgba(201,169,97,.04);
//           border: 1px solid rgba(201,169,97,.15);
//           text-decoration: none;
//           color: inherit;
//           transition: all .4s cubic-bezier(.2,.7,.2,1);
//           overflow: hidden;
//         }

//         .lux-inside-item::before {
//           content: "";
//           position: absolute;
//           left: 0; top: 0; bottom: 0;
//           width: 3px;
//           background: ${THEME.gold};
//           transform: scaleY(0);
//           transform-origin: center;
//           transition: transform .4s cubic-bezier(.2,.7,.2,1);
//         }

//         .lux-inside-item:hover {
//           background: rgba(201,169,97,.1);
//           border-color: rgba(201,169,97,.4);
//           transform: translateY(-2px);
//         }

//         .lux-inside-item:hover::before {
//           transform: scaleY(1);
//         }

//         .lux-inside-thumb {
//           flex: 0 0 auto;
//           width: 42px;
//           height: 42px;
//           border-radius: 5px;
//           overflow: hidden;
//           background: #0a0a0a;
//           border: 1px solid rgba(201,169,97,.25);
//           position: relative;
//         }

//         .lux-inside-thumb img {
//           width: 100%; height: 100%;
//           object-fit: cover;
//           transition: transform .6s ease;
//           filter: brightness(.9);
//         }

//         .lux-inside-item:hover .lux-inside-thumb img {
//           transform: scale(1.15);
//           filter: brightness(1.1);
//         }

//         .lux-inside-info {
//           display: flex;
//           flex-direction: column;
//           gap: 3px;
//           min-width: 0;
//           flex: 1;
//         }

//         .lux-inside-num {
//           font-family: "Cormorant Garamond", serif;
//           font-size: 11px;
//           font-weight: 600;
//           font-style: italic;
//           color: ${THEME.gold};
//           letter-spacing: .04em;
//         }

//         .lux-inside-name {
//           font-family: 'Inter', sans-serif;
//           font-size: 12px;
//           font-weight: 600;
//           letter-spacing: .01em;
//           color: ${THEME.cream};
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//           transition: color .3s ease;
//         }

//         .lux-inside-item:hover .lux-inside-name {
//           color: ${THEME.gold};
//         }

//         .lux-inside-item-arrow {
//           flex: 0 0 auto;
//           color: ${THEME.gold};
//           opacity: 0;
//           transform: translateX(-4px);
//           transition: all .35s ease;
//         }

//         .lux-inside-item:hover .lux-inside-item-arrow {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         /* =========================================
//            FAMILY TREE CONNECTOR
//         ========================================= */
//         .lux-tree {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           padding: 70px 0 55px;
//         }

//         .lux-tree-line {
//           width: 1px;
//           height: 70px;
//           background: linear-gradient(180deg, transparent, rgba(201,169,97,.7), transparent);
//         }

//         .lux-tree-node {
//           width: 16px;
//           height: 16px;
//           border-radius: 50%;
//           background: ${THEME.gold};
//           position: relative;
//           box-shadow:
//             0 0 0 5px #0B0E0C,
//             0 0 0 6px rgba(201,169,97,.5),
//             0 0 30px ${THEME.gold};
//           margin: -1px 0;
//         }

//         .lux-tree-node::after {
//           content: "";
//           position: absolute;
//           inset: -12px;
//           border-radius: 50%;
//           border: 1px solid rgba(201,169,97,.4);
//           animation: lux-ring 2.8s ease-out infinite;
//         }

//         @keyframes lux-ring {
//           0% { transform: scale(.6); opacity: 1; }
//           100% { transform: scale(2); opacity: 0; }
//         }

//         .lux-tree-label {
//           margin-top: 26px;
//           padding: 10px 22px;
//           border-radius: 999px;
//           background: rgba(201,169,97,.06);
//           border: 1px solid rgba(201,169,97,.3);
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: .35em;
//           text-transform: uppercase;
//           color: ${THEME.gold};
//           backdrop-filter: blur(10px);
//         }

//         /* =========================================
//            CHILDREN HEADER
//         ========================================= */
//         .lux-children-head {
//           max-width: 820px;
//           margin: 0 auto 60px;
//           padding: 0 30px;
//           text-align: center;
//         }

//         .lux-children-kicker {
//           display: inline-flex;
//           align-items: center;
//           gap: 14px;
//           margin-bottom: 22px;
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: .32em;
//           color: ${THEME.gold};
//           text-transform: uppercase;
//         }

//         .lux-children-kicker::before,
//         .lux-children-kicker::after {
//           content: "";
//           width: 34px;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, ${THEME.gold}, transparent);
//         }

//         .lux-children-title {
//           margin: 0;
//           font-family: "Cormorant Garamond", serif;
//           font-size: clamp(40px, 4.8vw, 66px);
//           font-weight: 500;
//           line-height: 1;
//           letter-spacing: -.035em;
//           color: ${THEME.cream};
//         }

//         .lux-children-title em {
//           font-style: italic;
//           font-weight: 400;
//           background: linear-gradient(135deg, ${THEME.goldLight}, ${THEME.gold});
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .lux-children-sub {
//           max-width: 540px;
//           margin: 22px auto 0;
//           font-size: 13.5px;
//           line-height: 1.9;
//           color: rgba(251,249,245,.5);
//           font-weight: 300;
//         }

//         /* =========================================
//            EDITION CAROUSEL
//         ========================================= */
//         .edx-carousel {
//           position: relative;
//           max-width: 1360px;
//           margin: 0 auto;
//           padding: 0 40px;
//         }

//         .edx-track {
//           display: flex;
//           gap: 32px;
//           overflow-x: auto;
//           padding: 40px 4px 45px;
//           scroll-snap-type: x mandatory;
//           scrollbar-width: none;
//           -ms-overflow-style: none;
//         }

//         .edx-track::-webkit-scrollbar { display: none; }

//         .edx-card {
//           position: relative;
//           flex: 0 0 calc((100% - 96px) / 4);
//           min-width: 275px;
//           text-decoration: none;
//           color: inherit;
//           scroll-snap-align: start;
//           transition: transform .55s cubic-bezier(.2,.7,.2,1);
//         }

//         .edx-card:hover { transform: translateY(-14px); }

//         .edx-media {
//           position: relative;
//           height: 440px;
//           overflow: hidden;
//           border-radius: 6px;
//           background: #0a0a0a;
//           border: 1px solid rgba(201,169,97,.15);
//           box-shadow:
//             0 40px 80px -30px rgba(0,0,0,.7),
//             0 0 0 1px rgba(255,255,255,.02) inset;
//           transition: border-color .5s ease, box-shadow .5s ease;
//         }

//         .edx-card.is-active .edx-media {
//           border-color: rgba(201,169,97,.5);
//           box-shadow:
//             0 50px 90px -30px rgba(0,0,0,.8),
//             0 0 60px -10px rgba(201,169,97,.4),
//             0 0 0 1px rgba(201,169,97,.25) inset;
//         }

//         .edx-img {
//           width: 100%; height: 100%;
//           display: block;
//           object-fit: cover;
//           transition: transform 1.2s cubic-bezier(.2,.7,.2,1), filter .6s ease;
//           filter: brightness(.78) saturate(.95) contrast(1.02);
//         }

//         .edx-card:hover .edx-img {
//           transform: scale(1.1);
//           filter: brightness(.92) saturate(1.08) contrast(1.05);
//         }

//         .edx-vignette {
//           position: absolute;
//           inset: 0;
//           background:
//             radial-gradient(ellipse at 50% 20%, transparent 40%, rgba(11,14,12,.55) 100%),
//             linear-gradient(180deg, rgba(11,14,12,.4) 0%, transparent 25%, transparent 42%, rgba(11,14,12,.95) 100%);
//           pointer-events: none;
//         }

//         .edx-grain {
//           position: absolute;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E");
//           opacity: .15;
//           mix-blend-mode: overlay;
//           pointer-events: none;
//         }

//         .edx-sheen {
//           position: absolute;
//           top: 0; left: -110%;
//           width: 70%; height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(228,203,142,.4), transparent);
//           transform: skewX(-22deg);
//           transition: left 1.1s cubic-bezier(.2,.7,.2,1);
//           pointer-events: none;
//         }

//         .edx-card:hover .edx-sheen { left: 160%; }

//         .edx-top {
//           position: absolute;
//           top: 22px; left: 22px; right: 22px;
//           z-index: 3;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }

//         .edx-chapter {
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: .32em;
//           text-transform: uppercase;
//           color: ${THEME.gold};
//           padding: 6px 12px;
//           border-radius: 2px;
//           background: rgba(11,14,12,.6);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(201,169,97,.3);
//         }

//         .edx-num {
//           font-family: "Cormorant Garamond", serif;
//           font-size: 30px;
//           font-weight: 500;
//           font-style: italic;
//           color: rgba(251,249,245,.85);
//           line-height: 1;
//         }

//         .edx-icon {
//           position: absolute;
//           top: 78px; left: 22px;
//           z-index: 3;
//           width: 44px; height: 44px;
//           display: flex; align-items: center; justify-content: center;
//           border-radius: 50%;
//           background: rgba(11,14,12,.65);
//           backdrop-filter: blur(12px);
//           border: 1px solid rgba(201,169,97,.4);
//           color: ${THEME.gold};
//           opacity: 0;
//           transform: translateY(8px);
//           transition: opacity .5s ease, transform .5s ease;
//         }

//         .edx-card:hover .edx-icon {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .edx-bottom {
//           position: absolute;
//           left: 24px; right: 24px; bottom: 26px;
//           z-index: 3;
//         }

//         .edx-title {
//           margin: 0 0 10px;
//           font-family: "Cormorant Garamond", serif;
//           font-size: 30px;
//           font-weight: 500;
//           line-height: 1.02;
//           letter-spacing: -.02em;
//           color: ${THEME.cream};
//           transition: color .4s ease;
//         }

//         .edx-card:hover .edx-title { color: ${THEME.gold}; }

//         .edx-tag {
//           margin: 0;
//           font-family: "Cormorant Garamond", serif;
//           font-size: 15px;
//           font-style: italic;
//           line-height: 1.55;
//           color: rgba(251,249,245,.6);
//         }

//         .edx-cta {
//           position: absolute;
//           right: 22px; bottom: 22px;
//           z-index: 4;
//           width: 52px; height: 52px;
//           display: flex; align-items: center; justify-content: center;
//           border-radius: 50%;
//           background: ${THEME.gold};
//           color: #0B0E0C;
//           transform: translateY(14px) scale(.85);
//           opacity: 0;
//           transition: all .5s cubic-bezier(.2,.7,.2,1);
//           box-shadow:
//             0 15px 35px rgba(201,169,97,.6),
//             0 0 0 1px rgba(255,255,255,.15) inset;
//         }

//         .edx-card:hover .edx-cta {
//           opacity: 1;
//           transform: translateY(0) scale(1);
//         }

//         .edx-tick {
//           position: absolute;
//           width: 14px; height: 14px;
//           pointer-events: none;
//           opacity: .55;
//           z-index: 3;
//         }

//         .edx-tick-tl {
//           top: 12px; left: 12px;
//           border-top: 1px solid ${THEME.gold};
//           border-left: 1px solid ${THEME.gold};
//         }

//         .edx-tick-br {
//           bottom: 12px; right: 12px;
//           border-bottom: 1px solid ${THEME.gold};
//           border-right: 1px solid ${THEME.gold};
//         }

//         .edx-meta {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 18px 4px 0;
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: .25em;
//           text-transform: uppercase;
//           color: rgba(251,249,245,.4);
//           transition: color .4s ease;
//         }

//         .edx-card:hover .edx-meta { color: ${THEME.gold}; }

//         .edx-meta-dot { color: ${THEME.gold}; opacity: .7; }

//         /* =========================================
//            CONTROLS
//         ========================================= */
//         .edx-controls {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 34px;
//           margin-top: 40px;
//           padding-bottom: 120px;
//         }

//         .edx-nav {
//           width: 56px; height: 56px;
//           display: flex; align-items: center; justify-content: center;
//           border-radius: 50%;
//           background: rgba(201,169,97,.05);
//           border: 1px solid rgba(201,169,97,.3);
//           color: ${THEME.gold};
//           cursor: pointer;
//           transition: all .4s cubic-bezier(.2,.7,.2,1);
//         }

//         .edx-nav:hover:not(.disabled) {
//           background: ${THEME.gold};
//           color: #0B0E0C;
//           border-color: ${THEME.gold};
//           transform: scale(1.1);
//           box-shadow: 0 20px 40px -10px rgba(201,169,97,.7);
//         }

//         .edx-nav.disabled { opacity: .3; cursor: not-allowed; }

//         .edx-dots {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }

//         .edx-dot {
//           width: 32px;
//           height: 2px;
//           border-radius: 2px;
//           border: none;
//           padding: 0;
//           background: rgba(201,169,97,.22);
//           cursor: pointer;
//           transition: all .45s cubic-bezier(.2,.7,.2,1);
//         }

//         .edx-dot.active {
//           background: ${THEME.gold};
//           width: 56px;
//           box-shadow: 0 0 16px rgba(201,169,97,.8);
//         }

//         /* =========================================
//            FOOTER
//         ========================================= */
//         .lux-foot {
//           padding: 50px 0 90px;
//           text-align: center;
//           position: relative;
//         }

//         .lux-foot::before {
//           content: "";
//           position: absolute;
//           top: 0; left: 50%;
//           transform: translateX(-50%);
//           width: 80%;
//           max-width: 600px;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(201,169,97,.3), transparent);
//         }

//         .lux-foot-inner {
//           display: inline-flex;
//           align-items: center;
//           gap: 20px;
//         }

//         .lux-foot-mark {
//           width: 40px; height: 40px;
//           display: flex; align-items: center; justify-content: center;
//           border-radius: 50%;
//           border: 1px solid rgba(201,169,97,.35);
//           color: ${THEME.gold};
//           background: rgba(201,169,97,.05);
//         }

//         .lux-foot-text {
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: .4em;
//           color: rgba(251,249,245,.45);
//           text-transform: uppercase;
//         }

//         /* =========================================
//            TABLET
//         ========================================= */
//         @media (max-width: 1024px) {
//           .lux-container-body { grid-template-columns: 1fr; min-height: auto; }
//           .lux-visual { min-height: 460px; border-right: none; border-bottom: 1px solid rgba(201,169,97,.15); }
//           .lux-panel { padding: 55px 45px; }

//           .lux-inside-grid { grid-template-columns: repeat(2, 1fr); }

//           .edx-card { flex-basis: calc((100% - 32px) / 2); }
//         }

//         /* =========================================
//            MOBILE
//         ========================================= */
//         @media (max-width: 640px) {
//           .lux { padding-top: 70px; }

//           .lux-bar { padding: 0 22px; margin-bottom: 45px; font-size: 9px; letter-spacing: .22em; }
//           .lux-bar-left, .lux-bar-right { gap: 10px; }

//           .lux-head { margin-bottom: 55px; padding: 0 22px; }
//           .lux-title { font-size: 52px; }
//           .lux-sub { font-size: 13.5px; margin-top: 26px; }

//           .lux-parent { padding: 0 16px; }
//           .lux-container { border-radius: 8px; }
//           .lux-container::before,
//           .lux-container::after { width: 24px; height: 24px; }

//           .lux-container-head { padding: 16px 20px; flex-direction: column; align-items: flex-start; gap: 12px; }
//           .lux-container-label { font-size: 20px; }
//           .lux-container-head-right { font-size: 8px; letter-spacing: .22em; }

//           .lux-container-body { grid-template-columns: 1fr; }
//           .lux-visual { min-height: 380px; }
//           .lux-visual-float.tl { top: 20px; left: 20px; }
//           .lux-visual-float.bl { bottom: 24px; left: 24px; right: 24px; }
//           .lux-visual-title { font-size: 34px; }
//           .lux-visual-sub { font-size: 16px; }

//           .lux-panel { padding: 42px 26px; }
//           .lux-heading { font-size: 38px; }
//           .lux-copy { font-size: 13px; line-height: 1.9; }
//           .lux-panel::before { font-size: 70px; top: 16px; right: 20px; }

//           .lux-metrics { padding: 20px 0; }
//           .lux-metric { padding: 0 12px; }
//           .lux-metric strong { font-size: 26px; }
//           .lux-metric span { font-size: 8px; }

//           .lux-cta { padding: 15px 24px; font-size: 10px; }

//           /* Inside strip on mobile */
//           .lux-inside { padding: 22px 20px 26px; }
//           .lux-inside-head { margin-bottom: 16px; flex-wrap: wrap; gap: 10px; }
//           .lux-inside-head-label { font-size: 16px; }
//           .lux-inside-grid { grid-template-columns: 1fr; gap: 10px; }
//           .lux-inside-item { padding: 10px 12px; }
//           .lux-inside-thumb { width: 38px; height: 38px; }

//           .lux-tree { padding: 50px 0 40px; }
//           .lux-tree-line { height: 50px; }
//           .lux-tree-label { font-size: 8px; padding: 8px 16px; letter-spacing: .28em; }

//           .lux-children-head { margin-bottom: 40px; padding: 0 22px; }
//           .lux-children-title { font-size: 36px; }
//           .lux-children-sub { font-size: 12.5px; }

//           .edx-carousel { padding: 0 20px; }
//           .edx-track { gap: 18px; padding: 22px 2px 30px; }
//           .edx-card { flex-basis: 84%; min-width: 84%; }
//           .edx-media { height: 440px; border-radius: 6px; }
//           .edx-title { font-size: 28px; }
//           .edx-num { font-size: 26px; }

//           .edx-controls { gap: 20px; margin-top: 25px; padding-bottom: 80px; }
//           .edx-nav { width: 48px; height: 48px; }

//           .lux-foot { padding: 35px 20px 70px; }
//           .lux-foot-inner { flex-direction: column; gap: 14px; }
//           .lux-foot-text { font-size: 8px; letter-spacing: .3em; }
//         }
//       `}</style>

//       <section className="lux">
//         <div className="lux-grid" />
//         <div className="lux-noise" />

//         <div className="lux-inner">

//           {/* ========== EDITORIAL BAR ========== */}
//           <div className="lux-bar">
//             <div className="lux-bar-left">
//               <span className="lux-bar-dot" />
//               <span>The Atelier</span>
//               <span className="lux-bar-sep" />
//               <span>Est. 2015</span>
//             </div>
//             <div className="lux-bar-right">
//               <Award size={12} strokeWidth={1.8} />
//               <span>Handcrafted Editions</span>
//               <span className="lux-bar-sep" />
//               <Clock size={12} strokeWidth={1.8} />
//               <span className="lux-bar-time">{time}</span>
//             </div>
//           </div>

//           {/* ========== HEADER ========== */}
//           <div className="lux-head">
//             <p className="lux-eyebrow">
//               <span className="lux-eyebrow-dot" />
//               Our Services
//             </p>
//             <h2 className="lux-title">
//               Some Stories Deserve
//               <br />
//               More Than <em>a Screen.</em>
//             </h2>
//             <p className="lux-sub">
//               One master collection. Four editions inside. Each crafted to
//               preserve what matters most — in a book you can hold, gift, and
//               pass forward.
//             </p>
//           </div>

//           {/* ========== PARENT CONTAINER (holding 4 editions) ========== */}
//           <div className="lux-parent">
//             <div className="lux-container">

//               {/* Container header strip */}
//               <div className="lux-container-head">
//                 <div className="lux-container-head-left">
//                   <span className="lux-container-tag">
//                     <Package size={11} strokeWidth={2} />
//                     Parent Collection
//                   </span>
//                   <span className="lux-container-label">
//                     The Master Format
//                   </span>
//                 </div>
//                 <div className="lux-container-head-right">
//                   <span>Contains</span>
//                   <span className="lux-container-badge">
//                     4 Editions
//                   </span>
//                 </div>
//               </div>

//               {/* Body: visual + panel */}
//               <div className="lux-container-body">
//                 <div className="lux-visual">
//                   <img src={parent.image} alt={parent.title} />

//                   <div className="lux-visual-float tl">
//                     <span className="lux-container-tag">
//                       <Sparkles size={11} strokeWidth={2} />
//                       Master Format
//                     </span>
//                   </div>

//                   <div className="lux-visual-float bl">
//                     <div className="lux-visual-title">{parent.title}</div>
//                     <div className="lux-visual-sub">{parent.tagline}</div>
//                   </div>
//                 </div>

//                 <div className="lux-panel">
//                   <div className="lux-kicker">
//                     <span className="lux-kicker-bar" />
//                     The Art of Preserving
//                   </div>

//                   <h3 className="lux-heading">
//                     Crafted to <em>outlive</em> us all.
//                   </h3>

//                   <p className="lux-copy">{parent.description}</p>

//                   <div className="lux-metrics">
//                     {parent.stats.map((s, i) => (
//                       <div key={i} className="lux-metric">
//                         <strong>{s.value}</strong>
//                         <span>{s.label}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <Link to={parent.path} className="lux-cta">
//                     <span>Explore the Master Format</span>
//                     <ArrowUpRight size={16} strokeWidth={2.5} />
//                   </Link>
//                 </div>
//               </div>

//               {/* ⭐ INSIDE STRIP — shows 4 editions living inside parent */}
//               <div className="lux-inside">
//                 <div className="lux-inside-head">
//                   <span className="lux-inside-head-icon">
//                     <Package size={11} strokeWidth={2} />
//                     Inside This Format
//                   </span>
//                   <span className="lux-inside-head-line" />
//                   <span className="lux-inside-head-label">
//                     four editions
//                   </span>
//                 </div>

//                 <div className="lux-inside-grid">
//                   {editions.map((ed) => (
//                     <Link
//                       key={ed.path}
//                       to={ed.path}
//                       className="lux-inside-item"
//                     >
//                       <div className="lux-inside-thumb">
//                         <img src={ed.image} alt={ed.title} />
//                       </div>
//                       <div className="lux-inside-info">
//                         <span className="lux-inside-num">
//                           {ed.number} · {ed.chapter}
//                         </span>
//                         <span className="lux-inside-name">{ed.short}</span>
//                       </div>
//                       <ArrowUpRight
//                         size={14}
//                         strokeWidth={2}
//                         className="lux-inside-item-arrow"
//                       />
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* ========== FAMILY TREE CONNECTOR ========== */}
//           <div className="lux-tree">
//             <div className="lux-tree-line" />
//             <div className="lux-tree-node" />
//             <div className="lux-tree-line" />
//             <div className="lux-tree-label">Open Any Edition Below</div>
//           </div>

//           {/* ========== CHILDREN HEADER ========== */}
//           <div className="lux-children-head">
//             <span className="lux-children-kicker">Choose Your Edition</span>
//             <h3 className="lux-children-title">
//               Four editions. <em>One format.</em>
//             </h3>
//             <p className="lux-children-sub">
//               Every edition is built on the same craft — shaped around the
//               story you want to preserve forever.
//             </p>
//           </div>

//           {/* ========== CHILDREN CAROUSEL ========== */}
//           <EditionCarousel editions={editions} />

//           {/* ========== FOOTER ========== */}
//           <div className="lux-foot">
//             <div className="lux-foot-inner">
//               <span className="lux-foot-mark">
//                 <Sparkles size={16} strokeWidth={1.6} />
//               </span>
//               <span className="lux-foot-text">
//                 Every Book Begins With a Conversation
//               </span>
//               <span className="lux-foot-mark">
//                 <Sparkles size={16} strokeWidth={1.6} />
//               </span>
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default ServicesCards;


import React from "react";
import { Link } from "react-router-dom";
import Coffee from "../../../assets/stories/CoffeeTableBooks.jpeg";
import { ArrowUpRight, Users, Briefcase, Heart, BookOpen, Sparkles } from "lucide-react";

import img1 from "../../../assets/stories/Family.jpg";
import img2 from "../../../assets/stories/bussniess.jpg";
import img3 from "../../../assets/stories/devotional.jpg";
import img4 from "../../../assets/stories/indiviual.jpg";

const THEME = {
  copper: "#8B6A3E",
  copperLight: "#C9A961",
  ink: "#0B0E0C",
  inkMid: "#141815",
  inkLight: "#5C665F",
  cream: "#FBF9F5",
  bg: "#F5F1E8",
};

const ServicesCards = () => {
  const parent = {
    title: "Coffee Table Books",
    tagline: "The format that holds every story.",
    description:
      "One master format. Four editions inside. Hand-bound, printed on archival paper, and designed to sit on a coffee table for fifty years — not fade in a phone gallery in five.",
    image: Coffee,
    path: "/services/coffee-table",
    ctaLabel: "Explore the Master Format",
  };

  const editions = [
    {
      number: "01",
      title: "Family Legacy Book",
      tagline: "Trace your roots. Preserve your name. Gift it forward.",
      image: img1,
      path: "/services/coffee-table-family-legacy-book",
      icon: Users,
      label: "For Families",
    },
    {
      number: "02",
      title: "Business Story Book",
      tagline: "Your brand built an empire. Give it the book it earned.",
      image: img2,
      path: "/services/coffee-table-business-story-book",
      icon: Briefcase,
      label: "For Founders",
    },
    {
      number: "03",
      title: "Devotional Book",
      tagline: "Some faith is too sacred to live only in memory.",
      image: img3,
      path: "/services/coffee-table-devotional-book",
      icon: Heart,
      label: "For Devotion",
    },
    {
      number: "04",
      title: "Individual Legacy Book",
      tagline: "One life. One story. One book that outlives you.",
      image: img4,
      path: "/services/coffee-table-individual-legacy-book",
      icon: BookOpen,
      label: "For Individuals",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700;800&display=swap');

        * { box-sizing: border-box; }

        /* =========================================
           ROOT
        ========================================= */
        .sc {
          position: relative;
          background: ${THEME.bg};
          padding: 120px 0 110px;
          font-family: 'Inter', sans-serif;
          color: ${THEME.ink};
          overflow: hidden;
        }

        /* Ambient background glow */
        .sc::before {
          content: "";
          position: absolute;
          top: -200px; left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 900px;
          background: radial-gradient(circle, rgba(201,169,97,.20), transparent 60%);
          filter: blur(40px);
          pointer-events: none;
          z-index: 0;
        }

        .sc-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }

        /* =========================================
           HEADER
        ========================================= */
        .sc-head {
          text-align: center;
          margin-bottom: 80px;
        }

        .sc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 26px;
          padding: 9px 20px;
          border-radius: 999px;
          background: #fff;
          border: 1px solid rgba(139,106,62,.22);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .3em;
          text-transform: uppercase;
          color: ${THEME.copper};
          box-shadow: 0 12px 30px -12px rgba(139,106,62,.35);
        }

        .sc-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${THEME.copper};
          box-shadow: 0 0 0 3px rgba(139,106,62,.18);
        }

        .sc-title {
          margin: 0 auto;
          max-width: 820px;
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(48px, 7vw, 76px);
          font-weight: 500;
          line-height: .98;
          letter-spacing: -.045em;
          color: ${THEME.ink};
        }

        .sc-title em {
          font-style: italic;
          font-weight: 400;
          color: ${THEME.copper};
          position: relative;
          display: inline-block;
        }

        .sc-title em::after {
          content: "";
          position: absolute;
          left: 0; right: 0;
          bottom: 6px;
          height: 6px;
          background: linear-gradient(90deg, transparent, rgba(201,169,97,.55), transparent);
          border-radius: 50%;
          z-index: -1;
        }

        .sc-sub {
          max-width: 600px;
          margin: 26px auto 0;
          font-size: 15px;
          line-height: 1.85;
          color: ${THEME.inkLight};
          font-weight: 400;
        }

        /* =========================================
           PARENT — HERO BANNER
        ========================================= */
        .sc-parent {
          position: relative;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          min-height: 520px;
          border-radius: 32px;
          overflow: hidden;
          background: ${THEME.ink};
          box-shadow:
            0 50px 100px -40px rgba(30,43,36,.5),
            0 25px 50px -25px rgba(30,43,36,.3);
          margin-bottom: 0;
        }

        .sc-parent-image {
          position: relative;
          overflow: hidden;
          background: #0a0a0a;
        }

        .sc-parent-image img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1.02);
          transition: transform 1.4s cubic-bezier(.2,.7,.2,1);
          filter: brightness(.85) saturate(1.05);
        }

        .sc-parent:hover .sc-parent-image img {
          transform: scale(1.08);
          filter: brightness(.75) saturate(1.1);
        }

        .sc-parent-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(11,14,12,.35) 0%, transparent 30%, transparent 40%, rgba(11,14,12,.75) 100%),
            linear-gradient(90deg, transparent 55%, rgba(11,14,12,.5));
          pointer-events: none;
        }

        .sc-parent-badge {
          position: absolute;
          top: 28px;
          left: 28px;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border-radius: 999px;
          background: rgba(11,14,12,.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .24em;
          text-transform: uppercase;
          color: ${THEME.copperLight};
          border: 1px solid rgba(201,169,97,.4);
        }

        .sc-parent-float {
          position: absolute;
          left: 34px;
          right: 34px;
          bottom: 32px;
          z-index: 3;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sc-parent-float-label {
          font-family: 'Inter', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .3em;
          text-transform: uppercase;
          color: rgba(251,249,245,.75);
        }

        .sc-parent-float-title {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(30px, 3.2vw, 48px);
          font-weight: 500;
          line-height: 1;
          letter-spacing: -.03em;
          color: ${THEME.cream};
        }

        .sc-parent-body {
          padding: 65px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          background: ${THEME.ink};
        }

        .sc-parent-body::before {
          content: "";
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(201,169,97,.25), transparent 65%);
          pointer-events: none;
        }

        .sc-parent-kicker {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .3em;
          text-transform: uppercase;
          color: ${THEME.copperLight};
          margin-bottom: 22px;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .sc-parent-kicker::before {
          content: "";
          width: 28px;
          height: 1px;
          background: ${THEME.copperLight};
          opacity: .8;
        }

        .sc-parent-title {
          margin: 0;
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(40px, 4.4vw, 62px);
          font-weight: 500;
          line-height: 1;
          letter-spacing: -.035em;
          color: ${THEME.cream};
          position: relative;
        }

        .sc-parent-tagline {
          margin: 16px 0 26px;
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          font-style: italic;
          color: ${THEME.copperLight};
          position: relative;
        }

        .sc-parent-desc {
          margin: 0 0 36px;
          font-size: 14.5px;
          line-height: 1.9;
          color: rgba(251,249,245,.65);
          font-weight: 300;
          max-width: 480px;
          position: relative;
        }

        .sc-parent-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          width: fit-content;
          padding: 17px 30px;
          border-radius: 999px;
          background: ${THEME.copperLight};
          color: ${THEME.ink};
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .16em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all .4s cubic-bezier(.2,.7,.2,1);
          position: relative;
          box-shadow: 0 20px 40px -15px rgba(201,169,97,.6);
          overflow: hidden;
        }

        .sc-parent-cta::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.4), transparent);
          transform: skewX(-20deg);
          transition: left .9s cubic-bezier(.2,.7,.2,1);
        }

        .sc-parent-cta:hover {
          background: ${THEME.cream};
          transform: translateY(-3px);
          box-shadow: 0 28px 55px -15px rgba(201,169,97,.8);
        }

        .sc-parent-cta:hover::before {
          left: 100%;
        }

        .sc-parent-cta span,
        .sc-parent-cta svg {
          position: relative;
          z-index: 2;
        }

        /* =========================================
           CONNECTOR — FAMILY TREE BRANCH
        ========================================= */
        .sc-connector {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 0 0;
          margin-bottom: 40px;
        }

        /* Vertical drop from parent */
        .sc-connector-trunk {
          width: 1px;
          height: 48px;
          background: linear-gradient(180deg, rgba(139,106,62,.7), rgba(139,106,62,.4));
        }

        /* Glowing dot */
        .sc-connector-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${THEME.copper};
          position: relative;
          box-shadow:
            0 0 0 4px ${THEME.bg},
            0 0 0 5px rgba(139,106,62,.5),
            0 0 20px rgba(139,106,62,.6);
          margin: -2px 0;
        }

        .sc-connector-dot::after {
          content: "";
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px solid rgba(139,106,62,.35);
          animation: sc-ring 2.5s ease-out infinite;
        }

        @keyframes sc-ring {
          0% { transform: scale(.6); opacity: 1; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        /* Label pill */
        .sc-connector-label {
          margin-top: 18px;
          padding: 10px 22px;
          border-radius: 999px;
          background: #fff;
          border: 1px solid rgba(139,106,62,.3);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .3em;
          text-transform: uppercase;
          color: ${THEME.copper};
          box-shadow: 0 12px 30px -10px rgba(139,106,62,.3);
          position: relative;
          z-index: 2;
        }

        /* ⭐ BRANCH — tree structure to 4 children */
        .sc-branch {
          position: relative;
          width: 100%;
          height: 70px;
          margin-top: 4px;
        }

        /* Vertical drop from label to horizontal bar */
        .sc-branch::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 24px;
          background: rgba(139,106,62,.5);
        }

        /* Horizontal bar connecting all 4 children */
        .sc-branch::after {
          content: "";
          position: absolute;
          top: 24px;
          left: 12.5%;
          right: 12.5%;
          height: 1px;
          background: rgba(139,106,62,.5);
        }

        /* Vertical drops to each child */
        .sc-branch-drops {
          position: absolute;
          top: 24px;
          left: 0;
          right: 0;
          height: 46px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
          padding: 0;
        }

        .sc-branch-drop {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .sc-branch-drop::before {
          content: "";
          width: 1px;
          height: 46px;
          background: rgba(139,106,62,.5);
          display: block;
        }

        /* Small dots at the end of each drop */
        .sc-branch-drop::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${THEME.copper};
          box-shadow: 0 0 0 3px ${THEME.bg}, 0 0 0 4px rgba(139,106,62,.4);
        }

        /* =========================================
           CHILDREN HEADER
        ========================================= */
        .sc-children-head {
          text-align: center;
          margin-bottom: 55px;
        }

        .sc-children-title {
          margin: 0 auto;
          max-width: 700px;
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -.035em;
          color: ${THEME.ink};
        }

        .sc-children-title em {
          font-style: italic;
          color: ${THEME.copper};
          font-weight: 400;
        }

        .sc-children-sub {
          max-width: 520px;
          margin: 16px auto 0;
          font-size: 13.5px;
          line-height: 1.8;
          color: ${THEME.inkLight};
        }

        /* =========================================
           CHILDREN GRID
        ========================================= */
        .sc-children {
          display: grid;
          
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
        }

        .sc-child {
          position: relative;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          background: #fff;
          border-radius: 22px;
          overflow: hidden;
          box-shadow:
            0 20px 45px -20px rgba(30,43,36,.2),
            0 8px 20px -12px rgba(30,43,36,.1);
          transition: all .5s cubic-bezier(.2,.7,.2,1);
        }

        .sc-child:hover {
          transform: translateY(-10px);
          box-shadow:
            0 40px 80px -25px rgba(30,43,36,.4),
            0 15px 35px -15px rgba(139,106,62,.25);
        }

        .sc-child-image {
          position: relative;
          height: 280px;
          overflow: hidden;
          background: #eee;
        }

        .sc-child-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 1s cubic-bezier(.2,.7,.2,1), filter .6s ease;
          filter: brightness(.92) saturate(1);
        }

        .sc-child:hover .sc-child-image img {
          transform: scale(1.1);
          filter: brightness(1) saturate(1.1);
        }

        .sc-child-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0,0,0,.08) 0%, transparent 30%, transparent 50%, rgba(0,0,0,.55) 100%);
          pointer-events: none;
        }

        .sc-child-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent);
          transform: skewX(-20deg);
          transition: left 1s cubic-bezier(.2,.7,.2,1);
          pointer-events: none;
          z-index: 2;
        }

        .sc-child:hover .sc-child-shine {
          left: 150%;
        }

        .sc-child-num {
          position: absolute;
          top: 18px;
          left: 18px;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(255,255,255,.96);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Cormorant Garamond", serif;
          font-size: 18px;
          font-weight: 600;
          color: ${THEME.ink};
          box-shadow: 0 8px 20px rgba(0,0,0,.18);
          z-index: 3;
        }

        .sc-child-audience {
          position: absolute;
          top: 22px;
          right: 18px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(201,169,97,.95);
          backdrop-filter: blur(8px);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #fff;
          z-index: 3;
          box-shadow: 0 8px 20px rgba(139,106,62,.35);
        }

        .sc-child-arrow {
          position: absolute;
          bottom: 18px;
          right: 18px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,.96);
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${THEME.ink};
          opacity: 0;
          transform: translateY(12px) scale(.85);
          transition: all .45s cubic-bezier(.2,.7,.2,1);
          z-index: 3;
          box-shadow: 0 10px 25px rgba(0,0,0,.25);
        }

        .sc-child:hover .sc-child-arrow {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .sc-child-body {
          padding: 26px 24px 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .sc-child-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(139,106,62,.12), rgba(201,169,97,.08));
          color: ${THEME.copper};
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          transition: all .4s cubic-bezier(.2,.7,.2,1);
        }

        .sc-child:hover .sc-child-icon {
          background: linear-gradient(135deg, ${THEME.copper}, ${THEME.copperLight});
          color: #fff;
          transform: scale(1.08) rotate(-3deg);
        }

        .sc-child-index {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .24em;
          text-transform: uppercase;
          color: ${THEME.copper};
          margin-bottom: 10px;
        }

        .sc-child-title {
          margin: 0;
          font-family: "Cormorant Garamond", serif;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -.02em;
          color: ${THEME.ink};
          transition: color .3s ease;
        }

        .sc-child:hover .sc-child-title {
          color: ${THEME.copper};
        }

        .sc-child-tagline {
          margin: 12px 0 0;
          font-family: "Cormorant Garamond", serif;
          font-size: 15px;
          font-style: italic;
          line-height: 1.5;
          color: ${THEME.inkLight};
        }

        .sc-child-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          padding-top: 22px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: ${THEME.ink};
          opacity: .55;
          transition: all .35s ease;
        }

        .sc-child:hover .sc-child-link {
          opacity: 1;
          color: ${THEME.copper};
          gap: 12px;
        }

        /* =========================================
           FOOT
        ========================================= */
        .sc-foot {
          margin-top: 80px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .sc-foot-line {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,106,62,.5), transparent);
        }

        .sc-foot-text {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .35em;
          text-transform: uppercase;
          color: rgba(30,43,36,.45);
        }

        /* =========================================
           TABLET
        ========================================= */
        @media (max-width: 1000px) {
          .sc { padding: 95px 0 85px; }
          .sc-inner { padding: 0 30px; }

          .sc-parent { grid-template-columns: 1fr; min-height: auto; }
          .sc-parent-image { min-height: 460px; }
          .sc-parent-body { padding: 55px 45px; }

          .sc-children { grid-template-columns: repeat(2, 1fr); gap: 22px; }

          /* 2-column branch */
          .sc-branch::after {
            left: 25%;
            right: 25%;
          }

          .sc-branch-drops {
            grid-template-columns: repeat(2, 1fr);
            gap: 22px;
          }

          /* Only show 2 drops for 2-col layout */
          .sc-branch-drop:nth-child(n+3) {
            display: none;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */
        @media (max-width: 640px) {
          .sc { padding: 75px 0 65px; }
          .sc-inner { padding: 0 20px; }

          .sc-head { margin-bottom: 50px; }
          .sc-title { font-size: 46px; }
          .sc-sub { font-size: 13.5px; margin-top: 20px; }
          .sc-eyebrow { font-size: 9px; padding: 8px 16px; }

          .sc-parent { border-radius: 22px; }
          .sc-parent-image { min-height: 340px; }
          .sc-parent-badge { top: 20px; left: 20px; font-size: 8px; }
          .sc-parent-float { left: 24px; right: 24px; bottom: 24px; }
          .sc-parent-float-title { font-size: 32px; }
          .sc-parent-body { padding: 42px 28px 46px; }
          .sc-parent-title { font-size: 40px; }
          .sc-parent-tagline { font-size: 18px; }
          .sc-parent-desc { font-size: 13.5px; line-height: 1.85; }
          .sc-parent-cta { padding: 15px 24px; font-size: 10px; }

          .sc-connector { padding: 32px 0 0; margin-bottom: 30px; }
          .sc-connector-trunk { height: 32px; }
          .sc-connector-label { font-size: 8px; padding: 8px 16px; letter-spacing: .24em; }

          /* Hide branch on mobile */
          .sc-branch {
            height: 30px;
          }

          .sc-branch::after { display: none; }

          .sc-branch-drops { display: none; }

          .sc-children-head { margin-bottom: 35px; }
          .sc-children-title { font-size: 30px; }
          .sc-children-sub { font-size: 12.5px; }

          .sc-children { grid-template-columns: 1fr; gap: 20px; }
          .sc-child-image { height: 260px; }
          .sc-child-body { padding: 24px 22px 26px; }
          .sc-child-title { font-size: 23px; }
          .sc-child-audience { font-size: 7px; padding: 5px 10px; }
          .sc-child-num { width: 42px; height: 42px; font-size: 16px; }

          .sc-foot { margin-top: 55px; gap: 14px; }
          .sc-foot-line { width: 40px; }
          .sc-foot-text { font-size: 8px; letter-spacing: .28em; }
        }
      `}</style>

      <section className="sc">
        <div className="sc-inner">

          {/* ========== HEADER ========== */}
          <div className="sc-head">
            <span className="sc-eyebrow">
              <span className="sc-eyebrow-dot" />
              Our Services
            </span>
            <p className="sc-title">
              One Format.
              <br />
              <em>Four Editions.</em> Endless Stories.
            </p>
            <p className="sc-sub">
              Every book begins with the same master format — then takes shape
              around the story you want to preserve forever.
            </p>
          </div>

          {/* ========== PARENT — HERO BANNER ========== */}
          <div className="sc-parent">
            <div className="sc-parent-image">
              <img src={parent.image} alt={parent.title} />
              <span className="sc-parent-badge">
                <Sparkles size={11} strokeWidth={2} />
                The Master Format
              </span>

              <div className="sc-parent-float">
                <span className="sc-parent-float-label">Parent Collection</span>
                <div className="sc-parent-float-title">{parent.title}</div>
              </div>
            </div>

            <div className="sc-parent-body">
              <span className="sc-parent-kicker">Our Signature Collection</span>

              <h3 className="sc-parent-title">{parent.title}</h3>
              <p className="sc-parent-tagline">{parent.tagline}</p>

              <p className="sc-parent-desc">{parent.description}</p>

              <Link to={parent.path} className="sc-parent-cta">
                <span>{parent.ctaLabel}</span>
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
          

          {/* ========== CONNECTOR — BRANCHING TREE ========== */}
          <div className="sc-connector">
            {/* Vertical trunk from parent */}
            <div className="sc-connector-trunk" />

            {/* Glowing dot */}
            <div className="sc-connector-dot" />

            {/* Label pill */}
            <div className="sc-connector-label">Four Editions Inside</div>

            {/* ⭐ Branch tree to 4 children */}
            <div className="sc-branch">
              <div className="sc-branch-drops">
                <span className="sc-branch-drop" />
                <span className="sc-branch-drop" />
                <span className="sc-branch-drop" />
                <span className="sc-branch-drop" />
              </div>
            </div>
          </div>


          {/* ========== CHILDREN HEADER ========== */}


          {/* ========== CHILDREN ========== */}
          <div className="sc-children">
            {editions.map((ed) => {
              const Icon = ed.icon;
              return (
                <Link key={ed.path} to={ed.path} className="sc-child">
                  <div className="sc-child-image">
                    <img src={ed.image} alt={ed.title} loading="lazy" />
                    <div className="sc-child-overlay" />
                    <div className="sc-child-shine" />
                   
                    <span className="sc-child-audience">{ed.label}</span>
                    <span className="sc-child-arrow">
                      <ArrowUpRight size={18} strokeWidth={2.4} />
                    </span>
                  </div>

                  <div className="sc-child-body">
                    <span className="sc-child-icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>

                    <span className="sc-child-index">Edition {ed.number}</span>
                    <h4 className="sc-child-title">{ed.title}</h4>
                    <p className="sc-child-tagline">{ed.tagline}</p>

                    <span className="sc-child-link">
                      View Edition
                      <ArrowUpRight size={13} strokeWidth={2.5} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

         
          {/* ========== FOOT ========== */}
          <div className="sc-foot">
            <span className="sc-foot-line" />
            <span className="sc-foot-text">Every Book Begins With a Conversation</span>
            <span className="sc-foot-line" />
          </div>

        </div>
      </section>
    </>
  );
};

export default ServicesCards;