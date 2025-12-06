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
    
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-12 lg:px-24">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="https://customer-assets.emergentagent.com/job_613aef5e-d3f5-4251-84fe-d7f3fa1d0a69/artifacts/uk5f7m65_buuklogo.png" 
              alt="buuk" 
              className="h-8 sharp"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavigation('features')} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </button>
            <button onClick={() => handleNavigation('pricing')} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </button>
            <button onClick={() => navigate('/blog')} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={() => window.location.href = 'https://app.onbuuk.com'}
              className="bg-gray-900 hover:bg-gray-800 text-white text-sm px-5 h-9 rounded-lg transition-all"
            >
              Get Started →
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => handleNavigation('features')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </button>
              <button onClick={() => handleNavigation('pricing')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </button>
              <button onClick={() => navigate('/blog')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                Blog
              </button>
              <div className="pt-4">
                <Button 
                  onClick={() => window.location.href = 'https://app.onbuuk.com'}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                >
                  Get Started →
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