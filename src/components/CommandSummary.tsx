import React from 'react';
import type { OverviewMetrics } from '../types';

interface CommandSummaryProps {
  metrics: OverviewMetrics;
  onOpenAlerts?: () => void;
}

export const CommandSummary: React.FC<CommandSummaryProps> = ({ metrics, onOpenAlerts }) => {
  return (
    <section className="command-summary-strip" aria-label="Command Summary">
      {/* Top micro metadata header */}
      <div className="summary-strip-meta">
        <div className="meta-left">
          <span className="mono-sub">FLEET DISPATCH STATUS</span>
          <span className="meta-divider">&bull;</span>
          <span className="meta-timestamp font-mono">10:36:44 IST</span>
        </div>
        <div className="meta-right">
          <span className="badge-demo-inline">DEMO DATA</span>
          <span className="badge-notice-inline">SIMULATED NETWORK</span>
        </div>
      </div>

      {/* Editorial Metric Strip (Separated by hairlines, NOT separate cards) */}
      <div className="editorial-metric-grid">
        {/* Metric 1: Active Assets */}
        <div className="editorial-metric-cell cell-active">
          <div className="metric-accent-line cyan" />
          <div className="metric-num-wrap">
            <span className="editorial-number font-mono">{metrics.activeAssets}</span>
          </div>
          <div className="metric-label-wrap">
            <span className="editorial-label">ACTIVE ASSETS</span>
            <span className="editorial-sub">Global tracked fleet</span>
          </div>
        </div>

        {/* Separator */}
        <div className="editorial-separator" />

        {/* Metric 2: Normal */}
        <div className="editorial-metric-cell cell-normal">
          <div className="metric-accent-line green" />
          <div className="metric-num-wrap">
            <span className="editorial-number text-success font-mono">{metrics.normalAssets}</span>
          </div>
          <div className="metric-label-wrap">
            <span className="editorial-label">NORMAL</span>
            <span className="editorial-sub">92.2% within tolerance</span>
          </div>
        </div>

        {/* Separator */}
        <div className="editorial-separator" />

        {/* Metric 3: Tamper Alerts */}
        <div
          className="editorial-metric-cell cell-tamper clickable-metric"
          onClick={onOpenAlerts}
          title={onOpenAlerts ? "Open Alert Center for Tamper Events" : undefined}
          role={onOpenAlerts ? "button" : undefined}
          tabIndex={onOpenAlerts ? 0 : undefined}
        >
          <div className="metric-accent-line red" />
          <div className="metric-num-wrap">
            <span className="editorial-number text-danger font-mono">
              {String(metrics.tamperAlerts).padStart(2, '0')}
            </span>
            <span className="metric-arrow-hint text-danger">&rarr;</span>
          </div>
          <div className="metric-label-wrap">
            <span className="editorial-label text-danger">TAMPER ALERTS</span>
            <span className="editorial-sub">Enclosure events</span>
          </div>
        </div>

        {/* Separator */}
        <div className="editorial-separator" />

        {/* Metric 4: Temperature Alerts */}
        <div
          className="editorial-metric-cell cell-temp clickable-metric"
          onClick={onOpenAlerts}
          title={onOpenAlerts ? "Open Alert Center for Temperature Alerts" : undefined}
          role={onOpenAlerts ? "button" : undefined}
          tabIndex={onOpenAlerts ? 0 : undefined}
        >
          <div className="metric-accent-line orange" />
          <div className="metric-num-wrap">
            <span className="editorial-number text-warning font-mono">
              {String(metrics.temperatureAlerts).padStart(2, '0')}
            </span>
            <span className="metric-arrow-hint text-warning">&rarr;</span>
          </div>
          <div className="metric-label-wrap">
            <span className="editorial-label text-warning">TEMP ALERTS</span>
            <span className="editorial-sub">Exceeded threshold</span>
          </div>
        </div>
      </div>
    </section>
  );
};
