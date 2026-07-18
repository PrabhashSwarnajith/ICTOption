import React from 'react';
import { motion } from 'framer-motion';

const FAQGrid = ({ faqs }) => (
  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
    {faqs.map((faq, index) => (
      <motion.div
        key={index}
        className="bg-neutral-800 rounded-2xl p-6 shadow-lg border border-neutral-700 hover:border-secondary/60 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="font-bold text-secondary mb-2 text-lg font-body">
          {faq.question}
        </div>
        <div className="text-accent font-body leading-relaxed">
          {faq.answer}
        </div>
      </motion.div>
    ))}
  </div>
);

export default FAQGrid;
