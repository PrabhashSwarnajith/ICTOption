import React from 'react';
import { Link } from 'react-router-dom';

const PricingPlanCard = ({ plan, aosDelay }) => (
  <div
    className="flex flex-col bg-neutral-800 rounded-2xl p-8 shadow-xl border border-neutral-700 min-h-[370px] justify-between hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    data-aos="fade-up"
    data-aos-delay={aosDelay}
  >
    <div>
      <h3 className="text-xl font-bold text-accent mb-2 font-heading uppercase">
        {plan.name}
      </h3>
      <div className="text-3xl font-extrabold text-secondary mb-2 font-heading">
        {plan.price}
        <span className="text-neutral-300 text-base font-medium font-body">
          {plan.frequency}
        </span>
      </div>
      <ul className="text-neutral-300 text-sm space-y-2 mb-6 pl-4 list-disc font-body">
        {plan.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
    <Link
      to={plan.ctaLink}
      className="bg-secondary text-primary px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg hover:scale-105 transition-all duration-300 w-fit hover:bg-secondary-light hover:text-primary font-body"
    >
      {plan.cta}
    </Link>
  </div>
);

export default PricingPlanCard;
