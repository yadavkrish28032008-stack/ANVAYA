import React from 'react';
import { Truck, Train, Ship, Plane } from 'lucide-react';
import type { SectorMetric, Sector } from '../types';

interface TransportNetworkSpectrumProps {
  metrics: SectorMetric[];
}

export const TransportNetworkSpectrum: React.FC<TransportNetworkSpectrumProps> = ({ metrics }) => {
  const getSectorIcon = (sector: Sector) => {
    switch (sector) {
      case 'Road':
        return Truck;
      case 'Railway':
        return Train;
      case 'Marine':
        return Ship;
      case 'Airway':
        return Plane;
    }
  };

  const getSectorColor = (sector: Sector) => {
    switch (sector) {
      case 'Road':
        return 'road';
      case 'Railway':
        return 'railway';
      case 'Marine':
        return 'marine';
      case 'Airway':
        return 'airway';
    }
  };

  const total = metrics.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="transport-spectrum-block" aria-label="Transport Network">
      <div className="spectrum-header-row">
        <div className="spectrum-title-wrap">
          <span className="mono-sub">MODAL DISTRIBUTION</span>
          <h4 className="editorial-card-title">TRANSPORT NETWORK</h4>
        </div>
        <div className="spectrum-total-badge font-mono">
          <span>FLEET: {total} UNITS</span>
        </div>
      </div>

      {/* Horizontal Continuous Visual Spectrum Bar */}
      <div className="continuous-spectrum-bar" role="progressbar" aria-label="Fleet Modal Share">
        {metrics.map((item) => {
          const pct = ((item.count / total) * 100).toFixed(1);
          const colorClass = getSectorColor(item.sector);
          return (
            <div
              key={item.sector}
              className={`spectrum-segment seg-${colorClass}`}
              style={{ width: `${pct}%` }}
              title={`${item.sector}: ${item.count} units (${pct}%)`}
            />
          );
        })}
      </div>

      {/* Segmented Sector Breakdown Row */}
      <div className="spectrum-segments-grid">
        {metrics.map((item) => {
          const Icon = getSectorIcon(item.sector);
          const colorClass = getSectorColor(item.sector);
          const pct = Math.round((item.count / total) * 100);

          return (
            <div key={item.sector} className={`spectrum-item-col col-${colorClass}`}>
              <div className="item-col-header">
                <div className={`sector-glyph-wrap ${colorClass}`}>
                  <Icon size={14} />
                </div>
                <span className="sector-mono-name">{item.sector.toUpperCase()}</span>
              </div>

              <div className="item-col-metric">
                <span className="sector-large-val font-mono">{item.count}</span>
                <span className="sector-pct-tag font-mono">{pct}%</span>
              </div>

              <div className={`sector-accent-underline ${colorClass}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
