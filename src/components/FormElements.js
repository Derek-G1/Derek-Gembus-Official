import React from "react";

/**
 * Shared form UI components for Discovery and Scope of Work pages
 */

// Error message display
export const ErrorText = ({ name, errors }) =>
  errors[name] ? (
    <p className="mt-1 text-xs text-red-400 font-medium">{errors[name]}</p>
  ) : null;

// Form section wrapper with title
export const Section = ({ title, children }) => (
  <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6 shadow-sm">
    <h3 className="text-lg font-bold text-white border-b border-gray-700 pb-2 mb-4">
      {title}
    </h3>
    {children}
  </div>
);

// Checkbox row with label styling
export const CheckRow = ({ label, checked, onChange }) => (
  <label
    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
      checked
        ? "border-purple-500/50 bg-purple-900/20"
        : "border-gray-700 bg-gray-800 hover:border-gray-600"
    }`}
  >
    <input
      type="checkbox"
      className="mt-1 h-4 w-4 accent-purple-500"
      checked={checked}
      onChange={onChange}
    />
    <span className={checked ? "text-purple-100 text-sm" : "text-gray-300 text-sm"}>
      {label}
    </span>
  </label>
);

// Shared input styling
export const inputClasses =
  "w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-purple-500 outline-none transition-all placeholder-gray-500 scroll-mt-28";
