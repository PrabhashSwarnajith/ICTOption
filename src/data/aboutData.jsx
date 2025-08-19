// src/data/aboutData.jsx
import boss from '../assets/team/boss.webp';
import gayan from '../assets/team/gayan.webp';
import rachi from '../assets/team/rachi.webp';
import ks from '../assets/team/ks.webp';
import kavi from '../assets/team/kavi.webp';
import isuru from '../assets/team/isuru.webp';
import harini from '../assets/team/harini.webp';
import about from '../assets/img/about.webp';

export const team = [
  {
    name: 'Sahan Dushmantha De Silva',
    role: 'CEO & Founder',
    image: boss,
    description:
      'Empowering Innovation, Leading Vision, Building Business Success',
  },
  {
    name: 'Rachithra Pahansith Jayasinghe',
    role: 'Company Secretary',
    image: rachi,
    description: 'Ensures smooth company operations and compliance.',
  },
  {
    name: 'Kuruwitage Saveendra Perera',
    role: 'Head of Research Projects',
    image: ks,
    description: 'Leads research and innovation initiatives.',
  },
  {
    name: 'Kavinda Gayan Bandara',
    role: 'Head of Project Management',
    image: gayan,
    description: 'Expert in project delivery and client success.',
  },
  {
    name: 'Kavindya Piyumanthi Opatha',
    role: 'Head of Human Resources',
    image: kavi,
    description: 'Drives people strategy and team culture.',
  },
  {
    name: 'Harini Kularathne',
    role: 'Head of Finance',
    image: harini,
    description: 'Manages financial planning and analysis.',
  },
  {
    name: 'Isuru Nimeshwara Kularathne',
    role: 'Head of Marketing',
    image: isuru,
    description: 'Leads marketing and brand strategy.',
  },
];

export const aboutHero = {
  title: (
    <span className="text-accent font-heading">
      About <span className="text-secondary">Us</span>
    </span>
  ),
  subtitle: (
    <span className="text-accent font-heading">
      Meet Our <span className="text-secondary">Team</span>
    </span>
  ),
  description: (
    <span className="text-neutral-300 font-body">
      Dedicated to delivering excellence and digital transformation.
    </span>
  ),
  backgroundImage: about,
  gradient: 'from-primary via-black/80 to-neutral-900',
  className: 'brightness-110',
};

export const companyIntro = {
  heading: 'Who We Are',
  description:
    'ICT Option is a leading technology solutions provider based in Sri Lanka, dedicated to empowering organizations through digital transformation. With a passionate team of experts, we deliver innovative, scalable, and user-centric solutions that drive business growth and operational excellence. Our commitment to quality, integrity, and client success sets us apart in the ever-evolving tech landscape.',
};

export const coreValues = [
  {
    title: 'Innovation',
    description:
      'We embrace creativity and forward-thinking to deliver cutting-edge solutions for our clients.',
  },
  {
    title: 'Integrity',
    description:
      'We uphold the highest standards of honesty and transparency in all our interactions and deliverables.',
  },
  {
    title: 'Client Success',
    description:
      "We are dedicated to our clients' growth, building lasting partnerships and delivering measurable results.",
  },
];

export const visionMission = [
  {
    label: 'Vision',
    text: 'To be the leading catalyst for digital transformation in Sri Lanka and beyond, empowering businesses with innovative technology.',
  },
  {
    label: 'Mission',
    text: 'To empower businesses with innovative, scalable, and user-centric technology solutions that drive growth and operational excellence.',
  },
];

export const csrDescription = {
  heading: 'Our CSR Initiatives',
  description:
    'Committed to making a positive impact through our corporate social responsibility projects.',
};

export const testimonials = [
  {
    name: 'Ishan Hewage',
    role: 'Foreign Student  🇬🇧',
    text: 'ICT Option delivered our project on time and exceeded our expectations. Their team is highly skilled and professional.',
  },
  {
    name: 'Gayashan Sandaruwan',
    role: 'Entrepreneur 🇱🇰',
    text: 'The digital marketing campaign brought us more leads than ever before. Highly recommended!',
  },
  {
    name: 'Madhushika Jayasundara',
    role: 'Project coordinator 🇫🇮',
    text: 'Their cloud solutions helped us scale quickly and securely. Great experience working with ICT Option.',
  },
];

export const faqs = [
  {
    question: 'What industries do you serve?',
    answer:
      'We work with clients across finance, healthcare, retail, education, and more.',
  },
  {
    question: 'How do I start a project?',
    answer:
      "Simply contact us through our website or call us. We'll schedule a free consultation to discuss your needs.",
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes, we provide ongoing maintenance and support packages tailored to your business.',
  },
];
