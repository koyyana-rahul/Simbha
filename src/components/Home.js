import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaEye,
  FaCheck,
  FaEnvelope,
  FaClipboardCheck,
  FaTv,
} from "react-icons/fa";
import Slideshow from "./SlideShow";
import bgvd from "../images/bgVideo.mp4";
import ConnectSection from "./ConnectSection";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const flipCard = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: (i = 1) => ({
    rotateY: 0,
    opacity: 1,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Home = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen overflow-x-hidden font-sans transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
        <div className="absolute w-full h-full z-0">
          <video
            className="w-full h-full object-cover"
            src={bgvd}
            autoPlay
            muted
            loop
          />
          <div className="absolute inset-0 bg-white/30 dark:bg-black/40 backdrop-blur-[6px]" />
        </div>

        <motion.div
          className="relative z-20 max-w-3xl px-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-black dark:to-white animate-gradient-x"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Welcome to Simbha
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-800 dark:text-gray-300"
            variants={fadeUp}
            custom={2}
          >
            Next-gen advertising via high-visibility digital screens.
          </motion.p>
        </motion.div>
      </section>

      {/* Slideshow Section */}
      <div className="py-12 px-6 bg-gradient-to-b from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black">
        <Slideshow />
      </div>

      {/* Why Simbha Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-[#fffbe6] via-[#fef9e7] to-[#fff1c1] dark:from-gray-900 dark:via-black dark:to-gray-900">
        <motion.h2
          className="text-4xl font-bold mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Why Simbha?
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              icon: <FaEye />,
              title: "High Visibility",
              desc: "Screens in key public locations.",
            },
            {
              icon: <FaRocket />,
              title: "Instant Impact",
              desc: "Engage your audience in seconds.",
            },
            {
              icon: <FaCheck />,
              title: "Easy Updates",
              desc: "Manage your campaigns anytime.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-white/10 text-left hover:shadow-yellow-300 transition-all cursor-pointer"
              variants={flipCard}
              custom={index}
              whileHover={{ scale: 1.08 }}
            >
              <motion.div
                className="text-yellow-500 text-3xl mb-4"
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-100 via-white to-yellow-50 dark:from-black dark:via-gray-900 dark:to-gray-800">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-yellow-200"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          How It Works
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              icon: <FaEnvelope />,
              title: "1. Connect with Admin",
              desc: "Email or call us to begin.",
            },
            {
              icon: <FaClipboardCheck />,
              title: "2. Share Your Content",
              desc: "Send video or image ads.",
            },
            {
              icon: <FaTv />,
              title: "3. Go Live on Screens",
              desc: "Your ad is up and running!",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/80 dark:bg-white/5 border border-yellow-400/20 rounded-xl p-6 backdrop-blur-md hover:scale-105 hover:shadow-2xl transition-transform"
              variants={fadeUp}
              custom={i}
            >
              <motion.div
                className="text-yellow-500 text-3xl mb-4"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {item.icon}
              </motion.div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                {item.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-white to-gray-100 dark:from-[#0f172a] dark:to-[#020617]">
        <motion.h2
          className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-yellow-300"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          What Clients Say
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              quote:
                "Our reach skyrocketed in weeks! Simbha is a game-changer.",
              name: "Arjun Patel",
            },
            {
              quote: "Digital screens gave us the visibility we needed. 10/10!",
              name: "Priya Singh",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-white/10 rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-md hover:shadow-yellow-300/20 transition-shadow backdrop-blur-xl"
              variants={fadeUp}
              custom={index}
            >
              <p className="text-gray-800 dark:text-gray-300 italic text-lg">
                "{item.quote}"
              </p>
              <p className="text-yellow-500 mt-4 font-bold">- {item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Google Map Section */}
      {/* Map Section */}
      <section className="py-20 bg-white dark:bg-black px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-yellow-300">
            Visit Us at Gajuwaka
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            We’re located in Gajuwaka, Visakhapatnam — swing by or drop us a
            message!
          </p>
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg border-2 border-yellow-300 dark:border-yellow-500">
            <iframe
              title="Simbha Location - Gajuwaka"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.305649346151!2d83.17925677513608!3d17.68267329589947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395c289e4c6195%3A0x400d9977ddbe27bd!2sGajuwaka%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530026!5e0!3m2!1sen!2sin!4v1712300000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <div>
        <ConnectSection />
      </div>
    </div>
  );
};

export default Home;
