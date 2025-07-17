import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components';

const AIMachineLearning = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent">
            AI <span className="text-secondary">Machine Learning</span>
          </span>
        }
        subtitle={
          <span className="text-white">
            Unlock Business Value with{' '}
            <span className="text-secondary">AI</span>
          </span>
        }
        description={
          <span className="text-gray-200">
            Harness the power of artificial intelligence and machine learning to
            automate processes, gain insights, and drive innovation.
          </span>
        }
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" // AI-themed Unsplash image
        gradient="from-primary via-black to-neutral-dark"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <Link
            to="/contact"
            className="bg-secondary text-accent px-8 py-4 rounded-full font-semibold text-lg shadow-glow hover:scale-105 transition-all duration-300"
          >
            Explore AI Solutions
          </Link>
          <Link
            to="/services"
            className="border-2 border-gray-400 text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 hover:text-primary transition-all duration-300"
          >
            All Services
          </Link>
        </div>
      </Hero>

      {/* AI Services */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
              AI Solutions We Offer
            </h2>
            <p className="text-lg text-primary font-body max-w-2xl mx-auto">
              From intelligent automation to predictive analytics
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-light p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center mb-4">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 font-heading">
                Machine Learning Models
              </h3>
              <p className="text-primary font-body text-sm">
                Custom ML models for predictive analytics, classification, and
                pattern recognition.
              </p>
            </div>
            <div className="bg-neutral-light p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center mb-4">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 font-heading">
                Natural Language Processing
              </h3>
              <p className="text-primary font-body text-sm">
                Chatbots, sentiment analysis, and text processing solutions.
              </p>
            </div>
            <div className="bg-neutral-light p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center mb-4">
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 font-heading">
                Computer Vision
              </h3>
              <p className="text-primary font-body text-sm">
                Image recognition, object detection, and visual analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4 font-heading">
              Industries We Serve
            </h2>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-accent mb-4 font-heading">
            Ready to Harness AI for Your Business?
          </h2>
          <p className="text-xl text-accent mb-8 font-body">
            Let's explore how AI and machine learning can transform your
            operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-secondary text-accent px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 font-body"
            >
              Discuss AI Solutions
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

export default AIMachineLearning;
