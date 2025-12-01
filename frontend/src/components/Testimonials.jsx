import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "buuk has completely transformed how we manage our salon. Online booking increased our appointments by 40% in just 2 months!",
    author: "Sarah Martinez",
    role: "Owner, Luxe Beauty Salon",
    rating: 5
  },
  {
    text: "The gift card and loyalty features are game-changers. Our customer retention has never been better.",
    author: "Michael Chen",
    role: "Manager, Serenity Spa",
    rating: 5
  },
  {
    text: "Setup was incredibly simple. We were accepting bookings within 30 minutes. The customer portal is fantastic!",
    author: "Emily Rodriguez",
    role: "Founder, Glow Wellness",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#F8FFFE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#FFF9E5] border border-[#A4D23E] px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-[#A4D23E]"></div>
            <span className="text-sm font-medium text-gray-900">Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Business Owners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what salon and spa owners are saying about buuk
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-gray-200 p-8 hover:border-[#14B8A6] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-3 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 bg-[#14B8A6] flex items-center justify-center text-white font-bold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white border-2 border-gray-900 p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-gray-900 mb-2">500+</p>
              <p className="text-gray-600">Active Businesses</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900 mb-2">50K+</p>
              <p className="text-gray-600">Monthly Bookings</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900 mb-2">98%</p>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900 mb-2">24/7</p>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;