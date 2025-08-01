import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { ServiceCard, Hero } from '../components'; // Assuming Hero is in a 'components' folder
import home from '../assets/img/home.webp'; // Dynamic hero image
import web2 from '../assets/img/web2.webp';
import mobile3 from '../assets/img/mobile3.webp';
import it1 from '../assets/img/it1.webp';
import dm1 from '../assets/img/dm1.webp';
import cyber1 from '../assets/img/cyber1.webp';
import ml1 from '../assets/img/ml1.webp';
import home1 from '../assets/img/home1.webp';
import home2 from '../assets/img/home2.webp';
// Example partner image
import partner1 from '../assets/partners/partner1.png';
import partner2 from '../assets/partners/partner2.png';
import partner3 from '../assets/partners/partner3.jpg';
import partner4 from '../assets/partners/partner4.jpg';
import partner5 from '../assets/partners/partner5.jpg';
import partner6 from '../assets/partners/partner6.jpg';

//  Data Definitions for cleaner JSX

const aboutFeatures = [
  {
    title: 'Best Training',
    desc: 'Expert-led workshops & support to empower your team.',
  },
  {
    title: 'Best Pricing',
    desc: 'Affordable, transparent packages without hidden costs.',
  },
  {
    title: 'Quality Equipment',
    desc: 'Leveraging modern tools & robust infrastructure for top performance.',
  },
  {
    title: 'Best Trainers',
    desc: 'Certified, experienced team dedicated to your success.',
  },
];

const whyChooseUsPoints = [
  { label: 'Experience', value: 90 },
  { label: 'Professional Team', value: 92 },
  { label: 'Quality Solutions', value: 90 },
  { label: 'Affordable Price', value: 88 },
];

const partnersData = [
  { name: 'UrbanLabs', image: partner1 },
  { name: 'LaLa Land', image: partner3 },
  { name: 'EROS', image: partner5 },
  { name: 'VGO', image: partner4 },
  { name: 'KSztacK', image: partner6 },
  { name: 'MASK D TEC', image: partner2 },
];

const statsData = [
  { value: '50+', label: 'Happy Clients' },
  { value: '200+', label: 'Projects Completed' },
  { value: '5+', label: 'Years of Excellence' },
];

