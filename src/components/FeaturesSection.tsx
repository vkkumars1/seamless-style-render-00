
import React, { useEffect, useRef } from 'react';

const FeaturesSection = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span 
            ref={(el) => (elementsRef.current[0] = el)}
            className="uppercase text-cloudbox-blue font-semibold tracking-wider animate-on-scroll"
          >
            FEATURES
          </span>
          <h2 
            ref={(el) => (elementsRef.current[1] = el)}
            className="text-3xl md:text-4xl font-bold mt-2 animate-on-scroll stagger-delay-1"
          >
            Everything you need in one place
          </h2>
          <p 
            ref={(el) => (elementsRef.current[2] = el)}
            className="text-lg text-cloudbox-gray mt-4 max-w-3xl mx-auto animate-on-scroll stagger-delay-2"
          >
            CloudBox provides a complete solution for storing, sharing, and collaborating on your files.
          </p>
        </div>

        <div 
          ref={(el) => (elementsRef.current[3] = el)}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll stagger-delay-3"
        >
          {[
            {
              title: "Secure Storage",
              description: "Store your files securely with enterprise-grade encryption and advanced security features."
            },
            {
              title: "Easy Sharing",
              description: "Share files and folders with anyone, even if they don't have a CloudBox account."
            },
            {
              title: "Real-time Collaboration",
              description: "Work together on documents, spreadsheets, and presentations in real-time."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-cloudbox-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
