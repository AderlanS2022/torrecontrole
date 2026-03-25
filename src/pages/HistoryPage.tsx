import React from 'react';
import { 
  History as HistoryIcon, 
  Search, 
  Filter, 
  Download,
  User,
  Building2,
  Clock,
  Calendar
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { DataTable } from '../components/shared/DataTable';
import { auditLogs } from '../data/mockData';
import { AuditLog } from '../types';

export const HistoryPage = () => {
  const columns = [
    {
      header: 'Data / Hora',
      accessor: (item: AuditLog) => (
        <div className="flex items-center gap-2 text-xs font-bold text-text-secondary">
          <Clock className="w-3.5 h-3.5 text-text-muted" />
          {item.timestamp}
        </div>
      ),
    },
    {
      header: 'Usuário',
      accessor: (item: AuditLog) => (
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-100 flex items-center justify-center text-[10px] font-black text-brand-600">
            {item.user.split(' ').map(n => n[0]).join('')}
          </div>
          <span className="text-xs font-bold text-text-primary">{item.user}</span>
        </div>
      ),
    },
    {
      header: 'Ação Executada',
      accessor: (item: AuditLog) => <span className="text-sm font-black text-text-primary">{item.action}</span>,
    },
    {
      header: 'Módulo',
      accessor: (item: AuditLog) => <Badge variant="neutral" size="sm">{item.module.toUpperCase()}</Badge>,
      align: 'center' as const,
    },
    {
      header: 'Empresa',
      accessor: (item: AuditLog) => (
        <div className="flex items-center gap-2 text-xs font-bold text-text-secondary">
          <Building2 className="w-3.5 h-3.5 text-text-muted" />
          {item.companyName}
        </div>
      ),
    },
    {
      header: 'Detalhes da Operação',
      accessor: (item: AuditLog) => <p className="text-xs text-text-muted font-medium max-w-xs truncate">{item.details}</p>,
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <PageHeader 
        title="Histórico & Auditoria" 
        subtitle="Rastreabilidade completa de todas as ações realizadas no sistema."
        actions={
          <Button variant="outline" icon={<Download className="w-4 h-4" />}>Exportar Log Completo</Button>
        }
      />

      <Card className="p-4" variant="flat">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[300px] relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-brand-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Pesquisar por usuário, ação ou empresa..." 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-app-border rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all"
            />
          </div>
          <div className="flex gap-3">
            <select className="bg-white border border-app-border rounded-xl text-xs font-bold px-4 py-2.5 outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500">
              <option>Módulo: Todos</option>
              <option>Folha Mensal</option>
              <option>Central de Alertas</option>
              <option>Ponto</option>
            </select>
            <Button variant="outline" icon={<Calendar className="w-4 h-4" />}>Período</Button>
            <Button variant="outline" icon={<Filter className="w-4 h-4" />}>Filtros</Button>
          </div>
        </div>
      </Card>

      <DataTable columns={columns} data={auditLogs} />
    </div>
  );
};
