import { 
  Company, 
  Analyst, 
  PendingIssue, 
  Alert, 
  CompanyPipeline,
  PayrollCompetence
} from '../entities';

export const analysts: Analyst[] = [
  {
    id: 'ana-1',
    name: 'Ana Oliveira',
    role: 'dedicated',
    companiesCount: 12,
    pendingCount: 8,
    riskCompaniesCount: 2,
    capacity: 75,
    status: 'online',
    avatar: 'https://i.pravatar.cc/150?u=ana'
  },
  {
    id: 'ricardo-1',
    name: 'Ricardo Silva',
    role: 'dedicated',
    companiesCount: 15,
    pendingCount: 24,
    riskCompaniesCount: 5,
    capacity: 95,
    status: 'online',
    avatar: 'https://i.pravatar.cc/150?u=ricardo'
  },
  {
    id: 'beatriz-1',
    name: 'Beatriz Costa',
    role: 'global',
    companiesCount: 45,
    pendingCount: 12,
    riskCompaniesCount: 1,
    capacity: 60,
    status: 'away',
    avatar: 'https://i.pravatar.cc/150?u=beatriz'
  }
];

export const companies: Company[] = [
  {
    id: 'comp-1',
    name: 'Tech Solutions Ltda',
    cnpj: '12.345.678/0001-90',
    status: 'em_analise',
    riskScore: 25,
    riskLevel: 'baixo',
    analystId: 'ana-1',
    segment: 'Tecnologia',
    activeEmployees: 124,
    lastUpdate: '2026-03-24T10:30:00Z',
    nextDeadline: '2026-04-05'
  },
  {
    id: 'comp-2',
    name: 'Indústrias Metalúrgicas S.A.',
    cnpj: '98.765.432/0001-10',
    status: 'bloqueada',
    riskScore: 85,
    riskLevel: 'critico',
    analystId: 'ricardo-1',
    segment: 'Indústria',
    activeEmployees: 450,
    lastUpdate: '2026-03-24T09:15:00Z',
    blockingReason: 'Divergência crítica no FGTS',
    nextDeadline: '2026-03-25'
  },
  {
    id: 'comp-3',
    name: 'Varejo Express',
    cnpj: '45.678.901/0001-22',
    status: 'pronta_fechamento',
    riskScore: 10,
    riskLevel: 'baixo',
    analystId: 'ana-1',
    segment: 'Varejo',
    activeEmployees: 85,
    lastUpdate: '2026-03-24T11:00:00Z',
    nextDeadline: '2026-04-07'
  },
  {
    id: 'comp-4',
    name: 'Logística Global',
    cnpj: '11.222.333/0001-44',
    status: 'aguardando_cliente',
    riskScore: 45,
    riskLevel: 'medio',
    analystId: 'ricardo-1',
    segment: 'Logística',
    activeEmployees: 210,
    lastUpdate: '2026-03-23T16:45:00Z',
    blockingReason: 'Aguardando variáveis de comissão',
    nextDeadline: '2026-03-28'
  },
  {
    id: 'comp-5',
    name: 'Hospital Santa Maria',
    cnpj: '33.444.555/0001-66',
    status: 'com_risco',
    riskScore: 65,
    riskLevel: 'alto',
    analystId: 'beatriz-1',
    segment: 'Saúde',
    activeEmployees: 890,
    lastUpdate: '2026-03-24T08:00:00Z',
    blockingReason: 'SLA de conferência de ponto estourado',
    nextDeadline: '2026-03-25'
  }
];

export const pendingIssues: PendingIssue[] = [
  {
    id: 'pend-1',
    companyId: 'comp-2',
    companyName: 'Indústrias Metalúrgicas S.A.',
    title: 'Divergência FGTS Digital',
    reason: 'Valor calculado pelo sistema difere do total importado do governo.',
    impact: 'Impede a emissão da guia de recolhimento.',
    deadline: '2026-03-25',
    isBlocking: true,
    priority: 'critica',
    recommendedAction: 'Revisar base de cálculo de eventos de afastamento.',
    responsibleId: 'ricardo-1',
    category: 'folha',
    status: 'aberta',
    createdAt: '2026-03-23T14:00:00Z',
    updatedAt: '2026-03-24T09:00:00Z'
  },
  {
    id: 'pend-2',
    companyId: 'comp-4',
    companyName: 'Logística Global',
    title: 'Variáveis de Comissão Março',
    reason: 'Cliente ainda não enviou a planilha de comissões do setor comercial.',
    impact: 'Atraso no processamento da folha mensal.',
    deadline: '2026-03-28',
    isBlocking: true,
    priority: 'alta',
    recommendedAction: 'Cobrar gestor financeiro do cliente.',
    responsibleId: 'ricardo-1',
    category: 'cliente',
    status: 'aberta',
    createdAt: '2026-03-22T10:00:00Z',
    updatedAt: '2026-03-23T16:00:00Z'
  },
  {
    id: 'pend-3',
    companyId: 'comp-5',
    companyName: 'Hospital Santa Maria',
    title: 'Tratamento de Ponto - Noturno',
    reason: 'Excesso de inconsistências em jornadas 12x36.',
    impact: 'Risco de pagamento incorreto de adicional noturno.',
    deadline: '2026-03-25',
    isBlocking: false,
    priority: 'media',
    recommendedAction: 'Validar escalas no módulo de ponto.',
    responsibleId: 'beatriz-1',
    category: 'ponto',
    status: 'em_analise',
    createdAt: '2026-03-24T08:00:00Z',
    updatedAt: '2026-03-24T11:30:00Z'
  }
];

