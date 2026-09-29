import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

interface LandingNavbarProps {
  onOpenDashboard: () => void;
}

export const LandingNavbar: React.FC<LandingNavbarProps> = ({ onOpenDashboard }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`landing-nav-header ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="landing-nav-container">
        {/* SIH Logo */}
        <div className="landing-sih-logo">
          <img src="/SIH2026-logo.png" alt="SIH 2026 Logo" />
        </div>

        {/* Brand Left */}
        <a href="#home" className="landing-brand-group" onClick={(e) => handleLinkClick(e, '#home')}>
          <div className="landing-logo-mark">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" />
              <circle cx="12" cy="11" r="2.5" fill="currentColor" />
              <path d="M12 8.5v-2M12 13.5v2M9.5 11h-2M14.5 11h2" strokeWidth="1.8" />
            </svg>
          </div>
          <div className="landing-brand-text">
            <div className="brand-name-row">
              <span className="landing-brand-name">ANVAYA</span>
              <span className="landing-demo-pill">DEMO</span>
            </div>
            <span className="landing-brand-sub">Universal Asset Trust &amp; Monitoring Network</span>
          </div>
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav className="landing-nav-links">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="landing-nav-link"
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="landing-nav-actions">
          <button
            className="landing-dashboard-btn"
            onClick={onOpenDashboard}
            title="Open simulated ANVAYA Asset Command Center"
          >
            <span>Explore Dashboard</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="landing-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="landing-mobile-menu">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav-link"
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <button
            className="mobile-dashboard-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDashboard();
            }}
          >
            <span>Explore Dashboard</span>
            <ArrowRight size={15} />
          </button>
        </div>
      )}
    </header>
  );
};
