import React from 'react';
import { Calendar, Users, CreditCard, BarChart3 } from 'lucide-react';

const UIShowcase = () => {
  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Dashboard at Your{' '}
            <span className="text-gradient">Fingertips</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Manage bookings, customers, payments, and analytics from one beautiful interface
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white border-2 border-gray-200 p-6 hover:border-[#14B8A6] hover:shadow-xl transition-all hover-scale rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs text-gray-600 font-semibold tracking-wider">TODAY'S BOOKINGS</div>
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">12</div>
            <div className="text-sm text-green-600 font-medium">+3 from yesterday</div>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6 hover:border-[#14B8A6] hover:shadow-xl transition-all hover-scale rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs text-gray-600 font-semibold tracking-wider">REVENUE</div>
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">€1.2K</div>
            <div className="text-sm text-green-600 font-medium">+18% this week</div>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6 hover:border-[#14B8A6] hover:shadow-xl transition-all hover-scale rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs text-gray-600 font-semibold tracking-wider">CUSTOMERS</div>
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">248</div>
            <div className="text-sm text-gray-600 font-medium">12 new this month</div>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6 hover:border-[#14B8A6] hover:shadow-xl transition-all hover-scale rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs text-gray-600 font-semibold tracking-wider">NO-SHOWS</div>
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">3</div>
            <div className="text-sm text-green-600 font-medium">-60% vs last month</div>
          </div>
        </div>

        {/* Main Dashboard Preview */}
        <div className="bg-white border-2 border-gray-200 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all">
          {/* Browser Chrome */}
          <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-gray-200">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="flex-1 ml-4">
              <div className="h-6 bg-gray-100 border border-gray-200 rounded flex items-center px-3 max-w-xs">
                <svg className="w-3 h-3 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs text-gray-600">app.buuk.io/dashboard</span>
              </div>
            </div>
          </div>

          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Dashboard Overview</h3>
              <p className="text-sm text-gray-600 mt-1">Monday, December 2, 2024 • 9:47 AM</p>
            </div>
            <button className="bg-[#14B8A6] hover:bg-[#0d9488] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all">
              + New Booking
            </button>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-bold text-gray-900">Upcoming Appointments</h4>
              <span className="text-sm text-[#14B8A6] font-medium">View All →</span>
            </div>
            
            <div className="space-y-3">
              {[
                { name: 'Emma Wilson', service: 'Haircut & Styling', time: '9:00 AM', status: 'Confirmed', color: 'bg-blue-500' },
                { name: 'James Miller', service: 'Hair Coloring', time: '10:30 AM', status: 'Confirmed', color: 'bg-purple-500' },
                { name: 'Sarah Davis', service: 'Manicure', time: '12:00 PM', status: 'Pending', color: 'bg-pink-500' }
              ].map((appointment, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-[#14B8A6] transition-colors">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className={`w-10 h-10 rounded-lg ${appointment.color} flex items-center justify-center text-white font-bold text-sm`}>
                      {appointment.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{appointment.name}</p>
                      <p className="text-xs text-gray-600">{appointment.service}</p>
                    </div>
                    <div className="text-right mr-4">
                      <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    appointment.status === 'Confirmed' 
                      ? 'text-[#14B8A6] bg-[#14B8A6]/10 border border-[#14B8A6]' 
                      : 'text-yellow-600 bg-yellow-50 border border-yellow-600'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIShowcase;
