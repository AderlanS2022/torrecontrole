import React from 'react';
import { cn } from '../../utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'ai';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  iconRight,
  children,
  disabled,
  ...props
}, ref) => {
  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 shadow-sm',
    secondary: 'bg-slate-800 text-white hover:bg-slate-900 active:bg-black shadow-sm',
    outline: 'bg-white text-text-secondary border border-app-border hover:bg-slate-50 active:bg-slate-100',
    ghost: 'bg-transparent text-text-secondary hover:bg-slate-100 active:bg-slate-200',
    danger: 'bg-danger text-white hover:bg-red-600 active:bg-red-700 shadow-sm',
    ai: 'bg-ai-600 text-white hover:bg-ai-700 active:bg-ai-800 shadow-lg shadow-ai-500/20',
  };

  const sizes = {
    xs: 'px-2 py-1 text-[10px] rounded-sm',
    sm: 'px-3 py-1.5 text-xs rounded-md',
    md: 'px-4 py-2 text-sm rounded-lg',
    lg: 'px-6 py-3 text-base rounded-xl',
    xl: 'px-8 py-4 text-lg rounded-2xl',
  };

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : icon}
      {children}
      {!isLoading && iconRight}
    </button>
  );
});

Button.displayName = 'Button';
