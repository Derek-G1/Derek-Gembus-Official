import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { setPageMeta } from "./utils/seo";
import {
  ArrowLeft,
  Scale,
  ShieldCheck,
  Link as LinkIcon,
  AlertTriangle,
  FileText,
  Gavel,
  Mail,
} from "lucide-react";

const SiteTerms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta({
      title: "Website Terms of Service | Derek Gembus",
      description:
        "Terms of Service for using DerekGembus.com. Includes permitted use, disclaimers, limitation of liability, and third-party service notices.",
      canonicalPath: "/site-terms",
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
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-purple-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Website Terms of Service
          </h1>

          <p className="text-gray-400 mb-8">
            Last updated: <span className="text-gray-200">{lastUpdated}</span>
          </p>

          <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 mb-10">
            <p className="text-gray-300">
              These Terms of Service (“Terms”) govern your use of this website
              and any related pages, forms, or links operated by Derek Gembus
              (“we”, “us”, “our”). By accessing or using this website, you agree
              to these Terms.
            </p>
          </div>

          <div className="space-y-6">
            {/* Acceptable Use */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <h2 className="text-xl font-bold">Acceptable Use</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>You may browse and interact with this website for lawful purposes only.</li>
                <li>
                  You agree not to misuse the website, including attempting to gain unauthorized access,
                  scraping content, or disrupting site functionality.
                </li>
                <li>
                  Automated access (bots/scrapers) is prohibited unless explicitly permitted in writing.
                </li>
              </ul>
            </section>

            {/* IP */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-bold">Intellectual Property</h2>
              </div>
              <p className="text-gray-300">
                All website content, branding, layout, code, text, and graphics are owned by Derek Gembus
                or licensed appropriately. You may not copy, reproduce, republish, distribute, or exploit
                content from this site without written permission.
              </p>
            </section>

            {/* No Advice */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl font-bold">No Professional Advice</h2>
              </div>
              <p className="text-gray-300">
                Information provided on this website is for general informational purposes only and does not
                constitute legal, financial, tax, or professional advice. You should consult the appropriate
                professionals before making decisions based on any information found here.
              </p>
            </section>

            {/* No Guarantees */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <h2 className="text-xl font-bold">No Guarantees</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  We do not guarantee specific outcomes from using this website or any services described here.
                </li>
                <li>
                  Examples of non-guaranteed outcomes include: search rankings, traffic volume, revenue,
                  conversion rate improvements, analytics data accuracy, or platform approval (e.g. app store review outcomes).
                </li>
              </ul>
            </section>

            {/* Third Party Links */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <LinkIcon className="w-5 h-5 text-purple-400" />
                <h2 className="text-xl font-bold">Third-Party Services & Links</h2>
              </div>
              <p className="text-gray-300 mb-3">
                This website may reference or link to third-party services (examples: hosting providers,
                Stripe, PayPal, Google, analytics tools, plugins, or website builders).
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Third-party services are governed by their own policies, uptime, pricing, and terms.
                </li>
                <li>
                  We are not responsible for third-party outages, account issues, policy changes, or pricing changes.
                </li>
              </ul>
            </section>

            {/* Disclaimer */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Gavel className="w-5 h-5 text-red-400" />
                <h2 className="text-xl font-bold">Disclaimer</h2>
              </div>
              <p className="text-gray-300">
                This website is provided on an “as-is” and “as-available” basis. We make no warranties,
                express or implied, regarding reliability, availability, or suitability for any purpose.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <h2 className="text-xl font-bold">Limitation of Liability</h2>
              </div>
              <p className="text-gray-300 mb-3">
                To the maximum extent permitted by law, Derek Gembus is not liable for any indirect,
                incidental, special, consequential, or punitive damages arising from your use of this website.
              </p>
              <p className="text-gray-400 text-sm">
                If liability is found, it will be limited to the amount you paid (if any) for services directly related
                to the issue in question, unless otherwise required by law.
              </p>
            </section>

            {/* Changes */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl font-bold">Changes to These Terms</h2>
              </div>
              <p className="text-gray-300">
                These Terms may be updated at any time. Your continued use of the website after updates
                constitutes acceptance of the revised Terms.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <h2 className="text-xl font-bold">Contact</h2>
              </div>
              <p className="text-gray-300">
                Questions about these Terms can be sent to{" "}
                <a
                  className="text-purple-400 hover:text-purple-300"
                  href={`mailto:${billingEmail}`}
                >
                  {billingEmail}
                </a>
                .
              </p>
            </section>
          </div>

          <div className="mt-10 text-sm text-gray-500">
            Looking for client/project rules? See{" "}
            <Link to="/terms" className="text-purple-400 hover:text-purple-300">
              Project Terms & Process
            </Link>
            .
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SiteTerms;
