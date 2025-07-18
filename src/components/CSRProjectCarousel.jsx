import React, { useState, useEffect } from 'react';
// Link is no longer needed as buttons are remove
import csr1 from '../assets/csr/csr1.jpeg';

import csr2 from '../assets/csr/csr2.jpeg';

import csr3 from '../assets/csr/csr3.jpeg';

import csr4 from '../assets/csr/csr4.jpeg';

// Data for CSR Projects - Replaced local image imports with placeholder URLs
const csrProjects = [
  {
    image: csr1,
    title: 'Empowering Local Communities',
    description:
      'Providing educational resources and technology access to underserved areas, fostering growth and digital inclusion.',
    // buttonText and buttonLink removed
  },
  {
    image: csr2,
    title: 'Sustainable Environmental Projects',
    description:
      'Supporting reforestation and clean energy initiatives for a greener future and a healthier planet.',
    // buttonText and buttonLink removed
  },
  {
    image: csr3,
    title: 'Promoting Digital Literacy',
    description:
      'Hosting workshops and providing tools to enhance digital skills for all ages, bridging the digital divide.',
    // buttonText and buttonLink removed
  },
  {
    image: csr4,
    title: 'Investing in Youth Development',
    description:
      'Mentoring programs and scholarships for aspiring young tech professionals, shaping future leaders.',
    // buttonText and buttonLink removed
  },
];

function CSRProjectCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-advance the carousel
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(prev => (prev + 1) % csrProjects.length);
    }, 4500); // Increased timeout for better readability
    return () => clearTimeout(timer);
  }, [current]);

  // Handle manual navigation to previous slide
  const goToPrev = () => {
    setCurrent(prev => (prev - 1 + csrProjects.length) % csrProjects.length);
  };

  // Handle manual navigation to next slide
  const goToNext = () => {
    setCurrent(prev => (prev + 1) % csrProjects.length);
  };

  return (
    <div className="relative w-full h-[380px] md:h-[480px] lg:h-[580px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Background Image with transition */}
      <img
        src={csrProjects[current].image}
        alt={`CSR Project ${current + 1}`}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out z-0" // Smoother transition
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-900/70 z-10" />{' '}
      {/* Darker, more thematic overlay */}
      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full text-accent hover:bg-white/20 transition-all duration-300 z-30 focus:outline-none focus:ring-2 focus:ring-secondary"
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
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full text-accent hover:bg-white/20 transition-all duration-300 z-30 focus:outline-none focus:ring-2 focus:ring-secondary"
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
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4 md:px-8">
        {/* Removed Play/View Icon Link */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-3 tracking-wide font-heading">
          {csrProjects[current].title}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 font-semibold mb-8 max-w-3xl font-body leading-relaxed">
          {csrProjects[current].description}
        </p>
        {/* Removed CTA Button Link */}
      </div>
      {/* Carousel Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {csrProjects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-secondary scale-125' : 'bg-white/40'} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CSRProjectCarousel;
