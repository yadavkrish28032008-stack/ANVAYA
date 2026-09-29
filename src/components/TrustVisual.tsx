import React from 'react';
import { Check } from 'lucide-react';
import type { TrustStatusData } from '../types';

interface TrustVisualProps {
  data: TrustStatusData;
}

export const TrustVisual: React.FC<TrustVisualProps> = ({ data }) => {
  return (
    <div className="editorial-trust-block" aria-label="ANVAYA Trust Status">
      {/* Background Subtle Security Linework Geometry */}
      <svg className="trust-geometry-watermark" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="80" stroke="#f1f5f9" strokeWidth="1.2" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="50" stroke="#e2e8f0" strokeWidth="1" />
        <polygon points="100,20 180,65 180,135 100,180 20,135 20,65" stroke="#f1f5f9" strokeWidth="1" />
      </svg>

      <div className="trust-header-row">
        <div>
          <span className="mono-sub">VERIFIABLE LEDGER STATUS</span>
          <h4 className="editorial-card-title">ANVAYA TRUST</h4>
        </div>
        <div className="trust-stamp-badge font-mono">
          <span className="status-dot green" />
          <span>{data.statusLabel.toUpperCase()}</span>
        </div>
      </div>

      {/* Security Checklist Linework */}
      <div className="trust-verification-list">
        <div className="trust-verify-item">
          <div className="item-name-group">
            <span className="verify-label">IDENTITY</span>
            <span className="verify-desc font-mono">HARDWARE ATTESTATION</span>
          </div>
          <div className="verify-badge verified">
            <Check size={12} strokeWidth={2.5} className="mr-1 text-success inline-block" />
            <span className="font-mono">VERIFIED</span>
          </div>
        </div>

        <div className="trust-verify-item">
          <div className="item-name-group">
            <span className="verify-label">EVENT RECORD</span>
            <span className="verify-desc font-mono">APPEND-ONLY IMMUTABILITY</span>
          </div>
          <div className="verify-badge verified">
            <Check size={12} strokeWidth={2.5} className="mr-1 text-success inline-block" />
            <span className="font-mono">VERIFIED</span>
          </div>
        </div>

        <div className="trust-verify-item">
          <div className="item-name-group">
            <span className="verify-label">INTEGRITY</span>
            <span className="verify-desc font-mono">PAYLOAD INTEGRITY PROOF</span>
          </div>
          <div className="verify-badge verified">
            <Check size={12} strokeWidth={2.5} className="mr-1 text-success inline-block" />
            <span className="font-mono">VERIFIED</span>
          </div>
        </div>
      </div>

      {/* Overall Seal Footer */}
      <div className="trust-seal-footer">
        <span className="seal-text">TRUST VERIFIED</span>
        <span className="seal-meta font-mono">AUDIT TIMESTAMP: 10:36:00 IST &middot; DEMO</span>
      </div>
    </div>
  );
};
