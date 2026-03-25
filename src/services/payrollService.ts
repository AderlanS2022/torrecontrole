import { PayrollCompetence, PayrollEvent, EmployeeEvent } from '../entities';
import { delay, ApiResponse } from './api';

const mockCompetences: PayrollCompetence[] = [
  {
    id: '1',
    companyId: 'comp1',
    month: 3,
    year: 2026,
    status: 'analyzing',
    startDate: '2026-03-01',
    endDate: '2026-03-31',
    paymentDate: '2026-04-05',
    totalGross: 452250.00,
    totalNet: 339850.00,
    totalDeductions: 112400.00,
    totalEmployees: 124,
    checklist: [
      { id: 'c1', label: 'Importação de Eventos', status: 'ok', isBlocking: true, updatedBy: 'Sistema' },
      { id: 'c2', label: 'Fechamento de Ponto', status: 'ok', isBlocking: true, updatedBy: 'Ana Oliveira' },
      { id: 'c3', label: 'Conferência de Encargos', status: 'pending', isBlocking: true },
      { id: 'c4', label: 'Validação de Salário Mínimo', status: 'ok', isBlocking: true, updatedBy: 'Sistema' },
    ]
  }
];

const mockEvents: PayrollEvent[] = [
  { id: '101', code: '101', name: 'Salário Base', type: 'earning', isAutomatic: true },
  { id: '205', code: '205', name: 'Hora Extra 50%', type: 'earning', isAutomatic: false },
  { id: '501', code: '501', name: 'INSS Segurado', type: 'deduction', isAutomatic: true },
  { id: '902', code: '902', name: 'Vale Refeição', type: 'informative', isAutomatic: true },
];

export const payrollService = {
  async getCompetences(companyId: string): Promise<ApiResponse<PayrollCompetence[]>> {
    await delay(600);
    return { data: mockCompetences.filter(c => c.companyId === companyId), status: 200 };
  },

  async getEvents(): Promise<ApiResponse<PayrollEvent[]>> {
    await delay(400);
    return { data: mockEvents, status: 200 };
  },

  async updateChecklistItem(competenceId: string, itemId: string, status: 'ok' | 'pending' | 'warning'): Promise<ApiResponse<void>> {
    await delay(500);
    const competence = mockCompetences.find(c => c.id === competenceId);
    if (competence) {
      const item = competence.checklist.find(i => i.id === itemId);
      if (item) {
        item.status = status;
        item.updatedAt = new Date().toISOString();
      }
    }
    return { data: undefined, status: 200 };
  }
};
