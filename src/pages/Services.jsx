import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FullPageServiceCard, Hero } from '../components';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}{' '}
      <Hero
        title="Our Services"
        subtitle="Complete Technology Solutions"
        description="Discover our comprehensive range of technology solutions designed to drive innovation, enhance efficiency, and accelerate your business growth in the digital landscape."
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        gradient="from-blue-900 via-indigo-900 to-purple-900"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Get Quote
          </Link>
          <Link
            to="/about"
            className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
          >
            About Us
          </Link>
        </div>
      </Hero>
      {/* Services Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-neutral-dark mb-4 font-heading">
              Our Complete Service Portfolio
            </h2>
            <p className="text-lg text-neutral-dark font-body max-w-2xl mx-auto">
              Explore our full range of technology services designed to meet
              your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow p-8 border border-neutral-light"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-neutral-dark mb-4 font-heading">
                  {service.title}
                </h3>
                <p className="text-neutral-dark mb-6 font-body">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-neutral-dark font-body"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>{' '}
                <Link
                  to={service.link}
                  className="mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-body inline-block"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-neutral-dark mb-6 font-heading">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-neutral-dark mb-8 max-w-2xl mx-auto font-body">
            Our team can create tailored solutions that perfectly match your
            unique business requirements.
          </p>
          <button className="bg-accent text-neutral-dark px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 font-body">
            Discuss Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: 'Web Development',
    description:
      'Custom web applications built with modern technologies and best practices.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    features: [
      'Responsive Design',
      'Modern Frameworks',
      'SEO Optimized',
      'Performance Focused',
    ],
    link: '/services/web-development',
  },
  {
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications for iOS and Android.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
        />
      </svg>
    ),
    features: [
      'Cross-Platform',
      'Native Performance',
      'App Store Ready',
      'Push Notifications',
    ],
    link: '/services/mobile-app-development',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and migration services for modern businesses.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
        />
      </svg>
    ),
    features: [
      'AWS/Azure/GCP',
      'Auto Scaling',
      'Security First',
      'Cost Optimization',
    ],
    link: '/services/cloud-solutions',
  },
  {
    title: 'Digital Marketing',
    description:
      'Comprehensive digital marketing strategies to grow your online presence.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    features: [
      'SEO Optimization',
      'Social Media',
      'Content Strategy',
      'Analytics & Reporting',
    ],
    link: '/services/digital-marketing',
  },
  {
    title: 'IT Consulting',
    description:
      'Strategic technology consulting to align IT with your business goals.',
    icon: (
      <svg
        className="w-8 h-8"
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
    features: [
      'Technology Strategy',
      'System Architecture',
      'Process Optimization',
      'Team Training',
    ],
    link: '/services/it-consulting',
  },
  {
    title: 'Cybersecurity',
    description:
      'Comprehensive security solutions to protect your digital assets.',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    features: [
      'Threat Assessment',
      'Security Audits',
      'Compliance',
      'Incident Response',
    ],
    link: '/services/cybersecurity',
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Harness the power of artificial intelligence to automate and optimize your business processes.',
    icon: (
      <svg
        className="w-8 h-8"
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
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
    ],
    link: '/services/ai-machine-learning',
  },
];

export default Services;
