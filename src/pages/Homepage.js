import React, { useEffect, useState } from "react";
import Hero from '../components/Hero/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from "../components/Contact/Contact";
import About from '../components/About/About'
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonial/Testimonial"
import Maps from "../components/maps/Maps"
import Gallery from "../components/Gallery/Gallery";

function HomePage() {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    AOS.init({ duration: 1200 });
    const handleZoomChange = () => {
      const ratio = window.outerWidth / window.innerWidth;
      setZoomLevel(ratio);
    };

    window.addEventListener("resize", handleZoomChange);
    return () => {
      window.removeEventListener("resize", handleZoomChange);
    };
  }, []);

  return (
    <div className={`${zoomLevel < 0.3 ? "mx-auto container" : ""}`}>
      <Hero />
      <div data-aos="fade-up" data-aos-delay="200">
      <About />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
      <Services />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
      <Gallery />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
      <Testimonial />
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
      <Maps />
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
      <Contact />
      </div>
    </div>
  );
}

export default HomePage;