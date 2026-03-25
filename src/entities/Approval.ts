export type ApprovalType = 'payroll' | 'leave' | 'absence' | 'admission' | 'termination' | 'salary_change' | 'time_entry';

export interface Approval {
  id: string;
  type: ApprovalType;
  resourceId: string;
  requesterId: string;
  requesterName: string;
  approverId?: string;
  approverName?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt?: string;
  comments?: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
}
