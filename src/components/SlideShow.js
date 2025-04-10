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
  { url: led, caption: "Led Display Ads" },
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

  // Adjust number of slides based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      setSlidesToShow(window.innerWidth < 640 ? 1 : 2);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  // goToNextSlide wrapped with useCallback
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

  const getVisibleImages = () => {
    return Array.from({ length: slidesToShow }, (_, i) => {
      return images[(currentIndex + i) % images.length];
    });
  };

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000);
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  return (
    <div className="relative w-full max-w-6xl mx-auto h-auto bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-4 overflow-hidden">
      {/* Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 z-10"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 z-10"
      >
        <FaChevronRight />
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
          transition={{ duration: 0.5 }}
          className="flex gap-4 justify-center items-center"
        >
          {getVisibleImages().map((img, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 aspect-video bg-white dark:bg-gray-900 overflow-hidden rounded-lg shadow-md relative"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-sm p-2 text-center">
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
