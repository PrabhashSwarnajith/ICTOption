import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components';
import { FullPageServiceCard } from '../../components';

const MobileAppDevelopment = () => {
  const features = [
    'Native iOS and Android development',
    'Cross-platform solutions with React Native & Flutter',
    'UI/UX design optimized for mobile interfaces',
    'App Store and Google Play deployment',
    'Push notifications and real-time features',
    'Offline functionality and data synchronization',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent">
            Mobile <span className="text-secondary">App Development</span>
          </span>
        }
        subtitle={
          <span className="text-white">
            Build Powerful{' '}
            <span className="text-secondary">Mobile Experiences</span>
          </span>
        }
        description={
          <span className="text-gray-200">
            Custom mobile app development for iOS and Android. From concept to
            deployment, we deliver seamless, high-performance apps tailored to
            your business needs.
          </span>
        }
        backgroundImage="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80" // Mobile App Development-themed Unsplash image
        gradient="from-primary via-black to-neutral-dark"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
          <Link
            to="/contact"
            className="bg-secondary text-accent px-8 py-4 rounded-full font-semibold text-lg shadow-glow hover:scale-105 transition-all duration-300"
          >
            Start Your App Project
          </Link>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
          >
            All Services
          </Link>
        </div>
      </Hero>

      {/* App Development Process */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
              Mobile App Development Process
            </h2>
            <p className="text-lg text-primary font-body max-w-2xl mx-auto">
              From concept to app store deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 font-heading">
                Strategy
              </h3>
              <p className="text-primary font-body">
                Define app objectives and user requirements
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
                Create intuitive UI/UX designs and prototypes
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
                Build and test your mobile application
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
                Deploy to app stores and provide ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms & Technologies */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6 font-heading">
              Platforms & Technologies
            </h2>
            <p className="text-lg text-primary font-body max-w-2xl mx-auto">
              We develop for all major mobile platforms using the latest
              technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-6 font-heading">
                Native Development
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  'iOS (Swift)',
                  'Android (Kotlin)',
                  'Xcode',
                  'Android Studio',
                ].map(tech => (
                  <div
                    key={tech}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-primary font-semibold">{tech}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-6 font-heading">
                Cross-Platform
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {['React Native', 'Flutter', 'Expo', 'Ionic'].map(tech => (
                  <div
                    key={tech}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-primary font-semibold">{tech}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-accent mb-4 font-heading">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-accent mb-8 font-body">
            Let's bring your mobile app idea to life with cutting-edge
            technology.
          </p>
          <Link
            to="/contact"
            className="bg-secondary text-accent px-8 py-4 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 font-body"
          >
            Start Your App Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
