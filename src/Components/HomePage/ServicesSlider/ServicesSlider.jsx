

// import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';

// const services = [
//   { title: 'Photo Books', tagline: 'Memories Frozen in Time.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', path: '/services/photo-book' },
//   { title: 'Travel Books', tagline: 'Every Journey Deserves a Story.', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80', path: '/services/travel-book' },
//   { title: 'Legacy Books', tagline: 'Stories Passed Down Forever.', image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=800&q=80', path: '/services/legacy-book' },
//   { title: 'Coffee Table Books', tagline: 'Art You Can Hold.', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80', path: '/services/coffee-table' },
//   { title: 'Memoir Books', tagline: 'Your Life. Your Words. Forever.', image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&q=80', path: '/services/memoir' },
//   { title: 'Wedding Books', tagline: 'Love Captured. Love Kept.', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', path: '/services/wedding-book' },
// ];

// const ServicesCards = () => {
//   const trackRef = useRef(null);
//   const doubledServices = [...services, ...services];

//   const handleManualScroll = (direction) => {
//     if (trackRef.current) {
//       // Manual scroll ke liye animation ko temporary pause ya offset dena padta hai
//       // Par best approach hai scrollBy use karna agar hum smooth behavior chahte hain
//       const scrollAmount = direction === 'left' ? -350 : 350;
//       trackRef.current.closest('.sv-right').scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       <style>{`
//         .sv-section {
//           background: #F5F0EA;
//           padding: 100px 0;
//           font-family: 'DM Sans', sans-serif;
//           overflow: hidden;
//         }
//         .sv-container {
//           max-width: 1400px;
//           margin: 0 auto;
//           display: flex;
//           gap: 60px;
//           padding: 0 48px;
//         }
//         .sv-left {
//           flex: 0 0 350px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//         }
//         .sv-eyebrow {
//           font-size: 11px;
//           letter-spacing: 0.3em;
//           text-transform: uppercase;
//           color: #8B6A3E;
//           font-weight: 600;
//           margin-bottom: 20px;
//         }
//         .sv-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 52px;
//           font-weight: 600;
//           color: #1E2B24;
//           line-height: 1.1;
//           margin-bottom: 24px;
//         }
//         .sv-title em {
//           font-style: italic;
//           color: #8B6A3E;
//         }
//         .sv-desc {
//           font-size: 16px;
//           line-height: 1.7;
//           color: #4A554F;
//           margin-bottom: 30px;
//         }

//         /* --- BUTTONS STYLE --- */
//         .sv-nav-btns {
//           display: flex;
//           gap: 12px;
//           margin-top: 10px;
//         }
//         .sv-btn {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           border: 1px solid #1E2B24;
//           background: transparent;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s ease;
//           color: #1E2B24;
//         }
//         .sv-btn:hover {
//           background: #1E2B24;
//           color: #F5F0EA;
//         }

//         /* --- AUTO SCROLLING LOGIC --- */
//         .sv-right {
//           flex: 1;
//           position: relative;
//           overflow: hidden;
//           /* Removed Shadow - Keeping it Simple */
//         }

//         .sv-track {
//           display: flex;
//           gap: 24px;
//           width: max-content;
//           animation: scroll-left 40s linear infinite; /* SLOWED DOWN TO 40s */
//         }

//         .sv-track:hover {
//           animation-play-state: paused;
//         }

//         @keyframes scroll-left {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(calc(-50% - 12px)); }
//         }

//         .sv-card {
//           flex: 0 0 300px;
//           position: relative;
//           border-radius: 15px; /* Thoda kam rounded for simple look */
//           overflow: hidden;
//           aspect-ratio: 4 / 5;
//           text-decoration: none;
//           box-shadow: none !important; /* Strictly no shadow */
//           border: 1px solid rgba(30, 43, 36, 0.05); /* Very light border instead of shadow */
//         }
        
//         .sv-card-img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 1s ease;
//         }
        
//         .sv-card-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%);
//         }
        
//         .sv-card-content {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           padding: 24px;
//           z-index: 2;
//         }
        
//         .sv-card-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 24px;
//           color: #fff;
//           margin-bottom: 4px;
//         }
        
//         .sv-card-cta {
//           font-size: 10px;
//           text-transform: uppercase;
//           letter-spacing: 0.15em;
//           color: #8B6A3E;
//           font-weight: 600;
//         }

//         @media (max-width: 1024px) {
//           .sv-container { flex-direction: column; padding: 0 24px; }
//           .sv-left { flex: none; width: 100%; margin-bottom: 30px; }
//         }
//       `}</style>

//       <section className="sv-section">
//         <div className="sv-container">
//           <div className="sv-left">
//             <p className="sv-eyebrow">Our Services</p>
//             <h2 className="sv-title">
//               Crafting <em>Legacy</em> in Every Page
//             </h2>
//             <p className="sv-desc">
//               Explore our curated book types designed to preserve your life's greatest moments.
//             </p>
            
//             {/* MANUAL NAVIGATION BUTTONS */}
//             <div className="sv-nav-btns">
//               <button className="sv-btn" onClick={() => handleManualScroll('left')} aria-label="Scroll Left">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                   <path d="M19 12H5M12 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button className="sv-btn" onClick={() => handleManualScroll('right')} aria-label="Scroll Right">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                   <path d="M5 12h14m-7 7l7-7-7-7" />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           <div className="sv-right">
//             <div className="sv-track" ref={trackRef}>
//               {doubledServices.map((service, index) => (
//                 <Link key={index} to={service.path} className="sv-card">
//                   <img src={service.image} alt={service.title} className="sv-card-img" />
//                   <div className="sv-card-overlay" />
//                   <div className="sv-card-content">
//                     <h3 className="sv-card-title">{service.title}</h3>
//                     <span className="sv-card-cta">Explore Collection →</span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServicesCards;



