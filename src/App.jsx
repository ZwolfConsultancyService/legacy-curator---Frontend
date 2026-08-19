import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./Pages/MainPage/MainPage";
import ScrollToTop from "./Lib/ScrollToTop/ScrollToTop";
import Layout from "./Layout/LayoutSection";
import AboutPage from "./Pages/Routes/AboutPage/AboutPage";
//import ServicesPage from "./Pages/Routes/Servicespage/Servicespage";
//import PortfolioPage from "./Pages/Routes/Portfoliopage/Portfoliopage";
import ContactPage from "./Pages/Routes/Contactpage/Contactpage";
import BlogPage from "./Pages/Routes/Blogpage/Blogpage";
import ServiceDetailPage from "./Pages/DetailPage/Servicedetailpage/Servicedetailpage";
import BlogDetailPage from "./Pages/DetailPage/Blogdetailpage/Blogdetailpage";
import FoundersPage from "./Pages/Routes/Founderspage/Founderspage";
import TeamPage from "./Pages/Routes/Founderspage/Teampage";
import FloatingMusicPlayer from "./Components/Floatingmusicplayer/Floatingmusicplayer";
import TermsAndConditions from "./Pages/Termsandconditions/Termsandconditions";
import PrivacyPolicy from "./Pages/Privacypolicy/Privacypolicy";
import LocationDetailPage from "./Pages/DetailPage/Locationdetailpage/Locationdetailpage";

const App = () => {
  return (
    <>
      <ScrollToTop />

      <FloatingMusicPlayer />
      <Routes>
        <Route element={<Layout />}>
          {/* ── Main Pages ── */}
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/services" element={<ServicesPage />} /> */}
          {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/blogs" element={<BlogPage />} />

          {/* Top-level service page, e.g. /services/photo-book */}
          <Route path="/services/:slug" element={<ServiceDetailPage />} />

          {/* City-level location page, e.g. /services/photo-book/delhi
              Param name MUST be :subSlug to match useParams() in LocationDetailPage.jsx */}
          <Route path="/services/:slug/:subSlug" element={<LocationDetailPage />} />

          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/founder" element={<FoundersPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;