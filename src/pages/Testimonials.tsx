
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      <Navbar />
      <main className="testimonials-main">
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
