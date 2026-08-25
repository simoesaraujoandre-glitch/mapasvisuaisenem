import React from 'react';
import { MarcaTexto } from './MarcaTexto';

/**
 * Faixa de avatares em scroll contínuo, logo abaixo do Hero, com prova social
 * (contagem de estudantes). Estilo inspirado em páginas de alta conversão:
 * fotos rolando + chamada em negrito logo abaixo.
 *
 * FIX DO BUG DE SCROLL: antes a lista de 6 avatares era duplicada só 1x
 * (12 avatares ≈ 900px). Em telas largas isso é mais estreito que o
 * container (até 1140px), então a "esteira" não preenchia a tela inteira e
 * o loop parecia cortado/vazio. Agora repetimos o conjunto base várias vezes
 * antes de duplicar para o loop, garantindo que a esteira sempre seja bem
 * mais larga que qualquer tela — o scroll fica contínuo e sem buracos.
 */
const AVATARS = [
  '/images/avatars/avatar-01.webp',
  '/images/avatars/avatar-02.webp',
  '/images/avatars/avatar-03.webp',
  '/images/avatars/avatar-04.webp',
  '/images/avatars/avatar-05.webp',
  '/images/avatars/avatar-06.webp',
  '/images/avatars/avatar-07.webp',
  '/images/avatars/avatar-08.webp',
  '/images/avatars/avatar-09.webp',
];

// Repete o conjunto base (garante largura mínima em telas grandes) e só
// depois duplica tudo para fazer o loop de -50% a 0% sem "costura" visível.
const BASE_SET = [...AVATARS, ...AVATARS, ...AVATARS]; // 27 avatares
const LOOP_AVATARS = [...BASE_SET, ...BASE_SET]; // 48 avatares (loop seamless)

export const CommunityStripSection: React.FC = () => {
  return (
    <section
      id="comunidade"
      className="py-8 sm:py-10 bg-[#FBFAF6] border-y border-[#0E2A62]/8 overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto flex flex-col items-center gap-4 sm:gap-5">
        {/* Esteira de avatares */}
        <div className="w-full flex items-center gap-4 sm:gap-6 md:gap-8 relative">
          {/* Fade nas bordas */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-[#FBFAF6] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-[#FBFAF6] to-transparent z-10" />

          <div className="animate-scroll-right flex items-center gap-4 sm:gap-5">
            {LOOP_AVATARS.map((src, idx) => (
              <div
                key={idx}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0"
              >
                <img
                  src={src}
                  alt=""
                  aria-hidden="true"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Prova social em número */}
        <p className="text-center font-display font-black text-lg sm:text-xl md:text-2xl text-[#0E2A62] leading-snug px-4">
          Mais de{' '}
          <MarcaTexto color="yellow" className="px-1.5 py-0">
            5.289 estudantes
          </MarcaTexto>{' '}
          já estão aprendendo de forma visual com os mapas
        </p>
      </div>
    </section>
  );
};
