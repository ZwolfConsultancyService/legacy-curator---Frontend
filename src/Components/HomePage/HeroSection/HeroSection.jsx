import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/0d/68/9f/0d689fb4de5f90eff89fe58278658abc.jpg')`,
        }}
      />

      {/* Dark overlay — navbar + content clearly visible */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(10,14,12,0.70) 0%, rgba(10,14,12,0.50) 50%, rgba(245,240,234,1) 100%)'
      }} />

      {/* Bottom Wave — color matches service section #F5F0EA */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F5F0EA" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto" style={{ marginTop: '-60px' }}>

        {/* Tag */}
        <span className="inline-block mb-6 text-xs font-semibold tracking-widest uppercase border px-4 py-1.5 rounded-full"
          style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.08)' }}>
          Premium Storytelling & Publishing
        </span>

        {/* Title */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ fontFamily: 'serif', color: '#FFFFFF' }}
        >
          Your Legacy <br />
          <span style={{ color: '#D4A96A' }}>Starts Here</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.65)' }}>
          Transform your personal, family, and business stories into timeless coffee table books — preserving journeys, values, and identities for generations to come.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/services"
            className="px-8 py-3.5 rounded-md text-sm font-semibold transition"
            style={{ background: '#FFFFFF', color: '#1E2B24' }}
          >
            Get Started
          </Link>
          <Link
            to="/portfolio"
            className="px-8 py-3.5 rounded-md text-sm font-semibold transition"
            style={{ border: '1.5px solid rgba(255,255,255,0.45)', color: '#FFFFFF' }}
          >
            View Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;