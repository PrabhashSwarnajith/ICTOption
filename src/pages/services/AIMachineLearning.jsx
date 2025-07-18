import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components';
import { motion } from 'framer-motion';
import ml1 from '../../assets/img/ml1.jpg';
import ml2 from '../../assets/img/ml2.jpg';

// --- Data Definitions for easier management ---

const whyChooseUsPoints = [
  {
    title: 'Proven AI Experts',
    description:
      'Our team includes PhDs and certified AI engineers with years of hands-on experience in cutting-edge AI and ML technologies.',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'End-to-End Solutions',
    description:
      'We handle everything from AI strategy and data engineering to model development, deployment, and ongoing optimization and support.',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
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
    title: 'Cutting-Edge Technology',
    description:
      'We utilize the latest AI/ML frameworks, tools, and cloud platforms (AWS, Azure, GCP) to build scalable, high-performance, and future-proof solutions.',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM12 4v16"
        />
      </svg>
    ),
  },
  {
    title: 'Business-Focused ROI',
    description:
      'Our primary focus is on delivering tangible business value, measurable ROI, and seamless integration of AI solutions into your existing operations.',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V3a1 1 0 00-1-1H9a1 1 0 00-1 1v5m4 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: '1. Discovery & Strategy',
    description:
      'We begin by thoroughly understanding your business objectives, current challenges, available data, and identifying high-impact AI opportunities.',
  },
  {
    step: '2. Data Engineering & Preparation',
    description:
      "Our team collects, cleans, transforms, and prepares your data, ensuring it's ready for robust AI model training and deployment.",
  },
  {
    step: '3. Model Development & Training',
    description:
      'We design, build, and rigorously train custom AI/ML models tailored to your specific use cases, iteratively refining for optimal performance.',
  },
  {
    step: '4. Deployment & Integration',
    description:
      'Your AI solution is seamlessly integrated into your existing systems and infrastructure, ensuring smooth operation and minimal disruption.',
  },
  {
    step: '5. Monitoring & Optimization',
    description:
      'We provide continuous monitoring of model performance, ongoing optimization, and support to ensure long-term value and adaptability.',
  },
];

const successStories = [
  {
    title: 'Retail: Personalized Shopping',
    description:
      'Implemented a cutting-edge recommendation engine for a leading e-commerce client, resulting in a **25% increase in conversion rates** and higher average order value.',
    image:
      'https://images.unsplash.com/photo-1542838117-268846c435bb?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Healthcare: Faster Diagnoses',
    description:
      'Developed and deployed a computer vision model for medical imaging analysis, which **reduced diagnosis time by 40%** and improved early detection rates for a healthcare provider.',
    image:
      'https://images.unsplash.com/photo-1576091160550-fd428e56729a?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Finance: Advanced Fraud Detection',
    description:
      'Built a real-time, AI-powered fraud detection system for a major financial institution, leading to a **reduction in fraudulent transactions by millions** annually.',
    image:
      'https://images.unsplash.com/photo-1563986768605-da4d148e7a17?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Manufacturing: Predictive Maintenance',
    description:
      'Implemented an ML-driven predictive maintenance solution for a manufacturing giant, **reducing equipment downtime by 30%** and saving significant operational costs.',
    image:
      'https://images.unsplash.com/photo-1506748687786-8a0339d675b3?auto=format&fit=crop&w=600&q=80',
  },
];

