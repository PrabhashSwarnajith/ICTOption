import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components';

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
      image: '/api/placeholder/400/250',
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
      image: '/api/placeholder/400/250',
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
      image: '/api/placeholder/400/250',
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
      image: '/api/placeholder/400/250',
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
      image: '/api/placeholder/400/250',
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
      image: '/api/placeholder/400/250',
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
    <div className="min-h-screen">
      {/* Hero Section */}{' '}
      <Hero
        title="ICT Blog"
        subtitle="Insights, Trends & Best Practices"
        description="Stay updated with the latest insights, trends, and best practices in technology and business from our team of experts."
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        gradient="from-slate-900 via-purple-900 to-slate-900"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Subscribe
          </Link>
          <Link
            to="/services"
            className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
          >
            Our Services
          </Link>
        </div>
      </Hero>
      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                          <svg
                            className="w-12 h-12 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                          </svg>
                        </div>
                        <span className="bg-accent text-neutral-dark px-3 py-1 rounded-full text-sm font-semibold">
                          Featured Post
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-accent px-3 py-1 text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-dark mb-4 font-heading">
                      {featuredPost.title}
                    </h2>
                    <p className="text-neutral-dark mb-6 font-body">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-neutral-dark font-body">
                      <div className="flex items-center">
                        <span>By {featuredPost.author}</span>
                        <span className="mx-2">•</span>
                        <span>{featuredPost.date}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <button className="mt-6 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-body">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Category Filter */}
      <section className="py-8 bg-neutral-light">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium font-body transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-neutral-dark hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter(post => !post.featured)
              .map((post, index) => (
                <article
                  key={index}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-dark mb-3 font-heading">
                      {post.title}
                    </h3>
                    <p className="text-neutral-dark mb-4 font-body">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-neutral-dark font-body mb-4">
                      <div className="flex items-center">
                        <span>By {post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <button className="text-primary font-medium hover:text-primary/80 transition-colors font-body">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
      {/* Newsletter Subscription */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-body">
            Subscribe to our newsletter and never miss our latest insights and
            updates.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent font-body"
            />
            <button className="bg-accent text-neutral-dark px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 font-body">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
