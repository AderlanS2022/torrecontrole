import React from 'react';
import { cn } from '../../utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  containerClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  icon,
  className,
  containerClassName,
  ...props
}, ref) => {
  return (
    <div className={cn("space-y-1.5", containerClassName)}>
      {label && (
        <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
          {label}
        </label>
      )}
      <div className="relative group">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-brand-500 transition-colors">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-2.5 bg-slate-50 border border-app-border rounded-lg text-sm transition-all outline-none",
            "focus:bg-white focus:ring-2 focus:ring-brand-500/10 focus:border-brand-500",
            "placeholder:text-text-muted",
            icon && "pl-10",
            error && "border-danger focus:ring-danger/10 focus:border-danger",
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs font-medium text-danger">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';
