import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Check } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Main Content - Centered */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-[#14B8A6]"></div>
            <span className="text-sm text-gray-700">The booking platform salons love</span>
          </div>

          {/* Headline - Large, bold, gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Booking made{' '}
            <span className="bg-gradient-to-r from-[#14B8A6] to-[#0d9488] bg-clip-text text-transparent">
              simple
            </span>
            <br />for salons & spas
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            The all-in-one platform to manage appointments, payments, and customer relationships. Built for beauty professionals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={() => window.location.href = 'https://app.onbuuk.com'}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 h-12 text-base rounded-lg shadow-sm"
            >
              Start free trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 h-12 text-base rounded-lg"
            >
              View demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-[#14B8A6]" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-[#14B8A6]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-[#14B8A6]" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Product Screenshot - Clean, minimal */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-xl border border-gray-200 bg-white p-2 shadow-2xl">
            {/* Browser Chrome */}
            <div className="flex items-center space-x-2 pb-3 border-b border-gray-100">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>
            
            {/* Mockup Content */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-b-lg">
              <div className="grid grid-cols-4 gap-4 mb-6">
                {/* Stats Cards */}
                <div className="col-span-4 sm:col-span-1 bg-white border border-gray-200 rounded-lg p-4">
                  <div className="text-xs text-gray-600 mb-1">Today's Bookings</div>
                  <div className="text-2xl font-bold text-gray-900">12</div>
                  <div className="text-xs text-[#14B8A6] mt-1">+3 from yesterday</div>
                </div>
                <div className="col-span-4 sm:col-span-1 bg-white border border-gray-200 rounded-lg p-4">
                  <div className="text-xs text-gray-600 mb-1">Revenue</div>
                  <div className="text-2xl font-bold text-gray-900">€1.2K</div>
                  <div className="text-xs text-[#14B8A6] mt-1">+18% this week</div>
                </div>
                <div className="col-span-4 sm:col-span-1 bg-white border border-gray-200 rounded-lg p-4">
                  <div className="text-xs text-gray-600 mb-1">Customers</div>
                  <div className="text-2xl font-bold text-gray-900">248</div>
                  <div className="text-xs text-gray-600 mt-1">12 new</div>
                </div>
                <div className="col-span-4 sm:col-span-1 bg-white border border-gray-200 rounded-lg p-4">
                  <div className="text-xs text-gray-600 mb-1">No-shows</div>
                  <div className="text-2xl font-bold text-gray-900">3</div>
                  <div className="text-xs text-[#14B8A6] mt-1">-60% vs last month</div>
                </div>
              </div>

              {/* Calendar Preview */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-semibold text-gray-900">Upcoming Appointments</div>
                  <div className="text-xs text-gray-600">Mon, Dec 2</div>
                </div>
                <div className="space-y-2">
                  {['Emma Wilson • Haircut • 9:00 AM', 'James Miller • Color • 10:30 AM', 'Sarah Davis • Manicure • 12:00 PM'].map((appt, i) => (
                    <div key={i} className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg text-sm">
                      <span className="text-gray-900">{appt}</span>
                      <span className="text-xs text-[#14B8A6] font-medium">Confirmed</span>
                    </div>
                  ))}
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
