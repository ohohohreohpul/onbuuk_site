import React, { useState } from 'react';
import { Calendar, Users2, ChevronDown, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';

const ScaleYourBusiness = () => {
  const [openAccordion, setOpenAccordion] = useState(-1);

  const features = [
    {
      icon: Calendar,
      title: 'Smart Automated Scheduling',
      description: 'Intelligent booking system that automatically manages appointments, prevents double-bookings, and optimizes your calendar. Send automatic reminders via SMS and email to reduce no-shows by up to 75%.',
      highlights: [
        'Auto-sync with Google Calendar and other platforms',
        'Smart time-slot optimization based on service duration',
        'Automated SMS/email reminders and confirmations'
      ]
    },
    {
      icon: Users2,
      title: 'Advanced Staff Management',
      description: 'As you grow from a single salon to multiple locations, managing 5, 10, or 50+ staff members becomes effortless. Set permissions, track commissions, and monitor performance.',
      highlights: [
        'Individual staff booking pages and calendars',
        'Commission tracking and payroll integration',
        'Performance metrics per stylist/therapist'
      ]
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence & Analytics',
      description: 'Make data-driven decisions with comprehensive analytics. Track which services are most profitable, identify peak times, and forecast revenue growth.',
      highlights: [
        'Revenue forecasting and trend analysis',
        'Customer lifetime value tracking',
        'Service performance comparisons'
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Story */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-[#14B8A6]" />
              <span className="text-sm text-gray-700">Success Story</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Scale Your Salon & Spa From One Location to Many
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                <strong className="text-gray-900">Meet Sarah</strong>, who started with a single hair salon in downtown. Within 18 months of using buuk's booking software, she expanded to 4 locations across the city, managing 25 stylists and serving over 1,000 clients monthly.
              </p>
              
              <p className="text-base leading-relaxed">
                <strong className="text-gray-900">"The turning point was having everything in one system,"</strong> Sarah explains. "Before buuk, I was drowning in spreadsheets, missed appointments, and payment tracking nightmares. Now, I can see real-time performance across all my salons, manage staff schedules from my phone, and my clients love the instant booking confirmation."
              </p>
              
              <div className="bg-gray-50 border-2 border-gray-200 p-6 rounded-xl">
                <h4 className="text-gray-900 font-bold mb-4">Sarah's Results with Buuk:</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">Revenue Growth</span>
                    <span className="text-[#14B8A6] font-bold text-lg">+280%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">No-Show Rate Reduction</span>
                    <span className="text-[#14B8A6] font-bold text-lg">-75%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">Time Saved on Admin</span>
                    <span className="text-[#14B8A6] font-bold text-lg">15 hrs/week</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">Client Retention</span>
                    <span className="text-[#14B8A6] font-bold text-lg">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image & Features */}
          <div className="relative">
            {/* Main Success Image */}
            <div className="relative overflow-hidden rounded-xl shadow-xl mb-6">
              <img 
                src="https://images.unsplash.com/photo-1675034741621-79a7d07c1369" 
                alt="Successful salon owner"
                className="w-full h-[400px] object-cover"
              />
              
              {/* Success Quote Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t-2 border-gray-200">
                <p className="text-lg font-semibold text-gray-900 mb-1">"buuk transformed my business"</p>
                <p className="text-sm text-gray-600">From 1 salon to 4 locations in 18 months</p>
              </div>
            </div>

            {/* Accordion - Key Features */}
            <div className="space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isOpen = openAccordion === index;
                
                return (
                  <div 
                    key={index} 
                    className={`bg-white border-2 rounded-xl transition-all duration-300 ${
                      isOpen ? 'border-[#14B8A6] shadow-lg' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <button
                      onClick={() => setOpenAccordion(isOpen ? -1 : index)}
                      className="w-full p-5 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen 
                            ? 'bg-[#14B8A6] shadow-md' 
                            : 'bg-gray-100'
                        }`}>
                          <Icon className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-gray-600'}`} />
                        </div>
                        <span className="text-gray-900 font-bold">{feature.title}</span>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 pl-14">
                          {feature.description}
                        </p>
                        <ul className="space-y-2 pl-14">
                          {feature.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start space-x-2 text-sm">
                              <span className="text-[#14B8A6] mt-1">•</span>
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-6 bg-[#14B8A6]/10 border-2 border-[#14B8A6] p-5 rounded-xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-gray-900 font-bold mb-1">Ready to scale your business?</p>
                  <p className="text-sm text-gray-600">Start your 14-day free trial today</p>
                </div>
                <Button
                  onClick={() => window.location.href = 'https://app.onbuuk.com'}
                  className="bg-[#14B8A6] text-white hover:bg-[#0d9488] font-bold shadow-md whitespace-nowrap rounded-lg"
                >
                  Get Started →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleYourBusiness;