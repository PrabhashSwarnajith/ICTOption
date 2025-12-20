import React from 'react';
import { motion } from 'framer-motion';

const ClientReviewsGrid = ({ reviews }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
    {reviews.map((review, index) => (
      <motion.div
        key={index}
        className="bg-neutral-800 rounded-xl p-6 sm:p-8 shadow-lg flex flex-col border-t-4 border-secondary hover:shadow-2xl hover:border-accent transition-all duration-300 transform hover:scale-[1.02] min-h-[320px]"
        role="article"
        aria-label={`Client review from ${review.name}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-neutral-200 text-sm sm:text-base mb-6 sm:mb-8 font-body leading-relaxed flex-grow">
          "{review.quote}"
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
          <span className="text-secondary text-2xl sm:text-3xl font-bold flex-shrink-0">
            ""
          </span>
        </div>
      </motion.div>
    ))}
  </div>
);

export default ClientReviewsGrid;
