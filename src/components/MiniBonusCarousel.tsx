import React from 'react';

interface MiniBonusCarouselProps {
  images: { src: string; alt: string }[];
  title?: string;
}

export const MiniBonusCarousel: React.FC<MiniBonusCarouselProps> = ({
  images,
  title = "Prévia dos Mapas Inclusos",
}) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="w-full mt-4 pt-3.5 border-t border-[#F1F5F9] overflow-hidden pointer-events-none select-none flex flex-col items-center">
      <div className="w-full flex items-center justify-center mb-2.5">
        <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider text-center">
          {title}
        </span>
      </div>

      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
        <div className="animate-marquee-mini gap-2.5 py-1 select-none gpu-accelerated">
          {[...images, ...images, ...images].map((img, idx) => (
            <div
              key={idx}
              className="shrink-0 rounded-lg overflow-hidden border border-[#E2E8F0] bg-white shadow-2xs"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={260}
                height={390}
                className="h-24 sm:h-28 w-auto object-contain block aspect-[3/4]"
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
