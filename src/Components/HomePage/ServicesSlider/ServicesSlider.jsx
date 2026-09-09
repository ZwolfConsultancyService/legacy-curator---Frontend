// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
// import Coffee from '../../../assets/stories/CoffeeTableBooks.jpeg';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const THEME = {
//   copper: '#8B6A3E',
//   ink: '#1E2B24',
//   inkLight: '#4A554F',
//   border: '#D4C9C0',
//   porcelain: '#F5F0EA'
// };
// import img1 from "../../../assets/stories/FamilyLegacy.jpg"
// import img2 from "../../../assets/stories/Business.jpeg"
// import img3 from "../../../assets/stories/Devotional.jpeg"
// import img4 from "../../../assets/stories/Individual.png"
// const ServicesCards = () => {
//   // ─── SERVICE DETAIL PAGE SLIDER DATA ──────────────────────────────────
//   // Yeh wahi data hai jo ServiceDetailPage ke VariantsSelector mein use hota hai
//   const sliderVariants = [
//     {
//       title: "Family Legacy Book",
//       tagline: "Generations, Displayed in Grandeur.",
//       image: img1,
//       path: img1
//     },
//     {
//       title: "Business Story Book",
//       tagline: "Your Brand, In Large Format.",
//       image: img2,
//       path: "/services/coffee-table-business-story-book"
//     },
//     {
//       title: "Devotional Book",
//       tagline: "Faith, Displayed With Grandeur.",
//       image: img3,
//       path: "/services/coffee-table-devotional-book"
//     },
//     {
//       title: "Individual Legacy Book",
//       tagline: "One Life, In Large Format.",
//       image: img4,
//       path: "/services/coffee-table-individual-legacy-book"
//     }
//   ];

//   // ─── VARIANT SLIDER TRACK ───────────────────────────────────────────────
//   const VariantSliderTrack = ({ variants }) => {
//     const trackRef = useRef(null);

//     const scrollByCard = (dir) => {
//       const track = trackRef.current;
//       if (!track) return;
//       const card = track.querySelector('.plate-card');
//       const cardWidth = card ? card.offsetWidth + 32 : 320;
//       track.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
//     };

//     return (
//       <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
//         <style>{`.plate-track::-webkit-scrollbar { display: none; }`}</style>
//         <div
//           ref={trackRef}
//           className="plate-track"
//           style={{
//             display: 'flex', gap: 32, overflowX: 'auto', scrollSnapType: 'x mandatory',
//             paddingBottom: 8, scrollbarWidth: 'none', msOverflowStyle: 'none',
//           }}
//         >
//           {variants.map((v, i) => {
//             const plateNumber = ['I', 'II', 'III', 'IV', 'V', 'VI'][i] || i + 1;
//             return (
//               <Link
//                 key={v.path}
//                 to={v.path}
//                 className="plate-card"
//                 style={{
//                   display: 'block', textDecoration: 'none', color: 'inherit',
//                   flex: '0 0 auto', width: 300, scrollSnapAlign: 'start',
//                 }}
//                 onMouseEnter={e => {
//                   const img = e.currentTarget.querySelector('.plate-img');
//                   const title = e.currentTarget.querySelector('.plate-title');
//                   if (img) img.style.transform = 'scale(1.03)';
//                   if (title) title.style.backgroundSize = '100% 1px';
//                 }}
//                 onMouseLeave={e => {
//                   const img = e.currentTarget.querySelector('.plate-img');
//                   const title = e.currentTarget.querySelector('.plate-title');
//                   if (img) img.style.transform = 'scale(1)';
//                   if (title) title.style.backgroundSize = '0% 1px';
//                 }}
//               >
//                 <div style={{
//                   position: 'relative', height: 300, overflow: 'hidden',
//                   border: `1px solid ${THEME.border}`, background: '#fff',
//                   borderRadius: '12px',
//                 }}>
//                   <img
//                     className="plate-img"
//                     src={v.image}
//                     alt={v.title}
//                     loading="lazy"
//                     style={{
//                       width: '100%', height: '100%', objectFit: 'cover',
//                       display: 'block', transition: 'transform 0.6s ease',
//                     }}
//                   />
//                 </div>

