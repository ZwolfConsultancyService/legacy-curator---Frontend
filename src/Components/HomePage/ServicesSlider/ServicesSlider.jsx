import React from "react";
import { Link } from "react-router-dom";
import Coffee from '../../../assets/stories/CoffeeTableBooks.jpg'
import Family from '../../../assets/stories/FamilyLegacy.jpg'
import Memoir from '../../../assets/stories/MemoirBooks.jpg'
import Photo from '../../../assets/stories/PhotoBooks.jpg'
import Book from '../../../assets/stories/Books.jpg'
import Devotional from '../../../assets/stories/Devotional.jpg'

const services = [
  {
    title: "Coffee Table Books",
    tagline: "Art You Can Hold.",
    desc: "Our coffee table books are crafted to be seen, felt, and admired, turning every page into a visual experience and a timeless conversation piece.",
    image:Coffee,
    path: "/services/coffee-table",
  },
  {
    title: "Family Legacy Books",
    tagline: "Stories Passed Down Forever.",
    desc: "Our family legacy books preserve generations of love, values, and memories, ensuring your story continues to live on and inspire forever.",
    image: Family,
    path: "/services/legacy-book",
  },
  {
    title: "Business Story Books",
    tagline: "The story behind the empire.",
    desc: "Our business story books capture your journey from vision to success, turning it into a powerful narrative that builds trust and inspires growth.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    path: "/services/business-book",
  },
  {
    title: "Memoir Books",
    tagline: "A life, in your own words.",
    desc: "Our memoir and tribute books reflect life's most heartfelt moments, honouring stories that deserve to be cherished and remembered forever.",
    image: Memoir,
    path: "/services/memoir",
  },
  {
    title: "Photo Books",
    tagline: "Moments that refuse to fade.",
    desc: "Our photo books beautifully capture and curate your special moments, designed to help you relive your memories again and again.",
    image: Photo,
    path: "/services/photo-book",
  },
  {
    title: "Vision & Passion Books",
    tagline: "Write what comes next.",
    desc: "Our vision and passion books bring your dreams, ideas, and purpose together, shaping them into a story that inspires and guides.",
    image: Book,
    path: "/services/vision-passion-book",
  },
  {
    title: "Devotional Books",
    tagline: "Where faith finds its voice.",
    desc: "Our devotional books express faith and spirituality in a soulful way, crafted to bring peace, meaning, and a deeper connection.",
    image: Devotional,
    path: "/services/devotional-book",
  },
];

const ServicesCards = () => {
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
          margin-bottom: 100px;
        }
        .sv-row:last-child { margin-bottom: 0; }
        .sv-row.reverse { flex-direction: row-reverse; }

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
          .sv-row, .sv-row.reverse {
            flex-direction: column;
            gap: 32px;
            margin-bottom: 64px;
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
          .sv-row { margin-bottom: 48px; }
          .sv-img-number { font-size: 44px; }
        }
      `}</style>

      <section className="sv-section">
        <div className="sv-container">

          <div className="sv-top">
            <p className="sv-eyebrow">Our Services</p>
            <h2 className="sv-main-title">
              turn your <em>stories</em> into timeless masterpieces.
            </h2>
          </div>

          {services.map((service, index) => (
            <div
              key={index}
              className={`sv-row${index % 2 !== 0 ? " reverse" : ""}`}
            >
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

        </div>
      </section>
    </>
  );
};

export default ServicesCards;