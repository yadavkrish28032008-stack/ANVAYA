import React from 'react';
import { Thermometer, Activity, Lock, ShieldCheck } from 'lucide-react';
import type { AssetConditionData } from '../types';

interface AssetConditionProps {
  condition: AssetConditionData;
  onToggleTempAlert: () => void;
}

export const AssetCondition: React.FC<AssetConditionProps> = ({
  condition,
  onToggleTempAlert,
}) => {
  const isTempAlert = condition.temperature > condition.tempThreshold;

  return (
    <section className="bento-card asset-condition-card" aria-label="Asset Health">
      <div className="card-top-bar">
        <div>
          <h3 className="section-title">Asset Health</h3>
          <p className="section-subtitle">Core condition metrics for monitored demo assets.</p>
        </div>
        <button
          className="demo-toggle-btn"
          onClick={onToggleTempAlert}
          title="Click to toggle temperature condition between normal and alert"
        >
          {isTempAlert ? 'Reset Temp (24.6°C)' : 'Simulate Temp Alert (>25°C)'}
        </button>
      </div>

      <div className="condition-items-grid">
        {/* Metric 1: Temperature */}
        <div className={`condition-item ${isTempAlert ? 'item-alert' : 'item-normal'}`}>
          <div className="item-header">
            <span className="item-title">Temperature</span>
            <div className={`item-icon ${isTempAlert ? 'icon-alert' : 'icon-normal'}`}>
              <Thermometer size={18} />
            </div>
          </div>

          <div className="item-value-line">
            <span className="item-value">{condition.temperature.toFixed(1)}°C</span>
            <span className={`status-badge ${isTempAlert ? 'alert' : 'normal'}`}>
              {isTempAlert ? 'Temperature Alert' : 'Normal'}
            </span>
          </div>

          <div className="item-sub-desc">
            {isTempAlert ? (
              <span className="text-danger font-medium">
                Threshold Exceeded (&gt; 25°C)
              </span>
            ) : (
              <span className="text-light">Normal threshold: &le; 25°C</span>
            )}
          </div>
        </div>

        {/* Metric 2: Vibration */}
        <div className="condition-item item-normal">
          <div className="item-header">
            <span className="item-title">Vibration</span>
            <div className="item-icon icon-normal">
              <Activity size={18} />
            </div>
          </div>

          <div className="item-value-line">
            <span className="item-value">{condition.vibration}</span>
            <span className="status-badge normal">Normal</span>
          </div>

          <div className="item-sub-desc">
            <span className="text-light">Within safe transport limits</span>
          </div>
        </div>

        {/* Metric 3: Tamper */}
        <div className="condition-item item-normal">
          <div className="item-header">
            <span className="item-title">Tamper</span>
            <div className="item-icon icon-normal">
              <Lock size={18} />
            </div>
          </div>

          <div className="item-value-line">
            <span className="item-value">{condition.tamper}</span>
            <span className="status-badge normal">Secure</span>
          </div>

          <div className="item-sub-desc">
            <span className="text-light">Enclosure seal intact</span>
          </div>
        </div>

        {/* Metric 4: Asset Identity */}
        <div className="condition-item item-normal">
          <div className="item-header">
            <span className="item-title">Asset Identity</span>
            <div className="item-icon icon-normal">
              <ShieldCheck size={18} />
            </div>
          </div>

          <div className="item-value-line">
            <span className="item-value">{condition.identity}</span>
            <span className="status-badge normal">Verified</span>
          </div>

          <div className="item-sub-desc">
            <span className="text-light">Authenticated hardware identity</span>
          </div>
        </div>
      </div>
    </section>
  );
};
