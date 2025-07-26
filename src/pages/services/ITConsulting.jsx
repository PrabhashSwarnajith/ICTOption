import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import it1 from '../../assets/img/it1.jpg';
import it2 from '../../assets/img/it2.jpg';
import it3 from '../../assets/img/it3.jpg';

// --- Data Definitions for easier management ---

const coreServices = [
  {
    title: 'Technology Strategy & Roadmapping',
    description:
      'Develop comprehensive IT strategies and detailed roadmaps that align technology initiatives directly with your overarching business objectives.',
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: 'Cloud Consulting & Migration',
    description:
      'Strategize and execute seamless transitions to cloud platforms (AWS, Azure, GCP), optimizing for scalability, cost-efficiency, and performance.',
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2h-1m-4-6v-2m-4 2v-2m-3 6h7M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m18 0a2 2 0 00-2-2H5a2 2 0 00-2 2m18 0H3"
        />
      </svg>
    ),
  },
  {
    title: 'Digital Transformation',
    description:
      'Guide your organization through comprehensive digital change, integrating new technologies to revolutionize operations and customer experiences.',
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Cybersecurity Advisory',
    description:
      'Assess, plan, and implement robust cybersecurity frameworks and best practices to protect your critical assets and ensure data integrity.',
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v3h8z"
        />
      </svg>
    ),
  },
  {
    title: 'IT Infrastructure Optimization',
    description:
      'Evaluate and enhance your existing IT infrastructure for peak performance, reliability, and cost-effectiveness.',
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10m0 0h6m-6 0L9 14m-3 0h6m-6 0L9 10m-3 0h6m-6 0L9 6m-3 0h6m0-2a2 2 0 012-2h2a2 2 0 012 2v16a2 2 0 01-2 2h-2a2 2 0 01-2-2V4z"
        />
      </svg>
    ),
  },
  {
    title: 'Data & Analytics Strategy',
    description:
      'Develop strategies to leverage your data effectively, enabling informed decision-making and unlocking new business opportunities through analytics.',
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 12l3-3 3 3 4-4M18 10h4M4 18H2M11 15V6a2 2 0 012-2h2a2 2 0 012 2v11a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

const whyChooseUsPoints = [
  {
    title: 'Unbiased Expertise',
    description:
      'We provide objective, vendor-agnostic advice, ensuring solutions truly fit your needs, not a sales quota.',
    icon: '💡',
  },
  {
    title: 'Strategic Alignment',
    description:
      'Our recommendations always link directly to your business goals, ensuring technology serves your vision.',
    icon: '🎯',
  },
  {
    title: 'Proven Methodologies',
    description:
      'We use industry-best practices and frameworks to deliver consistent, measurable results.',
    icon: '✅',
  },
  {
    title: 'Future-Proof Solutions',
    description:
      'We design IT architectures and strategies that scale and adapt to future technological advancements.',
    icon: '🚀',
  },
];

const consultingProcess = [
  {
    step: '1. Discover & Assess',
    description:
      'In-depth analysis of your current IT landscape, business objectives, challenges, and opportunities.',
    icon: '🔍',
  },
  {
    step: '2. Strategize & Plan',
    description:
      'Collaborative development of a tailored IT strategy, detailed roadmap, and actionable implementation plan.',
    icon: '🗺️',
  },
  {
    step: '3. Design & Implement',
    description:
      'Architecting solutions, overseeing technology deployment, and ensuring seamless integration.',
    icon: '🏗️',
  },
  {
    step: '4. Optimize & Support',
    description:
      'Continuous monitoring, performance optimization, and ongoing support to ensure long-term success.',
    icon: '📈',
  },
];

const clientSuccessStories = [
  {
    title: 'Streamlined Operations for a Manufacturing Giant',
    description:
      'Implemented a new ERP system and integrated cloud solutions, reducing operational costs by 20% and improving supply chain efficiency.',
    industry: 'Manufacturing',
  },
  {
    title: 'Accelerated Digital Transformation for Retailer',
    description:
      'Developed a comprehensive digital strategy, leading to a 30% increase in online sales and enhanced customer engagement through new platforms.',
    industry: 'Retail & E-commerce',
  },
  {
    title: 'Optimized Cloud Infrastructure for SaaS Startup',
    description:
      'Migrated legacy systems to a highly scalable and cost-effective cloud environment, improving application performance by 40% and reducing infrastructure spend.',
    industry: 'Technology & SaaS',
  },
];

const faqs = [
  {
    question: 'What types of businesses do you consult for?',
    answer:
      'We consult for businesses of all sizes, from startups to large enterprises, across various industries including finance, healthcare, manufacturing, retail, and technology.',
  },
  {
    question: 'How long does a typical consulting engagement last?',
    answer:
      'Engagement length varies depending on scope, from a few weeks for specific assessments to several months for comprehensive digital transformation projects. We tailor our approach to your needs.',
  },
  {
    question: 'What makes your IT consulting approach unique?',
    answer:
      "Our uniqueness lies in our **vendor-agnostic approach**, deep understanding of diverse industries, and a focus on **measurable ROI**. We don't just recommend; we partner with you for implementation and success.",
  },
  {
    question: 'Can you help us with legacy system modernization?',
    answer:
      'Absolutely. We specialize in helping businesses modernize outdated legacy systems, migrating data, refactoring applications, and integrating new, more efficient technologies to improve performance and reduce technical debt.',
  },
];

// --- ITConsulting Component ---

const ITConsulting = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white font-body">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent font-heading">
            IT <span className="text-secondary">Consulting</span>
          </span>
        }
        subtitle={
          <span className="text-accent font-heading">
            Strategic{' '}
            <span className="text-secondary">Technology Guidance</span>
          </span>
        }
        description={
          <span className="text-neutral-300 font-body">
            Navigate the complexities of the digital landscape with expert IT
            consulting. We align technology with your business goals, driving
            innovation and sustainable growth.
          </span>
        }
        backgroundImage={it1} // Image: IT consulting team meeting
        gradient="from-primary via-black/80 to-neutral-900"
        className="brightness-110"
      >
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
      ---
      {/* Introduction to IT Consulting */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {/* Subtle background pattern: circuit board */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 0L0 100H50L100 50V0zM0 0L100 100V50L50 0H0z' fill='%239C92AC' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(15deg) scale(1.2)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            className="relative flex justify-center items-center min-h-[350px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src={it2} // Image: diverse team collaborating
              alt="Strategic IT Planning"
              className="relative z-10 rounded-2xl shadow-xl w-full max-w-lg object-cover transition-all duration-500 hover:scale-105 border border-neutral-700"
              style={{ aspectRatio: '4/3' }}
            />
            <div className="absolute -top-6 -left-6 w-36 h-36 bg-secondary rounded-full mix-blend-screen opacity-20 animate-spin-slow"></div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-accent rounded-xl mix-blend-screen opacity-15 transform rotate-45"></div>
          </motion.div>

          <motion.div
            className="pl-0 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Your Partner in Innovation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading leading-tight tracking-wide uppercase">
              Transforming Challenges into Opportunities
            </h2>
            <p className="text-neutral-300 opacity-90 mb-8 max-w-xl text-lg font-body">
              In today's fast-paced business world, technology is no longer just
              a support function—it's a core driver of success. Our IT
              consulting services provide expert guidance to help your
              organization leverage technology effectively, **optimize
              operations**, and achieve your strategic objectives. We empower
              you to make informed decisions that drive growth and competitive
              advantage.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-secondary text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:bg-secondary-light hover:text-primary transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Start Your Transformation
            </Link>
          </motion.div>
        </div>
      </section>
      ---
      {/* Core IT Consulting Services */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Subtle background pattern: dots */}
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
              Our Core IT Consulting Services
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-lg text-neutral-300 font-body max-w-2xl mx-auto opacity-90">
              We offer a comprehensive suite of consulting services designed to
              address your most pressing technology needs.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 p-6 rounded-xl shadow-xl border border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.5 }}
                data-aos="fade-up"
                data-aos-delay={200 + index * 50}
              >
                <div className="w-14 h-14 bg-secondary text-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-accent mb-3 font-heading">
                  {service.title}
                </h3>
                <p className="text-neutral-300 font-body text-base leading-relaxed opacity-90">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Why Choose Us Section */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {/* Subtle background pattern: hexagonal grid */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0L40 20L20 40L0 20zM20 0L0 20L20 40L40 20L20 0z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(5deg) scale(1.1)',
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
              Why Partner with ICT Option for IT Consulting?
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-lg text-neutral-300 font-body max-w-2xl mx-auto opacity-90">
              We bring unparalleled experience, fresh perspectives, and a
              commitment to your long-term success.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <motion.div
                key={point.title}
                className="bg-neutral-800 p-6 rounded-xl text-center shadow-xl border border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                data-aos="fade-up"
                data-aos-delay={200 + index * 70}
              >
                <div className="text-5xl mb-4 text-secondary">{point.icon}</div>{' '}
                <h3 className="font-bold text-accent text-xl mb-2 font-heading">
                  {point.title}
                </h3>
                <p className="text-neutral-300 text-base leading-relaxed opacity-90">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Our Consulting Process */}
      <section className="py-20 bg-primary relative overflow-hidden">
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
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              Our Proven IT Consulting Process
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-lg text-neutral-300 font-body max-w-2xl mx-auto opacity-90">
              We follow a structured yet flexible approach to ensure maximum
              value and clear outcomes for every engagement.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.img
              src={it3} // Image: people discussing business strategy
              alt="IT Consulting Process"
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
              {consultingProcess.map((item, index) => (
                <motion.li
                  key={index}
                  className="bg-neutral-800 p-6 rounded-xl text-white shadow-xl border border-neutral-700 flex items-start gap-4 transition-all duration-300 hover:bg-neutral-700 hover:shadow-2xl"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true, amount: 0.5 }}
                  data-aos="fade-left"
                  data-aos-delay={300 + index * 80}
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-secondary text-primary rounded-full font-bold text-lg shadow-md">
                    {index + 1}
                  </span>
                  <div>
                    <span className="font-bold text-secondary text-lg font-heading">
                      {item.step}:
                    </span>{' '}
                    <p className="text-neutral-300 text-base opacity-90 leading-relaxed font-body">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      ---
      {/* Client Success Stories */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
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
              Driving Results: Our Client Successes
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-lg text-neutral-300 font-body max-w-2xl mx-auto opacity-90">
              See how our strategic IT consulting has empowered businesses to
              achieve significant operational and financial improvements.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {clientSuccessStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 p-6 rounded-xl text-white shadow-xl border-t-4 border-secondary flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                data-aos="fade-up"
                data-aos-delay={200 + index * 70}
              >
                <div className="text-secondary text-sm font-semibold mb-2 font-heading uppercase">
                  {story.industry}
                </div>
                <h3 className="font-bold text-accent text-xl mb-3 font-heading">
                  {story.title}
                </h3>
                <p className="text-neutral-300 text-base leading-relaxed opacity-90 flex-grow font-body">
                  {story.description}
                </p>
                <div className="mt-4 text-right text-sm italic opacity-80 text-neutral-400 font-body">
                  — A Valued Partner
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Industries We Serve */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Subtle background pattern: grid lines */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v10H0V0zm0 0h10v1H0V0z' fill='%239C92AC' fill-opacity='0.15'/%3E%3C/svg%3E")`,
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
              Empowering Businesses Across Industries
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-lg text-neutral-300 font-body max-w-2xl mx-auto opacity-90">
              Our IT consulting expertise is adaptable and valuable to a diverse
              range of sectors.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Finance & Banking',
              'Healthcare',
              'Manufacturing',
              'Retail & E-commerce',
              'Education',
              'Government',
              'Technology & SaaS',
              'Logistics',
              'Real Estate',
              'Non-profit',
            ].map((industry, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 text-accent px-6 py-3 rounded-full text-lg font-medium shadow-md border border-neutral-700 cursor-default transition-all duration-300 hover:bg-secondary hover:text-primary hover:scale-105"
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
      ---
      {/* FAQ Section */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {/* Subtle background pattern: dots */}
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
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-lg text-neutral-300 font-body max-w-2xl mx-auto opacity-90">
              Find quick answers to common questions about our IT consulting
              services.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 rounded-xl p-6 shadow-xl border border-neutral-700 transition-shadow duration-300 hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                data-aos="fade-up"
                data-aos-delay={200 + index * 70}
              >
                <h3 className="font-semibold text-secondary mb-2 text-xl cursor-pointer font-heading">
                  {faq.question}
                </h3>
                <p className="text-neutral-300 text-base leading-relaxed font-body opacity-90">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-neutral-900 to-secondary text-center relative overflow-hidden">
        {/* Subtle background pattern: circuit board */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 0L0 100H50L100 50V0zM0 0L100 100V50L50 0H0z' fill='%239C92AC' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(15deg) scale(1.2)',
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
              Ready to Innovate? Let's Talk IT Strategy.
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto font-body opacity-90">
              Unlock your business's full potential with tailored IT guidance.
              Schedule a consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-secondary text-primary px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-secondary-light hover:text-primary hover:scale-105 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                Schedule Your Free Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-accent text-accent px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                Meet Our Expert Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITConsulting;
