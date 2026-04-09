// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import image from '../../../assets/image.jpg'
// const services = [
//   {
//     title: 'Memoir Books',
//     tagline: 'Your Life. Your Words. Forever.',
//     image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&q=80',
//     path: '/services/memoir',
//   },
//   {
//     title: 'Coffee Table Books',
//     tagline: 'Art You Can Hold.',
//     image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80',
//     path: '/services/coffee-table',
//   },
//   {
//     title: 'Family Legacy Books',
//     tagline: 'Stories Passed Down Forever.',
//     image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=800&q=80',
//     path: '/services/family-legacy',
//   },
//   {
//     title: 'Business Story Books',
//     tagline: 'Your Brand. Your Legacy.',
//     image: image,
//     path: '/services/business',
//   },
//   {
//     title: 'Photography Books',
//     tagline: 'Every Frame Tells a Story.',
//     image: "https://i.pinimg.com/1200x/89/df/66/89df66a701f820eda6906b7b56854c6e.jpg",
//     path: '/services/photography',
//   },
// ];

// const VISIBLE = 3;

// const ServicesCards = () => {
//   const [hovered, setHovered] = useState(null);
//   const [start, setStart] = useState(0);

//   const visible = services.slice(start, start + VISIBLE);
//   const canPrev = start > 0;
//   const canNext = start + VISIBLE < services.length;

//   return (
//     <>
//       <style>{`
//         .sv-section {
//           background: #F5F0EA;
//           padding: 80px 48px 100px;
//           font-family: 'DM Sans', sans-serif;
//         }

//         .sv-header {
//           display: flex;
//           align-items: flex-end;
//           justify-content: space-between;
//           max-width: 1200px;
//           margin: 0 auto 52px;
//           gap: 24px;
//         }

//         .sv-eyebrow {
//           font-size: 10px;
//           letter-spacing: 0.28em;
//           text-transform: uppercase;
//           color: #8B6A3E;
//           font-weight: 500;
//           margin-bottom: 12px;
//         }

//         .sv-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(32px, 4vw, 54px);
//           font-weight: 600;
//           color: #1E2B24;
//           line-height: 1.1;
//           margin: 0;
//         }

//         .sv-title em {
//           font-style: italic;
//           color: #8B6A3E;
//         }

//         .sv-arrows {
//           display: flex;
//           gap: 10px;
//           flex-shrink: 0;
//         }

//         .sv-arrow {
//           width: 44px;
//           height: 44px;
//           border-radius: 50%;
//           border: 1.5px solid #1E2B24;
//           background: transparent;
//           cursor: pointer;
//           font-size: 16px;
//           color: #1E2B24;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.25s ease;
//         }

//         .sv-arrow:hover:not(:disabled) {
//           background: #1E2B24;
//           color: #F5F0EA;
//         }

//         .sv-arrow:disabled {
//           opacity: 0.2;
//           cursor: default;
//         }

//         .sv-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .sv-card {
//           position: relative;
//           border-radius: 20px;
//           overflow: hidden;
//           cursor: pointer;
//           aspect-ratio: 1 / 1;
//           transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .sv-card:hover {
//           transform: translateY(-6px);
//         }

//         .sv-card-img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//           transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .sv-card:hover .sv-card-img {
//           transform: scale(1.07);
//         }

//         .sv-card-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to top,
//             rgba(15, 20, 17, 0.88) 0%,
//             rgba(15, 20, 17, 0.3) 55%,
//             rgba(15, 20, 17, 0.0) 100%
//           );
//         }

//         .sv-card-num {
//           position: absolute;
//           top: 22px;
//           left: 24px;
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 12px;
//           letter-spacing: 0.2em;
//           color: rgba(245, 240, 234, 0.4);
//         }

//         .sv-card-body {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           padding: 28px 26px;
//         }

//         .sv-card-line {
//           width: 28px;
//           height: 1.5px;
//           background: #8B6A3E;
//           margin-bottom: 14px;
//           transition: width 0.4s ease;
//           border-radius: 2px;
//         }

//         .sv-card:hover .sv-card-line {
//           width: 52px;
//         }

//         .sv-card-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 26px;
//           font-weight: 600;
//           color: #F5F0EA;
//           margin: 0 0 8px;
//           line-height: 1.15;
//         }

