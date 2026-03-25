import React from 'react';
import { cn } from '../utils';
import { PageHeader } from '../components/layout/PageHeader';
import { GlobalStatusCard } from '../features/control-tower/components/GlobalStatusCard';
import { ControlTowerTable } from '../features/control-tower/components/ControlTowerTable';
import { PriorityQueueCard } from '../features/control-tower/components/PriorityQueueCard';
import { RiskScoreCard } from '../features/control-tower/components/RiskScoreCard';
import { companies, pendingIssues, analysts } from '../data/mockData';
import { 
  Building2, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert, 
  Lock,
  Search,
  Filter,
  Download,
  LayoutGrid,
  List,
  Zap,
  TrendingUp,
  Briefcase
} from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const ControlTowerPage = () => {
  const stats = [
    { label: 'Total de Empresas', value: companies.length, icon: Building2, variant: 'neutral', trend: { value: 5, isUp: true } },
    { label: 'Em Andamento', value: companies.filter(c => c.status === 'em_andamento' || c.status === 'em_analise').length, icon: Clock, variant: 'brand', trend: { value: 12, isUp: true } },
    { label: 'Aguardando Cliente', value: companies.filter(c => c.status === 'aguardando_cliente').length, icon: Clock, variant: 'warning', trend: { value: 8, isUp: false } },
    { label: 'Bloqueadas', value: companies.filter(c => c.status === 'bloqueada').length, icon: Lock, variant: 'destructive', trend: { value: 2, isUp: true } },
    { label: 'Prontas p/ Fechamento', value: companies.filter(c => c.status === 'pronta_fechamento').length, icon: CheckCircle2, variant: 'success', trend: { value: 15, isUp: true } },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <PageHeader 
        title="Torre de Controle Multiempresa" 
        subtitle="Visão global da operação, riscos e gargalos da carteira de clientes."
        actions={
          <div className="flex items-center gap-3">
            <Button variant="outline" icon={<Download className="w-4 h-4" />}>Relatório Global</Button>
            <Button variant="primary" icon={<Zap className="w-4 h-4" />}>Processar Lote</Button>
          </div>
        }
      />

      {/* Global KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((stat, index) => (
          <GlobalStatusCard 
            key={index}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            variant={stat.variant as any}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Table Section */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <Input 
                placeholder="Pesquisar empresa, CNPJ ou analista..." 
                className="pl-10 h-11 bg-white border-app-border rounded-xl focus:ring-brand-500/10"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-white border border-app-border rounded-xl p-1">
                <button className="p-2 bg-slate-100 text-brand-600 rounded-lg shadow-sm">
                  <List className="w-4 h-4" />
                </button>
                <button className="p-2 text-text-muted hover:bg-slate-50 rounded-lg transition-colors">
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
              <Button variant="outline" icon={<Filter className="w-4 h-4" />}>Filtros Avançados</Button>
            </div>
          </div>

          <ControlTowerTable companies={companies} />
        </div>

        {/* Sidebar Sections */}
        <div className="space-y-8">
          <div className="h-[400px]">
            <PriorityQueueCard issues={pendingIssues.filter(i => i.priority === 'critica' || i.priority === 'alta')} />
          </div>
          <div className="h-[400px]">
            <RiskScoreCard companies={companies} />
          </div>
          
          {/* Analyst Summary Mini Card */}
          <div className="bg-white rounded-2xl border border-app-border p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[10px] font-black text-text-primary uppercase tracking-widest flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-brand-600" />
                Carga Operacional
              </h3>
              <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest">Ver Todos</span>
            </div>
            <div className="space-y-4">
              {analysts.slice(0, 3).map((analyst) => (
                <div key={analyst.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={analyst.avatar} alt={analyst.name} className="w-6 h-6 rounded-full border border-slate-100" />
                    <span className="text-xs font-bold text-text-primary">{analyst.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full",
                          analyst.capacity > 90 ? 'bg-rose-500' : analyst.capacity > 70 ? 'bg-orange-500' : 'bg-brand-500'
                        )}
                        style={{ width: `${analyst.capacity}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-black text-text-muted">{analyst.capacity}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
