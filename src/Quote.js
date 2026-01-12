import React, { useEffect, useRef, useState } from 'react';
import { setPageMeta } from './utils/seo';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ArrowLeft, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Quote = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
  const location = useLocation();
  
  // BOT PROTECTION: Track when the page loaded
  const [loadTime, setLoadTime] = useState(Date.now());
  
  // State for form selections
  const [selectedPackage, setSelectedPackage] = useState(''); 
  const [referralSource, setReferralSource] = useState(''); 
  const [prefillMessage, setPrefillMessage] = useState('');

  // Validation State
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta({
      title: 'Get a Web Design Quote | Derek Gembus',
      description: 'Request a quote for websites, hosting, analytics dashboards, or custom software solutions.',
      canonicalPath: '/quote'
    });
    setLoadTime(Date.now());
    
    // Prefill from navigation state or query params
    const params = new URLSearchParams(location.search);
    const pkgParam = params.get('pkg');
    const noteParam = params.get('note');

    if (location.state?.pkg) {
      setSelectedPackage(location.state.pkg);
      if (location.state?.note) setPrefillMessage(location.state.note);
      window.history.replaceState({}, document.title);
    } else if (pkgParam) {
      setSelectedPackage(pkgParam);
    }

    if (noteParam) setPrefillMessage(noteParam);
  }, [location]);

  // --- DYNAMIC PLACEHOLDER LOGIC ---
  const getPlaceholder = () => {
    if (!selectedPackage) return "Please select a service above to see specific questions...";

    // Web Development
    if (selectedPackage.includes("Website") || selectedPackage.includes("Web") || selectedPackage.includes("Page")) {
      return "Tell me about your business. Do you have a design style in mind? What are the main sections you need (e.g. About, Services, Gallery)?";
    }
    
    // Mobile App
    if (selectedPackage.includes("Mobile App")) {
      return "What is the core function of the app? Do you need it for iOS, Android, or both? Do users need to log in? (e.g. 'I need a fitness tracking app where users can save workouts')";
    }

    // Data Analytics
    if (selectedPackage.includes("Data") || selectedPackage.includes("Analytics") || selectedPackage.includes("Power BI") || selectedPackage.includes("Tableau") || selectedPackage.includes("Dashboard")) {
      return "What data sources do you want to visualize (e.g. Google Sheets, Excel, SQL, Google Analytics)? What specific questions are you trying to answer with this data?";
    }

    // IT Automation
    if (selectedPackage.includes("Automation")) {
      return "Describe the workflow you want to automate. (e.g. 'When a user fills out my contact form, I want it to automatically create a card in Trello and send a Slack message.')";
    }

    // Figma Design / Prototyping
    if (selectedPackage.includes("Figma") || selectedPackage.includes("Wireframe") || selectedPackage.includes("Design")) {
      return "Do you already have branding (logo/colors/fonts)? What pages/screens do you need, and do you want wireframes only or high-fidelity designs? If you have examples you like, link them here.";
    }

    // Custom Software / Internal Tools
    if (selectedPackage.includes("Custom Software") || selectedPackage.includes("Internal Tool")) {
      return "What problem are you solving, who will use it, and what are the key workflows? Do you need logins/roles, data import/export, or integrations with existing tools?";
    }

    // Databases / APIs
    if (selectedPackage.includes("Database") || selectedPackage.includes("API")) {
      return "What data will you store, and what actions should the system support (create/read/update/delete)? Do you need user accounts/roles, admin tools, reports, or third‑party integrations?";
    }
    
    // Support & Maintenance
    if (selectedPackage.includes("Maintenance") || selectedPackage.includes("Bug") || selectedPackage.includes("Hourly")) {
      return "Please describe the issue you are facing or the specific updates you need. If something is broken, please include a link to the page.";
    }

    // SEO
    if (selectedPackage.includes("Performance") || selectedPackage.includes("SEO")) {
      return "What specific issues are you noticing? (e.g. Site is slow on mobile, not showing up on Google Maps). Who is your target audience?";
    }

    // Invoices / Payment Requests
    if (selectedPackage.includes("Invoice") || selectedPackage.includes("Payment")) {
      return "What is this payment for (deposit, hosting, maintenance, milestone)? If you have a project name or invoice reference, include it here.";
    }

    if (selectedPackage === "General Inquiry") {
      return "How can I help you today? Please provide any details about your project or questions you have.";
    }

    if (selectedPackage === "Other") {
      return "Please describe the specific service you are looking for in as much detail as possible...";
    }

    return "Tell me specifically what you want to achieve. Are there any specific features or requirements you need?";
  };

  // --- VALIDATION LOGIC ---
  const validateForm = () => {
    const newErrors = {};
    const formData = new FormData(form.current);
    
    // 1. Name
    const name = formData.get('from_name');
    if (!name || name.trim().length < 2) {
      newErrors.from_name = 'Name is required (min 2 characters).';
    }

    // 2. Email
    const email = formData.get('user_email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.user_email = 'Please enter a valid email address.';
    }

    // 3. Phone (Optional, but validate format if present)
    const phone = formData.get('user_phone');
    if (phone && phone.replace(/\D/g, '').length < 10) {
      newErrors.user_phone = 'Please enter a valid phone number (10+ digits).';
    }

    // 4. Referral
    if (!referralSource) {
      newErrors.referral_source = 'Please select how you heard about me.';
    }
    const otherDetail = formData.get('referral_other');
    if (referralSource === 'Other' && (!otherDetail || otherDetail.trim() === '')) {
      newErrors.referral_other = 'Please tell me how you heard about me.';
    }
    if (referralSource === 'Social Media' && (!otherDetail || otherDetail.trim() === '')) {
      newErrors.referral_other = 'Please specify which social media platform.';
    }

    // 5. Project Scope
    if (!selectedPackage) {
      newErrors.service_package = 'Please select a service package.';
    }

    const budget = formData.get('budget');
    if (!budget) {
      newErrors.budget = 'Please select an estimated budget.';
    }

    const preferredPaymentMethod = formData.get('preferred_payment_method');
    if (!preferredPaymentMethod) {
      newErrors.preferred_payment_method = 'Please select a preferred payment method.';
    }

    const timeline = formData.get('timeline');
    if (!timeline) {
      newErrors.timeline = 'Please select a desired timeline.';
    }

    // 6. Message
    const message = formData.get('message');
    if (!message || message.trim().length < 10) {
      newErrors.message = 'Please provide a bit more detail about your project (min 10 chars).';
    }

    // 7. Agreements
    if (!formData.get('terms_accepted')) {
      newErrors.terms_accepted = 'Please confirm you agree to the basic terms.';
    }
    if (!formData.get('ack_revisions')) {
      newErrors.ack_revisions = 'Please acknowledge the revision policy.';
    }
    if (!formData.get('ack_third_party')) {
      newErrors.ack_third_party = 'Please acknowledge third-party costs.';
    }

    setErrors(newErrors);

    // If errors exist, scroll to the first one
    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementsByName(firstErrorField)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        // Fallback if element not found
        window.scrollTo({ top: 100, behavior: 'smooth' });
      }
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    // --- BOT PROTECTION ---
    const honeypot = formData.get('confirm_email');
    if (honeypot || (Date.now() - loadTime < 3000)) {
      if (!honeypot) console.log('Bot detected: Form submitted too fast.');
      setStatus('success'); // Fake success
      return;
    }

    if (!validateForm()) return;

    setStatus('sending');

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_QUOTE_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
          setStatus('success');
          form.current.reset();
          setReferralSource('');
          setSelectedPackage('');
          setPrefillMessage('');
          setErrors({});
      }, (error) => {
          console.error(error);
          setStatus('error');
      });
  };

  const handleInputChange = (e) => {
    const { name } = e.target;
    // Clear error for this specific field when user types/changes it
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const getReferralLabel = () => {
    if (referralSource === 'Social Media') return 'Which Platform? *';
    if (referralSource === 'Referral') return 'Who referred you? (Optional)';
    return 'Please specify *';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 p-4 md:p-8 flex flex-col items-center justify-center">
        {/* Back Link */}
        <div className="w-full max-w-3xl mb-8">
          <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-purple-400 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Services
          </Link>
        </div>

        <div className="w-full max-w-3xl bg-gray-900/50 p-8 md:p-12 rounded-2xl border border-purple-500/30 shadow-2xl relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full pointer-events-none"></div>

          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent relative z-10">
            Request a Quote
          </h1>
          <p className="text-gray-400 mb-8 relative z-10">
            Please fill out the details below so I can understand your business needs and provide an accurate timeline.
          </p>

          {status === 'success' ? (
            <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-8 text-center animate-fade-in">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
              <p className="text-gray-300">Thank you for providing those details. I will review your project scope and get back to you within 24 hours.</p>
              <Link to="/" className="inline-block mt-6 text-green-400 hover:text-green-300 font-semibold">Return Home</Link>
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-8 relative z-10" noValidate>
              {/* Honeypot */}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="confirm_email" tabIndex="-1" autoComplete="off" />
              </div>

              {/* SECTION 1: CONTACT INFO */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-gray-800 pb-2 mb-4">1. Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Name *</label>
                    <input type="text" name="from_name" onChange={handleInputChange} className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.from_name ? 'border-red-500 bg-red-500/5' : 'border-gray-700'} text-white focus:border-purple-500 outline-none transition-all`} placeholder="John Doe" />
                    {errors.from_name && <p className="text-red-400 text-xs mt-1">{errors.from_name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address *</label>
                    <input type="email" name="user_email" onChange={handleInputChange} className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.user_email ? 'border-red-500 bg-red-500/5' : 'border-gray-700'} text-white focus:border-purple-500 outline-none transition-all`} placeholder="john@business.com" />
                    {errors.user_email && <p className="text-red-400 text-xs mt-1">{errors.user_email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                    <input type="tel" name="user_phone" onChange={handleInputChange} className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.user_phone ? 'border-red-500 bg-red-500/5' : 'border-gray-700'} text-white focus:border-purple-500 outline-none transition-all`} placeholder="(555) 123-4567" />
                    {errors.user_phone && <p className="text-red-400 text-xs mt-1">{errors.user_phone}</p>}
                  </div>
                  
                  {/* Referral Source */}
                  <div className={['Other', 'Social Media', 'Referral'].includes(referralSource) ? "md:col-span-1" : ""}>
                    <label className="block text-sm font-medium text-gray-400 mb-2">How did you hear about me? *</label>
                    <select name="referral_source" value={referralSource} onChange={(e) => { setReferralSource(e.target.value); handleInputChange(e); }} className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.referral_source ? 'border-red-500 bg-red-500/5' : 'border-gray-700'} text-white focus:border-purple-500 outline-none transition-all appearance-none`}>
                      <option value="" disabled>Select an option...</option>
                      <option value="Google Search">Google Search</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Referral">Referral / Word of Mouth</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.referral_source && <p className="text-red-400 text-xs mt-1">{errors.referral_source}</p>}
                  </div>
                  
                  {/* Dynamic Extra Input */}
                  {['Other', 'Social Media', 'Referral'].includes(referralSource) && (
                    <div className="animate-fade-in md:col-span-1">
                      <label className="block text-sm font-medium text-gray-400 mb-2">{getReferralLabel()}</label>
                      <input type="text" name="referral_other" onChange={handleInputChange} className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.referral_other ? 'border-red-500 bg-red-500/5' : 'border-gray-700'} text-white focus:border-purple-500 outline-none transition-all`} placeholder="Please specify..." />
                      {errors.referral_other && <p className="text-red-400 text-xs mt-1">{errors.referral_other}</p>}
                    </div>
                  )}
                </div>
              </div>

              {/* SECTION 2: PROJECT SCOPE */}
              <div className="space-y-4">
                 <h3 className="text-lg font-bold text-white border-b border-gray-800 pb-2 mb-4">2. Project Scope</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Service Package */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Interested Service *</label>
                    <select name="service_package" value={selectedPackage} onChange={(e) => { setSelectedPackage(e.target.value); handleInputChange(e); }} className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.service_package ? 'border-red-500 bg-red-500/5' : 'border-gray-700'} text-white focus:border-purple-500 outline-none transition-all appearance-none`}>
                      <option value="" disabled>Select a service...</option>
                      <optgroup label="Web Development Packages">
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="1-Page Website">Single Page Website ($500)</option>
                        <option value="2-Page Website">2-Page Website ($1,000)</option>
                        <option value="3-Page Website">3-Page Website ($1,500)</option>
                        <option value="4-Page Website">4-Page Website ($2,000)</option>
                        <option value="5-Page Website">5-Page Website ($2,500)</option>
                        <option value="Custom Project">Custom Project / App</option>
                      </optgroup>
                      
                      <optgroup label="Mobile App Development">
                        <option value="Mobile App MVP">MVP / Starter App ($3,500+)</option>
                        <option value="Mobile App Custom">Full Scale Custom App</option>
                      </optgroup>

                      <optgroup label="Consulting & Strategy">
                        <option value="Power BI / Tableau Dashboard">Power BI / Tableau Dashboards</option>
                        <option value="Data Analytics">Data Analytics & Reporting</option>
                        <option value="IT Automation">IT Automation & Workflows</option>
                        <option value="SEO Audit">SEO & Digital Growth Audit</option>
                      </optgroup>

                      <optgroup label="Design & Prototyping">
                        <option value="Figma Wireframes">Figma Wireframes</option>
                        <option value="Figma High-Fidelity Design">Figma High-Fidelity Design</option>
                        <option value="Figma + Build">Figma + Build (Design to Development)</option>
                      </optgroup>

                      <optgroup label="Custom Software">
                        <option value="Custom Software - Internal Tool">Custom Software - Internal Tool</option>
                        <option value="Custom Software - Automation">Custom Software - Automation / Integrations</option>
                        <option value="Database / API Build">Database / API Build</option>
                      </optgroup>

                      <optgroup label="Support & Maintenance">
                        <option value="Invoice / Payment Request">Invoice / Payment Request</option>
                        <option value="Website Updates / Maintenance">Website Updates / Maintenance</option>
                        <option value="Bug Fixes / Troubleshooting">Bug Fixes / Troubleshooting</option>
                        <option value="Performance Optimization">Performance & SEO Optimization</option>
                        <option value="Hourly Support">Hourly Development / Support</option>
                      </optgroup>

                      <option value="Other">Other</option>
                    </select>
                    {errors.service_package && <p className="text-red-400 text-xs mt-1">{errors.service_package}</p>}
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Estimated Budget *</label>
                    <select name="budget" defaultValue="" onChange={handleInputChange} className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.budget ? 'border-red-500 bg-red-500/5' : 'border-gray-700'} text-white focus:border-purple-500 outline-none transition-all appearance-none`}>
                      <option value="" disabled>Select a budget...</option>
                      <option value="Under $500">Under $500</option>
                      <option value="$500 - $1,000">$500 - $1,000</option>
                      <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                      <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000+">$25,000+</option>
                    </select>
                    {errors.budget && <p className="text-red-400 text-xs mt-1">{errors.budget}</p>}
                  </div>
                  
                  {/* Preferred Payment Method */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Payment Method *</label>
                    <select name="preferred_payment_method" defaultValue="" onChange={handleInputChange} className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.preferred_payment_method ? 'border-red-500 bg-red-500/5' : 'border-gray-700'} text-white focus:border-purple-500 outline-none transition-all appearance-none`}>
                      <option value="" disabled>Select a payment method...</option>
                      <option value="Stripe (Card) - Preferred">Stripe (Card) - Preferred</option>
                      <option value="Stripe Invoice (Card/ACH)">Stripe Invoice (Card/ACH)</option>
                      <option value="ACH / Bank Transfer">ACH / Bank Transfer</option>
                      <option value="PayPal">PayPal</option>
                      <option value="Zelle">Zelle</option>
                      <option value="Venmo">Venmo</option>
                      <option value="Cash App">Cash App</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                    {errors.preferred_payment_method && <p className="text-red-400 text-xs mt-1">{errors.preferred_payment_method}</p>}
                  </div>

                  {/* Timeline */}
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Desired Timeline *</label>
                    <select name="timeline" defaultValue="" onChange={handleInputChange} className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.timeline ? 'border-red-500 bg-red-500/5' : 'border-gray-700'} text-white focus:border-purple-500 outline-none transition-all appearance-none`}>
                      <option value="" disabled>Select a timeline...</option>
                      <option value="Flexible">Flexible / No Rush</option>
                      <option value="1 Month">Within 1 Month</option>
                      <option value="2-3 Months">2-3 Months</option>
                      <option value="3+ Months">3+ Months (Large Project)</option>
                      <option value="ASAP">ASAP (Rush Project)</option>
                    </select>
                    {errors.timeline && <p className="text-red-400 text-xs mt-1">{errors.timeline}</p>}
                  </div>

                  {/* Desired Launch Date (Optional) */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Desired Launch Date 
                      <span className="text-xs text-gray-500 ml-2">(Optional)</span>
                    </label>
                    <input type="date" name="desired_launch_date" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-purple-500 outline-none transition-all" />
                    <p className="text-xs text-gray-500 mt-1">If you have a hard deadline (event, opening, campaign), put it here so I can plan the schedule.</p>
                  </div>

                  {/* Page List / Sitemap (Optional) */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Pages / Sitemap Notes 
                      <span className="text-xs text-gray-500 ml-2">(Optional)</span>
                    </label>
                    <textarea name="sitemap_or_pages" rows="3" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-purple-500 outline-none transition-all placeholder-gray-500" placeholder="Example: Home, About, Services, Gallery, Contact. Or: 2-page site (Home + Contact)."></textarea>
                  </div>

                </div>
              </div>

              {/* SECTION 3: BUSINESS NEEDS */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-gray-800 pb-2 mb-4">3. Business Goals</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Primary Goal of Website</label>
                    <select name="business_goal" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none transition-all appearance-none">
                      <option value="Generate Leads/Calls">Generate Leads / Get Calls</option>
                      <option value="Online Portfolio">Showcase Portfolio / Work</option>
                      <option value="Information Only">Provide Information / Credibility</option>
                      <option value="Sell Products">Sell Products Online</option>
                      <option value="Automate Process">Automate a Business Process</option>
                      <option value="Visualize Data">Visualize Data / Reporting</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Content Status (Logo/Text)</label>
                    <select name="content_status" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none transition-all appearance-none">
                      <option value="Have Everything">I have Logo, Text & Images ready</option>
                      <option value="Partial">I have some, need help with others</option>
                      <option value="Nothing Yet">I am starting from scratch</option>
                      <option value="Redesign">This is a redesign of an existing site</option>
                      <option value="Not Applicable">Not Applicable (Consulting/IT)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Reference Websites 
                    <span className="text-xs text-gray-500 ml-2">(Optional - Links to sites you like the look of)</span>
                  </label>
                  <input type="text" name="reference_sites" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-purple-500 outline-none transition-all" placeholder="e.g. www.apple.com, www.competitor.com" />
                </div>
              </div>

              {/* SECTION 4: OPEN TEXT */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Additional Details *</label>
                <textarea 
                  key={`prefill-${prefillMessage}`} 
                  defaultValue={prefillMessage} 
                  name="message" 
                  onChange={handleInputChange} 
                  rows="4" 
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${errors.message ? 'border-red-500 bg-red-500/5' : 'border-gray-700'} text-white focus:border-purple-500 outline-none transition-all placeholder-gray-500`} 
                  placeholder={getPlaceholder()}
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* AGREEMENTS (NEW) */}
              <div className="space-y-3 p-4 bg-purple-500/5 rounded-xl border border-purple-500/20">
                <label className="flex items-start cursor-pointer group">
                  <input type="checkbox" name="terms_accepted" onChange={handleInputChange} className="mt-1 mr-3 h-4 w-4 accent-purple-500" />
                  <span className="text-sm text-gray-300">I agree to the project discovery process. *</span>
                </label>
                {errors.terms_accepted && <p className="text-red-400 text-xs ml-7">{errors.terms_accepted}</p>}
                
                <label className="flex items-start cursor-pointer group">
                  <input type="checkbox" name="ack_revisions" onChange={handleInputChange} className="mt-1 mr-3 h-4 w-4 accent-purple-500" />
                  <span className="text-sm text-gray-300">I acknowledge the revision policy (2 rounds per project phase). *</span>
                </label>
                {errors.ack_revisions && <p className="text-red-400 text-xs ml-7">{errors.ack_revisions}</p>}

                <label className="flex items-start cursor-pointer group">
                  <input type="checkbox" name="ack_third_party" onChange={handleInputChange} className="mt-1 mr-3 h-4 w-4 accent-purple-500" />
                  <span className="text-sm text-gray-300">I understand that hosting, domains, or API fees are the client's responsibility. *</span>
                </label>
                {errors.ack_third_party && <p className="text-red-400 text-xs ml-7">{errors.ack_third_party}</p>}
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'} 
                className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg transition-all transform hover:scale-[1.02] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : <>Send Quote Request <Send className="ml-2 w-5 h-5" /></>}
              </button>
              
              {status === 'error' && (
                <div className="flex items-center justify-center text-red-400 text-sm mt-4">
                  <AlertCircle className="w-4 h-4 mr-2" /> Something went wrong. Please check fields or try again.
                </div>
              )}
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Quote;