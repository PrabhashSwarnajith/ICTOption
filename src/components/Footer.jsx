import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from '../assets/logo.png';

const Footer = () => {
  // Data for quick links
  const quickLinks = [
    { name: 'About Us', path: '/about' }, // Changed href to path for Link component
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  // Data for service links (already using path)
  const servicesLinks = [
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
  ];

  return (
    <footer className="bg-neutral-900 text-accent py-12 relative overflow-hidden font-body">
      {' '}
      {/* Changed neutral-dark to neutral-900, added font-body */}
      {/* Top Accent Divider - Enhanced with more vibrant gradient and shadow */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-accent to-secondary rounded-t-lg shadow-xl animate-gradient-shift"></div>{' '}
      {/* Changed rounded-t-xl to rounded-t-lg, shadow-2xl to shadow-xl */}
      {/* Subtle Background Pattern - Geometric dots */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05]" // Slightly adjusted opacity
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23374151' fill-opacity='0.1'/%3E%3C/svg%3E")`, // Used neutral-700 color for dots
          backgroundRepeat: 'repeat',
          transform: 'rotate(5deg) scale(1.1)', // Subtle rotation and scale
        }}
      ></div>
      {/* Main Footer Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-8 relative z-10">
        {' '}
        {/* Standardized padding, changed container to max-w-7xl */}
        {/* Brand & Contact */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            {/* Company Logo */}
            <img
              src={logo}
              alt="ICT Option Logo"
              className="w-10 h-10 mr-3 rounded-full shadow-lg bg-white object-contain p-1" // Added p-1 for slight internal padding
            />

            <span className="text-3xl font-extrabold text-accent tracking-wide font-heading">
              {' '}
              {/* Added font-heading */}
              ICT <span className="text-secondary">OPTION</span>
            </span>
          </div>
          <p className="text-neutral-300 mb-3 text-base leading-relaxed opacity-90">
            {' '}
            {/* Changed gray-300 to neutral-300 */}
            Empowering your digital future with smart, connected solutions.
          </p>
          <div className="text-neutral-400 text-sm opacity-90 mb-1 flex items-center">
            {' '}
            {/* Changed gray-400 to neutral-400 */}
            <svg
              className="w-4 h-4 mr-2 text-secondary flex-shrink-0" // Added flex-shrink-0
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            No: 59/E, Horana Road, Kesbewa, Piliyandala, postcode: 10300, Sri
            Lanka
          </div>
          <div className="text-neutral-400 text-sm opacity-90 mb-1 flex items-center">
            {' '}
            {/* Changed gray-400 to neutral-400 */}
            <svg
              className="w-4 h-4 mr-2 text-secondary flex-shrink-0" // Added flex-shrink-0
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            ictoption321@gmail.com
          </div>
          <div className="text-neutral-400 text-sm opacity-90 mb-1 flex items-center">
            {' '}
            {/* Changed gray-400 to neutral-400 */}
            <svg
              className="w-4 h-4 mr-2 text-secondary flex-shrink-0" // Added flex-shrink-0
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +94 76 346 5329
          </div>
          <div className="text-neutral-400 text-sm opacity-90 mb-1 flex items-center">
            {' '}
            {/* Changed gray-400 to neutral-400 */}
            <svg
              className="w-4 h-4 mr-2 text-secondary flex-shrink-0" // Added flex-shrink-0
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +94 71 115 2255
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-secondary mb-4 uppercase tracking-wide text-lg font-heading">
            {' '}
            {/* Added font-heading */}
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link // Using Link component
                  to={link.path}
                  className="text-neutral-300 hover:text-accent transition-colors duration-200 ease-in-out hover:underline underline-offset-4 text-base"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Services Links */}
        <div>
          <h4 className="font-bold text-secondary mb-4 uppercase tracking-wide text-lg font-heading">
            {' '}
            {/* Added font-heading */}
            Services
          </h4>
          <ul className="space-y-3">
            {servicesLinks.map((link, index) => (
              <li key={index}>
                <Link // Using Link component
                  to={link.path}
                  className="text-neutral-300 hover:text-accent transition-colors duration-200 ease-in-out hover:underline underline-offset-4 text-base"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Work Hours & CTA */}
        <div className="flex flex-col items-start">
          <h4 className="font-bold text-secondary mb-4 uppercase tracking-wide text-lg font-heading">
            {' '}
            {/* Added font-heading */}
            Work Hours
          </h4>
          <div className="text-accent text-base mb-2 font-semibold">
            9 AM - 10 PM,{' '}
            <span className="text-secondary">Monday - Saturday</span>
          </div>
          <p className="text-neutral-300 text-sm mb-6 opacity-90">
            {' '}
            {/* Changed gray-300 to neutral-300 */}
            Get in touch with us for your next project or support needs.
          </p>
          <Link // Using Link component
            to="/contact"
            className="inline-block bg-secondary text-primary px-8 py-3 rounded-full font-bold shadow-lg hover:bg-secondary-light transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-100 transform uppercase tracking-wider" // Matched hover effect
          >
            JOIN WITH US
          </Link>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-400 mt-12 opacity-70 border-t border-neutral-700 pt-6">
        {' '}
        {/* Changed gray-400 to neutral-400 */}
        &copy; {new Date().getFullYear()} ICT Option. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
