// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import logo from '../../../assets/LegacyCuratorlogo.png';

// const navLinks = [
//   { name: 'Home', path: '/' },
//   { name: 'About', path: '/about' },

//    { name: 'Blog', path: '/blog' },
//   { name: 'Portfolio', path: '/portfolio' },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const location = useLocation();
//   const isHome = location.pathname === '/';

//   useEffect(() => {
//     setMounted(true);
//     const handleScroll = () => setScrolled(window.scrollY > 48);
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => { setMenuOpen(false); }, [location.pathname]);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : '';
//     return () => { document.body.style.overflow = ''; };
//   }, [menuOpen]);

//   const isTransparent = isHome && !scrolled;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Jost:wght@200;300;400;500&display=swap');

//         .nav-root {
//           position: fixed;
//           top: 0; left: 0; right: 0;
//           z-index: 9999;
//           transition: background 0.4s ease, box-shadow 0.4s ease;
//         }
//         .nav-root.solid {
//           background: rgba(250,247,242,0.96);
//           backdrop-filter: blur(18px);
//           -webkit-backdrop-filter: blur(18px);
//           box-shadow: 0 1px 0 rgba(30,43,36,0.08);
//         }
//         .nav-root.transparent { background: transparent; }

//         .nav-inner {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 24px;
//           height: 76px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 32px;
//         }

//         /* ── LOGO ── */
//         .nav-logo {
//           display: flex;
//           align-items: center;
//           gap: 0;
//           text-decoration: none;
//           flex-shrink: 0;
//           margin-top:10px;
//         }

//         .nav-logo-img {
//           /* bada size — clearly visible */
//           height: 100px;
//           width: auto;
//           object-fit: contain;
//           display: block;
//           transition: filter 0.35s ease, opacity 0.35s ease;
//         }

//         /* Hero (transparent) pe logo white ho jaata hai dark bg ke liye */
//         .nav-root.transparent .nav-logo-img {
//           filter: brightness(0) invert(1);
//           opacity: 0.92;
//         }
//         /* Scroll ke baad — original colors */
//         .nav-root.solid .nav-logo-img {
//           filter: none;
//           opacity: 1;
//         }

//         /* ── DESKTOP LINKS ── */
//         .nav-links {
//           display: none;
//           align-items: center;
//           gap: 36px;
//           list-style: none;
//           margin: 0; padding: 0;
//         }
//         @media (min-width: 768px) { .nav-links { display: flex; } }

//         .nav-link {
//           position: relative;
//           font-family: 'Jost', sans-serif;
//           font-size: 10px;
//           font-weight: 500;
//           letter-spacing: 0.24em;
//           text-transform: uppercase;
//           text-decoration: none;
//           padding-bottom: 3px;
//           transition: color 0.25s;
//         }
//         .nav-link::after {
//           content: '';
//           position: absolute;
//           bottom: -2px; left: 0;
//           height: 1px; width: 0;
//           transition: width 0.3s ease;
//         }
//         .nav-link:hover::after,
//         .nav-link.active::after { width: 100%; }

//         .nav-root.transparent .nav-link { color: rgba(255,255,255,0.6); }
//         .nav-root.transparent .nav-link:hover,
//         .nav-root.transparent .nav-link.active { color: #ffffff; }
//         .nav-root.transparent .nav-link::after { background: rgba(255,255,255,0.7); }

//         .nav-root.solid .nav-link { color: rgba(20,32,26,0.48); }
//         .nav-root.solid .nav-link:hover,
//         .nav-root.solid .nav-link.active { color: #14201a; }
//         .nav-root.solid .nav-link::after { background: #8B6A3E; }

//         /* ── DESKTOP CTA ── */
//         .nav-actions {
//           display: none;
//           align-items: center;
//         }
//         @media (min-width: 768px) { .nav-actions { display: flex; } }

