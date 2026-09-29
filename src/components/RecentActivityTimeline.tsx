import React from 'react';
import type { RecentEvent } from '../types';

interface RecentActivityTimelineProps {
  events: RecentEvent[];
  onOpenAssetDetails?: (assetId: string) => void;
}

export const RecentActivityTimeline: React.FC<RecentActivityTimelineProps> = ({
  events,
  onOpenAssetDetails,
}) => {
  const getStatusColorClass = (status: string) => {
    switch (status) {
      case 'Alert':
        return 'status-alert';
      case 'Normal':
      case 'Verified':
        return 'status-normal';
      case 'Simulated':
      default:
        return 'status-simulated';
    }
  };

  return (
    <section className="editorial-timeline-section" aria-label="Recent Activity">
      <div className="timeline-header-bar">
        <div>
          <span className="mono-sub">AUDIT TRAIL</span>
          <h3 className="editorial-section-title">RECENT ACTIVITY</h3>
        </div>
        <span className="badge-demo-inline font-mono">CHRONOLOGICAL LOG</span>
      </div>

      <div className="editorial-timeline-track">
        {events.map((evt, idx) => {
          const statusClass = getStatusColorClass(evt.status);
          const isLast = idx === events.length - 1;

          return (
            <div key={evt.id} className={`timeline-entry ${statusClass} ${isLast ? 'last-entry' : ''}`}>
              {/* Vertical connector spine */}
              <div className="timeline-spine">
                <div className={`timeline-tick-node ${statusClass}`} />
                {!isLast && <div className="timeline-spine-line" />}
              </div>

              {/* Time Column */}
              <div className="timeline-entry-time font-mono">
                {evt.time.replace(' AM', '').replace(' PM', '')}
              </div>

              {/* Event Description */}
              <div className="timeline-entry-desc">
                <span className="entry-title">{evt.description}</span>
              </div>

              {/* Asset Identifier */}
              <div className="timeline-entry-asset">
                {onOpenAssetDetails ? (
                  <button
                    className="asset-tag-link font-mono"
                    onClick={() => onOpenAssetDetails(evt.assetId)}
                    title={`Inspect asset ${evt.assetId}`}
                  >
                    {evt.assetId}
                  </button>
                ) : (
                  <span className="asset-tag-static font-mono">{evt.assetId}</span>
                )}
              </div>

              {/* Status Badge */}
              <div className="timeline-entry-status">
                <span className={`editorial-status-tag ${statusClass} font-mono`}>
                  {evt.status.toUpperCase()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
