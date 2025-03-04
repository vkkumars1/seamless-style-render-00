
import React from 'react';
import './TestimonialCard.css';

interface TestimonialCardProps {
  name: string;
  title: string;
  image: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  image,
  quote
}) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-content">
        <div className="testimonial-profile">
          <img src={image} alt={name} className="testimonial-image" />
          <div className="testimonial-info">
            <h3 className="testimonial-name">{name}</h3>
            <p className="testimonial-title">{title}</p>
          </div>
        </div>
        <p className="testimonial-quote">{quote}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
