import React from 'react';
import { Zap, ShieldCheck, Download } from 'lucide-react';

interface FinalCtaProps {
  onCtaClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onCtaClick }) => {
  return (
    <section id="cta-final" className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle radial accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7FAFF] to-white pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center">
        
        {/* Container Box */}
        <div className="bg-white border-2 border-blue-100 rounded-3xl p-8 sm:p-12 shadow-sm relative">
          
          {/* Main Title */}
          <h2 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl leading-tight mb-5 max-w-2xl mx-auto">
            Chega de olhar para uma questão de <span className="text-blue-600">Matemática do ENEM</span> e não saber por onde começar.
          </h2>

          {/* Subtext */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto mb-8">
            Estude os conteúdos de uma forma visual, organizada e descomplicada e se prepare para chegar muito mais confiante na prova.
          </p>

          {/* Highlight Price text */}
          <div className="inline-block bg-blue-50 border border-blue-200/80 px-6 py-2.5 rounded-2xl mb-8">
            <p className="text-base sm:text-lg font-bold text-slate-800">
              Comece hoje por apenas <span className="text-blue-600 text-xl sm:text-2xl font-extrabold">R$ 10</span>.
            </p>
          </div>

          {/* Big CTA Button */}
          <div className="max-w-md mx-auto mb-5">
            <button
              onClick={onCtaClick}
              className="w-full py-4 px-8 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-heading font-bold text-base sm:text-lg rounded-xl shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all cursor-pointer text-center flex items-center justify-center gap-3"
            >
              <span>QUERO DESTRAVAR A MATEMÁTICA</span>
            </button>
          </div>

          {/* Support text below button */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Material digital • Acesso imediato • Garantia de 7 dias
          </p>

        </div>

      </div>
    </section>
  );
};
