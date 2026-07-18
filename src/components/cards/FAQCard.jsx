import React from 'react';
import { motion } from 'framer-motion';
import { hoverScaleVariants } from '../../utils/animationVariants';

const FAQCard = props => {
  // Support both { question, answer } and { faq: { question, answer } }
  const question = props.question ?? props.faq?.question;
  const answer = props.answer ?? props.faq?.answer;
  if (!question || !answer) return null;
  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-primary/40 to-neutral-800 rounded-2xl p-5 sm:p-6 border border-neutral-700 hover:border-secondary/60 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col"
      variants={hoverScaleVariants}
      initial="rest"
      whileHover="hover"
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-70 pointer-events-none"></span>
      <h3 className="text-lg sm:text-xl font-semibold text-accent mb-3 font-heading leading-tight">
        {question}
      </h3>
      <p className="text-neutral-300 font-body text-sm leading-relaxed line-clamp-3">
        {answer}
      </p>
      <div className="mt-4 text-xs uppercase tracking-wide text-secondary/70">
        Still curious? Reach out anytime.
      </div>
    </motion.div>
  );
};

export default FAQCard;
