import React, { useState } from 'react';
import {
  Thermometer,
  AlertOctagon,
  ArrowLeft,
  Layers,
  Info,
} from 'lucide-react';
import type { AlertSummaryMetrics, DemoAlertItem } from '../types';

interface AlertCenterProps {
  metrics: AlertSummaryMetrics;
  alerts: DemoAlertItem[];
  onBack: () => void;
  onOpenAssetDetails: (assetId: string) => void;
}

export const AlertCenter: React.FC<AlertCenterProps> = ({
  metrics,
  alerts,
  onBack,
  onOpenAssetDetails,
}) => {
  // Demo Scenario filter (Optional simple interactive control)
  const [scenarioFilter, setScenarioFilter] = useState<'All' | 'Temperature' | 'Tamper'>('All');
  const [selectedAlertId, setSelectedAlertId] = useState<string>('ALT-01');

  // Filtered alerts based on selected scenario
  const displayedAlerts = alerts.filter((item) => {
    if (scenarioFilter === 'All') return true;
    return item.alertType === scenarioFilter;
  });

  const selectedAlert =
    alerts.find((a) => a.id === selectedAlertId) || alerts[0];

  return (
    <div className="alert-center-page" aria-label="Alert Center Page">
      {/* Navigation Top Action */}
      <div className="details-nav-bar">
        <button className="back-to-overview-btn" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back to Overview</span>
        </button>
        <div className="badge-group">
          <span className="badge-demo">DEMO MODE</span>
          <span className="badge-notice">SIMULATED DATA</span>
        </div>
      </div>

      {/* Page Heading */}
      <div className="page-heading-block">
        <div className="heading-left">
          <h2 className="page-title">Alert Center</h2>
          <p className="page-subtitle">Simulated asset condition and security alerts.</p>
        </div>

        {/* Demo Scenario Control */}
        <div className="demo-scenario-control">
          <span className="scenario-label">DEMO SCENARIO:</span>
          <div className="scenario-btn-group">
            <button
              className={`scenario-btn ${scenarioFilter === 'All' ? 'active' : ''}`}
              onClick={() => setScenarioFilter('All')}
            >
              All Alerts
            </button>
            <button
              className={`scenario-btn ${scenarioFilter === 'Temperature' ? 'active' : ''}`}
              onClick={() => setScenarioFilter('Temperature')}
            >
              Temperature
            </button>
            <button
              className={`scenario-btn ${scenarioFilter === 'Tamper' ? 'active' : ''}`}
              onClick={() => setScenarioFilter('Tamper')}
            >
              Tamper
            </button>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------
          1. ALERT SUMMARY (TOP 3 CARDS)
         -------------------------------------------------- */}
      <div className="alert-summary-grid">
        {/* Card 1: Temperature Alerts */}
        <div className="bento-card kpi-card kpi-temp">
          <div className="kpi-top-bar">
            <span className="kpi-label">Temperature Alerts</span>
            <div className="kpi-icon-wrap orange">
              <Thermometer size={18} />
            </div>
          </div>
          <div className="kpi-metric-val text-warning">
            {String(metrics.temperatureAlerts).padStart(2, '0')}
          </div>
          <div className="kpi-footer-desc">Simulated</div>
        </div>

        {/* Card 2: Tamper Alerts */}
        <div className="bento-card kpi-card kpi-tamper">
          <div className="kpi-top-bar">
            <span className="kpi-label">Tamper Alerts</span>
            <div className="kpi-icon-wrap red">
              <AlertOctagon size={18} />
            </div>
          </div>
          <div className="kpi-metric-val text-danger">
            {String(metrics.tamperAlerts).padStart(2, '0')}
          </div>
          <div className="kpi-footer-desc">Simulated</div>
        </div>

        {/* Card 3: Total Alerts */}
        <div className="bento-card kpi-card kpi-active">
          <div className="kpi-top-bar">
            <span className="kpi-label">Total Alerts</span>
            <div className="kpi-icon-wrap cyan">
              <Layers size={18} />
            </div>
          </div>
          <div className="kpi-metric-val">{metrics.totalAlerts}</div>
          <div className="kpi-footer-desc">Demo records</div>
        </div>
      </div>

      {/* --------------------------------------------------
          2 & 3. ACTIVE DEMO ALERT CARDS
         -------------------------------------------------- */}
      <div className="active-alerts-grid">
        {/* Active Demo Alert 1: Temperature Alert */}
        <div className="alert-display-card temp-alert-card">
          <div className="card-top-bar">
            <div className="alert-card-title-group">
              <div className="alert-icon-wrap orange">
                <Thermometer size={18} />
              </div>
              <div>
                <h3 className="section-title text-warning">TEMPERATURE ALERT</h3>
                <span className="section-subtitle">Simulated threshold condition</span>
              </div>
            </div>
            <span className="badge-warning-custom">SIMULATED ALERT</span>
          </div>

          <div className="alert-details-list">
            <div className="attribute-row">
              <span className="attr-label">Asset:</span>
              <button
                className="asset-link-btn font-mono"
                onClick={() => onOpenAssetDetails('ANV-MR-014')}
                title="View Asset Details for ANV-MR-014"
              >
                ANV-MR-014
              </button>
            </div>

            <div className="attribute-row">
              <span className="attr-label">Temperature:</span>
              <span className="attr-val text-warning font-bold">27.8°C</span>
            </div>

            <div className="attribute-row">
              <span className="attr-label">Threshold:</span>
              <span className="attr-val">25°C</span>
            </div>

            <div className="attribute-row">
              <span className="attr-label">Status:</span>
              <span className="status-badge warning">Threshold Exceeded</span>
            </div>

            <div className="attribute-row">
              <span className="attr-label">Action:</span>
              <span className="action-tag orange">Inspection Required</span>
            </div>
          </div>

          <div className="alert-card-note">
            <span className="note-dot orange">&bull;</span>
            <span>Temperature threshold exceeded. This is a predefined demo condition.</span>
          </div>
        </div>

        {/* Active Demo Alert 2: Tamper Alert */}
        <div className="alert-display-card tamper-alert-card">
          <div className="card-top-bar">
            <div className="alert-card-title-group">
              <div className="alert-icon-wrap red">
                <AlertOctagon size={18} />
              </div>
              <div>
                <h3 className="section-title text-danger">TAMPER ALERT</h3>
                <span className="section-subtitle">Simulated perimeter event</span>
              </div>
            </div>
            <span className="badge-danger-custom">SIMULATED ALERT</span>
          </div>

          <div className="alert-details-list">
            <div className="attribute-row">
              <span className="attr-label">Asset:</span>
              <button
                className="asset-link-btn font-mono"
                onClick={() => onOpenAssetDetails('ANV-AW-005')}
                title="View Asset Details for ANV-AW-005"
              >
                ANV-AW-005
              </button>
            </div>

            <div className="attribute-row">
              <span className="attr-label">Status:</span>
              <span className="status-badge alert">Tamper Detected</span>
            </div>

            <div className="attribute-row">
              <span className="attr-label">Seal Status:</span>
              <span className="attr-val text-danger font-bold">Open</span>
            </div>

            <div className="attribute-row">
              <span className="attr-label">Event:</span>
              <span className="attr-val">Simulated enclosure/seal event</span>
            </div>

            <div className="attribute-row">
              <span className="attr-label">Action:</span>
              <span className="action-tag red">Inspection Required</span>
            </div>
          </div>

          <div className="alert-card-note">
            <span className="note-dot red">&bull;</span>
            <span>
              The physical tamper condition is simulated. The dashboard only demonstrates how such an event could be displayed.
            </span>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------
          4 & 5. RECENT ALERTS LIST & ALERT DETAILS PANEL
         -------------------------------------------------- */}
      <div className="alert-list-details-grid">
        {/* Left: Recent Alerts Table */}
        <div className="recent-alerts-table-card">
          <div className="card-top-bar">
            <div>
              <h3 className="section-title">Recent Alerts</h3>
              <p className="section-subtitle">Click any alert row to view specific details.</p>
            </div>
            <span className="badge-demo">Demo Records</span>
          </div>

          <div className="events-list-wrap">
            <table className="simple-events-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Asset</th>
                  <th>Alert Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {displayedAlerts.map((alt) => {
                  const isSelected = selectedAlertId === alt.id;
                  const isTemp = alt.alertType === 'Temperature';
                  return (
                    <tr
                      key={alt.id}
                      className={`event-row alert-row-clickable ${isSelected ? 'row-selected' : ''}`}
                      onClick={() => setSelectedAlertId(alt.id)}
                    >
                      <td className="event-time-cell font-mono">{alt.time}</td>
                      <td className="event-asset-cell font-mono font-bold">{alt.assetId}</td>
                      <td>
                        <span className={`status-badge ${isTemp ? 'warning' : 'alert'}`}>
                          {alt.alertType}
                        </span>
                      </td>
                      <td className="event-status-cell">
                        <span className={`status-badge ${isTemp ? 'warning' : 'alert'}`}>
                          {alt.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Selected Alert Details Panel */}
        <div className="selected-alert-detail-card">
          <div className="card-top-bar">
            <div>
              <h3 className="section-title">Alert Details</h3>
              <p className="section-subtitle">Focused inspection of selected demo alert.</p>
            </div>
            <span className="badge-demo">{selectedAlert.recordStatus}</span>
          </div>

          <div className="alert-detail-fields-list">
            <div className="detail-field-row">
              <span className="field-label">Asset:</span>
              <button
                className="asset-link-btn font-mono"
                onClick={() => onOpenAssetDetails(selectedAlert.assetId)}
                title={`Open Asset Details for ${selectedAlert.assetId}`}
              >
                {selectedAlert.assetId} &rarr;
              </button>
            </div>

            <div className="detail-field-row">
              <span className="field-label">Alert Type:</span>
              <span className={`status-badge ${selectedAlert.alertType === 'Temperature' ? 'warning' : 'alert'}`}>
                {selectedAlert.alertType}
              </span>
            </div>

            {selectedAlert.alertType === 'Temperature' ? (
              <>
                <div className="detail-field-row">
                  <span className="field-label">Recorded Value:</span>
                  <span className="field-val text-warning font-bold">{selectedAlert.recordedValue}</span>
                </div>
                <div className="detail-field-row">
                  <span className="field-label">Demo Threshold:</span>
                  <span className="field-val">{selectedAlert.demoThreshold}</span>
                </div>
                <div className="detail-field-row">
                  <span className="field-label">Status:</span>
                  <span className="status-badge warning">{selectedAlert.status}</span>
                </div>
              </>
            ) : (
              <>
                <div className="detail-field-row">
                  <span className="field-label">Event:</span>
                  <span className="status-badge alert">Tamper Detected</span>
                </div>
                <div className="detail-field-row">
                  <span className="field-label">Condition:</span>
                  <span className="field-val text-danger font-bold">Seal {selectedAlert.sealStatus}</span>
                </div>
                <div className="detail-field-row">
                  <span className="field-label">Event Type:</span>
                  <span className="field-val">{selectedAlert.eventDescription}</span>
                </div>
              </>
            )}

            <div className="detail-field-row">
              <span className="field-label">Source:</span>
              <span className="field-val">{selectedAlert.source}</span>
            </div>

            <div className="detail-field-row">
              <span className="field-label">Action:</span>
              <span className="action-tag red font-medium">{selectedAlert.action}</span>
            </div>

            <div className="detail-field-row">
              <span className="field-label">Record Status:</span>
              <span className="status-badge verified">{selectedAlert.recordStatus}</span>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------
          7. IMPORTANT EXPLANATION (FOOTER NOTICE)
         -------------------------------------------------- */}
      <div className="alert-explanation-banner">
        <Info size={16} className="text-primary flex-shrink-0" />
        <p className="explanation-text">
          Alert conditions shown on this page are simulated demonstration data. No real-time sensor detection is active.
        </p>
      </div>
    </div>
  );
};
