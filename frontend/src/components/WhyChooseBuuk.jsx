import React from 'react';
import { Check, TrendingUp, Users, Zap, Shield, Clock, Star } from 'lucide-react';

const WhyChooseBuuk = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Grow Your Salon & Spa Business',
      description: 'Our booking software helps salon owners, spa managers, and massage studio operators increase revenue by 40% on average. Streamline your appointment scheduling, reduce no-shows with automated reminders, and keep your calendar full with real-time online booking availability.'
    },
    {
      icon: Users,
      title: 'Comprehensive Customer Management',
      description: 'Build lasting relationships with your spa and salon clients. Track customer preferences, booking history, loyalty points, and treatment notes all in one place. Send personalized promotions and birthday offers to boost retention and drive repeat bookings.'
    },
    {
      icon: Clock,
      title: '24/7 Online Booking System',
      description: 'Never miss a booking opportunity. Your salon or spa is open for appointments around the clock with our online booking software. Customers can book haircuts, massages, facials, and treatments anytime, from any device, without a phone call.'
    },
    {
      icon: Shield,
      title: 'Secure Payment Processing',
      description: 'Accept payments confidently with integrated Stripe payments. Process deposits, no-show fees, and full payments seamlessly. Our booking system for salons and spas handles gift card purchases, package deals, and membership subscriptions with ease.'
    },
    {
      icon: Zap,
      title: 'Automated Scheduling & Reminders',
      description: 'Save hours every week with smart automation. Our salon booking software automatically sends SMS and email reminders, manages staff schedules, prevents double-bookings, and handles cancellations. Focus on providing amazing treatments, not admin work.'
    },
    {
      icon: Star,
      title: 'Customer Loyalty & Rewards',
      description: 'Build a thriving community of repeat customers with built-in loyalty programs. Reward clients with points for every visit, create custom reward tiers, and track customer lifetime value. Turn first-time visitors into loyal brand advocates.'
    }
  ];

  return (
    <section className="py-24 px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-full mb-6">
            <Check className="w-4 h-4 text-[#14B8A6]" />
            <span className="text-sm text-gray-700">Why Choose Buuk</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Complete Booking Software for Salons, Spas & Massage Studios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built specifically for beauty and wellness businesses, our appointment booking system helps you manage everything from scheduling to payments, customer relationships to staff management—all from one powerful platform.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="bg-gray-50 border-2 border-gray-200 p-8 hover:border-[#14B8A6] hover:shadow-xl transition-all duration-500 rounded-xl"
              >
                <div className="w-14 h-14 rounded-xl bg-[#14B8A6] flex items-center justify-center mb-6 shadow-md">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* SEO-Rich Bottom Content */}
        <div className="mt-16 bg-[#14B8A6]/5 border-2 border-[#14B8A6]/20 p-8 lg:p-12 rounded-xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Everything You Need in a Salon & Spa Booking System
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700 text-sm">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                <span>Salon appointment booking software with calendar sync</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                <span>Spa scheduling software with treatment packages</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                <span>Massage therapy booking system with therapist management</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                <span>Beauty salon software with inventory tracking</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                <span>Hair salon booking app for mobile clients</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                <span>Wellness center management software</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                <span>Day spa booking platform with gift cards</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                <span>Nail salon scheduling with service customization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBuuk;