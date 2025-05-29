import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="min-h-screen bg-white py-12 flex flex-col justify-between">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-block mb-6 text-primary-600 hover:underline font-semibold border border-primary-600 px-4 py-2 rounded transition-colors">&larr; Back to Home</Link>
        <h1 className="text-3xl font-bold mb-6 text-primary-600">Privacy Policy</h1>
      <p className="mb-4">At Fruity Gulp, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our juice and smoothie shop, event services, and website.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal details you provide when placing orders or making inquiries (such as name, phone number, and delivery address).</li>
        <li>Information collected via cookies and analytics tools when you use our website.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To process and deliver your juice, smoothie, coffee, or ushering orders.</li>
        <li>To communicate with you regarding your orders or inquiries.</li>
        <li>To improve our services and website experience.</li>
        <li>To notify you about new products, offers, or events (if you opt in).</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <p className="mb-4">We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Third-Party Sharing</h2>
      <p className="mb-4">We do not sell or share your personal information with third parties except as required to fulfill your orders or comply with legal obligations.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="mb-4">You may request to view, update, or delete your personal information at any time by contacting us.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>If you have questions about our Privacy Policy, please contact us at our shop in the outskirts of Mbarara City opposite former Radio West next to La Grande Mall, or call +256780844955.</p>
    </div>
    <footer className="w-full text-center py-6 border-t border-gray-200 mt-8 text-gray-500 text-sm">
      &copy; {currentYear} Fruity Gulp. All rights reserved.
    </footer>
  </section>
  );
};

export default PrivacyPolicy;
