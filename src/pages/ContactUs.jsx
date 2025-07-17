import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    service: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Typically, send this data to your backend
  };

  const contactInfo = [
    {
      title: 'Office Address',
      details: [
        '123 Technology Drive',
        'Innovation District',
        'Tech City, TC 12345',
      ],
      icon: (
        <svg
          className="w-6 h-6 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Phone Number',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568 (Support)'],
      icon: (
        <svg
          className="w-6 h-6 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      title: 'Email Address',
      details: ['hello@ictoptionweb.com', 'support@ictoptionweb.com'],
      icon: (
        <svg
          className="w-6 h-6 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 2:00 PM',
        'Sunday: Closed',
      ],
      icon: (
        <svg
          className="w-6 h-6 text-secondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'Cloud Solutions',
    'Digital Marketing',
    'IT Consulting',
    'Cybersecurity',
    'Other',
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent">
            Contact <span className="text-secondary">Us</span>
          </span>
        }
        subtitle={
          <span className="text-accent">
            Let's Create Something{' '}
            <span className="text-secondary">Extraordinary</span> Together
          </span>
        }
        description={
          <span className="text-accent">
            Ready to bring your vision to life? Connect with our expert team to
            transform your ideas into reality.
          </span>
        }
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        gradient="from-primary via-black to-neutral-dark"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <a
            href="tel:+1234567890"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-glow hover:scale-105 transition-all duration-300 animate-pulse"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Call Now
          </a>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300 animate-pulse"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore Services
          </Link>
        </div>
      </Hero>

      {/* Contact Form & Info */}
      <section
        className="py-16 bg-neutral-dark"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className="bg-black/90 rounded-2xl shadow-xl p-8 border border-neutral-700"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2 className="text-2xl font-bold text-accent mb-6 font-heading uppercase tracking-wide">
                Send Us a Message
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-accent mb-2 font-body"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-700 rounded-lg bg-black/80 text-accent placeholder-accent/50 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-accent mb-2 font-body"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-700 rounded-lg bg-black/80 text-accent placeholder-accent/50 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-accent mb-2 font-body"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-700 rounded-lg bg-black/80 text-accent placeholder-accent/50 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-accent mb-2 font-body"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-700 rounded-lg bg-black/80 text-accent focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-accent mb-2 font-body"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-700 rounded-lg bg-black/80 text-accent placeholder-accent/50 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-accent mb-2 font-body"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-neutral-700 rounded-lg bg-black/80 text-accent placeholder-accent/50 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-secondary text-primary py-3 px-6 rounded-full font-semibold text-base uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 animate-pulse"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div data-aos="fade-left" data-aos-delay="200">
              <h2 className="text-2xl font-bold text-accent mb-6 font-heading uppercase tracking-wide">
                Get in Touch
              </h2>
              <p className="text-accent mb-8 font-body">
                We're here to help. Choose your preferred way to reach us, and
                we'll respond promptly.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2 font-heading">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-accent font-body">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-neutral-700">
                <h3 className="text-lg font-semibold text-accent mb-4 font-heading">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {[
                    {
                      href: '#',
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      ),
                    },
                    {
                      href: '#',
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      ),
                    },
                    {
                      href: '#',
                      icon: (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                        </svg>
                      ),
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        className="py-16 bg-neutral-dark"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-accent mb-4 font-heading uppercase tracking-wide animate-fade-in">
              Visit Our Office
            </h2>
            <p className="text-lg text-accent font-body animate-fade-in">
              Located in the heart of the technology district
            </p>
          </div>
          <div className="bg-black/90 rounded-2xl shadow-xl p-4 border border-neutral-700 animate-slide-up">
            <div className="h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p className="text-accent font-body">
                  Interactive map would be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-16 bg-neutral-dark"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent mb-4 font-heading uppercase tracking-wide animate-fade-in">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-accent font-body max-w-2xl mx-auto animate-fade-in">
              Answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'How long does a typical project take?',
                answer:
                  'Project timelines vary based on scope. Simple websites take 2-4 weeks, while complex web applications may require 3-6 months. We provide detailed timelines during consultation.',
              },
              {
                question: 'Do you provide ongoing support and maintenance?',
                answer:
                  'Yes, we offer comprehensive support packages, including regular updates, security patches, and 24/7 technical support.',
              },
              {
                question: 'What’s your approach to project management?',
                answer:
                  'We use agile methodologies with regular check-ins and transparent communication, ensuring you stay informed and can provide feedback throughout development.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-black/90 rounded-lg p-6 border border-neutral-700 transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-secondary mb-3 font-heading">
                  {faq.question}
                </h3>
                <p className="text-accent font-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
