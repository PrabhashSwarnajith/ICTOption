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
    <div className="min-h-screen bg-primary font-body">
      {' '}
      {/* Ensured font-body is applied globally */}
      {/* Hero Section */}
      <Hero
        title={
          <span className="text-accent font-heading">
            {' '}
            {/* Added font-heading */}
            ICT <span className="text-secondary">Blog</span>
          </span>
        }
        subtitle={
          <span className="text-accent font-heading">
            {' '}
            {/* Added font-heading */}
            Insights, Trends &{' '}
            <span className="text-secondary">Best Practices</span>
          </span>
        }
        description={
          <span className="text-neutral-300 font-body">
            {' '}
            {/* Changed text-gray-200 to text-neutral-300 */}
            Stay updated with the latest insights, trends, and best practices in
            technology and business from our team of experts.
          </span>
        }
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        gradient="from-primary via-neutral-900 to-secondary" // Changed via-black to via-neutral-900, to-neutral-dark to to-secondary
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
          {' '}
          {/* Removed animate-float */}
          <Link
            to="/contact"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-secondary-light hover:scale-105 transition-all duration-300 transform-gpu font-body" // Replaced shadow-glow-md with shadow-lg, adjusted hover colors
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
        <section className="py-20 bg-neutral-900 relative overflow-hidden">
          {' '}
          {/* Changed py-16 to py-20, bg-neutral-dark to bg-neutral-900 */}
          {/* Subtle background pattern: Diagonal Lines */}
          <div
            className="absolute inset-0 z-0 opacity-10" // Changed opacity-05 to opacity-10
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20V40zm20 0L40 20V0H20L0 20h20z'/%3E%3C/g%3E%3C/svg%3E")`, // Changed fill to neutral-700 (%23374151)
              backgroundRepeat: 'repeat',
              transform: 'rotate(-5deg) scale(1.2)',
            }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {' '}
            {/* Standardized container */}
            <motion.div // Added motion.div for animation
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-neutral-800 rounded-2xl shadow-xl overflow-hidden border border-neutral-700">
                {' '}
                {/* Changed bg-primary to bg-neutral-800, shadow-lg to shadow-xl, rounded-lg to rounded-2xl */}
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
                      <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium font-body">
                        {' '}
                        {/* Adjusted opacity of background */}
                        {featuredPost.category}
                      </span>
                      <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium ml-2 font-body">
                        {' '}
                        {/* Adjusted opacity of background */}
                        Featured
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-accent mb-4 font-heading">
                      {featuredPost.title}
                    </h2>
                    <p className="text-neutral-300 mb-6 font-body">
                      {' '}
                      {/* Changed text-gray-300 to text-neutral-300 */}
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-neutral-400 font-body">
                      {' '}
                      {/* Changed text-gray-400 to text-neutral-400 */}
                      <div className="flex items-center">
                        <span>By {featuredPost.author}</span>
                        <span className="mx-2">•</span>
                        <span>{featuredPost.date}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Link
                      to="#"
                      className="mt-6 inline-block bg-secondary text-primary px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-secondary-light hover:text-primary transition-colors font-body" // Adjusted button style, shadow, and hover
                    >
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
      <section className="py-12 bg-primary relative overflow-hidden">
        {' '}
        {/* Changed py-8 to py-12 for more vertical space */}
        {/* Subtle background pattern: Small Dots */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Changed opacity-05 to opacity-10
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='2' fill='%23374151' fill-opacity='0.1'/%3E%3C/circle%3E%3C/svg%3E")`, // Changed fill to neutral-700 (%23374151)
            backgroundRepeat: 'repeat',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Standardized container */}
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
                    ? 'bg-secondary text-primary shadow-lg' // Changed text to primary, shadow to shadow-lg
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-secondary border border-neutral-700' // Adjusted colors, added border and refined hover
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
      <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {' '}
        {/* Changed py-16 to py-20, bg-neutral-dark to bg-neutral-900 */}
        {/* Subtle background pattern: Hex Grid */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Changed opacity-05 to opacity-10
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0L40 20L20 40L0 20zM20 0L0 20L20 40L40 20L20 0z'/%3E%3C/g%3E%3C/svg%3E")`, // Changed fill to neutral-700 (%23374151)
            backgroundRepeat: 'repeat',
            transform: 'rotate(15deg) scale(1.1)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {' '}
          {/* Standardized container */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter(post => !post.featured)
              .map((post, index) => (
                <motion.article // Added motion.article for animation
                  key={index}
                  className="bg-neutral-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-700" // Changed bg-primary to bg-neutral-800, shadow-sm to shadow-xl, hover:shadow-md to hover:shadow-2xl, rounded-lg to rounded-2xl
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
                      <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium font-body">
                        {' '}
                        {/* Adjusted opacity of background */}
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-accent mb-3 font-heading">
                      {post.title}
                    </h3>
                    <p className="text-neutral-300 mb-4 font-body">
                      {' '}
                      {/* Changed text-gray-300 to text-neutral-300 */}
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-neutral-400 font-body mb-4">
                      {' '}
                      {/* Changed text-gray-400 to text-neutral-400 */}
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
                      Read More →
                    </Link>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </section>
      {/* Newsletter Subscription */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {' '}
        {/* Changed py-16 to py-20 */}
        {/* Subtle background pattern: Concentric Circles */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Changed opacity-05 to opacity-10
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='8' stroke='%23374151' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='10' cy='10' r='3' fill='%23374151' fill-opacity='0.1'/%3E%3C/svg%3E")`, // Changed stroke and fill to neutral-700 (%23374151)
            backgroundRepeat: 'repeat',
            transform: 'rotate(5deg) scale(1.05)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {' '}
          {/* Standardized container */}
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4 font-heading uppercase tracking-wide">
            {' '}
            {/* Adjusted font size, added uppercase and tracking */}
            Stay Updated
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>{' '}
          {/* Added separator */}
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto font-body">
            {' '}
            {/* Changed text-xl to text-lg, text-gray-300 to text-neutral-300 */}
            Subscribe to our newsletter and never miss our latest insights and
            updates.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary font-body" // Adjusted colors (bg-neutral-dark to bg-neutral-800, text-white to text-neutral-100, placeholder-gray-400 to placeholder-neutral-400)
            />
            <button className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-secondary-light hover:text-primary transition-all duration-300 font-body">
              {' '}
              {/* Adjusted button style, shadow, and hover */}
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
