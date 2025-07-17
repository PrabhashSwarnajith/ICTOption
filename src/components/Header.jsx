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
    { name: 'AI & Machine Learning', path: '/services/ai-machine-learning' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'IT Consulting', path: '/services/it-consulting' },
    { name: 'Cybersecurity', path: '/services/cybersecurity' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-primary/90 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src={logo}
            alt="ICT Option Web Logo"
            className="h-10 w-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
          />
          <div className="text-2xl font-bold text-accent font-heading hidden sm:block group-hover:text-secondary transition-colors duration-300">
            ICT Option Web
          </div>
          <div className="text-lg font-bold text-accent font-heading sm:hidden group-hover:text-secondary transition-colors duration-300">
            ICT
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-accent font-medium font-body">
          <Link
            to="/"
            className="relative py-2 hover:text-secondary transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="relative py-2 hover:text-secondary transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
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
              className="relative py-2 hover:text-secondary transition-colors duration-300 flex items-center space-x-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
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
              className={`absolute top-full left-0 mt-2 w-80 bg-accent rounded-xl shadow-2xl border border-neutral-light py-3 transition-all duration-300 ${
                isServicesOpen
                  ? 'opacity-100 translate-y-0 visible'
                  : 'opacity-0 translate-y-2 invisible'
              }`}
            >
              <div className="px-6 py-3 text-sm font-semibold text-primary border-b border-neutral-light bg-neutral-light">
                Our Services
              </div>
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="block px-6 py-4 text-sm text-primary hover:bg-secondary/10 hover:text-secondary transition-all duration-300 border-b border-neutral-light last:border-b-0 group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-secondary transition-transform duration-300 group-hover:translate-x-1">
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
            className="relative py-2 hover:text-secondary transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            Products
          </Link>
          <Link
            to="/blog"
            className="relative py-2 hover:text-secondary transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="ml-4 bg-secondary text-accent px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-accent p-2 rounded-lg hover:bg-secondary/10 transition-colors duration-300"
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
        <nav className="container mx-auto px-6 py-6 space-y-4 bg-accent border-t border-neutral-light">
          <Link
            to="/"
            className="block py-3 px-4 text-primary hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-3 px-4 text-primary hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          {/* Mobile Services Section */}
          <div className="py-2">
            <div className="px-4 py-2 text-sm font-semibold text-primary bg-neutral-light rounded-lg mb-2">
              Services
            </div>
            <div className="pl-4 space-y-2">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="block py-2 px-4 text-sm text-primary hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/products"
            className="block py-3 px-4 text-primary hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/blog"
            className="block py-3 px-4 text-primary hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block mt-4 bg-secondary text-accent text-center py-3 px-6 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
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
