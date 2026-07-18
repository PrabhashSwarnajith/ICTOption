import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../utils/seoUtils';
import {
  Hero,
  ProductCard,
  PricingPlanCard,
  TestimonialCard,
  FAQCard,
} from '../components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { containerVariants, itemVariants } from '../utils/animationVariants';

import product from '../assets/img/product.webp';

import ps from '../assets/team/p1.webp';

import {
  products,
  pricingPlans,
  testimonials,
  faqs,
} from '../data/productsData';

const Products = () => {
  useEffect(() => {
    setPageMeta(
      'Products | Innovative Solutions for Modern Businesses',
      "Discover ICT Option's innovative products designed to accelerate business growth and streamline operations with cutting-edge technology solutions.",
      'products, innovative solutions, business software, digital tools, technology solutions, enterprise products',
      '/products'
    );
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white font-body">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent font-heading">
            Our <span className="text-secondary">Products</span>
          </span>
        }
        subtitle={
          <span className="text-accent font-heading">
            Innovative Solutions for{' '}
            <span className="text-secondary">Modern Businesses</span>
          </span>
        }
        description={
          <span className="text-neutral-300 font-body">
            Discover powerful, innovative solutions designed to accelerate your
            business growth and streamline operations with cutting-edge
            technology.
          </span>
        }
        backgroundImage={product}
        gradient="from-primary via-black/80 to-neutral-900"
        className="brightness-110"
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-6 sm:mt-8 animate-float">
          <Link
            to="/contact"
            className="bg-secondary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg shadow-lg hover:bg-secondary-light hover:scale-105 transition-all duration-300 transform-gpu font-body text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get Started
          </Link>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore Services
          </Link>
        </div>
      </Hero>

      {/* Main Products Section */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden pattern-grid-fine">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Left: Text Content */}
            <div className="flex-1 max-w-xl" data-aos="fade-right">
              <span className="text-secondary font-bold uppercase tracking-wider text-xs sm:text-sm mb-4 block font-body">
                We Excel At
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-accent mb-6 font-heading leading-tight">
                Entrust Your Vision
                <br />
                <span className="text-secondary">to Our Experts</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 mb-6 sm:mb-8 font-body leading-relaxed">
                We are a boutique digital transformation consultancy and
                development company. Since 2021, our team has delivered
                enterprise-grade projects for global brands, providing
                cutting-edge engineering solutions tailored to your needs.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-secondary text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-base shadow-lg hover:scale-105 transition-all duration-300 w-fit hover:bg-secondary-light hover:text-primary font-body"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <span>Our Approach</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 sm:w-5 h-4 sm:h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                  />
                </svg>
              </Link>
            </div>
            {/* Right: Image */}
            <div
              className="flex-1 flex justify-center order-first md:order-last"
              data-aos="fade-left"
            >
              <div className="relative max-w-xs sm:max-w-sm md:max-w-md">
                <img
                  src={ps}
                  alt="Project Specialist"
                  className="rounded-2xl object-cover w-full shadow-2xl border-4 border-secondary hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/5' }}
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 sm:p-8 rounded-b-2xl text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-secondary mb-1 font-heading">
                    Mohamed Asfak
                  </h3>
                  <p className="text-accent text-sm sm:text-base font-semibold mb-2 font-body">
                    Senior Software Engineer
                  </p>
                  <p className="text-neutral-300 text-xs sm:text-sm font-body">
                    Expert in software engineering and digital solutions with 3+
                    years of experience
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Feature Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-12 sm:mt-16 lg:mt-20">
            <div
              className="bg-neutral-800 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col items-start border border-neutral-700 min-h-[220px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 pattern-grid-fine"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <h3 className="text-lg sm:text-xl font-bold text-accent mb-4 font-heading uppercase">
                Cross-Industry Expertise
              </h3>
              <p className="text-neutral-300 text-base mb-4 font-body">
                {' '}
                {/* Adjusted text color */}
                Our solutions span multiple industries, delivering tailored
                innovation for any business sector.
              </p>
            </div>
            <div
              className="bg-neutral-800 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col items-start border border-neutral-700 min-h-[220px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 pattern-grid-fine"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-lg sm:text-xl font-bold text-accent mb-4 font-heading uppercase">
                Expert-Led Innovation
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base mb-4 font-body">
                Our leadership combines deep technical and business expertise to
                drive project success.
              </p>
            </div>
            <div
              className="bg-secondary rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col items-start border-2 border-secondary min-h-[220px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-primary text-lg sm:text-xl font-bold mb-4 font-heading uppercase">
                Tailored IT Solutions
              </h3>
              <p className="text-primary text-sm sm:text-base mb-4 font-body">
                We deliver technology and expertise customized to your
                business’s unique needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        className="py-20 bg-primary relative overflow-hidden pattern-grid-fine"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              Our Products
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>
            <p className="text-neutral-300 font-body max-w-2xl mx-auto">
              Innovative products designed to accelerate your business growth
              and streamline operations.
            </p>
          </div>
          <motion.div
            className="grid md:grid-cols-2 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {products.map((product, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <ProductCard product={product} aosDelay={idx * 150} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section (Now Dynamic) */}
      <section
        className="py-20 bg-neutral-900 relative overflow-hidden pattern-grid-fine"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              Our Pricing
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>
            <p className="text-neutral-300 font-body max-w-2xl mx-auto">
              Select a plan tailored to your business. All plans include full
              support and seamless onboarding.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {/* Introductory Pricing Card */}
            <div
              className="flex flex-col justify-between bg-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-700 hover:shadow-2xl hover:border-accent hover:scale-[1.02] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <span className="text-secondary font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 block font-body">
                  Why Choose Us
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-accent mb-4 font-heading uppercase tracking-wide">
                  Flexible Plans for Your Needs
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base mb-6 font-body">
                  Select a plan tailored to your business. All plans include
                  full support and seamless onboarding.
                </p>
                <ul className="text-neutral-300 text-xs sm:text-sm space-y-2 pl-4 list-disc font-body">
                  <li>Flexible monthly or annual billing</li>
                  <li>No hidden fees, fully transparent</li>
                  <li>Upgrade or downgrade anytime</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="mt-6 sm:mt-8 bg-secondary text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm tracking-widest uppercase shadow-lg hover:scale-105 transition-all duration-300 w-fit hover:bg-secondary-light hover:text-primary font-body text-center"
              >
                View All Plans
              </Link>
            </div>
            {/* Dynamic Pricing Plans */}
            {pricingPlans.map((plan, idx) => (
              <PricingPlanCard
                key={idx}
                plan={plan}
                aosDelay={300 + idx * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (Now Dynamic) */}
      <section
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
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
                className="bg-neutral-800 rounded-xl p-6 sm:p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative max-w-[370px] mx-auto hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 pattern-minimal"
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
                  <svg className="ml-auto w-8 h-8 text-secondary opacity-60 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (Now Dynamic) */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden pattern-minimal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading tracking-wide uppercase">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
            <p className="text-neutral-300 font-body max-w-2xl mx-auto">
              Find answers to common questions about our products and services.
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
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-neutral-900 via-primary to-neutral-900 text-center relative overflow-hidden pattern-radial"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Subtle background pattern: Wavy Lines */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm40 0h20v20H40V0zm80 0h20v20H80V0zm0 40h20v20h-20V40zm-40 0h20v20h-20V40zm-40 0h20v20H0V40zm80 80h20v20h-20V80zm-40 0h20v20h-20V80zm-40 0h20v20H0V80z' fill='%23374151' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(25deg) scale(1.2)',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-4 sm:mb-6 font-heading tracking-wide uppercase">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-300 mb-6 sm:mb-8 max-w-2xl mx-auto font-body">
            Explore our cutting-edge products and find the perfect solution to
            streamline your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-secondary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base font-body shadow-lg hover:bg-secondary-light hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu text-center"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              Request a Demo
            </Link>
            <Link
              to="/contact"
              className="border-2 border-accent text-accent px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base font-body hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
