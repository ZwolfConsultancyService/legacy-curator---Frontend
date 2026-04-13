// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";
// import logo from "../../../assets/LegacyCuratorlogo.png";

// const serviceLinks = [
//   { name: "Photo Books",        slug: "photo-book",           icon: "📷", sub: "Memories, preserved" },
//   { name: "Travel Books",       slug: "travel-book",          icon: "✈️", sub: "Journeys, immortalised" },
//   { name: "Legacy Books",       slug: "legacy-book",          icon: "🏛️", sub: "Lineage, honoured" },
//   { name: "Coffee Table Books", slug: "coffee-table",         icon: "☕", sub: "Statement, displayed" },
//   { name: "Memoir Books",       slug: "memoir",               icon: "📖", sub: "Your story, told" },
//   { name: "Wedding Books",      slug: "wedding-book",         icon: "💍", sub: "Love, curated" },
//   { name: "Vision & Passion",   slug: "vision-passion-book",  icon: "✨", sub: "Dreams, realised" },
//   { name: "Business Story",     slug: "business-book",        icon: "🏢", sub: "Brand, celebrated" },
//   { name: "Devotional Books",   slug: "devotional-book",      icon: "🕊️", sub: "Faith, expressed" },
// ];

// const navLinks = [
//   { name: "Home",  path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Blog",  path: "/blog" },
//   { name: "Founder",  path: "/founder" }
// ];

// const Navbar = () => {
//   const [menuOpen,       setMenuOpen]       = useState(false);
//   const [scrolled,       setScrolled]       = useState(false);
//   const [mounted,        setMounted]        = useState(false);
//   const [dropOpen,       setDropOpen]       = useState(false);
//   const [mobileServOpen, setMobileServOpen] = useState(false);
//   const dropRef   = useRef(null);
//   const location  = useLocation();
//   const isHome    = location.pathname === "/";

//   useEffect(() => {
//     setMounted(true);
//     const onScroll = () => setScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => { setMenuOpen(false); setDropOpen(false); }, [location.pathname]);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [menuOpen]);

//   useEffect(() => {
//     const handler = (e) => {
//       if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const isTransparent    = isHome && !scrolled;
//   const mode             = isTransparent ? "transparent" : "solid";
//   const isServicesActive = location.pathname.startsWith("/services");

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Jost:wght@200;300;400;500;600&display=swap');

//         /* ── ROOT ── */
//         .nav-root {
//           position: fixed;
//           top: 0; left: 0; right: 0;
//           z-index: 9999;
//           transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
//         }
//         .nav-root.transparent { background: transparent; box-shadow: none; }
//         .nav-root.solid {
//           background: rgba(250,247,242,0.97);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           box-shadow: 0 1px 0 rgba(20,32,26,0.08);
//         }

//         /* ── INNER ── */
//         .nav-inner {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 48px;
//           height: 84px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 24px;
//           opacity: 0;
//           transform: translateY(-8px);
//           transition: opacity 0.5s ease, transform 0.5s ease;
//           position: relative;
//         }
//         .nav-inner.vis { opacity: 1; transform: translateY(0); }

//         /* ── LEFT ── */
//         .nav-left {
//           display: none;
//           align-items: center;
//           gap: 40px;
//           flex: 1;
//         }
//         @media (min-width: 900px) { .nav-left { display: flex; } }

//         .nav-link {
//           font-family: 'Jost', sans-serif;
//           font-size: 10.5px;
//           font-weight: 500;
//           letter-spacing: 0.25em;
//           text-transform: uppercase;
//           text-decoration: none;
//           position: relative;
//           padding-bottom: 2px;
//           white-space: nowrap;
//           transition: color 0.3s ease;
//         }
//         .nav-link::after {
//           content: '';
//           position: absolute;
//           bottom: -2px; left: 0;
//           height: 1px; width: 0;
//           transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
//         }
//         .nav-link:hover::after, .nav-link.active::after { width: 100%; }

//         .transparent .nav-link { color: rgba(255,255,255,0.92); }
//         .transparent .nav-link:hover,
//         .transparent .nav-link.active { color: #fff; }
//         .transparent .nav-link::after { background: rgba(212,169,106,0.85); }

//         .solid .nav-link { color: rgba(20,32,26,0.85); }
//         .solid .nav-link:hover,
//         .solid .nav-link.active { color: #14201a; }
//         .solid .nav-link::after { background: #8B6A3E; }

//         /* ── PORTFOLIO DROPDOWN BUTTON ── */
//         .nav-services-wrap { position: relative; }

//         .nav-services-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 5px;
//           font-family: 'Jost', sans-serif;
//           font-size: 10.5px;
//           font-weight: 500;
//           letter-spacing: 0.25em;
//           text-transform: uppercase;
//           background: none;
//           border: none;
//           cursor: pointer;
//           position: relative;
//           padding-bottom: 2px;
//           transition: color 0.3s ease;
//           white-space: nowrap;
//         }
//         .nav-services-btn::after {
//           content: '';
//           position: absolute;
//           bottom: -2px; left: 0;
//           height: 1px; width: 0;
//           transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
//         }
//         .nav-services-btn:hover::after,
//         .nav-services-btn.active::after { width: 100%; }

//         .transparent .nav-services-btn { color: rgba(255,255,255,0.92); }
//         .transparent .nav-services-btn:hover,
//         .transparent .nav-services-btn.active { color: #fff; }
//         .transparent .nav-services-btn::after { background: rgba(212,169,106,0.85); }

//         .solid .nav-services-btn { color: rgba(20,32,26,0.85); }
//         .solid .nav-services-btn:hover,
//         .solid .nav-services-btn.active { color: #14201a; }
//         .solid .nav-services-btn::after { background: #8B6A3E; }

//         .nav-chevron {
//           transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
//           flex-shrink: 0;
//           margin-top: 1px;
//         }
//         .nav-chevron.open { transform: rotate(180deg); }

