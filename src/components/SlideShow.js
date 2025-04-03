import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://eu.site.pro/v4.2/data/s/i/simbhaadagency.com/gallery/Website.jpg?1743668379816",
  "https://eu.site.pro/v4.2/data/s/i/simbhaadagency.com/gallery/Free%20AD%20Mockup%20PSD%20Template%20-%20Mockup%20Den.jpg",
  "https://eu.site.pro/v4.2/data/s/i/simbhaadagency.com/gallery/Food%20Menu.jpg?1743674611907&quot",
  "https://eu.site.pro/v4.2/data/s/i/simbhaadagency.com/gallery/sdawd.jpg?1743674761240&quot",
  "https://eu.site.pro/v4.2/data/s/i/simbhaadagency.com/gallery/digital%20m.jpg?1743674884923&quot"
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    if (progress >= 100) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setProgress(0);
    }

    return () => clearInterval(interval);
  }, [progress]);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setProgress(0);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setProgress(0);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-900 rounded-lg shadow-lg">
      {/* Image Container */}
      <div className="absolute inset-0 flex justify-center items-center transition-opacity duration-1000 ease-in-out">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition"
        onClick={goToPrevSlide}
      >
        <FaChevronLeft size={24} />
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition"
        onClick={goToNextSlide}
      >
        <FaChevronRight size={24} />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-4 left-0 w-full h-1 bg-gray-700">
        <div
          className="h-full bg-yellow-500 transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Slideshow;
