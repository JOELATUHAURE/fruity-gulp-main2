import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Send } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa'; // Use react-icons for TikTok
import emailjs from 'emailjs-com';

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img src="/media/favicon.png" alt="Fruity Gulp Logo" className="h-10 w-10" />
              <span className="ml-2 text-xl font-heading font-bold text-primary-500">
                Fruity Gulp
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium fresh juice & smoothie shop in Mbarara City. We also provide professional event services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100063763727233&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/fruitygulpjuice?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/FruityGulpJuice?t=FLZNN8U767Q_V8G3JCDNRg&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.tiktok.com/@fruitygulpjuice?_t=ZM-8urgeMh1D0R&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FaTiktok size={20} />
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
            <form className="flex" onSubmit={async (e) => {
              e.preventDefault();
              setStatus('sending');
              const SERVICE_ID = 'service_jmgk3pj';
              const TEMPLATE_ID = 'template_ruwwxwh';
              const USER_ID = '9K3ebWUZbP9pmqH3H';
              try {
                await emailjs.send(SERVICE_ID, TEMPLATE_ID, { newsletter_email: email }, USER_ID);
                setStatus('success');
                setEmail('');
              } catch (error) {
                setStatus('error');
              }
            }}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-full text-dark-700 w-full focus:outline-none"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                disabled={status === 'sending'}
              />
              <button 
                type="submit" 
                className="bg-primary-500 hover:bg-primary-600 rounded-r-full px-4 flex items-center justify-center transition-colors"
                aria-label="Subscribe"
                disabled={status === 'sending'}
              >
                <Send size={18} />
              </button>
              {status === 'success' && <span className="ml-2 text-green-500">Subscribed!</span>}
              {status === 'error' && <span className="ml-2 text-red-500">Error. Try again.</span>}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            {currentYear} Fruity Gulp. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm flex flex-wrap gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;