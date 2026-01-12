import React, { useEffect } from 'react';
import { setPageMeta } from './utils/seo';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  ArrowLeft, Layout, Server, Smartphone,
  CheckCircle, Globe, Clock, Cpu, ArrowRight,
  BarChart, Zap, Search, TrendingUp, Shield
} from 'lucide-react';

const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta({
      title: 'Website Design & Development Services | Derek Gembus',
      description: 'Custom-coded websites, hosting, analytics dashboards, and custom software solutions. Transparent pricing with upgrades available.',
      canonicalPath: '/services'
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Main Content Container with Padding for Navbar */}
      <div className="pt-24 p-4 md:p-8">

        {/* Sub-Navigation / Breadcrumbs */}
        <div className="flex justify-between items-center max-w-7xl mx-auto mb-12">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-purple-400 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link to="/pay" className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all">
            Make a Payment
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* UPDATED H1 FOR SEO */}
          <h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Website Design & Development Services
          </h1>

          <p className="text-xl text-gray-300 text-center mb-6 max-w-4xl mx-auto">
            I build modern, high-performance websites and custom software that look great and work flawlessly on every device.
            Most projects are <strong>custom-coded</strong> by default for speed and flexibility. WordPress is available if you prefer a CMS workflow.
          </p>
          <p className="text-gray-400 text-center mb-16 max-w-4xl mx-auto">
            Pricing scales based on <strong>number of pages</strong>, integrations, and overall complexity — you can start with a smaller package and upgrade over time.
          </p>

          {/* --- WEB DEVELOPMENT PACKAGES --- */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Layout className="w-8 h-8 text-blue-400 mr-3" />
              {/* UPDATED H2 FOR SEO */}
              <h2 className="text-3xl font-bold text-white">Website Design & Development Packages</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 align-top">

             {/* 1-Page Package */}
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-blue-500 transition-all flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-2">Single Page</h3>
                <p className="text-gray-400 text-xs mb-4">Portfolios & Digital Cards</p>
                <div className="text-3xl font-bold text-blue-400 mb-6">$500</div>
                <ul className="space-y-3 mb-8 flex-grow text-sm">
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" /> <span className="text-white font-semibold">Lightning Fast</span></li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" /> Mobile Optimized Design</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" /> Direct-to-Email Contact Button</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" /> Social Media & Bio Links</li>
                </ul>
                <Link
                  to="/quote"
                  state={{ pkg: "1-Page Website" }}
                  className="w-full block py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-center transition-all mt-auto"
                >
                  Get Started
                </Link>
              </div>

              {/* 2-Page Package */}
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-blue-500 transition-all flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-2">2-Page Basic</h3>
                <p className="text-gray-400 text-xs mb-4">Home + Menu/Services</p>
                <div className="text-3xl font-bold text-blue-400 mb-6">$1,000</div>
                <ul className="space-y-3 mb-8 flex-grow text-sm">
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" /> <span className="text-white font-semibold">Clean Content Structure</span></li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" /> Ideal for Menus or Price Lists</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" /> Interactive Google Map</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" /> Basic SEO Setup</li>
                </ul>
                <Link
                  to="/quote"
                  state={{ pkg: "2-Page Website" }}
                  className="w-full block py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-center transition-all mt-auto"
                >
                  Get Started
                </Link>
              </div>

              {/* 3-Page Package */}
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-blue-500 transition-all flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-2">3-Page Starter</h3>
                <p className="text-gray-400 text-xs mb-4">Home + Services + Contact</p>
                <div className="text-3xl font-bold text-blue-400 mb-6">$1,500</div>
                <ul className="space-y-3 mb-8 flex-grow text-sm">
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" /> <span className="text-white font-semibold">The Local Business Standard</span></li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" /> Dedicated "Services" Page</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" /> Professional Contact Form</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" /> Click-to-Call Integration</li>
                </ul>
                <Link
                  to="/quote"
                  state={{ pkg: "3-Page Website" }}
                  className="w-full block py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-center transition-all mt-auto"
                >
                  Get Started
                </Link>
              </div>

              {/* 4-Page Package (MOST POPULAR) */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-purple-500 shadow-xl transform lg:-translate-y-4 z-10 flex flex-col h-full relative">
                <div className="absolute top-0 right-0 bg-purple-600 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MOST POPULAR</div>
                <h3 className="text-xl font-bold text-white mb-2">4-Page Business</h3>
                <p className="text-gray-400 text-xs mb-4">Home + About + Services + Contact</p>
                <div className="text-3xl font-bold text-purple-400 mb-6">$2,000</div>
                <ul className="space-y-3 mb-8 flex-grow text-sm">
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-purple-500 mr-2 shrink-0" /> <span className="text-white font-semibold">Maximum Brand Credibility</span></li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-purple-500 mr-2 shrink-0" /> <strong>Premium "About Us" Story</strong></li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-purple-500 mr-2 shrink-0" /> Testimonials & Social Proof</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-purple-500 mr-2 shrink-0" /> Enhanced Local SEO</li>
                </ul>
                <Link
                  to="/quote"
                  state={{ pkg: "4-Page Website" }}
                  className="w-full block py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-center font-bold transition-all mt-auto"
                >
                  Start Project
                </Link>
              </div>

              {/* 5-Page Package */}
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-blue-500 transition-all flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-2">5-Page Pro</h3>
                <p className="text-gray-400 text-xs mb-4">Full Suite + Portfolio/Gallery</p>
                <div className="text-3xl font-bold text-blue-400 mb-6">$2,500</div>
                <ul className="space-y-3 mb-8 flex-grow text-sm">
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" /> <span className="text-white font-semibold">Showcase Your Work</span></li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" /> Custom Gallery / Portfolio</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" /> Live Social Media Feed</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-blue-500 mr-2 shrink-0" /> Advanced User Analytics</li>
                </ul>
                <Link
                  to="/quote"
                  state={{ pkg: "5-Page Website" }}
                  className="w-full block py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-center transition-all mt-auto"
                >
                  Get Started
                </Link>
              </div>

            </div>

            <div className="mt-8 max-w-4xl mx-auto text-center space-y-2">
              <p className="text-gray-500 text-sm">
                * 50% non-refundable deposit required to start. Remaining balance due upon completion.
              </p>
              <p className="text-gray-500 text-sm">
                Need more pages? No problem — page count and features can be upgraded at any point.
              </p>
            </div>
          </section>

          {/* --- PROJECT EXPECTATIONS --- */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center mb-3">
                  <Clock className="w-6 h-6 text-purple-400 mr-2" />
                  <h3 className="text-lg font-bold text-white">Typical Timeline</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><span className="text-gray-400">Small sites (3–5 pages):</span> 10–14 business days*</li>
                  <li><span className="text-gray-400">Medium projects:</span> 2–6 weeks</li>
                  <li><span className="text-gray-400">Large/integrations:</span> 6+ weeks</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">
                  *Timeline begins after deposit + required content/design direction is received.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center mb-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-2" />
                  <h3 className="text-lg font-bold text-white">Revisions Included</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Every project includes <strong>2 revision rounds</strong>. A “revision round” is one consolidated list of changes.
                  Additional revisions or scope changes are quoted separately so expectations stay clear.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center mb-3">
                  <Shield className="w-6 h-6 text-green-400 mr-2" />
                  <h3 className="text-lg font-bold text-white">Scope + Contract</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Before we start, you’ll receive a simple scope summary (SOW) outlining deliverables, timeline, and payment milestones.
                  This protects both sides and keeps the project moving smoothly.
                </p>
              </div>
            </div>
          </section>

          {/* --- CUSTOM SOFTWARE SOLUTIONS (NEW) --- */}
          <section className="mb-20">
            <div className="flex items-center mb-8">
              <Cpu className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Custom Software Solutions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-cyan-500 transition-all flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">Internal Tools</h3>
                <p className="text-gray-400 text-sm mb-4">Dashboards, admin panels, and workflow tools built for your business.</p>
                <ul className="space-y-2 mb-6 flex-grow text-sm">
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-cyan-500 mr-2 shrink-0" /> Custom UI + secure access</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-cyan-500 mr-2 shrink-0" /> Reporting + exports</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-cyan-500 mr-2 shrink-0" /> Integrations</li>
                </ul>
                <Link to="/quote" state={{ pkg: "Custom Software - Internal Tool" }} className="w-full block py-2 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white text-center transition-all mt-auto">Inquire</Link>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-cyan-500 transition-all flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">Automation & Integrations</h3>
                <p className="text-gray-400 text-sm mb-4">Connect systems and remove repetitive work.</p>
                <ul className="space-y-2 mb-6 flex-grow text-sm">
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-cyan-500 mr-2 shrink-0" /> APIs + webhooks</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-cyan-500 mr-2 shrink-0" /> Scheduled jobs + notifications</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-cyan-500 mr-2 shrink-0" /> Data sync pipelines</li>
                </ul>
                <Link to="/quote" state={{ pkg: "Custom Software - Automation" }} className="w-full block py-2 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white text-center transition-all mt-auto">Inquire</Link>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-cyan-500 transition-all flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">Backends & Databases</h3>
                <p className="text-gray-400 text-sm mb-4">SQL/NoSQL, APIs, auth, and data modeling (quoted separately).</p>
                <ul className="space-y-2 mb-6 flex-grow text-sm">
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-cyan-500 mr-2 shrink-0" /> Database design + schema</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-cyan-500 mr-2 shrink-0" /> API endpoints</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-4 h-4 text-cyan-500 mr-2 shrink-0" /> Ongoing maintenance options</li>
                </ul>
                <Link to="/quote" state={{ pkg: "Database / API Build" }} className="w-full block py-2 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white text-center transition-all mt-auto">Inquire</Link>
              </div>
            </div>
          </section>

          {/* --- MOBILE APP DEVELOPMENT --- */}
          <section className="mb-20">
            <div className="flex items-center mb-8">
              <div className="p-2 bg-pink-500/20 rounded-lg mr-3">
                <Smartphone className="w-8 h-8 text-pink-500" />
              </div>
              <h2 className="text-3xl font-bold text-white">Mobile App Development</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Basic App Package */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-pink-500 transition-all flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">MVP / Starter App</h3>
                <p className="text-gray-400 text-sm mb-4">Perfect for Prototypes & Simple Tools</p>
                <div className="text-4xl font-bold text-pink-500 mb-6">Starts at $3,500</div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-5 h-5 text-pink-500 mr-2 shrink-0" /> Native & Cross-Platform (Any Stack)</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-5 h-5 text-pink-500 mr-2 shrink-0" /> Up to 5 Custom Screens</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-5 h-5 text-pink-500 mr-2 shrink-0" /> Local Data Storage</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-5 h-5 text-pink-500 mr-2 shrink-0" /> Standard UI Components</li>
                </ul>
                <Link
                  to="/quote"
                  state={{ pkg: "Mobile App MVP" }}
                  className="w-full block py-3 rounded-lg border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white text-center transition-all mt-auto"
                >
                  Inquire Now
                </Link>
              </div>

              {/* Advanced App Package */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-pink-500/30 hover:border-pink-500 transition-all flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">Full-Scale Application</h3>
                <p className="text-gray-400 text-sm mb-4">For SaaS, Social, & Data-Driven Apps</p>
                <div className="text-4xl font-bold text-pink-500 mb-6">Custom Quote</div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-5 h-5 text-pink-500 mr-2 shrink-0" /> User Authentication (Login/Signup)</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-5 h-5 text-pink-500 mr-2 shrink-0" /> Cloud Database Integration</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-5 h-5 text-pink-500 mr-2 shrink-0" /> Push Notifications & GPS</li>
                  <li className="flex items-start text-gray-300"><CheckCircle className="w-5 h-5 text-pink-500 mr-2 shrink-0" /> App Store & Play Store Submission</li>
                </ul>
                <Link
                  to="/quote"
                  state={{ pkg: "Mobile App Custom" }}
                  className="w-full block py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white text-center font-bold transition-all mt-auto"
                >
                  Start Project
                </Link>
              </div>

            </div>
          </section>

          {/* --- CONSULTING & STRATEGY --- */}
          <section className="mb-20">
            <div className="flex items-center mb-8">
              <div className="p-2 bg-yellow-500/20 rounded-lg mr-3">
                <TrendingUp className="w-8 h-8 text-yellow-500" />
              </div>
              <h2 className="text-3xl font-bold text-white">Consulting & Strategy</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Data Analytics */}
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-yellow-500 transition-all flex flex-col">
                <div className="mb-4 p-3 bg-yellow-500/10 w-fit rounded-lg"><BarChart className="w-6 h-6 text-yellow-500" /></div>
                <h3 className="text-xl font-bold text-white mb-2">Power BI / Tableau Dashboards</h3>
                <p className="text-gray-400 text-sm mb-4">Turn business data into clear visuals and decision-ready reporting.</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="flex items-start text-gray-300 text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2 shrink-0" /> Modeling, KPIs, and dashboard build</li>
                  <li className="flex items-start text-gray-300 text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2 shrink-0" /> Data cleaning + SQL analysis</li>
                  <li className="flex items-start text-gray-300 text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2 shrink-0" /> Refresh schedule + rollout support</li>
                </ul>
                <p className="text-xs text-gray-500 mb-5">
                  Note: Power BI/Tableau licensing is handled by the client. Embedding dashboards into a website/app is a separate scoped add-on.
                </p>
                <Link to="/quote" state={{ pkg: "Power BI / Tableau Dashboard" }} className="w-full block py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white text-center rounded-lg transition-all mt-auto">Inquire</Link>
              </div>

              {/* IT & Automation */}
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-yellow-500 transition-all flex flex-col">
                <div className="mb-4 p-3 bg-yellow-500/10 w-fit rounded-lg"><Zap className="w-6 h-6 text-yellow-500" /></div>
                <h3 className="text-xl font-bold text-white mb-2">IT & Automation</h3>
                <p className="text-gray-400 text-sm mb-4">Streamline workflows and remove manual tasks.</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="flex items-start text-gray-300 text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2 shrink-0" /> Zapier / Make.com automation</li>
                  <li className="flex items-start text-gray-300 text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2 shrink-0" /> Scripts, cron jobs, and integrations</li>
                  <li className="flex items-start text-gray-300 text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2 shrink-0" /> System setup + best practices</li>
                </ul>
                <Link to="/quote" state={{ pkg: "IT Automation" }} className="w-full block py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white text-center rounded-lg transition-all mt-auto">Inquire</Link>
              </div>

              {/* SEO & Growth */}
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-yellow-500 transition-all flex flex-col">
                <div className="mb-4 p-3 bg-yellow-500/10 w-fit rounded-lg"><Search className="w-6 h-6 text-yellow-500" /></div>
                <h3 className="text-xl font-bold text-white mb-2">SEO & Digital Growth</h3>
                <p className="text-gray-400 text-sm mb-4">Get found on Google and grow your reach.</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="flex items-start text-gray-300 text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2 shrink-0" /> Website SEO audits</li>
                  <li className="flex items-start text-gray-300 text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2 shrink-0" /> Google Business Profile setup</li>
                  <li className="flex items-start text-gray-300 text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2 shrink-0" /> Local maps optimization</li>
                </ul>
                <Link to="/quote" state={{ pkg: "SEO Audit" }} className="w-full block py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white text-center rounded-lg transition-all mt-auto">Inquire</Link>
              </div>

            </div>
          </section>

          {/* --- HOSTING & MAINTENANCE --- */}
          <section className="mb-20">
            <div className="flex items-center mb-8">
              <Server className="w-8 h-8 text-green-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Hosting & Maintenance</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Standard Hosting */}
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Standard Plan</h3>
                    <p className="text-gray-400">Personal & Small Business</p>
                  </div>
                  <div className="text-3xl font-bold text-green-400">$25–$50<span className="text-lg text-gray-500">/mo</span></div>
                </div>
                <div className="h-px bg-gray-800 my-6"></div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300"><Globe className="w-4 h-4 mr-3 text-green-500" /> High-performance hosting</li>
                  <li className="flex items-center text-gray-300"><Shield className="w-4 h-4 mr-3 text-green-500" /> SSL security certificate</li>
                  <li className="flex items-center text-gray-300"><Clock className="w-4 h-4 mr-3 text-green-500" /> Weekly automated backups</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-4 h-4 mr-3 text-green-500" /> Technical maintenance</li>
                </ul>
              </div>

              {/* Premium Hosting */}
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Premium Plan</h3>
                    <p className="text-gray-400">High Traffic & Business Critical</p>
                  </div>
                  <div className="text-3xl font-bold text-purple-400">$50–$150<span className="text-lg text-gray-500">/mo</span></div>
                </div>
                <div className="h-px bg-gray-800 my-6"></div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300"><Globe className="w-4 h-4 mr-3 text-purple-500" /> Priority performance</li>
                  <li className="flex items-center text-gray-300"><Clock className="w-4 h-4 mr-3 text-purple-500" /> Daily off-site backups</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-4 h-4 mr-3 text-purple-500" /> Uptime monitoring</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-4 h-4 mr-3 text-purple-500" /> Monthly health reports</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-4 h-4 mr-3 text-purple-500" /> Broken link scanning</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 max-w-3xl mx-auto">
              <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-5">
                <h4 className="text-white font-bold mb-2">What’s the difference between hosting vs maintenance?</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                  <li><strong>Hosting</strong> keeps your site online (server, SSL, backups, uptime).</li>
                  <li><strong>Maintenance</strong> covers technical updates, small fixes, and performance monitoring.</li>
                  <li><strong>Content changes</strong> (new copy, images, pages) are either included in a maintenance plan or billed hourly depending on scope.</li>
                </ul>
              </div>
            </div>

          </section>

          {/* --- ADD-ONS & EXTRAS --- */}
          <section>
            <div className="flex items-center mb-8">
              <Cpu className="w-8 h-8 text-pink-400 mr-3" />
              <h2 className="text-3xl font-bold text-white">Add-Ons & Extras</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-pink-500 transition-all">
                <h4 className="text-xl font-bold text-white mb-2">Figma Design Frames</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Wireframes and high-fidelity designs before development begins (recommended for larger projects).
                </p>
                <p className="text-pink-400 text-sm font-bold mb-3">Typical range: $250–$1,500+ (depends on pages + fidelity)</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-pink-500 mr-2 shrink-0" /> Wireframes → layout approval</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-pink-500 mr-2 shrink-0" /> High-fidelity visual design</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-pink-500 mr-2 shrink-0" /> Optional clickable prototype</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-pink-500 transition-all">
                <h4 className="text-xl font-bold text-white mb-2">Dashboards & Reporting</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Power BI / Tableau dashboards, KPI tracking, and reporting systems. Embedding into a website/app is quoted separately.
                </p>
                <p className="text-pink-400 text-sm font-bold mb-3">Typical range: $750–$6,000+ (depends on data sources + complexity)</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-pink-500 mr-2 shrink-0" /> Dashboard build + rollout</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-pink-500 mr-2 shrink-0" /> Data modeling + refresh strategy</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-pink-500 mr-2 shrink-0" /> Training / handoff</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-pink-500 transition-all">
                <h4 className="text-xl font-bold text-white mb-2">WordPress & Custom Themes</h4>
                <p className="text-gray-400 text-sm mb-4">
                  WordPress builds are available if you want a CMS. Custom themes and advanced plugins are premium work and priced separately.
                </p>
                <p className="text-pink-400 text-sm font-bold mb-3">Typical range: Quoted (custom themes + plugin work)</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-pink-500 mr-2 shrink-0" /> CMS setup + training</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-pink-500 mr-2 shrink-0" /> Custom theme development</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-pink-500 mr-2 shrink-0" /> Hosting + maintenance options</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-pink-500 transition-all">
                <h4 className="text-xl font-bold text-white mb-2">E-commerce Integrations</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Connect third-party e-commerce solutions and payment providers. Platform subscription costs are paid directly by the client.
                </p>
                <p className="text-pink-400 text-sm font-bold mb-3">Typical range: $250–$2,500+ (platform + workflows)</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-pink-500 mr-2 shrink-0" /> Shopify / Square / Stripe integrations</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-pink-500 mr-2 shrink-0" /> Product/order workflows</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-pink-500 mr-2 shrink-0" /> Analytics tagging</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-pink-500 transition-all">
                <h4 className="text-xl font-bold text-white mb-2">Database Builds</h4>
                <p className="text-gray-400 text-sm mb-4">
                  SQL/NoSQL databases, APIs, and admin panels are separate scoped projects and quoted based on complexity.
                </p>
                <p className="text-pink-400 text-sm font-bold mb-3">Typical range: $1,500–$12,000+ (schema, APIs, auth, admin)</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-pink-500 mr-2 shrink-0" /> Schema + data model</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-pink-500 mr-2 shrink-0" /> API + authentication</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-pink-500 mr-2 shrink-0" /> Maintenance options</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-pink-500 transition-all flex flex-col">
                <h4 className="text-xl font-bold text-white mb-2">Hourly Updates</h4>
                <p className="text-pink-400 font-bold mb-1">$50 / hour</p>
                <p className="text-gray-400 text-sm mb-6">
                  For content updates, design tweaks, or technical support outside of maintenance packages.
                </p>
                <Link
                  to="/pay"
                  className="mt-auto w-full block py-2 rounded-lg border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white text-center transition-all"
                >
                  Purchase Hours
                </Link>
              </div>

            </div>
          </section>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <Link to="/quote" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-bold hover:scale-105 transition-transform">
              Contact Me for a Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
