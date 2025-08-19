import React from 'react';

const HowWeWorkStep = ({ step }) => (
  <div
    className="bg-neutral-800 p-6 rounded-2xl shadow-xl border border-accent text-accent text-center group hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
    data-aos="zoom-in"
  >
    <h3 className="font-bold text-secondary text-xl mb-2 font-heading">
      {step.step}
    </h3>
    <p className="text-neutral-300 text-base leading-relaxed opacity-90">
      {step.description}
    </p>
  </div>
);

export default HowWeWorkStep;
