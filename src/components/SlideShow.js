import React, { useEffect, useState, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import led from "../images/SlideShow/led.png";
import tea from "../images/SlideShow/tea.png";
import digital from "../images/SlideShow/digital.png";
import web from "../images/SlideShow/web.png";
import ad from "../images/SlideShow/AdFilm.jpg";
import wheels from "../images/SlideShow/wheels.jpg";

const images = [
  { url: led, caption: "LED Display Ads" },
  { url: tea, caption: "Tea Cup Printing Ads" },
  { url: digital, caption: "Digital Marketing" },
  { url: web, caption: "Website Building" },
  { url: wheels, caption: "Ads On Wheels" },
  { url: ad, caption: "Making Ad Films" },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [direction, setDirection] = useState(1);

  // Responsive slide count
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 640 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slide navigation
  const goToNextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + slidesToShow) % images.length);
  }, [slidesToShow]);

  const goToPrevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - slidesToShow + images.length) % images.length
    );
  };

  const getVisibleImages = () =>
    Array.from({ length: slidesToShow }, (_, i) => images[(currentIndex + i) % images.length]);

  // Auto-sliding
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-xl shadow-xl overflow-hidden p-4 bg-gray-100 dark:bg-gray-900">
      {/* Navigation Buttons */}
      <button
        onClick={goToPrevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={goToNextSlide}
        aria-label="Next Slide"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Slides */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex gap-4 justify-center items-center"
        >
          {getVisibleImages().map((img, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 aspect-video bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden relative transition-transform transform hover:scale-105"
            >
              <img
                src={img.url}
                alt={img.caption}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-sm sm:text-base p-2 text-center font-medium">
                {img.caption}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slideshow;
