import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="location" className="section bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          ref={ref}
        >
          <div className="flex justify-center mb-4">
            <MapPin size={40} className="text-accent-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our juice bar or get in touch to place an order or book our event services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <MapPin size={24} className="text-primary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-gray-600">Opposite Mbaguta, Outskirts of Mbarara City, Uganda</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone size={24} className="text-primary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-600">
                      <a href="tel:+256780844955" className="hover:text-primary-500">+256 780 844 955</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail size={24} className="text-primary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@fruitygulp.com" className="hover:text-primary-500">info@fruitygulp.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock size={24} className="text-primary-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Hours</h4>
                    <p className="text-gray-600">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://goo.gl/maps/T93oFQKqXnxGBxYS6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex justify-center"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="h-full min-h-[400px] rounded-xl overflow-hidden shadow-md relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.898944693815!2d30.648888500000002!3d-0.6150000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d93f6eb2b05e4f%3A0xda0c4a15f19550dd!2sMbarara%2C%20Uganda!5e0!3m2!1sen!2sus!4v1677677932186!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Fruity Gulp Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;