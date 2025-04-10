import { useRouteError } from "react-router-dom";
import { motion } from "framer-motion";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="relative dark:bg-gray-900 bg-white text-gray-900 dark:text-white min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      
      {/* Animated Background Blobs (From About Section) */}
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

      {/* Error Card */}
      <div className="relative z-10 max-w-lg w-full bg-white dark:bg-gray-800 border border-yellow-100 dark:border-yellow-900 shadow-xl rounded-3xl p-8 sm:p-10 text-center backdrop-blur-sm">
        <h1 className="text-5xl font-extrabold text-yellow-500 dark:text-yellow-400 mb-4">
          Oops!
        </h1>
        <h2 className="text-xl font-semibold mb-4">
          Something went wrong.
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We couldn’t process your request. But don’t worry, you can try again or go back to safety.
        </p>

        {/* Error Details */}
        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-100 dark:border-yellow-900 rounded-xl p-4 mb-6 text-sm text-gray-800 dark:text-gray-200 shadow-inner">
          <p><strong>Status:</strong> {err?.status || "Unknown"}</p>
          <p><strong>Message:</strong> {err?.statusText || "Unexpected Error"}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-br from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Reload Page
          </button>
          <a
            href="/"
            className="text-yellow-600 dark:text-yellow-400 hover:underline font-medium"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
