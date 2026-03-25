import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { 
  Users, 
  Briefcase, 
  AlertCircle, 
  TrendingUp, 
  TrendingDown, 
  Filter, 
  Download, 
  Search,
  Zap,
  ShieldAlert,
  ChevronRight,
  ArrowRight,
  MoreVertical,
  MessageSquare,
  FileText,
  UserCheck,
  BarChart3,
  PieChart as PieChartIcon
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { cn } from '../utils';
import { Input } from '../components/ui/Input';
import { analysts } from '../data/mockData';

export const AnalystWorkloadPage = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <PageHeader 
        title="Carga Operacional dos Analistas" 
        subtitle="Gestão de capacidade, distribuição de carteira e produtividade do time de DP."
        actions={
          <div className="flex items-center gap-3">
            <Button variant="outline" icon={<Download className="w-4 h-4" />}>Relatório de Produtividade</Button>
            <Button variant="primary" icon={<Zap className="w-4 h-4" />}>Redistribuir Carteira</Button>
          </div>
        }
      />

      {/* Workload Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <Badge variant="ai" className="py-0.5 px-2 rounded-lg font-black text-[10px] uppercase tracking-widest">Ativos</Badge>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Total de Analistas</p>
          <h3 className="text-2xl font-black text-text-primary tracking-tighter">{analysts.length}</h3>
          <p className="text-[10px] font-bold text-brand-600 mt-2 uppercase tracking-wide">Time de DP Operacional</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">Média</span>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Carga Média Global</p>
          <h3 className="text-2xl font-black text-text-primary tracking-tighter">78%</h3>
          <p className="text-[10px] font-bold text-amber-600 mt-2 uppercase tracking-wide">Capacidade disponível: 22%</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <Badge variant="error" className="py-0.5 px-2 rounded-lg font-black text-[10px] uppercase tracking-widest">Alerta</Badge>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Analistas Sobrecarregados</p>
          <h3 className="text-2xl font-black text-text-primary tracking-tighter">03</h3>
          <p className="text-[10px] font-bold text-rose-600 mt-2 uppercase tracking-wide">Carga acima de 90%</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">+15%</span>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Eficiência de Fechamento</p>
          <h3 className="text-2xl font-black text-text-primary tracking-tighter">92%</h3>
          <p className="text-[10px] font-bold text-emerald-600 mt-2 uppercase tracking-wide">Meta: 90%</p>
        </div>
      </div>

      {/* Analyst List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {analysts.map((analyst) => (
          <div key={analyst.id} className="bg-white rounded-2xl border border-app-border p-6 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src={analyst.avatar} alt={analyst.name} className="w-14 h-14 rounded-2xl border-2 border-slate-100 object-cover" />
                  <div className={cn(
                    "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white",
                    analyst.status === 'online' ? 'bg-emerald-500' : analyst.status === 'away' ? 'bg-amber-500' : 'bg-slate-400'
                  )} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-text-primary group-hover:text-brand-600 transition-colors">{analyst.name}</h3>
                  <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">{analyst.role === 'dedicated' ? 'Analista Dedicado' : 'Analista Global'}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-slate-100 text-text-muted rounded-lg transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-text-muted">Carga Operacional</span>
                  <span className={cn(
                    analyst.capacity > 90 ? 'text-rose-600' : analyst.capacity > 70 ? 'text-amber-600' : 'text-brand-600'
                  )}>{analyst.capacity}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      "h-full rounded-full transition-all duration-1000",
                      analyst.capacity > 90 ? 'bg-rose-500' : analyst.capacity > 70 ? 'bg-amber-500' : 'bg-brand-500'
                    )}
                    style={{ width: `${analyst.capacity}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Empresas</p>
                  <p className="text-sm font-black text-text-primary">{analyst.companiesCount}</p>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Pendências</p>
                  <p className="text-sm font-black text-text-primary">{analyst.pendingCount}</p>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Riscos</p>
                  <p className="text-sm font-black text-rose-600">{analyst.riskCompaniesCount}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[8px] font-black text-slate-500">
                        E{i}
                      </div>
                    ))}
                    <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[8px] font-black text-slate-400">
                      +{analyst.companiesCount - 3}
                    </div>
                  </div>
                </div>
                <button className="text-[10px] font-black text-brand-600 uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                  Ver Carteira
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Workload Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <h3 className="text-xs font-black text-text-primary uppercase tracking-widest mb-6">Distribuição de Carga por Analista</h3>
          <div className="h-[300px] flex items-end justify-between gap-4 px-4">
            {analysts.map((a, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4">
                <div className="w-full relative group">
                  <div 
                    className={cn(
                      "w-full rounded-t-xl transition-all duration-1000 group-hover:opacity-80",
                      a.capacity > 90 ? 'bg-rose-500' : a.capacity > 70 ? 'bg-amber-500' : 'bg-brand-500'
                    )}
                    style={{ height: `${a.capacity * 2}px` }}
                  />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] font-black px-2 py-1 rounded uppercase">
                    {a.capacity}%
                  </div>
                </div>
                <span className="text-[10px] font-black text-text-muted uppercase tracking-widest text-center line-clamp-1">{a.name.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm flex flex-col">
          <h3 className="text-xs font-black text-text-primary uppercase tracking-widest mb-6">Recomendações de Balanceamento</h3>
          <div className="flex-1 space-y-4">
            <div className="p-4 bg-rose-50 rounded-xl border border-rose-100 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <h4 className="text-xs font-black text-rose-600 uppercase tracking-widest mb-1">Alerta de Sobrecarga</h4>
                <p className="text-[11px] text-text-muted font-bold leading-relaxed tracking-tight">
                  <span className="text-text-primary">Ricardo Silva</span> está operando com 95% de capacidade e possui 5 empresas em risco crítico. Sugerido transferir 2 empresas de baixa complexidade para <span className="text-text-primary">Beatriz Costa</span>.
                </p>
              </div>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-1">Capacidade Disponível</h4>
                <p className="text-[11px] text-text-muted font-bold leading-relaxed tracking-tight">
                  <span className="text-text-primary">Beatriz Costa</span> possui 40% de capacidade livre. Pode absorver novas admissões ou projetos especiais de auditoria da competência.
                </p>
              </div>
            </div>
          </div>
          <Button variant="outline" className="mt-6 w-full py-3 h-auto text-[10px] font-black uppercase tracking-widest">
            Abrir Painel de Redistribuição
          </Button>
        </div>
      </div>
    </div>
  );
};
