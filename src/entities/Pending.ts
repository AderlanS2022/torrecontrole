export type PendingCategory = 
  | 'cliente' 
  | 'ponto' 
  | 'folha' 
  | 'aprovacao' 
  | 'cadastro' 
  | 'legal' 
  | 'documental';

export type PendingPriority = 'baixa' | 'media' | 'alta' | 'critica';

export type PendingStatus = 'aberta' | 'em_analise' | 'resolvida' | 'cancelada';

export interface PendingIssue {
  id: string;
  companyId: string;
  companyName: string;
  title: string;
  reason: string;
  impact: string;
  deadline: string;
  isBlocking: boolean;
  priority: PendingPriority;
  recommendedAction: string;
  responsibleId: string;
  category: PendingCategory;
  status: PendingStatus;
  createdAt: string;
  updatedAt: string;
}
