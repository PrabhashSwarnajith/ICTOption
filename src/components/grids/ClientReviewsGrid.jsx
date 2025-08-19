import React from 'react';
import { motion } from 'framer-motion';

const ClientReviewsGrid = ({ reviews }) => (
  <div className="grid md:grid-cols-3 gap-8">
    {reviews.map((review, index) => (
      <motion.div
        key={index}
        className="bg-primary rounded-xl p-8 shadow-lg flex flex-col items-center border-t-4 border-secondary hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-accent text-base mb-6 font-body leading-relaxed text-center">
          "{review.quote}"
        </p>
        <div className="flex items-center gap-4 mt-auto">
          <div>
            <div className="font-bold text-secondary font-body">
              {review.name}
            </div>
            <div className="text-neutral-400 text-xs font-body">
              {review.title}
            </div>
          </div>
          <span className="ml-auto text-secondary text-3xl font-bold">“”</span>
        </div>
      </motion.div>
    ))}
  </div>
);

export default ClientReviewsGrid;
