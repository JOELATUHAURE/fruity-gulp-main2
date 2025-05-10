import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onBookingClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookingClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu & Order', href: '#juice-menu' },
    { name: 'Events & Bookings', href: '#events' },
    { name: 'About Us', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#location' },
  ];

  return (
    <header className={isScrolled ? 'navbar-fixed' : 'navbar-transparent'}>
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="#home" className="flex items-center">
            <img src="/favicon.svg" alt="Fruity Gulp Logo" className="h-10 w-10" />
            <span className={`ml-2 text-xl font-heading font-bold ${isScrolled ? 'text-primary-500' : 'text-white'}`}>
              Fruity Gulp
            </span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-primary-500 transition-colors ${isScrolled ? 'text-dark-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onBookingClick}
            className="btn-primary text-sm"
          >
            Book Now
          </button>
        </motion.nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className={`p-2 rounded-md ${isScrolled ? 'text-dark-700' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-dark-700 py-2 text-sm font-medium hover:text-primary-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                closeMenu();
                onBookingClick();
              }}
              className="btn-primary text-sm w-full"
            >
              Book Now
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;