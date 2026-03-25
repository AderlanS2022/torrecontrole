import { TimeEntry, WorkSchedule, TimeBank } from '../entities';
import { delay, ApiResponse } from './api';

const mockTimeEntries: TimeEntry[] = [
  {
    id: '1',
    employeeId: '1',
    date: '2026-03-23',
    entry: '08:00',
    exit: '17:00',
    breakStart: '12:00',
    breakEnd: '13:00',
    status: 'normal',
    device: 'iPhone 15 Pro',
    location: { lat: -23.5505, lng: -46.6333, address: 'Av. Paulista, 1000' }
  },
  {
    id: '2',
    employeeId: '2',
    date: '2026-03-23',
    entry: '08:15',
    exit: '17:30',
    breakStart: '12:00',
    breakEnd: '13:00',
    status: 'overtime',
    device: 'Web Browser',
    inconsistency: 'Atraso na entrada'
  }
];

export const timeService = {
  async getEntries(employeeId: string, startDate: string, endDate: string): Promise<ApiResponse<TimeEntry[]>> {
    await delay(700);
    return { data: mockTimeEntries.filter(e => e.employeeId === employeeId), status: 200 };
  },

  async getSummary(employeeId: string): Promise<ApiResponse<any>> {
    await delay(500);
    return {
      data: {
        totalHours: 160,
        overtime: 12,
        late: 2,
        absences: 0,
        timeBankBalance: 480 // 8 hours
      },
      status: 200
    };
  }
};
