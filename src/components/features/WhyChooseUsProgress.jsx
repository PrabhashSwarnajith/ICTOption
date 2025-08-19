import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUsProgress = ({ points }) => (
  <div className="space-y-6">
    {points.map(item => (
      <div key={item.label}>
        <div className="flex justify-between mb-1">
          <span className="text-accent font-semibold font-body">
            {item.label}
          </span>
          <span className="text-secondary font-bold font-body">
            {item.value}%
          </span>
        </div>
        <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-secondary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${item.value}%` }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          ></motion.div>
        </div>
      </div>
    ))}
  </div>
);

export default WhyChooseUsProgress;
