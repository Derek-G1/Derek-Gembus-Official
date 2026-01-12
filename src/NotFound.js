import React, { useEffect } from 'react';
import { setPageMeta } from './utils/seo';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    setPageMeta({
      title: '404 | Derek Gembus',
      description: 'Page not found.',
      canonicalPath: window.location?.pathname || '/'
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      {/* Main Content Centered */}
      <div className="flex-grow flex items-center justify-center p-4 pt-24">
        <div className="text-center max-w-lg">
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-purple-500/10 rounded-full border border-purple-500/30 animate-pulse">
              <AlertTriangle className="w-16 h-16 text-purple-500" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            404
          </h1>
          
          <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <Link 
            to="/" 
            className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold"
          >
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;