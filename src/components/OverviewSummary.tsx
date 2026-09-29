import React from 'react';
import { Layers, CheckCircle2, AlertOctagon, Thermometer } from 'lucide-react';
import type { OverviewMetrics } from '../types';

interface OverviewSummaryProps {
  metrics: OverviewMetrics;
  onOpenAlerts?: () => void;
}

export const OverviewSummary: React.FC<OverviewSummaryProps> = ({ metrics, onOpenAlerts }) => {
  return (
    <section className="overview-section" aria-label="Dashboard Overview">
      {/* Overview Page Heading Block */}
      <div className="page-heading-block">
        <div className="heading-left">
          <h2 className="page-title">Overview</h2>
          <p className="page-subtitle">Simple view of monitored assets, condition and trust status.</p>
        </div>
        <div className="heading-right">
          <span className="badge-demo">DEMO MODE</span>
          <span className="badge-notice">SIMULATED DATA</span>
        </div>
      </div>

      {/* ROW 1: 4 Compact Bento KPI Cards */}
      <div className="summary-cards-grid bento-row-1">
        {/* CARD 1: Active Assets */}
        <div className="bento-card kpi-card kpi-active">
          <div className="kpi-top-bar">
            <span className="kpi-label">Active Assets</span>
            <div className="kpi-icon-wrap cyan">
              <Layers size={18} />
            </div>
          </div>
          <div className="kpi-metric-val">{metrics.activeAssets}</div>
          <div className="kpi-footer-desc">Demo monitored assets</div>
        </div>

        {/* CARD 2: Normal Assets */}
        <div className="bento-card kpi-card kpi-normal">
          <div className="kpi-top-bar">
            <span className="kpi-label">Normal Assets</span>
            <div className="kpi-icon-wrap green">
              <CheckCircle2 size={18} />
            </div>
          </div>
          <div className="kpi-metric-val text-success">{metrics.normalAssets}</div>
          <div className="kpi-footer-desc">Currently normal &bull; 92%</div>
        </div>

        {/* CARD 3: Tamper Alerts */}
        <div
          className="bento-card kpi-card kpi-tamper clickable-summary-card"
          onClick={onOpenAlerts}
          title={onOpenAlerts ? "View in Alert Center" : undefined}
        >
          <div className="kpi-top-bar">
            <span className="kpi-label">Tamper Alerts</span>
            <div className="kpi-icon-wrap red">
              <AlertOctagon size={18} />
            </div>
          </div>
          <div className="kpi-metric-val text-danger">
            {String(metrics.tamperAlerts).padStart(2, '0')}
          </div>
          <div className="kpi-footer-desc text-danger font-medium">
            Simulated alerts &rarr;
          </div>
        </div>

        {/* CARD 4: Temperature Alerts */}
        <div
          className="bento-card kpi-card kpi-temp clickable-summary-card"
          onClick={onOpenAlerts}
          title={onOpenAlerts ? "View in Alert Center" : undefined}
        >
          <div className="kpi-top-bar">
            <span className="kpi-label">Temperature Alerts</span>
            <div className="kpi-icon-wrap orange">
              <Thermometer size={18} />
            </div>
          </div>
          <div className="kpi-metric-val text-warning">
            {String(metrics.temperatureAlerts).padStart(2, '0')}
          </div>
          <div className="kpi-footer-desc text-warning font-medium">
            Threshold exceeded &rarr;
          </div>
        </div>
      </div>
    </section>
  );
};
