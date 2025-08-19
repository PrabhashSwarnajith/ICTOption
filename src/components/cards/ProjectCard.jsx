import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => (
  <div className="bg-neutral-800 rounded-2xl shadow-xl border border-neutral-700 flex flex-col overflow-hidden relative group hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-40 object-cover"
    />
    <div className="absolute top-0 right-0 w-16 h-16 bg-secondary rounded-bl-2xl opacity-10 z-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    <div className="absolute top-4 left-4 bg-primary text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
      {project.category}
    </div>
    <div className="p-6 flex-1 flex flex-col justify-between">
      <h3 className="text-lg font-bold text-accent mb-2 font-heading">
        {project.title}
      </h3>
      <p className="text-neutral-300 text-sm font-body mb-4 leading-relaxed opacity-90">
        {project.description}
      </p>
      <Link
        to={project.link}
        className="bg-secondary text-primary px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-secondary-light hover:text-primary transition-all duration-300 w-fit"
      >
        Learn More
      </Link>
    </div>
  </div>
);

export default ProjectCard;
