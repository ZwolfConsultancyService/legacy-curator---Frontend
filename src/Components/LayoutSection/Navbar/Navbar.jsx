import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../../assets/LegacyCuratorlogo.png";

const serviceLinks = [
  { name: "Photo Books",        slug: "photo-book",          icon: "📷", sub: "Memories, preserved"   },
  // { name: "Travel Books",       slug: "travel-book",         icon: "✈️", sub: "Journeys, immortalised" },
  // { name: "Legacy Books",       slug: "legacy-book",         icon: "🏛️", sub: "Lineage, honoured"      },
  { name: "Coffee Table Books", slug: "coffee-table",        icon: "☕", sub: "Statement, displayed"   },
  { name: "Memoir Books",       slug: "memoir",              icon: "📖", sub: "Your story, told"       },
  { name: "Vision & Passion",   slug: "vision-passion-book", icon: "✨", sub: "Dreams, realised"       },
  { name: "Business Story",     slug: "business-book",       icon: "🏢", sub: "Brand, celebrated"      },
  { name: "Devotional Books",   slug: "devotional-book",     icon: "🕊️", sub: "Faith, expressed"       },
];

const companyLinks = [
  { name: "About Us",    path: "/about",   icon: "◈", sub: "Our story & values"          },
  { name: "Our Founder", path: "/founder", icon: "◉", sub: "The vision behind it all"    },
  { name: "Provenance",    path: "/team",    icon: "◎", sub: "The people behind the craft" },
];

const leftNavLinks  = [
  { name: "Home",  path: "/" },
  { name: "Blogs", path: "/blogs" },
];


