import React from 'react';
import { 
  Clock, 
  MapPin, 
  Smartphone, 
  AlertCircle, 
  CheckCircle2, 
  Search, 
  Filter,
  Calendar,
  ArrowRight,
  Zap,
  History,
  TrendingUp,
  Scale,
  Timer,
  MoreVertical,
  ChevronRight,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { KpiCard } from '../components/shared/KpiCard';
import { DataTable } from '../components/shared/DataTable';
import { timeRecords } from '../data/mockData';
import { TimeRecord } from '../types';
import { useNavigate } from 'react-router-dom';
import { cn } from '../utils';

export const TimeTrackingPage = () => {
  const navigate = useNavigate();

  const columns = [
    {
      header: 'Colaborador / Empresa',
      accessor: (item: TimeRecord) => (
        <div className="flex flex-col">
          <span className="font-black text-text-primary group-hover:text-brand-600 transition-colors">{item.employeeName}</span>
          <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{item.companyName}</span>
        </div>
      ),
    },
    {
      header: 'Jornada',
      accessor: (item: TimeRecord) => (
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">08:00 - 18:00</span>
          <Badge size="sm" variant="neutral" className="mt-1">Padrão CLT</Badge>
        </div>
      ),
      align: 'center' as const,
    },
    {
      header: 'Entrada',
      accessor: (item: TimeRecord) => <span className="font-mono text-sm font-black text-brand-600">{item.entry}</span>,
      align: 'center' as const,
    },
    {
      header: 'Saída',
      accessor: (item: TimeRecord) => <span className="font-mono text-sm font-black text-text-primary">{item.exit}</span>,
      align: 'center' as const,
    },
    {
      header: 'Saldo (Dia)',
      accessor: (item: TimeRecord) => {
        const isPositive = item.status !== 'normal';
        return (
          <div className="flex flex-col items-center">
            <span className={cn(
              "font-mono text-xs font-black",
              isPositive ? "text-emerald-600" : "text-text-muted"
            )}>
              {isPositive ? '+00:45' : '00:00'}
            </span>
            {isPositive && <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Extra</span>}
          </div>
        );
      },
      align: 'center' as const,
    },
    {
      header: 'Status',
      accessor: (item: TimeRecord) => (
        <Badge variant={item.status === 'normal' ? 'success' : 'warning'}>
          {item.status.toUpperCase()}
        </Badge>
      ),
      align: 'center' as const,
    },
    {
      header: 'Dispositivo',
      accessor: (item: TimeRecord) => (
        <div className="flex items-center gap-2 text-[10px] font-bold text-text-muted uppercase tracking-widest">
          <Smartphone className="w-3 h-3" />
          {item.device}
        </div>
      ),
    },
    {
      header: '',
      accessor: (item: TimeRecord) => (
        <div className="flex justify-end gap-2">
          <Button variant="ghost" size="sm" icon={<ArrowRight className="w-4 h-4" />}>Detalhes</Button>
          <button className="p-2 text-text-muted hover:text-brand-600 transition-colors">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      ),
      align: 'right' as const,
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <PageHeader 
        title="Gestão de Ponto" 
        subtitle="Controle de jornadas, banco de horas e inconsistências em tempo real."
        actions={
          <div className="flex gap-3">
            <Button variant="outline" icon={<Scale className="w-4 h-4" />}>Banco de Horas</Button>
            <Button variant="outline" icon={<ShieldCheck className="w-4 h-4" />}>Auditoria</Button>
            <Button onClick={() => navigate('/ponto/registro')} icon={<Smartphone className="w-4 h-4" />}>Registrar Ponto</Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KpiCard label="Registros Hoje" value="156" icon={Zap} variant="brand" />
        <KpiCard label="Inconsistências" value="12" icon={AlertCircle} variant="danger" />
        <KpiCard label="Banco de Horas (Total)" value="+1.240h" icon={Timer} variant="warning" />
        <KpiCard label="Horas Extras (Mês)" value="45h" icon={TrendingUp} variant="success" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-0 overflow-hidden" variant="flat">
            <div className="p-4 border-b border-slate-100 bg-white">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex-1 min-w-[300px] relative group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-brand-500 transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Pesquisar colaborador ou empresa..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-app-border rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all"
                  />
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" icon={<Calendar className="w-4 h-4" />}>Hoje</Button>
                  <Button variant="outline" size="sm" icon={<Filter className="w-4 h-4" />}>Filtros</Button>
                </div>
              </div>
            </div>
            <DataTable columns={columns} data={timeRecords} />
          </Card>
        </div>

        <div className="space-y-8">
          <Card title="Resumo do Banco de Horas" variant="outline" className="bg-slate-900 text-white border-none">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Timer className="w-6 h-6 text-brand-400" />
                </div>
                <Badge variant="warning" size="sm">ATENÇÃO</Badge>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Saldo Geral Acumulado</p>
                <p className="text-4xl font-black text-white tracking-tight mt-1">+1.240h</p>
              </div>
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-400">Compensáveis</span>
                  <span>840h</span>
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-400">A Pagar (Folha)</span>
                  <span className="text-rose-400">400h</span>
                </div>
              </div>
              <Button className="w-full bg-white text-slate-900 hover:bg-slate-100" variant="secondary" icon={<TrendingUp className="w-4 h-4" />}>
                Análise de Tendência
              </Button>
            </div>
          </Card>

          <Card title="Inconsistências Críticas">
            <div className="space-y-4 mt-4">
              {[
                { name: 'João Silva', issue: 'Batida Ímpar', time: '08:00 - ?' },
                { name: 'Maria Santos', issue: 'Intervalo < 1h', time: '12:00 - 12:45' },
                { name: 'Pedro Costa', issue: 'HE sem Autorização', time: '18:00 - 20:30' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-app-border bg-white hover:border-rose-200 transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-rose-50 rounded-lg flex items-center justify-center text-rose-500">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-text-primary">{item.name}</p>
                      <p className="text-[10px] font-bold text-rose-600 uppercase tracking-widest">{item.issue}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">{item.time}</p>
                    <button className="text-[10px] font-bold text-brand-600 hover:underline uppercase tracking-wider">Ajustar</button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="w-full mt-4 text-text-muted" icon={<ChevronRight className="w-4 h-4" />}>Ver Todas</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};
