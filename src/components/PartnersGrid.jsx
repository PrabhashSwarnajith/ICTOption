import React from 'react';
import { motion } from 'framer-motion';

const PartnersGrid = ({ partners }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
    {partners.map((partner, index) => (
      <motion.div
        key={partner.image}
        className="group cursor-pointer flex flex-col items-center"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          type: 'spring',
          stiffness: 100,
        }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.1,
          y: -10,
          transition: { duration: 0.3 },
        }}
      >
        <img
          src={partner.image}
          alt={partner.name}
          className="w-30 h-28 object-contain rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:brightness-125"
          style={{ background: 'black' }}
        />
      </motion.div>
    ))}
  </div>
);

export default PartnersGrid;
