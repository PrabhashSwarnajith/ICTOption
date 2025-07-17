import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({
  title,
  description,
  image,
  number,
  link,
  bgColor = 'bg-gray-500',
}) => {
  return (
    <div className="relative group">
      {/* Main Card */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-80">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div
          className={`absolute inset-0 ${bgColor}/90 p-6 flex flex-col justify-between text-white`}
        >
          {/* Title and Description */}
          <div>
            <h3 className="text-2xl font-bold font-heading mb-4 leading-tight">
              {title}
            </h3>
            <p className="text-white/90 font-body leading-relaxed">
              {description}
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex items-end justify-between">
            {/* Action Button */}
            <Link
              to={link}
              className="bg-red-500 hover:bg-red-600 rounded-full p-3 transition-all duration-300 hover:scale-110 group"
            >
              <svg
                className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform duration-300"
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
            </Link>

            {/* Number */}
            <div className="text-6xl font-bold text-accent opacity-80">
              {number.toString().padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
