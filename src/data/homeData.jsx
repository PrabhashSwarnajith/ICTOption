// src/data/homeData.jsx
// All data arrays for the Home page

import web2 from '../assets/img/web2.webp';
import mobile3 from '../assets/img/mobile3.webp';
import it1 from '../assets/img/it1.webp';
import dm1 from '../assets/img/dm1.webp';
import cyber1 from '../assets/img/cyber1.webp';
import ml1 from '../assets/img/ml1.webp';
import partner1 from '../assets/partners/partner1.png';
import partner2 from '../assets/partners/partner2.png';
import partner3 from '../assets/partners/partner3.jpg';
import partner4 from '../assets/partners/partner4.jpg';
import partner5 from '../assets/partners/partner5.jpg';
import partner6 from '../assets/partners/partner6.jpg';

export const aboutFeatures = [
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

export const whyChooseUsPoints = [
  { label: 'Experience', value: 90 },
  { label: 'Professional Team', value: 92 },
  { label: 'Quality Solutions', value: 90 },
  { label: 'Affordable Price', value: 88 },
];

export const partnersData = [
  { name: 'UrbanLabs', image: partner1 },
  { name: 'LaLa Land', image: partner3 },
  { name: 'EROS', image: partner5 },
  { name: 'VGO', image: partner4 },
  { name: 'KSztacK', image: partner6 },
  { name: 'MASK D TEC', image: partner2 },
];

export const statsData = [
  { value: '50+', label: 'Happy Clients' },
  { value: '100+', label: 'Projects Completed' },
  { value: '3+', label: 'Years of Excellence' },
];

export const featuredServices = [
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
    bgColor: 'bg-gradient-to-br from-primary to-neutral-800',
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
    bgColor: 'bg-gradient-to-br from-primary to-secondary',
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

export const clientReviews = [
  {
    quote:
      'The digital marketing campaign brought us more leads than ever before. Their data-driven approach and creative strategies are highly recommended!',
    name: 'Ishan Hewage',
    title: 'Foreign Student  🇬🇧',
  },
  {
    quote:
      'ICT Option delivered our project on time and exceeded our expectations. Their team is highly skilled and professional, truly transforming our digital presence.',
    name: 'Gayashan Sandaruwan',
    title: 'Entrepreneur 🇱🇰',
  },
  {
    quote:
      'Their IT consulting helped us streamline operations and improve efficiency. A truly strategic partner for modern business challenges.',
    name: 'Madhushika Jayasundara',
    title: 'Project coordinator 🇫🇮',
  },
];

export const faqs = [
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
