import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for solo practitioners',
    features: [
      'Up to 100 bookings/month',
      'Basic booking system',
      'Customer portal',
      'Email notifications',
      'Mobile responsive',
      'Email support'
    ],
    highlighted: false
  },
  {
    name: 'Professional',
    price: '79',
    description: 'For growing businesses',
    features: [
      'Unlimited bookings',
      'Gift cards & loyalty',
      'Multi-staff scheduling',
      'Stripe payments',
      'Custom branding',
      'SMS notifications',
      'Priority support',
      'Advanced analytics'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: '199',
    description: 'For multi-location businesses',
    features: [
      'Everything in Professional',
      'Multi-location support',
      'Advanced reporting',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
      'White-label options',
      'SLA guarantee'
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
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#E5F8F6] border border-[#14B8A6] px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-[#14B8A6]"></div>
            <span className="text-sm font-medium text-gray-900">Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business. All plans include 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`border-2 p-8 hover:scale-105 transition-all duration-300 ${
                plan.highlighted 
                  ? 'bg-[#14B8A6] border-gray-900 text-white relative' 
                  : 'bg-white border-gray-200 hover:border-[#14B8A6]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#A4D23E] text-gray-900 px-4 py-1 text-sm font-bold">
                  MOST POPULAR
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
                    ${plan.price}
                  </span>
                  <span className={`ml-2 ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>/month</span>
                </div>
              </div>
              
              <Button 
                onClick={() => scrollToSection('cta')}
                className={`w-full mb-8 font-medium h-12 ${
                  plan.highlighted 
                    ? 'bg-white text-[#14B8A6] hover:bg-gray-100' 
                    : 'bg-[#14B8A6] text-white hover:bg-[#0d9488]'
                }`}
              >
                Start Free Trial
              </Button>
              
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-5 h-5 flex items-center justify-center ${
                      plan.highlighted ? 'bg-white/20' : 'bg-[#E5F8F6]'
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
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All plans include 14-day free trial · No credit card required · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;