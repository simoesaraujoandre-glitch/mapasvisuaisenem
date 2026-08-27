import React from 'react';
import { ShieldCheck, Lock, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8FAFC] border-t border-slate-200 py-12 text-slate-500 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-heading font-bold text-slate-900 text-base">
              Matemática <span className="text-blue-600">Visual</span> ENEM
            </span>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantia de 7 Dias</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-blue-600" />
              <span>Ambiente Criptografado SSL</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Acesso Imediato</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 text-center text-[11px] text-slate-400 space-y-2">
          <p>
            © {new Date().getFullYear()} Matemática Visual ENEM. Todos os direitos reservados.
          </p>
          <p className="max-w-2xl mx-auto text-slate-400">
            Este produto não garante a obtenção de resultados específicos no ENEM. As notas dependem da dedicação, prática e estudo individual de cada estudante. Todas as marcas registradas são de propriedade de seus respectivos titulares.
          </p>
        </div>
      </div>
    </footer>
  );
};
