import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../../assets/LegacyCuratorlogo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
   { name: 'Blog', path: '/blog' },
  { name: 'Portfolio', path: '/portfolio' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isTransparent = isHome && !scrolled;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Jost:wght@200;300;400;500&display=swap');

        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 9999;
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }
        .nav-root.solid {
          background: rgba(250,247,242,0.96);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 1px 0 rgba(30,43,36,0.08);
        }
        .nav-root.transparent { background: transparent; }

        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        /* ── LOGO ── */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0;
          text-decoration: none;
          flex-shrink: 0;
          margin-top:10px;
        }

        .nav-logo-img {
          /* bada size — clearly visible */
          height: 100px;
          width: auto;
          object-fit: contain;
          display: block;
          transition: filter 0.35s ease, opacity 0.35s ease;
        }

        /* Hero (transparent) pe logo white ho jaata hai dark bg ke liye */
        .nav-root.transparent .nav-logo-img {
          filter: brightness(0) invert(1);
          opacity: 0.92;
        }
        /* Scroll ke baad — original colors */
        .nav-root.solid .nav-logo-img {
          filter: none;
          opacity: 1;
        }

        /* ── DESKTOP LINKS ── */
        .nav-links {
          display: none;
          align-items: center;
          gap: 36px;
          list-style: none;
          margin: 0; padding: 0;
        }
        @media (min-width: 768px) { .nav-links { display: flex; } }

        .nav-link {
          position: relative;
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          text-decoration: none;
          padding-bottom: 3px;
          transition: color 0.25s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          height: 1px; width: 0;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after,
        .nav-link.active::after { width: 100%; }

        .nav-root.transparent .nav-link { color: rgba(255,255,255,0.6); }
        .nav-root.transparent .nav-link:hover,
        .nav-root.transparent .nav-link.active { color: #ffffff; }
        .nav-root.transparent .nav-link::after { background: rgba(255,255,255,0.7); }

        .nav-root.solid .nav-link { color: rgba(20,32,26,0.48); }
        .nav-root.solid .nav-link:hover,
        .nav-root.solid .nav-link.active { color: #14201a; }
        .nav-root.solid .nav-link::after { background: #8B6A3E; }

        /* ── DESKTOP CTA ── */
        .nav-actions {
          display: none;
          align-items: center;
        }
        @media (min-width: 768px) { .nav-actions { display: flex; } }

        .nav-btn-solid {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 10px 22px;
          border-radius: 3px;
          color: #ffffff;
          transition: background 0.25s;
          white-space: nowrap;
          cursor: pointer;
        }
        .nav-root.transparent .nav-btn-solid {
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.25);
          backdrop-filter: blur(6px);
        }
        .nav-root.transparent .nav-btn-solid:hover { background: rgba(255,255,255,0.24); }
        .nav-root.solid .nav-btn-solid {
          background: #14201a;
          border: 1px solid transparent;
        }
        .nav-root.solid .nav-btn-solid:hover { background: #D4A96A; }

        /* ── HAMBURGER ── */
        .nav-hamburger {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          border-radius: 4px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .nav-hamburger:hover { background: rgba(255,255,255,0.08); }
        .nav-root.solid .nav-hamburger:hover { background: rgba(20,32,26,0.06); }
        @media (min-width: 768px) { .nav-hamburger { display: none; } }

        /* ── BACKDROP ── */
        .nav-backdrop {
          position: fixed; inset: 0;
          z-index: 9998;
          background: rgba(8,12,10,0.55);
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
          opacity: 0;
          pointer-events: none;
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
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
          padding: 16px 24px;
          border-bottom: 1px solid rgba(20,32,26,0.07);
          flex-shrink: 0;
        }

        .nav-drawer-logo {
          display: flex;
          align-items: center;
          gap: 0;
          text-decoration: none;
        }
        .nav-drawer-logo-img {
          height: 48px;
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
          flex-shrink: 0;
        }
        .nav-drawer-close:hover { background: rgba(20,32,26,0.06); }

        .nav-drawer-links {
          display: flex;
          flex-direction: column;
          padding: 12px 0;
          flex: 1;
        }

        .nav-drawer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 17px 24px;
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-decoration: none;
          color: rgba(20,32,26,0.55);
          border-bottom: 1px solid rgba(20,32,26,0.05);
          transition: color 0.2s, background 0.2s, padding-left 0.2s;
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

        .nav-drawer-footer {
          padding: 20px 24px 36px;
          border-top: 1px solid rgba(20,32,26,0.07);
          flex-shrink: 0;
        }
        .nav-drawer-btn-solid {
          display: block;
          text-align: center;
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 15px 24px;
          border-radius: 3px;
          color: #ffffff;
          background: #14201a;
          transition: background 0.25s;
        }
        .nav-drawer-btn-solid:hover { background: #D4A96A; }

        /* ── ENTRY ANIMATION ── */
        .nav-mount {
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .nav-mount.vis { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* ── MAIN NAV ── */}
      <nav className={`nav-root${isTransparent ? ' transparent' : ' solid'}`}>
        <div className={`nav-inner nav-mount${mounted ? ' vis' : ''}`}>

          {/* Logo — sirf image, text nahi */}
          <Link to="/" className="nav-logo">
            <img src={logo} alt="Legacy Curator" className="nav-logo-img" />
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`nav-link${location.pathname === link.path ? ' active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="nav-actions">
            <Link to="/contact" className="nav-btn-solid">Contact Us</Link>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} color={isTransparent ? '#ffffff' : '#14201a'} />
          </button>

        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`nav-backdrop${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── MOBILE DRAWER ── */}
      <div className={`nav-drawer${menuOpen ? ' open' : ''}`}>

        <div className="nav-drawer-header">
          {/* Drawer mein sirf logo image */}
          <Link to="/" className="nav-drawer-logo" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Legacy Curator" className="nav-drawer-logo-img" />
          </Link>
          <button className="nav-drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close">
            <X size={16} />
          </button>
        </div>

        <div className="nav-drawer-links">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-drawer-link${location.pathname === link.path ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
              <span className="nav-drawer-link-num">0{i + 1}</span>
            </Link>
          ))}
        </div>

        <div className="nav-drawer-footer">
          <Link to="/contact" className="nav-drawer-btn-solid" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </div>

      </div>
    </>
  );
};

export default Navbar;