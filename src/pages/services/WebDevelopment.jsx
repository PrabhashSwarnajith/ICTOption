import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components';
import { FullPageServiceCard } from '../../components';

const WebDevelopment = () => {
  const features = [
    'Responsive web design for all devices',
    'Modern JavaScript frameworks (React, Vue, Angular)',
    'Full-stack development with Node.js, Python, PHP',
    'E-commerce and CMS solutions',
    'SEO optimization and performance tuning',
    'API development and third-party integrations',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent">
            Web <span className="text-secondary">Development</span>
          </span>
        }
        subtitle={
          <span className="text-white">
            Modern <span className="text-secondary">Web Solutions</span> for
            Your Business
          </span>
        }
        description={
          <span className="text-gray-200">
            Responsive, scalable, and high-performance web applications using
            the latest technologies. We turn your ideas into digital reality.
          </span>
        }
        backgroundImage="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80" // Web Development-themed Unsplash image
        gradient="from-primary via-black to-neutral-dark"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
          <Link
            to="/contact"
            className="bg-secondary text-accent px-8 py-4 rounded-full font-semibold text-lg shadow-glow hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </Link>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
          >
            All Services
          </Link>
        </div>
      </Hero>

      {/* Additional Content Sections */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
              Our Web Development Process
            </h2>
            <p className="text-lg text-primary font-body max-w-2xl mx-auto">
              A systematic approach to deliver high-quality web solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 font-heading">
                Discovery
              </h3>
              <p className="text-primary font-body">
                Understanding your requirements and goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 font-heading">
                Design
              </h3>
              <p className="text-primary font-body">
                Creating wireframes and visual designs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 font-heading">
                Development
              </h3>
              <p className="text-primary font-body">
                Building and coding your web application
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 font-heading">
                Launch
              </h3>
              <p className="text-primary font-body">
                Testing, deployment, and ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
              Technologies We Use
            </h2>
            <p className="text-lg text-primary font-body max-w-2xl mx-auto">
              Cutting-edge tools and frameworks for modern web development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React',
              'Vue.js',
              'Angular',
              'Node.js',
              'Python',
              'PHP',
              'MongoDB',
              'PostgreSQL',
              'AWS',
              'Docker',
              'TypeScript',
              'GraphQL',
            ].map(tech => (
              <div key={tech} className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-primary font-semibold">{tech}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-accent mb-4 font-heading">
            Ready to Build Your Web Application?
          </h2>
          <p className="text-xl text-accent mb-8 font-body">
            Let's discuss your project and create something amazing together.
          </p>
          <Link
            to="/contact"
            className="bg-secondary text-accent px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 font-body"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
