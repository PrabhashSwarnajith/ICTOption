import React from 'react';
import { motion } from 'framer-motion';

const StatsGrid = ({ stats }) => (
  <div className="grid md:grid-cols-3 gap-8">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        className="p-6 bg-neutral-800 rounded-xl shadow-lg border border-neutral-700 hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-5xl font-bold text-secondary mb-2 font-heading">
          {stat.value}
        </div>
        <div className="text-accent text-lg font-body">{stat.label}</div>
      </motion.div>
    ))}
  </div>
);

export default StatsGrid;
