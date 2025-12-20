import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { containerVariants, itemVariants } from '../utils/animationVariants';
import { setPageMeta } from '../utils/seoUtils';

import { Hero, CSRProjectCarousel } from '../components';

import {
  team,
  aboutHero,
  companyIntro,
  coreValues,
  visionMission,
  csrDescription,
  testimonials,
  faqs,
} from '../data/aboutData';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 80 });
    setPageMeta(
      'About Us | ICT Options',
      'Learn about our team, values, and mission to deliver innovative ICT solutions',
      'about us, team, company values, ICT solutions, mission, vision',
      'https://ict-options.com/about'
    );
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white font-body">
      {/* Hero Section */}
      <Hero {...aboutHero}>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-6 sm:mt-8 animate-float">
          <Link
            to="/contact"
            className="bg-secondary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg shadow-lg hover:bg-secondary-light hover:scale-105 transition-all duration-300 transform-gpu font-body text-center"
          >
            Get Quote
          </Link>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body text-center"
          >
            Our Services
          </Link>
        </div>
      </Hero>
      {/* Company Introduction Section */}
      <section
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-900 relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(10deg) scale(1.2)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              {companyIntro.heading}
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-secondary mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-body max-w-3xl mx-auto leading-relaxed">
              {companyIntro.description}
            </p>
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0L40 20L20 40L0 20zM20 0L0 20L20 40L40 20L20 0z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(15deg) scale(1.1)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading tracking-wide uppercase">
              Our Core Values
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-body max-w-2xl mx-auto">
              The principles that guide our work and partnerships.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {coreValues.map((value, idx) => (
              <motion.div
                key={value.title}
                className={`bg-neutral-800 p-6 sm:p-8 rounded-2xl text-neutral-300 border border-neutral-700 shadow-xl hover:shadow-2xl transition-all duration-300 ${idx === 1 ? 'shadow-glow border-2 border-secondary hover:scale-[1.05]' : 'hover:scale-[1.02]'}`}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-bold text-secondary text-lg sm:text-xl mb-2 font-heading">
                  {value.title}
                </h3>
                <p className="font-body text-xs sm:text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-900 relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20zm20 20h20v20H40V40zm20 20h20v20H60V60z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(-20deg) scale(1.3)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              Our Team
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-secondary mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-body max-w-2xl mx-auto">
              Over 3 years of experience delivering innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                className="bg-neutral-800 rounded-2xl shadow-lg flex flex-col overflow-hidden border border-neutral-700 relative group transition-all duration-300 hover:shadow-2xl hover:border-accent"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-3 sm:p-4">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-secondary mb-1 font-heading line-clamp-2">
                      {member.name}
                    </h3>
                    <p className="text-accent text-xs font-semibold mb-1 font-body line-clamp-1">
                      {member.role}
                    </p>
                    <p className="text-neutral-300 text-xs font-body line-clamp-2">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Vision & Mission Section */}
      <section
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='8' stroke='%23374151' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='10' cy='10' r='3' fill='%23374151' fill-opacity='0.1'/%3E%3C/circle%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(5deg) scale(1.05)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {visionMission.map((item, index) => (
              <motion.div
                key={item.label}
                className="bg-neutral-800 p-6 sm:p-8 rounded-2xl text-neutral-300 border border-neutral-700 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h3 className="font-bold text-secondary text-lg sm:text-xl mb-2 font-heading">
                  Our {item.label}
                </h3>
                <p className="font-body text-sm sm:text-base">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CSR Project Image Carousel */}
      <section
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-900 relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='2' fill='%23374151' fill-opacity='0.1'/%3E%3C/circle%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              {csrDescription.heading}
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-secondary mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-body max-w-2xl mx-auto">
              {csrDescription.description}
            </p>
          </div>
          <CSRProjectCarousel />
        </div>
      </section>
      {/* Testimonials Section */}
      <section
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
            alt="Testimonials Background"
            loading="lazy"
            className="w-full h-full object-cover opacity-10"
          />
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
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                className="bg-neutral-800 rounded-xl p-6 sm:p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative max-w-[370px] mx-auto hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <p className="text-neutral-300 text-sm sm:text-base mb-6 sm:mb-8 font-medium font-body leading-relaxed">
                  {t.text}
                </p>
                <div className="flex items-center gap-4 mt-auto w-full">
                  <div>
                    <div className="font-bold text-secondary-light text-sm sm:text-base font-body">
                      {t.name}
                    </div>
                    <div className="text-neutral-400 text-xs font-body">
                      {t.role}
                    </div>
                  </div>
                  <span className="ml-auto text-accent text-2xl sm:text-3xl font-bold font-heading">
                    “”
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='3' fill='%23374151' fill-opacity='0.1'/%3E%3C/circle%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(-10deg) scale(1.05)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading tracking-wide uppercase">
              Frequently Asked Questions
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-body max-w-2xl mx-auto">
              Answers to common questions about our company and approach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {faqs.map((faq, idx) => (
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
    </div>
  );
};

export default AboutUs;
