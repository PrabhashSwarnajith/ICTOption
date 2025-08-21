import React, { useEffect } from 'react'; // Added useEffect for AOS
import { Link } from 'react-router-dom';
import { Hero } from '../../components';
import { motion } from 'framer-motion';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

// Import all static content from the data file
import {
  heroData,
  webFeatures,
  technologies,
  processSteps,
  statistics,
  testimonials,
  faqs,
} from '../../data/webDevelopmentData';

//  WebDevelopment Component

const WebDevelopment = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 }); // Initialize AOS
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white font-body">
      {/* Hero Section */}
      <Hero {...heroData}>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <Link
            to="/contact"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-secondary-light hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Get a Free Consultation
          </Link>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Explore All Services
          </Link>
        </div>
      </Hero>

      {/* Section 1: About Our Web Solutions - Enhanced Split Layout */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {/* Pattern Background */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(10deg) scale(1.2)',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Dynamic Image Showcase */}
          <div
            className="relative flex justify-center items-center min-h-[350px] p-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {/* Subtle animations/decorations around the image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -top-6 -left-6 w-36 h-36 bg-secondary rounded-full mix-blend-screen opacity-20 animate-spin-slow"
            ></motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 w-28 h-28 bg-accent rounded-xl mix-blend-screen opacity-15 transform rotate-45"
            ></motion.div>

            <motion.img
              src={heroData.web1}
              alt="Advanced Web Development"
              className="relative z-10 rounded-2xl shadow-xl w-full max-w-lg object-cover transform transition-transform duration-500 hover:scale-105 border border-neutral-700"
              style={{
                aspectRatio: '4/3',
              }}
              initial={{ rotateY: -10, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            />
          </div>

          {/* Right: Detailed Text and Key Offerings */}
          <div
            className="pl-0 md:pl-8"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Our Web Development Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading leading-tight tracking-wide uppercase">
              Crafting High-Impact Web Solutions
            </h2>
            <p className="text-neutral-300 opacity-90 mb-8 max-w-xl text-lg font-body">
              We specialize in creating **dynamic, robust, and scalable web
              applications** that serve as the digital backbone of your
              business. Our approach combines meticulous UI/UX design with
              cutting-edge development practices to deliver platforms that are
              not just functional, but truly transformative for user engagement
              and business efficiency.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {webFeatures.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  className="rounded-xl p-4 flex flex-col items-center text-center shadow-lg border border-neutral-700 bg-neutral-800 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  viewport={{ once: true, amount: 0.5 }}
                  data-aos="fade-up"
                  data-aos-delay={300 + idx * 50}
                >
                  <span className="w-12 h-12 flex items-center justify-center text-3xl mb-4 bg-secondary text-primary rounded-full shadow-lg">
                    {feature.icon}
                  </span>
                  <span className="font-semibold text-accent text-base mb-1 font-heading">
                    {feature.title}
                  </span>
                </motion.div>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-block bg-secondary text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:bg-secondary-light hover:text-primary transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section - Progress Bars with consistent background */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Subtle background pattern: hexagonal grid */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0L40 20L20 40L0 20zM20 0L0 20L20 40L40 20L20 0z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(5deg) scale(1.1)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Text and Progress Bars */}
          <div
            className="pr-0 md:pr-8"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="mb-6">
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">
                Our Proven Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading tracking-wide uppercase">
                A Transparent Path to Your Web Success
              </h2>
              <p className="text-neutral-300 opacity-90 mb-8 max-w-xl font-body">
                We follow a collaborative and agile development process,
                ensuring your project is delivered efficiently, on time, and
                exceeds your expectations for functionality and user experience.
              </p>
            </div>
            <div className="space-y-6">
              {processSteps.map((item, idx) => (
                <div
                  key={item.label}
                  data-aos="fade-up"
                  data-aos-delay={200 + idx * 80}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-accent font-semibold font-heading">
                      {item.label}
                    </span>
                    <span className="text-secondary font-bold font-heading">
                      {item.value}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      className="h-full bg-secondary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      transition={{
                        duration: 1.2,
                        delay: idx * 0.2,
                        ease: 'easeOut',
                      }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Modern Image with Accent Corners */}
          <div
            className="relative flex justify-center items-center min-h-[320px]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary rounded-xl z-0 shadow-lg"></div>
            <img
              src={heroData.web}
              alt="Web Development Process"
              className="relative z-10 rounded-2xl shadow-xl w-full max-w-lg object-cover border border-neutral-700"
              style={{ aspectRatio: '4/3' }}
            />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-accent rounded-xl z-0 shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Logos Grid with consistent background */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              Our Modern Technology Stack
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto mt-4 font-body">
              We leverage leading-edge frameworks and languages to build
              **high-performance, secure, and future-proof** web applications
              that stand the test of time.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group cursor-pointer rounded-lg bg-neutral-800 p-4 shadow-xl border border-neutral-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03]"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                data-aos="zoom-in"
                data-aos-delay={200 + index * 70}
              >
                <div className="w-full h-20 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-12 object-contain"
                  />
                </div>
                <p className="text-center text-sm text-neutral-300 mt-3 group-hover:text-secondary transition-colors font-medium font-body">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section - Consistent background */}
      <section className="py-20 bg-primary relative overflow-hidden">
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
          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {statistics.map((stat, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-neutral-800 rounded-xl shadow-xl border border-neutral-700 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true, amount: 0.5 }}
                data-aos="fade-up"
                data-aos-delay={200 + idx * 80}
              >
                <div className="text-5xl font-bold text-secondary mb-2 drop-shadow-lg font-heading">
                  {stat.value}
                </div>
                <div className="text-neutral-300 text-lg font-medium font-body">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Consistent background with subtle pattern */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%239C92AC' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Client Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              What Our Valued Clients Say
            </h2>
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto font-body">
              Our commitment to excellence shines through in the words of those
              we've helped succeed. Discover the impact of our web solutions
              directly from our partners.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="bg-neutral-800 rounded-xl p-8 shadow-xl flex flex-col items-center border border-neutral-700 relative group hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true, amount: 0.5 }}
                data-aos="fade-up"
                data-aos-delay={200 + idx * 80}
              >
                <p className="text-neutral-300 text-base mb-6 text-center italic font-body leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto w-full justify-center">
                  {/* <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-secondary object-cover"
                  /> */}
                  <div>
                    <div className="font-bold text-secondary-light font-heading text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-neutral-400 text-xs font-body">
                      {testimonial.title}
                    </div>
                  </div>
                  <span className="ml-auto text-secondary text-3xl font-bold">
                    “”
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Consistent background */}
      <section className="py-20 bg-primary relative overflow-hidden">
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
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              Common Questions Answered
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-neutral-800 rounded-lg p-6 shadow-xl border border-neutral-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                data-aos="fade-up"
                data-aos-delay={200 + idx * 70}
              >
                <div className="font-bold text-secondary text-xl mb-2 font-heading">
                  {faq.question}
                </div>
                <div className="text-neutral-300 leading-relaxed opacity-90 font-body">
                  {faq.answer}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Strongest background */}
      <section className="py-20 bg-gradient-to-br from-primary via-neutral-900 to-secondary text-center relative overflow-hidden">
        {/* Subtle background pattern: abstract shapes */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M0 0h50v50H0V0zm50 50h50v50H50V50z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(30deg) scale(1.5)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 font-heading tracking-wide uppercase">
              Ready to Launch Your Next Web Project?
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto font-body opacity-90">
              Let's collaborate to bring your vision to life with cutting-edge
              web technology solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-secondary text-primary px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-secondary-light hover:text-primary hover:scale-105 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                Start Your Project Today
              </Link>
              <Link
                to="/services"
                className="border-2 border-accent text-accent px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
