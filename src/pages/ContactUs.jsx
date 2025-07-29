import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hero, ContactInfoCard, FAQCard } from '../components';
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
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);

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
        className="py-20 bg-neutral-900 relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Subtle background pattern: circuit board / digital lines */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(15deg) scale(1.2)',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className="bg-neutral-800 rounded-2xl shadow-xl p-8 border border-neutral-700"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-accent mb-6 font-heading uppercase tracking-wide">
                Send Us a Message
              </h2>
              <form
                action="https://formsubmit.co/ictoption321@gmail.com"
                method="POST"
                className="space-y-6"
              >
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
                      required
                      className="w-full px-4 py-3 border border-neutral-700 rounded-lg bg-neutral-800 text-neutral-300 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300"
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
                      required
                      className="w-full px-4 py-3 border border-neutral-700 rounded-lg bg-neutral-800 text-neutral-300 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-neutral-700 rounded-lg bg-neutral-800 text-neutral-300 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300"
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
                      className="w-full px-4 py-3 border border-neutral-700 rounded-lg bg-neutral-800 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300"
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
                    required
                    className="w-full px-4 py-3 border border-neutral-700 rounded-lg bg-neutral-800 text-neutral-300 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300"
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
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-neutral-700 rounded-lg bg-neutral-800 text-neutral-300 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary font-body transition-all duration-300"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-primary py-3 px-6 rounded-full font-semibold text-base uppercase tracking-wider shadow-lg hover:scale-105 transition-all duration-300 animate-pulse"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  Send Message
                </button>
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
        className="py-20 bg-primary relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Subtle background pattern: hexagonal grid */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0L40 20L20 40L0 20zM20 0L0 20L20 40L40 20L20 0z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(5deg) scale(1.1)',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading uppercase tracking-wide animate-fade-in">
              Visit Our Office
            </h2>
            <p className="text-lg text-neutral-300 font-body animate-fade-in">
              Located in the heart of the technology district
            </p>
          </div>
          <div className="bg-neutral-800 rounded-2xl shadow-xl p-4 border border-neutral-700 animate-slide-up">
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
        className="py-20 bg-neutral-900 relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {/* Subtle background pattern: dots */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='2' fill='%239C92AC' fill-opacity='0.15'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading uppercase tracking-wide animate-fade-in">
              {' '}
              {/* Added md:text-4xl and tracking-wide uppercase */}
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-300 font-body max-w-2xl mx-auto animate-fade-in">
              {' '}
              {/* Changed text-accent to text-neutral-300 */}
              Answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <FAQCard
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