//                 <div style={{ padding: '16px 2px 0' }}>
//                   <p style={{
//                     fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 13,
//                     color: THEME.copper, margin: '0 0 4px',
//                   }}>
//                     Plate {plateNumber}
//                   </p>
//                   <p
//                     className="plate-title"
//                     style={{
//                       fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 600,
//                       color: THEME.ink, margin: '0 0 4px', lineHeight: 1.3,
//                       display: 'inline',
//                       backgroundImage: `linear-gradient(${THEME.ink}, ${THEME.ink})`,
//                       backgroundPosition: '0 100%', backgroundRepeat: 'no-repeat',
//                       backgroundSize: '0% 1px', transition: 'background-size 0.35s ease',
//                       paddingBottom: 2,
//                     }}
//                   >
//                     {v.title}
//                   </p>
//                   <p style={{
//                     fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 14,
//                     color: THEME.inkLight, margin: 0, lineHeight: 1.45,
//                   }}>
//                     {v.tagline}
//                   </p>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>

//         <button
//           onClick={() => scrollByCard(-1)}
//           aria-label="Previous"
//           style={{
//             position: 'absolute', top: '38%', left: 8, transform: 'translateY(-50%)',
//             width: 40, height: 40, borderRadius: '50%', border: `1px solid ${THEME.border}`,
//             background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
//             cursor: 'pointer', boxShadow: '0 4px 14px rgba(39,72,66,0.1)',
//           }}
//         >
//           <ChevronLeft size={18} color={THEME.ink} />
//         </button>
//         <button
//           onClick={() => scrollByCard(1)}
//           aria-label="Next"
//           style={{
//             position: 'absolute', top: '38%', right: 8, transform: 'translateY(-50%)',
//             width: 40, height: 40, borderRadius: '50%', border: `1px solid ${THEME.border}`,
//             background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
//             cursor: 'pointer', boxShadow: '0 4px 14px rgba(39,72,66,0.1)',
//           }}
//         >
//           <ChevronRight size={18} color={THEME.ink} />
//         </button>
//       </div>
//     );
//   };

//   // ─── VARIANTS SELECTOR (SERVICE DETAIL PAGE STYLE) ────────────────────
//   const VariantsSelector = ({ variants, parentTitle }) => (
//     <section style={{
//       background: THEME.porcelain, padding: '80px 0',
//       borderTop: `1px solid ${THEME.border}`, borderBottom: `1px solid ${THEME.border}`,
//     }}>
//       <div style={{ maxWidth: 600, margin: '0 auto 48px', textAlign: 'center', padding: '0 48px' }}>
//         <h2 style={{
//           fontFamily: "'Cormorant Garamond', serif",
//           fontSize: 'clamp(24px, 2.8vw, 36px)', fontWeight: 600,
//           color: THEME.ink, margin: '0 0 12px', lineHeight: 1.25,
//         }}>
//           {parentTitle}, told a few different ways
//         </h2>
//         <p style={{
//           fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
//           fontSize: 17, color: THEME.inkLight, margin: 0, lineHeight: 1.5,
//         }}>
//           Same coffee-table format, each edition set around a different story.
//         </p>
//       </div>

//       <VariantSliderTrack variants={variants} />
//     </section>
//   );

//   // Service data
//   const services = [
//     {
//       title: "Coffee Table Books",
//       tagline: "Art You Can Hold.",
//       desc: "Our coffee table books are crafted to be seen, felt, and admired, turning every page into a visual experience and a timeless conversation piece.",
//       image: Coffee,
//       path: "/services/coffee-table",
//     },
//   ];

//   return (
//     <>
//       <style>{`
//         .sv-section {
//           background: #F5F0EA;
//           padding: 80px 0;
//         }
//         .sv-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 48px;
//         }

//         .sv-top {
//           text-align: center;
//           margin-bottom: 80px;
//         }

