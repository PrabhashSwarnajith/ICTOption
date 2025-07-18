import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components';
import { motion } from 'framer-motion';

// --- Data Definitions for easier management ---

const whyChooseUsPoints = [
  {
    title: 'Certified Experts',
    description:
      'Our team holds industry-leading certifications from Google, Meta, and HubSpot, backed by years of practical experience delivering results.',
    icon: '✨', // Replace with actual icon component/SVG if available
  },
  {
    title: 'Data-Driven Strategies',
    description:
      'Every decision is powered by in-depth analytics and performance insights, ensuring maximum ROI for your marketing spend.',
    icon: '📊',
  },
  {
    title: 'Innovative Creativity',
    description:
      "We don't just follow trends; we set them. Our creative team crafts compelling campaigns and content that truly captivate your audience.",
    icon: '💡',
  },
  {
    title: 'Measurable Growth',
    description:
      'Our focus is on tangible outcomes. We provide clear reporting on KPIs that matter, demonstrating real business growth for brands of all sizes.',
    icon: '📈',
  },
];

const howWeGrowSteps = [
  {
    step: '1. Audit & Analysis',
    description:
      'A deep dive into your current digital footprint, target audience, and competitive landscape to pinpoint opportunities.',
  },
  {
    step: '2. Strategic Blueprint',
    description:
      'Developing a bespoke, omnichannel digital marketing strategy meticulously tailored to your unique business goals.',
  },
  {
    step: '3. Agile Execution',
    description:
      'Seamlessly launching and managing campaigns across all chosen channels, ensuring continuous optimization and responsiveness.',
  },
  {
    step: '4. Performance Optimization',
    description:
      'Constant monitoring, A/B testing, and refinement based on real-time data to maximize conversions and overall ROI.',
  },
];

const successStories = [
  {
    title: 'E-commerce: 3x Sales Growth',
    description:
      'We orchestrated a comprehensive multi-channel digital campaign that directly led to a threefold increase in online sales for a prominent retail client.',
    tag: 'Retail',
  },
  {
    title: 'Local Business: #1 on Google',
    description:
      'Through an expert blend of local SEO and targeted content strategy, we elevated a local service business to the coveted top position in search results.',
    tag: 'Local SEO',
  },
  {
    title: 'SaaS: 5x Lead Generation',
    description:
      'Our optimized paid advertising strategies, combined with high-converting landing pages, drastically boosted lead generation by five times for a cutting-edge SaaS startup.',
    tag: 'B2B SaaS',
  },
];

const industries = [
  'Retail & E-commerce',
  'Healthcare',
  'Education',
  'Finance & Fintech',
  'Tech Startups',
  'Hospitality',
  'Real Estate',
  'Automotive',
  'Professional Services', // Added a few more for variety
];

const faqs = [
  {
    question: 'How quickly can I expect to see results from digital marketing?',
    answer:
      'While results vary depending on the strategy and industry, most of our clients start observing measurable improvements in key metrics within 1 to 3 months of campaign launch.',
  },
  {
    question: 'Do you manage paid advertising campaigns (PPC)?',
    answer:
      'Yes, absolutely. We specialize in managing highly effective paid ad campaigns across major platforms including Google Ads, Facebook Ads, Instagram Ads, and LinkedIn Ads, ensuring optimal budget utilization.',
  },
  {
    question: 'Can your team assist with content creation for my campaigns?',
    answer:
      'Definitely! Our content specialists are adept at creating a wide range of engaging content, including SEO-optimized blog posts, captivating social media content, compelling video scripts, and more.',
  },
  {
    question: 'What are your contract terms and pricing models?',
    answer:
      'We offer flexible engagement models, including both month-to-month retainers and customized long-term project-based agreements, designed to fit various business needs and budgets. We’re happy to discuss options in a consultation.',
  },
];

