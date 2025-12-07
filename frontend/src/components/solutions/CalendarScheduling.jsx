import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Check, Calendar, RefreshCw, Clock, Smartphone, ArrowRight } from 'lucide-react';

const CalendarScheduling = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Calendar Scheduling App That Syncs With Your Workflow
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Smart calendar scheduling app with Google Calendar integration. Manage availability, prevent double-bookings, and keep your schedule organized across all devices.
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
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Powerful Calendar Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-xl">
              <RefreshCw className="w-12 h-12 text-[#14B8A6] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Google Calendar Sync</h3>
              <p className="text-gray-600">Two-way sync with Google Calendar keeps your schedule updated across all platforms.</p>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-xl">
              <Clock className="w-12 h-12 text-[#14B8A6] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Time Slots</h3>
              <p className="text-gray-600">Intelligent scheduling that adapts to your availability and prevents conflicts.</p>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-xl">
              <Smartphone className="w-12 h-12 text-[#14B8A6] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Access</h3>
              <p className="text-gray-600">Manage your calendar from anywhere with our mobile-responsive interface.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Perfect For</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Consultants & Coaches', desc: 'Schedule one-on-one sessions with clients' },
              { title: 'Healthcare Professionals', desc: 'Manage patient appointments efficiently' },
              { title: 'Beauty & Wellness', desc: 'Coordinate staff schedules and treatments' },
              { title: 'Professional Services', desc: 'Book meetings and consultations' }
            ].map((useCase, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-12 lg:px-24 bg-[#003E37] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Simplify Your Calendar Scheduling Today</h2>
          <p className="text-xl mb-8">Get started with buuk's calendar scheduling app in minutes</p>
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

export default CalendarScheduling;