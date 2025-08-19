import React, { useState, useEffect } from 'react';

import csr1 from '../../assets/csr/csr1.webp';
import csr2 from '../../assets/csr/csr2.webp';
import csr3 from '../../assets/csr/csr3.webp';
import csr4 from '../../assets/csr/csr4.webp';

// Data for CSR Projects
const csrProjects = [
  {
    image: csr1,
    title: 'Empowering Local Communities',
    description:
      'Providing educational resources and technology access to underserved areas, fostering growth and digital inclusion.',
  },
  {
    image: csr2,
    title: 'Sustainable Environmental Projects',
    description:
      'Supporting reforestation and clean energy initiatives for a greener future and a healthier planet.',
  },
  {
    image: csr3,
    title: 'Promoting Digital Literacy',
    description:
      'Hosting workshops and providing tools to enhance digital skills for all ages, bridging the digital divide.',
  },
  {
    image: csr4,
    title: 'Investing in Youth Development',
    description:
      'Mentoring programs and scholarships for aspiring young tech professionals, shaping future leaders.',
  },
];

function CSRProjectCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-advance the carousel
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(prev => (prev + 1) % csrProjects.length);
    }, 5000); // Increased timeout for a slightly slower auto-advance, better readability
    return () => clearTimeout(timer);
  }, [current, csrProjects.length]); // Added csrProjects.length to dependency array for completeness

  // Handle manual navigation to previous slide
  const goToPrev = () => {
    setCurrent(prev => (prev - 1 + csrProjects.length) % csrProjects.length);
  };

  // Handle manual navigation to next slide
  const goToNext = () => {
    setCurrent(prev => (prev + 1) % csrProjects.length);
  };

  return (
    <div className="relative w-full h-[380px] md:h-[480px] lg:h-[580px] overflow-hidden rounded-2xl shadow-2xl group">
      {' '}
      {/* Added 'group' class for hover effects */}
      {/* Background Image with transition */}
      <img
        src={csrProjects[current].image}
        alt={`CSR Project ${current + 1}`}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out z-0 transform group-hover:scale-105" // Added transform and group-hover:scale-105 for subtle zoom on hover
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-900/70 z-10" />{' '}
      {/* Darker, more thematic overlay, kept as it's effective */}
      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-neutral-700/50 p-3 rounded-full text-accent opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 z-30 focus:outline-none focus:ring-2 focus:ring-secondary hover:bg-neutral-600/70" // Changed bg-white/10 to bg-neutral-700/50, added opacity/translate for hover reveal, improved hover bg
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-neutral-700/50 p-3 rounded-full text-accent opacity-0 group-hover:opacity-100 translate-x-[10px] group-hover:translate-x-0 transition-all duration-300 z-30 focus:outline-none focus:ring-2 focus:ring-secondary hover:bg-neutral-600/70" // Changed bg-white/10 to bg-neutral-700/50, added opacity/translate for hover reveal, improved hover bg
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-6 md:px-12">
        {' '}
        {/* Increased horizontal padding for content */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-3 tracking-wide font-heading">
          {csrProjects[current].title}
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 font-semibold mb-8 max-w-3xl font-body leading-relaxed">
          {' '}
          {/* Changed text-gray-300 to text-neutral-300 */}
          {csrProjects[current].description}
        </p>
      </div>
      {/* Carousel Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {csrProjects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-secondary scale-125 shadow-md' : 'bg-neutral-500/60'} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary hover:bg-secondary-light`} // Changed bg-white/40 to bg-neutral-500/60, added shadow-md to active dot, adjusted hover effect
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CSRProjectCarousel;
