import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaRocket,
  FaEye,
  FaEnvelope,
  FaClipboardCheck,
  FaTv
} from "react-icons/fa";
import Slideshow from "./SlideShow";
import bgvd from "../images/bgVideo.mp4";

// Animation Variants
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

const slideLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const rotateIn = {
  hidden: { rotate: -90, opacity: 0 },
  visible: (i = 1) => ({
    rotate: 0,
    opacity: 1,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
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
      
      {/* Hero */}
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
        <div className="absolute w-full h-full z-0">
          <video className="w-full h-full object-cover" src={bgvd} autoPlay muted loop />
          <div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-[6px]" />
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
            className="mt-4 text-lg text-gray-700 dark:text-gray-300"
            variants={fadeUp}
            custom={2}
          >
            Next-gen advertising via high-visibility digital screens.
          </motion.p>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-yellow-500/50 transition-all"
            >
              Explore Services <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Slideshow */}
      <motion.div
        className="py-12 px-6 bg-gradient-to-b from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black"
        initial="hidden"
        whileInView="visible"
        variants={rotateIn}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Slideshow />
        </motion.div>
      </motion.div>

      {/* Features */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black">
        <motion.h2
          className="text-4xl font-bold mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Why Simbha?
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: <FaEye />, title: "High Visibility", desc: "Screens in key public locations." },
            { icon: <FaRocket />, title: "Instant Impact", desc: "Engage your audience in seconds." },
            { icon: <FaCheck />, title: "Easy Updates", desc: "Manage your campaigns anytime." },
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
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-black text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>

        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: <FaEnvelope />, title: "1. Connect with Admin", desc: "Email or call us to begin." },
            { icon: <FaClipboardCheck />, title: "2. Share Your Content", desc: "Send video or image ads." },
            { icon: <FaTv />, title: "3. Go Live on Screens", desc: "Your ad is up and running!" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 dark:bg-white/5 border border-yellow-400/20 rounded-xl p-6 backdrop-blur-md text-left hover:scale-105 transition-transform"
              variants={slideLeft}
              custom={i}
            >
              <motion.div
                className="text-yellow-400 text-3xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                {item.icon}
              </motion.div>
              <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
              <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          What Clients Say
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              quote: "Our reach skyrocketed in weeks! Simbha is a game-changer.",
              name: "Arjun Patel",
            },
            {
              quote: "Digital screens gave us the visibility we needed. 10/10!",
              name: "Priya Singh",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-white/10 rounded-xl p-6 backdrop-blur-md border border-gray-200 dark:border-white/10 text-left hover:shadow-xl transition-shadow"
              variants={rotateIn}
              custom={index}
            >
              <p className="text-gray-700 dark:text-gray-300 italic">"{item.quote}"</p>
              <p className="text-yellow-500 mt-4 font-bold">- {item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
