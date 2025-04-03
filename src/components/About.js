import React from "react";

const About = () => {
  return (
    <div className="dark:bg-gray-900 bg-white text-gray-900 dark:text-white min-h-screen p-6 flex flex-col items-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-yellow-500 dark:text-yellow-400">About Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Welcome to our platform! We are committed to delivering high-quality services that enhance user experience. Our goal is to create innovative and efficient solutions tailored to meet diverse needs.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl px-6 md:px-0">
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400">Our Vision</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            To be a pioneer in cutting-edge solutions, ensuring seamless user experiences with a blend of innovation, efficiency, and user-centric design.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            To develop top-tier products that redefine user interaction, prioritizing reliability, adaptability, and outstanding performance.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center max-w-4xl px-6 md:px-0">
        <h2 className="text-3xl font-semibold text-yellow-600 dark:text-yellow-400">Meet Our Team</h2>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Our team comprises skilled professionals dedicated to innovation and excellence, consistently striving to create outstanding digital experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
