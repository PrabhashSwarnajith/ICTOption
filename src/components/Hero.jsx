import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({
  title,
  subtitle,
  description,
  backgroundImage,
  gradient = 'from-primary via-black to-secondary',
  height = 'min-h-screen',
  children,
}) => {
  return (
    <section
      className={`relative ${height} flex items-center justify-center overflow-hidden`}
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

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-secondary mb-8">
              {subtitle}
            </h2>
          )}
          {description && (
            <p className="text-lg md:text-xl text-accent mb-12 max-w-3xl mx-auto leading-relaxed">
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
