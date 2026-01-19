import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { setPageMeta } from "./utils/seo";
import {
  ArrowLeft,
  ClipboardList,
  ShieldCheck,
  PenTool,
  Clock,
  DollarSign,
  Rocket,
  Server,
  AlertTriangle,
} from "lucide-react";

const Process = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta({
      title: "Project Process | Derek Gembus",
      description:
        "How projects work from discovery to launch: scope, payments, revisions, timelines, handoff, hosting, and ongoing support.",
      canonicalPath: "/process",
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="pt-24 p-4 md:p-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-purple-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Project Process
          </h1>

          <p className="text-gray-300 mb-10 leading-relaxed">
            This page explains how I run projects end-to-end so expectations stay clear,
            timelines stay realistic, and nobody gets stuck in endless “quick changes.”
            If you want the official rules/coverage, see{" "}
            <Link
              to="/terms"
              className="text-purple-400 hover:text-purple-300"
            >
              Terms & Project Process
            </Link>
            .
          </p>

          {/* Steps */}
          <div className="space-y-6">
            {/* Step 1 */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <ClipboardList className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl font-bold">1) Discovery + Scope</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  We confirm your goals, required pages, integrations, and what “done” means.
                </li>
                <li>
                  Larger projects may require a paid discovery phase to avoid vague scope.
                </li>
                <li>
                  Deliverable: written scope summary (pages, features, timeline, price).
                </li>
              </ul>
            </section>

            {/* Step 2 */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <PenTool className="w-5 h-5 text-purple-400" />
                <h2 className="text-xl font-bold">2) Design Direction</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  You provide branding, examples you like, and any content you already have.
                </li>
                <li>
                  If needed, I create layout direction (wireframe-style structure) before building.
                </li>
                <li>
                  Deliverable: design direction approval so we don’t waste build time.
                </li>
              </ul>
            </section>

            {/* Step 3 */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <h2 className="text-xl font-bold">3) Build + Implementation</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Development begins after deposit + required access/content is received.
                </li>
                <li>
                  Mobile-first layout, performance, clean structure, and SEO fundamentals included.
                </li>
                <li>
                  Deliverable: working staging build for review.
                </li>
              </ul>
            </section>

            {/* Step 4 */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-bold">4) Review + Revisions</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Most projects include <strong>2 revision rounds</strong>.
                </li>
                <li>
                  A revision round is one consolidated list of changes (submitted at once).
                </li>
                <li>
                  Anything outside the original scope becomes a change order or hourly add-on.
                </li>
              </ul>
            </section>

            {/* Step 5 */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-5 h-5 text-yellow-400" />
                <h2 className="text-xl font-bold">5) Final Payment + Launch</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Launch happens after the final invoice is paid.
                </li>
                <li>
                  DNS + domain + SSL setup is handled carefully to avoid downtime.
                </li>
                <li>
                  Deliverable: production site live, verified, and working.
                </li>
              </ul>
            </section>

            {/* Step 6 */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Server className="w-5 h-5 text-green-400" />
                <h2 className="text-xl font-bold">6) Hosting + Maintenance Options</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Hosting-only: <strong>$25–$50/mo</strong> (hosting + SSL + basic uptime)
                </li>
                <li>
                  Hosting + Maintenance: <strong>$99–$299/mo</strong> (backups, updates, security monitoring, small fixes)
                </li>
                <li>
                  Business Managed Hosting: <strong>$300–$2,000+/mo</strong> (staging, priority fixes, performance tuning, SLA)
                </li>
              </ul>

              <div className="mt-4 bg-black/30 border border-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  <h3 className="font-bold text-white">Important note</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If I host/manage your site, it must be on a monthly plan. This prevents downtime risk
                  and keeps support clearly scoped.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="mt-10 bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="w-5 h-5 text-purple-400" />
                <h2 className="text-xl font-bold">Ready to start?</h2>
              </div>
              <p className="text-gray-300 mb-5">
                If you’re ready, request a quote and I’ll respond with next steps + timeline.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/quote"
                  className="px-5 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors text-center font-semibold"
                >
                  Request a Quote
                </Link>
                <Link
                  to="/services"
                  className="px-5 py-3 rounded-lg border border-gray-700 hover:border-purple-500 hover:text-purple-300 transition-colors text-center"
                >
                  View Services
                </Link>
              </div>
            </section>
          </div>

          <p className="text-xs text-gray-500 mt-10">
            Website legal terms? See{" "}
            <Link to="/site-terms" className="text-purple-400 hover:text-purple-300">
              Website Terms of Service
            </Link>
            .
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Process;
