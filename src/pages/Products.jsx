import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components';
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
      image: '/src/assets/powerapps.png',
      description:
        'Build, automate, and optimize business processes with our intuitive low-code platform. Enable rapid innovation and empower your teams to create custom solutions with minimal IT involvement.',
      cta: 'Discover More',
      ctaLink: '/contact',
    },
    {
      name: 'ICT Option POS System',
      subtitle: 'The Ultimate Point of Sale & Business Management Solution',
      image: '/src/assets/possystem.png',
      description:
        'Streamline sales, inventory, and customer management with our all-in-one POS system. Designed for modern businesses seeking efficiency, reliability, and actionable insights.',
      cta: 'Discover More',
      ctaLink: '/contact',
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent">
            Our <span className="text-secondary">Products</span>
          </span>
        }
        subtitle={
          <span className="text-accent">
            Innovative Solutions for{' '}
            <span className="text-secondary">Modern Businesses</span>
          </span>
        }
        description={
          <span className="text-accent">
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
            className="bg-secondary text-accent px-8 py-4 rounded-full font-semibold text-lg shadow-glow hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get Started
          </Link>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore Services
          </Link>
        </div>
      </Hero>

      {/* Main Products Section */}
      <section className="py-20 bg-neutral-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Text Content */}
            <div className="flex-1 max-w-xl" data-aos="fade-right">
              <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-4 block">
                We Excel At
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-6 font-heading leading-tight">
                Entrust Your Vision
                <br />
                <span className="text-secondary">to Our Experts</span>
              </h2>
              <p className="text-accent text-lg mb-8">
                We are a boutique digital transformation consultancy and
                development company. Since 2017, our team has delivered
                enterprise-grade projects for global brands, providing
                cutting-edge engineering solutions tailored to your needs.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-secondary text-primary px-6 py-3 rounded-full font-semibold text-base shadow hover:scale-105 transition-all duration-300 w-fit"
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
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
                alt="Project Specialist"
                className="rounded-2xl object-cover w-full max-w-md shadow-2xl border-4 border-secondary"
                style={{ aspectRatio: '4/5' }}
              />
            </div>
          </div>

          {/* Feature Cards Row */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div
              className="bg-black/80 rounded-xl p-8 shadow-xl flex flex-col items-start border border-neutral-700 min-h-[220px]"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <h3 className="text-xl font-bold text-accent mb-4 font-heading uppercase">
                Cross-Industry Expertise
              </h3>
              <p className="text-accent text-base mb-4">
                Our solutions span multiple industries, delivering tailored
                innovation for any business sector.
              </p>
            </div>
            <div
              className="bg-black/80 rounded-xl p-8 shadow-xl flex flex-col items-start border border-neutral-700 min-h-[220px]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold text-accent mb-4 font-heading uppercase">
                Expert-Led Innovation
              </h3>
              <p className="text-accent text-base mb-4">
                Our leadership combines deep technical and business expertise to
                drive project success.
              </p>
            </div>
            <div
              className="bg-secondary rounded-xl p-8 shadow-xl flex flex-col items-start border-2 border-secondary min-h-[220px]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-bold text-primary mb-4 font-heading uppercase">
                Tailored IT Solutions
              </h3>
              <p className="text-primary text-base mb-4">
                We deliver technology and expertise customized to your
                business’s unique needs and goals.
              </p>
            </div>
          </div>

          {/* Our Products Row */}
          <div className="grid md:grid-cols-2 gap-10 mt-16">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-black/90 rounded-2xl p-8 flex flex-col md:flex-row items-center shadow-xl border border-neutral-700 relative min-h-[260px]"
                data-aos="zoom-in-up"
                data-aos-delay={idx * 150}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-2 border-secondary mr-0 md:mr-8 mb-6 md:mb-0"
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
                  <p className="text-accent text-base font-body mb-4">
                    {product.description}
                  </p>
                  <Link
                    to={product.ctaLink}
                    className="bg-secondary text-primary px-6 py-2 rounded-full font-semibold text-base w-fit shadow-md hover:scale-105 transition-all duration-300"
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

      {/* Pricing Section */}
      <section
        className="py-16 bg-neutral-dark"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 items-stretch">
            <div className="flex flex-col justify-between bg-black/90 rounded-2xl p-8 shadow-xl border border-neutral-700 min-h-[370px]">
              <div>
                <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-2 block">
                  Our Pricing
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-accent mb-4 font-heading uppercase tracking-wide">
                  Flexible Plans for Your Needs
                </h2>
                <p className="text-accent text-base mb-6">
                  Select a plan tailored to your business. All plans include
                  full support and seamless onboarding.
                </p>
                <ul className="text-accent text-sm space-y-2 pl-4 list-disc">
                  <li>Flexible monthly or annual billing</li>
                  <li>No hidden fees, fully transparent</li>
                  <li>Upgrade or downgrade anytime</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="mt-8 bg-secondary text-primary px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase shadow hover:scale-105 transition-all duration-300 w-fit"
              >
                View All Plans
              </Link>
            </div>
            <div className="flex flex-col bg-black/90 rounded-2xl p-8 shadow-xl border border-neutral-700 min-h-[370px] justify-between">
              <div>
                <h3 className="text-xl font-bold text-accent mb-2 font-heading uppercase">
                  Premium Plan
                </h3>
                <div className="text-3xl font-extrabold text-secondary mb-2">
                  $199.90
                  <span className="text-accent text-base font-medium">
                    /month
                  </span>
                </div>
                <ul className="text-accent text-sm space-y-2 mb-6 pl-4 list-disc">
                  <li>All Features Included</li>
                  <li>Unlimited Users</li>
                  <li>Priority Support</li>
                  <li>Free Upgrades</li>
                  <li>Advanced Analytics</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="bg-secondary text-primary px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase shadow hover:scale-105 transition-all duration-300 w-fit"
              >
                Get Started
              </Link>
            </div>
            <div className="flex flex-col bg-black/90 rounded-2xl p-8 shadow-xl border border-neutral-700 min-h-[370px] justify-between">
              <div>
                <h3 className="text-xl font-bold text-accent mb-2 font-heading uppercase">
                  Basic Plan
                </h3>
                <div className="text-3xl font-extrabold text-secondary mb-2">
                  $89.90
                  <span className="text-accent text-base font-medium">
                    /month
                  </span>
                </div>
                <ul className="text-accent text-sm space-y-2 mb-6 pl-4 list-disc">
                  <li>Core Features</li>
                  <li>Up to 5 Users</li>
                  <li>Email Support</li>
                  <li>Free Updates</li>
                  <li>Basic Analytics</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="bg-secondary text-primary px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase shadow hover:scale-105 transition-all duration-300 w-fit"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-16 bg-neutral-dark relative overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
            alt="Testimonials Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Testimonials
            </span>
            <h2 className="text-4xl font-extrabold text-accent mb-2 font-heading tracking-wide uppercase">
              What Our Clients Say
            </h2>
            <p className="text-accent opacity-80 max-w-2xl mx-auto mb-6">
              Hear from businesses that have transformed their operations with
              our innovative solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/80 rounded-xl p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative min-h-[260px] max-w-[370px] mx-auto">
              <p className="text-accent text-base mb-8 font-medium">
                The ICT Option POS System revolutionized our retail operations,
                streamlining sales and inventory with ease.
              </p>
              <div className="flex items-center gap-4 mt-auto w-full">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Alish White"
                  className="w-12 h-12 rounded-full border-2 border-secondary"
                />
                <div>
                  <div className="font-bold text-accent text-base">
                    Alish White
                  </div>
                  <div className="text-accent text-xs">Retail Owner</div>
                </div>
                <span className="ml-auto text-secondary text-3xl font-bold">
                  “”
                </span>
              </div>
            </div>
            <div className="bg-black/80 rounded-xl p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative min-h-[260px] max-w-[370px] mx-auto">
              <p className="text-accent text-base mb-8 font-medium">
                Power Apps enabled our team to build custom solutions quickly,
                boosting productivity across departments.
              </p>
              <div className="flex items-center gap-4 mt-auto w-full">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Devin Mueller"
                  className="w-12 h-12 rounded-full border-2 border-secondary"
                />
                <div>
                  <div className="font-bold text-accent text-base">
                    Devin Mueller
                  </div>
                  <div className="text-accent text-xs">IT Manager</div>
                </div>
                <span className="ml-auto text-secondary text-3xl font-bold">
                  “”
                </span>
              </div>
            </div>
            <div className="bg-black/80 rounded-xl p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative min-h-[260px] max-w-[370px] mx-auto">
              <p className="text-accent text-base mb-8 font-medium">
                The support and expertise from ICT Option have been phenomenal,
                delivering results beyond our expectations.
              </p>
              <div className="flex items-center gap-4 mt-auto w-full">
                <img
                  src="https://randomuser.me/api/portraits/men/36.jpg"
                  alt="Dave Beech"
                  className="w-12 h-12 rounded-full border-2 border-secondary"
                />
                <div>
                  <div className="font-bold text-accent text-base">
                    Dave Beech
                  </div>
                  <div className="text-accent text-xs">Business Owner</div>
                </div>
                <span className="ml-auto text-secondary text-3xl font-bold">
                  “”
                </span>
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
            <h2 className="text-3xl font-bold text-accent mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-accent font-body max-w-2xl mx-auto">
              Find answers to common questions about our products and services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-black/90 p-6 rounded-lg border border-neutral-700">
              <h3 className="font-semibold text-secondary mb-2">
                Can I try your products before purchasing?
              </h3>
              <p className="text-accent">
                Yes! Reach out to schedule a free demo or trial of any product.
              </p>
            </div>
            <div className="bg-black/90 p-6 rounded-lg border border-neutral-700">
              <h3 className="font-semibold text-secondary mb-2">
                What kind of support and training do you offer?
              </h3>
              <p className="text-accent">
                We provide comprehensive onboarding, training, and 24/7 support
                for all our clients.
              </p>
            </div>
            <div className="bg-black/90 p-6 rounded-lg border border-neutral-700">
              <h3 className="font-semibold text-secondary mb-2">
                Are your solutions secure?
              </h3>
              <p className="text-accent">
                Our products adhere to enterprise-grade security and compliance
                standards.
              </p>
            </div>
            <div className="bg-black/90 p-6 rounded-lg border border-neutral-700">
              <h3 className="font-semibold text-secondary mb-2">
                Can I integrate your products with my existing systems?
              </h3>
              <p className="text-accent">
                Absolutely, our solutions are built for seamless integration
                with your current tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
