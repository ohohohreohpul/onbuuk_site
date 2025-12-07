import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Check, Scissors, Gift, Users, CreditCard, BarChart3, ArrowRight } from 'lucide-react';

const SalonBooking = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Salon Booking Apps Built for Beauty Businesses
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Complete salon booking app with everything you need: online booking, staff management, gift cards, loyalty programs, and POS. Trusted by 500+ salons, spas, and beauty businesses.
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
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Everything Salons Need</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-xl">
              <Scissors className="w-12 h-12 text-[#14B8A6] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Service Management</h3>
              <p className="text-gray-600">Manage unlimited services, treatments, and packages with custom pricing and duration.</p>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-xl">
              <Users className="w-12 h-12 text-[#14B8A6] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Staff Scheduling</h3>
              <p className="text-gray-600">Manage multiple stylists, set individual availability, and track performance.</p>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-xl">
              <Gift className="w-12 h-12 text-[#14B8A6] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gift Cards & Loyalty</h3>
              <p className="text-gray-600">Built-in gift card system and customizable loyalty programs to increase retention.</p>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-xl">
              <CreditCard className="w-12 h-12 text-[#14B8A6] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrated Payments</h3>
              <p className="text-gray-600">Accept payments, deposits, and tips with built-in Stripe payment processing.</p>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-xl">
              <BarChart3 className="w-12 h-12 text-[#14B8A6] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Analytics</h3>
              <p className="text-gray-600">Track revenue, popular services, peak times, and staff performance with detailed reports.</p>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-xl">
              <Scissors className="w-12 h-12 text-[#14B8A6] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Branding</h3>
              <p className="text-gray-600">Full white-label with custom domain, logo, and colors to match your salon brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Salons Choose buuk</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Built Specifically for Salons</h3>
              <div className="space-y-4">
                {[
                  'Multiple service categories (hair, nails, spa, massage)',
                  'Commission tracking for stylists',
                  'Product inventory management',
                  'No-show fee collection',
                  'Recurring appointments for regular clients',
                  'SMS reminders reduce no-shows by 60%'
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Growing Your Salon Today</h3>
              <p className="text-gray-600 mb-6">Join 500+ salons using buuk to increase bookings and streamline operations.</p>
              <Button
                onClick={() => window.location.href = 'https://app.onbuuk.com'}
                className="w-full bg-[#14B8A6] hover:bg-[#0d9488] text-white h-12 font-semibold rounded-lg"
              >
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-12 lg:px-24 bg-[#003E37] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Salon Booking?</h2>
          <p className="text-xl mb-8">Start accepting online bookings and grow your salon revenue today</p>
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

export default SalonBooking;