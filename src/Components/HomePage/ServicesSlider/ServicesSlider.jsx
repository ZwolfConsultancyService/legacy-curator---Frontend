import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/image.jpg'
const services = [
  {
    title: 'Memoir Books',
    tagline: 'Your Life. Your Words. Forever.',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&q=80',
    path: '/services/memoir',
  },
  {
    title: 'Coffee Table Books',
    tagline: 'Art You Can Hold.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80',
    path: '/services/coffee-table',
  },
  {
    title: 'Family Legacy Books',
    tagline: 'Stories Passed Down Forever.',
    image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=800&q=80',
    path: '/services/family-legacy',
  },
  {
    title: 'Business Story Books',
    tagline: 'Your Brand. Your Legacy.',
    image: image,
    path: '/services/business',
  },
  {
    title: 'Photography Books',
    tagline: 'Every Frame Tells a Story.',
    image: "https://i.pinimg.com/1200x/89/df/66/89df66a701f820eda6906b7b56854c6e.jpg",
    path: '/services/photography',
  },
];

const VISIBLE = 3;

const ServicesCards = () => {
  const [hovered, setHovered] = useState(null);
  const [start, setStart] = useState(0);

  const visible = services.slice(start, start + VISIBLE);
  const canPrev = start > 0;
  const canNext = start + VISIBLE < services.length;

  return (
    <>
      <style>{`
        .sv-section {
          background: #F5F0EA;
          padding: 80px 48px 100px;
          font-family: 'DM Sans', sans-serif;
        }

        .sv-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto 52px;
          gap: 24px;
        }

        .sv-eyebrow {
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #8B6A3E;
          font-weight: 500;
          margin-bottom: 12px;
        }

        .sv-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4vw, 54px);
          font-weight: 600;
          color: #1E2B24;
          line-height: 1.1;
          margin: 0;
        }

        .sv-title em {
          font-style: italic;
          color: #8B6A3E;
        }

        .sv-arrows {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
        }

        .sv-arrow {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #1E2B24;
          background: transparent;
          cursor: pointer;
          font-size: 16px;
          color: #1E2B24;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .sv-arrow:hover:not(:disabled) {
          background: #1E2B24;
          color: #F5F0EA;
        }

        .sv-arrow:disabled {
          opacity: 0.2;
          cursor: default;
        }

        .sv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .sv-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 1 / 1;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sv-card:hover {
          transform: translateY(-6px);
        }

        .sv-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sv-card:hover .sv-card-img {
          transform: scale(1.07);
        }

        .sv-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(15, 20, 17, 0.88) 0%,
            rgba(15, 20, 17, 0.3) 55%,
            rgba(15, 20, 17, 0.0) 100%
          );
        }

        .sv-card-num {
          position: absolute;
          top: 22px;
          left: 24px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 12px;
          letter-spacing: 0.2em;
          color: rgba(245, 240, 234, 0.4);
        }

        .sv-card-body {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 28px 26px;
        }

        .sv-card-line {
          width: 28px;
          height: 1.5px;
          background: #8B6A3E;
          margin-bottom: 14px;
          transition: width 0.4s ease;
          border-radius: 2px;
        }

        .sv-card:hover .sv-card-line {
          width: 52px;
        }

        .sv-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 600;
          color: #F5F0EA;
          margin: 0 0 8px;
          line-height: 1.15;
        }

        .sv-card-tagline {
          font-size: 12px;
          font-weight: 300;
          color: rgba(245, 240, 234, 0.6);
          letter-spacing: 0.04em;
          margin: 0 0 20px;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .sv-card:hover .sv-card-tagline {
          opacity: 1;
          transform: translateY(0);
        }

        .sv-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #F5F0EA;
          text-decoration: none;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s, gap 0.2s ease;
          border-bottom: 1px solid rgba(245,240,234,0.3);
          padding-bottom: 2px;
        }

        .sv-card:hover .sv-card-cta {
          opacity: 1;
          transform: translateY(0);
        }

        .sv-card-cta:hover {
          gap: 14px;
          border-color: #F5F0EA;
        }

        .sv-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 40px;
        }

        .sv-dot {
          height: 6px;
          border-radius: 99px;
          background: #1E2B24;
          border: none;
          cursor: pointer;
          transition: width 0.3s ease, opacity 0.3s ease;
          padding: 0;
        }

        @media (max-width: 860px) {
          .sv-section { padding: 40px 24px 80px; }
          .sv-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 560px) {
          .sv-grid { grid-template-columns: 1fr; }
          .sv-card-tagline, .sv-card-cta { opacity: 1; transform: none; }
        }
      `}</style>

      <section className="sv-section">
        <div className="sv-header">
          <div>
            <p className="sv-eyebrow">What We Create</p>
            <h2 className="sv-title">
              Books crafted for <em>every legacy</em>
            </h2>
          </div>
          <div className="sv-arrows">
            <button className="sv-arrow" disabled={!canPrev} onClick={() => setStart(s => s - 1)}>←</button>
            <button className="sv-arrow" disabled={!canNext} onClick={() => setStart(s => s + 1)}>→</button>
          </div>
        </div>

        <div className="sv-grid">
          {visible.map((service, i) => {
            const realIndex = start + i;
            return (
              <div
                key={realIndex}
                className="sv-card"
                onMouseEnter={() => setHovered(realIndex)}
                onMouseLeave={() => setHovered(null)}
              >
                <img src={service.image} alt={service.title} className="sv-card-img" />
                <div className="sv-card-overlay" />
                <span className="sv-card-num">0{realIndex + 1}</span>
                <div className="sv-card-body">
                  <div className="sv-card-line" />
                  <h3 className="sv-card-title">{service.title}</h3>
                  <p className="sv-card-tagline">{service.tagline}</p>
                  <Link to={service.path} className="sv-card-cta">Explore →</Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="sv-dots">
          {services.map((_, i) => (
            <button
              key={i}
              className="sv-dot"
              onClick={() => setStart(Math.min(i, services.length - VISIBLE))}
              style={{
                width: i >= start && i < start + VISIBLE ? '20px' : '6px',
                opacity: i >= start && i < start + VISIBLE ? 1 : 0.25,
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesCards;