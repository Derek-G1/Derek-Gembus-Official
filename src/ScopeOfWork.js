import React, { useEffect, useRef, useState, useMemo } from "react";
import { setPageMeta } from "./utils/seo";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import emailjs from "@emailjs/browser";
import { ArrowLeft, Send, CheckCircle, AlertCircle, Download } from "lucide-react";
 
import { ErrorText, Section, CheckRow, inputClasses } from "./components/FormElements";
import {
  joinList,
  sha256Hex,
  generateSubmissionId,
  exportPDF,
  scrollToField,
  isLikelyBot,
} from "./utils/formHelpers";
 
function buildSowBodies(data) {
  const {
    from_name,
    user_email,
    timezone,
    project_name,
    primary_objective,
    project_description,
    pages_screens,
    required_features,
    out_of_scope,
    phase_two,
    target_start,
    target_end,
    budget,
    billing_model,
    third_party_costs,
    services_selected,
    access_provided,
    signature,
    signed_date,
  } = data;
 
  const client_body = [
    `Hi ${from_name || "there"},`,
    "",
    "Thanks — I received your Scope of Work submission.",
    "",
    `Project: ${project_name || "(not provided)"}`,
    `Budget: ${budget || "(not provided)"}`,
    `Timeline: ${target_start || "(start TBD)"} → ${target_end || "(completion TBD)"}`,
    "",
    "Next steps:",
    "1) I'll review this SOW and confirm anything that needs clarification.",
    "2) You'll receive a proposal + deposit request to begin work.",
    "",
    "— Derek",
  ].join("\n");
 
  const internal_body = [
    "=== SCOPE OF WORK (Internal Proof) ===",
    `Name: ${from_name}`,
    `Email: ${user_email}`,
    `Time Zone: ${timezone}`,
    "",
    `Project Name: ${project_name}`,
    `Primary Objective: ${primary_objective}`,
    "",
    "Project Description:",
    project_description,
    "",
    `Pages / Screens: ${pages_screens || ""}`,
    "",
    "Required Features:",
    required_features,
    "",
    "Out of Scope:",
    out_of_scope || "",
    "",
    "Phase 2 / Future Ideas:",
    phase_two || "",
    "",
    `Services Included: ${joinList(services_selected)}`,
    `Access Needed: ${joinList(access_provided)}`,
    "",
    `Target Start: ${target_start || ""}`,
    `Target Completion: ${target_end || ""}`,
    `Budget Range: ${budget}`,
    `Billing Model: ${billing_model}`,
    `Third-Party Costs: ${third_party_costs}`,
    "",
    `Signature: ${signature}`,
    `Signed Date: ${signed_date}`,
  ].join("\n");
 
  return { client_body, internal_body };
}
 
