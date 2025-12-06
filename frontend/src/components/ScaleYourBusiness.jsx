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
    <section className="relative py-32 bg-[#003E37] overflow-hidden">
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%2314B8A6' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Story */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 glass-teal px-4 py-2 mb-6 rounded-full">
              <BarChart3 className="w-4 h-4 text-[#14B8A6]" />
              <span className="text-sm font-medium text-white">Success Story</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Scale Your Salon & Spa{' '}
              <span className="text-gradient">From One Location to Many</span>
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-base lg:text-lg leading-relaxed">
                <strong className="text-white">Meet Sarah</strong>, who started with a single hair salon in downtown. Within 18 months of using buuk's booking software, she expanded to 4 locations across the city, managing 25 stylists and serving over 1,000 clients monthly.
              </p>
              
              <p className="text-sm lg:text-base leading-relaxed">
                <strong className="text-white">"The turning point was having everything in one system,"</strong> Sarah explains. "Before buuk, I was drowning in spreadsheets, missed appointments, and payment tracking nightmares. Now, I can see real-time performance across all my salons, manage staff schedules from my phone, and my clients love the instant booking confirmation."
              </p>
              
              <div className="glass-strong border border-white/10 p-6 rounded-lg">
                <h4 className="text-white font-bold mb-4">Sarah's Results with Buuk:</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Revenue Growth</span>
                    <span className="text-[#14B8A6] font-bold text-lg">+280%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">No-Show Rate Reduction</span>
                    <span className="text-[#14B8A6] font-bold text-lg">-75%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Time Saved on Admin</span>
                    <span className="text-[#14B8A6] font-bold text-lg">15 hrs/week</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Client Retention</span>
                    <span className="text-[#14B8A6] font-bold text-lg">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div className="relative animate-slide-in">
            {/* Main Success Image */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1675034741621-79a7d07c1369" 
                alt="Successful salon owner"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Success Quote Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="glass-dark border border-white/20 p-6 rounded-lg">
                  <p className="text-lg font-semibold mb-2">"buuk transformed my business"</p>
                  <p className="text-sm text-gray-300">From 1 salon to 4 locations in 18 months</p>
                </div>
              </div>
            </div>

            {/* Accordion - Key Features */}
            <div className="mt-6 space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isOpen = openAccordion === index;
                
                return (
                  <div 
                    key={index} 
                    className={`glass-strong border transition-all duration-300 ${
                      isOpen ? 'border-[#14B8A6]' : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <button
                      onClick={() => setOpenAccordion(isOpen ? -1 : index)}
                      className="w-full p-5 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen 
                            ? 'bg-gradient-to-br from-[#14B8A6] to-[#0d9488] shadow-lg shadow-[#14B8A6]/30' 
                            : 'bg-white/5'
                        }`}>
                          <Icon className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-gray-400'}`} />
                        </div>
                        <span className="text-white font-bold">{feature.title}</span>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {isOpen && (
                      <div className="px-5 pb-5 animate-fade-in">
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 pl-14">
                          {feature.description}
                        </p>
                        <ul className="space-y-2 pl-14">
                          {feature.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start space-x-2 text-sm">
                              <span className="text-[#14B8A6] mt-1">•</span>
                              <span className="text-gray-400">{highlight}</span>
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
            <div className="mt-6 glass-teal p-5 rounded-lg">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-white font-bold mb-1">Ready to scale your business?</p>
                  <p className="text-sm text-gray-300">Start your 14-day free trial today</p>
                </div>
                <Button
                  onClick={() => window.location.href = 'https://app.onbuuk.com'}
                  className="bg-white text-[#14B8A6] hover:bg-gray-100 font-bold shadow-lg whitespace-nowrap"
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
