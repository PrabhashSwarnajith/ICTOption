import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Hero } from '../components';
import web2 from '../assets/img/web2.jpeg';
import mobile3 from '../assets/img/mobile3.jpg';
import it1 from '../assets/img/it1.jpg';
import dm1 from '../assets/img/dm1.jpg';
import cyber1 from '../assets/img/cyber1.jpg';
import service from '../assets/img/services.jpg';

// --- Data Definitions for easier management ---

const servicesData = [
  {
    name: 'Web Development',
    path: '/services/web-development',
    image: web2,
    label: 'Web',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    name: 'Mobile App Development',
    path: '/services/mobile-app-development',
    image: mobile3,
    label: 'Mobile',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
        />
      </svg>
    ),
  },
  {
    name: 'AI & Machine Learning',
    path: '/services/ai-machine-learning',
    image:
      'https://images.unsplash.com/photo-1620712948383-f3680e0c1f21?auto=format&fit=crop&w=400&q=80', // More relevant image
    label: 'AI',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
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
    ),
  },
  {
    name: 'Digital Marketing',
    path: '/services/digital-marketing',
    image: dm1,
    label: 'Marketing',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: 'IT Consulting',
    path: '/services/it-consulting',
    image: it1,
    label: 'Consulting',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
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
    ),
  },
  {
    name: 'Cybersecurity',
    path: '/services/cybersecurity',
    image: cyber1,
    label: 'Security',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
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
    ),
  },
];

