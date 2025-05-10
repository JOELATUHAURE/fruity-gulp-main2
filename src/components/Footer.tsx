import React from 'react';
import { Facebook, Instagram, Twitter, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img src="/favicon.svg" alt="Fruity Gulp Logo" className="h-10 w-10" />
              <span className="ml-2 text-xl font-heading font-bold text-primary-500">
                Fruity Gulp
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium fresh juice & smoothie shop in Mbarara City. We also provide professional event services.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#juice-menu" className="text-gray-400 hover:text-white transition-colors">Menu & Order</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-white transition-colors">Events & Bookings</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#location" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">
                Opposite Mbaguta, Outskirts of Mbarara City, Uganda
              </li>
              <li>
                <a href="tel:+256780844955" className="text-gray-400 hover:text-white transition-colors">
                  +256 780 844 955
                </a>
              </li>
              <li>
                <a href="mailto:info@fruitygulp.com" className="text-gray-400 hover:text-white transition-colors">
                  info@fruitygulp.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for promotions, news and updates.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-full text-dark-700 w-full focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-primary-500 hover:bg-primary-600 rounded-r-full px-4 flex items-center justify-center transition-colors"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Fruity Gulp. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm flex flex-wrap gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;