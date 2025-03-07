
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
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
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="space-y-6 md:pr-8">
          <h1 
            ref={(el) => (elementsRef.current[0] = el)}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-on-scroll"
          >
            <span className="block text-cloudbox-black">Store, share and</span>
            <span className="block text-cloudbox-blue">collaborate</span>
          </h1>
          <p
            ref={(el) => (elementsRef.current[1] = el)}
            className="text-lg text-cloudbox-gray animate-on-scroll stagger-delay-1"
          >
            Securely store, share, and collaborate on files and folders from your mobile device, tablet, or computer.
          </p>
          <div 
            ref={(el) => (elementsRef.current[2] = el)}
            className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 animate-on-scroll stagger-delay-2"
          >
            <Link
              to="/get-started"
              className="bg-cloudbox-blue hover:bg-cloudbox-darkBlue text-white px-6 py-3 rounded-md transition-all font-medium text-center"
            >
              Get started
            </Link>
            <Link
              to="/learn-more"
              className="flex items-center justify-center sm:justify-start text-cloudbox-blue hover:text-cloudbox-darkBlue font-medium transition-colors group"
            >
              Learn more <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div 
          ref={(el) => (elementsRef.current[3] = el)}
          className="animate-on-scroll stagger-delay-3 relative"
        >
          {/* Border styling div */}
          <div className="absolute -top-4 -right-4 bottom-4 left-4 border-2 border-gray-300 rounded-lg"></div>
          
          {/* Main image with increased size */}
          <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
            <img
              src="/lovable-uploads/027d819f-2231-492d-8ace-a3ce40169f93.png"
              alt="Developers working together in modern office environment"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-cloudbox-blue rounded-full opacity-20 z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
