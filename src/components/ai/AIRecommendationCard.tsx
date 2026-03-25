import React from 'react';
import { BrainCircuit, Sparkles, TrendingUp } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { cn } from '../../utils';

interface AIRecommendationCardProps {
  title: string;
  recommendation: string;
  confidence: number;
  priority: 'high' | 'medium' | 'low';
  onApply?: () => void;
  className?: string;
}

export const AIRecommendationCard = ({
  title,
  recommendation,
  confidence,
  priority,
  onApply,
  className
}: AIRecommendationCardProps) => {
  const priorityConfig = {
    high: { label: 'Prioridade Alta', color: 'error' as const },
    medium: { label: 'Prioridade Média', color: 'warning' as const },
    low: { label: 'Prioridade Baixa', color: 'info' as const },
  };

  return (
    <Card variant="ai" className={cn("relative overflow-hidden group", className)}>
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <BrainCircuit className="w-24 h-24 text-ai-500" />
      </div>

      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-ai-100 rounded-lg">
              <Sparkles className="w-4 h-4 text-ai-600" />
            </div>
            <span className="text-xs font-bold text-ai-700 uppercase tracking-widest">IA Insight</span>
          </div>
          <Badge variant="ai" size="sm">
            {confidence}% Confiança
          </Badge>
        </div>

        <div className="space-y-2">
          <h4 className="text-base font-bold text-text-primary">{title}</h4>
          <p className="text-sm text-text-secondary leading-relaxed">
            {recommendation}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Badge variant={priorityConfig[priority].color} size="sm">
            {priorityConfig[priority].label}
          </Badge>
          {onApply && (
            <Button variant="ai" size="sm" onClick={onApply}>
              Aplicar Sugestão
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