// --- Digital Marketing Component ---

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent">
            Digital <span className="text-secondary">Marketing</span>
          </span>
        }
        subtitle={
          <span className="text-white">
            Supercharge Your{' '}
            <span className="text-secondary">Online Presence</span>
          </span>
        }
        description={
          <span className="text-gray-200">
            Unleash the full potential of your brand online with comprehensive,
            data-driven digital marketing strategies that deliver measurable
            growth and strong ROI.
          </span>
        }
        backgroundImage="https://images.unsplash.com/photo-1579547621453-997ad92b2383?auto=format&fit=crop&w=1600&q=80" // More dynamic, abstract digital marketing image
        gradient="from-primary via-black to-neutral-dark"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <Link
            to="/contact"
            className="bg-secondary text-accent px-8 py-4 rounded-full font-semibold text-lg shadow-glow hover:scale-105 transition-all duration-300"
          >
            Get a Custom Strategy
          </Link>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
          >
            Explore All Services
          </Link>
        </div>
      </Hero>
      ---
      {/* About Digital Marketing - Enhanced Visual & Text Section */}
      <section className="py-20 bg-neutral-dark relative overflow-hidden">
        {/* Subtle geometric pattern in the background */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(10deg) scale(1.2)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Image with Overlays */}
          <motion.div
            className="relative flex justify-center items-center min-h-[350px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965da0?auto=format&fit=crop&w=1200&q=80" // Image: people collaborating on marketing
              alt="Strategic Digital Marketing"
              className="relative z-10 rounded-2xl shadow-2xl w-full max-w-lg object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105"
              style={{ aspectRatio: '4/3' }}
            />
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary rounded-full opacity-30 animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-accent rounded-full opacity-20 animate-spin-slow"></div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="pl-0 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading leading-tight">
              Driving Tangible Results in the Digital Sphere
            </h2>
            <p className="text-accent opacity-80 mb-8 max-w-xl text-lg">
              In today's competitive landscape, a strong **digital presence**
              isn't just an option—it's a necessity. We partner with businesses
              to develop and execute comprehensive digital marketing strategies
              that not only **increase visibility** but also **convert leads
              into loyal customers**. Our focus is on data-driven campaigns,
              innovative content, and a clear path to your marketing goals.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-secondary text-accent px-8 py-4 rounded-full font-bold shadow-glow hover:bg-accent hover:text-primary transition-all duration-300"
            >
              Discover Your Potential
            </Link>
          </motion.div>
        </div>
      </section>
      ---
      {/* Why Choose Us Section - Card Grid with motion */}
      <section className="py-20 bg-primary/10">
        {' '}
        {/* Different background tint */}
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-4 font-heading">
              Why Partner with ICT Option?
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>{' '}
            {/* Changed divider color for contrast */}
            <p className="text-lg text-accent font-body max-w-2xl mx-auto mt-4">
              We combine industry expertise with innovative strategies to ensure
              your digital marketing efforts yield exceptional returns.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <motion.div
                key={point.title}
                className="bg-primary p-6 rounded-lg text-accent text-center shadow-lg border border-white/10 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{point.icon}</div>{' '}
                {/* Icon placeholder */}
                <h3 className="font-bold text-secondary text-xl mb-2 font-heading">
                  {point.title}
                </h3>
                <p className="text-base leading-relaxed opacity-90">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* How We Grow Your Brand Section - Process with numbers and motion */}
      <section className="py-20 bg-accent/20 relative overflow-hidden">
        {' '}
        {/* New background tint */}
        {/* Background pattern */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%239C92AC' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4 font-heading">
              {' '}
              {/* Text color changed for contrast */}
              Our Streamlined Digital Marketing Process
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
            <p className="text-lg text-primary font-body max-w-2xl mx-auto mt-4 opacity-90">
              We follow a robust, iterative process designed to maximize
              efficiency and deliver predictable, scalable growth for your
              brand.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.img
              src="https://images.unsplash.com/photo-1544377073-4f938d8396e9?auto=format&fit=crop&w=1200&q=80" // New image: whiteboard strategy session
              alt="Digital Marketing Process"
              className="w-full max-w-lg rounded-2xl shadow-xl mb-8 md:mb-0 object-cover border-4 border-primary transition-transform duration-500 hover:scale-[1.02]"
              style={{ aspectRatio: '1.5/1' }}
              initial={{ opacity: 0, rotateY: 10 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            />
            <ul className="space-y-6 text-left max-w-xl mx-auto">
              {howWeGrowSteps.map((item, index) => (
                <motion.li
                  key={index}
                  className="bg-primary/80 p-6 rounded-xl text-accent shadow-md border border-white/10 flex items-start gap-4 transition-all duration-300 hover:bg-primary hover:shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-secondary text-primary rounded-full font-bold text-lg shadow-md">
                    {index + 1}
                  </span>
                  <div>
                    <span className="font-bold text-secondary text-lg">
                      {item.step}:
                    </span>{' '}
                    <p className="text-base text-accent opacity-90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      ---
      {/* Success Stories Section - Testimonials with a different visual flair */}
      <section className="py-20 bg-primary/20">
        {' '}
        {/* New background tint */}
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              Real Impact: Our Client Success Stories
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
            <p className="text-lg text-accent font-body max-w-2xl mx-auto mt-4">
              Don't just take our word for it. See how our strategic digital
              marketing solutions have generated impressive results for
              businesses like yours.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-neutral-dark p-6 rounded-xl text-accent shadow-lg border-t-4 border-secondary flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-secondary text-sm font-semibold mb-2">
                  {story.tag}
                </div>
                <h3 className="font-bold text-accent text-xl mb-3 font-heading">
                  {story.title}
                </h3>
                <p className="text-base leading-relaxed opacity-90 flex-grow">
                  {story.description}
                </p>
                <div className="mt-4 text-right text-sm italic opacity-80">
                  — Client Success
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Industries We Serve Section - Icon Grid / Tag Cloud style */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
        {' '}
        {/* Lightest background */}
        {/* Subtle background circles/dots */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='2' fill='%239C92AC' fill-opacity='0.15'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              Diverse Industries, Universal Growth
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
            <p className="text-lg text-accent font-body max-w-2xl mx-auto mt-4">
              Our adaptable strategies deliver proven digital marketing success
              across a wide range of sectors.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-neutral-dark text-accent px-6 py-3 rounded-full text-lg font-medium shadow-md border border-white/10 cursor-default transition-all duration-300 hover:bg-secondary hover:text-primary hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* FAQ Section - Collapsible (conceptual, using static for now) */}
      <section className="py-20 bg-neutral-dark">
        {' '}
        {/* Back to a darker section */}
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              Your Digital Marketing Questions, Answered
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
            <p className="text-lg text-accent font-body max-w-2xl mx-auto mt-4">
              Find quick answers to the most common inquiries about our digital
              marketing services.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-primary rounded-lg p-6 shadow-md border border-white/10 transition-shadow duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-secondary mb-2 text-xl cursor-pointer">
                  {faq.question}
                </h3>
                <p className="text-accent text-base leading-relaxed">
                  {faq.answer}
                </p>
                {/* For actual collapsible, you'd add state and click handlers here */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Call to Action Section - Final strong push */}
      <section className="py-20 bg-secondary">
        {' '}
        {/* Strong accent background */}
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6 drop-shadow-md">
              Ready to Dominate Your Digital Market?
            </h2>
            <p className="text-xl text-primary mb-10 max-w-2xl mx-auto opacity-90">
              Let's create a tailored digital marketing strategy that transforms
              your online presence into a powerful growth engine. Your success
              is our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-secondary px-10 py-4 rounded-full font-semibold text-lg shadow-glow-secondary hover:scale-105 transition-all duration-300"
              >
                Launch Your Campaign
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-primary text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-secondary transition-all duration-300"
              >
                View Our Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
