import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components'; // Assuming you have a Hero component
import AOS from 'aos';
import 'aos/dist/aos.css';
import contact from '../assets/img/contact.jpg'; // Ensure this path is correct

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);

  const contactInfo = [
    {
      title: 'Office Address',
      details: [
        'No: 59/E, Horana Road',
        'Kesbewa, Piliyandala',
        'Postcode: 10300',
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
      details: ['+94 76 346 5329', '+94 71 115 2255'],
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
      details: ['ictoption321@gmail.com', 'support@ictoptionweb.com'],
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

  const socialMediaLinks = [
    {
      href: 'https://www.tiktok.com/@ict_option?_t=ZS-8y7hfMuvgFG&_r=1',
      label: 'TikTok page', // Added for accessibility
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.5 3.5v13.5a3.5 3.5 0 1 1-3.5-3.5h.5V12a2.5 2.5 0 1 0 2.5 2.5V3.5h1zm5.5 0v7.5c0 2.485 2.015 4.5 4.5 4.5v2a6.5 6.5 0 0 1-6.5-6.5V3.5h2z" />
        </svg>
      ),
    },
    {
      href: 'https://www.instagram.com/ict_option?igsh=MWM2ZTNweXJoZDh3Yg==&utm_source=ig_contact_invite',
      label: 'Instagram page', // Added for accessibility
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      ),
    },
    {
      href: 'https://www.facebook.com/share/16YqcKMBNp/?mibextid=wwXIfr',
      label: 'Facebook page', // Added for accessibility
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.104C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" />
        </svg>
      ),
    },
  ];

  const faqs = [
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
  ];

  return (
    <div className="min-h-screen bg-primary font-body">
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
        backgroundImage={contact}
        gradient="from-primary via-neutral-900 to-secondary"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
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
                        <p
                          key={detailIndex}
                          className="text-neutral-300 font-body"
                        >
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
              <div
                key={index}
                className="bg-neutral-800 rounded-lg p-6 border border-neutral-700 transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-secondary mb-3 font-heading">
                  {faq.question}
                </h3>
                <p className="text-neutral-300 font-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
