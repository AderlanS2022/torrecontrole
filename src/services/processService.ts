import { Admission, Leave, Termination, SalaryChange, Absence } from '../entities';
import { delay, ApiResponse } from './api';

const mockAdmissions: Admission[] = [
  {
    id: '1',
    candidateName: 'Ricardo Silva',
    email: 'ricardo.silva@candidato.com.br',
    cpf: '111.222.333-44',
    role: 'Desenvolvedor Full Stack',
    department: 'Tecnologia',
    salary: 8500.00,
    admissionDate: '2026-04-01',
    status: 'in_progress',
    checklist: [
      { id: 'a1', label: 'Documentação Pessoal', isDone: true, required: true },
      { id: 'a2', label: 'Exame Admissional', isDone: false, required: true },
      { id: 'a3', label: 'Contrato Assinado', isDone: false, required: true },
      { id: 'a4', label: 'Equipamento Solicitado', isDone: true, required: false },
    ]
  }
];

const mockLeaves: Leave[] = [
  {
    id: '1',
    employeeId: '1',
    startDate: '2026-05-01',
    endDate: '2026-05-30',
    days: 30,
    status: 'pending',
    isPaid: true,
    isVestingPeriod: true,
    vestingPeriodStart: '2024-01-01',
    vestingPeriodEnd: '2024-12-31'
  }
];

export const processService = {
  async getAdmissions(): Promise<ApiResponse<Admission[]>> {
    await delay(600);
    return { data: mockAdmissions, status: 200 };
  },

  async getLeaves(employeeId?: string): Promise<ApiResponse<Leave[]>> {
    await delay(500);
    const leaves = employeeId ? mockLeaves.filter(l => l.employeeId === employeeId) : mockLeaves;
    return { data: leaves, status: 200 };
  },

  async getSummary(): Promise<ApiResponse<any>> {
    await delay(400);
    return {
      data: {
        pendingAdmissions: 3,
        pendingLeaves: 5,
        pendingTerminations: 1,
        pendingSalaryChanges: 2,
        activeAbsences: 4
      },
      status: 200
    };
  }
};
