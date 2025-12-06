import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ArrowRight, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock form submission
    console.log('Form submitted:', formData);
    toast.success('Thanks! We\'ll contact you shortly.');
    
    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        businessName: '',
        message: ''
      });
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="cta" className="py-24 px-8 lg:px-16 bg-[#003E37]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#14B8A6]" />
              <span className="text-sm text-white">Get Started Today</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Booking Experience?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Join hundreds of salons and spas using buuk to streamline operations and delight customers.
            </p>
            
            {/* Big CTA Button */}
            <Button
              size="lg"
              onClick={() => window.location.href = 'https://app.onbuuk.com'}
              className="bg-[#14B8A6] hover:bg-[#0d9488] text-white font-bold px-10 h-16 text-lg mb-8 w-full sm:w-auto shadow-lg transition-all rounded-lg"
            >
              Start Free Trial Now
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            
            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded bg-[#14B8A6] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg">Start for free, no credit card required</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded bg-[#14B8A6] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg">Setup in under 30 minutes</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded bg-[#14B8A6] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg">Upgrade anytime as you grow</span>
              </li>
            </ul>
            
            <p className="text-sm text-gray-400">Or fill out the form to request a personalized demo →</p>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white border-2 border-gray-200 p-8 lg:p-10 shadow-xl rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Request a Demo
            </h3>
            <p className="text-gray-600 mb-8">Want a personalized walkthrough? We'll reach out to you.</p>
            
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
                  className="h-12 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#14B8A6] rounded-lg"
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
                  className="h-12 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#14B8A6] rounded-lg"
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
                  className="h-12 bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#14B8A6] rounded-lg"
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
                  className="resize-none bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#14B8A6] rounded-lg"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-[#14B8A6] hover:bg-[#0d9488] text-white h-14 text-base font-semibold shadow-lg transition-all rounded-lg"
              >
                {loading ? 'Sending...' : 'Request Demo'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;