import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  CalendarDays, 
  BellRing, 
  CheckCircle2, 
  History, 
  Clock, 
  BarChart3,
  LogOut,
  ChevronRight,
  Users,
  Briefcase,
  AlertCircle,
  ClipboardList,
  ShieldAlert,
  Zap,
  TrendingUp,
  Activity,
  UserCheck
} from 'lucide-react';
import { cn } from '../../utils';

const navGroups = [
  {
    title: 'Estratégico',
    items: [
      { icon: Zap, label: 'Torre de Controle', path: '/torre-controle' },
      { icon: Activity, label: 'Saúde da Carteira', path: '/carteira/saude-operacional' },
      { icon: BarChart3, label: 'Diretoria', path: '/diretoria' },
    ]
  },
  {
    title: 'Operacional',
    items: [
      { icon: AlertCircle, label: 'Central de Pendências', path: '/carteira/pendencias' },
      { icon: Clock, label: 'Gestão de SLA', path: '/carteira/sla' },
      { icon: UserCheck, label: 'Carga dos Analistas', path: '/operacao/analistas' },
    ]
  },
  {
    title: 'Módulos ERP',
    items: [
      { icon: Building2, label: 'Empresas', path: '/empresas' },
      { icon: Users, label: 'Colaboradores', path: '/colaboradores' },
      { icon: CalendarDays, label: 'Competências', path: '/competencias' },
      { icon: Briefcase, label: 'Processos DP', path: '/processos' },
      { icon: Clock, label: 'Ponto Eletrônico', path: '/ponto' },
    ]
  },
  {
    title: 'Sistema',
    items: [
      { icon: BellRing, label: 'Alertas IA', path: '/alertas' },
      { icon: History, label: 'Audit Log', path: '/historico' },
    ]
  }
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-slate-400 flex flex-col fixed inset-y-0 left-0 z-50 border-r border-white/5">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-600/20">
          <span className="text-white font-black text-2xl">F</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white font-black text-lg leading-none tracking-tight">FolhaPro</span>
          <span className="text-[10px] font-bold text-brand-400 uppercase tracking-widest mt-1 text-nowrap">Enterprise ERP</span>
        </div>
      </div>

      <div className="flex-1 px-4 py-6 space-y-8 overflow-y-auto scrollbar-hide">
        {navGroups.map((group) => (
          <div key={group.title} className="space-y-1">
            <p className="px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">{group.title}</p>
            {group.items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl transition-all group",
                  isActive 
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-900/40" 
                    : "hover:bg-white/5 hover:text-white"
                )}
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <item.icon className={cn("w-5 h-5 transition-colors", isActive ? "text-white" : "text-slate-500 group-hover:text-brand-400")} />
                      <span className="font-bold text-sm">{item.label}</span>
                    </div>
                    <ChevronRight className={cn("w-4 h-4 transition-all opacity-0", isActive ? "opacity-100 translate-x-0" : "group-hover:opacity-50 -translate-x-2 group-hover:translate-x-0")} />
                  </>
                )}
              </NavLink>
            ))}
          </div>
        ))}
      </div>

      <div className="p-6 mt-auto">
        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 mb-6">
          <p className="text-xs font-bold text-white mb-1">Suporte Premium</p>
          <p className="text-[10px] text-slate-500 leading-relaxed mb-3">Atendimento prioritário disponível 24/7.</p>
          <button className="w-full py-2 bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold rounded-lg transition-colors">
            Falar com Consultor
          </button>
        </div>

        <NavLink
          to="/login"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-danger/10 hover:text-danger transition-all group"
        >
          <LogOut className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
          <span className="font-bold text-sm">Sair do Sistema</span>
        </NavLink>
      </div>
    </aside>
  );
};
