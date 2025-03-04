
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-page">
      <Navbar />
      <main className="pricing-main">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
