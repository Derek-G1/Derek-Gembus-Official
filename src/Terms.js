import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ArrowLeft, FileText, ShieldCheck } from 'lucide-react';
import { setPageMeta } from './utils/seo';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta({
      title: 'Terms & Project Process | Derek Gembus',
      description: 'Project process, revisions, scope, payments, and key terms for website, analytics, and custom software services.',
      canonicalPath: '/terms'
    });
  }, []);

  const billingEmail = process.env.REACT_APP_BILLING_EMAIL || 'billing@DerekGembus.com';

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="pt-24 p-4 md:p-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-purple-400 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Terms & Project Process
          </h1>

          <p className="text-gray-300 mb-8">
            This page explains how projects are scoped, built, and delivered. Formal contracts (MSA/SOW) can be provided for each project.
            If you have questions, email <a className="text-purple-400 hover:text-purple-300" href={`mailto:${billingEmail}`}>{billingEmail}</a>.
          </p>

          <div className="space-y-6">

            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <h2 className="text-xl font-bold">Scope & Deliverables</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Every project starts with a clear scope summary (pages/features/integrations) and a timeline estimate.</li>
                <li>Work begins after deposit/payment terms are agreed and required inputs are received (content, access, branding).</li>
                <li>Requests that expand the original scope (new pages/features/integrations) are handled as a change order or separate quote.</li>
              </ul>
            </section>

            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-bold">Revisions</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Projects include <strong>2 revision rounds</strong>. A revision round is one consolidated list of changes.</li>
                <li>Additional revisions, major redesigns, or new features may be billed separately.</li>
              </ul>
            </section>

            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-2">Payments</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Typical build projects require a deposit to reserve a start date (often 50%).</li>
                <li>Remaining balance is due prior to launch/handoff unless otherwise stated in the SOW.</li>
                <li>Third-party costs (hosting, domains, ecommerce platforms, Power BI/Tableau licenses, etc.) are paid by the client unless explicitly included.</li>
              </ul>
            </section>

            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-2">Client Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Provide accurate business info, timely feedback, and access credentials when needed (DNS, hosting, analytics, etc.).</li>
                <li>Confirm you have rights to use any logos, images, or content provided.</li>
                <li>Delays in content/feedback can shift timelines.</li>
              </ul>
            </section>

            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-2">Templates (Optional)</h2>
              <p className="text-gray-300 mb-3">
                If you want to review a lightweight starting point, these templates are available:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a className="px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-center"
                   href="/docs/SOW-template.md" target="_blank" rel="noopener noreferrer">
                  View SOW Template
                </a>
                <a className="px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-center"
                   href="/docs/MSA-template.md" target="_blank" rel="noopener noreferrer">
                  View MSA Template
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Note: Templates are starting points and may be adjusted per project.
              </p>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
