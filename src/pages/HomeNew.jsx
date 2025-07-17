import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FullPageServiceCard } from '../components';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Dark Theme */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              ICT OPTION
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-8">
              Transforming Ideas into Digital Reality
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              We craft cutting-edge digital solutions that drive innovation,
              enhance user experiences, and accelerate business growth in the
              modern digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>{' '}
      {/* Services Overview Section */}
      <section className="py-20 bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Complete Digital Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end technology
              services that transform businesses and drive digital innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Digital Marketing',
                description:
                  'Comprehensive digital marketing strategies to grow your online presence.',
                icon: '📈',
                link: '/services/digital-marketing',
              },
              {
                title: 'IT Consulting',
                description:
                  'Expert IT consulting services to optimize your technology infrastructure.',
                icon: '💼',
                link: '/services/it-consulting',
              },
              {
                title: 'Cybersecurity',
                description:
                  'Comprehensive security solutions to protect your digital assets.',
                icon: '🛡️',
                link: '/services/cybersecurity',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 transition-all duration-300 group relative"
                initial={{ opacity: 0, rotateY: -90, x: -100 }}
                whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Rotating Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl -z-10"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Icon with rotation animation */}
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ rotateY: [0, 360] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Animated Learn More Link */}
                <Link
                  to={service.link}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-all duration-300"
                >
                  <motion.span
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <motion.svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Animated Tech Stack Ticker */}
          <motion.div className="mt-20">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Technologies We Master
            </h3>
            <div className="relative overflow-hidden">
              <motion.div
                className="flex space-x-8 whitespace-nowrap"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {[
                  'React',
                  'Vue.js',
                  'Angular',
                  'Node.js',
                  'Python',
                  'AWS',
                  'Docker',
                  'MongoDB',
                  'TypeScript',
                  'Next.js',
                  'GraphQL',
                  'Kubernetes',
                ].map((tech, index) => (
                  <motion.div
                    key={`${tech}-${index}`}
                    className="bg-gray-800 px-6 py-3 rounded-full text-purple-400 font-semibold border border-purple-400/30"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: '#7c3aed',
                      color: '#ffffff',
                      transition: { duration: 0.2 },
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  'React',
                  'Vue.js',
                  'Angular',
                  'Node.js',
                  'Python',
                  'AWS',
                  'Docker',
                  'MongoDB',
                  'TypeScript',
                  'Next.js',
                  'GraphQL',
                  'Kubernetes',
                ].map((tech, index) => (
                  <motion.div
                    key={`${tech}-duplicate-${index}`}
                    className="bg-gray-800 px-6 py-3 rounded-full text-purple-400 font-semibold border border-purple-400/30"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: '#7c3aed',
                      color: '#ffffff',
                      transition: { duration: 0.2 },
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
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
        bgColor="bg-gradient-to-br from-blue-600 to-purple-700"
        reverse={false}
      />
      {/* Featured Service - Mobile App Development */}
      <FullPageServiceCard
        title="Mobile App Development"
        description="Create powerful, user-friendly mobile applications that engage your audience and drive business growth. Our mobile development experts build native and cross-platform apps that deliver exceptional performance across all devices."
        features={[
          'Native iOS and Android development',
          'Cross-platform solutions with React Native & Flutter',
          'UI/UX design optimized for mobile interfaces',
          'App Store and Google Play deployment',
          'Push notifications and real-time features',
          'Offline functionality and data synchronization',
        ]}
        image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        number={2}
        link="/services/mobile-app-development"
        bgColor="bg-gradient-to-br from-green-600 to-blue-600"
        reverse={true}
      />
      {/* Featured Service - Cloud Solutions */}
      <FullPageServiceCard
        title="Cloud Solutions"
        description="Leverage the power of cloud computing to scale your business efficiently. We provide comprehensive cloud infrastructure, migration services, and optimization strategies using leading platforms like AWS, Azure, and Google Cloud."
        features={[
          'Cloud infrastructure design and implementation',
          'Migration from on-premises to cloud',
          'Multi-cloud and hybrid cloud strategies',
          'DevOps and CI/CD pipeline setup',
          'Cloud security and compliance',
          'Cost optimization and monitoring',
        ]}
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        number={3}
        link="/services/cloud-solutions"
        bgColor="bg-gradient-to-br from-cyan-600 to-blue-800"
        reverse={false}
      />
      {/* Featured Service - AI & Machine Learning */}
      <FullPageServiceCard
        title="AI & Machine Learning"
        description="Harness the power of artificial intelligence to automate processes, gain valuable insights, and drive innovation. Our AI solutions help businesses make data-driven decisions and stay competitive in the digital age."
        features={[
          'Machine learning model development',
          'Natural language processing (NLP)',
          'Computer vision and image recognition',
          'Predictive analytics and forecasting',
          'AI-powered automation solutions',
          'Data pipeline and MLOps implementation',
        ]}
        image="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        number={7}
        link="/services/ai-machine-learning"
        bgColor="bg-gradient-to-br from-purple-600 to-pink-600"
        reverse={true}
      />
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-gray-900 to-pink-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge
              technology solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
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
