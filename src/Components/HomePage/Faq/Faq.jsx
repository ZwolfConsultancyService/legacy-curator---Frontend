import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    num: "01",
    q: `What is a Coffee Table Book?`,
    a: `A Coffee Table Book is a beautifully crafted, large-format book designed to be displayed and admired. More than just a book, it is a visual experience — combining stunning photography, elegant design, and meaningful narratives. At Legacy Curators, every coffee table book is a handcrafted piece that tells your story with sophistication, intention, and permanence.`,
    tag: "What We Make",
  },
  {
    num: "02",
    q: `What is a Family Legacy Book?`,
    a: `A Family Legacy Book is a timeless tribute to your family's journey — capturing generations of memories, values, milestones, and traditions in one beautifully designed volume. It preserves the stories that define who you are and passes them forward as a cherished heirloom for generations to come.`,
    tag: "What We Make",
  },
  {
    num: "03",
    q: `What is a Business Story Book?`,
    a: `A Business Story Book documents the journey of your brand or organization — from its founding vision to its milestones, culture, and impact. It is a powerful tool for brand legacy, client gifting, investor relations, and internal pride. It tells the world not just what you built, but why it matters.`,
    tag: "What We Make",
  },
  {
    num: "04",
    q: `What is a Memoir Book?`,
    a: `A Memoir Book is a deeply personal account of an individual's life — their experiences, turning points, lessons, and legacy. Written with care and crafted with elegance, it transforms a lifetime of stories into a beautifully bound narrative that honors who you are and the path you have walked.`,
    tag: "What We Make",
  },
  {
    num: "05",
    q: `What is a Photo Book?`,
    a: `A Photo Book is a curated visual story told through carefully selected and designed photography. Whether it captures a wedding, a family decade, a travel journey, or a brand's evolution, every image is thoughtfully placed to evoke emotion, preserve memory, and create a lasting visual legacy.`,
    tag: "What We Make",
  },
  {
    num: "06",
    q: `What is a Vision & Passion Book?`,
    a: `A Vision & Passion Book is crafted for dreamers, leaders, and creators who want to document their purpose, philosophy, and aspirations. It captures not just what you have achieved, but what drives you — making it a powerful personal manifesto and an inspiring gift for those who follow your journey.`,
    tag: "What We Make",
  },
  {
    num: "07",
    q: `What is a Devotional Book?`,
    a: `A Devotional Book is a sacred and soulful creation that captures spiritual journeys, faith traditions, prayers, teachings, or tributes to revered figures. Crafted with reverence and care, it serves as a meaningful keepsake for families, communities, and institutions who wish to preserve and share their spiritual legacy.`,
    tag: "What We Make",
  },
  {
    num: "08",
    q: `What if I want to make changes after the project starts?`,
    a: `We build in multiple review rounds throughout the process. Minor edits are always welcome. Significant structural changes after the design phase may incur a small additional fee.`,
    tag: "Revisions",
  },
  {
    num: "09",
    q: `Is my story and personal information kept private?`,
    a: `Completely. All stories, documents, and conversations shared with us are held in strict confidence and never shared with third parties. Your legacy belongs only to you.`,
    tag: "Privacy",
  },
  {
    num: "10",
    q: `Can I start with a small project before committing to a full book?`,
    a: `Yes — we offer a Discovery Session where we help you outline your story and assess the scope. It's a great way to see if we're the right fit before diving into a full project.`,
    tag: "Getting Started",
  },
];

