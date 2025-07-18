import React, { useEffect } from 'react';
import CSRProjectCarousel from '../components/CSRProjectCarousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Hero } from '../components';

import boss from '../assets/team/boss.jpeg';
import gayan from '../assets/team/gayan.jpeg';
import rachi from '../assets/team/rachi.JPG';
import ks from '../assets/team/ks.jpeg';
import kavi from '../assets/team/kavi.jpeg';
import isuru from '../assets/team/isuru.jpeg';
import harini from '../assets/team/harini.jpeg';
import about from '../assets/img/about.jpg'; // Placeholder for about image

const team = [
  {
    name: 'Sahan Dushmantha De Silva',
    role: 'CEO & Founder',
    image: boss,
    description: 'Visionary leader with 15+ years in technology innovation.',
  },
  {
    name: 'Rachithra Pahansith Jayasinghe',
    role: 'Company Secretary',
    image: rachi,
    description: 'Ensures smooth company operations and compliance.',
  },
  {
    name: 'Kuruwitage Saveendra Perera',
    role: 'Head of Research Projects',
    image: ks,
    description: 'Leads research and innovation initiatives.',
  },
  {
    name: 'Kavinda Gayan Bandara',
    role: 'Head of Project Management',
    image: gayan,
    description: 'Expert in project delivery and client success.',
  },
  {
    name: 'Kavindya Piyumanthi Opatha',
    role: 'Head of Human Resources',
    image: kavi,
    description: 'Drives people strategy and team culture.',
  },
  {
    name: 'Harini Kularathne',
    role: 'Head of Finance',
    image: harini,
    description: 'Manages financial planning and analysis.',
  },
  {
    name: 'Isuru Nimeshwara Kularathne',
    role: 'Head of Marketing',
    image: isuru,
    description: 'Leads marketing and brand strategy.',
  },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 80 });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-dark text-white font-body">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent font-heading">
            About <span className="text-secondary">Us</span>
          </span>
        }
        subtitle={
          <span className="text-accent font-heading">
            Meet Our <span className="text-secondary">Team</span>
          </span>
        }
        description={
          <span className="text-gray-200 font-body">
            Dedicated to delivering excellence and digital transformation.
          </span>
        }
        backgroundImage={about}
        gradient="from-primary via-black to-neutral-dark"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
          <Link
            to="/contact"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-glow-md hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Get Quote
          </Link>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Our Services
          </Link>
        </div>
      </Hero>

      {/* Company Introduction Section */}
      <section
        className="py-20 bg-primary relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Subtle background pattern: Diagonal Lines */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236B7280' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(-5deg) scale(1.2)',
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto leading-relaxed">
              ICT Option is a leading technology solutions provider based in Sri
              Lanka, dedicated to empowering organizations through digital
              transformation. With a passionate team of experts, we deliver
              innovative, scalable, and user-centric solutions that drive
              business growth and operational excellence. Our commitment to
              quality, integrity, and client success sets us apart in the
              ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        className="py-20 bg-neutral-dark relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {/* Subtle background pattern: Hex Grid */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234B5563' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0L40 20L20 40L0 20zM20 0L0 20L20 40L40 20L20 0z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(15deg) scale(1.1)',
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-secondary mb-4 font-heading tracking-wide uppercase">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
              The principles that guide our work and partnerships.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              className="bg-primary p-6 rounded-2xl text-gray-300 border border-neutral-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="0"
            >
              <h3 className="font-bold text-secondary text-xl mb-2 font-heading">
                Innovation
              </h3>
              <p className="font-body">
                We embrace creativity and forward-thinking to deliver
                cutting-edge solutions for our clients.
              </p>
            </motion.div>
            <motion.div
              className="bg-neutral-800 p-6 rounded-2xl shadow-glow border-2 border-secondary text-gray-300 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h3 className="font-bold text-secondary text-xl mb-2 font-heading">
                Integrity
              </h3>
              <p className="font-body">
                We uphold the highest standards of honesty and transparency in
                all our interactions and deliverables.
              </p>
            </motion.div>
            <motion.div
              className="bg-primary p-6 rounded-2xl text-gray-300 border border-neutral-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3 className="font-bold text-secondary text-xl mb-2 font-heading">
                Client Success
              </h3>
              <p className="font-body">
                We are dedicated to our clients' growth, building lasting
                partnerships and delivering measurable results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Card Style Like Attachment */}
      <section
        className="py-20 bg-primary relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Subtle background pattern: Abstract Grid */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236B7280' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20zm20 20h20v20H40V40zm20 20h20v20H60V60z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(-20deg) scale(1.3)',
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              Our Team
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
              Over 5 years of experience delivering innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                className="bg-neutral-dark rounded-2xl shadow-lg flex flex-col p-0 overflow-hidden border border-neutral-800 relative group hover:scale-[1.02] transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                {/* Image Top */}
                <div className="relative w-full h-60 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Overlay content (repurposed for team card aesthetic) */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="bg-secondary text-primary text-xs px-3 py-1 rounded-full font-semibold shadow-md font-body">
                      {idx % 2 === 0 ? 'Leadership' : 'Expert'}{' '}
                      {/* Dynamic tag */}
                    </span>
                    <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg text-primary">
                      {/* Placeholder icon, could be replaced with actual icon if needed */}
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* Card Content */}
                <div className="flex flex-col justify-between flex-1 p-5">
                  <h3 className="text-lg font-bold text-accent mb-1 font-heading">
                    {' '}
                    {/* Changed text color */}
                    {member.name}
                  </h3>
                  <p className="text-secondary text-sm font-semibold mb-2 font-body">
                    {' '}
                    {/* Changed text color */}
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-xs font-body mb-2">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section
        className="py-20 bg-neutral-dark relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {/* Subtle background pattern: Concentric Circles */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='8' stroke='%236B7280' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='10' cy='10' r='3' fill='%236B7280' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(5deg) scale(1.05)',
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-10">
            {['Vision', 'Mission'].map((label, index) => (
              <motion.div
                key={label}
                className="bg-primary p-6 rounded-2xl text-gray-300 border border-neutral-700 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h3 className="font-bold text-secondary text-xl mb-2 font-heading">
                  Our {label}
                </h3>
                <p className="font-body">
                  {label === 'Vision'
                    ? 'To be the leading catalyst for digital transformation in Sri Lanka and beyond, empowering businesses with innovative technology.'
                    : 'To empower businesses with innovative, scalable, and user-centric technology solutions that drive growth and operational excellence.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Project Image Carousel */}
      <section
        className="py-20 bg-primary relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        {/* Subtle background pattern: Small Dots */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='2' fill='%236B7280' fill-opacity='0.1'/%3E%3C/circle%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              Our CSR Initiatives
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
              Committed to making a positive impact through our corporate social
              responsibility projects.
            </p>
          </div>
          <CSRProjectCarousel />
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-20 bg-black relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
            alt="Testimonials Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-neutral-900/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm font-body">
              Testimonials
            </span>
            <h2 className="text-4xl font-extrabold text-accent mb-2 font-heading tracking-wide uppercase">
              Our Clients Reviews
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 opacity-90 max-w-2xl mx-auto mb-6 font-body">
              See what our clients say about working with us and how we helped
              them achieve their goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-neutral-800 rounded-xl p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative min-h-[220px] max-w-[370px] mx-auto hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="0"
            >
              <p className="text-gray-300 text-base mb-8 font-medium font-body leading-relaxed">
                "ICT Option delivered our project on time and exceeded our
                expectations. Their team is highly skilled and professional."
              </p>
              <div className="flex items-center gap-4 mt-auto w-full">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Alish White"
                  className="w-12 h-12 rounded-full border-2 border-secondary"
                />
                <div>
                  <div className="font-bold text-secondary text-base font-body">
                    Alish White
                  </div>
                  <div className="text-gray-400 text-xs font-body">
                    Entrepreneur
                  </div>
                </div>
                <span className="ml-auto text-accent text-3xl font-bold font-heading">
                  “”
                </span>
              </div>
            </motion.div>
            <motion.div
              className="bg-neutral-800 rounded-xl p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative min-h-[220px] max-w-[370px] mx-auto hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <p className="text-gray-300 text-base mb-8 font-medium font-body">
                "The digital marketing campaign brought us more leads than ever
                before. Highly recommended!"
              </p>
              <div className="flex items-center gap-4 mt-auto w-full">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Devin Mueller"
                  className="w-12 h-12 rounded-full border-2 border-secondary"
                />
                <div>
                  <div className="font-bold text-secondary text-base font-body">
                    Devin Mueller
                  </div>
                  <div className="text-gray-400 text-xs font-body">
                    Marketing Director
                  </div>
                </div>
                <span className="ml-auto text-accent text-3xl font-bold font-heading">
                  “”
                </span>
              </div>
            </motion.div>
            <motion.div
              className="bg-neutral-800 rounded-xl p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative min-h-[220px] max-w-[370px] mx-auto hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <p className="text-gray-300 text-base mb-8 font-medium font-body">
                "Their cloud solutions helped us scale quickly and securely.
                Great experience working with ICT Option."
              </p>
              <div className="flex items-center gap-4 mt-auto w-full">
                <img
                  src="https://randomuser.me/api/portraits/men/36.jpg"
                  alt="Dave Beech"
                  className="w-12 h-12 rounded-full border-2 border-secondary"
                />
                <div>
                  <div className="font-bold text-secondary text-base font-body">
                    Dave Beech
                  </div>
                  <div className="text-gray-400 text-xs font-body">
                    Operations Manager
                  </div>
                </div>
                <span className="ml-auto text-accent text-3xl font-bold font-heading">
                  “”
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-20 bg-neutral-dark relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        {/* Subtle background pattern: Small Circles */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='3' fill='%236B7280' fill-opacity='0.1'/%3E%3C/circle%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(-10deg) scale(1.05)',
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-secondary mb-4 font-heading tracking-wide uppercase">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
              Answers to common questions about our company and approach.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              className="bg-primary p-6 rounded-2xl shadow-lg border border-accent text-gray-300 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="0"
            >
              <h3 className="font-bold text-secondary text-xl mb-2 font-heading">
                What industries do you serve?
              </h3>
              <p className="font-body">
                We work with clients across finance, healthcare, retail,
                education, and more.
              </p>
            </motion.div>
            <motion.div
              className="bg-primary p-6 rounded-2xl shadow-lg border border-accent text-gray-300 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h3 className="font-bold text-secondary text-xl mb-2 font-heading">
                How do I start a project?
              </h3>
              <p className="font-body">
                Simply contact us through our website or call us. We'll schedule
                a free consultation to discuss your needs.
              </p>
            </motion.div>
            <motion.div
              className="bg-primary p-6 rounded-2xl shadow-lg border border-accent text-gray-300 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3 className="font-bold text-secondary text-xl mb-2 font-heading">
                Do you offer ongoing support?
              </h3>
              <p className="font-body">
                Yes, we provide ongoing maintenance and support packages
                tailored to your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-20 bg-gradient-to-br from-primary via-black to-neutral-dark text-center relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        {/* Subtle background pattern: Wavy Lines */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm40 0h20v20H40V0zm80 0h20v20H80V0zm0 40h20v20h-20V40zm-40 0h20v20h-20V40zm-40 0h20v20H0V40zm80 80h20v20h-20V80zm-40 0h20v20h-20V80zm-40 0h20v20H0V80z' fill='%236B7280' fill-opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(25deg) scale(1.2)',
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-accent mb-6 font-heading tracking-wide uppercase">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-body">
            Let's collaborate to bring your vision to life with cutting-edge
            technology solutions that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold font-body shadow-glow-md hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 transform-gpu"
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold font-body hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu"
              data-aos="zoom-in"
              data-aos-delay="1100"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
