// src/data/itConsultingData.jsx
import it1 from '../assets/img/it1.webp';
import it2 from '../assets/img/it2.webp';
import it3 from '../assets/img/it3.webp';

export const heroData = {
  title: (
    <span className="text-accent font-heading">
      IT <span className="text-secondary">Consulting</span>
    </span>
  ),
  subtitle: (
    <span className="text-accent font-heading">
      Strategic <span className="text-secondary">Technology Guidance</span>
    </span>
  ),
  description: (
    <span className="text-neutral-300 font-body">
      Navigate the complexities of the digital landscape with expert IT
      consulting. We align technology with your business goals, driving
      innovation and sustainable growth.
    </span>
  ),
  backgroundImage: it1,
  gradient: 'from-primary via-black/80 to-neutral-900',
  className: 'brightness-110',
  it2,
  it3,
};

export const coreServices = [
  {
    title: 'Technology Strategy & Roadmapping',
    description:
      'Develop comprehensive IT strategies and detailed roadmaps that align technology initiatives directly with your overarching business objectives.',
    icon: (
      <svg
        className="w-6 h-6 text-accent"
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
    title: 'Cloud Consulting & Migration',
    description:
      'Strategize and execute seamless transitions to cloud platforms (AWS, Azure, GCP), optimizing for scalability, cost-efficiency, and performance.',
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2h-1m-4-6v-2m-4 2v-2m-3 6h7M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m18 0a2 2 0 00-2-2H5a2 2 0 00-2 2m18 0H3"
        />
      </svg>
    ),
  },
  {
    title: 'Digital Transformation',
    description:
      'Guide your organization through comprehensive digital change, integrating new technologies to revolutionize operations and customer experiences.',
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Cybersecurity Advisory',
    description:
      'Assess, plan, and implement robust cybersecurity frameworks and best practices to protect your critical assets and ensure data integrity.',
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v3h8z"
        />
      </svg>
    ),
  },
  {
    title: 'IT Infrastructure Optimization',
    description:
      'Evaluate and enhance your existing IT infrastructure for peak performance, reliability, and cost-effectiveness.',
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10m0 0h6m-6 0L9 14m-3 0h6m-6 0L9 10m-3 0h6m-6 0L9 6m-3 0h6m0-2a2 2 0 012-2h2a2 2 0 012 2v16a2 2 0 01-2 2h-2a2 2 0 01-2-2V4z"
        />
      </svg>
    ),
  },
  {
    title: 'Data & Analytics Strategy',
    description:
      'Develop strategies to leverage your data effectively, enabling informed decision-making and unlocking new business opportunities through analytics.',
    icon: (
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 12l3-3 3 3 4-4M18 10h4M4 18H2M11 15V6a2 2 0 012-2h2a2 2 0 012 2v11a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

export const whyChooseUsPoints = [
  {
    title: 'Unbiased Expertise',
    description:
      'We provide objective, vendor-agnostic advice, ensuring solutions truly fit your needs, not a sales quota.',
    icon: '💡',
  },
  {
    title: 'Strategic Alignment',
    description:
      'Our recommendations always link directly to your business goals, ensuring technology serves your vision.',
    icon: '🎯',
  },
  {
    title: 'Proven Methodologies',
    description:
      'We use industry-best practices and frameworks to deliver consistent, measurable results.',
    icon: '✅',
  },
  {
    title: 'Future-Proof Solutions',
    description:
      'We design IT architectures and strategies that scale and adapt to future technological advancements.',
    icon: '🚀',
  },
];

export const consultingProcess = [
  {
    step: '1. Discover & Assess',
    description:
      'In-depth analysis of your current IT landscape, business objectives, challenges, and opportunities.',
    icon: '🔍',
  },
  {
    step: '2. Strategize & Plan',
    description:
      'Collaborative development of a tailored IT strategy, detailed roadmap, and actionable implementation plan.',
    icon: '🗺️',
  },
  {
    step: '3. Design & Implement',
    description:
      'Architecting solutions, overseeing technology deployment, and ensuring seamless integration.',
    icon: '🏗️',
  },
  {
    step: '4. Optimize & Support',
    description:
      'Continuous monitoring, performance optimization, and ongoing support to ensure long-term success.',
    icon: '📈',
  },
];

export const clientSuccessStories = [
  {
    title: 'Streamlined Operations for a Manufacturing Giant',
    description:
      'Implemented a new ERP system and integrated cloud solutions, reducing operational costs by 20% and improving supply chain efficiency.',
    industry: 'Manufacturing',
  },
  {
    title: 'Accelerated Digital Transformation for Retailer',
    description:
      'Developed a comprehensive digital strategy, leading to a 30% increase in online sales and enhanced customer engagement through new platforms.',
    industry: 'Retail & E-commerce',
  },
  {
    title: 'Optimized Cloud Infrastructure for SaaS Startup',
    description:
      'Migrated legacy systems to a highly scalable and cost-effective cloud environment, improving application performance by 40% and reducing infrastructure spend.',
    industry: 'Technology & SaaS',
  },
];

export const industries = [
  'Finance & Banking',
  'Healthcare',
  'Manufacturing',
  'Retail & E-commerce',
  'Education',
  'Government',
  'Technology & SaaS',
  'Logistics',
  'Real Estate',
  'Non-profit',
];

export const faqs = [
  {
    question: 'What types of businesses do you consult for?',
    answer:
      'We consult for businesses of all sizes, from startups to large enterprises, across various industries including finance, healthcare, manufacturing, retail, and technology.',
  },
  {
    question: 'How long does a typical consulting engagement last?',
    answer:
      'Engagement length varies depending on scope, from a few weeks for specific assessments to several months for comprehensive digital transformation projects. We tailor our approach to your needs.',
  },
  {
    question: 'What makes your IT consulting approach unique?',
    answer:
      "Our uniqueness lies in our **vendor-agnostic approach**, deep understanding of diverse industries, and a focus on **measurable ROI**. We don't just recommend; we partner with you for implementation and success.",
  },
  {
    question: 'Can you help us with legacy system modernization?',
    answer:
      'Absolutely. We specialize in helping businesses modernize outdated legacy systems, migrating data, refactoring applications, and integrating new, more efficient technologies to improve performance and reduce technical debt.',
  },
];
