import React from 'react'
import './features.scss'
import { Link } from "react-router-dom";
import { PiArrowBendLeftDownBold } from "react-icons/pi";
import Cta from '../CTA/Cta';
let path = require('../../assets/images/aboutimg/path (1).png');
let car = require('../../assets/images/aboutimg/car-wash (1).png');

function Beginner() {
  return (
    <>
    <section id="audio-features" className="max-w-screen-xl container flex flex-col items-center justify-center px-6 mx-auto space-y-0 md:space-y-0" loading="lazy">
      <div id='hero-text' className="flex flex-col mb-32 space-y-12 md:w-1/2 mt-48">
        <h1 className="font-bold text-4xl text-white text-center md:text-6xl ">
         Beginner Course
        </h1>
        <p className=" text-center text-slate-200">
        Start your driving journey with Manchester's trusted school. Our beginner driving course will help you build confidence on the road. Book your first lesson today!
        </p>
        <div className="flex justify-center">
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSeSmQ3c0Dx8OgIxvahK_uO4lWq3Ze9NaQN4Q2NZMOzojVqF-Q/viewform"
            className="flex items-center justify-center px-16 py-4 text-base font-medium leading-6 text-black whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none"
          >
            Get in Touch
          </Link>
        </div>
    </div>
    </section>
    
    <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <div className="  container relative mx-auto">
        <div className="flex flex-wrap items-center justify-center -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="">
                {/* <PiArrowBendLeftDownBold size={200} /> */}
                  <img
                    src={path}
                    alt="Beginner Driving Class"
                    loading='lazy'
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="">
                <div className="">
                  {/* <img
                    src="https://images.pexels.com/photos/6487966/pexels-photo-6487966.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Driving School Vehicle"
                    loading='lazy'
                    className="w-full rounded-2xl"
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pl-8 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="block mb-4 text-lg font-semibold text-primary">
                01
              </span>
              <h2 className="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
              What Our Beginner Driving Course Offers
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                Our beginner course is designed for new drivers who want to gain confidence and skills behind the wheel. Learn essential driving techniques, rules of the road, and vehicle control in a safe and supportive environment. Whether you’ve never driven before or need to brush up on basics, our certified instructors will guide you through every step.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                We offer flexible lesson times and expert instructors to make your learning process enjoyable and successful. Let's help you get on the road to your driving goals!
              </p>
            </div>
          </div>
        </div>
        <section class="bg-white mt-24">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Automatic Course</h2>
          <p class="mb-5 font-light text-gray-800  sm:text-xl ">At Make it, we specialize in equipping students with the essential skills to drive automatic cars confidently and safely.</p>
      </div>
      <div class="font-[sans-serif]">
  <div class="max-w-6xl mx-auto">
    {/* <div class="text-center">
      <h2 class="text-gray-800 text-3xl font-bold mb-3">Automatic Driving Lessons Pricing</h2>
      <p class="text-sm text-gray-800 ">Choose a package that suits your needs</p>
    </div> */}

    <div class="overflow-x-auto mt-16">
      <table class="min-w-full border">
        <thead class="whitespace-nowrap">
          <tr class="h-24">
            <th class="text-gray-800 px-2 py-1 font-semibold text-lg">Package</th>
            <th class="text-gray-800 px-2 py-1 font-semibold text-lg w-48">5 Hours</th>
            <th class="text-gray-800 px-2 py-1 font-semibold text-lg w-48">10 Hours</th>
            <th class="text-gray-800 px-2 py-1 font-semibold text-lg w-48">15 Hours</th>
            <th class="text-gray-800 px-2 py-1 font-semibold text-lg w-48">20 Hours</th>
            <th class="text-gray-800 px-2 py-1 font-semibold text-lg w-48">25 Hours</th>
            <th class="text-gray-800 px-2 py-1 font-semibold text-lg w-48">30 Hours</th>
          </tr>
        </thead>

        <tbody class="whitespace-nowrap border">
          <tr class="bg-black">
            <td class="p-4 text-lg text-white font-bold">Price</td>
            <td class="p-4 text-center text-white font-bold">£220</td>
            <td class="p-4 text-center text-white font-bold">£400</td>
            <td class="p-4 text-center text-white font-bold">£525</td>
            <td class="p-4 text-center text-white font-bold">£680</td>
            <td class="p-4 text-center text-white font-bold">£825</td>
            <td class="p-4 text-center text-white font-bold">£990</td>
          </tr>
          <tr class="even:bg-white">
            <td class="p-4 text-lg text-black">Includes</td>
            
            <td class="p-4 text-center text-black">5 hours of driving</td>
            <td class="p-4 text-center text-black">10 hours of driving</td>
             <td class="p-4 text-center text-black">15 hours of driving</td>
            <td class="p-4 text-center text-black">20 hours of driving</td>
            <td class="p-4 text-center text-black">25 hours of driving</td>
            <td class="p-4 text-center text-black">30 hours of driving</td>
          </tr>
          <tr class="even:bg-black">
            <td class="p-4 text-lg text-black">Duration</td>
            <td class="p-4 text-center">Flexible</td>
            <td class="p-4 text-center">Flexible</td>
            <td class="p-4 text-center">Flexible</td>
            <td class="p-4 text-center">Flexible</td>
            <td class="p-4 text-center">Flexible</td>
            <td class="p-4 text-center">Flexible</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='flex justify-end pt-4'>
    <a href='https://docs.google.com/forms/d/e/1FAIpQLSeSmQ3c0Dx8OgIxvahK_uO4lWq3Ze9NaQN4Q2NZMOzojVqF-Q/viewform' 
    id='card-button' target="_blank" 
    rel="noopener noreferrer" class="inline-flex items-center py-2 text-sm font-bold text-center text-black focus:outline-none">
            Book Now
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
    </a></div>
  </div>
</div>
  </div>
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Manual Course</h2>
          <p class="mb-5 font-light text-gray-800  sm:text-xl ">At Make it, we specialize in equipping students with the essential skills to drive Manual cars confidently and safely.</p>
      </div>
      <div class="font-[sans-serif]">
  <div class="max-w-6xl mx-auto">
    {/* <div class="text-center">
      <h2 class="text-gray-800 text-3xl font-bold mb-3">Automatic Driving Lessons Pricing</h2>
      <p class="text-sm text-gray-800 ">Choose a package that suits your needs</p>
    </div> */}

    <div class="overflow-x-auto mt-16">
      <table class="min-w-full border">
        <thead class="whitespace-nowrap">
          <tr class="h-24">
            <th class="text-gray-800 px-2 py-1 font-semibold text-lg">Package</th>
            <th class="text-gray-800 px-2 py-1 font-semibold text-lg w-48">5 Hours</th>
            <th class="text-gray-800 px-2 py-1 font-semibold text-lg w-48">10 Hours</th>
            <th class="text-gray-800 px-2 py-1 font-semibold text-lg w-48">15 Hours</th>
            <th class="text-gray-800 px-2 py-1 font-semibold text-lg w-48">20 Hours</th>
            <th class="text-gray-800 px-2 py-1 font-semibold text-lg w-48">25 Hours</th>
            <th class="text-gray-800 px-2 py-1 font-semibold text-lg w-48">30 Hours</th>
          </tr>
        </thead>

        <tbody class="whitespace-nowrap border">
          <tr class="bg-black">
            <td class="p-4 text-lg text-white font-bold">Price</td>
            <td class="p-4 text-center text-white font-bold">£210</td>
            <td class="p-4 text-center text-white font-bold">£350</td>
            <td class="p-4 text-center text-white font-bold">£495</td>
            <td class="p-4 text-center text-white font-bold">£660</td>
            <td class="p-4 text-center text-white font-bold">£805</td>
            <td class="p-4 text-center text-white font-bold">£960</td>
          </tr>
          <tr class="even:bg-white">
            <td class="p-4 text-lg text-black">Includes</td>
            
            <td class="p-4 text-center text-black">5 hours of driving</td>
            <td class="p-4 text-center text-black">10 hours of driving</td>
             <td class="p-4 text-center text-black">15 hours of driving</td>
            <td class="p-4 text-center text-black">20 hours of driving</td>
            <td class="p-4 text-center text-black">25 hours of driving</td>
            <td class="p-4 text-center text-black">30 hours of driving</td>
          </tr>
          <tr class="even:bg-black">
            <td class="p-4 text-lg text-black">Duration</td>
            <td class="p-4 text-center">Flexible</td>
            <td class="p-4 text-center">Flexible</td>
            <td class="p-4 text-center">Flexible</td>
            <td class="p-4 text-center">Flexible</td>
            <td class="p-4 text-center">Flexible</td>
            <td class="p-4 text-center">Flexible</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='flex justify-end pt-4'>
    <a 
    href to='https://docs.google.com/forms/d/e/1FAIpQLSeSmQ3c0Dx8OgIxvahK_uO4lWq3Ze9NaQN4Q2NZMOzojVqF-Q/viewform' 
    id='card-button' 
    class="inline-flex items-center py-2 text-sm font-bold text-center text-black focus:outline-none"
    target="_blank" 
    rel="noopener noreferrer">
            Book Now
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
    </a></div>
  </div>
</div>
  </div>
</section>
      </div>
      <Cta />
    </section>
    </>
  )
}

export default Beginner
