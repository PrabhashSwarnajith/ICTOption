import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components';
import { motion } from 'framer-motion';
import cyber1 from '../../assets/img/cyber1.jpg';
import cyber2 from '../../assets/img/cyber2.jpg';
import cyber3 from '../../assets/img/cyber3.jpg';

// --- Data Definitions for easier management ---

const whyChooseUsPoints = [
  {
    title: 'Certified Experts',
    description:
      'Our elite team holds top industry certifications (CISSP, CEH, CompTIA Security+) and boasts years of hands-on experience in defending complex digital infrastructures.',
    icon: '🛡️', // Shield icon
  },
  {
    title: '24/7 Vigilance',
    description:
      'We provide round-the-clock monitoring and rapid incident response, ensuring constant protection and peace of mind against emerging threats.',
    icon: '👀', // Eye icon
  },
  {
    title: 'Proactive Defense',
    description:
      'We go beyond reactive measures, identifying and neutralizing potential threats before they can impact your operations or compromise your data.',
    icon: '🎯', // Target icon
  },
  {
    title: 'Compliance & Governance',
    description:
      'Navigate complex regulatory landscapes with ease. We help you achieve and maintain compliance with industry standards like HIPAA, GDPR, ISO 27001, and more.',
    icon: '📜', // Scroll or document icon
  },
];

const ourApproachSteps = [
  {
    step: '1. Prevention',
    description:
      'Implementing robust firewalls, advanced endpoint protection, secure configurations, and comprehensive employee cybersecurity training.',
    icon: '🔒',
  },
  {
    step: '2. Detection',
    description:
      'Leveraging 24/7 Security Operations Center (SOC) monitoring, cutting-edge threat intelligence, and AI-driven anomaly detection systems.',
    icon: '🔍',
  },
  {
    step: '3. Response',
    description:
      'Executing rapid, coordinated incident response plans, forensic analysis, and efficient recovery procedures to minimize downtime and damage.',
    icon: '⚡',
  },
  {
    step: '4. Compliance',
    description:
      'Conducting ongoing security audits, risk assessments, and ensuring strict adherence to industry-specific regulatory requirements.',
    icon: '✅',
  },
];

const coreServices = [
  {
    title: 'Cybersecurity Awareness Training',
    description:
      'Empower your employees to be your first line of defense with engaging and effective cybersecurity awareness programs, covering social engineering, phishing, and password hygiene education.',
  },
  {
    title: 'Phishing Simulation Campaigns',
    description:
      'Test employee response to fake phishing emails and assess their susceptibility to social engineering attacks, providing valuable insights for targeted training.',
  },
  {
    title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
    description:
      'Identify security weaknesses in your web, mobile, network, or cloud infrastructure through comprehensive vulnerability assessments and simulated attacks to evaluate real-world exploitability.',
  },
  {
    title: 'Web Application Security Testing',
    description:
      'Thorough testing focused on OWASP Top 10 vulnerabilities, business logic flaws, and access control issues to secure your web applications.',
  },
  {
    title: 'Mobile Application Security Testing',
    description:
      'Comprehensive security testing for both iOS and Android applications, covering code-level vulnerabilities, insecure data storage, and runtime issues.',
  },
  {
    title: 'Risk Assessments',
    description:
      'Identify vulnerabilities and assess security risks across your entire digital infrastructure, providing clear actionable insights.',
  },
  {
    title: 'Managed Security Services (MSSP)',
    description:
      'Full-spectrum outsourced security operations including monitoring, threat detection, and incident response, 24/7.',
  },
  {
    title: 'Compliance & Audit',
    description:
      'Expert guidance and support to achieve and maintain compliance with critical industry standards and data protection regulations.',
  },
  {
    title: 'Incident Response & Recovery',
    description:
      'Rapid response teams to contain, eradicate, and recover from cyber incidents, minimizing disruption and data loss.',
  },
];

const successStories = [
  {
    title: 'Financial Firm: Major Breach Averted',
    description:
      'Through our proactive threat intelligence and rapid incident response, we detected and neutralized a sophisticated ransomware attack, safeguarding millions in assets for a leading financial institution.',
    tag: 'Finance',
  },
  {
    title: 'Healthcare Provider: Data Secured',
    description:
      'Implemented advanced data encryption and access controls, ensuring full HIPAA compliance and protecting sensitive patient medical records for a large hospital network.',
    tag: 'Healthcare',
  },
  {
    title: 'Global Retailer: DDoS Defense',
    description:
      'Deployed scalable cloud-based DDoS mitigation, successfully protecting a major e-commerce platform from multiple, high-volume distributed denial-of-service attacks during peak sales periods.',
    tag: 'Retail',
  },
];

