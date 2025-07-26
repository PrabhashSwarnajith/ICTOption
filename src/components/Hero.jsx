import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({
  title,
  subtitle,
  description,
  backgroundImage,
  gradient = 'from-primary via-neutral-900 to-secondary', // Updated to use neutral-900 for consistency
  height = 'min-h-screen',
  children,
}) => {
  return (
    <section
      className={`relative ${height} flex items-center justify-center overflow-hidden font-body`} // Added font-body for general text
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

      <div
        className="absolute inset-0 z-0 opacity-[0.05]" // Adjusted opacity for subtlety
      ></div>

      {/* Animated Glowing Blobs - Refined positions, sizes, and blur for a more cohesive feel */}
      <div className="absolute inset-0 opacity-20">
        {' '}
        {/* Slightly increased overall blob opacity */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary rounded-full filter blur-2xl opacity-70 animate-blob-bounce-1"></div>{' '}
        {/* Reduced size and blur */}
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent rounded-full filter blur-2xl opacity-70 animate-blob-bounce-2"></div>{' '}
        {/* Reduced size and blur */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary rounded-full filter blur-2xl opacity-70 animate-blob-bounce-3"></div>{' '}
        {/* Reduced size and blur */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        {' '}
        {/* Standardized padding and added w-full */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary font-heading mb-6">
            {' '}
            {/* Changed gradient to accent and secondary, added font-heading */}
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-secondary font-heading mb-8">
              {' '}
              {/* Added font-heading */}
              {subtitle}
            </h2>
          )}
          {description && (
            <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-body">
              {' '}
              {/* Changed text-accent to text-neutral-300, added font-body */}
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
