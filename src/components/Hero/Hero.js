import React from 'react';
import './hero.css';

function Hero() {
  const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center px-6 mx-auto md:space-y-0"
    >
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2 mt-48 text-center">
        <h1 className="font-bold text-4xl text-white md:text-6xl">
          Driving Made Easy in Manchester.
        </h1>
        <p className="text-slate-200">
        Make it driving is a top Manchester driving school offering expert manual and automatic lessons, high pass rates, experienced instructors, and flexible schedules.
</p>

        <div className="flex justify-center">
          <a
            href="#services"
            onClick={scrollToSection}
            className="flex items-center justify-center px-16 py-4 text-base font-medium text-gray-500 bg-white border-2 border-white rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
