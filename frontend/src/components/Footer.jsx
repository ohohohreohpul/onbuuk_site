import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img 
              src="https://customer-assets.emergentagent.com/job_613aef5e-d3f5-4251-84fe-d7f3fa1d0a69/artifacts/uk5f7m65_buuklogo.png" 
              alt="buuk" 
              className="h-8 mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 mb-6">
              The all-in-one booking management platform for modern service businesses.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-sm hover:text-teal-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-sm hover:text-teal-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Press Kit</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and features.</p>
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-11 pl-11 pr-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-600 transition-colors"
                />
              </div>
              <button className="px-6 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © {currentYear} buuk. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;