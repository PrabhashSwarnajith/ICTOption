import React from 'react';

const Footer = () => {
  // Data for quick links
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  // Data for useful links
  const usefulLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms and Conditions', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Support', href: '/support' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <footer className="bg-neutral-dark text-accent py-12 relative overflow-hidden">
      {/* Top Accent Divider - Enhanced with more vibrant gradient and shadow */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-accent to-secondary rounded-t-xl shadow-2xl animate-gradient-shift"></div>

      {/* Subtle Background Pattern - Geometric dots */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%239C92AC' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          transform: 'rotate(10deg) scale(1.2)',
        }}
      ></div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-8 relative z-10">
        {/* Brand & Contact */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            {/* Enhanced Brand Logo SVG */}
            <svg
              className="w-10 h-10 mr-3 text-secondary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-3xl font-extrabold text-accent tracking-wide">
              ICT <span className="text-secondary">OPTION</span>
            </span>
          </div>
          <p className="text-gray-300 mb-3 text-base leading-relaxed opacity-90">
            Empowering your digital future with smart, connected solutions.
          </p>
          <div className="text-gray-400 text-sm opacity-90 mb-1 flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-secondary"
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
            123 Technology Drive, Tech City, TC 12345
          </div>
          <div className="text-gray-400 text-sm opacity-90 mb-1 flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-secondary"
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
            support@ictoptionweb.com
          </div>
          <div className="text-gray-400 text-sm opacity-90 mb-1 flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-secondary"
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
            +1 (555) 123-4567
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-secondary mb-4 uppercase tracking-wide text-lg">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-accent transition-colors duration-200 ease-in-out hover:underline underline-offset-4 text-base"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-bold text-secondary mb-4 uppercase tracking-wide text-lg">
            Useful Links
          </h4>
          <ul className="space-y-3">
            {usefulLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-accent transition-colors duration-200 ease-in-out hover:underline underline-offset-4 text-base"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Work Hours & CTA */}
        <div className="flex flex-col items-start">
          <h4 className="font-bold text-secondary mb-4 uppercase tracking-wide text-lg">
            Work Hours
          </h4>
          <div className="text-accent text-base mb-2 font-semibold">
            9 AM - 10 PM,{' '}
            <span className="text-secondary">Monday - Saturday</span>
          </div>
          <p className="text-gray-300 text-sm mb-6 opacity-90">
            Get in touch with us for your next project or support needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-secondary text-primary px-8 py-3 rounded-full font-bold shadow-lg hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-100 transform uppercase tracking-wider"
            style={{ transitionProperty: 'background, color, transform' }}
          >
            JOIN WITH US
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-12 opacity-70 border-t border-neutral-700 pt-6">
        &copy; {new Date().getFullYear()} ICT Option. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
