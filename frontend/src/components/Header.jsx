import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_613aef5e-d3f5-4251-84fe-d7f3fa1d0a69/artifacts/iwr6139n_buuklogo-1.png" 
              alt="buuk" 
              className="h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm">
              How It Works
            </button>
            <button onClick={() => scrollToSection('integrations')} className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm">
              Integrations
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm">
              Pricing
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('cta')}
              className="bg-[#14B8A6] hover:bg-[#0d9488] text-white font-medium px-6 h-11"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('features')} className="text-left text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-left text-gray-700 hover:text-gray-900 transition-colors font-medium">
                How It Works
              </button>
              <button onClick={() => scrollToSection('integrations')} className="text-left text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Integrations
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Pricing
              </button>
              <div className="pt-4">
                <Button 
                  onClick={() => scrollToSection('cta')}
                  className="w-full bg-[#14B8A6] hover:bg-[#0d9488] text-white"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;