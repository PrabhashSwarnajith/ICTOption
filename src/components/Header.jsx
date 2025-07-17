import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    {
      name: 'Mobile App Development',
      path: '/services/mobile-app-development',
    },
    { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
    { name: 'AI & Machine Learning', path: '/services/ai-machine-learning' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'IT Consulting', path: '/services/it-consulting' },
    { name: 'Cybersecurity', path: '/services/cybersecurity' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src={logo}
            alt="ICT Option Web Logo"
            className="h-10 w-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
          />
          <div className="text-2xl font-bold text-white font-heading hidden sm:block group-hover:text-purple-300 transition-colors duration-300">
            ICT Option Web
          </div>
          <div className="text-lg font-bold text-white font-heading sm:hidden group-hover:text-purple-300 transition-colors duration-300">
            ICT
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-white font-medium font-body">
          <Link
            to="/"
            className="relative py-2 hover:text-purple-300 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="relative py-2 hover:text-purple-300 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link
              to="/services"
              className="relative py-2 hover:text-purple-300 transition-colors duration-300 flex items-center space-x-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 hover:after:w-full after:transition-all after:duration-300"
            >
              <span>Services</span>
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
              className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 transition-all duration-300 ${
                isServicesOpen
                  ? 'opacity-100 translate-y-0 visible'
                  : 'opacity-0 translate-y-2 invisible'
              }`}
            >
              <div className="px-6 py-3 text-sm font-semibold text-primary border-b border-gray-100 bg-gradient-to-r from-purple-50 to-pink-50">
                Our Services
              </div>
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="block px-6 py-4 text-sm text-neutral-dark hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-primary transition-all duration-300 border-b border-gray-50 last:border-b-0 group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">
                      ▶
                    </span>
                    <span className="font-medium">{service.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/products"
            className="relative py-2 hover:text-purple-300 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Products
          </Link>
          <Link
            to="/blog"
            className="relative py-2 hover:text-purple-300 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-400 after:to-pink-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="ml-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-6 py-6 space-y-4 bg-white border-t border-gray-100">
          <Link
            to="/"
            className="block py-3 px-4 text-neutral-dark hover:text-primary hover:bg-purple-50 rounded-lg transition-all duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-3 px-4 text-neutral-dark hover:text-primary hover:bg-purple-50 rounded-lg transition-all duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          {/* Mobile Services Section */}
          <div className="py-2">
            <div className="px-4 py-2 text-sm font-semibold text-primary bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg mb-2">
              Services
            </div>
            <div className="pl-4 space-y-2">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="block py-2 px-4 text-sm text-neutral-dark hover:text-primary hover:bg-purple-50 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/products"
            className="block py-3 px-4 text-neutral-dark hover:text-primary hover:bg-purple-50 rounded-lg transition-all duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/blog"
            className="block py-3 px-4 text-neutral-dark hover:text-primary hover:bg-purple-50 rounded-lg transition-all duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 px-6 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
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
