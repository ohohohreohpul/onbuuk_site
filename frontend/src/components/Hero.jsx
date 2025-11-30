import React from 'react';
import { Button } from './ui/button';
import { Calendar, Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-lime-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-medium text-teal-900">Smart Booking Management Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Booking Experience with{' '}
              <span className="text-teal-600">buuk</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              The all-in-one booking management solution designed for salons, spas, and service businesses. Streamline appointments, delight customers, and grow your revenue.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('cta')}
                className="bg-teal-600 hover:bg-teal-700 text-white text-base px-8 py-6 rounded-lg shadow-lg shadow-teal-600/20 hover:shadow-xl hover:shadow-teal-600/30 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('cta')}
                className="border-2 border-gray-300 hover:border-teal-600 text-gray-700 hover:text-teal-600 text-base px-8 py-6 rounded-lg bg-white hover:bg-teal-50 transition-all duration-300"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book a Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-8 items-center">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="text-sm text-gray-600">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="text-sm text-gray-600">Free demo available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="text-sm text-gray-600">Setup in minutes</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-teal-50 to-lime-50 rounded-3xl p-8 shadow-2xl border border-teal-100">
              {/* Mock Calendar Interface */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Appointments</h3>
                      <p className="text-sm text-gray-500">Today, Jan 15</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500">Live</span>
                  </div>
                </div>
                
                {/* Mock Appointment Cards */}
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors cursor-pointer group">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-900 group-hover:text-teal-600 transition-colors">Haircut & Style</p>
                          <p className="text-sm text-gray-500">{item === 1 ? '10:00 AM' : item === 2 ? '11:30 AM' : '2:00 PM'}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">Confirmed</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-lime-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">98%</p>
                    <p className="text-xs text-gray-500">Customer Satisfaction</p>
                  </div>
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