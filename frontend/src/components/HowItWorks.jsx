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
    <section id="how-it-works" className="relative py-32 bg-[#003E37] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1758556549027-879615701c61" 
          alt="Modern salon reception"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#003E37]/92 via-[#003E37]/88 to-[#003E37]/92"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 glass-dark border border-white/20 px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#14B8A6]"></div>
            <span className="text-sm font-medium text-white">How It Works</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get Started in{' '}
            <span className="text-gradient">4 Simple Steps</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-400 max-w-3xl mx-auto">
            From setup to scaling, we've made it incredibly simple
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const iconBg = index % 2 === 0 ? 'bg-gradient-to-br from-[#14B8A6] to-[#0d9488]' : 'bg-gradient-to-br from-[#A4D23E] to-[#8BC234]';
            const iconColor = index % 2 === 0 ? 'text-white' : 'text-gray-900';
            const borderColor = index % 2 === 0 ? 'border-[#14B8A6]/30' : 'border-[#A4D23E]/30';
            
            return (
              <div key={index} className="relative group animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`glass-strong border ${borderColor} p-8 h-full hover-scale hover:border-${index % 2 === 0 ? '[#14B8A6]' : '[#A4D23E]'} transition-all duration-500`}>
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-lg bg-gray-900 border border-white/20 text-white flex items-center justify-center font-bold text-xl shadow-xl">
                    {index + 1}
                  </div>
                  
                  <div className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center mb-6 mt-4 shadow-lg`}>
                    <Icon className={`w-7 h-7 ${iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
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