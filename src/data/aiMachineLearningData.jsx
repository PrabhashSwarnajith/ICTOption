import ml1 from '../assets/img/ml1.webp';
import ml2 from '../assets/img/ml2.webp';
import finance from '../assets/img/finance.webp';
import healthcare from '../assets/img/health.webp';
import retail from '../assets/img/retail.webp';
import manufacturing from '../assets/img/manufacturing.webp';

export const heroData = {
  title: (
    <span className="text-accent font-heading">
      AI & <span className="text-secondary">Machine Learning</span>
    </span>
  ),
  subtitle: (
    <span className="text-white font-heading">
      Unlock Unprecedented{' '}
      <span className="text-secondary">Business Value</span> with AI
    </span>
  ),
  description: (
    <span className="text-neutral-300 font-body">
      Harness the transformative power of artificial intelligence and machine
      learning to{' '}
      <b>automate processes, gain deeper insights, and drive innovation</b>{' '}
      across your enterprise. We turn complex data into intelligent action.
    </span>
  ),
  backgroundImage: ml1,
  gradient: 'from-primary via-black/80 to-neutral-900',
  className: 'brightness-110',
  ml2,
};

export const whyChooseUsPoints = [
  {
    title: 'Proven AI Experts',
    description:
      'Our team includes PhDs and certified AI engineers with years of hands-on experience in cutting-edge AI and ML technologies.',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'End-to-End Solutions',
    description:
      'We handle everything from AI strategy and data engineering to model development, deployment, and ongoing optimization and support.',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
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
    title: 'Cutting-Edge Technology',
    description:
      'We utilize the latest AI/ML frameworks, tools, and cloud platforms (AWS, Azure, GCP) to build scalable, high-performance, and future-proof solutions.',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM12 4v16"
        />
      </svg>
    ),
  },
  {
    title: 'Business-Focused ROI',
    description:
      'Our primary focus is on delivering tangible business value, measurable ROI, and seamless integration of AI solutions into your existing operations.',
    icon: (
      <svg
        className="w-8 h-8 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V3a1 1 0 00-1-1H9a1 1 0 00-1 1v5m4 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export const processSteps = [
  {
    step: '1. Discovery & Strategy',
    description:
      'We begin by thoroughly understanding your business objectives, current challenges, available data, and identifying high-impact AI opportunities.',
  },
  {
    step: '2. Data Engineering & Preparation',
    description:
      "Our team collects, cleans, transforms, and prepares your data, ensuring it's ready for robust AI model training and deployment.",
  },
  {
    step: '3. Model Development & Training',
    description:
      'We design, build, and rigorously train custom AI/ML models tailored to your specific use cases, iteratively refining for optimal performance.',
  },
  {
    step: '4. Deployment & Integration',
    description:
      'Your AI solution is seamlessly integrated into your existing systems and infrastructure, ensuring smooth operation and minimal disruption.',
  },
  {
    step: '5. Monitoring & Optimization',
    description:
      'We provide continuous monitoring of model performance, ongoing optimization, and support to ensure long-term value and adaptability.',
  },
];

export const successStories = [
  {
    title: 'Retail: Personalized Shopping',
    description:
      'Implemented a cutting-edge recommendation engine for a leading e-commerce client, resulting in a **25% increase in conversion rates** and higher average order value.',
    image: retail,
  },
  {
    title: 'Healthcare: Faster Diagnoses',
    description:
      'Developed and deployed a computer vision model for medical imaging analysis, which **reduced diagnosis time by 40%** and improved early detection rates for a healthcare provider.',
    image: healthcare,
  },
  {
    title: 'Finance: Advanced Fraud Detection',
    description:
      'Built a real-time, AI-powered fraud detection system for a major financial institution, leading to a **reduction in fraudulent transactions by millions** annually.',
    image: finance,
  },
  {
    title: 'Manufacturing: Predictive Maintenance',
    description:
      'Implemented an ML-driven predictive maintenance solution for a manufacturing giant, **reducing equipment downtime by 30%** and saving significant operational costs.',
    image: manufacturing,
  },
];

export const emergingApplications = [
  {
    title: 'Generative AI Solutions',
    description:
      'Leverage AI to create new content, design, code, and more, unleashing unprecedented levels of creativity and automation.',
    icon: (
      <svg
        className="w-8 h-8 text-accent"
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
    imageUrl:
      'https://images.unsplash.com/photo-1698243685375-38d58c65d64b?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'AI-Powered Automation',
    description:
      'Automate complex tasks and decision-making across your business processes, improving efficiency and reducing manual errors.',
    icon: (
      <svg
        className="w-8 h-8 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1620712948383-f3680e0c1f21?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Ethical AI & Governance',
    description:
      'Ensure your AI systems are fair, transparent, and accountable, adhering to ethical guidelines and regulatory compliance.',
    icon: (
      <svg
        className="w-8 h-8 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.055 0 0112 2.944a11.955 11.055 0 01-8.618 3.04A12.001 12.001 0 002 12c0 2.404.75 4.631 2.05 6.404L3 22l5.4-1.296C10.632 21.6 13.013 22 15 22h.024c2.81 0 5.432-.698 7.076-1.928.006-.002.01-.005.016-.007-.002-.006-.005-.01-.007-.016C21.698 17.432 22 14.81 22 12a12.001 12.001 0 00-4.382-8.016z"
        />
      </svg>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1582213782179-e0d5337b5880?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'AI in Edge Computing',
    description:
      'Deploy AI models closer to data sources (edge devices) for real-time insights, reduced latency, and enhanced privacy.',
    icon: (
      <svg
        className="w-8 h-8 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    ),
    imageUrl:
      'https://images.unsplash.com/photo-1549692520-acc6669e2fde?auto=format&fit=crop&w=400&q=80',
  },
];

export const industriesServed = [
  'Healthcare & Pharma',
  'Finance & Banking',
  'Retail & E-commerce',
  'Manufacturing & Logistics',
  'Energy & Utilities',
  'Automotive',
  'Media & Entertainment',
  'Telecommunications',
  'Government & Public Sector',
  'Education',
];

export const keySolutions = [
  {
    title: 'Predictive Analytics',
    description:
      'Forecast future trends and behaviors to make data-driven decisions and anticipate market shifts.',
    icon: (
      <svg
        className="w-10 h-10 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: 'Natural Language Processing (NLP)',
    description:
      'Process and understand human language to extract insights from text, power chatbots, and analyze sentiment.',
    icon: (
      <svg
        className="w-10 h-10 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    ),
  },
  {
    title: 'Computer Vision',
    description:
      'Enable machines to "see" and interpret visual data for tasks like object recognition, facial detection, and quality control.',
    icon: (
      <svg
        className="w-10 h-10 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.055 0 0112 2.944a11.955 11.055 0 01-8.618 3.04A12.001 12.001 0 002 12c0 2.404.75 4.631 2.05 6.404L3 22l5.4-1.296C10.632 21.6 13.013 22 15 22h.024c2.81 0 5.432-.698 7.076-1.928.006-.002.01-.005.016-.007-.002-.006-.005-.01-.007-.016C21.698 17.432 22 14.81 22 12a12.001 12.001 0 00-4.382-8.016z"
        />
      </svg>
    ),
  },
  {
    title: 'Reinforcement Learning',
    description:
      'Develop intelligent agents that learn optimal strategies through trial and error in complex environments.',
    icon: (
      <svg
        className="w-10 h-10 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l4-4 4 4m0 6l-4 4-4-4"
        />
      </svg>
    ),
  },
];
