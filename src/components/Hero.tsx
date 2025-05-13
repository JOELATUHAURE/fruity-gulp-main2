import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
  onBookingClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick, onBookingClick }) => {
  return (
    <section 
      id="home"
      className="relative h-screen overflow-hidden bg-gradient-to-r from-dark-700 to-dark-900"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundAttachment: "fixed" 
        }}
      >
        <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 inline-block"
          >
            <img src="/media/favicon.png" alt="Fruity Gulp Logo" className="w-24 h-24 mx-auto animate-float" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            <span className="block">Fresh.</span> 
            <span className="block text-primary-500">Fruity.</span> 
            <span className="block text-secondary-500">Fantastic.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            Experience the taste of premium fresh fruit juices and smoothies at Mbarara's finest juice bar. We also offer professional event services.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <button 
              onClick={onOrderClick}
              className="btn-primary text-base px-8 py-4"
            >
              Order Your Juice
            </button>
            <button 
              onClick={onBookingClick}
              className="btn-outline text-base px-8 py-4"
            >
              Book Our Event Services
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2" // Adjusted bottom value
        >
          <a 
            href="#juice-menu" 
            className="text-white flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
          >
            <span className="text-sm mb-2">Discover More</span>
            <ArrowDown className="animate-bounce" size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;