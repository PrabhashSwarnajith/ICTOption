import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components';

const Products = () => {
  const products = [
    {
      name: 'ICT WebBuilder Pro',
      category: 'Web Development Platform',
      description:
        'A powerful drag-and-drop website builder with advanced features for businesses of all sizes.',
      price: 'Starting at $29/month',
      features: [
        'Drag & Drop Builder',
        'Responsive Templates',
        'E-commerce Integration',
        'SEO Tools',
        'Analytics Dashboard',
        '24/7 Support',
      ],
      badge: 'Popular',
      badgeColor: 'bg-accent',
    },
    {
      name: 'CloudSync Enterprise',
      category: 'Cloud Management Suite',
      description:
        'Complete cloud infrastructure management solution for enterprise-level operations.',
      price: 'Starting at $99/month',
      features: [
        'Multi-Cloud Support',
        'Automated Backups',
        'Security Monitoring',
        'Cost Optimization',
        'Team Collaboration',
        'API Integration',
      ],
      badge: 'Enterprise',
      badgeColor: 'bg-primary',
    },
    {
      name: 'MobileFirst Framework',
      category: 'Mobile Development Kit',
      description:
        'Cross-platform mobile development framework for rapid app deployment.',
      price: 'Starting at $49/month',
      features: [
        'Cross-Platform',
        'Native Performance',
        'UI Component Library',
        'Push Notifications',
        'Offline Sync',
        'App Store Deployment',
      ],
      badge: 'New',
      badgeColor: 'bg-secondary',
    },
    {
      name: 'SecureGuard AI',
      category: 'Cybersecurity Solution',
      description:
        'AI-powered cybersecurity platform that protects your digital assets 24/7.',
      price: 'Starting at $79/month',
      features: [
        'AI Threat Detection',
        'Real-time Monitoring',
        'Incident Response',
        'Compliance Reports',
        'Vulnerability Scanning',
        'Security Training',
      ],
      badge: 'Recommended',
      badgeColor: 'bg-accent',
    },
    {
      name: 'DataViz Analytics',
      category: 'Business Intelligence',
      description:
        'Transform your data into actionable insights with our advanced analytics platform.',
      price: 'Starting at $39/month',
      features: [
        'Interactive Dashboards',
        'Real-time Data',
        'Custom Reports',
        'Data Integration',
        'Predictive Analytics',
        'Team Sharing',
      ],
      badge: null,
      badgeColor: '',
    },
    {
      name: 'AutoScale DevOps',
      category: 'Development Operations',
      description:
        'Streamline your development workflow with automated CI/CD pipelines.',
      price: 'Starting at $59/month',
      features: [
        'CI/CD Pipelines',
        'Container Management',
        'Automated Testing',
        'Deployment Automation',
        'Performance Monitoring',
        'Team Collaboration',
      ],
      badge: null,
      badgeColor: '',
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}{' '}
      <Hero
        title="Our Products"
        subtitle="Innovative Solutions for Modern Businesses"
        description="Powerful, innovative solutions designed to accelerate your business growth and streamline your operations with cutting-edge technology."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        gradient="from-indigo-900 via-purple-900 to-pink-900"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            to="/services"
            className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
          >
            View Services
          </Link>
        </div>
      </Hero>
      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-light overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-secondary font-medium font-body mb-1">
                        {product.category}
                      </p>
                      <h3 className="text-2xl font-semibold text-neutral-dark font-heading">
                        {product.name}
                      </h3>
                    </div>
                    {product.badge && (
                      <span
                        className={`${product.badgeColor} text-white text-xs px-3 py-1 rounded-full font-body`}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-neutral-dark mb-6 font-body">
                    {product.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-2xl font-bold text-primary font-heading">
                      {product.price}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-neutral-dark font-body"
                      >
                        <svg
                          className="w-4 h-4 text-accent mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0">
                  <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold font-body">
                    Start Free Trial
                  </button>
                  <button className="w-full mt-3 border border-primary text-primary py-3 rounded-lg hover:bg-primary/5 transition-colors font-body">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Comparison */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4 font-heading">
              Why Choose Our Products?
            </h2>
            <p className="text-lg text-neutral-dark font-body max-w-2xl mx-auto">
              Built with cutting-edge technology and designed for scalability,
              security, and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-2 font-heading">
                High Performance
              </h3>
              <p className="text-neutral-dark font-body">
                Optimized for speed and efficiency
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-2 font-heading">
                Enterprise Security
              </h3>
              <p className="text-neutral-dark font-body">
                Bank-level security and compliance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-neutral-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-2 font-heading">
                Easy Integration
              </h3>
              <p className="text-neutral-dark font-body">
                Seamless integration with existing systems
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-2 font-heading">
                24/7 Support
              </h3>
              <p className="text-neutral-dark font-body">
                Round-the-clock expert assistance
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-secondary mb-8 font-body">
            Try any of our products free for 30 days. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-neutral-dark px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 font-body">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-all duration-300 font-body">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
