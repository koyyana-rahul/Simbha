import React from "react";
import { motion } from "framer-motion";
import mallsImage from "../images/LedImages/malls.jpg";
import goldImage from "../images/LedImages/gold.jpeg";
import publicPlaces from "../images/LedImages/publicPlace.jpg";
import shops from "../images/LedImages/shops.jpg";
import hospital from "../images/LedImages/Hospital.jpeg";
import CategoriesContainer from "./CategoriesContainer";

const data = [
  {
    img: publicPlaces,
    desc: "We enhance navigation and communication systems in public places like railway stations and airports.",
  },
  {
    img: goldImage,
    desc: "Our solutions for gold and jewelry shops ensure safety, inventory tracking, and a luxury user experience.",
  },
  {
    img: mallsImage,
    desc: "We offer interactive services in shopping malls that improve engagement, store location, and promote offers.",
  },
  {
    img: shops,
    desc: "We help local shops with QR-enabled solutions for item discovery, broadcasting, and customer support.",
  },
  {
    img: hospital,
    desc: "Our systems streamline patient direction, appointment scheduling, and real-time updates in hospitals.",
  },
];

const DigitalMarketing = () => {
  return (
    <div className="relative z-0 dark:bg-gray-900 bg-white text-gray-900 dark:text-white pt-4 overflow-x-hidden">
      {/* Background Blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-yellow-300 opacity-20 rounded-full top-0 -left-28 blur-3xl z-0"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-purple-400 opacity-10 rounded-full bottom-0 -right-28 blur-3xl z-0"
        animate={{ x: [0, -30, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Page Wrapper */}
      <div className="relative z-10 pt-24 pb-10 px-4 sm:px-6 flex flex-col items-center">
        {/* Heading Section */}
        <motion.div
          className="max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-yellow-500 dark:text-yellow-400">
            Our LED Display Solutions
          </motion.h1>

          <motion.p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Explore how we bring digital displays to various industries,
            making information more accessible and interactive.
          </motion.p>
        </motion.div>

        {/* Categories Section */}
        <div className="w-full mt-12">
          <CategoriesContainer data={data} />
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
