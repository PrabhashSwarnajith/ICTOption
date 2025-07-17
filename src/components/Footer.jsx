import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-accent py-12 relative">
      {/* Top Accent Divider */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-accent to-secondary rounded-t-xl shadow-lg"></div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pt-4">
        {/* Brand & Contact */}
        <div>
          <div className="flex items-center mb-4">
            <span className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center mr-3">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </span>
            <span className="text-2xl font-bold text-accent tracking-wide">
              ICT <span className="text-secondary">OPTION</span>
            </span>
          </div>
          <p className="text-accent mb-2 text-sm opacity-80">
            Empowering your digital future with smart, connected solutions.
          </p>
          <div className="text-accent text-sm opacity-80 mb-1">
            123 Technology Drive, Tech City, TC 12345
          </div>
          <div className="text-accent text-sm opacity-80 mb-1">
            support@ictoptionweb.com
          </div>
          <div className="text-accent text-sm opacity-80 mb-1">
            +1 (555) 123-4567
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-secondary mb-4 uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-secondary transition-colors duration-200 ease-in-out underline-offset-4 hover:underline"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-secondary transition-colors duration-200 ease-in-out underline-offset-4 hover:underline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="hover:text-secondary transition-colors duration-200 ease-in-out underline-offset-4 hover:underline"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-secondary transition-colors duration-200 ease-in-out underline-offset-4 hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Useful Links */}
        <div>
          <h4 className="font-bold text-secondary mb-4 uppercase tracking-wide">
            Useful Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/privacy"
                className="hover:text-secondary transition-colors duration-200 ease-in-out underline-offset-4 hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-secondary transition-colors duration-200 ease-in-out underline-offset-4 hover:underline font-bold"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="/disclaimer"
                className="hover:text-secondary transition-colors duration-200 ease-in-out underline-offset-4 hover:underline"
              >
                Disclaimer
              </a>
            </li>
            <li>
              <a
                href="/support"
                className="hover:text-secondary transition-colors duration-200 ease-in-out underline-offset-4 hover:underline"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="hover:text-secondary transition-colors duration-200 ease-in-out underline-offset-4 hover:underline"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        {/* Work Hours & CTA */}
        <div>
          <h4 className="font-bold text-secondary mb-4 uppercase tracking-wide">
            Work Hours
          </h4>
          <div className="text-accent text-sm mb-2 font-semibold">
            9 AM - 10 PM,{' '}
            <span className="text-secondary">Monday - Saturday</span>
          </div>
          <p className="text-accent text-xs mb-4 opacity-80">
            Get in touch with us for your next project or support needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-secondary text-accent px-6 py-3 rounded-lg font-bold shadow-glow hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-105 focus:scale-105 active:scale-100 transform"
            style={{ transitionProperty: 'background, color, transform' }}
          >
            JOIN WITH US
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-accent mt-10 opacity-60">
        &copy; {new Date().getFullYear()} ICT Option. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
