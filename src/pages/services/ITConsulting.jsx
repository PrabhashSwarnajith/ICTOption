import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components';

const ITConsulting = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent">
            IT <span className="text-secondary">Consulting</span>
          </span>
        }
        subtitle={
          <span className="text-white">
            Strategic{' '}
            <span className="text-secondary">Technology Guidance</span>
          </span>
        }
        description={
          <span className="text-gray-200">
            Strategic technology consulting to align IT with your business goals
            and drive digital transformation.
          </span>
        }
        backgroundImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80" // IT Consulting-themed Unsplash image
        gradient="from-primary via-black to-neutral-dark"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
          <Link
            to="/contact"
            className="bg-secondary text-accent px-8 py-4 rounded-full font-semibold text-lg shadow-glow hover:scale-105 transition-all duration-300"
          >
            Get IT Strategy
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 font-heading">
                Technology Strategy
              </h3>
              <p className="text-primary font-body text-sm">
                Develop comprehensive IT roadmaps aligned with business
                objectives.
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 font-heading">
                System Architecture
              </h3>
              <p className="text-primary font-body text-sm">
                Design scalable and robust system architectures.
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 font-heading">
                Process Optimization
              </h3>
              <p className="text-primary font-body text-sm">
                Streamline operations and improve efficiency through technology.
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 font-heading">
                Team Training
              </h3>
              <p className="text-primary font-body text-sm">
                Upskill your team with the latest technologies and best
                practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-accent mb-4 font-heading">
            Need Strategic IT Guidance?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-secondary text-accent px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 font-body"
            >
              Schedule Consultation
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

export default ITConsulting;
