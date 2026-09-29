import React from 'react';
import { Thermometer, Activity, Lock, ShieldCheck } from 'lucide-react';
import type { AssetConditionData } from '../types';

interface AssetHealthCardProps {
  condition: AssetConditionData;
  onToggleTempAlert: () => void;
}

export const AssetHealthCard: React.FC<AssetHealthCardProps> = ({
  condition,
  onToggleTempAlert,
}) => {
  const isTempAlert = condition.temperature > condition.tempThreshold;

  // Temperature range visual position (0% to 100% across range 15°C - 35°C)
  const minTemp = 15;
  const maxTemp = 35;
  const tempPct = Math.min(100, Math.max(0, ((condition.temperature - minTemp) / (maxTemp - minTemp)) * 100));
  const thresholdPct = ((condition.tempThreshold - minTemp) / (maxTemp - minTemp)) * 100;

  return (
    <div className="editorial-health-block" aria-label="Asset Health">
      <div className="health-header-row">
        <div className="health-title-wrap">
          <span className="mono-sub">CORE TELEMETRY</span>
          <h4 className="editorial-card-title">ASSET HEALTH</h4>
        </div>
        <button
          className="editorial-action-btn"
          onClick={onToggleTempAlert}
          title="Toggle simulated temperature threshold event"
        >
          {isTempAlert ? 'Reset Temp (24.6°C)' : 'Simulate Alert (>25°C)'}
        </button>
      </div>

      {/* 1. Temperature Gauge Slider Line */}
      <div className={`health-temp-spec ${isTempAlert ? 'alert-active' : ''}`}>
        <div className="temp-top-meta">
          <div className="temp-title-line">
            <Thermometer size={14} className={isTempAlert ? "text-danger" : "text-primary"} />
            <span className="temp-metric-name">TEMPERATURE</span>
          </div>
          <div className="temp-reading-wrap">
            <span className={`temp-val font-mono ${isTempAlert ? 'text-danger' : 'text-main'}`}>
              {condition.temperature.toFixed(1)}&deg;C
            </span>
            <span className={`status-pill ${isTempAlert ? 'alert' : 'normal'}`}>
              {isTempAlert ? 'THRESHOLD EXCEEDED' : 'NORMAL'}
            </span>
          </div>
        </div>

        {/* Linear Spectrum Indicator (──────────────●────) */}
        <div className="temp-gauge-track">
          <div className="gauge-safe-range" style={{ width: `${thresholdPct}%` }} />
          <div
            className="gauge-threshold-tick"
            style={{ left: `${thresholdPct}%` }}
            title="Max Safe Threshold: 25.0°C"
          >
            <span className="threshold-tooltip font-mono">25°C MAX</span>
          </div>
          <div
            className={`gauge-cursor-pin ${isTempAlert ? 'alert' : 'normal'}`}
            style={{ left: `${tempPct}%` }}
          />
        </div>

        <div className="gauge-axis-labels font-mono">
          <span>15&deg;C MIN</span>
          <span>THRESHOLD: 25&deg;C</span>
          <span>35&deg;C MAX</span>
        </div>
      </div>

      {/* 2. Triplet Condition Status Grid (Vibration, Tamper, Identity) */}
      <div className="health-triplet-grid">
        {/* Vibration */}
        <div className="health-triplet-cell">
          <div className="cell-top">
            <Activity size={13} className="text-light" />
            <span className="cell-label">VIBRATION</span>
          </div>
          <div className="cell-reading">
            <span className="cell-val">{condition.vibration}</span>
            <span className="cell-status-bullet normal" />
          </div>
          <span className="cell-sub font-mono">SAFE TOLERANCE</span>
        </div>

        {/* Tamper */}
        <div className="health-triplet-cell">
          <div className="cell-top">
            <Lock size={13} className="text-light" />
            <span className="cell-label">TAMPER</span>
          </div>
          <div className="cell-reading">
            <span className="cell-val">{condition.tamper}</span>
            <span className="cell-status-bullet normal" />
          </div>
          <span className="cell-sub font-mono">SEAL INTACT</span>
        </div>

        {/* Identity */}
        <div className="health-triplet-cell">
          <div className="cell-top">
            <ShieldCheck size={13} className="text-light" />
            <span className="cell-label">IDENTITY</span>
          </div>
          <div className="cell-reading">
            <span className="cell-val">{condition.identity}</span>
            <span className="cell-status-bullet normal" />
          </div>
          <span className="cell-sub font-mono">CRYPTO AUTH</span>
        </div>
      </div>
    </div>
  );
};
