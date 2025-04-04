import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardAnimation = {
  hidden: { opacity: 0, scale: 0.9, rotate: -2, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const CategoriesContainer = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen pt-4 pb-10 px-4 sm:px-6 flex flex-col items-center overflow-hidden">
      <motion.div
        className="mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl w-full z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md transition-all duration-300 flex flex-col items-center transform-gpu
              hover:shadow-yellow-300/40 hover:-translate-y-1 hover:rotate-[1deg] hover:scale-[1.03] w-full"
            variants={cardAnimation}
          >
            {/* Image */}
            <motion.div
              className="w-full h-48 sm:h-56 md:h-60 overflow-hidden rounded-xl relative"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 180 }}
            >
              <motion.img
                src={service.img}
                alt={`Service ${idx + 1}`}
                className="w-full h-full object-cover rounded-xl transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40 rounded-xl" />
            </motion.div>

            {/* Description */}
            <div className="text-center w-full px-2 sm:px-4 mt-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed break-words w-full">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CategoriesContainer;
