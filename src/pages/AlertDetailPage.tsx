import React from 'react';
import { 
  ArrowLeft, 
  BrainCircuit, 
  CheckCircle2, 
  XCircle, 
  MessageSquare, 
  Share2,
  User,
  Building2,
  Calendar,
  History,
  Zap
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useParams, useNavigate } from 'react-router-dom';
import { alerts } from '../data/mockData';

export const AlertDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const alert = alerts.find(a => a.id === id) || alerts[0];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <button 
          onClick={() => navigate('/alertas')}
          className="flex items-center gap-2 text-text-muted hover:text-text-primary font-bold text-xs uppercase tracking-widest transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Central de Alertas
        </button>
        <div className="flex gap-3">
          <Button variant="outline" icon={<Share2 className="w-4 h-4" />}>Encaminhar</Button>
          <Button variant="secondary" icon={<CheckCircle2 className="w-4 h-4" />}>Marcar como Revisado</Button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Badge variant={alert.priority === 'critical' ? 'error' : 'warning'} size="md">
            {alert.priority.toUpperCase()}
          </Badge>
          <Badge variant="outline" size="md">{alert.category === 'time' ? 'PONTO' : 'OPERACIONAL'}</Badge>
        </div>
        <h1 className="text-4xl font-black text-text-primary tracking-tight leading-none">{alert.title}</h1>
        <p className="text-sm text-text-secondary font-medium">Identificado pelo motor de IA em {alert.date}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <Card title="Análise da Ocorrência" variant="flat">
            <p className="text-base text-text-secondary leading-relaxed font-medium">
              {alert.description}
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 bg-white rounded-2xl border border-app-border shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-4 h-4 text-text-muted" />
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Empresa Afetada</span>
                </div>
                <p className="text-base font-black text-text-primary">{alert.companyName}</p>
              </div>
              {alert.employeeName && (
                <div className="p-5 bg-white rounded-2xl border border-app-border shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <User className="w-4 h-4 text-text-muted" />
                    <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Colaborador Envolvido</span>
                  </div>
                  <p className="text-base font-black text-text-primary">{alert.employeeName}</p>
                </div>
              )}
            </div>
          </Card>

          <Card variant="ai" className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <BrainCircuit className="w-48 h-48 text-ai-500" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-ai-100 rounded-xl">
                  <Zap className="w-6 h-6 text-ai-600" />
                </div>
                <h3 className="text-xl font-black text-ai-900 tracking-tight">Recomendação Inteligente</h3>
              </div>
              <p className="text-lg text-ai-900/80 leading-relaxed font-medium italic">
                "{alert.aiRecommendation}"
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="ai" icon={<CheckCircle2 className="w-4 h-4" />}>Aplicar Ajuste Sugerido</Button>
                <Button variant="outline" className="bg-white/50 border-ai-200 text-ai-700">Verificar Histórico Similar</Button>
              </div>
            </div>
          </Card>

          <Card title="Ações de Resolução">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="p-6 rounded-2xl border border-app-border hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-left group">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="font-black text-text-primary uppercase text-xs tracking-widest mb-1">Aprovar</p>
                <p className="text-xs text-text-muted font-medium">Validar lançamento como correto no sistema.</p>
              </button>
              <button className="p-6 rounded-2xl border border-app-border hover:border-danger hover:bg-danger/5 transition-all text-left group">
                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <XCircle className="w-6 h-6 text-danger" />
                </div>
                <p className="font-black text-text-primary uppercase text-xs tracking-widest mb-1">Solicitar Ajuste</p>
                <p className="text-xs text-text-muted font-medium">Devolver para correção pelo responsável.</p>
              </button>
              <button className="p-6 rounded-2xl border border-app-border hover:border-brand-500 hover:bg-brand-50/50 transition-all text-left group">
                <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-brand-600" />
                </div>
                <p className="font-black text-text-primary uppercase text-xs tracking-widest mb-1">Observação</p>
                <p className="text-xs text-text-muted font-medium">Adicionar nota técnica interna ao log.</p>
              </button>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <Card title="Linha do Tempo" subtitle="Rastreabilidade do alerta">
            <div className="space-y-8 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-slate-100 mt-4">
              {[
                { date: '22/03 14:20', user: 'Sistema AI', action: 'Anomalia detectada via motor de regras' },
                { date: '22/03 15:10', user: 'IA Engine', action: 'Sugestão de resolução gerada' },
                { date: '23/03 09:00', user: 'Aderlan Santos', action: 'Alerta visualizado e em análise' },
              ].map((item, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-brand-500 shadow-sm"></div>
                  <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">{item.date}</p>
                  <p className="text-sm font-bold text-text-primary leading-tight">{item.action}</p>
                  <p className="text-[10px] font-bold text-brand-600 uppercase tracking-wider mt-1">por {item.user}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Contexto da Empresa" variant="flat">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Competência</span>
                <span className="text-sm font-black text-text-primary">Março / 2026</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Status Folha</span>
                <Badge variant="warning">PROCESSANDO</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Analista</span>
                <span className="text-sm font-black text-text-primary">Ricardo Silva</span>
              </div>
              <hr className="border-slate-200" />
              <Button variant="outline" className="w-full bg-white" icon={<Calendar className="w-4 h-4" />}>
                Abrir Folha Completa
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
