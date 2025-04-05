import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, Users2 } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconAnimation = {
  animate: {
    y: [0, -5, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const About = () => {
  return (
    <div className="relative dark:bg-gray-900 bg-white text-gray-900 dark:text-white min-h-screen pt-20 pb-10 px-4 sm:px-6 flex flex-col items-center overflow-hidden">
      {/* Background blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-yellow-300 opacity-20 rounded-full top-10 -left-28 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-purple-400 opacity-10 rounded-full bottom-10 -right-28 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.div
        className="max-w-4xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <motion.h1
          className="text-4xl font-extrabold mb-6 text-yellow-500 dark:text-yellow-400"
          variants={fadeUp}
        >
          About Us
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          variants={fadeUp}
        >
          Welcome to our platform! We are committed to delivering high-quality
          services that enhance user experience. Our goal is to create
          innovative and efficient solutions tailored to meet diverse needs.
        </motion.p>
      </motion.div>

      {/* Vision & Mission */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4 sm:px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Vision */}
        <motion.div
          className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-yellow-300/30 transition-all duration-300 hover:scale-105"
          variants={fadeUp}
        >
          <div className="mb-5 flex justify-center">
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg ring-2 ring-yellow-100 dark:ring-yellow-900"
              {...iconAnimation}
            >
              <Eye className="text-white w-7 h-7" />
            </motion.div>
          </div>
          <h2 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 text-center">
            Our Vision
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4 text-center">
            To be a pioneer in cutting-edge solutions, ensuring seamless user
            experiences with a blend of innovation, efficiency, and user-centric
            design.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-yellow-300/30 transition-all duration-300 hover:scale-105"
          variants={fadeUp}
        >
          <div className="mb-5 flex justify-center">
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg ring-2 ring-yellow-100 dark:ring-yellow-900"
              {...iconAnimation}
            >
              <Target className="text-white w-7 h-7" />
            </motion.div>
          </div>
          <h2 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 text-center">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4 text-center">
            To develop top-tier products that redefine user interaction,
            prioritizing reliability, adaptability, and outstanding performance.
          </p>
        </motion.div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        className="mt-20 text-center max-w-4xl px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <motion.div className="mb-5 flex justify-center" variants={fadeUp}>
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg ring-2 ring-yellow-100 dark:ring-yellow-900"
            {...iconAnimation}
          >
            <Users2 className="text-white w-7 h-7" />
          </motion.div>
        </motion.div>
        <motion.h2
          className="text-3xl font-semibold text-yellow-600 dark:text-yellow-400"
          variants={fadeUp}
        >
          Our Team
        </motion.h2>
        <motion.p
          className="text-gray-700 dark:text-gray-300 mt-4"
          variants={fadeUp}
        >
          Our team comprises skilled professionals dedicated to innovation and
          excellence, consistently striving to create outstanding digital
          experiences.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
