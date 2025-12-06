import React from 'react';
import { Building2, Users2, Sparkles, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';

const ScaleYourBusiness = () => {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Full-width Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1675034741696-fa9551c31bb4" 
          alt="Professional salon environment"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        
        {/* Hexagon Pattern Background */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%2314B8A6' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Story */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 glass-teal px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-[#14B8A6]" />
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

          {/* Right Content - Features for Scaling */}
          <div className="space-y-6 animate-slide-in">
            <div className="glass-strong border border-white/10 p-8 hover:border-[#14B8A6]/50 transition-all duration-500">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#14B8A6] to-[#0d9488] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Multi-Location Dashboard</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Manage all your salon, spa, or massage studio locations from one centralized dashboard. Monitor performance, transfer bookings between locations, and maintain consistent service quality across your entire business.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start space-x-2">
                      <span className="text-[#14B8A6]">•</span>
                      <span>Centralized reporting across all locations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#14B8A6]">•</span>
                      <span>Staff can work at multiple locations seamlessly</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#14B8A6]">•</span>
                      <span>Unified customer database across all branches</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-strong border border-white/10 p-8 hover:border-[#14B8A6]/50 transition-all duration-500">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#A4D23E] to-[#8BC234] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Users2 className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Advanced Staff Management</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    As you grow from a single salon to multiple locations, managing 5, 10, or 50+ staff members becomes effortless. Set individual permissions, track commissions, manage schedules, and monitor performance with our comprehensive staff management tools.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start space-x-2">
                      <span className="text-[#A4D23E]">•</span>
                      <span>Individual staff booking pages and calendars</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#A4D23E]">•</span>
                      <span>Commission tracking and payroll integration</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#A4D23E]">•</span>
                      <span>Performance metrics per stylist/therapist</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-strong border border-white/10 p-8 hover:border-[#14B8A6]/50 transition-all duration-500">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#14B8A6] to-[#0d9488] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Business Intelligence & Analytics</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Make data-driven decisions with comprehensive analytics. Track which services are most profitable, identify peak booking times, monitor customer acquisition costs, and forecast revenue growth across all your locations.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start space-x-2">
                      <span className="text-[#14B8A6]">•</span>
                      <span>Revenue forecasting and trend analysis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#14B8A6]">•</span>
                      <span>Customer lifetime value tracking</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#14B8A6]">•</span>
                      <span>Service performance comparisons</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-teal p-6 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-bold mb-1">Ready to scale your business?</p>
                  <p className="text-sm text-gray-300">Start your 14-day free trial today</p>
                </div>
                <Button
                  onClick={() => window.location.href = 'https://app.onbuuk.com'}
                  className="bg-white text-[#14B8A6] hover:bg-gray-100 font-bold shadow-lg"
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
