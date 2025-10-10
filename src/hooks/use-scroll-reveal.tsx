import { useEffect } from 'react';

const REVEAL_SELECTOR = '[data-reveal]';
const GROUP_SELECTOR = '[data-reveal-parent]';

const parseNumber = (value: string | undefined, fallback: number) => {
  if (!value) return fallback;
  const parsed = Number.parseFloat(value);
  return Number.isNaN(parsed) ? fallback : parsed;
};

export const useScrollReveal = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    if (elements.length === 0) return;

    const groups = Array.from(document.querySelectorAll<HTMLElement>(GROUP_SELECTOR));
    groups.forEach(group => {
      const step = parseNumber(group.dataset.revealStep, 0.08);
      const max = parseNumber(group.dataset.revealMax, 0.56);
      const items = group.querySelectorAll<HTMLElement>(':scope > [data-reveal="item"]');

      items.forEach((item, index) => {
        const delay = Math.min(index * step, max);
        item.style.transitionDelay = `${delay}s`;
      });
    });

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    elements.forEach(el => {
      el.classList.add('reveal-ready');
    });

    const revealImmediately = () => {
      elements.forEach(el => {
        el.classList.add('reveal-visible');
        el.classList.remove('reveal-ready');
        if (reduceMotionQuery.matches) {
          el.style.transitionDelay = '0s';
        }
      });
    };

    const handleResultsTouch = (event: TouchEvent) => {
      const target = (event.target as HTMLElement).closest(
        '#results .metric-pill, #results .pill, #results .card, #results .stat, #results .result-pill'
      );
      if (!target) return;
      target.classList.add('touch-hover');
      window.setTimeout(() => target.classList.remove('touch-hover'), 180);
    };

    const handleStepsTouch = (event: TouchEvent) => {
      const card = (event.target as HTMLElement).closest('#how-it-works .card');
      if (!card) return;
      card.classList.add('touch-hover');
      window.setTimeout(() => card.classList.remove('touch-hover'), 250);
    };

    document.addEventListener('touchstart', handleResultsTouch, { passive: true });
    document.addEventListener('touchstart', handleStepsTouch, { passive: true });

    let observer: IntersectionObserver | null = null;

    if (reduceMotionQuery.matches) {
      revealImmediately();
    } else {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLElement;
          target.classList.add('reveal-visible');
          target.classList.remove('reveal-ready');
          target.style.transitionDelay = target.style.transitionDelay || '0s';
          observer?.unobserve(target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -15% 0px' });

      elements.forEach(el => observer?.observe(el));
    }

    const handlePreferenceChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        observer?.disconnect();
        observer = null;
        revealImmediately();
      } else {
        observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const target = entry.target as HTMLElement;
            target.classList.add('reveal-visible');
            target.classList.remove('reveal-ready');
            target.style.transitionDelay = target.style.transitionDelay || '0s';
            observer?.unobserve(target);
          });
        }, { threshold: 0.12, rootMargin: '0px 0px -15% 0px' });

        elements
          .filter(el => !el.classList.contains('reveal-visible'))
          .forEach(el => observer?.observe(el));
      }
    };

    reduceMotionQuery.addEventListener('change', handlePreferenceChange);

    return () => {
      observer?.disconnect();
      reduceMotionQuery.removeEventListener('change', handlePreferenceChange);
      document.removeEventListener('touchstart', handleResultsTouch);
      document.removeEventListener('touchstart', handleStepsTouch);
    };
  }, []);
};
