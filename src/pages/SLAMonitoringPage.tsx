import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Timer, 
  Calendar, 
  ArrowRight,
  Filter,
  Download,
  Search,
  Zap,
  ShieldAlert
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { cn } from '../utils';
import { Input } from '../components/ui/Input';

const slaData = [
  { company: 'Indústrias Metalúrgicas S.A.', stage: 'Conferência de Ponto', deadline: 'Vencido há 2 dias', status: 'atrasado', time: '48h', responsible: 'Ricardo Silva' },
  { company: 'Hospital Santa Maria', stage: 'Validação de Encargos', deadline: 'Vence hoje às 17:00', status: 'urgente', time: '4h', responsible: 'Beatriz Costa' },
  { company: 'Logística Global', stage: 'Coleta de Variáveis', deadline: 'Vence amanhã', status: 'no_prazo', time: '24h', responsible: 'Cliente' },
  { company: 'Tech Solutions Ltda', stage: 'Geração de Guias', deadline: 'Vence em 3 dias', status: 'no_prazo', time: '72h', responsible: 'Ana Oliveira' },
  { company: 'Varejo Express', stage: 'Fechamento Mensal', deadline: 'Vence em 5 dias', status: 'no_prazo', time: '120h', responsible: 'Ana Oliveira' },
];

export const SLAMonitoringPage = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <PageHeader 
        title="Gestão de SLA e Prazos" 
        subtitle="Monitoramento em tempo real de prazos operacionais e compromissos da carteira."
        actions={
          <div className="flex items-center gap-3">
            <Button variant="outline" icon={<Download className="w-4 h-4" />}>Relatório de Atrasos</Button>
            <Button variant="primary" icon={<Zap className="w-4 h-4" />}>Notificar Atrasos</Button>
          </div>
        }
      />

      {/* SLA Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
            <Badge variant="error" className="py-0.5 px-2 rounded-lg font-black text-[10px] uppercase tracking-widest">Crítico</Badge>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Empresas em Atraso</p>
          <h3 className="text-2xl font-black text-text-primary tracking-tighter">12</h3>
          <p className="text-[10px] font-bold text-rose-600 mt-2 uppercase tracking-wide">Impacto direto no fechamento</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Timer className="w-5 h-5" />
            </div>
            <Badge variant="warning" className="py-0.5 px-2 rounded-lg font-black text-[10px] uppercase tracking-widest">Urgente</Badge>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Vencendo Hoje</p>
          <h3 className="text-2xl font-black text-text-primary tracking-tighter">08</h3>
          <p className="text-[10px] font-bold text-amber-600 mt-2 uppercase tracking-wide">Requer ação imediata</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <Badge variant="success" className="py-0.5 px-2 rounded-lg font-black text-[10px] uppercase tracking-widest">OK</Badge>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Dentro do SLA</p>
          <h3 className="text-2xl font-black text-text-primary tracking-tighter">45</h3>
          <p className="text-[10px] font-bold text-emerald-600 mt-2 uppercase tracking-wide">Operação saudável</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black text-brand-600 bg-brand-50 px-2 py-1 rounded-lg">Média</span>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Tempo Médio de Resposta</p>
          <h3 className="text-2xl font-black text-text-primary tracking-tighter">3.5h</h3>
          <p className="text-[10px] font-bold text-text-muted mt-2 uppercase tracking-wide">Meta: 4.0h</p>
        </div>
      </div>

      {/* SLA Monitoring Table */}
      <div className="bg-white rounded-2xl border border-app-border shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/50">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <Input 
              placeholder="Pesquisar por empresa ou etapa..." 
              className="pl-10 h-10 bg-white border-app-border rounded-xl"
            />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" icon={<Filter className="w-4 h-4" />}>Filtrar Status</Button>
            <Button variant="outline" icon={<Calendar className="w-4 h-4" />}>Calendário</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/30 border-b border-app-border">
                <th className="px-6 py-4 text-[10px] font-black text-text-muted uppercase tracking-widest">Empresa</th>
                <th className="px-6 py-4 text-[10px] font-black text-text-muted uppercase tracking-widest">Etapa / Processo</th>
                <th className="px-6 py-4 text-[10px] font-black text-text-muted uppercase tracking-widest">Prazo Limite</th>
                <th className="px-6 py-4 text-[10px] font-black text-text-muted uppercase tracking-widest text-center">Status SLA</th>
                <th className="px-6 py-4 text-[10px] font-black text-text-muted uppercase tracking-widest">Responsável</th>
                <th className="px-6 py-4 text-[10px] font-black text-text-muted uppercase tracking-widest text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {slaData.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <p className="text-sm font-black text-text-primary group-hover:text-brand-600 transition-colors">{item.company}</p>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Competência 03/2026</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      <span className="text-xs font-bold text-text-primary">{item.stage}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className={cn(
                        "text-xs font-black",
                        item.status === 'atrasado' ? 'text-rose-600' : 
                        item.status === 'urgente' ? 'text-amber-600' : 'text-text-primary'
                      )}>
                        {item.deadline}
                      </span>
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Tempo restante: {item.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <Badge 
                        variant={item.status === 'atrasado' ? 'error' : item.status === 'urgente' ? 'warning' : 'success'}
                        className="py-1 px-3 rounded-lg font-black text-[10px] uppercase tracking-widest"
                      >
                        {item.status.replace('_', ' ')}
                      </Badge>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-[10px] font-black text-brand-700 uppercase">
                        {item.responsible.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="text-xs font-bold text-text-primary">{item.responsible}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-brand-50 text-text-muted hover:text-brand-600 rounded-lg transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SLA Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <h3 className="text-xs font-black text-text-primary uppercase tracking-widest mb-6">Tempo de Resposta do Cliente</h3>
          <div className="space-y-6">
            {[
              { label: 'Indústrias Metalúrgicas', time: '12.5h', status: 'late' },
              { label: 'Logística Global', time: '8.2h', status: 'at_risk' },
              { label: 'Hospital Santa Maria', time: '4.5h', status: 'on_time' },
              { label: 'Tech Solutions', time: '2.1h', status: 'on_time' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-muted">{item.label}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-text-primary">{item.time}</span>
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    item.status === 'late' ? 'bg-rose-500' : item.status === 'at_risk' ? 'bg-amber-500' : 'bg-emerald-500'
                  )} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <h3 className="text-xs font-black text-text-primary uppercase tracking-widest mb-6">Etapas com Maior Gargalo de SLA</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { label: 'Conferência de Ponto', value: 45, color: 'bg-rose-500' },
                { label: 'Validação de Encargos', value: 32, color: 'bg-orange-500' },
                { label: 'Coleta de Variáveis', value: 18, color: 'bg-amber-500' },
                { label: 'Geração de Guias', value: 5, color: 'bg-emerald-500' },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-text-muted">{item.label}</span>
                    <span className="text-text-primary">{item.value}% atraso</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full", item.color)} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-rose-600 mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Insight de Eficiência</span>
              </div>
              <p className="text-xs text-text-muted font-bold leading-relaxed tracking-tight">
                A etapa de <span className="text-text-primary">Conferência de Ponto</span> é responsável por 45% dos atrasos globais. Recomenda-se automação na triagem de inconsistências críticas para reduzir o tempo de análise manual em 30%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