//         .sv-eyebrow {
//           font-family: 'Montserrat', sans-serif;
//           font-size: 10px;
//           font-weight: 600;
//           letter-spacing: 0.35em;
//           text-transform: uppercase;
//           color: #8B6A3E;
//           margin-bottom: 18px;
//         }

//         .sv-main-title {
//           font-family: 'Montserrat', sans-serif;
//           font-size: 48px;
//           font-weight: 700;
//           color: #1E2B24;
//           line-height: 1.12;
//           letter-spacing: -0.02em;
//         }
//         .sv-main-title em {
//           font-style: italic;
//           font-weight: 300;
//           color: #8B6A3E;
//         }

//         .sv-row {
//           display: flex;
//           align-items: center;
//           gap: 72px;
//           margin-bottom: 0;
//         }

//         .sv-img-wrap {
//           flex: 0 0 48%;
//           position: relative;
//           border-radius: 20px;
//           overflow: hidden;
//           aspect-ratio: 4 / 3;
//         }
//         .sv-img-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//           transition: transform 0.8s ease;
//         }
//         .sv-row:hover .sv-img-wrap img { transform: scale(1.04); }

//         .sv-img-number {
//           position: absolute;
//           top: 20px;
//           left: 24px;
//           font-family: 'Montserrat', sans-serif;
//           font-size: 64px;
//           font-weight: 700;
//           color: rgba(255,255,255,0.18);
//           line-height: 1;
//           pointer-events: none;
//           letter-spacing: -0.02em;
//         }

//         .sv-text {
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//         }

//         .sv-tag {
//           display: inline-block;
//           font-family: 'Montserrat', sans-serif;
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: 0.32em;
//           text-transform: uppercase;
//           color: #8B6A3E;
//           margin-bottom: 14px;
//         }

//         .sv-card-title {
//           font-family: 'Montserrat', sans-serif;
//           font-size: 36px;
//           font-weight: 700;
//           color: #1E2B24;
//           line-height: 1.1;
//           letter-spacing: -0.02em;
//           margin-bottom: 10px;
//         }

//         .sv-tagline {
//           font-family: 'Montserrat', sans-serif;
//           font-size: 15px;
//           font-weight: 300;
//           font-style: italic;
//           color: #8B6A3E;
//           letter-spacing: 0.02em;
//           margin-bottom: 22px;
//         }

//         .sv-divider {
//           width: 48px;
//           height: 1px;
//           background: #8B6A3E;
//           margin-bottom: 22px;
//           opacity: 0.6;
//         }

//         .sv-desc {
//           font-family: 'Montserrat', sans-serif;
//           font-size: 14px;
//           font-weight: 400;
//           line-height: 1.9;
//           color: #4A554F;
//           letter-spacing: 0.01em;
//           margin-bottom: 34px;
//         }

//         .sv-cta {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           font-family: 'Montserrat', sans-serif;
//           font-size: 10px;
//           font-weight: 600;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: #1E2B24;
//           text-decoration: none;
//           border: 1px solid #1E2B24;
//           padding: 14px 28px;
//           border-radius: 50px;
//           transition: all 0.3s ease;
//           align-self: flex-start;
//         }
//         .sv-cta:hover {
//           background: #1E2B24;
//           color: #F5F0EA;
//         }

//         @media (max-width: 900px) {
//           .sv-container { padding: 0 32px; }
//           .sv-row {
//             flex-direction: column;
//             gap: 32px;
//           }
//           .sv-img-wrap { flex: none; width: 100%; aspect-ratio: 16 / 9; }
//           .sv-main-title { font-size: 36px; }
//           .sv-card-title { font-size: 28px; }
//         }
//         @media (max-width: 540px) {
//           .sv-section { padding: 60px 0; }
//           .sv-container { padding: 0 20px; }
//           .sv-main-title { font-size: 26px; }
//           .sv-top { margin-bottom: 48px; }
//           .sv-card-title { font-size: 22px; }
//           .sv-tagline { font-size: 13px; }
//           .sv-img-number { font-size: 44px; }
//         }
//       `}</style>

