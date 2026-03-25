import React from 'react';
import { Search, Bell, User, ChevronDown, Sparkles } from 'lucide-react';
import { cn } from '../../utils';

export const Topbar = () => {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-app-border flex items-center justify-between px-10 sticky top-0 z-40">
      <div className="flex-1 max-w-2xl">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted group-focus-within:text-brand-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Pesquisar por empresas, alertas inteligentes ou colaboradores..." 
            className="w-full pl-12 pr-4 py-3 bg-slate-100/50 border border-transparent rounded-2xl text-sm focus:outline-none focus:bg-white focus:border-brand-500/30 focus:ring-4 focus:ring-brand-500/5 transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-2 py-1 bg-white border border-app-border rounded-lg shadow-sm pointer-events-none">
            <span className="text-[10px] font-bold text-text-muted">⌘</span>
            <span className="text-[10px] font-bold text-text-muted">K</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden xl:flex items-center gap-3 px-4 py-2 bg-ai-50 rounded-xl border border-ai-100">
          <Sparkles className="w-4 h-4 text-ai-600" />
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-ai-700 uppercase tracking-widest">IA Status</span>
            <span className="text-xs font-bold text-ai-900">Processamento Ativo</span>
          </div>
        </div>

        <div className="h-10 w-px bg-app-border"></div>

        <div className="flex items-center gap-4">
          <button className="relative p-2.5 text-text-secondary hover:bg-slate-100 rounded-xl transition-all active:scale-90">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-danger rounded-full border-2 border-white"></span>
          </button>

          <button className="flex items-center gap-3 pl-2 pr-1 py-1 bg-slate-50 border border-app-border rounded-2xl hover:bg-white hover:shadow-card transition-all group">
            <div className="text-right hidden sm:block pl-2">
              <p className="text-xs font-black text-text-primary group-hover:text-brand-600 transition-colors">Aderlan Santos</p>
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Analista Sênior</p>
            </div>
            <div className="w-10 h-10 bg-brand-100 rounded-xl border border-brand-200 flex items-center justify-center text-brand-600 font-bold overflow-hidden shadow-sm">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aderlan" 
                alt="Avatar"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
