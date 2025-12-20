import React from 'react';
import { motion } from 'framer-motion';
import { hoverScaleVariants } from '../../utils/animationVariants';

const ProductCard = ({ product, aosDelay }) => (
  <motion.div
    className="bg-neutral-800 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center shadow-xl border border-neutral-700 hover:border-accent hover:shadow-2xl transition-all duration-300 min-h-[360px]"
    data-aos="zoom-in-up"
    data-aos-delay={aosDelay}
    variants={hoverScaleVariants}
    initial="rest"
    whileHover="hover"
  >
    <img
      src={product.image}
      alt={product.name}
      className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl object-cover border-2 border-secondary mr-0 md:mr-8 mb-6 md:mb-0 hover:border-accent transition-all duration-300 shadow-lg"
      style={{ aspectRatio: '1/1' }}
      loading="lazy"
      data-aos="fade-right"
      data-aos-delay={aosDelay + 100}
    />
    <div
      className="flex-1 flex flex-col justify-center w-full"
      data-aos="fade-left"
      data-aos-delay={aosDelay + 200}
    >
      <h3 className="text-xl sm:text-2xl font-extrabold text-accent font-heading mb-2 uppercase tracking-wide">
        {product.name}
      </h3>
      <p className="text-sm sm:text-base text-secondary font-heading mb-2 uppercase tracking-wide">
        {product.subtitle}
      </p>
      <p className="text-neutral-300 text-sm sm:text-base font-body mb-4 sm:mb-6 leading-relaxed">
        {product.description}
      </p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <a
          href={product.ctaLink}
          className="bg-secondary text-primary px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base w-fit shadow-lg hover:bg-accent transition-all duration-300 hover:shadow-xl font-body inline-block"
        >
          {product.cta}
        </a>
      </motion.div>
    </div>
  </motion.div>
);

export default ProductCard;
