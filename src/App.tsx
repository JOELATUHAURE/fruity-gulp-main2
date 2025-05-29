import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import Header from './components/Header';
import Hero from './components/Hero';
import JuiceMenu from './components/JuiceMenu';
import EventsSection from './components/EventsSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import BookingModal from './components/BookingModal';
import { Toaster } from './components/ui/Toaster';
import { JuiceProduct } from './types';

function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<JuiceProduct | null>(null);

  const handleOrderClick = (product: JuiceProduct) => {
    setSelectedProduct(product);
    setIsOrderModalOpen(true);
  };

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <Toaster />
              <Header onBookingClick={handleBookingClick} />
              <Hero onOrderClick={() => handleOrderClick(null)} onBookingClick={handleBookingClick} />
              <JuiceMenu onOrderClick={handleOrderClick} />
              <EventsSection onBookingClick={handleBookingClick} />
              <AboutSection />
              <TeamSection />
              <ReviewsSection />
              <LocationSection />
              <Footer />
              <OrderModal
                isOpen={isOrderModalOpen}
                onClose={() => setIsOrderModalOpen(false)}
                product={selectedProduct}
              />
              <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
              />
            </div>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;