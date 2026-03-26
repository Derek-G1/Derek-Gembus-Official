import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { setPageMeta } from './utils/seo';
import { ArrowLeft, Lock, Globe, Shield, Users } from 'lucide-react';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta({
      title: 'Cookie Policy | Derek Gembus',
      description: 'How derekgembus.com uses cookies and tracking technologies to keep the site secure, functional, and measurable.',
      canonicalPath: '/cookie-policy'
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="pt-24 p-6 md:p-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="mb-6 bg-gray-900/40 border border-gray-800 rounded-2xl p-4 text-sm text-gray-300">
            <h2 className="text-xs uppercase tracking-wide text-gray-400 mb-3">Related pages</h2>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link to="/privacy" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">Privacy Policy</Link>
              <span className="text-sm text-gray-500">Cookie Policy</span>
              <Link to="/terms" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">Terms & Process</Link>
              <Link to="/site-terms" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">Website Terms</Link>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="mb-6 text-gray-400 text-lg">Last updated: March 26, 2026</p>

          <section className="mb-10 text-gray-300 leading-relaxed space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Shield className="w-6 h-6 mr-3 text-purple-400" />
              What cookies are
            </h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. They help the site remember settings, keep sessions secure, and track performance metrics across visits.
            </p>
          </section>

          <section className="mb-10 text-gray-300 leading-relaxed space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Globe className="w-6 h-6 mr-3 text-blue-400" />
              How this site uses cookies
            </h2>
            <p>
              derekgembus.com relies on cookies to keep the experience fast, stable, and personalized. They help maintain secure logins, remember your preferences, and ensure forms work properly when you reach out for a quote or other services.
            </p>
          </section>

          <section className="mb-10 text-gray-300 leading-relaxed space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Lock className="w-6 h-6 mr-3 text-yellow-400" />
              Essential and site-function cookies
            </h2>
            <p>
              These cookies are necessary for core site functionality. They keep the layout consistent, support the navigation experience, and help the contact and quote forms submit correctly. The site cannot run without them.
            </p>
          </section>

          <section className="mb-10 text-gray-300 leading-relaxed space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Users className="w-6 h-6 mr-3 text-green-400" />
              Analytics and performance cookies
            </h2>
            <p>
              We use analytics cookies to understand how people find and explore derekgembus.com. That data helps prioritize improvements, monitor uptime, and measure engagement so we can keep the portfolio and services easy to discover.
            </p>
          </section>

          <section className="mb-10 text-gray-300 leading-relaxed space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Shield className="w-6 h-6 mr-3 text-cyan-400" />
              Third-party services and cookies
            </h2>
            <p>
              Some cookies are set by trusted third-party tools (for example, analytics dashboards or form providers). These services manage their own privacy controls and we link to their notices where available.
            </p>
          </section>

          <section className="mb-10 text-gray-300 leading-relaxed space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Globe className="w-6 h-6 mr-3 text-violet-400" />
              Controlling or disabling cookies
            </h2>
            <p>
              You can block or delete cookies using your browser settings. Most browsers allow you to remove all cookies, disable future cookies, or turn on private browsing. Some features of derekgembus.com may be limited if cookies are disabled.
            </p>
          </section>

          <section className="border-t border-gray-800 pt-8 text-gray-300 space-y-4">
            <h2 className="text-xl font-bold text-white">Contact</h2>
            <p>
              Questions about this Cookie Policy? Email <a className="text-purple-400 hover:underline" href="mailto:support@derekgembus.com">support@derekgembus.com</a> and I will reply as soon as possible.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
