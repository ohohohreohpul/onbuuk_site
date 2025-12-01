import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const blogPosts = [
  {
    id: 1,
    slug: 'how-to-reduce-no-shows-in-your-salon-by-80-percent',
    title: 'How to Reduce No-Shows in Your Salon by 80%',
    excerpt: 'Discover proven strategies to minimize appointment cancellations and maximize your revenue with automated reminders and booking policies.',
    category: 'Best Practices',
    author: 'Sarah Johnson',
    date: 'Nov 28, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop&auto=format',
    featured: true
  },
  {
    id: 2,
    slug: 'complete-guide-to-gift-cards-for-salons-and-spas',
    title: 'Complete Guide to Gift Cards for Salons & Spas',
    excerpt: 'Learn how to implement and market gift cards effectively to boost revenue during holidays and special occasions.',
    category: 'Revenue Growth',
    author: 'Michael Chen',
    date: 'Nov 25, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop&auto=format',
    featured: false
  },
  {
    id: 3,
    slug: 'building-customer-loyalty-the-ultimate-program-guide',
    title: 'Building Customer Loyalty: The Ultimate Program Guide',
    excerpt: 'Create a loyalty program that keeps customers coming back. Real examples from successful salons and spas.',
    category: 'Customer Retention',
    author: 'Emily Rodriguez',
    date: 'Nov 22, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&auto=format',
    featured: false
  },
  {
    id: 4,
    slug: '10-ways-to-optimize-your-online-booking-system',
    title: '10 Ways to Optimize Your Online Booking System',
    excerpt: 'Make booking effortless for your customers with these optimization tips that increase conversion rates.',
    category: 'Best Practices',
    author: 'David Park',
    date: 'Nov 20, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop&auto=format',
    featured: false
  },
  {
    id: 5,
    slug: 'sms-vs-email-which-booking-reminder-works-best',
    title: 'SMS vs Email: Which Booking Reminder Works Best?',
    excerpt: 'Data-driven analysis comparing SMS and email reminder effectiveness for appointment confirmations.',
    category: 'Marketing',
    author: 'Lisa Thompson',
    date: 'Nov 18, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&auto=format',
    featured: false
  },
  {
    id: 6,
    slug: 'multi-location-management-best-practices-for-chains',
    title: 'Multi-Location Management: Best Practices for Chains',
    excerpt: 'Scale your salon or spa business across multiple locations with centralized management strategies.',
    category: 'Business Growth',
    author: 'James Wilson',
    date: 'Nov 15, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&h=600&fit=crop&auto=format',
    featured: false
  }
];

const categories = ['All', 'Best Practices', 'Revenue Growth', 'Customer Retention', 'Marketing', 'Business Growth'];

const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#F8FFFE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-[#E5F8F6] border border-[#14B8A6] px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#14B8A6]"></div>
              <span className="text-sm font-medium text-gray-900">Blog</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Insights & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tips, guides, and strategies to grow your salon or spa business
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#14B8A6] text-white border-2 border-[#14B8A6]'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#14B8A6]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === 'All' && featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div 
              onClick={() => navigate(`/blog/${featuredPost.slug}`)}
              className="bg-[#F8FFFE] border-2 border-gray-200 overflow-hidden hover:border-[#14B8A6] transition-all duration-300 cursor-pointer group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="h-64 lg:h-auto bg-gray-200 relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#14B8A6] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-[#A4D23E] text-gray-900 px-4 py-1 text-sm font-bold">
                    FEATURED
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm font-medium text-[#14B8A6] border border-[#14B8A6] px-3 py-1">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#14B8A6] transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#14B8A6] flex items-center justify-center text-white font-bold">
                        {featuredPost.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                      </div>
                    </div>
                    
                    <Button className="bg-[#14B8A6] hover:bg-[#0d9488] text-white group">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article 
                key={post.id}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="bg-white border-2 border-gray-200 hover:border-[#14B8A6] transition-all duration-300 cursor-pointer group"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#14B8A6] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-xs font-medium text-[#14B8A6] border border-[#14B8A6] px-2 py-1">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#14B8A6] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-[#14B8A6] flex items-center justify-center text-white text-xs font-bold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    
                    <ArrowRight className="w-5 h-5 text-[#14B8A6] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Start your 14-day free trial and see how buuk can help you grow
          </p>
          <Button size="lg" className="bg-[#14B8A6] hover:bg-[#0d9488] text-white font-medium px-8 h-14 text-base">
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;