import React, { useState } from 'react';

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
          overflow: hidden;
          font-family: 'Montserrat', sans-serif;
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

        /* ── SIDE TEXT ── */
        .wcu-side-text { max-width: 450px; }

        .wcu-side-text h1 {
          font-family: 'Montserrat', sans-serif;
          font-size: 54px;
          font-weight: 700;
          color: var(--c-forest);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }
        .wcu-side-text h1 span {
          font-weight: 300;
          font-style: italic;
          color: var(--c-copper);
          display: block;
        }

        .wcu-side-text p {
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: var(--c-saddle);
          line-height: 1.8;
          letter-spacing: 0.01em;
          border-left: 2px solid var(--c-copper);
          padding-left: 20px;
        }

        /* ── CIRCLE VISUAL ── */
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
          to   { transform: rotate(360deg); }
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
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: var(--c-forest);
          cursor: pointer;
          transition: all 0.4s ease;
          z-index: 2;
          letter-spacing: 0.05em;
        }

        .item-0 { top: 0;    left: 50%; transform: translate(-50%, -50%); }
        .item-1 { top: 50%;  right: 0;  transform: translate(50%, -50%);  }
        .item-2 { bottom: 0; left: 50%; transform: translate(-50%, 50%);  }
        .item-3 { top: 50%;  left: 0;   transform: translate(-50%, -50%); }

        .wcu-orbit-item:hover,
        .wcu-orbit-item.active {
          background: var(--c-forest);
          color: white;
          box-shadow: 0 10px 20px rgba(54, 97, 90, 0.2);
        }
        .item-0:hover, .item-0.active { transform: translate(-50%, -50%) scale(1.2); }
        .item-1:hover, .item-1.active { transform: translate(50%, -50%)  scale(1.2); }
        .item-2:hover, .item-2.active { transform: translate(-50%, 50%)  scale(1.2); }
        .item-3:hover, .item-3.active { transform: translate(-50%, -50%) scale(1.2); }

        /* ── CENTER CONTENT ── */
        .wcu-center-content {
          text-align: center;
          max-width: 260px;
          z-index: 3;
        }

        .wcu-center-content h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--c-forest);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .wcu-center-content p {
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: rgba(54, 97, 90, 0.75);
          line-height: 1.7;
          letter-spacing: 0.01em;
        }

        .mobile-reasons-grid { display: none; }

        /* ── TABLET ── */
        @media (max-width: 1024px) {
          .wcu-container { padding: 0 30px; gap: 20px; }
          .wcu-visual-area { width: 360px; height: 360px; }
          .wcu-side-text h1 { font-size: 42px; }
          .wcu-orbit-item { width: 60px; height: 60px; font-size: 12px; }
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .wcu-section { padding: 60px 20px; }
          .wcu-container { flex-direction: column; text-align: center; }
          .wcu-side-text { max-width: 100%; margin-bottom: 40px; }
          .wcu-side-text p { border-left: none; padding: 0; font-size: 14px; }
          .wcu-visual-area { display: none; }

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
            text-align: left;
          }

          .mobile-card .num {
            font-family: 'Montserrat', sans-serif;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.15em;
            color: var(--c-copper);
            display: block;
            margin-bottom: 10px;
          }

          .mobile-card h3 {
            font-family: 'Montserrat', sans-serif;
            font-size: 14px;
            font-weight: 600;
            color: var(--c-forest);
            margin-bottom: 8px;
            letter-spacing: 0.02em;
          }

          .mobile-card p {
            font-family: 'Montserrat', sans-serif;
            font-size: 12px;
            font-weight: 400;
            color: rgba(54, 97, 90, 0.7);
            line-height: 1.7;
          }
        }

        @media (max-width: 480px) {
          .mobile-reasons-grid { grid-template-columns: 1fr; }
          .wcu-side-text h1 { font-size: 32px; }
        }
      `}</style>

      <section className="wcu-section">
        <div className="wcu-container">

          {/* SIDE TEXT */}
          <div className="wcu-side-text">
            <h1>Crafted with <span>Intention.</span></h1>
            <p>We don't just make books. We build legacies that stand the test of time.</p>
          </div>

          {/* CIRCLE VIEW — Laptop/Tab */}
          <div className="wcu-visual-area">
            <div className="wcu-main-circle" />
            {reasons.map((r, i) => (
              <div
                key={i}
                className={`wcu-orbit-item item-${i}${activeIndex === i ? ' active' : ''}`}
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

          {/* GRID VIEW — Mobile */}
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