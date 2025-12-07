import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Check, Calendar, Users, CreditCard, BarChart3, Zap, ArrowRight } from 'lucide-react';

const BookingManagement = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calendar,
      title: 'Smart Appointment Scheduling',
      description: 'Automate your booking process with intelligent calendar management and real-time availability.'
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Track customer history, preferences, and booking patterns in one centralized system.'
    },
    {
      icon: CreditCard,
      title: 'Integrated Payments',
      description: 'Accept payments, deposits, and no-show fees seamlessly with built-in Stripe integration.'
    },
    {
      icon: BarChart3,
      title: 'Business Analytics',
      description: 'Make data-driven decisions with comprehensive reports and performance insights.'
    }
  ];

  const benefits = [
    'Reduce no-shows by up to 60% with automated SMS and email reminders',
    'Save 10+ hours per week on manual scheduling and admin tasks',
    'Increase bookings with 24/7 online booking availability',
    'Improve customer satisfaction with self-service portal',
    'Manage multiple locations from a single dashboard',
    'Accept online payments and reduce payment friction'
  ];

  const useCases = [
    { title: 'Appointment Booking', link: '/solutions/appointment-booking-software', description: 'Perfect for service businesses needing flexible appointment scheduling' },
    { title: 'Calendar Scheduling', link: '/solutions/calendar-scheduling-app', description: 'Sync with Google Calendar and manage availability in real-time' },
    { title: 'Salon Booking', link: '/solutions/salon-booking-apps', description: 'Specialized features for salons, spas, and beauty businesses' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-[#14B8A6]/10 border border-[#14B8A6] px-3 py-1.5 rounded-full mb-6">
              <Zap className="w-4 h-4 text-[#14B8A6]" />
              <span className="text-sm text-[#14B8A6] font-semibold">#1 Booking Management Software</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Booking Management Software That Grows Your Business
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Complete booking management software for service businesses. Automate appointments, accept payments, and manage customers—all in one powerful platform trusted by 500+ businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => window.location.href = 'https://app.onbuuk.com'}
                className="bg-[#14B8A6] hover:bg-[#0d9488] text-white px-8 h-14 text-base font-semibold rounded-lg shadow-lg"
              >
                Start Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/#pricing')}
                className="border-2 border-gray-300 text-gray-900 hover:border-[#14B8A6] px-8 h-14 text-base rounded-lg"
              >
                View Pricing
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#14B8A6]" />
                <span>Free forever plan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#14B8A6]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#14B8A6]" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in Booking Management Software
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From appointment scheduling to payment processing, buuk provides all the tools you need to manage your bookings efficiently.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-50 border-2 border-gray-200 p-8 rounded-xl hover:border-[#14B8A6] hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-xl bg-[#14B8A6] flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose buuk Booking Management Software?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Built specifically for service-based businesses, our booking management software helps you automate operations, reduce no-shows, and grow revenue.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to streamline your bookings?</h3>
              <p className="text-gray-600 mb-6">Join 500+ businesses using buuk to manage their appointments and grow revenue.</p>
              <Button
                onClick={() => window.location.href = 'https://app.onbuuk.com'}
                className="w-full bg-[#14B8A6] hover:bg-[#0d9488] text-white h-12 font-semibold rounded-lg"
              >
                Get Started Free
              </Button>
              <p className="text-sm text-gray-500 text-center mt-4">No credit card required • Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Booking Software for Every Use Case
            </h2>
            <p className="text-xl text-gray-600">
              Explore specialized booking solutions for your specific business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                onClick={() => navigate(useCase.link)}
                className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-[#14B8A6] hover:shadow-xl transition-all cursor-pointer group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#14B8A6] transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <span className="text-[#14B8A6] font-semibold flex items-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-12 lg:px-24 bg-[#003E37] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Managing Bookings More Efficiently Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of businesses using buuk to automate their booking process
          </p>
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

export default BookingManagement;
