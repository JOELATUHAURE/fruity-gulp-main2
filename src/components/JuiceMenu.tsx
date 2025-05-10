import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { juiceProducts } from '../data/products';
import { JuiceProduct } from '../types';
import { ArrowRight, Droplets } from 'lucide-react';

interface JuiceMenuProps {
  onOrderClick: (product: JuiceProduct) => void;
}

const JuiceMenu: React.FC<JuiceMenuProps> = ({ onOrderClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'all', name: 'All Juices' },
    { id: 'fresh', name: 'Fresh Juices' },
    { id: 'immune', name: 'Immune Boosters' },
    { id: 'detox', name: 'Detox Blends' },
    { id: 'seasonal', name: 'Seasonal Specials' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? juiceProducts 
    : juiceProducts.filter(product => product.category === activeCategory);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="juice-menu" className="section bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          ref={ref}
        >
          <div className="flex justify-center mb-4">
            <Droplets size={40} className="text-primary-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Daily Fresh Juice Selection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our juices are made fresh daily using locally sourced fruits. Choose from our wide variety of 
            refreshing and nutritious options.
          </p>
        </motion.div>

        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map(product => (
            <motion.div 
              key={product.id}
              variants={item}
              className="card group"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 h-12 overflow-hidden">{product.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="text-sm bg-gray-100 rounded-full px-3 py-1">1L: {product.prices.small.toLocaleString()} UGX</span>
                  <span className="text-sm bg-gray-100 rounded-full px-3 py-1">3L: {product.prices.medium.toLocaleString()} UGX</span>
                  <span className="text-sm bg-gray-100 rounded-full px-3 py-1">5L: {product.prices.large.toLocaleString()} UGX</span>
                </div>
                <button 
                  onClick={() => onOrderClick(product)}
                  className="flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors"
                >
                  Customize & Order 
                  <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JuiceMenu;