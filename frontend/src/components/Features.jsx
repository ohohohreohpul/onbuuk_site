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
          <div className="lg:col-span-2 bg-[#F8FFFE] border-2 border-gray-200 p-8 hover:border-[#14B8A6] transition-all duration-300 group">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="w-14 h-14 bg-[#14B8A6] flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Smart Booking System
                </h3>
                <p className="text-gray-600 mb-6">
                  Real-time availability, multi-step booking flow, automated confirmations, and customer self-service portal. Make booking effortless for your clients.
                </p>
              </div>
              
              {/* Mockup - Calendar View */}
              <div className="mt-auto bg-white border border-gray-200 p-4">
                <div className="text-xs font-semibold text-gray-600 mb-3">SELECT DATE & TIME</div>
                <div className="grid grid-cols-7 gap-1">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div key={i} className="text-center text-xs font-medium text-gray-500 mb-2">{day}</div>
                  ))}
                  {[...Array(35)].map((_, i) => {
                    const isSelected = i === 15;
                    const isToday = i === 10;
                    const isDisabled = i < 8;
                    return (
                      <div 
                        key={i} 
                        className={`aspect-square flex items-center justify-center text-xs ${
                          isSelected 
                            ? 'bg-[#14B8A6] text-white font-bold' 
                            : isToday
                            ? 'bg-[#E5F8F6] text-[#14B8A6] font-medium border border-[#14B8A6]'
                            : isDisabled
                            ? 'text-gray-300'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {i + 1}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-3 gap-2">
                  {['9:00 AM', '10:30 AM', '2:00 PM'].map((time, i) => (
                    <div key={i} className={`text-center py-2 text-xs font-medium border ${
                      i === 0 ? 'bg-[#14B8A6] text-white border-[#14B8A6]' : 'border-gray-200 text-gray-700'
                    }`}>
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Gift Cards & Loyalty */}
          <div className="bg-[#FFF9E5] border-2 border-gray-200 p-8 hover:border-[#A4D23E] transition-all duration-300">
            <div className="w-14 h-14 bg-[#A4D23E] flex items-center justify-center mb-6">
              <Gift className="w-7 h-7 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Gift Cards & Loyalty
            </h3>
            <p className="text-gray-600 mb-6">
              Built-in gift card system and customizable loyalty programs to boost retention and revenue.
            </p>
            <div className="bg-white border border-gray-300 p-4 mt-auto">
              <div className="text-xs font-semibold text-gray-600 mb-3">GIFT CARD</div>
              <div className="bg-gradient-to-br from-[#A4D23E] to-[#8BC234] p-4 text-white">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-xs font-medium">BUUK</div>
                  <div className="text-xs">GIFT</div>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold">€50.00</div>
                  <div className="text-xs opacity-80">Gift Card Value</div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-xs">
                    <div className="opacity-80 text-[10px]">CODE</div>
                    <div className="font-mono font-semibold">GIFT-2024</div>
                  </div>
                  <div className="text-xs opacity-80">Valid 12 months</div>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <div className="flex-1 text-center py-2 bg-[#FFF9E5] border border-[#A4D23E] text-xs font-medium text-gray-900">Buy</div>
                <div className="flex-1 text-center py-2 border border-gray-200 text-xs font-medium text-gray-600">Redeem</div>
              </div>
            </div>
          </div>

          {/* Customer Portal */}
          <div className="bg-white border-2 border-gray-200 p-8 hover:border-[#14B8A6] transition-all duration-300">
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
          <div className="bg-white border-2 border-gray-200 p-8 hover:border-[#14B8A6] transition-all duration-300">
            <div className="w-14 h-14 bg-[#14B8A6] flex items-center justify-center mb-6">
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stripe Payments
            </h3>
            <p className="text-gray-600">
              Seamless online payments, in-person checkout, and gift card redemption all in one place.
            </p>
            <div className="mt-6 flex gap-2">
              <div className="h-12 bg-gray-100 border border-gray-200 flex-1"></div>
              <div className="h-12 bg-[#E5F8F6] border border-[#14B8A6] w-20"></div>
            </div>
          </div>

          {/* Full Customization */}
          <div className="bg-[#FFF9E5] border-2 border-gray-200 p-8 hover:border-[#A4D23E] transition-all duration-300">
            <div className="w-14 h-14 bg-[#A4D23E] flex items-center justify-center mb-6">
              <Palette className="w-7 h-7 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Brand Your Way
            </h3>
            <p className="text-gray-600">
              Custom colors, logos, and form fields. Make it uniquely yours.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-2">
              <div className="h-12 bg-[#14B8A6]"></div>
              <div className="h-12 bg-[#A4D23E]"></div>
              <div className="h-12 bg-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;