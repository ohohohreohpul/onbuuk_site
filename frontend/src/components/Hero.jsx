import React from 'react';
import { Button } from './ui/button';
import { Play, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-width Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1759142235060-3191ee596c81" 
          alt="Luxury salon interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f766e]/95 via-[#0f766e]/75 to-[#0f766e]/60"></div>
        
        {/* Background Pattern for Depth */}
        <div className="absolute inset-0 bg-grid opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left animate-fade-in">
            {/* Badge with Glass Effect */}
            <div className="inline-flex items-center space-x-2 glass-teal px-4 py-2 mb-8 animate-glow">
              <Sparkles className="w-4 h-4 text-[#14B8A6]" />
              <span className="text-sm font-medium text-white">All-in-One Booking Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Booking Made{' '}
              <span className="text-gradient">Simple</span>{' '}
              for Your Business
            </h1>

            {/* Subheadline */}
            <p className="text-base lg:text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
              Streamline appointments, accept payments, build loyalty, and grow your salon or spa business with buuk's complete booking management platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => window.location.href = 'https://app.onbuuk.com'}
                className="bg-[#14B8A6] hover:bg-[#0d9488] text-white font-semibold px-8 h-14 text-base group shadow-lg hover:shadow-[#14B8A6]/50 transition-all"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('how-it-works')}
                className="glass border-2 border-white/20 text-white hover:bg-white/10 font-semibold px-8 h-14 text-base group"
              >
                <Play className="mr-2 w-5 h-5" />
                How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-6 items-center">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-[#14B8A6] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-300 font-medium">Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-[#14B8A6] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-300 font-medium">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-[#14B8A6] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-300 font-medium">Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Content - UI Mockup with Glass Effect */}
          <div className="relative animate-slide-in hidden lg:block">
            <div className="glass-strong border border-white/20 p-1 shadow-2xl hover-scale">
              {/* Browser Chrome */}
              <div className="flex items-center space-x-2 p-3 border-b border-white/10 glass-dark">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="flex-1 mx-4">
                  <div className="h-6 glass border border-white/10 flex items-center px-3">
                    <svg className="w-3 h-3 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-xs text-gray-400">app.buuk.io/dashboard</span>
                  </div>
                </div>
              </div>
              
              {/* Mockup Content - Calendar Dashboard */}
              <div className="bg-[#0f0f0f] p-6">
                <div className="glass-strong border border-white/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-white">Today's Schedule</h3>
                      <p className="text-sm text-gray-400">Monday, Dec 2 • 15 appointments</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-lg bg-[#14B8A6] flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { name: 'Emma Wilson', service: 'Haircut & Styling', time: '9:00 AM', status: 'Confirmed', color: 'bg-blue-500' },
                      { name: 'James Miller', service: 'Hair Coloring', time: '10:30 AM', status: 'Confirmed', color: 'bg-purple-500' },
                      { name: 'Sarah Davis', service: 'Manicure & Pedicure', time: '12:00 PM', status: 'Pending', color: 'bg-pink-500' }
                    ].map((appointment, item) => (
                      <div key={item} className="flex items-center justify-between p-4 glass border border-white/10 hover:border-[#14B8A6]/50 transition-colors">
                        <div className="flex items-center space-x-3 flex-1">
                          <div className={`w-10 h-10 rounded-lg ${appointment.color} flex items-center justify-center text-white font-bold text-sm`}>
                            {appointment.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-white text-sm">{appointment.name}</p>
                            <p className="text-xs text-gray-400">{appointment.service}</p>
                          </div>
                          <div className="text-right mr-4">
                            <p className="text-sm font-medium text-white">{appointment.time}</p>
                          </div>
                        </div>
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                          appointment.status === 'Confirmed' 
                            ? 'text-[#14B8A6] bg-[#14B8A6]/10 border border-[#14B8A6]/30' 
                            : 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/30'
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats - Glass Effect */}
            <div className="absolute -bottom-6 -left-6 glass-strong border border-white/20 p-6 animate-float shadow-2xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#A4D23E] flex items-center justify-center">
                  <svg className="w-7 h-7 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">+42%</p>
                  <p className="text-xs text-gray-400">More bookings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;