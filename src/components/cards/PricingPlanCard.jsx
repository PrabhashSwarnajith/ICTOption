import React from 'react';
import { motion } from 'framer-motion';
import { hoverScaleVariants } from '../../utils/animationVariants';

const PricingPlanCard = ({ plan, aosDelay }) => (
  <motion.div
    className="flex flex-col bg-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-700 hover:border-accent hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 justify-between"
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    variants={hoverScaleVariants}
    initial="rest"
    whileHover="hover"
  >
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-accent mb-3 sm:mb-4 font-heading uppercase">
        {plan.name}
      </h3>
      <div className="text-2xl sm:text-3xl font-extrabold text-secondary mb-2 font-heading">
        {plan.price}
        <span className="text-neutral-300 text-xs sm:text-sm font-medium font-body ml-2">
          {plan.frequency}
        </span>
      </div>
      <ul className="text-neutral-300 text-xs sm:text-sm space-y-2 sm:space-y-3 mb-6 sm:mb-8 pl-4 list-disc font-body">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="leading-relaxed">
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <motion.a
      href={plan.ctaLink}
      className="bg-secondary text-primary px-5 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg hover:bg-accent transition-all duration-300 hover:shadow-xl font-body text-center inline-block w-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {plan.cta}
    </motion.a>
  </motion.div>
);

export default PricingPlanCard;