//       <section className="sv-section">
//         <div className="sv-container">

//           <div className="sv-top">
//             <p className="sv-eyebrow">Our Services</p>
//             <h2 className="sv-main-title">
//               Turn Your <em>Stories</em> Into Timeless Masterpieces.
//             </h2>
//           </div>

//           {/* ─── SERVICE CARDS ────────────────────────────────────────────── */}
//           {services.map((service, index) => (
//             <div key={index} className="sv-row">
//               <div className="sv-img-wrap">
//                 <img src={service.image} alt={service.title} />
//                 <span className="sv-img-number">0{index + 1}</span>
//               </div>

//               <div className="sv-text">
//                 <span className="sv-tag">Collection</span>
//                 <h3 className="sv-card-title">{service.title}</h3>
//                 <p className="sv-tagline">{service.tagline}</p>
//                 <div className="sv-divider" />
//                 <p className="sv-desc">{service.desc}</p>
//                 <Link to={service.path} className="sv-cta">
//                   Explore Collection &nbsp;→
//                 </Link>
//               </div>
//             </div>
//           ))}

//           {/* ─── SLIDER - SERVICE DETAIL PAGE STYLE ──────────────────────── */}
//           {/* Yeh wahi slider hai jo ServiceDetailPage mein dikhta hai */}
//           <VariantsSelector 
//             variants={sliderVariants} 
//             parentTitle="Coffee Table Books" 
//           />

//         </div>
//       </section>
//     </>
//   );
// };

// export default ServicesCards;

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Coffee from '../../../assets/stories/CoffeeTableBooks.jpeg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const THEME = {
  copper: '#8B6A3E',
  ink: '#1E2B24',
  inkLight: '#4A554F',
  border: '#D4C9C0',
  porcelain: '#F5F0EA'
};
import img1 from "../../../assets/stories/FamilyLegacy.jpg"
import img2 from "../../../assets/stories/Business.jpeg"
import img3 from "../../../assets/stories/Devotional.jpeg"
import img4 from "../../../assets/stories/Individual.png"

