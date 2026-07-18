import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/servicesData';
import { setPageMeta } from '../utils/seoUtils';

const categories = ['All', ...new Set(projectsData.map(p => p.category))];

const CaseStudies = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setPageMeta(
      'Case Studies',
      'Explore real-world case studies showcasing how ICT Option has delivered web, mobile, AI, and cybersecurity solutions for clients across industries.',
      'case studies, portfolio, client projects, web development projects, success stories',
      '/blog'
    );
  }, []);

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-primary font-body">
      <Hero
        title={
          <span className="text-accent font-heading">
            Case <span className="text-secondary">Studies</span>
          </span>
        }
        subtitle={
          <span className="text-accent font-heading">
            Real Work. <span className="text-secondary">Real Results.</span>
          </span>
        }
        description={
          <span className="text-neutral-300 font-body">
            Explore how we've helped clients across the globe transform their businesses with innovative technology solutions.
          </span>
        }
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        gradient="from-primary via-neutral-900 to-secondary"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <Link
            to="/contact"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-secondary-light hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Start Your Project
          </Link>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Our Services
          </Link>
        </div>
      </Hero>

      {/* Category Filter */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium font-body transition-colors ${
                  selectedCategory === category
                    ? 'bg-secondary text-primary shadow-lg'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-secondary border border-neutral-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-24 bg-neutral-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={index}
                className="bg-neutral-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-700 flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6 flex flex-col flex-1">
                  <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-medium font-body mb-3 w-fit">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-accent mb-3 font-heading leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-6 font-body line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-auto text-secondary font-medium hover:text-accent transition-colors font-body text-sm flex items-center gap-1"
                  >
                    View Case Study →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="bg-neutral-800 rounded-2xl shadow-2xl border border-neutral-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-medium font-body">
                      {selectedProject.category}
                    </span>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-neutral-400 hover:text-accent transition-colors p-1"
                      aria-label="Close"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-accent mb-4 font-heading">
                    {selectedProject.title}
                  </h2>
                  <p className="text-neutral-300 text-sm sm:text-base font-body leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-secondary text-primary px-6 py-3 rounded-full font-semibold text-sm hover:bg-secondary-light hover:scale-105 transition-all duration-300 font-body"
                    onClick={() => setSelectedProject(null)}
                  >
                    Start a Similar Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 via-primary to-neutral-900 text-center relative overflow-hidden pattern-radial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 font-heading">
              Ready to Be Our Next{' '}
              <span className="text-secondary">Success Story</span>?
            </h2>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto font-body">
              Let's build something remarkable together.
            </p>
            <Link
              to="/contact"
              className="bg-secondary text-primary px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-secondary-light hover:scale-105 transition-all duration-300 font-body"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
