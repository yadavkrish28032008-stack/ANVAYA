import React from 'react';
import { Check } from 'lucide-react';
import type { TrustStatusData } from '../types';

interface TrustStatusProps {
  data: TrustStatusData;
}

export const TrustStatus: React.FC<TrustStatusProps> = ({ data }) => {
  return (
    <section className="bento-card trust-status-card" aria-label="Trust Status">
      <div className="card-top-bar">
        <div>
          <h3 className="section-title">Trust Status</h3>
          <p className="section-subtitle">Visual verification of recorded asset events.</p>
        </div>
        <div className="status-badge verified">
          {data.statusLabel}
        </div>
      </div>

      <div className="trust-checklist-box">
        <div className="trust-check-row">
          <div className="check-icon-circle">
            <Check size={16} className="text-success" />
          </div>
          <div className="check-text-content">
            <span className="check-title">Asset Identity Verified</span>
            <span className="check-desc">Asset identity is confirmed and authenticated.</span>
          </div>
        </div>

        <div className="trust-check-row">
          <div className="check-icon-circle">
            <Check size={16} className="text-success" />
          </div>
          <div className="check-text-content">
            <span className="check-title">Event Record Verified</span>
            <span className="check-desc">Asset events are securely logged and verified.</span>
          </div>
        </div>

        <div className="trust-check-row">
          <div className="check-icon-circle">
            <Check size={16} className="text-success" />
          </div>
          <div className="check-text-content">
            <span className="check-title">Data Integrity Verified</span>
            <span className="check-desc">Sensor and location records remain unchanged.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