const ServicesCards = () => {
  const sliderVariants = [
    {
      title: "Family Legacy Book",
      tagline: "Generations, Displayed in Grandeur.",
      image: img1,
      path: "/services/coffee-table-family-legacy-book"
    },
    {
      title: "Business Story Book",
      tagline: "Your Brand, In Large Format.",
      image: img2,
      path: "/services/coffee-table-business-story-book"
    },
    {
      title: "Devotional Book",
      tagline: "Faith, Displayed With Grandeur.",
      image: img3,
      path: "/services/coffee-table-devotional-book"
    },
    {
      title: "Individual Legacy Book",
      tagline: "One Life, In Large Format.",
      image: img4,
      path: "/services/coffee-table-individual-legacy-book"
    }
  ];

  const VariantSliderTrack = ({ variants }) => {
    const trackRef = useRef(null);

    const scrollByCard = (dir) => {
      const track = trackRef.current;
      if (!track) return;
      const card = track.querySelector('.plate-card');
      const cardWidth = card ? card.offsetWidth + 32 : 320;
      track.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
    };

    return (
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
       
        
        <div
          ref={trackRef}
          className="plate-track"
          style={{
            display: 'flex', gap: 28, overflowX: 'auto', scrollSnapType: 'x mandatory',
            paddingBottom: 20, scrollbarWidth: 'none', msOverflowStyle: 'none',
          }}
        >
          {variants.map((v, i) => {
            return (

 <Link
                key={v.path}
                to={v.path}
                className="plate-card"
                style={{
                  display: 'block', textDecoration: 'none', color: 'inherit',
                  flex: '0 0 auto', width: 300, scrollSnapAlign: 'start',
                }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector('.plate-img');
                  const title = e.currentTarget.querySelector('.plate-title');
                  if (img) img.style.transform = 'scale(1.03)';
                  if (title) title.style.backgroundSize = '100% 1px';
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector('.plate-img');
                  const title = e.currentTarget.querySelector('.plate-title');
                  if (img) img.style.transform = 'scale(1)';
                  if (title) title.style.backgroundSize = '0% 1px';
                }}
              >
                <div style={{
                  position: 'relative', height: 300, overflow: 'hidden',
                  border: `1px solid ${THEME.border}`, background: '#fff',
                  borderRadius: '12px',
                }}>
                  <img
                    className="plate-img"
                    src={v.image}
                    alt={v.title}
                    loading="lazy"
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      display: 'block', transition: 'transform 0.6s ease',
                    }}
                  />
                </div>

                <div style={{ padding: '16px 2px 0' }}>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 13,
                    color: THEME.copper, margin: '0 0 4px',
                  }}>
                   
                  </p>
                  <p
                    className="plate-title"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 600,
                      color: THEME.ink, margin: '0 0 4px', lineHeight: 1.3,
                      display: 'inline',
                      backgroundImage: `linear-gradient(${THEME.ink}, ${THEME.ink})`,
                      backgroundPosition: '0 100%', backgroundRepeat: 'no-repeat',
                      backgroundSize: '0% 1px', transition: 'background-size 0.35s ease',
                      paddingBottom: 2,
                    }}
                  >
                    {v.title}
                  </p>
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 14,
                    color: THEME.inkLight, margin: 0, lineHeight: 1.45,
                  }}>
                    {v.tagline}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => scrollByCard(-1)}
          aria-label="Previous"
          className="slider-btn"
          style={{
            position: 'absolute', top: '42%', left: 4, transform: 'translateY(-50%)',
            width: 46, height: 46, borderRadius: '50%', border: `1px solid ${THEME.border}`,
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', boxShadow: '0 4px 20px rgba(39,72,66,0.08)',
          }}
        >
          <ChevronLeft size={20} color={THEME.ink} />
        </button>
        <button
          onClick={() => scrollByCard(1)}
          aria-label="Next"
          className="slider-btn"
          style={{
            position: 'absolute', top: '42%', right: 4, transform: 'translateY(-50%)',
            width: 46, height: 46, borderRadius: '50%', border: `1px solid ${THEME.border}`,
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', boxShadow: '0 4px 20px rgba(39,72,66,0.08)',
          }}
        >
          <ChevronRight size={20} color={THEME.ink} />
        </button>
      </div>
    );
  };

  const VariantsSelector = ({ variants, parentTitle }) => (
    <section style={{
      background: THEME.porcelain, padding: '80px 0 100px',
      borderTop: `1px solid ${THEME.border}`, borderBottom: `1px solid ${THEME.border}`,
    }}>
      <div style={{ maxWidth: 700, margin: '0 auto 56px', textAlign: 'center', padding: '0 48px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
          marginBottom: 20,
        }}>
          <span style={{ width: 40, height: 1, background: THEME.copper, opacity: 0.4 }} />
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase',
            color: THEME.copper, fontWeight: 600,
          }}>Explore Editions</span>
          <span style={{ width: 40, height: 1, background: THEME.copper, opacity: 0.4 }} />
        </div>
        
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 600,
          color: THEME.ink, margin: '0 0 14px', lineHeight: 1.2,
          letterSpacing: '-0.01em',
        }}>
          {parentTitle}, <span style={{ fontStyle: 'italic', color: THEME.copper }}>told a few different ways</span>
        </h2>
        
        <p style={{
          fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
          fontSize: 18, color: THEME.inkLight, margin: 0, lineHeight: 1.6,
          opacity: 0.8,
        }}>
          Same coffee-table format, each edition set around a different story.
        </p>
        
        <div style={{
          width: 60, height: 2, background: THEME.copper,
          margin: '24px auto 0', opacity: 0.4,
        }} />
      </div>

      <VariantSliderTrack variants={variants} />
    </section>
  );

  const services = [
    {
      title: "Coffee Table Books",
      tagline: "Art You Can Hold.",
      desc: "Our coffee table books are crafted to be seen, felt, and admired, turning every page into a visual experience and a timeless conversation piece.",
      image: Coffee,
      path: "/services/coffee-table",
    },
  ];

  return (
    <>
      <style>{`
        .sv-section {
          background: #F5F0EA;
          padding: 80px 0;
        }
        .sv-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .sv-top {
          text-align: center;
          margin-bottom: 80px;
        }

        .sv-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #8B6A3E;
          margin-bottom: 18px;
        }

        .sv-main-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 48px;
          font-weight: 700;
          color: #1E2B24;
          line-height: 1.12;
          letter-spacing: -0.02em;
        }
        .sv-main-title em {
          font-style: italic;
          font-weight: 300;
          color: #8B6A3E;
        }

        .sv-row {
          display: flex;
          align-items: center;
          gap: 72px;
          margin-bottom: 0;
        }

        .sv-img-wrap {
          flex: 0 0 48%;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 4 / 3;
        }
        .sv-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s ease;
        }
        .sv-row:hover .sv-img-wrap img { transform: scale(1.04); }

        .sv-img-number {
          position: absolute;
          top: 20px;
          left: 24px;
          font-family: 'Montserrat', sans-serif;
          font-size: 64px;
          font-weight: 700;
          color: rgba(255,255,255,0.18);
          line-height: 1;
          pointer-events: none;
          letter-spacing: -0.02em;
        }

        .sv-text {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .sv-tag {
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #8B6A3E;
          margin-bottom: 14px;
        }

        .sv-card-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #1E2B24;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 10px;
        }

        .sv-tagline {
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          font-weight: 300;
          font-style: italic;
          color: #8B6A3E;
          letter-spacing: 0.02em;
          margin-bottom: 22px;
        }

        .sv-divider {
          width: 48px;
          height: 1px;
          background: #8B6A3E;
          margin-bottom: 22px;
          opacity: 0.6;
        }

        .sv-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.9;
          color: #4A554F;
          letter-spacing: 0.01em;
          margin-bottom: 34px;
        }

        .sv-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #1E2B24;
          text-decoration: none;
          border: 1px solid #1E2B24;
          padding: 14px 28px;
          border-radius: 50px;
          transition: all 0.3s ease;
          align-self: flex-start;
        }
        .sv-cta:hover {
          background: #1E2B24;
          color: #F5F0EA;
        }

        @media (max-width: 900px) {
          .sv-container { padding: 0 32px; }
          .sv-row {
            flex-direction: column;
            gap: 32px;
          }
          .sv-img-wrap { flex: none; width: 100%; aspect-ratio: 16 / 9; }
          .sv-main-title { font-size: 36px; }
          .sv-card-title { font-size: 28px; }
        }
        @media (max-width: 540px) {
          .sv-section { padding: 60px 0; }
          .sv-container { padding: 0 20px; }
          .sv-main-title { font-size: 26px; }
          .sv-top { margin-bottom: 48px; }
          .sv-card-title { font-size: 22px; }
          .sv-tagline { font-size: 13px; }
          .sv-img-number { font-size: 44px; }
        }
      `}</style>

      <section className="sv-section">
        <div className="sv-container">

          <div className="sv-top">
            <p className="sv-eyebrow">Our Services</p>
            <h2 className="sv-main-title">
              Turn Your <em>Stories</em> Into Timeless Masterpieces.
            </h2>
          </div>

          {services.map((service, index) => (
            <div key={index} className="sv-row">
              <div className="sv-img-wrap">
                <img src={service.image} alt={service.title} />
                <span className="sv-img-number">0{index + 1}</span>
              </div>

              <div className="sv-text">
                <span className="sv-tag">Collection</span>
                <h3 className="sv-card-title">{service.title}</h3>
                <p className="sv-tagline">{service.tagline}</p>
                <div className="sv-divider" />
                <p className="sv-desc">{service.desc}</p>
                <Link to={service.path} className="sv-cta">
                  Explore Collection &nbsp;→
                </Link>
              </div>
            </div>
          ))}

          <VariantsSelector 
            variants={sliderVariants} 
            parentTitle="Coffee Table Books" 
          />

        </div>
      </section>
    </>
  );
};

export default ServicesCards;



    