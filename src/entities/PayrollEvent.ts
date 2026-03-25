export type PayrollEventType = 'earning' | 'deduction' | 'informative';

export interface PayrollEvent {
  id: string;
  code: string;
  name: string;
  type: PayrollEventType;
  description?: string;
  isAutomatic: boolean;
  baseCalculation?: string;
  percentage?: number;
  fixedValue?: number;
}

export interface EmployeeEvent {
  id: string;
  employeeId: string;
  eventId: string;
  competenceId: string;
  value: number;
  reference?: number; // e.g., hours or percentage
  status: 'pending' | 'calculated' | 'approved';
}
