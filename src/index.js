import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import PrivacyPolicy from './PrivacyPolicy';
import Payment from './Payment';
import Services from './Services';
import Quote from './Quote';
import Terms from './Terms';
import NotFound from './NotFound';

import SiteTerms from './SiteTerms';
import Process from './Process';
import ScopeOfWork from './ScopeOfWork';
import Discovery from './Discovery';

import ErrorBoundary from './components/ErrorBoundary';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* ✅ Router MUST be outside ErrorBoundary so <Link> always works */}
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>

          {/* ✅ Fix Soft 404 / duplicate URL: /index.html -> / */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />

          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/scope-of-work" element={<ScopeOfWork />} />
          <Route path="/pay" element={<Payment />} />

          {/* Project Terms & Process */}
          <Route path="/terms" element={<Terms />} />

          {/* New pages */}
          <Route path="/site-terms" element={<SiteTerms />} />
          <Route path="/process" element={<Process />} />

          {/* ✅ Always last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();


