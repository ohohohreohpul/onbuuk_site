import React from 'react';
import { Calendar, Users, CreditCard, BarChart3 } from 'lucide-react';

const UIShowcase = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Dashboard at Your Fingertips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manage bookings, customers, payments, and analytics from one beautiful interface
          </p>
        </div>

        {/* Bento Grid - Dashboard Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Large Dashboard Preview - Spans 3 columns */}
          <div className="lg:col-span-3 bg-gray-50 border-2 border-gray-200 p-8">
            {/* Mockup Browser Chrome */}
            <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-gray-200">
              <div className="w-3 h-3 bg-gray-300"></div>
              <div className="w-3 h-3 bg-gray-300"></div>
              <div className="w-3 h-3 bg-gray-300"></div>
              <div className="flex-1"></div>
              <div className="h-3 bg-gray-200 w-32"></div>
            </div>

            {/* Dashboard Content */}
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-4 bg-gray-300 w-32 mb-2"></div>
                  <div className="h-3 bg-gray-200 w-48"></div>
                </div>
                <div className="h-10 w-32 bg-[#14B8A6]"></div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-4 mt-8">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-white border border-gray-200 p-4">
                    <div className="h-3 bg-gray-200 w-16 mb-3"></div>
                    <div className="h-6 bg-gray-900 w-20 mb-2"></div>
                    <div className="h-2 bg-gray-200 w-12"></div>
                  </div>
                ))}
              </div>

              {/* Calendar/Schedule View */}
              <div className="bg-white border border-gray-200 p-6 mt-6">
                <div className="grid grid-cols-7 gap-2">
                  {[...Array(35)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-16 ${i % 7 === 3 || i % 7 === 4 ? 'bg-[#E5F8F6] border border-[#14B8A6]' : 'bg-gray-50 border border-gray-200'}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Side Stats */}
          <div className="space-y-6">
            {/* Stat Card 1 */}
            <div className="bg-[#14B8A6] border-2 border-gray-900 p-6">
              <div className="w-12 h-12 bg-white flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-[#14B8A6]" />
              </div>
              <p className="text-3xl font-bold text-white mb-2">2,543</p>
              <p className="text-sm text-white/80">Total Bookings</p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-[#A4D23E] border-2 border-gray-900 p-6">
              <div className="w-12 h-12 bg-white flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#A4D23E]" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">1,248</p>
              <p className="text-sm text-gray-900/80">Active Customers</p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-gray-900 border-2 border-gray-900 p-6">
              <div className="w-12 h-12 bg-white flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-gray-900" />
              </div>
              <p className="text-3xl font-bold text-white mb-2">$48.2K</p>
              <p className="text-sm text-white/80">Monthly Revenue</p>
            </div>
          </div>
        </div>

        {/* Bottom Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {/* Feature 1 */}
          <div className="bg-white border-2 border-gray-200 p-6 hover:border-[#14B8A6] transition-colors">
            <div className="w-12 h-12 bg-[#E5F8F6] border border-[#14B8A6] flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-[#14B8A6]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Real-time Analytics</h3>
            <p className="text-sm text-gray-600">Track performance metrics and customer insights instantly</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white border-2 border-gray-200 p-6 hover:border-[#A4D23E] transition-colors">
            <div className="w-12 h-12 bg-[#FFF9E5] border border-[#A4D23E] flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#A4D23E]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Customer Management</h3>
            <p className="text-sm text-gray-600">Detailed profiles, history, and notes for every customer</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white border-2 border-gray-200 p-6 hover:border-[#14B8A6] transition-colors">
            <div className="w-12 h-12 bg-[#E5F8F6] border border-[#14B8A6] flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-[#14B8A6]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Scheduling</h3>
            <p className="text-sm text-gray-600">Automated reminders and conflict detection</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIShowcase;