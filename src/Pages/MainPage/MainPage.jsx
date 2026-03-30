import React from "react";
import HeroSection from "../../Components/HomePage/HeroSection/HeroSection";
import ServicesSlider from "../../Components/HomePage/ServicesSlider/ServicesSlider";
import WhyChooseUs from "../../Components/HomePage/Whychooseus/Whychooseus";
import FAQSection from "../../Components/HomePage/Faq/Faq";


const MainPage = () => {
  return (
    <div>
      <HeroSection />
     <ServicesSlider />
<WhyChooseUs />
<FAQSection />
    </div>
  );
};

export default MainPage;