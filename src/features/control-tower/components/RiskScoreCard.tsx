import React from 'react';
import { Company } from '../../../entities';
import { cn } from '../../../utils';
import { 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown, 
  ShieldAlert,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

interface RiskScoreCardProps {
  companies: Company[];
}

export const RiskScoreCard = ({ companies }: RiskScoreCardProps) => {
  const highRiskCompanies = companies.filter(c => c.riskScore > 50).sort((a, b) => b.riskScore - a.riskScore);

  return (
    <div className="bg-white rounded-2xl border border-app-border shadow-sm flex flex-col h-full overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-rose-500 fill-rose-500" />
          <h3 className="text-xs font-black text-text-primary uppercase tracking-widest">Score de Risco Crítico</h3>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-black text-rose-600 uppercase tracking-widest bg-rose-50 px-2 py-0.5 rounded-lg border border-rose-100">
          {highRiskCompanies.length} Alertas
        </div>
      </div>

      <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
        {highRiskCompanies.map((company) => (
          <div key={company.id} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="flex items-center justify-between mb-3">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-0.5">{company.segment}</span>
                <h4 className="text-sm font-black text-text-primary group-hover:text-brand-600 transition-colors">{company.name}</h4>
              </div>
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs border",
                company.riskScore > 80 ? 'bg-rose-50 text-rose-700 border-rose-100' : 'bg-orange-50 text-orange-700 border-orange-100'
              )}>
                {company.riskScore}%
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={cn(
                    "h-full rounded-full transition-all duration-1000",
                    company.riskScore > 80 ? 'bg-rose-500' : 'bg-orange-500'
                  )}
                  style={{ width: `${company.riskScore}%` }}
                />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-black text-rose-600 uppercase tracking-widest">
                <TrendingUp className="w-3 h-3" />
                +12%
              </div>
            </div>

            {company.blockingReason && (
              <div className="mt-3 flex items-center gap-2 text-[10px] font-bold text-rose-600 bg-rose-50/50 p-2 rounded-lg border border-rose-100/50">
                <AlertTriangle className="w-3 h-3" />
                {company.blockingReason}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-[10px] font-black text-brand-600 uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-50 transition-colors">
        Análise de Saúde Completa
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
