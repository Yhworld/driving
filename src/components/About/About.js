import React from "react";
// import aboutimg from "../../assets/images/aboutimg.jpg";
const whyImg= require('../../assets/images/aboutimg/whyus.webp')
const driver = require('../../assets/images/aboutimg/experience_2303952.webp')
const automatic = require('../../assets/images/aboutimg/automatic-icon.webp')
const manual = require('../../assets/images/aboutimg/gears (2).png')
const modernCar =require('../../assets/images/aboutimg/sport-car.webp')
const pass = require('../../assets/images/aboutimg/checklist.webp')
const flexible = require('../../assets/images/aboutimg/work-schedule.webp')

function About() {
  return (
    <section class=" overflow-hidden p-4 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <div class="max-w-screen-xl container relative mx-auto">
        <div class="flex flex-wrap items-center justify-between -mx-4">
          <div class="w-full px-4 lg:w-6/12">
            <div class="flex items-center -mx-3 sm:-mx-4">
              <div class="w-full px-3 sm:px-4">
                <div class="py-3 sm:py-4">
                  <img
                    src={whyImg}
                    alt=""
                    class="w-full rounded-2xl"
                  />
                </div>
              </div>
         
            </div>
          </div>
          <div class="px-4 pl-8 lg:w-1/2 xl:w-5/12">
            <div class="mt-10 lg:mt-0">
              <span class="block mb-4 text-lg font-semibold text-primary">
                Why Choose Us
              </span>
              <h2 class="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
                Transforming Satisfaction into Smiles
              </h2>
              {/* <p class="mb-5 text-base text-body-color dark:text-dark-6">
                "We specialize in audio, video and networking consultation and
                installation. Focused on tech and creativity, we tailor
                solutions for a seamless, high-quality experience, turning your
                ideas into reality." We have one goal in mind, the user
                satisfaction.
              </p> */}
              <div class="mb-8 mt-8 flex justify-between text-base text-body-color dark:text-dark-6">
                <div className="space-y-6">
                  <div id="points" className="flex items-center space-x-4">
                    <img className="w-12" src={driver} alt="driver"></img>
                    <p>Experienced instructors</p>
                    </div>
                    <div className="flex items-center space-x-4">
                    <img className="w-12" src={pass} alt="driver"></img>
                    <p>High Pass rates</p>
                    </div>
                    <div className="flex items-center space-x-4">
                    <img className="w-12" src={flexible} alt="driver"></img>
                    <p>Flexible Scheduling</p>
                    </div>
                </div>
                <div className="space-y-6">
                <div className="flex items-center space-x-4">
                    <img className="w-12" src={manual} alt="driver"></img>
                    <p>Manual & Automatic</p>
                    </div>
                    <div className="flex items-center space-x-4">
                    <img className="w-12" src={modernCar} alt="driver"></img>
                    <p>Modern Cars</p>
                    </div>
                </div>
              </div>
              <div className="mt-16">
              <a
                href="#w"
                class="px-4 py-2 text-base font-medium text-center text-white bg-slate-900 border border-transparent rounded-md hover:bg-opacity-90"
              >
                Book Now
             
              </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
