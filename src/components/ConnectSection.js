import React from "react";
import { Link } from "react-router-dom";

const ConnectSection = () => {
  return (
    <section className="bg-[#F9FAFB] dark:bg-[#0F0F0F] text-black dark:text-white px-6 sm:px-10 md:px-20 py-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Left Side */}
        <div className="col-span-1">
          <h2 className="text-3xl font-bold">Have a project in mind?</h2>
          <p className="text-gray-600 dark:text-gray-400 italic mt-2">
            Let’s Connect!
          </p>
          <div className="mt-6 flex flex-col space-y-4">
            <a
              href="mailto:hello@sim-bha.com"
              className="bg-black dark:bg-white text-white dark:text-black px-5 py-3 rounded-full font-medium hover:opacity-80 transition"
            >
              simbhaadagency.info@gmail.com
            </a>
            <a
              href="tel:+918790359681"
              className="bg-black dark:bg-white text-white dark:text-black px-5 py-3 rounded-full font-medium hover:opacity-80 transition"
            >
              +91 8790359681
            </a>
          </div>
        </div>

        {/* Brand Management */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Brand Management</h3>
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
          <h3 className="text-lg font-semibold mb-4">Creative Production</h3>
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
          <h3 className="text-lg font-semibold mb-4">Digital Marketing</h3>
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

      {/* Bottom Section */}
      <div className="mt-16 border-t border-gray-300 dark:border-gray-700 pt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm text-gray-700 dark:text-gray-400">
        {/* Connect Info */}
        <div>
          <h4 className="text-black dark:text-white font-semibold mb-3">
            Connect
          </h4>
          <ul className="space-y-1">
            <li>General Enquiry: AE (+971 4 2730100) | IN (+91 97784 01018)</li>
            <li>Sales Enquiry: AE (+971 54582 1134) | IN (+91 97784 01018)</li>
            <li>Email: hello@sim-bha.com</li>
            <li>HR Enquiry: hr@sim-bha.com</li>
            <li>WhatsApp: +91 97784 01018</li>
          </ul>
        </div>

        {/* Company Info */}
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
