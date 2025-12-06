import React from 'react';
import { Calendar, Users, TrendingUp, Zap } from 'lucide-react';

const SplitImageSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Image Side */}
          <div className="relative animate-slide-in">
            <div className="aspect-[4/3] overflow-hidden border-2 border-gray-900 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop&auto=format" 
                alt="Salon Management" 
                className="w-full h-full object-cover"
              />
              {/* Glass Overlay Card */}
              <div className="absolute bottom-6 right-6 glass-strong border-2 border-gray-900 p-6 max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-[#14B8A6] flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">+156%</div>
                    <div className="text-sm text-gray-600">Revenue Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-[#E5F8F6] border border-[#14B8A6] px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#14B8A6]"></div>
              <span className="text-sm font-medium text-gray-900">Smart Analytics</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Data-Driven Growth
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Make informed decisions with real-time analytics. Track bookings, revenue, customer behavior, and staff performance - all in one dashboard.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Calendar, title: 'Booking Trends', desc: 'Peak hours analysis' },
                { icon: Users, title: 'Customer Insights', desc: 'Retention metrics' },
                { icon: TrendingUp, title: 'Revenue Reports', desc: 'Real-time tracking' },
                { icon: Zap, title: 'Performance', desc: 'Staff productivity' }
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="glass border border-gray-200 p-4 hover:border-[#14B8A6] transition-all">
                    <Icon className="w-8 h-8 text-[#14B8A6] mb-3" />
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Reverse Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side First on Desktop */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-[#FFF9E5] border border-[#A4D23E] px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#A4D23E]"></div>
              <span className="text-sm font-medium text-gray-900">Customer Experience</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Delight Every Customer
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From booking to checkout, create memorable experiences that keep customers coming back. Build loyalty with personalized service and rewards.
            </p>

            <div className="space-y-4">
              {[
                'Personalized customer profiles',
                'Automated loyalty rewards',
                'Gift card management',
                'SMS & email campaigns'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#A4D23E] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative animate-slide-in order-1 lg:order-2">
            <div className="aspect-[4/3] overflow-hidden border-2 border-gray-900 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&auto=format" 
                alt="Customer Experience" 
                className="w-full h-full object-cover"
              />
              {/* Glass Overlay Card */}
              <div className="absolute top-6 left-6 glass-strong border-2 border-gray-900 p-6 max-w-xs">
                <div className="text-sm text-gray-600 mb-2">Customer Satisfaction</div>
                <div className="text-4xl font-bold text-gray-900 mb-3">98%</div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitImageSection;