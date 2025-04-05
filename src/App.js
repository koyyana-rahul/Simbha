import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Serivces from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
import Led from "./components/Led";
import TeaCup from "./components/TeaCup";
import DigitalMarketing from "./components/DigitalMarketing";
import WebsiteBuilding from "./components/WebsiteBuilding";
import AdOnWheels from "./components/AdOnWheels";
import AdFilms from "./components/AdFilms";
import { FaWhatsapp } from "react-icons/fa"; // <-- Added

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Outlet />
        <Footer />

        {/* WhatsApp Sticky Icon */}
        <a
          href="https://wa.me/918790359681?text=Hi%20Simbha%20Team%2C%20I'm%20interested%20in%20your%20advertising%20services!"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Chat on WhatsApp"
        >
          <div className="absolute bottom-16 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded-md shadow-lg dark:bg-white dark:text-black">
            Chat with us
          </div>
          <div className="p-4 sm:p-3 rounded-full shadow-lg bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white dark:from-green-600 dark:to-green-700 backdrop-blur-md hover:scale-105 transition-transform">
            <FaWhatsapp className="text-2xl sm:text-lg" />
          </div>
        </a>
      </div>
    </ThemeProvider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "services", element: <Serivces /> },
      { path: "services/led", element: <Led /> },
      { path: "services/tea_cup", element: <TeaCup /> },
      { path: "services/digital_marketing", element: <DigitalMarketing /> },
      { path: "services/website_building", element: <WebsiteBuilding /> },
      { path: "services/ad_on_wheels", element: <AdOnWheels /> },
      { path: "services/ad_films", element: <AdFilms /> },
      { path: "services/contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default App;
