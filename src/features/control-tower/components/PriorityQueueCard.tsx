import React from 'react';
import { PendingIssue } from '../../../entities';
import { Badge } from '../../../components/ui/Badge';
import { cn } from '../../../utils';
import { 
  AlertTriangle, 
  Clock, 
  ChevronRight, 
  ArrowRight,
  ShieldAlert,
  Zap
} from 'lucide-react';

interface PriorityQueueCardProps {
  issues: PendingIssue[];
}

export const PriorityQueueCard = ({ issues }: PriorityQueueCardProps) => {
  const getPriorityBadge = (priority: string) => {
    const colors = {
      baixa: 'bg-slate-100 text-slate-700 border-slate-200',
      media: 'bg-amber-50 text-amber-700 border-amber-100',
      alta: 'bg-orange-50 text-orange-700 border-orange-100',
      critica: 'bg-rose-50 text-rose-700 border-rose-100',
    };

    return (
      <span className={cn(
        "py-0.5 px-2 rounded-lg border font-black text-[9px] uppercase tracking-widest",
        colors[priority as keyof typeof colors]
      )}>
        {priority}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-app-border shadow-sm flex flex-col h-full overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          <h3 className="text-xs font-black text-text-primary uppercase tracking-widest">Fila de Prioridades</h3>
        </div>
        <Badge variant="error" className="py-0.5 px-2 rounded-lg font-black text-[10px] uppercase tracking-widest">
          {issues.length} Críticos
        </Badge>
      </div>

      <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
        {issues.map((issue) => (
          <div key={issue.id} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="flex items-start justify-between mb-2">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest mb-0.5">{issue.companyName}</span>
                <h4 className="text-sm font-black text-text-primary group-hover:text-brand-600 transition-colors">{issue.title}</h4>
              </div>
              {getPriorityBadge(issue.priority)}
            </div>
            
            <p className="text-xs text-text-muted font-bold line-clamp-2 mb-3 tracking-tight">
              {issue.reason}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-[10px] font-bold text-rose-600 uppercase tracking-widest">
                  <Clock className="w-3 h-3" />
                  {issue.deadline}
                </div>
                {issue.isBlocking && (
                  <div className="flex items-center gap-1 text-[10px] font-black text-rose-700 uppercase tracking-widest bg-rose-50 px-1.5 py-0.5 rounded border border-rose-100">
                    <ShieldAlert className="w-3 h-3" />
                    Bloqueante
                  </div>
                )}
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-600 transition-colors" />
            </div>
          </div>
        ))}
      </div>

      <button className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-[10px] font-black text-brand-600 uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-50 transition-colors">
        Ver Todas as Pendências
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
