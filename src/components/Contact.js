import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen p-6">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-500 dark:text-yellow-400 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Get in touch with us for inquiries, collaborations, or support. We're here to help!
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <Mail className="text-yellow-600 dark:text-yellow-400 w-12 h-12 mx-auto" />
          <h2 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mt-4">Email</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">Simbhaadagency.info@gmail.com</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <Phone className="text-yellow-600 dark:text-yellow-400 w-12 h-12 mx-auto" />
          <h2 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mt-4">Phone</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">+91 8790359681</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <MapPin className="text-yellow-600 dark:text-yellow-400 w-12 h-12 mx-auto" />
          <h2 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mt-4">Location</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">123 Main Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