//         .nav-btn-solid {
//           font-family: 'Jost', sans-serif;
//           font-size: 10px;
//           font-weight: 500;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           text-decoration: none;
//           padding: 10px 22px;
//           border-radius: 3px;
//           color: #ffffff;
//           transition: background 0.25s;
//           white-space: nowrap;
//           cursor: pointer;
//         }
//         .nav-root.transparent .nav-btn-solid {
//           background: rgba(255,255,255,0.14);
//           border: 1px solid rgba(255,255,255,0.25);
//           backdrop-filter: blur(6px);
//         }
//         .nav-root.transparent .nav-btn-solid:hover { background: rgba(255,255,255,0.24); }
//         .nav-root.solid .nav-btn-solid {
//           background: #14201a;
//           border: 1px solid transparent;
//         }
//         .nav-root.solid .nav-btn-solid:hover { background: #D4A96A; }

//         /* ── HAMBURGER ── */
//         .nav-hamburger {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 40px; height: 40px;
//           border-radius: 4px;
//           background: transparent;
//           border: none;
//           cursor: pointer;
//           transition: background 0.2s;
//           flex-shrink: 0;
//         }
//         .nav-hamburger:hover { background: rgba(255,255,255,0.08); }
//         .nav-root.solid .nav-hamburger:hover { background: rgba(20,32,26,0.06); }
//         @media (min-width: 768px) { .nav-hamburger { display: none; } }

//         /* ── BACKDROP ── */
//         .nav-backdrop {
//           position: fixed; inset: 0;
//           z-index: 9998;
//           background: rgba(8,12,10,0.55);
//           backdrop-filter: blur(3px);
//           -webkit-backdrop-filter: blur(3px);
//           opacity: 0;
//           pointer-events: none;
//           transition: opacity 0.35s ease;
//         }
//         .nav-backdrop.open { opacity: 1; pointer-events: all; }

//         /* ── MOBILE DRAWER ── */
//         .nav-drawer {
//           position: fixed;
//           top: 0; right: 0;
//           width: min(340px, 88vw);
//           height: 100dvh;
//           z-index: 9999;
//           background: #faf7f2;
//           display: flex;
//           flex-direction: column;
//           transform: translateX(100%);
//           transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           overflow-y: auto;
//         }
//         .nav-drawer.open { transform: translateX(0); }
//         @media (min-width: 768px) {
//           .nav-drawer, .nav-backdrop { display: none !important; }
//         }

//         .nav-drawer-header {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 16px 24px;
//           border-bottom: 1px solid rgba(20,32,26,0.07);
//           flex-shrink: 0;
//         }

//         .nav-drawer-logo {
//           display: flex;
//           align-items: center;
//           gap: 0;
//           text-decoration: none;
//         }
//         .nav-drawer-logo-img {
//           height: 48px;
//           width: auto;
//           object-fit: contain;
//         }

//         .nav-drawer-close {
//           width: 36px; height: 36px;
//           border-radius: 50%;
//           border: 1px solid rgba(20,32,26,0.12);
//           background: transparent;
//           display: flex; align-items: center; justify-content: center;
//           cursor: pointer;
//           color: #14201a;
//           transition: background 0.2s;
//           flex-shrink: 0;
//         }
//         .nav-drawer-close:hover { background: rgba(20,32,26,0.06); }

//         .nav-drawer-links {
//           display: flex;
//           flex-direction: column;
//           padding: 12px 0;
//           flex: 1;
//         }

//         .nav-drawer-link {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 17px 24px;
//           font-family: 'Jost', sans-serif;
//           font-size: 13px;
//           font-weight: 400;
//           letter-spacing: 0.1em;
//           text-decoration: none;
//           color: rgba(20,32,26,0.55);
//           border-bottom: 1px solid rgba(20,32,26,0.05);
//           transition: color 0.2s, background 0.2s, padding-left 0.2s;
//           position: relative;
//         }
//         .nav-drawer-link:hover {
//           color: #14201a;
//           background: rgba(20,32,26,0.025);
//           padding-left: 30px;
//         }
//         .nav-drawer-link.active { color: #14201a; font-weight: 500; }
//         .nav-drawer-link.active::before {
//           content: '';
//           position: absolute;
//           left: 0; top: 0; bottom: 0;
//           width: 3px;
//           background: #D4A96A;
//           border-radius: 0 2px 2px 0;
//         }
//         .nav-drawer-link-num {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 10px;
//           color: rgba(20,32,26,0.2);
//           letter-spacing: 0.1em;
//         }

