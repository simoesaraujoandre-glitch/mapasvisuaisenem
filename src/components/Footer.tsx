import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const openModal = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    setModalContent(title);
  };

  return (
    <footer id="site-footer" className="bg-white text-[#0E2A62] py-8 md:py-10 border-t border-[#0E2A62]/10">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-[#0E2A62]/10">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#F6C945] text-[#0E2A62] flex items-center justify-center font-bold">
              <BookOpen className="w-4 h-4" />
            </div>
            <span className="font-display font-black text-base sm:text-lg text-[#0E2A62]">
              Mapas Visuais <span className="text-[#0E2A62]">ENEM</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center flex-wrap justify-center gap-5 text-xs sm:text-sm font-semibold text-[#0E2A62]/70">
            <a
              href="#termos"
              onClick={(e) => openModal(e, 'Termos de Uso')}
              className="hover:text-[#0E2A62] transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="#privacidade"
              onClick={(e) => openModal(e, 'Política de Privacidade')}
              className="hover:text-[#0E2A62] transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#contato"
              onClick={(e) => openModal(e, 'Contato')}
              className="hover:text-[#0E2A62] transition-colors"
            >
              Contato
            </a>
          </div>
        </div>

        {/* Bottom Legal Disclaimer */}
        <div className="pt-6 text-center max-w-2xl mx-auto text-xs text-[#0E2A62]/55 leading-relaxed font-normal">
          <p className="mb-1.5">
            Este material é independente e não possui vínculo oficial com o INEP ou com o Ministério da Educação. ENEM é um exame oficial do Governo Federal.
          </p>
          <p>© {new Date().getFullYear()} Mapas Visuais ENEM. Todos os direitos reservados.</p>
        </div>

      </div>

      {/* Simple Information Modal */}
      {modalContent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-white text-[#0E2A62] max-w-md w-full rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-150">
            <h3 className="font-display font-black text-xl mb-3 text-[#0E2A62]">{modalContent}</h3>
            <p className="text-sm text-[#0E2A62]/80 leading-relaxed mb-6 font-medium">
              As informações completas de {modalContent.toLowerCase()} e dados do produtor responsável serão fornecidas na plataforma oficial de compra e entrega do material.
            </p>
            <button
              onClick={() => setModalContent(null)}
              className="w-full bg-[#F6C945] text-[#0E2A62] font-black py-3 rounded-xl hover:bg-[#ebce38] transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
