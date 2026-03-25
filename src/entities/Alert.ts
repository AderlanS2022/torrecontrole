export type AlertType = 
  | 'operacional' 
  | 'prazo' 
  | 'bloqueio' 
  | 'aprovacao' 
  | 'cliente' 
  | 'inconsistencia' 
  | 'SLA' 
  | 'risco';

export type AlertGravity = 'baixa' | 'media' | 'alta' | 'critica';

export interface Alert {
  id: string;
  companyId: string;
  companyName: string;
  type: AlertType;
  gravity: AlertGravity;
  isBlocking: boolean;
  message: string;
  timestamp: string;
  responsibleId: string;
  process?: string;
  status: 'unread' | 'read' | 'archived';
  // Compatibility fields
  title?: string;
  date?: string;
  priority?: 'low' | 'medium' | 'high' | 'critical';
  category?: string;
  description?: string;
  employeeName?: string;
  aiRecommendation?: string;
}
