// src/data/cybersecurityData.jsx
import cyber1 from '../assets/img/cyber1.webp';
import cyber2 from '../assets/img/cyber2.webp';
import cyber3 from '../assets/img/cyber3.webp';

export const heroData = {
  title: (
    <span className="text-accent font-heading">
      Cyber<span className="text-secondary">security</span> Services
    </span>
  ),
  subtitle: (
    <span className="text-accent font-heading">
      Fortify Your <span className="text-secondary">Digital Defenses</span>
    </span>
  ),
  description: (
    <span className="text-neutral-300 font-body">
      In an ever-evolving threat landscape, protect your critical digital assets
      with our comprehensive, proactive cybersecurity solutions. Ensure business
      continuity and safeguard your reputation.
    </span>
  ),
  backgroundImage: cyber1,
  gradient: 'from-primary via-black/80 to-neutral-900',
  className: 'brightness-110',
  cyber2,
  cyber3,
};

export const whyChooseUsPoints = [
  {
    title: 'Certified Experts',
    description:
      'Our elite team holds top industry certifications (CISSP, CEH, CompTIA Security+) and boasts years of hands-on experience in defending complex digital infrastructures.',
    icon: '🛡️',
  },
  {
    title: '24/7 Vigilance',
    description:
      'We provide round-the-clock monitoring and rapid incident response, ensuring constant protection and peace of mind against emerging threats.',
    icon: '👀',
  },
  {
    title: 'Proactive Defense',
    description:
      'We go beyond reactive measures, identifying and neutralizing potential threats before they can impact your operations or compromise your data.',
    icon: '🎯',
  },
  {
    title: 'Compliance & Governance',
    description:
      'Navigate complex regulatory landscapes with ease. We help you achieve and maintain compliance with industry standards like HIPAA, GDPR, ISO 27001, and more.',
    icon: '📜',
  },
];

export const ourApproachSteps = [
  {
    step: 'Prevention',
    description:
      'Implementing robust firewalls, advanced endpoint protection, secure configurations, and comprehensive employee cybersecurity training.',
    icon: '🔒',
  },
  {
    step: 'Detection',
    description:
      'Leveraging 24/7 Security Operations Center (SOC) monitoring, cutting-edge threat intelligence, and AI-driven anomaly detection systems.',
    icon: '🔍',
  },
  {
    step: 'Response',
    description:
      'Executing rapid, coordinated incident response plans, forensic analysis, and efficient recovery procedures to minimize downtime and damage.',
    icon: '⚡',
  },
  {
    step: 'Compliance',
    description:
      'Conducting ongoing security audits, risk assessments, and ensuring strict adherence to industry-specific regulatory requirements.',
    icon: '✅',
  },
];

export const coreServices = [
  {
    title: 'Cybersecurity Awareness Training',
    description:
      'Empower your employees to be your first line of defense with engaging and effective cybersecurity awareness programs, covering social engineering, phishing, and password hygiene education.',
  },
  {
    title: 'Phishing Simulation Campaigns',
    description:
      'Test employee response to fake phishing emails and assess their susceptibility to social engineering attacks, providing valuable insights for targeted training.',
  },
  {
    title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
    description:
      'Identify security weaknesses in your web, mobile, network, or cloud infrastructure through comprehensive vulnerability assessments and simulated attacks to evaluate real-world exploitability.',
  },
  {
    title: 'Web Application Security Testing',
    description:
      'Thorough testing focused on OWASP Top 10 vulnerabilities, business logic flaws, and access control issues to secure your web applications.',
  },
  {
    title: 'Mobile Application Security Testing',
    description:
      'Comprehensive security testing for both iOS and Android applications, covering code-level vulnerabilities, insecure data storage, and runtime issues.',
  },
  {
    title: 'Risk Assessments',
    description:
      'Identify vulnerabilities and assess security risks across your entire digital infrastructure, providing clear actionable insights.',
  },
  {
    title: 'Managed Security Services (MSSP)',
    description:
      'Full-spectrum outsourced security operations including monitoring, threat detection, and incident response, 24/7.',
  },
  {
    title: 'Compliance & Audit',
    description:
      'Expert guidance and support to achieve and maintain compliance with critical industry standards and data protection regulations.',
  },
  {
    title: 'Incident Response & Recovery',
    description:
      'Rapid response teams to contain, eradicate, and recover from cyber incidents, minimizing disruption and data loss.',
  },
];

export const successStories = [
  {
    title: 'Financial Firm: Major Breach Averted',
    description:
      'Through our proactive threat intelligence and rapid incident response, we detected and neutralized a sophisticated ransomware attack, safeguarding millions in assets for a leading financial institution.',
    tag: 'Finance',
  },
  {
    title: 'Healthcare Provider: Data Secured',
    description:
      'Implemented advanced data encryption and access controls, ensuring full HIPAA compliance and protecting sensitive patient medical records for a large hospital network.',
    tag: 'Healthcare',
  },
  {
    title: 'Global Retailer: DDoS Defense',
    description:
      'Deployed scalable cloud-based DDoS mitigation, successfully protecting a major e-commerce platform from multiple, high-volume distributed denial-of-service attacks during peak sales periods.',
    tag: 'Retail',
  },
];

export const industriesWeServe = [
  'Finance & Banking',
  'Healthcare',
  'Retail & E-commerce',
  'Education',
  'Government & Public Sector',
  'Manufacturing',
  'Technology & SaaS',
  'Legal',
  'Telecommunications',
  'Utilities',
];

export const faqs = [
  {
    question: 'How do I determine my business’s cybersecurity posture?',
    answer:
      'We begin with a comprehensive **Cybersecurity Risk Assessment** to identify your vulnerabilities, evaluate your current defenses, and provide a clear roadmap for improvement. Contact us for a consultation.',
  },
  {
    question: 'What types of cyber threats do you primarily protect against?',
    answer:
      'Our solutions are designed to defend against a wide array of threats, including **ransomware, phishing, DDoS attacks, zero-day exploits, insider threats, and advanced persistent threats (APTs)**.',
  },
  {
    question: 'What is your typical incident response time?',
    answer:
      'Our **24/7 Security Operations Center (SOC)** ensures rapid response. For critical incidents, our team can engage within **minutes** to contain and address the threat.',
  },
  {
    question: 'Do you offer services to help with regulatory compliance?',
    answer:
      'Absolutely. We specialize in helping businesses achieve and maintain compliance with major global and industry-specific regulations such as **GDPR, HIPAA, ISO 27001, PCI DSS, and NIST frameworks**.',
  },
];
