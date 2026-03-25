import React from 'react';
import { cn } from '../../utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'ai' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge = ({ 
  children, 
  variant = 'neutral', 
  size = 'md',
  icon,
  className 
}: BadgeProps) => {
  const variants = {
    success: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    warning: 'bg-amber-50 text-amber-700 border-amber-100',
    error: 'bg-rose-50 text-rose-700 border-rose-100',
    info: 'bg-blue-50 text-blue-700 border-blue-100',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
    ai: 'bg-ai-50 text-ai-700 border-ai-100 font-bold',
    outline: 'bg-transparent text-slate-600 border-slate-200',
  };

  const sizes = {
    sm: 'px-1.5 py-0.5 text-[10px]',
    md: 'px-2.5 py-0.5 text-xs',
  };

  return (
    <span className={cn(
      "inline-flex items-center gap-1 rounded-full font-semibold border transition-all",
      variants[variant],
      sizes[size],
      className
    )}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
