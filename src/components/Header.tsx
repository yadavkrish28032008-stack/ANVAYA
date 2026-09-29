import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onBackToLanding?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBackToLanding }) => {
  return (
    <header className="editorial-header">
      {/* Brand Left */}
      <div className="header-brand-wrap">
        <div className="header-logo-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="logo-svg">
            <path d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" />
            <circle cx="12" cy="11" r="2.5" fill="currentColor" />
            <path d="M12 8.5v-2M12 13.5v2M9.5 11h-2M14.5 11h2" strokeWidth="1.8" />
          </svg>
        </div>
        <div className="header-brand-text">
          <div className="brand-title-line">
            <span className="header-brand-name">ANVAYA</span>
            <span className="badge-demo-pill">DEMO</span>
          </div>
          <span className="header-tagline">Universal Asset Trust &amp; Monitoring Network</span>
        </div>
      </div>

      {/* Status Right */}
      <div className="header-status-wrap">
        {onBackToLanding && (
          <>
            <button
              className="header-back-landing-btn"
              onClick={onBackToLanding}
              title="Return to official ANVAYA Project Landing Page"
            >
              <span>&larr; Project Site</span>
            </button>
            <div className="header-status-divider" />
          </>
        )}

        <div className="header-status-item">
          <span className="status-label">Network</span>
          <div className="status-val-wrap">
            <span className="status-dot green" />
            <span className="status-val">Online &middot; Demo</span>
          </div>
        </div>

        <div className="header-status-divider" />

        <div className="header-status-item">
          <span className="status-label">Ledger</span>
          <div className="status-val-wrap">
            <ShieldCheck size={14} className="text-success inline-icon" />
            <span className="status-val">Verified &middot; Demo</span>
          </div>
        </div>
      </div>
    </header>
  );
};
