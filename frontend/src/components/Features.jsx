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
              
              {/* Mockup */}
              <div className="mt-auto bg-white border border-gray-200 p-4">
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 w-3/4"></div>
                  <div className="h-3 bg-gray-200 w-1/2"></div>
                  <div className="flex gap-2 mt-4">
                    <div className="h-20 bg-[#E5F8F6] border border-[#14B8A6] flex-1"></div>
                    <div className="h-20 bg-gray-100 border border-gray-200 flex-1"></div>
                    <div className="h-20 bg-gray-100 border border-gray-200 flex-1"></div>
                  </div>
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
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div className="h-2 bg-gray-200 w-1/3"></div>
                  <div className="h-2 bg-[#A4D23E] w-1/4"></div>
                </div>
                <div className="h-16 bg-[#FFF9E5] border border-[#A4D23E] mt-3"></div>
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
            <div className="mt-6 space-y-2">
              <div className="h-2 bg-gray-100 border border-gray-200"></div>
              <div className="h-2 bg-gray-100 border border-gray-200"></div>
              <div className="h-2 bg-[#E5F8F6] border border-[#14B8A6]"></div>
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