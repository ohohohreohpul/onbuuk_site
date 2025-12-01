import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    toast.success('Thanks! We\'ll contact you shortly.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      businessName: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="cta" className="py-24 bg-[#14B8A6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Booking Experience?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join hundreds of salons and spas using buuk to streamline operations and delight customers.
            </p>
            
            {/* Big CTA Button */}
            <Button
              size="lg"
              onClick={() => window.location.href = 'https://app.onbuuk.com'}
              className="bg-white text-[#14B8A6] hover:bg-gray-100 font-bold px-10 h-16 text-lg mb-8 w-full sm:w-auto group"
            >
              Start Free Trial Now
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#14B8A6]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg">14-day free trial, no credit card required</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#14B8A6]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg">Setup in under 30 minutes</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#14B8A6]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg">Cancel anytime, no questions asked</span>
              </li>
            </ul>
            
            <p className="text-sm text-white/80">Or fill out the form to request a personalized demo →</p>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white border-2 border-gray-900 p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Get Started Today
            </h3>
            <p className="text-gray-600 mb-8">Fill out the form and we'll get you set up</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="h-12 border-2 border-gray-200 focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="h-12 border-2 border-gray-200 focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Business Name *
                </label>
                <Input
                  id="businessName"
                  name="businessName"
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your Salon Name"
                  className="h-12 border-2 border-gray-200 focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Tell us about your needs (Optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are you looking for in a booking system?"
                  rows={4}
                  className="resize-none border-2 border-gray-200 focus:border-[#14B8A6]"
                />
              </div>

              <Button 
                type="button"
                size="lg"
                onClick={() => window.location.href = 'https://app.onbuuk.com'}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white h-14 text-base font-medium group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;