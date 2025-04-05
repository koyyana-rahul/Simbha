import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MonitorSmartphone,
  Coffee,
  TrendingUp,
  Globe,
  Truck,
  Video,
  ExternalLink,
} from "lucide-react";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

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
  {
    title: "Making Ad Films",
    description:
      "Professional ad film production to tell your brand’s story with impact and creativity.",
    icon: Video,
    pagePath: "/services/ad_films",
  },
];

const Services = () => {
  return (
    <div className="relative mt-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen px-4 sm:px-6 lg:px-10 py-10 overflow-hidden">
      {/* Background animation blobs */}
      <motion.div
        className="absolute w-64 h-64 bg-yellow-200 dark:bg-yellow-300 opacity-20 rounded-full top-10 -left-20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-purple-300 dark:bg-purple-400 opacity-10 rounded-full bottom-10 -right-20 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Section heading */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <motion.h1
          className="text-4xl font-extrabold mb-6 text-yellow-500 dark:text-yellow-400"
          variants={fadeUp}
        >
          Our Services
        </motion.h1>
      </motion.div>

      {/* Services grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Link key={index} to={service.pagePath}>
              <motion.div
                className="p-6 sm:p-8 rounded-2xl shadow-xl transition-all duration-300 text-center cursor-pointer group relative overflow-hidden dark:bg-gray-800 bg-white/30 backdrop-blur-lg border border-white/40 hover:shadow-yellow-300/30 dark:hover:shadow-yellow-500/40"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotateZ: 1 }}
              >
                <motion.div className="mb-5 flex justify-center" whileHover={{ scale: 1.1 }}>
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 dark:from-yellow-400 dark:to-orange-500 flex items-center justify-center shadow-md ring-4 ring-yellow-100 dark:ring-yellow-900 transition-all duration-300"
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

                <h2 className="text-xl sm:text-2xl font-semibold text-yellow-500 dark:text-yellow-400 z-10 relative flex items-center justify-center gap-2">
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

      {/* CTA Button */}
      <Link to="/services/contact">
        <motion.div
          className="mt-14 sm:mt-16 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base"
          >
            Contact Us Today 🎬
          </motion.button>
        </motion.div>
      </Link>
    </div>
  );
};

export default Services;
