import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaTwitter,
  FaPhoneAlt,
  FaLightbulb,
  FaBullhorn,
  FaProjectDiagram,
} from "react-icons/fa";

const ConnectSection = () => {
  return (
    <section className="border border-gray-200 dark:border-gray-800 bg-[#F9FAFB] dark:bg-[#0F0F0F] text-black dark:text-white px-6 sm:px-12 lg:px-20 py-14 transition-colors duration-500 font-inter">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-300 dark:border-gray-700 pb-6 mb-12 gap-6 sm:gap-0">
        <h1 className="text-3xl font-bold">Simbha.</h1>
        <div className="flex gap-3 text-lg">
          <a
            href="https://www.facebook.com/Simbhaadagency"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/simbhaadagency"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/simbha-ad-agency"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com/@Simbha-ads"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://twitter.com/simbhaadagency"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Main Cards Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16">
        {/* Card 1: Have a project in mind? */}
        <div className="p-2 lg:max-w-sm w-full transition">
          <div className="flex items-center gap-3 mb-4">
            <FaProjectDiagram className="text-indigo-500 text-xl" />
            <h2 className="text-xl font-semibold">Have a project in mind?</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 italic mb-4">
            Let’s Connect!
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:simbhaadagency.info@gmail.com"
              title="simbhaadagency.info@gmail.com"
              className="flex items-center gap-2 bg-gray-100 dark:bg-white text-black px-4 py-2 rounded-full font-medium shadow-sm hover:opacity-80 truncate"
            >
              <FaEnvelope className="text-sm" />
              simbhaadagency.info@gmail.com
            </a>
            <a
              href="tel:+918790359681"
              className="flex items-center gap-2 bg-gray-100 dark:bg-white text-black px-4 py-2 rounded-full font-medium shadow-sm hover:opacity-80"
            >
              <FaPhoneAlt className="text-sm" />
              +91 8790359681
            </a>
          </div>
        </div>

        {/* Card 2: Brand Management */}
        <div className="p-2 lg:max-w-sm w-full transition">
          <div className="flex items-center gap-3 mb-4">
            <FaLightbulb className="text-yellow-500 text-xl" />
            <h2 className="text-xl font-semibold">Brand Management</h2>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            <li>• Brand identity</li>
            <li>• Brand strategy</li>
            <li>• Rebranding</li>
            <li>• Packaging design</li>
            <li>• Creative design</li>
            <li>• Marketing collaterals</li>
          </ul>
        </div>

        {/* Card 3: Digital Marketing */}
        <div className="p-2 lg:max-w-sm w-full transition">
          <div className="flex items-center gap-3 mb-4">
            <FaBullhorn className="text-red-500 text-xl" />
            <h2 className="text-xl font-semibold">Digital Marketing</h2>
          </div>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            <li>• Social media management</li>
            <li>• Search engine optimization</li>
            <li>• Email marketing</li>
            <li>• Influencer marketing</li>
            <li>• Performance marketing</li>
            <li>• Press release</li>
          </ul>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-sm text-gray-700 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 pt-10">
        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
            Connect
          </h4>
          <ul className="space-y-1">
            <li>Email: simbhaadagency.info@gmail.com</li>
            <li>WhatsApp: +91 87903 59681</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold text-black dark:text-white mb-2">
            Company
          </h4>
          <ul className="space-y-1">
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
