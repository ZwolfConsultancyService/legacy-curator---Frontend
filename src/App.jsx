import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import ScrollToTop from "./Lib/ScrollToTop/ScrollToTop";
import Layout from "./Layout/LayoutSection";
import AboutPage from "./Pages/Routes/AboutPage/AboutPage";
import ServicesPage from "./Pages/Routes/Servicespage/Servicespage";
import PortfolioPage from "./Pages/Routes/Portfoliopage/Portfoliopage";
import ContactPage from "./Pages/Routes/Contactpage/Contactpage";
import BlogPage from "./Pages/Routes/Blogpage/Blogpage";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {/* ── Main Pages ── */}
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
             <Route path="/blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