const INITIAL_VISIBLE = 4;

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const headerRef = useRef(null);
  const itemRefs = useRef([]);
  const moreRef = useRef(null);

  useEffect(() => {
    if (!headerRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.2 },
    );
    obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setTimeout(() => setItemsVisible((v) => [...v, i]), i * 55);
            obs.disconnect();
          }
        },
        { threshold: 0.05 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, [showAll]);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
  const handleShowAll = () => {
    setShowAll(true);
    setTimeout(() => {
      if (moreRef.current)
        moreRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };
  const handleShowLess = () => {
    setShowAll(false);
    setOpenIndex(null);
  };

  return (
    <>
      <style>{`
        .faq-section { background: #ffffff; font-family: 'Montserrat', sans-serif; position: relative; overflow: hidden; }

        .faq-bg-text {
          position: absolute; top: 40px; right: -10px;
          font-family: 'Montserrat', sans-serif; font-size: 240px; font-weight: 900;
          color: rgba(54,97,90,0.04); line-height: 1; pointer-events: none;
          user-select: none; letter-spacing: -0.05em; z-index: 0;
        }

        .faq-inner {
          position: relative; z-index: 1; max-width: 1220px; margin: 0 auto;
          padding: 64px 48px 0;
        }

        .faq-top {
          display: grid; grid-template-columns: 1fr 400px; gap: 80px;
          align-items: end; margin-bottom: 52px;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .faq-top.vis { opacity: 1; transform: translateY(0); }

        .faq-eyebrow { display: flex; align-items: center; gap: 14px; font-size: 9px; letter-spacing: 0.45em; text-transform: uppercase; color: #b07d3e; font-weight: 500; margin-bottom: 22px; font-family: 'Montserrat', sans-serif; }
        .faq-eyebrow-line { width: 36px; height: 1px; background: #b07d3e; flex-shrink: 0; }

        .faq-h2 { font-family: 'Montserrat', sans-serif; font-size: clamp(40px, 5vw, 68px); font-weight: 700; color: #14201a; line-height: 1.02; letter-spacing: -0.025em; margin: 0; }
        .faq-h2 em { color: #b07d3e; font-style: italic; font-weight: 300; }

        .faq-right-block { display: flex; flex-direction: column; justify-content: flex-end; gap: 32px; }
        .faq-desc { font-size: 15px; font-weight: 300; color: rgba(20,32,26,0.5); line-height: 1.9; border-left: 2px solid rgba(176,125,62,0.28); padding-left: 22px; margin: 0; font-family: 'Montserrat', sans-serif; }

        .faq-count-row { display: flex; align-items: center; gap: 20px; }
        .faq-count-num { font-family: 'Montserrat', sans-serif; font-size: 52px; font-weight: 700; color: #14201a; line-height: 1; }
        .faq-count-num span { font-size: 26px; color: #b07d3e; }
        .faq-count-label { font-size: 11px; color: rgba(20,32,26,0.35); text-transform: uppercase; letter-spacing: 0.1em; line-height: 1.6; font-family: 'Montserrat', sans-serif; }

        .faq-list { display: flex; flex-direction: column; border-radius: 22px; overflow: hidden; border: 1px solid rgba(54,97,90,0.1); box-shadow: 0 4px 48px rgba(20,32,26,0.05); }

        .faq-extra-wrap { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.5s ease; }
        .faq-extra-wrap.open { grid-template-rows: 1fr; }
        .faq-extra-inner { overflow: hidden; border-top: 1px solid rgba(54,97,90,0.07); }

        .faq-row { background: #ffffff; border-bottom: 1px solid rgba(54,97,90,0.07); cursor: pointer; position: relative; opacity: 0; transform: translateX(-16px); transition: opacity 0.5s ease, transform 0.5s ease, background 0.3s ease; overflow: hidden; }
        .faq-row:last-child { border-bottom: none; }
        .faq-row.vis { opacity: 1; transform: translateX(0); }
        .faq-row.open { background: #f6fbf8; }
        .faq-row:not(.open):hover { background: #fafdfb; }
        .faq-row::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: #b07d3e; transform: scaleY(0); transition: transform 0.35s ease; transform-origin: bottom; }
        .faq-row.open::before { transform: scaleY(1); }

        .faq-row-head { display: grid; grid-template-columns: 64px 1fr auto auto; align-items: center; padding: 30px 36px 30px 0; gap: 0; }
        .faq-row-num { font-family: 'Montserrat', sans-serif; font-size: 11px; letter-spacing: 0.22em; color: rgba(54,97,90,0.22); padding-left: 36px; transition: color 0.3s; font-weight: 500; }
        .faq-row.open .faq-row-num { color: #b07d3e; }
        .faq-row-q { font-family: 'Montserrat', sans-serif; font-size: 17px; font-weight: 600; color: #14201a; line-height: 1.3; margin: 0; padding-right: 28px; transition: color 0.3s; }
        .faq-row.open .faq-row-q { color: #1c3a33; }

        .faq-tag { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(54,97,90,0.45); background: rgba(54,97,90,0.06); padding: 5px 14px; border-radius: 50px; margin-right: 24px; white-space: nowrap; transition: background 0.3s, color 0.3s; font-family: 'Montserrat', sans-serif; font-weight: 500; }
        .faq-row.open .faq-tag { background: rgba(176,125,62,0.1); color: #b07d3e; }

        .faq-toggle { width: 34px; height: 34px; border-radius: 50%; border: 1px solid rgba(54,97,90,0.15); display: flex; align-items: center; justify-content: center; color: #36615a; flex-shrink: 0; transition: background 0.3s, border-color 0.3s, transform 0.38s ease; }
        .faq-row.open .faq-toggle { background: #b07d3e; border-color: #b07d3e; color: #fff; transform: rotate(45deg); }
        .faq-toggle svg { width: 13px; height: 13px; }

        .faq-answer-wrap { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.4s ease; }
        .faq-row.open .faq-answer-wrap { grid-template-rows: 1fr; }
        .faq-answer-inner { overflow: hidden; }
        .faq-answer-body { display: grid; grid-template-columns: 64px 1fr; padding: 0 36px 32px 0; }
        .faq-answer-text { font-size: 14px; font-weight: 300; color: rgba(20,32,26,0.52); line-height: 1.9; border-left: 1px solid rgba(176,125,62,0.22); padding-left: 24px; margin: 0; font-family: 'Montserrat', sans-serif; }

        .faq-more-wrap { display: flex; align-items: center; justify-content: center; padding: 28px 0; }
        .faq-more-btn { display: inline-flex; align-items: center; gap: 12px; font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 0.28em; text-transform: uppercase; color: #36615a; background: transparent; border: 1px solid rgba(54,97,90,0.25); padding: 16px 32px; border-radius: 50px; cursor: pointer; transition: background 0.3s, border-color 0.3s, color 0.3s, gap 0.3s; }
        .faq-more-btn:hover { background: rgba(54,97,90,0.06); border-color: rgba(54,97,90,0.45); gap: 18px; }
        .faq-more-btn .btn-icon { width: 18px; height: 18px; border-radius: 50%; border: 1px solid currentColor; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: transform 0.35s ease; }
        .faq-more-btn.less .btn-icon { transform: rotate(180deg); }
        .faq-more-btn svg { width: 10px; height: 10px; }
        .faq-remaining-badge { font-size: 9px; letter-spacing: 0.1em; color: rgba(54,97,90,0.5); background: rgba(54,97,90,0.07); border-radius: 50px; padding: 3px 10px; font-family: 'Montserrat', sans-serif; }

        .faq-footer { margin-top: 0; margin-bottom: 40px; display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 40px; padding: 46px 52px; border-radius: 22px; border: 1px solid rgba(54,97,90,0.1); background: #f8fdf9; }
        .faq-footer-title { font-family: 'Montserrat', sans-serif; font-size: 22px; font-weight: 700; color: #14201a; margin: 0 0 8px; }
        .faq-footer-title em { color: #b07d3e; font-style: italic; font-weight: 300; }
        .faq-footer-sub { font-size: 13px; font-weight: 300; color: rgba(20,32,26,0.4); margin: 0; line-height: 1.6; font-family: 'Montserrat', sans-serif; }
        .faq-footer-btn { display: inline-flex; align-items: center; gap: 14px; font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 0.28em; text-transform: uppercase; color: #ffffff; background: #14201a; border: none; padding: 18px 36px; border-radius: 50px; cursor: pointer; white-space: nowrap; transition: background 0.3s, gap 0.3s; text-decoration: none; }
        .faq-footer-btn:hover { background: #36615a; gap: 20px; }
        .faq-footer-arrow { width: 20px; height: 1px; background: rgba(255,255,255,0.5); position: relative; }
        .faq-footer-arrow::after { content: ''; position: absolute; right: 0; top: -3px; width: 6px; height: 6px; border-right: 1px solid rgba(255,255,255,0.5); border-top: 1px solid rgba(255,255,255,0.5); transform: rotate(45deg); }

        @media (max-width: 1024px) {
          .faq-top { grid-template-columns: 1fr; gap: 32px; }
          .faq-bg-text { display: none; }
          .faq-footer { grid-template-columns: 1fr; gap: 24px; }
        }
        @media (max-width: 768px) {
          .faq-inner { padding: 48px 24px 0; }
          .faq-top { margin-bottom: 32px; }
          .faq-row-head { grid-template-columns: 44px 1fr auto; padding: 22px 20px 22px 0; }
          .faq-row-num { padding-left: 20px; }
          .faq-tag { display: none; }
          .faq-row-q { font-size: 15px; padding-right: 16px; }
          .faq-answer-body { grid-template-columns: 44px 1fr; padding: 0 20px 24px 0; }
          .faq-footer { padding: 32px 28px; margin-bottom: 24px; }
        }
      `}</style>

      <section className="faq-section">
        <div className="faq-bg-text">FAQ</div>
        <div className="faq-inner">
          <div
            ref={headerRef}
            className={`faq-top${headerVisible ? " vis" : ""}`}
          >
            <div>
              <div className="faq-eyebrow">
                <span className="faq-eyebrow-line" />
                Frequently Asked
              </div>
              <h2 className="faq-h2">
                Questions,
                <br />
                <em>answered honestly</em>
              </h2>
            </div>
            <div className="faq-right-block">
              <p className="faq-desc">
                Everything you need to know before beginning your legacy book
                journey — from timelines and privacy to materials and revisions.
              </p>
              <div className="faq-count-row">
                <div className="faq-count-num">
                  08<span>+</span>
                </div>
                <div className="faq-count-label">
                  Common questions
                  <br />
                  answered below
                </div>
              </div>
            </div>
          </div>

          <div className="faq-list">
            {faqs.slice(0, INITIAL_VISIBLE).map((item, i) => (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                className={`faq-row${itemsVisible.includes(i) ? " vis" : ""}${openIndex === i ? " open" : ""}`}
                onClick={() => toggle(i)}
              >
                <div className="faq-row-head">
                  <span className="faq-row-num">{item.num}</span>
                  <p className="faq-row-q">{item.q}</p>
                  <span className="faq-tag">{item.tag}</span>
                  <div className="faq-toggle">
                    <svg viewBox="0 0 13 13" fill="none">
                      <path
                        d="M6.5 1v11M1 6.5h11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="faq-answer-wrap">
                  <div className="faq-answer-inner">
                    <div className="faq-answer-body">
                      <span />
                      <p className="faq-answer-text">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className={`faq-extra-wrap${showAll ? " open" : ""}`}>
              <div className="faq-extra-inner">
                {faqs.slice(INITIAL_VISIBLE).map((item, idx) => {
                  const i = INITIAL_VISIBLE + idx;
                  return (
                    <div
                      key={i}
                      ref={(el) => (itemRefs.current[i] = el)}
                      className={`faq-row${itemsVisible.includes(i) ? " vis" : ""}${openIndex === i ? " open" : ""}`}
                      onClick={() => toggle(i)}
                      style={{ borderTop: idx === 0 ? "none" : undefined }}
                    >
                      <div className="faq-row-head">
                        <span className="faq-row-num">{item.num}</span>
                        <p className="faq-row-q">{item.q}</p>
                        <span className="faq-tag">{item.tag}</span>
                        <div className="faq-toggle">
                          <svg viewBox="0 0 13 13" fill="none">
                            <path
                              d="M6.5 1v11M1 6.5h11"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="faq-answer-wrap">
                        <div className="faq-answer-inner">
                          <div className="faq-answer-body">
                            <span />
                            <p className="faq-answer-text">{item.a}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="faq-more-wrap" ref={moreRef}>
            <button
              className={`faq-more-btn${showAll ? " less" : ""}`}
              onClick={showAll ? handleShowLess : handleShowAll}
            >
              {showAll ? (
                "Show Less"
              ) : (
                <>
                  View More Questions
                  <span className="faq-remaining-badge">
                    +{faqs.length - INITIAL_VISIBLE}
                  </span>
                </>
              )}
              <span className="btn-icon">
                <svg viewBox="0 0 10 10" fill="none">
                  <path
                    d="M5 2v6M2 5h6"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="faq-footer">
            <div>
              <p className="faq-footer-title">
                Still have a question? <em>Let's talk.</em>
              </p>
              <p className="faq-footer-sub">
                Our team typically responds within one business day.
              </p>
            </div>
            <Link to="/contacts" className="faq-footer-btn">
              Get in Touch
              <span className="faq-footer-arrow" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
