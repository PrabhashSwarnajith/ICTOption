import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FullPageServiceCard, Hero } from '../components';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="ICT OPTION"
        subtitle="Transforming Ideas into Digital Reality"
        description="We craft cutting-edge digital solutions that drive innovation, enhance user experiences, and accelerate business growth in the modern digital landscape."
        backgroundImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        gradient="from-gray-900 via-gray-800 to-purple-900"
      >
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
      </Hero>
      {/* Trusted Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
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
                <p className="text-center text-sm text-gray-600 mt-3 group-hover:text-purple-600 transition-colors font-medium">
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
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600">Happy Clients</div>
              </motion.div>
              <motion.div
                className="p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  200+
                </div>
                <div className="text-gray-600">Projects Completed</div>
              </motion.div>
              <motion.div
                className="p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  5+
                </div>
                <div className="text-gray-600">Years of Excellence</div>
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
      />{' '}
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
