import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components';
import { motion } from 'framer-motion';

import mobile1 from '../../assets/img/mobile1.jpg';
import mobile2 from '../../assets/img/mobile2.jpg';
import mobile3 from '../../assets/img/mobile3.jpg';

// --- Data Definitions (Moved for clarity) ---

const features = [
  {
    text: 'Native iOS and Android Development',
    icon: '📱',
    desc: 'Custom applications built specifically for iOS and Android, ensuring optimal performance and a true native experience.',
  },
  {
    text: 'Cross-Platform Solutions (React Native & Flutter)',
    icon: '🔄',
    desc: 'Efficient development for multiple platforms using modern frameworks, significantly reducing development time and cost.',
  },
  {
    text: 'Intuitive UI/UX Design',
    icon: '🎨',
    desc: 'Crafting beautiful, user-centric designs that enhance user engagement and provide a seamless experience on every device.',
  },
  {
    text: 'App Store & Google Play Deployment',
    icon: '🚀',
    desc: 'Comprehensive support for launching your application, including submission, optimization, and maximizing visibility in app stores.',
  },
  {
    text: 'Push Notifications & Real-time Features',
    icon: '🔔',
    desc: 'Engage your users with instant updates, timely alerts, and dynamic real-time functionalities.',
  },
  {
    text: 'Offline Functionality & Data Synchronization',
    icon: '🔗',
    desc: 'Building robust offline access and seamless data synchronization for an uninterrupted and reliable user experience, even without an internet connection.',
  },
];

const technologies = [
  {
    name: 'iOS (Swift)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Swift_logo.svg',
  },
  {
    name: 'Android (Kotlin)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png',
  },
  {
    name: 'React Native',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Flutter',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png',
  },
  {
    name: 'Expo',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Expo_Logo.png',
  },
  {
    name: 'Ionic',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg',
  },
];

const processSteps = [
  { label: 'Strategy & Planning', value: 90 },
  { label: 'UI/UX Design', value: 92 },
  { label: 'Development & Testing', value: 90 },
  { label: 'Deployment & Support', value: 88 },
];

