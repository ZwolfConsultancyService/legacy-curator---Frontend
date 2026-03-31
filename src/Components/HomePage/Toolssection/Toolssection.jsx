import React, { useState, useEffect } from 'react';

const tabs = [
  { id: 'book',     label: 'Book creation' },
  { id: 'printing', label: 'Printing' },
  { id: 'selling',  label: 'Selling' },
  { id: 'business', label: 'Business services' },
];

const tabContent = {
  book: {
    text: (
      <>
        <a href="#" className="trs-link">Design online</a>{' '}or use our free{' '}
        <a href="#" className="trs-link">desktop software</a>. We also integrate with several Adobe products.
      </>
    ),
    btn: 'Explore free tools',
  },
  printing: {
    text: <>Choose from a wide range of <a href="#" className="trs-link">print products</a> — books, magazines, calendars and more.</>,
    btn: 'See print options',
  },
  selling: {
    text: <>Sell your creations online through your own <a href="#" className="trs-link">storefront</a> or global retail partners.</>,
    btn: 'Start selling',
  },
  business: {
    text: <>Access <a href="#" className="trs-link">bulk ordering</a>, API integrations, and dedicated account management.</>,
    btn: 'Learn more',
  },
};

const gridPhotos = [
  'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=200&h=160&fit=crop',
  'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=160&fit=crop',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&h=160&fit=crop',
  'https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=200&h=160&fit=crop',
  'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=200&h=160&fit=crop',
  'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200&h=160&fit=crop',
];

const bookPhotos = {
  leftTop:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=280&fit=crop',
  leftBottom:  'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=220&fit=crop',
  rightTop:    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=260&fit=crop',
  rightBottom: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=260&fit=crop',
};

