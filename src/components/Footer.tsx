import React from 'react';
import { BookOpen, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import { FOOTER_DATA } from '../data/copyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] py-10 sm:py-12 text-center text-[#475569]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 mb-3.5">
          <div className="w-7 h-7 rounded-lg bg-[#172554] flex items-center justify-center text-white">
            <BookOpen className="w-4 h-4 text-[#F97316]" />
          </div>
          <span className="font-heading font-extrabold text-sm text-[#172554]">
            {FOOTER_DATA.brandTitle}
          </span>
        </div>

        <p className="text-xs text-gray-500 max-w-md mx-auto mb-6 px-2">
          {FOOTER_DATA.tagline}
        </p>

        {/* Security / Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-8 text-xs font-medium text-gray-600 mb-6 sm:mb-8 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
            <span>Pagamento 100% Seguro</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
            <span>Garantia de 7 Dias</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
            <span>Acesso Imediato</span>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="text-[11px] text-gray-400 space-y-1 px-2">
          <p>© {new Date().getFullYear()} Redação ENEM Completa. Todos os direitos reservados.</p>
          <p>{FOOTER_DATA.disclaimer}</p>
        </div>

      </div>
    </footer>
  );
};
