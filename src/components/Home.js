import React from "react";
import { FaArrowRight, FaCheckCircle, FaUsers, FaBullhorn, FaEnvelope, FaClipboardList, FaBroadcastTower } from "react-icons/fa";
import Slideshow from "./SlideShow";
import { Link } from "react-router-dom";
import bgvd from "../images/bgVideo.mp4";

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      
      {/* Hero Section with Background Video */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4">
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

        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

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

      {/* Why Choose Us Section */}
      <section className="py-16 text-center bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-900 dark:text-white">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Prime Locations", desc: "Strategically placed TV screens ensure maximum exposure.", icon: <FaCheckCircle className="text-yellow-500 text-4xl mb-4" /> },
            { title: "High Engagement", desc: "Digital displays attract attention, making your brand stand out.", icon: <FaBullhorn className="text-yellow-500 text-4xl mb-4" /> },
            { title: "Real-Time Updates", desc: "Easily update and manage your ads for maximum efficiency.", icon: <FaUsers className="text-yellow-500 text-4xl mb-4" /> },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-700 shadow-xl rounded-lg transform hover:scale-105 transition duration-300 text-center">
              {item.icon}
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white dark:bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-500 dark:text-yellow-400 mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            <strong>We Are Innovators, Visionaries, Game-Changers.</strong>
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Simbha Ad Agency is a fresh force in the advertising world, redefining how brands connect with their audience. 
            With bold thinking and cutting-edge ideas, we break conventional boundaries to craft campaigns that leave a lasting impact. 
            Driven by creativity and innovation, we don’t just follow trends—we create them.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 text-center bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-900 dark:text-white">
          How It Works
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { step: "Step 1", title: "Contact the Admin", desc: "Reach out to us via phone, email, or our website.", icon: <FaEnvelope className="text-yellow-500 text-4xl mb-4" /> },
            { step: "Step 2", title: "Discuss Package & Provide Content", desc: "Choose an advertising package and send us your content.", icon: <FaClipboardList className="text-yellow-500 text-4xl mb-4" /> },
            { step: "Step 3", title: "Go Live!", desc: "Your ad goes live on high-visibility TV screens!", icon: <FaBroadcastTower className="text-yellow-500 text-4xl mb-4" /> },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
              {item.icon}
              <h3 className="text-yellow-500 text-lg font-semibold">{item.step}</h3>
              <h4 className="text-xl font-bold mt-2 text-gray-900 dark:text-white">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-900 dark:text-white">
          What Our Clients Say
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { name: "Rahul Sharma", feedback: "Our brand reached a whole new audience thanks to Simbha Ad Agency's digital screens!" },
            { name: "Anjali Verma", feedback: "Seamless experience and great customer service. Highly recommend!" },
          ].map((client, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-700 shadow-xl rounded-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300">"{client.feedback}"</p>
              <h4 className="mt-4 text-yellow-500 font-semibold">{client.name}</h4>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
