import React from 'react';
import { Clock, ShieldAlert, CheckCircle, Navigation, AlertTriangle } from 'lucide-react';
import type { RecentEvent } from '../types';

interface RecentEventsProps {
  events: RecentEvent[];
  onOpenAssetDetails?: (assetId: string) => void;
}

export const RecentEvents: React.FC<RecentEventsProps> = ({ events, onOpenAssetDetails }) => {
  const getEventIcon = (status: string, desc: string) => {
    if (status === 'Alert' || desc.toLowerCase().includes('tamper')) {
      return AlertTriangle;
    }
    if (desc.toLowerCase().includes('temperature')) {
      return ShieldAlert;
    }
    if (desc.toLowerCase().includes('location')) {
      return Navigation;
    }
    return CheckCircle;
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Alert':
        return 'alert';
      case 'Normal':
      case 'Verified':
        return 'verified';
      case 'Simulated':
      case 'Recorded':
      default:
        return 'simulated';
    }
  };

  const getNodeClass = (status: string) => {
    switch (status) {
      case 'Alert':
        return 'node-alert';
      case 'Normal':
      case 'Verified':
        return 'node-normal';
      default:
        return 'node-simulated';
    }
  };

  return (
    <section className="bento-card recent-activity-card" aria-label="Recent Activity">
      <div className="card-top-bar">
        <div>
          <h3 className="section-title">Recent Activity</h3>
          <p className="section-subtitle">Chronological timeline of simulated asset events.</p>
        </div>
        <span className="badge-demo">Static Demo Events</span>
      </div>

      <div className="timeline-container">
        <div className="timeline-track-line" />

        <div className="timeline-items-list">
          {events.map((evt) => {
            const Icon = getEventIcon(evt.status, evt.description);
            const statusClass = getStatusBadgeClass(evt.status);
            const nodeClass = getNodeClass(evt.status);

            return (
              <div key={evt.id} className="timeline-item-row">
                {/* Milestone Node */}
                <div className={`timeline-node ${nodeClass}`}>
                  <Icon size={14} />
                </div>

                {/* Event Time */}
                <div className="timeline-time-col">
                  <span className="timeline-time-text font-mono">
                    <Clock size={12} className="text-light inline-block mr-1" />
                    {evt.time}
                  </span>
                </div>

                {/* Event Description */}
                <div className="timeline-content-col">
                  <span className="timeline-event-title">{evt.description}</span>
                </div>

                {/* Asset Identifier */}
                <div className="timeline-asset-col">
                  {onOpenAssetDetails ? (
                    <button
                      className="asset-link-pill font-mono"
                      onClick={() => onOpenAssetDetails(evt.assetId)}
                      title={`View details for ${evt.assetId}`}
                    >
                      {evt.assetId}
                    </button>
                  ) : (
                    <span className="asset-static-pill font-mono">{evt.assetId}</span>
                  )}
                </div>

                {/* Status Badge */}
                <div className="timeline-status-col">
                  <span className={`status-badge ${statusClass}`}>
                    {evt.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
