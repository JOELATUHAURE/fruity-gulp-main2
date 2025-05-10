import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MapPin, Loader2 } from 'lucide-react';
import { JuiceProduct } from '../types';
import { juiceProducts } from '../data/products';
import { branches, findNearestBranch, calculateDistance } from '../data/branches';
import { Toast } from './ui/Toast';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: JuiceProduct | null;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, product }) => {
  const [selectedProduct, setSelectedProduct] = useState<JuiceProduct | null>(null);
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [formData, setFormData] = useState({
    size: 'small',
    quantity: 1,
    name: '',
    phone: '',
    notes: '',
    branch: branches[0].id,
    latitude: 0,
    longitude: 0,
  });
  const [showToast, setShowToast] = useState(false);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      if (product) {
        setSelectedProduct(product);
      } else if (juiceProducts.length > 0) {
        setSelectedProduct(juiceProducts[0]);
      }
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'branch') {
      const branch = branches.find(b => b.id === value);
      if (branch) {
        setSelectedBranch(branch);
        if (formData.latitude && formData.longitude) {
          calculateDeliveryFee(
            formData.latitude,
            formData.longitude,
            branch.location.latitude,
            branch.location.longitude
          );
        }
      }
    }
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const newProduct = juiceProducts.find(p => p.id === selectedId) || null;
    setSelectedProduct(newProduct);
  };

  const calculateDeliveryFee = (userLat: number, userLng: number, branchLat: number, branchLng: number) => {
    const distance = calculateDistance(userLat, userLng, branchLat, branchLng);
    const baseDistance = 3800; // meters
    const baseFee = 2000; // UGX
    const multiplier = Math.ceil(distance / baseDistance);
    setDeliveryFee(baseFee * multiplier);
  };

  const getLocation = async () => {
    setIsLoadingLocation(true);
    setLocationError('');
    
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      const nearestBranch = findNearestBranch(latitude, longitude);
      
      setSelectedBranch(nearestBranch);
      setFormData(prev => ({
        ...prev,
        branch: nearestBranch.id,
        latitude,
        longitude
      }));

      calculateDeliveryFee(
        latitude,
        longitude,
        nearestBranch.location.latitude,
        nearestBranch.location.longitude
      );
    } catch (error) {
      console.error('Error getting location:', error);
      setLocationError('Unable to access your location. Please enable location services.');
      setDeliveryFee(2000); // Default delivery fee
    } finally {
      setIsLoadingLocation(false);
    }
  };

  const getPrice = () => {
    if (!selectedProduct) return 0;
    const size = formData.size as keyof typeof selectedProduct.prices;
    return selectedProduct.prices[size] * formData.quantity;
  };

  const getTotalPrice = () => {
    return getPrice() + deliveryFee;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedProduct) return;
    
    const size = formData.size === 'small' ? '1L' : formData.size === 'medium' ? '3L' : '5L';
    const message = `Hi Fruity Gulp ${selectedBranch.name}! I'd like to order ${selectedProduct.name} - ${formData.quantity}x ${size}. Name: ${formData.name}, Phone: ${formData.phone}. Additional Notes: ${formData.notes}. Total Price (including ${deliveryFee.toLocaleString()} UGX delivery): ${getTotalPrice().toLocaleString()} UGX`;
    const encodedMessage = encodeURIComponent(message);
    
    const whatsappLink = `https://wa.me/256780844955?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
    
    setShowToast(true);
    onClose();
  };

  const handleCall = () => {
    window.location.href = `tel:${selectedBranch.phone}`;
  };

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
                    <h2 className="text-2xl font-bold">Customize Your Order</h2>
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
                          Select Branch
                        </label>
                        <select 
                          name="branch"
                          value={formData.branch}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        >
                          {branches.map(branch => (
                            <option key={branch.id} value={branch.id}>
                              {branch.name} - {branch.address}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Select Juice
                        </label>
                        <select 
                          value={selectedProduct?.id || ''}
                          onChange={handleProductChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        >
                          {juiceProducts.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Size
                          </label>
                          <select 
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            required
                          >
                            <option value="small">1 Liter</option>
                            <option value="medium">3 Liters</option>
                            <option value="large">5 Liters</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Quantity
                          </label>
                          <input 
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            min="1"
                            max="10"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <input 
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Delivery Location
                        </label>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={getLocation}
                            className="w-full btn-secondary py-3 flex items-center justify-center"
                            disabled={isLoadingLocation}
                          >
                            {isLoadingLocation ? (
                              <Loader2 size={20} className="animate-spin mr-2" />
                            ) : (
                              <MapPin size={20} className="mr-2" />
                            )}
                            {isLoadingLocation ? 'Getting Location...' : 'Get My Location'}
                          </button>
                          {locationError && (
                            <p className="text-red-500 text-sm mt-1">{locationError}</p>
                          )}
                        </div>
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
                          placeholder="Any special instructions or preferences?"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Subtotal:</span>
                          <span className="font-bold text-gray-700">
                            {getPrice().toLocaleString()} UGX
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Delivery Fee:</span>
                          <span className="font-bold text-gray-700">
                            {deliveryFee.toLocaleString()} UGX
                          </span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                          <span className="font-medium">Total:</span>
                          <span className="text-xl font-bold text-primary-600">
                            {getTotalPrice().toLocaleString()} UGX
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <button 
                          type="submit"
                          className="w-full btn-primary py-4"
                        >
                          Order via WhatsApp
                        </button>
                        <button 
                          type="button"
                          onClick={handleCall}
                          className="w-full btn-secondary py-4 flex items-center justify-center"
                        >
                          <Phone size={20} className="mr-2" />
                          Call to Order
                        </button>
                        <p className="text-xs text-gray-500 text-center">
                          You'll be redirected to WhatsApp to confirm your order.
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
          message="Your order message has been prepared. Complete your order in WhatsApp!"
          onClose={() => setShowToast(false)}
          type="success"
        />
      )}
    </>
  );
};

export default OrderModal;