import React from 'react';
import { Calendar, Users, CreditCard, Gift, Palette, BarChart3, Zap } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Background Pattern - Circuit */}
      <div className="absolute inset-0 bg-circuit opacity-10"></div>
      
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

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Smart Booking */}
          <div className="bg-white border-2 border-gray-200 p-8 hover:border-[#14B8A6] hover:shadow-xl transition-all duration-500 hover-scale rounded-lg">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#0d9488] flex items-center justify-center mb-6 shadow-lg">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Smart Booking System
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Real-time availability, multi-step booking flow, automated confirmations, and customer self-service portal. Make booking effortless for your clients.
            </p>
          </div>

          {/* Gift Cards & Loyalty */}
          <div className="bg-white border-2 border-gray-200 p-8 hover:border-[#A4D23E] hover:shadow-xl transition-all duration-500 hover-scale rounded-lg">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#A4D23E] to-[#8BC234] flex items-center justify-center mb-6 shadow-lg">
              <Gift className="w-7 h-7 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Gift Cards & Loyalty
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Built-in gift card system and customizable loyalty programs to boost retention and revenue. Track points and rewards automatically.
            </p>
          </div>

          {/* Customer Portal */}
          <div className="bg-white border-2 border-gray-200 p-8 hover:border-[#14B8A6] hover:shadow-xl transition-all duration-500 hover-scale rounded-lg">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#0d9488] flex items-center justify-center mb-6 shadow-lg">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Customer Portal
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Self-service booking, history tracking, and loyalty points. Empower your customers to manage their appointments and preferences.
            </p>
          </div>

          {/* Payments */}
          <div className="bg-white border-2 border-gray-200 p-8 hover:border-[#14B8A6] hover:shadow-xl transition-all duration-500 hover-scale rounded-lg">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#0d9488] flex items-center justify-center mb-6 shadow-lg">
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Integrated Payments
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Seamless Stripe integration for deposits, no-show fees, and full payments. Accept cards, cash, and gift card redemptions.
            </p>
          </div>

          {/* Customization */}
          <div className="bg-white border-2 border-gray-200 p-8 hover:border-[#A4D23E] hover:shadow-xl transition-all duration-500 hover-scale rounded-lg">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#A4D23E] to-[#8BC234] flex items-center justify-center mb-6 shadow-lg">
              <Palette className="w-7 h-7 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Full Customization
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Custom colors, logos, and form fields. White-label booking pages that match your brand perfectly.
            </p>
          </div>

          {/* Analytics */}
          <div className="bg-white border-2 border-gray-200 p-8 hover:border-[#14B8A6] hover:shadow-xl transition-all duration-500 hover-scale rounded-lg">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#14B8A6] to-[#0d9488] flex items-center justify-center mb-6 shadow-lg">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Business Analytics
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Track revenue, popular services, peak times, and customer behavior. Make data-driven decisions to grow your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
