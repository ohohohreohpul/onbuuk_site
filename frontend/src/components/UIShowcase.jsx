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
                  <div className="text-lg font-bold text-gray-900">Dashboard Overview</div>
                  <div className="text-xs text-gray-500 mt-1">Monday, December 2, 2024 • 9:47 AM</div>
                </div>
                <div className="h-10 px-4 bg-[#14B8A6] flex items-center justify-center text-white text-sm font-medium">
                  + New Booking
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8">
                <div className="glass border border-gray-200 p-3 md:p-4 animate-scale-in hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div className="text-xs text-gray-500 font-medium">TODAY</div>
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-100 flex items-center justify-center">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">12</div>
                  <div className="text-xs text-green-600 font-medium">+3 from yesterday</div>
                </div>

                <div className="glass border border-gray-200 p-3 md:p-4 animate-scale-in hover:scale-105 transition-transform" style={{animationDelay: '0.1s'}}>
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div className="text-xs text-gray-500 font-medium">REVENUE</div>
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-green-100 flex items-center justify-center">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">€1.2K</div>
                  <div className="text-xs text-green-600 font-medium">+18% this week</div>
                </div>

                <div className="glass border border-gray-200 p-3 md:p-4 animate-scale-in hover:scale-105 transition-transform" style={{animationDelay: '0.2s'}}>
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div className="text-xs text-gray-500 font-medium">CUSTOMERS</div>
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-purple-100 flex items-center justify-center">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">248</div>
                  <div className="text-xs text-gray-500 font-medium">12 new this month</div>
                </div>

                <div className="glass border border-gray-200 p-3 md:p-4 animate-scale-in hover:scale-105 transition-transform" style={{animationDelay: '0.3s'}}>
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div className="text-xs text-gray-500 font-medium">NO-SHOWS</div>
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-red-100 flex items-center justify-center">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">3</div>
                  <div className="text-xs text-green-600 font-medium">-60% vs last month</div>
                </div>
              </div>

              {/* Calendar/Schedule View */}
              <div className="bg-white border border-gray-200 p-6 mt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-bold text-gray-900">WEEKLY SCHEDULE</div>
                  <div className="flex items-center space-x-2">
                    <button className="w-6 h-6 border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <span className="text-xs text-gray-600 font-medium">Dec 2-8</span>
                    <button className="w-6 h-6 border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xs font-medium text-gray-500 mb-2">{day}</div>
                      <div className={`h-16 ${
                        i === 2 || i === 3 
                          ? 'bg-[#E5F8F6] border-2 border-[#14B8A6]' 
                          : i === 5 || i === 6
                          ? 'bg-gray-100 border border-gray-200'
                          : 'bg-white border border-gray-200'
                      } flex flex-col items-center justify-center`}>
                        <div className="text-lg font-bold text-gray-900">{i + 2}</div>
                        {(i === 0 || i === 1 || i === 2 || i === 3 || i === 4) && (
                          <div className="text-xs text-[#14B8A6] font-medium">{[8, 12, 15, 11, 6][i]}+</div>
                        )}
                      </div>
                    </div>
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
          {/* Feature 1 - Analytics */}
          <div className="bg-white border-2 border-gray-200 p-6 hover:border-[#14B8A6] transition-colors">
            <div className="w-12 h-12 bg-[#E5F8F6] border border-[#14B8A6] flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-[#14B8A6]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Real-time Analytics</h3>
            <p className="text-sm text-gray-600 mb-4">Track performance metrics and customer insights instantly</p>
            
            {/* Mini Chart */}
            <div className="flex items-end space-x-1 h-20">
              {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                <div key={i} className="flex-1 bg-[#14B8A6] opacity-70 hover:opacity-100 transition-opacity" style={{ height: `${height}%` }}></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Mon</span>
              <span>Sun</span>
            </div>
          </div>

          {/* Feature 2 - Customer Management */}
          <div className="bg-white border-2 border-gray-200 p-6 hover:border-[#A4D23E] transition-colors">
            <div className="w-12 h-12 bg-[#FFF9E5] border border-[#A4D23E] flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#A4D23E]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Customer Management</h3>
            <p className="text-sm text-gray-600 mb-4">Detailed profiles, history, and notes for every customer</p>
            
            {/* Customer Stats */}
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500 flex items-center justify-center text-white text-xs font-bold">A</div>
                  <span className="text-xs font-medium text-gray-900">Active</span>
                </div>
                <span className="text-xs font-bold text-gray-900">248</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 flex items-center justify-center text-white text-xs font-bold">N</div>
                  <span className="text-xs font-medium text-gray-900">New</span>
                </div>
                <span className="text-xs font-bold text-gray-900">42</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-purple-500 flex items-center justify-center text-white text-xs font-bold">V</div>
                  <span className="text-xs font-medium text-gray-900">VIP</span>
                </div>
                <span className="text-xs font-bold text-gray-900">18</span>
              </div>
            </div>
          </div>

          {/* Feature 3 - Smart Scheduling */}
          <div className="bg-white border-2 border-gray-200 p-6 hover:border-[#14B8A6] transition-colors">
            <div className="w-12 h-12 bg-[#E5F8F6] border border-[#14B8A6] flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-[#14B8A6]" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Scheduling</h3>
            <p className="text-sm text-gray-600 mb-4">Automated reminders and conflict detection</p>
            
            {/* Reminders */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 p-2 bg-[#E5F8F6] border border-[#14B8A6]">
                <div className="w-6 h-6 bg-[#14B8A6] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-gray-900">24h SMS Reminder</div>
                  <div className="text-[10px] text-gray-600">98% delivery rate</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-gray-50 border border-gray-200">
                <div className="w-6 h-6 bg-gray-300 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-gray-900">Email Confirmation</div>
                  <div className="text-[10px] text-gray-600">Instant delivery</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-gray-50 border border-gray-200">
                <div className="w-6 h-6 bg-gray-300 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-gray-900">2h Before Reminder</div>
                  <div className="text-[10px] text-gray-600">Reduce no-shows</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIShowcase;