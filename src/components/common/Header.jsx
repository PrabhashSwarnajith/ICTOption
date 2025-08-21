import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Consolidated navigation data
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },

    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Web Development', path: '/services/web-development' },
        {
          name: 'Mobile App Development',
          path: '/services/mobile-app-development',
        },
        {
          name: 'AI & Machine Learning',
          path: '/services/ai-machine-learning',
        },
        { name: 'Digital Marketing', path: '/services/digital-marketing' },
        { name: 'IT Consulting', path: '/services/it-consulting' },
        { name: 'Cybersecurity', path: '/services/cybersecurity' },
      ],
    },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-primary/50 backdrop-blur-xl shadow-xl transition-all duration-300 font-body">
      {' '}
      {/* Added font-body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {' '}
        {/* Standardized padding */}
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src={logo}
            alt="ICT Option Logo"
            className="h-20 w-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
          />
          {/* <div className="text-2xl font-bold text-accent font-heading hidden sm:block group-hover:text-secondary transition-colors duration-300">
            ICT Option
          </div> */}
          {/* <div className="text-lg font-bold text-accent font-heading sm:hidden group-hover:text-secondary transition-colors duration-300">
            ICT
          </div> */}
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-accent font-medium items-center">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              // Services Dropdown
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`relative py-2 flex items-center space-x-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 ${location.pathname.startsWith('/services') ? 'text-secondary after:w-full' : 'hover:text-secondary hover:after:w-full transition-colors duration-300'}`}
                >
                  <span>{link.name}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-2 w-80 bg-primary/80 backdrop-blur-xl rounded-2xl shadow-2xl py-4 transition-all duration-300 ${
                    isServicesOpen
                      ? 'opacity-100 translate-y-0 visible'
                      : 'opacity-0 translate-y-2 invisible'
                  }`}
                >
                  <div className="px-6 py-3 text-sm font-semibold text-secondary border-b border-neutral-700 bg-neutral-900 rounded-t-2xl">
                    Our Services
                  </div>
                  {link.dropdown.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
                      to={dropdownItem.path}
                      className={`block px-6 py-4 text-sm border-b border-neutral-700 last:border-b-0 group transition-all duration-300 ${location.pathname === dropdownItem.path ? 'text-secondary bg-secondary/10' : 'text-accent hover:bg-secondary/10 hover:text-secondary'}`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-secondary transition-transform duration-300 group-hover:translate-x-1">
                          ▶
                        </span>
                        <span className="font-medium">{dropdownItem.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              // Regular Navigation Link
              <Link
                key={index}
                to={link.path}
                className={`relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 ${location.pathname === link.path ? 'text-secondary after:w-full' : 'hover:text-secondary hover:after:w-full transition-colors duration-300'}`}
              >
                {link.name}
              </Link>
            )
          )}
          {/* Contact Button for Desktop */}
          <Link
            to="/contact"
            className={`ml-4 bg-secondary text-primary px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-secondary-light ${location.pathname === '/contact' ? 'ring-2 ring-secondary' : ''}`}
          >
            Contact Us
          </Link>
        </nav>
        {/* Mobile menu button */}
        <button
          className="lg:hidden text-accent p-2 rounded-lg hover:bg-secondary/10 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100 py-4'
            : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2 bg-primary border-t border-neutral-700 rounded-b-lg shadow-inner">
          {' '}
          {/* Standardized padding */}
          {navLinks.map((link, index) =>
            link.dropdown ? (
              // Mobile Services Section
              <div key={index} className="py-2">
                <div
                  className="flex justify-between items-center px-4 py-2 text-base font-semibold text-secondary bg-neutral-800 rounded-lg cursor-pointer" // Changed bg-neutral-dark to bg-neutral-800
                  onClick={() => setIsServicesOpen(!isServicesOpen)} // Toggle mobile services dropdown
                >
                  <span>{link.name}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isServicesOpen
                      ? 'max-h-screen opacity-100 mt-2'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 space-y-2">
                    {link.dropdown.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        to={dropdownItem.path}
                        className="block py-2 px-4 text-sm text-accent hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all duration-300"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsServicesOpen(false); // Close services dropdown too
                        }}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Regular Mobile Navigation Link
              <Link
                key={index}
                to={link.path}
                className="block py-3 px-4 text-accent hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}
          {/* Contact Button for Mobile */}
          <Link
            to="/contact"
            className="block mt-4 bg-secondary text-primary text-center py-3 px-6 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-secondary-light" // Added hover:bg-secondary-light
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