export default function ScopeOfWork() {
  const form = useRef();
 
  const [status, setStatus] = useState("");
  const [loadTime, setLoadTime] = useState(Date.now());
  const [errors, setErrors] = useState({});
 
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedAccess, setSelectedAccess] = useState([]);
 
  const [ackScope, setAckScope] = useState(false);
  const [ackChanges, setAckChanges] = useState(false);
  const [ackRevisions, setAckRevisions] = useState(false);
  const [ackDelays, setAckDelays] = useState(false);
  const [ackStart, setAckStart] = useState(false);
  const [ackCosts, setAckCosts] = useState(false);
 
  const [submittedSnapshot, setSubmittedSnapshot] = useState(null);
  const [submissionId, setSubmissionId] = useState("");
  const [submissionHash, setSubmissionHash] = useState("");
 
  const timeZones = useMemo(() => {
    if (typeof Intl !== "undefined" && Intl.supportedValuesOf) {
      return Intl.supportedValuesOf("timeZone");
    }
    return ["UTC", "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles", "Europe/London"];
  }, []);
 
  const defaultTimeZone = useMemo(() => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    } catch {
      return "";
    }
  }, []);
 
  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta({
      title: "Scope of Work Submission | Derek Gembus",
      description: "Submit project scope details for proposal generation after Discovery.",
      canonicalPath: "/scope-of-work",
    });
    setLoadTime(Date.now());
  }, []);
 
  const toggleValue = (arr, setArr, value) => {
    setArr((prev) => (prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]));
  };
 
  const onInputChange = (e) => {
    const { name } = e.target;
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };
 
  const downloadBlankPDF = () => {
    exportPDF("sow-pdf-template-blank", `SOW_Blank_${new Date().toISOString().split("T")[0]}.pdf`);
  };
 
  const validateForm = () => {
    const newErrors = {};
    const formData = new FormData(form.current);
 
    if (!formData.get("from_name")?.trim().length) newErrors.from_name = "Name is required.";
 
    const email = formData.get("user_email");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.user_email = "Valid email is required.";
    }
 
    if (!formData.get("timezone")) newErrors.timezone = "Time zone is required.";
    if (!formData.get("project_name")) newErrors.project_name = "Project name is required.";
 
    if ((formData.get("project_description") || "").length < 20) {
      newErrors.project_description = "Description is too short.";
    }
 
    if (!formData.get("primary_objective")) newErrors.primary_objective = "Required.";
    if (selectedServices.length === 0) newErrors.services_selected = "Select at least one service.";
 
    if ((formData.get("required_features") || "").trim().length < 10) {
      newErrors.required_features = "Required features is too short.";
    }
 
    if (!formData.get("budget")) newErrors.budget = "Budget is required.";
    if (!formData.get("billing_model")) newErrors.billing_model = "Billing model is required.";
    if (!formData.get("third_party_costs")) newErrors.third_party_costs = "Third-party costs acknowledgement required.";
 
    if (!ackScope) newErrors.ack_scope_ui = "Required.";
    if (!ackChanges) newErrors.ack_changes_ui = "Required.";
    if (!ackRevisions) newErrors.ack_revisions_ui = "Required.";
    if (!ackDelays) newErrors.ack_delays_ui = "Required.";
    if (!ackStart) newErrors.ack_start_ui = "Required.";
    if (!ackCosts) newErrors.ack_costs_ui = "Required.";
 
    if (!formData.get("signature")?.trim().length) newErrors.signature = "Signature required.";
    if (!formData.get("signed_date")) newErrors.signed_date = "Date required.";
 
    setErrors(newErrors);
 
    if (Object.keys(newErrors).length > 0) {
      scrollToField(Object.keys(newErrors)[0]);
      return false;
    }
    return true;
  };
 
  const buildSOWSnapshot = () => {
    const fd = new FormData(form.current);
 
    return {
      from_name: (fd.get("from_name") || "").trim(),
      company: (fd.get("company") || "").trim(),
      user_email: (fd.get("user_email") || "").trim(),
      user_phone: (fd.get("user_phone") || "").trim(),
      timezone: (fd.get("timezone") || "").trim(),
      location: (fd.get("location") || "").trim(),
 
      project_name: (fd.get("project_name") || "").trim(),
      primary_objective: (fd.get("primary_objective") || "").trim(),
      project_description: (fd.get("project_description") || "").trim(),
 
      services_selected: [...selectedServices],
 
      pages_screens: (fd.get("pages_screens") || "").trim(),
      required_features: (fd.get("required_features") || "").trim(),
      out_of_scope: (fd.get("out_of_scope") || "").trim(),
      phase_two: (fd.get("phase_two") || "").trim(),
 
      design_direction: (fd.get("design_direction") || "").trim(),
      content_owner: (fd.get("content_owner") || "").trim(),
      content_deadline: (fd.get("content_deadline") || "").trim(),
 
      target_start: (fd.get("target_start") || "").trim(),
      target_end: (fd.get("target_end") || "").trim(),
      budget: (fd.get("budget") || "").trim(),
      billing_model: (fd.get("billing_model") || "").trim(),
 
      milestones: (fd.get("milestones") || "").trim(),
 
      access_provided: [...selectedAccess],
      third_party_costs: (fd.get("third_party_costs") || "").trim(),
 
      ack_scope: ackScope ? "YES" : "NO",
      ack_changes: ackChanges ? "YES" : "NO",
      ack_revisions: ackRevisions ? "YES" : "NO",
      ack_delays: ackDelays ? "YES" : "NO",
      ack_start: ackStart ? "YES" : "NO",
      ack_costs: ackCosts ? "YES" : "NO",
 
      signature: (fd.get("signature") || "").trim(),
      signed_date: (fd.get("signed_date") || "").trim(),
    };
  };
 
  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
 
    if (isLikelyBot(formData, loadTime)) {
      setStatus("success");
      return;
    }
 
    if (!validateForm()) return;
 
    setStatus("sending");
 
    const snapshot = buildSOWSnapshot();
    const id = generateSubmissionId("SOW");
 
    const { client_body, internal_body } = buildSowBodies(snapshot);
    const hash = await sha256Hex(`${id}|${internal_body}`);
 
    setSubmittedSnapshot(snapshot);
    setSubmissionId(id);
    setSubmissionHash(hash);
 
    const templateParams = {
      email_subject: `Scope of Work: ${snapshot.project_name} — ${snapshot.from_name}`,
      form_type: "Scope of Work",
      date: new Date().toLocaleString(),
      submission_id: id,
      submission_hash: hash,
      from_name: snapshot.from_name,
      user_email: snapshot.user_email,
      client_body,
      internal_body,
    };
 
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_INTAKE_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
 
      setStatus("success");
 
      setTimeout(() => {
        exportPDF("sow-pdf-template-filled", `SOW_Submitted_${id}.pdf`);
      }, 500);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };
 
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
 
      <div className="pt-24 p-4 md:p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mb-8">
          <Link to="/process" className="inline-flex items-center text-gray-400 hover:text-purple-400 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Process
          </Link>
        </div>
 
        <div
          id="sow-form-container"
          className="w-full max-w-4xl bg-gray-900/50 p-8 md:p-12 rounded-2xl border border-purple-500/30 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />
 
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Scope of Work
              </h1>
 
              <button
                type="button"
                onClick={downloadBlankPDF}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/30 rounded-lg hover:bg-purple-500/20 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Blank PDF
              </button>
            </div>
 
            <p className="text-gray-400 mb-8 max-w-2xl">This form defines the final scope of your project after Discovery.</p>
 
            {status === "success" ? (
              <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-8 text-center animate-fade-in mb-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Submitted successfully!</h3>
                <p className="text-gray-300 mb-4">
                  I received your Scope of Work. Your submitted PDF copy matches exactly what was emailed.
                </p>
 
                <div className="text-xs text-gray-400 mb-4">
                  <div>
                    <b>Submission ID:</b> {submissionId || "—"}
                  </div>
                  <div className="mt-1" style={{ wordBreak: "break-word" }}>
                    <b>Submission Hash:</b> {submissionHash || "—"}
                  </div>
                </div>
 
                <button
                  onClick={() => exportPDF("sow-pdf-template-filled", `SOW_Submitted_${submissionId || "COPY"}.pdf`)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition"
                >
                  <Download className="w-4 h-4" /> Download Submitted Copy (PDF)
                </button>
              </div>
            ) : status === "error" ? (
              <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-6 text-center mb-8">
                <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-2" />
                <p className="text-gray-200 font-semibold">Something went wrong.</p>
                <p className="text-gray-400 text-sm">Please try again or email me directly.</p>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-8" noValidate>
                <input type="text" name="confirm_email" tabIndex="-1" autoComplete="off" className="hidden" />
 
                <Section title="1) Client Information">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                      <input
                        name="from_name"
                        onChange={onInputChange}
                        className={`${inputClasses} ${errors.from_name ? "border-red-500 bg-red-500/5" : ""}`}
                      />
                      <ErrorText name="from_name" errors={errors} />
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Company / Organization</label>
                      <input name="company" onChange={onInputChange} className={inputClasses} />
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                      <input
                        name="user_email"
                        type="email"
                        onChange={onInputChange}
                        className={`${inputClasses} ${errors.user_email ? "border-red-500 bg-red-500/5" : ""}`}
                      />
                      <ErrorText name="user_email" errors={errors} />
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                      <input name="user_phone" onChange={onInputChange} className={inputClasses} />
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Time Zone *</label>
                      <select
                        name="timezone"
                        onChange={onInputChange}
                        defaultValue={defaultTimeZone}
                        className={`${inputClasses} appearance-none ${errors.timezone ? "border-red-500 bg-red-500/5" : ""}`}
                      >
                        <option value="" disabled>
                          Select your time zone...
                        </option>
                        {timeZones.map((tz) => (
                          <option key={tz} value={tz}>
                            {tz}
                          </option>
                        ))}
                      </select>
                      <ErrorText name="timezone" errors={errors} />
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Business Location</label>
                      <input name="location" placeholder="City, State, Country" onChange={onInputChange} className={inputClasses} />
                    </div>
                  </div>
                </Section>
 
                <Section title="2) Project Summary">
                  <div className="grid gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Project Name *</label>
                      <input
                        name="project_name"
                        onChange={onInputChange}
                        className={`${inputClasses} ${errors.project_name ? "border-red-500 bg-red-500/5" : ""}`}
                      />
                      <ErrorText name="project_name" errors={errors} />
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Project Description *</label>
                      <textarea
                        name="project_description"
                        onChange={onInputChange}
                        className={`${inputClasses} min-h-[120px] ${errors.project_description ? "border-red-500 bg-red-500/5" : ""}`}
                      />
                      <ErrorText name="project_description" errors={errors} />
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Primary Objective *</label>
                      <select name="primary_objective" onChange={onInputChange} className={`${inputClasses} appearance-none`} defaultValue="">
                        <option value="" disabled>
                          Select one…
                        </option>
                        <option>Website Development</option>
                        <option>Website Redesign</option>
                        <option>Lead generation</option>
                        <option>Product / service sales</option>
                        <option>Internal tooling</option>
                        <option>Automation / efficiency</option>
                        <option>Analytics & insights</option>
                        <option>Mobile application</option>
                        <option>Other</option>
                      </select>
                      <ErrorText name="primary_objective" errors={errors} />
                    </div>
                  </div>
                </Section>
 
                <Section title="3) Services Included">
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Custom website",
                      "Website redesign",
                      "Single-page application (SPA)",
                      "Backend / API development",
                      "Database design / migration",
                      "Authentication / user accounts",
                      "Android app",
                      "iOS app",
                      "App store deployment",
                      "GA4 + GTM setup",
                      "Conversion tracking",
                      "Dashboards / reporting",
                      "Workflow automation",
                      "API integrations",
                      "Ongoing maintenance",
                    ].map((label) => (
                      <CheckRow
                        key={label}
                        label={label}
                        checked={selectedServices.includes(label)}
                        onChange={() => toggleValue(selectedServices, setSelectedServices, label)}
                      />
                    ))}
                  </div>
                  {errors.services_selected && <p className="mt-4 text-xs text-red-400 font-medium">{errors.services_selected}</p>}
                </Section>
 
                <Section title="4) Requirements & Deliverables">
                  <div className="grid gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">List of Pages / Screens (Deliverables)</label>
                      <textarea
                        name="pages_screens"
                        onChange={onInputChange}
                        className={`${inputClasses} min-h-[80px]`}
                        placeholder="e.g. Home, About, Services, Contact, Dashboard, Login..."
                      />
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Required Features *</label>
                      <textarea
                        name="required_features"
                        onChange={onInputChange}
                        className={`${inputClasses} min-h-[110px] ${errors.required_features ? "border-red-500 bg-red-500/5" : ""}`}
                        placeholder="List specific functionality..."
                      />
                      <ErrorText name="required_features" errors={errors} />
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Out of Scope / Exclusions</label>
                      <textarea
                        name="out_of_scope"
                        onChange={onInputChange}
                        className={`${inputClasses} min-h-[90px]`}
                        placeholder="Things we agreed are NOT included in this phase"
                      />
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Phase 2 Ideas</label>
                      <textarea
                        name="phase_two"
                        onChange={onInputChange}
                        className={`${inputClasses} min-h-[90px]`}
                        placeholder="Future features or enhancements"
                      />
                    </div>
                  </div>
                </Section>
 
                <Section title="5) Design & Content">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Design Direction</label>
                      <select name="design_direction" onChange={onInputChange} className={`${inputClasses} appearance-none`} defaultValue="">
                        <option value="" disabled>
                          Select one…
                        </option>
                        <option>Minimal / clean</option>
                        <option>Professional / corporate</option>
                        <option>Custom / branded</option>
                        <option>Developer-focused</option>
                      </select>
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Content Responsibility</label>
                      <select name="content_owner" onChange={onInputChange} className={`${inputClasses} appearance-none`} defaultValue="">
                        <option value="" disabled>
                          Select one…
                        </option>
                        <option>Client provides all content</option>
                        <option>Mix of client + consultant</option>
                        <option>Consultant assists with content</option>
                      </select>
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Content Deadline</label>
                      <input name="content_deadline" type="date" className={inputClasses} />
                    </div>
                  </div>
                </Section>
 
                <Section title="6) Timeline & Budget">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Target Start Date</label>
                      <input name="target_start" type="date" className={inputClasses} />
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Target Completion</label>
                      <input name="target_end" type="date" className={inputClasses} />
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Budget Range *</label>
                      <input
                        name="budget"
                        placeholder="$2,500 – $5,000"
                        onChange={onInputChange}
                        className={`${inputClasses} ${errors.budget ? "border-red-500 bg-red-500/5" : ""}`}
                      />
                      <ErrorText name="budget" errors={errors} />
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Billing Model *</label>
                      <select name="billing_model" onChange={onInputChange} className={`${inputClasses} appearance-none`} defaultValue="">
                        <option value="" disabled>
                          Select one…
                        </option>
                        <option>Fixed-price</option>
                        <option>Hourly</option>
                        <option>Retainer</option>
                      </select>
                      <ErrorText name="billing_model" errors={errors} />
                    </div>
                  </div>
 
                  <div className="mt-5">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Milestones</label>
                    <textarea name="milestones" placeholder={"Milestone 1: ...\nMilestone 2: ..."} className={`${inputClasses} min-h-[90px]`} />
                  </div>
                </Section>
 
                <Section title="7) Access & Third-Party Costs">
                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {["Domain registrar access", "Hosting provider access", "Analytics account access", "Repository access", "API keys access"].map(
                      (label) => (
                        <CheckRow
                          key={label}
                          label={label}
                          checked={selectedAccess.includes(label)}
                          onChange={() => toggleValue(selectedAccess, setSelectedAccess, label)}
                        />
                      )
                    )}
                  </div>
 
                  <label className="block text-sm font-medium text-gray-400 mb-2">Third-party costs acknowledgement *</label>
                  <select name="third_party_costs" onChange={onInputChange} className={`${inputClasses} appearance-none`} defaultValue="">
                    <option value="" disabled>
                      Select one…
                    </option>
                    <option>Client responsible for ongoing hosting/domains/subscriptions</option>
                    <option>Included only if explicitly stated in proposal</option>
                  </select>
                  <ErrorText name="third_party_costs" errors={errors} />
                </Section>
 
                <Section title="8) Acknowledgements (Required)">
                  <div className="space-y-3 p-4 bg-purple-500/5 rounded-xl border border-purple-500/20">
                    <label className="flex items-start cursor-pointer group">
                      <input
                        type="checkbox"
                        name="ack_scope_ui"
                        className="mt-1 mr-3 h-4 w-4 accent-purple-500"
                        checked={ackScope}
                        onChange={(e) => setAckScope(e.target.checked)}
                      />
                      <span className="text-sm text-gray-300">This Scope of Work reflects the full agreed scope</span>
                    </label>
                    <ErrorText name="ack_scope_ui" errors={errors} />
 
                    <label className="flex items-start cursor-pointer group">
                      <input
                        type="checkbox"
                        name="ack_changes_ui"
                        className="mt-1 mr-3 h-4 w-4 accent-purple-500"
                        checked={ackChanges}
                        onChange={(e) => setAckChanges(e.target.checked)}
                      />
                      <span className="text-sm text-gray-300">Scope changes may require revised pricing and timeline</span>
                    </label>
                    <ErrorText name="ack_changes_ui" errors={errors} />
 
                    <label className="flex items-start cursor-pointer group">
                      <input
                        type="checkbox"
                        name="ack_revisions_ui"
                        className="mt-1 mr-3 h-4 w-4 accent-purple-500"
                        checked={ackRevisions}
                        onChange={(e) => setAckRevisions(e.target.checked)}
                      />
                      <span className="text-sm text-gray-300">I acknowledge standard 2 rounds of revisions (unless otherwise agreed)</span>
                    </label>
                    <ErrorText name="ack_revisions_ui" errors={errors} />
 
                    <label className="flex items-start cursor-pointer group">
                      <input
                        type="checkbox"
                        name="ack_delays_ui"
                        className="mt-1 mr-3 h-4 w-4 accent-purple-500"
                        checked={ackDelays}
                        onChange={(e) => setAckDelays(e.target.checked)}
                      />
                      <span className="text-sm text-gray-300">I understand delays in feedback/content will shift the timeline</span>
                    </label>
                    <ErrorText name="ack_delays_ui" errors={errors} />
 
                    <label className="flex items-start cursor-pointer group">
                      <input
                        type="checkbox"
                        name="ack_start_ui"
                        className="mt-1 mr-3 h-4 w-4 accent-purple-500"
                        checked={ackStart}
                        onChange={(e) => setAckStart(e.target.checked)}
                      />
                      <span className="text-sm text-gray-300">Work begins only after proposal approval + deposit</span>
                    </label>
                    <ErrorText name="ack_start_ui" errors={errors} />
 
                    <label className="flex items-start cursor-pointer group">
                      <input
                        type="checkbox"
                        name="ack_costs_ui"
                        className="mt-1 mr-3 h-4 w-4 accent-purple-500"
                        checked={ackCosts}
                        onChange={(e) => setAckCosts(e.target.checked)}
                      />
                      <span className="text-sm text-gray-300">Third-party costs are billed separately unless stated</span>
                    </label>
                    <ErrorText name="ack_costs_ui" errors={errors} />
                  </div>
 
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Typed Name (Signature) *</label>
                      <input
                        name="signature"
                        onChange={onInputChange}
                        className={`${inputClasses} ${errors.signature ? "border-red-500 bg-red-500/5" : ""}`}
                      />
                      <ErrorText name="signature" errors={errors} />
                    </div>
 
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Date *</label>
                      <input
                        name="signed_date"
                        type="date"
                        defaultValue={new Date().toISOString().slice(0, 10)}
                        onChange={onInputChange}
                        className={`${inputClasses} ${errors.signed_date ? "border-red-500 bg-red-500/5" : ""}`}
                      />
                      <ErrorText name="signed_date" errors={errors} />
                    </div>
                  </div>
                </Section>
 
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg transition-all transform hover:scale-[1.02] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {status === "sending" ? "Sending..." : "Submit + Download Submitted Copy (PDF)"}
                </button>
 
                <p className="text-xs text-gray-500 text-center mt-2">By submitting, you confirm this information is accurate and complete.</p>
              </form>
            )}
          </div>
        </div>
 
        {/* Hidden PDF Templates */}
        <div
          style={{
            position: "absolute",
            left: "-99999px",
            top: 0,
            width: "794px",
            background: "white",
            color: "black",
          }}
        >
          {/* BLANK TEMPLATE */}
          <div
            id="sow-pdf-template-blank"
            style={{
              padding: "28px",
              fontFamily: "Arial, sans-serif",
              fontSize: "12px",
              lineHeight: 1.5,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 700 }}>Scope of Work</div>
                <div style={{ marginTop: "4px" }}>DerekGembus.com — Project Scope Intake</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div>Date: ____________________</div>
                <div style={{ marginTop: "4px" }}>Project ID: ____________</div>
              </div>
            </div>
 
            <hr style={{ margin: "14px 0", border: "none", borderTop: "1px solid #333" }} />
 
            <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
              <b>Client</b>
              <br />
              Name: ________________________________________________ <br />
              Company: _____________________________________________ <br />
              Email: ________________________________________________ <br />
              Phone: ________________________________________________ <br />
              Time Zone: ____________________________________________ <br />
              Location: _____________________________________________
            </div>
 
            <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
              <b>Project</b>
              <br />
              Project Name: __________________________________________ <br />
              Primary Objective: _____________________________________ <br />
              <div style={{ marginTop: "8px" }}>
                Description:
                <div style={{ border: "1px solid #999", height: "90px", marginTop: "6px" }} />
              </div>
            </div>
 
            <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
              <b>Services Selected</b>
              <div style={{ marginTop: "6px" }}>
                ☐ Custom website &nbsp;&nbsp; ☐ Website redesign <br />
                ☐ SPA &nbsp;&nbsp; ☐ Backend/API &nbsp;&nbsp; ☐ Database <br />
                ☐ GA4/GTM &nbsp;&nbsp; ☐ Dashboards &nbsp;&nbsp; ☐ Automation <br />
                ☐ Integrations &nbsp;&nbsp; ☐ Maintenance
              </div>
            </div>
 
            <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
              <b>Requirements</b>
              <div style={{ marginTop: "6px" }}>
                Pages / Screens:
                <div style={{ border: "1px solid #999", height: "40px", marginTop: "6px" }} />
              </div>
              <div style={{ marginTop: "10px" }}>
                Required Features:
                <div style={{ border: "1px solid #999", height: "60px", marginTop: "6px" }} />
              </div>
              <div style={{ marginTop: "10px" }}>
                Out of Scope:
                <div style={{ border: "1px solid #999", height: "40px", marginTop: "6px" }} />
              </div>
              <div style={{ marginTop: "10px" }}>
                Phase 2 Ideas:
                <div style={{ border: "1px solid #999", height: "40px", marginTop: "6px" }} />
              </div>
            </div>
 
            <div style={{ pageBreakBefore: "always", height: 1, visibility: "hidden" }}></div>
 
            <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
              <b>Timeline & Budget</b>
              <br />
              Target Start: ____________________ <br />
              Target Completion: _______________ <br />
              Budget Range: ____________________ <br />
              Billing Model: ____________________ <br />
            </div>
 
            <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
              <b>Acknowledgements</b>
              <div style={{ marginTop: "6px" }}>
                ☐ Scope is approved for this phase <br />
                ☐ Changes may affect cost/time <br />
                ☐ Revisions are limited <br />
                ☐ Delays shift the timeline <br />
                ☐ Work starts after deposit/access <br />
                ☐ Third-party costs are separate <br />
              </div>
            </div>
 
            <div style={{ border: "1px solid #333", padding: "10px" }}>
              Signature: ____________________________________ <br />
              Date: ____________________
            </div>
 
            <div style={{ fontSize: "10px", marginTop: "12px", color: "#444" }}>
              © DerekGembus.com — Printable Scope of Work Form
            </div>
          </div>
 
          {/* SUBMITTED COPY TEMPLATE */}
          <div
            id="sow-pdf-template-filled"
            style={{
              padding: "28px",
              fontFamily: "Arial, sans-serif",
              fontSize: "12px",
              lineHeight: 1.5,
            }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                  opacity: 0.08,
                  transform: "rotate(-18deg)",
                  fontSize: "72px",
                  fontWeight: 800,
                  color: "#000",
                  letterSpacing: "3px",
                  zIndex: 0,
                }}
              >
                SUBMITTED COPY
              </div>
 
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                  <div>
                    <div style={{ fontSize: "20px", fontWeight: 700 }}>Scope of Work (Submitted Copy)</div>
                    <div style={{ marginTop: "4px" }}>DerekGembus.com</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div>
                      <b>Submission ID:</b> {submissionId || "—"}
                    </div>
                    <div style={{ marginTop: "4px", fontSize: "10px", maxWidth: "260px", wordBreak: "break-word" }}>
                      <b>Hash (short):</b> {submissionHash ? submissionHash.slice(0, 28) + "..." : "—"}
                    </div>
                  </div>
                </div>
 
                <hr style={{ margin: "14px 0", border: "none", borderTop: "1px solid #333" }} />
 
                <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
                  <b>Client</b>
                  <br />
                  Name: {submittedSnapshot?.from_name || ""}
                  <br />
                  Company: {submittedSnapshot?.company || ""}
                  <br />
                  Email: {submittedSnapshot?.user_email || ""}
                  <br />
                  Phone: {submittedSnapshot?.user_phone || ""}
                  <br />
                  Time Zone: {submittedSnapshot?.timezone || ""}
                  <br />
                  Location: {submittedSnapshot?.location || ""}
                </div>
 
                <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
                  <b>Project</b>
                  <br />
                  Project Name: {submittedSnapshot?.project_name || ""}
                  <br />
                  Primary Objective: {submittedSnapshot?.primary_objective || ""}
                  <div style={{ marginTop: "8px" }}>
                    <b>Description:</b>
                  </div>
                  <div style={{ whiteSpace: "pre-wrap", border: "1px solid #999", padding: "8px", minHeight: "70px" }}>
                    {submittedSnapshot?.project_description || ""}
                  </div>
                </div>
 
                <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
                  <b>Services Selected</b>
                  <div style={{ whiteSpace: "pre-wrap", marginTop: "6px" }}>
                    {(submittedSnapshot?.services_selected || []).map((x) => `• ${x}`).join("\n")}
                  </div>
                </div>
 
                <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
                  <b>Requirements</b>
 
                  <div style={{ marginTop: "8px" }}>
                    <b>Pages / Screens:</b>
                  </div>
                  <div style={{ whiteSpace: "pre-wrap", border: "1px solid #999", padding: "8px", minHeight: "40px" }}>
                    {submittedSnapshot?.pages_screens || ""}
                  </div>
 
                  <div style={{ marginTop: "10px" }}>
                    <b>Required Features:</b>
                  </div>
                  <div style={{ whiteSpace: "pre-wrap", border: "1px solid #999", padding: "8px", minHeight: "55px" }}>
                    {submittedSnapshot?.required_features || ""}
                  </div>
 
                  <div style={{ marginTop: "10px" }}>
                    <b>Out of Scope:</b>
                  </div>
                  <div style={{ whiteSpace: "pre-wrap", border: "1px solid #999", padding: "8px", minHeight: "40px" }}>
                    {submittedSnapshot?.out_of_scope || ""}
                  </div>
 
                  <div style={{ marginTop: "10px" }}>
                    <b>Phase 2 Ideas:</b>
                  </div>
                  <div style={{ whiteSpace: "pre-wrap", border: "1px solid #999", padding: "8px", minHeight: "40px" }}>
                    {submittedSnapshot?.phase_two || ""}
                  </div>
                </div>
 
                <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
                  <b>Timeline & Budget</b>
                  <br />
                  Target Start: {submittedSnapshot?.target_start || ""}
                  <br />
                  Target Completion: {submittedSnapshot?.target_end || ""}
                  <br />
                  Budget Range: {submittedSnapshot?.budget || ""}
                  <br />
                  Billing Model: {submittedSnapshot?.billing_model || ""}
                  <div style={{ marginTop: "8px" }}>
                    <b>Milestones:</b>
                  </div>
                  <div style={{ whiteSpace: "pre-wrap", border: "1px solid #999", padding: "8px", minHeight: "45px" }}>
                    {submittedSnapshot?.milestones || ""}
                  </div>
                </div>
 
                <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
                  <b>Access & Costs</b>
                  <div style={{ marginTop: "6px" }}>
                    <b>Access Provided:</b>
                  </div>
                  <div style={{ whiteSpace: "pre-wrap" }}>
                    {(submittedSnapshot?.access_provided || []).map((x) => `• ${x}`).join("\n")}
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <b>Third Party Costs:</b> {submittedSnapshot?.third_party_costs || ""}
                  </div>
                </div>
 
                <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
                  <b>Acknowledgements</b>
                  <div style={{ marginTop: "6px" }}>
                    SOW approved: <b>{submittedSnapshot?.ack_scope || "NO"}</b>
                  </div>
                  <div style={{ marginTop: "4px" }}>
                    Scope changes acknowledged: <b>{submittedSnapshot?.ack_changes || "NO"}</b>
                  </div>
                  <div style={{ marginTop: "4px" }}>
                    Revisions acknowledged: <b>{submittedSnapshot?.ack_revisions || "NO"}</b>
                  </div>
                  <div style={{ marginTop: "4px" }}>
                    Delays acknowledged: <b>{submittedSnapshot?.ack_delays || "NO"}</b>
                  </div>
                  <div style={{ marginTop: "4px" }}>
                    Start conditions acknowledged: <b>{submittedSnapshot?.ack_start || "NO"}</b>
                  </div>
                  <div style={{ marginTop: "4px" }}>
                    Third party costs acknowledged: <b>{submittedSnapshot?.ack_costs || "NO"}</b>
                  </div>
                </div>
 
                <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
                  <b>Signature</b>
                  <div style={{ marginTop: "6px" }}>
                    Signature: <b>{submittedSnapshot?.signature || ""}</b>
                  </div>
                  <div style={{ marginTop: "4px" }}>
                    Signed Date: <b>{submittedSnapshot?.signed_date || ""}</b>
                  </div>
                </div>
 
                <div style={{ fontSize: "10px", color: "#444", marginTop: "10px" }}>
                  <div>
                    <b>Submission ID:</b> {submissionId || "—"}
                  </div>
                  <div style={{ marginTop: "4px", wordBreak: "break-all" }}>
                    <b>Full Submission Hash:</b> {submissionHash || "—"}
                  </div>
                  <div style={{ marginTop: "6px" }}>
                    Integrity Proof: This PDF was generated from the same values sent via EmailJS.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <Footer />
    </div>
  );
}