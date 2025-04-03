import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Slideshow from "./SlideShow";
import { Link } from "react-router-dom";
import bgvd from "../images/bgVideo.mp4";

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      
      {/* Hero Section with Background Video */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bgvd} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay with Blur Effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white animate-fadeIn leading-tight">
            Revolutionizing Digital Advertising
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            High-visibility TV screens in public places help brands reach their audience effectively.
          </p>
          <Link 
            to="/services" 
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105"
          >
            Learn More <FaArrowRight />
          </Link>
        </div>
      </header>

      {/* Slideshow Section */}
      <div className="py-10 px-4 md:px-16">
        <Slideshow />
      </div>

      {/* About Section */}
      <section className="py-16 text-center bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-900 dark:text-white">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Prime Locations", desc: "Strategically placed TV screens ensure maximum exposure." },
            { title: "High Engagement", desc: "Digital displays attract attention, making your brand stand out." },
            { title: "Real-Time Updates", desc: "Easily update and manage your ads for maximum efficiency." },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-700 shadow-xl rounded-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
