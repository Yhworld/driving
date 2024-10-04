import React from "react";
import { Link } from "react-router-dom";

function Cta() {
  return (
    <section className="flex flex-col items-center justify-center container rounded-lg relative mx-auto mt-16 md:mt-32 bg-red-600 p-8 md:p-16 lg:p-32">
      <div className="w-full md:w-3/4 flex flex-col items-center text-center">
        <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-white">
          What are you waiting for? Book now.
        </h2>
        <Link
          to="/booking"
          className="mt-4 md:mt-8 text-black bg-white hover:bg-black border hover:border-white hover:text-white focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm md:text-base lg:text-lg px-6 md:px-8 py-2.5 focus:outline-none"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default Cta;
