import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hero, ContactInfoCard, FAQCard } from '../components';
import { setPageMeta } from '../utils/seoUtils';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contact from '../assets/img/contact.webp';
import {
  contactInfo,
  services,
  socialMediaLinks,
  faqs,
} from '../data/contactData.jsx';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
    setPageMeta(
      'Contact Us | Get in Touch with ICT Option',
      'Contact ICT Option for digital solutions, web development, and technology services. Reach out to our expert team today to discuss your project.',
      'contact us, ICT Option, digital solutions, web development, technology services, customer support',
      '/contact'
    );
  }, []);

  const validateField = (name, value) => {
    let error = '';

    if (name === 'name') {
      if (!value.trim()) error = 'Name is required';
      else if (value.trim().length < 2)
        error = 'Name must be at least 2 characters';
    }

    if (name === 'email') {
      if (!value.trim()) error = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        error = 'Please enter a valid email';
    }

    if (name === 'subject') {
      if (!value.trim()) error = 'Subject is required';
      else if (value.trim().length < 5)
        error = 'Subject must be at least 5 characters';
    }

    if (name === 'message') {
      if (!value.trim()) error = 'Message is required';
      else if (value.trim().length < 10)
        error = 'Message must be at least 10 characters';
    }

    return error;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'company' && key !== 'service') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate submission
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          subject: '',
          message: '',
        });
        setTouched({});
        alert('Message sent successfully!');
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-primary font-body">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent font-heading">
            Contact <span className="text-secondary">Us</span>
          </span>
        }
        subtitle={
          <span className="text-accent font-heading">
            Let's Create Something{' '}
            <span className="text-secondary">Extraordinary</span> Together
          </span>
        }
        description={
          <span className="text-neutral-300 font-body">
            Ready to bring your vision to life? Connect with our expert team to
            transform your ideas into reality.
          </span>
        }
        backgroundImage={contact}
        gradient="from-primary via-black/80 to-neutral-900"
        className="brightness-110"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <a
            href="tel:+94763465329"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-secondary-light hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Call Now
          </a>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Explore Services
          </Link>
        </div>
      </Hero>
      {/* Contact Form & Info */}
      <section
        className="py-20 bg-neutral-900 relative overflow-hidden pattern-grid-soft"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className="bg-neutral-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-neutral-700"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-accent mb-6 font-heading uppercase tracking-wide">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  className="grid md:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
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
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg bg-neutral-800 text-neutral-300 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300 ${
                        touched.name && errors.name
                          ? 'border-red-500 ring-2 ring-red-500/20'
                          : 'border-neutral-700'
                      }`}
                      placeholder="John Doe"
                    />
                    {touched.name && errors.name && (
                      <motion.p
                        className="text-red-500 text-sm mt-1"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.name}
                      </motion.p>
                    )}
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
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg bg-neutral-800 text-neutral-300 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300 ${
                        touched.email && errors.email
                          ? 'border-red-500 ring-2 ring-red-500/20'
                          : 'border-neutral-700'
                      }`}
                      placeholder="john@example.com"
                    />
                    {touched.email && errors.email && (
                      <motion.p
                        className="text-red-500 text-sm mt-1"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
                <motion.div
                  className="grid md:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
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
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-700 rounded-lg bg-neutral-800 text-neutral-300 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300 hover:border-neutral-600"
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
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-700 rounded-lg bg-neutral-800 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300 hover:border-neutral-600"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg bg-neutral-800 text-neutral-300 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300 ${
                      touched.subject && errors.subject
                        ? 'border-red-500 ring-2 ring-red-500/20'
                        : 'border-neutral-700'
                    }`}
                    placeholder="How can we help you?"
                  />
                  {touched.subject && errors.subject && (
                    <motion.p
                      className="text-red-500 text-sm mt-1"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.subject}
                    </motion.p>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows="6"
                    className={`w-full px-4 py-3 border rounded-lg bg-neutral-800 text-neutral-300 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300 resize-none ${
                      touched.message && errors.message
                        ? 'border-red-500 ring-2 ring-red-500/20'
                        : 'border-neutral-700'
                    }`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {touched.message && errors.message && (
                    <motion.p
                      className="text-red-500 text-sm mt-1"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting || Object.keys(errors).length > 0}
                  className={`w-full py-3 px-6 rounded-full font-semibold text-base uppercase tracking-wider shadow-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-neutral-600 text-neutral-400 cursor-not-allowed'
                      : 'bg-secondary text-primary hover:bg-accent hover:scale-105 hover:shadow-xl'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="inline-block w-5 h-5 border-2 border-transparent border-t-current rounded-full mr-2"
                      />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </div>

            {/* Contact Information */}
            <div data-aos="fade-left" data-aos-delay="200">
              <h2 className="text-2xl md:text-4xl font-bold text-accent mb-6 font-heading uppercase tracking-wide">
                Get in Touch
              </h2>
              <p className="text-neutral-300 mb-8 font-body">
                We're here to help. Choose your preferred way to reach us, and
                we'll respond promptly.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <ContactInfoCard key={index} {...info} />
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-neutral-700">
                <h3 className="text-lg font-semibold text-accent mb-4 font-heading">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialMediaLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:scale-110"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
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
        className="py-20 bg-primary relative overflow-hidden pattern-dots"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading uppercase tracking-wide animate-fade-in">
              Visit Our Office
            </h2>
            <p className="text-lg text-neutral-300 font-body animate-fade-in">
              Located in the heart of the technology district
            </p>
          </div>
          <div className="bg-neutral-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-neutral-700 animate-slide-up">
            <div className="h-96 w-full rounded-lg overflow-hidden flex items-center justify-center">
              <iframe
                title="Google Map of ICT Option Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8020583489814!2d79.92348397441558!3d6.86178871958444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a52a20b72f1%3A0x7d2b638c4b2b2a63!2s59%2FE%2C%20Horana%20Rd%2C%20Kesbewa%2C%20Piliyandala!5e0!3m2!1sen!2slk!4v1721919780000!5m2!1sen!2slk"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, width: '100%', height: '100%' }}
                className="min-h-[350px] w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section
        className="py-20 bg-neutral-900 relative overflow-hidden pattern-grid-soft"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading uppercase tracking-wide">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
            <p className="text-neutral-300 font-body max-w-2xl mx-auto">
              Answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-accent text-neutral-300 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h3 className="font-bold text-secondary text-lg sm:text-xl mb-2 font-heading">
                  {faq.question}
                </h3>
                <p className="font-body text-xs sm:text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
