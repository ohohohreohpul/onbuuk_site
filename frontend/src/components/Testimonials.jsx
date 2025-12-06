import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "buuk has completely transformed how we manage our salon. Online booking increased our appointments by 40% in just 2 months!",
    author: "Sarah Martinez",
    role: "Owner, Luxe Beauty Salon",
    rating: 5,
    image: "https://images.unsplash.com/photo-1675034741696-fa9551c31bb4"
  },
  {
    text: "The gift card and loyalty features are game-changers. Our customer retention has never been better.",
    author: "Michael Chen",
    role: "Manager, Serenity Spa",
    rating: 5,
    image: "https://images.unsplash.com/photo-1675034741621-79a7d07c1369"
  },
  {
    text: "Setup was incredibly simple. We were accepting bookings within 30 minutes. The customer portal is fantastic!",
    author: "Emily Rodriguez",
    role: "Founder, Glow Wellness",
    rating: 5,
    image: "https://images.unsplash.com/photo-1675034741473-afed58a142e8"
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 glass-teal px-4 py-2 mb-6">
            <Quote className="w-4 h-4 text-[#14B8A6]" />
            <span className="text-sm font-medium text-white">Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by{' '}
            <span className="text-gradient">Business Owners</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-400 max-w-3xl mx-auto">
            See what salon and spa owners are saying about buuk
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-strong border border-white/10 p-8 hover-scale hover:border-[#14B8A6]/50 transition-all duration-500 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-3 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#14B8A6] to-[#0d9488] flex items-center justify-center text-white font-bold shadow-lg">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="glass-strong border border-white/10 p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-gradient mb-2">500+</p>
              <p className="text-gray-400 text-sm">Active Businesses</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-gradient mb-2">50K+</p>
              <p className="text-gray-400 text-sm">Monthly Bookings</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-gradient mb-2">98%</p>
              <p className="text-gray-400 text-sm">Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-gradient mb-2">24/7</p>
              <p className="text-gray-400 text-sm">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;