export default function ToolsSection() {
  const [activeTab, setActiveTab] = useState('book');
  const [animKey, setAnimKey]     = useState(0);
  const [mounted, setMounted]     = useState(false);
  const [hovered, setHovered]     = useState(false);

  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  const handleTab = (id) => { setActiveTab(id); setAnimKey(k => k + 1); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .trs-root {
          background: #F5F0EA;
          font-family: 'DM Sans', sans-serif;
          padding: 80px 60px 0;
          overflow: hidden;
          box-sizing: border-box;
        }
        .trs-root *, .trs-root *::before, .trs-root *::after { box-sizing: border-box; }

        /* HEADER */
        .trs-top {
          text-align: center;
          max-width: 860px;
          margin: 0 auto;
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .trs-eyebrow {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #A7703D;
          margin-bottom: 16px;
          display: block;
        }

        .trs-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 300;
          color: #111;
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 0 0 40px;
        }
        .trs-heading em {
          font-style: italic;
          color: #36615A;
        }

        /* TABS */
        .trs-tabs {
          display: inline-flex;
          align-items: center;
          background: rgba(54,97,90,0.07);
          border-radius: 100px;
          padding: 4px;
          margin: 0 0 28px;
          gap: 2px;
          flex-wrap: wrap;
          justify-content: center;
          border: 1px solid rgba(54,97,90,0.14);
        }

        .trs-tab {
          padding: 9px 22px;
          font-size: 0.78rem;
          font-weight: 400;
          color: #777;
          background: transparent;
          border: none;
          border-radius: 100px;
          cursor: pointer;
          white-space: nowrap;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.04em;
          transition: color 0.2s, background 0.2s;
        }
        .trs-tab:hover:not(.trs-tab-active) {
          color: #36615A;
          background: rgba(54,97,90,0.08);
        }
        .trs-tab-active {
          background: #36615A;
          color: #FDFFFC;
          font-weight: 500;
        }

        /* DESC */
        .trs-desc-wrap { min-height: 52px; margin: 0 0 28px; }
        .trs-desc {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.85;
          max-width: 480px;
          margin: 0 auto;
          animation: trs-fdUp 0.28s ease both;
        }
        @keyframes trs-fdUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .trs-link {
          color: #A7703D;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: rgba(167,112,61,0.35);
          transition: color 0.15s;
        }
        .trs-link:hover { color: #8B542B; }

        /* CTA BUTTON */
        .trs-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #36615A;
          color: #FDFFFC;
          font-size: 0.78rem;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          padding: 13px 28px;
          border-radius: 2px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0 0 64px;
          transition: background 0.25s, transform 0.2s, box-shadow 0.2s;
        }
        .trs-btn svg { transition: transform 0.2s; display: block; }
        .trs-btn:hover {
          background: #A7703D;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(54,97,90,0.25);
        }
        .trs-btn:hover svg { transform: translateX(4px); }

        /* DIVIDER LINE */
        .trs-divider {
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, #36615A, #A7703D);
          margin: 0 auto 40px;
        }

        /* MOCKUP CONTAINER */
        .trs-mockup-wrap {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          background: linear-gradient(168deg, #2e5450 0%, #36615A 45%, #3d6e68 100%);
          border-radius: 16px 16px 0 0;
          padding: 60px 52px 0;
          overflow: visible;
          min-height: 520px;
        }
        /* dot texture */
        .trs-mockup-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px 16px 0 0;
          background-image: radial-gradient(circle, rgba(253,255,252,0.12) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }
        /* glow */
        .trs-mockup-wrap::after {
          content: '';
          position: absolute;
          top: -60px; right: 10%;
          width: 400px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(167,112,61,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        /* PHOTO PANEL */
        .trs-panel {
          position: absolute;
          left: -16px; top: 32px;
          z-index: 10;
          background: #FDFFFC;
          border-radius: 8px;
          padding: 14px;
          box-shadow:
            0 0 0 1px rgba(54,97,90,0.1),
            0 16px 48px rgba(28,47,44,0.2),
            0 4px 12px rgba(28,47,44,0.08);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          width: 170px;
        }
        .trs-panel-lbl {
          grid-column: 1 / -1;
          font-size: 0.6rem;
          font-weight: 500;
          color: #888;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin: 0 0 4px;
        }
        .trs-tw { position: relative; }
        .trs-thumb {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          border-radius: 5px;
          display: block;
          cursor: pointer;
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .trs-thumb:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 14px rgba(0,0,0,0.18);
        }
        .trs-thumb-hl {
          outline: 2px solid #A7703D;
          outline-offset: 2px;
          box-shadow: 0 0 0 5px rgba(167,112,61,0.15);
        }
        .trs-drag {
          position: absolute;
          bottom: -6px; right: -6px;
          width: 20px; height: 20px;
          background: #A7703D;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(167,112,61,0.45);
          z-index: 12;
        }

        /* BOOK STAGE */
        .trs-stage {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
          perspective: 1400px;
        }

        .trs-book {
          width: 100%;
          display: flex;
          transform-style: preserve-3d;
          transform: rotateX(18deg) rotateY(-12deg) rotateZ(1.5deg) translateY(-10px);
          transform-origin: center bottom;
          filter: drop-shadow(0 50px 80px rgba(28,47,44,0.45)) drop-shadow(0 20px 30px rgba(28,47,44,0.25));
          transition: transform 0.55s cubic-bezier(0.34,1.3,0.64,1), filter 0.55s ease;
          cursor: pointer;
        }
        .trs-book-hovered {
          transform: rotateX(10deg) rotateY(-6deg) rotateZ(0.5deg) translateY(-22px);
          filter: drop-shadow(0 70px 100px rgba(28,47,44,0.5)) drop-shadow(0 24px 36px rgba(28,47,44,0.28));
        }

        .trs-spine {
          width: 22px;
          flex-shrink: 0;
          border-radius: 4px 0 0 4px;
          background: linear-gradient(to right, #1c3632 0%, #36615a 40%, #4a7f77 70%, #5a9088 100%);
          align-self: stretch;
          position: relative;
        }
        .trs-spine::after {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 6px; height: 100%;
          background: linear-gradient(to right, rgba(0,0,0,0.2), transparent);
        }

        .trs-page-left {
          flex: 1;
          background: linear-gradient(175deg, #F5F0EA 0%, #ece9d8 100%);
          padding: 24px 18px 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 11px;
          position: relative;
          box-shadow: inset -10px 0 28px rgba(0,0,0,0.08);
          min-height: 450px;
        }

        .trs-page-right {
          flex: 1;
          background: #FDFFFC;
          padding: 24px 22px 24px 18px;
          display: flex;
          flex-direction: column;
          gap: 11px;
          position: relative;
          box-shadow: inset 8px 0 24px rgba(0,0,0,0.04);
          min-height: 450px;
          border-radius: 0 4px 4px 0;
        }

        .trs-page-img {
          width: 100%;
          object-fit: cover;
          border-radius: 3px;
          display: block;
        }
        .trs-page-img.trs-tall  { height: 172px; }
        .trs-page-img.trs-short { height: 130px; }

        .trs-caption {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.55rem;
          color: #888;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin: -4px 0 0;
        }
        .trs-caption::before {
          content: '';
          width: 14px; height: 1px;
          background: #A7703D;
          opacity: 0.6;
          flex-shrink: 0;
        }

        /* Selection handles */
        .trs-sel {
          position: absolute;
          border: 1.5px solid #A7703D;
          border-radius: 2px;
          pointer-events: none;
          z-index: 5;
        }
        .trs-sel-h {
          position: absolute;
          width: 8px; height: 8px;
          background: #FDFFFC;
          border: 1.5px solid #A7703D;
          border-radius: 1px;
        }
        .trs-sel-h.tl { top: -4px; left: -4px; }
        .trs-sel-h.tr { top: -4px; right: -4px; }
        .trs-sel-h.bl { bottom: -4px; left: -4px; }
        .trs-sel-h.br { bottom: -4px; right: -4px; }

        .trs-book-shadow {
          position: absolute;
          bottom: -18px; left: 50%;
          transform: translateX(-50%);
          width: 88%; height: 30px;
          background: radial-gradient(ellipse, rgba(28,47,44,0.28) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 1;
          pointer-events: none;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .trs-root { padding: 52px 24px 0; }
          .trs-mockup-wrap { padding: 36px 24px 0; min-height: 380px; }
          .trs-page-img.trs-tall  { height: 118px; }
          .trs-page-img.trs-short { height: 88px; }
          .trs-panel { width: 136px; left: -4px; top: 18px; }
        }
        @media (max-width: 480px) {
          .trs-root { padding: 48px 20px 0; }
          .trs-panel { display: none; }
          .trs-spine { display: none; }
          .trs-book { transform: rotateX(8deg); }
          .trs-book-hovered { transform: rotateX(4deg) translateY(-10px); }
        }
      `}</style>

      <section className="trs-root">

        {/* HEADER */}
        <div
          className="trs-top"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(18px)',
          }}
        >
          <span className="trs-eyebrow">LegacyCurator · Platform</span>

          <h2 className="trs-heading">
            Tools and resources for <em>makers,</em><br />
            sellers, and businesses
          </h2>

          <div className="trs-divider" />

          <div className="trs-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`trs-tab${activeTab === tab.id ? ' trs-tab-active' : ''}`}
                onClick={() => handleTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="trs-desc-wrap">
            <p className="trs-desc" key={animKey}>{tabContent[activeTab].text}</p>
          </div>

          <a href="#" className="trs-btn">
            {tabContent[activeTab].btn}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* MOCKUP */}
        <div className="trs-mockup-wrap">

          {/* Photo panel */}
          <div className="trs-panel">
            <p className="trs-panel-lbl">My Photos</p>
            {gridPhotos.map((src, i) => (
              <div key={i} className="trs-tw">
                <img
                  src={src}
                  alt=""
                  className={`trs-thumb${i === 3 ? ' trs-thumb-hl' : ''}`}
                />
                {i === 3 && (
                  <div className="trs-drag">
                    <svg width="10" height="10" viewBox="0 0 11 11" fill="none">
                      <path d="M2 2L9 9M9 9V5M9 9H5"
                        stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Book stage */}
          <div className="trs-stage">
            <div
              className={`trs-book${hovered ? ' trs-book-hovered' : ''}`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="trs-spine" />

              {/* Left page */}
              <div className="trs-page-left">
                <img src={bookPhotos.leftTop}    alt="" className="trs-page-img trs-tall" />
                <p className="trs-caption">Texas</p>
                <img src={bookPhotos.leftBottom} alt="" className="trs-page-img trs-short" />
                <p className="trs-caption">Utah</p>
              </div>

              {/* Right page */}
              <div className="trs-page-right">
                <img src={bookPhotos.rightTop}    alt="" className="trs-page-img trs-tall" />
                <p className="trs-caption">Texas</p>
                <img src={bookPhotos.rightBottom} alt="" className="trs-page-img trs-short" />
                <p className="trs-caption">Ohio</p>

                <div className="trs-sel" style={{ top: '43%', left: '37%', right: '-18px', bottom: '4%' }}>
                  <span className="trs-sel-h tl" />
                  <span className="trs-sel-h tr" />
                  <span className="trs-sel-h bl" />
                  <span className="trs-sel-h br" />
                </div>
              </div>
            </div>

            <div className="trs-book-shadow" />
          </div>

        </div>
      </section>
    </>
  );
}