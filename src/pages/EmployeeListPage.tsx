import React from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Users as UsersIcon, 
  ArrowRight, 
  MoreVertical, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Briefcase,
  Download,
  FileText,
  ChevronRight,
  UserCheck,
  UserMinus,
  UserPlus,
  ShieldCheck,
  Printer,
  TrendingUp
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { KpiCard } from '../components/shared/KpiCard';
import { useNavigate } from 'react-router-dom';
import { cn } from '../utils';

export const EmployeeListPage = () => {
  const navigate = useNavigate();

  const employees = [
    { id: '1', name: 'Aderlan Santos', role: 'Arquiteto de Software', dept: 'Tecnologia', status: 'Ativo', reg: '2026001', email: 'aderlan@tech.com', phone: '(71) 99999-9999', admission: '01/01/2024' },
    { id: '2', name: 'Ana Oliveira', role: 'Analista de DP Senior', dept: 'RH / DP', status: 'Ativo', reg: '2026002', email: 'ana.dp@tech.com', phone: '(71) 98888-8888', admission: '15/02/2024' },
    { id: '3', name: 'Ricardo Silva', role: 'Dev Full Stack', dept: 'Tecnologia', status: 'Afastado', reg: '2026003', email: 'ricardo@tech.com', phone: '(71) 97777-7777', admission: '10/03/2024' },
    { id: '4', name: 'Juliana Costa', role: 'Gerente de Projetos', dept: 'Operações', status: 'Ativo', reg: '2026004', email: 'juliana@tech.com', phone: '(71) 96666-6666', admission: '20/03/2024' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <PageHeader 
        title="Gestão de Colaboradores" 
        subtitle="Administre o cadastro completo, contratos e histórico funcional."
        actions={
          <div className="flex gap-3">
            <Button variant="outline" icon={<Printer className="w-4 h-4" />}>Relatórios</Button>
            <Button variant="outline" icon={<Download className="w-4 h-4" />}>Exportar</Button>
            <Button icon={<Plus className="w-4 h-4" />}>Novo Colaborador</Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KpiCard label="Total Ativos" value="142" icon={UserCheck} variant="success" />
        <KpiCard label="Afastados" value="05" icon={UserMinus} variant="warning" />
        <KpiCard label="Admissões (Mês)" value="12" icon={UserPlus} variant="brand" />
        <KpiCard label="Desligamentos (Mês)" value="02" icon={UserMinus} variant="danger" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <Card className="p-4" variant="flat">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex-1 min-w-[300px] relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-brand-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Pesquisar por nome, CPF ou matrícula..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-app-border rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all"
                />
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" icon={<Filter className="w-4 h-4" />}>Filtros</Button>
                <div className="h-10 w-px bg-slate-100 mx-2"></div>
                <Button variant="outline" size="sm">Todos</Button>
                <Button variant="outline" size="sm">Ativos</Button>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {employees.map((emp) => (
              <div key={emp.id} className="group hover:border-brand-500 transition-all cursor-pointer p-0 overflow-hidden bg-white border border-app-border shadow-card rounded-xl" onClick={() => navigate(`/colaboradores/${emp.id}`)}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                        <UsersIcon className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-black text-text-primary group-hover:text-brand-600 transition-colors">{emp.name}</h3>
                          <Badge variant={emp.status === 'Ativo' ? 'success' : 'warning'} size="sm">
                            {emp.status.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-xs font-bold text-text-muted uppercase tracking-wider mt-1">{emp.role} • {emp.dept}</p>
                        <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mt-1">Matrícula: {emp.reg}</p>
                      </div>
                    </div>
                    <button className="p-2 text-text-muted hover:text-brand-600 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-2 text-text-muted">
                      <Mail className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold truncate">{emp.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <Phone className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold">{emp.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Adm: {emp.admission}</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">CLT Integral</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between group-hover:bg-brand-50 transition-colors">
                  <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest">Ver Dossiê Completo</span>
                  <ArrowRight className="w-4 h-4 text-brand-600" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center pt-4">
            <Button variant="ghost" size="sm" className="text-text-muted" icon={<ChevronRight className="w-4 h-4" />}>
              Ver mais colaboradores
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          <Card title="Próximos Vencimentos" variant="outline">
            <div className="space-y-4 mt-4">
              {[
                { name: 'Ricardo Silva', task: 'Fim Experiência (45d)', date: '25/03', status: 'danger' },
                { name: 'Juliana Costa', task: 'Vencimento ASO', date: '28/03', status: 'warning' },
                { name: 'Ana Oliveira', task: 'Férias a Vencer', date: '05/04', status: 'pending' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-app-border bg-slate-50/50">
                  <div className="flex flex-col items-center justify-center w-10 h-10 bg-white rounded-lg border border-app-border shadow-sm">
                    <span className="text-[8px] font-black text-text-muted uppercase tracking-widest">{item.date.split('/')[1]}</span>
                    <span className="text-sm font-black text-brand-600 leading-none">{item.date.split('/')[0]}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-black text-text-primary">{item.name}</p>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{item.task}</p>
                  </div>
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    item.status === 'danger' ? 'bg-rose-500' :
                    item.status === 'warning' ? 'bg-amber-500' : 'bg-brand-500'
                  )}></div>
                </div>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="w-full mt-4 text-text-muted" icon={<ChevronRight className="w-4 h-4" />}>Ver Cronograma</Button>
          </Card>

          <Card title="Insights de Retenção" variant="flat" className="bg-brand-50 border-brand-100">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-black text-brand-900 uppercase tracking-widest">Turnover (Mês)</p>
                <Badge variant="success" size="sm">1.2%</Badge>
              </div>
              <div className="h-2 bg-brand-200 rounded-full overflow-hidden">
                <div className="h-full bg-brand-600 w-[12%]"></div>
              </div>
              <p className="text-[10px] font-bold text-brand-700 leading-relaxed">
                Sua taxa de turnover está 15% abaixo da média do setor. Bom trabalho na retenção de talentos!
              </p>
              <Button variant="ghost" size="sm" className="w-full text-brand-900" icon={<TrendingUp className="w-4 h-4" />}>Ver Detalhes</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
