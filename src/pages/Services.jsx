import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Hero,
  ServiceCard,
  ProjectCard,
  WhyChooseUsCard,
  HowWeWorkStep,
  TestimonialCard,
  FAQCard,
} from '../components';
import service from '../assets/img/services.webp';

// Import data arrays from the new data file
import {
  servicesData,
  projectsData,
  whyChooseUsPoints,
  howWeWorkSteps,
  testimonialsData,
  faqsData,
} from '../data/servicesData.jsx';

//  Services Component

const Services = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white font-body">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent font-heading">
            Our <span className="text-secondary">Services</span>
          </span>
        }
        subtitle={
          <span className="text-accent font-heading">
            Complete Technology Solutions by Our{' '}
            <span className="text-secondary">Expert Team</span>
          </span>
        }
        description={
          <span className="text-neutral-300 font-body">
            {' '}
            {/* Changed text-gray-200 to text-neutral-300 */}
            Discover our comprehensive range of technology solutions designed to
            **drive innovation, enhance efficiency, and accelerate your business
            growth** in the dynamic digital landscape.
          </span>
        }
        backgroundImage={service}
        gradient="from-primary via-black/80 to-neutral-900"
        className="brightness-110"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          {' '}
          {/* Removed animate-float */}
          <Link
            to="/contact"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-secondary-light hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body" // shadow-glow-md to shadow-lg, hover:bg-accent hover:text-white to hover:bg-secondary-light hover:text-primary
          >
            Get a Free Consultation
          </Link>
          <Link
            to="/products"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300 transform-gpu font-body"
          >
            Explore Our Products
          </Link>
        </div>
      </Hero>

      {/* Featured Solutions (modern cards, accent corners) */}
      <section
        className="py-20 bg-neutral-900 relative overflow-hidden" // Changed bg-neutral-dark to bg-neutral-900, py-16 to py-20
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Subtle background pattern: circuit board / digital lines */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Changed opacity-05 to opacity-10
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(15deg) scale(1.2)',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Standardized container */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading tracking-wide uppercase">
              {' '}
              {/* Added md:text-4xl and tracking-wide uppercase */}
              Our Core Technology Services
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-neutral-300 font-body max-w-2xl mx-auto">
              {' '}
              {/* Changed text-gray-300 to text-neutral-300 */}
              Discover our most innovative and in-demand technology offerings,
              designed to help your business thrive in a digital world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {servicesData.map((service, idx) => (
              <ServiceCard
                key={service.name}
                service={service}
                aosDelay={100 + idx * 70}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects (modern card style) */}
      <section
        className="py-20 bg-primary relative overflow-hidden" // Changed background to primary, py-16 to py-20
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Subtle background pattern: hexagonal grid */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Changed opacity-05 to opacity-10
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0L40 20L20 40L0 20zM20 0L0 20L20 40L40 20L20 0z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(5deg) scale(1.1)',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Standardized container */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2 font-heading tracking-wide uppercase">
                {' '}
                {/* Added md:text-4xl and tracking-wide uppercase */}
                Our Latest Projects
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto md:mx-0 mb-4"></div>{' '}
              {/* Adjusted margin for responsiveness */}
              <p className="text-neutral-300 text-lg font-body max-w-xl">
                {' '}
                {/* Changed text-gray-300 to text-neutral-300 */}
                Explore some of our most recent and impactful technology
                projects, delivered for clients across various industries.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {projectsData.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (modern card style) */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {' '}
        {/* Changed bg-neutral-dark to bg-neutral-900, py-16 to py-20 */}
        {/* Subtle background pattern: diagonal lines */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Changed opacity-05 to opacity-10
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(-10deg) scale(1.3)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Standardized container */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading tracking-wide uppercase">
              {' '}
              {/* Added md:text-4xl and tracking-wide uppercase */}
              Why Choose ICT Option?
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-neutral-300 font-body max-w-2xl mx-auto">
              {' '}
              {/* Changed text-gray-300 to text-neutral-300 */}
              We deliver innovative, reliable, and scalable technology solutions
              tailored to your business needs, ensuring your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {whyChooseUsPoints.map((point, idx) => (
              <WhyChooseUsCard key={idx} point={point} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work (modern card style) */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {' '}
        {/* Changed py-16 to py-20 */}
        {/* Subtle background pattern: dots */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Changed opacity-05 to opacity-10
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='2' fill='%239C92AC' fill-opacity='0.15'/%3E%3C/circle%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Standardized container */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              {' '}
              {/* Added md:text-4xl and tracking-wide uppercase */}
              Our Streamlined Process
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-lg text-neutral-300 font-body max-w-2xl mx-auto">
              {' '}
              {/* Changed text-gray-300 to text-neutral-300 */}
              Our proven process ensures your project is a success from start to
              finish, with clear milestones and collaborative steps.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {howWeWorkSteps.map((step, idx) => (
              <HowWeWorkStep key={idx} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (black, white, accent colors) */}
      <section
        className="py-20 bg-neutral-900 relative overflow-hidden" // Changed bg-neutral-dark to bg-neutral-900, py-16 to py-20
        data-aos="fade-up"
        data-aos-delay="600"
      >
        {/* Subtle background pattern: abstract lines */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Changed opacity-05 to opacity-10
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20zm20 20h20v20H40V40zm20 20h20v20H60V60z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(20deg) scale(1.1)',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Standardized container */}
          <div className="text-center mb-12">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-accent mb-2 font-heading tracking-wide uppercase">
              {' '}
              {/* Changed text-4xl to md:text-4xl for consistency, added tracking-wide uppercase */}
              What Our Clients Say
            </h2>
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto mb-6">
              {' '}
              {/* Changed text-gray-300 to text-neutral-300 */}
              Hear directly from businesses that have transformed their
              operations with our innovative and reliable technology solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (modern card style) */}
      <section
        className="py-20 bg-primary relative overflow-hidden" // Changed py-16 to py-20
        data-aos="fade-up"
        data-aos-delay="600"
      >
        {/* Subtle background pattern: small circles */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Changed opacity-05 to opacity-10
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='3' fill='%239C92AC' fill-opacity='0.1'/%3E%3C/circle%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(-5deg) scale(1.05)',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Standardized container */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading tracking-wide uppercase">
              {' '}
              {/* Added md:text-4xl and tracking-wide uppercase */}
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-neutral-300 font-body max-w-2xl mx-auto">
              {' '}
              {/* Changed text-gray-300 to text-neutral-300 */}
              Answers to common questions about our services and approach to
              ensure you have all the information you need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {faqsData.map((faq, idx) => (
              <FAQCard key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (modern style) */}
      <section
        className="py-20 bg-gradient-to-br from-primary via-neutral-900 to-accent text-center relative overflow-hidden" // Changed via-black to via-neutral-900, to-neutral-dark to to-accent for a stronger gradient
        data-aos="fade-up"
        data-aos-delay="900"
      >
        {/* Subtle background pattern: abstract shapes */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Changed opacity-05 to opacity-10
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M0 0h50v50H0V0zm50 50h50v50H50V50z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(30deg) scale(1.5)',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Standardized container */}
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 font-heading tracking-wide uppercase">
            {' '}
            {/* Added md:text-4xl and tracking-wide uppercase */}
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto font-body opacity-90">
            {' '}
            {/* Changed text-gray-300 to text-neutral-300 */}
            Our expert team can create tailored solutions that perfectly match
            your unique business requirements and drive your success.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-secondary text-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-secondary-light hover:text-primary transition-all duration-300 transform hover:scale-105" // shadow-glow-md to shadow-lg, hover:bg-accent hover:text-white to hover:bg-secondary-light hover:text-primary
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
