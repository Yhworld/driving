import React from 'react';
import data from './data';
import './services.scss';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className='mb-36 pt-8'>
      <section id="services" className="max-w-screen-xl container relative mx-auto p-4 mt-16">
        <div className='flex flex-col items-center'>
          <h2 className="text-center font-semibold text-primary text-red-500 sm:text-1xl">
            What We Offer
          </h2>
          <p className='text-dark-6 mt-6 text-4xl font-bold text-center'>
            Tailored Driving Lessons in Manchester
          </p>
          <p className='hidden md:block text-dark-6 text-4xl font-bold text-center'>
            Expert Instructors to Suit Your Needs
          </p>
        </div>

        <div
          id="about-sub"
          className="container mt-8 flex flex-col md:mt-28 md:items-center md:space-x-8 md:justify-between mx-auto space-y-12 md:flex-row md:space-y-0"
        >
          {data.map((service) => (
            <div key={service.title} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white">
              <Link to={service.link}>
                {/* Lazy loading images */}
                <img
                  id="card-img"
                  className="rounded-t-lg"
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />
              </Link>
              <div className="p-5" id="cards">
                <Link to={service.link}>
                  <h5 className="mb-2 w-4/5 text-2xl font-bold tracking-tight text-black">
                    {service.title}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-00 dark:text-slate-500">
                  {service.description}.
                </p>
                <Link
                  to={service.link}
                  id="card-button"
                  className="inline-flex items-center py-2 text-sm font-bold text-center text-red-500 focus:outline-none"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