import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { title: 'Photo Books', tagline: 'Memories Frozen in Time.', desc: 'Relive your most cherished moments through stunning, professionally printed photo books that tell your story beautifully.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', path: '/services/photo-book' },
  { title: 'Travel Books', tagline: 'Every Journey Deserves a Story.', desc: 'Document your adventures across the globe in a handcrafted travel book that captures every destination, memory, and emotion.', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80', path: '/services/travel-book' },
  { title: 'Legacy Books', tagline: 'Stories Passed Down Forever.', desc: 'Preserve your family history, wisdom, and values in a timeless legacy book that future generations will treasure forever.', image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=800&q=80', path: '/services/legacy-book' },
  { title: 'Coffee Table Books', tagline: 'Art You Can Hold.', desc: 'Transform your finest photography or artwork into a breathtaking coffee table book that becomes the centerpiece of any room.', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80', path: '/services/coffee-table' },
  { title: 'Memoir Books', tagline: 'Your Life. Your Words. Forever.', desc: 'Turn your personal experiences and life story into a beautifully written memoir that captures who you truly are.', image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&q=80', path: '/services/memoir' },
  { title: 'Wedding Books', tagline: 'Love Captured. Love Kept.', desc: 'Celebrate your special day with an elegant wedding book that immortalizes every emotion, vow, and precious moment.', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', path: '/services/wedding-book' },
];

const ServicesCards = () => {
  return (
    <>
      <style>{`
        .sv-section {
          background: #F5F0EA;
          padding: 80px 0;
          font-family: 'DM Sans', sans-serif;
        }
        .sv-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        /* --- SECTION HEADER --- */
        .sv-top {
          text-align: center;
          margin-bottom: 80px;
        }
        .sv-eyebrow {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #8B6A3E;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .sv-main-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 600;
          color: #1E2B24;
          line-height: 1.1;
        }
        .sv-main-title em {
          font-style: italic;
          color: #8B6A3E;
        }

        /* --- ZIGZAG ROW --- */
        .sv-row {
          display: flex;
          align-items: center;
          gap: 64px;
          margin-bottom: 100px;
        }
        .sv-row:last-child { margin-bottom: 0; }

        /* Even index = image left, text right (default) */
        /* Odd index = image right, text left (reverse) */
        .sv-row.reverse { flex-direction: row-reverse; }

        /* --- IMAGE SIDE --- */
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
        .sv-row:hover .sv-img-wrap img {
          transform: scale(1.04);
        }
        .sv-img-number {
          position: absolute;
          top: 20px;
          left: 24px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px;
          font-weight: 700;
          color: rgba(255,255,255,0.2);
          line-height: 1;
          pointer-events: none;
        }

        /* --- TEXT SIDE --- */
        .sv-text {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .sv-tag {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #8B6A3E;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .sv-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 600;
          color: #1E2B24;
          line-height: 1.1;
          margin-bottom: 12px;
        }
        .sv-tagline {
          font-size: 16px;
          color: #8B6A3E;
          font-style: italic;
          margin-bottom: 20px;
        }
        .sv-divider {
          width: 48px;
          height: 1px;
          background: #8B6A3E;
          margin-bottom: 20px;
        }
        .sv-desc {
          font-size: 15px;
          line-height: 1.8;
          color: #4A554F;
          margin-bottom: 32px;
        }
        .sv-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 700;
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

        /* --- RESPONSIVE --- */
        @media (max-width: 900px) {
          .sv-container { padding: 0 32px; }
          .sv-row, .sv-row.reverse {
            flex-direction: column;
            gap: 32px;
            margin-bottom: 64px;
          }
          .sv-img-wrap { flex: none; width: 100%; aspect-ratio: 16 / 9; }
          .sv-card-title { font-size: 34px; }
          .sv-main-title { font-size: 38px; }
        }
        @media (max-width: 540px) {
          .sv-section { padding: 60px 0; }
          .sv-container { padding: 0 20px; }
          .sv-main-title { font-size: 30px; }
          .sv-top { margin-bottom: 48px; }
          .sv-card-title { font-size: 28px; }
          .sv-row { margin-bottom: 48px; }
          .sv-img-number { font-size: 44px; }
        }
      `}</style>

      <section className="sv-section">
        <div className="sv-container">

          {/* TOP HEADER */}
          <div className="sv-top">
            <p className="sv-eyebrow">Our Services</p>
            <h2 className="sv-main-title">
              Crafting <em>Legacy</em> in Every Page
            </h2>
          </div>

          {/* ZIGZAG ROWS */}
          {services.map((service, index) => (
            <div key={index} className={`sv-row ${index % 2 !== 0 ? 'reverse' : ''}`}>

              {/* IMAGE */}
              <div className="sv-img-wrap">
                <img src={service.image} alt={service.title} />
                <span className="sv-img-number">0{index + 1}</span>
              </div>

              {/* TEXT */}
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

        </div>
      </section>
    </>
  );
};

export default ServicesCards;