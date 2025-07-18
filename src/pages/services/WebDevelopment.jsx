import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components'; // Assuming Hero component exists
import { motion } from 'framer-motion';

// Import local images
import gayanImg from '../../assets/team/gayan.jpeg';
import hariniImg from '../../assets/team/harini.jpeg';
import isuruImg from '../../assets/team/isuru.jpeg';
import web from '../../assets/img/web.jpg';
import web1 from '../../assets/img/web1.jpeg';
import web2 from '../../assets/img/web2.jpeg';

// --- Data Definitions ---

const webFeatures = [
  {
    title: 'Custom Web Applications',
    icon: '💻', // Using an emoji for simplicity, replace with SVG/component if desired
    desc: 'Building bespoke web solutions tailored precisely to your unique business processes and goals.',
  },
  {
    title: 'Responsive & Adaptive Design',
    icon: '📱',
    desc: 'Crafting websites that provide an optimal viewing and interaction experience across all devices.',
  },
  {
    title: 'E-commerce & CMS Solutions',
    icon: '🛒',
    desc: 'Developing powerful online stores and content management systems to grow your digital presence.',
  },
  {
    title: 'Performance Optimization',
    icon: '⚡',
    desc: 'Ensuring your website loads quickly and performs smoothly, keeping users engaged and improving SEO.',
  },
  {
    title: 'Scalable Backend Development',
    icon: '⚙️',
    desc: 'Building robust and scalable server-side architecture to support your growing web application.',
  },
  {
    title: 'API Development & Integration',
    icon: '🔌',
    desc: 'Creating custom APIs and integrating third-party services for enhanced functionality.',
  },
];

