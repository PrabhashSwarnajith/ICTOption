import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.svg';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    <header className="fixed top-0 left-0 w-full z-50 px-2 py-2 bg-primary/50 backdrop-blur-xl shadow-lg transition-all duration-300 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src={logo}
            alt="ICT Option Logo"
            className="h-12 w-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
          />
          <span className="text-xl font-extrabold text-accent font-heading hidden sm:block group-hover:text-secondary transition-colors duration-300">
            ICT <span className="text-secondary">OPTION</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-accent font-medium items-center">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`relative py-2 flex items-center space-x-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 ${
                    location.pathname.startsWith('/services')
                      ? 'text-secondary after:w-full'
                      : 'hover:text-secondary hover:after:w-full'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                >
                  <span>{link.name}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
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

                {/* Dropdown */}
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-80 bg-primary/95 backdrop-blur-xl rounded-2xl shadow-2xl py-4 origin-top z-50"
                      role="menu"
                    >
                      <div className="px-6 py-3 text-sm font-semibold text-secondary border-b border-neutral-700 bg-neutral-900 rounded-t-2xl">
                        Our Services
                      </div>
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: { staggerChildren: 0.05 },
                          },
                        }}
                      >
                        {link.dropdown.map((dropdownItem, i) => (
                          <motion.div
                            key={i}
                            variants={{
                              hidden: { opacity: 0, x: -10 },
                              visible: { opacity: 1, x: 0 },
                            }}
                          >
                            <Link
                              to={dropdownItem.path}
                              className={`block px-6 py-3 text-sm border-b border-neutral-700 last:border-b-0 group transition-all duration-200 ${
                                location.pathname === dropdownItem.path
                                  ? 'text-secondary bg-secondary/10'
                                  : 'text-accent hover:bg-secondary/10 hover:text-secondary'
                              }`}
                              role="menuitem"
                            >
                              <div className="flex items-center space-x-3">
                                <motion.span
                                  className="text-secondary transition-transform duration-300"
                                  initial={{ x: 0 }}
                                  whileHover={{ x: 5 }}
                                >
                                  ▶
                                </motion.span>
                                <span>{dropdownItem.name}</span>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={index}
                to={link.path}
                className={`relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 ${
                  location.pathname === link.path
                    ? 'text-secondary after:w-full'
                    : 'hover:text-secondary hover:after:w-full'
                }`}
              >
                {link.name}
              </Link>
            )
          )}
          {/* Contact Button */}
          <Link
            to="/contact"
            className={`ml-4 bg-secondary text-primary px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 ${
              location.pathname === '/contact' ? 'ring-2 ring-secondary' : ''
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 space-y-2 bg-primary border-t border-neutral-700 rounded-b-lg shadow-inner py-4">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.05 },
                  },
                }}
              >
                {navLinks.map((link, index) =>
                  link.dropdown ? (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      className="py-2"
                    >
                      <div
                        className="flex justify-between items-center px-4 py-2 text-base font-semibold text-secondary bg-neutral-800 rounded-lg cursor-pointer hover:bg-neutral-700 transition-colors duration-300"
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        aria-haspopup="true"
                        aria-expanded={isServicesOpen}
                      >
                        <span>{link.name}</span>
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: isServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </div>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden mt-2"
                          >
                            <motion.div
                              className="pl-6 space-y-2"
                              initial="hidden"
                              animate="visible"
                              variants={{
                                visible: {
                                  transition: { staggerChildren: 0.05 },
                                },
                              }}
                            >
                              {link.dropdown.map((dropdownItem, i) => (
                                <motion.div
                                  key={i}
                                  variants={{
                                    hidden: { opacity: 0, x: -10 },
                                    visible: { opacity: 1, x: 0 },
                                  }}
                                >
                                  <Link
                                    to={dropdownItem.path}
                                    className="block py-2 px-4 text-sm text-accent hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all duration-300"
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setIsServicesOpen(false);
                                    }}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <Link
                        to={link.path}
                        className="block py-3 px-4 text-accent hover:text-secondary hover:bg-secondary/10 rounded-lg transition-all duration-300 font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  )
                )}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="mt-4"
                >
                  <Link
                    to="/contact"
                    className="block bg-secondary text-primary text-center py-3 px-6 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
