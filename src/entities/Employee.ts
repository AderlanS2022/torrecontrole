export type EmployeeStatus = 'active' | 'on_leave' | 'terminated' | 'on_vacation';

export interface Employee {
  id: string;
  name: string;
  email: string;
  cpf: string;
  registrationNumber: string; // Matrícula
  status: EmployeeStatus;
  photoUrl?: string;
  birthDate: string;
  admissionDate: string;
  terminationDate?: string;
  department: string;
  role: string;
  companyId: string;
}

export interface EmploymentContract {
  id: string;
  employeeId: string;
  salary: number;
  salaryType: 'monthly' | 'hourly';
  workScheduleId: string;
  unionId?: string; // Sindicato
  costCenter?: string;
  bankAccount?: {
    bank: string;
    agency: string;
    account: string;
    type: 'checking' | 'savings';
  };
}