const featuredServices = [
  {
    title: 'Web Development',
    description:
      'Transform your digital presence with cutting-edge web applications built using modern technologies and best practices. Our expert developers create scalable, responsive, and user-friendly websites that drive business growth and deliver exceptional user experiences.',
    features: [
      'Responsive web design for all devices',
      'Modern JavaScript frameworks (React, Vue, Angular)',
      'Full-stack development with Node.js, Python, PHP',
      'E-commerce and CMS solutions',
      'SEO optimization and performance tuning',
      'API development and third-party integrations',
    ],
    image: web2,
    number: 1,
    link: '/services/web-development',
    bgColor: 'bg-gradient-to-br from-primary to-neutral-800', // Adjusted to neutral-800 for depth
    reverse: false,
  },
  {
    title: 'Mobile App Development',
    description:
      'Deliver seamless mobile experiences for iOS and Android. Our team builds innovative, high-performance apps with beautiful UI/UX, real-time features, and robust offline capabilities.',
    features: [
      'Native iOS and Android development',
      'Cross-platform solutions (React Native, Flutter)',
      'UI/UX design for mobile interfaces',
      'App Store and Google Play deployment',
      'Push notifications and real-time features',
      'Offline functionality and data sync',
    ],
    image: mobile3,
    number: 2,
    link: '/services/mobile-app-development',
    bgColor: 'bg-gradient-to-br from-primary to-secondary', // Retaining strong brand red
    reverse: true,
  },
  {
    title: 'IT Consulting',
    description:
      'Empower your business with expert IT consulting services. We provide strategic guidance, technology roadmaps, and tailored solutions to help you achieve your business objectives and stay ahead in a rapidly evolving digital world.',
    features: [
      'Technology strategy and planning',
      'IT infrastructure assessment',
      'Digital transformation consulting',
      'Risk management and compliance',
      'Process optimization',
      'Change management and training',
    ],
    image: it1,
    number: 3,
    link: '/services/it-consulting',
    bgColor: 'bg-gradient-to-br from-primary to-neutral-800',
    reverse: false,
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Unlock the power of artificial intelligence and machine learning to automate processes, gain insights, and drive innovation. Our solutions help you leverage data for smarter decision-making and business growth.',
    features: [
      'Custom AI model development',
      'Machine learning and deep learning solutions',
      'Natural language processing (NLP)',
      'Computer vision applications',
      'Predictive analytics',
      'AI integration with existing systems',
    ],
    image: ml1,
    number: 4,
    link: '/services/ai-machine-learning',
    bgColor: 'bg-gradient-to-br from-primary to-secondary',
    reverse: true,
  },
  {
    title: 'Digital Marketing',
    description:
      "Boost your brand's online presence and reach your target audience with our comprehensive digital marketing solutions. We combine creativity and data-driven strategies to maximize your ROI and drive business growth.",
    features: [
      'SEO and SEM campaigns',
      'Social media marketing',
      'Content creation and strategy',
      'Email marketing automation',
      'Analytics and performance tracking',
      'Branding and creative design',
    ],
    image: dm1,
    number: 5,
    link: '/services/digital-marketing',
    bgColor: 'bg-gradient-to-br from-primary to-neutral-800',
    reverse: false,
  },
  {
    title: 'Cybersecurity',
    description:
      'Protect your business from evolving cyber threats with our robust cybersecurity solutions. We offer comprehensive security assessments, proactive monitoring, and incident response to safeguard your digital assets.',
    features: [
      'Vulnerability assessment and penetration testing',
      'Network and endpoint security',
      'Security awareness training',
      'Incident response and recovery',
      'Compliance and risk management',
      '24/7 monitoring and support',
    ],
    image: cyber1,
    number: 6,
    link: '/services/cybersecurity',
    bgColor: 'bg-gradient-to-br from-primary to-secondary',
    reverse: true,
  },
];

