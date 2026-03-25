import React from 'react';
import { cn } from '../../utils';
import { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isUp: boolean;
  };
  variant?: 'default' | 'brand' | 'ai' | 'danger' | 'warning' | 'success';
  className?: string;
}

export const KpiCard = ({
  label,
  value,
  icon: Icon,
  trend,
  variant = 'default',
  className
}: KpiCardProps) => {
  const variants = {
    default: { bg: 'bg-white', iconBg: 'bg-slate-100', iconColor: 'text-slate-600' },
    brand: { bg: 'bg-brand-50/50', iconBg: 'bg-brand-100', iconColor: 'text-brand-600' },
    ai: { bg: 'bg-ai-50/50', iconBg: 'bg-ai-100', iconColor: 'text-ai-600' },
    danger: { bg: 'bg-rose-50/50', iconBg: 'bg-rose-100', iconColor: 'text-rose-600' },
    warning: { bg: 'bg-amber-50/50', iconBg: 'bg-amber-100', iconColor: 'text-amber-600' },
    success: { bg: 'bg-emerald-50/50', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600' },
  };

  return (
    <div className={cn(
      "p-5 rounded-2xl border border-app-border shadow-card transition-all hover:shadow-float group",
      variants[variant].bg,
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className={cn("p-2.5 rounded-xl transition-transform group-hover:scale-110", variants[variant].iconBg)}>
          <Icon className={cn("w-5 h-5", variants[variant].iconColor)} />
        </div>
        {trend && (
          <span className={cn(
            "text-xs font-bold px-2 py-0.5 rounded-full",
            trend.isUp ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
          )}>
            {trend.value}
          </span>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-black text-text-primary tracking-tight">{value}</h3>
        <p className="text-xs font-bold text-text-muted uppercase tracking-widest">{label}</p>
      </div>
    </div>
  );
};
