// src/data/digitalMarketingData.jsx
import dm1 from '../assets/img/dm1.webp';
import dm2 from '../assets/img/dm2.webp';
import dm3 from '../assets/img/dm3.webp';

export const heroData = {
  title: (
    <span className="text-accent font-heading">
      Digital <span className="text-secondary">Marketing</span>
    </span>
  ),
  subtitle: (
    <span className="text-accent font-heading">
      Supercharge Your <span className="text-secondary">Online Presence</span>
    </span>
  ),
  description: (
    <span className="text-neutral-300 font-body">
      Unleash the full potential of your brand online with comprehensive,
      data-driven digital marketing strategies that deliver measurable growth
      and strong ROI.
    </span>
  ),
  backgroundImage: dm1,
  gradient: 'from-primary via-black/80 to-neutral-900',
  className: 'brightness-110',
  dm2,
  dm3,
};

export const whyChooseUsPoints = [
  {
    title: 'Certified Experts',
    description:
      'Our team holds industry-leading certifications from Google, Meta, and HubSpot, backed by years of practical experience delivering results.',
    icon: '✨',
  },
  {
    title: 'Data-Driven Strategies',
    description:
      'Every decision is powered by in-depth analytics and performance insights, ensuring maximum ROI for your marketing spend.',
    icon: '📊',
  },
  {
    title: 'Innovative Creativity',
    description:
      "We don't just follow trends; we set them. Our creative team crafts compelling campaigns and content that truly captivate your audience.",
    icon: '💡',
  },
  {
    title: 'Measurable Growth',
    description:
      'Our focus is on tangible outcomes. We provide clear reporting on KPIs that matter, demonstrating real business growth for brands of all sizes.',
    icon: '📈',
  },
];

export const howWeGrowSteps = [
  {
    step: 'Audit & Analysis',
    description:
      'A deep dive into your current digital footprint, target audience, and competitive landscape to pinpoint opportunities.',
  },
  {
    step: 'Strategic Blueprint',
    description:
      'Developing a bespoke, omnichannel digital marketing strategy meticulously tailored to your unique business goals.',
  },
  {
    step: 'Agile Execution',
    description:
      'Seamlessly launching and managing campaigns across all chosen channels, ensuring continuous optimization and responsiveness.',
  },
  {
    step: 'Performance Optimization',
    description:
      'Constant monitoring, A/B testing, and refinement based on real-time data to maximize conversions and overall ROI.',
  },
];

export const successStories = [
  {
    title: 'E-commerce: 3x Sales Growth',
    description:
      'We orchestrated a comprehensive multi-channel digital campaign that directly led to a threefold increase in online sales for a prominent retail client.',
    tag: 'Retail',
  },
  {
    title: 'Local Business: #1 on Google',
    description:
      'Through an expert blend of local SEO and targeted content strategy, we elevated a local service business to the coveted top position in search results.',
    tag: 'Local SEO',
  },
  {
    title: 'SaaS: 5x Lead Generation',
    description:
      'Our optimized paid advertising strategies, combined with high-converting landing pages, drastically boosted lead generation by five times for a cutting-edge SaaS startup.',
    tag: 'B2B SaaS',
  },
];

export const industries = [
  'Retail & E-commerce',
  'Healthcare',
  'Education',
  'Finance & Fintech',
  'Tech Startups',
  'Hospitality',
  'Real Estate',
  'Automotive',
  'Professional Services',
];

export const faqs = [
  {
    question: 'How quickly can I expect to see results from digital marketing?',
    answer:
      'While results vary depending on the strategy and industry, most of our clients start observing measurable improvements in key metrics within 1 to 3 months of campaign launch.',
  },
  {
    question: 'Do you manage paid advertising campaigns (PPC)?',
    answer:
      'Yes, absolutely. We specialize in managing highly effective paid ad campaigns across major platforms including Google Ads, Facebook Ads, Instagram Ads, and LinkedIn Ads, ensuring optimal budget utilization.',
  },
  {
    question: 'Can your team assist with content creation for my campaigns?',
    answer:
      'Definitely! Our content specialists are adept at creating a wide range of engaging content, including SEO-optimized blog posts, captivating social media content, compelling video scripts, and more.',
  },
  {
    question: 'What are your contract terms and pricing models?',
    answer:
      'We offer flexible engagement models, including both month-to-month retainers and customized long-term project-based agreements, designed to fit various business needs and budgets. We’re happy to discuss options in a consultation.',
  },
];
