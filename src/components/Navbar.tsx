
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to merge class names (replacing cn utility)
  const mergeClasses = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <nav className={mergeClasses('fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12', isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent')}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-cloudbox-blue text-2xl font-bold">
          CloudBox
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-12">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-cloudbox-blue transition-colors cursor-pointer">
              Features
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-cloudbox-blue transition-colors cursor-pointer">
              Pricing
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-cloudbox-blue transition-colors cursor-pointer">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-cloudbox-blue transition-colors cursor-pointer">
              Contact
            </button>
          </div>
        </div>
        
        {/* Sign in and Get started buttons - Right aligned */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/signin" className="text-gray-700 hover:text-cloudbox-blue transition-colors">
            Sign in
          </Link>
          <Link to="/get-started" className="bg-cloudbox-blue hover:bg-cloudbox-darkBlue text-white px-4 py-2 rounded-md transition-colors">
            Get started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-cloudbox-blue transition-colors py-2 cursor-pointer text-left">
              Features
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-cloudbox-blue transition-colors py-2 cursor-pointer text-left">
              Pricing
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-cloudbox-blue transition-colors py-2 cursor-pointer text-left">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-cloudbox-blue transition-colors py-2 cursor-pointer text-left">
              Contact
            </button>
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
              <Link to="/signin" className="text-gray-700 hover:text-cloudbox-blue transition-colors py-2">
                Sign in
              </Link>
              <Link to="/get-started" className="bg-cloudbox-blue hover:bg-cloudbox-darkBlue text-white px-4 py-2 rounded-md transition-colors text-center">
                Get started
              </Link>
            </div>
          </div>
        </div>}
    </nav>;
};

export default Navbar;
