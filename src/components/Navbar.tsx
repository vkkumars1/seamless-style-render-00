import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  return <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12', isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent')}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-cloudbox-blue text-2xl font-bold">
          CloudBox
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            <Link to="/features" className="text-gray-600 hover:text-cloudbox-blue transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-cloudbox-blue transition-colors">
              Pricing
            </Link>
            <Link to="/testimonials" className="text-gray-600 hover:text-cloudbox-blue transition-colors">
              Testimonials
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-cloudbox-blue transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/signin" className="text-gray-700 hover:text-cloudbox-blue transition-colors">
              Sign in
            </Link>
            <Link to="/get-started" className="bg-cloudbox-blue hover:bg-cloudbox-darkBlue text-white px-4 py-2 rounded-md transition-colors">
              Get started
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <Link to="/features" className="text-gray-600 hover:text-cloudbox-blue transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-cloudbox-blue transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link to="/testimonials" className="text-gray-600 hover:text-cloudbox-blue transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-cloudbox-blue transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
              <Link to="/signin" className="text-gray-700 hover:text-cloudbox-blue transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                Sign in
              </Link>
              <Link to="/get-started" className="bg-cloudbox-blue hover:bg-cloudbox-darkBlue text-white px-4 py-2 rounded-md transition-colors text-center" onClick={() => setMobileMenuOpen(false)}>
                Get started
              </Link>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navbar;