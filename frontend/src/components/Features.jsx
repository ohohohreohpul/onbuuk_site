import React from 'react';
import { Calendar, Users, CreditCard, Gift, Palette, BarChart3 } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-[#FFF9E5] border border-[#A4D23E] px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-[#A4D23E]"></div>
            <span className="text-sm font-medium text-gray-900">Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything to Manage Your Bookings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All the tools you need to streamline appointments and grow your business
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Feature - Spans 2 columns */}
          <div className="lg:col-span-2 bg-[#F8FFFE] border-2 border-gray-200 p-6 md:p-8 hover:border-[#14B8A6] transition-all duration-300 group relative overflow-visible">
            <div className="flex flex-col h-full">
              {/* Content Section */}
              <div className="mb-6 relative z-20">
                <div className="w-14 h-14 bg-[#14B8A6] flex items-center justify-center mb-6 animate-fade-in">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Smart Booking System
                </h3>
                <p className="text-gray-600 mb-6">
                  Real-time availability, multi-step booking flow, automated confirmations, and customer self-service portal. Make booking effortless for your clients.
                </p>
              </div>
              
              {/* No-Show Stats Widget - Glass Effect */}
              <div className="hidden lg:block absolute top-4 right-4 bg-white/90 backdrop-blur-md border-2 border-gray-900 shadow-xl p-4 w-48 z-30 animate-slide-in">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-bold text-gray-900">No-Show Fee</div>
                  <div className="w-8 h-8 bg-red-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">€125.00</div>
                <div className="text-xs text-gray-500 mb-3">Collected this month</div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">5 no-shows</span>
                  <span className="text-red-600 font-medium">-60%</span>
                </div>
                <div className="mt-2 h-1 bg-gray-200 relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-2/5 bg-red-500"></div>
                </div>
              </div>
              
              {/* Mockup - Calendar View with Bookings */}
              <div className="mt-auto bg-white border border-gray-200 p-4 relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-gray-900">DECEMBER 2024</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
                    <span className="text-xs text-gray-500">12 bookings</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div key={i} className="text-center text-xs font-medium text-gray-500 mb-2">{day}</div>
                  ))}
                  {[...Array(35)].map((_, i) => {
                    const hasBooking = [8, 9, 10, 14, 15, 16, 17, 21, 22, 23, 28, 29].includes(i);
                    const isMultiple = [15, 22].includes(i);
                    const isToday = i === 10;
                    const isDisabled = i < 8;
                    
                    return (
                      <div 
                        key={i} 
                        className={`aspect-square flex items-center justify-center text-xs relative ${
                          isToday
                            ? 'bg-[#14B8A6] text-white font-bold'
                            : isDisabled
                            ? 'text-gray-300'
                            : hasBooking
                            ? 'text-gray-900 font-medium'
                            : 'text-gray-700'
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
                
                {/* Animated Booking Confirmation Overlay - Glass Effect */}
                <div className="hidden md:block absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-white/95 backdrop-blur-lg border-2 border-[#14B8A6] shadow-2xl p-4 w-56 lg:w-64 animate-float z-20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-green-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-gray-900">Booking Confirmed!</div>
                      <div className="text-xs text-gray-500">Sarah Martinez</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-700 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Service:</span>
                      <span className="font-medium">Haircut</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Date:</span>
                      <span className="font-medium">Dec 11, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Time:</span>
                      <span className="font-medium">2:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Stats Cards - Below Calendar */}
              <div className="lg:hidden grid grid-cols-2 gap-3 mt-6">
                <div className="bg-white/90 backdrop-blur-md border-2 border-gray-900 p-3">
                  <div className="text-xs font-bold text-gray-900 mb-1">No-Show Fee</div>
                  <div className="text-xl font-bold text-gray-900">€125</div>
                  <div className="text-xs text-red-600 font-medium">-60%</div>
                </div>
                <div className="bg-white/95 backdrop-blur-lg border-2 border-[#14B8A6] p-3">
                  <div className="text-xs font-bold text-gray-900 mb-1">Confirmed</div>
                  <div className="text-xl font-bold text-[#14B8A6]">12</div>
                  <div className="text-xs text-gray-600">Today</div>
                </div>
              </div>
            </div>
          </div>

          {/* Gift Cards & Loyalty */}
          <div className="bg-[#FFF9E5] border-2 border-gray-200 p-8 hover:border-[#A4D23E] transition-all duration-300 animate-slide-up hover:scale-105" style={{animationDelay: '0.1s'}}>
            <div className="w-14 h-14 bg-[#A4D23E] flex items-center justify-center mb-6">
              <Gift className="w-7 h-7 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Gift Cards & Loyalty
            </h3>
            <p className="text-gray-600 mb-6">
              Built-in gift card system and customizable loyalty programs to boost retention and revenue.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white border border-gray-300 p-3">
                <div className="text-2xl font-bold text-gray-900">€3.2K</div>
                <div className="text-xs text-gray-600">Gift cards sold</div>
              </div>
              <div className="bg-white border border-gray-300 p-3">
                <div className="text-2xl font-bold text-gray-900">450</div>
                <div className="text-xs text-gray-600">Loyalty members</div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-300 p-4 mt-auto">
              <div className="text-xs font-semibold text-gray-600 mb-3">GIFT CARD PREVIEW</div>
              <div className="bg-gradient-to-br from-[#A4D23E] to-[#8BC234] p-4 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full -ml-8 -mb-8"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-xs font-bold">BUUK</div>
                    <div className="text-xs font-medium bg-white bg-opacity-20 px-2 py-1">GIFT</div>
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
              <div className="mt-4 p-3 border border-gray-300 bg-[#FFF9E5]">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-semibold text-gray-900">LOYALTY POINTS</div>
                  <div className="text-lg font-bold text-[#A4D23E]">850</div>
                </div>
                <div className="h-2 bg-white border border-gray-300 relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-4/5 bg-[#A4D23E]"></div>
                </div>
                <div className="text-xs text-gray-600 mt-2">150 points to next reward</div>
              </div>
            </div>
          </div>

          {/* Customer Portal */}
          <div className="bg-white border-2 border-gray-200 p-8 hover:border-[#14B8A6] transition-all duration-300 animate-slide-up hover:scale-105" style={{animationDelay: '0.2s'}}>
            <div className="w-14 h-14 bg-[#14B8A6] flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Customer Portal
            </h3>
            <p className="text-gray-600">
              Self-service booking, history tracking, and loyalty points. Empower your customers.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 flex items-center justify-center text-white text-xs font-bold">EW</div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Emma Wilson</div>
                    <div className="text-[10px] text-gray-500">emma@email.com</div>
                  </div>
                </div>
                <div className="text-xs font-medium text-gray-900">245 pts</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#E5F8F6] border border-[#14B8A6]">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#14B8A6] flex items-center justify-center text-white text-xs font-bold">JM</div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">James Miller</div>
                    <div className="text-[10px] text-gray-500">james@email.com</div>
                  </div>
                </div>
                <div className="text-xs font-medium text-[#14B8A6]">892 pts</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-500 flex items-center justify-center text-white text-xs font-bold">SD</div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Sarah Davis</div>
                    <div className="text-[10px] text-gray-500">sarah@email.com</div>
                  </div>
                </div>
                <div className="text-xs font-medium text-gray-900">156 pts</div>
              </div>
            </div>
          </div>

          {/* Integrated Payments */}
          <div className="bg-white border-2 border-gray-200 p-8 hover:border-[#14B8A6] transition-all duration-300 animate-slide-up hover:scale-105" style={{animationDelay: '0.3s'}}>
            <div className="w-14 h-14 bg-[#14B8A6] flex items-center justify-center mb-6">
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stripe Payments
            </h3>
            <p className="text-gray-600">
              Seamless online payments, in-person checkout, and gift card redemption all in one place.
            </p>
            <div className="mt-6 space-y-3">
              <div className="p-3 bg-gray-50 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-semibold text-gray-900">Total Amount</div>
                  <div className="text-lg font-bold text-gray-900">€85.00</div>
                </div>
                <div className="flex gap-2 mt-3">
                  <div className="flex-1 p-2 bg-white border border-gray-200 text-center">
                    <svg className="w-6 h-6 mx-auto text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h16V6H4zm2 2h12v2H6V8zm0 4h8v2H6v-2z"/>
                    </svg>
                    <div className="text-[10px] text-gray-600 mt-1">Card</div>
                  </div>
                  <div className="flex-1 p-2 bg-[#E5F8F6] border-2 border-[#14B8A6] text-center">
                    <svg className="w-6 h-6 mx-auto text-[#14B8A6]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.71 11.29l-9-9a.996.996 0 00-1.41 0l-9 9a.996.996 0 000 1.41l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 000-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/>
                    </svg>
                    <div className="text-[10px] text-[#14B8A6] font-semibold mt-1">Stripe</div>
                  </div>
                  <div className="flex-1 p-2 bg-white border border-gray-200 text-center">
                    <svg className="w-6 h-6 mx-auto text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <div className="text-[10px] text-gray-600 mt-1">Cash</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Customization */}
          <div className="bg-[#FFF9E5] border-2 border-gray-200 p-8 hover:border-[#A4D23E] transition-all duration-300 animate-slide-up hover:scale-105" style={{animationDelay: '0.4s'}}>
            <div className="w-14 h-14 bg-[#A4D23E] flex items-center justify-center mb-6">
              <Palette className="w-7 h-7 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Brand Your Way
            </h3>
            <p className="text-gray-600">
              Custom colors, logos, and form fields. Make it uniquely yours.
            </p>
            <div className="mt-6">
              <div className="text-xs font-semibold text-gray-600 mb-3">BRAND COLORS</div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="h-12 bg-[#14B8A6] flex items-center justify-center">
                  <span className="text-white text-[10px] font-medium">#14B8A6</span>
                </div>
                <div className="h-12 bg-[#A4D23E] flex items-center justify-center">
                  <span className="text-gray-900 text-[10px] font-medium">#A4D23E</span>
                </div>
                <div className="h-12 bg-gray-900 flex items-center justify-center">
                  <span className="text-white text-[10px] font-medium">#1A1A1A</span>
                </div>
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200">
                <div className="text-[10px] font-semibold text-gray-600 mb-2">LOGO</div>
                <div className="h-8 bg-white border border-gray-200 flex items-center justify-center">
                  <span className="text-[#14B8A6] font-bold">buuk</span>
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