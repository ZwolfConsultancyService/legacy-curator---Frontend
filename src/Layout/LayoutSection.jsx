import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/LayoutSection/Footer/Footer';
import Navbar from '../Components/LayoutSection/Navbar/Navbar';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* 
        isHome pe pt-0 kyunki HeroSection khud full-screen hai aur 
        navbar transparent hai uske upar — intentional overlap hai.
        Baaki pages pe pt-16 deta hai taki fixed navbar ke neeche content na chuppe.
      */}
      <main className={`flex-grow ${isHome ? '' : 'pt-16'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;