// src/data/webDevelopmentData.jsx
import gayanImg from '../assets/team/gayan.webp';
import hariniImg from '../assets/team/harini.webp';
import isuruImg from '../assets/team/isuru.webp';
import web from '../assets/img/web.webp';
import web1 from '../assets/img/web1.webp';
import web2 from '../assets/img/web2.webp';

export const heroData = {
  title: (
    <span className="text-accent font-heading">
      Web <span className="text-secondary">Development</span>
    </span>
  ),
  subtitle: (
    <span className="text-accent font-heading">
      Transforming Ideas into{' '}
      <span className="text-secondary">Digital Reality</span>
    </span>
  ),
  description: (
    <span className="text-neutral-300 font-body">
      We build cutting-edge web solutions that drive innovation, enhance user
      experiences, and accelerate business growth in the modern digital
      landscape.
    </span>
  ),
  backgroundImage: web2,
  gradient: 'from-primary via-black/80 to-neutral-900',
  className: 'brightness-110',
  web1,
  web,
};

export const webFeatures = [
  {
    title: 'Custom Web Applications',
    icon: '💻',
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

export const technologies = [
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
    logo: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg',
  },
];

export const processSteps = [
  { label: 'Discovery & Strategy', value: 90 },
  { label: 'UI/UX Design & Prototyping', value: 92 },
  { label: 'Development & Iteration', value: 90 },
  { label: 'Deployment & Ongoing Support', value: 88 },
];

export const statistics = [
  { value: '30+', label: 'Web Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction Rate' },
  { value: '10+', label: 'Years of Experience' },
];

export const testimonials = [
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

export const faqs = [
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