//         .sv-card-tagline {
//           font-size: 12px;
//           font-weight: 300;
//           color: rgba(245, 240, 234, 0.6);
//           letter-spacing: 0.04em;
//           margin: 0 0 20px;
//           opacity: 0;
//           transform: translateY(8px);
//           transition: opacity 0.35s ease, transform 0.35s ease;
//         }

//         .sv-card:hover .sv-card-tagline {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sv-card-cta {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           font-size: 10px;
//           font-weight: 500;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           color: #F5F0EA;
//           text-decoration: none;
//           opacity: 0;
//           transform: translateY(8px);
//           transition: opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s, gap 0.2s ease;
//           border-bottom: 1px solid rgba(245,240,234,0.3);
//           padding-bottom: 2px;
//         }

//         .sv-card:hover .sv-card-cta {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .sv-card-cta:hover {
//           gap: 14px;
//           border-color: #F5F0EA;
//         }

//         .sv-dots {
//           display: flex;
//           justify-content: center;
//           gap: 8px;
//           margin-top: 40px;
//         }

//         .sv-dot {
//           height: 6px;
//           border-radius: 99px;
//           background: #1E2B24;
//           border: none;
//           cursor: pointer;
//           transition: width 0.3s ease, opacity 0.3s ease;
//           padding: 0;
//         }

//         @media (max-width: 860px) {
//           .sv-section { padding: 40px 24px 80px; }
//           .sv-grid { grid-template-columns: 1fr 1fr; }
//         }

//         @media (max-width: 560px) {
//           .sv-grid { grid-template-columns: 1fr; }
//           .sv-card-tagline, .sv-card-cta { opacity: 1; transform: none; }
//         }
//       `}</style>

//       <section className="sv-section">
//         <div className="sv-header">
//           <div>
//             <p className="sv-eyebrow">What We Create</p>
//             <h2 className="sv-title">
//               Books crafted for <em>every legacy</em>
//             </h2>
//           </div>
//           <div className="sv-arrows">
//             <button className="sv-arrow" disabled={!canPrev} onClick={() => setStart(s => s - 1)}>←</button>
//             <button className="sv-arrow" disabled={!canNext} onClick={() => setStart(s => s + 1)}>→</button>
//           </div>
//         </div>

//         <div className="sv-grid">
//           {visible.map((service, i) => {
//             const realIndex = start + i;
//             return (
//               <div
//                 key={realIndex}
//                 className="sv-card"
//                 onMouseEnter={() => setHovered(realIndex)}
//                 onMouseLeave={() => setHovered(null)}
//               >
//                 <img src={service.image} alt={service.title} className="sv-card-img" />
//                 <div className="sv-card-overlay" />
//                 <span className="sv-card-num">0{realIndex + 1}</span>
//                 <div className="sv-card-body">
//                   <div className="sv-card-line" />
//                   <h3 className="sv-card-title">{service.title}</h3>
//                   <p className="sv-card-tagline">{service.tagline}</p>
//                   <Link to={service.path} className="sv-card-cta">Explore →</Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="sv-dots">
//           {services.map((_, i) => (
//             <button
//               key={i}
//               className="sv-dot"
//               onClick={() => setStart(Math.min(i, services.length - VISIBLE))}
//               style={{
//                 width: i >= start && i < start + VISIBLE ? '20px' : '6px',
//                 opacity: i >= start && i < start + VISIBLE ? 1 : 0.25,
//               }}
//             />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServicesCards;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const services = [
//   {
//     title: 'Photo Books',
//     tagline: 'Memories Frozen in Time.',
//     description: 'Transform your cherished photographs into a stunning bound collection.',
//     image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
//     path: '/services/photo-book',
//     slug: 'photo-book',
//   },
//   {
//     title: 'Travel Books',
//     tagline: 'Every Journey Deserves a Story.',
//     description: 'Document your adventures with beautifully crafted travel narratives.',
//     image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
//     path: '/services/travel-book',
//     slug: 'travel-book',
//   },
//   {
//     title: 'Legacy Books',
//     tagline: 'Stories Passed Down Forever.',
//     description: 'Preserve your family heritage for generations to come.',
//     image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=800&q=80',
//     path: '/services/legacy-book',
//     slug: 'legacy-book',
//   },
//   {
//     title: 'Coffee Table Books',
//     tagline: 'Art You Can Hold.',
//     description: 'Stunning large-format books that become centrepieces of any room.',
//     image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80',
//     path: '/services/coffee-table',
//     slug: 'coffee-table',
//   },
//   {
//     title: 'Memoir Books',
//     tagline: 'Your Life. Your Words. Forever.',
//     description: 'Your personal story told with depth, emotion, and elegance.',
//     image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&q=80',
//     path: '/services/memoir',
//     slug: 'memoir',
//   },
//   {
//     title: 'Wedding Books',
//     tagline: 'Love Captured. Love Kept.',
//     description: 'A timeless keepsake of your most precious day.',
//     image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
//     path: '/services/wedding-book',
//     slug: 'wedding-book',
//   },
//   {
//     title: 'Vision & Passion Books',
//     tagline: 'Inspire. Motivate. Transform.',
//     description: 'Bold books that capture your vision, values, and purpose.',
//     image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
//     path: '/services/vision-book',
//     slug: 'vision-book',
//   },
//   {
//     title: 'Business Story Books',
//     tagline: 'Your Brand. Your Legacy.',
//     description: 'Chronicle your company journey and inspire your audience.',
//     image: 'https://i.pinimg.com/736x/56/ca/a8/56caa84f4bdc8c6292a4a91b90b13770.jpg',
//     path: '/services/business',
//     slug: 'business',
//   },
// ];

