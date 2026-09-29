import React from 'react';
import { Truck, Train, Ship, Plane } from 'lucide-react';
import type { SectorMetric, Sector } from '../types';

interface TransportNetworkProps {
  metrics: SectorMetric[];
}

export const TransportNetwork: React.FC<TransportNetworkProps> = ({ metrics }) => {
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

  const getSectorColorClass = (sector: Sector) => {
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
    <section className="bento-card transport-network-card" aria-label="Transport Network">
      <div className="card-top-bar">
        <div>
          <h3 className="section-title">Transport Network</h3>
          <p className="section-subtitle">Simulated fleet distribution across transit sectors.</p>
        </div>
        <span className="badge-demo">Simulated</span>
      </div>

      <div className="transport-sectors-grid">
        {metrics.map((item) => {
          const Icon = getSectorIcon(item.sector);
          const colorClass = getSectorColorClass(item.sector);
          const pct = Math.round((item.count / total) * 100);

          return (
            <div key={item.sector} className={`transport-sector-item sector-${colorClass}`}>
              <div className="sector-header">
                <div className={`sector-icon-wrap ${colorClass}`}>
                  <Icon size={16} />
                </div>
                <span className="sector-label">{item.sector.toUpperCase()}</span>
              </div>

              <div className="sector-count-line">
                <span className="sector-count-num">{item.count}</span>
                <span className="sector-count-sub">{pct}% of fleet</span>
              </div>

              <div className="sector-mini-track">
                <div
                  className={`sector-mini-bar ${colorClass}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
