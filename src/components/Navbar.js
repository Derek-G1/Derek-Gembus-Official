import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Menu, X } from 'lucide-react';

const Navbar = ({ isHome = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navClass = isHome 
    ? `fixed w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'}`
    : 'fixed w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800';

  const navLinks = [
  { href: '/#about', label: 'About', isAnchor: true },
  { href: '/services', label: 'Services', isAnchor: false },
  { href: '/#skills', label: 'Skills', isAnchor: true },
  { href: '/#experience', label: 'Experience', isAnchor: true },
  { href: '/#projects', label: 'Projects', isAnchor: true },
  { href: '/quote', label: 'Get a Quote', isAnchor: false },
];

  return (
    <nav className={navClass} role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            aria-label="Derek Gembus - Home"
          >
            Derek Gembus
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link 
                  key={link.href}
                  to={link.href} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
            
            <Link 
              to="/pay" 
              className="flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/30 transition-all hover:scale-105"
              aria-label="Make a Payment"
            >
              <DollarSign className="w-4 h-4 mr-1" aria-hidden="true" />
              <span className="font-semibold text-sm">Pay</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="flex flex-col space-y-4 py-4 border-t border-gray-800">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors py-2 text-lg"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-300 hover:text-white transition-colors py-2 text-lg"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            <Link 
              to="/pay" 
              className="flex items-center justify-center px-4 py-3 rounded-full bg-green-500/10 text-green-400 hover:bg-green-500/20 border border-green-500/30 transition-all mt-2"
              onClick={handleLinkClick}
              aria-label="Make a Payment"
            >
              <DollarSign className="w-5 h-5 mr-2" aria-hidden="true" />
              <span className="font-semibold">Make a Payment</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
