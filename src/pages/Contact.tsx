
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-lg text-gray-600">Contact information coming soon.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
