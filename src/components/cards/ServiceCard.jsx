import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, aosDelay }) => (
  <div
    className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-neutral-800 shadow-xl border border-neutral-700 flex flex-col group
      hover:shadow-glow-md hover:border-secondary transition-all duration-300 transform hover:scale-[1.03]
      before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-secondary/10 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
    data-aos="zoom-in"
    data-aos-delay={aosDelay}
  >
    {/* Image with overlay */}
    <div className="relative w-full h-40">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
      {/* Top label */}
      <div className="absolute top-3 left-3 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg">
        {service.label}
      </div>
    </div>
    {/* Card content */}
    <div className="flex-1 flex flex-col justify-between p-6">
      <div className="flex items-center gap-3 mb-3">
        {/* Icon with enhanced styling */}
        <div className="p-2 rounded-full bg-secondary/20 group-hover:bg-secondary/40 transition-colors duration-300">
          {service.icon}
        </div>
        <span className="text-secondary text-lg font-bold font-heading">
          {service.name}
        </span>
      </div>
      <p className="text-neutral-300 text-sm leading-relaxed mb-4 opacity-90">
        {service.description}
      </p>
      <Link
        to={service.path}
        className="mt-auto px-5 py-2 rounded-full bg-secondary text-primary font-semibold shadow-lg hover:bg-secondary-light hover:text-primary transition-all duration-300 w-fit"
      >
        Learn More
      </Link>
    </div>
  </div>
);

export default ServiceCard;
