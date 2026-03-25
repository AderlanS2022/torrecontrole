export type AnalystRole = 'dedicated' | 'global';

export interface Analyst {
  id: string;
  name: string;
  role: AnalystRole;
  companiesCount: number;
  pendingCount: number;
  riskCompaniesCount: number;
  capacity: number; // 0-100
  avatar?: string;
  status: 'online' | 'offline' | 'away';
}
