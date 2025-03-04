
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a202e] py-8 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-gray-400 text-center">© {new Date().getFullYear()} CloudBox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
