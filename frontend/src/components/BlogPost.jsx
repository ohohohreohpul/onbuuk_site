import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Tag } from 'lucide-react';
import { Button } from './ui/button';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const mockPosts = [
  {
    id: 1,
    slug: 'how-to-reduce-no-shows-in-your-salon-by-80-percent',
    title: 'How to Reduce No-Shows in Your Salon by 80%',
    excerpt: 'Discover proven strategies to minimize appointment cancellations and maximize your revenue with automated reminders and booking policies.',
    category: 'Best Practices',
    author: 'Sarah Johnson',
    date: 'Nov 28, 2024',
    readTime: '5 min read',
    content: `
      <p>No-shows are one of the biggest challenges facing salon and spa businesses today. On average, salons lose 15-20% of their revenue due to missed appointments. But it doesn't have to be this way.</p>

      <h2>The Real Cost of No-Shows</h2>
      <p>When a customer doesn't show up for their appointment, you're not just losing that booking's revenue. You're also losing the opportunity to serve another customer who could have taken that slot. For a typical salon with average appointment values of €50, even 2-3 no-shows per week can mean over €10,000 in lost annual revenue.</p>

      <h2>Strategy 1: Automated Reminder System</h2>
      <p>The most effective way to reduce no-shows is through automated reminders. Studies show that sending reminders can reduce no-shows by up to 38%. Here's what works best:</p>
      <ul>
        <li><strong>24-hour SMS reminder</strong> - Sent the day before the appointment</li>
        <li><strong>2-hour email reminder</strong> - Sent on the day of the appointment</li>
        <li><strong>Confirmation requests</strong> - Ask customers to confirm their attendance</li>
      </ul>

      <h2>Strategy 2: Clear Cancellation Policy</h2>
      <p>Having a clear cancellation policy sets expectations. Consider implementing:</p>
      <ul>
        <li>24-hour minimum cancellation notice</li>
        <li>Cancellation fees for late cancellations</li>
        <li>Credit card on file for guaranteed bookings</li>
      </ul>

      <h2>Strategy 3: Deposit or Prepayment</h2>
      <p>Requiring a deposit for appointments significantly reduces no-shows. You can:</p>
      <ul>
        <li>Charge a 50% deposit for bookings</li>
        <li>Require full prepayment for new customers</li>
        <li>Offer deposit-free bookings for loyal customers</li>
      </ul>

      <h2>Strategy 4: Waitlist Management</h2>
      <p>Maintain a waitlist for popular time slots. When someone cancels, you can immediately fill the gap from your waitlist, minimizing revenue loss.</p>

      <h2>Strategy 5: Customer Relationship Building</h2>
      <p>Customers who feel valued are less likely to no-show. Build relationships by:</p>
      <ul>
        <li>Personalizing communications</li>
        <li>Following up after appointments</li>
        <li>Offering loyalty rewards</li>
        <li>Making rebooking easy</li>
      </ul>

      <h2>Implementation with buuk</h2>
      <p>With buuk's booking management platform, all these strategies are built-in and automated. Our automated reminder system sends SMS and email notifications, tracks customer booking history, and manages cancellation policies automatically.</p>

      <h2>Results You Can Expect</h2>
      <p>Salons using these combined strategies typically see:</p>
      <ul>
        <li>60-80% reduction in no-shows</li>
        <li>20-30% increase in revenue</li>
        <li>Higher customer satisfaction</li>
        <li>Better schedule optimization</li>
      </ul>

      <h2>Conclusion</h2>
      <p>No-shows don't have to drain your salon's profitability. By implementing these proven strategies, you can significantly reduce missed appointments and maximize your revenue. Start with automated reminders and build from there - your bottom line will thank you.</p>
    `,
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
    content: `
      <p>Gift cards are one of the most powerful revenue drivers for salon and spa businesses. They bring in immediate cash flow, attract new customers, and often lead to upselling opportunities.</p>

      <h2>Why Gift Cards Matter</h2>
      <p>The gift card industry is worth over €160 billion globally, and beauty services are among the top 5 most gifted categories. Here's why gift cards should be a core part of your business strategy:</p>
      <ul>
        <li><strong>Immediate Revenue</strong> - Cash in hand before services are rendered</li>
        <li><strong>New Customer Acquisition</strong> - Gift recipients become potential regulars</li>
        <li><strong>Higher Spending</strong> - Customers typically spend 20% more than card value</li>
        <li><strong>Seasonal Boost</strong> - Peak sales during holidays and special occasions</li>
      </ul>

      <h2>Types of Gift Cards to Offer</h2>
      <h3>1. Monetary Value Cards</h3>
      <p>Simple and flexible - customers can use them for any service or product. Offer preset amounts like €25, €50, €100, or allow custom amounts.</p>

      <h3>2. Service-Specific Cards</h3>
      <p>Cards for specific treatments like "Deluxe Spa Package" or "Hair Transformation". These are great for marketing specific services and can command premium pricing.</p>

      <h3>3. Package Cards</h3>
      <p>Bundle multiple services together at a discounted rate. For example, "3 Massages for €180" (normally €210).</p>

      <h2>Setting Up Your Gift Card Program</h2>
      <h3>Pricing Strategy</h3>
      <ul>
        <li>Offer multiple price points (€25, €50, €75, €100, €150)</li>
        <li>Create premium packages for special occasions</li>
        <li>Consider volume discounts (buy 5 get 10% off)</li>
      </ul>

      <h3>Terms and Conditions</h3>
      <p>Be clear about:</p>
      <ul>
        <li>Expiration dates (check local laws)</li>
        <li>Transferability</li>
        <li>Refund policy</li>
        <li>Combining with other offers</li>
      </ul>

      <h2>Marketing Your Gift Cards</h2>
      <h3>Holiday Campaigns</h3>
      <ul>
        <li>Mother's Day - Your biggest opportunity</li>
        <li>Christmas - Start promoting in November</li>
        <li>Valentine's Day - Couples packages work great</li>
        <li>Father's Day - Don't forget the guys</li>
      </ul>

      <h3>Promotional Tactics</h3>
      <ul>
        <li><strong>Bonus Cards</strong> - "Buy €100, get €20 free"</li>
        <li><strong>Last-Minute Digital</strong> - Email delivery for procrastinators</li>
        <li><strong>Corporate Sales</strong> - Bulk discounts for businesses</li>
        <li><strong>Social Media</strong> - Instagram-worthy gift card designs</li>
      </ul>

      <h2>Digital vs Physical Gift Cards</h2>
      <h3>Digital Gift Cards</h3>
      <p><strong>Pros:</strong> Instant delivery, no printing costs, eco-friendly, trackable</p>
      <p><strong>Cons:</strong> Less personal, can feel less premium</p>

      <h3>Physical Gift Cards</h3>
      <p><strong>Pros:</strong> Tangible gift experience, better for in-store promotion, premium feel</p>
      <p><strong>Cons:</strong> Printing costs, inventory management, can be lost</p>

      <p><strong>Best Approach:</strong> Offer both! Let customers choose based on their needs.</p>

      <h2>Managing Gift Cards with buuk</h2>
      <p>buuk makes gift card management effortless with:</p>
      <ul>
        <li>Digital and physical card support</li>
        <li>Automated balance tracking</li>
        <li>Purchase and redemption reporting</li>
        <li>Custom branding options</li>
        <li>Email delivery for digital cards</li>
        <li>Integration with POS system</li>
      </ul>

      <h2>Maximizing Gift Card Revenue</h2>
      <h3>Breakage Revenue</h3>
      <p>15-20% of gift cards are never fully redeemed. While you shouldn't rely on this, it's a nice bonus to your bottom line.</p>

      <h3>Upselling Opportunities</h3>
      <p>When gift card holders come in, they typically spend beyond their card value. Train your team to suggest add-ons and upgrades.</p>

      <h3>Acquisition Strategy</h3>
      <p>Gift card recipients are high-value prospects. Capture their contact info and add them to your marketing list.</p>

      <h2>Conclusion</h2>
      <p>A well-executed gift card program can add 10-20% to your annual revenue. Start with digital cards to test the waters, promote heavily during key holidays, and use the data to refine your strategy. With buuk's built-in gift card management, you have everything you need to succeed.</p>
    `,
    featured: false
  },
  // Add more blog posts with full content here...
];

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`${API}/blog/${slug}`);
      setPost(response.data);
    } catch (error) {
      console.error('Failed to fetch post:', error);
      // Fallback to mock data
      const mockPost = mockPosts.find(p => p.slug === slug);
      setPost(mockPost);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-32">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#14B8A6] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/blog')} className="bg-[#14B8A6] hover:bg-[#0d9488] text-white">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#F8FFFE]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/blog')}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#14B8A6] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Blog</span>
          </button>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-sm font-medium text-[#14B8A6] border border-[#14B8A6] px-3 py-1">
              {post.category}
            </span>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center justify-between pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#14B8A6] flex items-center justify-center text-white font-bold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-bold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-600">Author</p>
              </div>
            </div>
            
            <Button variant="outline" className="border-2 border-gray-300 hover:border-[#14B8A6] text-gray-900 hover:text-[#14B8A6] bg-white">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-[#14B8A6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your 14-day free trial and see how buuk can help
          </p>
          <Button 
            size="lg" 
            onClick={() => window.location.href = 'https://app.onbuuk.com'}
            className="bg-white text-[#14B8A6] hover:bg-gray-100 font-medium px-8 h-14 text-base"
          >
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((relatedPost) => (
              <div 
                key={relatedPost.id}
                onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                className="bg-white border-2 border-gray-200 hover:border-[#14B8A6] transition-all duration-300 cursor-pointer group"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <span className="text-xs font-medium text-[#14B8A6] border border-[#14B8A6] px-2 py-1">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-[#14B8A6] transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;