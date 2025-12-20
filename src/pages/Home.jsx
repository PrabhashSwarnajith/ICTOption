import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { setPageMeta } from '../utils/seoUtils';
import {
  containerVariants,
  itemVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from '../utils/animationVariants';
import {
  ServiceDetailCard,
  Hero,
  AboutFeaturesList,
  WhyChooseUsProgress,
  PartnersGrid,
  StatsGrid,
  ClientReviewsGrid,
  FAQGrid,
} from '../components';
import home from '../assets/img/home.webp';
import home1 from '../assets/img/home1.webp';
import home2 from '../assets/img/home2.webp';
import {
  aboutFeatures,
  whyChooseUsPoints,
  partnersData,
  statsData,
  featuredServices,
  clientReviews,
  faqs,
} from '../data/homeData.jsx';

const Home = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
    setPageMeta(
      'Home | Digital Solutions & Web Development Services',
      'ICT Option provides cutting-edge digital solutions, web development, mobile apps, AI/ML, digital marketing, and IT consulting services to transform your business.',
      'web development, mobile app development, digital marketing, AI machine learning, IT consulting, cybersecurity, digital solutions',
      '/'
    );
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Hero Section */}
      <Hero
        subtitle={
          <span className="text-accent font-heading">
            Transforming Ideas into{' '}
            <span className="text-secondary">Digital Reality</span>
          </span>
        }
        description={
          <span className="text-neutral-300 font-body">
            We craft cutting-edge digital solutions that drive innovation,
            enhance user experiences, and accelerate business growth in the
            modern digital landscape.
          </span>
        }
        backgroundImage={home}
        gradient="from-primary via-black/80 to-neutral-900"
        className="brightness-110"
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-6 sm:mt-8 animate-float">
          <Link
            to="/services"
            className="bg-secondary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg shadow-glow-md hover:bg-secondary-light hover:scale-105 transition-all duration-300 transform-gpu font-body text-center"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="border-2 border-accent text-accent px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body text-center"
          >
            Get In Touch
          </Link>
        </div>
      </Hero>
      {/* About Us Section - Modern Split Layout */}

      <section className="py-20 bg-neutral-900 relative overflow-hidden pattern-dots-small">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          <motion.div
            className="relative flex justify-center items-center min-h-[280px] sm:min-h-[320px] p-4 sm:p-6 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-16 sm:w-24 h-16 sm:h-24 bg-secondary rounded-xl z-0 shadow-lg"></div>
            <img
              src={home1}
              alt="About Us - Innovation and Digital Solutions"
              className="relative z-10 rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-lg object-cover hover:scale-105 transition-transform duration-500"
              style={{ aspectRatio: '4/3' }}
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-12 sm:w-16 h-12 sm:h-16 bg-secondary-dark rounded-xl z-0 shadow-lg"></div>
          </motion.div>
          <motion.div
            className="pl-0 md:pl-8 order-1 md:order-2" // This padding remains for desktop layout
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-secondary font-bold uppercase tracking-wider text-xs sm:text-sm font-body">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading leading-tight">
              Best Tech Solutions & Digital Services Since{' '}
              <span className="text-secondary">2023</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 opacity-90 mb-6 sm:mb-8 max-w-xl font-body">
              We deliver innovative, reliable, and scalable technology solutions
              for businesses of all sizes. Our team combines deep expertise,
              modern tools, and a passion for client success.
            </p>
            <AboutFeaturesList features={aboutFeatures} />
            <Link
              to="/about"
              className="inline-block bg-secondary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-glow-md hover:bg-secondary-light transition-all duration-300 transform hover:scale-105 font-body text-sm sm:text-base"
            >
              Our Company
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Why Choose Us Section */}

      <section className="py-20 bg-primary relative overflow-hidden pattern-grid-fine">
        {/* Standardized container padding: px-4 sm:px-6 lg:px-8 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center relative z-10">
          <motion.div
            className="pr-0 md:pr-8 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mb-4 sm:mb-6">
              <span className="text-secondary font-bold uppercase tracking-wider text-xs sm:text-sm font-body">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading leading-tight">
                We Provide the{' '}
                <span className="text-secondary">Best Solutions</span> for Our
                Clients
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 opacity-90 mb-6 sm:mb-8 max-w-xl font-body">
                Our team delivers exceptional results with a focus on
                experience, expertise, and value. We combine top talent, modern
                technology, and a client-first approach to help you succeed.
              </p>
            </div>
            <WhyChooseUsProgress points={whyChooseUsPoints} />
          </motion.div>
          <motion.div
            className="relative flex justify-center items-center min-h-[280px] sm:min-h-[320px] p-4 sm:p-6 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-16 sm:w-24 h-16 sm:h-24 bg-secondary rounded-xl z-0 shadow-lg"></div>
            <img
              src={home2}
              alt="Team Collaboration and Expertise"
              className="relative z-10 rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-lg object-cover hover:scale-105 transition-transform duration-500"
              style={{ aspectRatio: '4/3' }}
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-12 sm:w-16 h-12 sm:h-16 bg-secondary-dark rounded-xl z-0 shadow-lg"></div>
          </motion.div>
        </div>
      </section>
      {/* Partners and Statistics Section */}

      <section className="py-20 bg-neutral-900 relative overflow-hidden pattern-diagonal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading">
              Our Trusted <span className="text-secondary">Partners</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-sm sm:text-lg text-neutral-300 font-body max-w-2xl mx-auto">
              Collaborating with industry leaders to bring you the best
              solutions.
            </p>
          </motion.div>

          <PartnersGrid partners={partnersData} />

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <StatsGrid stats={statsData} />
          </motion.div>
        </div>
      </section>
      {/* Featured Services (ServiceCard instances) */}
      {featuredServices.map((service, index) => (
        <ServiceDetailCard
          key={index}
          title={service.title}
          description={service.description}
          features={service.features}
          image={service.image}
          number={service.number}
          link={service.link}
          bgColor={service.bgColor}
          reverse={service.reverse}
        />
      ))}
      {/* Client Reviews Section */}

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
            {clientReviews.map((t, idx) => (
              <motion.div
                key={t.name}
                className="bg-neutral-800 rounded-xl p-6 sm:p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative max-w-[370px] mx-auto hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 pattern-dots-small"
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
      {/* FAQ Section */}

      <section
        className="py-20 bg-neutral-900 relative overflow-hidden pattern-minimal"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading tracking-wide uppercase">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
            <p className="text-neutral-300 font-body max-w-2xl mx-auto">
              Find quick answers to common questions about our services and
              approach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {faqs.map((faq, idx) => (
              <motion.div
                key={faq.question}
                className="bg-neutral-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-accent text-neutral-300 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 pattern-minimal"
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
      {/* Call to Action Section */}
      <section
        className="py-20 bg-gradient-to-br from-primary via-neutral-900 to-accent text-center relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 font-heading">
              Ready to Transform Your{' '}
              <span className="text-secondary">Business</span>?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 mb-8 sm:mb-10 max-w-2xl mx-auto font-body opacity-90">
              Let's collaborate to bring your vision to life with cutting-edge
              technology solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-secondary text-primary px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg shadow-glow-md hover:scale-105 transition-all duration-300 font-body hover:bg-secondary-light"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-accent text-accent px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 font-body"
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

export default Home;
