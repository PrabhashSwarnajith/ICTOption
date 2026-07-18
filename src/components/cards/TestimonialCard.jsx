import React from 'react';
import { motion } from 'framer-motion';
import { hoverScaleVariants } from '../../utils/animationVariants';

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    className="bg-neutral-800 rounded-xl p-6 sm:p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative max-w-[370px] mx-auto hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    variants={hoverScaleVariants}
    initial="rest"
    whileHover="hover"
  >
    <p className="text-neutral-300 text-sm sm:text-base mb-6 sm:mb-8 font-medium font-body leading-relaxed">
      {testimonial.text || testimonial.quote}
    </p>
    <div className="flex items-center gap-4 mt-auto w-full">
      <div>
        <div className="font-bold text-secondary-light text-sm sm:text-base font-body">
          {testimonial.name}
        </div>
        <div className="text-neutral-400 text-xs font-body">
          {testimonial.role || testimonial.title}
        </div>
      </div>
      <svg className="ml-auto w-8 h-8 text-secondary opacity-60 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>
    </div>
  </motion.div>
);

export default TestimonialCard;
