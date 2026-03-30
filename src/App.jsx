import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import ScrollToTop from "./Lib/ScrollToTop/ScrollToTop";
import Layout from "./Layout/LayoutSection";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {/* ── Main Pages ── */}
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