const projectsData = [
  {
    category: 'AI/ML',
    title: 'Predictive Analytics for Retail',
    description:
      'Boosted sales by 30% for a major retailer using custom AI models and real-time data pipelines.',
    image:
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },

  {
    category: 'Web',
    title: 'E-Commerce Platform Launch',
    description:
      'Launched a scalable, high-converting online store for a global brand with custom integrations.',
    image:
      'https://images.unsplash.com/photo-1496171367476-4297a2a72838?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    category: 'IoT',
    title: 'Smart Logistics Dashboard',
    description:
      'Developed a real-time dashboard for logistics tracking and fleet management using IoT devices.',
    image:
      'https://images.unsplash.com/photo-1544006659-bf729608404a?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
];

const whyChooseUsPoints = [
  {
    title: 'Full-Stack Expertise',
    description:
      'From web to cloud, our team covers every layer of modern tech, providing holistic solutions.',
  },
  {
    title: 'Client-Centric Approach',
    description:
      'We focus on your goals, ensuring solutions that drive real business value and measurable ROI.',
  },
  {
    title: 'Agile & Innovative',
    description:
      'We use the latest tools and agile methodologies for rapid, high-quality delivery and adaptability.',
  },
  {
    title: 'End-to-End Support',
    description:
      'From initial strategy to ongoing support, we’re with you at every step of your digital journey.',
  },
];

const howWeWorkSteps = [
  {
    step: '1. Discovery',
    description: 'We analyze your needs and goals to craft the right solution.',
  },
  {
    step: '2. Design & Plan',
    description:
      'We architect and design a solution tailored to your business.',
  },
  {
    step: '3. Build & Launch',
    description:
      'Our engineers develop, test, and launch your solution with best practices.',
  },
  {
    step: '4. Support & Grow',
    description:
      'We provide ongoing support and enhancements for long-term success.',
  },
];

const testimonialsData = [
  {
    quote:
      'ICT Option transformed our operations, streamlining sales and inventory with incredible ease.',
    name: 'Alish White',
    title: 'Retail Entrepreneur',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote:
      'Their Power Apps solution enabled our team to build custom tools quickly, boosting productivity across departments.',
    name: 'Devin Mueller',
    title: 'IT Manager',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote:
      'The support and expertise from ICT Option have been phenomenal, delivering results beyond our expectations.',
    name: 'Dave Beech',
    title: 'Business Owner',
    image: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
];

const faqsData = [
  {
    question: 'What industries do you specialize in?',
    answer:
      'We serve healthcare, finance, retail, manufacturing, logistics, education, and many other sectors.',
  },
  {
    question: 'Can you build custom solutions?',
    answer:
      'Absolutely! We tailor every project to your unique requirements and business goals, ensuring a perfect fit.',
  },
  {
    question: 'How do you ensure project success?',
    answer:
      'We use agile methodologies, maintain transparent communication, and provide ongoing support to deliver exceptional results.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We work with cutting-edge technologies including React, Node.js, Python, AWS, Azure, and the latest frameworks and tools.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes, we provide comprehensive post-launch support, including maintenance, regular updates, and performance monitoring.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply contact us for a free consultation. We’ll discuss your needs and guide you through the next steps to bring your vision to life.',
  },
];

// --- Services Component ---

const Services = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent">
            Our <span className="text-secondary">Services</span>
          </span>
        }
        subtitle={
          <span className="text-accent">
            Complete Technology Solutions by Our{' '}
            <span className="text-secondary">Expert Team</span>
          </span>
        }
        description={
          <span className="text-gray-200">
            Discover our comprehensive range of technology solutions designed to
            **drive innovation, enhance efficiency, and accelerate your business
            growth** in the dynamic digital landscape.
          </span>
        }
        backgroundImage={service}
        gradient="from-primary via-black to-neutral-dark"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <Link
            to="/contact"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-glow-md hover:bg-primary hover:text-secondary hover:scale-105 transition-all duration-300 transform-gpu"
          >
            Get a Free Consultation
          </Link>
          <Link
            to="/products"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300 transform-gpu"
          >
            Explore Our Products
          </Link>
        </div>
      </Hero>

      {/* Featured Solutions (modern cards, accent corners) */}
      <section
        className="py-20 bg-neutral-dark relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
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

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading tracking-wide uppercase">
              Our Core Technology Services
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
              Discover our most innovative and in-demand technology offerings,
              designed to help your business thrive in a digital world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {servicesData.map((service, idx) => (
              <div
                key={service.name}
                className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-neutral-dark shadow-xl border border-neutral-700 flex flex-col group
                           hover:shadow-glow-md hover:border-secondary transition-all duration-300 transform hover:scale-[1.03]
                           before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-secondary/10 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500" // Added gradient, hover glow, and pseudo-element for subtle animation
                data-aos="zoom-in"
                data-aos-delay={100 + idx * 70}
              >
                {/* Image with overlay */}
                <div className="relative w-full h-40">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                  {/* Top label */}
                  <div className="absolute top-3 left-3 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full shadow">
                    {service.label}
                  </div>
                </div>
                {/* Card content */}
                <div className="flex-1 flex flex-col justify-between p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {/* Icon with enhanced styling */}
                    <div className="p-2 rounded-full bg-secondary/20 group-hover:bg-secondary/40 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <span className="text-secondary text-lg font-bold font-heading">
                      {service.name}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-90">
                    {service.description}
                  </p>
                  <Link
                    to={service.path}
                    className="mt-auto px-5 py-2 rounded-full bg-secondary text-primary font-semibold shadow-md hover:bg-accent hover:text-white transition-all duration-300 w-fit"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects (modern card style) */}
      <section
        className="py-20 bg-primary relative overflow-hidden" // Changed background to primary
        data-aos="fade-up"
        data-aos-delay="400"
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

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2 font-heading tracking-wide uppercase">
                Our Latest Projects
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
              <p className="text-gray-300 text-lg font-body max-w-xl">
                Explore some of our most recent and impactful technology
                projects, delivered for clients across various industries.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {projectsData.map((project, idx) => (
              <div
                key={idx}
                className="bg-neutral-dark rounded-2xl shadow-xl border border-neutral-700 flex flex-col overflow-hidden relative group hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-0 right-0 w-16 h-16 bg-secondary rounded-bl-2xl opacity-10 z-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-primary text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  {project.category}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-lg font-bold text-accent mb-2 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-body mb-4 leading-relaxed opacity-90">
                    {project.description}
                  </p>
                  <Link
                    to={project.link}
                    className="bg-secondary text-primary px-5 py-2 rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300 w-fit"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (modern card style) */}
      <section className="py-20 bg-neutral-dark relative overflow-hidden">
        {/* Subtle background pattern: diagonal lines */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(-10deg) scale(1.3)',
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading">
              Why Choose ICT Option?
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
              We deliver innovative, reliable, and scalable technology solutions
              tailored to your business needs, ensuring your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {whyChooseUsPoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-primary p-6 rounded-2xl shadow-xl border border-neutral-700 text-accent text-center group hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <h3 className="font-bold text-secondary text-xl mb-2 font-heading">
                  {point.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed opacity-90">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work (modern card style) */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Subtle background pattern: dots */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='2' fill='%239C92AC' fill-opacity='0.15'/%3E%3C/circle%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading">
              Our Streamlined Process
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
              Our proven process ensures your project is a success from start to
              finish, with clear milestones and collaborative steps.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {howWeWorkSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-neutral-dark p-6 rounded-2xl shadow-xl border border-accent text-accent text-center group hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <h3 className="font-bold text-secondary text-xl mb-2 font-heading">
                  {step.step}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed opacity-90">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (black, white, accent colors) */}
      <section
        className="py-20 bg-neutral-dark relative overflow-hidden" // Changed to neutral-dark for consistency
        data-aos="fade-up"
        data-aos-delay="600"
      >
        {/* Subtle background pattern: abstract lines */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20zm20 20h20v20H40V40zm20 20h20v20H60V60z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(20deg) scale(1.1)',
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Client Feedback
            </span>
            <h2 className="text-4xl font-extrabold text-accent mb-2 font-heading tracking-wide uppercase">
              What Our Clients Say
            </h2>
            <p className="text-gray-300 opacity-90 max-w-2xl mx-auto mb-6">
              Hear directly from businesses that have transformed their
              operations with our innovative and reliable technology solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-primary rounded-xl p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative group hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <p className="text-gray-300 text-base mb-8 font-medium leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4 mt-auto w-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-secondary"
                  />
                  <div>
                    <div className="font-bold text-accent text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {testimonial.title}
                    </div>
                  </div>
                  <span className="ml-auto text-secondary text-3xl font-bold">
                    “”
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (modern card style) */}
      <section
        className="py-20 bg-primary relative overflow-hidden" // Changed background to primary
        data-aos="fade-up"
        data-aos-delay="600"
      >
        {/* Subtle background pattern: small circles */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='3' fill='%239C92AC' fill-opacity='0.1'/%3E%3C/circle%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(-5deg) scale(1.05)',
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
              Answers to common questions about our services and approach to
              ensure you have all the information you need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {faqsData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-neutral-dark p-6 rounded-2xl shadow-xl border border-neutral-700 text-accent group hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                data-aos="zoom-in"
                data-aos-delay={idx * 80}
              >
                <h3 className="font-bold text-secondary text-xl mb-2 font-heading">
                  {faq.question}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed opacity-90">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (modern style) */}
      <section
        className="py-20 bg-gradient-to-br from-primary via-black to-neutral-dark text-center relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        {/* Subtle background pattern: abstract shapes */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M0 0h50v50H0V0zm50 50h50v50H50V50z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(30deg) scale(1.5)',
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 font-heading">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-body opacity-90">
            Our expert team can create tailored solutions that perfectly match
            your unique business requirements and drive your success.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-secondary text-primary px-8 py-4 rounded-full font-semibold shadow-glow-md hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
