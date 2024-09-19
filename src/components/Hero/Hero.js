import React from 'react'
import './hero.css'
const heropic = require('../../assets/images/hero/hero.jpg')

function Hero() {
  return (
    <div
    id="home"
    className=" flex flex-col items-center justify-center px-6 mx-auto space-y-0 md:space-y-0"
    loading="lazy"
  >
    <div id="main-header" className="flex flex-col mb-32 space-y-12 md:w-1/2 mt-48">
      <h1 className="font-bold text-4xl text-white text-center md:text-6xl ">
      Driving Made Easy.
      </h1>
      <p className=" text-center text-slate-200">
      Proudly one of Manchester’s top driving schools, we offer expert lessons with a high pass rate. Our experienced instructors are here to help you master the road with confidence.
      </p>
      <div className="flex justify-center">
        <button
            to="services"
            spy={true}
            smooth={true}
            duration={500}
          class="flex items-center justify-center px-16 py-4 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>

    // <div id='hero-test' className='max-w-screen-xl container relative mx-auto'>
    //     <div className='flex justify-around items-center'>
    //     <div className='space-y-6  w-1/2'>
    //         <h1 className='text-5xl font-bold'>Driving made easy.</h1>
    //         <p className='w-3/4 text-gray-500 leading-6'>Proudly one of Manchester’s top driving schools, we offer expert lessons with a high pass rate. Our experienced instructors are here to help you master the road with confidence.</p>
    //         <button className='bg-black mt-36 text-white py-2 px-4'>Book now</button>
    //     </div>
    //     <div className='hero-img w-1/2'>
    //         <img src={heropic} alt="hero-pic" />
    //     </div></div>
    // </div>
  )
}

export default Hero