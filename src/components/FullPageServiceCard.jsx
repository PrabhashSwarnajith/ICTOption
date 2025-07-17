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
  bgColor = 'bg-gradient-to-br from-blue-600 to-purple-700',
  reverse = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      x: reverse ? -60 : 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: reverse ? 60 : -60,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex items-center py-20 px-6 overflow-hidden bg-gray-900"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container mx-auto">
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
              <div
                className={`${bgColor} text-white px-6 py-3 rounded-full font-bold text-lg shadow-2xl`}
              >
                {number.toString().padStart(2, '0')}
              </div>
              <div className="h-px bg-gradient-to-r from-purple-400 to-transparent flex-1"></div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-white leading-tight bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
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
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-gray-300 text-lg">{feature}</span>
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
                className={`${bgColor} text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-center group transform hover:scale-105`}
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
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 text-center"
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
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {description.substring(0, 120)}...
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Number Badge */}
            <motion.div
              className={`absolute -top-6 -right-6 ${bgColor} text-white p-8 rounded-2xl shadow-2xl border-4 border-gray-800`}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="text-4xl font-bold">
                {number.toString().padStart(2, '0')}
              </div>
              <div className="text-sm opacity-90 text-center">Service</div>
            </motion.div>

            {/* Background Glow Effect */}
            <div
              className={`absolute inset-0 ${bgColor} opacity-20 blur-3xl rounded-2xl -z-10 transform scale-110`}
            ></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FullPageServiceCard;
