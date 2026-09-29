import React from 'react';
import {
  FileText,
  Users,
  Eye,
  ShieldAlert,
  ArrowRight,
  Truck,
  Train,
  Ship,
  Plane,
  Fingerprint,
  MapPin,
  Activity,
  Lock,
  GitBranch,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  Layers,
  Clock,
  Compass,
} from 'lucide-react';

import mayuriPhoto from '../../assets/team/mayuri.png';
import boomeshPhoto from '../../assets/team/boomesh.png';
import josePhoto from '../../assets/team/jose.png';
import kaviyaPhoto from '../../assets/team/kavya.png';
import yadavkrishPhoto from '../../assets/team/yadavkrish.png';
import hafizPhoto from '../../assets/team/hafiz.png';
import muthusamyPhoto from '../../assets/team/muthusamy.png';
import gajendranPhoto from '../../assets/team/gajendran.png';
import dashboardPreviewImg from '../../assets/dashboard_preview.png';

interface SectionProps {
  onOpenDashboard: () => void;
}

export const ProjectSnapshotSection: React.FC = () => {
  const snapshotItems = [
    {
      num: '01',
      title: 'Universal Asset Identity',
      desc: 'Consistent digital attestation for physical assets across organizational silos.',
    },
    {
      num: '02',
      title: 'Condition & Security',
      desc: 'Simulated multi-telemetry observation covering temperature, vibration and enclosure integrity.',
    },
    {
      num: '03',
      title: 'Custody & Journey',
      desc: 'Verifiable record of multi-modal handovers between logistics sectors.',
    },
    {
      num: '04',
      title: 'Trusted Event History',
      desc: 'Append-only digital history ensuring tamper-evident accountability for audit trails.',
    },
  ];

  return (
    <section className="landing-snapshot-section" aria-label="Project Snapshot">
      <div className="landing-content-container">
        <div className="snapshot-grid">
          {snapshotItems.map((item) => (
            <div key={item.num} className="snapshot-card">
              <span className="snapshot-num font-mono">{item.num}</span>
              <h3 className="snapshot-title">{item.title}</h3>
              <p className="snapshot-desc">{item.desc}</p>
              <div className="snapshot-hairline" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==================================================
   PROJECT INFORMATION BAR
   ================================================== */
export const ProjectInfoBar: React.FC = () => {
  return (
    <section className="project-info-section" aria-label="Project Information">
      <div className="landing-content-container">
        <div className="project-info-bar-wrapper">
          <div className="project-info-card">
            <div className="project-info-item">
              <span className="project-info-label font-mono">Problem Statement ID</span>
              <span className="project-info-value font-mono">SIH26211</span>
            </div>
            <div className="project-info-divider" />
            <div className="project-info-item">
              <span className="project-info-label font-mono">Team ID</span>
              <span className="project-info-value font-mono">148124</span>
            </div>
            <div className="project-info-divider" />
            <div className="project-info-item">
              <span className="project-info-label font-mono">PS Category</span>
              <span className="project-info-value font-mono">Hardware</span>
            </div>
            <div className="project-info-divider" />
            <div className="project-info-item">
              <span className="project-info-label font-mono">Theme</span>
              <span className="project-info-value font-mono">Blockchain & Cybersecurity</span>
            </div>
            <div className="project-info-divider" />
            <div className="project-info-item">
              <span className="project-info-label font-mono">Team</span>
              <span className="project-info-value font-mono">ROOT LOGIC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==================================================
   SECTION 02 – PROJECT SNAPSHOT

/* ==================================================
   SECTION 03 – THE PROBLEM
   ================================================== */
export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: FileText,
      title: 'Fragmented Records',
      desc: 'Different parties may maintain separate asset records across incompatible databases and paper logs.',
    },
    {
      icon: Users,
      title: 'Unclear Custody',
      desc: 'Handover history can be difficult to trace across organizations without a unified chain of custody.',
    },
    {
      icon: Eye,
      title: 'Condition Visibility',
      desc: 'Important asset conditions and environmental excursions may not have a unified event history.',
    },
    {
      icon: ShieldAlert,
      title: 'Trust Gap',
      desc: 'Organizations need a shared record that can be independently verified without unilateral alteration.',
    },
  ];

  return (
    <section id="problem" className="landing-section bg-subtle" aria-label="The Problem">
      <div className="landing-content-container">
        <div className="section-header-centered">
          <span className="section-eyebrow font-mono">INDUSTRY CHALLENGE</span>
          <h2 className="section-main-title">The Problem</h2>
          <p className="section-lead-text">
            Physical assets and cargo often move across multiple organizations,
            locations and transport modes. Their identity, condition, custody
            and important events can become fragmented across different
            systems and records.
          </p>
        </div>

        <div className="problems-grid">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div key={prob.title} className="problem-card">
                <div className="problem-icon-wrap">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="problem-card-title">{prob.title}</h3>
                <p className="problem-card-desc">{prob.desc}</p>
                <div className="problem-card-accent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ==================================================
   SECTION 04 – THE ANVAYA APPROACH
   ================================================== */
export const ApproachSection: React.FC = () => {
  const flowSteps = [
    { step: 'PHYSICAL ASSET', sub: 'Container / Cargo' },
    { step: 'UNIVERSAL ASSET NODE', sub: 'Telemetry Attributor' },
    { step: 'VERIFIED EVENT', sub: 'Cryptographic Check' },
    { step: 'TRUSTED RECORD', sub: 'Append-Only Ledger' },
    { step: 'ASSET JOURNEY', sub: 'Unified Audit Trail' },
  ];

  return (
    <section id="solution" className="landing-section bg-white" aria-label="The ANVAYA Approach">
      <div className="landing-content-container">
        <div className="section-header-centered">
          <div className="badge-prototype-pill">PROTOTYPE CONCEPT</div>
          <h2 className="section-main-title">One Asset. One Trusted Journey.</h2>
          <p className="section-lead-text">
            ANVAYA creates a common trust layer connecting physical asset events
            with a consistent digital identity and verifiable history.
          </p>
        </div>

        {/* Horizontal Flow Visual */}
        <div className="approach-flow-wrapper">
          <div className="approach-flow-strip">
            {flowSteps.map((item, idx) => (
              <React.Fragment key={item.step}>
                <div className="approach-flow-node">
                  <div className="flow-node-dot">
                    <span className="dot-inner font-mono">{idx + 1}</span>
                  </div>
                  <span className="flow-node-title font-mono">{item.step}</span>
                  <span className="flow-node-sub">{item.sub}</span>
                </div>
                {idx < flowSteps.length - 1 && (
                  <div className="approach-flow-link">
                    <div className="link-line" />
                    <span className="link-arrow">&rarr;</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==================================================
   SECTION 05 – UNIVERSAL ASSET NODE
   ================================================== */
export const AssetNodeSection: React.FC = () => {
  const sectors = [
    { name: 'ROAD', icon: Truck, role: 'Fleet & Depot Tracking' },
    { name: 'RAILWAY', icon: Train, role: 'Intermodal Rail Yards' },
    { name: 'MARINE', icon: Ship, role: 'Ocean & Offshore Cargo' },
    { name: 'AIRWAY', icon: Plane, role: 'High-Value Air Cargo' },
  ];

  const capabilities = [
    { title: 'Identity', desc: 'Cryptographic hardware identity binding' },
    { title: 'Location', desc: 'Simulated multi-corridor transit tracking' },
    { title: 'Condition', desc: 'Simulated thermal & vibration telemetry' },
    { title: 'Tamper', desc: 'Simulated container seal status monitoring' },
    { title: 'Custody', desc: 'Attested organizational handover records' },
    { title: 'Events', desc: 'Chronological timeline of milestone events' },
  ];

  return (
    <section id="technology" className="landing-section bg-subtle" aria-label="Universal Asset Node">
      <div className="landing-content-container">
        <div className="section-header-centered">
          <span className="section-eyebrow font-mono">RECONFIGURABLE ARCHITECTURE</span>
          <h2 className="section-main-title">One Node. Multiple Transport Modes.</h2>
          <p className="section-lead-text">
            The ANVAYA concept uses a reusable asset node whose configuration can
            represent different physical asset and transport scenarios.
          </p>
        </div>

        {/* 4 Transport Modes Representation */}
        <div className="modes-cards-grid">
          {sectors.map((sec) => {
            const Icon = sec.icon;
            return (
              <div key={sec.name} className="mode-card">
                <div className="mode-icon-circle">
                  <Icon size={24} className="text-primary" />
                </div>
                <h4 className="mode-title font-mono">{sec.name}</h4>
                <p className="mode-role">{sec.role}</p>
                <div className="mode-card-line" />
              </div>
            );
          })}
        </div>

        {/* 6 Conceptual Capabilities Matrix */}
        <div className="node-capabilities-tray">
          <div className="tray-header">
            <span className="tray-title font-mono">NODE CAPABILITY ATTRIBUTES</span>
            <span className="badge-demo-inline">SIMULATED CAPABILITIES</span>
          </div>
          <div className="capabilities-grid">
            {capabilities.map((cap) => (
              <div key={cap.title} className="cap-pill-card">
                <div className="cap-bullet" />
                <div className="cap-info">
                  <span className="cap-name font-mono">{cap.title}</span>
                  <span className="cap-desc">{cap.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==================================================
   SECTION 06 – HOW IT WORKS
   ================================================== */
export const HowItWorksSection: React.FC = () => {
  const workflowSteps = [
    {
      num: '01',
      title: 'IDENTIFY',
      desc: 'Establish the asset\'s digital identity through hardware-bound cryptographic keys.',
      icon: Fingerprint,
    },
    {
      num: '02',
      title: 'OBSERVE',
      desc: 'Represent condition and location information through simulated sensor nodes.',
      icon: Eye,
    },
    {
      num: '03',
      title: 'VERIFY',
      desc: 'Validate the event record against defined business logic and cryptographic proofs.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'RECORD',
      desc: 'Preserve the event as part of the immutable, tamper-evident asset history.',
      icon: Layers,
    },
    {
      num: '05',
      title: 'TRACE',
      desc: 'View the comprehensive asset journey and custody history in real-time or audit.',
      icon: GitBranch,
    },
  ];

  return (
    <section id="how-it-works" className="landing-section bg-white" aria-label="How It Works">
      <div className="landing-content-container">
        <div className="section-header-centered">
          <span className="section-eyebrow font-mono">END-TO-END WORKFLOW</span>
          <h2 className="section-main-title">How It Works</h2>
          <p className="section-lead-text">
            A cohesive 5-step lifecycle turning raw physical asset milestones into
            independently verifiable digital records.
          </p>
        </div>

        <div className="workflow-timeline-track">
          {workflowSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="workflow-step-card">
                <div className="step-card-spine">
                  <div className="step-circle font-mono">
                    <Icon size={18} />
                  </div>
                  {idx < workflowSteps.length - 1 && <div className="step-line" />}
                </div>
                <div className="step-card-content">
                  <div className="step-meta-row">
                    <span className="step-number font-mono">{step.num}</span>
                    <h3 className="step-title font-mono">{step.title}</h3>
                  </div>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ==================================================
   SECTION 07 – SECTOR COVERAGE
   ================================================== */
export const SectorCoverageSection: React.FC = () => {
  const sectors = [
    {
      name: 'ROAD',
      icon: Truck,
      desc: 'Vehicle and overland cargo movement across highway corridors and intermediate transit depots.',
      example: 'Freight Fleets & Inter-city Box Trucks',
      corridor: 'Corridor: NH-48 National Freight Expressway',
    },
    {
      name: 'RAILWAY',
      icon: Train,
      desc: 'Rail assets and high-volume container movement managed across national rail freight junctions.',
      example: 'Intermodal Container Wagons',
      corridor: 'Corridor: Central Rail Freight Corridor',
    },
    {
      name: 'MARINE',
      icon: Ship,
      desc: 'Container and offshore cargo movement through maritime ports, coastal transshipment and open sea.',
      example: 'ISO Maritime Enclosures & Reefers',
      corridor: 'Corridor: Bay of Bengal Maritime Basin',
    },
    {
      name: 'AIRWAY',
      icon: Plane,
      desc: 'Air cargo and high-priority aviation asset scenarios requiring tight temperature and custody constraints.',
      example: 'Temperature-Controlled Air Cargo ULDs',
      corridor: 'Corridor: Delhi-Chennai Express Airway',
    },
  ];

  return (
    <section className="landing-section bg-subtle" aria-label="Sector Coverage">
      <div className="landing-content-container">
        <div className="section-header-centered">
          <span className="section-eyebrow font-mono">MULTIMODAL MOBILITY</span>
          <h2 className="section-main-title">One Trust Layer Across Four Sectors</h2>
          <p className="section-lead-text">
            Standardized identity, telemetry attribution, and custody tracking adapted
            to the operational dynamics of each transport mode.
          </p>
        </div>

        <div className="sectors-grid">
          {sectors.map((sec) => {
            const Icon = sec.icon;
            return (
              <div key={sec.name} className="sector-card">
                <div className="sector-card-top">
                  <div className="sector-icon-box">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <span className="sector-badge-name font-mono">{sec.name}</span>
                </div>
                <p className="sector-card-desc">{sec.desc}</p>
                <div className="sector-card-divider" />
                <div className="sector-card-footer">
                  <div className="sector-example">
                    <span className="footer-label font-mono">TYPICAL ASSET:</span>
                    <span className="footer-val">{sec.example}</span>
                  </div>
                  <div className="sector-route font-mono">{sec.corridor}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ==================================================
   SECTION 08 – WHAT ANVAYA TRACKS
   ================================================== */
export const TrackingMatrixSection: React.FC = () => {
  const matrixItems = [
    {
      icon: Fingerprint,
      title: 'ASSET IDENTITY',
      question: 'Who or what is the asset?',
      desc: 'Cryptographically registered identifier representing unique physical equipment or containers.',
    },
    {
      icon: MapPin,
      title: 'LOCATION',
      question: 'Where is the asset?',
      desc: 'Regional transit node and sector hub locations within simulated transportation corridors.',
    },
    {
      icon: Activity,
      title: 'CONDITION',
      question: 'What is its current demo condition?',
      desc: 'Simulated ambient temperature and vibration readings benchmarked against safe operating thresholds.',
    },
    {
      icon: Lock,
      title: 'TAMPER',
      question: 'Is a security event represented?',
      desc: 'Container seal status and enclosure integrity indicators demonstrating simulated breach warnings.',
    },
    {
      icon: Users,
      title: 'CUSTODY',
      question: 'Who was the handover recorded with?',
      desc: 'Attested organizational custodianship transferred across shippers, operators and logistics ports.',
    },
    {
      icon: Clock,
      title: 'EVENT HISTORY',
      question: 'What important events are recorded?',
      desc: 'Chronological timeline of verified checkpoints, inspection records and telemetry updates.',
    },
  ];

  return (
    <section className="landing-section bg-white" aria-label="What ANVAYA Tracks">
      <div className="landing-content-container">
        <div className="section-header-centered">
          <span className="section-eyebrow font-mono">TELEMETRY &amp; STATE MODEL</span>
          <h2 className="section-main-title">What ANVAYA Tracks</h2>
          <p className="section-lead-text">
            A comprehensive matrix capturing critical physical dimensions into
            structured, tamper-evident digital states.
          </p>
        </div>

        <div className="matrix-grid">
          {matrixItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="matrix-card">
                <div className="matrix-card-header">
                  <div className="matrix-icon-box">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="matrix-title font-mono">{item.title}</h3>
                </div>
                <div className="matrix-question-bubble">
                  <span>{item.question}</span>
                </div>
                <p className="matrix-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ==================================================
   SECTION 09 – TRUST LAYER (DEEP NAVY CONTRAST)
   ================================================== */
export const TrustLayerSection: React.FC = () => {
  const ledgerSteps = [
    { num: '01', title: 'ASSET EVENT', desc: 'Physical checkpoint or sensor telemetry recorded' },
    { num: '02', title: 'VERIFICATION', desc: 'Business rules & signature consensus validated' },
    { num: '03', title: 'SIGNED RECORD', desc: 'Payload attested with immutable event metadata' },
    { num: '04', title: 'TRUSTED LEDGER', desc: 'Committed to append-only decentralized ledger' },
    { num: '05', title: 'TRACEABLE HISTORY', desc: 'Accessible for transparent multi-party audits' },
  ];

  return (
    <section className="landing-section bg-dark-navy text-light" aria-label="Trust Layer">
      <div className="landing-content-container">
        <div className="section-header-centered">
          <div className="dark-eyebrow font-mono">VERIFIABLE LEDGER ARCHITECTURE</div>
          <h2 className="section-main-title text-white">From Physical Events to Trusted Records</h2>
          <p className="section-lead-text text-slate-300">
            ANVAYA demonstrates how physical asset events can be represented
            as verifiable digital records across a decentralized audit layer.
          </p>
        </div>

        {/* Conceptual Dark Flow Track */}
        <div className="dark-ledger-flow">
          {ledgerSteps.map((step, idx) => (
            <React.Fragment key={step.title}>
              <div className="dark-flow-card">
                <div className="dark-card-step font-mono">{step.num}</div>
                <h4 className="dark-card-title font-mono">{step.title}</h4>
                <p className="dark-card-desc">{step.desc}</p>
                <div className="dark-card-glow" />
              </div>
              {idx < ledgerSteps.length - 1 && (
                <div className="dark-flow-connector">
                  <div className="dark-line" />
                  <span className="dark-arrow">&darr;</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="dark-disclaimer-box font-mono">
          <ShieldCheck size={14} className="text-cyan-400" />
          <span>CONCEPTUAL DEMONSTRATION &middot; ZERO CRYPTOCURRENCY &middot; PROPRIETARY TRUST ARCHITECTURE</span>
        </div>
      </div>
    </section>
  );
};

/* ==================================================
   SECTION 10 – ASSET JOURNEY
   ================================================== */
export const AssetJourneySection: React.FC = () => {
  const journeyMilestones = [
    {
      stage: 'ORIGIN',
      location: 'Chennai Logistics Hub',
      mode: 'ROAD TRANSIT',
      time: '08:30 IST',
      event: 'IDENTITY VERIFIED',
      desc: 'Asset ANV-MR-014 dispatched from manufacturing facility with seal verified.',
      status: 'VERIFIED',
    },
    {
      stage: 'IN-TRANSIT',
      location: 'Central Freight Junction',
      mode: 'RAILWAY CORRIDOR',
      time: '10:15 IST',
      event: 'CONDITION RECORDED',
      desc: 'Transshipped to freight rail car. Ambient temperature 24.6°C within safe bounds.',
      status: 'NORMAL',
    },
    {
      stage: 'PORT HANDOVER',
      location: 'Ennore Marine Gateway',
      mode: 'MARINE DOCKS',
      time: '12:45 IST',
      event: 'CUSTODY UPDATED',
      desc: 'Custody transferred to maritime shipping operator. Enclosure seal intact.',
      status: 'VERIFIED',
    },
    {
      stage: 'DESTINATION',
      location: 'Bay of Bengal Offshore Berth',
      mode: 'OCEAN ROUTE',
      time: '14:20 IST',
      event: 'EVENT RECORDED',
      desc: 'Simulated maritime delivery completed. Full audit chain verified.',
      status: 'VERIFIED',
    },
  ];

  return (
    <section className="landing-section bg-white" aria-label="Asset Journey">
      <div className="landing-content-container">
        <div className="section-header-centered">
          <span className="section-eyebrow font-mono">SIMULATED INTERMODAL JOURNEY</span>
          <h2 className="section-main-title">Simulated Journey from Origin to Berth</h2>
          <p className="section-lead-text">
            Experience how ANVAYA tracks and attests asset milestones through a sample
            multimodal journey across highway, rail and maritime transport.
          </p>
        </div>

        <div className="journey-timeline-grid">
          {journeyMilestones.map((item, idx) => (
            <div key={item.stage} className="journey-card">
              <div className="journey-card-badge font-mono">
                <span>0{idx + 1} &middot; {item.stage}</span>
              </div>
              <h3 className="journey-location">{item.location}</h3>
              <div className="journey-mode-pill font-mono">
                <Compass size={12} className="text-primary" />
                <span>{item.mode}</span>
              </div>
              <div className="journey-meta-divider" />
              <div className="journey-event-badge font-mono">
                <CheckCircle size={13} className="text-success" />
                <span>{item.event}</span>
              </div>
              <p className="journey-desc">{item.desc}</p>
              <div className="journey-card-footer font-mono">
                <span>LOGGED: {item.time}</span>
                <span className="status-micro-pill">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==================================================
   SECTION 11 – DASHBOARD PREVIEW
   ================================================== */
export const DashboardPreviewSection: React.FC<SectionProps> = ({ onOpenDashboard }) => {
  return (
    <section className="landing-section bg-subtle" aria-label="Dashboard Preview">
      <div className="landing-content-container">
        <div className="section-header-centered">
          <span className="section-eyebrow font-mono">OPERATIONAL INTELLIGENCE</span>
          <h2 className="section-main-title">See the Asset Trust Layer</h2>
          <p className="section-lead-text">
            A simple command-center interface for viewing simulated asset locations,
            condition, alerts and trusted event records.
          </p>
        </div>

        <div className="dashboard-preview-window">
          <div className="preview-window-topbar">
            <div className="window-dots">
              <span className="dot red" />
              <span className="dot amber" />
              <span className="dot green" />
            </div>
            <div className="window-url-bar font-mono">
              anvaya://command-center.demo/overview
            </div>
            <button className="window-launch-btn" onClick={onOpenDashboard}>
              <span>Launch Live Interface</span>
              <ExternalLink size={13} />
            </button>
          </div>

          <div className="preview-image-wrapper">
            <img
              src={dashboardPreviewImg}
              alt="ANVAYA Editorial Logistics Command Center Dashboard Preview"
              className="preview-img"
              loading="lazy"
            />
            <div className="preview-overlay-scrim">
              <button className="preview-cta-btn" onClick={onOpenDashboard}>
                <span>Open Demo Dashboard</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==================================================
   SECTION 12 – IMPACT
   ================================================== */
export const ImpactSection: React.FC = () => {
  const outcomes = [
    {
      title: 'ONE ASSET IDENTITY',
      desc: 'A consistent identity across the asset journey, eliminating reconciliation discrepancies between parties.',
    },
    {
      title: 'CLEARER CUSTODY',
      desc: 'A structured representation of handovers establishing unambiguous accountability across organizations.',
    },
    {
      title: 'VISIBLE CONDITION',
      desc: 'Important condition events and excursions can be represented in one place for early risk intervention.',
    },
    {
      title: 'TRACEABLE HISTORY',
      desc: 'A connected history of important asset events accessible for post-transit dispute resolution and compliance.',
    },
  ];

  return (
    <section id="impact" className="landing-section bg-white" aria-label="Why ANVAYA Matters">
      <div className="landing-content-container">
        <div className="section-header-centered">
          <div className="badge-prototype-pill">CONCEPTUAL BENEFITS</div>
          <h2 className="section-main-title">Why ANVAYA Matters</h2>
          <p className="section-lead-text">
            Transforming fragmented supply chain records into an attested,
            trustworthy digital foundation.
          </p>
        </div>

        <div className="impact-grid">
          {outcomes.map((item) => (
            <div key={item.title} className="impact-card">
              <div className="impact-accent-top" />
              <h3 className="impact-card-title font-mono">{item.title}</h3>
              <p className="impact-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ==================================================
   SECTION 13 – TEAM ROOTLOGIC & MENTORS
   ================================================== */
export const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      num: '01',
      name: 'MAYURI S V',
      role: 'Team Lead | Research, Validation & Project Integration',
      photo: mayuriPhoto,
    },
    {
      id: 2,
      num: '02',
      name: 'BOOMESH R',
      role: 'Technical Lead | System Architecture & Integration',
      photo: boomeshPhoto,
    },
    {
      id: 3,
      num: '03',
      name: 'JOSE GEORGESAM E',
      role: 'ML & Data Analytics Developer',
      photo: josePhoto,
    },
    {
      id: 4,
      num: '04',
      name: 'KAVIYA M',
      role: 'Electronics & Power Control Engineer',
      photo: kaviyaPhoto,
    },
    {
      id: 5,
      num: '05',
      name: 'YADAVKRISH R D',
      role: 'Frontend & Dashboard Developer',
      photo: yadavkrishPhoto,
    },
    {
      id: 6,
      num: '06',
      name: 'HAFIZ MUZZAMIL A',
      role: 'Embedded Hardware & Sensor Integration Engineer',
      photo: hafizPhoto,
    },
  ];

  const mentors = [
    {
      id: 7,
      num: '07',
      name: 'MUTHUSAMY K',
      role: 'Project Mentor',
      photo: muthusamyPhoto,
    },
    {
      id: 8,
      num: '08',
      name: 'GAJENDRAN PARTHASARATHI E R',
      role: 'Project Mentor',
      photo: gajendranPhoto,
    },
  ];

  return (
    <section id="team" className="landing-section bg-subtle" aria-label="Team Rootlogic and Mentors">
      <div className="landing-content-container">
        {/* --- 1. TEAM ROOTLOGIC SUBSECTION --- */}
        <div className="section-header-centered">
          <span className="section-eyebrow font-mono">PROJECT CONTRIBUTORS</span>
          <h2 className="section-main-title">TEAM ROOTLOGIC</h2>
          <p className="section-lead-text">
            The team behind the project concept and prototype.
          </p>
        </div>

        {/* 6 Team Members: 3 columns x 2 rows on Desktop */}
        <div className="team-rootlogic-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-photo-frame">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="team-portrait-img"
                  loading="lazy"
                />
              </div>
              <div className="team-info-block">
                <span className="team-member-number font-mono">{member.num}</span>
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role-text">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- VISUAL SEPARATION --- */}
        <div className="team-mentor-divider">
          <div className="divider-line" />
          <div className="divider-badge font-mono">PROJECT ADVISORY</div>
          <div className="divider-line" />
        </div>

        {/* --- 2. MENTORS SUBSECTION --- */}
        <div className="section-header-centered mentor-header">
          <span className="section-eyebrow font-mono">GUIDANCE &amp; VALIDATION</span>
          <h2 className="section-main-title">MENTORS</h2>
          <p className="section-lead-text">
            Guiding project execution, technical validation and industry alignment.
          </p>
        </div>

        {/* 2 Mentors: Side-by-side centered layout */}
        <div className="mentors-grid-wrapper">
          <div className="mentors-grid">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="team-card mentor-card">
                <div className="mentor-accent-badge font-mono">MENTOR</div>
                <div className="team-photo-frame mentor-photo-frame">
                  <img
                    src={mentor.photo}
                    alt={mentor.name}
                    className="team-portrait-img mentor-portrait-img"
                    loading="lazy"
                  />
                </div>
                <div className="team-info-block mentor-info-block">
                  <span className="team-member-number font-mono">{mentor.num}</span>
                  <h3 className="team-member-name mentor-name">{mentor.name}</h3>
                  <div className="mentor-role-badge font-mono">{mentor.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==================================================
   SECTION 14 – DEMO DISCLAIMER
   ================================================== */
export const DemoDisclaimerSection: React.FC = () => {
  return (
    <section className="landing-disclaimer-section" aria-label="Demo Disclaimer">
      <div className="landing-content-container">
        <div className="disclaimer-callout-box">
          <div className="disclaimer-header">
            <span className="disclaimer-badge font-mono">DEMO PROTOTYPE</span>
            <span className="disclaimer-timestamp font-mono">ACADEMIC &amp; INNOVATION DEMONSTRATOR</span>
          </div>
          <p className="disclaimer-body">
            ANVAYA is currently presented as a demonstration model. All dashboard values,
            asset locations, condition states and event records shown in this prototype are simulated.
            No real-time physical asset monitoring is active.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ==================================================
   SECTION 16 – FINAL CTA
   ================================================== */
export const FinalCTASection: React.FC<SectionProps> = ({ onOpenDashboard }) => {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="landing-cta-section" aria-label="Final CTA">
      <div className="landing-content-container">
        <div className="final-cta-card">
          <div className="cta-content-wrap">
            <span className="cta-eyebrow font-mono">GET STARTED</span>
            <h2 className="cta-heading">Explore the ANVAYA Concept</h2>
            <p className="cta-sub">
              Discover how a universal trust layer can connect physical asset identity,
              condition, custody and event history into an attested digital record.
            </p>
            <div className="cta-btn-row">
              <button className="cta-btn-primary" onClick={onOpenDashboard}>
                <span>Open ANVAYA Dashboard</span>
                <ArrowRight size={16} />
              </button>
              <a href="#how-it-works" className="cta-btn-secondary" onClick={handleScrollToTop}>
                <span>Explore the Concept</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==================================================
   FOOTER
   ================================================== */
export const LandingFooter: React.FC = () => {
  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Technology', href: '#technology' },
    { label: 'Team', href: '#team' },
    { label: 'Impact', href: '#impact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="landing-footer" aria-label="Site Footer">
      <div className="landing-content-container">
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <div className="footer-brand-title">
              <span className="brand-name">ANVAYA</span>
              <span className="demo-pill font-mono">DEMO PROTOTYPE</span>
            </div>
            <p className="footer-tagline">
              Universal Asset Trust &amp; Monitoring Network
            </p>
            <p className="footer-mission-note">
              A trusted digital layer for physical asset identity, condition, custody and event history.
            </p>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-header font-mono">NAVIGATION</span>
            <div className="footer-links-grid">
              {footerLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="footer-nav-link"
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <span className="footer-copy font-mono">
            &copy; 2026 ANVAYA. Demonstration &amp; UI/UX Innovation Prototype.
          </span>
          <span className="footer-disclaimer font-mono">
            All data and events shown are simulated.
          </span>
        </div>
      </div>
    </footer>
  );
};
