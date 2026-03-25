import React from 'react';
import { cn } from '../../../utils';
import { LucideIcon } from 'lucide-react';

interface GlobalStatusCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  variant?: 'brand' | 'success' | 'warning' | 'destructive' | 'neutral';
  trend?: {
    value: number;
    isUp: boolean;
  };
  description?: string;
}

export const GlobalStatusCard: React.FC<GlobalStatusCardProps> = ({ 
  label, 
  value, 
  icon: Icon, 
  variant = 'neutral',
  trend,
  description
}) => {
  const variants = {
    brand: 'bg-brand-50 text-brand-600 border-brand-100',
    success: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    warning: 'bg-amber-50 text-amber-600 border-amber-100',
    destructive: 'bg-rose-50 text-rose-600 border-rose-100',
    neutral: 'bg-slate-50 text-slate-600 border-slate-100',
  };

  const iconColors = {
    brand: 'bg-brand-100 text-brand-700',
    success: 'bg-emerald-100 text-emerald-700',
    warning: 'bg-amber-100 text-amber-700',
    destructive: 'bg-rose-100 text-rose-700',
    neutral: 'bg-slate-200 text-slate-700',
  };

  return (
    <div className="bg-white rounded-2xl border border-app-border p-5 shadow-sm hover:shadow-md transition-all group">
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110",
          iconColors[variant]
        )}>
          <Icon className="w-5 h-5" />
        </div>
        {trend && (
          <div className={cn(
            "flex items-center gap-1 py-1 px-2 rounded-lg text-[10px] font-black uppercase tracking-widest",
            trend.isUp ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
          )}>
            {trend.isUp ? '↑' : '↓'} {trend.value}%
          </div>
        )}
      </div>
      
      <div>
        <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">{label}</p>
        <h3 className="text-2xl font-black text-text-primary tracking-tighter">{value}</h3>
        {description && (
          <p className="text-[10px] font-bold text-text-muted mt-2 uppercase tracking-wide opacity-70">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