// const VISIBLE = 3;

// const ServicesCards = () => {
//   const [hovered, setHovered] = useState(null);
//   const [start, setStart] = useState(0);

//   const visible = services.slice(start, start + VISIBLE);
//   const canPrev = start > 0;
//   const canNext = start + VISIBLE < services.length;

//   return (
//     <>
//       <style>{`
//         .sv-section {
//           background: #F5F0EA;
//           padding: 80px 48px 100px;
//           font-family: 'DM Sans', sans-serif;
//         }
//         .sv-header {
//           display: flex;
//           align-items: flex-end;
//           justify-content: space-between;
//           max-width: 1200px;
//           margin: 0 auto 52px;
//           gap: 24px;
//         }
//         .sv-eyebrow {
//           font-size: 10px;
//           letter-spacing: 0.28em;
//           text-transform: uppercase;
//           color: #8B6A3E;
//           font-weight: 500;
//           margin-bottom: 12px;
//         }
//         .sv-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(32px, 4vw, 54px);
//           font-weight: 600;
//           color: #1E2B24;
//           line-height: 1.1;
//           margin: 0;
//         }
//         .sv-title em {
//           font-style: italic;
//           color: #8B6A3E;
//         }
//         .sv-arrows {
//           display: flex;
//           gap: 10px;
//           flex-shrink: 0;
//         }
//         .sv-arrow {
//           width: 44px;
//           height: 44px;
//           border-radius: 50%;
//           border: 1.5px solid #1E2B24;
//           background: transparent;
//           cursor: pointer;
//           font-size: 16px;
//           color: #1E2B24;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.25s ease;
//         }
//         .sv-arrow:hover:not(:disabled) {
//           background: #1E2B24;
//           color: #F5F0EA;
//         }
//         .sv-arrow:disabled {
//           opacity: 0.2;
//           cursor: default;
//         }
//         .sv-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//           max-width: 1200px;
//           margin: 0 auto;
//         }
//         .sv-card {
//           position: relative;
//           border-radius: 20px;
//           overflow: hidden;
//           cursor: pointer;
//           aspect-ratio: 1 / 1;
//           transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//           text-decoration: none;
//           display: block;
//         }
//         .sv-card:hover {
//           transform: translateY(-6px);
//         }
//         .sv-card-img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//           transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
//         }
//         .sv-card:hover .sv-card-img {
//           transform: scale(1.07);
//         }
//         .sv-card-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to top,
//             rgba(15, 20, 17, 0.88) 0%,
//             rgba(15, 20, 17, 0.3) 55%,
//             rgba(15, 20, 17, 0.0) 100%
//           );
//         }
//         .sv-card-num {
//           position: absolute;
//           top: 22px;
//           left: 24px;
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 12px;
//           letter-spacing: 0.2em;
//           color: rgba(245, 240, 234, 0.4);
//         }
//         .sv-card-body {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           padding: 28px 26px;
//         }
//         .sv-card-line {
//           width: 28px;
//           height: 1.5px;
//           background: #8B6A3E;
//           margin-bottom: 14px;
//           transition: width 0.4s ease;
//           border-radius: 2px;
//         }
//         .sv-card:hover .sv-card-line {
//           width: 52px;
//         }
//         .sv-card-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 26px;
//           font-weight: 600;
//           color: #F5F0EA;
//           margin: 0 0 8px;
//           line-height: 1.15;
//         }
//         .sv-card-tagline {
//           font-size: 12px;
//           font-weight: 300;
//           color: rgba(245, 240, 234, 0.6);
//           letter-spacing: 0.04em;
//           margin: 0 0 20px;
//           opacity: 0;
//           transform: translateY(8px);
//           transition: opacity 0.35s ease, transform 0.35s ease;
//         }
//         .sv-card:hover .sv-card-tagline {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .sv-card-cta {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           font-size: 10px;
//           font-weight: 500;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           color: #F5F0EA;
//           text-decoration: none;
//           opacity: 0;
//           transform: translateY(8px);
//           transition: opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s, gap 0.2s ease;
//           border-bottom: 1px solid rgba(245,240,234,0.3);
//           padding-bottom: 2px;
//         }
//         .sv-card:hover .sv-card-cta {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .sv-card-cta:hover {
//           gap: 14px;
//           border-color: #F5F0EA;
//         }
//         .sv-dots {
//           display: flex;
//           justify-content: center;
//           gap: 8px;
//           margin-top: 40px;
//         }
//         .sv-dot {
//           height: 6px;
//           border-radius: 99px;
//           background: #1E2B24;
//           border: none;
//           cursor: pointer;
//           transition: width 0.3s ease, opacity 0.3s ease;
//           padding: 0;
//         }
//         @media (max-width: 860px) {
//           .sv-section { padding: 40px 24px 80px; }
//           .sv-grid { grid-template-columns: 1fr 1fr; }
//         }
//         @media (max-width: 560px) {
//           .sv-grid { grid-template-columns: 1fr; }
//           .sv-card-tagline, .sv-card-cta { opacity: 1; transform: none; }
//         }
//       `}</style>

