export type CompanyStatus = 
  | 'em_dia' 
  | 'em_andamento' 
  | 'aguardando_cliente' 
  | 'em_analise' 
  | 'com_risco' 
  | 'bloqueada' 
  | 'pronta_fechamento' 
  | 'fechada';

export type RiskLevel = 'baixo' | 'medio' | 'alto' | 'critico';

export interface Company {
  id: string;
  name: string;
  cnpj: string;
  status: CompanyStatus;
  riskScore: number; // 0-100
  riskLevel: RiskLevel;
  analystId: string;
  segment: string;
  logo?: string;
  activeEmployees: number;
  lastUpdate: string;
  blockingReason?: string;
  nextDeadline?: string;
  // Compatibility fields
  currentCompetence?: string;
  payrollStatus?: 'pending' | 'processing' | 'validated' | 'closed';
  pendingIssues?: number;
  closingDeadline?: string;
  analyst?: string;
}
