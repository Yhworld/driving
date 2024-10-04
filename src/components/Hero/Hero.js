import React from 'react';
import { Link } from 'react-scroll';
import heropic from '../../assets/images/hero/hero.jpg'; // Use ES6 import for the image
import './hero.css';

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center px-6 mx-auto md:space-y-0"
    >
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2 mt-48 text-center">
        <h1 className="font-bold text-4xl text-white md:text-6xl">
          Driving Made Easy.
        </h1>
        <p className="text-slate-200">
          Proudly one of Manchester’s top driving schools, we offer expert lessons with a high pass rate. Our experienced instructors are here to help you master the road with confidence.
        </p>
        <div className="flex justify-center">
          <Link
            to="services"
            smooth={true}
            duration={400}
            className="flex items-center justify-center px-16 py-4 text-base font-medium text-gray-500 bg-white border-2 border-white rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
