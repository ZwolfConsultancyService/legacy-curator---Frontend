import React from "react";
import HeroSection from "../../Components/HomePage/HeroSection/HeroSection";
import ServicesSlider from "../../Components/HomePage/ServicesSlider/ServicesSlider";
import WhyChooseUs from "../../Components/HomePage/Whychooseus/Whychooseus";
import FAQSection from "../../Components/HomePage/Faq/Faq";
import HowWeWork from "../../Components/HomePage/Howwework/Howwework";
//import ToolsSection from "../../Components/HomePage/Toolssection/Toolssection";
import PortfolioSection from "../../Components/Portfoliosection/Portfoliosection";

const MainPage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSlider />
      <WhyChooseUs />
     
       <HowWeWork />
       <PortfolioSection />
         {/* <ToolsSection /> */}
      <FAQSection />
    
    </div>
  );
};

export default MainPage;
