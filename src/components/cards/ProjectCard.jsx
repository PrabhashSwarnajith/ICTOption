import React from 'react';
import { motion } from 'framer-motion';
import { hoverScaleVariants } from '../../utils/animationVariants';

const ProjectCard = ({ project, onLearnMore }) => (
  <motion.div
    className="bg-neutral-800 rounded-2xl shadow-lg border border-neutral-700 hover:border-accent flex flex-col overflow-hidden relative group hover:shadow-2xl transition-all duration-300 h-[400px]"
    variants={hoverScaleVariants}
    initial="rest"
    whileHover="hover"
    role="article"
  >
    <motion.img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
      loading="lazy"
      whileHover={{ scale: 1.1 }}
    />
    <div className="absolute top-0 right-0 w-16 h-16 bg-secondary rounded-bl-2xl opacity-10 z-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    <motion.div
      className="absolute top-4 left-4 bg-primary text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      {project.category}
    </motion.div>
    <div className="p-5 flex-1 flex flex-col justify-between">
      <h3 className="text-base font-bold text-accent mb-2 font-heading line-clamp-2">
        {project.title}
      </h3>
      <p className="text-neutral-300 text-sm font-body mb-4 leading-relaxed opacity-90 flex-grow line-clamp-3">
        {project.description}
      </p>
      <motion.button
        type="button"
        onClick={() => onLearnMore && onLearnMore(project)}
        className="bg-secondary text-primary px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-accent transition-all duration-300 w-fit text-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </div>
  </motion.div>
);

export default ProjectCard;
