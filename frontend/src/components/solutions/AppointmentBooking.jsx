import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Check, Calendar, Clock, Bell, Users, ArrowRight } from 'lucide-react';

const AppointmentBooking = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Appointment Booking Software for Service Businesses
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Simplify appointment scheduling with powerful appointment booking software. Let customers book 24/7, reduce no-shows by 60%, and manage your calendar effortlessly.
            </p>
            <Button
              size="lg"
              onClick={() => window.location.href = 'https://app.onbuuk.com'}
              className="bg-[#14B8A6] hover:bg-[#0d9488] text-white px-8 h-14 font-semibold rounded-lg shadow-lg"
            >
              Start Free <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Appointment Booking Made Simple</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-xl">
              <Calendar className="w-12 h-12 text-[#14B8A6] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Online Booking 24/7</h3>
              <p className="text-gray-600">Let customers book appointments anytime, anywhere with real-time availability updates.</p>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-xl">
              <Bell className="w-12 h-12 text-[#14B8A6] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Reminders</h3>
              <p className="text-gray-600">Reduce no-shows with automatic SMS and email reminders before each appointment.</p>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-xl">
              <Users className="w-12 h-12 text-[#14B8A6] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Staff Management</h3>
              <p className="text-gray-600">Manage multiple staff members, set individual schedules, and assign appointments efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Why Choose buuk for Appointment Booking?</h2>
          <div className="space-y-4">
            {[
              'Real-time calendar synchronization with Google Calendar',
              'Customizable booking forms with custom fields',
              'Mobile-friendly booking widget for your website',
              'Accept deposits and payments during booking',
              'Recurring appointment support',
              'Customer history and notes tracking'
            ].map((benefit, i) => (
              <div key={i} className="flex items-center space-x-3 bg-white p-4 rounded-lg border border-gray-200">
                <Check className="w-6 h-6 text-[#14B8A6] flex-shrink-0" />
                <span className="text-gray-700 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-12 lg:px-24 bg-[#003E37] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Appointment Booking?</h2>
          <p className="text-xl mb-8">Start accepting appointments online today with buuk</p>
          <Button
            size="lg"
            onClick={() => window.location.href = 'https://app.onbuuk.com'}
            className="bg-white text-[#14B8A6] hover:bg-gray-100 px-10 h-14 text-lg font-semibold rounded-lg shadow-lg"
          >
            Get Started Free
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AppointmentBooking;