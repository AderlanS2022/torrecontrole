import React from 'react';
import { 
  Calendar, 
  Search, 
  Filter, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  Play,
  TrendingUp,
  FileText,
  MoreVertical,
  ChevronRight,
  ShieldCheck,
  Briefcase,
  Download,
  Printer
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { KpiCard } from '../components/shared/KpiCard';
import { DataTable } from '../components/shared/DataTable';
import { companies } from '../data/mockData';
import { Company } from '../types';
import { useNavigate } from 'react-router-dom';
import { cn } from '../utils';

export const CompetencesPage = () => {
  const navigate = useNavigate();

  const columns = [
    {
      header: 'Empresa',
      accessor: (item: Company) => (
        <div className="flex flex-col">
          <span className="font-black text-text-primary group-hover:text-brand-600 transition-colors">{item.name}</span>
          <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">CNPJ: 00.000.000/0001-00</span>
        </div>
      ),
    },
    {
      header: 'Competência',
      accessor: (item: Company) => <Badge variant="outline" className="font-mono">{item.currentCompetence}</Badge>,
      align: 'center' as const,
    },
    {
      header: 'Status',
      accessor: (item: Company) => (
        <Badge variant={
          item.payrollStatus === 'closed' ? 'success' :
          item.payrollStatus === 'validated' ? 'info' :
          item.payrollStatus === 'processing' ? 'warning' : 'neutral'
        }>
          {item.payrollStatus.toUpperCase()}
        </Badge>
      ),
      align: 'center' as const,
    },
    {
      header: 'Progresso',
      accessor: (item: Company) => {
        const progress = item.payrollStatus === 'closed' ? 100 : item.payrollStatus === 'validated' ? 80 : 45;
        return (
          <div className="w-40 space-y-2">
            <div className="flex justify-between text-[10px] font-black text-text-muted uppercase tracking-widest">
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
              <div 
                className={cn(
                  "h-full rounded-full transition-all duration-1000",
                  item.payrollStatus === 'closed' ? 'bg-emerald-500' : 
                  item.payrollStatus === 'validated' ? 'bg-brand-500' : 'bg-warning'
                )} 
                style={{width: `${progress}%`}}
              ></div>
            </div>
          </div>
        );
      },
    },
    {
      header: 'Colaboradores',
      accessor: (item: Company) => (
        <div className="flex flex-col items-center">
          <span className="text-xs font-black text-text-primary">124</span>
          <span className="text-[8px] font-bold text-text-muted uppercase tracking-widest">Ativos</span>
        </div>
      ),
      align: 'center' as const,
    },
    {
      header: 'Última Ação',
      accessor: (item: Company) => (
        <div className="flex flex-col">
          <span className="text-xs font-bold text-text-secondary">Há 2 horas</span>
          <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">por {item.analyst}</span>
        </div>
      ),
    },
    {
      header: '',
      accessor: (item: Company) => (
        <div className="flex justify-end gap-2">
          <Button variant="ghost" size="sm" onClick={(e) => {
            e.stopPropagation();
            navigate(`/competencias/${item.id}`);
          }} icon={<ArrowRight className="w-4 h-4" />}>
            Abrir
          </Button>
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
        title="Gestão de Competências" 
        subtitle="Acompanhamento do ciclo mensal de processamento e fechamento de folha."
        actions={
          <div className="flex gap-3">
            <Button variant="outline" icon={<Download className="w-4 h-4" />}>Exportar Relatório</Button>
            <Button variant="primary" icon={<Play className="w-4 h-4" />}>Processar Lote</Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KpiCard label="Em Processamento" value="24" icon={Clock} variant="warning" />
        <KpiCard label="Aguardando Validação" value="12" icon={AlertTriangle} variant="brand" />
        <KpiCard label="Concluídas" value="18" icon={CheckCircle2} variant="success" />
        <KpiCard label="Total de Empresas" value="54" icon={Briefcase} variant="default" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <Card className="p-0 overflow-hidden" variant="flat">
            <div className="p-4 border-b border-slate-100 bg-white">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex-1 min-w-[300px] relative group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-brand-500 transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Pesquisar por empresa ou competência..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-app-border rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all"
                  />
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" icon={<Calendar className="w-4 h-4" />}>Março / 2026</Button>
                  <Button variant="outline" size="sm" icon={<Filter className="w-4 h-4" />}>Filtros</Button>
                </div>
              </div>
            </div>
            <DataTable 
              columns={columns} 
              data={companies} 
              onRowClick={(item) => navigate(`/competencias/${item.id}`)}
            />
          </Card>
        </div>

        <div className="space-y-8">
          <Card title="Calendário de Obrigações" variant="outline">
            <div className="space-y-4 mt-4">
              {[
                { date: '07/04', task: 'FGTS Mensal', status: 'pending' },
                { date: '15/04', task: 'eSocial S-1200', status: 'warning' },
                { date: '20/04', task: 'DCTFWeb', status: 'danger' },
                { date: '25/04', task: 'IRRF Folha', status: 'neutral' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-app-border bg-slate-50/50">
                  <div className="flex flex-col items-center justify-center w-10 h-10 bg-white rounded-lg border border-app-border shadow-sm">
                    <span className="text-[8px] font-black text-text-muted uppercase tracking-widest">{item.date.split('/')[1]}</span>
                    <span className="text-sm font-black text-brand-600 leading-none">{item.date.split('/')[0]}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-black text-text-primary">{item.task}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        item.status === 'danger' ? 'bg-rose-500' :
                        item.status === 'warning' ? 'bg-amber-500' :
                        item.status === 'pending' ? 'bg-brand-500' : 'bg-slate-400'
                      )}></div>
                      <span className="text-[8px] font-bold text-text-muted uppercase tracking-widest">Vencimento Próximo</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="w-full mt-4 text-text-muted" icon={<ChevronRight className="w-4 h-4" />}>Ver Calendário Completo</Button>
          </Card>

          <Card title="Alertas de Lote" variant="flat" className="bg-amber-50 border-amber-100">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-black text-amber-900">12 Empresas com Divergências</p>
                <p className="text-[10px] font-bold text-amber-700 leading-relaxed">
                  Foram detectadas inconsistências de eSocial em 12 empresas do lote atual.
                </p>
                <button className="text-[10px] font-black text-amber-900 uppercase tracking-widest hover:underline mt-2">Corrigir Agora</button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
