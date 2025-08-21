import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({
  title,
  subtitle,
  description,
  backgroundImage,
  gradient = 'from-primary via-neutral-900 to-secondary',
  height = 'min-h-screen',
  children,
}) => {
  return (
    <section
      className={`relative ${height} flex items-center justify-center overflow-hidden font-body`}
      style={{
        background: backgroundImage
          ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`
          : `linear-gradient(135deg, var(--tw-gradient-stops))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`}
      ></div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 opacity-20 hidden sm:block">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-secondary rounded-full filter blur-2xl opacity-70 animate-blob-bounce-1"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 sm:w-72 sm:h-72 bg-accent rounded-full filter blur-2xl opacity-70 animate-blob-bounce-2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-primary rounded-full filter blur-2xl opacity-70 animate-blob-bounce-3"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary font-heading mb-4 sm:mb-6">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-secondary font-heading mb-6 sm:mb-8">
              {subtitle}
            </h2>
          )}
          {description && (
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-body">
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-secondary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
