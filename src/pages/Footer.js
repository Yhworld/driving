import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../assets/images/logo/logo.webp';
import { FaInstagram, FaTiktok } from 'react-icons/fa'; // Import Instagram and TikTok icons
import diaLogo from '../assets/images/footerimg/Dia (1).jpeg'; // Placeholder for DIA logo
import dsaLogo from '../assets/images/footerimg/dsa-logo1.jpg'; // Placeholder for DSA logo
import dvlaLogo from '../assets/images/footerimg/254422.svg'; // Placeholder for DVLA logo
import passPlusLogo from '../assets/images/footerimg/pass-plus1.jpg'; // Placeholder for Pass Plus logo

function Footer() {
  return (
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-black">
      <div class="mx-auto max-w-screen-xl text-center">
        <div className='flex justify-center'>
          <Link to="/" className=''>
            <img className='w-36' src={logo2} alt="logo" />
          </Link>
        </div>
        <p class="my-6 text-gray-500 dark:text-gray-400">Unlocking your driving potential</p>

        {/* Navigation Links */}
        <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li><Link to="/" class="mr-4 hover:underline md:mr-6 ">Home</Link></li>
          <li><Link to="/about" class="mr-4 hover:underline md:mr-6">About</Link></li>
          <li><Link to="/" class="mr-4 hover:underline md:mr-6 ">Services</Link></li>
          <li><Link to="/areas" class="mr-4 hover:underline md:mr-6">Areas Covered</Link></li>
          <li><Link to="/booking" class="mr-4 hover:underline md:mr-6">Book Now</Link></li>
          <li><Link to="/contact" class="mr-4 hover:underline md:mr-6">Contact</Link></li>
        </ul>

        {/* Social Media Links */}
        <div class="flex justify-center space-x-6 mb-6">
          <a href="https://www.instagram.com/makeitdrivingschool" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-gray-900 dark:text-white hover:text-red-600" />
          </a>
          <a href="https://www.tiktok.com/@makeitdriving" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-2xl text-gray-900 dark:text-white hover:text-red-600" />
          </a>
        </div>

        {/* Certification Icons */}
        <div class="flex justify-center space-x-8 mb-6">
          <img src={diaLogo} alt="DIA Certification" className="w-12 md:w-16 lg:w-20 h-auto" />
          <img src={dsaLogo} alt="DSA Certification" className="w-12 md:w-16 lg:w-20 h-auto" />
          <img src={dvlaLogo} alt="DVLA Certification" className="w-12 md:w-16 lg:w-20 h-auto" />
          <img src={passPlusLogo} alt="Pass Plus Certification" className="w-16 md:w-24 lg:w-28 h-auto" />
        </div>

        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" class="hover:underline">Makeit™</Link>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer;