//         .nav-drawer-footer {
//           padding: 20px 24px 36px;
//           border-top: 1px solid rgba(20,32,26,0.07);
//           flex-shrink: 0;
//         }
//         .nav-drawer-btn-solid {
//           display: block;
//           text-align: center;
//           font-family: 'Jost', sans-serif;
//           font-size: 10px;
//           font-weight: 500;
//           letter-spacing: 0.22em;
//           text-transform: uppercase;
//           text-decoration: none;
//           padding: 15px 24px;
//           border-radius: 3px;
//           color: #ffffff;
//           background: #14201a;
//           transition: background 0.25s;
//         }
//         .nav-drawer-btn-solid:hover { background: #D4A96A; }

//         /* ── ENTRY ANIMATION ── */
//         .nav-mount {
//           opacity: 0;
//           transform: translateY(-8px);
//           transition: opacity 0.5s ease, transform 0.5s ease;
//         }
//         .nav-mount.vis { opacity: 1; transform: translateY(0); }
//       `}</style>

//       {/* ── MAIN NAV ── */}
//       <nav className={`nav-root${isTransparent ? ' transparent' : ' solid'}`}>
//         <div className={`nav-inner nav-mount${mounted ? ' vis' : ''}`}>

//           {/* Logo — sirf image, text nahi */}
//           <Link to="/" className="nav-logo">
//             <img src={logo} alt="Legacy Curator" className="nav-logo-img" />
//           </Link>

//           {/* Desktop Links */}
//           <ul className="nav-links">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   to={link.path}
//                   className={`nav-link${location.pathname === link.path ? ' active' : ''}`}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Desktop CTA */}
//           <div className="nav-actions">
//             <Link to="/contact" className="nav-btn-solid">Contact Us</Link>
//           </div>

//           {/* Hamburger */}
//           <button
//             className="nav-hamburger"
//             onClick={() => setMenuOpen(true)}
//             aria-label="Open menu"
//           >
//             <Menu size={20} color={isTransparent ? '#ffffff' : '#14201a'} />
//           </button>

//         </div>
//       </nav>

//       {/* Backdrop */}
//       <div
//         className={`nav-backdrop${menuOpen ? ' open' : ''}`}
//         onClick={() => setMenuOpen(false)}
//       />

//       {/* ── MOBILE DRAWER ── */}
//       <div className={`nav-drawer${menuOpen ? ' open' : ''}`}>

//         <div className="nav-drawer-header">
//           {/* Drawer mein sirf logo image */}
//           <Link to="/" className="nav-drawer-logo" onClick={() => setMenuOpen(false)}>
//             <img src={logo} alt="Legacy Curator" className="nav-drawer-logo-img" />
//           </Link>
//           <button className="nav-drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close">
//             <X size={16} />
//           </button>
//         </div>

//         <div className="nav-drawer-links">
//           {navLinks.map((link, i) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className={`nav-drawer-link${location.pathname === link.path ? ' active' : ''}`}
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.name}
//               <span className="nav-drawer-link-num">0{i + 1}</span>
//             </Link>
//           ))}
//         </div>

//         <div className="nav-drawer-footer">
//           <Link to="/contact" className="nav-drawer-btn-solid" onClick={() => setMenuOpen(false)}>
//             Contact Us
//           </Link>
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

