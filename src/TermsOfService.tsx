import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="min-h-screen bg-white py-12 flex flex-col justify-between">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-block mb-6 text-primary-600 hover:underline font-semibold border border-primary-600 px-4 py-2 rounded transition-colors">&larr; Back to Home</Link>
        <h1 className="text-3xl font-bold mb-6 text-primary-600">Terms of Service</h1>
      <p className="mb-4">Welcome to Fruity Gulp! By using our services, you agree to the following terms and conditions. Please read them carefully.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Services Offered</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Fresh fruit juice and smoothie sales at our shop in Mbarara City.</li>
        <li>Ushering and coffee services for weddings, corporate functions, and other events across the region.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Orders & Payments</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Orders can be placed at our shop, via our website, or by phone.</li>
        <li>Payment is required upon order confirmation unless otherwise agreed.</li>
        <li>We reserve the right to refuse or cancel orders at our discretion.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Event Bookings</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Bookings for events should be made in advance to ensure availability.</li>
        <li>Cancellations must be communicated at least 48 hours before the event for a full refund.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Liability</h2>
      <p className="mb-4">Fruity Gulp is not liable for delays or failures caused by circumstances beyond our control, such as weather or supplier issues.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p>If you have questions about these terms, please visit us at our shop in the outskirts of Mbarara City opposite former Radio West next to La Grande Mall, or call +256780844955.</p>
    </div>
    <footer className="w-full text-center py-6 border-t border-gray-200 mt-8 text-gray-500 text-sm">
      &copy; {currentYear} Fruity Gulp. All rights reserved.
    </footer>
  </section>
  );
};

export default TermsOfService;
