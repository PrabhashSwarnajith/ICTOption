import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../../components';
import { motion } from 'framer-motion';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

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
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 }); // Initialize AOS
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white font-body">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent  font-heading">
            Mobile <span className="text-secondary">App Development</span>
          </span>
        }
        subtitle={
          <span className="text-accent  font-heading">
            Build Powerful{' '}
            <span className="text-secondary">Mobile Experiences</span>
          </span>
        }
        description={
          <span className="text-neutral-300 font-body">
            From concept to deployment, we deliver seamless, high-performance
            custom mobile apps tailored to your business needs for both iOS and
            Android platforms.
          </span>
        }
        backgroundImage={mobile3}
        gradient="from-primary via-black/80 to-neutral-900"
        className="brightness-110"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
          <Link
            to="/contact"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-secondary-light hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Get a Free Consultation
          </Link>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Explore All Services
          </Link>
        </div>
      </Hero>
      ---
      {/* About Our Expertise Section */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Enhanced Image with Modern Styling */}
          <div
            className="relative flex justify-center items-center min-h-[350px] p-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-36 h-36 bg-secondary rounded-full mix-blend-screen opacity-20 animate-spin-slow"></div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-accent rounded-xl mix-blend-screen opacity-15 transform rotate-45"></div>

            <motion.img
              src={mobile1}
              alt="Our Mobile App Development Expertise"
              className="relative z-10 rounded-2xl shadow-xl w-full max-w-lg object-cover transform rotate-1 transition-transform duration-500 hover:rotate-0 hover:scale-105 border border-neutral-700"
              style={{
                aspectRatio: '4/3',
              }}
              initial={{ rotateY: -10, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            />
          </div>

          {/* Right: Focused Text and Features */}
          <div
            className="pl-0 md:pl-8"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Our Expertise in Action
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading leading-tight tracking-wide uppercase">
              Transforming Ideas into Intuitive Mobile Apps
            </h2>
            <p className="text-neutral-300 opacity-90 mb-8 max-w-xl text-lg font-body">
              At the core of our service is a commitment to turning your
              innovative concepts into **powerful, user-centric mobile
              applications**. We leverage deep industry knowledge and the latest
              technologies to build apps that not only look stunning but also
              perform flawlessly, driving engagement and delivering tangible
              business value.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.slice(0, 6).map((feature, idx) => (
                <motion.div
                  key={feature.text}
                  className="rounded-xl p-4 flex flex-col items-center text-center shadow-lg border border-neutral-700 bg-neutral-800 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  viewport={{ once: true, amount: 0.5 }}
                  data-aos="fade-up"
                  data-aos-delay={300 + idx * 50}
                >
                  <span className="w-12 h-12 flex items-center justify-center text-3xl mb-4 bg-secondary text-primary rounded-full shadow-lg">
                    {feature.icon}
                  </span>
                  <span className="font-semibold text-accent text-base mb-1 font-heading">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-block bg-secondary text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:bg-secondary-light hover:text-primary transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Discover Our Approach
            </Link>
          </div>
        </div>
      </section>
      ---
      {/* Process Section - Progress Bars */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Subtle background pattern: hexagonal grid */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0L40 20L20 40L0 20zM20 0L0 20L20 40L40 20L20 0z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(5deg) scale(1.1)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Text and Progress Bars */}
          <div
            className="pr-0 md:pr-8"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="mb-6">
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">
                Our Proven Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading tracking-wide uppercase">
                A Transparent Path to Your App's Success
              </h2>
              <p className="text-neutral-300 opacity-90 mb-8 max-w-xl font-body">
                We believe in a structured yet flexible development process that
                keeps you informed every step of the way. From initial ideation
                to post-launch support, our methodology ensures efficiency,
                quality, and a seamless experience for you.
              </p>
            </div>
            <div className="space-y-6">
              {processSteps.map((item, idx) => (
                <div
                  key={item.label}
                  data-aos="fade-up"
                  data-aos-delay={200 + idx * 80}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-accent font-semibold font-heading">
                      {item.label}
                    </span>
                    <span className="text-secondary font-bold font-heading">
                      {item.value}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden shadow-inner">
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
          <div
            className="relative flex justify-center items-center min-h-[320px]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary rounded-xl z-0 shadow-lg"></div>
            <img
              src={mobile2}
              alt="Mobile App Team"
              className="relative z-10 rounded-2xl shadow-xl w-full max-w-lg object-cover border border-neutral-700"
              style={{ aspectRatio: '4/3' }}
            />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-accent rounded-xl z-0 shadow-lg"></div>
          </div>
        </div>
      </section>
      ---
      {/* Technologies Section - Logos Grid */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              Our Preferred Platforms & Technologies
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto mt-4 font-body">
              We leverage the latest and most effective technologies to build
              high-quality, scalable mobile applications for all major
              platforms.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group cursor-pointer rounded-lg bg-neutral-800 p-4 shadow-xl border border-neutral-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03]"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                data-aos="zoom-in"
                data-aos-delay={200 + index * 70}
              >
                <div className="w-full h-20 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-12 object-contain"
                  />
                </div>
                <p className="text-center text-sm text-neutral-300 mt-3 group-hover:text-secondary transition-colors font-medium font-body">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Testimonials Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Subtle abstract pattern background */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20zm20 20h20v20H40V40zm20 20h20v20H60V60z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(20deg) scale(1.1)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              What Our Clients Say
            </h2>
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto font-body">
              Read testimonials from our satisfied clients and discover how our
              expertise in mobile app development has helped them achieve their
              business goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="bg-neutral-800 rounded-xl p-8 shadow-xl flex flex-col items-center border border-neutral-700 relative group hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true, amount: 0.5 }}
                data-aos="fade-up"
                data-aos-delay={200 + idx * 80}
              >
                <p className="text-neutral-300 text-base mb-6 text-center italic font-body leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto w-full justify-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-secondary object-cover"
                  />
                  <div>
                    <div className="font-bold text-secondary-light font-heading text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-neutral-400 text-xs font-body">
                      {testimonial.title}
                    </div>
                  </div>
                  <span className="ml-auto text-secondary text-3xl font-bold">
                    “”
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* FAQ Section */}
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {/* Subtle background pattern: small circles */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='3' fill='%239C92AC' fill-opacity='0.1'/%3E%3C/circle%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(-5deg) scale(1.05)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading tracking-wide uppercase">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-neutral-800 rounded-lg p-6 shadow-xl border border-neutral-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                data-aos="fade-up"
                data-aos-delay={200 + idx * 70}
              >
                <div className="font-bold text-secondary text-xl mb-2 font-heading">
                  {faq.question}
                </div>
                <div className="text-neutral-300 leading-relaxed opacity-90 font-body">
                  {faq.answer}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-neutral-900 to-secondary text-center relative overflow-hidden">
        {/* Subtle background pattern: abstract shapes */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M0 0h50v50H0V0zm50 50h50v50H50V50z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(30deg) scale(1.5)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 font-heading tracking-wide uppercase">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto font-body opacity-90">
              Let's transform your innovative mobile app idea into a reality
              with cutting-edge technology and expert guidance. Your success is
              our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-secondary text-primary px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-secondary-light hover:text-primary hover:scale-105 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                Start Your App Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-accent text-accent px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="300"
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