//       <section className="sv-section">
//         <div className="sv-header">
//           <div>
//             <p className="sv-eyebrow">What We Create</p>
//             <h2 className="sv-title">
//               Books crafted for <em>every legacy</em>
//             </h2>
//           </div>
//           <div className="sv-arrows">
//             <button className="sv-arrow" disabled={!canPrev} onClick={() => setStart(s => s - 1)}>←</button>
//             <button className="sv-arrow" disabled={!canNext} onClick={() => setStart(s => s + 1)}>→</button>
//           </div>
//         </div>

//         <div className="sv-grid">
//           {visible.map((service, i) => {
//             const realIndex = start + i;
//             return (
//               <Link
//                 key={realIndex}
//                 to={service.path}
//                 className="sv-card"
//                 onMouseEnter={() => setHovered(realIndex)}
//                 onMouseLeave={() => setHovered(null)}
//                 aria-label={`Learn more about ${service.title}`}
//               >
//                 <img src={service.image} alt={service.title} className="sv-card-img" loading="lazy" />
//                 <div className="sv-card-overlay" />
//                 <span className="sv-card-num">0{realIndex + 1}</span>
//                 <div className="sv-card-body">
//                   <div className="sv-card-line" />
//                   <h3 className="sv-card-title">{service.title}</h3>
//                   <p className="sv-card-tagline">{service.tagline}</p>
//                   <span className="sv-card-cta">Explore →</span>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>

//         <div className="sv-dots">
//           {services.map((_, i) => (
//             <button
//               key={i}
//               className="sv-dot"
//               onClick={() => setStart(Math.min(i, services.length - VISIBLE))}
//               aria-label={`Go to slide ${i + 1}`}
//               style={{
//                 width: i >= start && i < start + VISIBLE ? '20px' : '6px',
//                 opacity: i >= start && i < start + VISIBLE ? 1 : 0.25,
//               }}
//             />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServicesCards;



