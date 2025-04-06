import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingIcon = () => {
  return (
    <a
      href="https://wa.me/918790359681?text=Hi%20Simbha%20Team%2C%20I'm%20interested%20in%20your%20advertising%20services!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-800 text-white text-xs sm:text-sm px-3 py-1 rounded shadow-md dark:bg-white dark:text-black whitespace-nowrap">
        Chat with us 
      </div>

      {/* WhatsApp Icon Button */}
      <div className="p-3 sm:p-4 rounded-full shadow-xl bg-green-500 hover:bg-green-600 text-white dark:bg-green-600 dark:hover:bg-green-700 transition-transform hover:scale-105 duration-300">
        <FaWhatsapp className="text-2xl sm:text-3xl" />
      </div>
    </a>
  );
};

export default WhatsAppFloatingIcon;
