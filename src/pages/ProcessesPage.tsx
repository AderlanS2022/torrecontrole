import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Plus, 
  Search, 
  Filter, 
  Briefcase, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  FileText,
  UserPlus,
  UserMinus,
  TrendingUp,
  Plane,
  ChevronRight,
  MoreVertical,
  Calendar,
  ShieldCheck,
  Printer,
  Download
} from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { cn } from '../utils';

export const ProcessesPage = () => {
  const processTypes = [
    { label: 'Admissões', icon: UserPlus, count: 3, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Férias', icon: Plane, count: 5, color: 'text-brand-600', bg: 'bg-brand-50' },
    { label: 'Afastamentos', icon: AlertTriangle, count: 2, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Rescisões', icon: UserMinus, count: 1, color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'Alt. Salariais', icon: TrendingUp, count: 4, color: 'text-blue-600', bg: 'bg-blue-50' },
  ];

  const workflowSteps = [
    { label: 'Aguardando Cliente', count: 2, color: 'bg-slate-100 text-slate-600 border-slate-200' },
    { label: 'Em Triagem', count: 4, color: 'bg-blue-100 text-blue-600 border-blue-200' },
    { label: 'Em Análise', count: 3, color: 'bg-amber-100 text-amber-600 border-amber-200' },
    { label: 'Aguardando Aprovação', count: 1, color: 'bg-brand-100 text-brand-600 border-brand-200' },
    { label: 'Aprovado', count: 5, color: 'bg-emerald-100 text-emerald-600 border-emerald-200' },
    { label: 'Fechado', count: 12, color: 'bg-slate-900 text-white border-slate-800' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <PageHeader 
        title="Processos de DP" 
        subtitle="Gerencie o ciclo de vida dos colaboradores e movimentações contratuais."
        actions={
          <div className="flex gap-3">
            <Button variant="outline" icon={<Printer className="w-4 h-4" />}>Relatórios</Button>
            <Button variant="outline" icon={<Download className="w-4 h-4" />}>Exportar</Button>
            <Button icon={<Plus className="w-4 h-4" />}>Novo Processo</Button>
          </div>
        }
      />

      {/* Workflow Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {workflowSteps.map((step) => (
          <div key={step.label} className={cn("p-4 rounded-2xl border transition-all hover:shadow-md cursor-pointer", step.color)}>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-80">{step.label}</p>
            <p className="text-2xl font-black mt-1">{step.count}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {processTypes.map((type) => (
          <div key={type.label} className="p-6 bg-white border border-app-border shadow-card rounded-xl hover:border-brand-500 transition-all cursor-pointer group">
            <div className={`w-12 h-12 ${type.bg} rounded-2xl flex items-center justify-center mb-4`}>
              <type.icon className={`w-6 h-6 ${type.color}`} />
            </div>
            <h3 className="font-black text-text-primary text-sm uppercase tracking-widest">{type.label}</h3>
            <p className="text-2xl font-black text-text-primary mt-1">{type.count}</p>
            <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
              <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest">Ver Todos</span>
              <ArrowRight className="w-4 h-4 text-brand-600" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8 space-y-6">
          <Card title="Processos em Andamento" subtitle="Acompanhamento de prazos e pendências críticas.">
            <div className="space-y-4 mt-6">
              {[
                { name: 'Ricardo Silva', type: 'Admissão', status: 'Em Análise', deadline: '01/04/2026', progress: 65, priority: 'Alta' },
                { name: 'Ana Oliveira', type: 'Férias', status: 'Aguardando Aprovação', deadline: '01/05/2026', progress: 90, priority: 'Média' },
                { name: 'Marcos Souza', type: 'Rescisão', status: 'Em Triagem', deadline: '25/03/2026', progress: 20, priority: 'Crítica' },
              ].map((proc, i) => (
                <div key={i} className="p-5 rounded-2xl border border-app-border bg-white hover:border-brand-300 transition-all group relative overflow-hidden">
                  {proc.priority === 'Crítica' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-black text-text-primary">{proc.name}</p>
                          <Badge size="sm" variant={proc.priority === 'Crítica' ? 'error' : proc.priority === 'Alta' ? 'warning' : 'neutral'}>
                            {proc.priority}
                          </Badge>
                        </div>
                        <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mt-1">{proc.type} • Prazo: {proc.deadline}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={
                        proc.status === 'Em Análise' ? 'info' : 
                        proc.status === 'Aguardando Aprovação' ? 'warning' : 'neutral'
                      }>
                        {proc.status.toUpperCase()}
                      </Badge>
                      <button className="p-2 text-text-muted hover:text-brand-600 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black text-text-muted uppercase tracking-widest">
                      <span>Progresso do Fluxo</span>
                      <span>{proc.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                      <div className="h-full bg-brand-600 transition-all duration-1000" style={{ width: `${proc.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-6 text-text-muted" icon={<ChevronRight className="w-4 h-4" />}>Ver Todos os Processos</Button>
          </Card>

          <Card title="Auditoria de Processos" variant="outline" className="bg-slate-900 text-white border-none">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight">Compliance de Processos</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Status Geral: 98.2% Conforme</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">Ver Relatório</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Documentação</p>
                <p className="text-xl font-black text-white mt-1">100%</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Prazos eSocial</p>
                <p className="text-xl font-black text-emerald-400 mt-1">99.8%</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Assinaturas Digitais</p>
                <p className="text-xl font-black text-amber-400 mt-1">94.5%</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="xl:col-span-4 space-y-6">
          <Card title="Checklist de Fechamento" subtitle="Validações obrigatórias para a competência atual.">
            <div className="space-y-5 mt-6">
              {[
                { label: 'Importação de Eventos', status: 'ok', blocking: true, desc: 'Rubricas e variáveis importadas' },
                { label: 'Fechamento de Ponto', status: 'ok', blocking: true, desc: 'Espelhos de ponto assinados' },
                { label: 'Conferência de Encargos', status: 'pending', blocking: true, desc: 'Divergência de FGTS detectada' },
                { label: 'Validação de Salário Mínimo', status: 'ok', blocking: true, desc: 'Conforme piso da categoria' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {item.status === 'ok' ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Clock className="w-5 h-5 text-amber-600" />
                      )}
                      <span className="text-xs font-black text-text-primary uppercase tracking-tight">{item.label}</span>
                    </div>
                    {item.blocking && (
                      <Badge size="sm" variant="error">BLOQUEANTE</Badge>
                    )}
                  </div>
                  <p className="text-[10px] font-bold text-text-muted ml-8">{item.desc}</p>
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="primary" className="w-full" disabled>Finalizar Competência</Button>
                <p className="text-[10px] text-center font-bold text-rose-500 uppercase tracking-widest">
                  <AlertTriangle className="w-3 h-3 inline mr-1" /> 
                  Aguardando correção de encargos
                </p>
              </div>
            </div>
          </Card>

          <Card title="Próximos Vencimentos" variant="outline">
            <div className="space-y-4 mt-4">
              {[
                { label: 'Férias - João Silva', date: '25/03', type: 'Vencimento' },
                { label: 'Exame Periódico - Ana', date: '28/03', type: 'Saúde' },
                { label: 'Contrato Exp. - Pedro', date: '30/03', type: 'Contratual' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-app-border bg-white">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-brand-600" />
                    <div>
                      <p className="text-xs font-bold text-text-primary">{item.label}</p>
                      <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{item.type}</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-brand-600">{item.date}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
