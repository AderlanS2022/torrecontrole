export type PipelineStageStatus = 'completed' | 'in_progress' | 'blocked' | 'pending';

export interface PipelineStage {
  id: string;
  label: string;
  status: PipelineStageStatus;
  blockingReason?: string;
  deadline?: string;
  responsible: string;
  timeInStage: number; // in hours
  isBlocking: boolean;
  order: number;
}

export interface CompanyPipeline {
  companyId: string;
  competenceId: string;
  stages: PipelineStage[];
  currentStageId: string;
  overallProgress: number; // 0-100
  slaStatus: 'on_time' | 'at_risk' | 'late';
}