//         /* ── DROPDOWN PANEL ── */
//         .nav-dropdown {
//           position: absolute;
//           top: calc(100% + 24px);
//           left: 50%;
//           transform: translateX(-50%) translateY(-10px);
//           width: 420px;
//           background: #ffffff;
//           border: 1px solid rgba(20,32,26,0.08);
//           border-radius: 16px;
//           box-shadow:
//             0 0 0 1px rgba(20,32,26,0.03),
//             0 8px 16px rgba(20,32,26,0.06),
//             0 24px 60px rgba(20,32,26,0.14);
//           overflow: hidden;
//           opacity: 0;
//           pointer-events: none;
//           transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.4,0,0.2,1);
//           z-index: 100;
//         }
//         .nav-dropdown.open {
//           opacity: 1;
//           pointer-events: all;
//           transform: translateX(-50%) translateY(0);
//         }
//         .nav-dropdown::before {
//           content: '';
//           position: absolute;
//           top: -5px; left: 50%;
//           transform: translateX(-50%) rotate(45deg);
//           width: 10px; height: 10px;
//           background: #ffffff;
//           border-left: 1px solid rgba(20,32,26,0.08);
//           border-top: 1px solid rgba(20,32,26,0.08);
//         }

//         /* Dropdown Header */
//         .drop-header {
//           padding: 20px 24px 16px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           border-bottom: 1px solid rgba(20,32,26,0.06);
//         }
//         .drop-header-left { display: flex; flex-direction: column; gap: 3px; }
//         .drop-label {
//           font-family: 'Jost', sans-serif;
//           font-size: 9px;
//           letter-spacing: 0.35em;
//           text-transform: uppercase;
//           color: rgba(20,32,26,0.3);
//           font-weight: 500;
//         }
//         .drop-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 20px;
//           font-weight: 400;
//           color: #14201a;
//           letter-spacing: 0.02em;
//           line-height: 1;
//         }
//         .drop-badge {
//           font-family: 'Jost', sans-serif;
//           font-size: 9px;
//           font-weight: 500;
//           letter-spacing: 0.15em;
//           text-transform: uppercase;
//           color: #8B6A3E;
//           background: rgba(139,106,62,0.08);
//           border: 1px solid rgba(139,106,62,0.18);
//           padding: 4px 10px;
//           border-radius: 20px;
//         }

//         /* Dropdown Grid */
//         .drop-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           padding: 8px 12px;
//         }
//         .drop-item {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           padding: 12px 14px;
//           border-radius: 10px;
//           text-decoration: none;
//           transition: background 0.18s ease;
//           position: relative;
//         }
//         .drop-item:hover { background: rgba(20,32,26,0.04); }
//         .drop-item.active { background: rgba(139,106,62,0.07); }

//         .drop-icon-wrap {
//           width: 34px; height: 34px;
//           border-radius: 9px;
//           background: rgba(20,32,26,0.05);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//           font-size: 15px;
//           transition: background 0.18s, transform 0.18s;
//         }
//         .drop-item:hover .drop-icon-wrap {
//           background: rgba(139,106,62,0.1);
//           transform: scale(1.05);
//         }
//         .drop-item.active .drop-icon-wrap { background: rgba(139,106,62,0.12); }

//         .drop-text { flex: 1; min-width: 0; }
//         .drop-name {
//           font-family: 'Jost', sans-serif;
//           font-size: 12px;
//           font-weight: 500;
//           color: rgba(20,32,26,0.65);
//           letter-spacing: 0.01em;
//           line-height: 1.2;
//           transition: color 0.18s;
//         }
//         .drop-item:hover .drop-name,
//         .drop-item.active .drop-name { color: #14201a; }
//         .drop-item.active .drop-name { color: #8B6A3E; }

//         .drop-sub {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 11px;
//           font-style: italic;
//           color: rgba(20,32,26,0.3);
//           letter-spacing: 0.02em;
//           margin-top: 1px;
//         }

//         .drop-arrow {
//           opacity: 0;
//           color: rgba(139,106,62,0.6);
//           flex-shrink: 0;
//           transition: opacity 0.18s, transform 0.18s;
//         }
//         .drop-item:hover .drop-arrow { opacity: 1; transform: translateX(2px); }

//         /* Dropdown Footer */
//         .drop-footer {
//           padding: 12px 24px 16px;
//           border-top: 1px solid rgba(20,32,26,0.06);
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }
//         .drop-footer-note {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 12px;
//           font-style: italic;
//           color: rgba(20,32,26,0.3);
//           letter-spacing: 0.03em;
//         }
//         .drop-footer-link {
//           display: inline-flex;
//           align-items: center;
//           gap: 5px;
//           font-family: 'Jost', sans-serif;
//           font-size: 9.5px;
//           font-weight: 600;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: #8B6A3E;
//           text-decoration: none;
//           transition: gap 0.2s;
//         }
//         .drop-footer-link:hover { gap: 9px; }

//         /* ── CENTER LOGO ── */
//         .nav-center {
//           flex-shrink: 0;
//           padding: 0 32px;
//         }
//         @media (max-width: 899px) { .nav-center { display: none; } }

//         .nav-logo-wrap {
//           display: flex;
//           align-items: center;
//           text-decoration: none;
//           padding: 6px 20px;
//           border-radius: 40px;
//           transition: background 0.3s;
//         }
//         .transparent .nav-logo-wrap:hover { background: rgba(255,255,255,0.07); }
//         .solid .nav-logo-wrap:hover { background: rgba(20,32,26,0.04); }

//         .logo-img {
//           height: 90px;
//           width: auto;
//           object-fit: contain;
//           transition: filter 0.35s ease, opacity 0.35s ease;
//           margin-top: 10px;
//         }
//         .transparent .logo-img { filter: brightness(0) invert(1); opacity: 0.92; }
//         .solid .logo-img { filter: none; opacity: 1; }

//         /* ── RIGHT ── */
//         .nav-right {
//           display: none;
//           align-items: center;
//           justify-content: flex-end;
//           gap: 20px;
//           flex: 1;
//         }
//         @media (min-width: 900px) { .nav-right { display: flex; } }

//         .nav-divider {
//           width: 1px; height: 20px;
//           flex-shrink: 0;
//           transition: background 0.35s;
//         }
//         .transparent .nav-divider { background: rgba(255,255,255,0.15); }
//         .solid .nav-divider { background: rgba(20,32,26,0.12); }

