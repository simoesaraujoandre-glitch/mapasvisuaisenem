import React from 'react';
import { Compass, Target, Lightbulb, PenTool, Layers, BookOpen, FileText, CheckSquare } from 'lucide-react';
import { LEARN_SECTION_DATA, CONTENT_BLOCKS } from '../data/copyData';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const LearnSection: React.FC = () => {
  const { ref: marqueeRef, isInView } = useInViewAnimation<HTMLDivElement>();
  const images = [
    { src: '/images/red10.webp', alt: 'Conteúdo Visual 10', w: 480, h: 339 },
    { src: '/images/red11.webp', alt: 'Conteúdo Visual 11', w: 480, h: 320 },
    { src: '/images/red12.webp', alt: 'Conteúdo Visual 12', w: 480, h: 339 },
    { src: '/images/red13.webp', alt: 'Conteúdo Visual 13', w: 480, h: 339 },
    { src: '/images/red15.webp', alt: 'Conteúdo Visual 15', w: 480, h: 339 },
    { src: '/images/red16.webp', alt: 'Conteúdo Visual 16', w: 480, h: 339 },
  ];

  const blockIcons: Record<string, React.ReactNode> = {
    "bloco-1": <Compass className="w-5 h-5 text-[#F97316]" />,
    "bloco-2": <Target className="w-5 h-5 text-[#F97316]" />,
    "bloco-3": <Lightbulb className="w-5 h-5 text-[#F97316]" />,
    "bloco-4": <PenTool className="w-5 h-5 text-[#F97316]" />,
    "bloco-5": <Layers className="w-5 h-5 text-[#F97316]" />,
    "bloco-6": <BookOpen className="w-5 h-5 text-[#F97316]" />,
    "bloco-7": <FileText className="w-5 h-5 text-[#F97316]" />,
    "bloco-8": <CheckSquare className="w-5 h-5 text-[#F97316]" />,
  };

  return (
    <section id="aprender" className="bg-[#FFF9F5] py-12 sm:py-20 lg:py-24 border-b border-[#E5E7EB]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-block bg-[#FFF1E8] border border-[#F97316]/20 px-3.5 py-1 rounded-full mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
              CONTEÚDOS QUE VOCÊ IRÁ RECEBER
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172554] tracking-tight leading-tight mb-3 sm:mb-4">
            {LEARN_SECTION_DATA.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
            {LEARN_SECTION_DATA.subheadline}
          </p>
        </div>

        {/* 8 BLOCOS DE CONTEÚDO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {CONTENT_BLOCKS.map((block) => (
            <div
              key={block.id}
              id={`block-${block.id}`}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E5E7EB] shadow-2xs hover:border-[#F97316]/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-[#F97316] tracking-wider uppercase bg-[#FFF1E8] px-2.5 py-0.5 rounded-md">
                    {block.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#FFF9F5] flex items-center justify-center">
                    {blockIcons[block.id]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-base font-bold text-[#172554] tracking-tight mb-2">
                  {block.title}
                </h3>

                {/* Small orange accent line */}
                <div className="w-8 h-0.5 bg-[#F97316] rounded-full mb-3.5"></div>

                {/* Topics list */}
                <ul className="space-y-2">
                  {block.topics.map((topic, i) => (
                    <li key={i} className="text-xs sm:text-[13px] text-[#475569] flex items-start gap-2 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]/70 shrink-0 mt-1.5"></span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CARROSSEL DE IMAGENS DOS CONTEÚDOS (GPU ACCELERATED) */}
        <div ref={marqueeRef} className="w-full overflow-hidden pointer-events-none my-4 sm:my-6 [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
          <div
            className="animate-marquee-learn gap-3 sm:gap-4 py-1 select-none gpu-accelerated"
            style={{ animationPlayState: isInView ? 'running' : 'paused' }}
          >
            {[...images, ...images].map((img, index) => (
              <div
                key={index}
                className="shrink-0 rounded-xl overflow-hidden border border-[#E2E8F0] shadow-2xs bg-white"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  className="h-52 sm:h-64 md:h-72 w-auto object-contain block aspect-[3/4]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* FECHAMENTO DA SEÇÃO */}
        <div className="text-center mt-8 sm:mt-12 max-w-2xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg font-bold text-[#172554] bg-white border border-[#E5E7EB] py-3.5 sm:py-4 px-4 sm:px-6 rounded-2xl shadow-2xs">
            {LEARN_SECTION_DATA.closing}
          </p>
        </div>

      </div>
    </section>
  );
};
