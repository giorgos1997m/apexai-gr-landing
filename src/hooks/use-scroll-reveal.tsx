import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    // Target ONLY specific elements inside sections, not whole sections
    const groups = [
      /* Hero text & CTAs */
      '#hero .hero-content h1, #hero .hero-content h2, #hero .hero-content p, #hero .hero-content .btn, #hero .hero-content .button, #hero .hero-content .cta',
      '#hero .grid > div',
      /* Industries */
      '#industries h2, #industries p, #industries .card',
      /* Services */
      '#services h2, #services h3, #services .card, #services li',
      /* Results */
      '#results h3, #results .metric-pill, #results .pill, #results .card, #results .stat, #results .result-pill',
      /* Steps/Try */
      '#how-it-works h2, #how-it-works .card, #try .card, #try .btn',
      /* FAQ */
      '#faq h2, #faq .faq-item',
      /* Testimonials */
      '.testimonials h2, .testimonials .card',
      /* Footer stats */
      'footer .stat, footer h3, footer p'
    ].join(',');

    const els = document.querySelectorAll(groups);
    els.forEach((el, i) => {
      el.classList.add('will-reveal');
      // Alternate direction for cards/pills
      if (el.matches('.card, .metric-pill, .pill, .faq-item, .result-pill')) {
        el.setAttribute('data-reveal', (i % 3 === 0) ? 'up' : (i % 3 === 1 ? 'left' : 'right'));
      } else {
        el.setAttribute('data-reveal', 'up');
      }
    });

    // Stagger for groups with multiple children
    const staggers = document.querySelectorAll('#services .grid, #results .grid, .pill-grid, .cards, .testimonials .grid');
    staggers.forEach(group => {
      const kids = group.querySelectorAll('.will-reveal');
      kids.forEach((k, idx) => { 
        (k as HTMLElement).style.transitionDelay = `${Math.min(idx * 0.08, 0.6)}s`; 
      });
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('inview');
          io.unobserve(e.target); // reveal once
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });

    document.querySelectorAll('.will-reveal').forEach(el => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, []);
};
