import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Lock, 
  ChevronRight, 
  ArrowLeft,
  Calendar,
  User,
  Timer,
  ShieldAlert,
  Zap,
  FileText,
  MessageSquare,
  Download,
  MoreVertical
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { cn } from '../utils';
import { companies, companyPipelines } from '../data/mockData';

export const CompanyPipelinePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const company = companies.find(c => c.id === id);
  const pipeline = companyPipelines.find(p => p.companyId === id);

  if (!company || !pipeline) {
    return (
      <div className="p-12 text-center bg-white rounded-2xl border border-app-border">
        <p className="text-text-muted font-bold">Empresa ou Pipeline não encontrado.</p>
        <Button variant="outline" className="mt-4" onClick={() => navigate('/torre-controle')}>Voltar para Torre de Controle</Button>
      </div>
    );
  }

  const getStageIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case 'in_progress': return <Clock className="w-5 h-5 text-brand-500 animate-pulse" />;
      case 'blocked': return <Lock className="w-5 h-5 text-rose-500" />;
      default: return <div className="w-5 h-5 rounded-full border-2 border-slate-200" />;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
      <div className="flex items-center gap-4 mb-2">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-white rounded-xl border border-transparent hover:border-app-border transition-all text-text-muted hover:text-brand-600"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center font-black text-xl border border-brand-100">
            {company.name.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-black text-text-primary tracking-tighter">{company.name}</h1>
            <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">{company.cnpj} • Competência Março/2026</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Pipeline Stepper */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl border border-app-border p-8 shadow-sm">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-xs font-black text-text-primary uppercase tracking-widest">Fluxo Operacional da Competência</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Concluído</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-500" />
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Em Andamento</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Bloqueado</span>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2" />
              <div 
                className="absolute top-1/2 left-0 h-1 bg-brand-500 -translate-y-1/2 transition-all duration-1000" 
                style={{ width: `${pipeline.overallProgress}%` }}
              />

              <div className="relative flex justify-between items-center">
                {pipeline.stages.map((stage, index) => (
                  <div key={stage.id} className="flex flex-col items-center gap-4 group">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center border-4 border-white shadow-md transition-all z-10",
                      stage.status === 'completed' ? 'bg-emerald-500 text-white' : 
                      stage.status === 'in_progress' ? 'bg-brand-500 text-white ring-4 ring-brand-50' : 
                      stage.status === 'blocked' ? 'bg-rose-500 text-white ring-4 ring-rose-50' : 'bg-white text-slate-300 border-slate-100'
                    )}>
                      {getStageIcon(stage.status)}
                    </div>
                    <div className="absolute -bottom-16 text-center w-32">
                      <p className={cn(
                        "text-[10px] font-black uppercase tracking-widest mb-1",
                        stage.status === 'pending' ? 'text-slate-400' : 'text-text-primary'
                      )}>
                        {stage.label}
                      </p>
                      {stage.status === 'in_progress' && (
                        <Badge variant="ai" className="py-0.5 px-2 rounded-lg font-black text-[8px] uppercase tracking-widest animate-pulse">Ativo</Badge>
                      )}
                      {stage.status === 'blocked' && (
                        <Badge variant="error" className="py-0.5 px-2 rounded-lg font-black text-[8px] uppercase tracking-widest">Travado</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stage Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            {pipeline.stages.filter(s => s.status !== 'pending').map((stage) => (
              <div key={stage.id} className={cn(
                "bg-white rounded-2xl border p-6 shadow-sm transition-all",
                stage.status === 'blocked' ? 'border-rose-200 bg-rose-50/10' : 'border-app-border'
              )}>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                      stage.status === 'completed' ? 'bg-emerald-50 text-emerald-600' : 
                      stage.status === 'in_progress' ? 'bg-brand-50 text-brand-600' : 'bg-rose-50 text-rose-600'
                    )}>
                      {getStageIcon(stage.status)}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-text-primary uppercase tracking-tight">{stage.label}</h4>
                      <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Tempo na etapa: {stage.timeInStage}h</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-slate-100 text-text-muted rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                    <div className="flex items-center gap-2 text-text-muted">
                      <User className="w-3.5 h-3.5" />
                      Responsável
                    </div>
                    <span className="text-text-primary">{stage.responsible}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                    <div className="flex items-center gap-2 text-text-muted">
                      <Calendar className="w-3.5 h-3.5" />
                      Prazo Previsto
                    </div>
                    <span className="text-text-primary">{stage.deadline || 'N/A'}</span>
                  </div>
                  
                  {stage.blockingReason && (
                    <div className="mt-4 p-4 bg-rose-50 rounded-xl border border-rose-100 flex gap-3">
                      <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                      <div>
                        <h5 className="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-1">Motivo do Bloqueio</h5>
                        <p className="text-[11px] text-text-muted font-bold leading-relaxed tracking-tight">{stage.blockingReason}</p>
                        <Button variant="outline" className="mt-3 h-8 text-[9px] font-black uppercase tracking-widest border-rose-200 text-rose-600 hover:bg-rose-100">
                          Resolver Agora
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          {/* Company Health Mini Card */}
          <div className="bg-white rounded-2xl border border-app-border p-6 shadow-sm">
            <h3 className="text-[10px] font-black text-text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-brand-600" />
              Status da Competência
            </h3>
            <div className="space-y-6">
              <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-black text-text-primary tracking-tighter mb-1">{pipeline.overallProgress}%</div>
                <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">Progresso Geral</p>
                <div className="w-full h-1.5 bg-slate-200 rounded-full mt-4 overflow-hidden">
                  <div 
                    className="h-full bg-brand-500 rounded-full"
                    style={{ width: `${pipeline.overallProgress}%` }}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Status SLA</span>
                  <Badge variant={pipeline.slaStatus === 'on_time' ? 'success' : 'error'} className="py-0.5 px-2 rounded-lg font-black text-[9px] uppercase tracking-widest">
                    {pipeline.slaStatus.replace('_', ' ')}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Risco Atual</span>
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-widest",
                    company.riskLevel === 'baixo' ? 'text-emerald-600' : 'text-rose-600'
                  )}>{company.riskLevel}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-app-border p-6 shadow-sm">
            <h3 className="text-[10px] font-black text-text-primary uppercase tracking-widest mb-6">Ações Rápidas</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-3 h-11 text-[10px] font-black uppercase tracking-widest" icon={<MessageSquare className="w-4 h-4" />}>
                Chat com Cliente
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3 h-11 text-[10px] font-black uppercase tracking-widest" icon={<FileText className="w-4 h-4" />}>
                Documentação
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3 h-11 text-[10px] font-black uppercase tracking-widest" icon={<Download className="w-4 h-4" />}>
                Relatório Parcial
              </Button>
              <Button variant="primary" className="w-full justify-start gap-3 h-11 text-[10px] font-black uppercase tracking-widest" icon={<Zap className="w-4 h-4" />}>
                Forçar Avanço
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
