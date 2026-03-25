export interface WorkSchedule {
  id: string;
  name: string;
  description?: string;
  weeklyHours: number;
  dailyHours: number;
  shifts: {
    entry: string;
    exit: string;
    breakStart?: string;
    breakEnd?: string;
  }[];
  toleranceMinutes: number;
}

export interface TimeEntry {
  id: string;
  employeeId: string;
  date: string;
  entry: string;
  exit: string;
  breakStart?: string;
  breakEnd?: string;
  status: 'normal' | 'late' | 'overtime' | 'missing' | 'justified';
  device?: string;
  location?: {
    lat: number;
    lng: number;
    address?: string;
  };
  inconsistency?: string;
}

export interface TimeBank {
  id: string;
  employeeId: string;
  totalBalance: number; // in minutes
  lastUpdate: string;
  history: {
    date: string;
    minutes: number;
    type: 'credit' | 'debit';
    reason: string;
  }[];
}