const emergingApplications = [
  {
    title: 'Generative AI Solutions',
    description:
      'Leverage AI to create new content, design, code, and more, unleashing unprecedented levels of creativity and automation.',
    icon: (
      <svg
        className="w-8 h-8 text-accent"
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
    imageUrl:
      'https://images.unsplash.com/photo-1698243685375-38d58c65d64b?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'AI-Powered Automation',
    description:
      'Automate complex tasks and decision-making across your business processes, improving efficiency and reducing manual errors.',
    icon: (
      <svg
        className="w-8 h-8 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1620712948383-f3680e0c1f21?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Ethical AI & Governance',
    description:
      'Ensure your AI systems are fair, transparent, and accountable, adhering to ethical guidelines and regulatory compliance.',
    icon: (
      <svg
        className="w-8 h-8 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.055 0 0112 2.944a11.955 11.055 0 01-8.618 3.04A12.001 12.001 0 002 12c0 2.404.75 4.631 2.05 6.404L3 22l5.4-1.296C10.632 21.6 13.013 22 15 22h.024c2.81 0 5.432-.698 7.076-1.928.006-.002.01-.005.016-.007-.002-.006-.005-.01-.007-.016C21.698 17.432 22 14.81 22 12a12.001 12.001 0 00-4.382-8.016z"
        />
      </svg>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1582213782179-e0d5337b5880?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'AI in Edge Computing',
    description:
      'Deploy AI models closer to data sources (edge devices) for real-time insights, reduced latency, and enhanced privacy.',
    icon: (
      <svg
        className="w-8 h-8 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1549692520-acc6669e2fde?auto=format&fit=crop&w=400&q=80',
  },
];

const industriesServed = [
  'Healthcare & Pharma',
  'Finance & Banking',
  'Retail & E-commerce',
  'Manufacturing & Logistics',
  'Energy & Utilities',
  'Automotive',
  'Media & Entertainment',
  'Telecommunications',
  'Government & Public Sector',
  'Education',
];

const keySolutions = [
  {
    title: 'Predictive Analytics',
    description:
      'Forecast future trends and behaviors to make data-driven decisions and anticipate market shifts.',
    icon: (
      <svg
        className="w-10 h-10 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: 'Natural Language Processing (NLP)',
    description:
      'Process and understand human language to extract insights from text, power chatbots, and analyze sentiment.',
    icon: (
      <svg
        className="w-10 h-10 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    ),
  },
  {
    title: 'Computer Vision',
    description:
      'Enable machines to "see" and interpret visual data for tasks like object recognition, facial detection, and quality control.',
    icon: (
      <svg
        className="w-10 h-10 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.055 0 0112 2.944a11.955 11.055 0 01-8.618 3.04A12.001 12.001 0 002 12c0 2.404.75 4.631 2.05 6.404L3 22l5.4-1.296C10.632 21.6 13.013 22 15 22h.024c2.81 0 5.432-.698 7.076-1.928.006-.002.01-.005.016-.007-.002-.006-.005-.01-.007-.016C21.698 17.432 22 14.81 22 12a12.001 12.001 0 00-4.382-8.016z"
        />
      </svg>
    ),
  },
  {
    title: 'Reinforcement Learning',
    description:
      'Develop intelligent agents that learn optimal strategies through trial and error in complex environments.',
    icon: (
      <svg
        className="w-10 h-10 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l4-4 4 4m0 6l-4 4-4-4"
        />
      </svg>
    ),
  },
];

// --- AIMachineLearning Component ---

const AIMachineLearning = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-secondary">
            AI & <span className="text-accent">Machine Learning</span>
          </span>
        }
        subtitle={
          <span className="text-white">
            Unlock Unprecedented{' '}
            <span className="text-accent">Business Value</span> with AI
          </span>
        }
        description={
          <span className="text-gray-200">
            Harness the transformative power of artificial intelligence and
            machine learning to **automate processes, gain deeper insights, and
            drive innovation** across your enterprise. We turn complex data into
            intelligent action.
          </span>
        }
        backgroundImage={ml1}
        gradient="from-primary via-neutral-dark to-neutral-dark"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <Link
            to="/contact"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-glow-md hover:bg-primary hover:text-secondary hover:scale-105 transition-all duration-300 transform-gpu"
          >
            Explore AI Solutions
          </Link>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300 transform-gpu"
          >
            All Services
          </Link>
        </div>
      </Hero>
      ---
      {/* Introduction to AI/ML */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(25deg) scale(1.5)',
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
              src={ml2}
              alt="The Future of AI"
              className="relative z-10 rounded-2xl shadow-2xl w-full max-w-lg object-cover border-4 border-secondary/30 transition-all duration-500 hover:scale-[1.02]"
              style={{ aspectRatio: '4/3' }}
            />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent rounded-full opacity-30 animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-secondary rounded-full opacity-20 animate-spin-slow"></div>
          </motion.div>

          <motion.div
            className="pl-0 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <span className="text-accent font-bold uppercase tracking-wider text-sm">
              The AI Revolution is Here
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4 font-heading leading-tight">
              Transforming Data into Intelligent Action
            </h2>
            <p className="text-gray-300 opacity-90 mb-8 max-w-xl text-lg">
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
              className="inline-block bg-accent text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:bg-primary hover:text-accent transition-all duration-300"
            >
              Get Your AI Roadmap
            </Link>
          </motion.div>
        </div>
      </section>
      ---
      {/* Key AI/ML Solutions */}
      <section className="py-20 bg-neutral-dark">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              Our Key AI & Machine Learning Solutions
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto mt-4">
              We offer a comprehensive suite of AI/ML services designed to
              tackle your unique business challenges and unlock new
              opportunities.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keySolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-primary p-6 rounded-xl shadow-lg border border-secondary/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 shadow-md">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3 font-heading">
                  {solution.title}
                </h3>
                <p className="text-gray-300 font-body text-base leading-relaxed opacity-90">
                  {solution.description}
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
            <h2 className="text-4xl font-bold text-secondary mb-4 font-heading">
              Why Partner with ICT Option for AI & ML?
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto mt-4">
              We stand out through our deep technical prowess, strategic
              approach, and commitment to tangible business outcomes.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <motion.div
                key={point.title}
                className="bg-neutral-dark p-6 rounded-xl text-center shadow-lg border border-accent/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4 text-secondary">
                  {point.icon}
                </div>
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
      {/* Our AI/ML Process Section */}
      <section className="py-20 bg-accent/10 relative overflow-hidden">
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
              Our Data-Driven AI/ML Development Process
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
            <p className="text-lg text-primary font-body max-w-2xl mx-auto mt-4 opacity-90">
              We follow a robust, iterative methodology to ensure successful AI
              project delivery from concept to deployment and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl text-primary shadow-lg border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-md">
                  {index + 1}
                </div>
                <h3 className="font-bold text-secondary text-lg mb-2 font-heading">
                  {item.step}
                </h3>
                <p className="text-base text-gray-700 opacity-90 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
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
              Transforming Businesses: Our AI Success Stories
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto mt-4">
              Explore real-world examples of how our AI and Machine Learning
              solutions have delivered measurable impact for our clients.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-primary p-6 rounded-xl text-white shadow-lg border-t-4 border-secondary flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-40 object-cover rounded-md mb-4 border border-white/10"
                />
                <h3 className="font-bold text-accent text-xl mb-3 font-heading">
                  {story.title}
                </h3>
                <p className="text-base leading-relaxed opacity-90 flex-grow">
                  {story.description}
                </p>
                <div className="mt-4 text-right text-sm italic opacity-80">
                  — Client Success
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Emerging AI Applications Section */}
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
              Explore the Frontier: Emerging AI Applications
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto mt-4">
              Stay ahead of the curve. We specialize in cutting-edge AI
              innovations transforming industries today and tomorrow.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergingApplications.map((app, index) => (
              <motion.div
                key={index}
                className="bg-neutral-dark p-6 rounded-xl shadow-lg border border-accent/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 border-2 border-secondary/50">
                  {app.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2 font-heading">
                  {app.title}
                </h3>
                <p className="text-gray-300 font-body text-base leading-relaxed opacity-90">
                  {app.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Industries We Serve */}
      <section className="py-20 bg-neutral-light">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4 font-heading">
              Empowering Innovation Across Diverse Industries
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
            <p className="text-lg text-primary font-body max-w-2xl mx-auto mt-4">
              Our AI and Machine Learning solutions are tailored to deliver
              significant impact across a broad spectrum of sectors.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {industriesServed.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white text-primary px-6 py-3 rounded-full text-lg font-medium shadow-md border border-primary/20 cursor-default transition-all duration-300 hover:bg-accent hover:text-white hover:scale-105"
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-primary mb-10 max-w-2xl mx-auto opacity-90">
              Let's discuss how tailored AI and Machine Learning solutions can
              drive your next wave of growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-secondary px-10 py-4 rounded-full font-semibold text-lg shadow-glow-secondary hover:scale-105 transition-all duration-300"
              >
                Get a Free AI Consultation
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-primary text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-secondary transition-all duration-300"
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
