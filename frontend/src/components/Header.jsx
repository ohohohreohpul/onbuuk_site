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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_613aef5e-d3f5-4251-84fe-d7f3fa1d0a69/artifacts/iwr6139n_buuklogo-1.png" 
              alt="buuk" 
              className="h-8 md:h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              How It Works
            </button>
            <button onClick={() => scrollToSection('why-buuk')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Why buuk
            </button>
            <button onClick={() => scrollToSection('cta')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('cta')}
              className="text-gray-700 hover:text-teal-600 hover:bg-teal-50"
            >
              Book a Demo
            </Button>
            <Button 
              onClick={() => scrollToSection('cta')}
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('features')} className="text-left text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-left text-gray-700 hover:text-teal-600 transition-colors font-medium">
                How It Works
              </button>
              <button onClick={() => scrollToSection('why-buuk')} className="text-left text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Why buuk
              </button>
              <button onClick={() => scrollToSection('cta')} className="text-left text-gray-700 hover:text-teal-600 transition-colors font-medium">
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('cta')}
                  className="w-full"
                >
                  Book a Demo
                </Button>
                <Button 
                  onClick={() => scrollToSection('cta')}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
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