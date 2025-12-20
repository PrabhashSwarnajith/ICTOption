import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { hoverScaleVariants } from '../../utils/animationVariants';

const MotionLink = motion.create(Link);

const ServiceCard = ({ service, aosDelay }) => (
  <MotionLink
    to={service.path}
    className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-neutral-800 shadow-xl border border-neutral-700 hover:border-accent flex flex-col group hover:shadow-glow-md transition-all duration-300 h-[360px]
      before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-secondary/10 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
    data-aos="zoom-in"
    data-aos-delay={aosDelay}
    variants={hoverScaleVariants}
    initial="rest"
    whileHover="hover"
  >
    {/* Image with overlay */}
    <div className="relative w-full h-36 overflow-hidden">
      <motion.img
        src={service.image}
        alt={service.name}
        className="w-full h-full object-cover transition-transform duration-500"
        loading="lazy"
        whileHover={{ scale: 1.1 }}
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
      {/* Top label */}
      <motion.div
        className="absolute top-3 left-3 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        {service.label}
      </motion.div>
    </div>
    {/* Card content */}
    <div className="flex-1 flex flex-col justify-between p-5">
      <div className="flex items-center gap-3 mb-3">
        {/* Icon with enhanced styling */}
        <div className="p-2 rounded-full bg-secondary/20 group-hover:bg-secondary/40 transition-colors duration-300 flex-shrink-0">
          {service.icon}
        </div>
        <span className="text-secondary text-sm font-bold font-heading line-clamp-2">
          {service.name}
        </span>
      </div>
      <p className="text-neutral-300 text-sm leading-relaxed mb-5 opacity-90 flex-grow line-clamp-3">
        {service.description}
      </p>
      <div className="px-5 py-2 rounded-full bg-secondary text-primary font-semibold shadow-lg group-hover:bg-accent transition-all duration-300 w-fit text-sm">
        Learn More
      </div>
    </div>
  </MotionLink>
);

export default ServiceCard;
