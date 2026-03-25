import { Employee, EmploymentContract } from '../entities';
import { delay, ApiResponse } from './api';

// Mock Data
const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'Aderlan Santos',
    email: 'aderlan.santos@ba.docente.senai.br',
    cpf: '123.456.789-00',
    registrationNumber: '2026001',
    status: 'active',
    birthDate: '1990-01-01',
    admissionDate: '2024-01-01',
    department: 'Tecnologia',
    role: 'Arquiteto de Software',
    companyId: 'comp1'
  },
  {
    id: '2',
    name: 'Ana Oliveira',
    email: 'ana.oliveira@empresa.com.br',
    cpf: '987.654.321-11',
    registrationNumber: '2026002',
    status: 'active',
    birthDate: '1992-05-15',
    admissionDate: '2024-03-15',
    department: 'Recursos Humanos',
    role: 'Analista de DP',
    companyId: 'comp1'
  }
];

export const employeeService = {
  async getAll(): Promise<ApiResponse<Employee[]>> {
    await delay(800);
    return { data: mockEmployees, status: 200 };
  },

  async getById(id: string): Promise<ApiResponse<Employee | undefined>> {
    await delay(500);
    const employee = mockEmployees.find(e => e.id === id);
    return { data: employee, status: employee ? 200 : 404 };
  },

  async create(employee: Omit<Employee, 'id'>): Promise<ApiResponse<Employee>> {
    await delay(1000);
    const newEmployee = { ...employee, id: Math.random().toString(36).substr(2, 9) };
    mockEmployees.push(newEmployee);
    return { data: newEmployee, status: 201 };
  }
};