const Navbar = () => {
  const [menuOpen,        setMenuOpen]        = useState(false);
  const [scrolled,        setScrolled]        = useState(false);
  const [mounted,         setMounted]         = useState(false);
  const [dropOpen,        setDropOpen]        = useState(false);
  const [companyDropOpen, setCompanyDropOpen] = useState(false);
  const [mobileServOpen,  setMobileServOpen]  = useState(false);
  const [mobileCompOpen,  setMobileCompOpen]  = useState(false);

  const dropRef    = useRef(null);
  const companyRef = useRef(null);
  const location   = useLocation();
  const isHome     = location.pathname === "/";

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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Tenor+Sans&family=Montserrat:wght@300;400;500;600&display=swap');

        /* ─── CSS VARIABLES ─── */
        :root {
          --gold:        #C9A84C;
          --gold-light:  #D4A96A;
          --gold-pale:   rgba(201,168,76,0.15);
          --forest:      #14201a;
          --forest-mid:  rgba(20,32,26,0.7);
          --forest-soft: rgba(20,32,26,0.45);
          --forest-faint:rgba(20,32,26,0.06);
          --cream:       #FAF7F2;
          --white:       #FFFFFF;
          --nav-h:       100px;
        }

        /* ─── ROOT ─── */
        .lc-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 9999;
          transition: background 0.55s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.55s ease,
                      border-color 0.55s ease;
        }

        /* Transparent state (home + not scrolled) */
        .lc-nav.transparent {
          background: transparent;
          box-shadow: none;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        /* Solid state */
        .lc-nav.solid {
          background: rgba(250,247,242,0.96);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow:
            0 1px 0 rgba(20,32,26,0.07),
            0 4px 32px rgba(20,32,26,0.06);
          border-bottom: 1px solid rgba(20,32,26,0.06);
        }

        /* Golden accent line at very top */
        .lc-nav::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1.5px;
          background: linear-gradient(90deg, transparent 0%, var(--gold) 30%, var(--gold-light) 50%, var(--gold) 70%, transparent 100%);
          opacity: 0;
          transition: opacity 0.55s ease;
        }
        .lc-nav.solid::before { opacity: 1; }

        /* ─── INNER WRAPPER ─── */
        .lc-inner {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 48px;
          height: var(--nav-h);
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 16px;
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.6s ease 0.05s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.05s;
        }
        .lc-inner.vis { opacity: 1; transform: translateY(0); }

        /* ─── LEFT CLUSTER ─── */
        .lc-left {
          display: none;
          align-items: center;
          gap: 32px;
          justify-content: flex-start;
        }
        @media (min-width: 960px) { .lc-left { display: flex; } }

        /* ─── RIGHT CLUSTER ─── */
        .lc-right {
          display: none;
          align-items: center;
          justify-content: flex-end;
          gap: 32px;
        }
        @media (min-width: 960px) { .lc-right { display: flex; } }

        /* ─── SHARED NAV LINK / BUTTON STYLE ─── */
        .lc-link, .lc-drop-btn {
          font-family: 'Montserrat', sans-serif;
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          position: relative;
          padding-bottom: 3px;
          background: none;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: color 0.3s ease;
        }

        /* Underline animation */
        .lc-link::after, .lc-drop-btn::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          height: 1px; width: 0;
          transition: width 0.38s cubic-bezier(0.4,0,0.2,1);
        }
        .lc-link:hover::after, .lc-link.active::after,
        .lc-drop-btn:hover::after, .lc-drop-btn.active::after { width: 100%; }

        /* Transparent mode colours */
        .transparent .lc-link,
        .transparent .lc-drop-btn { color: rgba(255,255,255,0.88); }
        .transparent .lc-link:hover,  .transparent .lc-link.active,
        .transparent .lc-drop-btn:hover, .transparent .lc-drop-btn.active { color: #fff; }
        .transparent .lc-link::after, .transparent .lc-drop-btn::after { background: var(--gold-light); }

        /* Solid mode colours */
        .solid .lc-link,
        .solid .lc-drop-btn { color: var(--forest-mid); }
        .solid .lc-link:hover, .solid .lc-link.active,
        .solid .lc-drop-btn:hover, .solid .lc-drop-btn.active { color: var(--forest); }
        .solid .lc-link::after, .solid .lc-drop-btn::after { background: var(--gold); }

        /* Chevron */
        .lc-chevron {
          transition: transform 0.32s cubic-bezier(0.4,0,0.2,1);
          flex-shrink: 0;
          margin-top: 1px;
        }
        .lc-chevron.open { transform: rotate(180deg); }

        /* ─── DROPDOWN WRAP ─── */
        .lc-drop-wrap { position: relative; flex-shrink: 0; margin-bottom: 9px; }

        /* ─── DROPDOWN PANEL ─── */
        .lc-dropdown {
          position: absolute;
          top: calc(100% + 22px);
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
          background: var(--white);
          border: 1px solid rgba(20,32,26,0.07);
          border-radius: 18px;
          box-shadow:
            0 0 0 1px rgba(201,168,76,0.06),
            0 8px 24px rgba(20,32,26,0.07),
            0 32px 64px rgba(20,32,26,0.13);
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.24s ease, transform 0.24s cubic-bezier(0.4,0,0.2,1);
          z-index: 200;
        }
        .lc-dropdown.open {
          opacity: 1;
          pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }

        /* Small caret */
        .lc-dropdown::before {
          content: '';
          position: absolute;
          top: -5px; left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 10px; height: 10px;
          background: var(--white);
          border-left: 1px solid rgba(20,32,26,0.07);
          border-top: 1px solid rgba(20,32,26,0.07);
        }

        .lc-dropdown.portfolio { width: 440px; }
        .lc-dropdown.company   { width: 310px; }

        /* Dropdown header */
        .dd-head {
          padding: 18px 22px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(20,32,26,0.05);
          background: linear-gradient(180deg, rgba(201,168,76,0.03) 0%, transparent 100%);
        }
        .dd-head-left { display: flex; flex-direction: column; gap: 3px; }
        .dd-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 8.5px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: rgba(20,32,26,0.28);
          font-weight: 500;
        }
        .dd-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 21px;
          font-weight: 400;
          color: var(--forest);
          letter-spacing: 0.02em;
          line-height: 1;
        }
        .dd-badge {
          font-family: 'Montserrat', sans-serif;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.22);
          padding: 4px 12px;
          border-radius: 20px;
          white-space: nowrap;
        }

        /* Portfolio grid */
        .dd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 10px 12px;
          gap: 2px;
        }
        .dd-item {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 11px 13px;
          border-radius: 11px;
          text-decoration: none;
          transition: background 0.16s ease;
        }
        .dd-item:hover  { background: rgba(20,32,26,0.04); }
        .dd-item.active { background: rgba(201,168,76,0.08); }

        .dd-text { flex: 1; min-width: 0; }
        .dd-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: rgba(20,32,26,0.6);
          letter-spacing: 0.02em;
          line-height: 1.25;
          transition: color 0.16s;
        }
        .dd-item:hover .dd-name  { color: var(--forest); }
        .dd-item.active .dd-name { color: var(--gold); }

        .dd-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-style: italic;
          color: rgba(20,32,26,0.28);
          letter-spacing: 0.02em;
          margin-top: 2px;
        }
        .dd-arr {
          opacity: 0;
          color: rgba(201,168,76,0.7);
          flex-shrink: 0;
          transition: opacity 0.16s, transform 0.16s;
        }
        .dd-item:hover .dd-arr { opacity: 1; transform: translateX(3px); }

        /* Company list */
        .dd-company-list {
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .dd-co-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 16px;
          border-radius: 11px;
          text-decoration: none;
          transition: background 0.16s;
        }
        .dd-co-item:hover  { background: rgba(20,32,26,0.04); }
        .dd-co-item.active { background: rgba(201,168,76,0.08); }

        .dd-co-icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: rgba(20,32,26,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 14px;
          color: rgba(20,32,26,0.38);
          transition: background 0.16s, color 0.16s;
          font-family: sans-serif;
        }
        .dd-co-item:hover  .dd-co-icon { background: rgba(201,168,76,0.12); color: var(--gold); }
        .dd-co-item.active .dd-co-icon { background: rgba(201,168,76,0.14); color: var(--gold); }

        .dd-co-text { flex: 1; }
        .dd-co-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgba(20,32,26,0.62);
          letter-spacing: 0.02em;
          transition: color 0.16s;
        }
        .dd-co-item:hover  .dd-co-name { color: var(--forest); }
        .dd-co-item.active .dd-co-name { color: var(--gold); }

        .dd-co-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-style: italic;
          color: rgba(20,32,26,0.28);
          margin-top: 2px;
        }
        .dd-co-chevron {
          opacity: 0;
          color: rgba(201,168,76,0.7);
          flex-shrink: 0;
          transition: opacity 0.16s, transform 0.16s;
        }
        .dd-co-item:hover .dd-co-chevron { opacity: 1; transform: translateX(3px); }

        /* ─── CENTER LOGO ─── */
        .lc-logo-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .lc-logo-link {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          padding: 6px 20px;
          border-radius: 50px;
          transition: background 0.3s;
          position: relative;
        }
        .transparent .lc-logo-link:hover { background: rgba(255,255,255,0.07); }
        .solid       .lc-logo-link:hover { background: var(--forest-faint); }

        .lc-logo-img {
          height: 100px;
          width: auto;
          max-width: 260px;
          object-fit: contain;
          display: block;
          transition: filter 0.4s ease, opacity 0.4s ease, transform 0.4s ease;
        }
        .transparent .lc-logo-img {
          filter: brightness(0) invert(1);
          opacity: 0.93;
        }
        .solid .lc-logo-img {
          filter: none;
          opacity: 1;
        }
        .lc-logo-link:hover .lc-logo-img { transform: scale(1.02); }

        /* ─── CTA BUTTON ─── */
        .lc-cta {
          font-family: 'Montserrat', sans-serif;
          font-size: 8.5px;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 11px 24px;
          border-radius: 50px;
          white-space: nowrap;
          flex-shrink: 0;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .lc-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%);
          pointer-events: none;
        }
        .transparent .lc-cta {
          color: #fff;
          background: rgba(201,168,76,0.18);
          border: 1px solid rgba(201,168,76,0.4);
          box-shadow: 0 0 20px rgba(201,168,76,0.15);
        }
        .transparent .lc-cta:hover {
          background: rgba(201,168,76,0.32);
          border-color: rgba(201,168,76,0.65);
          box-shadow: 0 0 28px rgba(201,168,76,0.25);
          transform: translateY(-1px);
        }
        .solid .lc-cta {
          color: var(--cream);
          background: var(--forest);
          border: 1px solid transparent;
          box-shadow: 0 2px 12px rgba(20,32,26,0.2);
        }
        .solid .lc-cta:hover {
          background: var(--gold);
          box-shadow: 0 4px 20px rgba(201,168,76,0.3);
          transform: translateY(-1px);
        }

        /* Divider */
        .lc-divider {
          width: 1px; height: 18px;
          flex-shrink: 0;
          transition: background 0.4s;
        }
        .transparent .lc-divider { background: rgba(255,255,255,0.15); }
        .solid       .lc-divider { background: rgba(20,32,26,0.1); }

        /* ─── MOBILE LOGO ─── */
        .lc-mobile-logo {
          display: none;
          text-decoration: none;
          flex-shrink: 0;
        }
        @media (max-width: 959px) { .lc-mobile-logo { display: block; } }

        .lc-mobile-logo-img {
          height: 100px;
          width: auto;
          object-fit: contain;
          display: block;
          transition: filter 0.4s ease, opacity 0.4s ease;
        }
        .transparent .lc-mobile-logo-img { filter: brightness(0) invert(1); opacity: 0.93; }
        .solid       .lc-mobile-logo-img { filter: none; opacity: 1; }

        /* ─── HAMBURGER ─── */
        .lc-burger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
          flex-shrink: 0;
          border: none;
          transition: background 0.2s;
        }
        .lc-burger:hover { background: rgba(20,32,26,0.06); }
        @media (max-width: 959px) { .lc-burger { display: flex; } }

        /* Mobile inner wrapper */
        .lc-mobile-row {
          display: none;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          height: var(--nav-h);
        }
        @media (max-width: 959px) { .lc-mobile-row { display: flex; } }
        @media (max-width: 959px) { .lc-inner { display: none; } }

        /* ─── BACKDROP ─── */
        .lc-backdrop {
          position: fixed; inset: 0;
          z-index: 9998;
          background: rgba(8,14,10,0.55);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          opacity: 0; pointer-events: none;
          transition: opacity 0.38s ease;
        }
        .lc-backdrop.open { opacity: 1; pointer-events: all; }

        /* ─── MOBILE DRAWER ─── */
        .lc-drawer {
          position: fixed;
          top: 0; right: 0;
          width: min(360px, 90vw);
          height: 100dvh;
          z-index: 9999;
          background: var(--cream);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.44s cubic-bezier(0.4,0,0.2,1);
          box-shadow: -8px 0 48px rgba(20,32,26,0.18);
        }
        .lc-drawer.open { transform: translateX(0); }

        /* Gold accent on left edge of drawer */
        .lc-drawer::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, transparent 0%, var(--gold) 20%, var(--gold-light) 50%, var(--gold) 80%, transparent 100%);
        }

        .drawer-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(20,32,26,0.07);
          flex-shrink: 0;
        }
        .drawer-logo { height: 60px; width: auto; object-fit: contain; }
        .drawer-close {
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(20,32,26,0.12);
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: var(--forest);
          transition: background 0.2s, border-color 0.2s;
        }
        .drawer-close:hover {
          background: rgba(20,32,26,0.06);
          border-color: rgba(20,32,26,0.2);
        }

        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 6px 0;
        }

        .drawer-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 17px 28px;
          font-family: 'Montserrat', sans-serif;
          font-size: 10.5px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--forest-soft);
          text-decoration: none;
          border-bottom: 1px solid rgba(20,32,26,0.05);
          transition: all 0.2s;
          position: relative;
        }
        .drawer-item:hover { color: var(--forest); background: rgba(20,32,26,0.018); padding-left: 36px; }
        .drawer-item.active { color: var(--forest); font-weight: 500; }
        .drawer-item.active::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: var(--gold);
          border-radius: 0 2px 2px 0;
        }
        .drawer-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-style: italic;
          color: rgba(20,32,26,0.16);
        }

        /* Accordion toggle */
        .drawer-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 17px 28px;
          font-family: 'Montserrat', sans-serif;
          font-size: 10.5px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--forest-soft);
          border-bottom: 1px solid rgba(20,32,26,0.05);
          cursor: pointer;
          background: none;
          border-left: none; border-right: none; border-top: none;
          width: 100%;
          text-align: left;
          transition: all 0.2s;
          position: relative;
        }
        .drawer-toggle.active { color: var(--forest); font-weight: 500; }
        .drawer-toggle.active::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: var(--gold);
          border-radius: 0 2px 2px 0;
        }
        .drawer-toggle:hover { color: var(--forest); background: rgba(20,32,26,0.018); }

        .drawer-chevron {
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          color: rgba(20,32,26,0.28);
          flex-shrink: 0;
        }
        .drawer-chevron.open { transform: rotate(180deg); }

        .drawer-sub {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.42s cubic-bezier(0.4,0,0.2,1);
          background: rgba(20,32,26,0.014);
          border-bottom: 1px solid rgba(20,32,26,0.05);
        }
        .drawer-sub.open { max-height: 900px; }

        .drawer-sub-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 28px 13px 40px;
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 400;
          color: var(--forest-soft);
          letter-spacing: 0.05em;
          text-decoration: none;
          border-bottom: 1px solid rgba(20,32,26,0.032);
          transition: all 0.15s;
        }
        .drawer-sub-item:last-child { border-bottom: none; }
        .drawer-sub-item:hover  { color: var(--forest); background: rgba(201,168,76,0.04); }
        .drawer-sub-item.active { color: var(--gold); font-weight: 500; }
        .drawer-sub-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-style: italic;
          color: rgba(20,32,26,0.16);
        }

        .drawer-co-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 28px 14px 36px;
          text-decoration: none;
          border-bottom: 1px solid rgba(20,32,26,0.032);
          transition: all 0.15s;
        }
        .drawer-co-item:last-child { border-bottom: none; }
        .drawer-co-item:hover  { background: rgba(201,168,76,0.04); }
        .drawer-co-item.active { background: rgba(201,168,76,0.06); }

        .drawer-co-icon {
          width: 28px; height: 28px;
          border-radius: 7px;
          background: rgba(20,32,26,0.05);
          display: flex; align-items: center; justify-content: center;
          font-size: 11px;
          color: rgba(20,32,26,0.32);
          flex-shrink: 0;
          transition: background 0.15s, color 0.15s;
          font-family: sans-serif;
        }
        .drawer-co-item:hover  .drawer-co-icon,
        .drawer-co-item.active .drawer-co-icon { background: rgba(201,168,76,0.12); color: var(--gold); }

        .drawer-co-text { flex: 1; }
        .drawer-co-name {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: var(--forest-soft);
          letter-spacing: 0.04em;
          transition: color 0.15s;
        }
        .drawer-co-item:hover  .drawer-co-name { color: var(--forest); }
        .drawer-co-item.active .drawer-co-name { color: var(--gold); }
        .drawer-co-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-style: italic;
          color: rgba(20,32,26,0.26);
          margin-top: 1px;
        }

        .drawer-foot {
          padding: 22px 24px 36px;
          border-top: 1px solid rgba(20,32,26,0.07);
          flex-shrink: 0;
        }
        .drawer-cta {
          display: block;
          text-align: center;
          font-family: 'Montserrat', sans-serif;
          font-size: 8.5px;
          font-weight: 600;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 15px 24px;
          border-radius: 50px;
          color: var(--cream);
          background: var(--forest);
          transition: background 0.28s, transform 0.28s;
          box-shadow: 0 2px 12px rgba(20,32,26,0.18);
        }
        .drawer-cta:hover { background: var(--gold); transform: translateY(-1px); }
        .drawer-tagline {
          text-align: center;
          margin-top: 13px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 12px;
          font-style: italic;
          color: rgba(20,32,26,0.28);
          letter-spacing: 0.04em;
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════ */}
      {/*  MAIN NAV                                          */}
      {/* ═══════════════════════════════════════════════════ */}
      <nav className={`lc-nav ${mode}`}>

        {/* ── DESKTOP (3-column grid) ── */}
        <div className={`lc-inner${mounted ? " vis" : ""}`}>

          {/* LEFT */}
          <div className="lc-left">
            {leftNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`lc-link${location.pathname === link.path ? " active" : ""}`}
              >
                {link.name}
              </Link>
            ))}

            {/* Company dropdown */}
            <div className="lc-drop-wrap" ref={companyRef}>
              <button
                className={`lc-drop-btn${isCompanyActive ? " active" : ""}`}
                onClick={() => { setCompanyDropOpen(v => !v); setDropOpen(false); }}
                aria-haspopup="true" aria-expanded={companyDropOpen}
              >
                The Company
                <ChevronDown size={11} className={`lc-chevron${companyDropOpen ? " open" : ""}`} />
              </button>

              <div className={`lc-dropdown company${companyDropOpen ? " open" : ""}`} role="menu">
                <div className="dd-head">
                  <div className="dd-head-left">
                    <span className="dd-eyebrow">Who we are</span>
                    <span className="dd-title">The Company</span>
                  </div>
                  <span className="dd-badge">Our Story</span>
                </div>
                <div className="dd-company-list">
                  {companyLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`dd-co-item${location.pathname === item.path ? " active" : ""}`}
                      role="menuitem"
                      onClick={() => setCompanyDropOpen(false)}
                    >
                      <div className="dd-co-icon">{item.icon}</div>
                      <div className="dd-co-text">
                        <div className="dd-co-name">{item.name}</div>
                        <div className="dd-co-sub">{item.sub}</div>
                      </div>
                      <ChevronDown size={10} className="dd-co-chevron" style={{ transform: "rotate(-90deg)" }} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Portfolio dropdown */}
            <div className="lc-drop-wrap" ref={dropRef}>
              <button
                className={`lc-drop-btn${isServicesActive ? " active" : ""}`}
                onClick={() => { setDropOpen(v => !v); setCompanyDropOpen(false); }}
                aria-haspopup="true" aria-expanded={dropOpen}
              >
                Curations
                <ChevronDown size={11} className={`lc-chevron${dropOpen ? " open" : ""}`} />
              </button>

              <div className={`lc-dropdown portfolio${dropOpen ? " open" : ""}`} role="menu">
                <div className="dd-head">
                  <div className="dd-head-left">
                    <span className="dd-eyebrow">Explore</span>
                    <span className="dd-title">Our Collections</span>
                  </div>
                  <span className="dd-badge">8 Book Types</span>
                </div>
                <div className="dd-grid">
                  {serviceLinks.map((svc) => (
                    <Link
                      key={svc.slug}
                      to={`/services/${svc.slug}`}
                      className={`dd-item${location.pathname === `/services/${svc.slug}` ? " active" : ""}`}
                      role="menuitem"
                      onClick={() => setDropOpen(false)}
                    >
                      <div className="dd-text">
                        <div className="dd-name">{svc.name}</div>
                        <div className="dd-sub">{svc.sub}</div>
                      </div>
                      <ChevronDown size={10} className="dd-arr" style={{ transform: "rotate(-90deg)" }} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CENTER LOGO */}
          <div className="lc-logo-wrap">
            <Link to="/" className="lc-logo-link">
              <img src={logo} alt="Legacy Curator" className="lc-logo-img" />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="lc-right">
            <span className="lc-divider" />
            <Link to="/contacts" className="lc-cta">Contact Us</Link>
          </div>
        </div>

        {/* ── MOBILE ROW ── */}
        <div className={`lc-mobile-row${mounted ? " vis" : ""}`} style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.6s ease 0.05s',
        }}>
          <Link to="/" className="lc-mobile-logo">
            <img src={logo} alt="Legacy Curator" className="lc-mobile-logo-img" />
          </Link>
          <button
            className="lc-burger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} color={isTransparent ? "#ffffff" : "#14201a"} />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div className={`lc-backdrop${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)} />

      {/* ═══════════════════════════════════════════════════ */}
      {/*  MOBILE DRAWER                                     */}
      {/* ═══════════════════════════════════════════════════ */}
      <div className={`lc-drawer${menuOpen ? " open" : ""}`}>
        <div className="drawer-head">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Legacy Curator" className="drawer-logo" />
          </Link>
          <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close">
            <X size={14} />
          </button>
        </div>

        <div className="drawer-body">
          {leftNavLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.path}
              className={`drawer-item${location.pathname === link.path ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
              <span className="drawer-num">0{i + 1}</span>
            </Link>
          ))}

          {/* Company accordion */}
          <button
            className={`drawer-toggle${isCompanyActive ? " active" : ""}`}
            onClick={() => setMobileCompOpen(v => !v)}
          >
            The Company
            <ChevronDown size={13} className={`drawer-chevron${mobileCompOpen ? " open" : ""}`} />
          </button>
          <div className={`drawer-sub${mobileCompOpen ? " open" : ""}`}>
            {companyLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`drawer-co-item${location.pathname === item.path ? " active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <div className="drawer-co-icon">{item.icon}</div>
                <div className="drawer-co-text">
                  <div className="drawer-co-name">{item.name}</div>
                  <div className="drawer-co-sub">{item.sub}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Portfolio accordion */}
          <button
            className={`drawer-accordion-toggle${isServicesActive ? " active" : ""}`}
            onClick={() => setMobileServOpen(v => !v)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '17px 28px',
              fontFamily: "'Montserrat', sans-serif", fontSize: '10.5px', fontWeight: 400,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: isServicesActive ? '#14201a' : 'rgba(20,32,26,0.45)',
              borderBottom: '1px solid rgba(20,32,26,0.05)',
              cursor: 'pointer', background: 'none',
              borderLeft: 'none', borderRight: 'none', borderTop: 'none',
              width: '100%', textAlign: 'left', transition: 'all 0.2s',
              position: 'relative', fontWeight: isServicesActive ? 500 : 400,
            }}
          >
            Portfolio
            <ChevronDown size={13} className={`drawer-chevron${mobileServOpen ? " open" : ""}`} />
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

        <div className="drawer-foot">
          <Link to="/contacts" className="drawer-cta" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          <p className="drawer-tagline">Crafting heirloom books since 2018</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;