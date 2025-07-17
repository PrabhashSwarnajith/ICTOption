import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components';

const Cybersecurity = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent">
            Cyber<span className="text-secondary">security</span> Services
          </span>
        }
        subtitle={
          <span className="text-white">
            Protect Your <span className="text-secondary">Digital Assets</span>
          </span>
        }
        description={
          <span className="text-gray-200">
            Comprehensive security solutions to protect your digital assets and
            ensure business continuity in an evolving threat landscape.
          </span>
        }
        backgroundImage="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80" // Cybersecurity-themed Unsplash image
        gradient="from-primary via-black to-neutral-dark"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
          <Link
            to="/contact"
            className="bg-secondary text-accent px-8 py-4 rounded-full font-semibold text-lg shadow-glow hover:scale-105 transition-all duration-300"
          >
            Secure Your Business
          </Link>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
          >
            All Services
          </Link>
        </div>
      </Hero>

      {/* Services */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-neutral-light p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 font-heading">
                Threat Assessment
              </h3>
              <p className="text-primary font-body text-sm">
                Identify vulnerabilities and assess security risks across your
                infrastructure.
              </p>
            </div>

            <div className="bg-neutral-light p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 font-heading">
                Security Audits
              </h3>
              <p className="text-primary font-body text-sm">
                Comprehensive security assessments and penetration testing.
              </p>
            </div>

            <div className="bg-neutral-light p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 font-heading">
                Compliance
              </h3>
              <p className="text-primary font-body text-sm">
                Ensure compliance with industry standards and regulations.
              </p>
            </div>

            <div className="bg-neutral-light p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
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
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 font-heading">
                Incident Response
              </h3>
              <p className="text-primary font-body text-sm">
                24/7 monitoring and rapid response to security incidents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-accent mb-4 font-heading">
            Protect Your Business Today
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-secondary text-accent px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 font-body"
            >
              Get Security Assessment
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

export default Cybersecurity;
