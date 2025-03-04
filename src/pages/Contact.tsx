
import React from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
