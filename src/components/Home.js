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
import TextPathAnimation from "./TextPathAnimation";

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
    <div className="font-sans bg-white text-black dark:bg-black dark:text-white min-h-screen overflow-x-hidden transition-colors duration-300">
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
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-black dark:to-white animate-gradient-x"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            WELCOME TO SIMBHA AD AGENCY
          </motion.h1>
          <motion.p
  className="mt-6 text-lg sm:text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed"
  variants={fadeUp}
  custom={2}
>
  <span className="block text-black dark:text-white font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight">
    We Don’t Just Show Ads.
  </span>
  <span className="block text-yellow-600 dark:text-yellow-400 font-bold text-xl sm:text-2xl mt-2">
    We Command Attention.
  </span>
  {/* <span className="block mt-4 italic text-base sm:text-lg text-orange-600 dark:text-orange-400 font-semibold">
    Bold, assertive, and perfect for a standout agency.
  </span> */}
</motion.p>

        </motion.div>
      </section>

      {/* Slideshow */}
      <div className="py-12 px-6 bg-gradient-to-b from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black">
        <Slideshow />
      </div>

      {/* Scrolling Animation Text */}
      <TextPathAnimation />

      {/* Why Simbha */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-[#fffbe6] via-[#fef9e7] to-[#fff1c1] dark:from-gray-900 dark:via-black dark:to-gray-900">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 tracking-tight"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Why Simbha?
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              icon: <FaEye />,
              title: "High Visibility",
              desc: "Our displays are strategically placed in high-traffic public areas.",
            },
            {
              icon: <FaRocket />,
              title: "Instant Impact",
              desc: "Deliver your message in seconds with powerful visuals.",
            },
            {
              icon: <FaCheck />,
              title: "Easy Updates",
              desc: "Modify your ad content anytime through our seamless dashboard.",
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
              <h3 className="text-lg sm:text-xl font-semibold tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-yellow-100 via-white to-yellow-50 dark:from-black dark:via-gray-900 dark:to-gray-800">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 tracking-tight text-gray-900 dark:text-yellow-200"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          How It Works
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              icon: <FaEnvelope />,
              title: "1. Connect with Admin",
              desc: "Start by contacting us via email or phone.",
            },
            {
              icon: <FaClipboardCheck />,
              title: "2. Share Your Content",
              desc: "Provide your ad creatives in image or video format.",
            },
            {
              icon: <FaTv />,
              title: "3. Go Live on Screens",
              desc: "Your campaign goes live across our digital network.",
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
              <h4 className="text-lg sm:text-xl font-semibold mb-1 tracking-wide">
                {item.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-r from-white to-gray-100 dark:from-[#0f172a] dark:to-[#020617]">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-14 tracking-tight text-gray-900 dark:text-yellow-300"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          What Clients Say
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 gap-10 max-w-5xl mx-auto px-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
              className="bg-white/80 dark:bg-white/10 rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-md hover:shadow-yellow-300/20 transition-shadow backdrop-blur-xl"
              variants={fadeUp}
              custom={index}
            >
              <p className="text-gray-800 dark:text-gray-300 italic text-lg leading-relaxed">
                "{item.quote}"
              </p>
              <p className="text-yellow-500 mt-4 font-bold tracking-wide">
                - {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white dark:bg-black px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-gray-800 dark:text-yellow-300">
            Visit Us at Gajuwaka
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            We’re located in Gajuwaka, Visakhapatnam — swing by or drop us a
            message!
          </p>
          <iframe
            title="Simbha Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.396038633682!2d83.18323381539377!3d17.722763398733194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39592f4eb36f5d%3A0x75e406d969166418!2sGajuwaka%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1681066121444!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl shadow-lg"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Connect Section */}
      <ConnectSection />
    </div>
  );
};

export default Home;
