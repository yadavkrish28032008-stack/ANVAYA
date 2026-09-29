import React, { useState } from 'react';
import {
  ArrowLeft,
  Ship,
  Truck,
  Train,
  Plane,
  CheckCircle2,
  Thermometer,
  Activity,
  Lock,
  ShieldCheck,
  MapPin,
} from 'lucide-react';
import type { DemoAsset, Sector } from '../types';

interface AssetDetailsProps {
  asset: DemoAsset;
  onBack: () => void;
}

export const AssetDetails: React.FC<AssetDetailsProps> = ({ asset, onBack }) => {
  // Allow toggling simulated temperature condition between Normal (24.6°C) and Alert (27.4°C)
  const [simulatedTemp, setSimulatedTemp] = useState<number>(asset.temperature);
  const isTempAlert = simulatedTemp > asset.tempThreshold;

  const toggleTempAlert = () => {
    setSimulatedTemp((prev) => (prev > asset.tempThreshold ? 24.6 : 27.4));
  };

  const getSectorIcon = (sector: Sector) => {
    switch (sector) {
      case 'Marine':
        return Ship;
      case 'Road':
        return Truck;
      case 'Railway':
        return Train;
      case 'Airway':
        return Plane;
    }
  };

  const SectorIcon = getSectorIcon(asset.sector);

  return (
    <div className="asset-details-page" aria-label="Asset Details Page">
      {/* Navigation Top Action */}
      <div className="details-nav-bar">
        <button className="back-to-overview-btn" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back to Overview</span>
        </button>
        <span className="badge-demo">DEMO MODE</span>
      </div>

      {/* Page Heading */}
      <div className="page-heading-block">
        <div className="heading-left">
          <div className="heading-title-row">
            <h2 className="page-title">Asset Details</h2>
            <span className="asset-id-pill font-mono">{asset.id}</span>
          </div>
          <p className="page-subtitle">Simulated asset information and condition overview.</p>
        </div>
        <div className="heading-right">
          <span className="badge-demo">DEMO DATA</span>
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="details-content-grid">
        {/* --------------------------------------------------
            1. ASSET IDENTITY CARD
           -------------------------------------------------- */}
        <section className="details-card asset-identity-card" aria-label="Asset Identity">
          <div className="card-top-bar">
            <div>
              <h3 className="section-title">Asset Identity</h3>
              <p className="section-subtitle">Basic identity and classification.</p>
            </div>
            <span className="badge-demo">DEMO DATA</span>
          </div>

          <div className="identity-attributes-list">
            <div className="attribute-row">
              <span className="attr-label">Asset ID:</span>
              <span className="attr-val font-mono font-bold text-primary">{asset.id}</span>
            </div>

            <div className="attribute-row">
              <span className="attr-label">Transport Sector:</span>
              <span className="attr-val sector-val">
                <SectorIcon size={15} className="sector-icon" />
                <span>{asset.sector}</span>
              </span>
            </div>

            <div className="attribute-row">
              <span className="attr-label">Asset Type:</span>
              <span className="attr-val">{asset.assetType}</span>
            </div>

            <div className="attribute-row">
              <span className="attr-label">Current Status:</span>
              <span className="attr-val">
                <span className={`status-badge ${asset.status.toLowerCase()}`}>
                  {asset.status}
                </span>
              </span>
            </div>

            <div className="attribute-row">
              <span className="attr-label">Identity:</span>
              <span className="attr-val">
                <span className="status-badge verified">
                  <CheckCircle2 size={13} />
                  <span>{asset.identity}</span>
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            2. SIMULATED LOCATION CARD
           -------------------------------------------------- */}
        <section className="details-card current-location-card" aria-label="Current Location">
          <div className="card-top-bar">
            <div>
              <h3 className="section-title">Current Location</h3>
              <p className="section-subtitle">Simulated location checkpoint.</p>
            </div>
            <span className="badge-notice">SIMULATED LOCATION</span>
          </div>

          <div className="location-info-box">
            <div className="location-place-title">
              <MapPin size={18} className="text-primary" />
              <div>
                <div className="place-region">{asset.locationRegion}</div>
                <div className="place-detail">{asset.locationDetail}</div>
              </div>
            </div>

            <div className="location-meta-grid">
              <div className="loc-meta-item">
                <span className="loc-meta-label">Sector:</span>
                <span className="loc-meta-val">{asset.sector}</span>
              </div>

              <div className="loc-meta-item">
                <span className="loc-meta-label">Location Status:</span>
                <span className="loc-meta-val text-primary font-medium">{asset.locationStatus}</span>
              </div>

              <div className="loc-meta-item">
                <span className="loc-meta-label">Last Update:</span>
                <span className="loc-meta-val font-mono">{asset.lastUpdate}</span>
              </div>
            </div>

            {/* Simple visual location illustration */}
            <div className="simple-location-illustration">
              <div className="location-route-visual">
                <div className="visual-node start" />
                <div className="visual-line" />
                <div className="visual-pin-spot">
                  <div className="pin-pulse-dot" />
                  <span className="pin-title font-mono">{asset.id}</span>
                </div>
                <div className="visual-line dashed" />
                <div className="visual-node destination" />
              </div>
              <div className="location-visual-footer">
                <span>Checkpoint Route: {asset.locationRegion} &rarr; Harbor Corridor</span>
                <span className="text-light">Simulated Point &bull; Not Live GPS</span>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            3. CONDITION OVERVIEW CARD
           -------------------------------------------------- */}
        <section className="details-card condition-overview-card" aria-label="Asset Condition">
          <div className="card-top-bar">
            <div>
              <h3 className="section-title">Asset Condition</h3>
              <p className="section-subtitle">Core condition metrics for this asset.</p>
            </div>
            <button
              className="demo-toggle-btn"
              onClick={toggleTempAlert}
              title="Click to toggle temperature condition"
            >
              {isTempAlert ? 'Reset Temp (24.6°C)' : 'Simulate Temp Alert (>25°C)'}
            </button>
          </div>

          <div className="condition-items-grid">
            {/* Temperature */}
            <div className={`condition-item ${isTempAlert ? 'item-alert' : 'item-normal'}`}>
              <div className="item-header">
                <span className="item-title">Temperature</span>
                <div className={`item-icon ${isTempAlert ? 'icon-alert' : 'icon-normal'}`}>
                  <Thermometer size={18} />
                </div>
              </div>

              <div className="item-value-line">
                <span className="item-value">{simulatedTemp.toFixed(1)}°C</span>
                <span className={`status-badge ${isTempAlert ? 'alert' : 'normal'}`}>
                  {isTempAlert ? 'Temperature Alert' : 'Normal'}
                </span>
              </div>

              <div className="item-sub-desc">
                {isTempAlert ? (
                  <span className="text-danger font-medium">
                    Threshold exceeded (Normal: &le; 25°C)
                  </span>
                ) : (
                  <span className="text-light">Normal threshold: &le; 25°C</span>
                )}
              </div>
            </div>

            {/* Vibration */}
            <div className="condition-item item-normal">
              <div className="item-header">
                <span className="item-title">Vibration</span>
                <div className="item-icon icon-normal">
                  <Activity size={18} />
                </div>
              </div>

              <div className="item-value-line">
                <span className="item-value">{asset.vibration}</span>
                <span className="status-badge normal">Normal</span>
              </div>

              <div className="item-sub-desc">
                <span className="text-light">Within safe transport limits</span>
              </div>
            </div>

            {/* Tamper */}
            <div className="condition-item item-normal">
              <div className="item-header">
                <span className="item-title">Tamper</span>
                <div className="item-icon icon-normal">
                  <Lock size={18} />
                </div>
              </div>

              <div className="item-value-line">
                <span className="item-value">{asset.tamper}</span>
                <span className="status-badge normal">Secure</span>
              </div>

              <div className="item-sub-desc">
                <span className="text-light">Enclosure seal intact</span>
              </div>
            </div>

            {/* Overall Condition */}
            <div className="condition-item item-normal">
              <div className="item-header">
                <span className="item-title">Overall Condition</span>
                <div className="item-icon icon-normal">
                  <ShieldCheck size={18} />
                </div>
              </div>

              <div className="item-value-line">
                <span className="item-value">
                  {isTempAlert ? 'Attention Required' : asset.overallCondition}
                </span>
                <span className={`status-badge ${isTempAlert ? 'alert' : 'normal'}`}>
                  {isTempAlert ? 'Alert' : 'Normal'}
                </span>
              </div>

              <div className="item-sub-desc">
                <span className="text-light">
                  {isTempAlert ? 'Thermal threshold exceeded' : 'All parameters nominal'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            4. ASSET STATUS (CURRENT STATUS) CARD
           -------------------------------------------------- */}
        <section className="details-card current-status-card" aria-label="Current Status">
          <div className="card-top-bar">
            <div>
              <h3 className="section-title">Current Status</h3>
              <p className="section-subtitle">High-level operational overview.</p>
            </div>
            <span className="status-badge normal">Active Monitored</span>
          </div>

          <div className="status-points-list">
            <div className="status-point-row">
              <div className="point-bullet blue" />
              <div className="point-content">
                <span className="point-name">Location:</span>
                <span className="point-value font-medium text-primary">Simulated</span>
              </div>
            </div>

            <div className="status-point-row">
              <div className={`point-bullet ${isTempAlert ? 'red' : 'green'}`} />
              <div className="point-content">
                <span className="point-name">Condition:</span>
                <span className={`point-value font-medium ${isTempAlert ? 'text-danger' : 'text-success'}`}>
                  {isTempAlert ? 'Threshold Exceeded' : 'Normal'}
                </span>
              </div>
            </div>

            <div className="status-point-row">
              <div className="point-bullet green" />
              <div className="point-content">
                <span className="point-name">Tamper:</span>
                <span className="point-value font-medium text-success">Secure</span>
              </div>
            </div>

            <div className="status-point-row">
              <div className="point-bullet green" />
              <div className="point-content">
                <span className="point-name">Identity:</span>
                <span className="point-value font-medium text-success">Verified</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* --------------------------------------------------
          5. DEMO EVENT SUMMARY (RECENT ASSET ACTIVITY)
         -------------------------------------------------- */}
      <section className="details-card recent-activity-card" aria-label="Recent Asset Activity">
        <div className="card-top-bar">
          <div>
            <h3 className="section-title">Recent Asset Activity</h3>
            <p className="section-subtitle">Simulated event history for this specific asset.</p>
          </div>
          <span className="badge-demo">STATIC DEMO EVENTS</span>
        </div>

        <div className="events-list-wrap">
          <table className="simple-events-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Activity Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {asset.recentActivity.map((evt, idx) => (
                <tr key={idx} className="event-row">
                  <td className="event-time-cell font-mono">{evt.time}</td>
                  <td className="event-desc-cell">{evt.description}</td>
                  <td className="event-status-cell">
                    <span className="status-badge verified">{evt.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
