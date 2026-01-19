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

import ErrorBoundary from './components/ErrorBoundary';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* ✅ Router MUST be outside ErrorBoundary so <Link> always works */}
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quote" element={<Quote />} />
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

