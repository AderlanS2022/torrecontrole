import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Building2, 
  DollarSign,
  Briefcase,
  Zap,
  BrainCircuit,
  ArrowRight,
  Filter,
  Download
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { KpiCard } from '../components/shared/KpiCard';
import { DataTable } from '../components/shared/DataTable';

export const DirectorDashboardPage = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <PageHeader 
        title="Dashboard Executivo" 
        subtitle="Visão consolidada de performance, custos e riscos operacionais do grupo."
        actions={
          <div className="flex gap-3">
            <Button variant="outline" icon={<Filter className="w-4 h-4" />}>Março / 2026</Button>
            <Button variant="primary" icon={<Download className="w-4 h-4" />}>Relatório Executivo</Button>
          </div>
        }
      />

      {/* High Level KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard label="Custo Total Folha" value="R$ 12.4M" icon={DollarSign} variant="brand" />
        <KpiCard label="Headcount Total" value="3.842" icon={Users} variant="default" />
        <KpiCard label="Encargos & Impostos" value="R$ 4.2M" icon={Briefcase} variant="warning" />
        <KpiCard label="Eficiência Operacional" value="94.2%" icon={TrendingUp} variant="success" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Chart Area */}
        <div className="lg:col-span-8 space-y-8">
          <Card title="Evolução de Custos vs Headcount" subtitle="Análise comparativa dos últimos 6 meses">
            <div className="h-[350px] w-full bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 flex items-end justify-between px-10 pb-10">
                {[40, 60, 45, 80, 55, 90, 70, 85].map((h, i) => (
                  <div key={i} className="w-12 bg-brand-500 rounded-t-lg" style={{height: `${h}%`}}></div>
                ))}
              </div>
              <div className="relative z-10 text-center space-y-2">
                <TrendingUp className="w-12 h-12 text-brand-200 mx-auto" />
                <p className="text-xs font-black text-text-muted uppercase tracking-widest">Gráfico de Performance Consolidada</p>
                <p className="text-[10px] text-text-muted font-medium">Dados processados pelo motor de BI</p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="Distribuição por Unidade" variant="flat">
              <div className="space-y-5 mt-4">
                {[
                  { name: 'Unidade São Paulo', value: '42%', color: 'bg-brand-500' },
                  { name: 'Unidade Rio de Janeiro', value: '28%', color: 'bg-ai-500' },
                  { name: 'Unidade Curitiba', value: '18%', color: 'bg-emerald-500' },
                  { name: 'Outras Unidades', value: '12%', color: 'bg-slate-300' },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                      <span className="text-text-secondary">{item.name}</span>
                      <span className="text-text-primary">{item.value}</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className={cn("h-full rounded-full", item.color)} style={{width: item.value}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Alertas Críticos de Diretoria" variant="flat">
              <div className="space-y-4 mt-4">
                {[
                  { title: 'Aumento de 15% em Horas Extras', type: 'warning', desc: 'Impacto projetado de R$ 120k no mês.' },
                  { title: 'Risco de Passivo Trabalhista', type: 'danger', desc: '3 unidades com jornadas acima do limite legal.' },
                  { title: 'Economia em Encargos (AI)', type: 'success', desc: 'Otimização tributária gerou R$ 45k de economia.' },
                ].map((alert, i) => (
                  <div key={i} className="p-4 rounded-2xl border border-app-border bg-white shadow-sm flex items-start gap-4">
                    <div className={cn(
                      "p-2 rounded-xl shrink-0",
                      alert.type === 'danger' ? 'bg-rose-100 text-rose-600' : 
                      alert.type === 'warning' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'
                    )}>
                      {alert.type === 'danger' ? <AlertTriangle className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className="text-xs font-black text-text-primary uppercase tracking-tight">{alert.title}</p>
                      <p className="text-[10px] text-text-muted font-medium mt-1">{alert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Side Panel: AI Insights */}
        <div className="lg:col-span-4 space-y-8">
          <Card variant="ai" className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <BrainCircuit className="w-32 h-32 text-ai-500" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-ai-100 rounded-xl">
                  <Zap className="w-5 h-5 text-ai-600" />
                </div>
                <h3 className="text-lg font-black text-ai-900 tracking-tight">AI Executive Insight</h3>
              </div>
              <p className="text-base text-ai-900/80 leading-relaxed font-medium italic">
                "Detectamos uma tendência de aumento nos custos de folha na Unidade SP devido ao turnover. Recomendamos revisão da política de retenção para evitar impacto de R$ 300k no próximo semestre."
              </p>
              <Button variant="ai" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>Ver Análise Detalhada</Button>
            </div>
          </Card>

          <Card title="Status das Operações" subtitle="Acompanhamento de fechamento">
            <div className="space-y-5 mt-4">
              {[
                { label: 'Empresas Processadas', value: '42/50', progress: 84, color: 'bg-brand-500' },
                { label: 'Validações Pendentes', value: '08/50', progress: 16, color: 'bg-warning' },
                { label: 'Folhas Fechadas', value: '34/50', progress: 68, color: 'bg-emerald-500' },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black text-text-muted uppercase tracking-widest">
                    <span>{item.label}</span>
                    <span className="text-text-primary">{item.value}</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full", item.color)} style={{width: `${item.progress}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Próximos Marcos" variant="flat">
            <div className="space-y-6 mt-4">
              {[
                { date: '25/03', title: 'Fechamento Contábil', status: 'pending' },
                { date: '28/03', title: 'Pagamento de Salários', status: 'pending' },
                { date: '05/04', title: 'Envio eSocial (S-1200)', status: 'future' },
              ].map((milestone, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-app-border flex flex-col items-center justify-center shrink-0 shadow-sm">
                    <span className="text-[10px] font-black text-text-muted uppercase">{milestone.date.split('/')[1]}</span>
                    <span className="text-sm font-black text-brand-600">{milestone.date.split('/')[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-black text-text-primary leading-tight">{milestone.title}</p>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mt-1">Status: {milestone.status === 'pending' ? 'Em breve' : 'Agendado'}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Helper for cn
import { cn } from '../utils';
