import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MonitorSmartphone,
  Coffee,
  TrendingUp,
  Globe,
  Truck,
  ExternalLink,
} from "lucide-react";

const services = [
  {
    title: "LED Display Ads",
    description:
      "Engage audiences with high-visibility LED display advertisements in public spaces.",
    icon: MonitorSmartphone,
    pagePath: "/services/led",
  },
  {
    title: "Tea Cup Printing Ads",
    description:
      "Innovative advertising on tea cups for maximum brand exposure in cafes and offices.",
    icon: Coffee,
    pagePath: "/services/tea_cup",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your brand’s online presence with our expert digital marketing strategies.",
    icon: TrendingUp,
    pagePath: "/services/digital_marketing",
  },
  {
    title: "Website Building",
    description:
      "Get a professionally designed website tailored to your business needs.",
    icon: Globe,
    pagePath: "/services/website_building",
  },
  {
    title: "Ads on Wheels",
    description:
      "Mobile advertising through digital screens mounted on vehicles for dynamic and high-reach promotion.",
    icon: Truck,
    pagePath: "/services/ad_on_wheels",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.9,
      ease: [0.2, 0.8, 0.2, 1],
    },
  }),
};

const headingVariants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0 0 0)",
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <div className="relative mt-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen px-4 sm:px-6 lg:px-10 py-10 overflow-hidden">
      {/* Background animation blobs */}
      <motion.div
        className="absolute w-64 h-64 bg-yellow-300 opacity-20 rounded-full top-10 -left-20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-purple-400 opacity-10 rounded-full bottom-10 -right-20 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Section title */}
      <motion.h1
        className="text-center text-3xl sm:text-4xl font-extrabold text-yellow-500 dark:text-yellow-400 mb-10 sm:mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headingVariants}
      >
        Our Services
      </motion.h1>

      {/* Services grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Link key={index} to={service.pagePath}>
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-yellow-400/40 transition-all duration-300 text-center cursor-pointer group relative overflow-hidden"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotateZ: 1 }}
              >
                {/* Gradient Circular Icon with Animation */}
                <motion.div
                  className="mb-5 flex justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg ring-2 ring-yellow-100 dark:ring-yellow-900 transition-all duration-300"
                    whileHover={{ scale: 1.15, rotate: 2 }}
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0], rotate: [0, 2, -2, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                      <IconComponent className="text-white w-7 h-7 sm:w-9 sm:h-9" />
                    </motion.div>
                  </motion.div>
                </motion.div>

                <h2 className="text-xl sm:text-2xl font-semibold text-yellow-600 dark:text-yellow-400 z-10 relative flex items-center justify-center gap-2">
                  {service.title}
                  <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                </h2>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-2 sm:mt-3 z-10 relative">
                  {service.description}
                </p>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* CTA button */}
      <Link to="/services/contact">
        <motion.div
          className="mt-14 sm:mt-16 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base"
          >
            Contact Us Today 🚀
          </motion.button>
        </motion.div>
      </Link>
    </div>
  );
};

export default Services;
