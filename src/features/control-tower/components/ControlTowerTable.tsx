import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Company, RiskLevel, CompanyStatus } from '../../../entities';
import { Badge } from '../../../components/ui/Badge';
import { cn } from '../../../utils';
import { 
  MoreVertical, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Lock,
  ChevronRight,
  History
} from 'lucide-react';

interface ControlTowerTableProps {
  companies: Company[];
}

export const ControlTowerTable = ({ companies }: ControlTowerTableProps) => {
  const navigate = useNavigate();

  const getStatusBadge = (status: CompanyStatus) => {
    const configs: Record<CompanyStatus, { label: string; variant: any; icon: any }> = {
      em_dia: { label: 'Em Dia', variant: 'success', icon: CheckCircle2 },
      em_andamento: { label: 'Em Andamento', variant: 'brand', icon: Clock },
      aguardando_cliente: { label: 'Aguardando Cliente', variant: 'warning', icon: Clock },
      em_analise: { label: 'Em Análise', variant: 'brand', icon: Clock },
      com_risco: { label: 'Com Risco', variant: 'destructive', icon: AlertCircle },
      bloqueada: { label: 'Bloqueada', variant: 'destructive', icon: Lock },
      pronta_fechamento: { label: 'Pronta p/ Fechamento', variant: 'success', icon: CheckCircle2 },
      fechada: { label: 'Fechada', variant: 'neutral', icon: CheckCircle2 },
    };

    const config = configs[status];
    const Icon = config.icon;

    return (
      <Badge variant={config.variant} className="flex items-center gap-1.5 py-1 px-2.5 rounded-lg font-bold uppercase tracking-wider text-[10px]">
        <Icon className="w-3 h-3" />
        {config.label}
      </Badge>
    );
  };

  const getRiskBadge = (level: RiskLevel, score: number) => {
    const colors = {
      baixo: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      medio: 'bg-amber-50 text-amber-700 border-amber-100',
      alto: 'bg-orange-50 text-orange-700 border-orange-100',
      critico: 'bg-rose-50 text-rose-700 border-rose-100',
    };

    return (
      <div className={cn(
        "flex items-center gap-2 py-1 px-2 rounded-lg border font-black text-[11px] uppercase tracking-tighter",
        colors[level]
      )}>
        <div className={cn(
          "w-1.5 h-1.5 rounded-full",
          level === 'baixo' ? 'bg-emerald-500' : 
          level === 'medio' ? 'bg-amber-500' : 
          level === 'alto' ? 'bg-orange-500' : 'bg-rose-500'
        )} />
        {score}% {level}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-app-border shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-app-border">
              <th className="px-6 py-4 text-[11px] font-black text-text-muted uppercase tracking-widest">Empresa</th>
              <th className="px-6 py-4 text-[11px] font-black text-text-muted uppercase tracking-widest">Status Operacional</th>
              <th className="px-6 py-4 text-[11px] font-black text-text-muted uppercase tracking-widest text-center">Risco</th>
              <th className="px-6 py-4 text-[11px] font-black text-text-muted uppercase tracking-widest">Próximo Prazo</th>
              <th className="px-6 py-4 text-[11px] font-black text-text-muted uppercase tracking-widest">Responsável</th>
              <th className="px-6 py-4 text-[11px] font-black text-text-muted uppercase tracking-widest text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {companies.map((company) => (
              <tr key={company.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-black text-slate-400 text-xs border border-slate-200">
                      {company.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-black text-text-primary group-hover:text-brand-600 transition-colors">{company.name}</p>
                      <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{company.cnpj}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1.5">
                    {getStatusBadge(company.status)}
                    {company.blockingReason && (
                      <p className="text-[10px] font-bold text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {company.blockingReason}
                      </p>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    {getRiskBadge(company.riskLevel, company.riskScore)}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-text-primary">{company.nextDeadline}</span>
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Competência 03/2026</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-[10px] font-black text-brand-700 uppercase">
                      RS
                    </div>
                    <span className="text-xs font-bold text-text-primary">Ricardo Silva</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => navigate(`/empresas/${company.id}`)}
                      className="p-2 hover:bg-brand-50 text-text-muted hover:text-brand-600 rounded-lg transition-colors"
                      title="Abrir Empresa"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button 
                      className="p-2 hover:bg-slate-100 text-text-muted rounded-lg transition-colors"
                      title="Ver Histórico"
                    >
                      <History className="w-4 h-4" />
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
  );
};
