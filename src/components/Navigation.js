import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const isActive = (path) => {
    if (path === '/home' && location.pathname === '/') return true;
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomeActive = isActive('/home') || location.pathname === '/';

  return (
    <div className="relative z-[1000]">
      <header
        role="banner"
        className="bg-transparent h-[120px] relative"
      >
        <div className="text-white flex justify-between lg:justify-start items-center w-[92%] max-w-[92%] h-full mx-auto">
          <Link
            to="/home"
            className="block w-[200px] max-w-[80%] h-10 my-auto bg-no-repeat bg-contain transition-all"
            style={{
              backgroundImage: isHomeActive
                ? 'url(/assets/main-logo.png)'
                : darkMode
                  ? 'url(/assets/logo_white.png)'
                  : 'url(/assets/logo_black.png)',
              backgroundPosition: isHomeActive ? 'left' : 'center'
            }}
          >
          </Link>
          <nav
            role="navigation"
            className={`${isMenuOpen
                ? 'flex flex-col items-center justify-center absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg py-5 px-5 z-50 animate-slideDown'
                : 'hidden lg:flex text-right flex-1 items-center justify-end'
              }`}
          >
            <Link
              to="/portfolio"
              className={`text-black dark:text-white font-poppins text-md font-light no-underline py-2.5 inline-block transition-colors hover:text-primary dark:hover:text-primary ${isActive('/portfolio') ? 'text-primary dark:text-primary' : ''
                } lg:ml-5 lg:my-0 my-2.5 py-3.5 lg:py-2.5 block lg:inline-block border-b lg:border-b-0 border-gray-200 dark:border-gray-700 ${isMenuOpen ? 'mx-auto text-center' : 'ml-5'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              PROJECTS
            </Link>
            <Link
              to="/contact"
              className={`text-black dark:text-white font-poppins text-md font-light no-underline py-2.5 inline-block transition-colors hover:text-primary dark:hover:text-primary ${isActive('/contact') ? 'text-primary dark:text-primary' : ''
                } lg:ml-5 lg:my-0 my-2.5 py-3.5 lg:py-2.5 block lg:inline-block border-b lg:border-b-0 border-gray-200 dark:border-gray-700 ${isMenuOpen ? 'mx-auto text-center' : 'ml-5'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
            {/* Dark Mode Toggle */}
            <label className={`switch ${isMenuOpen ? 'mx-auto mt-2' : 'ml-4'}`} aria-label="Toggle dark mode">
              <input
                checked={!darkMode}
                id="checkbox"
                type="checkbox"
                onChange={toggleDarkMode}
              />
              <span className="slider">
                <div className="star star_1"></div>
                <div className="star star_2"></div>
                <div className="star star_3"></div>
                <svg viewBox="0 0 16 16" className="cloud_1 cloud">
                  <path
                    transform="matrix(.77976 0 0 .78395-299.99-418.63)"
                    fill="#fff"
                    d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
                  ></path>
                </svg>
              </span>
            </label>
          </nav>

          <button
            type="button"
            className="lg:hidden bg-transparent border-none cursor-pointer p-[18px] text-2xl transition-transform duration-300 hover:scale-110 active:scale-95"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <div className="w-6 h-6 block relative">
              <svg
                className={`w-6 h-6 text-black dark:text-white absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`w-6 h-6 text-black dark:text-white absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navigation;

