import React from 'react';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    description: 'Visionary leader with 15+ years in technology innovation.',
    image: '/api/placeholder/300/400',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    description: 'Technology architect specializing in scalable solutions.',
    image: '/api/placeholder/300/400',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    description: 'Creative director focused on user-centered design.',
    image: '/api/placeholder/300/400',
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    description: 'Full-stack developer with expertise in modern frameworks.',
    image: '/api/placeholder/300/400',
  },
];

const values = [
  {
    title: 'Innovation',
    description:
      'We constantly push boundaries to deliver cutting-edge solutions.',
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    description: 'Quality is at the heart of everything we do.',
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and partnership.',
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description:
      'We operate with transparency and honesty in all our dealings.',
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

function AboutUs() {
  return (
    <div className="bg-accent min-h-screen py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary mb-8 font-heading">
          About Us
        </h1>
        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-6 font-heading">
            Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(member => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-32 object-cover rounded-lg mx-auto mb-4 border-4 border-gray-200"
                />
                <h3 className="text-lg font-semibold text-primary mb-1 font-heading">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium mb-2">{member.role}</p>
                <p className="text-gray-700 text-sm font-body">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Values Section */}
        <section>
          <h2 className="text-2xl font-bold text-secondary mb-6 font-heading">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(value => (
              <div
                key={value.title}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-1 font-heading">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-sm font-body">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
