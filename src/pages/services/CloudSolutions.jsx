import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components';

const CloudSolutions = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent">
            Cloud <span className="text-secondary">Solutions</span>
          </span>
        }
        subtitle={
          <span className="text-white">
            Scale Your Business with{' '}
            <span className="text-secondary">Cloud</span> Infrastructure
          </span>
        }
        description={
          <span className="text-gray-200">
            Scalable cloud infrastructure and migration services for modern
            businesses. Leverage the power of AWS, Azure, and Google Cloud
            Platform to accelerate your digital transformation.
          </span>
        }
        backgroundImage="https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=1200&q=80" // Cloud Solutions-themed Unsplash image
        gradient="from-primary via-black to-neutral-dark"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
          <Link
            to="/contact"
            className="bg-secondary text-accent px-8 py-4 rounded-full font-semibold text-lg shadow-glow hover:scale-105 transition-all duration-300"
          >
            Get Cloud Consultation
          </Link>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
          >
            All Services
          </Link>
        </div>
      </Hero>

      {/* Cloud Platforms */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
              Cloud Platforms We Work With
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-neutral-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-lg">AWS</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 font-heading">
                Amazon Web Services
              </h3>
              <p className="text-primary font-body">
                Complete cloud computing platform with extensive services and
                global infrastructure.
              </p>
            </div>

            <div className="bg-neutral-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-sm">Azure</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 font-heading">
                Microsoft Azure
              </h3>
              <p className="text-primary font-body">
                Enterprise-grade cloud platform with integrated Microsoft
                ecosystem.
              </p>
            </div>

            <div className="bg-neutral-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-sm">GCP</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 font-heading">
                Google Cloud Platform
              </h3>
              <p className="text-primary font-body">
                Advanced cloud infrastructure with powerful AI and machine
                learning tools.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
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
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-primary mb-2 font-heading">
                Cloud Migration
              </h4>
              <p className="text-sm text-primary font-body">
                Seamless migration of your existing infrastructure to the cloud
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
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
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-primary mb-2 font-heading">
                Auto Scaling
              </h4>
              <p className="text-sm text-primary font-body">
                Automatic resource scaling based on demand
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
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
              <h4 className="font-semibold text-primary mb-2 font-heading">
                Security First
              </h4>
              <p className="text-sm text-primary font-body">
                Enterprise-grade security and compliance
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-primary mb-2 font-heading">
                Cost Optimization
              </h4>
              <p className="text-sm text-primary font-body">
                Optimize cloud costs and resource utilization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-accent mb-4 font-heading">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-accent mb-8 font-body">
            Let's discuss your cloud strategy and migration plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-secondary text-accent px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 font-body"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-primary transition-all duration-300 font-body"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;