const industriesWeServe = [
  'Finance & Banking',
  'Healthcare',
  'Retail & E-commerce',
  'Education',
  'Government & Public Sector',
  'Manufacturing',
  'Technology & SaaS',
  'Legal',
  'Telecommunications',
  'Utilities',
];

const faqs = [
  {
    question: 'How do I determine my business’s cybersecurity posture?',
    answer:
      'We begin with a comprehensive **Cybersecurity Risk Assessment** to identify your vulnerabilities, evaluate your current defenses, and provide a clear roadmap for improvement. Contact us for a consultation.',
  },
  {
    question: 'What types of cyber threats do you primarily protect against?',
    answer:
      'Our solutions are designed to defend against a wide array of threats, including **ransomware, phishing, DDoS attacks, zero-day exploits, insider threats, and advanced persistent threats (APTs)**.',
  },
  {
    question: 'What is your typical incident response time?',
    answer:
      'Our **24/7 Security Operations Center (SOC)** ensures rapid response. For critical incidents, our team can engage within **minutes** to contain and address the threat.',
  },
  {
    question: 'Do you offer services to help with regulatory compliance?',
    answer:
      'Absolutely. We specialize in helping businesses achieve and maintain compliance with major global and industry-specific regulations such as **GDPR, HIPAA, ISO 27001, PCI DSS, and NIST frameworks**.',
  },
];

// --- Cybersecurity Component ---

