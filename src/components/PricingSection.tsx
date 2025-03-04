
import React from 'react';
import './PricingSection.css';
import PricingCard from './PricingCard';
import { CheckIcon } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-gray-50 py-16 md:py-24">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-6">
        <h4 className="pricing-subtitle">PRICING</h4>
        <h2 className="pricing-title">Plans for every need</h2>
        <p className="pricing-description">
          Choose the perfect plan for your storage needs. All plans include our core features.
        </p>
      </div>

      <div className="pricing-cards">
        <PricingCard
          title="Basic"
          price="Free"
          description="Perfect for individuals who need basic file storage."
          buttonText="Sign up for free"
          buttonLink="/get-started"
          buttonStyle="secondary"
          features={[
            '2 GB of storage',
            'Access on all devices',
            'Basic file sharing',
            '30-day version history',
            'Standard support'
          ]}
        />
        
        <PricingCard
          title="Plus"
          price="$9.99"
          period="/month"
          description="For professionals who need more storage and features."
          buttonText="Start your trial"
          buttonLink="/get-started"
          buttonStyle="primary"
          popular={true}
          features={[
            '2 TB of storage',
            'Access on all devices',
            'Advanced sharing controls',
            '180-day version history'
          ]}
        />
        
        <PricingCard
          title="Business"
          price="$19.99"
          period="/month"
          description="For teams and businesses that need advanced collaboration."
          buttonText="Contact sales"
          buttonLink="/contact"
          buttonStyle="secondary"
          features={[
            '5 TB of storage per user',
            'Access on all devices',
            'Advanced admin controls',
            'Unlimited version history',
            '24/7 priority support'
          ]}
        />
      </div>
    </section>
  );
};

export default PricingSection;
