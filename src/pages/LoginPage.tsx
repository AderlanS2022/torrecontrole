import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Lock, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  BrainCircuit,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('aderlan.santos@ba.docente.senai.br');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Hardcoded demo credentials
      if (email.toLowerCase() === 'aderlan.santos@ba.docente.senai.br' && password === 'admin123') {
        navigate('/dashboard');
      } else {
        setError('E-mail ou senha incorretos. Dica: use admin123');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-500/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-ai-500/5 blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]"></div>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Branding & Value Proposition */}
        <div className="hidden lg:flex flex-col space-y-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-600 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-600/20">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-black text-text-primary tracking-tighter">
              Folha<span className="text-brand-600">Inteligente</span>
              <span className="text-ai-500 ml-1">Pro</span>
            </h1>
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl font-black text-text-primary leading-[1.1] tracking-tight">
              A nova era da <span className="text-brand-600 underline decoration-brand-200 underline-offset-8">gestão de folha</span> com IA.
            </h2>
            <p className="text-lg text-text-secondary font-medium leading-relaxed max-w-md">
              Automatize validações, reduza riscos operacionais e tenha insights preditivos em tempo real.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-3xl border border-app-border shadow-sm space-y-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="font-black text-text-primary text-sm uppercase tracking-widest">Compliance Total</p>
              <p className="text-xs text-text-muted font-medium">Regras de negócio validadas automaticamente.</p>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-app-border shadow-sm space-y-3">
              <div className="w-10 h-10 bg-ai-100 rounded-xl flex items-center justify-center">
                <BrainCircuit className="w-6 h-6 text-ai-600" />
              </div>
              <p className="font-black text-text-primary text-sm uppercase tracking-widest">IA Preditiva</p>
              <p className="text-xs text-text-muted font-medium">Identificação de anomalias antes do fechamento.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-brand-50 rounded-2xl border border-brand-100">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Zap className="w-5 h-5 text-brand-600" />
            </div>
            <p className="text-xs font-bold text-brand-900">
              Mais de <span className="font-black">1.200 empresas</span> já utilizam nossa tecnologia.
            </p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex justify-center">
          <Card className="w-full max-w-md p-10 shadow-float rounded-[2.5rem] border-none bg-white/80 backdrop-blur-xl">
            <div className="text-center mb-10">
              <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
                <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-black text-text-primary tracking-tighter">
                  Folha<span className="text-brand-600">Inteligente</span>
                </h1>
              </div>
              <h3 className="text-2xl font-black text-text-primary tracking-tight">Bem-vindo de volta</h3>
              <p className="text-sm text-text-muted font-medium mt-2">Acesse sua conta corporativa para continuar.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="p-3 rounded-xl bg-danger/10 border border-danger/20 text-danger text-xs font-bold animate-in fade-in slide-in-from-top-2">
                  {error}
                </div>
              )}
              <Input 
                label="E-mail Corporativo"
                placeholder="nome@empresa.com.br"
                icon={<Mail className="w-4 h-4" />}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">Senha de Acesso</label>
                  <button type="button" className="text-[10px] font-black text-brand-600 uppercase tracking-widest hover:underline">Esqueceu?</button>
                </div>
                <Input 
                  placeholder="••••••••"
                  icon={<Lock className="w-4 h-4" />}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center gap-3 py-2">
                <input type="checkbox" id="remember" className="w-4 h-4 rounded border-app-border text-brand-600 focus:ring-brand-500" />
                <label htmlFor="remember" className="text-xs font-bold text-text-secondary cursor-pointer">Manter conectado neste dispositivo</label>
              </div>

              <Button 
                type="submit" 
                className="w-full py-4 text-sm font-black uppercase tracking-widest shadow-lg shadow-brand-600/20"
                loading={loading}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Entrar no Sistema
              </Button>
            </form>

            <div className="mt-10 pt-8 border-t border-slate-100 text-center">
              <p className="text-xs text-text-muted font-medium">
                Problemas com o acesso? <button className="text-brand-600 font-black hover:underline">Contate o suporte técnico</button>
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">
          &copy; 2026 Folha Inteligente Pro • Versão 4.2.0-Enterprise
        </p>
      </div>
    </div>
  );
};
