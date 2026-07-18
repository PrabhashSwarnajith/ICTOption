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
        <div className="w-full h-2 bg-neutral-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-secondary to-red-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${item.value}%` }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          ></motion.div>
        </div>
      </div>
    ))}
  </div>
);

export default WhyChooseUsProgress;