//         .nav-btn {
//           font-family: 'Jost', sans-serif;
//           font-size: 9.5px;
//           font-weight: 600;
//           letter-spacing: 0.22em;
//           text-transform: uppercase;
//           text-decoration: none;
//           padding: 11px 26px;
//           border-radius: 40px;
//           white-space: nowrap;
//           transition: all 0.28s ease;
//         }
//         .transparent .nav-btn {
//           color: #fff;
//           background: rgba(212,169,106,0.2);
//           border: 1px solid rgba(212,169,106,0.35);
//         }
//         .transparent .nav-btn:hover {
//           background: rgba(212,169,106,0.35);
//           border-color: rgba(212,169,106,0.6);
//         }
//         .solid .nav-btn {
//           color: #faf7f2;
//           background: #14201a;
//           border: 1px solid transparent;
//         }
//         .solid .nav-btn:hover { background: #8B6A3E; }

//         /* ── MOBILE LOGO — LEFT ── */
//         .nav-mobile-logo {
//           display: none;
//           align-items: center;
//           text-decoration: none;
//           flex-shrink: 0;
//         }
//         @media (max-width: 899px) { .nav-mobile-logo { display: flex; } }

//         .mobile-logo-img {
//           height: 100px;
//           width: auto;
//           object-fit: contain;
//           display: block;
//           transition: filter 0.35s ease, opacity 0.35s ease;
//         }
//         .transparent .mobile-logo-img { filter: brightness(0) invert(1); opacity: 0.95; }
//         .solid .mobile-logo-img { filter: none; opacity: 1; }

//         /* ── HAMBURGER — RIGHT ── */
//         .nav-hamburger {
//           display: none;
//           align-items: center;
//           justify-content: center;
//           width: 42px; height: 42px;
//           border-radius: 50%;
//           background: transparent;
//           cursor: pointer;
//           flex-shrink: 0;
//           transition: all 0.2s;
//           border: none;
//         }
//         @media (max-width: 899px) { .nav-hamburger { display: flex; } }

//         /* ── BACKDROP ── */
//         .nav-backdrop {
//           position: fixed; inset: 0;
//           z-index: 9998;
//           background: rgba(8,14,10,0.6);
//           backdrop-filter: blur(4px);
//           -webkit-backdrop-filter: blur(4px);
//           opacity: 0; pointer-events: none;
//           transition: opacity 0.35s ease;
//         }
//         .nav-backdrop.open { opacity: 1; pointer-events: all; }

//         /* ── MOBILE DRAWER ── */
//         .nav-drawer {
//           position: fixed;
//           top: 0; right: 0;
//           width: min(360px, 90vw);
//           height: 100dvh;
//           z-index: 9999;
//           background: #faf7f2;
//           display: flex;
//           flex-direction: column;
//           transform: translateX(100%);
//           transition: transform 0.42s cubic-bezier(0.4,0,0.2,1);
//         }
//         .nav-drawer.open { transform: translateX(0); }
//         @media (min-width: 900px) {
//           .nav-drawer, .nav-backdrop { display: none !important; }
//         }

//         .drawer-header {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 20px 24px;
//           border-bottom: 1px solid rgba(20,32,26,0.07);
//           flex-shrink: 0;
//         }
//         .drawer-logo-img {
//           height: 56px;
//           width: auto;
//           object-fit: contain;
//         }
//         .drawer-close {
//           width: 36px; height: 36px;
//           border-radius: 50%;
//           border: 1px solid rgba(20,32,26,0.12);
//           background: transparent;
//           display: flex; align-items: center; justify-content: center;
//           cursor: pointer;
//           color: #14201a;
//           transition: background 0.2s;
//         }
//         .drawer-close:hover { background: rgba(20,32,26,0.06); }

//         .drawer-links {
//           display: flex;
//           flex-direction: column;
//           padding: 8px 0;
//           flex: 1;
//           overflow-y: auto;
//         }

//         .drawer-link {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 18px 28px;
//           font-family: 'Jost', sans-serif;
//           font-size: 12px;
//           font-weight: 400;
//           letter-spacing: 0.15em;
//           text-transform: uppercase;
//           color: rgba(20,32,26,0.45);
//           text-decoration: none;
//           border-bottom: 1px solid rgba(20,32,26,0.05);
//           transition: all 0.2s;
//           position: relative;
//         }
//         .drawer-link:hover {
//           color: #14201a;
//           background: rgba(20,32,26,0.02);
//           padding-left: 36px;
//         }
//         .drawer-link.active { color: #14201a; font-weight: 500; }
//         .drawer-link.active::before {
//           content: '';
//           position: absolute;
//           left: 0; top: 0; bottom: 0;
//           width: 2px;
//           background: #D4A96A;
//           border-radius: 0 2px 2px 0;
//         }
//         .drawer-num {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 11px;
//           font-style: italic;
//           color: rgba(20,32,26,0.18);
//         }

//         /* Mobile Portfolio Accordion */
//         .drawer-portfolio-toggle {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 18px 28px;
//           font-family: 'Jost', sans-serif;
//           font-size: 12px;
//           font-weight: 400;
//           letter-spacing: 0.15em;
//           text-transform: uppercase;
//           color: rgba(20,32,26,0.45);
//           border-bottom: 1px solid rgba(20,32,26,0.05);
//           cursor: pointer;
//           background: none;
//           border-left: none;
//           border-right: none;
//           border-top: none;
//           width: 100%;
//           text-align: left;
//           transition: all 0.2s;
//           position: relative;
//         }
//         .drawer-portfolio-toggle.active { color: #14201a; font-weight: 500; }
//         .drawer-portfolio-toggle.active::before {
//           content: '';
//           position: absolute;
//           left: 0; top: 0; bottom: 0;
//           width: 2px;
//           background: #D4A96A;
//           border-radius: 0 2px 2px 0;
//         }
//         .drawer-portfolio-toggle:hover { color: #14201a; background: rgba(20,32,26,0.02); }

//         .drawer-chevron {
//           transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
//           color: rgba(20,32,26,0.3);
//         }
//         .drawer-chevron.open { transform: rotate(180deg); }

//         .drawer-sub {
//           overflow: hidden;
//           max-height: 0;
//           transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1);
//           background: rgba(20,32,26,0.015);
//           border-bottom: 1px solid rgba(20,32,26,0.05);
//         }
//         .drawer-sub.open { max-height: 700px; }

