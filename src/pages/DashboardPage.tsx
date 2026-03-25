import { 
  Users, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ArrowUpRight,
  Import,
  Plus,
  TrendingUp,
  Sparkles,
  Zap,
  Plane,
  UserPlus,
  UserMinus,
  Calendar,
  ShieldCheck,
  ChevronRight,
  Building2
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { KpiCard } from '../components/shared/KpiCard';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { AIRecommendationCard } from '../components/ai/AIRecommendationCard';
import { alerts } from '../data/mockData';
import { cn } from '../utils';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  LineChart,
  Line
} from 'recharts';

const statusData = [
  { name: 'Processadas', value: 45, color: '#10b981' },
  { name: 'Em Aberto', value: 25, color: '#3b82f6' },
  { name: 'Com Alertas', value: 15, color: '#f59e0b' },
  { name: 'Críticas', value: 5, color: '#ef4444' },
];

const payrollTrend = [
  { month: 'Out', valor: 380 },
  { month: 'Nov', valor: 395 },
  { month: 'Dez', valor: 420 },
  { month: 'Jan', valor: 410 },
  { month: 'Fev', valor: 435 },
  { month: 'Mar', valor: 452 },
];

export const DashboardPage = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <PageHeader 
        title="Dashboard Executivo de Carteira" 
        subtitle="Visão consolidada de performance, riscos e conformidade de toda a base de clientes."
        actions={
          <div className="flex gap-3">
            <Button variant="outline" icon={<Calendar className="w-4 h-4" />}>Calendário Global</Button>
            <Button variant="primary" icon={<Plus className="w-4 h-4" />}>Nova Empresa</Button>
          </div>
        }
      />

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
        <KpiCard label="Empresas Ativas" value="124" icon={Building2} variant="brand" trend={{ value: '+12', isUp: true }} />
        <KpiCard label="Alertas Críticos" value="08" icon={AlertTriangle} variant="danger" />
        <KpiCard label="SLA em Risco" value="15" icon={Clock} variant="warning" />
        <KpiCard label="Admissões Mês" value="245" icon={UserPlus} variant="success" />
        <KpiCard label="Rescisões Mês" value="42" icon={UserMinus} variant="danger" />
        <KpiCard label="IA Insights" value="12" icon={Sparkles} variant="ai" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Main Chart Section */}
        <div className="xl:col-span-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card title="Status de Processamento" subtitle="Distribuição por estágio na competência atual">
              <div className="h-[250px] w-full mt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={statusData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} 
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} 
                    />
                    <Tooltip 
                      cursor={{fill: '#f8fafc'}}
                      contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={32}>
                      {statusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card title="Evolução da Folha (Bruto)" subtitle="Comparativo dos últimos 6 meses (em R$ mil)">
              <div className="h-[250px] w-full mt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={payrollTrend} margin={{ top: 0, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="month" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} 
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} 
                    />
                    <Tooltip 
                      contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="valor" 
                      stroke="#3b82f6" 
                      strokeWidth={3} 
                      dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
                      activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="Próximos Vencimentos" subtitle="Prazos críticos de DP e Folha">
              <div className="space-y-4 mt-4">
                {[
                  { label: 'FGTS Digital - Guia Mensal', time: 'Em 2 dias', type: 'Legal', priority: 'Crítica' },
                  { label: 'Fechamento de Ponto - Tech Solutions', time: 'Hoje, 18:00', type: 'Folha', priority: 'Alta' },
                  { label: 'Pagamento de Férias - 12 Colab.', time: 'Amanhã', type: 'Financeiro', priority: 'Média' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:border-brand-200 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        item.priority === 'Crítica' ? 'bg-rose-500' : item.priority === 'Alta' ? 'bg-amber-500' : 'bg-brand-500'
                      )}></div>
                      <div>
                        <p className="text-sm font-bold text-text-primary">{item.label}</p>
                        <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{item.time} • {item.type}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-brand-500 transition-all" />
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-text-muted" icon={<ChevronRight className="w-4 h-4" />}>Ver Calendário Completo</Button>
            </Card>

            <Card title="Riscos de Compliance" subtitle="Identificados via análise de comportamento">
              <div className="space-y-4 mt-4">
                {[
                  { label: 'Excesso de HE - Logística', risk: 'Alto', color: 'text-danger', desc: 'Risco de passivo trabalhista' },
                  { label: 'Férias Vencidas - Varejo', risk: 'Médio', color: 'text-warning', desc: 'Pagamento em dobro iminente' },
                  { label: 'Cadastro Incompleto - Admissões', risk: 'Baixo', color: 'text-info', desc: 'Pendência de eSocial' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                    <div>
                      <span className="text-sm font-bold text-text-primary block">{item.label}</span>
                      <span className="text-[10px] font-medium text-text-muted uppercase tracking-widest">{item.desc}</span>
                    </div>
                    <Badge variant={item.risk === 'Alto' ? 'error' : item.risk === 'Médio' ? 'warning' : 'info'}>
                      {item.risk}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-text-muted" icon={<ShieldCheck className="w-4 h-4" />}>Relatório de Auditoria</Button>
            </Card>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="xl:col-span-4 space-y-8">
          <AIRecommendationCard 
            title="Otimização de Processamento"
            recommendation="Detectamos que 80% das divergências na Tech Solutions são recorrentes. Recomendamos a automação da regra de validação de DSR."
            confidence={98}
            priority="medium"
            onApply={() => {}}
          />

          <Card title="Últimos Alertas Inteligentes">
            <div className="space-y-5 mt-4">
              {alerts.slice(0, 3).map((alert) => (
                <div key={alert.id} className="flex gap-4 group cursor-pointer">
                  <div className={cn(
                    "w-1 rounded-full shrink-0 transition-all group-hover:w-1.5",
                    alert.priority === 'critical' ? 'bg-danger' : 'bg-warning'
                  )}></div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-text-primary group-hover:text-brand-600 transition-colors">{alert.title}</h4>
                      <span className="text-[10px] font-bold text-text-muted">{alert.date}</span>
                    </div>
                    <p className="text-xs text-text-secondary line-clamp-1">{alert.companyName}</p>
                    <div className="flex items-center gap-2 pt-1">
                      <Badge size="sm" variant={alert.priority === 'critical' ? 'error' : 'warning'}>
                        {alert.priority.toUpperCase()}
                      </Badge>
                      <span className="text-[10px] font-bold text-brand-600 flex items-center gap-1">
                        Analisar <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="ghost" size="sm" className="w-full text-text-muted">Ver Central de Alertas</Button>
            </div>
          </Card>

          <Card title="Ações Rápidas" variant="flat">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Validar Folha', icon: CheckCircle2, color: 'text-emerald-600' },
                { label: 'Lançar Evento', icon: Zap, color: 'text-brand-600' },
                { label: 'Relatórios', icon: FileText, color: 'text-slate-600' },
                { label: 'Configurar IA', icon: Sparkles, color: 'text-ai-600' },
              ].map((action, i) => (
                <button key={i} className="p-4 rounded-xl bg-white border border-app-border hover:border-brand-500 hover:shadow-card transition-all flex flex-col items-center gap-2 group">
                  <action.icon className={cn("w-5 h-5 transition-transform group-hover:scale-110", action.color)} />
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{action.label}</span>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
