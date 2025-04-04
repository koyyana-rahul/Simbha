import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    url: "https://eu.site.pro/v4.2/data/s/i/simbhaadagency.com/gallery/Website.jpg",
    caption: "Website Design",
  },
  {
    url: "https://eu.site.pro/v4.2/data/s/i/simbhaadagency.com/gallery/Free%20AD%20Mockup%20PSD%20Template%20-%20Mockup%20Den.jpg",
    caption: "Ad Mockup",
  },
  {
    url: "https://eu.site.pro/v4.2/data/s/i/simbhaadagency.com/gallery/Food%20Menu.jpg",
    caption: "Digital Food Menu",
  },
  {
    url: "https://eu.site.pro/v4.2/data/s/i/simbhaadagency.com/gallery/sdawd.jpg",
    caption: "Interactive Display",
  },
  {
    url: "https://eu.site.pro/v4.2/data/s/i/simbhaadagency.com/gallery/digital%20m.jpg",
    caption: "Digital Marketing",
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);

  // Handle responsiveness
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, slidesToShow]);

  const goToNextSlide = () => {
    setCurrentIndex((prev) => (prev + slidesToShow) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prev) =>
      (prev - slidesToShow + images.length) % images.length
    );
  };

  const getVisibleImages = () => {
    return Array.from({ length: slidesToShow }, (_, i) => {
      return images[(currentIndex + i) % images.length];
    });
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[260px] sm:h-[300px] md:h-[350px] bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-4">
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

      {/* Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex gap-4 justify-center items-center"
        >
          {getVisibleImages().map((img, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden rounded-lg shadow-md relative"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm p-2 text-center">
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
