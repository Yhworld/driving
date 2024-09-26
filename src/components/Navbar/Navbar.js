import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.svg'; // Adjust the path as necessary
import logo2 from '../../assets/images/logo/logo2.svg';

function Navbar() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomepage = location.pathname === '/'; // Check if it's the homepage

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`${
        isHomepage ? 'bg-transparent absolute' : 'bg-white relative'
      } w-full z-10 mt-6 mb-10 p-2`}
    >
      <div className="max-w-screen-xl container mx-auto px-4 py-4 flex justify-between items-center">
          <NavLink to="/" onClick={closeMenu}>
            <img alt='logo' 
            src={`${isHomepage ? logo2 : logo}`}
            className={`h-6 w-auto ${isHomepage ? 'text-white' : 'text-black'}`} />
          </NavLink>
          <div className="hidden md:flex space-x-8 ml-10">
            {/* Links */}
            <NavLink
              to="/"
              className={`nav-link ${isHomepage ? 'text-white' : 'text-black'}`}
              activeClassName="border-b-2 border-brown"
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={`nav-link ${isHomepage ? 'text-white' : 'text-black'}`}
              activeClassName="border-b-2 border-brown"
              onClick={closeMenu}
            >
              About
            </NavLink>
            <div className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <button className={`nav-link ${isHomepage ? 'text-white' : 'text-black'}`}>
                Services
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 w-48 pt-2 bg-white shadow-lg rounded-md">
                  <NavLink
                    to="/beginner"
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Beginner Course
                  </NavLink>
                  <NavLink
                    to="/refresher-course"
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Refresher Course
                  </NavLink>
                  <NavLink
                    to="/crash-course"
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Crash Course
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/areas"
              className={`nav-link ${isHomepage ? 'text-white' : 'text-black'}`}
              activeClassName="border-b-2 border-brown"
              onClick={closeMenu}
            >
              Areas Covered
            </NavLink>
            <NavLink
              to="/contact"
              className={`nav-link ${isHomepage ? 'text-white' : 'text-black'}`}
              activeClassName="border-b-2 border-brown"
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
          </div>
        <div className="hidden md:block">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSmQ3c0Dx8OgIxvahK_uO4lWq3Ze9NaQN4Q2NZMOzojVqF-Q/viewform"
        target="_blank" 
        rel="noopener noreferrer"
         className="hidden md:inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-full hover:bg-gray-500 focus:shadow-outline focus:outline-none"
        >
        Book Now
        </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg
              className={`w-8 h-8 ${isHomepage ? 'text-white' : 'text-black'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        </div>

      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6">
          <button
            className="self-end mb-4 text-black focus:outline-none"
            onClick={closeMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className='mt-24'>
          <NavLink
            to="/"
            className="block px-4 py-4 text-2xl text-black hover:bg-gray-100"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block px-4 py-4 text-2xl text-black hover:bg-gray-100"
            onClick={closeMenu}
          >
            About
          </NavLink>
          <div>
            <button className="block w-full text-2xl text-left px-4 py-4 text-black hover:bg-gray-100" onClick={toggleDropdown}>
              Services
            </button>
            {isDropdownOpen && (
              <div className="bg-white shadow-lg rounded-md">
                <NavLink
                  to="/beginner"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Beginner Course
                </NavLink>
                <NavLink
                  to="/refresher-course"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Refresher Course
                </NavLink>
                <NavLink
                  to="/crash-course"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Crash Course
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/areas"
            className="block px-4 py-4 text-2xl text-black hover:bg-gray-100"
            onClick={closeMenu}
          >
            Areas Covered
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-4 py-4 text-2xl text-black hover:bg-gray-100"
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeSmQ3c0Dx8OgIxvahK_uO4lWq3Ze9NaQN4Q2NZMOzojVqF-Q/viewform"
            target="_blank" 
  rel="noopener noreferrer"
            className="block text-2xl px-4 py-4 text-black"
            onClick={closeMenu}
          >
            Book Now
          </a>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
