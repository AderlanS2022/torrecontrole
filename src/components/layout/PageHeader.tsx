import React from 'react';
import { cn } from '../../utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
}

export const PageHeader = ({ title, subtitle, actions, className }: PageHeaderProps) => {
  return (
    <div className={cn("flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8", className)}>
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-text-secondary font-medium">
            {subtitle}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-3 shrink-0">
          {actions}
        </div>
      )}
    </div>
  );
};
