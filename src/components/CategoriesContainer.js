import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CategoriesContainer = ({ data }) => {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

  if (!data) {
    return (
      <div className="text-center py-10 text-red-500 font-medium font-sans">
        No data provided.
      </div>
    );
  }

  return (
    <div className="relative z-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen pt-4 overflow-x-hidden font-sans">
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

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-10 px-4 sm:px-6 flex flex-col items-center">
        {/* Heading */}
        <motion.div
          className="max-w-4xl text-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <motion.h1 className="text-3xl sm:text-5xl font-bold mb-6 text-yellow-500 dark:text-yellow-400 tracking-tight leading-tight font-sans">
            {data.heading}
          </motion.h1>

          <motion.p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mx-auto mb-8 font-light px-2 sm:px-0">
            {data.description}
          </motion.p>
        </motion.div>

        {/* Benefits */}
        {data.benefits && data.benefits.length > 0 && (
          <motion.div
            className="mt-6 w-full max-w-6xl px-2 sm:px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-500 dark:text-yellow-400 mb-6 text-center font-medium">
              Key Benefits
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.benefits.map((benefit, idx) => {
                const [title, detail] = benefit.split(/:(.+)/);
                return (
                  <motion.div
                    key={idx}
                    className="flex flex-col gap-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                    variants={fadeUp}
                  >
                    <span className="text-base sm:text-lg font-semibold text-gray-800 dark:text-yellow-300">
                      {title.trim()}
                    </span>
                    {detail && (
                      <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-snug font-light">
                        {detail.trim()}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Gallery Section */}
        <motion.div
          className="mt-20 w-full max-w-6xl grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-2 sm:px-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {data.categories.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              className="relative group overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(service.img)}
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={service.img}
                  alt={service.title || `Service ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {service.title && (
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium z-10">
                  {service.title}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {modalImg && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.img
                src={modalImg}
                alt="Preview"
                className="max-w-full max-h-full rounded-lg shadow-2xl border-4 border-white dark:border-yellow-300"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

CategoriesContainer.defaultProps = {
  data: {
    heading: "Our Gallery",
    description: "Discover our finest work and the services we proudly offer.",
    categories: [], // example: [{ img: "/images/web.jpg", title: "Web Design" }]
    benefits: [],
  },
};

export default CategoriesContainer;
