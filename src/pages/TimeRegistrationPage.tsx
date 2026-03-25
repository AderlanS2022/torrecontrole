import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  MapPin, 
  Smartphone, 
  CheckCircle2, 
  ArrowLeft,
  Fingerprint,
  Coffee,
  LogOut,
  ShieldCheck
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export const TimeRegistrationPage = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAction = (action: string) => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-500 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-ai-500 blur-[100px]"></div>
      </div>

      <div className="w-full max-w-lg relative z-10">
        <button 
          onClick={() => navigate('/ponto')}
          className="flex items-center gap-2 text-slate-500 hover:text-white font-black text-[10px] uppercase tracking-[0.2em] mb-10 transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar ao Painel Corporativo
        </button>

        <Card className="bg-white rounded-[3rem] p-10 shadow-2xl relative overflow-hidden border-none">
          <AnimatePresence>
            {showSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute inset-x-0 top-0 bg-emerald-500 text-white py-4 flex items-center justify-center gap-3 z-20 shadow-lg"
              >
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-black text-sm uppercase tracking-widest">Registro Confirmado</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-center space-y-4 mb-12">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-brand-100 rounded-[2rem] flex items-center justify-center mx-auto overflow-hidden border-4 border-slate-50 shadow-inner">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aderlan" 
                  alt="Avatar"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-xl border-4 border-white flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-black text-text-primary tracking-tight">Aderlan Santos</h2>
              <p className="text-xs font-bold text-text-muted uppercase tracking-[0.15em] mt-1">Analista Sênior • Tech Solutions</p>
            </div>
          </div>

          <div className="text-center mb-14">
            <p className="text-7xl font-black text-text-primary tracking-tighter leading-none">
              {currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
              <span className="text-3xl text-brand-500 ml-1">
                {currentTime.toLocaleTimeString('pt-BR', { second: '2-digit' })}
              </span>
            </p>
            <p className="text-xs font-black text-text-muted uppercase tracking-[0.3em] mt-4">
              {currentTime.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' })}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-12">
            <button 
              onClick={() => handleAction('Entrada')}
              className="flex flex-col items-center gap-4 p-8 rounded-[2.5rem] bg-brand-50 text-brand-600 hover:bg-brand-600 hover:text-white transition-all group shadow-sm active:scale-95"
            >
              <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-brand-500 transition-colors">
                <Fingerprint className="w-10 h-10" />
              </div>
              <span className="font-black text-xs uppercase tracking-widest">Entrada</span>
            </button>
            <button 
              onClick={() => handleAction('Saída')}
              className="flex flex-col items-center gap-4 p-8 rounded-[2.5rem] bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white transition-all group shadow-sm active:scale-95"
            >
              <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-slate-800 transition-colors">
                <LogOut className="w-10 h-10" />
              </div>
              <span className="font-black text-xs uppercase tracking-widest">Saída</span>
            </button>
            <button 
              onClick={() => handleAction('Intervalo')}
              className="flex flex-col items-center gap-4 p-8 rounded-[2.5rem] bg-amber-50 text-amber-600 hover:bg-amber-500 hover:text-white transition-all group shadow-sm active:scale-95"
            >
              <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-amber-400 transition-colors">
                <Coffee className="w-10 h-10" />
              </div>
              <span className="font-black text-xs uppercase tracking-widest">Intervalo</span>
            </button>
            <button 
              onClick={() => handleAction('Retorno')}
              className="flex flex-col items-center gap-4 p-8 rounded-[2.5rem] bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all group shadow-sm active:scale-95"
            >
              <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-emerald-500 transition-colors">
                <Clock className="w-10 h-10" />
              </div>
              <span className="font-black text-xs uppercase tracking-widest">Retorno</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 text-brand-500" />
              </div>
              <div>
                <p className="text-[10px] font-black text-text-muted uppercase tracking-widest">Localização Verificada</p>
                <p className="text-sm font-bold text-text-primary">Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
              Último registro: <span className="text-white">08:02 - Entrada</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
