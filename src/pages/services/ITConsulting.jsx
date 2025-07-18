import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components';
import { motion } from 'framer-motion';

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
  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Hero Section - Home Style, IT Consulting Details */}
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
          <span className="text-gray-200 font-body">
            Navigate the complexities of the digital landscape with expert IT
            consulting. We align technology with your business goals, driving
            innovation and sustainable growth.
          </span>
        }
        backgroundImage={it1} // Image: IT consulting team meeting
        gradient="from-primary via-black to-neutral-dark"
        className="brightness-110"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <Link
            to="/services"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-glow-md hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Get In Touch
          </Link>
        </div>
      </Hero>
      ---
      {/* Introduction to IT Consulting */}
      <section className="py-20 bg-neutral-dark relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(15deg) scale(1.2)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            className="relative flex justify-center items-center min-h-[350px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={it2} // Image: diverse team collaborating
              alt="Strategic IT Planning"
              className="relative z-10 rounded-2xl shadow-2xl w-full max-w-lg object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105"
              style={{ aspectRatio: '4/3' }}
            />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary rounded-full opacity-30 animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-accent rounded-full opacity-20 animate-spin-slow"></div>
          </motion.div>

          <motion.div
            className="pl-0 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Your Partner in Innovation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading leading-tight">
              Transforming Challenges into Opportunities
            </h2>
            <p className="text-gray-200 opacity-90 mb-8 max-w-xl text-lg">
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
              className="inline-block bg-secondary text-accent px-8 py-4 rounded-full font-bold shadow-glow hover:bg-accent hover:text-primary transition-all duration-300"
            >
              Start Your Transformation
            </Link>
          </motion.div>
        </div>
      </section>
      ---
      {/* Core IT Consulting Services */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-4 font-heading">
              Our Core IT Consulting Services
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto mt-4">
              We offer a comprehensive suite of consulting services designed to
              address your most pressing technology needs.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-neutral-dark p-6 rounded-lg shadow-lg border border-white/10 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-4 shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-accent mb-3 font-heading">
                  {service.title}
                </h3>
                <p className="text-gray-300 font-body text-base leading-relaxed opacity-90">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              Why Partner with ICT Option for IT Consulting?
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto mt-4">
              We bring unparalleled experience, fresh perspectives, and a
              commitment to your long-term success.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <motion.div
                key={point.title}
                className="bg-neutral-dark p-6 rounded-lg text-center shadow-lg border border-white/10 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4 text-secondary">{point.icon}</div>{' '}
                {/* Icon placeholder */}
                <h3 className="font-bold text-accent text-xl mb-2 font-heading">
                  {point.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed opacity-90">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Our Consulting Process */}
      <section className="py-20 bg-accent/20 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%239C92AC' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4 font-heading">
              Our Proven IT Consulting Process
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
            <p className="text-lg text-primary font-body max-w-2xl mx-auto mt-4 opacity-90">
              We follow a structured yet flexible approach to ensure maximum
              value and clear outcomes for every engagement.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.img
              src={it3} // Image: people discussing business strategy
              alt="IT Consulting Process"
              className="w-full max-w-lg rounded-2xl shadow-xl mb-8 md:mb-0 object-cover border-4 border-primary transition-transform duration-500 hover:scale-[1.02]"
              style={{ aspectRatio: '1.5/1' }}
              initial={{ opacity: 0, rotateY: 10 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            />
            <ul className="space-y-6 text-left max-w-xl mx-auto">
              {consultingProcess.map((item, index) => (
                <motion.li
                  key={index}
                  className="bg-white p-6 rounded-xl text-primary shadow-md border border-gray-100 flex items-start gap-4 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-secondary text-primary rounded-full font-bold text-lg shadow-md">
                    {index + 1}
                  </span>
                  <div>
                    <span className="font-bold text-secondary text-lg">
                      {item.step}:
                    </span>{' '}
                    <p className="text-base text-gray-700 opacity-90 leading-relaxed">
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
      <section className="py-20 bg-neutral-dark">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-4 font-heading">
              Driving Results: Our Client Successes
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto mt-4">
              See how our strategic IT consulting has empowered businesses to
              achieve significant operational and financial improvements.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {clientSuccessStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-primary p-6 rounded-xl text-white shadow-lg border-t-4 border-secondary flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-secondary text-sm font-semibold mb-2">
                  {story.industry}
                </div>
                <h3 className="font-bold text-accent text-xl mb-3 font-heading">
                  {story.title}
                </h3>
                <p className="text-base leading-relaxed opacity-90 flex-grow">
                  {story.description}
                </p>
                <div className="mt-4 text-right text-sm italic opacity-80">
                  — A Valued Partner
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Industries We Serve */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='2' fill='%239C92AC' fill-opacity='0.15'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              Empowering Businesses Across Industries
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto mt-4">
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
                className="bg-neutral-dark text-accent px-6 py-3 rounded-full text-lg font-medium shadow-md border border-white/10 cursor-default transition-all duration-300 hover:bg-secondary hover:text-primary hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* FAQ Section */}
      <section className="py-20 bg-neutral-dark">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto mt-4">
              Find quick answers to common questions about our IT consulting
              services.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-primary rounded-lg p-6 shadow-md border border-white/10 transition-shadow duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-accent mb-2 text-xl cursor-pointer">
                  {faq.question}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6 drop-shadow-md">
              Ready to Innovate? Let's Talk IT Strategy.
            </h2>
            <p className="text-xl text-primary mb-10 max-w-2xl mx-auto opacity-90">
              Unlock your business's full potential with tailored IT guidance.
              Schedule a consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-secondary px-10 py-4 rounded-full font-semibold text-lg shadow-glow-secondary hover:scale-105 transition-all duration-300"
              >
                Schedule Your Free Consultation
              </Link>
              <Link
                to="/about-us"
                className="border-2 border-primary text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-secondary transition-all duration-300"
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
