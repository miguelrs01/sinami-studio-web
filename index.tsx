import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const fullHash = window.location.hash || '';
if (fullHash.startsWith('#/')) {
  const newPath = fullHash.slice(1);
  window.history.replaceState(null, '', newPath);
}

const googleSiteVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;
if (googleSiteVerification) {
  const meta = document.createElement('meta');
  meta.name = 'google-site-verification';
  meta.content = googleSiteVerification;
  document.head.appendChild(meta);
}

const adsenseClient = import.meta.env.VITE_ADSENSE_CLIENT;
if (adsenseClient) {
  const script = document.createElement('script');
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(adsenseClient)}`;
  document.head.appendChild(script);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
