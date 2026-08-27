import { useEffect } from 'react';

/**
 * Comportamento padrão para modais/overlays:
 * - Fecha ao pressionar Esc
 * - Trava o scroll do body enquanto o modal estiver aberto (evita "scroll fantasma" atrás do overlay)
 * - Restaura o scroll ao fechar/desmontar
 *
 * @param isOpen se o modal está aberto
 * @param onClose callback chamado ao pressionar Esc
 */
export function useModalBehavior(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);
}
