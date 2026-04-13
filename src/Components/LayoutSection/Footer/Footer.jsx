import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/LegacyCuratorlogo.png";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const PinterestIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452H16.9v-5.569c0-1.328-.025-3.037-1.849-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.371V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.369-1.849 3.602 0 4.268 2.372 4.268 5.455v6.285zM5.337 7.433a1.987 1.987 0 1 1 0-3.973 1.987 1.987 0 0 1 0 3.973zM6.816 20.452H3.857V9h2.959v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.277V1.723C24 .771 23.2 0 22.222 0z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// ─── Updated to match services array exactly ─────────────────────────────────
const footerLinks = {
  "Our Portfolio": [
    { name: "Coffee Table Books",   path: "/services/coffee-table" },
    { name: "Family Legacy Books",  path: "/services/legacy-book" },
    { name: "Business Story Books", path: "/services/business-book" },
    { name: "Memoir Books",         path: "/services/memoir" },
    { name: "Photo Books",          path: "/services/photo-book" },
    { name: "Vision & Passion Books", path: "/services/vision-passion-book" },
    { name: "Devotional Books",     path: "/services/devotional-book" },
  ],
  Company: [
    { name: "About Us",   path: "/about" },
    { name: "Our Team",   path: "/team" },
    { name: "Blog",       path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ],
};

const socialLinks = [
  { label: "Facebook",  href: "#", icon: <FacebookIcon /> },
  { label: "Instagram", href: "https://www.instagram.com/legacycurator.in?igsh=MTBzZWhoOTRsNGY1MA==", icon: <InstagramIcon /> },
  { label: "Pinterest", href: "#", icon: <PinterestIcon /> },
  { label: "YouTube",   href: "#", icon: <YoutubeIcon /> },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/legacycurator/", icon: <LinkedInIcon /> },
];

const Footer = () => {
  return (
    <footer className="bg-[#FAF7F2]">
      {/* Decorative top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-saddle/40 to-transparent" />

      {/* ── Main Footer Body ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-8">

          {/* ── Brand Column ── */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="inline-block mb-5 group">
              <img
                src={logo}
                alt="Legacy Curator"
                className="h-20 w-auto object-contain transition-opacity duration-300 group-hover:opacity-75"
              />
            </Link>
            <p className="text-sm text-forest/85 leading-relaxed mb-7 max-w-[280px] font-medium">
              Transforming personal, family, and business legacies into timeless
              coffee table books — preserving your story for generations.
            </p>
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="
                    w-8 h-8 flex items-center justify-center
                    rounded-full border border-saddle/35 bg-white/50
                    text-forest/70
                    hover:text-saddle hover:border-saddle hover:bg-white hover:shadow-sm
                    transition-all duration-200
                  "
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* ── Our Portfolio ── */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-bold tracking-[0.15em] uppercase text-forest/90 mb-4 pb-2 border-b border-saddle/30">
              Our Portfolio
            </h3>
            <ul className="space-y-2.5">
              {footerLinks["Our Portfolio"].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-[13px] text-forest/80 hover:text-saddle font-medium transition-colors duration-200"
                  >
                    <span className="block h-px bg-saddle w-0 group-hover:w-3 mr-0 group-hover:mr-2 flex-shrink-0 transition-all duration-300 ease-out" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company ── */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-bold tracking-[0.15em] uppercase text-forest/90 mb-4 pb-2 border-b border-saddle/30">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks["Company"].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-[13px] text-forest/80 hover:text-saddle font-medium transition-colors duration-200"
                  >
                    <span className="block h-px bg-saddle w-0 group-hover:w-3 mr-0 group-hover:mr-2 flex-shrink-0 transition-all duration-300 ease-out" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        

        </div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-saddle/25" />
      </div>

      {/* ── Bottom Bar ── */}
      <div className="bg-[#1B2B24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
            <p className="text-[11px] text-porcelain/60 text-center sm:text-left order-2 sm:order-1 font-medium">
              © 2026 Legacy Curator. All rights reserved.
            </p>
            <div className="flex items-center gap-4 order-1 sm:order-2">
              <Link to="/privacy-policy" className="text-[11px] text-porcelain/60 hover:text-porcelain transition font-medium">
                Privacy Policy
              </Link>
              <span className="text-porcelain/30">|</span>
              <Link to="/terms" className="text-[11px] text-porcelain/60 hover:text-porcelain transition font-medium">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-porcelain/10 text-center">
            <p className="text-[10px] text-porcelain/40 tracking-wide">
              Designed & Developed by{" "}
              <a
                href="https://zwolfconsultancy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-porcelain/70 hover:text-porcelain transition font-semibold"
              >
                Zwolf Consultancy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;