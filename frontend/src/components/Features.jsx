import React from 'react';
import { Calendar, Gift, Users, CreditCard, Palette, Zap } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Smart Booking System',
    description: 'Real-time availability, multi-step booking flow, and automated confirmations. Your customers book seamlessly, anytime.',
    color: 'teal'
  },
  {
    icon: Gift,
    title: 'Gift Cards & Loyalty',
    description: 'Built-in gift card management and customizable loyalty programs to boost customer retention and increase revenue.',
    color: 'lime'
  },
  {
    icon: Users,
    title: 'Customer Portal',
    description: 'Give your customers control with self-service booking management, history tracking, and loyalty points visibility.',
    color: 'teal'
  },
  {
    icon: CreditCard,
    title: 'Integrated Payments',
    description: 'Seamless Stripe integration for online payments, in-person checkout, and gift card redemption all in one place.',
    color: 'lime'
  },
  {
    icon: Palette,
    title: 'Full Customization',
    description: 'Brand your booking experience with custom colors, logos, form fields, and messaging to match your business identity.',
    color: 'teal'
  },
  {
    icon: Zap,
    title: 'Multi-Business Platform',
    description: 'Manage multiple locations or businesses from one platform with subdomain routing and centralized analytics.',
    color: 'lime'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Manage Bookings
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to streamline your operations and delight your customers
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const bgColor = feature.color === 'teal' ? 'bg-teal-50' : 'bg-lime-50';
            const iconColor = feature.color === 'teal' ? 'text-teal-600' : 'text-lime-600';
            const borderColor = feature.color === 'teal' ? 'border-teal-100' : 'border-lime-100';
            const hoverBg = feature.color === 'teal' ? 'hover:bg-teal-50' : 'hover:bg-lime-50';
            const hoverBorder = feature.color === 'teal' ? 'hover:border-teal-200' : 'hover:border-lime-200';
            
            return (
              <div 
                key={index} 
                className={`group bg-white border ${borderColor} rounded-2xl p-8 ${hoverBg} ${hoverBorder} transition-all duration-300 hover:shadow-xl cursor-default`}
              >
                <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;