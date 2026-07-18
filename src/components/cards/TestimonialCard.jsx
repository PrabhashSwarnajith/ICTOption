import React from 'react';
import { motion } from 'framer-motion';
import { hoverScaleVariants } from '../../utils/animationVariants';
import QuoteIcon from '../icons/QuoteIcon';

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
      <QuoteIcon className="ml-auto w-8 h-8 text-secondary opacity-60 flex-shrink-0" />
    </div>
  </motion.div>
);

export default TestimonialCard;
