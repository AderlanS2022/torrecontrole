import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  Users, 
  Building2,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Download
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../utils';

const statusData = [
  { name: 'Em Dia', value: 45, color: '#10b981' },
  { name: 'Em Andamento', value: 25, color: '#6366f1' },
  { name: 'Aguardando Cliente', value: 15, color: '#f59e0b' },
  { name: 'Bloqueada', value: 10, color: '#f43f5e' },
  { name: 'Com Risco', value: 5, color: '#f97316' },
];

const performanceData = [
  { month: 'Out', taxa: 92, pendencias: 45 },
  { month: 'Nov', taxa: 88, pendencias: 52 },
  { month: 'Dez', taxa: 95, pendencias: 38 },
  { month: 'Jan', taxa: 91, pendencias: 48 },
  { month: 'Fev', taxa: 89, pendencias: 55 },
  { month: 'Mar', taxa: 94, pendencias: 42 },
];

const riskDistribution = [
  { category: 'Folha', value: 35 },
  { category: 'Ponto', value: 25 },
  { category: 'eSocial', value: 20 },
  { category: 'Cadastro', value: 15 },
  { category: 'Legal', value: 5 },
];

export const HealthPage = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <PageHeader 
        title="Saúde Operacional da Carteira" 
        subtitle="Análise consolidada de performance, riscos e eficiência da operação."
        actions={
          <div className="flex items-center gap-3">
            <Button variant="outline" icon={<Filter className="w-4 h-4" />}>Filtrar Período</Button>
            <Button variant="primary" icon={<Download className="w-4 h-4" />}>Exportar Dashboard</Button>
          </div>
        }
      />

      {/* Executive Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">+4.2%</span>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Taxa de Fechamento</p>
          <h3 className="text-2xl font-black text-text-primary tracking-tighter">94.2%</h3>
          <p className="text-[10px] font-bold text-text-muted mt-2 uppercase">No prazo regulamentar</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black text-rose-600 bg-rose-50 px-2 py-1 rounded-lg">+12%</span>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Índice de Bloqueio</p>
          <h3 className="text-2xl font-black text-text-primary tracking-tighter">8.5%</h3>
          <p className="text-[10px] font-bold text-text-muted mt-2 uppercase">Média por competência</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">-5%</span>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Tempo Médio Resposta</p>
          <h3 className="text-2xl font-black text-text-primary tracking-tighter">4.2h</h3>
          <p className="text-[10px] font-bold text-text-muted mt-2 uppercase">Interação Analista/Cliente</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">Estável</span>
          </div>
          <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Retenção de Clientes</p>
          <h3 className="text-2xl font-black text-text-primary tracking-tighter">98.1%</h3>
          <p className="text-[10px] font-bold text-text-muted mt-2 uppercase">Churn rate anualizado</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Performance Chart */}
        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xs font-black text-text-primary uppercase tracking-widest">Evolução de Performance</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-500" />
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Taxa de Sucesso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Pendências</span>
              </div>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorTaxa" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="taxa" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorTaxa)" />
                <Area type="monotone" dataKey="pendencias" stroke="#cbd5e1" strokeWidth={2} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Distribution */}
        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <h3 className="text-xs font-black text-text-primary uppercase tracking-widest mb-8">Distribuição por Status</h3>
          <div className="flex items-center gap-8">
            <div className="w-1/2 h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 space-y-4">
              {statusData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-xs font-bold text-text-muted">{item.name}</span>
                  </div>
                  <span className="text-xs font-black text-text-primary">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Risk Categories */}
        <div className="bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <h3 className="text-xs font-black text-text-primary uppercase tracking-widest mb-6">Origem dos Riscos</h3>
          <div className="space-y-6">
            {riskDistribution.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-text-muted">{item.category}</span>
                  <span className="text-text-primary">{item.value}%</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-brand-500 rounded-full"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Bottleneck Clients */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-app-border shadow-sm">
          <h3 className="text-xs font-black text-text-primary uppercase tracking-widest mb-6">Clientes com Maior Incidência de Travas</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="pb-4 text-[10px] font-black text-text-muted uppercase tracking-widest">Empresa</th>
                  <th className="pb-4 text-[10px] font-black text-text-muted uppercase tracking-widest text-center">Travas/Mês</th>
                  <th className="pb-4 text-[10px] font-black text-text-muted uppercase tracking-widest text-center">Tempo Médio Parado</th>
                  <th className="pb-4 text-[10px] font-black text-text-muted uppercase tracking-widest text-right">Impacto SLA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { name: 'Indústrias Metalúrgicas S.A.', count: 12, time: '48h', impact: 'Crítico', color: 'text-rose-600' },
                  { name: 'Logística Global', count: 8, time: '36h', impact: 'Alto', color: 'text-orange-600' },
                  { name: 'Hospital Santa Maria', count: 5, time: '24h', impact: 'Médio', color: 'text-amber-600' },
                  { name: 'Varejo Express', count: 2, time: '8h', impact: 'Baixo', color: 'text-emerald-600' },
                ].map((client, i) => (
                  <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 text-xs font-black text-text-primary">{client.name}</td>
                    <td className="py-4 text-xs font-bold text-text-muted text-center">{client.count}</td>
                    <td className="py-4 text-xs font-bold text-text-muted text-center">{client.time}</td>
                    <td className={cn("py-4 text-[10px] font-black uppercase tracking-widest text-right", client.color)}>
                      {client.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
