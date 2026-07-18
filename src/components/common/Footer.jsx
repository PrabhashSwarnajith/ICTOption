import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.svg';
import { socialMediaLinks } from '../../data/contactData.jsx';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Case Studies', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const servicesLinks = [
  { name: 'Web Development', path: '/services/web-development' },
  { name: 'Mobile App Development', path: '/services/mobile-app-development' },
  { name: 'AI & Machine Learning', path: '/services/ai-machine-learning' },
  { name: 'Digital Marketing', path: '/services/digital-marketing' },
  { name: 'IT Consulting', path: '/services/it-consulting' },
  { name: 'Cybersecurity', path: '/services/cybersecurity' },
];

const SectionHeading = ({ children }) => (
  <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-6 flex items-center gap-3">
    <span className="w-6 h-px bg-secondary inline-block flex-shrink-0"></span>
    {children}
  </h4>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-sm text-neutral-400 hover:text-secondary transition-colors duration-200 flex items-center gap-2 group py-0.5"
    >
      <span className="w-0 h-px bg-secondary group-hover:w-3 transition-all duration-300 flex-shrink-0"></span>
      {children}
    </Link>
  </li>
);

const Footer = () => (
  <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8 relative font-body overflow-hidden">
    {/* Top accent line */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>

    {/* Subtle dot pattern */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Main grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-14">

        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center mb-5 group w-fit">
            <img
              src={logo}
              alt="ICT Option Logo"
              className="h-12 w-auto mr-3 group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-xl font-extrabold text-white tracking-wide font-heading">
              ICT <span className="text-secondary">OPTION</span>
            </span>
          </Link>

          <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-xs">
            Empowering your digital future with smart, connected technology solutions since 2021.
          </p>

          {/* Contact info */}
          <ul className="space-y-3 text-sm text-neutral-400 mb-7">
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="leading-relaxed">No. 59/E, Horana Rd, Kesbewa, Piliyandala 10300, Sri Lanka</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:ictoption321@gmail.com" className="hover:text-secondary transition-colors duration-200 truncate">
                ictoption321@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+94 76 346 5329 &nbsp;·&nbsp; +94 71 115 2255</span>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socialMediaLinks.map(s => (
              <motion.a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-secondary hover:border-secondary/50 hover:bg-neutral-700 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <SectionHeading>Quick Links</SectionHeading>
          <ul className="space-y-2">
            {quickLinks.map(link => (
              <FooterLink key={link.name} to={link.path}>{link.name}</FooterLink>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <SectionHeading>Services</SectionHeading>
          <ul className="space-y-2">
            {servicesLinks.map(link => (
              <FooterLink key={link.name} to={link.path}>{link.name}</FooterLink>
            ))}
          </ul>
        </div>

        {/* Work Hours */}
        <div>
          <SectionHeading>Work Hours</SectionHeading>
          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-between text-sm border-b border-neutral-800 pb-3">
              <span className="text-neutral-400">Mon – Sat</span>
              <span className="text-secondary font-semibold">9 AM – 10 PM</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-400">Sunday</span>
              <span className="text-neutral-600">Closed</span>
            </div>
            <p className="text-neutral-500 text-xs leading-relaxed pt-1">
              Email support available 24/7 for urgent inquiries.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-primary px-5 py-2.5 rounded-full font-bold text-sm shadow-glow-md hover:bg-secondary-light transition-all duration-300 hover:scale-105"
          >
            Start a Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-neutral-500">
        <p>&copy; {new Date().getFullYear()} ICT Option. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Crafted with
          <span className="text-secondary text-sm">&#9829;</span>
          in Sri Lanka
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
