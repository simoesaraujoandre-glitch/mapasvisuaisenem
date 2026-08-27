import React from 'react';

export const PainPoints: React.FC = () => {
  const cards = [
    {
      id: 'card-1',
      tag: 'EXCESSO DE TEORIA',
      title: 'Estuda muito, mas entende pouco.',
      description:
        'Páginas enormes, explicações longas e fórmulas espalhadas fazem o aluno consumir muito conteúdo sem realmente entender como aplicar aquilo nas questões.',
      image: '/img/pain_point_overload_1787776038013.jpg',
      imageAlt:
        'Estudante cercado por livros, cadernos, folhas e fórmulas, demonstrando sobrecarga e dificuldade para organizar o conteúdo.'
    },
    {
      id: 'card-2',
      tag: 'DECORAR SEM ENTENDER',
      title: 'Decora a fórmula, mas não sabe quando usar.',
      description:
        'Nos exercícios e simulados, basta o contexto da questão mudar para surgir a dúvida: qual fórmula usar e por onde começar?',
      image: '/img/pain_formula_doubt_1787776051035.jpg',
      imageAlt:
        'Estudante diante de uma questão de Matemática, com diferentes fórmulas ao redor, demonstrando dúvida sobre qual caminho seguir.'
    },
    {
      id: 'card-3',
      tag: 'REVISÃO DESORGANIZADA',
      title: 'Na hora de revisar, parece que precisa aprender tudo de novo.',
      description:
        'Quando o conteúdo fica espalhado entre vídeos, apostilas, PDFs e anotações, revisar se torna lento e encontrar o que realmente importa fica muito mais difícil.',
      image: '/img/pain_review_mess_1787776062047.jpg',
      imageAlt:
        'Estudante diante de notebook, PDFs, cadernos e anotações diferentes tentando localizar o conteúdo que precisa revisar.'
    }
  ];

  return (
    <section id="porque-trava" className="bg-[#F8FAFC] py-16 md:py-24 border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Título & Subtítulo */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl leading-tight mb-4 tracking-tight">
            Por que a maioria vai mal na <span className="text-blue-600">Matemática do ENEM</span>?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            Não é só falta de estudo. Alguns erros na preparação tornam a Matemática muito mais difícil do que deveria ser.
          </p>
        </div>

        {/* 3 Cards Explicativos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12 sm:mb-16">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-2xs flex flex-col h-full"
            >
              {/* Parte Superior: Imagem (~40% da altura visual) */}
              <div className="relative w-full h-48 sm:h-52 bg-slate-100 overflow-hidden border-b border-[#E2E8F0]/70 flex-shrink-0">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Parte Inferior: Conteúdo com espaçamento amplo */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  {/* Etiqueta Pequena */}
                  <span className="inline-block text-[11px] font-bold tracking-wider text-blue-600 uppercase mb-3">
                    {card.tag}
                  </span>

                  {/* Título */}
                  <h3 className="font-heading font-bold text-[#0F172A] text-lg sm:text-xl leading-snug mb-3">
                    {card.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fechamento Curto */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-slate-800 font-heading font-semibold text-lg sm:text-xl leading-relaxed">
            A Matemática fica muito mais simples quando você consegue{' '}
            <span className="text-blue-600 font-bold">enxergar o raciocínio</span>.
          </p>
        </div>

      </div>
    </section>
  );
};

