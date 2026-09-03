import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import services from '../../../data/Services.js';
import locationsData from '../../../data/Locations.js';
import RelatedBlogs from '../RelatedBlogs.jsx';

// ─── Local Theme (shares brand fonts, distinct layout language) ───────────
const L = {
  cream:   '#FAF8F2',
  paper:   '#FFFFFF',
  forest:  '#1B2E27',
  forestSoft: 'rgba(27,46,39,0.7)',
  forestFaint: 'rgba(27,46,39,0.45)',
  gold:    '#B8925A',
  goldLight: '#D0AC7C',
  line:    'rgba(27,46,39,0.12)',
};

const PlusIcon = ({ open }) => (
  <span style={{
    width: 30, height: 30, borderRadius: '50%',
    border: `1px solid ${open ? L.gold : L.line}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0, background: open ? L.gold : 'transparent',
    transition: 'all 0.25s',
  }}>
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <line x1="6" y1="1" x2="6" y2="11" stroke={open ? '#fff' : L.gold} strokeWidth="1.4" strokeLinecap="round" style={{ transform: open ? 'scaleY(0)' : 'scaleY(1)', transformOrigin: 'center', transition: 'transform 0.2s' }} />
      <line x1="1" y1="6" x2="11" y2="6" stroke={open ? '#fff' : L.gold} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  </span>
);

const FaqRow = ({ faq, isOpen, onToggle }) => (
  <div style={{ borderBottom: `1px solid ${L.line}` }}>
    <button onClick={onToggle} aria-expanded={isOpen} style={{
      width: '100%', background: 'none', border: 'none', padding: '22px 0',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 20, cursor: 'pointer', textAlign: 'left',
    }}>
      <span style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(15px,1.6vw,18px)',
        fontWeight: 600, color: L.forest, lineHeight: 1.4,
      }}>{faq.q}</span>
      <PlusIcon open={isOpen} />
    </button>
    <div style={{ maxHeight: isOpen ? 300 : 0, overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(.4,0,.2,1)' }}>
      <p style={{
        fontFamily: "'Montserrat', sans-serif", fontSize: 14.5, color: L.forestSoft,
        lineHeight: 1.8, margin: '0 0 24px', paddingRight: 40,
      }}>{faq.a}</p>
    </div>
  </div>
);

const LocationDetailPage = () => {
  const { slug, subSlug } = useParams();
  const service = services[slug];
  const location = locationsData[slug]?.[subSlug];

  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out', once: true, offset: 60 });
  }, []);

  useEffect(() => { setOpenFaq(0); }, [slug, subSlug]);

  if (!service || !location) {
    return (
      <div style={{ padding: '100px 48px', textAlign: 'center', background: L.cream, minHeight: '60vh' }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", color: L.forest }}>Location not found</h1>
        <Link to="/services/photo-book" style={{ color: L.gold }}>← Back to Photo Books</Link>
      </div>
    );
  }

  const nearbyCities = Object.values(locationsData[slug] || {}).filter(c => c.citySlug !== location.citySlug);

  return (
    <>
      <Helmet>
        <title>{location.seoTitle}</title>
        <meta name="description" content={location.metaDescription} />
        <meta property="og:title" content={location.seoTitle} />
        <meta property="og:description" content={location.metaDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://yoursite.com${location.urlPath}`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `${service.title} — ${location.cityName}`,
          "description": location.metaDescription,
          "areaServed": location.cityName,
          "address": { "@type": "PostalAddress", "addressLocality": location.cityName, "addressRegion": location.region, "addressCountry": "IN" },
        })}</script>
        {location.faqs && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": location.faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
          })}</script>
        )}
      </Helmet>

      <style>{`
        .loc-wrap * { box-sizing: border-box; }
        .loc-wrap { background: ${L.cream}; }

        .loc-hero {
          display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px;
          padding: 88px 64px 72px; align-items: center;
          border-bottom: 1px solid ${L.line};
        }
        .loc-crumb {
          display: flex; align-items: center; gap: 8px; margin-bottom: 28px;
          font-family: 'Montserrat', sans-serif; font-size: 10.5px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase; color: ${L.forestFaint};
        }
        .loc-crumb a { color: ${L.forestFaint}; text-decoration: none; }
        .loc-crumb a:hover { color: ${L.gold}; }
        .loc-eyebrow {
          font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 700;
          letter-spacing: 0.32em; text-transform: uppercase; color: ${L.gold}; margin-bottom: 16px;
        }
        .loc-h1 {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(30px,4vw,54px);
          font-weight: 700; color: ${L.forest}; line-height: 1.08; margin: 0 0 22px;
        }
        .loc-intro-p {
          font-family: 'Montserrat', sans-serif; font-size: 15px; color: ${L.forestSoft};
          line-height: 1.85; margin: 0 0 16px; max-width: 560px;
        }
        .loc-hero-ctas { display: flex; gap: 14px; margin-top: 28px; flex-wrap: wrap; }
        .loc-btn-primary {
          font-family: 'Montserrat', sans-serif; font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; text-decoration: none;
          background: ${L.forest}; color: ${L.cream}; padding: 15px 30px; border-radius: 2px;
          transition: background 0.2s, transform 0.2s;
        }
        .loc-btn-primary:hover { background: ${L.gold}; transform: translateY(-2px); }
        .loc-btn-ghost {
          font-family: 'Montserrat', sans-serif; font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; text-decoration: none;
          border: 1px solid ${L.forest}; color: ${L.forest}; padding: 15px 30px; border-radius: 2px;
          transition: all 0.2s;
        }
        .loc-btn-ghost:hover { background: ${L.forest}; color: ${L.cream}; }

        /* ── Coverage route (signature element) ── */
        .loc-route-card {
          background: ${L.forest}; border-radius: 8px; padding: 40px 32px;
          position: relative; overflow: hidden;
        }
        .loc-route-label {
          font-family: 'Montserrat', sans-serif; font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.26em; text-transform: uppercase; color: ${L.goldLight};
          margin-bottom: 24px;
        }
        .loc-route-line { position: relative; padding-left: 22px; }
        .loc-route-line::before {
          content: ''; position: absolute; left: 4px; top: 6px; bottom: 6px; width: 1.5px;
          background: rgba(255,255,255,0.18);
        }
        .loc-route-stop {
          position: relative; padding-bottom: 20px; font-family: 'Cormorant Garamond', serif;
          font-size: 16.5px; color: rgba(255,255,255,0.88); line-height: 1.3;
        }
        .loc-route-stop:last-child { padding-bottom: 0; }
        .loc-route-stop::before {
          content: ''; position: absolute; left: -22px; top: 6px; width: 9px; height: 9px;
          border-radius: 50%; background: ${L.goldLight}; box-shadow: 0 0 0 4px rgba(184,146,90,0.18);
        }

        /* ── Sections shared ── */
        .loc-section { padding: 76px 64px; }
        .loc-section-head { max-width: 640px; margin: 0 0 44px; }
        .loc-section-eyebrow {
          font-family: 'Montserrat', sans-serif; font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.3em; text-transform: uppercase; color: ${L.gold}; margin-bottom: 12px;
        }
        .loc-section-title {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(22px,2.8vw,36px);
          font-weight: 700; color: ${L.forest}; margin: 0; line-height: 1.2;
        }
        .loc-section-sub {
          font-family: 'Montserrat', sans-serif; font-size: 14px; color: ${L.forestSoft};
          line-height: 1.75; margin-top: 12px;
        }

        /* ── Why choose us — asymmetric rows ── */
        .loc-why { background: ${L.paper}; border-top: 1px solid ${L.line}; border-bottom: 1px solid ${L.line}; }
        .loc-why-row {
          display: grid; grid-template-columns: 70px 1fr; gap: 24px; align-items: flex-start;
          padding: 26px 0; border-top: 1px solid ${L.line};
        }
        .loc-why-row:first-of-type { border-top: none; }
        .loc-why-num {
          font-family: 'Cormorant Garamond', serif; font-size: 26px; font-style: italic;
          color: ${L.gold}; line-height: 1;
        }
        .loc-why-title {
          font-family: 'Cormorant Garamond', serif; font-size: 19px; font-weight: 700;
          color: ${L.forest}; margin: 0 0 6px;
        }
        .loc-why-desc {
          font-family: 'Montserrat', sans-serif; font-size: 13.5px; color: ${L.forestSoft};
          line-height: 1.7; margin: 0; max-width: 620px;
        }

        /* ── Areas served — route strip ── */
        .loc-areas-strip {
          display: flex; flex-wrap: wrap; gap: 12px; margin-top: 8px;
        }
        .loc-area-chip {
          font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 500;
          color: ${L.forest}; background: ${L.paper}; border: 1px solid ${L.line};
          border-radius: 30px; padding: 10px 18px; display: inline-flex; align-items: center; gap: 8px;
        }
        .loc-area-chip::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: ${L.gold}; }

        /* ── Process — vertical timeline ── */
        .loc-process { background: ${L.forest}; }
        .loc-process .loc-section-eyebrow { color: ${L.goldLight}; }
        .loc-process .loc-section-title { color: ${L.cream}; }
        .loc-process .loc-section-sub { color: rgba(255,255,255,0.62); }
        .loc-timeline { border-left: 1px solid rgba(255,255,255,0.16); max-width: 720px; }
        .loc-tl-item { position: relative; padding: 0 0 40px 36px; }
        .loc-tl-item:last-child { padding-bottom: 0; }
        .loc-tl-num {
          position: absolute; left: -14px; top: -2px; width: 28px; height: 28px; border-radius: 50%;
          background: ${L.gold}; color: ${L.forest}; display: flex; align-items: center; justify-content: center;
          font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 700;
        }
        .loc-tl-title {
          font-family: 'Cormorant Garamond', serif; font-size: 19px; font-weight: 700;
          color: ${L.cream}; margin: 0 0 6px;
        }
        .loc-tl-desc {
          font-family: 'Montserrat', sans-serif; font-size: 13.5px; color: rgba(255,255,255,0.68);
          line-height: 1.7; margin: 0;
        }

        /* ── Trust ── */
        .loc-trust-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        .loc-trust-p {
          font-family: 'Montserrat', sans-serif; font-size: 14.5px; color: ${L.forestSoft};
          line-height: 1.9; margin: 0 0 20px;
        }

        /* ── FAQ ── */
        .loc-faq { background: ${L.paper}; border-top: 1px solid ${L.line}; }
        .loc-faq-inner { max-width: 760px; }

        /* ── CTA ── */
        .loc-cta {
          background: ${L.forest}; padding: 84px 64px; text-align: center; position: relative;
        }
        .loc-cta-title {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(22px,3vw,40px);
          font-weight: 700; color: ${L.cream}; margin: 0 0 14px; line-height: 1.25;
        }
        .loc-cta-sub {
          font-family: 'Montserrat', sans-serif; font-size: 14.5px; color: rgba(255,255,255,0.72);
          max-width: 480px; margin: 0 auto 36px; line-height: 1.8;
        }

        /* ── Nearby cities ── */
        .loc-nearby-list { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 8px; }
        .loc-nearby-link {
          font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 600;
          color: ${L.forest}; text-decoration: none; border-bottom: 1px solid ${L.gold};
          padding-bottom: 2px; transition: color 0.2s;
        }
        .loc-nearby-link:hover { color: ${L.gold}; }

        @media (max-width: 900px) {
          .loc-hero { grid-template-columns: 1fr; padding: 64px 24px 48px; }
          .loc-section { padding: 56px 24px; }
          .loc-cta { padding: 64px 24px; }
          .loc-trust-grid { grid-template-columns: 1fr; gap: 8px; }
          .loc-why-row { grid-template-columns: 44px 1fr; }
        }
      `}</style>

      <div className="loc-wrap">

        {/* ── HERO ── */}
        <section className="loc-hero">
          <div data-aos="fade-right">
            <nav className="loc-crumb">
              <Link to="/services/photo-book">{service.title}</Link>
              <span>›</span>
              <span style={{ color: L.gold }}>{location.cityName}</span>
            </nav>
            <p className="loc-eyebrow">{service.title} in {location.cityName}</p>
            <h1 className="loc-h1">{location.h1}</h1>
            {location.intro.map((p, i) => <p key={i} className="loc-intro-p">{p}</p>)}
            <div className="loc-hero-ctas">
              <a href="/contacts" className="loc-btn-primary">Book a Free Consultation</a>
              <a href="#areas" className="loc-btn-ghost">See Areas We Cover</a>
            </div>
          </div>

          {/* <div className="loc-route-card" data-aos="fade-left">
            <p className="loc-route-label">Serving {location.cityName} & {location.region}</p>
            <div className="loc-route-line">
              {location.areasServed.slice(0, 6).map((area, i) => (
                <div key={i} className="loc-route-stop">{area}</div>
              ))}
            </div>
          </div> */}
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="loc-section loc-why">
          <div className="loc-section-head" data-aos="fade-up">
            <p className="loc-section-eyebrow">Why {location.cityName} Chooses Us</p>
            <h2 className="loc-section-title">Built for how {location.cityName} actually lives</h2>
          </div>
          <div>
            {location.whyChooseUs.map((item, i) => (
              <div key={i} className="loc-why-row" data-aos="fade-up" data-aos-delay={i * 60}>
                <span className="loc-why-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="loc-why-title">{item.title}</h3>
                  <p className="loc-why-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

       

        {/* ── PROCESS ── */}
        <section className="loc-section loc-process">
          <div className="loc-section-head" data-aos="fade-up">
            <p className="loc-section-eyebrow">How It Works</p>
            <h2 className="loc-section-title">Our Process in {location.cityName}</h2>
            <p className="loc-section-sub">{location.process.intro}</p>
          </div>
          <div className="loc-timeline" data-aos="fade-up" data-aos-delay="100">
            {location.process.steps.map((step, i) => (
              <div key={i} className="loc-tl-item">
                <span className="loc-tl-num">{i + 1}</span>
                <h3 className="loc-tl-title">{step.title}</h3>
                <p className="loc-tl-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY LOCAL CUSTOMERS TRUST US ── */}
        <section className="loc-section">
          <div className="loc-section-head" data-aos="fade-up">
            <p className="loc-section-eyebrow">Local Trust</p>
            <h2 className="loc-section-title">Why {location.cityName} Customers Trust Us</h2>
          </div>
          <div className="loc-trust-grid" data-aos="fade-up" data-aos-delay="100">
            {location.whyLocalTrust.map((p, i) => <p key={i} className="loc-trust-p">{p}</p>)}
          </div>
        </section>
        <RelatedBlogs category={slug} location={location?.cityName} limit={3} />

        {/* ── FAQ ── */}
        <section className="loc-section loc-faq">
          <div className="loc-faq-inner">
            <div className="loc-section-head" data-aos="fade-up">
              <p className="loc-section-eyebrow">Questions</p>
              <h2 className="loc-section-title">FAQs — {service.title} in {location.cityName}</h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              {location.faqs.map((faq, i) => (
                <FaqRow key={i} faq={faq} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </div>
        </section>

        {/* ── NEARBY CITIES (internal linking) ── */}
        {nearbyCities.length > 0 && (
          <section className="loc-section" style={{ paddingTop: 40, paddingBottom: 40 }}>
            <p className="loc-section-eyebrow">Also Serving Nearby</p>
            <div className="loc-nearby-list" data-aos="fade-up">
              {nearbyCities.map(c => (
                <Link key={c.citySlug} to={`/services/${slug}/${c.citySlug}`} className="loc-nearby-link">
                  {service.title} in {c.cityName}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="loc-cta">
          <p className="loc-eyebrow" style={{ color: L.goldLight }} data-aos="fade-up">Get Started</p>
          <h2 className="loc-cta-title" data-aos="fade-up" data-aos-delay="80">{location.ctaHeading}</h2>
          <p className="loc-cta-sub" data-aos="fade-up" data-aos-delay="140">{location.ctaSub}</p>
          <a href="/contacts" className="loc-btn-primary" data-aos="fade-up" data-aos-delay="200">Book Your Free Consultation</a>
        </section>

      </div>
    </>
  );
};

export default LocationDetailPage;