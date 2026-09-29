import React from 'react';
import './LandingPage.css';
import { LandingNavbar } from './LandingNavbar';
import { HeroSection } from './HeroSection';
import {
  ProjectSnapshotSection,
  ProblemSection,
  ApproachSection,
  AssetNodeSection,
  HowItWorksSection,
  SectorCoverageSection,
  TrackingMatrixSection,
  TrustLayerSection,
  AssetJourneySection,
  DashboardPreviewSection,
  ImpactSection,
  TeamSection,
  FinalCTASection,
  LandingFooter,
} from './LandingSections';

interface LandingPageProps {
  onOpenDashboard: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onOpenDashboard }) => {
  return (
    <div className="anvaya-landing-wrapper">
      {/* Sticky Navigation */}
      <LandingNavbar onOpenDashboard={onOpenDashboard} />

      {/* Main Landing Page Flow */}
      <main className="landing-main-content">
        {/* Section 01: Hero */}
        <HeroSection onOpenDashboard={onOpenDashboard} />

        {/* Section 02: Project Snapshot */}
        <ProjectSnapshotSection />

        {/* Section 03: The Problem */}
        <ProblemSection />

        {/* Section 04: The ANVAYA Approach */}
        <ApproachSection />

        {/* Section 05: Universal Asset Node */}
        <AssetNodeSection />

        {/* Section 06: How It Works */}
        <HowItWorksSection />

        {/* Section 07: Sector Coverage */}
        <SectorCoverageSection />

        {/* Section 08: What ANVAYA Tracks */}
        <TrackingMatrixSection />

        {/* Section 09: Trust Layer (Deep Navy Contrast) */}
        <TrustLayerSection />

        {/* Section 10: Asset Journey */}
        <AssetJourneySection />

        {/* Section 11: Dashboard Preview */}
        <DashboardPreviewSection onOpenDashboard={onOpenDashboard} />

        {/* Section 12: Impact */}
        <ImpactSection />

        {/* Section 13: Team */}
        <TeamSection />

        {/* Section 16: Final CTA */}
        <FinalCTASection onOpenDashboard={onOpenDashboard} />
      </main>

      {/* Site Footer */}
      <LandingFooter />
    </div>
  );
};
