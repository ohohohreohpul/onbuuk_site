import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const PremiumHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(164, 210, 62, 0.3) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-dark border border-white/20 px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-[#14B8A6]" />
            <span className="text-sm font-medium text-white">Trusted by 500+ Salons & Spas</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Elevate Your Salon
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#A4D23E]">To The Next Level</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            The premium booking management platform designed for growth. Automate appointments, delight customers, and scale your business effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg"
              onClick={() => window.location.href = 'https://app.onbuuk.com'}
              className="glass-strong border border-white/20 text-white hover:bg-white/20 font-medium px-10 h-16 text-lg group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="glass-dark border-2 border-white/30 text-white hover:bg-white/10 font-medium px-10 h-16 text-lg"
            >
              <Play className="mr-2 w-6 h-6" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '500+', label: 'Active Salons' },
              { value: '50K+', label: 'Monthly Bookings' },
              { value: '98%', label: 'Satisfaction' },
              { value: '€2M+', label: 'Revenue Processed' }
            ].map((stat, i) => (
              <div key={i} className="glass-dark border border-white/10 p-6 animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;