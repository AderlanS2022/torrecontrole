import { Company as EntityCompany, Alert as EntityAlert } from '../entities';

export type Company = EntityCompany;
export type Alert = EntityAlert;

export interface TimeRecord {
  id: string;
  employeeName: string;
  companyName: string;
  date: string;
  entry: string;
  exit: string;
  status: 'normal' | 'incomplete' | 'overtime' | 'divergent';
  location: string;
  device: string;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  module: string;
  companyName: string;
  details: string;
}

export interface DashboardKPIs {
  activePayrolls: number;
  criticalAlerts: number;
  pendingValidations: number;
  upcomingDeadlines: number;
  processedEvents: number;
  timeTrackingIssues: number;
}
