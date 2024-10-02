import React from "react";
import { Link } from "react-router-dom";
// let headerPic = require("../../assets/Features/Webinar1-ezgif.com-optimize.gif");

function Cta() {
  return (
    <section className="flex flex-col items-center justify-center container rounded-lg relative mx-auto mt-32 bg-red-600 p-32">
    <div className="md:w-3/4 flex flex-col items-center ">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
      What are you waiting for book now .
      </h2>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSmQ3c0Dx8OgIxvahK_uO4lWq3Ze9NaQN4Q2NZMOzojVqF-Q/viewform" target="_blank" 
  rel="noopener noreferrer" class="mt-8 text-black bg-white hover:bg-black border hover:border-white hover:text-white focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2  focus:outline-none ">Contact Us</a>
      </div>
    </section>
  );
}

export default Cta;
