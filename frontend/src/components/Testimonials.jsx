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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-full mb-6">
            <Quote className="w-4 h-4 text-[#14B8A6]" />
            <span className="text-sm text-gray-700">Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Business Owners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what salon and spa owners are saying about buuk
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 border-2 border-gray-200 p-8 hover:border-[#14B8A6] hover:shadow-xl transition-all duration-500 rounded-xl"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-3 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-[#14B8A6] flex items-center justify-center text-white font-bold shadow-md">
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
        <div className="bg-[#14B8A6]/5 border-2 border-[#14B8A6]/20 p-8 lg:p-10 rounded-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-[#14B8A6] mb-2">500+</p>
              <p className="text-gray-600 text-sm">Active Businesses</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-[#14B8A6] mb-2">50K+</p>
              <p className="text-gray-600 text-sm">Monthly Bookings</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-[#14B8A6] mb-2">98%</p>
              <p className="text-gray-600 text-sm">Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-[#14B8A6] mb-2">24/7</p>
              <p className="text-gray-600 text-sm">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;