import React from 'react'
import './features.scss'
import { Link } from "react-router-dom";
import { PiArrowBendLeftDownBold } from "react-icons/pi";
import Cta from '../CTA/Cta';
let path = require('../../assets/images/aboutimg/path (1).png');
let car = require('../../assets/images/aboutimg/car-wash (1).png');

function Refresher() {
  return (
    <>
    <section id="refresher-features" className="max-w-screen-xl container flex flex-col items-center justify-center px-6 mx-auto space-y-0 md:space-y-0" loading="lazy">
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2 mt-32">
        <h1 className="font-bold text-4xl text-white text-center md:text-6xl ">
         Refresher Course
        </h1>
        <p className=" text-center text-slate-200">
        Start your driving journey with Manchester's trusted school. Our refresher driving course will help you build confidence on the road. Book your first lesson today!
        </p>
        <div className="flex justify-center">
          <Link
            to="/booking"
            className="flex items-center justify-center px-16 py-4 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none"
          >
            Get in Touch
          </Link>
        </div>
    </div>
    </section>
    <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <div className="  container relative mx-auto">
        <div className="flex flex-wrap items-center justify-center -mx-4">
          <div className="px-4 pl-8 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="block mb-4 text-lg font-semibold text-primary">
                01
              </span>
              <h2 className="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
              What Our Refresher Driving Course Offers
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
              MakeIt Refresher Course is designed for drivers who already have their license but may need extra confidence or practice behind the wheel. Whether you’ve taken a break from driving, are unfamiliar with Manchester’s busy roads, or want to update your driving skills, this course helps you regain your confidence and ensures you're driving safely.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                We offer flexible lesson times and expert instructors to make your learning process enjoyable and successful. Let's help you get on the road to your driving goals!
              </p>
            </div>
          </div>
        </div>
        <section class="bg-white mt-24">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="text-center mb-8 lg:mb-12">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Pay As You Go</h2>
      <p class="mb-5 font-light text-gray-800 sm:text-xl">
        Choose our flexible Pay As You Go options for Manual and Automatic driving courses.
      </p>
    </div>

    <div class="flex flex-col md:flex-row justify-center items-start space-x-0 md:space-x-4 mt-8">
  
      <div class="max-w-sm bg-white rounded-lg p-6 w-full md:w-80">
        <h3 class="mb-4 text-2xl font-extrabold text-gray-900">Manual Course</h3>
        <p class="text-lg text-gray-800">90 Minutes</p>
        <p class="mb-4 text-3xl font-bold text-gray-900">£52.50</p>
        <p class="text-lg text-gray-800">120 Minutes</p>
        <p class="mb-4 text-3xl font-bold text-gray-900">£70</p>
      </div>

  
      <div class="hidden md:flex items-center justify-center">
        <div class="h-64 border-l-2 border-gray-300 mx-4"></div>
      </div>

    
      <div class="max-w-sm bg-white rounded-lg p-6 w-full md:w-80">
        <h3 class="mb-4 text-2xl font-extrabold text-gray-900">Automatic Course</h3>
        <p class="text-lg text-gray-800">90 Minutes</p>
        <p class="mb-4 text-3xl font-bold text-gray-900">£60</p>
        <p class="text-lg text-gray-800">120 Minutes</p>
        <p class="mb-4 text-3xl font-bold text-gray-900">£80</p>
      </div>
    </div>

    <div class="flex pl-6 md:pl-0 md:justify-end pt-4">
      <Link to='/booking' id='card-button' class="inline-flex items-center justify-center py-2 px-4 text-sm font-bold text-center text-white bg-black rounded hover:bg-gray-800">
        Book Now
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </Link>
    </div>
  </div>
</section>
      </div>
      <Cta />
    </section>
  
    </>
  )
}

export default Refresher
