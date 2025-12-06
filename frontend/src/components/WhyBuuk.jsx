import React from 'react';
import { Check, Star } from 'lucide-react';

const benefits = [
  'Reduce no-shows with automated reminders',
  'Increase revenue with gift cards & loyalty programs',
  'Save time with automated booking management',
  'Improve customer satisfaction with self-service portal',
  'Get paid faster with integrated Stripe payments',
  'Manage multiple locations from one dashboard',
  'Customize everything to match your brand',
  'Access detailed analytics and reporting'
];

const stats = [
  { value: '500+', label: 'Active Businesses' },
  { value: '50K+', label: 'Bookings Monthly' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '24/7', label: 'Support Available' }
];

const WhyBuuk = () => {
  return (
    <section id="why-buuk" className="py-24 px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 px-3 py-1.5 rounded-full mb-6">
              <Star className="w-4 h-4 text-[#A4D23E]" />
              <span className="text-sm text-gray-700">Why Choose buuk</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Built for Modern Service Businesses
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              buuk is more than just a booking system. It's a complete business management platform designed to help salons, spas, and service businesses grow and thrive in the digital age.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#14B8A6] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="relative">
            <div className="bg-[#14B8A6] rounded-xl p-8 md:p-12 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Trusted by Businesses Worldwide
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white/80 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/90 italic mb-4">
                  "buuk has completely transformed how we manage our salon bookings. Our customers love the easy online booking, and we've seen a 40% increase in appointments!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sarah Martinez</div>
                    <div className="text-white/70 text-sm">Owner, Luxe Beauty Salon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuuk;