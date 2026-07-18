import React from 'react';
import { motion } from 'framer-motion';

const ClientReviewsGrid = ({ reviews }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
    {reviews.map((review, index) => (
      <motion.div
        key={index}
        className="bg-neutral-800 rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col border border-neutral-700 hover:border-secondary/60 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
        role="article"
        aria-label={`Client review from ${review.name}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="text-neutral-200 text-sm sm:text-base mb-6 sm:mb-8 font-body leading-relaxed flex-grow">
          {review.quote}
        </p>
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-neutral-700">
          <div className="flex-1">
            <div className="font-bold text-secondary text-sm sm:text-base font-body">
              {review.name}
            </div>
            <div className="text-neutral-400 text-xs font-body">
              {review.title}
            </div>
          </div>
          <svg className="w-8 h-8 text-secondary opacity-60 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
      </motion.div>
    ))}
  </div>
);

export default ClientReviewsGrid;
