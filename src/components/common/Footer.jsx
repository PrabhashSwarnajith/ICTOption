import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const servicesLinks = [
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
    <footer className="bg-neutral-900 text-neutral-300 py-7 relative font-body">
      {/* Top Accent Divider */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {/* Brand & Contact */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src={logo}
              alt="ICT Option Logo"
              className="h-14 w-auto mr-3"
            />
            <span className="text-xl font-extrabold text-white tracking-wide font-heading">
              ICT <span className="text-red-500">OPTION</span>
            </span>
          </div>
          <p className="text-neutral-400 mb-4 text-sm leading-relaxed">
            Empowering your digital future with smart, connected solutions.
          </p>
          {/* Contact Info */}
          <ul className="space-y-2 text-sm text-neutral-400">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">📍</span>
              No: 59/E, Horana Road, Kesbewa, Piliyandala, 10300, Sri Lanka
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">📧</span>
              ictoption321@gmail.com
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">📞</span> +94 76 346 5329
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">📞</span> +94 71 115 2255
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-red-500 mb-4 uppercase tracking-wide text-sm">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-red-500 mb-4 uppercase tracking-wide text-sm">
            Services
          </h4>
          <ul className="space-y-2">
            {servicesLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Work Hours */}
        <div>
          <h4 className="font-bold text-red-500 mb-4 uppercase tracking-wide text-sm">
            Work Hours
          </h4>
          <p className="text-white font-semibold text-sm mb-2">
            9 AM - 10 PM,{' '}
            <span className="text-red-500">Monday - Saturday</span>
          </p>
          <p className="text-neutral-400 text-sm mb-6">
            Get in touch with us for your next project or support needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-red-700 transition-transform duration-300 hover:scale-105 text-sm"
          >
            JOIN WITH US
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-neutral-500 mt-5 border-t border-neutral-700 pt-2">
        &copy; {new Date().getFullYear()} ICT Option. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
