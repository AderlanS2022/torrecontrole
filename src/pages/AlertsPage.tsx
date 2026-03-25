import React from 'react';
import { 
  AlertTriangle, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  Info, 
  ChevronRight,
  BrainCircuit,
  User,
  Building2
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { alerts } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
import { cn } from '../utils';

export const AlertsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <PageHeader 
        title="Central de Alertas" 
        subtitle="Monitoramento inteligente de inconsistências operacionais e de ponto."
        actions={
          <Button variant="secondary" icon={<CheckCircle2 className="w-4 h-4" />}>Marcar todos como lidos</Button>
        }
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-rose-50/50 border-rose-100 shadow-none">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-1">Críticos</p>
              <h3 className="text-3xl font-black text-rose-700">08</h3>
            </div>
            <div className="p-3 bg-rose-100 rounded-2xl">
              <AlertTriangle className="w-8 h-8 text-rose-600" />
            </div>
          </div>
        </Card>
        <Card className="bg-amber-50/50 border-amber-100 shadow-none">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1">Médios</p>
              <h3 className="text-3xl font-black text-amber-700">14</h3>
            </div>
            <div className="p-3 bg-amber-100 rounded-2xl">
              <Info className="w-8 h-8 text-amber-600" />
            </div>
          </div>
        </Card>
        <Card className="bg-brand-50/50 border-brand-100 shadow-none">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-1">Informativos</p>
              <h3 className="text-3xl font-black text-brand-700">10</h3>
            </div>
            <div className="p-3 bg-brand-100 rounded-2xl">
              <Clock className="w-8 h-8 text-brand-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4" variant="flat">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[300px] relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-brand-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Pesquisar por alerta, empresa ou colaborador..." 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-app-border rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all"
            />
          </div>
          <div className="flex gap-3">
            <select className="bg-white border border-app-border rounded-xl text-xs font-bold px-4 py-2.5 outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500">
              <option>Criticidade: Todas</option>
              <option>Críticos</option>
              <option>Médios</option>
              <option>Informativos</option>
            </select>
            <Button variant="outline" icon={<Filter className="w-4 h-4" />}>Mais Filtros</Button>
          </div>
        </div>
      </Card>

      {/* Alerts List */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div 
            key={alert.id} 
            onClick={() => navigate(`/alertas/${alert.id}`)}
            className="bg-white rounded-2xl border border-app-border shadow-card hover:border-brand-500 hover:shadow-float transition-all cursor-pointer group relative overflow-hidden"
          >
            <div className={cn(
              "absolute left-0 top-0 bottom-0 w-1.5",
              alert.priority === 'critical' ? 'bg-danger' : 
              alert.priority === 'medium' ? 'bg-warning' : 'bg-info'
            )}></div>
            
            <div className="p-6 flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-2 flex-1 min-w-[300px]">
                <div className="flex items-center gap-2">
                  <Badge variant={alert.priority === 'critical' ? 'error' : alert.priority === 'medium' ? 'warning' : 'info'} size="sm">
                    {alert.priority.toUpperCase()}
                  </Badge>
                  <Badge variant="outline" size="sm">{alert.category === 'time' ? 'PONTO' : 'OPERACIONAL'}</Badge>
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-2">{alert.date}</span>
                </div>
                <h3 className="text-lg font-black text-text-primary group-hover:text-brand-600 transition-colors leading-tight">
                  {alert.title}
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-text-secondary">
                    <Building2 className="w-3.5 h-3.5 text-text-muted" />
                    {alert.companyName}
                  </div>
                  {alert.employeeName && (
                    <div className="flex items-center gap-2 text-xs font-bold text-text-secondary">
                      <User className="w-3.5 h-3.5 text-text-muted" />
                      {alert.employeeName}
                    </div>
                  )}
                </div>
              </div>

              <div className="hidden xl:flex items-center gap-4 px-6 py-3 bg-ai-50/50 border border-ai-100 rounded-2xl max-w-md">
                <BrainCircuit className="w-5 h-5 text-ai-600 shrink-0" />
                <div className="space-y-0.5">
                  <p className="text-[9px] font-black text-ai-700 uppercase tracking-widest">IA Insight</p>
                  <p className="text-xs text-ai-900 font-medium line-clamp-2 leading-relaxed italic">
                    "{alert.aiRecommendation}"
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="text-right hidden sm:block">
                  <p className="text-[9px] font-black text-text-muted uppercase tracking-widest">Status</p>
                  <p className="text-sm font-black text-text-primary">{alert.status === 'unread' ? 'Novo' : 'Revisado'}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-brand-50 group-hover:text-brand-600 transition-all">
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
