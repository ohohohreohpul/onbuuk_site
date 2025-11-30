import React from 'react';
import { UserPlus, Settings, Calendar, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up & Setup',
    description: 'Create your account in minutes. Add your business details, services, and team members.',
    step: '01'
  },
  {
    icon: Settings,
    title: 'Customize & Brand',
    description: 'Personalize your booking page with your logo, colors, and custom fields to match your brand.',
    step: '02'
  },
  {
    icon: Calendar,
    title: 'Start Booking',
    description: 'Share your booking link with customers. They can book instantly with real-time availability.',
    step: '03'
  },
  {
    icon: TrendingUp,
    title: 'Grow & Scale',
    description: 'Use built-in loyalty programs, gift cards, and analytics to increase revenue and retention.',
    step: '04'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in 4 simple steps and transform your booking experience
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div key={index} className="relative">
                {/* Connector Line - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-teal-200 to-lime-200 -z-10"></div>
                )}
                
                <div className="text-center">
                  {/* Step Number */}
                  <div className="inline-block mb-4">
                    <div className={`relative w-24 h-24 ${isEven ? 'bg-lime-50 border-lime-200' : 'bg-teal-50 border-teal-200'} border-2 rounded-2xl flex items-center justify-center`}>
                      <Icon className={`w-10 h-10 ${isEven ? 'text-lime-600' : 'text-teal-600'}`} />
                      <div className={`absolute -top-3 -right-3 w-10 h-10 ${isEven ? 'bg-lime-600' : 'bg-teal-600'} text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg`}>
                        {step.step}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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