// ─── Services List for Dropdown ──────────────────────────────────────────────
const serviceLinks = [
  { name: "Photo Books", slug: "photo-book", icon: "📷" },
  { name: "Travel Books", slug: "travel-book", icon: "✈️" },
  { name: "Legacy Books", slug: "legacy-book", icon: "🏛️" },
  { name: "Coffee Table Books", slug: "coffee-table", icon: "☕" },
  { name: "Memoir Books", slug: "memoir", icon: "📖" },
  { name: "Wedding Books", slug: "wedding-book", icon: "💍" },
  { name: "Vision & Passion", slug: "vision-book", icon: "✨" },
  { name: "Business Story", slug: "business", icon: "🏢" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  // Services has its own dropdown — handled separately
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileServOpen, setMobileServOpen] = useState(false);
  const dropRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Scroll listener
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isTransparent = isHome && !scrolled;
  const mode = isTransparent ? "transparent" : "solid";

  // Check if current path is a service detail page
  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Jost:wght@200;300;400;500&display=swap');

        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 9999;
          transition: background 0.45s ease, box-shadow 0.45s ease;
        }
        .nav-root.transparent { background: transparent; box-shadow: none; }
        .nav-root.solid {
          background: rgba(250,247,242,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(20,32,26,0.08);
        }

        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .nav-inner.vis { opacity: 1; transform: translateY(0); }

        /* ── LEFT LINKS ── */
        .nav-left {
          display: none;
          align-items: center;
          gap: 36px;
          flex: 1;
        }
        @media (min-width: 768px) { .nav-left { display: flex; } }

        .nav-link {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          position: relative;
          padding-bottom: 3px;
          white-space: nowrap;
          transition: color 0.25s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          height: 1px; width: 0;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }

        .transparent .nav-link { color: rgba(255,255,255,0.65); }
        .transparent .nav-link:hover,
        .transparent .nav-link.active { color: #fff; }
        .transparent .nav-link::after { background: rgba(255,255,255,0.8); }

        .solid .nav-link { color: rgba(20,32,26,0.45); }
        .solid .nav-link:hover,
        .solid .nav-link.active { color: #14201a; }
        .solid .nav-link::after { background: #8B6A3E; }

        /* ── SERVICES DROPDOWN TRIGGER ── */
        .nav-services-wrap {
          position: relative;
        }
        .nav-services-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          padding-bottom: 3px;
          white-space: nowrap;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          transition: color 0.25s;
        }
        .nav-services-btn::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          height: 1px; width: 0;
          transition: width 0.3s ease;
        }
        .nav-services-btn:hover::after,
        .nav-services-btn.active::after { width: 100%; }

        .transparent .nav-services-btn { color: rgba(255,255,255,0.65); }
        .transparent .nav-services-btn:hover,
        .transparent .nav-services-btn.active { color: #fff; }
        .transparent .nav-services-btn::after { background: rgba(255,255,255,0.8); }

        .solid .nav-services-btn { color: rgba(20,32,26,0.45); }
        .solid .nav-services-btn:hover,
        .solid .nav-services-btn.active { color: #14201a; }
        .solid .nav-services-btn::after { background: #8B6A3E; }

        .nav-services-chevron {
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
          flex-shrink: 0;
          margin-top: 1px;
        }
        .nav-services-chevron.open { transform: rotate(180deg); }

        /* ── DROPDOWN PANEL ── */
        .nav-dropdown {
          position: absolute;
          top: calc(100% + 22px);
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
          width: 320px;
          background: #faf7f2;
          border: 1px solid rgba(20,32,26,0.07);
          border-radius: 10px;
          box-shadow:
            0 4px 6px rgba(0,0,0,0.04),
            0 16px 40px rgba(20,32,26,0.12),
            0 1px 2px rgba(0,0,0,0.05);
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
          transition:
            opacity 0.22s ease,
            transform 0.22s ease;
          z-index: 100;
        }
        .nav-dropdown.open {
          opacity: 1;
          pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }

        /* Arrow pointer */
        .nav-dropdown::before {
          content: '';
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 11px; height: 11px;
          background: #faf7f2;
          border-left: 1px solid rgba(20,32,26,0.07);
          border-top: 1px solid rgba(20,32,26,0.07);
        }

        .nav-dropdown-header {
          padding: 16px 20px 12px;
          border-bottom: 1px solid rgba(20,32,26,0.06);
        }
        .nav-dropdown-header-label {
          font-family: 'Jost', sans-serif;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(20,32,26,0.35);
          font-weight: 500;
        }

        .nav-dropdown-list {
          padding: 8px 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .nav-dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          text-decoration: none;
          transition: background 0.15s;
          position: relative;
        }
        .nav-dropdown-item:hover {
          background: rgba(139,106,62,0.06);
        }
        .nav-dropdown-item:hover .nav-dropdown-item-name {
          color: #14201a;
        }
        .nav-dropdown-item.active {
          background: rgba(139,106,62,0.08);
        }
        .nav-dropdown-item.active .nav-dropdown-item-name {
          color: #8B6A3E;
          font-weight: 500;
        }
        .nav-dropdown-item.active::before {
          content: '';
          position: absolute;
          left: 0; top: 20%; bottom: 20%;
          width: 2px;
          background: #8B6A3E;
          border-radius: 0 2px 2px 0;
        }

        .nav-dropdown-item-icon {
          font-size: 14px;
          flex-shrink: 0;
          line-height: 1;
          filter: grayscale(0.3);
        }
        .nav-dropdown-item-name {
          font-family: 'Jost', sans-serif;
          font-size: 11.5px;
          font-weight: 400;
          color: rgba(20,32,26,0.55);
          letter-spacing: 0.02em;
          line-height: 1.3;
          transition: color 0.15s;
        }

        .nav-dropdown-footer {
          padding: 10px 20px 14px;
          border-top: 1px solid rgba(20,32,26,0.06);
        }
        .nav-dropdown-footer-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Jost', sans-serif;
          font-size: 9.5px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8B6A3E;
          text-decoration: none;
          font-weight: 500;
          transition: gap 0.2s;
        }
        .nav-dropdown-footer-link:hover { gap: 10px; }
        .nav-dropdown-footer-link svg {
          transition: transform 0.2s;
        }
        .nav-dropdown-footer-link:hover svg {
          transform: translateX(2px);
        }

        /* ── CENTER LOGO ── */
        .nav-center {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 0 28px;
        }
        @media (max-width: 767px) {
          .nav-center {
            justify-content: flex-start;
            padding: 0;
            flex: 1;
            order: -1;
          }
        }

        .nav-logo-wrap {
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 6px 16px;
          border-radius: 40px;
          transition: background 0.3s ease;
        }
        @media (max-width: 767px) {
          .nav-logo-wrap { padding: 4px 0; }
        }
        .transparent .nav-logo-wrap:hover { background: rgba(255,255,255,0.08); }
        .solid .nav-logo-wrap:hover { background: rgba(20,32,26,0.04); }

        .nav-logo-img {
          height: 90px;
          width: auto;
          object-fit: contain;
          transition: filter 0.35s ease, opacity 0.35s ease;
          margin-top: 10px;
        }
        @media (max-width: 767px) {
          .nav-logo-img { height: 70px; }
        }
        .transparent .nav-logo-img { filter: brightness(0) invert(1); opacity: 0.92; }
        .solid .nav-logo-img { filter: none; opacity: 1; }

        /* ── RIGHT ── */
        .nav-right {
          display: none;
          align-items: center;
          justify-content: flex-end;
          flex: 1;
        }
        @media (min-width: 768px) { .nav-right { display: flex; } }

        .nav-divider {
          width: 1px; height: 18px;
          margin-right: 28px;
          flex-shrink: 0;
          transition: background 0.35s;
        }
        .transparent .nav-divider { background: rgba(255,255,255,0.2); }
        .solid .nav-divider { background: rgba(20,32,26,0.12); }

        .nav-btn {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 11px 24px;
          border-radius: 999px;
          white-space: nowrap;
          transition: background 0.25s, border-color 0.25s;
        }
        .transparent .nav-btn {
          color: #fff;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.3);
        }
        .transparent .nav-btn:hover { background: rgba(255,255,255,0.22); }
        .solid .nav-btn {
          color: #fff;
          background: #14201a;
          border: 1px solid transparent;
        }
        .solid .nav-btn:hover { background: #D4A96A; }

        /* ── HAMBURGER ── */
        .nav-hamburger {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px; height: 42px;
          border-radius: 50%;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.25);
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }
        .nav-hamburger:hover { background: rgba(255,255,255,0.08); }
        .solid .nav-hamburger { border-color: rgba(20,32,26,0.15); }
        .solid .nav-hamburger:hover { background: rgba(20,32,26,0.05); }
        @media (min-width: 768px) { .nav-hamburger { display: none; } }

        /* ── BACKDROP ── */
        .nav-backdrop {
          position: fixed; inset: 0;
          z-index: 9998;
          background: rgba(8,12,10,0.55);
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
          opacity: 0; pointer-events: none;
          transition: opacity 0.35s ease;
        }
        .nav-backdrop.open { opacity: 1; pointer-events: all; }

        /* ── MOBILE DRAWER ── */
        .nav-drawer {
          position: fixed;
          top: 0; right: 0;
          width: min(340px, 88vw);
          height: 100dvh;
          z-index: 9999;
          background: #faf7f2;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
          overflow-y: auto;
        }
        .nav-drawer.open { transform: translateX(0); }
        @media (min-width: 768px) {
          .nav-drawer, .nav-backdrop { display: none !important; }
        }

        .nav-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(20,32,26,0.07);
          flex-shrink: 0;
        }
        .nav-drawer-logo-img {
          height: 52px;
          width: auto;
          object-fit: contain;
        }
        .nav-drawer-close {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(20,32,26,0.12);
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: #14201a;
          transition: background 0.2s;
        }
        .nav-drawer-close:hover { background: rgba(20,32,26,0.06); }

        .nav-drawer-links {
          display: flex;
          flex-direction: column;
          padding: 8px 0;
          flex: 1;
        }
        .nav-drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 24px;
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.1em;
          color: rgba(20,32,26,0.5);
          text-decoration: none;
          border-bottom: 1px solid rgba(20,32,26,0.05);
          transition: color 0.2s, padding-left 0.2s, background 0.2s;
          position: relative;
        }
        .nav-drawer-link:hover {
          color: #14201a;
          background: rgba(20,32,26,0.025);
          padding-left: 30px;
        }
        .nav-drawer-link.active { color: #14201a; font-weight: 500; }
        .nav-drawer-link.active::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #D4A96A;
          border-radius: 0 2px 2px 0;
        }
        .nav-drawer-link-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 10px;
          color: rgba(20,32,26,0.2);
          letter-spacing: 0.1em;
        }

        /* Mobile Services Accordion */
        .nav-drawer-services-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 24px;
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.1em;
          color: rgba(20,32,26,0.5);
          border-bottom: 1px solid rgba(20,32,26,0.05);
          cursor: pointer;
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          width: 100%;
          text-align: left;
          transition: color 0.2s, background 0.2s;
          position: relative;
        }
        .nav-drawer-services-toggle.active { color: #14201a; font-weight: 500; }
        .nav-drawer-services-toggle.active::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #D4A96A;
          border-radius: 0 2px 2px 0;
        }
        .nav-drawer-services-toggle:hover {
          color: #14201a;
          background: rgba(20,32,26,0.025);
        }
        .nav-drawer-services-chevron {
          transition: transform 0.28s ease;
          color: rgba(20,32,26,0.3);
        }
        .nav-drawer-services-chevron.open { transform: rotate(180deg); }

        .nav-drawer-services-sub {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.38s cubic-bezier(0.4,0,0.2,1);
          background: rgba(20,32,26,0.018);
          border-bottom: 1px solid rgba(20,32,26,0.05);
        }
        .nav-drawer-services-sub.open {
          max-height: 600px;
        }
        .nav-drawer-sub-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 24px 13px 36px;
          text-decoration: none;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: rgba(20,32,26,0.45);
          letter-spacing: 0.04em;
          transition: color 0.15s, background 0.15s;
          border-bottom: 1px solid rgba(20,32,26,0.04);
        }
        .nav-drawer-sub-item:last-child { border-bottom: none; }
        .nav-drawer-sub-item:hover {
          color: #14201a;
          background: rgba(139,106,62,0.05);
        }
        .nav-drawer-sub-item.active {
          color: #8B6A3E;
          font-weight: 500;
        }
        .nav-drawer-sub-icon {
          font-size: 15px;
          flex-shrink: 0;
          filter: grayscale(0.3);
        }
        .nav-drawer-sub-num {
          margin-left: auto;
          font-family: 'Cormorant Garamond', serif;
          font-size: 10px;
          color: rgba(20,32,26,0.18);
        }

        .nav-drawer-footer {
          padding: 20px 24px 36px;
          border-top: 1px solid rgba(20,32,26,0.07);
          flex-shrink: 0;
        }
        .nav-drawer-btn {
          display: block;
          text-align: center;
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 15px 24px;
          border-radius: 999px;
          color: #fff;
          background: #14201a;
          transition: background 0.25s;
        }
        .nav-drawer-btn:hover { background: #D4A96A; }
      `}</style>

      <nav className={`nav-root ${mode}`}>
        <div className={`nav-inner${mounted ? " vis" : ""}`}>
          {/* Left Links — desktop only */}
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

            {/* Services Dropdown */}
            <div className="nav-services-wrap" ref={dropRef}>
              <button
                className={`nav-services-btn${isServicesActive ? " active" : ""}`}
                onClick={() => setDropOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={dropOpen}
              >
                Portfolio
                <ChevronDown
                  size={13}
                  className={`nav-services-chevron${dropOpen ? " open" : ""}`}
                />
              </button>

              {/* Dropdown Panel */}
              <div
                className={`nav-dropdown${dropOpen ? " open" : ""}`}
                role="menu"
              >
                <div className="nav-dropdown-header">
                  <span className="nav-dropdown-header-label">
                    Our Collections
                  </span>
                </div>

                <div className="nav-dropdown-list">
                  {serviceLinks.map((svc) => (
                    <Link
                      key={svc.slug}
                      to={`/services/${svc.slug}`}
                      className={`nav-dropdown-item${location.pathname === `/services/${svc.slug}` ? " active" : ""}`}
                      role="menuitem"
                      onClick={() => setDropOpen(false)}
                    >
                      <span className="nav-dropdown-item-icon">{svc.icon}</span>
                      <span className="nav-dropdown-item-name">{svc.name}</span>
                    </Link>
                  ))}
                </div>

               
              </div>
            </div>
          </div>

          {/* Logo — desktop center, mobile left */}
          <div className="nav-center">
            <Link to="/" className="nav-logo-wrap">
              <img src={logo} alt="Legacy Curator" className="nav-logo-img" />
            </Link>
          </div>

          {/* Right — desktop only */}
          <div className="nav-right">
            <span className="nav-divider" />
            <Link to="/contact" className="nav-btn">
              Contact Us
            </Link>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} color={isTransparent ? "#ffffff" : "#14201a"} />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`nav-backdrop${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`nav-drawer${menuOpen ? " open" : ""}`}>
        <div className="nav-drawer-header">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt="Legacy Curator"
              className="nav-drawer-logo-img"
            />
          </Link>
          <button
            className="nav-drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close"
          >
            <X size={15} />
          </button>
        </div>

        <div className="nav-drawer-links">
          {/* Regular links */}
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-drawer-link${location.pathname === link.path ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
              <span className="nav-drawer-link-num">0{i + 1}</span>
            </Link>
          ))}

          {/* Services Accordion */}
          <button
            className={`nav-drawer-services-toggle${isServicesActive ? " active" : ""}`}
            onClick={() => setMobileServOpen((v) => !v)}
          >
            Portfolio
            <ChevronDown
              size={14}
              className={`nav-drawer-services-chevron${mobileServOpen ? " open" : ""}`}
            />
          </button>

          <div
            className={`nav-drawer-services-sub${mobileServOpen ? " open" : ""}`}
          >
            {serviceLinks.map((svc, i) => (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                className={`nav-drawer-sub-item${location.pathname === `/services/${svc.slug}` ? " active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="nav-drawer-sub-icon">{svc.icon}</span>
                {svc.name}
                <span className="nav-drawer-sub-num">0{i + 1}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="nav-drawer-footer">
          <Link
            to="/contact"
            className="nav-drawer-btn"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
