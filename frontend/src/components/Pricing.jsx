import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const plans = [
  {
    name: 'Standard',
    price: '29',
    currency: '€',
    description: 'Perfect for small service businesses getting started',
    features: [
      'Multi-service booking system',
      'Staff management (up to 5 staff)',
      'Booking calendar',
      'Customer portal',
      'Email + SMS notifications',
      'POS system (basic)',
      'Gift cards & loyalty program',
      'Add-on product sales',
      'Up to 20 services',
      'Buuk subdomain (yourname.buuk.io)',
      'Basic booking form customization'
    ],
    limitations: [
      'No custom domain',
      'No custom logo',
      '"Powered by Buuk" branding'
    ],
    highlighted: false
  },
  {
    name: 'Pro',
    price: '49',
    currency: '€',
    description: 'Full branding, integrations, and unlimited growth',
    features: [
      'Everything in Standard, PLUS:',
      'Custom domain',
      'Remove all Buuk branding',
      'Upload custom logos',
      'Full booking widget color + theme customization',
      'Google Calendar sync',
      'Outlook Calendar sync',
      'Advanced booking form customization',
      'Advanced staff permissions',
      'Unlimited staff',
      'Unlimited services',
      'Priority email support'
    ],
    highlighted: true,
    badge: 'RECOMMENDED'
  },
  {
    name: 'Business',
    price: 'Custom',
    currency: '',
    description: 'For high-volume businesses, chains, and franchises',
    features: [
      'Everything in Pro, PLUS:',
      'Multi-location management',
      'Dedicated account manager',
      'White-label domain + branded login',
      'Region-based hosting (if needed)',
      'Custom integrations via API',
      'Custom workflows + setup',
      'Team training & onboarding',
      'SLA & priority support',
      'Volume-based SMS pricing',
      'Custom reporting dashboard'
    ],
    customPricing: true,
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
    <section id="pricing" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 glass-teal px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#14B8A6]"></div>
            <span className="text-sm font-medium text-white">Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Simple,{' '}
            <span className="text-gradient">Transparent</span>{' '}
            Pricing
          </h2>
          <p className="text-base lg:text-lg text-gray-400 max-w-3xl mx-auto">
            Choose the plan that fits your business. All plans include 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`border p-8 hover-scale transition-all duration-500 ${
                plan.highlighted 
                  ? 'glass-strong border-[#14B8A6] text-white relative shadow-2xl shadow-[#14B8A6]/20' 
                  : 'glass-strong border-white/10 hover:border-[#14B8A6]/50'
              }`}
            >
              {plan.highlighted && plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#A4D23E] to-[#8BC234] text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-8">
                {plan.customPricing ? (
                  <div>
                    <div className="text-3xl font-bold mb-2 text-white">
                      Custom Pricing
                    </div>
                    <p className="text-sm text-gray-400">
                      Starting from €149/month
                    </p>
                  </div>
                ) : (
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-white">
                      {plan.currency}{plan.price}
                    </span>
                    <span className="ml-2 text-gray-400">/month</span>
                  </div>
                )}
              </div>
              
              <Button 
                onClick={() => {
                  if (plan.customPricing) {
                    scrollToSection('cta');
                  } else {
                    window.location.href = 'https://app.onbuuk.com';
                  }
                }}
                className={`w-full mb-8 font-semibold h-12 transition-all shadow-lg ${
                  plan.highlighted 
                    ? 'bg-white text-[#14B8A6] hover:bg-gray-100 hover:shadow-xl' 
                    : plan.customPricing
                    ? 'bg-[#A4D23E] text-gray-900 hover:bg-[#8BC234]'
                    : 'bg-[#14B8A6] text-white hover:bg-[#0d9488]'
                }`}
              >
                {plan.customPricing ? 'Contact Sales' : 'Start Free Trial'}
              </Button>
              
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded flex items-center justify-center ${
                      plan.highlighted ? 'bg-[#14B8A6]/20' : 'bg-white/5'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-[#14B8A6]'}`} />
                    </div>
                    <span className={`text-sm text-gray-300 ${feature.includes('PLUS:') ? 'font-semibold text-white' : ''}`}>
                      {feature}
                    </span>
                  </li>
                ))}
                
                {plan.limitations && (
                  <li className="pt-4 mt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2 font-semibold">Limitations:</p>
                    {plan.limitations.map((limitation, i) => (
                      <div key={i} className="flex items-start space-x-2 mb-2">
                        <span className="text-xs text-gray-500">• {limitation}</span>
                      </div>
                    ))}
                  </li>
                )}
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