const Cybersecurity = () => {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent">
            Cyber<span className="text-secondary">security</span> Services
          </span>
        }
        subtitle={
          <span className="text-white">
            Fortify Your{' '}
            <span className="text-secondary">Digital Defenses</span>
          </span>
        }
        description={
          <span className="text-gray-200">
            In an ever-evolving threat landscape, protect your critical digital
            assets with our comprehensive, proactive cybersecurity solutions.
            Ensure business continuity and safeguard your reputation.
          </span>
        }
        backgroundImage={cyber1}
        gradient="from-primary via-black to-neutral-dark"
        className="brightness-110"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <Link
            to="/services"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-glow-md hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Get a Security Assessment
          </Link>
          <Link
            to="/contact"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Explore All Services
          </Link>
        </div>
      </Hero>

      {/* Intro to Cybersecurity - Enhanced Visual & Text Section */}
      <section className="py-20 bg-neutral-dark relative overflow-hidden">
        {/* Subtle background pattern: circuit board / digital lines */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(15deg) scale(1.2)',
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
              src={cyber2} // Image: cybersecurity professional at work
              alt="Cybersecurity Strategy"
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
            <span className="text-secondary font-bold uppercase tracking-wider text-sm font-body">
              Your Digital Fortress
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading leading-tight">
              Proactive Defense in an Unpredictable World
            </h2>
            <p className="text-gray-300 opacity-80 mb-8 max-w-xl text-lg font-body">
              In today's interconnected world, cyber threats are more
              sophisticated than ever. At ICT Option, we provide **robust
              cybersecurity solutions** designed to protect your valuable data,
              systems, and reputation. Our proactive approach ensures your
              business remains secure and compliant, allowing you to focus on
              growth without the constant fear of a breach.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-secondary text-primary px-8 py-4 rounded-full font-bold shadow-glow-md hover:bg-accent hover:text-white transition-all duration-300 transform-gpu font-body"
            >
              Consult Our Experts
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Why Choose Us Section - Card Grid with motion */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-4 font-heading">
              Why Entrust Your Security to ICT Option?
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-accent font-body max-w-2xl mx-auto mt-4">
              We provide unparalleled protection through a blend of expert
              knowledge, cutting-edge technology, and unwavering vigilance.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <motion.div
                key={point.title}
                className="bg-primary p-6 rounded-lg text-accent text-center shadow-lg border border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{point.icon}</div>
                <h3 className="font-bold text-secondary text-xl mb-2 font-heading">
                  {point.title}
                </h3>
                <p className="text-base leading-relaxed opacity-90 font-body">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Approach Section - Process with numbers and motion */}
      <section className="py-20 bg-accent/20 relative overflow-hidden">
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
              Our Multi-Layered Cybersecurity Approach
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-primary font-body max-w-2xl mx-auto mt-4 opacity-90">
              We implement a comprehensive defense-in-depth strategy, securing
              your assets at every potential point of attack.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.img
              src={cyber3} // New image: secure coding/network illustration
              alt="Cyber Defense Layers"
              className="w-full max-w-lg rounded-2xl shadow-xl mb-8 md:mb-0 object-cover border-4 border-primary transition-transform duration-500 hover:scale-[1.02]"
              style={{ aspectRatio: '1.5/1' }}
              initial={{ opacity: 0, rotateY: 10 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            />
            <ul className="space-y-6 text-left max-w-xl mx-auto">
              {ourApproachSteps.map((item, index) => (
                <motion.li
                  key={index}
                  className="bg-primary/80 p-6 rounded-xl text-accent shadow-md border border-neutral-700 flex items-start gap-4 transition-all duration-300 hover:bg-primary hover:shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-secondary text-primary rounded-full font-bold text-lg shadow-md">
                    {index + 1}
                  </span>
                  <div>
                    <span className="font-bold text-secondary text-lg font-heading">
                      {item.step}:
                    </span>{' '}
                    <p className="text-base text-gray-300 opacity-90 leading-relaxed font-body">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Core Cybersecurity Services - Detailed cards */}
      <section className="py-20 bg-primary/20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              Comprehensive Cybersecurity Services
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-accent font-body max-w-2xl mx-auto mt-4">
              From proactive threat detection to rapid incident response, our
              services cover every aspect of your digital security needs.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-neutral-dark p-6 rounded-lg text-accent shadow-lg border-l-4 border-secondary transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-secondary text-xl mb-3 font-heading">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed opacity-90 font-body">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Success Stories Section - Testimonials with a different visual flair */}
      <section className="py-20 bg-neutral-dark">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-4 font-heading">
              Proven Results: Real-World Success
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-accent font-body max-w-2xl mx-auto mt-4">
              Discover how ICT Option has successfully protected businesses from
              critical cyber threats and ensured their digital resilience.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-primary p-6 rounded-xl text-accent shadow-lg border-t-4 border-secondary flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-secondary text-sm font-semibold mb-2 font-body">
                  {story.tag}
                </div>
                <h3 className="font-bold text-accent text-xl mb-3 font-heading">
                  {story.title}
                </h3>
                <p className="text-base leading-relaxed opacity-90 flex-grow font-body">
                  {story.description}
                </p>
                <div className="mt-4 text-right text-sm italic opacity-80 font-body">
                  — Client Testimonial
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Industries We Serve Section - Icon Grid / Tag Cloud style */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
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
              Trusted Across Diverse Industries
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-accent font-body max-w-2xl mx-auto mt-4">
              Our robust cybersecurity solutions are tailored to meet the unique
              security and compliance demands of various sectors.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {industriesWeServe.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-neutral-dark text-accent px-6 py-3 rounded-full text-lg font-medium shadow-md border border-neutral-700 cursor-default transition-all duration-300 hover:bg-secondary hover:text-primary hover:scale-105"
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
      {/* FAQ Section - Collapsible (conceptual, using static for now) */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              Your Cybersecurity Questions, Answered
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-accent font-body max-w-2xl mx-auto mt-4">
              We've compiled answers to the most common inquiries about securing
              your digital future.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-neutral-dark rounded-lg p-6 shadow-md border border-neutral-700 transition-shadow duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-secondary mb-2 text-xl cursor-pointer font-heading">
                  {faq.question}
                </h3>
                <p className="text-accent text-base leading-relaxed font-body">
                  {faq.answer}
                </p>
                {/* For actual collapsible, you'd add state and click handlers here */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action Section - Final strong push */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6 drop-shadow-md font-heading">
              Secure Your Future. Protect What Matters.
            </h2>
            <p className="text-xl text-primary mb-10 max-w-2xl mx-auto opacity-90 font-body">
              Don't wait for a breach to act. Partner with ICT Option for
              unyielding cybersecurity that lets you operate with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-secondary px-10 py-4 rounded-full font-semibold text-lg shadow-glow-secondary hover:scale-105 transition-all duration-300 transform-gpu font-body"
              >
                Request a Security Consultation
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-primary text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-secondary hover:scale-105 transition-all duration-300 transform-gpu font-body"
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

export default Cybersecurity;
