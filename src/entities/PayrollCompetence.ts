export type CompetenceStatus = 
  | 'waiting_client' 
  | 'sorting' 
  | 'analyzing' 
  | 'waiting_approval' 
  | 'approved' 
  | 'closed';

export interface PayrollCompetence {
  id: string;
  companyId: string;
  month: number;
  year: number;
  status: CompetenceStatus;
  startDate: string;
  endDate: string;
  paymentDate?: string;
  totalGross?: number;
  totalNet?: number;
  totalDeductions?: number;
  totalEmployees: number;
  checklist: ChecklistItem[];
}

export interface ChecklistItem {
  id: string;
  label: string;
  description?: string;
  status: 'ok' | 'pending' | 'warning';
  responsible?: string;
  updatedBy?: string;
  updatedAt?: string;
  isBlocking: boolean;
}
