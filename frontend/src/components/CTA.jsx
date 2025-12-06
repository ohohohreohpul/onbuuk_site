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
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Full-width Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1650044252595-cacd425982ff" 
          alt="Luxury spa treatment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f766e]/95 via-[#0f766e]/80 to-[#0f766e]/85"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in">
            <div className="inline-flex items-center space-x-2 glass-teal px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#14B8A6]" />
              <span className="text-sm font-medium text-white">Get Started Today</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your{' '}
              <span className="text-gradient">Booking Experience?</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-300 mb-8 leading-relaxed">
              Join hundreds of salons and spas using buuk to streamline operations and delight customers.
            </p>
            
            {/* Big CTA Button */}
            <Button
              size="lg"
              onClick={() => window.location.href = 'https://app.onbuuk.com'}
              className="bg-[#14B8A6] hover:bg-[#0d9488] text-white font-bold px-10 h-16 text-lg mb-8 w-full sm:w-auto group shadow-lg hover:shadow-[#14B8A6]/50 transition-all"
            >
              Start Free Trial Now
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded bg-[#14B8A6] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-lg">14-day free trial, no credit card required</span>
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
                <span className="text-lg">Cancel anytime, no questions asked</span>
              </li>
            </ul>
            
            <p className="text-sm text-gray-400">Or fill out the form to request a personalized demo →</p>
          </div>

          {/* Right Content - Form */}
          <div className="glass-strong border border-white/20 p-8 lg:p-10 shadow-2xl animate-slide-in">
            <h3 className="text-2xl font-bold text-white mb-2">
              Request a Demo
            </h3>
            <p className="text-gray-400 mb-8">Want a personalized walkthrough? We'll reach out to you.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
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
                  className="h-12 glass border border-white/20 text-white placeholder:text-gray-500 focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
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
                  className="h-12 glass border border-white/20 text-white placeholder:text-gray-500 focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm font-semibold text-white mb-2">
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
                  className="h-12 glass border border-white/20 text-white placeholder:text-gray-500 focus:border-[#14B8A6]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Tell us about your needs (Optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are you looking for in a booking system?"
                  rows={4}
                  className="resize-none glass border border-white/20 text-white placeholder:text-gray-500 focus:border-[#14B8A6]"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-[#14B8A6] hover:bg-[#0d9488] text-white h-14 text-base font-semibold shadow-lg hover:shadow-[#14B8A6]/50 transition-all"
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