//         .drawer-sub-item {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           padding: 14px 28px 14px 42px;
//           font-family: 'Jost', sans-serif;
//           font-size: 11.5px;
//           font-weight: 400;
//           color: rgba(20,32,26,0.45);
//           letter-spacing: 0.04em;
//           text-decoration: none;
//           border-bottom: 1px solid rgba(20,32,26,0.035);
//           transition: all 0.15s;
//         }
//         .drawer-sub-item:last-child { border-bottom: none; }
//         .drawer-sub-item:hover { color: #14201a; background: rgba(139,106,62,0.04); }
//         .drawer-sub-item.active { color: #8B6A3E; font-weight: 500; }

//         .drawer-sub-icon { font-size: 15px; flex-shrink: 0; }
//         .drawer-sub-num {
//           margin-left: auto;
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 11px;
//           font-style: italic;
//           color: rgba(20,32,26,0.18);
//         }

//         .drawer-footer {
//           padding: 24px 28px 40px;
//           border-top: 1px solid rgba(20,32,26,0.07);
//           flex-shrink: 0;
//         }
//         .drawer-cta {
//           display: block;
//           text-align: center;
//           font-family: 'Jost', sans-serif;
//           font-size: 9.5px;
//           font-weight: 600;
//           letter-spacing: 0.25em;
//           text-transform: uppercase;
//           text-decoration: none;
//           padding: 16px 28px;
//           border-radius: 40px;
//           color: #faf7f2;
//           background: #14201a;
//           transition: background 0.25s;
//         }
//         .drawer-cta:hover { background: #8B6A3E; }
//         .drawer-footer-note {
//           text-align: center;
//           margin-top: 14px;
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 12px;
//           font-style: italic;
//           color: rgba(20,32,26,0.3);
//           letter-spacing: 0.03em;
//         }
//       `}</style>

//       {/* ── MAIN NAV ── */}
//       <nav className={`nav-root ${mode}`}>
//         <div className={`nav-inner${mounted ? " vis" : ""}`}>

//           {/* Mobile Logo — LEFT */}
//           <Link to="/" className="nav-mobile-logo">
//             <img src={logo} alt="Legacy Curator" className="mobile-logo-img" />
//           </Link>

//           {/* Left Links — desktop only */}
//           <div className="nav-left">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`nav-link${location.pathname === link.path ? " active" : ""}`}
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {/* Portfolio Dropdown */}
//             <div className="nav-services-wrap" ref={dropRef}>
//               <button
//                 className={`nav-services-btn${isServicesActive ? " active" : ""}`}
//                 onClick={() => setDropOpen((v) => !v)}
//                 aria-haspopup="true"
//                 aria-expanded={dropOpen}
//               >
//                 Portfolio
//                 <ChevronDown
//                   size={12}
//                   className={`nav-chevron${dropOpen ? " open" : ""}`}
//                 />
//               </button>

//               <div className={`nav-dropdown${dropOpen ? " open" : ""}`} role="menu">
//                 <div className="drop-header">
//                   <div className="drop-header-left">
//                     <span className="drop-label">Explore</span>
//                     <span className="drop-title">Our Collections</span>
//                   </div>
//                   <span className="drop-badge">8 Book Types</span>
//                 </div>

//                 <div className="drop-grid">
//                   {serviceLinks.map((svc) => (
//                     <Link
//                       key={svc.slug}
//                       to={`/services/${svc.slug}`}
//                       className={`drop-item${location.pathname === `/services/${svc.slug}` ? " active" : ""}`}
//                       role="menuitem"
//                       onClick={() => setDropOpen(false)}
//                     >
//                       <div className="drop-text">
//                         <div className="drop-name">{svc.name}</div>
//                         <div className="drop-sub">{svc.sub}</div>
//                       </div>
//                       <ChevronDown
//                         size={11}
//                         className="drop-arrow"
//                         style={{ transform: "rotate(-90deg)" }}
//                       />
//                     </Link>
//                   ))}
//                 </div>

//                 <div className="drop-footer">
//                   <span className="drop-footer-note">Heirloom quality · Handcrafted</span>
//                   <Link
//                     to="/services"
//                     className="drop-footer-link"
//                     onClick={() => setDropOpen(false)}
//                   >
//                     View all
//                     <ChevronDown size={10} style={{ transform: "rotate(-90deg)" }} />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Center Logo — desktop only */}
//           <div className="nav-center">
//             <Link to="/" className="nav-logo-wrap">
//               <img src={logo} alt="Legacy Curator" className="logo-img" />
//             </Link>
//           </div>

//           {/* Right — desktop only */}
//           <div className="nav-right">
//             <span className="nav-divider" />
//             <Link to="/contact" className="nav-btn">Contact Us</Link>
//           </div>

//           {/* Hamburger — RIGHT on mobile */}
//           <button
//             className="nav-hamburger"
//             onClick={() => setMenuOpen(true)}
//             aria-label="Open menu"
//           >
//             <Menu size={22} color={isTransparent ? "#ffffff" : "#14201a"} />
//           </button>

//         </div>
//       </nav>

//       {/* Backdrop */}
//       <div
//         className={`nav-backdrop${menuOpen ? " open" : ""}`}
//         onClick={() => setMenuOpen(false)}
//       />

//       {/* Mobile Drawer */}
//       <div className={`nav-drawer${menuOpen ? " open" : ""}`}>
//         <div className="drawer-header">
//           <Link to="/" onClick={() => setMenuOpen(false)}>
//             <img src={logo} alt="Legacy Curator" className="drawer-logo-img" />
//           </Link>
//           <button
//             className="drawer-close"
//             onClick={() => setMenuOpen(false)}
//             aria-label="Close"
//           >
//             <X size={15} />
//           </button>
//         </div>

//         <div className="drawer-links">
//           {navLinks.map((link, i) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className={`drawer-link${location.pathname === link.path ? " active" : ""}`}
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.name}
//               <span className="drawer-num">0{i + 1}</span>
//             </Link>
//           ))}

//           <button
//             className={`drawer-portfolio-toggle${isServicesActive ? " active" : ""}`}
//             onClick={() => setMobileServOpen((v) => !v)}
//           >
//             Portfolio
//             <ChevronDown
//               size={14}
//               className={`drawer-chevron${mobileServOpen ? " open" : ""}`}
//             />
//           </button>

