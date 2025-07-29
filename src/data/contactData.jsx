// src/data/contactData.jsx
// Data for the Contact Us page

export const contactInfo = [
  {
    title: 'Office Address',
    details: [
      'No: 59/E, Horana Road',
      'Kesbewa, Piliyandala',
      'Postcode: 10300',
    ],
    icon: (
      <svg
        className="w-6 h-6 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Phone Number',
    details: ['+94 76 346 5329', '+94 71 115 2255'],
    icon: (
      <svg
        className="w-6 h-6 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: 'Email Address',
    details: ['ictoption321@gmail.com', 'support@ictoptionweb.com'],
    icon: (
      <svg
        className="w-6 h-6 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Business Hours',
    details: [
      'Monday - Friday: 9:00 AM - 6:00 PM',
      'Saturday: 10:00 AM - 2:00 PM',
      'Sunday: Closed',
    ],
    icon: (
      <svg
        className="w-6 h-6 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export const services = [
  'Web Development',
  'Mobile App Development',
  'Cloud Solutions',
  'Digital Marketing',
  'IT Consulting',
  'Cybersecurity',
  'Other',
];

export const socialMediaLinks = [
  {
    href: 'https://www.tiktok.com/@ict_option?_t=ZS-8y7hfMuvgFG&_r=1',
    label: 'TikTok page',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.5 3.5v13.5a3.5 3.5 0 1 1-3.5-3.5h.5V12a2.5 2.5 0 1 0 2.5 2.5V3.5h1zm5.5 0v7.5c0 2.485 2.015 4.5 4.5 4.5v2a6.5 6.5 0 0 1-6.5-6.5V3.5h2z" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/ict_option?igsh=MWM2ZTNweXJoZDh3Yg==&utm_source=ig_contact_invite',
    label: 'Instagram page',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      </svg>
    ),
  },
  {
    href: 'https://www.facebook.com/share/16YqcKMBNp/?mibextid=wwXIfr',
    label: 'Facebook page',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.104C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" />
      </svg>
    ),
  },
];

export const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on scope. Simple websites take 2-4 weeks, while complex web applications may require 3-6 months. We provide detailed timelines during consultation.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer:
      'Yes, we offer comprehensive support packages, including regular updates, security patches, and 24/7 technical support.',
  },
  {
    question: 'What’s your approach to project management?',
    answer:
      'We use agile methodologies with regular check-ins and transparent communication, ensuring you stay informed and can provide feedback throughout development.',
  },
];
