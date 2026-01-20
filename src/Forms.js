import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { setPageMeta } from "./utils/seo";
import { FileText, ClipboardList, ArrowRight, ShieldCheck } from "lucide-react";

const Forms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta({
      title: "Project Forms | Derek Gembus",
      description: "Access project intake forms: Discovery and Scope of Work.",
      canonicalPath: "/forms",
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 px-4 md:px-8 flex flex-col items-center">
        <div className="w-full max-w-5xl">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Project Forms
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Select the appropriate form to move your project forward. All submissions are cryptographically hashed for your security.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Discovery Card */}
            <Link 
              to="/discovery"
              className="group relative bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileText className="w-24 h-24 text-purple-500" />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all">
                  <FileText className="w-6 h-6" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Discovery Intake
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  The first step in our partnership. Use this form to outline your goals, budget, and requirements so we can determine if we are a good fit.
                </p>
                
                <div className="flex items-center text-sm font-semibold text-purple-400 group-hover:text-purple-300">
                  Start Discovery <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Scope of Work Card */}
            <Link 
              to="/scope-of-work"
              className="group relative bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <ClipboardList className="w-24 h-24 text-blue-500" />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all">
                  <ClipboardList className="w-6 h-6" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  Scope of Work
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  For projects ready to launch. Define the specific deliverables, timelines, and technical requirements to finalize our agreement.
                </p>
                
                <div className="flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300">
                  Submit Scope <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

          </div>

          {/* Security Note */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="p-3 bg-green-500/10 rounded-full text-green-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Secure & Verifiable</h3>
              <p className="text-sm text-gray-500">
                Both forms generate a cryptographic hash (SHA-256) of your submission. You will receive a PDF copy that matches this hash exactly, ensuring the integrity of our agreement.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Forms;