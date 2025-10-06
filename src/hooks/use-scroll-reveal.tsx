import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    // Safe, discreet reveals - target ONLY specific elements, NOT whole sections
    const targets = document.querySelectorAll([
      /* hero text & CTAs */
      '#hero h1, #hero h2, #hero p, #hero .btn, #hero .button, #hero .cta',
      /* services cards */
      '#services .card, #services h2, #services h3, #services p, #services li',
      /* results pills & headings */
      '#results h2, #results h3, #results .pill, #results .card, #results .stat',
      /* steps / try section */
      '#how-it-works .card, #try .card, #try .btn',
      /* FAQ items */
      '#faq .faq-item, #faq .faq-question, #faq .faq-answer',
      /* testimonials */
      '.testimonial, .testimonials .card',
      /* footer counters/text */
      'footer h3, footer p, footer .stat'
    ].join(','));

    targets.forEach(el => el.classList.add('will-reveal'));

    // Group stagger (optional, light)
    document.querySelectorAll('#services .grid, #results .grid, .cards, .pill-grid, .testimonials')
      .forEach(g => g.setAttribute('data-stagger', ''));

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('inview');
          // reveal-once: unobserve after first reveal
          io.unobserve(e.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

    document.querySelectorAll('.will-reveal').forEach(el => io.observe(el));

    // Stagger delays (gentle)
    document.querySelectorAll('[data-stagger]').forEach(group => {
      const kids = group.querySelectorAll('.will-reveal');
      kids.forEach((k, i) => {
        (k as HTMLElement).style.transitionDelay = `${Math.min(i * 0.06, 0.48)}s`;
      });
    });

    return () => {
      io.disconnect();
    };
  }, []);
};