export const alerts: Alert[] = [
  {
    id: 'alert-1',
    companyId: 'comp-2',
    companyName: 'Indústrias Metalúrgicas S.A.',
    type: 'bloqueio',
    gravity: 'critica',
    isBlocking: true,
    message: 'Processamento interrompido: Erro de integração com eSocial.',
    timestamp: '2026-03-24T09:15:00Z',
    responsibleId: 'ricardo-1',
    process: 'Fechamento Mensal',
    status: 'unread',
    title: 'Erro eSocial',
    date: '24/03/2026',
    priority: 'critical',
    category: 'operational',
    description: 'Erro de integração com eSocial detectado durante o fechamento.',
    aiRecommendation: 'Verificar certificados digitais e conectividade.'
  },
  {
    id: 'alert-2',
    companyId: 'comp-5',
    companyName: 'Hospital Santa Maria',
    type: 'SLA',
    gravity: 'alta',
    isBlocking: false,
    message: 'SLA de conferência de ponto excedido em 4 horas.',
    timestamp: '2026-03-24T12:00:00Z',
    responsibleId: 'beatriz-1',
    process: 'Ponto Eletrônico',
    status: 'unread',
    title: 'SLA Excedido',
    date: '24/03/2026',
    priority: 'high',
    category: 'time',
    description: 'O tempo limite para conferência de ponto foi ultrapassado.',
    aiRecommendation: 'Priorizar conferência de ponto noturno.'
  }
];

export const auditLogs = [
  {
    id: 'log-1',
    timestamp: '2026-03-24T14:30:00Z',
    user: 'Aderlan Santos',
    action: 'Aprovação de Folha',
    module: 'Folha de Pagamento',
    companyName: 'Tech Solutions Ltda',
    details: 'Folha de Março aprovada com sucesso.'
  },
  {
    id: 'log-2',
    timestamp: '2026-03-24T13:15:00Z',
    user: 'Ricardo Silva',
    action: 'Alteração de Parâmetro',
    module: 'Configurações',
    companyName: 'Indústrias Metalúrgicas S.A.',
    details: 'Alíquota de RAT alterada de 2% para 3%.'
  }
];

export const timeRecords = [
  {
    id: 'tr-1',
    employeeName: 'João Silva',
    companyName: 'Tech Solutions Ltda',
    date: '24/03/2026',
    entry: '08:00',
    exit: '18:00',
    status: 'normal',
    location: 'Sede Principal',
    device: 'Web App'
  },
  {
    id: 'tr-2',
    employeeName: 'Maria Oliveira',
    companyName: 'Tech Solutions Ltda',
    date: '24/03/2026',
    entry: '08:15',
    exit: '17:45',
    status: 'divergent',
    location: 'Home Office',
    device: 'Mobile App'
  }
];

export const companyPipelines: CompanyPipeline[] = [
  {
    companyId: 'comp-1',
    competenceId: 'competence-1',
    overallProgress: 65,
    slaStatus: 'on_time',
    currentStageId: 'stage-4',
    stages: [
      { id: 'stage-1', label: 'Aguardando Dados', status: 'completed', responsible: 'Cliente', timeInStage: 24, isBlocking: true, order: 1 },
      { id: 'stage-2', label: 'Dados Recebidos', status: 'completed', responsible: 'Sistema', timeInStage: 2, isBlocking: true, order: 2 },
      { id: 'stage-3', label: 'Em Triagem', status: 'completed', responsible: 'Ana Oliveira', timeInStage: 8, isBlocking: true, order: 3 },
      { id: 'stage-4', label: 'Em Conferência', status: 'in_progress', responsible: 'Ana Oliveira', timeInStage: 12, isBlocking: true, order: 4 },
      { id: 'stage-5', label: 'Aguardando Aprovação', status: 'pending', responsible: 'Gestor Cliente', timeInStage: 0, isBlocking: true, order: 5 },
      { id: 'stage-6', label: 'Pronto para Fechamento', status: 'pending', responsible: 'Ana Oliveira', timeInStage: 0, isBlocking: true, order: 6 },
      { id: 'stage-7', label: 'Fechado', status: 'pending', responsible: 'Sistema', timeInStage: 0, isBlocking: true, order: 7 }
    ]
  },
  {
    companyId: 'comp-2',
    competenceId: 'competence-2',
    overallProgress: 40,
    slaStatus: 'late',
    currentStageId: 'stage-4',
    stages: [
      { id: 'stage-1', label: 'Aguardando Dados', status: 'completed', responsible: 'Cliente', timeInStage: 48, isBlocking: true, order: 1 },
      { id: 'stage-2', label: 'Dados Recebidos', status: 'completed', responsible: 'Sistema', timeInStage: 4, isBlocking: true, order: 2 },
      { id: 'stage-3', label: 'Em Triagem', status: 'completed', responsible: 'Ricardo Silva', timeInStage: 12, isBlocking: true, order: 3 },
      { id: 'stage-4', label: 'Em Conferência', status: 'blocked', responsible: 'Ricardo Silva', timeInStage: 36, isBlocking: true, order: 4, blockingReason: 'Divergência FGTS Digital' },
      { id: 'stage-5', label: 'Aguardando Aprovação', status: 'pending', responsible: 'Gestor Cliente', timeInStage: 0, isBlocking: true, order: 5 },
      { id: 'stage-6', label: 'Pronto para Fechamento', status: 'pending', responsible: 'Ricardo Silva', timeInStage: 0, isBlocking: true, order: 6 },
      { id: 'stage-7', label: 'Fechado', status: 'pending', responsible: 'Sistema', timeInStage: 0, isBlocking: true, order: 7 }
    ]
  }
];
