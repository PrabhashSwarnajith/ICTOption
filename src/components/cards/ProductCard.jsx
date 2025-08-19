import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, aosDelay }) => (
  <div
    className="bg-neutral-800 rounded-2xl p-8 flex flex-col md:flex-row items-center shadow-xl border border-neutral-700 relative min-h-[260px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    data-aos="zoom-in-up"
    data-aos-delay={aosDelay}
  >
    <img
      src={product.image}
      alt={product.name}
      className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-2 border-secondary mr-0 md:mr-8 mb-6 md:mb-0 group-hover:border-accent transition-colors duration-300"
      style={{ aspectRatio: '1/1' }}
      data-aos="fade-right"
      data-aos-delay={aosDelay + 100}
    />
    <div
      className="flex-1 flex flex-col justify-center"
      data-aos="fade-left"
      data-aos-delay={aosDelay + 200}
    >
      <h3 className="text-2xl font-extrabold text-accent font-heading mb-2 uppercase tracking-wide">
        {product.name}
      </h3>
      <p className="text-base text-secondary font-heading mb-2 uppercase tracking-wide">
        {product.subtitle}
      </p>
      <p className="text-neutral-300 text-base font-body mb-4">
        {product.description}
      </p>
      <Link
        to={product.ctaLink}
        className="bg-secondary text-primary px-6 py-2 rounded-full font-semibold text-base w-fit shadow-lg hover:scale-105 transition-all duration-300 hover:bg-secondary-light hover:text-primary font-body"
        data-aos="zoom-in"
        data-aos-delay={aosDelay + 300}
      >
        {product.cta}
      </Link>
    </div>
  </div>
);

export default ProductCard;