const technologies = [
  {
    name: 'React',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Vue.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
  },
  {
    name: 'Angular',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
  },
  {
    name: 'Node.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  },
  {
    name: 'Python (Django/Flask)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
  {
    name: 'PHP (Laravel)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
  },
  {
    name: 'HTML5/CSS3',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
  },
  {
    name: 'JavaScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
  },
  {
    name: 'SQL/NoSQL',
    logo: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg', // Example: PostgreSQL icon
  },
];

const processSteps = [
  { label: 'Discovery & Strategy', value: 90 },
  { label: 'UI/UX Design & Prototyping', value: 92 },
  { label: 'Development & Iteration', value: 90 },
  { label: 'Deployment & Ongoing Support', value: 88 },
];

const statistics = [
  { value: '30+', label: 'Web Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction Rate' },
  { value: '10+', label: 'Years of Experience' },
];

const testimonials = [
  {
    quote:
      'ICT Option delivered our web project on time and exceeded our expectations. Highly skilled and professional team.',
    name: 'Gayan',
    title: 'Entrepreneur',
    avatar: gayanImg,
  },
  {
    quote:
      'Our new website is fast, secure, and easy to manage. Great experience working with ICT Option!',
    name: 'Harini',
    title: 'Business Owner',
    avatar: hariniImg,
  },
  {
    quote:
      'Professional, responsive, and creative. Highly recommended for web projects!',
    name: 'Isuru',
    title: 'Manager',
    avatar: isuruImg,
  },
];

const faqs = [
  {
    question: 'What web technologies do you use?',
    answer:
      'We specialize in modern web technologies including React, Vue, Angular for front-end, and Node.js, Python (Django/Flask), PHP (Laravel) for back-end, along with various database solutions to build robust and scalable web applications.',
  },
  {
    question: 'How do I start a web project with you?',
    answer:
      "Starting your web project is simple! Contact us for a free consultation. We'll discuss your vision, gather your requirements, and outline a tailored development plan.",
  },
  {
    question: 'Do you offer ongoing maintenance and support?',
    answer:
      "Absolutely. We provide comprehensive post-launch support and maintenance packages, ensuring your website remains secure, up-to-date, and performs optimally. We're here for the long haul.",
  },
];

// --- WebDevelopment Component ---

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent">
            Web <span className="text-secondary">Development</span>
          </span>
        }
        subtitle={
          <span className="text-accent">
            Transforming Ideas into{' '}
            <span className="text-secondary">Digital Reality</span>
          </span>
        }
        description={
          <span className="text-accent">
            We build cutting-edge web solutions that drive innovation, enhance
            user experiences, and accelerate business growth in the modern
            digital landscape.
          </span>
        }
        backgroundImage={web2}
        gradient="from-primary via-black to-neutral-dark"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <Link
            to="/services"
            className="bg-secondary text-accent px-8 py-4 rounded-full font-semibold text-lg shadow-glow hover:scale-105 transition-all duration-300"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </Hero>
      ---
      {/* Section 1: About Our Web Solutions - Enhanced Split Layout */}
      <section className="py-20 bg-accent/10 relative overflow-hidden">
        {/* Pattern Background */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(10deg) scale(1.2)',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Dynamic Image Showcase */}
          <div className="relative flex justify-center items-center min-h-[350px] p-4">
            {/* Subtle animations/decorations around the image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -top-6 -left-6 w-36 h-36 bg-secondary rounded-full mix-blend-lighten opacity-20 animate-spin-slow"
            ></motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 w-28 h-28 bg-accent-light rounded-xl mix-blend-lighten opacity-20 transform rotate-45"
            ></motion.div>

            <motion.img
              src={web1}
              alt="Advanced Web Development"
              className="relative z-10 rounded-2xl shadow-3xl w-full max-w-lg object-cover transform transition-transform duration-500 hover:scale-105"
              style={{
                aspectRatio: '4/3',
                border: '4px solid rgba(255, 255, 255, 0.15)',
              }}
              initial={{ rotateY: -10, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            />
          </div>

          {/* Right: Detailed Text and Key Offerings */}
          <div className="pl-0 md:pl-8">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Our Web Development Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading leading-tight">
              Crafting High-Impact Web Solutions
            </h2>
            <p className="text-accent opacity-80 mb-8 max-w-xl text-lg">
              We specialize in creating **dynamic, robust, and scalable web
              applications** that serve as the digital backbone of your
              business. Our approach combines meticulous UI/UX design with
              cutting-edge development practices to deliver platforms that are
              not just functional, but truly transformative for user engagement
              and business efficiency.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {webFeatures.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  className="rounded-xl p-4 flex flex-col items-center text-center shadow-lg border border-white/10 bg-gradient-to-br from-primary/5 to-neutral-dark/40 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <span className="w-12 h-12 flex items-center justify-center text-3xl mb-4 bg-gradient-to-br from-secondary to-accent-light text-white rounded-full shadow-md">
                    {feature.icon}
                  </span>
                  <span className="font-semibold text-accent text-base mb-1">
                    {feature.title}
                  </span>
                  {/* <span className="text-accent text-xs opacity-70">{feature.desc}</span> */}{' '}
                  {/* Uncomment if you want descriptions on cards */}
                </motion.div>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-block bg-secondary text-accent px-8 py-4 rounded-full font-bold shadow-glow hover:bg-accent hover:text-primary transition-all duration-300"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
      ---
      {/* Process Section - Progress Bars with light background */}
      <section className="py-20 bg-primary/10">
        {' '}
        {/* Changed background */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text and Progress Bars */}
          <div className="pr-0 md:pr-8">
            <div className="mb-6">
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">
                Our Proven Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading">
                A Transparent Path to Your Web Success
              </h2>
              <p className="text-accent opacity-80 mb-8 max-w-xl">
                We follow a collaborative and agile development process,
                ensuring your project is delivered efficiently, on time, and
                exceeds your expectations for functionality and user experience.
              </p>
            </div>
            <div className="space-y-6">
              {processSteps.map((item, idx) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-accent font-semibold">
                      {item.label}
                    </span>
                    <span className="text-secondary font-bold">
                      {item.value}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-neutral-light rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-secondary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      transition={{
                        duration: 1.2,
                        delay: idx * 0.2,
                        ease: 'easeOut',
                      }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Modern Image with Accent Corners */}
          <div className="relative flex justify-center items-center min-h-[320px]">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary rounded-xl z-0"></div>
            <img
              src={web}
              alt="Web Development Process"
              className="relative z-10 rounded-2xl shadow-2xl w-full max-w-lg object-cover"
              style={{ aspectRatio: '4/3' }}
            />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-secondary rounded-xl z-0"></div>
          </div>
        </div>
      </section>
      ---
      {/* Technologies Section - Logos Grid with different background */}
      <section className="py-20 bg-neutral-dark relative overflow-hidden">
        {' '}
        {/* Changed background */}
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
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
              Our Modern Technology Stack
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
            <p className="text-accent opacity-80 max-w-2xl mx-auto mt-4">
              We leverage leading-edge frameworks and languages to build
              **high-performance, secure, and future-proof** web applications
              that stand the test of time.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {' '}
            {/* Adjusted grid for more balance */}
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group cursor-pointer flex flex-col items-center"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08, // Faster staggering
                  type: 'spring',
                  stiffness: 120, // Slightly stiffer for more pop
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  y: -10,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary/70 to-neutral-dark/80 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:border-2 group-hover:border-secondary">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-14 object-contain"
                  />
                </div>
                <p className="text-center text-base text-accent mt-3 group-hover:text-secondary transition-colors font-medium">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Statistics Section - Changed background for contrast */}
      <section className="py-20 bg-primary/20">
        {' '}
        {/* Changed background */}
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {statistics.map((stat, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-gradient-to-br from-neutral-dark/70 to-primary/80 rounded-xl shadow-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-secondary mb-2 drop-shadow-lg">
                  {/* Using a simple counter animation for impact if you have a Counter component */}
                  {stat.value}
                </div>
                <div className="text-accent text-lg font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      ---
      {/* Testimonials Section - Distinct background with subtle pattern */}
      <section className="py-20 bg-accent/20 relative overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%239C92AC' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Client Success Stories
            </span>
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              What Our Valued Clients Say
            </h2>
            <p className="text-accent opacity-80 max-w-2xl mx-auto">
              Our commitment to excellence shines through in the words of those
              we've helped succeed. Discover the impact of our web solutions
              directly from our partners.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="bg-primary rounded-xl p-8 shadow-lg flex flex-col items-center border-t-4 border-secondary hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <p className="text-accent text-base mb-6 text-center italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-secondary object-cover" // Larger avatar, object-cover
                  />
                  <div>
                    <div className="font-bold text-secondary text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-accent text-sm opacity-90">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* FAQ Section - Clean, slightly different background */}
      <section className="py-20 bg-primary/5">
        {' '}
        {/* Changed background */}
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              Common Questions Answered
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-primary rounded-lg p-6 shadow-md border border-white/10 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-bold text-secondary mb-2 text-lg">
                  {faq.question}
                </div>
                <div className="text-accent text-base leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Call to Action Section - Strongest background */}
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
              {' '}
              {/* Text color changed for contrast */}
              Ready to Launch Your Next Web Project?
            </h2>
            <p className="text-xl text-primary mb-10 max-w-2xl mx-auto opacity-90">
              {' '}
              {/* Text color changed for contrast */}
              Let's collaborate to bring your vision to life with cutting-edge
              web technology solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-secondary px-10 py-4 rounded-full font-semibold text-lg shadow-glow-secondary hover:scale-105 transition-all duration-300" // Button color change
              >
                Start Your Project Today
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-primary text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-secondary transition-all duration-300" // Button color change
              >
                View Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
