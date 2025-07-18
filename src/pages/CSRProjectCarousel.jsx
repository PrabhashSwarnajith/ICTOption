import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Data for CSR Projects
const csrProjects = [
  {
    image:
      'https://placehold.co/1200x600/1a1a1a/f0f0f0?text=Community+Outreach',
    title: 'Empowering Local Communities',
    description:
      'Providing educational resources and technology access to underserved areas, fostering growth and digital inclusion.',
    buttonText: 'Learn More',
    buttonLink: '/csr/community-outreach',
  },
  {
    image:
      'https://placehold.co/1200x600/1a1a1a/f0f0f0?text=Environmental+Initiatives',
    title: 'Sustainable Environmental Projects',
    description:
      'Supporting reforestation and clean energy initiatives for a greener future and a healthier planet.',
    buttonText: 'View Details',
    buttonLink: '/csr/environmental-initiatives',
  },
  {
    image: 'https://placehold.co/1200x600/1a1a1a/f0f0f0?text=Digital+Literacy',
    title: 'Promoting Digital Literacy',
    description:
      'Hosting workshops and providing tools to enhance digital skills for all ages, bridging the digital divide.',
    buttonText: 'Join Us',
    buttonLink: '/csr/digital-literacy',
  },
  {
    image: 'https://placehold.co/1200x600/1a1a1a/f0f0f0?text=Youth+Development',
    title: 'Investing in Youth Development',
    description:
      'Mentoring programs and scholarships for aspiring young tech professionals, shaping future leaders.',
    buttonText: 'Discover Impact',
    buttonLink: '/csr/youth-development',
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
        {/* Play/View Icon (Re-purposed for 'View Project') */}
        <Link
          to={csrProjects[current].buttonLink} // Link to project details
          className="mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-secondary/20 border-2 border-secondary hover:bg-secondary/40 transition-all duration-300 transform hover:scale-110 shadow-lg focus:outline-none focus:ring-4 focus:ring-secondary/50"
          aria-label="View Project Details"
        >
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
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </Link>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-3 tracking-wide font-heading">
          {csrProjects[current].title}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 font-semibold mb-8 max-w-3xl font-body leading-relaxed">
          {csrProjects[current].description}
        </p>
        <Link
          to={csrProjects[current].buttonLink}
          className="bg-secondary hover:bg-accent text-primary font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-secondary/50 font-body"
        >
          {csrProjects[current].buttonText}
        </Link>
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
