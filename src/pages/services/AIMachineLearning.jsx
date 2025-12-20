import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components';
import { motion } from 'framer-motion';

import {
  heroData,
  whyChooseUsPoints,
  processSteps,
  successStories,
  emergingApplications,
  industriesServed,
  keySolutions,
} from '../../data/aiMachineLearningData';

const AIMachineLearning = () => {
  return (
    <div className="min-h-screen bg-primary text-white font-body">
      {/* Hero Section */}
      <Hero {...heroData}>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <Link
            to="/contact"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-secondary-light hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Explore AI Solutions
          </Link>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            View All Services
          </Link>
        </div>
      </Hero>

      {/* Introduction to AI/ML */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden pattern-grid-soft">
        {' '}
        {/* Adjusted background for consistency */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {' '}
          {/* Standardized padding */}
          <motion.div
            className="relative flex justify-center items-center min-h-[350px] p-4" // Added p-4 for consistency
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            data-aos="fade-right" // Added AOS
            data-aos-delay="100" // Added AOS delay
          >
            <img
              src={heroData.ml2}
              alt="The Future of AI"
              className="relative z-10 rounded-2xl shadow-xl w-full max-w-lg object-cover transition-all duration-500 hover:grayscale-0 hover:scale-105 border border-neutral-700"
              style={{ aspectRatio: '4/3' }}
            />
            <div className="absolute -top-6 -left-6 w-36 h-36 bg-accent rounded-full mix-blend-screen opacity-20 animate-pulse-slow"></div>{' '}
            {/* Adjusted size, position, blend for consistency */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-secondary rounded-xl mix-blend-screen opacity-15 transform rotate-45 animate-spin-slow"></div>{' '}
            {/* Adjusted size, position, blend for consistency */}
          </motion.div>
          <motion.div
            className="pl-0 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            data-aos="fade-left" // Added AOS
            data-aos-delay="200" // Added AOS delay
          >
            <span className="text-accent font-bold uppercase tracking-wider text-sm font-body">
              {' '}
              {/* Added font-body for consistency */}
              The AI Revolution is Here
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4 font-heading leading-tight tracking-wide uppercase">
              {' '}
              {/* Adjusted font size, color, added uppercase and tracking-wide for consistency */}
              Transforming Data into Intelligent Action
            </h2>
            <p className="text-neutral-300 opacity-90 mb-8 max-w-xl text-lg font-body">
              {' '}
              {/* Adjusted text color, opacity, and added font-body for consistency */}
              Artificial Intelligence and Machine Learning are no longer
              buzzwords; they are **critical drivers of competitive advantage**
              in every industry. From automating mundane tasks to uncovering
              hidden patterns in vast datasets, AI empowers businesses to
              operate smarter, predict outcomes, and deliver unparalleled
              customer experiences. We help you navigate this complex landscape
              to implement real-world AI solutions.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:bg-accent-light hover:text-primary transition-all duration-300 transform-gpu font-body"
              data-aos="fade-up" // Added AOS
              data-aos-delay="400" // Added AOS delay
            >
              Get Your AI Roadmap
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key AI/ML Solutions */}
      <section className="py-20 bg-primary relative overflow-hidden pattern-dots">
        {' '}
        {/* Adjusted background for consistency, added relative overflow-hidden */}
        {/* Subtle background pattern: hexagonal grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Standardized padding and added relative z-10 */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }} // Added amount for consistency
            data-aos="fade-up" // Added AOS
            data-aos-delay="100" // Added AOS delay
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              {' '}
              {/* Adjusted font size, color, and added uppercase/tracking-wide for consistency */}
              Our Key AI & Machine Learning Solutions
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>{' '}
            {/* Added margin-bottom and rounded-full for consistency */}
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto mt-4 text-lg font-body">
              {' '}
              {/* Adjusted text color, opacity, and font size for consistency */}
              We offer a comprehensive suite of AI/ML services designed to
              tackle your unique business challenges and unlock new
              opportunities.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {keySolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]" // Adjusted background, border for consistency
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }} // Added amount for consistency
                data-aos="fade-up" // Added AOS
                data-aos-delay={200 + index * 70} // Added AOS delay
              >
                <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center mb-4 shadow-md">
                  {' '}
                  {/* Adjusted text color */}
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3 font-heading">
                  {' '}
                  {/* Adjusted font color */}
                  {solution.title}
                </h3>
                <p className="text-neutral-300 font-body text-base leading-relaxed opacity-90">
                  {' '}
                  {/* Adjusted text color, added font-body */}
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden pattern-grid-soft">
        {' '}
        {/* Adjusted background for consistency, added relative overflow-hidden */}
        {/* Subtle background pattern: small circles */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Standardized padding and added relative z-10 */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }} // Added amount for consistency
            data-aos="fade-up" // Added AOS
            data-aos-delay="100" // Added AOS delay
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              {' '}
              {/* Adjusted font size, color, added uppercase and tracking-wide for consistency */}
              Why Partner with ICT Option for AI & ML?
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>{' '}
            {/* Adjusted color and added rounded-full for consistency */}
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto mt-4 text-lg font-body">
              {' '}
              {/* Adjusted text color, opacity, and font size for consistency */}
              We stand out through our deep technical prowess, strategic
              approach, and commitment to tangible business outcomes.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <motion.div
                key={point.title}
                className="bg-neutral-800 p-6 rounded-xl text-white text-center shadow-lg border border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]" // Adjusted background, text color, shadow, and border for consistency
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }} // Added amount for consistency
                data-aos="fade-up" // Added AOS
                data-aos-delay={200 + index * 70} // Added AOS delay
              >
                <div className="flex justify-center mb-4 text-secondary">
                  {point.icon}
                </div>
                <h3 className="font-bold text-accent text-xl mb-2 font-heading">
                  {' '}
                  {/* Adjusted text color, added font-heading */}
                  {point.title}
                </h3>
                <p className="text-neutral-300 text-base leading-relaxed opacity-90 font-body">
                  {' '}
                  {/* Adjusted text color, opacity, and added font-body */}
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our AI/ML Process Section */}
      <section className="py-20 bg-primary relative overflow-hidden pattern-dots">
        {' '}
        {/* Adjusted background for consistency, added relative overflow-hidden */}
        {/* Subtle background pattern: circuit board */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Standardized padding and added relative z-10 */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }} // Added amount for consistency
            data-aos="fade-up" // Added AOS
            data-aos-delay="100" // Added AOS delay
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              {' '}
              {/* Adjusted font size, color, added uppercase and tracking-wide for consistency */}
              Our Data-Driven AI/ML Development Process
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>{' '}
            {/* Adjusted color and added rounded-full for consistency */}
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto mt-4 text-lg font-body">
              {' '}
              {/* Adjusted text color, opacity, and font size for consistency */}
              We follow a robust, iterative methodology to ensure successful AI
              project delivery from concept to deployment and beyond.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 p-6 rounded-xl text-white shadow-lg border border-neutral-700 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.02]" // Adjusted background, text color, shadow, and border for consistency
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true, amount: 0.5 }} // Added amount for consistency
                data-aos="fade-up" // Added AOS
                data-aos-delay={300 + index * 70} // Added AOS delay
              >
                <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-md">
                  {index + 1}
                </div>
                <h3 className="font-bold text-accent text-lg mb-2 font-heading">
                  {' '}
                  {/* Adjusted text color, added font-heading */}
                  {item.step}
                </h3>
                <p className="text-neutral-300 text-base leading-relaxed opacity-90 font-body">
                  {' '}
                  {/* Adjusted text color, opacity, and added font-body */}
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden pattern-grid-soft">
        {' '}
        {/* Adjusted background for consistency, added relative overflow-hidden */}
        {/* Subtle abstract pattern background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Standardized padding and added relative z-10 */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }} // Added amount for consistency
            data-aos="fade-up" // Added AOS
            data-aos-delay="100" // Added AOS delay
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              {' '}
              {/* Adjusted font size, color, added uppercase and tracking-wide for consistency */}
              Transforming Businesses: Our AI Success Stories
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>{' '}
            {/* Adjusted color and added rounded-full for consistency */}
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto mt-4 text-lg font-body">
              {' '}
              {/* Adjusted text color, opacity, and font size for consistency */}
              Explore real-world examples of how our AI and Machine Learning
              solutions have delivered measurable impact for our clients.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 p-6 rounded-xl text-white shadow-lg border-t-4 border-secondary flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-40 object-cover rounded-md mb-4 border border-neutral-700"
                  loading="lazy"
                />
                <h3 className="font-bold text-accent text-xl mb-3 font-heading">
                  {story.title}
                </h3>
                <p className="text-neutral-300 text-base leading-relaxed opacity-90 flex-grow font-body">
                  {story.description}
                </p>
                <div className="mt-4 text-right text-sm italic opacity-80 text-neutral-400 font-body">
                  — Client Success
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging AI Applications Section */}
      <section className="py-20 bg-primary relative overflow-hidden pattern-dots">
        {' '}
        {/* Adjusted background for consistency, added relative overflow-hidden */}
        {/* Subtle background circles/dots */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Standardized padding and added relative z-10 */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }} // Added amount for consistency
            data-aos="fade-up" // Added AOS
            data-aos-delay="100" // Added AOS delay
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              {' '}
              {/* Adjusted font size, color, added uppercase and tracking-wide for consistency */}
              Explore the Frontier: Emerging AI Applications
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>{' '}
            {/* Adjusted color and added rounded-full for consistency */}
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto mt-4 text-lg font-body">
              {' '}
              {/* Adjusted text color, opacity, and font size for consistency */}
              Stay ahead of the curve. We specialize in cutting-edge AI
              innovations transforming industries today and tomorrow.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergingApplications.map((app, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] flex flex-col items-center text-center" // Adjusted background and border for consistency
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }} // Added amount for consistency
                data-aos="fade-up" // Added AOS
                data-aos-delay={200 + index * 80} // Added AOS delay
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 border-2 border-secondary/50">
                  {app.icon}
                </div>
                <h3 className="text-xl font-semibold text-accent mb-2 font-heading">
                  {' '}
                  {/* Adjusted text color, added font-heading */}
                  {app.title}
                </h3>
                <p className="text-neutral-300 font-body text-base leading-relaxed opacity-90">
                  {' '}
                  {/* Adjusted text color, added font-body */}
                  {app.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden pattern-grid-soft">
        {' '}
        {/* Adjusted background for consistency, added relative overflow-hidden */}
        {/* Subtle background circles/dots */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Standardized padding and added relative z-10 */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }} // Added amount for consistency
            data-aos="fade-up" // Added AOS
            data-aos-delay="100" // Added AOS delay
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              {' '}
              {/* Adjusted font size, color, added uppercase and tracking-wide for consistency */}
              Empowering Innovation Across Diverse Industries
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>{' '}
            {/* Adjusted color and added rounded-full for consistency */}
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto mt-4 text-lg font-body">
              {' '}
              {/* Adjusted text color, opacity, and font size for consistency */}
              Our AI and Machine Learning solutions are tailored to deliver
              significant impact across a broad spectrum of sectors.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {industriesServed.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 text-neutral-300 px-6 py-3 rounded-full text-lg font-medium shadow-md border border-neutral-700 cursor-default transition-all duration-300 hover:bg-secondary hover:text-primary hover:scale-105" // Adjusted background, text color, and hover for consistency
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true, amount: 0.2 }} // Added amount for consistency
                data-aos="zoom-in" // Added AOS
                data-aos-delay={200 + index * 40} // Added AOS delay
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-neutral-900 to-secondary text-center relative overflow-hidden">
        {/* Subtle background pattern: abstract shapes */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 font-heading tracking-wide uppercase">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto font-body opacity-90">
              Let's discuss how tailored AI and Machine Learning solutions can
              drive your next wave of growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-secondary text-primary px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-secondary-light hover:text-primary hover:scale-105 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                Get a Free AI Consultation
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-accent text-accent px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                View More Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIMachineLearning;
