import React from "react";
import { Link } from "react-router-dom";

const ConnectSection = () => {
  return (
    <section className="bg-[#F9FAFB] dark:bg-[#0F0F0F] text-black dark:text-white px-6 md:px-20 py-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Left Side */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold">Have a project in mind?</h2>
          <p className="text-gray-600 dark:text-gray-400 italic mt-2">Let’s Connect!</p>
          <div className="mt-6 flex flex-col space-y-4">
            <a
              href="mailto:hello@sim-bha.com"
              className="bg-black dark:bg-white text-white dark:text-black px-5 py-3 rounded-full font-medium hover:opacity-80 transition"
            >
              hello@sim-bha.com
            </a>
            <a
              href="tel:+919778401018"
              className="bg-black dark:bg-white text-white dark:text-black px-5 py-3 rounded-full font-medium hover:opacity-80 transition"
            >
              +91 977 84 01 018
            </a>
          </div>
        </div>

        {/* Brand Management */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Brand Management</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <li><a href="#">Brand identity</a></li>
            <li><a href="#">Brand strategy</a></li>
            <li><a href="#">Rebranding</a></li>
            <li><a href="#">Packaging design</a></li>
            <li><a href="#">Creative design</a></li>
            <li><a href="#">Marketing collaterals</a></li>
          </ul>
        </div>

        {/* Creative Production */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Creative Production</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <li><a href="#">3D Animation</a></li>
            <li><a href="#">Visual effects</a></li>
            <li><a href="#">Film Editing</a></li>
            <li><a href="#">TVC</a></li>
            <li><a href="#">UGC Video</a></li>
            <li><a href="#">Digital ad films</a></li>
          </ul>
        </div>

        {/* Digital Marketing */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Digital Marketing</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <li><a href="#">Social media management</a></li>
            <li><a href="#">Search engine optimization</a></li>
            <li><a href="#">Email marketing</a></li>
            <li><a href="#">Influencer marketing</a></li>
            <li><a href="#">Performance marketing</a></li>
            <li><a href="#">Press release</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 border-t border-gray-300 dark:border-gray-700 pt-10 grid md:grid-cols-3 gap-10 text-sm text-gray-700 dark:text-gray-400">
        <div>
          <h4 className="text-black dark:text-white font-semibold mb-3">Connect</h4>
          <ul className="space-y-1">
            <li>General Enquiry: AE (+971 4 2730100) | IN (+91 97784 01018)</li>
            <li>Sales Enquiry: AE (+971 54582 1134) | IN (+91 97784 01018)</li>
            <li>Email: hello@sim-bha.com</li>
            <li>HR Enquiry: hr@sim-bha.com</li>
            <li>WhatsApp: +91 97784 01018</li>
          </ul>
        </div>

        <div>
          <h4 className="text-black dark:text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-1">
            <Link to="/about"><li>About</li></Link>
            <Link to="/services"><li>Services</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
           
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
