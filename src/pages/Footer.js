import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../assets/images/logo/logo2.svg';

function Footer() {
  return (
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-black">
  <div class="mx-auto max-w-screen-xl text-center">
    <div className='flex justify-center'>
    <Link
    to="/"
    className=''
    >
        <img className='w-36' src={logo2} alt="logo" />
    </Link></div>
      <p class="my-6 text-gray-500 dark:text-gray-400">Unlocking your driving potential</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
              <a href="#r" class="mr-4 hover:underline md:mr-6 ">Home</a>
          </li>
          <li>
              <a href="#r" class="mr-4 hover:underline md:mr-6">About</a>
          </li>
          <li>
              <a href="#r" class="mr-4 hover:underline md:mr-6 ">Services</a>
          </li>
          <li>
              <a href="#r" class="mr-4 hover:underline md:mr-6">Areas Covered</a>
          </li>
          <li>
              <a href="#r" class="mr-4 hover:underline md:mr-6">Book Now</a>
          </li>
          <li>
              <a href="#r" class="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#r" class="hover:underline">Makeit™</a>. All Rights Reserved.</span>
  </div>
</footer>
  )
}

export default Footer