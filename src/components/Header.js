import { useState } from "react";
import { Link } from "react-router-dom";
import simbhaImage from "../images/simbha_Logo.jpg";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            className="w-12 h-12 rounded-full shadow-lg"
            alt="logo"
            src={simbhaImage}
          />
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            Simbha Ads
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-5">
          <NavLink to="/" label="Home" />
          <NavLink to="/services" label="Services" />
          <NavLink to="/about" label="About Us" />
          <NavLink to="/contact" label="Contact Us" />
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition duration-300"
          >
            {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
          </button>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md">
          <ul className="flex flex-col space-y-3 px-6 py-3">
            <NavLink to="/" label="Home" onClick={() => setIsOpen(false)} />
            <NavLink to="/services" label="Services" onClick={() => setIsOpen(false)} />
            <NavLink to="/about" label="About Us" onClick={() => setIsOpen(false)} />
            <NavLink to="/contact" label="Contact Us" onClick={() => setIsOpen(false)} />
          </ul>
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink Component
const NavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-gray-700 dark:text-white hover:text-blue-500 dark:hover:text-yellow-400 transition duration-300 text-base font-medium"
  >
    {label}
  </Link>
);

export default Header;
