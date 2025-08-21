// src/data/mobileAppDevelopmentData.jsx
import mobile1 from '../assets/img/mobile1.webp';
import mobile2 from '../assets/img/mobile2.webp';
import mobile3 from '../assets/img/mobile3.webp';

export const heroData = {
  title: (
    <span className="text-accent font-heading">
      Mobile <span className="text-secondary">App Development</span>
    </span>
  ),
  subtitle: (
    <span className="text-accent font-heading">
      Build Powerful <span className="text-secondary">Mobile Experiences</span>
    </span>
  ),
  description: (
    <span className="text-neutral-300 font-body">
      From concept to deployment, we deliver seamless, high-performance custom
      mobile apps tailored to your business needs for both iOS and Android
      platforms.
    </span>
  ),
  backgroundImage: mobile3,
  gradient: 'from-primary via-black/80 to-neutral-900',
  className: 'brightness-110',
  mobile1,
  mobile2,
};

export const features = [
  {
    text: 'Native iOS and Android Development',
    icon: '📱',
    desc: 'Custom applications built specifically for iOS and Android, ensuring optimal performance and a true native experience.',
  },
  {
    text: 'Cross-Platform Solutions (React Native & Flutter)',
    icon: '🔄',
    desc: 'Efficient development for multiple platforms using modern frameworks, significantly reducing development time and cost.',
  },
  {
    text: 'Intuitive UI/UX Design',
    icon: '🎨',
    desc: 'Crafting beautiful, user-centric designs that enhance user engagement and provide a seamless experience on every device.',
  },
  {
    text: 'App Store & Google Play Deployment',
    icon: '🚀',
    desc: 'Comprehensive support for launching your application, including submission, optimization, and maximizing visibility in app stores.',
  },
  {
    text: 'Push Notifications & Real-time Features',
    icon: '🔔',
    desc: 'Engage your users with instant updates, timely alerts, and dynamic real-time functionalities.',
  },
  {
    text: 'Offline Functionality & Data Synchronization',
    icon: '🔗',
    desc: 'Building robust offline access and seamless data synchronization for an uninterrupted and reliable user experience, even without an internet connection.',
  },
];

export const technologies = [
  {
    name: 'iOS (Swift)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Swift_logo.svg',
  },
  {
    name: 'Android (Kotlin)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png',
  },
  {
    name: 'React Native',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Flutter',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png',
  },
  {
    name: 'Expo',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Expo_Logo.png',
  },
  {
    name: 'Ionic',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg',
  },
];

export const processSteps = [
  { label: 'Strategy & Planning', value: 90 },
  { label: 'UI/UX Design', value: 92 },
  { label: 'Development & Testing', value: 90 },
  { label: 'Deployment & Support', value: 88 },
];

export const testimonials = [
  {
    quote:
      'They built our app quickly and it works flawlessly. Highly recommended!',
    name: 'Alish White',
    title: 'Entrepreneur',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote: 'Our app launch was smooth and support is excellent. Great team!',
    name: 'Devin Mueller',
    title: 'Business Owner',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote:
      'They helped us design a beautiful, user-friendly app. Will work with them again!',
    name: 'Dave Beech',
    title: 'Manager',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
];

export const faqs = [
  {
    question: 'What platforms do you develop for?',
    answer:
      "We build apps for iOS, Android, and cross-platform using React Native, Flutter, and more, depending on your project's specific needs.",
  },
  {
    question: 'How do I start a mobile app project?',
    answer:
      "Simply contact us for a free consultation. We'll discuss your innovative idea, understand your requirements, and guide you through our comprehensive development process.",
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes, we provide flexible maintenance and support packages tailored to ensure your app remains up-to-date, secure, and performs optimally long after launch.',
  },
];
