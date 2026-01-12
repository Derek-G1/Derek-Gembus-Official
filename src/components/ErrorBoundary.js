import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
          <div className="text-center max-w-lg">
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-red-500/10 rounded-full border border-red-500/30">
                <AlertTriangle className="w-16 h-16 text-red-500" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Something Went Wrong
            </h1>
            
            <p className="text-gray-400 mb-8 text-lg">
              We're sorry, but something unexpected happened. Please try refreshing the page or return to the homepage.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Refresh Page
              </button>
              
              <Link 
                to="/" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-purple-500 hover:bg-purple-500/20 transition-all font-semibold"
                onClick={() => this.setState({ hasError: false, error: null })}
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
