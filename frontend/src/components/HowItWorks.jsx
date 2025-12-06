import React from 'react';
import { Calendar, Palette, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    number: '1',
    title: 'Create your account',
    description: 'Sign up in 2 minutes. Add your business details and team members.'
  },
  {
    icon: Palette,
    number: '2',
    title: 'Customize your booking page',
    description: 'Match your brand with custom colors, logo, and service menu.'
  },
  {
    icon: Zap,
    number: '3',
    title: 'Start accepting bookings',
    description: 'Share your link. Customers book 24/7 with instant confirmations.'
  },
  {
    icon: TrendingUp,
    number: '4',
    title: 'Grow your business',
    description: 'Track analytics, automate reminders, and increase revenue.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 px-3 py-1.5 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-[#14B8A6]"></div>
            <span className="text-sm text-gray-700">How it works</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get started in minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple setup, powerful results. Start accepting bookings today.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -ml-4"></div>
                )}
                
                <div className="relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-[#14B8A6]">
                  {/* Number Badge */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-lg bg-[#14B8A6] text-white flex items-center justify-center font-bold text-sm shadow-md">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => window.location.href = 'https://app.onbuuk.com'}
            className="inline-flex items-center space-x-2 text-[#14B8A6] font-semibold hover:text-[#0d9488] transition-colors"
          >
            <span>Start for free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
