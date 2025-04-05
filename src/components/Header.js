import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import simbhaImage from "../images/simbha_Logo.jpg";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef();

  // Close menu on window resize (desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <style>{animations(theme)}</style>
      <nav
        className={`fixed w-full top-0 z-50 backdrop-blur-md border-b shadow-lg ${
          theme === "light"
            ? "bg-white/70 border-gray-200"
            : "bg-gray-900/80 border-gray-800"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="logo-container">
              <img className="logo-img" alt="logo" src={simbhaImage} />
            </div>
            <span className="animated-brand">Simbha Ads</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" label="Home" />
            <NavLink to="/services" label="Services" />
            <NavLink to="/about" label="About Us" />
            <NavLink to="/contact" label="Contact Us" />
          </div>

          {/* Theme Toggle & Hamburger */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white hover:scale-105 transition"
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

        {/* Mobile Nav */}
        <div
          ref={mobileMenuRef}
          className={`mobile-menu ${isOpen ? "open" : "closed"}`}
        >
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
    border: 3px solid ${theme === "light" ? "#f59e0b" : "#facc15"};
    background: ${theme === "light" ? "#ffffff" : "#1f2937"};
    display: flex;
    align-items: center;
    justify-content: center;
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
    background: linear-gradient(90deg, #f59e0b, #fbbf24, #facc15);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    color: transparent;
    animation: gradient-flow 5s infinite linear;
    transition: transform 0.3s ease;
  }

  @media (max-width: 480px) {
    .animated-brand {
      font-size: 1.2rem;
    }
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
    transition: transform 0.3s ease-in-out;
    z-index: 40;
  }

  .mobile-menu.closed { transform: translateX(100%); }
  .mobile-menu.open { transform: translateX(0); }

  .menu-list {
    width: 100%;
    padding: 1rem;
    background: ${theme === "light" ? "#ffffffcc" : "#1f2937cc"};
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .nav-link {
    font-size: 1rem;
    font-weight: 500;
    padding: 12px 18px;
    border-radius: 10px;
    color: ${theme === "light" ? "#111827" : "#E5E7EB"};
    transition: all 0.3s ease-in-out;
  }

  .nav-link:hover {
    color: ${theme === "light" ? "#f59e0b" : "#facc15"};
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
