import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        
        {/* NEW 3-COLUMN EXTERNAL LINKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-gray-800 text-center md:text-left">
          
          {/* Column 1: Code & Community */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Code & Community</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/Derek-G1" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                {/* Note: Paste your full Stack Overflow profile URL here */}
                <a href="https://stackoverflow.com/users/3249918..." target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Stack Overflow
                </a>
              </li>
              <li>
                <a href="https://medium.com/@derekgembus" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Medium
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Professional & Freelance */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Professional & Freelance</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://linkedin.com/in/derekgembus" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                {/* Note: Paste your full Freelancermap URL here */}
                <a href="https://www.freelancermap.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Freelancermap
                </a>
              </li>
              <li>
                {/* Note: Paste your full Freelancer URL here */}
                <a href="https://www.freelancer.com/u/derek176" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Freelancer
                </a>
              </li>
              <li>
                {/* Note: Paste your full Upwork URL here */}
                <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Upwork
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Gigs & Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Gigs & Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.fiverr.com/sellers/derekg2" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Fiverr
                </a>
              </li>
              <li>
                <a href="https://kwork.com/user/derekgembus" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Kwork
                </a>
              </li>
              <li>
                <a href="https://paypal.me/DerekGembus" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  PayPal
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* EXISTING INTERNAL SITE LINKS & COPYRIGHT */}
        <div className="text-center">
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6">
            
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>

            <span className="hidden sm:inline text-gray-700">|</span>

            <Link to="/terms" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
              Terms & Process
            </Link>

            <span className="hidden sm:inline text-gray-700">|</span>

            <Link to="/site-terms" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
              Website Terms
            </Link>

            <span className="hidden sm:inline text-gray-700">|</span>

            <Link to="/process" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
              Process
            </Link>

            <span className="hidden sm:inline text-gray-700">|</span>

            <Link to="/forms" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
              Forms
            </Link>

            <span className="hidden sm:inline text-gray-700">|</span>

            <Link to="/pay" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
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