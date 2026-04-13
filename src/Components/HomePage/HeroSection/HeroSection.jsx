import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import video from "../../../assets/video.mp4"

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Jost:wght@200;300;400;500&display=swap');

        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
        }

        /* ─── BG VIDEO ─── */
        .hero-video-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          will-change: transform;
          transition: transform 0.1s linear;
        }

        .hero-video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        /* ─── OVERLAYS ─── */
        .hero-overlay-top {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            170deg,
            rgba(8,12,10,0.82) 0%,
            rgba(8,12,10,0.50) 48%,
            rgba(8,12,10,0.18) 72%,
            transparent 100%
          );
          z-index: 1;
        }
        .hero-overlay-bottom {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 55%,
            rgba(245,240,234,0.55) 80%,
            rgba(245,240,234,1) 100%
          );
          z-index: 1;
        }
        /* Extra dark vignette so text always readable over moving video */
        .hero-overlay-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%);
          z-index: 1;
          pointer-events: none;
        }

        /* ─── DECORATIVE LINES ─── */
        .hero-lines {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-line-v {
          position: absolute;
          top: 0; bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.04);
        }
        .hero-line-v:nth-child(1) { left: 20%; }
        .hero-line-v:nth-child(2) { left: 50%; }
        .hero-line-v:nth-child(3) { left: 80%; }

        /* ─── WAVE ─── */
        .hero-wave {
          position: absolute;
          bottom: -2px;
          left: 0; right: 0;
          z-index: 10;
          line-height: 0;
        }
        .hero-wave svg { display: block; width: 100%; }

        /* ─── CONTENT ─── */
        .hero-content {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 120px 24px 140px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0;
        }

        /* ─── EYEBROW ─── */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }
        .hero-eyebrow.vis { opacity: 1; transform: translateY(0); }

        .hero-eyebrow-pill {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.06);
          padding: 8px 20px;
          border-radius: 50px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          white-space: nowrap;
        }

        .hero-eyebrow-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #D4A96A;
          flex-shrink: 0;
        }

        /* ─── HEADLINE ─── */
        .hero-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 10vw, 110px);
          font-weight: 300;
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0 0 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s;
        }
        .hero-h1.vis { opacity: 1; transform: translateY(0); }

        .hero-h1-main { display: block; font-style: italic; font-weight: 300; }
        .hero-h1-accent {
          display: block;
          font-style: normal;
          font-weight: 600;
          color: #D4A96A;
          letter-spacing: 0.01em;
        }

        /* ─── DIVIDER ─── */
        .hero-divider {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 24px 0 28px;
          opacity: 0;
          transition: opacity 0.6s ease 0.4s;
        }
        .hero-divider.vis { opacity: 1; }
        .hero-divider-line {
          width: 48px; height: 1px;
          background: rgba(212,169,106,0.45);
        }
        .hero-divider-diamond {
          width: 6px; height: 6px;
          background: #D4A96A;
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        /* ─── SUBTITLE ─── */
        .hero-sub {
          font-size: clamp(14px, 1.9vw, 17px);
          font-weight: 300;
          color: rgba(255, 241, 241, 0.72);
          line-height: 1.85;
          max-width: 580px;
          margin: 0 0 44px;
          letter-spacing: 0.01em;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s;
        }
        .hero-sub.vis { opacity: 1; transform: translateY(0); }

        /* ─── STATS ROW ─── */
        .hero-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin-top: 56px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.7s ease 0.75s, transform 0.7s ease 0.75s;
        }
        .hero-stats.vis { opacity: 1; transform: translateY(0); }

        .hero-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 0 28px;
        }
        .hero-stat + .hero-stat {
          border-left: 1px solid rgba(255,255,255,0.12);
        }
        .hero-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 600;
          color: #D4A96A;
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }

        /* ─── SCROLL HINT ─── */
        .hero-scroll {
          position: absolute;
          bottom: 110px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 6;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0;
          transition: opacity 0.6s ease 1.1s;
        }
        .hero-scroll.vis { opacity: 1; }
        .hero-scroll-label {
          font-size: 8px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        .hero-scroll-track {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.15);
          position: relative;
          overflow: hidden;
        }
        .hero-scroll-line {
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(212,169,106,0.8));
          animation: scrollLine 1.8s ease-in-out infinite;
        }
        @keyframes scrollLine {
          0% { top: -100%; }
          100% { top: 100%; }
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 380px) {
          .hero-content { padding: 100px 20px 130px; }
          .hero-stat { padding: 0 16px; }
          .hero-eyebrow-pill { font-size: 8px; padding: 7px 14px; letter-spacing: 0.25em; }
        }

        @media (min-width: 381px) and (max-width: 640px) {
          .hero-content { padding: 100px 24px 130px; }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .hero-content { padding: 110px 40px 150px; max-width: 720px; }
          .hero-stat { padding: 0 24px; }
        }

        @media (min-width: 1025px) {
          .hero-content { padding: 120px 48px 160px; }
          .hero-stat { padding: 0 36px; }
        }

        @media (max-width: 640px) {
          .hero-scroll { display: none; }
          .hero-stats { margin-top: 40px; }
          .hero-h1 { margin-bottom: 12px; }
          .hero-divider { margin: 18px 0 22px; }
          .hero-sub { margin-bottom: 36px; }
        }

        /* Reduce motion — pause video for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .hero-video { animation: none; }
          .hero-scroll-line { animation: none; }
        }
      `}</style>

      <section className="hero-section" ref={sectionRef}>

        {/* Parallax Video BG */}
        <div
          className="hero-video-wrap"
          style={{ transform: `translateY(${scrollY * 0.18}px) scale(1.06)` }}
        >
          <video
            className="hero-video"
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>

        {/* Overlays */}
        <div className="hero-overlay-top" />
        <div className="hero-overlay-bottom" />
        <div className="hero-overlay-vignette" />

        {/* Subtle vertical lines */}
        <div className="hero-lines">
          <div className="hero-line-v" />
          <div className="hero-line-v" />
          <div className="hero-line-v" />
        </div>

        {/* Content */}
        <div className="hero-content">

          {/* Eyebrow */}
          <div className={`hero-eyebrow${loaded ? ' vis' : ''}`}>
            <span className="hero-eyebrow-dot" />
            <span className="hero-eyebrow-pill">From Memories to Masterpiece</span>
            <span className="hero-eyebrow-dot" />
          </div>

          {/* Headline */}
          <h1 className={`hero-h1${loaded ? ' vis' : ''}`}>
            <span className="hero-h1-main">Where Every Page </span>
            <span className="hero-h1-accent">Deserves a Place</span>
          </h1>

          {/* Divider */}
          <div className={`hero-divider${loaded ? ' vis' : ''}`}>
            <span className="hero-divider-line" />
            <span className="hero-divider-diamond" />
            <span className="hero-divider-line" />
          </div>

          {/* Subtitle */}
          <p className={`hero-sub${loaded ? ' vis' : ''}`}>
            Your story, your legacy, your vision — beautifully crafted into a timeless book that lives on for generations.
          </p>

        
        </div>

      
        {/* Wave */}
        <div className="hero-wave">
          <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,45 C240,90 480,0 720,45 C960,90 1200,10 1440,45 L1440,90 L0,90 Z" fill="#F5F0EA" />
          </svg>
        </div>

      </section>
    </>
  );
};

export default HeroSection;