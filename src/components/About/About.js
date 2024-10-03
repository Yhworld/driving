import React from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaRegAddressCard } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { TbManualGearbox } from "react-icons/tb";
import { IoCarSportOutline } from "react-icons/io5";
// import aboutimg from "../../assets/images/aboutimg.jpg";
const whyImg= require('../../assets/images/aboutimg/about11_batcheditor_fotor (3).webp')

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
              <span class="block mb-4 text-lg text-red-600 font-semibold text-primary">
                Why Choose Us
              </span>
              <h2 class="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
                Transforming Satisfaction into Smiles
              </h2>
              <div class="mb-8 mt-8 flex flex-col md:flex-row md:justify-between text-base text-body-color dark:text-dark-6">
                <div className="space-y-6">
                  <div id="points" className="flex items-center space-x-4">
                    <LiaCertificateSolid className="text-4xl" />
                    <p>Experienced instructors</p>
                    </div>
                    <div className="flex items-center space-x-4">
                    <FaRegAddressCard className="text-4xl" />
                    <p>High Pass rates</p>
                    </div>
                    <div className="flex items-center space-x-4">
                    <IoCalendarOutline className="text-4xl" />
                    <p>Flexible Scheduling</p>
                    </div>
                </div>
                <div className="space-y-6 mt-6 md:mt-0">
                <div className="flex items-center space-x-4">
                    <TbManualGearbox className="text-4xl" />
                    <p>Manual & Automatic</p>
                    </div>
                    <div className="flex items-center space-x-4">
                    <IoCarSportOutline className="text-4xl" />
                    <p>Modern Cars</p>
                    </div>
                </div>
              </div>
              <div className="mt-16">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeSmQ3c0Dx8OgIxvahK_uO4lWq3Ze9NaQN4Q2NZMOzojVqF-Q/viewform"
                target="_blank" 
  rel="noopener noreferrer"
                class="px-4 py-2 text-base font-medium text-center text-white bg-red-600 border border-transparent rounded-md hover:bg-opacity-90"
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
