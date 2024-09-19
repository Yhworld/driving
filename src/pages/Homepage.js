import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Testimonial from '../components/Testimonial/Testimonial'
import Maps from '../components/maps/Maps'
import Contact from '../components/Contact/Contact'

function Homepage() {
  return (
    <>
    <Hero />
    <About />
    <Services />
    <Testimonial />
    <Maps />
    <Contact />
    </>
  )
}

export default Homepage