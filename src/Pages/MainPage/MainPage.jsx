import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "../../Components/HomePage/HeroSection/HeroSection";
import ServicesSlider from "../../Components/HomePage/ServicesSlider/ServicesSlider";
import WhyChooseUs from "../../Components/HomePage/Whychooseus/Whychooseus";
import FAQSection from "../../Components/HomePage/Faq/Faq";
import HowWeWork from "../../Components/HomePage/Howwework/Howwework";
import VideoTestimonials from "../../Components/HomePage/VideoTestimonials/VideoTestimonials";
import FloatingMusicPlayer from "../../Components/Floatingmusicplayer/Floatingmusicplayer";

const MainPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div>
      <HeroSection />

      <div data-aos="fade-up">
        <ServicesSlider />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <WhyChooseUs />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <HowWeWork />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <FAQSection />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <VideoTestimonials />
      </div>

      <FloatingMusicPlayer />
    </div>
  );
};

export default MainPage;