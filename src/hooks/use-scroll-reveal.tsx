import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-inview');
          // reveal-once: don't hide again
          if (e.target.hasAttribute('data-reveal-once')) io.unobserve(e.target);
        } else {
          // if no reveal-once, animation can replay
          if (!e.target.hasAttribute('data-reveal-once')) {
            e.target.classList.remove('is-inview');
          }
        }
      });
    }, { root: null, threshold: 0.1 });

    // Target selectors: sections, cards, titles, buttons
    const selectors = [
      'section', '.card', '.pill', '.feature', '.stat', '.testimonial',
      'h1', 'h2', 'h3', 'h4', 'p', '.btn', '.button', '.cta', '.nav-item',
      '#hero', '#how-it-works', '#try', '#services', '#results', '#faq', 'footer'
    ];

    // Auto-mark elements: if no data-reveal, give default "up"
    document.querySelectorAll(selectors.join(',')).forEach(el => {
      // ignore Spline canvas/iframe to prevent gesture/perf issues
      if (el.closest('.spline-hero, .spline, .spline-canvas, .no-reveal')) return;

      if (!el.hasAttribute('data-reveal') &&
          !el.classList.contains('reveal') &&
          !el.hasAttribute('data-stagger')) {
        el.setAttribute('data-reveal', 'up');
        el.setAttribute('data-reveal-once', ''); // plays once
      }
      io.observe(el);
    });

    // Stagger for grids/lists
    document.querySelectorAll(
      '#services .grid, #results .grid, .cards, .pill-grid, .features, .faq-list, .testimonials'
    ).forEach(group => {
      group.setAttribute('data-stagger', '');
      // delays for children
      Array.from(group.children).forEach((child, i) => {
        (child as HTMLElement).style.transitionDelay = `${Math.min(i * 0.08, 0.6)}s`;
      });
      io.observe(group);
    });

    return () => {
      io.disconnect();
    };
  }, []);
};
