import React, { useEffect, Suspense } from "react";
import Hero from '../components/Hero/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from "../components/Contact/Contact";
import About from '../components/About/About';
import Testimonial from "../components/Testimonial/Testimonial";
import Loader from "../components/Loader/Loader";

// Lazy load the Services component and other heavy sections
const Services = React.lazy(() => import('../components/Services/Services'));
const Gallery = React.lazy(() => import('../components/Gallery/Gallery'));
const Maps = React.lazy(() => import('../components/maps/Maps'));

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 200,
    });

    window.addEventListener("load", () => AOS.refreshHard());

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="">
      <Hero />

      <div data-aos="fade-up" data-aos-delay="100">
        <About />
      </div>

      {/* Lazy load Services to reduce initial load */}
      <Suspense fallback={<Loader />}>
        <div>
          <Services />
        </div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div data-aos="fade-up" data-aos-delay="300">
          <Gallery />
        </div>
      </Suspense>

      <div data-aos="fade-up" data-aos-delay="400">
        <Testimonial />
      </div>

      <Suspense fallback={<Loader />}>
        <div data-aos="fade-up" data-aos-delay="500">
          <Maps />
        </div>
      </Suspense>

      <div data-aos="fade-up" data-aos-delay="600">
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