import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const services = [
  { title: 'Photo Books', tagline: 'Memories Frozen in Time.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', path: '/services/photo-book' },
  { title: 'Travel Books', tagline: 'Every Journey Deserves a Story.', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80', path: '/services/travel-book' },
  { title: 'Legacy Books', tagline: 'Stories Passed Down Forever.', image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=800&q=80', path: '/services/legacy-book' },
  { title: 'Coffee Table Books', tagline: 'Art You Can Hold.', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80', path: '/services/coffee-table' },
  { title: 'Memoir Books', tagline: 'Your Life. Your Words. Forever.', image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&q=80', path: '/services/memoir' },
  { title: 'Wedding Books', tagline: 'Love Captured. Love Kept.', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', path: '/services/wedding-book' },
];

const ServicesCards = () => {
  const trackRef = useRef(null);
  const doubledServices = [...services, ...services];

  const handleManualScroll = (direction) => {
    if (trackRef.current) {
      // Manual scroll ke liye animation ko temporary pause ya offset dena padta hai
      // Par best approach hai scrollBy use karna agar hum smooth behavior chahte hain
      const scrollAmount = direction === 'left' ? -350 : 350;
      trackRef.current.closest('.sv-right').scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        .sv-section {
          background: #F5F0EA;
          padding: 100px 0;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }
        .sv-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          gap: 60px;
          padding: 0 48px;
        }
        .sv-left {
          flex: 0 0 350px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .sv-eyebrow {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #8B6A3E;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .sv-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 600;
          color: #1E2B24;
          line-height: 1.1;
          margin-bottom: 24px;
        }
        .sv-title em {
          font-style: italic;
          color: #8B6A3E;
        }
        .sv-desc {
          font-size: 16px;
          line-height: 1.7;
          color: #4A554F;
          margin-bottom: 30px;
        }

        /* --- BUTTONS STYLE --- */
        .sv-nav-btns {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }
        .sv-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid #1E2B24;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #1E2B24;
        }
        .sv-btn:hover {
          background: #1E2B24;
          color: #F5F0EA;
        }

        /* --- AUTO SCROLLING LOGIC --- */
        .sv-right {
          flex: 1;
          position: relative;
          overflow: hidden;
          /* Removed Shadow - Keeping it Simple */
        }

        .sv-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scroll-left 40s linear infinite; /* SLOWED DOWN TO 40s */
        }

        .sv-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }

        .sv-card {
          flex: 0 0 300px;
          position: relative;
          border-radius: 15px; /* Thoda kam rounded for simple look */
          overflow: hidden;
          aspect-ratio: 4 / 5;
          text-decoration: none;
          box-shadow: none !important; /* Strictly no shadow */
          border: 1px solid rgba(30, 43, 36, 0.05); /* Very light border instead of shadow */
        }
        
        .sv-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s ease;
        }
        
        .sv-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%);
        }
        
        .sv-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 24px;
          z-index: 2;
        }
        
        .sv-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          color: #fff;
          margin-bottom: 4px;
        }
        
        .sv-card-cta {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #8B6A3E;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .sv-container { flex-direction: column; padding: 0 24px; }
          .sv-left { flex: none; width: 100%; margin-bottom: 30px; }
        }
      `}</style>

      <section className="sv-section">
        <div className="sv-container">
          <div className="sv-left">
            <p className="sv-eyebrow">Our Services</p>
            <h2 className="sv-title">
              Crafting <em>Legacy</em> in Every Page
            </h2>
            <p className="sv-desc">
              Explore our curated book types designed to preserve your life's greatest moments.
            </p>
            
            {/* MANUAL NAVIGATION BUTTONS */}
            <div className="sv-nav-btns">
              <button className="sv-btn" onClick={() => handleManualScroll('left')} aria-label="Scroll Left">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="sv-btn" onClick={() => handleManualScroll('right')} aria-label="Scroll Right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14m-7 7l7-7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="sv-right">
            <div className="sv-track" ref={trackRef}>
              {doubledServices.map((service, index) => (
                <Link key={index} to={service.path} className="sv-card">
                  <img src={service.image} alt={service.title} className="sv-card-img" />
                  <div className="sv-card-overlay" />
                  <div className="sv-card-content">
                    <h3 className="sv-card-title">{service.title}</h3>
                    <span className="sv-card-cta">Explore Collection →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesCards;