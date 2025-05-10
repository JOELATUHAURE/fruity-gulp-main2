import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CalendarClock, Phone } from 'lucide-react';
import { eventServices } from '../data/events';
import { Toast } from './ui/Toast';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialService }) => {
  const [formData, setFormData] = useState({
    eventType: '',
    date: '',
    location: '',
    guests: 1,
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Set initial event type if provided, otherwise use first service
      if (initialService) {
        setFormData(prev => ({ ...prev, eventType: initialService }));
      } else if (!formData.eventType && eventServices.length > 0) {
        setFormData(prev => ({ ...prev, eventType: eventServices[0].name }));
      }
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello Fruity Gulp, I'm planning a ${formData.eventType} on ${formData.date} at ${formData.location} for ${formData.guests} guests. Contact: ${formData.name}, ${formData.phone}, ${formData.email}. Notes: ${formData.notes}`;
    const encodedMessage = encodeURIComponent(message);
    
    const whatsappLink = `https://wa.me/256780844955?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
    
    setShowToast(true);
    onClose();
  };

  const handleCall = () => {
    window.location.href = 'tel:+256780844955';
  };

  // Get tomorrow's date in YYYY-MM-DD format for the min date attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
              onClick={onClose}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="relative min-h-screen flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl mx-auto relative z-10">
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <CalendarClock size={28} className="text-secondary-500 mr-3" />
                      <h2 className="text-2xl font-bold">Request a Quote</h2>
                    </div>
                    <button 
                      onClick={onClose}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Close"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Event Type
                        </label>
                        <select 
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                          required
                        >
                          {eventServices.map(service => (
                            <option key={service.id} value={service.name}>{service.name}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Event Date
                          </label>
                          <input 
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={tomorrowFormatted}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Number of Guests
                          </label>
                          <input 
                            type="number"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            min="1"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Event Location
                        </label>
                        <input 
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name
                          </label>
                          <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input 
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input 
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Notes
                        </label>
                        <textarea 
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Tell us more about your event requirements..."
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <button 
                          type="submit"
                          className="w-full btn-secondary py-4"
                        >
                          Request via WhatsApp
                        </button>
                        <button 
                          type="button"
                          onClick={handleCall}
                          className="w-full btn-primary py-4 flex items-center justify-center"
                        >
                          <Phone size={20} className="mr-2" />
                          Call to Get Quote
                        </button>
                        <p className="text-xs text-gray-500 text-center">
                          You'll be redirected to WhatsApp to finalize your request.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {showToast && (
        <Toast 
          message="Your booking request has been prepared. Complete your request in WhatsApp!"
          onClose={() => setShowToast(false)}
          type="success"
        />
      )}
    </>
  );
};

export default BookingModal;