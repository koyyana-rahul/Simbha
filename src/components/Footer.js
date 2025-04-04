import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const handleEmailClick = () => {
    window.open("mailto:Simbhaadagency.info@gmail.com", "_self");
  };

  return (
    <motion.footer
      className="bg-gray-900 text-white py-6 text-center text-sm dark:bg-black dark:text-gray-300"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto flex flex-col items-center px-4">
        {/* Icons */}
        <motion.div
          className="flex space-x-6 mb-2 justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/+918790359681"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: "#25D366" }}
            className="flex items-center space-x-2 transition-colors duration-300"
          >
            <FaWhatsapp className="text-lg" />
            <span>WhatsApp</span>
          </motion.a>

          {/* Email */}
          <motion.button
            onClick={handleEmailClick}
            whileHover={{ scale: 1.1, color: "#60A5FA" }}
            className="flex items-center space-x-2 transition-colors duration-300 focus:outline-none"
          >
            <FaEnvelope className="text-lg" />
            <span>Email</span>
          </motion.button>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="mt-2 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()} <span className="text-yellow-400">SimbhaAdAgency</span>. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
