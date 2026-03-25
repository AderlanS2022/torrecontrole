import React from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  ArrowRight, 
  BrainCircuit, 
  MessageSquare,
  History,
  ChevronRight,
  Search,
  Filter
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { AIRecommendationCard } from '../components/ai/AIRecommendationCard';

export const ValidationPage = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);

  const pendingItems = [
    { 
      id: 1,
      title: 'Divergência em Encargos Sociais', 
      company: 'Tech Solutions Ltda', 
      impact: 'R$ 1.250,00', 
      type: 'Divergência',
      description: 'O valor calculado de FGTS (R$ 12.450,00) diverge do valor informado na importação (R$ 11.200,00).',
      aiInsight: 'Esta divergência ocorre mensalmente devido a uma regra customizada de bônus não mapeada no sistema de origem.'
    },
    { 
      id: 2,
      title: 'Novas Admissões sem Documentação', 
      company: 'Indústrias Metalúrgicas S.A.', 
      impact: '3 Colaboradores', 
      type: 'Pendência',
      description: 'Três novos colaboradores foram importados sem o número do PIS/PASEP obrigatório para o eSocial.',
      aiInsight: 'Recomendamos solicitar os documentos via portal do colaborador antes do fechamento da competência.'
    },
    { 
      id: 3,
      title: 'Variação Salarial Acima de 15%', 
      company: 'Varejo Express', 
      impact: 'R$ 4.800,00', 
      type: 'Alerta',
      description: 'O colaborador Marcos Silva teve um aumento de 22% no salário base sem evento de alteração salarial correspondente.',
      aiInsight: 'Verificamos que houve uma promoção interna aprovada no módulo de RH, mas o evento ainda não foi sincronizado.'
    },
  ];

  const currentItem = pendingItems[selectedItem];

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col space-y-6 animate-in fade-in duration-700">
      <PageHeader 
        title="Central de Validação" 
        subtitle="Revisão master-detail para aprovação rápida de pendências críticas."
        actions={
          <Button variant="success" icon={<CheckCircle2 className="w-4 h-4" />}>Aprovar Competência</Button>
        }
      />

      <div className="flex-1 flex gap-8 overflow-hidden">
        {/* Master List */}
        <div className="w-1/3 flex flex-col space-y-4 overflow-y-auto pr-2 custom-scrollbar">
          <div className="sticky top-0 z-10 bg-app-bg pb-2">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input 
                type="text" 
                placeholder="Filtrar pendências..." 
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-app-border rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500"
              />
            </div>
          </div>

          {pendingItems.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => setSelectedItem(index)}
              className={cn(
                "p-5 rounded-2xl border transition-all cursor-pointer group relative overflow-hidden",
                selectedItem === index 
                  ? "bg-white border-brand-500 shadow-float ring-1 ring-brand-500/10" 
                  : "bg-white border-app-border hover:border-brand-300 hover:shadow-card"
              )}
            >
              {selectedItem === index && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-600"></div>
              )}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant={item.type === 'Divergência' ? 'error' : item.type === 'Pendência' ? 'warning' : 'info'} size="sm">
                    {item.type.toUpperCase()}
                  </Badge>
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">{item.impact}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary group-hover:text-brand-600 transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mt-1">{item.company}</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                  <span className="text-[10px] font-bold text-brand-600">Ver Detalhes</span>
                  <ChevronRight className={cn("w-4 h-4 text-slate-300 transition-all", selectedItem === index ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0")} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail View */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
          <div className="space-y-8 pb-8">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <AlertCircle className="w-32 h-32" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Badge variant="outline">{currentItem.company}</Badge>
                    <h2 className="text-2xl font-black text-text-primary tracking-tight">{currentItem.title}</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">Impacto Financeiro</p>
                    <p className="text-xl font-black text-danger">{currentItem.impact}</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="text-xs font-black text-text-secondary uppercase tracking-widest mb-3">Descrição da Ocorrência</h4>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium">
                    {currentItem.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <Button variant="primary" icon={<CheckCircle2 className="w-4 h-4" />}>Aprovar Item</Button>
                  <Button variant="outline" icon={<MessageSquare className="w-4 h-4" />}>Solicitar Ajuste</Button>
                  <Button variant="ghost" className="text-danger hover:bg-danger/5">Ignorar Exceção</Button>
                </div>
              </div>
            </Card>

            <AIRecommendationCard 
              title="Análise Inteligente de Causa Raiz"
              recommendation={currentItem.aiInsight}
              confidence={96}
              priority={currentItem.type === 'Divergência' ? 'high' : 'medium'}
              onApply={() => {}}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card title="Comparativo Histórico" subtitle="Variação deste item nos últimos 6 meses">
                <div className="space-y-4 mt-4">
                  {[
                    { month: 'Fevereiro', value: 'R$ 1.100,00', status: 'Divergente' },
                    { month: 'Janeiro', value: 'R$ 0,00', status: 'OK' },
                    { month: 'Dezembro', value: 'R$ 1.250,00', status: 'Divergente' },
                  ].map((h, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50/50">
                      <span className="text-xs font-bold text-text-secondary">{h.month}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-text-primary">{h.value}</span>
                        <Badge size="sm" variant={h.status === 'OK' ? 'success' : 'error'}>{h.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card title="Comentários e Notas" subtitle="Histórico de discussões sobre este item">
                <div className="space-y-4 mt-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-[10px] font-bold text-brand-600 shrink-0">AO</div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-text-primary uppercase">Ana Oliveira <span className="text-text-muted font-bold ml-2">Há 2h</span></p>
                      <p className="text-xs text-text-secondary leading-relaxed">Já entrei em contato com o cliente e eles confirmaram que o valor está correto.</p>
                    </div>
                  </div>
                  <div className="relative pt-2">
                    <textarea 
                      placeholder="Adicionar nota técnica..."
                      className="w-full p-4 bg-slate-50 border border-app-border rounded-2xl text-xs focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all"
                      rows={3}
                    ></textarea>
                    <div className="absolute bottom-3 right-3">
                      <Button size="xs" variant="secondary">Salvar Nota</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { cn } from '../utils';
