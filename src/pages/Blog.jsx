import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt:
        'Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.',
      author: 'Sarah Johnson',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'Web Development',
      image: 'https://placehold.co/400x250/2a2a2a/f0f0f0?text=Web+Dev+2025', // Updated placeholder
      featured: true,
    },
    {
      title: 'Cloud Migration Strategies for Small Businesses',
      excerpt:
        'A comprehensive guide to moving your business to the cloud without breaking the bank.',
      author: 'Michael Chen',
      date: 'December 10, 2024',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: 'https://placehold.co/400x250/2a2a2a/f0f0f0?text=Cloud+Migration', // Updated placeholder
      featured: false,
    },
    {
      title: 'Cybersecurity Best Practices for Remote Teams',
      excerpt:
        'Essential security measures to protect your business in the age of remote work.',
      author: 'Emily Rodriguez',
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: 'https://placehold.co/400x250/2a2a2a/f0f0f0?text=Cybersecurity', // Updated placeholder
      featured: false,
    },
    {
      title: "Building Scalable Mobile Apps: A Developer's Guide",
      excerpt:
        'Learn the key principles and technologies for creating mobile apps that grow with your business.',
      author: 'David Kim',
      date: 'November 28, 2024',
      readTime: '10 min read',
      category: 'Mobile Development',
      image: 'https://placehold.co/400x250/2a2a2a/f0f0f0?text=Mobile+Apps', // Updated placeholder
      featured: false,
    },
    {
      title: 'AI and Machine Learning in Business: Practical Applications',
      excerpt:
        'Discover how AI can transform your business operations and drive competitive advantage.',
      author: 'Sarah Johnson',
      date: 'November 22, 2024',
      readTime: '7 min read',
      category: 'Artificial Intelligence',
      image: 'https://placehold.co/400x250/2a2a2a/f0f0f0?text=AI+ML', // Updated placeholder
      featured: false,
    },
    {
      title: 'The Complete Guide to Digital Transformation',
      excerpt:
        'Step-by-step approach to modernizing your business processes and technology stack.',
      author: 'Michael Chen',
      date: 'November 15, 2024',
      readTime: '12 min read',
      category: 'Digital Transformation',
      image:
        'https://placehold.co/400x250/2a2a2a/f0f0f0?text=Digital+Transform', // Updated placeholder
      featured: false,
    },
  ];

  const categories = [
    'All',
    'Web Development',
    'Cloud Computing',
    'Cybersecurity',
    'Mobile Development',
    'Artificial Intelligence',
    'Digital Transformation',
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent">
            ICT <span className="text-secondary">Blog</span>
          </span>
        }
        subtitle={
          <span className="text-accent">
            Insights, Trends &{' '}
            <span className="text-secondary">Best Practices</span>
          </span>
        }
        description={
          <span className="text-gray-200">
            {' '}
            {/* Changed to gray-200 for consistency */}
            Stay updated with the latest insights, trends, and best practices in
            technology and business from our team of experts.
          </span>
        }
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        gradient="from-primary via-black to-neutral-dark"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 animate-float">
          <Link
            to="/contact"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-glow-md hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Subscribe
          </Link>
          <Link
            to="/services"
            className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 transform-gpu font-body"
          >
            Our Services
          </Link>
        </div>
      </Hero>
      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-neutral-dark relative overflow-hidden">
          {' '}
          {/* Added relative and overflow-hidden */}
          {/* Subtle background pattern: Diagonal Lines */}
          <div
            className="absolute inset-0 z-0 opacity-05"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236B7280' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              transform: 'rotate(-5deg) scale(1.2)',
            }}
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            {' '}
            {/* Added relative z-10 */}
            <motion.div // Added motion.div for animation
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-primary rounded-lg shadow-lg overflow-hidden border border-neutral-700">
                {' '}
                {/* Adjusted border color */}
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="h-64 md:h-full w-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium font-body">
                        {featuredPost.category}
                      </span>
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium ml-2 font-body">
                        {' '}
                        {/* Added background and adjusted margin */}
                        Featured
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-accent mb-4 font-heading">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-300 mb-6 font-body">
                      {' '}
                      {/* Adjusted text color */}
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 font-body">
                      {' '}
                      {/* Adjusted text color */}
                      <div className="flex items-center">
                        <span>By {featuredPost.author}</span>
                        <span className="mx-2">•</span>
                        <span>{featuredPost.date}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Link
                      to="#"
                      className="mt-6 inline-block bg-secondary text-primary px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition-colors font-body"
                    >
                      {' '}
                      {/* Adjusted button style */}
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      {/* Category Filter */}
      <section className="py-8 bg-primary relative overflow-hidden">
        {' '}
        {/* Added relative and overflow-hidden */}
        {/* Subtle background pattern: Small Dots */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='2' fill='%236B7280' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          {' '}
          {/* Added relative z-10 */}
          <motion.div // Added motion.div for animation
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {categories.map(category => (
              <motion.button // Added motion.button for animation
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium font-body transition-colors ${
                  selectedCategory === category
                    ? 'bg-secondary text-primary shadow-md' // Changed text to primary, added shadow
                    : 'bg-neutral-dark text-accent hover:bg-neutral-700' // Adjusted hover color
                }`}
                variants={{
                  // Variants for individual buttons
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Blog Posts Grid */}
      <section className="py-16 bg-neutral-dark relative overflow-hidden">
        {' '}
        {/* Added relative and overflow-hidden */}
        {/* Subtle background pattern: Hex Grid */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234B5563' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0L40 20L20 40L0 20zM20 0L0 20L20 40L40 20L20 0z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(15deg) scale(1.1)',
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          {' '}
          {/* Added relative z-10 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter(post => !post.featured)
              .map((post, index) => (
                <motion.article // Added motion.article for animation
                  key={index}
                  className="bg-primary rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-neutral-700" // Adjusted border color
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium font-body">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-accent mb-3 font-heading">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 font-body">
                      {post.excerpt}
                    </p>{' '}
                    {/* Adjusted text color */}
                    <div className="flex items-center justify-between text-sm text-gray-400 font-body mb-4">
                      {' '}
                      {/* Adjusted text color */}
                      <div className="flex items-center">
                        <span>By {post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to="#"
                      className="text-secondary font-medium hover:text-accent transition-colors font-body"
                    >
                      {' '}
                      {/* Adjusted hover color */}
                      Read More →
                    </Link>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </section>
      {/* Newsletter Subscription */}
      <section className="py-16 bg-primary relative overflow-hidden">
        {' '}
        {/* Added relative and overflow-hidden */}
        {/* Subtle background pattern: Concentric Circles */}
        <div
          className="absolute inset-0 z-0 opacity-05"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='8' stroke='%236B7280' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='10' cy='10' r='3' fill='%236B7280' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            transform: 'rotate(5deg) scale(1.05)',
          }}
        ></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          {' '}
          {/* Added relative z-10 */}
          <h2 className="text-3xl font-bold text-accent mb-4 font-heading">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-body">
            {' '}
            {/* Adjusted text color */}
            Subscribe to our newsletter and never miss our latest insights and
            updates.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            {' '}
            {/* Added flex-col for mobile stacking */}
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-dark text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary font-body" // Adjusted colors
            />
            <button className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300 shadow-md font-body">
              {' '}
              {/* Adjusted button style */}
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
