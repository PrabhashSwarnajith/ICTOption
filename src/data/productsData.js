import pos from '../assets/img/pos.webp';
import product from '../assets/img/product.webp';
import power from '../assets/img/power.webp';
import ps from '../assets/team/p1.webp';

export const products = [
  {
    name: 'ICT Option Power Apps',
    subtitle: 'Empowering Businesses Through Intelligent, Low-Code Solutions',
    image: power,
    description:
      'Build, automate, and optimize business processes with our intuitive low-code platform. Enable rapid innovation and empower your teams to create custom solutions with minimal IT involvement.',
    cta: 'Discover More',
    ctaLink: '/contact',
  },
  {
    name: 'ICT Option POS System',
    subtitle: 'The Ultimate Point of Sale & Business Management Solution',
    image: pos,
    description:
      'Streamline sales, inventory, and customer management with our all-in-one POS system. Designed for modern businesses seeking efficiency, reliability, and actionable insights.',
    cta: 'Discover More',
    ctaLink: '/contact',
  },
];

export const pricingPlans = [
  {
    name: 'Premium Plan',
    price: '$199.90',
    frequency: '/month',
    features: [
      'All Features Included',
      'Unlimited Users',
      'Priority Support',
      'Free Upgrades',
      'Advanced Analytics',
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
  },
  {
    name: 'Basic Plan',
    price: '$89.90',
    frequency: '/month',
    features: [
      'Core Features',
      'Up to 5 Users',
      'Email Support',
      'Free Updates',
      'Basic Analytics',
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
  },
];

export const testimonials = [
  {
    quote:
      'The ICT Option POS System revolutionized our retail operations, streamlining sales and inventory with ease.',
    name: 'Alish White',
    title: 'Retail Owner',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote:
      'Power Apps enabled our team to build custom solutions quickly, boosting productivity across departments.',
    name: 'Devin Mueller',
    title: 'IT Manager',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote:
      'The support and expertise from ICT Option have been phenomenal, delivering results beyond our expectations.',
    name: 'Dave Beech',
    title: 'Business Owner',
    image: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
];

export const faqs = [
  {
    question: 'Can I try your products before purchasing?',
    answer: 'Yes! Reach out to schedule a free demo or trial of any product.',
  },
  {
    question: 'What kind of support and training do you offer?',
    answer:
      'We provide comprehensive onboarding, training, and 24/7 support for all our clients.',
  },
  {
    question: 'Are your solutions secure?',
    answer:
      'Our products adhere to enterprise-grade security and compliance standards.',
  },
  {
    question: 'Can I integrate your products with my existing systems?',
    answer:
      'Absolutely, our solutions are built for seamless integration with your current tools.',
  },
];
