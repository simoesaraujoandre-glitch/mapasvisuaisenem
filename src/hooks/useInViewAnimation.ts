import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref to attach to the animated element and a boolean telling
 * whether it's currently in (or near) the viewport.
 *
 * Used to pause CSS marquee animations that are off-screen. Running many
 * simultaneous `animation: ... infinite` tracks (each promoted to its own
 * GPU compositor layer via `will-change: transform`) is expensive on
 * mid/low-end mobile devices, even when the images themselves are tiny.
 * Pausing the ones the user can't see removes that cost with zero visual
 * difference, since a paused-then-resumed marquee is imperceptible.
 */
export function useInViewAnimation<T extends HTMLElement>(rootMargin = '200px') {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, isInView };
}
