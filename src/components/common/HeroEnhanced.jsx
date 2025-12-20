import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInUpVariants,
  slideInLeftVariants,
  slideInRightVariants,
  scaleInVariants,
  viewportSettings,
} from '../../utils/animationVariants';

const Hero = ({
  title,
  subtitle,
  description,
  backgroundImage,
  gradient = 'from-primary via-black/60 to-neutral-900',
  className = '',
  children,
}) => {
  return (
    <section
      className={`relative min-h-screen w-full flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${gradient} z-10`}
      ></div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ zIndex: 5 }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/3 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ zIndex: 5 }}
      />

      {/* Content Container */}
      <motion.div
        className="max-w-5xl mx-auto text-center relative z-20 space-y-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.1,
            },
          },
        }}
        viewport={viewportSettings}
      >
        {/* Title */}
        {title && (
          <motion.div variants={slideInUpVariants} className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-heading leading-tight">
              {title}
            </h1>
          </motion.div>
        )}

        {/* Subtitle */}
        {subtitle && (
          <motion.div variants={slideInUpVariants}>
            <p className="text-xl sm:text-2xl lg:text-3xl text-neutral-200 font-heading">
              {subtitle}
            </p>
          </motion.div>
        )}

        {/* Description */}
        {description && (
          <motion.div variants={slideInUpVariants}>
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>
        )}

        {/* CTA Buttons */}
        {children && (
          <motion.div variants={slideInUpVariants}>{children}</motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm text-neutral-300">Scroll to explore</p>
          <svg
            className="w-6 h-6 text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
