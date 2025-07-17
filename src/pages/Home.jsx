import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FullPageServiceCard, Hero } from '../components';

const Home = () => {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent">
            ICT <span className="text-secondary">OPTION</span>
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
            We craft cutting-edge digital solutions that drive innovation,
            enhance user experiences, and accelerate business growth in the
            modern digital landscape.
          </span>
        }
        backgroundImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
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
      {/* About Us Section - Modern Split Layout (Refactored) */}
      <section className="py-20 bg-neutral-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image with Accent Corners */}
          <div className="relative flex justify-center items-center min-h-[320px]">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary rounded-xl z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80"
              alt="About ICT Option"
              className="relative z-10 rounded-2xl shadow-2xl w-full max-w-lg object-cover grayscale"
              style={{ aspectRatio: '4/3' }}
            />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-secondary rounded-xl z-0"></div>
          </div>
          {/* Right: Text and Features */}
          <div className="pl-0 md:pl-8">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading">
              Best Tech Solutions & Digital Services Since 2010
            </h2>
            <p className="text-accent opacity-80 mb-8 max-w-xl">
              We deliver innovative, reliable, and scalable technology solutions
              for businesses of all sizes. Our team combines deep expertise,
              modern tools, and a passion for client success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: 'Best Training',
                  desc: 'Expert-led workshops & support',
                },
                {
                  title: 'Best Pricing',
                  desc: 'Affordable, transparent packages',
                },
                {
                  title: 'Quality Equipment',
                  desc: 'Modern tools & infrastructure',
                },
                { title: 'Best Trainers', desc: 'Certified, experienced team' },
              ].map(item => (
                <div className="flex items-center gap-3" key={item.title}>
                  <span className="bg-secondary text-primary rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg">
                    ✓
                  </span>
                  <div>
                    <div className="font-bold text-accent">{item.title}</div>
                    <div className="text-accent text-xs opacity-80">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-block bg-secondary text-accent px-8 py-4 rounded-lg font-bold shadow-glow hover:bg-accent hover:text-primary transition-all duration-300"
            >
              Our Company
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-neutral-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text and Progress Bars */}
          <div className="pr-0 md:pr-8">
            <div className="mb-6">
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading">
                We Provide the Best Solutions for Our Clients
              </h2>
              <p className="text-accent opacity-80 mb-8 max-w-xl">
                Our team delivers exceptional results with a focus on
                experience, expertise, and value. We combine top talent, modern
                technology, and a client-first approach to help you succeed.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { label: 'Experience', value: 90 },
                { label: 'Professional Team', value: 92 },
                { label: 'Quality Solutions', value: 90 },
                { label: 'Affordable Price', value: 88 },
              ].map(item => (
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
                    <div
                      className="h-full bg-secondary rounded-full"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Modern Image with Accent Corners */}
          <div className="relative flex justify-center items-center min-h-[320px]">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary rounded-xl z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
              alt="Team Collaboration"
              className="relative z-10 rounded-2xl shadow-2xl w-full max-w-lg object-cover"
              style={{ aspectRatio: '4/3' }}
            />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-secondary rounded-xl z-0"></div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-neutral-dark">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              Our Trusted Partners
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              {
                name: 'TechCorp',
                bgColor: 'from-blue-600 to-purple-600',
              },
              {
                name: 'InnovateLab',
                bgColor: 'from-green-600 to-blue-600',
              },
              {
                name: 'CloudSync',
                bgColor: 'from-cyan-600 to-blue-800',
              },
              {
                name: 'DataFlow',
                bgColor: 'from-purple-600 to-pink-600',
              },
              {
                name: 'SecureNet',
                bgColor: 'from-red-600 to-purple-600',
              },
              {
                name: 'AIVision',
                bgColor: 'from-orange-600 to-red-600',
              },
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
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
                <div
                  className={`w-full h-20 bg-gradient-to-br ${partner.bgColor} rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl`}
                >
                  <span className="text-white font-bold text-lg">
                    {partner.name}
                  </span>
                </div>
                <p className="text-center text-sm text-accent mt-3 group-hover:text-secondary transition-colors font-medium">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Statistics Section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-bold text-secondary mb-2">
                  50+
                </div>
                <div className="text-accent">Happy Clients</div>
              </motion.div>
              <motion.div
                className="p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-bold text-secondary mb-2">
                  200+
                </div>
                <div className="text-accent">Projects Completed</div>
              </motion.div>
              <motion.div
                className="p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-bold text-secondary mb-2">5+</div>
                <div className="text-accent">Years of Excellence</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Service - Web Development */}
      <FullPageServiceCard
        title="Web Development"
        description="Transform your digital presence with cutting-edge web applications built using modern technologies and best practices. Our expert developers create scalable, responsive, and user-friendly websites that drive business growth and deliver exceptional user experiences."
        features={[
          'Responsive web design for all devices',
          'Modern JavaScript frameworks (React, Vue, Angular)',
          'Full-stack development with Node.js, Python, PHP',
          'E-commerce and CMS solutions',
          'SEO optimization and performance tuning',
          'API development and third-party integrations',
        ]}
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        number={1}
        link="/services/web-development"
        bgColor="bg-gradient-to-br from-primary to-neutral-dark"
        reverse={false}
      />
      {/* Featured Service - IT Consulting */}
      <FullPageServiceCard
        title="IT Consulting"
        description="Empower your business with expert IT consulting services. We provide strategic guidance, technology roadmaps, and tailored solutions to help you achieve your business objectives and stay ahead in a rapidly evolving digital world."
        features={[
          'Technology strategy and planning',
          'IT infrastructure assessment',
          'Digital transformation consulting',
          'Risk management and compliance',
          'Process optimization',
          'Change management and training',
        ]}
        image="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        number={4}
        link="/services/it-consulting"
        bgColor="bg-gradient-to-br from-primary to-neutral-dark"
        reverse={false}
      />
      {/* Featured Service - Digital Marketing */}
      <FullPageServiceCard
        title="Digital Marketing"
        description="Boost your brand's online presence and reach your target audience with our comprehensive digital marketing solutions. We combine creativity and data-driven strategies to maximize your ROI and drive business growth."
        features={[
          'SEO and SEM campaigns',
          'Social media marketing',
          'Content creation and strategy',
          'Email marketing automation',
          'Analytics and performance tracking',
          'Branding and creative design',
        ]}
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        number={5}
        link="/services/digital-marketing"
        bgColor="bg-gradient-to-br from-secondary to-primary"
        reverse={true}
      />
      {/* Featured Service - Cybersecurity */}
      <FullPageServiceCard
        title="Cybersecurity"
        description="Protect your business from evolving cyber threats with our robust cybersecurity solutions. We offer comprehensive security assessments, proactive monitoring, and incident response to safeguard your digital assets."
        features={[
          'Vulnerability assessment and penetration testing',
          'Network and endpoint security',
          'Security awareness training',
          'Incident response and recovery',
          'Compliance and risk management',
          '24/7 monitoring and support',
        ]}
        image="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        number={6}
        link="/services/cybersecurity"
        bgColor="bg-gradient-to-br from-primary to-secondary"
        reverse={false}
      />

      {/* Client Reviews Section */}
      <section className="py-20 bg-neutral-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              Our Clients Reviews
            </h2>
            <p className="text-accent opacity-80 max-w-2xl mx-auto">
              See what our clients say about working with us and how we helped
              them achieve their goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-primary rounded-xl p-8 shadow-lg flex flex-col items-center border-t-4 border-secondary">
              <p className="text-accent text-base mb-6">
                "ICT Option delivered our project on time and exceeded our
                expectations. Their team is highly skilled and professional."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Alish White"
                  className="w-12 h-12 rounded-full border-2 border-secondary"
                />
                <div>
                  <div className="font-bold text-secondary">Alish White</div>
                  <div className="text-accent text-xs">Entrepreneur</div>
                </div>
              </div>
            </div>
            {/* Review 2 */}
            <div className="bg-primary rounded-xl p-8 shadow-lg flex flex-col items-center border-t-4 border-secondary">
              <p className="text-accent text-base mb-6">
                "The digital marketing campaign brought us more leads than ever
                before. Highly recommended!"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Devin Mueller"
                  className="w-12 h-12 rounded-full border-2 border-secondary"
                />
                <div>
                  <div className="font-bold text-secondary">Devin Mueller</div>
                  <div className="text-accent text-xs">Entrepreneur</div>
                </div>
              </div>
            </div>
            {/* Review 3 */}
            <div className="bg-primary rounded-xl p-8 shadow-lg flex flex-col items-center border-t-4 border-secondary">
              <p className="text-accent text-base mb-6">
                "Their cloud solutions helped us scale quickly and securely.
                Great experience working with ICT Option."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/men/36.jpg"
                  alt="Dave Beech"
                  className="w-12 h-12 rounded-full border-2 border-secondary"
                />
                <div>
                  <div className="font-bold text-secondary">Dave Beech</div>
                  <div className="text-accent text-xs">Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-dark">
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
            <div className="bg-primary rounded-lg p-6 shadow-md">
              <div className="font-bold text-secondary mb-2">
                What industries do you serve?
              </div>
              <div className="text-accent">
                We work with clients across finance, healthcare, retail,
                education, and more.
              </div>
            </div>
            <div className="bg-primary rounded-lg p-6 shadow-md">
              <div className="font-bold text-secondary mb-2">
                How do I start a project?
              </div>
              <div className="text-accent">
                Simply contact us through our website or call us. We'll schedule
                a free consultation to discuss your needs.
              </div>
            </div>
            <div className="bg-primary rounded-lg p-6 shadow-md">
              <div className="font-bold text-secondary mb-2">
                Do you offer ongoing support?
              </div>
              <div className="text-accent">
                Yes, we provide ongoing maintenance and support packages
                tailored to your business.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-accent mb-10 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge
              technology solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-secondary text-accent px-10 py-4 rounded-full font-semibold text-lg shadow-glow hover:scale-105 transition-all duration-300"
              >
                Start Your Project
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

export default Home;
