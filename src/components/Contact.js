import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Contact = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen pt-20 pb-10 px-4 sm:px-6 flex flex-col items-center overflow-hidden"
    >
      {/* Background Blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-yellow-300 opacity-20 rounded-full top-10 -left-28 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-purple-400 opacity-10 rounded-full bottom-10 -right-28 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.div className="max-w-4xl text-center" variants={fadeUp} custom={0}>
        <motion.h1
          className="text-3xl sm:text-4xl font-extrabold mb-6 text-yellow-500 dark:text-yellow-400"
          variants={fadeUp}
          custom={0}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          variants={fadeUp}
          custom={1}
        >
          Have questions, suggestions, or just want to say hello? We’re always here to help and connect.
        </motion.p>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4 sm:px-6"
        variants={fadeUp}
        custom={2}
      >
        {[
          {
            href: "mailto:Simbhaadagency.info@gmail.com",
            Icon: Mail,
            label: "Email",
            value: "simbhaadagency.info@gmail.com",
          },
          {
            href: "https://wa.me/918790359681",
            Icon: Phone,
            label: "WhatsApp",
            value: "+91 8790359681",
          },
          {
            href: "https://www.google.com/maps/place/Gajuwaka,+Visakhapatnam,+Andhra+Pradesh",
            Icon: MapPin,
            label: "Location",
            value: "Gajuwaka, Visakhapatnam, Andhra Pradesh",
          },
        ].map(({ href, Icon, label, value }, index) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 sm:p-8 rounded-xl shadow-md hover:shadow-yellow-300/30 transition-all duration-300 text-center cursor-pointer 
              backdrop-blur-md border border-gray-200 bg-white/50 dark:bg-gray-800 dark:border-gray-700"
            whileHover={{ scale: 1.05 }}
            variants={fadeUp}
            custom={index + 2}
          >
            <div className="mb-5 flex justify-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg ring-2 ring-yellow-100 dark:ring-yellow-900">
                <Icon className="text-white w-6 h-6 sm:w-7 sm:h-7" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-yellow-600 dark:text-yellow-400">
              {label}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mt-2 break-words">
              {value}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