const clientReviews = [
  {
    quote:
      'ICT Option delivered our project on time and exceeded our expectations. Their team is highly skilled and professional, truly transforming our digital presence.',
    name: 'Alish White',
    title: 'Entrepreneur',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote:
      'The digital marketing campaign brought us more leads than ever before. Their data-driven approach and creative strategies are highly recommended!',
    name: 'Devin Mueller',
    title: 'Marketing Director',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote:
      'Their IT consulting helped us streamline operations and improve efficiency. A truly strategic partner for modern business challenges.',
    name: 'Sarah Chen',
    title: 'Operations Manager',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const faqs = [
  {
    question: 'What industries do you serve?',
    answer:
      'We work with clients across diverse sectors including finance, healthcare, retail, education, manufacturing, logistics, and more, tailoring solutions to specific industry needs.',
  },
  {
    question: 'How do I start a project with ICT Option?',
    answer:
      "Simply contact us through our website or give us a call. We'll schedule a free initial consultation to discuss your project requirements and outline the next steps.",
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer:
      'Yes, we provide comprehensive ongoing maintenance and support packages. These include regular updates, security monitoring, and technical assistance to ensure your solutions run smoothly.',
  },
  {
    question: 'What is your approach to project management?',
    answer:
      'We adopt agile methodologies, ensuring transparency, flexibility, and continuous client involvement throughout the project lifecycle. This allows for adaptive planning and rapid delivery.',
  },
];

//  Home Component

const Home = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Hero Section */}
      {/* Hero component handles its own internal padding and alignment */}
      <Hero
        title={
          <span className="text-accent font-heading">
            ICT <span className="text-secondary">OPTION</span>
          </span>
        }
        subtitle={
          <span className="text-accent font-heading">
            Transforming Ideas into{' '}
            <span className="text-secondary">Digital Reality</span>
          </span>
        }
        description={
          <span className="text-neutral-300 font-body">
            We craft cutting-edge digital solutions that drive innovation,
            enhance user experiences, and accelerate business growth in the
            modern digital landscape.
          </span>
        }
        backgroundImage={home}
        gradient="from-primary via-black/80 to-neutral-900"
        className="brightness-110"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <Link
            to="/services"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-glow-md hover:bg-secondary-light hover:scale-105 transition-all duration-300 transform-gpu font-body"
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
      {/* About Us Section - Modern Split Layout */}

      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='60' viewBox='0 0 120 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q30 0 60 30 T120 30' stroke='%23374151' stroke-width='4' fill='none' opacity='0.12'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(-8deg) scale(1.2)',
          }}
        ></div>

        {/* Standardized container padding: px-4 sm:px-6 lg:px-8 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            className="relative flex justify-center items-center min-h-[320px] p-4 sm:p-6" /* Added inner padding for image */
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary rounded-xl z-0 shadow-lg"></div>
            <img
              src={home1}
              alt="About ICT Option"
              className="relative z-10 rounded-2xl shadow-2xl w-full max-w-lg object-cover grayscale hover:grayscale-0 transition-all duration-500"
              style={{ aspectRatio: '4/3' }}
            />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-secondary-dark rounded-xl z-0 shadow-lg"></div>
          </motion.div>
          <motion.div
            className="pl-0 md:pl-8" // This padding remains for desktop layout
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-secondary font-bold uppercase tracking-wider text-sm font-body">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading leading-tight">
              Best Tech Solutions & Digital Services Since{' '}
              <span className="text-secondary">2010</span>
            </h2>
            <p className="text-neutral-300 opacity-90 mb-8 max-w-xl font-body">
              We deliver innovative, reliable, and scalable technology solutions
              for businesses of all sizes. Our team combines deep expertise,
              modern tools, and a passion for client success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {aboutFeatures.map((item, index) => (
                <div className="flex items-start gap-3" key={item.title}>
                  <span className="bg-secondary text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">
                    ✓
                  </span>
                  <div>
                    <div className="font-bold text-accent font-body text-base">
                      {item.title}
                    </div>
                    <div className="text-neutral-400 text-sm opacity-90 font-body">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-block bg-secondary text-primary px-8 py-4 rounded-full font-semibold shadow-glow-md hover:bg-secondary-light transition-all duration-300 transform hover:scale-105 font-body"
            >
              Our Company
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Why Choose Us Section */}

      <section className="py-20 bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='16' r='2' fill='%23374151' fill-opacity='0.18'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'scale(1.1)',
          }}
        ></div>

        {/* Standardized container padding: px-4 sm:px-6 lg:px-8 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            className="pr-0 md:pr-8" // This padding remains for desktop layout
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mb-6">
              <span className="text-secondary font-bold uppercase tracking-wider text-sm font-body">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-4 font-heading leading-tight">
                We Provide the{' '}
                <span className="text-secondary">Best Solutions</span> for Our
                Clients
              </h2>
              <p className="text-neutral-300 opacity-90 mb-8 max-w-xl font-body">
                Our team delivers exceptional results with a focus on
                experience, expertise, and value. We combine top talent, modern
                technology, and a client-first approach to help you succeed.
              </p>
            </div>
            <div className="space-y-6">
              {whyChooseUsPoints.map(item => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-accent font-semibold font-body">
                      {item.label}
                    </span>
                    <span className="text-secondary font-bold font-body">
                      {item.value}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      className="h-full bg-secondary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative flex justify-center items-center min-h-[320px] p-4 sm:p-6" /* Added inner padding for image */
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary rounded-xl z-0 shadow-lg"></div>
            <img
              src={home2}
              alt="Team Collaboration"
              className="relative z-10 rounded-2xl shadow-2xl w-full max-w-lg object-cover hover:scale-105 transition-transform duration-500"
              style={{ aspectRatio: '4/3' }}
            />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-secondary-dark rounded-xl z-0 shadow-lg"></div>
          </motion.div>
        </div>
      </section>
      {/* Partners and Statistics Section */}

      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='20,0 40,40 0,40' fill='%23374151' fill-opacity='0.10'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>

        {/* Standardized container padding: px-4 sm:px-6 lg:px-8 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              Our Trusted <span className="text-secondary">Partners</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-lg text-neutral-300 font-body max-w-2xl mx-auto">
              Collaborating with industry leaders to bring you the best
              solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partnersData.map((partner, index) => (
              <motion.div
                key={partner.image}
                className="group cursor-pointer flex flex-col items-center"
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
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-30 h-28 object-contain rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:brightness-125"
                  style={{ background: 'black' }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-neutral-800 rounded-xl shadow-lg border border-neutral-700 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-5xl font-bold text-secondary mb-2 font-heading">
                    {stat.value}
                  </div>
                  <div className="text-accent text-lg font-body">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Featured Services (ServiceCard instances) */}
      {featuredServices.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          features={service.features}
          image={service.image}
          number={service.number}
          link={service.link}
          bgColor={service.bgColor}
          reverse={service.reverse}
        />
      ))}
      {/* Client Reviews Section */}

      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='28' stroke='%23374151' stroke-width='2' fill='none' opacity='0.10'/%3E%3Ccircle cx='30' cy='30' r='18' stroke='%23374151' stroke-width='2' fill='none' opacity='0.10'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'scale(1.1)',
          }}
        ></div>

        {/* Standardized container padding: px-4 sm:px-6 lg:px-8 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm font-body">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              What Our <span className="text-secondary">Clients Say</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-neutral-300 opacity-90 max-w-2xl mx-auto font-body">
              See what our clients say about working with us and how we helped
              them achieve their goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {clientReviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-primary rounded-xl p-8 shadow-lg flex flex-col items-center border-t-4 border-secondary hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-accent text-base mb-6 font-body leading-relaxed text-center">
                  "{review.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full border-2 border-secondary shadow-md"
                  />
                  <div>
                    <div className="font-bold text-secondary font-body">
                      {review.name}
                    </div>
                    <div className="text-neutral-400 text-xs font-body">
                      {review.title}
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
      {/* FAQ Section */}

      <section className="py-20 bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='0,10 10,0 20,20 30,0 40,20 50,0 60,10' stroke='%23374151' stroke-width='2' fill='none' opacity='0.12'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(-5deg) scale(1.05)',
          }}
        ></div>

        {/* Standardized container padding: px-4 sm:px-6 lg:px-8 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-4 font-heading">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-lg text-neutral-300 font-body max-w-2xl mx-auto">
              Find quick answers to common questions about our services and
              approach.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-neutral-800 rounded-xl p-6 shadow-lg border border-neutral-700 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="font-bold text-secondary mb-2 text-lg font-body">
                  {faq.question}
                </div>
                <div className="text-accent font-body leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action Section */}

      <section
        className="py-20 bg-gradient-to-br from-primary via-neutral-900 to-accent text-center relative overflow-hidden" // Changed via-black to via-neutral-900, to-neutral-dark to to-accent for a stronger gradient
        data-aos="fade-up"
        data-aos-delay="900"
      >
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='60' viewBox='0 0 120 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q30 0 60 30 T120 30' stroke='%23374151' stroke-width='2' fill='none' opacity='0.10'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(10deg) scale(1.2)',
          }}
        ></div>

        {/* Standardized container padding: px-4 sm:px-6 lg:px-8 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-6 font-heading">
              Ready to Transform Your{' '}
              <span className="text-secondary">Business</span>?
            </h2>
            <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto font-body opacity-90">
              Let's collaborate to bring your vision to life with cutting-edge
              technology solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-secondary text-primary px-10 py-4 rounded-full font-semibold text-lg shadow-glow-md hover:scale-105 transition-all duration-300 font-body hover:bg-secondary-light"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-accent text-accent px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 font-body"
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
