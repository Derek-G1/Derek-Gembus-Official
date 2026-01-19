import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { setPageMeta } from "./utils/seo";
import {
  ArrowLeft,
  FileText,
  ShieldCheck,
  Clock,
  DollarSign,
  Server,
  PenTool,
  AlertTriangle,
  ClipboardList,
  Scale,
  BadgeCheck,
} from "lucide-react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta({
      title: "Project Terms & Process | Derek Gembus",
      description:
        "Clear project terms covering discovery, scope, deliverables, revisions, timelines, payments, change requests, hosting, ownership, and client responsibilities.",
      canonicalPath: "/terms",
    });
  }, []);

  const billingEmail =
    process.env.REACT_APP_BILLING_EMAIL || "derek@derek-gembus.com";

  const lastUpdated = "January 18, 2026";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="pt-24 p-4 md:p-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-purple-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Project Terms & Process
          </h1>

          <p className="text-gray-400 mb-6">
            Last updated: <span className="text-gray-200">{lastUpdated}</span>
          </p>

          <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 mb-10">
            <p className="text-gray-300 leading-relaxed">
              This page explains how projects are scoped, priced, built, and
              delivered for services offered by Derek Gembus (“Developer”).
              These terms are intended to keep expectations clear and protect
              both sides. For larger projects, a formal agreement (MSA/SOW) can
              be provided.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Questions? Email{" "}
              <a
                className="text-purple-400 hover:text-purple-300"
                href={`mailto:${billingEmail}`}
              >
                {billingEmail}
              </a>
              .
            </p>
          </div>

          {/* Quick nav */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 mb-10">
            <div className="flex items-center gap-2 mb-3">
              <ClipboardList className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-bold">Quick Summary</h2>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>
                Scope is defined by the written quote / SOW — anything outside
                scope is a change order or separate quote.
              </li>
              <li>
                Work begins after deposit + required inputs (content/access) are
                received.
              </li>
              <li>
                Two revision rounds are included unless otherwise stated.
              </li>
              <li>
                Launch/handoff occurs after final payment is received.
              </li>
              <li>
                Hosting can be client-owned or developer-managed monthly plans
                (recommended).
              </li>
            </ul>
            <p className="text-gray-500 text-xs mt-4">
              Looking for the general workflow? See{" "}
              <Link
                to="/process"
                className="text-purple-400 hover:text-purple-300"
              >
                How Projects Work
              </Link>
              .
            </p>
          </div>

          <div className="space-y-6">
            {/* 1) Paid Discovery */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <BadgeCheck className="w-5 h-5 text-green-400" />
                <h2 className="text-xl font-bold">
                  1) Paid Discovery (Recommended for Medium+ Projects)
                </h2>
              </div>
              <p className="text-gray-300 mb-3">
                For medium/large projects, discovery prevents vague scope and
                inaccurate quotes.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Typical discovery deliverables: sitemap, feature breakdown,
                  stack recommendations, integrations list, and wireframes.
                </li>
                <li>
                  Discovery is billed as a fixed fee (commonly{" "}
                  <strong>$1,500–$5,000</strong>).
                </li>
                <li>
                  If we proceed to the build, discovery may be credited toward
                  the final project total (when agreed in writing).
                </li>
              </ul>
            </section>

            {/* 2) Scope & Deliverables */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-bold">2) Scope & Deliverables</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Every project begins with a written scope summary (quote/SOW)
                  describing pages, features, integrations, and deliverables.
                </li>
                <li>
                  Only deliverables listed in the scope are included. Requests
                  outside scope are handled as a change order or separate quote.
                </li>
                <li>
                  Work begins after deposit/payment terms are agreed and
                  required inputs are received (content, access, branding,
                  approvals).
                </li>
              </ul>

              <div className="mt-4 bg-black/30 border border-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="w-4 h-4 text-yellow-500" />
                  <h3 className="font-bold text-white">
                    Important: No Verbal Promises
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  To avoid confusion, anything not written into the quote/SOW is
                  not considered included — even if discussed in a call/text.
                  This prevents misunderstandings and protects both sides.
                </p>
              </div>
            </section>

            {/* 3) Revisions */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <PenTool className="w-5 h-5 text-purple-400" />
                <h2 className="text-xl font-bold">3) Revisions</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Most projects include <strong>2 revision rounds</strong>.
                </li>
                <li>
                  A “revision round” means one consolidated list of changes,
                  submitted at once.
                </li>
                <li>
                  Additional revision rounds, new features, redesigns, or
                  significant layout changes may be billed separately.
                </li>
              </ul>
            </section>

            {/* 4) Timelines + Rush + Delays */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl font-bold">
                  4) Timelines, Rush Work, and Client Delays
                </h2>
              </div>

              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Timelines start after deposit + required content/access is
                  received.
                </li>
                <li>
                  Delays in approvals, missing content, or late feedback can
                  shift delivery dates.
                </li>
                <li>
                  <strong>Rush work</strong> (compressed schedule) may include a
                  rush fee of <strong>+25% to +50%</strong>, depending on
                  complexity and timeline.
                </li>
                <li>
                  If content/feedback is not provided within{" "}
                  <strong>10 business days</strong> of request, the project may
                  be paused. A restart fee (commonly{" "}
                  <strong>$250+</strong>) may apply.
                </li>
              </ul>
            </section>

            {/* 5) Payments */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-5 h-5 text-green-400" />
                <h2 className="text-xl font-bold">5) Payments & Milestones</h2>
              </div>

              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Work does not begin without a deposit, and launch/handoff does
                  not occur until the final payment is received.
                </li>
                <li>
                  Standard payment structures (may vary by project):
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-300">
                    <li>
                      <strong>Small projects (&lt;$5,000):</strong> 50% upfront /
                      50% before launch
                    </li>
                    <li>
                      <strong>Medium projects ($5,000–$20,000):</strong> 40%
                      deposit / 30% design approval / 30% before launch
                    </li>
                    <li>
                      <strong>Large projects ($20,000+):</strong> milestone-based
                      invoices (fixed deliverables per phase)
                    </li>
                  </ul>
                </li>
                <li>
                  Third-party costs (hosting, domains, platform subscriptions,
                  plugin licenses, email services, policy tools, API fees, etc.)
                  are paid by the client unless explicitly included in writing.
                </li>
              </ul>

              <div className="mt-4 bg-black/30 border border-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  <h3 className="font-bold text-white">
                    Launch Requires Final Payment
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sites/apps are not deployed to production and final assets are
                  not delivered until invoices are paid in full.
                </p>
              </div>
            </section>

            {/* 6) Change Requests */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <h2 className="text-xl font-bold">6) Change Requests</h2>
              </div>
              <p className="text-gray-300 mb-3">
                “Can we just add one more thing?” is the #1 budget killer on web
                projects. Change requests are normal — they just need to be
                tracked and scoped properly.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  New pages/features/integrations not listed in the original
                  quote/SOW are not included by default.
                </li>
                <li>
                  Change requests may be handled via a change order, separate
                  quote, or hourly billing (depending on size).
                </li>
                <li>
                  The Developer may pause work until change scope and pricing
                  are approved in writing.
                </li>
              </ul>
            </section>

            {/* 7) Hosting & Maintenance */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Server className="w-5 h-5 text-yellow-400" />
                <h2 className="text-xl font-bold">7) Hosting, Maintenance, and Ownership</h2>
              </div>

              <p className="text-gray-300 mb-4">
                Hosting and maintenance are separate from the initial build.
                Hosting keeps the site online. Maintenance covers updates,
                backups, security monitoring, and small fixes within scope.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Hosting-only */}
                <div className="bg-black/30 border border-gray-800 rounded-xl p-4">
                  <div className="text-white font-bold mb-1">Hosting-only</div>
                  <div className="text-green-400 font-semibold mb-2">$25–$50/mo</div>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Hosting + SSL</li>
                    <li>• Basic uptime</li>
                    <li>• No edits included</li>
                  </ul>
                </div>

                {/* Hosting + Maintenance */}
                <div className="bg-black/30 border border-purple-500/30 rounded-xl p-4">
                  <div className="text-white font-bold mb-1">
                    Hosting + Maintenance
                  </div>
                  <div className="text-purple-400 font-semibold mb-2">$99–$299/mo</div>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Hosting</li>
                    <li>• Backups + updates</li>
                    <li>• Security monitoring</li>
                    <li>• Small fixes (within scope)</li>
                  </ul>
                </div>

                {/* Business Tier */}
                <div className="bg-black/30 border border-gray-800 rounded-xl p-4">
                  <div className="text-white font-bold mb-1">
                    Business Managed Hosting
                  </div>
                  <div className="text-green-400 font-semibold mb-2">$300–$2,000+/mo</div>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Staging environment</li>
                    <li>• Priority fixes</li>
                    <li>• Performance tuning</li>
                    <li>• SLA response times</li>
                  </ul>
                </div>
              </div>

              <div className="mt-5 bg-black/30 border border-gray-800 rounded-xl p-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-white">Ownership note:</strong> Hosting
                  accounts can be owned by the client or managed through a
                  monthly plan. If the Developer is hosting/managing your site,
                  monthly billing applies.
                </p>
              </div>
            </section>

            {/* 8) Policies + Compliance */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <h2 className="text-xl font-bold">8) Policies, Compliance, and Legal Disclaimer</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Many websites require a Privacy Policy and Terms (especially
                  when collecting emails, processing payments, or running
                  analytics).
                </li>
                <li>
                  The Developer can assist with implementation using reputable
                  tools/services, but does not provide legal advice.
                </li>
                <li>
                  Accessibility (ADA/WCAG) and privacy requirements (GDPR/CCPA)
                  may require separate audits and are quoted based on scope.
                </li>
              </ul>
            </section>

            {/* 9) Client Responsibilities */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-bold">9) Client Responsibilities</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Provide accurate business info, timely feedback, and access
                  credentials when needed.
                </li>
                <li>
                  Confirm you have rights to use any logos, images, fonts, or
                  content provided.
                </li>
                <li>
                  Changes to third-party services (APIs, plugins, builders,
                  payment processors) can require additional billable updates.
                </li>
              </ul>
            </section>

            {/* 10) Support & Warranty */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <h2 className="text-xl font-bold">10) Support, Warranty, and Ongoing Changes</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Post-launch support is limited to the scope agreed in writing.
                </li>
                <li>
                  Ongoing edits, new features, content updates, and maintenance
                  are handled via monthly plans or hourly billing.
                </li>
                <li>
                  Bug fixes for clearly developer-caused issues are handled
                  within a reasonable period after launch (as agreed per
                  project).
                </li>
              </ul>
            </section>

            {/* Footer note */}
            <div className="mt-8 text-xs text-gray-500">
              Website usage terms? See{" "}
              <Link
                to="/site-terms"
                className="text-purple-400 hover:text-purple-300"
              >
                Website Terms of Service
              </Link>
              .
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
