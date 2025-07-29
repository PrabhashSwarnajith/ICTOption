import React from 'react';

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-neutral-800 rounded-xl p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative group hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
    <p className="text-neutral-300 text-base mb-8 font-medium leading-relaxed">
      {testimonial.quote}
    </p>
    <div className="flex items-center gap-4 mt-auto w-full">
      {testimonial.image && (
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full border-2 border-secondary"
        />
      )}
      <div>
        <div className="font-bold text-secondary-light text-base">
          {testimonial.name}
        </div>
        <div className="text-neutral-400 text-xs">{testimonial.title}</div>
      </div>
      <span className="ml-auto text-secondary text-3xl font-bold">“”</span>
    </div>
  </div>
);

export default TestimonialCard;
