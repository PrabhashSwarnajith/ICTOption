import React, { useEffect } from 'react'; // Added useEffect for AOS
import { Link } from 'react-router-dom';
import { Hero } from '../../components';
import { motion } from 'framer-motion';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

import ml1 from '../../assets/img/ml1.jpg';
import ml2 from '../../assets/img/ml2.jpg';
import finance from '../../assets/img/finance.jpg';
import healthcare from '../../assets/img/health.jpg';
import retail from '../../assets/img/retail.jpg';
import manufacturing from '../../assets/img/manufacturing.jpg';

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
    image: retail,
  },
  {
    title: 'Healthcare: Faster Diagnoses',
    description:
      'Developed and deployed a computer vision model for medical imaging analysis, which **reduced diagnosis time by 40%** and improved early detection rates for a healthcare provider.',
    image: healthcare,
  },
  {
    title: 'Finance: Advanced Fraud Detection',
    description:
      'Built a real-time, AI-powered fraud detection system for a major financial institution, leading to a **reduction in fraudulent transactions by millions** annually.',
    image: finance,
  },
  {
    title: 'Manufacturing: Predictive Maintenance',
    description:
      'Implemented an ML-driven predictive maintenance solution for a manufacturing giant, **reducing equipment downtime by 30%** and saving significant operational costs.',
    image: manufacturing,
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
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 }); // Initialize AOS
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white font-body">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent  font-heading">
            {' '}
            {/* Added font-heading */}
            AI & <span className="text-secondary">Machine Learning</span>
          </span>
        }
        subtitle={
          <span className="text-white font-heading">
            {' '}
            {/* Added font-heading */}
            Unlock Unprecedented{' '}
            <span className="text-secondary">Business Value</span> with AI
          </span>
        }
        description={
          <span className="text-neutral-300 font-body">
            {' '}
            {/* Adjusted text color, added font-body */}
            Harness the transformative power of artificial intelligence and
            machine learning to **automate processes, gain deeper insights, and
            drive innovation** across your enterprise. We turn complex data into
            intelligent action.
          </span>
        }
        backgroundImage={ml1}
        gradient="from-primary via-black/80 to-neutral-900"
        className="brightness-110"
      >
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
            All Services
          </Link>
        </div>
      </Hero>
      ---
      {/* Introduction to AI/ML */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {' '}
        {/* Adjusted background for consistency */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Adjusted opacity for consistency
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(25deg) scale(1.5)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {' '}
          {/* Standardized padding */}
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
              src={ml2}
              alt="The Future of AI"
              className="relative z-10 rounded-2xl shadow-xl w-full max-w-lg object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105 border border-neutral-700" // Adjusted shadow, added grayscale and border for consistency
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
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
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
      ---
      {/* Key AI/ML Solutions */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {' '}
        {/* Adjusted background for consistency, added relative overflow-hidden */}
        {/* Subtle background pattern: hexagonal grid */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Adjusted opacity for consistency
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0L40 20L20 40L0 20zM20 0L0 20L20 40L40 20L20 0z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(5deg) scale(1.1)',
          }}
        ></div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keySolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]" // Adjusted background, border for consistency
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.5 }} // Added amount for consistency
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
      ---
      {/* Why Choose Us Section */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {' '}
        {/* Adjusted background for consistency, added relative overflow-hidden */}
        {/* Subtle background pattern: small circles */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Adjusted opacity for consistency
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='3' fill='%239C92AC' fill-opacity='0.1'/%3E%3C/circle%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(-5deg) scale(1.05)',
          }}
        ></div>
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
      ---
      {/* Our AI/ML Process Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {' '}
        {/* Adjusted background for consistency, added relative overflow-hidden */}
        {/* Subtle background pattern: circuit board */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Adjusted opacity for consistency
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(10deg) scale(1.2)',
          }}
        ></div>
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
      ---
      {/* Client Success Stories */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {' '}
        {/* Adjusted background for consistency, added relative overflow-hidden */}
        {/* Subtle abstract pattern background */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Adjusted opacity for consistency
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20zm20 20h20v20H40V40zm20 20h20v20H60V60z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(20deg) scale(1.1)',
          }}
        ></div>
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
                className="bg-neutral-800 p-6 rounded-xl text-white shadow-lg border-t-4 border-secondary flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden" // Adjusted background, text color for consistency
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }} // Added amount for consistency
                data-aos="fade-up" // Added AOS
                data-aos-delay={200 + index * 80} // Added AOS delay
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-40 object-cover rounded-md mb-4 border border-neutral-700 grayscale transition-all duration-500 hover:grayscale-0" // Adjusted border, added grayscale for consistency
                />
                <h3 className="font-bold text-accent text-xl mb-3 font-heading">
                  {' '}
                  {/* Adjusted text color, added font-heading */}
                  {story.title}
                </h3>
                <p className="text-neutral-300 text-base leading-relaxed opacity-90 flex-grow font-body">
                  {' '}
                  {/* Adjusted text color, opacity, added font-body */}
                  {story.description}
                </p>
                <div className="mt-4 text-right text-sm italic opacity-80 text-neutral-400 font-body">
                  {' '}
                  {/* Adjusted text color, added font-body */}— Client Success
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Emerging AI Applications Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {' '}
        {/* Adjusted background for consistency, added relative overflow-hidden */}
        {/* Subtle background circles/dots */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Adjusted opacity for consistency
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='2' fill='%239C92AC' fill-opacity='0.15'/%3E%3C/circle%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
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
      ---
      {/* Industries We Serve */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {' '}
        {/* Adjusted background for consistency, added relative overflow-hidden */}
        {/* Subtle background circles/dots */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Adjusted opacity for consistency
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='2' fill='%239C92AC' fill-opacity='0.15'/%3E%3C/circle%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
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
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.5 }} // Added amount for consistency
                data-aos="zoom-in" // Added AOS
                data-aos-delay={200 + index * 40} // Added AOS delay
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* CTA */}
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
