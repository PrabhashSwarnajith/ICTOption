import web2 from '../assets/img/web2.webp';
import mobile3 from '../assets/img/mobile3.webp';
import it1 from '../assets/img/it1.webp';
import dm1 from '../assets/img/dm1.webp';
import cyber1 from '../assets/img/cyber1.webp';
import ml from '../assets/img/ml1.webp';

export const servicesData = [
  {
    name: 'Web Development',
    path: '/services/web-development',
    image: web2,
    label: 'Web',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    name: 'Mobile App Development',
    path: '/services/mobile-app-development',
    image: mobile3,
    label: 'Mobile',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
        />
      </svg>
    ),
  },
  {
    name: 'AI & Machine Learning',
    path: '/services/ai-machine-learning',
    image: ml,
    label: 'AI',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    name: 'Digital Marketing',
    path: '/services/digital-marketing',
    image: dm1,
    label: 'Marketing',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: 'IT Consulting',
    path: '/services/it-consulting',
    image: it1,
    label: 'Consulting',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    name: 'Cybersecurity',
    path: '/services/cybersecurity',
    image: cyber1,
    label: 'Security',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export const projectsData = [
  {
    category: 'DIGITAL MARKETING',
    title: 'Full-Stack Digital Marketing for Eros Clothings',
    description:
      'Delivered a complete digital transformation—from website development to a full-fledged social media strategy—for Eros Clothings. Our team executed SEO, paid advertising, and multi-platform content marketing to drive brand engagement and conversions.',
    image:
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    category: 'WEB APPLICATION',
    title: 'Custom Payroll Management System for Team Big Data',
    description:
      'Designed and developed a fully customized web-based payroll management system for Team Big Data. The platform automates salary calculations, tax filings, employee records, and compliance reporting—delivering efficiency, accuracy, and scalability for HR operations.',
    image:
      'https://images.unsplash.com/photo-1496171367476-4297a2a72838?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    category: 'AI/ML',
    title: 'Predictive Analytics for Milk Supply Estimation',
    description:
      'Developed a web-based predictive analytics solution for a UK-based dairy farm, commissioned by client Ishan Hewage. The platform leverages Machine Learning and AI to forecast milk supply rates using historical and environmental data—improving planning accuracy and operational efficiency.',
    image:
      'https://images.unsplash.com/photo-1544006659-bf729608404a?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    category: 'CYBER SECURITY',
    title: 'Simulation-Based Cryptographic Protocol Analysis for WSNs',
    description:
      'Delivered a research-driven simulation project for a UK client, focusing on secure cryptographic key establishment in wireless sensor networks (WSNs). Using NS-3, we evaluated lightweight and energy-efficient encryption protocols—enhancing security, scalability, and real-world applicability in resource-constrained IoT environments.',
    image:
      'https://images.unsplash.com/photo-1544006659-bf729608404a?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    category: 'MOBILE APPLICATION',
    title: 'DriveWell – Car Maintenance App for Australian Startup',
    description:
      'Developed a cross-platform mobile app for an Australian startup to simplify vehicle maintenance. DriveWell empowers users to manage multiple vehicles, track service history, receive maintenance reminders, log expenses, and export reports—enhancing vehicle health, safety, and cost-efficiency through a user-friendly digital solution.',
    image:
      'https://images.unsplash.com/photo-1544006659-bf729608404a?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
];

export const whyChooseUsPoints = [
  {
    title: 'Full-Stack Expertise',
    description:
      'From web to cloud, our team covers every layer of modern tech, providing holistic solutions.',
  },
  {
    title: 'Client-Centric Approach',
    description:
      'We focus on your goals, ensuring solutions that drive real business value and measurable ROI.',
  },
  {
    title: 'Agile & Innovative',
    description:
      'We use the latest tools and agile methodologies for rapid, high-quality delivery and adaptability.',
  },
  {
    title: 'End-to-End Support',
    description:
      'From initial strategy to ongoing support, we’re with you at every step of your digital journey.',
  },
];

export const howWeWorkSteps = [
  {
    step: '1. Discovery',
    description: 'We analyze your needs and goals to craft the right solution.',
  },
  {
    step: '2. Design & Plan',
    description:
      'We architect and design a solution tailored to your business.',
  },
  {
    step: '3. Build & Launch',
    description:
      'Our engineers develop, test, and launch your solution with best practices.',
  },
  {
    step: '4. Support & Grow',
    description:
      'We provide ongoing support and enhancements for long-term success.',
  },
];

export const testimonialsData = [
  {
    quote:
      'ICT Option transformed our operations, streamlining sales and inventory with incredible ease.',
    name: 'Gayashan Sandaruwan',
    title: 'Entrepreneur 🇱🇰',
  },
  {
    quote:
      'Their Power Apps solution enabled our team to build custom tools quickly, boosting productivity across departments.',
    name: 'Ishan Hewage',
    title: 'Foreign Student  🇬🇧',
  },
  {
    quote:
      'The support and expertise from ICT Option have been phenomenal, delivering results beyond our expectations.',
    name: 'Madhushika Jayasundara',
    title: 'Project coordinator 🇫🇮',
  },
];

export const faqsData = [
  {
    question: 'What industries do you specialize in?',
    answer:
      'We serve healthcare, finance, retail, manufacturing, logistics, education, and many other sectors.',
  },
  {
    question: 'Can you build custom solutions?',
    answer:
      'Absolutely! We tailor every project to your unique requirements and business goals, ensuring a perfect fit.',
  },
  {
    question: 'How do you ensure project success?',
    answer:
      'We use agile methodologies, maintain transparent communication, and provide ongoing support to deliver exceptional results.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We work with cutting-edge technologies including React, Node.js, Python, AWS, Azure, and the latest frameworks and tools.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes, we provide comprehensive post-launch support, including maintenance, regular updates, and performance monitoring.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply contact us for a free consultation. We’ll discuss your needs and guide you through the next steps to bring your vision to life.',
  },
];
