import React from 'react';
import { 
  AlertCircle, 
  Search, 
  Filter, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  FileText,
  UserPlus,
  UserMinus,
  TrendingUp,
  Plane,
  Building2,
  Users,
  CheckSquare,
  MoreVertical,
  ChevronRight,
  ShieldCheck,
  Plus,
  Download,
  Printer
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { KpiCard } from '../components/shared/KpiCard';
import { cn } from '../utils';

export const PendingTasksPage = () => {
  const pendingItems = [
    { id: '1', title: 'Aprovação de Folha Março/2026', type: 'folha', priority: 'critical', deadline: 'Hoje, 17:00', requester: 'Ana Oliveira', company: 'Tech Solutions', status: 'Aguardando' },
    { id: '2', title: 'Solicitação de Férias - Aderlan Santos', type: 'aprovação', priority: 'medium', deadline: '25/03/2026', requester: 'Aderlan Santos', company: 'Tech Solutions', status: 'Em Análise' },
    { id: '3', title: 'Divergência de Ponto - Marcos Souza', type: 'ponto', priority: 'high', deadline: 'Hoje, 14:00', requester: 'Sistema AI', company: 'Varejo Global', status: 'Aguardando' },
    { id: '4', title: 'Documentação Pendente - Ricardo Silva', type: 'cadastral', priority: 'medium', deadline: '28/03/2026', requester: 'RH Central', company: 'Tech Solutions', status: 'Em Triagem' },
    { id: '5', title: 'Renovação de Exame Periódico', type: 'legal', priority: 'high', deadline: '30/03/2026', requester: 'SESMT', company: 'Metalúrgica S.A.', status: 'Aguardando' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-rose-500';
      case 'high': return 'bg-amber-500';
      case 'medium': return 'bg-blue-500';
      default: return 'bg-slate-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'folha': return FileText;
      case 'ponto': return Clock;
      case 'aprovação': return CheckCircle2;
      case 'cadastral': return Users;
      case 'legal': return Building2;
      default: return AlertCircle;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <PageHeader 
        title="Central de Pendências" 
        subtitle="Consolidado de ações urgentes, aprovações e validações operacionais."
        actions={
          <div className="flex gap-3">
            <Button variant="outline" icon={<Printer className="w-4 h-4" />}>Relatórios</Button>
            <Button variant="outline" icon={<CheckSquare className="w-4 h-4" />}>Ações em Massa</Button>
            <Button variant="primary" icon={<Plus className="w-4 h-4" />}>Nova Pendência</Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KpiCard label="Críticas" value="08" icon={AlertCircle} variant="danger" />
        <KpiCard label="Alta Prioridade" value="12" icon={AlertTriangle} variant="warning" />
        <KpiCard label="Em Análise" value="15" icon={Clock} variant="brand" />
        <KpiCard label="Concluídas (Hoje)" value="24" icon={CheckCircle2} variant="success" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <Card className="p-4" variant="flat">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex-1 min-w-[300px] relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-brand-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Pesquisar pendência, empresa ou responsável..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-app-border rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all"
                />
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" icon={<Filter className="w-4 h-4" />}>Filtros</Button>
                <div className="h-10 w-px bg-slate-100 mx-2"></div>
                <Button variant="outline" size="sm">Todas</Button>
                <Button variant="outline" size="sm">Minhas</Button>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            {pendingItems.map((item) => {
              const Icon = getTypeIcon(item.type);
              return (
                <div key={item.id} className="flex items-center justify-between p-5 rounded-2xl border border-app-border bg-white shadow-sm group hover:border-brand-500 transition-all relative overflow-hidden">
                  <div className={cn("absolute left-0 top-0 bottom-0 w-1.5", getPriorityColor(item.priority))}></div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="text-sm font-black text-text-primary group-hover:text-brand-600 transition-colors">{item.title}</h4>
                        <Badge size="sm" variant={item.priority === 'critical' ? 'error' : item.priority === 'high' ? 'warning' : 'info'}>
                          {item.priority.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 mt-1">
                        <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{item.company} • De: {item.requester}</p>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                          <p className="text-[10px] font-black text-brand-600 uppercase tracking-widest">{item.status}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">Prazo Limite</p>
                      <p className={cn(
                        "text-xs font-black tracking-tight",
                        item.deadline.includes('Hoje') ? "text-rose-600" : "text-text-primary"
                      )}>{item.deadline}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="sm" icon={<ArrowRight className="w-4 h-4" />}>Resolver</Button>
                      <button className="p-2 text-text-muted hover:text-brand-600 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-center pt-4">
            <Button variant="ghost" size="sm" className="text-text-muted" icon={<ChevronRight className="w-4 h-4" />}>
              Carregar mais pendências
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          <Card title="Resumo por Categoria" variant="outline">
            <div className="space-y-4 mt-4">
              {[
                { label: 'Folha de Pagamento', count: 12, color: 'bg-brand-500' },
                { label: 'Ponto Eletrônico', count: 8, color: 'bg-amber-500' },
                { label: 'Aprovações', count: 5, color: 'bg-emerald-500' },
                { label: 'Cadastral', count: 15, color: 'bg-blue-500' },
                { label: 'Legal / SESMT', count: 4, color: 'bg-rose-500' },
              ].map((cat, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black text-text-muted uppercase tracking-widest">
                    <span>{cat.label}</span>
                    <span>{cat.count}</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full", cat.color)} style={{ width: `${(cat.count / 44) * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Ações Rápidas" variant="flat" className="bg-slate-900 text-white border-none">
            <div className="space-y-3">
              <Button className="w-full bg-white text-slate-900 hover:bg-slate-100" variant="secondary" icon={<CheckSquare className="w-4 h-4" />}>
                Aprovar Lote de Folha
              </Button>
              <Button className="w-full bg-white/10 text-white hover:bg-white/20 border-white/10" variant="outline" icon={<Download className="w-4 h-4" />}>
                Baixar Pendências (CSV)
              </Button>
              <Button className="w-full bg-white/10 text-white hover:bg-white/20 border-white/10" variant="outline" icon={<ShieldCheck className="w-4 h-4" />}>
                Relatório de Auditoria
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
