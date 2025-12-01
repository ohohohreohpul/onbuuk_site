import React from 'react';
import { UserPlus, Settings, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Create your account in minutes. Add business details and team members.'
  },
  {
    icon: Settings,
    title: 'Customize',
    description: 'Brand your booking page with colors, logo, and custom fields.'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Share your booking link. Accept bookings 24/7 instantly.'
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description: 'Use loyalty, gift cards, and analytics to boost revenue.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-900 px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-gray-900"></div>
            <span className="text-sm font-medium text-gray-900">How It Works</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Started in 4 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From setup to scaling, we've made it incredibly simple
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const bgColor = index % 2 === 0 ? 'bg-[#E5F8F6]' : 'bg-[#FFF9E5]';
            const iconBg = index % 2 === 0 ? 'bg-[#14B8A6]' : 'bg-[#A4D23E]';
            const iconColor = index % 2 === 0 ? 'text-white' : 'text-gray-900';
            const borderColor = index % 2 === 0 ? 'border-[#14B8A6]' : 'border-[#A4D23E]';
            
            return (
              <div key={index} className="relative">
                <div className={`${bgColor} border-2 ${borderColor} p-8 h-full hover:scale-105 transition-transform duration-300`}>
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-900 text-white flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  
                  <div className={`w-14 h-14 ${iconBg} flex items-center justify-center mb-6 mt-4`}>
                    <Icon className={`w-7 h-7 ${iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;