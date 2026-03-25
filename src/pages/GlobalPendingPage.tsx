import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { 
  AlertCircle, 
  Clock, 
  CheckCircle2, 
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
  UserCheck
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { cn } from '../utils';
import { Input } from '../components/ui/Input';
import { pendingIssues } from '../data/mockData';

export const GlobalPendingPage = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <PageHeader 
        title="Central Global de Pendências" 
        subtitle="Visão consolidada de todas as travas, inconsistências e solicitações da carteira de clientes."
        actions={
          <div className="flex items-center gap-3">
            <Button variant="outline" icon={<Download className="w-4 h-4" />}>Exportar Pendências</Button>
            <Button variant="primary" icon={<Zap className="w-4 h-4" />}>Ação em Massa</Button>
          </div>
        }
      />

      {/* Pending Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <Badge variant="error" className="py-0.5 px-2 rounded-lg font-black text-[10px] uppercase tracking-widest">Crítico</Badge>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Pendências Bloqueantes</p>
          <h3 className="text-2xl font-black text-text-primary tracking-tighter">15</h3>
          <p className="text-[10px] font-bold text-rose-600 mt-2 uppercase tracking-wide">Travam o fluxo operacional</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <Badge variant="warning" className="py-0.5 px-2 rounded-lg font-black text-[10px] uppercase tracking-widest">Aguardando</Badge>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Aguardando Cliente</p>
          <h3 className="text-2xl font-black text-text-primary tracking-tighter">24</h3>
          <p className="text-[10px] font-bold text-amber-600 mt-2 uppercase tracking-wide">Dependem de ação externa</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <Badge variant="ai" className="py-0.5 px-2 rounded-lg font-black text-[10px] uppercase tracking-widest">Análise</Badge>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Em Análise Interna</p>
          <h3 className="text-2xl font-black text-text-primary tracking-tighter">18</h3>
          <p className="text-[10px] font-bold text-brand-600 mt-2 uppercase tracking-wide">Sob responsabilidade do time</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <Badge variant="success" className="py-0.5 px-2 rounded-lg font-black text-[10px] uppercase tracking-widest">Resolvido</Badge>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Resolvidas (Hoje)</p>
          <h3 className="text-2xl font-black text-text-primary tracking-tighter">32</h3>
          <p className="text-[10px] font-bold text-emerald-600 mt-2 uppercase tracking-wide">Eficiência operacional</p>
        </div>
      </div>

      {/* Pending List Table */}
      <div className="bg-white rounded-2xl border border-app-border shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/50">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <Input 
              placeholder="Pesquisar por empresa, título ou analista..." 
              className="pl-10 h-10 bg-white border-app-border rounded-xl"
            />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" icon={<Filter className="w-4 h-4" />}>Filtrar Categoria</Button>
            <Button variant="outline" icon={<ShieldAlert className="w-4 h-4" />}>Apenas Bloqueantes</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/30 border-b border-app-border">
                <th className="px-6 py-4 text-[10px] font-black text-text-muted uppercase tracking-widest">Empresa</th>
                <th className="px-6 py-4 text-[10px] font-black text-text-muted uppercase tracking-widest">Título / Motivo</th>
                <th className="px-6 py-4 text-[10px] font-black text-text-muted uppercase tracking-widest">Categoria</th>
                <th className="px-6 py-4 text-[10px] font-black text-text-muted uppercase tracking-widest text-center">Prioridade</th>
                <th className="px-6 py-4 text-[10px] font-black text-text-muted uppercase tracking-widest text-center">Bloqueia?</th>
                <th className="px-6 py-4 text-[10px] font-black text-text-muted uppercase tracking-widest text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {pendingIssues.map((issue) => (
                <tr key={issue.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <p className="text-sm font-black text-text-primary group-hover:text-brand-600 transition-colors">{issue.companyName}</p>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Prazo: {issue.deadline}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-text-primary">{issue.title}</span>
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest line-clamp-1">{issue.reason}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="neutral" className="py-1 px-2 rounded-lg font-black text-[9px] uppercase tracking-widest">
                      {issue.category}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <Badge 
                        variant={issue.priority === 'critica' ? 'error' : issue.priority === 'alta' ? 'warning' : 'neutral'}
                        className="py-1 px-2 rounded-lg font-black text-[9px] uppercase tracking-widest"
                      >
                        {issue.priority}
                      </Badge>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      {issue.isBlocking ? (
                        <div className="flex items-center gap-1 text-[10px] font-black text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-1 rounded-lg border border-rose-100">
                          <ShieldAlert className="w-3 h-3" />
                          Sim
                        </div>
                      ) : (
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Não</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-brand-50 text-text-muted hover:text-brand-600 rounded-lg transition-colors">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-brand-50 text-text-muted hover:text-brand-600 rounded-lg transition-colors">
                        <FileText className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 text-text-muted rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pending Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <h3 className="text-xs font-black text-text-primary uppercase tracking-widest mb-6">Pendências por Categoria</h3>
          <div className="space-y-6">
            {[
              { label: 'Cliente', value: 45, color: 'bg-brand-500' },
              { label: 'Ponto', value: 25, color: 'bg-amber-500' },
              { label: 'Folha', value: 15, color: 'bg-emerald-500' },
              { label: 'Legal', value: 10, color: 'bg-rose-500' },
              { label: 'Cadastro', value: 5, color: 'bg-slate-500' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-text-muted">{item.label}</span>
                  <span className="text-text-primary">{item.value}%</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className={cn("h-full rounded-full", item.color)} style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <h3 className="text-xs font-black text-text-primary uppercase tracking-widest mb-6">Ações Recomendadas pela IA</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Cobrança Automatizada', desc: 'Enviar lembrete via WhatsApp para 12 clientes com variáveis pendentes há mais de 48h.', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
              { title: 'Revisão de Escala', desc: 'Detectado padrão de erro em 5 empresas do setor de saúde. Sugerido ajuste na regra de jornada 12x36.', icon: ShieldAlert, color: 'text-rose-600', bg: 'bg-rose-50' },
              { title: 'Conciliação em Lote', desc: '8 pendências de FGTS Digital podem ser resolvidas com a nova ferramenta de conciliação automática.', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { title: 'Treinamento Cliente', desc: '3 clientes apresentam reincidência em erros de cadastro. Sugerido envio de guia rápido de admissão.', icon: FileText, color: 'text-brand-600', bg: 'bg-brand-50' },
            ].map((item, i) => (
              <div key={i} className={cn("p-4 rounded-xl border border-slate-100 flex gap-4 hover:shadow-md transition-all cursor-pointer group", item.bg)}>
                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", item.bg.replace('50', '100'))}>
                  <item.icon className={cn("w-5 h-5", item.color)} />
                </div>
                <div>
                  <h4 className={cn("text-xs font-black uppercase tracking-widest mb-1", item.color)}>{item.title}</h4>
                  <p className="text-[11px] text-text-muted font-bold leading-relaxed tracking-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
