import { useEffect } from 'react';

const REVEAL_SELECTOR = '.reveal-section, .reveal-item';
const STAGGER_SELECTOR = '.reveal-item';
const TRANSITION_STEP = 0.09;
const TRANSITION_MAX = 0.45;

export const useScrollReveal = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    if (targets.length === 0) return;

    const staggerItems = Array.from(document.querySelectorAll<HTMLElement>(STAGGER_SELECTOR));
    const staggerGroups = new Map<HTMLElement, HTMLElement[]>();

    staggerItems.forEach(item => {
      const parent = item.parentElement;
      if (!parent) return;
      const list = staggerGroups.get(parent) ?? [];
      list.push(item);
      staggerGroups.set(parent, list);
    });

    staggerGroups.forEach(items => {
      items.forEach((item, index) => {
        const delay = Math.min(index * TRANSITION_STEP, TRANSITION_MAX);
        item.style.transitionDelay = `${delay}s`;
      });
    });

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    targets.forEach(el => {
      el.classList.add('is-reveal-ready');
    });

    const revealImmediately = () => {
      targets.forEach(el => {
        el.classList.add('is-reveal-visible');
        el.classList.remove('is-reveal-ready');
        el.style.transitionDelay = '0s';
      });
    };

    if (reduceMotionQuery.matches) {
      revealImmediately();
      return;
    }

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

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          element.classList.add('is-reveal-visible');
          element.classList.remove('is-reveal-ready');
          observer.unobserve(element);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -12% 0px' }
    );

    targets.forEach(el => observer.observe(el));

    const handlePreferenceChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        observer.disconnect();
        revealImmediately();
      } else {
        targets
          .filter(el => !el.classList.contains('is-reveal-visible'))
          .forEach(el => {
            el.style.transitionDelay = el.classList.contains('reveal-item') ? el.style.transitionDelay : '0s';
            observer.observe(el);
          });
      }
    };

    reduceMotionQuery.addEventListener('change', handlePreferenceChange);

    return () => {
      observer.disconnect();
      reduceMotionQuery.removeEventListener('change', handlePreferenceChange);
      document.removeEventListener('touchstart', handleResultsTouch);
      document.removeEventListener('touchstart', handleStepsTouch);
    };
  }, []);
};
