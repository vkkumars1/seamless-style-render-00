
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Testimonials</h1>
        <p className="text-lg text-gray-600">Customer testimonials coming soon.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
