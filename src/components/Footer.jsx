import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white text-center py-4 mt-10 z-20 relative">
      <div className="container mx-auto">
        <p className="font-body">
          &copy; 2025 ICT Option Web. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4 text-sm">
          <a
            href="#privacy"
            className="text-secondary hover:text-accent transition-colors"
          >
            Privacy
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="#terms"
            className="text-secondary hover:text-accent transition-colors"
          >
            Terms
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="#contact"
            className="text-secondary hover:text-accent transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