const testimonials = [
  {
    quote:
      'They built our app quickly and it works flawlessly. Highly recommended!',
    name: 'Alish White',
    title: 'Entrepreneur',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote: 'Our app launch was smooth and support is excellent. Great team!',
    name: 'Devin Mueller',
    title: 'Business Owner',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote:
      'They helped us design a beautiful, user-friendly app. Will work with them again!',
    name: 'Dave Beech',
    title: 'Manager',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
];

const faqs = [
  {
    question: 'What platforms do you develop for?',
    answer:
      "We build apps for iOS, Android, and cross-platform using React Native, Flutter, and more, depending on your project's specific needs.",
  },
  {
    question: 'How do I start a mobile app project?',
    answer:
      "Simply contact us for a free consultation. We'll discuss your innovative idea, understand your requirements, and guide you through our comprehensive development process.",
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes, we provide flexible maintenance and support packages tailored to ensure your app remains up-to-date, secure, and performs optimally long after launch.',
  },
];

// --- MobileAppDevelopment Component ---

const MobileAppDevelopment = () => {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent font-heading">
            Mobile <span className="text-secondary">App Development</span>
          </span>
        }
        subtitle={
          <span className="text-accent font-heading">
            Build Powerful{' '}
            <span className="text-secondary">Mobile Experiences</span>
          </span>
        }
        description={
          <span className="text-gray-200 font-body">
            From concept to deployment, we deliver seamless, high-performance
            custom mobile apps tailored to your business needs for both iOS and
            Android platforms.
          </span>
        }
        backgroundImage="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80"
        gradient="from-primary via-black to-neutral-dark"
        className="brightness-110"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <Link
            to="/services"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-glow-md hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Get In Touch
          </Link>
        </div>
      </Hero>
      ---
      {/* About Our Expertise Section */}
      <section className="py-20 bg-accent/10 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Enhanced Image with Modern Styling */}
          <div className="relative flex justify-center items-center min-h-[320px] p-4">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary rounded-full mix-blend-multiply opacity-30 animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-light rounded-full mix-blend-multiply opacity-20 animate-pulse-slow delay-200"></div>

            <img
              src={mobile1} // A more dynamic mobile app development image
              alt="Our Mobile App Development Expertise"
              className="relative z-10 rounded-2xl shadow-3xl w-full max-w-lg object-cover transform rotate-1 transition-transform duration-500 hover:rotate-0 hover:scale-105"
              style={{
                aspectRatio: '4/3',
                border: '3px solid rgba(255, 255, 255, 0.2)',
              }}
            />
          </div>

          {/* Right: Focused Text and Features */}
          <div className="pl-0 md:pl-8">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Our Expertise in Action
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading leading-tight">
              Transforming Ideas into Intuitive Mobile Apps
            </h2>
            <p className="text-accent opacity-80 mb-8 max-w-xl text-lg">
              At the core of our service is a commitment to turning your
              innovative concepts into **powerful, user-centric mobile
              applications**. We leverage deep industry knowledge and the latest
              technologies to build apps that not only look stunning but also
              perform flawlessly, driving engagement and delivering tangible
              business value.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {' '}
              {/* Reduced gap for a tighter look */}
              {features.slice(0, 6).map(
                (
                  feature,
                  idx // Displaying only the first 6 for visual balance
                ) => (
                  <motion.div
                    key={feature.text}
                    className="rounded-xl p-4 flex flex-col items-center text-center shadow-xl border border-white/10 bg-gradient-to-br from-white/5 to-neutral-dark/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-glow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }} // Slightly faster staggered animation
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <span className="w-12 h-12 flex items-center justify-center text-3xl mb-4 bg-gradient-to-br from-secondary to-primary text-white rounded-full shadow-md">
                      {feature.icon}
                    </span>
                    <span className="font-semibold text-accent text-base mb-1">
                      {feature.text}
                    </span>
                    {/* Removed desc from here for cleaner card, can be shown on hover/detail if needed */}
                  </motion.div>
                )
              )}
            </div>
            <Link
              to="/contact"
              className="inline-block bg-secondary text-accent px-8 py-4 rounded-full font-bold shadow-glow hover:bg-accent hover:text-primary transition-all duration-300"
            >
              Discover Our Approach
            </Link>
          </div>
        </div>
      </section>
      ---
      {/* Process Section - Progress Bars */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text and Progress Bars */}
          <div className="pr-0 md:pr-8">
            <div className="mb-6">
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">
                Our Proven Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading">
                A Transparent Path to Your App's Success
              </h2>
              <p className="text-accent opacity-80 mb-8 max-w-xl">
                We believe in a structured yet flexible development process that
                keeps you informed every step of the way. From initial ideation
                to post-launch support, our methodology ensures efficiency,
                quality, and a seamless experience for you.
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
              src={mobile2} // Changed image for variety
              alt="Mobile App Team"
              className="relative z-10 rounded-2xl shadow-2xl w-full max-w-lg object-cover"
              style={{ aspectRatio: '4/3' }}
            />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-secondary rounded-xl z-0"></div>
          </div>
        </div>
      </section>
      ---
      {/* Technologies Section - Logos Grid */}
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
              Our Preferred Platforms & Technologies
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
            <p className="text-accent opacity-80 max-w-2xl mx-auto mt-4">
              We leverage the latest and most effective technologies to build
              high-quality, scalable mobile applications for all major
              platforms.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="w-full h-20 bg-gradient-to-br from-primary to-neutral-dark rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-12 object-contain"
                  />
                </div>
                <p className="text-center text-sm text-accent mt-3 group-hover:text-secondary transition-colors font-medium">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Testimonials Section */}
      <section className="py-20 bg-accent/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549688425-41e97d433215?auto=format&fit=crop&w=1200&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Client Feedback
            </span>
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              What Our Clients Say
            </h2>
            <p className="text-accent opacity-80 max-w-2xl mx-auto">
              Read testimonials from our satisfied clients and discover how our
              expertise in mobile app development has helped them achieve their
              business goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="bg-primary rounded-xl p-8 shadow-lg flex flex-col items-center border-t-4 border-secondary mb-8 md:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <p className="text-accent text-base mb-6 text-center">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-secondary"
                  />
                  <div>
                    <div className="font-bold text-secondary">
                      {testimonial.name}
                    </div>
                    <div className="text-accent text-xs">
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
      {/* FAQ Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-primary rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-bold text-secondary mb-2">
                  {faq.question}
                </div>
                <div className="text-accent">{faq.answer}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Call to Action Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-accent mb-10 max-w-2xl mx-auto">
              Let's transform your innovative mobile app idea into a reality
              with cutting-edge technology and expert guidance. Your success is
              our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-secondary text-accent px-10 py-4 rounded-full font-semibold text-lg shadow-glow hover:scale-105 transition-all duration-300"
              >
                Start Your App Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-accent text-accent px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
