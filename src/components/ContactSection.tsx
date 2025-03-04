
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Cloud } from 'lucide-react';

const ContactSection = () => {
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
    <section id="contact" className="py-16 md:py-24 bg-[#1e2535] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div 
            ref={(el) => (elementsRef.current[0] = el)}
            className="animate-on-scroll"
          >
            <div className="flex items-center mb-4">
              <Cloud className="h-6 w-6 text-cloudbox-blue mr-2" />
              <h3 className="text-xl font-bold">CloudBox</h3>
            </div>
            <p className="text-gray-300 mb-2">Secure cloud storage for all your files.</p>
            <p className="text-gray-300">Access anywhere, anytime.</p>
          </div>

          <div 
            ref={(el) => (elementsRef.current[1] = el)}
            className="animate-on-scroll stagger-delay-1"
          >
            <h3 className="text-lg font-bold mb-4">PRODUCT</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-gray-300 hover:text-cloudbox-blue transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-cloudbox-blue transition-colors">Pricing</Link></li>
              <li><Link to="/security" className="text-gray-300 hover:text-cloudbox-blue transition-colors">Security</Link></li>
              <li><Link to="/integrations" className="text-gray-300 hover:text-cloudbox-blue transition-colors">Integrations</Link></li>
            </ul>
          </div>
          
          <div 
            ref={(el) => (elementsRef.current[2] = el)}
            className="animate-on-scroll stagger-delay-2"
          >
            <h3 className="text-lg font-bold mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-cloudbox-blue transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-cloudbox-blue transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cloudbox-blue transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cloudbox-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div 
            ref={(el) => (elementsRef.current[3] = el)}
            className="animate-on-scroll stagger-delay-3"
          >
            <h3 className="text-lg font-bold mb-4">SUPPORT</h3>
            <ul className="space-y-3">
              <li><Link to="/help" className="text-gray-300 hover:text-cloudbox-blue transition-colors">Help Center</Link></li>
              <li><Link to="/community" className="text-gray-300 hover:text-cloudbox-blue transition-colors">Community</Link></li>
              <li><Link to="/status" className="text-gray-300 hover:text-cloudbox-blue transition-colors">Status</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-cloudbox-blue transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
