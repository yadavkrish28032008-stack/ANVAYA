import React from 'react';
import { Truck, Train, Ship, Plane } from 'lucide-react';
import type { DemoAsset, Sector, AssetStatus } from '../types';

interface AssetLocationsProps {
  assets: DemoAsset[];
  selectedAssetId: string;
  onSelectAsset: (id: string) => void;
  onOpenDetails: (id: string) => void;
}

export const AssetLocations: React.FC<AssetLocationsProps> = ({
  assets,
  selectedAssetId,
  onSelectAsset,
  onOpenDetails,
}) => {
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

  const getStatusClass = (status: AssetStatus) => {
    switch (status) {
      case 'Normal':
        return 'normal';
      case 'Warning':
        return 'warning';
      case 'Alert':
        return 'alert';
    }
  };

  return (
    <section className="bento-card asset-locations-card centerpiece-card" aria-label="Asset Locations">
      <div className="card-top-bar">
        <div>
          <h3 className="section-title">Asset Locations</h3>
          <p className="section-subtitle">Simulated asset locations across transport sectors.</p>
        </div>
        <div className="section-badge-group">
          <span className="badge-notice">SIMULATED LOCATIONS</span>
          <span className="badge-demo">Not Live GPS Tracking</span>
        </div>
      </div>

      <div className="locations-body-grid">
        {/* Command Center Light Map Visualization */}
        <div className="simple-map-canvas">
          <svg
            className="light-map-svg"
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Subtle technical grid pattern */}
            <defs>
              <pattern id="enterpriseGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                <circle cx="0" cy="0" r="1.5" fill="#cbd5e1" />
              </pattern>
            </defs>
            <rect width="800" height="500" fill="url(#enterpriseGrid)" />

            {/* Stylized region boundary / land mass in soft neutral slate */}
            <path
              d="M 210,60 L 330,70 L 410,100 L 450,155 L 420,195 L 470,245 L 490,305 L 435,355 L 365,440 L 335,475 L 305,425 L 245,365 L 195,275 L 185,185 L 165,125 Z"
              fill="#f8fafc"
              stroke="#cbd5e1"
              strokeWidth="1.5"
            />

            {/* Marine Coastline & Sea Water Area */}
            <path
              d="M 450,155 L 420,195 L 470,245 L 490,305 L 435,355 L 365,440 L 600,440 L 650,250 L 580,155 Z"
              fill="#f0f9ff"
              opacity="0.4"
            />

            {/* Sector transit corridors: Road, Rail, Air, Sea */}
            {/* Marine Corridor (Ocean blue) */}
            <path
              d="M 592,310 L 540,260 L 470,245"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            {/* Airway Corridor (Cyan dashed) */}
            <path
              d="M 304,120 L 410,225"
              fill="none"
              stroke="#0284c7"
              strokeWidth="1.5"
              strokeDasharray="6,4"
            />
            {/* Railway Corridor (Slate line) */}
            <path
              d="M 416,225 L 435,355"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2"
              strokeDasharray="3,3"
            />
            {/* Road Corridor (Slate solid) */}
            <path
              d="M 435,355 L 544,350"
              fill="none"
              stroke="#64748b"
              strokeWidth="2"
            />

            {/* Interactive Demo Asset Markers */}
            {assets.map((asset) => {
              const isSelected = selectedAssetId === asset.id;
              const posX = asset.mapX * 8;
              const posY = asset.mapY * 5;

              return (
                <g
                  key={asset.id}
                  className={`map-marker-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => onSelectAsset(asset.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Outer selection ring */}
                  {isSelected && (
                    <circle
                      cx={posX}
                      cy={posY}
                      r="22"
                      fill="#e0f2fe"
                      stroke="#0284c7"
                      strokeWidth="2"
                    />
                  )}

                  {/* Marker Pin */}
                  <circle
                    cx={posX}
                    cy={posY}
                    r={isSelected ? '11' : '8'}
                    fill={asset.status === 'Alert' ? '#dc2626' : asset.status === 'Warning' ? '#ea580c' : '#16a34a'}
                    stroke="#ffffff"
                    strokeWidth="2"
                  />

                  {/* Label tag */}
                  <g transform={`translate(${posX + 12}, ${posY - 14})`}>
                    <rect
                      x="0"
                      y="0"
                      width="106"
                      height="26"
                      rx="4"
                      fill="#ffffff"
                      stroke={isSelected ? '#0284c7' : '#cbd5e1'}
                      strokeWidth={isSelected ? '1.5' : '1'}
                      filter="drop-shadow(0 1px 2px rgba(0,0,0,0.06))"
                    />
                    <text
                      x="8"
                      y="17"
                      fill="#0f172a"
                      fontSize="11"
                      fontWeight="700"
                      fontFamily="var(--font-mono)"
                    >
                      {asset.id}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Clean Asset List for clear 5-second scanning */}
        <div className="assets-table-wrap">
          <div className="table-caption-line">
            <span className="caption-text">Monitored Demo Assets</span>
            <span className="caption-count">4 Simulated</span>
          </div>

          <div className="simple-assets-list">
            {assets.map((asset) => {
              const Icon = getSectorIcon(asset.sector);
              const isSelected = selectedAssetId === asset.id;
              return (
                <div
                  key={asset.id}
                  className={`asset-list-row ${isSelected ? 'row-selected' : ''}`}
                  onClick={() => onSelectAsset(asset.id)}
                >
                  <div className="row-left">
                    <div className="sector-icon-pill">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="asset-id-text">{asset.id}</div>
                      <div className="asset-sector-text">{asset.sector} &bull; {asset.locationName}</div>
                    </div>
                  </div>

                  <div className="row-right">
                    <span className={`status-badge ${getStatusClass(asset.status)}`}>
                      {asset.status}
                    </span>
                    <button
                      className="view-details-action-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectAsset(asset.id);
                        onOpenDetails(asset.id);
                      }}
                      title={`Open Asset Details for ${asset.id}`}
                    >
                      View Details &rarr;
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