//           <div className={`drawer-sub${mobileServOpen ? " open" : ""}`}>
//             {serviceLinks.map((svc, i) => (
//               <Link
//                 key={svc.slug}
//                 to={`/services/${svc.slug}`}
//                 className={`drawer-sub-item${location.pathname === `/services/${svc.slug}` ? " active" : ""}`}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {svc.name}
//                 <span className="drawer-sub-num">0{i + 1}</span>
//               </Link>
//             ))}
//           </div>
//         </div>

//         <div className="drawer-footer">
//           <Link
//             to="/contact"
//             className="drawer-cta"
//             onClick={() => setMenuOpen(false)}
//           >
//             Contact Us
//           </Link>
//           <p className="drawer-footer-note">Crafting heirloom books since 2018</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../../assets/LegacyCuratorlogo.png";

const serviceLinks = [
  { name: "Photo Books",        slug: "photo-book",          icon: "📷", sub: "Memories, preserved"   },
  { name: "Travel Books",       slug: "travel-book",         icon: "✈️", sub: "Journeys, immortalised" },
  { name: "Legacy Books",       slug: "legacy-book",         icon: "🏛️", sub: "Lineage, honoured"      },
  { name: "Coffee Table Books", slug: "coffee-table",        icon: "☕", sub: "Statement, displayed"   },
  { name: "Memoir Books",       slug: "memoir",              icon: "📖", sub: "Your story, told"       },
 
  { name: "Vision & Passion",   slug: "vision-passion-book", icon: "✨", sub: "Dreams, realised"       },
  { name: "Business Story",     slug: "business-book",       icon: "🏢", sub: "Brand, celebrated"      },
  { name: "Devotional Books",   slug: "devotional-book",     icon: "🕊️", sub: "Faith, expressed"       },
];

