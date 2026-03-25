import React from 'react';
import { 
  Building2, 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  Calendar, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { DataTable } from '../components/shared/DataTable';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { companies } from '../data/mockData';
import { Company } from '../types';
import { useNavigate } from 'react-router-dom';

export const CompaniesPage = () => {
  const navigate = useNavigate();

  const columns = [
    {
      header: 'Empresa / CNPJ',
      accessor: (item: Company) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
            <Building2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-text-primary group-hover:text-brand-600 transition-colors">{item.name}</span>
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{item.cnpj}</span>
          </div>
        </div>
      ),
    },
    {
      header: 'Competência',
      accessor: (item: Company) => <Badge variant="outline">{item.currentCompetence}</Badge>,
      align: 'center' as const,
    },
    {
      header: 'Status Folha',
      accessor: (item: Company) => (
        <Badge variant={
          item.payrollStatus === 'closed' ? 'success' :
          item.payrollStatus === 'validated' ? 'info' :
          item.payrollStatus === 'processing' ? 'warning' : 'neutral'
        }>
          {item.payrollStatus.toUpperCase()}
        </Badge>
      ),
      align: 'center' as const,
    },
    {
      header: 'Pendências',
      accessor: (item: Company) => (
        <div className="flex items-center justify-center gap-1.5">
          {item.pendingIssues > 0 ? (
            <div className="flex items-center gap-1.5 text-danger">
              <AlertCircle className="w-4 h-4" />
              <span className="text-xs font-bold">{item.pendingIssues} itens</span>
            </div>
          ) : (
            <span className="text-xs text-text-muted">Nenhuma</span>
          )}
        </div>
      ),
      align: 'center' as const,
    },
    {
      header: 'Prazo',
      accessor: (item: Company) => (
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-text-secondary">
          <Calendar className="w-3.5 h-3.5 text-text-muted" />
          {new Date(item.closingDeadline).toLocaleDateString('pt-BR')}
        </div>
      ),
      align: 'center' as const,
    },
    {
      header: 'Analista',
      accessor: (item: Company) => (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-[10px] font-bold text-brand-600">
            {item.analyst.split(' ').map(n => n[0]).join('')}
          </div>
          <span className="text-xs font-bold text-text-secondary">{item.analyst}</span>
        </div>
      ),
    },
    {
      header: '',
      accessor: (item: Company) => (
        <div className="flex items-center justify-end gap-2">
          <Button variant="ghost" size="sm" onClick={(e) => {
            e.stopPropagation();
            navigate(`/empresas/${item.id}`);
          }}>
            Gerenciar
          </Button>
          <button className="p-2 text-text-muted hover:text-text-primary hover:bg-slate-100 rounded-lg transition-all">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      ),
      align: 'right' as const,
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <PageHeader 
        title="Empresas & Clientes" 
        subtitle="Gerencie sua carteira de clientes e acompanhe o status de cada folha."
        actions={
          <>
            <Button variant="outline" icon={<Filter className="w-4 h-4" />}>Filtrar Lista</Button>
            <Button icon={<Plus className="w-4 h-4" />}>Cadastrar Empresa</Button>
          </>
        }
      />

      <Card className="p-4 mb-6" variant="flat">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[300px] relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-brand-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Pesquisar por nome, CNPJ, analista ou status..." 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-app-border rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all"
            />
          </div>
          <div className="flex gap-3">
            <select className="bg-white border border-app-border rounded-xl text-xs font-bold px-4 py-2.5 outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500">
              <option>Status: Todos</option>
              <option>Em Processamento</option>
              <option>Validado</option>
              <option>Fechado</option>
            </select>
            <select className="bg-white border border-app-border rounded-xl text-xs font-bold px-4 py-2.5 outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500">
              <option>Analista: Todos</option>
              <option>Ricardo Silva</option>
              <option>Ana Oliveira</option>
            </select>
          </div>
        </div>
      </Card>

      <DataTable 
        columns={columns} 
        data={companies} 
        onRowClick={(item) => navigate(`/empresas/${item.id}`)}
      />

      <div className="flex items-center justify-between px-2">
        <p className="text-xs font-bold text-text-muted uppercase tracking-widest">
          Mostrando {companies.length} de {companies.length} empresas
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>Anterior</Button>
          <Button variant="outline" size="sm" disabled>Próximo</Button>
        </div>
      </div>
    </div>
  );
};
