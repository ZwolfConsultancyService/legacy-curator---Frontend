import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = isHome && !scrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isTransparent
        ? 'bg-transparent'
        : 'bg-porcelain shadow-sm border-b border-eggshell'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 flex-shrink-0">
            <span
              className="text-xl font-bold tracking-widest uppercase font-serif transition-colors duration-300"
              style={{ color: isTransparent ? '#FFFFFF' : '#1E2B24' }}
            >
              Legacy
            </span>
            <span
              className="text-xl font-light tracking-widest uppercase font-serif transition-colors duration-300"
              style={{ color: isTransparent ? 'rgba(255,255,255,0.75)' : '#8B6A3E' }}
            >
              Curator
            </span>
          </Link>

          {/* Center Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  color: isTransparent
                    ? location.pathname === link.path
                      ? '#FFFFFF'
                      : 'rgba(255,255,255,0.65)'
                    : location.pathname === link.path
                      ? '#1E2B24'
                      : 'rgba(30,43,36,0.55)',
                  borderBottomColor: location.pathname === link.path
                    ? isTransparent ? '#FFFFFF' : '#8B6A3E'
                    : 'transparent',
                }}
                className="text-sm font-medium pb-1 border-b-2 transition-all duration-200 hover:opacity-100"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
              style={{
                color: isTransparent ? '#FFFFFF' : '#1E2B24',
                border: isTransparent
                  ? '1px solid rgba(255,255,255,0.45)'
                  : '1px solid rgba(30,43,36,0.4)',
              }}
            >
              Log In
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2 rounded-md text-sm font-semibold transition-all duration-300"
              style={{
                background: isTransparent ? 'rgba(255,255,255,0.15)' : '#1E2B24',
                color: '#FFFFFF',
                backdropFilter: isTransparent ? 'blur(8px)' : 'none',
                border: isTransparent ? '1px solid rgba(255,255,255,0.3)' : 'none',
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md transition-colors duration-300"
            style={{ color: isTransparent ? '#FFFFFF' : '#1E2B24' }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-porcelain border-t border-eggshell px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm font-medium py-2 border-b border-eggshell ${
                location.pathname === link.path ? 'text-forest' : 'text-saddle'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <Link to="/login" onClick={() => setMenuOpen(false)} className="text-center px-4 py-2 rounded-md text-sm font-medium text-forest border border-forest hover:bg-eggshell transition">
              Log In
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-center px-4 py-2 rounded-md text-sm font-semibold bg-forest text-porcelain hover:opacity-90 transition">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;