const companyLinks = [
  {
    name: "About Us",
    path: "/about",
    icon: "◈",
    sub: "Our story & values",
  },
  {
    name: "Our Founder",
    path: "/founder",
    icon: "◉",
    sub: "The vision behind it all",
  },
  {
    name: "Our Team",
    path: "/team",
    icon: "◎",
    sub: "The people behind the craft",
  },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [menuOpen,        setMenuOpen]        = useState(false);
  const [scrolled,        setScrolled]        = useState(false);
  const [mounted,         setMounted]         = useState(false);
  const [dropOpen,        setDropOpen]        = useState(false);
  const [companyDropOpen, setCompanyDropOpen] = useState(false);
  const [mobileServOpen,  setMobileServOpen]  = useState(false);
  const [mobileCompOpen,  setMobileCompOpen]  = useState(false);

  const dropRef     = useRef(null);
  const companyRef  = useRef(null);
  const location    = useLocation();
  const isHome      = location.pathname === "/";

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(false);
    setCompanyDropOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current    && !dropRef.current.contains(e.target))    setDropOpen(false);
      if (companyRef.current && !companyRef.current.contains(e.target)) setCompanyDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isTransparent    = isHome && !scrolled;
  const mode             = isTransparent ? "transparent" : "solid";
  const isServicesActive = location.pathname.startsWith("/services");
  const isCompanyActive  = companyLinks.some(l => location.pathname === l.path);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Jost:wght@200;300;400;500;600&display=swap');

        /* ── ROOT ── */
        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 9999;
          transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-root.transparent { background: transparent; box-shadow: none; }
        .nav-root.solid {
          background: rgba(250,247,242,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(20,32,26,0.08);
        }

        /* ── INNER ── */
        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
          height: 84px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          position: relative;
        }
        .nav-inner.vis { opacity: 1; transform: translateY(0); }

        /* ── LEFT ── */
        .nav-left {
          display: none;
          align-items: center;
          gap: 40px;
          flex: 1;
        }
        @media (min-width: 900px) { .nav-left { display: flex; } }

        .nav-link {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          text-decoration: none;
          position: relative;
          padding-bottom: 2px;
          white-space: nowrap;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          height: 1px; width: 0;
          transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }

        .transparent .nav-link { color: rgba(255,255,255,0.92); }
        .transparent .nav-link:hover,
        .transparent .nav-link.active { color: #fff; }
        .transparent .nav-link::after { background: rgba(212,169,106,0.85); }

        .solid .nav-link { color: rgba(20,32,26,0.85); }
        .solid .nav-link:hover,
        .solid .nav-link.active { color: #14201a; }
        .solid .nav-link::after { background: #8B6A3E; }

        /* ── SHARED DROPDOWN BUTTON STYLE ── */
        .nav-drop-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.3s ease;
          white-space: nowrap;
        }
        .nav-drop-btn::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          height: 1px; width: 0;
          transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-drop-btn:hover::after,
        .nav-drop-btn.active::after { width: 100%; }

        .transparent .nav-drop-btn { color: rgba(255,255,255,0.92); }
        .transparent .nav-drop-btn:hover,
        .transparent .nav-drop-btn.active { color: #fff; }
        .transparent .nav-drop-btn::after { background: rgba(212,169,106,0.85); }

        .solid .nav-drop-btn { color: rgba(20,32,26,0.85); }
        .solid .nav-drop-btn:hover,
        .solid .nav-drop-btn.active { color: #14201a; }
        .solid .nav-drop-btn::after { background: #8B6A3E; }

        .nav-chevron {
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          flex-shrink: 0;
          margin-top: 1px;
        }
        .nav-chevron.open { transform: rotate(180deg); }

        /* ── SHARED DROPDOWN PANEL ── */
        .nav-dropdown-wrap { position: relative; }

        .nav-dropdown {
          position: absolute;
          top: calc(100% + 24px);
          left: 50%;
          transform: translateX(-50%) translateY(-10px);
          background: #ffffff;
          border: 1px solid rgba(20,32,26,0.08);
          border-radius: 16px;
          box-shadow:
            0 0 0 1px rgba(20,32,26,0.03),
            0 8px 16px rgba(20,32,26,0.06),
            0 24px 60px rgba(20,32,26,0.14);
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.4,0,0.2,1);
          z-index: 100;
        }
        .nav-dropdown.open {
          opacity: 1;
          pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }
        .nav-dropdown::before {
          content: '';
          position: absolute;
          top: -5px; left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 10px; height: 10px;
          background: #ffffff;
          border-left: 1px solid rgba(20,32,26,0.08);
          border-top: 1px solid rgba(20,32,26,0.08);
        }

        /* Portfolio dropdown — wide */
        .nav-dropdown.portfolio { width: 420px; }

        /* Company dropdown — narrower */
        .nav-dropdown.company { width: 300px; }

        /* Dropdown Header */
        .drop-header {
          padding: 20px 24px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(20,32,26,0.06);
        }
        .drop-header-left { display: flex; flex-direction: column; gap: 3px; }
        .drop-label {
          font-family: 'Jost', sans-serif;
          font-size: 9px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(20,32,26,0.3);
          font-weight: 500;
        }
        .drop-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 400;
          color: #14201a;
          letter-spacing: 0.02em;
          line-height: 1;
        }
        .drop-badge {
          font-family: 'Jost', sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #8B6A3E;
          background: rgba(139,106,62,0.08);
          border: 1px solid rgba(139,106,62,0.18);
          padding: 4px 10px;
          border-radius: 20px;
          white-space: nowrap;
        }

        /* Portfolio Grid */
        .drop-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 8px 12px;
        }
        .drop-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.18s ease;
        }
        .drop-item:hover { background: rgba(20,32,26,0.04); }
        .drop-item.active { background: rgba(139,106,62,0.07); }

        .drop-text { flex: 1; min-width: 0; }
        .drop-name {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgba(20,32,26,0.65);
          letter-spacing: 0.01em;
          line-height: 1.2;
          transition: color 0.18s;
        }
        .drop-item:hover .drop-name,
        .drop-item.active .drop-name { color: #14201a; }
        .drop-item.active .drop-name { color: #8B6A3E; }

        .drop-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-style: italic;
          color: rgba(20,32,26,0.3);
          letter-spacing: 0.02em;
          margin-top: 1px;
        }
        .drop-arrow {
          opacity: 0;
          color: rgba(139,106,62,0.6);
          flex-shrink: 0;
          transition: opacity 0.18s, transform 0.18s;
        }
        .drop-item:hover .drop-arrow { opacity: 1; transform: translateX(2px); }

        /* Company list */
        .company-list {
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .company-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 16px;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.18s;
        }
        .company-item:hover { background: rgba(20,32,26,0.04); }
        .company-item.active { background: rgba(139,106,62,0.07); }

        .company-icon {
          width: 34px; height: 34px;
          border-radius: 9px;
          background: rgba(20,32,26,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 13px;
          color: rgba(20,32,26,0.4);
          transition: background 0.18s, color 0.18s;
          font-family: sans-serif;
        }
        .company-item:hover .company-icon { background: rgba(139,106,62,0.1); color: #8B6A3E; }
        .company-item.active .company-icon { background: rgba(139,106,62,0.12); color: #8B6A3E; }

        .company-text { flex: 1; }
        .company-name {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgba(20,32,26,0.65);
          letter-spacing: 0.01em;
          line-height: 1.2;
          transition: color 0.18s;
        }
        .company-item:hover .company-name { color: #14201a; }
        .company-item.active .company-name { color: #8B6A3E; }

        .company-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-style: italic;
          color: rgba(20,32,26,0.3);
          margin-top: 2px;
          letter-spacing: 0.02em;
        }
        .company-chevron {
          opacity: 0;
          color: rgba(139,106,62,0.6);
          flex-shrink: 0;
          transition: opacity 0.18s, transform 0.18s;
        }
        .company-item:hover .company-chevron { opacity: 1; transform: translateX(2px); }

        /* Dropdown Footer */
        .drop-footer {
          padding: 12px 24px 16px;
          border-top: 1px solid rgba(20,32,26,0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .drop-footer-note {
          font-family: 'Cormorant Garamond', serif;
          font-size: 12px;
          font-style: italic;
          color: rgba(20,32,26,0.3);
          letter-spacing: 0.03em;
        }
        .drop-footer-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Jost', sans-serif;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8B6A3E;
          text-decoration: none;
          transition: gap 0.2s;
        }
        .drop-footer-link:hover { gap: 9px; }

        /* ── CENTER LOGO ── */
        .nav-center { flex-shrink: 0; padding: 0 32px; }
        @media (max-width: 899px) { .nav-center { display: none; } }

        .nav-logo-wrap {
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 6px 20px;
          border-radius: 40px;
          transition: background 0.3s;
        }
        .transparent .nav-logo-wrap:hover { background: rgba(255,255,255,0.07); }
        .solid .nav-logo-wrap:hover { background: rgba(20,32,26,0.04); }

        .logo-img {
          height: 90px;
          width: auto;
          object-fit: contain;
          transition: filter 0.35s ease, opacity 0.35s ease;
          margin-top: 10px;
        }
        .transparent .logo-img { filter: brightness(0) invert(1); opacity: 0.92; }
        .solid .logo-img { filter: none; opacity: 1; }

        /* ── RIGHT ── */
        .nav-right {
          display: none;
          align-items: center;
          justify-content: flex-end;
          gap: 20px;
          flex: 1;
        }
        @media (min-width: 900px) { .nav-right { display: flex; } }

        .nav-divider {
          width: 1px; height: 20px;
          flex-shrink: 0;
          transition: background 0.35s;
        }
        .transparent .nav-divider { background: rgba(255,255,255,0.15); }
        .solid .nav-divider { background: rgba(20,32,26,0.12); }

        .nav-btn {
          font-family: 'Jost', sans-serif;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 11px 26px;
          border-radius: 40px;
          white-space: nowrap;
          transition: all 0.28s ease;
        }
        .transparent .nav-btn {
          color: #fff;
          background: rgba(212,169,106,0.2);
          border: 1px solid rgba(212,169,106,0.35);
        }
        .transparent .nav-btn:hover {
          background: rgba(212,169,106,0.35);
          border-color: rgba(212,169,106,0.6);
        }
        .solid .nav-btn {
          color: #faf7f2;
          background: #14201a;
          border: 1px solid transparent;
        }
        .solid .nav-btn:hover { background: #8B6A3E; }

        /* ── MOBILE LOGO ── */
        .nav-mobile-logo {
          display: none;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        @media (max-width: 899px) { .nav-mobile-logo { display: flex; } }

        .mobile-logo-img {
          height: 100px;
          width: auto;
          object-fit: contain;
          display: block;
          transition: filter 0.35s ease, opacity 0.35s ease;
        }
        .transparent .mobile-logo-img { filter: brightness(0) invert(1); opacity: 0.95; }
        .solid .mobile-logo-img { filter: none; opacity: 1; }

        /* ── HAMBURGER ── */
        .nav-hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px; height: 42px;
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.2s;
          border: none;
        }
        @media (max-width: 899px) { .nav-hamburger { display: flex; } }

        /* ── BACKDROP ── */
        .nav-backdrop {
          position: fixed; inset: 0;
          z-index: 9998;
          background: rgba(8,14,10,0.6);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          opacity: 0; pointer-events: none;
          transition: opacity 0.35s ease;
        }
        .nav-backdrop.open { opacity: 1; pointer-events: all; }

        /* ── MOBILE DRAWER ── */
        .nav-drawer {
          position: fixed;
          top: 0; right: 0;
          width: min(360px, 90vw);
          height: 100dvh;
          z-index: 9999;
          background: #faf7f2;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.42s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-drawer.open { transform: translateX(0); }
        @media (min-width: 900px) {
          .nav-drawer, .nav-backdrop { display: none !important; }
        }

        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(20,32,26,0.07);
          flex-shrink: 0;
        }
        .drawer-logo-img {
          height: 56px;
          width: auto;
          object-fit: contain;
        }
        .drawer-close {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(20,32,26,0.12);
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: #14201a;
          transition: background 0.2s;
        }
        .drawer-close:hover { background: rgba(20,32,26,0.06); }

        .drawer-links {
          display: flex;
          flex-direction: column;
          padding: 8px 0;
          flex: 1;
          overflow-y: auto;
        }

        .drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 28px;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(20,32,26,0.45);
          text-decoration: none;
          border-bottom: 1px solid rgba(20,32,26,0.05);
          transition: all 0.2s;
          position: relative;
        }
        .drawer-link:hover {
          color: #14201a;
          background: rgba(20,32,26,0.02);
          padding-left: 36px;
        }
        .drawer-link.active { color: #14201a; font-weight: 500; }
        .drawer-link.active::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: #D4A96A;
          border-radius: 0 2px 2px 0;
        }
        .drawer-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-style: italic;
          color: rgba(20,32,26,0.18);
        }

        /* Mobile Accordion Toggle — shared */
        .drawer-accordion-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 28px;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(20,32,26,0.45);
          border-bottom: 1px solid rgba(20,32,26,0.05);
          cursor: pointer;
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          width: 100%;
          text-align: left;
          transition: all 0.2s;
          position: relative;
        }
        .drawer-accordion-toggle.active { color: #14201a; font-weight: 500; }
        .drawer-accordion-toggle.active::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: #D4A96A;
          border-radius: 0 2px 2px 0;
        }
        .drawer-accordion-toggle:hover { color: #14201a; background: rgba(20,32,26,0.02); }

        .drawer-chevron {
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          color: rgba(20,32,26,0.3);
          flex-shrink: 0;
        }
        .drawer-chevron.open { transform: rotate(180deg); }

        .drawer-sub {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1);
          background: rgba(20,32,26,0.015);
          border-bottom: 1px solid rgba(20,32,26,0.05);
        }
        .drawer-sub.open { max-height: 800px; }

        /* Portfolio sub items */
        .drawer-sub-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 28px 14px 42px;
          font-family: 'Jost', sans-serif;
          font-size: 11.5px;
          font-weight: 400;
          color: rgba(20,32,26,0.45);
          letter-spacing: 0.04em;
          text-decoration: none;
          border-bottom: 1px solid rgba(20,32,26,0.035);
          transition: all 0.15s;
        }
        .drawer-sub-item:last-child { border-bottom: none; }
        .drawer-sub-item:hover { color: #14201a; background: rgba(139,106,62,0.04); }
        .drawer-sub-item.active { color: #8B6A3E; font-weight: 500; }
        .drawer-sub-num {
          margin-left: auto;
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-style: italic;
          color: rgba(20,32,26,0.18);
        }

        /* Company sub items */
        .drawer-company-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 28px 16px 38px;
          font-family: 'Jost', sans-serif;
          font-size: 11.5px;
          font-weight: 400;
          color: rgba(20,32,26,0.5);
          letter-spacing: 0.06em;
          text-decoration: none;
          border-bottom: 1px solid rgba(20,32,26,0.035);
          transition: all 0.15s;
        }
        .drawer-company-item:last-child { border-bottom: none; }
        .drawer-company-item:hover { color: #14201a; background: rgba(139,106,62,0.04); }
        .drawer-company-item.active { color: #8B6A3E; font-weight: 500; }

        .drawer-company-icon {
          width: 28px; height: 28px;
          border-radius: 7px;
          background: rgba(20,32,26,0.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 11px;
          color: rgba(20,32,26,0.35);
          flex-shrink: 0;
          transition: background 0.15s, color 0.15s;
          font-family: sans-serif;
        }
        .drawer-company-item:hover .drawer-company-icon,
        .drawer-company-item.active .drawer-company-icon {
          background: rgba(139,106,62,0.1);
          color: #8B6A3E;
        }
        .drawer-company-text { flex: 1; }
        .drawer-company-name { font-size: 12px; font-weight: 500; letter-spacing: 0.08em; }
        .drawer-company-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-style: italic;
          color: rgba(20,32,26,0.28);
          margin-top: 1px;
          letter-spacing: 0.02em;
        }

        .drawer-footer {
          padding: 24px 28px 40px;
          border-top: 1px solid rgba(20,32,26,0.07);
          flex-shrink: 0;
        }
        .drawer-cta {
          display: block;
          text-align: center;
          font-family: 'Jost', sans-serif;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 16px 28px;
          border-radius: 40px;
          color: #faf7f2;
          background: #14201a;
          transition: background 0.25s;
        }
        .drawer-cta:hover { background: #8B6A3E; }
        .drawer-footer-note {
          text-align: center;
          margin-top: 14px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 12px;
          font-style: italic;
          color: rgba(20,32,26,0.3);
          letter-spacing: 0.03em;
        }
      `}</style>

      {/* ── MAIN NAV ── */}
      <nav className={`nav-root ${mode}`}>
        <div className={`nav-inner${mounted ? " vis" : ""}`}>

          {/* Mobile Logo */}
          <Link to="/" className="nav-mobile-logo">
            <img src={logo} alt="Legacy Curator" className="mobile-logo-img" />
          </Link>

          {/* Left Links — desktop */}
          <div className="nav-left">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link${location.pathname === link.path ? " active" : ""}`}
              >
                {link.name}
              </Link>
            ))}

            {/* The Company Dropdown */}
            <div className="nav-dropdown-wrap" ref={companyRef}>
              <button
                className={`nav-drop-btn${isCompanyActive ? " active" : ""}`}
                onClick={() => {
                  setCompanyDropOpen((v) => !v);
                  setDropOpen(false);
                }}
                aria-haspopup="true"
                aria-expanded={companyDropOpen}
              >
                The Company
                <ChevronDown
                  size={12}
                  className={`nav-chevron${companyDropOpen ? " open" : ""}`}
                />
              </button>

              <div className={`nav-dropdown company${companyDropOpen ? " open" : ""}`} role="menu">
                <div className="drop-header">
                  <div className="drop-header-left">
                    <span className="drop-label">Who we are</span>
                    <span className="drop-title">The Company</span>
                  </div>
                  <span className="drop-badge">Our Story</span>
                </div>

                <div className="company-list">
                  {companyLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`company-item${location.pathname === item.path ? " active" : ""}`}
                      role="menuitem"
                      onClick={() => setCompanyDropOpen(false)}
                    >
                      <div className="company-icon">{item.icon}</div>
                      <div className="company-text">
                        <div className="company-name">{item.name}</div>
                        <div className="company-sub">{item.sub}</div>
                      </div>
                      <ChevronDown
                        size={11}
                        className="company-chevron"
                        style={{ transform: "rotate(-90deg)" }}
                      />
                    </Link>
                  ))}
                </div>

               
              </div>
            </div>

            {/* Portfolio Dropdown */}
            <div className="nav-dropdown-wrap" ref={dropRef}>
              <button
                className={`nav-drop-btn${isServicesActive ? " active" : ""}`}
                onClick={() => {
                  setDropOpen((v) => !v);
                  setCompanyDropOpen(false);
                }}
                aria-haspopup="true"
                aria-expanded={dropOpen}
              >
                Portfolio
                <ChevronDown
                  size={12}
                  className={`nav-chevron${dropOpen ? " open" : ""}`}
                />
              </button>

              <div className={`nav-dropdown portfolio${dropOpen ? " open" : ""}`} role="menu">
                <div className="drop-header">
                  <div className="drop-header-left">
                    <span className="drop-label">Explore</span>
                    <span className="drop-title">Our Collections</span>
                  </div>
                  <span className="drop-badge">9 Book Types</span>
                </div>

                <div className="drop-grid">
                  {serviceLinks.map((svc) => (
                    <Link
                      key={svc.slug}
                      to={`/services/${svc.slug}`}
                      className={`drop-item${location.pathname === `/services/${svc.slug}` ? " active" : ""}`}
                      role="menuitem"
                      onClick={() => setDropOpen(false)}
                    >
                      <div className="drop-text">
                        <div className="drop-name">{svc.name}</div>
                        <div className="drop-sub">{svc.sub}</div>
                      </div>
                      <ChevronDown
                        size={11}
                        className="drop-arrow"
                        style={{ transform: "rotate(-90deg)" }}
                      />
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Center Logo — desktop */}
          <div className="nav-center">
            <Link to="/" className="nav-logo-wrap">
              <img src={logo} alt="Legacy Curator" className="logo-img" />
            </Link>
          </div>

          {/* Right — desktop */}
          <div className="nav-right">
            <span className="nav-divider" />
            <Link to="/contact" className="nav-btn">Contact Us</Link>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} color={isTransparent ? "#ffffff" : "#14201a"} />
          </button>

        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`nav-backdrop${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── MOBILE DRAWER ── */}
      <div className={`nav-drawer${menuOpen ? " open" : ""}`}>
        <div className="drawer-header">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Legacy Curator" className="drawer-logo-img" />
          </Link>
          <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close">
            <X size={15} />
          </button>
        </div>

        <div className="drawer-links">

          {/* Simple nav links */}
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.path}
              className={`drawer-link${location.pathname === link.path ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
              <span className="drawer-num">0{i + 1}</span>
            </Link>
          ))}

          {/* The Company accordion */}
          <button
            className={`drawer-accordion-toggle${isCompanyActive ? " active" : ""}`}
            onClick={() => setMobileCompOpen((v) => !v)}
          >
            The Company
            <ChevronDown
              size={14}
              className={`drawer-chevron${mobileCompOpen ? " open" : ""}`}
            />
          </button>

          <div className={`drawer-sub${mobileCompOpen ? " open" : ""}`}>
            {companyLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`drawer-company-item${location.pathname === item.path ? " active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <div className="drawer-company-icon">{item.icon}</div>
                <div className="drawer-company-text">
                  <div className="drawer-company-name">{item.name}</div>
                  <div className="drawer-company-sub">{item.sub}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Portfolio accordion */}
          <button
            className={`drawer-accordion-toggle${isServicesActive ? " active" : ""}`}
            onClick={() => setMobileServOpen((v) => !v)}
          >
            Portfolio
            <ChevronDown
              size={14}
              className={`drawer-chevron${mobileServOpen ? " open" : ""}`}
            />
          </button>

          <div className={`drawer-sub${mobileServOpen ? " open" : ""}`}>
            {serviceLinks.map((svc, i) => (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                className={`drawer-sub-item${location.pathname === `/services/${svc.slug}` ? " active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {svc.name}
                <span className="drawer-sub-num">0{i + 1}</span>
              </Link>
            ))}
          </div>

        </div>

        <div className="drawer-footer">
          <Link to="/contact" className="drawer-cta" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          <p className="drawer-footer-note">Crafting heirloom books since 2018</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;