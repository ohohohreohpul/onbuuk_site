import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ImageCTA = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1080&fit=crop&auto=format" 
          alt="Salon" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl animate-slide-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Clients Deserve
            <br />
            <span className="text-[#14B8A6]">Seamless Booking</span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Give them the premium experience they expect. Real-time availability, instant confirmations, and automated reminders - all in one beautiful interface.
          </p>

          {/* Benefits */}
          <div className="space-y-4 mb-10">
            {[
              'Book 24/7 from any device',
              'Automatic SMS & email reminders',
              'Reduce no-shows by 80%',
              'Increase revenue by 42%'
            ].map((benefit, i) => (
              <div key={i} className="flex items-center space-x-3 text-white animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CheckCircle2 className="w-6 h-6 text-[#14B8A6] flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <Button 
            size="lg"
            onClick={() => window.location.href = 'https://app.onbuuk.com'}
            className="bg-[#14B8A6] hover:bg-[#0d9488] text-white font-bold px-10 h-16 text-lg group shadow-2xl"
          >
            Start Growing Today
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImageCTA;