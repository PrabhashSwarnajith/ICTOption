import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FullPageServiceCard = ({
  title,
  description,
  features = [],
  image,
  number,
  link,
  bgColor = 'bg-gradient-to-br from-primary to-neutral-dark', // Default gradient using theme colors
  reverse = false, // Controls layout order
}) => {
  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2, // Slightly reduced stagger for faster reveal
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40, // Reduced vertical animation distance
      x: reverse ? -40 : 40, // Reduced horizontal animation distance
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7, // Slightly faster transition
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9, // Reduced scale for subtle effect
      x: reverse ? 50 : -50, // Adjusted horizontal animation
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.9, // Slightly faster image transition
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className={`min-h-screen flex items-center py-20 px-6 overflow-hidden relative ${bgColor}`} // Added relative and bgColor
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Subtle Background Pattern (Geometric Grid) - Refined Opacity and Color */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]" // More subtle opacity
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234B5563' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`, // Desaturated grey fill
          backgroundRepeat: 'repeat',
          transform: 'rotate(10deg) scale(1.2)',
        }}
      ></div>

      <div className="container mx-auto relative z-10">
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}
        >
          {/* Content Section */}
          <motion.div
            className={`space-y-8 ${reverse ? 'lg:col-start-2' : ''}`}
            variants={itemVariants}
          >
            {/* Number Badge */}
            <motion.div
              className="flex items-center space-x-4"
              variants={itemVariants}
            >
              <div className="text-primary bg-secondary px-6 py-3 rounded-full font-bold text-lg shadow-xl border border-secondary/50">
                {number.toString().padStart(2, '0')}
              </div>
              <div className="h-px bg-neutral-600 flex-1"></div>{' '}
              {/* Neutral gray for line */}
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl lg:text-5xl font-bold text-accent leading-tight font-heading"
              variants={itemVariants}
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-300 leading-relaxed max-w-2xl font-body" // Changed text color to gray-300
              variants={itemVariants}
            >
              {description}
            </motion.p>

            {/* Features List */}
            {features.length > 0 && (
              <motion.div className="space-y-4" variants={itemVariants}>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-2.5 h-2.5 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-base font-body">
                      {' '}
                      {/* Consistent gray-300 */}
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-8"
              variants={itemVariants}
            >
              <Link
                to={link}
                className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center group transform hover:scale-105 hover:bg-accent hover:text-primary" // Refined hover colors: bg-accent, text-primary
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Explore Service</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>

              <Link
                to="/contact"
                className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300 text-center transform hover:scale-105" // Refined hover colors: bg-accent, text-primary
              >
                Get Quote
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className={`relative ${reverse ? 'lg:col-start-1' : ''}`}
            variants={imageVariants}
          >
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-neutral-600">
              {' '}
              {/* Adjusted border */}
              <img
                src={image}
                alt={title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-neutral-800/70 p-6 rounded-xl border border-neutral-700 shadow-lg backdrop-blur-sm">
                  {' '}
                  {/* Darker overlay background, refined border */}
                  <h3 className="text-2xl font-bold text-accent mb-2 font-heading">
                    {title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed font-body">
                    {description.substring(0, 120)}...
                  </p>
                </div>
              </div>
            </div>
            {/* Floating Number Badge */}
            <motion.div
              className="absolute -top-6 -right-6 bg-accent text-primary p-8 rounded-2xl shadow-2xl border-4 border-accent/40"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="text-4xl font-bold font-heading">
                {number.toString().padStart(2, '0')}
              </div>
              <div className="text-sm opacity-90 text-center text-primary font-body">
                Service
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FullPageServiceCard;
