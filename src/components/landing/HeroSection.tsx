import React from 'react';
import { ArrowRight, ShieldCheck, Thermometer, Lock, CheckCircle2, Box, Cpu, FileCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenDashboard: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDashboard }) => {
  const handleScrollToProblem = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('problem');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="landing-hero-section">
      <div className="landing-hero-container">
        {/* Left Side: Editorial Typography & CTAs */}
        <div className="hero-text-col">
          <div className="hero-eyebrow-wrap">
            <span className="hero-eyebrow-pill">UNIVERSAL ASSET TRUST NETWORK</span>
            <span className="hero-demo-tag">PROTOTYPE</span>
          </div>

          <h1 className="hero-main-heading">
            Trusted Identity for Every Physical Asset.
          </h1>

          <p className="hero-supporting-text">
            ANVAYA connects physical asset identity, condition, custody and
            event history into a unified trust layer across Road, Railway,
            Marine and Airway sectors.
          </p>

          <div className="hero-cta-group">
            <a
              href="#problem"
              className="hero-btn-primary"
              onClick={handleScrollToProblem}
            >
              <span>Explore ANVAYA</span>
              <ArrowRight size={16} />
            </a>

            <button
              className="hero-btn-secondary"
              onClick={onOpenDashboard}
              title="Open simulated ANVAYA Asset Command Center"
            >
              <span>View Demo Dashboard</span>
            </button>
          </div>

          <div className="hero-trust-badges">
            <div className="trust-badge-item">
              <ShieldCheck size={14} className="text-success" />
              <span>Verifiable Asset Attestation</span>
            </div>
            <div className="trust-badge-divider" />
            <div className="trust-badge-item">
              <CheckCircle2 size={14} className="text-primary" />
              <span>Simulated Multi-Sector Demo</span>
            </div>
          </div>
        </div>

        {/* Right Side: Conceptual Architecture Visualization */}
        <div className="hero-visual-col">
          <div className="hero-diagram-frame">
            <div className="diagram-frame-header">
              <div className="diagram-header-left">
                <span className="diagram-mono-tag">ASSET-TO-LEDGER FLOW</span>
                <span className="diagram-live-indicator" />
              </div>
              <span className="diagram-badge-demo">DEMO CONCEPT</span>
            </div>

            {/* Conceptual Node Graph Canvas */}
            <div className="conceptual-flow-canvas">
              {/* Step 1: Physical Asset */}
              <div className="concept-node-card step-asset">
                <div className="node-step-badge">STEP 01</div>
                <div className="node-icon-box bg-slate">
                  <Box size={20} className="text-slate" />
                </div>
                <div className="node-meta">
                  <span className="node-title">Physical Asset</span>
                  <span className="node-subtitle font-mono">ANV-MR-014 &bull; CARGO</span>
                </div>
                <div className="node-status-pill green">
                  <span className="mini-dot green" />
                  <span>IDENTIFIED</span>
                </div>
              </div>

              {/* Connector Spine 1 */}
              <div className="concept-flow-connector">
                <div className="connector-line" />
                <div className="connector-arrow">&darr;</div>
              </div>

              {/* Step 2: Universal Asset Node */}
              <div className="concept-node-card step-node">
                <div className="node-step-badge">STEP 02</div>
                <div className="node-icon-box bg-cyan">
                  <Cpu size={20} className="text-primary" />
                </div>
                <div className="node-meta">
                  <span className="node-title">Universal Asset Node</span>
                  <span className="node-subtitle font-mono">NODE TELEMETRY ATTRIBUTOR</span>
                </div>
                {/* Live simulated sensor readout chips */}
                <div className="node-telemetry-chips">
                  <div className="telemetry-chip">
                    <Thermometer size={11} className="text-primary" />
                    <span>24.6°C NORMAL</span>
                  </div>
                  <div className="telemetry-chip">
                    <Lock size={11} className="text-success" />
                    <span>SEAL INTACT</span>
                  </div>
                </div>
              </div>

              {/* Connector Spine 2 */}
              <div className="concept-flow-connector">
                <div className="connector-line" />
                <div className="connector-arrow">↓</div>
              </div>

              {/* Step 3: Verified Event */}
              <div className="concept-node-card step-event">
                <div className="node-step-badge">STEP 03</div>
                <div className="node-icon-box bg-green">
                  <FileCheck size={20} className="text-success" />
                </div>
                <div className="node-meta">
                  <span className="node-title">Verified Event</span>
                  <span className="node-subtitle font-mono">CUSTODY TRANSFER &bull; CHENNAI</span>
                </div>
                <div className="node-status-pill green">
                  <span className="mini-dot green" />
                  <span>ATTESTED</span>
                </div>
              </div>

              {/* Connector Spine 3 */}
              <div className="concept-flow-connector">
                <div className="connector-line" />
                <div className="connector-arrow">↓</div>
              </div>

              {/* Step 4: Trusted Digital Record */}
              <div className="concept-node-card step-record highlight-trust">
                <div className="node-step-badge">STEP 04</div>
                <div className="node-icon-box bg-dark">
                  <ShieldCheck size={20} className="text-primary" />
                </div>
                <div className="node-meta">
                  <span className="node-title">Trusted Digital Record</span>
                  <span className="node-subtitle font-mono">APPEND-ONLY IMMUTABLE HISTORY</span>
                </div>
                <div className="node-status-pill verified">
                  <span>✓ RECORD VERIFIED</span>
                </div>
              </div>
            </div>

            {/* Bottom Diagram Footnote */}
            <div className="diagram-frame-footer">
              <span className="footer-schematic-text font-mono">
                SIMULATED DATA PATTERN &middot; MULTI-MODAL RECONFIGURABLE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
