import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const plans = [
  {
    name: 'Free',
    price: '0',
    currency: '€',
    description: 'Perfect for getting started with basic booking needs',
    features: [
      '1 admin user (owner only)',
      'Up to 50 bookings per month',
      'Up to 3 services',
      '1 specialist',
      'Email notifications',
      'Basic booking system',
      'Customer management'
    ],
    highlighted: false
  },
  {
    name: 'Standard',
    price: '29',
    currency: '$',
    description: 'Ideal for small to medium-sized businesses',
    features: [
      'Up to 3 admin users',
      'Unlimited bookings',
      'Up to 10 services',
      'Up to 3 specialists',
      'Gift cards enabled',
      'Basic loyalty program',
      'Custom logo',
      'Email notifications',
      'Calendar view',
      'Customer portal',
      'Booking form customization'
    ],
    highlighted: true,
    badge: 'POPULAR'
  },
  {
    name: 'Pro',
    price: '45',
    currency: '$',
    description: 'Full power for growing businesses',
    features: [
      'Unlimited admin users',
      'Unlimited bookings',
      'Unlimited services',
      'Unlimited specialists',
      'Advanced gift cards',
      'Advanced loyalty program',
      'Full custom branding',
      'Remove "Powered by Buuk" badge',
      'Email notifications',
      'Priority support',
      'Custom domain support',
      'Advanced permissions',
      'POS (Point of Sale) system',
      'No-show fees management',
      'Advanced form customization',
      'Role-based team management'
    ],
    highlighted: false
  }
];

const Pricing = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 px-3 py-1.5 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-[#14B8A6]"></div>
            <span className="text-sm text-gray-700">Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business. Start for free, upgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`border-2 p-8 transition-all duration-500 rounded-xl ${
                plan.highlighted 
                  ? 'bg-[#14B8A6] border-[#14B8A6] text-white relative shadow-xl' 
                  : 'bg-white border-gray-200 hover:border-[#14B8A6] hover:shadow-xl'
              }`}
            >
              {plan.highlighted && plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#A4D23E] text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.currency}{plan.price}
                  </span>
                  <span className={`ml-2 ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>/month</span>
                </div>
              </div>
              
              <Button 
                onClick={() => window.location.href = 'https://app.onbuuk.com'}
                className={`w-full mb-8 font-semibold h-12 transition-all shadow-md rounded-lg ${
                  plan.highlighted 
                    ? 'bg-white text-[#14B8A6] hover:bg-gray-100 hover:shadow-lg' 
                    : 'bg-[#14B8A6] text-white hover:bg-[#0d9488]'
                }`}
              >
                {plan.name === 'Free' ? 'Start for Free' : 'Get Started'}
              </Button>
              
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded flex items-center justify-center ${
                      plan.highlighted ? 'bg-white/20' : 'bg-[#14B8A6]/10'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-[#14B8A6]'}`} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Start for free · No credit card required · Upgrade anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;