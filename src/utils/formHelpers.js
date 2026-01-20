import html2pdf from "html2pdf.js";

/**
 * Shared utility functions for Discovery and Scope of Work forms
 */

// Join array or return string, with fallback for empty
export function joinList(list) {
  if (Array.isArray(list)) return list.length ? list.join(", ") : "(none)";
  return list || "(none)";
}

// Generate SHA-256 hash as hex string
export async function sha256Hex(str) {
  const enc = new TextEncoder();
  const data = enc.encode(str);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Generate submission ID with prefix
// e.g., SOW-20260120-7F3K2B or DISC-20260120-AB12CD
export function generateSubmissionId(prefix = "SUB") {
  const date = new Date();
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${prefix}-${y}${m}${d}-${rand}`;
}

// Get PDF scale based on device type
export function getPdfScale() {
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  return isMobile ? 2 : 4;
}

// Export element to PDF
export function exportPDF(elementId, filename) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const opt = {
    margin: [12, 12],
    filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: getPdfScale(), useCORS: true, backgroundColor: "#ffffff" },
    pagebreak: { mode: ["css", "legacy"] },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(opt).from(element).save();
}

// Scroll to field with offset for fixed header
export function scrollToField(fieldName) {
  const el = document.getElementsByName(fieldName)?.[0];
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => {
    window.scrollBy({ top: -110, left: 0, behavior: "smooth" });
  }, 250);
}

// Bot protection check
export function isLikelyBot(formData, loadTime) {
  // Honeypot field filled or form submitted too quickly
  return formData.get("confirm_email") || Date.now() - loadTime < 3000;
}
