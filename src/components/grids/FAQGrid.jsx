import React from 'react';
import { motion } from 'framer-motion';

const FAQGrid = ({ faqs }) => (
  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
    {faqs.map((faq, index) => (
      <motion.div
        key={index}
        className="bg-neutral-800 rounded-xl p-6 shadow-lg border border-neutral-700 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
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
