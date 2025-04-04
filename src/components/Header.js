import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import simbhaImage from "../images/simbha_Logo.jpg";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on switching to md+ screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>{animations(theme)}</style>

      <nav
        className={`fixed w-full top-0 z-50 shadow-lg border-b border-gray-200 dark:border-gray-800 ${
          theme === "light" ? "bg-white" : "bg-gray-900"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo & Name */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="logo-container">
              <img className="logo-img" alt="logo" src={simbhaImage} />
            </div>
            <span className="animated-brand animated-text">Simbha Ads</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" label="Home" />
            <NavLink to="/services" label="Services" />
            <NavLink to="/about" label="About Us" />
            <NavLink to="/contact" label="Contact Us" />
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-transform transform hover:scale-105"
            >
              {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-900 dark:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? "open" : "closed"}`}>
          <ul className="menu-list">
            <NavLink to="/" label="Home" onClick={() => setIsOpen(false)} />
            <NavLink
              to="/services"
              label="Services"
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              to="/about"
              label="About Us"
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              to="/contact"
              label="Contact Us"
              onClick={() => setIsOpen(false)}
            />
          </ul>
        </div>
      </nav>
    </>
  );
};

const NavLink = ({ to, label, onClick }) => (
  <Link to={to} onClick={onClick} className="nav-link">
    {label}
  </Link>
);

const animations = (theme) => `
  .logo-container {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    border: 3px solid ${theme === "light" ? "#FFD700" : "#FFA500"};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme === "light" ? "#FFF" : "#222"};
    animation: rotate-scale 3s infinite alternate ease-in-out;
  }

  @keyframes rotate-scale {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(10deg) scale(1.1); }
    100% { transform: rotate(-10deg) scale(1.1); }
  }

  .logo-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }

  .animated-brand {
    font-size: 1.6rem;
    font-weight: bold;
    background: linear-gradient(90deg, #FFD700, #FFA500, #FFC107, #FFD700);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    color: transparent;
    animation: gradient-flow 4s infinite linear;
    transition: transform 0.3s;
  }

  @keyframes gradient-flow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .mobile-menu {
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    max-width: 100%;
    transition: transform 0.3s ease-in-out;
    z-index: 40;
  }
  .mobile-menu.closed { transform: translateX(100%); }
  .mobile-menu.open { transform: translateX(0); }

  .menu-list {
    width: 100%;
    padding: 1rem;
    background: ${theme === "light" ? "#ffffff" : "#1f2937"};
    backdrop-filter: blur(6px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    box-sizing: border-box;
  }

  .menu-list li {
    width: 100%;
    max-width: 280px;
    padding: 12px;
    border-radius: 8px;
    text-align: center;
    transition: all 0.3s ease-in-out;
  }

  .menu-list li:hover {
    background: ${theme === "light" ? "#FFD700" : "#FFA500"};
    color: ${theme === "light" ? "#333" : "#FFF"};
    transform: scale(1.05);
    cursor: pointer;
  }

  .nav-link {
    font-size: 1rem;
    font-weight: 500;
    padding: 12px 18px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    color: ${theme === "light" ? "#333" : "#E5E7EB"};
    text-align: center;
    display: block;
  }

  .nav-link:hover {
    color: ${theme === "light" ? "#FFD700" : "#FFEB3B"};
    transform: scale(1.05);
  }

  @media (max-width: 360px) {
    .menu-list li,
    .nav-link {
      font-size: 0.95rem;
      padding: 10px;
    }
  }
`;

export default Header;
