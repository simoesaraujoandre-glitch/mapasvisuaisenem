import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Como recebo os Mapas Visuais?',
    answer:
      'O acesso ao material digital é liberado imediatamente após a confirmação da compra e enviado diretamente para o seu e-mail.',
  },
  {
    question: 'Posso acessar pelo celular?',
    answer:
      'Sim. O material foi desenvolvido para visualização nítida tanto no celular quanto no tablet ou computador.',
  },
  {
    question: 'É uma apostila tradicional?',
    answer:
      'Não. O conteúdo foi estruturado em Mapas Visuais direto ao ponto, com um assunto por página, esquemas visuais, exemplos e destaques para você não perder tempo com textos densos.',
  },
  {
    question: 'Quais matérias estão incluídas no material principal?',
    answer:
      'O material principal contém 80 Mapas Visuais de Matemática e 80 Mapas Visuais de Linguagens, totalizando 160 mapas.',
  },
  {
    question: 'O material de Redação está incluso?',
    answer:
      'Sim, no Plano Completo os Mapas Visuais de Redação estão incluídos como bônus gratuito, além dos 50 Exercícios de Fixação e do Plano de Revisão ENEM.',
  },
  {
    question: 'Preciso já dominar os conteúdos para aproveitar os mapas?',
    answer:
      'Não. Os mapas foram pensados para ajudar você a entender o conteúdo desde os fundamentos até os assuntos mais exigidos pelo ENEM.',
  },
  {
    question: 'Os Mapas Visuais garantem que eu vou tirar 900+ no ENEM?',
    answer:
      'Nenhum material pode garantir uma nota, porque o resultado depende do seu estudo, prática e desempenho no dia da prova. Os Mapas Visuais foram criados para ajudar você a entender, memorizar e revisar com mais facilidade, colocando você em condições muito melhores para buscar uma nota alta.',
  },
  {
    question: 'Como funciona a garantia de 7 dias?',
    answer:
      'Você tem 7 dias para testar todo o material. Se achar que essa forma visual de estudar não ajudou na sua preparação, basta solicitar o reembolso dentro desse prazo.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FF] text-[#0E2A62] font-black text-xs tracking-wider uppercase mb-3 sm:mb-3.5 border border-[#0E2A62]/10">
            <HelpCircle className="w-3.5 h-3.5 text-[#0E2A62]" />
            <span>PERGUNTAS FREQUENTES</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0E2A62] tracking-tight">
            Ficou com alguma dúvida?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#0E2A62]/70 mt-2 sm:mt-2.5 font-medium">
            Veja as respostas para as perguntas mais comuns sobre o material
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-2.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-[14px] bg-white border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#0E2A62]/30 shadow-sm ring-1 ring-[#0E2A62]/10'
                    : 'border-[#EAF4FF] shadow-2xs hover:border-[#0E2A62]/20'
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 text-left flex items-center justify-between gap-3 font-display font-extrabold text-sm sm:text-base md:text-lg text-[#0E2A62] focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#F6C945] text-[#0E2A62]' : 'bg-[#EAF4FF] text-[#0E2A62]'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-0.5 text-xs sm:text-sm md:text-base text-[#0E2A62]/85 font-medium leading-relaxed border-t border-[#0E2A62]/5 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
