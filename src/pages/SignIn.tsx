
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Sign in to CloudBox</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cloudbox-blue focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cloudbox-blue focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button
                type="button"
                className="w-full bg-cloudbox-blue hover:bg-cloudbox-darkBlue text-white py-2 rounded-md transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/get-started" className="text-cloudbox-blue hover:text-cloudbox-darkBlue">
                Get started
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
