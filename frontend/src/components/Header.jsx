import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    setIsMenuOpen(false);
    
    // If we're on homepage, just scroll
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      navigate(`/#${sectionId}`);
      // Scroll after navigation
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/buuklogo-new.png" 
              alt="buuk" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button onClick={() => handleNavigation('features')} className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm">
              Features
            </button>
            <button onClick={() => handleNavigation('how-it-works')} className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm">
              How It Works
            </button>
            <button onClick={() => handleNavigation('integrations')} className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm">
              Integrations
            </button>
            <button onClick={() => handleNavigation('pricing')} className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm">
              Pricing
            </button>
            <button onClick={() => navigate('/blog')} className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm">
              Blog
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={() => window.location.href = 'https://app.onbuuk.com'}
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
              <button onClick={() => handleNavigation('features')} className="text-left text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Features
              </button>
              <button onClick={() => handleNavigation('how-it-works')} className="text-left text-gray-700 hover:text-gray-900 transition-colors font-medium">
                How It Works
              </button>
              <button onClick={() => handleNavigation('integrations')} className="text-left text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Integrations
              </button>
              <button onClick={() => handleNavigation('pricing')} className="text-left text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Pricing
              </button>
              <button onClick={() => navigate('/blog')} className="text-left text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Blog
              </button>
              <div className="pt-4">
                <Button 
                  onClick={() => window.location.href = 'https://app.onbuuk.com'}
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