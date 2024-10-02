import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

function Topbar() {
  return (
    <div className='bg-red-500'>
    <div className='max-w-screen-xl p-6 hidden md:flex items-center space-x-12 h-16 justify-end container w-full mx-auto'>
    <div className="flex items-center space-x-2 text-sm">
    <span className={`flex items-center font-semibold text-white`}>
      <CiClock2 className='text-4xl pr-2 text-white font-bold' /> Opening Hour
      <br/>
      9:00 A.M. - 8:00 P.M. Mon - Sat
    </span>
  </div>

  <div className="flex items-center space-x-4 text-sm font-semibold text-white">
    <a href="tel:03333222233" className='flex items-center'>
      <CiPhone className='text-4xl pr-3 font-semibold text-blue-700' /> 033 33 22 22 33
    </a>
  </div>

  <div className="flex items-center space-x-2 text-white">
    <a href="https://wa.me/+254705350548" target="_blank" rel="noopener noreferrer" className='flex items-center'>
   <FaWhatsapp className='text-3xl pr-3 font-semibold text-green-600' /> WhatsApp
    </a>
  </div>
  </div></div>)
}

export default Topbar