import React from 'react';
import './TestimonialsSection.css';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Marketing Director, TechCorp',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      quote: '"CloudBox has completely transformed how our team collaborates. The seamless sharing and real-time editing features have boosted our productivity tremendously."'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Independent Consultant',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
      quote: '"I\'ve tried many cloud storage solutions, but CloudBox stands out with its intuitive interface and robust security features. It\'s become an essential tool for my business."'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Freelance Photographer',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      quote: '"The ability to access my files from any device has been a game-changer. CloudBox\'s mobile app is exceptionally well-designed and reliable."'
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <h4 className="testimonials-subtitle">TESTIMONIALS</h4>
      <h2 className="testimonials-title">Trusted by thousands of users worldwide</h2>
      <p className="testimonials-description">
        See what our customers have to say about CloudBox.
      </p>

      <div className="testimonials-cards">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            title={testimonial.title}
            image={testimonial.image}
            quote={testimonial.quote}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
