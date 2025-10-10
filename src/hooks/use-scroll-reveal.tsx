import { useEffect } from 'react';

const STAGGER_STEP = 0.08;
const MAX_STAGGER = 0.48;

export const useScrollReveal = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('section[data-animate], footer[data-animate]')
    );

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let observer: IntersectionObserver | null = null;

    if (reduceMotion) {
      sections.forEach(section => {
        if (section.dataset.animate === 'items') {
          section
            .querySelectorAll<HTMLElement>('[data-animate-item]')
            .forEach(item => item.classList.add('is-visible'));
        }
        section.classList.add('is-visible');
      });
    } else {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const target = entry.target as HTMLElement;
            const mode = target.dataset.animate ?? 'container';

            if (mode === 'items') {
              const items = target.querySelectorAll<HTMLElement>('[data-animate-item]');
              items.forEach((item, index) => {
                item.style.transitionDelay = `${Math.min(index * STAGGER_STEP, MAX_STAGGER)}s`;
                item.classList.add('is-visible');
              });
              target.classList.add('items-visible');
              target.classList.add('is-visible');
            } else {
              target.classList.add('is-visible');
            }

            observer?.unobserve(target);
          });
        },
        { threshold: 0.2, rootMargin: '0px 0px -15% 0px' }
      );

      sections.forEach(section => observer?.observe(section));
    }

    const handleResultsTouch = (event: TouchEvent) => {
      const el = (event.target as HTMLElement).closest('#results .result-pill');
      if (!el) return;
      el.classList.add('touch-hover');
      setTimeout(() => el.classList.remove('touch-hover'), 200);
    };

    const handleStepsTouch = (event: TouchEvent) => {
      const card = (event.target as HTMLElement).closest('#how-it-works .card');
      if (!card) return;
      card.classList.add('touch-hover');
      setTimeout(() => card.classList.remove('touch-hover'), 250);
    };

    document.addEventListener('touchstart', handleResultsTouch, { passive: true });
    document.addEventListener('touchstart', handleStepsTouch, { passive: true });

    return () => {
      observer?.disconnect();
      document.removeEventListener('touchstart', handleResultsTouch);
      document.removeEventListener('touchstart', handleStepsTouch);
    };
  }, []);
};
