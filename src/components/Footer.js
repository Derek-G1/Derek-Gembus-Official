import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        
        {/* NEW 3-COLUMN EXTERNAL LINKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-gray-800 text-center items-center justify-items-center">
          
          {/* Column 1: Code & Community */}
          <div className="flex flex-col items-center justify-center w-full">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Code & Community</h4>
            <ul className="space-y-3 text-center w-full">
              <li>
                <a href="https://github.com/Derek-G1" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/users/32499186/derek-gembus" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Stack Overflow
                </a>
              </li>
              <li>
                <a href="https://medium.com/@derekgembus" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Medium
                </a>
              </li>
              <li>
                <a href="https://peerlist.io/derekgembus" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Peerlist
                </a>
              </li>
              <li>
                <a href="https://gravatar.com/derekgembus1" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Gravatar
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Professional & Freelance */}
          <div className="flex flex-col items-center justify-center w-full">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Professional & Freelance</h4>
            <ul className="space-y-3 text-center w-full">
              <li>
                <a href="https://www.linkedin.com/in/derekgembus/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://wellfound.com/u/derek-gembus" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Wellfound
                </a>
              </li>
              <li>
                <a href="https://contra.com/derek_kf4qf2cc/work?r=derek_kf4qf2cc" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Contra
                </a>
              </li>
              <li>
                <a href="https://about.me/derekgembus" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  About.me
                </a>
              </li>
              <li>
                <a href="https://beacons.ai/derekgembus" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Beacons
                </a>
              </li>
              <li>
                <a href="https://www.freelancermap.com/profile/it-support-specialist-und-data-engineer-with-python-programming-expertise" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Freelancermap
                </a>
              </li>
              <li>
                <a href="https://www.freelancer.com/u/derek176?frm=derek176&sb=t" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Freelancer
                </a>
              </li>
              <li>
                <a href="https://www.upwork.com/freelancers/~0122373814fc418105" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Upwork
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Gigs & Support */}
          <div className="flex flex-col items-center justify-center w-full">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Gigs & Support</h4>
            <ul className="space-y-3 text-center w-full">
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
                <a href="https://x.com/DerekGembus" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  X
                </a>
              </li>
              <li>
                <a href="https://www.threads.com/@derekg216" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Threads
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@derekgembus" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/user/1258631055" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Spotify
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* EXISTING INTERNAL SITE LINKS & COPYRIGHT */}
        <div className="text-center">
          <div className="pt-2 flex flex-wrap justify-center items-center gap-3 text-center sm:flex-row sm:space-y-0 sm:space-x-6">
            
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>

            <span className="hidden sm:inline text-gray-700">|</span>

            <Link to="/cookie-policy" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
              Cookie Policy
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

          <p className="mt-2 text-sm text-gray-500 w-full text-center">
            Based in Cleveland, Ohio
          </p>
          <p className="mt-8 text-sm text-gray-600">
            © {currentYear} Derek Gembus | Software Developer, Data Engineer, Web Developer & Website Designer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;