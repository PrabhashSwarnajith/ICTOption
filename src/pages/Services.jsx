import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../utils/seoUtils';
import { containerVariants, itemVariants } from '../utils/animationVariants';
import {
  Hero,
  ServiceCard,
  ProjectCard,
  WhyChooseUsCard,
  HowWeWorkStep,
  TestimonialCard,
  FAQCard,
} from '../components';
import service from '../assets/img/services.webp';

import {
  servicesData,
  projectsData,
  whyChooseUsPoints,
  howWeWorkSteps,
  testimonialsData,
  faqsData,
} from '../data/servicesData.jsx';

const Services = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    setPageMeta(
      'Services | Complete Technology Solutions | ICT Option',
      'Comprehensive technology services including web development, mobile apps, AI/ML, digital marketing, IT consulting, and cybersecurity. Expert solutions for your business.',
      'technology services, web development, mobile app development, AI machine learning, digital marketing, IT consulting, cybersecurity, software development',
      '/services'
    );
  }, []);

  const openProjectModal = project => setActiveProject(project);
  const closeProjectModal = () => setActiveProject(null);

  return (
    <div className="min-h-screen bg-primary text-white font-body">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent font-heading">
            Our <span className="text-secondary">Services</span>
          </span>
        }
        subtitle={
          <span className="text-accent font-heading">
            Complete Technology Solutions by Our{' '}
            <span className="text-secondary">Expert Team</span>
          </span>
        }
        description={
          <span className="text-neutral-300 font-body">
            {' '}
            {/* Changed text-gray-200 to text-neutral-300 */}
            Discover our comprehensive range of technology solutions designed to
            **drive innovation, enhance efficiency, and accelerate your business
            growth** in the dynamic digital landscape.
          </span>
        }
        backgroundImage={service}
        gradient="from-primary via-black/80 to-neutral-900"
        className="brightness-110"
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-6 sm:mt-8 animate-float">
          {' '}
          {/* Removed animate-float */}
          <Link
            to="/contact"
            className="bg-secondary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg shadow-lg hover:bg-secondary-light hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body text-center"
          >
            Get a Free Consultation
          </Link>
          <Link
            to="/products"
            className="border-2 border-accent text-accent px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:bg-accent hover:text-primary transition-all duration-300 transform-gpu font-body text-center"
          >
            Explore Our Products
          </Link>
        </div>
      </Hero>

      {/* Featured Solutions (modern cards, accent corners) */}
      <section
        className="py-12 sm:py-16 md:py-20 bg-neutral-900 relative overflow-hidden pattern-grid-soft"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Subtle background pattern: circuit board / digital lines */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading tracking-wide uppercase">
              Our Core Technology Services
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-body max-w-2xl mx-auto">
              Discover our most innovative and in-demand technology offerings,
              designed to help your business thrive in a digital world.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {servicesData.map((service, idx) => (
              <motion.div key={service.name} variants={itemVariants}>
                <ServiceCard service={service} aosDelay={100 + idx * 70} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Projects (modern card style) */}
      <section
        className="py-8 sm:py-12 md:py-16 lg:py-20 bg-primary relative overflow-hidden pattern-dots"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Subtle background pattern: hexagonal grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-2 font-heading tracking-wide uppercase">
                Our Latest Projects
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-accent mx-auto md:mx-0 mb-4"></div>
              <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-body max-w-xl">
                Explore some of our most recent and impactful technology
                projects, delivered for clients across various industries.
              </p>
            </div>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projectsData.map((project, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <ProjectCard project={project} onLearnMore={openProjectModal} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us (modern card style) */}
      <section className="py-12 sm:py-16 md:py-20 bg-neutral-900 relative overflow-hidden pattern-grid-soft">
        {/* Subtle background pattern: diagonal lines */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading tracking-wide uppercase">
              Why Choose ICT Option?
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-body max-w-2xl mx-auto">
              We deliver innovative, reliable, and scalable technology solutions
              tailored to your business needs, ensuring your success.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {whyChooseUsPoints.map((point, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <WhyChooseUsCard point={point} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work (modern card style) */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary relative overflow-hidden pattern-dots">
        {/* Subtle background pattern: dots */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              Our Streamlined Process
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-body max-w-2xl mx-auto">
              Our proven process ensures your project is a success from start to
              finish, with clear milestones and collaborative steps.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {howWeWorkSteps.map((step, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <HowWeWorkStep step={step} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section (black, white, accent colors) */}
      <section
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="Testimonials Background" loading="lazy" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-neutral-900/80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <span className="text-secondary font-bold uppercase tracking-wider text-xs sm:text-sm font-body">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-accent mb-2 font-heading tracking-wide uppercase">
              Our Clients Reviews
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-secondary mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-sm sm:text-base text-neutral-300 opacity-90 max-w-2xl mx-auto font-body">
              See what our clients say about working with us and how we helped
              them achieve their goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonialsData.map((t, idx) => (
              <motion.div
                key={t.name}
                className="bg-neutral-800 rounded-xl p-6 sm:p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative max-w-[370px] mx-auto hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <p className="text-neutral-300 text-sm sm:text-base mb-6 sm:mb-8 font-medium font-body leading-relaxed">
                  {t.text || t.quote}
                </p>
                <div className="flex items-center gap-4 mt-auto w-full">
                  <div>
                    <div className="font-bold text-secondary-light text-sm sm:text-base font-body">
                      {t.name}
                    </div>
                    <div className="text-neutral-400 text-xs font-body">
                      {t.role || t.title}
                    </div>
                  </div>
                  <span className="ml-auto text-accent text-2xl sm:text-3xl font-bold font-heading">
                    ""
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (modern card style) */}
      <section
        className="py-20 bg-neutral-900 relative overflow-hidden pattern-grid-soft"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading tracking-wide uppercase">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
            <p className="text-neutral-300 font-body max-w-2xl mx-auto">
              Answers to common questions about our services and approach to
              ensure you have all the information you need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {faqsData.map((faq, idx) => (
              <motion.div
                key={faq.question}
                className="bg-neutral-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-accent text-neutral-300 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <h3 className="font-bold text-secondary text-lg sm:text-xl mb-2 font-heading">
                  {faq.question}
                </h3>
                <p className="font-body text-xs sm:text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (modern style) */}
      <section
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary via-neutral-900 to-accent text-center relative overflow-hidden\"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        {/* Subtle background pattern: abstract shapes */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-4 sm:mb-6 font-heading tracking-wide uppercase">
            Need a Custom Solution?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-300 mb-6 sm:mb-8 max-w-2xl mx-auto font-body opacity-90">
            Our expert team can create tailored solutions that perfectly match
            your unique business requirements and drive your success.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-secondary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:bg-secondary-light hover:text-primary transition-all duration-300 transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProjectModal}
            />
            <motion.div
              className="relative max-w-4xl w-full bg-neutral-900 rounded-3xl border border-neutral-700 overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 24 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center text-xl"
                aria-label="Close project details"
              >
                ×
              </button>
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-secondary text-primary text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    {activeProject.category}
                  </span>
                </div>
                <div className="p-6 sm:p-8 flex flex-col gap-5">
                  <div>
                    <p className="text-secondary font-semibold uppercase tracking-widest text-xs mb-1">
                      Featured Project
                    </p>
                    <h3 className="text-2xl font-heading text-accent leading-tight">
                      {activeProject.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {activeProject.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-neutral-300">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-xs uppercase tracking-wider text-secondary/70 mb-1">
                        Project Timeline
                      </p>
                      <p className="font-semibold text-white">4 - 6 Weeks</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-xs uppercase tracking-wider text-secondary/70 mb-1">
                        Tech Stack
                      </p>
                      <p className="font-semibold text-white">
                        React · Node · Cloud
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <Link
                      to="/contact"
                      className="bg-secondary text-primary px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-accent transition-all duration-300"
                    >
                      Start Similar Project
                    </Link>
                    <button
                      onClick={closeProjectModal}
                      className="px-6 py-3 rounded-full border border-neutral-600 text-neutral-200 hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
