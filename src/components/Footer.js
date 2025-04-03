import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const handleEmailClick = () => {
    window.open("mailto:Simbhaadagency.info@gmail.com", "_self");
  };

  return (
    <footer className="bg-gray-900 text-white py-4 text-center text-sm dark:bg-black dark:text-gray-300">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="flex space-x-6 mb-2 md:mb-0 justify-center items-center">
          <a
            href="https://wa.me/8790359681"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-green-400 transition-colors"
          >
            <FaWhatsapp className="text-lg" />
            <span>WhatsApp</span>
          </a>
          <button
            onClick={handleEmailClick}
            className="flex items-center space-x-2 hover:text-blue-400 transition-colors focus:outline-none"
          >
            <FaEnvelope className="text-lg" />
            <span>Email</span>
          </button>
        </div>
        <p className="mt-2 text-gray-400">
          &copy; {new Date().getFullYear()} SimbhaAdAgency. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
