import React from 'react';
import { Calendar, Users, CreditCard, Gift, Palette, BarChart3, Zap, Shield } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Background Pattern - Circuit */}
      <div className="absolute inset-0 bg-circuit opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-[#14B8A6]/10 border border-[#14B8A6] px-4 py-2 mb-6 rounded-full">
            <Zap className="w-4 h-4 text-[#14B8A6]" />
            <span className="text-sm font-medium text-[#14B8A6]">Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything to Manage{' '}
            <span className="text-gradient">Your Bookings</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            All the tools you need to streamline appointments and grow your business
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Feature - Spans 2 columns with Image Background */}
          <div className="lg:col-span-2 relative overflow-hidden bg-white border-2 border-gray-200 p-8 md:p-10 hover:border-[#14B8A6] hover:shadow-2xl transition-all duration-500 hover-scale group rounded-lg">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
              <img 
                src="https://images.unsplash.com/photo-1761718210055-e83ca7e2c9ad" 
                alt="Spa treatment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Content Section */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#14B8A6] flex items-center justify-center mb-6 shadow-lg shadow-[#14B8A6]/30">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Smart Booking System
                </h3>
                <p className="text-gray-300 mb-6 max-w-xl text-base lg:text-lg">
                  Real-time availability, multi-step booking flow, automated confirmations, and customer self-service portal. Make booking effortless for your clients.
                </p>
              </div>
              
              {/* No-Show Stats Widget - Glass Effect */}
              <div className="hidden lg:block absolute top-6 right-6 glass-dark border border-white/20 shadow-2xl p-5 w-56 animate-slide-in">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold text-white">No-Show Fee</div>
                  <div className="w-9 h-9 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">€125.00</div>
                <div className="text-xs text-gray-400 mb-3">Collected this month</div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-gray-400">5 no-shows</span>
                  <span className="text-red-400 font-medium">-60%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-2/5 bg-red-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Mockup - Calendar View */}
              <div className="mt-auto glass-strong border border-white/10 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-semibold text-white">DECEMBER 2024</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                    <span className="text-xs text-gray-400">12 bookings</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div key={i} className="text-center text-xs font-medium text-gray-400 mb-2">{day}</div>
                  ))}
                  {[...Array(35)].map((_, i) => {
                    const hasBooking = [8, 9, 10, 14, 15, 16, 17, 21, 22, 23, 28, 29].includes(i);
                    const isMultiple = [15, 22].includes(i);
                    const isToday = i === 10;
                    const isDisabled = i < 8;
                    
                    return (
                      <div 
                        key={i} 
                        className={`aspect-square flex items-center justify-center text-xs relative rounded ${
                          isToday
                            ? 'bg-[#14B8A6] text-white font-bold shadow-lg'
                            : isDisabled
                            ? 'text-gray-600'
                            : hasBooking
                            ? 'text-white font-medium hover:bg-white/5 cursor-pointer transition-colors'
                            : 'text-gray-500 hover:bg-white/5 cursor-pointer transition-colors'
                        }`}
                      >
                        {i + 1}
                        {hasBooking && !isToday && (
                          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-0.5">
                            <div className="w-1 h-1 bg-[#14B8A6] rounded-full"></div>
                            {isMultiple && <div className="w-1 h-1 bg-[#14B8A6] rounded-full"></div>}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Gift Cards & Loyalty */}
          <div className="glass-strong border border-white/10 p-8 hover:border-[#A4D23E]/50 transition-all duration-500 animate-slide-up hover-scale group" style={{animationDelay: '0.1s'}}>
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#A4D23E] to-[#8BC234] flex items-center justify-center mb-6 shadow-lg shadow-[#A4D23E]/30">
              <Gift className="w-7 h-7 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Gift Cards & Loyalty
            </h3>
            <p className="text-gray-300 mb-6">
              Built-in gift card system and customizable loyalty programs to boost retention and revenue.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="glass border border-white/10 p-3 rounded-lg">
                <div className="text-2xl font-bold text-white">€3.2K</div>
                <div className="text-xs text-gray-400">Gift cards sold</div>
              </div>
              <div className="glass border border-white/10 p-3 rounded-lg">
                <div className="text-2xl font-bold text-white">450</div>
                <div className="text-xs text-gray-400">Loyalty members</div>
              </div>
            </div>
            
            <div className="glass-dark border border-white/10 p-4 mt-auto rounded-lg">
              <div className="text-xs font-semibold text-gray-400 mb-3">GIFT CARD PREVIEW</div>
              <div className="bg-gradient-to-br from-[#A4D23E] to-[#8BC234] p-4 text-gray-900 relative overflow-hidden rounded-lg shadow-xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-12 -mt-12"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white opacity-10 rounded-full -ml-10 -mb-10"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-xs font-bold">BUUK</div>
                    <div className="text-xs font-medium bg-white bg-opacity-20 px-2 py-1 rounded">GIFT</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-3xl font-bold mb-1">€50.00</div>
                    <div className="text-xs opacity-80">Gift Card Value</div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-xs">
                      <div className="opacity-80 text-[10px] mb-1">CODE</div>
                      <div className="font-mono font-bold text-sm">GIFT-2024</div>
                    </div>
                    <div className="text-xs opacity-80">Exp: 12/2025</div>
                  </div>
                </div>
              </div>
              
              {/* Loyalty Points */}
              <div className="mt-4 p-3 border border-white/10 glass rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-semibold text-white">LOYALTY POINTS</div>
                  <div className="text-lg font-bold text-[#A4D23E]">850</div>
                </div>
                <div className="h-2 bg-white/10 border border-white/10 rounded-full relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-4/5 bg-gradient-to-r from-[#A4D23E] to-[#8BC234] rounded-full"></div>
                </div>
                <div className="text-xs text-gray-400 mt-2">150 points to next reward</div>
              </div>
            </div>
          </div>

          {/* Customer Portal */}
          <div className="glass-strong border border-white/10 p-8 hover:border-[#14B8A6]/50 transition-all duration-500 animate-slide-up hover-scale" style={{animationDelay: '0.2s'}}>
            <div className="w-14 h-14 rounded-xl bg-[#14B8A6] flex items-center justify-center mb-6 shadow-lg shadow-[#14B8A6]/30">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Customer Portal
            </h3>
            <p className="text-gray-300 mb-6">
              Self-service booking, history tracking, and loyalty points. Empower your customers.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 glass border border-white/10 rounded-lg hover:border-[#14B8A6]/30 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white text-xs font-bold">EW</div>
                  <div>
                    <div className="text-xs font-semibold text-white">Emma Wilson</div>
                    <div className="text-[10px] text-gray-400">emma@email.com</div>
                  </div>
                </div>
                <div className="text-xs font-medium text-gray-300">245 pts</div>
              </div>
              <div className="flex items-center justify-between p-3 glass-teal border border-[#14B8A6]/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-[#14B8A6] flex items-center justify-center text-white text-xs font-bold">JM</div>
                  <div>
                    <div className="text-xs font-semibold text-white">James Miller</div>
                    <div className="text-[10px] text-gray-400">james@email.com</div>
                  </div>
                </div>
                <div className="text-xs font-medium text-[#14B8A6]">892 pts</div>
              </div>
              <div className="flex items-center justify-between p-3 glass border border-white/10 rounded-lg hover:border-[#14B8A6]/30 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center text-white text-xs font-bold">SD</div>
                  <div>
                    <div className="text-xs font-semibold text-white">Sarah Davis</div>
                    <div className="text-[10px] text-gray-400">sarah@email.com</div>
                  </div>
                </div>
                <div className="text-xs font-medium text-gray-300">156 pts</div>
              </div>
            </div>
          </div>

          {/* Integrated Payments */}
          <div className="glass-strong border border-white/10 p-8 hover:border-[#14B8A6]/50 transition-all duration-500 animate-slide-up hover-scale" style={{animationDelay: '0.3s'}}>
            <div className="w-14 h-14 rounded-xl bg-[#14B8A6] flex items-center justify-center mb-6 shadow-lg shadow-[#14B8A6]/30">
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Stripe Payments
            </h3>
            <p className="text-gray-300 mb-6">
              Seamless online payments, in-person checkout, and gift card redemption all in one place.
            </p>
            <div className="space-y-4">
              <div className="p-4 glass border border-white/10 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-gray-400">Total Amount</div>
                  <div className="text-2xl font-bold text-white">€85.00</div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 p-3 glass border border-white/10 rounded-lg text-center hover:border-white/20 transition-colors cursor-pointer">
                    <svg className="w-6 h-6 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h16V6H4zm2 2h12v2H6V8zm0 4h8v2H6v-2z"/>
                    </svg>
                    <div className="text-[10px] text-gray-400 mt-1">Card</div>
                  </div>
                  <div className="flex-1 p-3 glass-teal border border-[#14B8A6]/30 rounded-lg text-center cursor-pointer">
                    <Shield className="w-6 h-6 mx-auto text-[#14B8A6]" />
                    <div className="text-[10px] text-[#14B8A6] font-semibold mt-1">Stripe</div>
                  </div>
                  <div className="flex-1 p-3 glass border border-white/10 rounded-lg text-center hover:border-white/20 transition-colors cursor-pointer">
                    <svg className="w-6 h-6 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <div className="text-[10px] text-gray-400 mt-1">Cash</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Customization */}
          <div className="glass-strong border border-white/10 p-8 hover:border-[#A4D23E]/50 transition-all duration-500 animate-slide-up hover-scale" style={{animationDelay: '0.4s'}}>
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#A4D23E] to-[#8BC234] flex items-center justify-center mb-6 shadow-lg shadow-[#A4D23E]/30">
              <Palette className="w-7 h-7 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Brand Your Way
            </h3>
            <p className="text-gray-300 mb-6">
              Custom colors, logos, and form fields. Make it uniquely yours.
            </p>
            <div>
              <div className="text-xs font-semibold text-gray-400 mb-3">BRAND COLORS</div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="h-14 rounded-lg bg-[#14B8A6] flex items-center justify-center shadow-lg">
                  <span className="text-white text-[10px] font-medium">#14B8A6</span>
                </div>
                <div className="h-14 rounded-lg bg-[#A4D23E] flex items-center justify-center shadow-lg">
                  <span className="text-gray-900 text-[10px] font-medium">#A4D23E</span>
                </div>
                <div className="h-14 rounded-lg bg-gray-900 border border-white/20 flex items-center justify-center shadow-lg">
                  <span className="text-white text-[10px] font-medium">#1A1A1A</span>
                </div>
              </div>
              <div className="p-4 glass border border-white/10 rounded-lg">
                <div className="text-[10px] font-semibold text-gray-400 mb-2">LOGO</div>
                <div className="h-10 glass-dark border border-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#14B8A6] font-bold text-lg">buuk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
