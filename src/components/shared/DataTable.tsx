import React from 'react';
import { cn } from '../../utils';

interface DataTableProps<T> {
  columns: {
    header: string;
    accessor: keyof T | ((item: T) => React.ReactNode);
    className?: string;
    align?: 'left' | 'center' | 'right';
  }[];
  data: T[];
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
  emptyMessage?: string;
}

export function DataTable<T>({
  columns,
  data,
  onRowClick,
  isLoading,
  emptyMessage = "Nenhum registro encontrado."
}: DataTableProps<T>) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-app-border bg-white shadow-card">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/80 border-b border-app-border">
              {columns.map((col, i) => (
                <th 
                  key={i} 
                  className={cn(
                    "px-6 py-4 text-[10px] font-black text-text-muted uppercase tracking-widest",
                    col.align === 'center' && "text-center",
                    col.align === 'right' && "text-right",
                    col.className
                  )}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="animate-pulse">
                  {columns.map((_, j) => (
                    <td key={j} className="px-6 py-4">
                      <div className="h-4 bg-slate-100 rounded w-full"></div>
                    </td>
                  ))}
                </tr>
              ))
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center">
                  <p className="text-sm text-text-muted font-medium">{emptyMessage}</p>
                </td>
              </tr>
            ) : (
              data.map((item, i) => (
                <tr 
                  key={i} 
                  onClick={() => onRowClick?.(item)}
                  className={cn(
                    "transition-colors group",
                    onRowClick ? "cursor-pointer hover:bg-brand-50/30" : "hover:bg-slate-50/50"
                  )}
                >
                  {columns.map((col, j) => (
                    <td 
                      key={j} 
                      className={cn(
                        "px-6 py-4 text-sm text-text-secondary font-medium",
                        col.align === 'center' && "text-center",
                        col.align === 'right' && "text-right",
                        col.className
                      )}
                    >
                      {typeof col.accessor === 'function' 
                        ? col.accessor(item) 
                        : (item[col.accessor] as React.ReactNode)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
