import React, { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { setPageMeta } from "./utils/seo";
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

function buildDiscoveryBodies(data) {
  const {
    from_name,
    user_email,
    timezone,
    company,
    user_phone,
    project_name,
    project_summary,
    budget_range,
    deadline,
    availability,
    notes,
    project_type_selected,
    goals_selected,
    services_selected,
  } = data;

  const client_body = [
    `Hi ${from_name || "there"},`,
    "",
    "Thanks for submitting the Discovery Intake form — I've received everything.",
    "",
    `Project: ${project_name || "(not provided)"}`,
    `Budget: ${budget_range || "(not provided)"}`,
    `Timeline: ${deadline || "(not provided)"}`,
    "",
    "Next steps:",
    "1) I'll review your details and follow up with any clarifying questions.",
    "2) If everything looks good, I'll send the Discovery invoice / scheduling details.",
    "",
    "— Derek",
  ].join("\n");

  const internal_body = [
    "=== DISCOVERY INTAKE (Internal Proof) ===",
    `Name: ${from_name}`,
    `Email: ${user_email}`,
    `Company: ${company || ""}`,
    `Phone: ${user_phone || ""}`,
    `Time Zone: ${timezone}`,
    "",
    `Project Name: ${project_name}`,
    "",
    "Project Summary:",
    project_summary,
    "",
    `Project Type(s): ${joinList(project_type_selected)}`,
    `Goals: ${joinList(goals_selected)}`,
    `Services Requested: ${joinList(services_selected)}`,
    "",
    `Budget Range: ${budget_range}`,
    `Timeline / Deadline: ${deadline}`,
    `Availability: ${availability}`,
    "",
    "Notes / Extra Context:",
    notes || "",
  ].join("\n");

  return { client_body, internal_body };
}

export default function Discovery() {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [loadTime, setLoadTime] = useState(Date.now());

  const [selectedProjectType, setSelectedProjectType] = useState([]);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  const [ackPaid, setAckPaid] = useState(false);
  const [ackNoDev, setAckNoDev] = useState(false);
  const [ackScope, setAckScope] = useState(false);

  const [signature, setSignature] = useState("");
  const [signedDate, setSignedDate] = useState(new Date().toISOString().slice(0, 10));

  const [submittedSnapshot, setSubmittedSnapshot] = useState(null);
  const [submissionId, setSubmissionId] = useState("");
  const [submissionHash, setSubmissionHash] = useState("");

  const timeZones = useMemo(() => {
    if (typeof Intl !== "undefined" && Intl.supportedValuesOf) {
      return Intl.supportedValuesOf("timeZone");
    }
    return ["UTC", "America/New_York", "America/Chicago", "America/Los_Angeles", "Europe/London"];
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
      title: "Discovery Form | Derek Gembus",
      description: "Paid discovery intake form for project planning + requirements gathering.",
      canonicalPath: "/discovery",
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
    exportPDF("discovery-pdf-template-blank", `Discovery_Blank_${new Date().toISOString().split("T")[0]}.pdf`);
  };

  const validateForm = () => {
    const formData = new FormData(form.current);
    const newErrors = {};

    if (!formData.get("from_name")?.trim().length) newErrors.from_name = "Name is required.";

    const email = formData.get("user_email");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.user_email = "Valid email is required.";
    }

    if (!formData.get("timezone")) newErrors.timezone = "Time zone is required.";
    if (!formData.get("project_name")?.trim().length) newErrors.project_name = "Project name is required.";
    if ((formData.get("project_summary") || "").trim().length < 20) newErrors.project_summary = "Summary is too short.";

    if (selectedProjectType.length === 0) newErrors.project_type_selected = "Select at least one.";
    if (selectedGoals.length === 0) newErrors.goals_selected = "Select at least one.";
    if (selectedServices.length === 0) newErrors.services_selected = "Select at least one.";

    if (!formData.get("budget_range")) newErrors.budget_range = "Budget is required.";
    if (!formData.get("availability")) newErrors.availability = "Availability is required.";

    if (!ackPaid) newErrors.ack_paid_ui = "Required.";
    if (!ackNoDev) newErrors.ack_no_dev_ui = "Required.";
    if (!ackScope) newErrors.ack_scope_ui = "Required.";

    if (!signature.trim()) newErrors.signature = "Signature required.";
    if (!signedDate) newErrors.signed_date = "Date required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      scrollToField(Object.keys(newErrors)[0]);
      return false;
    }
    return true;
  };

  const buildSnapshot = () => {
    const fd = new FormData(form.current);
    return {
      from_name: (fd.get("from_name") || "").trim(),
      company: (fd.get("company") || "").trim(),
      user_email: (fd.get("user_email") || "").trim(),
      user_phone: (fd.get("user_phone") || "").trim(),
      timezone: (fd.get("timezone") || "").trim(),

      project_name: (fd.get("project_name") || "").trim(),
      current_website: (fd.get("current_website") || "").trim(),
      project_summary: (fd.get("project_summary") || "").trim(),

      project_type_selected: [...selectedProjectType],
      goals_selected: [...selectedGoals],
      services_selected: [...selectedServices],

      budget_range: (fd.get("budget_range") || "").trim(),
      deadline: (fd.get("deadline") || "").trim(),
      availability: (fd.get("availability") || "").trim(),
      notes: (fd.get("notes") || "").trim(),

      ack_paid: ackPaid ? "YES" : "NO",
      ack_no_dev: ackNoDev ? "YES" : "NO",
      ack_scope: ackScope ? "YES" : "NO",

      signature: signature.trim(),
      signed_date: signedDate,
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

    const snapshot = buildSnapshot();
    const id = generateSubmissionId("DISC");

    const { client_body, internal_body } = buildDiscoveryBodies(snapshot);
    const hash = await sha256Hex(`${id}|${internal_body}`);

    setSubmittedSnapshot(snapshot);
    setSubmissionId(id);
    setSubmissionHash(hash);

    const templateParams = {
      email_subject: `Discovery Intake: ${snapshot.project_name} — ${snapshot.from_name}`,
      form_type: "Discovery Intake",
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
        exportPDF("discovery-pdf-template-filled", `Discovery_Submitted_${id}.pdf`);
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
          id="discovery-form-container"
          className="w-full max-w-4xl bg-gray-900/50 p-8 md:p-12 rounded-2xl border border-purple-500/30 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Discovery Form
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

            <p className="text-gray-400 mb-8 max-w-2xl">
              Discovery is a paid planning phase. This intake helps define requirements before a proposal.
            </p>

            {status === "success" ? (
              <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-8 text-center animate-fade-in mb-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Submitted successfully!</h3>
                <p className="text-gray-300 mb-4">
                  I received your Discovery form. Your submitted PDF matches exactly what was emailed.
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
                  onClick={() => exportPDF("discovery-pdf-template-filled", `Discovery_Submitted_${submissionId || "COPY"}.pdf`)}
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
                      <label className="block text-sm font-medium text-gray-400 mb-2">Current Website (if any)</label>
                      <input name="current_website" placeholder="https://..." onChange={onInputChange} className={inputClasses} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Project Summary *</label>
                      <textarea
                        name="project_summary"
                        onChange={onInputChange}
                        className={`${inputClasses} min-h-[120px] ${errors.project_summary ? "border-red-500 bg-red-500/5" : ""}`}
                      />
                      <ErrorText name="project_summary" errors={errors} />
                    </div>
                  </div>
                </Section>

                <Section title="3) Project Type">
                  <div className="grid md:grid-cols-2 gap-3">
                    {["Website", "Web App", "Mobile App", "Analytics / Tracking", "Automation", "Other"].map((label) => (
                      <CheckRow
                        key={label}
                        label={label}
                        checked={selectedProjectType.includes(label)}
                        onChange={() => toggleValue(selectedProjectType, setSelectedProjectType, label)}
                      />
                    ))}
                  </div>
                  <ErrorText name="project_type_selected" errors={errors} />
                </Section>

                <Section title="4) Goals">
                  <div className="grid md:grid-cols-2 gap-3">
                    {["Lead generation", "Increase sales", "Improve conversion rate", "Automation / efficiency", "Internal dashboard", "Other"].map(
                      (label) => (
                        <CheckRow
                          key={label}
                          label={label}
                          checked={selectedGoals.includes(label)}
                          onChange={() => toggleValue(selectedGoals, setSelectedGoals, label)}
                        />
                      )
                    )}
                  </div>
                  <ErrorText name="goals_selected" errors={errors} />
                </Section>

                <Section title="5) Services Needed">
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Custom website",
                      "Website redesign",
                      "Backend / API development",
                      "Database design",
                      "Authentication",
                      "Android app",
                      "iOS app",
                      "GA4 + GTM setup",
                      "Dashboards / reporting",
                      "Automation / integrations",
                      "Maintenance",
                    ].map((label) => (
                      <CheckRow
                        key={label}
                        label={label}
                        checked={selectedServices.includes(label)}
                        onChange={() => toggleValue(selectedServices, setSelectedServices, label)}
                      />
                    ))}
                  </div>
                  <ErrorText name="services_selected" errors={errors} />
                </Section>

                <Section title="6) Budget + Timing">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Budget Range *</label>
                      <input
                        name="budget_range"
                        placeholder="$1,500 – $5,000"
                        onChange={onInputChange}
                        className={`${inputClasses} ${errors.budget_range ? "border-red-500 bg-red-500/5" : ""}`}
                      />
                      <ErrorText name="budget_range" errors={errors} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Ideal Deadline</label>
                      <input name="deadline" type="date" className={inputClasses} />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Your availability *</label>
                      <select
                        name="availability"
                        onChange={onInputChange}
                        className={`${inputClasses} appearance-none ${errors.availability ? "border-red-500 bg-red-500/5" : ""}`}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select one…
                        </option>
                        <option>1–2 hours / week</option>
                        <option>3–5 hours / week</option>
                        <option>5–10 hours / week</option>
                        <option>Flexible / as needed</option>
                      </select>
                      <ErrorText name="availability" errors={errors} />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Extra notes</label>
                      <textarea name="notes" className={`${inputClasses} min-h-[90px]`} placeholder="Anything else helpful..." />
                    </div>
                  </div>
                </Section>

                <Section title="7) Acknowledgements + Signature">
                  <div className="space-y-3 p-4 bg-purple-500/5 rounded-xl border border-purple-500/20">
                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-1 mr-3 h-4 w-4 accent-purple-500"
                        checked={ackPaid}
                        onChange={(e) => setAckPaid(e.target.checked)}
                      />
                      <span className="text-sm text-gray-300">Discovery is a paid planning stage</span>
                    </label>
                    <ErrorText name="ack_paid_ui" errors={errors} />

                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-1 mr-3 h-4 w-4 accent-purple-500"
                        checked={ackNoDev}
                        onChange={(e) => setAckNoDev(e.target.checked)}
                      />
                      <span className="text-sm text-gray-300">Discovery does not include final development work</span>
                    </label>
                    <ErrorText name="ack_no_dev_ui" errors={errors} />

                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-1 mr-3 h-4 w-4 accent-purple-500"
                        checked={ackScope}
                        onChange={(e) => setAckScope(e.target.checked)}
                      />
                      <span className="text-sm text-gray-300">This submission defines the basis for the proposal scope</span>
                    </label>
                    <ErrorText name="ack_scope_ui" errors={errors} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Typed Name (Signature) *</label>
                      <input
                        name="signature"
                        value={signature}
                        onChange={(e) => {
                          setSignature(e.target.value);
                          onInputChange(e);
                        }}
                        className={`${inputClasses} ${errors.signature ? "border-red-500 bg-red-500/5" : ""}`}
                      />
                      <ErrorText name="signature" errors={errors} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Date *</label>
                      <input
                        name="signed_date"
                        type="date"
                        value={signedDate}
                        onChange={(e) => {
                          setSignedDate(e.target.value);
                          onInputChange(e);
                        }}
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

                <p className="text-xs text-gray-500 text-center mt-2">
                  By submitting, you confirm this information is accurate and complete.
                </p>
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
          {/* BLANK */}
          <div
            id="discovery-pdf-template-blank"
            style={{ padding: "28px", fontFamily: "Arial, sans-serif", fontSize: "12px", lineHeight: 1.5 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: "20px", fontWeight: 700 }}>Discovery Form</div>
                <div style={{ marginTop: "4px" }}>DerekGembus.com — Paid Discovery Intake</div>
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
              Time Zone: ____________________________________________
            </div>

            <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
              <b>Project</b>
              <br />
              Project Name: __________________________________________ <br />
              Current Website: _______________________________________ <br />
              <div style={{ marginTop: "8px" }}>
                Summary:
                <div style={{ border: "1px solid #999", height: "90px", marginTop: "6px" }} />
              </div>
            </div>

            <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
              <b>Selections</b>
              <div style={{ marginTop: "6px" }}>
                Project Type: ________________________________________ <br />
                Goals: _______________________________________________ <br />
                Services Needed: ______________________________________
              </div>
            </div>

            <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
              <b>Budget + Timing</b>
              <br />
              Budget Range: ____________________ <br />
              Deadline: ________________________ <br />
              Availability: ______________________ <br />
              Notes:
              <div style={{ border: "1px solid #999", height: "60px", marginTop: "6px" }} />
            </div>

            <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
              <b>Acknowledgements</b>
              <div style={{ marginTop: "6px" }}>
                ☐ Discovery is paid <br />
                ☐ No development included <br />
                ☐ Basis for scope proposal <br />
              </div>
            </div>

            <div style={{ border: "1px solid #333", padding: "10px" }}>
              Signature: ____________________________________ <br />
              Date: ____________________
            </div>

            <div style={{ fontSize: "10px", marginTop: "12px", color: "#444" }}>
              © DerekGembus.com — Printable Discovery Form
            </div>
          </div>

          {/* FILLED */}
          <div
            id="discovery-pdf-template-filled"
            style={{ padding: "28px", fontFamily: "Arial, sans-serif", fontSize: "12px", lineHeight: 1.5 }}
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
                    <div style={{ fontSize: "20px", fontWeight: 700 }}>Discovery (Submitted Copy)</div>
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
                </div>

                <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
                  <b>Project</b>
                  <br />
                  Project Name: {submittedSnapshot?.project_name || ""}
                  <br />
                  Current Website: {submittedSnapshot?.current_website || ""}
                  <div style={{ marginTop: "8px" }}>
                    <b>Summary:</b>
                  </div>
                  <div style={{ whiteSpace: "pre-wrap", border: "1px solid #999", padding: "8px", minHeight: "70px" }}>
                    {submittedSnapshot?.project_summary || ""}
                  </div>
                </div>

                <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
                  <b>Selections</b>

                  <div style={{ marginTop: "8px" }}>
                    <b>Project Type:</b>
                  </div>
                  <div style={{ whiteSpace: "pre-wrap" }}>
                    {(submittedSnapshot?.project_type_selected || []).map((x) => `• ${x}`).join("\n")}
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    <b>Goals:</b>
                  </div>
                  <div style={{ whiteSpace: "pre-wrap" }}>
                    {(submittedSnapshot?.goals_selected || []).map((x) => `• ${x}`).join("\n")}
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    <b>Services Needed:</b>
                  </div>
                  <div style={{ whiteSpace: "pre-wrap" }}>
                    {(submittedSnapshot?.services_selected || []).map((x) => `• ${x}`).join("\n")}
                  </div>
                </div>

                <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
                  <b>Budget + Timing</b>
                  <br />
                  Budget Range: {submittedSnapshot?.budget_range || ""}
                  <br />
                  Deadline: {submittedSnapshot?.deadline || ""}
                  <br />
                  Availability: {submittedSnapshot?.availability || ""}
                  <div style={{ marginTop: "8px" }}>
                    <b>Notes:</b>
                  </div>
                  <div style={{ whiteSpace: "pre-wrap", border: "1px solid #999", padding: "8px", minHeight: "50px" }}>
                    {submittedSnapshot?.notes || ""}
                  </div>
                </div>

                <div style={{ border: "1px solid #333", padding: "10px", marginBottom: "12px" }}>
                  <b>Acknowledgements</b>
                  <div style={{ marginTop: "6px" }}>
                    Discovery paid: <b>{submittedSnapshot?.ack_paid || "NO"}</b>
                  </div>
                  <div style={{ marginTop: "4px" }}>
                    No dev included: <b>{submittedSnapshot?.ack_no_dev || "NO"}</b>
                  </div>
                  <div style={{ marginTop: "4px" }}>
                    Scope basis confirmed: <b>{submittedSnapshot?.ack_scope || "NO"}</b>
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
