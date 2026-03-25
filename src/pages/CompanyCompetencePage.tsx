import React from 'react';
import { 
  ArrowLeft, 
  Building2, 
  Calendar, 
  Users, 
  Import, 
  Play, 
  CheckCircle2, 
  AlertTriangle,
  FileText,
  TrendingUp,
  History,
  Search,
  Zap,
  ArrowRight,
  Clock,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { KpiCard } from '../components/shared/KpiCard';
import { useParams, useNavigate } from 'react-router-dom';
import { companies } from '../data/mockData';
import { cn } from '../utils';

export const CompanyCompetencePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const company = companies.find(c => c.id === id) || companies[0];

  const payrollSteps = [
    { label: 'Abertura', status: 'completed', date: '01/03' },
    { label: 'Variáveis', status: 'completed', date: '15/03' },
    { label: 'Ponto', status: 'completed', date: '20/03' },
    { label: 'Conferência', status: 'current', date: '23/03' },
    { label: 'Processamento', status: 'pending', date: '25/03' },
    { label: 'Pagamento', status: 'pending', date: '05/04' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate('/empresas')}
            className="w-12 h-12 flex items-center justify-center bg-white border border-app-border rounded-2xl text-text-muted hover:text-brand-600 hover:border-brand-500 transition-all shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-black text-text-primary tracking-tight">{company.name}</h1>
              <Badge variant={
                company.payrollStatus === 'closed' ? 'success' :
                company.payrollStatus === 'validated' ? 'info' : 'warning'
              } size="md">
                {company.payrollStatus.toUpperCase()}
              </Badge>
            </div>
            <div className="flex items-center gap-6 text-xs font-bold text-text-muted uppercase tracking-widest">
              <span className="flex items-center gap-2"><Building2 className="w-4 h-4" /> {company.cnpj}</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Competência: {company.currentCompetence}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" icon={<Import className="w-4 h-4" />}>Importar Eventos</Button>
          <Button variant="primary" icon={<Play className="w-4 h-4" />}>Processar Prévia</Button>
          <Button variant="success" icon={<CheckCircle2 className="w-4 h-4" />}>Concluir Folha</Button>
        </div>
      </div>

      {/* Payroll Cycle Timeline */}
      <Card className="p-6 overflow-x-auto" variant="flat">
        <div className="flex items-center justify-between min-w-[800px]">
          {payrollSteps.map((step, i) => (
            <React.Fragment key={step.label}>
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all",
                  step.status === 'completed' ? "bg-emerald-500 border-emerald-100 text-white" :
                  step.status === 'current' ? "bg-brand-600 border-brand-100 text-white animate-pulse" :
                  "bg-white border-slate-100 text-slate-300"
                )}>
                  {step.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : <span className="text-xs font-black">{i + 1}</span>}
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-black text-text-primary uppercase tracking-widest">{step.label}</p>
                  <p className="text-[10px] font-bold text-text-muted">{step.date}</p>
                </div>
              </div>
              {i < payrollSteps.length - 1 && (
                <div className={cn(
                  "flex-1 h-1 mx-4 rounded-full",
                  step.status === 'completed' ? "bg-emerald-500" : "bg-slate-100"
                )}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Card>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard label="Colaboradores" value="124" icon={Users} variant="brand" />
        <KpiCard label="Eventos Importados" value="842" icon={FileText} variant="default" />
        <KpiCard label="Divergências" value="05" icon={AlertTriangle} variant="danger" />
        <KpiCard label="Total Bruto (Prev.)" value="R$ 452k" icon={TrendingUp} variant="success" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <Card title="Eventos da Competência" subtitle="Detalhamento de proventos, descontos e informativos">
            <div className="space-y-4 mt-6">
              <div className="flex items-center justify-between mb-6">
                <div className="relative flex-1 max-w-md group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-brand-500" />
                  <input 
                    type="text" 
                    placeholder="Filtrar por código ou nome do evento..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-app-border rounded-xl text-xs font-medium focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all" 
                  />
                </div>
                <Button variant="ghost" size="sm">Ver Todos os Eventos</Button>
              </div>
              
              {[
                { code: '101', name: 'Salário Base', type: 'Provento', count: 124, total: 'R$ 385.400,00', color: 'bg-emerald-500' },
                { code: '205', name: 'Hora Extra 50%', type: 'Provento', count: 42, total: 'R$ 12.850,00', color: 'bg-emerald-500' },
                { code: '501', name: 'INSS Segurado', type: 'Desconto', count: 124, total: 'R$ 42.120,00', color: 'bg-rose-500' },
                { code: '902', name: 'Vale Refeição', type: 'Informativo', count: 124, total: 'R$ 18.600,00', color: 'bg-blue-500' },
              ].map((event, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-app-border bg-white hover:border-brand-300 transition-all group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center font-black text-slate-400 text-xs border border-app-border group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                      {event.code}
                    </div>
                    <div>
                      <p className="text-sm font-black text-text-primary">{event.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className={cn("w-1.5 h-1.5 rounded-full", event.color)}></div>
                        <p className="text-[10px] text-text-muted font-black uppercase tracking-widest">{event.type} • {event.count} Colaboradores</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-text-primary">{event.total}</p>
                    <button className="text-[10px] font-bold text-brand-600 hover:underline uppercase tracking-wider">Ver Lista</button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Divergências e Inconsistências" variant="flat">
            <div className="space-y-4 mt-4">
              {[
                { title: 'Diferença de FGTS calculada vs informada', severity: 'high', desc: 'Divergência de R$ 1.250,00 no total da guia.' },
                { title: 'Colaboradores com salário abaixo do piso', severity: 'high', desc: '3 colaboradores identificados com valor irregular.' },
                { title: 'Afastamento sem data de retorno', severity: 'medium', desc: 'Evento de auxílio-doença pendente de fechamento.' },
              ].map((issue, i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-2xl border border-app-border bg-white shadow-sm group hover:border-brand-500 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "p-2 rounded-xl",
                      issue.severity === 'high' ? 'bg-rose-100 text-rose-600' : 'bg-amber-100 text-amber-600'
                    )}>
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-text-primary">{issue.title}</p>
                      <p className="text-xs text-text-muted font-medium">{issue.desc}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" icon={<ArrowRight className="w-4 h-4" />}>Corrigir</Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card title="Resumo Financeiro" variant="outline" className="bg-brand-900 text-white border-none shadow-lg shadow-brand-900/20">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-brand-300">
                  <span>Total Proventos</span>
                  <span className="text-white">R$ 452.250,00</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-brand-300">
                  <span>Total Descontos</span>
                  <span className="text-rose-400">R$ 112.400,00</span>
                </div>
                <hr className="border-white/10" />
                <div className="flex flex-col gap-1 pt-2">
                  <span className="text-[10px] font-black text-brand-400 uppercase tracking-widest">Líquido Previsto</span>
                  <span className="text-3xl font-black text-white tracking-tight">R$ 339.850,00</span>
                </div>
              </div>
              <div className="pt-4 space-y-3">
                <Button className="w-full bg-white text-brand-900 hover:bg-brand-50" variant="secondary" icon={<FileText className="w-4 h-4" />}>
                  Relatório de Conferência
                </Button>
                <Button className="w-full bg-white/10 text-white hover:bg-white/20 border border-white/10" variant="ghost" icon={<Zap className="w-4 h-4" />}>
                  Simular Encargos
                </Button>
              </div>
            </div>
          </Card>

          <Card title="Auditoria da Competência">
            <div className="space-y-8 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-slate-100 mt-4">
              {[
                { date: '23/03 10:00', user: 'Ricardo Silva', action: 'Importação de eventos finalizada' },
                { date: '23/03 09:15', user: 'Sistema AI', action: 'Prévia processada automaticamente' },
                { date: '22/03 16:45', user: 'Ana Oliveira', action: 'Abertura da competência' },
              ].map((item, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-brand-500"></div>
                  <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">{item.date}</p>
                  <p className="text-xs font-bold text-text-primary leading-tight">{item.action}</p>
                  <p className="text-[10px] font-bold text-brand-600 uppercase tracking-wider mt-1">por {item.user}</p>
                </div>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="w-full mt-6 text-text-muted" icon={<History className="w-4 h-4" />}>Ver Log Completo</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};
