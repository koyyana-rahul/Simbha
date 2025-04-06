import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const ConnectSection = () => {
  return (
    <section className="border border-gray-300 dark:border-gray-700 bg-[#F9FAFB] dark:bg-[#0F0F0F] text-black dark:text-white px-4 sm:px-8 md:px-16 lg:px-20 py-10 transition-colors duration-500">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-300 dark:border-gray-700 pb-6 mb-10 gap-6 sm:gap-0">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Simbha.
        </h1>
        <div className="flex flex-wrap gap-3 text-lg">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-full text-black dark:text-white hover:bg-[#1877F2] hover:text-white transition duration-300"
          >
            <FaFacebookF />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full transition duration-300"
          >
            <div className="p-2 rounded-full text-black dark:text-white group-hover:bg-gradient-to-tr group-hover:from-pink-500 group-hover:to-yellow-500 group-hover:text-white transition duration-300">
              <FaInstagram />
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-full text-black dark:text-white hover:bg-[#0077B5] hover:text-white transition duration-300"
          >
            <FaLinkedinIn />
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-full text-black dark:text-white hover:bg-[#FF0000] hover:text-white transition duration-300"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-300 dark:border-gray-700 pb-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Have a project in mind?</h2>
          <p className="italic text-gray-600 dark:text-gray-400">
            Let’s Connect!
          </p>
          <a
            href="mailto:simbhaadagency.info@gmail.com"
            className="block bg-black dark:bg-white text-white dark:text-black px-5 py-3 rounded-full font-medium w-max hover:opacity-80 transition"
          >
            simbhaadagency.info@gmail.com
          </a>
          <a
            href="tel:+918790359681"
            className="block bg-black dark:bg-white text-white dark:text-black px-5 py-3 rounded-full font-medium w-max hover:opacity-80 transition"
          >
            +91 8790359681
          </a>
        </div>

        {/* Brand Management */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Brand Management</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <li>Brand identity</li>
            <li>Brand strategy</li>
            <li>Rebranding</li>
            <li>Packaging design</li>
            <li>Creative design</li>
            <li>Marketing collaterals</li>
          </ul>
        </div>

        {/* Creative Production */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Creative Production</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <li>3D Animation</li>
            <li>Visual effects</li>
            <li>Film Editing</li>
            <li>TVC</li>
            <li>UGC Video</li>
            <li>Digital ad films</li>
          </ul>
        </div>

        {/* Digital Marketing */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Digital Marketing</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <li>Social media management</li>
            <li>Search engine optimization</li>
            <li>Email marketing</li>
            <li>Influencer marketing</li>
            <li>Performance marketing</li>
            <li>Press release</li>
          </ul>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="pt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-sm text-gray-700 dark:text-gray-400">
        {/* Connect */}
        <div>
          <h4 className="text-black dark:text-white font-semibold mb-3">
            Connect
          </h4>
          <ul className="space-y-1">
            <li>General Enquiry: AE (+971 4 2730100) | IN (+91 97784 01018)</li>
            <li>Sales Enquiry: AE (+971 54582 1134) | IN (+91 97784 01018)</li>
            <li>Email: simbhaadagency.info@gmail.com</li>
            <li>WhatsApp: +91 87903 59681</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-black dark:text-white font-semibold mb-3">
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
