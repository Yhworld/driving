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
            to="/contact"
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
              The Refresher Course is designed for drivers who already have their license but may need extra confidence or practice behind the wheel. Whether you’ve taken a break from driving, are unfamiliar with Manchester’s busy roads, or want to update your driving skills, this course helps you regain your confidence and ensures you're driving safely.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                We offer flexible lesson times and expert instructors to make your learning process enjoyable and successful. Let's help you get on the road to your driving goals!
              </p>
            </div>
          </div>
          <section class="bg-white mt-24">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our Pricing</h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
      <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8">
              <h3 class="mb-4 text-2xl font-semibold"> Refresher Course</h3>
              {/* <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended.</p> */}
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">£140</span>
                  <span class="text-gray-500 dark:text-gray-400">/per 3 lesson</span>
              </div>
              
              <ul class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>3 one-hour driving lessons to focus on more comprehensive skill improvement. </span>
                  </li>
                  <li class="flex items-center space-x-3">
                      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>ideal for drivers who have a license but need to rebuild confidence or refresh skills.
</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Focus on improving driving techniques, updating knowledge of road rules, and practicing maneuvers..</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Perfect for those returning to driving after a break or moving to the UK and needing to familiarize themselves with local driving regulations.</span>
                  </li>
              </ul>
              <a href="g" class="text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">Get started</a>
          </div>
         
          {/* <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-300 shadow dark:bg-gray-800 dark:text-white ">
              <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for total beginner .</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">£150</span>
                  <span class="text-gray-500 dark:text-gray-400">/5 lessons</span>
              </div>
              
              <ul class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>5 one-hour driving lessons.</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Introduction to vehicle controls</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Focus on fundamental driving skills</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Basic maneuvers </span>
                  </li>
                  <li class="flex items-center space-x-3">
                      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Personalized progress tracking</span>
                  </li>
              </ul>
              <a href="g" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">Book Now</a>
          </div> */}
         
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-black dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Extended Refresher Course:</h3>
              {/* <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for intermediate drivers.</p> */}
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">£270</span>
                  <span class="text-gray-500 dark:text-gray-400">/ per 10 lessons</span>
              </div>
              
              <ul class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>5 one-hour driving lessons to focus on more comprehensive skill improvement.</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Assistance with motorway driving, roundabouts, or navigating complex city roads in Manchester.</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>A personalized driving plan to target and strengthen weak areas.</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Feedback after each session to help you steadily regain full confidence behind the wheel.</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Mock driving test to assess your progress</span>
                  </li>
              </ul>
              <a href="g" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>
      </div>
  </div>
</section>
          {/* <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="">
                <PiArrowBendLeftDownBold size={200} />
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
                  <img
                    src="https://images.pexels.com/photos/6487966/pexels-photo-6487966.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Driving School Vehicle"
                    loading='lazy'
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>

      </div>
      <Cta />
    </section>
    </>
  )
}

export default Refresher
