import { Approval } from '../entities';
import { delay, ApiResponse } from './api';

const mockApprovals: Approval[] = [
  {
    id: '1',
    type: 'payroll',
    resourceId: '1',
    requesterId: '2',
    requesterName: 'Ana Oliveira',
    status: 'pending',
    createdAt: '2026-03-23T10:00:00Z',
    priority: 'critical',
    comments: 'Folha de Março/2026 pronta para conferência final.'
  },
  {
    id: '2',
    type: 'leave',
    resourceId: '1',
    requesterId: '1',
    requesterName: 'Aderlan Santos',
    status: 'pending',
    createdAt: '2026-03-22T14:30:00Z',
    priority: 'medium',
    comments: 'Solicitação de férias para Maio/2026.'
  }
];

export const approvalService = {
  async getAll(): Promise<ApiResponse<Approval[]>> {
    await delay(700);
    return { data: mockApprovals, status: 200 };
  },

  async approve(id: string, approverId: string, approverName: string): Promise<ApiResponse<void>> {
    await delay(1000);
    const approval = mockApprovals.find(a => a.id === id);
    if (approval) {
      approval.status = 'approved';
      approval.approverId = approverId;
      approval.approverName = approverName;
      approval.updatedAt = new Date().toISOString();
    }
    return { data: undefined, status: 200 };
  },

  async reject(id: string, approverId: string, approverName: string, comments: string): Promise<ApiResponse<void>> {
    await delay(1000);
    const approval = mockApprovals.find(a => a.id === id);
    if (approval) {
      approval.status = 'rejected';
      approval.approverId = approverId;
      approval.approverName = approverName;
      approval.comments = comments;
      approval.updatedAt = new Date().toISOString();
    }
    return { data: undefined, status: 200 };
  }
};
