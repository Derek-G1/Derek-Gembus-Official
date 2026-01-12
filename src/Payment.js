import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ArrowLeft, CreditCard, DollarSign, ChevronDown, Info, ShieldCheck, Lock } from 'lucide-react';
import { setPageMeta } from './utils/seo';

const Payment = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta({
      title: 'Pay | Derek Gembus',
      description: 'Secure payments for website projects, hosting, maintenance, and custom development via Stripe or invoice.',
      canonicalPath: '/pay'
    });
  }, []);


const buildQuoteLink = (pkg, note) =>
  `/quote?pkg=${encodeURIComponent(pkg)}&note=${encodeURIComponent(note)}`;


  // Stripe Payment Links (update these anytime)
  const stripeOptions = [
        // Project deposits & milestones (use Stripe links when available; otherwise request an invoice link)
    {
      id: 'website_deposit_3page',
      label: 'Website Deposit (3-Page Starter) — $750',
      description: '50% deposit to reserve your start date for a 3-page website ($1,500 total). If the checkout link is not available yet, request an invoice link.',
      link: process.env.REACT_APP_STRIPE_WEBSITE_DEPOSIT_3PAGE || '',
      fallbackPkg: 'Invoice / Payment Request',
      fallbackNote: 'Website Deposit — 3-page site ($1,500 total). Deposit amount: $750.'
    },
    {
      id: 'website_final_3page',
      label: 'Website Final Payment (3-Page Starter) — $750',
      description: 'Final 50% payment due before launch/handoff for a 3-page website ($1,500 total). If the checkout link is not available yet, request an invoice link.',
      link: process.env.REACT_APP_STRIPE_WEBSITE_FINAL_3PAGE || '',
      fallbackPkg: 'Invoice / Payment Request',
      fallbackNote: 'Website Final Payment — 3-page site ($1,500 total). Final amount: $750.'
    },
        {
      id: 'website_deposit_2page',
      label: 'Website Deposit (2-Page Basic) — $500',
      description: '50% deposit to reserve your start date for a 2-page website ($1,000 total). If the checkout link is not available yet, request an invoice link.',
      link: process.env.REACT_APP_STRIPE_WEBSITE_DEPOSIT_2PAGE || '',
      fallbackPkg: 'Invoice / Payment Request',
      fallbackNote: 'Website Deposit — 2-page site ($1,000 total). Deposit amount: $500.'
    },
    {
      id: 'website_final_2page',
      label: 'Website Final Payment (2-Page Basic) — $500',
      description: 'Final 50% payment due before launch/handoff for a 2-page website ($1,000 total). If the checkout link is not available yet, request an invoice link.',
      link: process.env.REACT_APP_STRIPE_WEBSITE_FINAL_2PAGE || '',
      fallbackPkg: 'Invoice / Payment Request',
      fallbackNote: 'Website Final Payment — 2-page site ($1,000 total). Final amount: $500.'
    },

{
      id: 'add_page_small',
      label: 'Add a Page / Upgrade (Small Business) — $500+',
      description: 'Add an additional page or upgrade scope for a small business site. Price may vary based on complexity—request an invoice link if needed.',
      link: process.env.REACT_APP_STRIPE_ADD_PAGE_SMALL || '',
      fallbackPkg: 'Invoice / Payment Request',
      fallbackNote: 'Upgrade request — Add a page (Small Business). Starting at $500; please confirm final total.'
    },

    {
      id: 'hosting_std',
      label: 'Standard Hosting ($25/mo)',
      description: 'Monthly subscription for personal & small business hosting.',
      link: 'https://buy.stripe.com/7sYaEX8vM4G2aNIgcFbwk01'
    },
    {
      id: 'hosting_prem',
      label: 'Premium Hosting ($50/mo)',
      description: 'Monthly subscription for premium maintenance and hosting.',
      link: 'https://buy.stripe.com/3cI7sL27o3BY1d8f8Bbwk02'
    },
    {
      id: 'hourly',
      label: 'Hourly Development Rate (1 Hour)',
      description: 'Purchase development hours for updates or fixes.',
      link: 'https://buy.stripe.com/bJeaEXfYeegC5toaSlbwk00',
      isHourly: true
    }
  ];

  // Start as null so user must choose
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectionChange = (e) => {
    const selectedId = e.target.value;
    const option = stripeOptions.find(opt => opt.id === selectedId);
    setSelectedOption(option);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="pt-24 p-4 md:p-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-purple-400 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </Link>

          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Make a Payment
          </h1>
          <p className="text-gray-300 mb-12 text-lg">
            For privacy and security, Stripe is the primary option. If you prefer an invoice or an alternative method (PayPal, Venmo, Cash App, Zelle, ACH), request it and I’ll send details that minimize personal info exposure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Option 1: Credit Card / Stripe */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500 transition-all flex flex-col relative overflow-hidden">

              <div className="flex items-start justify-between mb-2">
                <div className="p-3 bg-blue-500/20 rounded-lg w-fit">
                  <CreditCard className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex items-center text-gray-500 text-xs font-bold uppercase tracking-widest border border-gray-700 rounded px-2 py-1">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Secured by Stripe
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-1">Credit / Debit Card</h2>
              <p className="text-purple-400 text-sm font-medium mb-6">
                Secure checkout for deposits, milestones, and hosting subscriptions
              </p>

              {/* Dropdown Selector */}

              <div className="mb-4 relative">
                <label className="block text-gray-400 text-sm mb-2">Select a payment option (Stripe):</label>
                <div className="relative">
                  <select
                    value={selectedOption ? selectedOption.id : ""}
                    onChange={handleSelectionChange}
                    className={`w-full appearance-none bg-gray-800 border py-3 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer ${
                      !selectedOption ? 'text-gray-400 border-gray-600' : 'text-white border-gray-700 hover:border-blue-500'
                    }`}
                  >
                    <option value="" disabled>Select a service...</option>
                    {stripeOptions.map((option) => (
                      <option key={option.id} value={option.id} className="text-white bg-gray-900">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Dynamic Description */}
              <p className="text-gray-400 text-sm mb-4 min-h-[40px]">
                {selectedOption
                  ? selectedOption.description
                  : "Please select an option from the menu above to proceed."}
              </p>

              {/* Special Note for Hourly */}
              {selectedOption?.isHourly && (
                <div className="mb-6 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-blue-200">
                    <strong>Need more than 1 hour?</strong><br />
                    You can change the <strong>Quantity</strong> on the Stripe checkout page.
                  </p>
                </div>
              )}

                            {/* Dynamic Button */}
              {!selectedOption ? (
                <button
                  type="button"
                  className="mt-auto block w-full py-3 text-center rounded-lg font-bold bg-gray-800 text-gray-500 cursor-not-allowed"
                  disabled
                >
                  Select Service to Proceed
                </button>
              ) : selectedOption.link ? (
                <a
                  href={selectedOption.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto block w-full py-3 text-center rounded-lg font-bold transition-colors bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25"
                >
                  Proceed with Stripe
                </a>
              ) : (
                <Link
                  to={buildQuoteLink(
                    selectedOption.fallbackPkg || "Invoice / Payment Request",
                    selectedOption.fallbackNote || ""
                  )}
                  className="mt-auto block w-full py-3 bg-purple-600 hover:bg-purple-700 text-center rounded-lg font-bold transition-colors"
                >
                  Request an Invoice / Payment Link
                </Link>
              )}
            </div>

            {/* Option 2: Invoices / Alternate Payments */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500 transition-all flex flex-col">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                <Lock className="w-8 h-8 text-purple-300" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Invoice / Alternate Methods</h2>
              <p className="text-gray-400 mb-6">
                Want to pay by PayPal invoice, ACH, Venmo, Cash App, or Zelle? I’ll send the option that keeps personal details private.
              </p>

              <div className="space-y-3 mt-auto">
                <Link
                  to="/quote"
                  state={{ pkg: "Invoice / Payment Request" }}
                  className="block w-full py-3 bg-purple-600 hover:bg-purple-700 text-center rounded-lg font-semibold transition-colors"
                >
                  Request an Invoice / Payment Link
                </Link>

                <Link
                  to="/services"
                  className="block w-full py-3 bg-gray-800 hover:bg-gray-700 text-center rounded-lg font-semibold transition-colors"
                >
                  Review Services & Pricing
                </Link>
              </div>
            </div>

            {/* Option 3: Quick Pay Labels (no personal links exposed) */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500 transition-all md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold">Available Payment Methods</h2>
              </div>

              <p className="text-gray-400 mb-6">
                These are available by request (so you don’t have to rely on public handles/links).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800 rounded-lg flex justify-between items-center">
                  <span className="font-semibold">PayPal</span>
                  <span className="text-gray-400">Invoice link on request</span>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg flex justify-between items-center">
                  <span className="font-semibold">ACH / Bank Transfer</span>
                  <span className="text-gray-400">Details on request</span>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg flex justify-between items-center">
                  <span className="font-semibold">Venmo</span>
                  <span className="text-gray-400">Handle on request</span>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg flex justify-between items-center">
                  <span className="font-semibold">Cash App</span>
                  <span className="text-gray-400">Handle on request</span>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg flex justify-between items-center">
                  <span className="font-semibold">Zelle</span>
                  <span className="text-gray-400">Details on request</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg text-sm text-gray-300">
                Tip: If you’re paying a deposit for a project, request an invoice so it matches your contract/SOW and keeps everything documented.
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
