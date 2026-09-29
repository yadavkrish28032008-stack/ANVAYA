import React from 'react';
import {
  LayoutDashboard,
  Navigation,
  Activity,
  AlertTriangle,
  ShieldCheck,
  Users,
  FileText,
} from 'lucide-react';

interface SidebarProps {
  activeNav: string;
  onSelectNav: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeNav, onSelectNav }) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'live-tracking', label: 'Live Tracking', icon: Navigation },
    { id: 'asset-health', label: 'Asset Health', icon: Activity },
    { id: 'tamper-events', label: 'Tamper Events', icon: AlertTriangle },
    { id: 'blockchain-trust', label: 'Blockchain Trust', icon: ShieldCheck },
    { id: 'custody', label: 'Custody', icon: Users },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  return (
    <aside className="editorial-sidebar">
      <div className="sidebar-section-tag">
        <span className="mono-sub">NAVIGATION</span>
      </div>

      <nav className="editorial-nav-menu">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              className={`editorial-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => onSelectNav(item.id)}
            >
              <div className="nav-item-content">
                <Icon size={16} strokeWidth={isActive ? 2.2 : 1.7} className="nav-icon" />
                <span className="nav-label">{item.label}</span>
              </div>
              {isActive && <div className="nav-active-indicator" />}
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer-notice">
        <div className="footer-status-pill">
          <span className="status-dot green" />
          <span className="footer-status-text">NETWORK SECURE</span>
        </div>
        <p className="footer-meta-text font-mono">
          MODEL: DEMO-ENV<br />
          SOURCE: SIMULATED
        </p>
      </div>
    </aside>
  );
};
