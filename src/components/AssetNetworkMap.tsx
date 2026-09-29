import React, { useState } from 'react';
import { Truck, Train, Ship, Plane, ArrowUpRight } from 'lucide-react';
import type { DemoAsset, Sector } from '../types';

interface AssetNetworkMapProps {
  assets: DemoAsset[];
  selectedAssetId: string;
  onSelectAsset: (id: string) => void;
  onOpenDetails: (id: string) => void;
}

export const AssetNetworkMap: React.FC<AssetNetworkMapProps> = ({
  assets,
  selectedAssetId,
  onSelectAsset,
  onOpenDetails,
}) => {
  const [hoveredAssetId, setHoveredAssetId] = useState<string | null>(null);

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
      case 'Marine':
        return '#0284c7'; // Cyan/Blue
      case 'Road':
        return '#475569'; // Slate
      case 'Railway':
        return '#64748b'; // Medium slate
      case 'Airway':
        return '#0ea5e9'; // Sky cyan
    }
  };

  const activeId = hoveredAssetId || selectedAssetId;

  return (
    <section className="spatial-network-section" aria-label="Asset Network">
      {/* Editorial Section Header */}
      <div className="spatial-header-bar">
        <div className="header-left">
          <div className="section-eyebrow">
            <span className="mono-sub">SPATIAL TELEMETRY OVERLAY</span>
            <span className="live-dot-pulse" />
          </div>
          <h3 className="editorial-section-title">ASSET NETWORK</h3>
          <p className="editorial-section-subtitle">
            Simulated movement across transport sectors
          </p>
        </div>

        <div className="spatial-meta-tags">
          <div className="network-mode-pill">
            <span className="status-dot green" />
            <span className="font-mono">SIMULATED NETWORK</span>
          </div>
          <span className="badge-demo-inline">4 ACTIVE NODES</span>
        </div>
      </div>

      {/* Main Spatial Map Canvas with Floating Asset Overlays */}
      <div className="spatial-canvas-wrapper">
        <div className="spatial-svg-container">
          <svg
            className="spatial-network-svg"
            viewBox="0 0 960 540"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Fine technical grid pattern */}
              <pattern id="coordGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                <path d="M 0 24 L 6 24 M 24 0 L 24 6" fill="none" stroke="#e2e8f0" strokeWidth="0.8" />
              </pattern>

              {/* Linear gradient for transit corridors */}
              <linearGradient id="cyanTransitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
              </linearGradient>

              {/* Drop shadow for floating tags */}
              <filter id="spatialSoftShadow" x="-10%" y="-10%" width="120%" height="130%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.06" floodColor="#0f172a" />
              </filter>
            </defs>

            {/* 1. Background Coordinates Grid */}
            <rect width="960" height="540" fill="url(#coordGrid)" />

            {/* 2. Precision Technical Graticule Axes */}
            <line x1="80" y1="40" x2="880" y2="40" stroke="#e2e8f0" strokeWidth="0.8" strokeDasharray="3 3" />
            <text x="84" y="32" fill="#94a3b8" fontSize="9" fontFamily="var(--font-mono)">SECTOR BOUNDARY: NORTH-CENTRAL TRANSIT ZONE</text>
            <text x="740" y="32" fill="#94a3b8" fontSize="9" fontFamily="var(--font-mono)">CORRIDOR: IND-CENTRAL-01</text>

            {/* 3. Stylized Geographic Landmass Contour in clean off-white with fine border */}
            <path
              d="M 280,60 
                 L 410,75 
                 L 490,110 
                 L 540,170 
                 L 505,215 
                 L 570,275 
                 L 590,345 
                 L 520,405 
                 L 440,495 
                 L 405,525 
                 L 370,470 
                 L 300,410 
                 L 240,310 
                 L 230,210 
                 L 210,140 Z"
              fill="#ffffff"
              stroke="#cbd5e1"
              strokeWidth="1.4"
              filter="drop-shadow(0 2px 8px rgba(15,23,42,0.03))"
            />

            {/* 4. Maritime Bay / Offshore Coastal Sea Fill */}
            <path
              d="M 540,170 
                 L 505,215 
                 L 570,275 
                 L 590,345 
                 L 520,405 
                 L 440,495 
                 L 760,495 
                 L 820,300 
                 L 740,170 Z"
              fill="#f0f9ff"
              opacity="0.5"
            />
            <text x="630" y="270" fill="#94a3b8" fontSize="10" fontWeight="600" letterSpacing="0.08em" fontFamily="var(--font-sans)">
              BAY OF BENGAL MARITIME BASIN
            </text>

            {/* 5. Transit Network Corridors (Thin Linework) */}
            {/* Airway Corridor (Delhi to Central) */}
            <path
              d="M 364,129 L 499,243"
              fill="none"
              stroke="#0284c7"
              strokeWidth="1.6"
              strokeDasharray="6 4"
            />

            {/* Railway Corridor (Central to South Rail Hub) */}
            <path
              d="M 499,243 L 652,378"
              fill="none"
              stroke="#64748b"
              strokeWidth="1.8"
              strokeDasharray="4 4"
            />

            {/* Road Corridor (Nagpur to Chennai Logistics Port) */}
            <path
              d="M 499,243 L 710,334"
              fill="none"
              stroke="#475569"
              strokeWidth="1.8"
            />

            {/* Marine Offshore Transit Line */}
            <path
              d="M 652,378 L 710,334"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="5 3"
            />

            {/* 6. Connector lines from map positions to floating panels */}
            {/* ANV-AW-005 (Delhi Airway: 364, 129) to floating panel top-left */}
            <line x1="364" y1="129" x2="260" y2="100" stroke="#bae6fd" strokeWidth="1" strokeDasharray="2 2" />

            {/* ANV-RL-008 (Nagpur Rail: 499, 243) to floating panel left */}
            <line x1="499" y1="243" x2="330" y2="240" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />

            {/* ANV-RD-021 (Chennai Road: 652, 378) to floating panel bottom */}
            <line x1="652" y1="378" x2="490" y2="440" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />

            {/* ANV-MR-014 (Marine Offshore: 710, 334) to floating panel right */}
            <line x1="710" y1="334" x2="810" y2="300" stroke="#bae6fd" strokeWidth="1" strokeDasharray="2 2" />

            {/* 7. Node Marker Points on Map */}
            {assets.map((asset) => {
              const posX = asset.mapX * 9.6;
              const posY = asset.mapY * 5.4;
              const isSelected = activeId === asset.id;
              const sectorColor = getSectorColor(asset.sector);

              return (
                <g
                  key={asset.id}
                  className={`spatial-marker-group ${isSelected ? 'marker-active' : ''}`}
                  onClick={() => onSelectAsset(asset.id)}
                  onMouseEnter={() => setHoveredAssetId(asset.id)}
                  onMouseLeave={() => setHoveredAssetId(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Subtle selection radar pulse */}
                  {isSelected && (
                    <>
                      <circle
                        cx={posX}
                        cy={posY}
                        r="24"
                        fill="none"
                        stroke="#0284c7"
                        strokeWidth="1.2"
                        strokeDasharray="4 2"
                      />
                      <circle
                        cx={posX}
                        cy={posY}
                        r="16"
                        fill="#e0f2fe"
                        opacity="0.6"
                      />
                    </>
                  )}

                  {/* Outer white ring */}
                  <circle
                    cx={posX}
                    cy={posY}
                    r={isSelected ? "9" : "7"}
                    fill="#ffffff"
                    stroke={sectorColor}
                    strokeWidth={isSelected ? "2.5" : "2"}
                  />

                  {/* Inner status core */}
                  <circle
                    cx={posX}
                    cy={posY}
                    r="4"
                    fill={asset.status === 'Alert' ? '#dc2626' : asset.status === 'Warning' ? '#ea580c' : '#16a34a'}
                  />

                  {/* Small inline node identifier tag */}
                  <g transform={`translate(${posX + 10}, ${posY - 10})`}>
                    <rect
                      x="0"
                      y="0"
                      width="76"
                      height="20"
                      rx="3"
                      fill="#ffffff"
                      stroke={isSelected ? "#0284c7" : "#e2e8f0"}
                      strokeWidth={isSelected ? "1.5" : "1"}
                      filter="url(#spatialSoftShadow)"
                    />
                    <text
                      x="6"
                      y="14"
                      fill="#0f172a"
                      fontSize="10"
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

        {/* 8. Floating Asset Information Panels (Connected spatially) */}
        <div className="floating-panels-layer">
          {assets.map((asset) => {
            const Icon = getSectorIcon(asset.sector);
            const isSelected = activeId === asset.id;

            return (
              <div
                key={asset.id}
                className={`floating-asset-card position-${asset.id} ${isSelected ? 'selected' : ''}`}
                onClick={() => onSelectAsset(asset.id)}
                onMouseEnter={() => setHoveredAssetId(asset.id)}
                onMouseLeave={() => setHoveredAssetId(null)}
              >
                <div className="floating-card-header">
                  <div className="floating-id-line">
                    <Icon size={14} className="sector-icon-inline" />
                    <span className="floating-asset-id font-mono">{asset.id}</span>
                  </div>
                  <span className="floating-sector-tag">{asset.sector.toUpperCase()}</span>
                </div>

                <div className="floating-location-line">
                  <span className="floating-region">{asset.locationDetail}</span>
                  <span className="floating-sub-region">{asset.locationRegion}</span>
                </div>

                <div className="floating-card-footer">
                  <div className="status-indicator-line">
                    <span className={`status-micro-dot ${asset.status.toLowerCase()}`} />
                    <span className="status-micro-text">{asset.status.toUpperCase()}</span>
                  </div>
                  <button
                    className="inspect-action-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectAsset(asset.id);
                      onOpenDetails(asset.id);
                    }}
                    title={`Inspect asset details for ${asset.id}`}
                  >
                    <span>Inspect</span>
                    <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
