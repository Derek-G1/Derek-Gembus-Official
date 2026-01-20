import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6">
            
            <Link
              to="/privacy"
              className="text-sm text-gray-500 hover:text-purple-400 transition-colors"
            >
              Privacy Policy
            </Link>

            <span className="hidden sm:inline text-gray-700">|</span>

            <Link
              to="/terms"
              className="text-sm text-gray-500 hover:text-purple-400 transition-colors"
            >
              Terms & Process
            </Link>

            <span className="hidden sm:inline text-gray-700">|</span>

            <Link
              to="/site-terms"
              className="text-sm text-gray-500 hover:text-purple-400 transition-colors"
            >
              Website Terms
            </Link>

            <span className="hidden sm:inline text-gray-700">|</span>

            <Link
              to="/process"
              className="text-sm text-gray-500 hover:text-purple-400 transition-colors"
            >
              Process
            </Link>

            {/* ✅ NEW LINK ADDED HERE */}
            <span className="hidden sm:inline text-gray-700">|</span>

            <Link
              to="/forms"
              className="text-sm text-gray-500 hover:text-purple-400 transition-colors"
            >
              Forms
            </Link>

            <span className="hidden sm:inline text-gray-700">|</span>

            <Link
              to="/pay"
              className="text-sm text-gray-500 hover:text-purple-400 transition-colors"
            >
              Make a Payment
            </Link>

          </div>

          <p className="mt-8 text-sm text-gray-600">
            © {currentYear} Derek Gembus | Software Developer, Data Engineer, Web Developer & Website Designer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
