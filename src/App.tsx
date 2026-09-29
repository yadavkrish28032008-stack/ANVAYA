import React, { useState, useEffect } from 'react';
import './App.css';
import {
  MOCK_OVERVIEW_METRICS,
  MOCK_DEMO_ASSETS,
  MOCK_ASSET_CONDITION,
  MOCK_TRUST_STATUS,
  MOCK_RECENT_EVENTS,
  MOCK_ALERT_SUMMARY_METRICS,
  MOCK_RECENT_ALERTS,
  MOCK_TRANSPORT_NETWORK,
} from './data/mockData';
import type { AssetConditionData } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { CommandSummary } from './components/CommandSummary';
import { AssetNetworkMap } from './components/AssetNetworkMap';
import { AssetHealthCard } from './components/AssetHealthCard';
import { TransportNetworkSpectrum } from './components/TransportNetworkSpectrum';
import { TrustVisual } from './components/TrustVisual';
import { RecentActivityTimeline } from './components/RecentActivityTimeline';
import { AssetDetails } from './components/AssetDetails';
import { AlertCenter } from './components/AlertCenter';
import { LandingPage } from './components/landing/LandingPage';

export const App: React.FC = () => {
  const getInitialView = (): 'landing' | 'overview' | 'details' | 'alerts' => {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('details')) return 'details';
    if (hash.includes('alerts')) return 'alerts';
    if (hash.includes('dashboard') || hash.includes('overview')) return 'overview';
    return 'landing';
  };

  const [currentView, setCurrentView] = useState<'landing' | 'overview' | 'details' | 'alerts'>(
    getInitialView()
  );
  const [activeNav, setActiveNav] = useState<string>(
    window.location.hash.includes('alerts') ? 'tamper-events' : 'overview'
  );
  const [selectedAssetId, setSelectedAssetId] = useState<string>('ANV-MR-014');
  const [condition, setCondition] = useState<AssetConditionData>(MOCK_ASSET_CONDITION);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('details')) {
        setCurrentView('details');
      } else if (hash.includes('alerts')) {
        setCurrentView('alerts');
        setActiveNav('tamper-events');
      } else if (hash.includes('dashboard') || hash.includes('overview')) {
        setCurrentView('overview');
        setActiveNav('overview');
      } else if (
        !hash ||
        hash === '#' ||
        hash === '#home' ||
        hash.includes('problem') ||
        hash.includes('solution') ||
        hash.includes('how-it-works') ||
        hash.includes('technology') ||
        hash.includes('team') ||
        hash.includes('impact') ||
        hash.includes('references')
      ) {
        setCurrentView('landing');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const selectedAsset =
    MOCK_DEMO_ASSETS.find((a) => a.id === selectedAssetId) || MOCK_DEMO_ASSETS[0];

  const handleOpenDashboard = () => {
    setCurrentView('overview');
    setActiveNav('overview');
    window.location.hash = 'dashboard';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectNav = (id: string) => {
    setActiveNav(id);
    if (id === 'overview') {
      setCurrentView('overview');
      window.location.hash = 'dashboard';
    } else if (id === 'tamper-events' || id === 'alerts') {
      setCurrentView('alerts');
      window.location.hash = 'alerts';
    }
  };

  const handleOpenAlerts = () => {
    setActiveNav('tamper-events');
    setCurrentView('alerts');
    window.location.hash = 'alerts';
  };

  const handleOpenDetails = (id: string) => {
    setSelectedAssetId(id);
    setCurrentView('details');
    window.location.hash = `details?asset=${id}`;
  };

  const handleBackToOverview = () => {
    setCurrentView('overview');
    setActiveNav('overview');
    window.location.hash = 'dashboard';
  };

  // Toggle temperature between normal (24.6°C) and simulated alert (27.4°C)
  const handleToggleTempAlert = () => {
    setCondition((prev) => ({
      ...prev,
      temperature: prev.temperature > prev.tempThreshold ? 24.6 : 27.4,
    }));
  };

  return (
    <>
      {currentView === 'landing' ? (
        /* OFFICIAL PROJECT LANDING PAGE */
        <LandingPage onOpenDashboard={handleOpenDashboard} />
      ) : (
        /* ASSET COMMAND CENTER DEMO INTERFACE */
        <div className="anvaya-command-center">
          {/* Header with back-to-landing capability */}
          <Header onBackToLanding={handleBackToLanding} />

          {/* Main Body: Sidebar + Editorial Canvas */}
          <div className="command-body">
            <Sidebar activeNav={activeNav} onSelectNav={handleSelectNav} />

            <main className="editorial-main-content" id="main-content">
              {currentView === 'overview' && (
                <div className="overview-flow">
                  {/* SECTION 1: COMMAND SUMMARY (Large typographic metric strip) */}
                  <CommandSummary
                    metrics={MOCK_OVERVIEW_METRICS}
                    onOpenAlerts={handleOpenAlerts}
                  />

                  {/* SECTION 2: MAIN VISUAL – ASSET NETWORK (Spatial map-first centerpiece) */}
                  <AssetNetworkMap
                    assets={MOCK_DEMO_ASSETS}
                    selectedAssetId={selectedAssetId}
                    onSelectAsset={setSelectedAssetId}
                    onOpenDetails={handleOpenDetails}
                  />

                  {/* SECTION 3: ASSET HEALTH + TRANSPORT SNAPSHOT (Asymmetric 2-column) */}
                  <div className="mid-telemetry-row">
                    <div className="telemetry-left-stack">
                      {/* ASSET HEALTH with linear temperature spectrum gauge */}
                      <AssetHealthCard
                        condition={condition}
                        onToggleTempAlert={handleToggleTempAlert}
                      />

                      {/* TRANSPORT NETWORK segmented visual spectrum */}
                      <TransportNetworkSpectrum
                        metrics={MOCK_TRANSPORT_NETWORK}
                      />
                    </div>

                    <div className="telemetry-right-stack">
                      {/* ANVAYA TRUST visual indicator */}
                      <TrustVisual data={MOCK_TRUST_STATUS} />
                    </div>
                  </div>

                  {/* SECTION 4: RECENT ACTIVITY (Lightweight vertical timeline) */}
                  <RecentActivityTimeline
                    events={MOCK_RECENT_EVENTS}
                    onOpenAssetDetails={handleOpenDetails}
                  />
                </div>
              )}

              {currentView === 'details' && (
                <AssetDetails
                  asset={selectedAsset}
                  onBack={handleBackToOverview}
                />
              )}

              {currentView === 'alerts' && (
                <AlertCenter
                  metrics={MOCK_ALERT_SUMMARY_METRICS}
                  alerts={MOCK_RECENT_ALERTS}
                  onBack={handleBackToOverview}
                  onOpenAssetDetails={handleOpenDetails}
                />
              )}
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
