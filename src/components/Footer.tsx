
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">CloudBox</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-cloudbox-blue transition-colors">About us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-cloudbox-blue transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-cloudbox-blue transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-cloudbox-blue transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-cloudbox-blue transition-colors">Pricing</Link></li>
              <li><Link to="/security" className="text-gray-600 hover:text-cloudbox-blue transition-colors">Security</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 hover:text-cloudbox-blue transition-colors">Contact</Link></li>
              <li><Link to="/help" className="text-gray-600 hover:text-cloudbox-blue transition-colors">Help center</Link></li>
              <li><Link to="/status" className="text-gray-600 hover:text-cloudbox-blue transition-colors">Status</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-cloudbox-blue transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-cloudbox-blue transition-colors">Terms</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-cloudbox-blue transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-gray-500 text-center">© {new Date().getFullYear()} CloudBox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
