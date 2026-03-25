import React from 'react';
import { cn } from '../../utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  headerAction?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'ai' | 'flat' | 'outline';
  onClick?: () => void;
}

export const Card = ({ 
  children, 
  className, 
  title, 
  subtitle, 
  headerAction, 
  footer,
  variant = 'default',
  onClick
}: CardProps) => {
  const variants = {
    default: 'bg-white border-app-border shadow-card',
    ai: 'bg-gradient-to-br from-white to-ai-50/30 border-ai-100 shadow-card ring-1 ring-ai-500/5',
    flat: 'bg-slate-50 border-transparent shadow-none',
    outline: 'bg-transparent border-app-border shadow-none',
  };

  return (
    <div 
      className={cn(
        "rounded-xl border overflow-hidden transition-all",
        variants[variant],
        className
      )}
      onClick={onClick}
    >
      {(title || subtitle || headerAction) && (
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-4">
          <div className="space-y-0.5">
            {title && <h3 className="text-base font-bold text-text-primary">{title}</h3>}
            {subtitle && <p className="text-xs text-text-muted">{subtitle}</p>}
          </div>
          {headerAction && <div className="shrink-0">{headerAction}</div>}
        </div>
      )}
      <div className="p-6">{children}</div>
      {footer && (
        <div className="px-6 py-3 bg-slate-50/50 border-t border-slate-100">
          {footer}
        </div>
      )}
    </div>
  );
};
