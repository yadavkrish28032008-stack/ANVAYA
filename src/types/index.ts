export type Sector = 'Road' | 'Railway' | 'Marine' | 'Airway';

export type AssetStatus = 'Normal' | 'Warning' | 'Alert';

export interface AssetActivityEvent {
  time: string;
  description: string;
  status: string;
}

export interface DemoAsset {
  id: string;
  sector: Sector;
  assetType: string;
  status: AssetStatus;
  identity: string;
  locationRegion: string;
  locationDetail: string;
  locationName: string;
  locationStatus: string;
  lastUpdate: string;
  mapX: number; // percentage (0 - 100)
  mapY: number; // percentage (0 - 100)
  temperature: number;
  tempThreshold: number;
  vibration: string;
  tamper: string;
  overallCondition: string;
  recentActivity: AssetActivityEvent[];
}

export interface OverviewMetrics {
  activeAssets: number;
  normalAssets: number;
  tamperAlerts: number;
  temperatureAlerts: number;
}

export interface RecentEvent {
  id: string;
  time: string;
  description: string;
  assetId: string;
  status: 'Verified' | 'Recorded' | 'Alert' | 'Normal' | 'Simulated';
}

export interface SectorMetric {
  sector: Sector;
  count: number;
}

export interface AssetConditionData {
  temperature: number;
  tempThreshold: number;
  vibration: 'Normal' | 'Warning';
  tamper: 'Secure' | 'Tamper Alert';
  identity: 'Verified' | 'Unverified';
}

export interface TrustStatusData {
  identityVerified: boolean;
  eventRecordVerified: boolean;
  dataIntegrityVerified: boolean;
  statusLabel: string;
}

export type DemoAlertType = 'Temperature' | 'Tamper';

export interface DemoAlertItem {
  id: string;
  time: string;
  assetId: string;
  alertType: DemoAlertType;
  status: string;
  recordedValue?: string;
  demoThreshold?: string;
  sealStatus?: string;
  eventDescription: string;
  action: string;
  source: string;
  recordStatus: string;
}

export interface AlertSummaryMetrics {
  temperatureAlerts: number;
  tamperAlerts: number;
  totalAlerts: number;
}
