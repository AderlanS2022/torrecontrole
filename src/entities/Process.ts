export type ProcessStatus = 'pending' | 'in_progress' | 'waiting_approval' | 'approved' | 'rejected' | 'completed';

export interface Leave {
  id: string;
  employeeId: string;
  startDate: string;
  endDate: string;
  days: number;
  status: ProcessStatus;
  isPaid: boolean;
  isVestingPeriod: boolean; // Período aquisitivo
  vestingPeriodStart: string;
  vestingPeriodEnd: string;
}

export interface Absence {
  id: string;
  employeeId: string;
  startDate: string;
  endDate?: string;
  reason: 'sick' | 'maternity' | 'paternity' | 'accident' | 'military' | 'other';
  status: ProcessStatus;
  description?: string;
  cid?: string; // Código Internacional de Doenças
}

export interface Admission {
  id: string;
  candidateName: string;
  email: string;
  cpf: string;
  role: string;
  department: string;
  salary: number;
  admissionDate: string;
  status: ProcessStatus;
  checklist: {
    id: string;
    label: string;
    isDone: boolean;
    required: boolean;
  }[];
}

export interface Termination {
  id: string;
  employeeId: string;
  terminationDate: string;
  reason: 'resignation' | 'dismissal_with_cause' | 'dismissal_without_cause' | 'mutual_agreement' | 'end_of_contract';
  status: ProcessStatus;
  noticePeriodType: 'worked' | 'indemnified' | 'waived';
  noticePeriodDays: number;
}

export interface SalaryChange {
  id: string;
  employeeId: string;
  oldSalary: number;
  newSalary: number;
  reason: 'promotion' | 'merit' | 'union_agreement' | 'transfer';
  effectiveDate: string;
  status: ProcessStatus;
}
