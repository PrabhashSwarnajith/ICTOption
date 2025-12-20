import React from 'react';
import { motion } from 'framer-motion';
import { hoverScaleVariants } from '../../utils/animationVariants';

const HowWeWorkStep = ({ step }) => (
  <motion.div
    className="bg-neutral-800 p-5 sm:p-6 rounded-2xl shadow-lg border border-accent hover:border-secondary hover:shadow-2xl transition-all duration-300 min-h-[240px] flex flex-col justify-center"
    variants={hoverScaleVariants}
    initial="rest"
    whileHover="hover"
    data-aos="zoom-in"
  >
    <h3 className="font-bold text-secondary text-base sm:text-lg mb-3 font-heading line-clamp-2">
      {step.step}
    </h3>
    <p className="text-neutral-300 text-sm leading-relaxed opacity-90 line-clamp-3">
      {step.description}
    </p>
  </motion.div>
);

export default HowWeWorkStep;
