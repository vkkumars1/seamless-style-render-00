
import React from 'react';
import './PricingCard.css';
import { CheckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonStyle: 'primary' | 'secondary';
  features: string[];
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period = '',
  description,
  buttonText,
  buttonLink,
  buttonStyle,
  features,
  popular = false
}) => {
  return (
    <div className={`pricing-card ${popular ? 'pricing-card-popular' : ''}`}>
      {popular && <div className="pricing-card-popular-badge">MOST POPULAR</div>}
      <div className="pricing-card-content">
        <h3 className="pricing-card-title">{title}</h3>
        <div className="pricing-card-price-container">
          <span className="pricing-card-price">{price}</span>
          {period && <span className="pricing-card-period">{period}</span>}
        </div>
        <p className="pricing-card-description">{description}</p>
        
        <Link 
          to={buttonLink} 
          className={`pricing-card-button pricing-card-button-${buttonStyle}`}
        >
          {buttonText}
        </Link>
        
        <div className="pricing-card-features">
          <h4 className="pricing-card-features-title">WHAT'S INCLUDED</h4>
          <ul className="pricing-card-features-list">
            {features.map((feature, index) => (
              <li key={index} className="pricing-card-feature-item">
                <CheckIcon className="pricing-card-feature-icon" size={18} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
