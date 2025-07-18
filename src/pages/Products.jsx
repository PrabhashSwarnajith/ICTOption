import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components'; // Assuming Hero component exists
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);

  // Product data with consistent styling
  const products = [
    {
      name: 'ICT Option Power Apps',
      subtitle: 'Empowering Businesses Through Intelligent, Low-Code Solutions',
      image: 'https://placehold.co/400x400/2a2a2a/f0f0f0?text=Power+Apps', // Replaced with placeholder
      description:
        'Build, automate, and optimize business processes with our intuitive low-code platform. Enable rapid innovation and empower your teams to create custom solutions with minimal IT involvement.',
      cta: 'Discover More',
      ctaLink: '/contact',
    },
    {
      name: 'ICT Option POS System',
      subtitle: 'The Ultimate Point of Sale & Business Management Solution',
      image: 'https://placehold.co/400x400/2a2a2a/f0f0f0?text=POS+System', // Replaced with placeholder
      description:
        'Streamline sales, inventory, and customer management with our all-in-one POS system. Designed for modern businesses seeking efficiency, reliability, and actionable insights.',
      cta: 'Discover More',
      ctaLink: '/contact',
    },
  ];

  // Dynamic data for Pricing Plans
  const pricingPlans = [
    {
      name: 'Premium Plan',
      price: '$199.90',
      frequency: '/month',
      features: [
        'All Features Included',
        'Unlimited Users',
        'Priority Support',
        'Free Upgrades',
        'Advanced Analytics',
      ],
      cta: 'Get Started',
      ctaLink: '/contact',
    },
    {
      name: 'Basic Plan',
      price: '$89.90',
      frequency: '/month',
      features: [
        'Core Features',
        'Up to 5 Users',
        'Email Support',
        'Free Updates',
        'Basic Analytics',
      ],
      cta: 'Get Started',
      ctaLink: '/contact',
    },
  ];

  // Dynamic data for Testimonials
  const testimonials = [
    {
      quote:
        'The ICT Option POS System revolutionized our retail operations, streamlining sales and inventory with ease.',
      name: 'Alish White',
      title: 'Retail Owner',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      quote:
        'Power Apps enabled our team to build custom solutions quickly, boosting productivity across departments.',
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

  // Dynamic data for FAQs
  const faqs = [
    {
      question: 'Can I try your products before purchasing?',
      answer: 'Yes! Reach out to schedule a free demo or trial of any product.',
    },
    {
      question: 'What kind of support and training do you offer?',
      answer:
        'We provide comprehensive onboarding, training, and 24/7 support for all our clients.',
    },
    {
      question: 'Are your solutions secure?',
      answer:
        'Our products adhere to enterprise-grade security and compliance standards.',
    },
    {
      question: 'Can I integrate your products with my existing systems?',
      answer:
        'Absolutely, our solutions are built for seamless integration with your current tools.',
    },
  ];

  return (
    <div className="min-h-screen bg-primary text-white font-body">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent font-heading">
            Our <span className="text-secondary">Products</span>
          </span>
        }
        subtitle={
          <span className="text-accent font-heading">
            Innovative Solutions for{' '}
            <span className="text-secondary">Modern Businesses</span>
          </span>
        }
        description={
          <span className="text-gray-200 font-body">
            Discover powerful, innovative solutions designed to accelerate your
            business growth and streamline operations with cutting-edge
            technology.
          </span>
        }
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        gradient="from-primary via-black to-neutral-dark"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <Link
            to="/contact"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-glow-md hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 transform-gpu font-body"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get Started
          </Link>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore Services
          </Link>
        </div>
      </Hero>

      {/* Main Products Section */}
      <section className="py-20 bg-neutral-dark relative overflow-hidden">
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
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Text Content */}
            <div className="flex-1 max-w-xl" data-aos="fade-right">
              <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-4 block font-body">
                We Excel At
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-6 font-heading leading-tight">
                Entrust Your Vision
                <br />
                <span className="text-secondary">to Our Experts</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 font-body leading-relaxed">
                {' '}
                {/* Adjusted text color */}
                We are a boutique digital transformation consultancy and
                development company. Since 2017, our team has delivered
                enterprise-grade projects for global brands, providing
                cutting-edge engineering solutions tailored to your needs.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-secondary text-primary px-6 py-3 rounded-full font-semibold text-base shadow-md hover:scale-105 transition-all duration-300 w-fit hover:bg-accent hover:text-white font-body"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <span>Our Approach</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                  />
                </svg>
              </Link>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center" data-aos="fade-left">
              <img
                src="https://placehold.co/600x750/2a2a2a/f0f0f0?text=Project+Specialist" // Placeholder image
                alt="Project Specialist"
                className="rounded-2xl object-cover w-full max-w-md shadow-2xl border-4 border-secondary hover:scale-105 transition-transform duration-500" // Added hover effect
                style={{ aspectRatio: '4/5' }}
              />
            </div>
          </div>

          {/* Feature Cards Row */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div
              className="bg-primary/70 rounded-xl p-8 shadow-xl flex flex-col items-start border border-neutral-700 min-h-[220px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300" // Refined background and hover
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <h3 className="text-xl font-bold text-accent mb-4 font-heading uppercase">
                Cross-Industry Expertise
              </h3>
              <p className="text-gray-300 text-base mb-4 font-body">
                {' '}
                {/* Adjusted text color */}
                Our solutions span multiple industries, delivering tailored
                innovation for any business sector.
              </p>
            </div>
            <div
              className="bg-primary/70 rounded-xl p-8 shadow-xl flex flex-col items-start border border-neutral-700 min-h-[220px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300" // Refined background and hover
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold text-accent mb-4 font-heading uppercase">
                Expert-Led Innovation
              </h3>
              <p className="text-gray-300 text-base mb-4 font-body">
                {' '}
                {/* Adjusted text color */}
                Our leadership combines deep technical and business expertise to
                drive project success.
              </p>
            </div>
            <div
              className="bg-secondary rounded-xl p-8 shadow-xl flex flex-col items-start border-2 border-secondary min-h-[220px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300" // Added hover
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-primary text-xl font-bold mb-4 font-heading uppercase">
                Tailored IT Solutions
              </h3>
              <p className="text-primary text-base mb-4 font-body">
                We deliver technology and expertise customized to your
                business’s unique needs and goals.
              </p>
            </div>
          </div>

          {/* Our Products Row (Already dynamic) */}
          <div className="grid md:grid-cols-2 gap-10 mt-16">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-primary/70 rounded-2xl p-8 flex flex-col md:flex-row items-center shadow-xl border border-neutral-700 relative min-h-[260px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300" // Refined background and hover
                data-aos="zoom-in-up"
                data-aos-delay={idx * 150}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-2 border-secondary mr-0 md:mr-8 mb-6 md:mb-0 group-hover:border-accent transition-colors duration-300" // Added hover effect
                  style={{ aspectRatio: '1/1' }}
                  data-aos="fade-right"
                  data-aos-delay={idx * 150 + 100}
                />
                <div
                  className="flex-1 flex flex-col justify-center"
                  data-aos="fade-left"
                  data-aos-delay={idx * 150 + 200}
                >
                  <h3 className="text-2xl font-extrabold text-accent font-heading mb-2 uppercase tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-base text-secondary font-heading mb-2 uppercase tracking-wide">
                    {product.subtitle}
                  </p>
                  <p className="text-gray-300 text-base font-body mb-4">
                    {' '}
                    {/* Adjusted text color */}
                    {product.description}
                  </p>
                  <Link
                    to={product.ctaLink}
                    className="bg-secondary text-primary px-6 py-2 rounded-full font-semibold text-base w-fit shadow-md hover:scale-105 transition-all duration-300 hover:bg-accent hover:text-white font-body" // Refined button style
                    data-aos="zoom-in"
                    data-aos-delay={idx * 150 + 300}
                  >
                    {product.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section (Now Dynamic) */}
      <section
        className="py-16 bg-primary relative overflow-hidden" // Changed background to primary, added relative & overflow-hidden
        data-aos="fade-up"
        data-aos-delay="100"
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
            <h2 className="text-3xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              Our Pricing
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
              Select a plan tailored to your business. All plans include full
              support and seamless onboarding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 items-stretch">
            {/* Introductory Pricing Card */}
            <div
              className="flex flex-col justify-between bg-neutral-dark rounded-2xl p-8 shadow-xl border border-neutral-700 min-h-[370px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300" // Refined background and hover
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-2 block font-body">
                  Why Choose Us
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-accent mb-4 font-heading uppercase tracking-wide">
                  Flexible Plans for Your Needs
                </h2>
                <p className="text-gray-300 text-base mb-6 font-body">
                  {' '}
                  {/* Adjusted text color */}
                  Select a plan tailored to your business. All plans include
                  full support and seamless onboarding.
                </p>
                <ul className="text-gray-300 text-sm space-y-2 pl-4 list-disc font-body">
                  {' '}
                  {/* Adjusted text color */}
                  <li>Flexible monthly or annual billing</li>
                  <li>No hidden fees, fully transparent</li>
                  <li>Upgrade or downgrade anytime</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="mt-8 bg-secondary text-primary px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase shadow-md hover:scale-105 transition-all duration-300 w-fit hover:bg-accent hover:text-white font-body" // Refined button style
              >
                View All Plans
              </Link>
            </div>

            {/* Dynamic Pricing Plans */}
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-neutral-dark rounded-2xl p-8 shadow-xl border border-neutral-700 min-h-[370px] justify-between hover:shadow-2xl hover:scale-[1.02] transition-all duration-300" // Refined background and hover
                data-aos="fade-up"
                data-aos-delay={300 + idx * 100}
              >
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2 font-heading uppercase">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-extrabold text-secondary mb-2 font-heading">
                    {plan.price}
                    <span className="text-gray-300 text-base font-medium font-body">
                      {' '}
                      {/* Adjusted text color */}
                      {plan.frequency}
                    </span>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-2 mb-6 pl-4 list-disc font-body">
                    {' '}
                    {/* Adjusted text color */}
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={plan.ctaLink}
                  className="bg-secondary text-primary px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase shadow-md hover:scale-105 transition-all duration-300 w-fit hover:bg-accent hover:text-white font-body" // Refined button style
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (Now Dynamic) */}
      <section
        className="py-16 bg-black relative overflow-hidden" // bg-black retained for distinct background image effect
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
            alt="Testimonials Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-neutral-900/80" />{' '}
          {/* Darker, more integrated overlay */}
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm font-body">
              Testimonials
            </span>
            <h2 className="text-4xl font-extrabold text-accent mb-2 font-heading tracking-wide uppercase">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 opacity-90 max-w-2xl mx-auto mb-6 font-body">
              Hear from businesses that have transformed their operations with
              our innovative solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-neutral-800 rounded-xl p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative min-h-[260px] max-w-[370px] mx-auto hover:shadow-2xl hover:scale-[1.02] transition-all duration-300" // Refined card style
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
              >
                <p className="text-gray-300 text-base mb-8 font-medium font-body leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto w-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-secondary"
                  />
                  <div>
                    <div className="font-bold text-secondary text-base font-body">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-xs font-body">
                      {testimonial.title}
                    </div>
                  </div>
                  <span className="ml-auto text-accent text-3xl font-bold font-heading">
                    “”
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (Now Dynamic) */}
      <section
        className="py-16 bg-neutral-dark relative overflow-hidden" // Added relative & overflow-hidden
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {/* Subtle background pattern: Small Circles */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='3' fill='%236B7280' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(-10deg) scale(1.05)',
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
              Find answers to common questions about our products and services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-primary/70 p-6 rounded-xl border border-neutral-700 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300" // Refined background and hover
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <h3 className="font-semibold text-secondary text-xl mb-2 font-heading">
                  {' '}
                  {/* Adjusted font size and family */}
                  {faq.question}
                </h3>
                <p className="text-gray-300 font-body leading-relaxed">
                  {faq.answer}
                </p>{' '}
                {/* Adjusted text color and line height */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-20 bg-gradient-to-br from-primary via-black to-neutral-dark text-center relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="400"
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
            Ready to Elevate Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-body">
            Explore our cutting-edge products and find the perfect solution to
            streamline your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold font-body shadow-glow-md hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 transform-gpu"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              Request a Demo
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold font-body hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
