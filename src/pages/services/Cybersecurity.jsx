import React, { useEffect } from 'react'; // Added useEffect for AOS
import { Link } from 'react-router-dom';
import { Hero } from '../../components';
import { motion } from 'framer-motion';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

// Import all static content from the data file
import {
  heroData,
  whyChooseUsPoints,
  ourApproachSteps,
  coreServices,
  successStories,
  industriesWeServe,
  faqs,
} from '../../data/cybersecurityData';

//  Cybersecurity Component

const Cybersecurity = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 }); // Initialize AOS
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white font-body">
      {/* Hero Section */}
      <Hero {...heroData}>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <Link
            to="/services"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-secondary-light hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body" // Adjusted shadow and hover for consistency
          >
            Get a Security Assessment
          </Link>
          <Link
            to="/contact"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body" // Adjusted hover for consistency
          >
            Explore All Services
          </Link>
        </div>
      </Hero>

      {/* Intro to Cybersecurity - Enhanced Visual & Text Section */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {' '}
        {/* Adjusted to neutral-900 for consistency */}
        {/* Subtle background pattern: circuit board / digital lines */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(15deg) scale(1.2)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {' '}
          {/* Adjusted padding for consistency */}
          {/* Left: Image with Overlays */}
          <motion.div
            className="relative flex justify-center items-center min-h-[350px] p-4" // Added p-4 for consistency
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            data-aos="fade-right" // Added AOS
            data-aos-delay="100" // Added AOS delay
          >
            <img
              src={heroData.cyber2}
              alt="Cybersecurity Strategy"
              className="relative z-10 rounded-2xl shadow-xl w-full max-w-lg object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105 border border-neutral-700"
              style={{ aspectRatio: '4/3' }}
            />
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-36 h-36 bg-secondary rounded-full mix-blend-screen opacity-20 animate-pulse-slow"></div>{' '}
            {/* Adjusted size, position, blend for consistency */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-accent rounded-xl mix-blend-screen opacity-15 transform rotate-45 animate-spin-slow"></div>{' '}
            {/* Adjusted size, position, blend for consistency */}
          </motion.div>
          {/* Right: Text Content */}
          <motion.div
            className="pl-0 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            data-aos="fade-left" // Added AOS
            data-aos-delay="200" // Added AOS delay
          >
            <span className="text-secondary font-bold uppercase tracking-wider text-sm font-body">
              Your Digital Fortress
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading leading-tight tracking-wide uppercase">
              {' '}
              {/* Added uppercase and tracking-wide for consistency */}
              Proactive Defense in an Unpredictable World
            </h2>
            <p className="text-neutral-300 opacity-90 mb-8 max-w-xl text-lg font-body">
              {' '}
              {/* Adjusted text color and opacity for consistency */}
              In today's interconnected world, cyber threats are more
              sophisticated than ever. At ICT Option, we provide **robust
              cybersecurity solutions** designed to protect your valuable data,
              systems, and reputation. Our proactive approach ensures your
              business remains secure and compliant, allowing you to focus on
              growth without the constant fear of a breach.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-secondary text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:bg-secondary-light hover:text-primary transition-all duration-300 transform-gpu font-body" // Adjusted shadow and hover for consistency
              data-aos="fade-up" // Added AOS
              data-aos-delay="400" // Added AOS delay
            >
              Consult Our Experts
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section - Card Grid with motion */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {' '}
        {/* Adjusted to primary and added overflow-hidden for consistent patterns */}
        {/* Subtle background pattern: hexagonal grid for consistency */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0L40 20L20 40L0 20zM20 0L0 20L20 40L40 20L20 0z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(5deg) scale(1.1)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Adjusted padding for consistency */}
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
              Why Entrust Your Security to ICT Option?
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>{' '}
            {/* Adjusted color for consistency */}
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto mt-4 text-lg font-body">
              {' '}
              {/* Adjusted text color, opacity, and font size for consistency */}
              We provide unparalleled protection through a blend of expert
              knowledge, cutting-edge technology, and unwavering vigilance.
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
                <div className="text-5xl mb-4 text-secondary">{point.icon}</div>{' '}
                {/* Adjusted icon color for consistency */}
                <h3 className="font-bold text-accent text-xl mb-2 font-heading">
                  {' '}
                  {/* Adjusted text color for consistency */}
                  {point.title}
                </h3>
                <p className="text-neutral-300 text-base leading-relaxed opacity-90 font-body">
                  {' '}
                  {/* Adjusted text color and opacity for consistency */}
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section - Process with numbers and motion */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {' '}
        {/* Adjusted background for consistency */}
        {/* Background pattern: small circles for consistency */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='3' fill='%239C92AC' fill-opacity='0.1'/%3E%3C/circle%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(-5deg) scale(1.05)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Adjusted padding for consistency */}
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
              Our Multi-Layered Cybersecurity Approach
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto mt-4 text-lg font-body">
              {' '}
              {/* Adjusted text color, opacity, and font size for consistency */}
              We implement a comprehensive defense-in-depth strategy, securing
              your assets at every potential point of attack.
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.img
              src={heroData.cyber3}
              alt="Cyber Defense Layers"
              className="w-full max-w-lg rounded-2xl shadow-xl mb-8 md:mb-0 object-cover border border-neutral-700 transition-transform duration-500 hover:scale-[1.02]"
              style={{ aspectRatio: '1.5/1' }}
              initial={{ opacity: 0, rotateY: 10 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
              data-aos="fade-right"
              data-aos-delay="200"
            />
            <ul className="space-y-6 text-left max-w-xl mx-auto">
              {ourApproachSteps.map((item, index) => (
                <motion.li
                  key={index}
                  className="bg-neutral-800 p-6 rounded-xl text-white shadow-lg border border-neutral-700 flex items-start gap-4 transition-all duration-300 hover:bg-neutral-700 hover:shadow-xl" // Adjusted background, text color, shadow, and hover for consistency
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true, amount: 0.5 }}
                  data-aos="fade-up" // Added AOS
                  data-aos-delay={300 + index * 70} // Added AOS delay
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-secondary text-primary rounded-full font-bold text-lg shadow-md">
                    {index + 1}
                  </span>
                  <div>
                    <span className="font-bold text-accent text-lg font-heading">
                      {' '}
                      {/* Adjusted text color for consistency */}
                      {item.step}:
                    </span>{' '}
                    <p className="text-neutral-300 text-base leading-relaxed opacity-90 font-body">
                      {' '}
                      {/* Adjusted text color and opacity for consistency */}
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Cybersecurity Services - Detailed cards */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {' '}
        {/* Adjusted background for consistency */}
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Adjusted padding for consistency */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              {' '}
              {/* Adjusted font size, color, and added uppercase/tracking-wide for consistency */}
              Comprehensive Cybersecurity Services
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto mt-4 text-lg font-body">
              {' '}
              {/* Adjusted text color, opacity, and font size for consistency */}
              From proactive threat detection to rapid incident response, our
              services cover every aspect of your digital security needs.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 p-6 rounded-xl text-white shadow-lg border-l-4 border-secondary transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border" // Adjusted background, text color, added full border for consistency
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.5 }}
                data-aos="fade-up"
                data-aos-delay={200 + index * 50}
              >
                <h3 className="font-bold text-accent text-xl mb-3 font-heading">
                  {' '}
                  {/* Adjusted text color for consistency */}
                  {service.title}
                </h3>
                <p className="text-neutral-300 text-base leading-relaxed opacity-90 font-body">
                  {' '}
                  {/* Adjusted text color and opacity for consistency */}
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section - Testimonials with a different visual flair */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {' '}
        {/* Adjusted background for consistency */}
        {/* Subtle abstract pattern background */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20zm20 20h20v20H40V40zm20 20h20v20H60V60z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(20deg) scale(1.1)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Adjusted padding for consistency */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              {' '}
              {/* Adjusted font size, color, and added uppercase/tracking-wide for consistency */}
              Proven Results: Real-World Success
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto mt-4 text-lg font-body">
              {' '}
              {/* Adjusted text color, opacity, and font size for consistency */}
              Discover how ICT Option has successfully protected businesses from
              critical cyber threats and ensured their digital resilience.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 p-6 rounded-xl text-white shadow-lg border border-neutral-700 flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl" // Adjusted background, text color, shadow, and border for consistency
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                data-aos="fade-up"
                data-aos-delay={200 + index * 80}
              >
                <div className="text-secondary text-sm font-semibold mb-2 font-body">
                  {story.tag}
                </div>
                <h3 className="font-bold text-accent text-xl mb-3 font-heading">
                  {' '}
                  {/* Adjusted text color for consistency */}
                  {story.title}
                </h3>
                <p className="text-neutral-300 text-base leading-relaxed opacity-90 flex-grow font-body">
                  {' '}
                  {/* Adjusted text color and opacity for consistency */}"
                  {story.description}"{' '}
                  {/* Added quotes to mimic testimonial style */}
                </p>
                <div className="mt-4 text-right text-sm italic opacity-80 text-neutral-400 font-body">
                  {' '}
                  {/* Adjusted text color for consistency */}— Client
                  Testimonial
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section - Icon Grid / Tag Cloud style */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {' '}
        {/* Adjusted background for consistency */}
        {/* Subtle background circles/dots */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='2' fill='%239C92AC' fill-opacity='0.15'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Adjusted padding for consistency */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              {' '}
              {/* Adjusted font size, color, and added uppercase/tracking-wide for consistency */}
              Trusted Across Diverse Industries
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto mt-4 text-lg font-body">
              {' '}
              {/* Adjusted text color, opacity, and font size for consistency */}
              Our robust cybersecurity solutions are tailored to meet the unique
              security and compliance demands of various sectors.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {industriesWeServe.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 text-neutral-300 px-6 py-3 rounded-full text-lg font-medium shadow-md border border-neutral-700 cursor-default transition-all duration-300 hover:bg-secondary hover:text-primary hover:scale-105" // Adjusted background, text color, and hover for consistency
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.5 }}
                data-aos="zoom-in"
                data-aos-delay={200 + index * 40}
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Collapsible (conceptual, using static for now) */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {' '}
        {/* Adjusted background for consistency */}
        {/* Subtle background pattern: small circles */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='3' fill='%239C92AC' fill-opacity='0.1'/%3E%3C/circle%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(-5deg) scale(1.05)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Adjusted padding for consistency */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              {' '}
              {/* Adjusted font size, color, and added uppercase/tracking-wide for consistency */}
              Your Cybersecurity Questions, Answered
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto mt-4 text-lg font-body">
              {' '}
              {/* Adjusted text color, opacity, and font size for consistency */}
              We've compiled answers to the most common inquiries about securing
              your digital future.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-8">
            {' '}
            {/* Increased space-y for better visual separation */}
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 rounded-lg p-6 shadow-xl border border-neutral-700 transition-shadow duration-300 hover:shadow-2xl transform hover:scale-[1.01]" // Adjusted background, shadow, and hover for consistency
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                data-aos="fade-up"
                data-aos-delay={200 + index * 70}
              >
                <h3 className="font-semibold text-secondary text-xl mb-2 cursor-pointer font-heading">
                  {' '}
                  {/* Adjusted text color for consistency */}
                  {faq.question}
                </h3>
                <p className="text-neutral-300 leading-relaxed opacity-90 font-body">
                  {' '}
                  {/* Adjusted text color and opacity for consistency */}
                  {faq.answer}
                </p>
                {/* For actual collapsible, you'd add state and click handlers here */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Final strong push */}
      <section className="py-20 bg-gradient-to-br from-primary via-neutral-900 to-secondary text-center relative overflow-hidden">
        {' '}
        {/* Adjusted gradient for consistency */}
        {/* Subtle background pattern: abstract shapes for consistency */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M0 0h50v50H0V0zm50 50h50v50H50V50z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(30deg) scale(1.5)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Adjusted padding for consistency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 font-heading tracking-wide uppercase">
              {' '}
              {/* Adjusted font size, color, and added uppercase/tracking-wide for consistency */}
              Secure Your Future. Protect What Matters.
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto font-body opacity-90">
              {' '}
              {/* Adjusted text color, opacity, and font size for consistency */}
              Don't wait for a breach to act. Partner with ICT Option for
              unyielding cybersecurity that lets you operate with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-secondary text-primary px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-secondary-light hover:text-primary hover:scale-105 transition-all duration-300" // Adjusted shadow and hover for consistency
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                Request a Security Consultation
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-accent text-accent px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300" // Adjusted border color and hover for consistency
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                View Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;
