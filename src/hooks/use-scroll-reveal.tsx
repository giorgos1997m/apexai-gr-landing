import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const io = new IntersectionObserver((ents) => {
      ents.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('inview');
          io.unobserve(e.target); // play once
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });

    /* Helper: markAndObserve(list, variant, options) */
    const markAndObserve = (
      selector: string, 
      variant: string = 'up', 
      opts: { stagger?: boolean; maxDelay?: number; skipIfTyping?: boolean } = {}
    ) => {
      const nodes = document.querySelectorAll(selector);
      nodes.forEach((el, i) => {
        // Αν έχει typing/letter animation, μην κουνάς και το container
        if (opts.skipIfTyping && (
          el.matches('.typing, [data-typing], .has-typing') ||
          el.querySelector('.typing, [data-typing], .has-typing')
        )) return;

        el.classList.add('reveal');
        el.setAttribute('data-reveal', variant);
        
        if (opts.stagger && el.parentElement) {
          const idx = Array.from(el.parentElement.children).indexOf(el);
          (el as HTMLElement).style.transitionDelay = `${Math.min(idx * 0.08, opts.maxDelay || 0.6)}s`;
        }
        io.observe(el);
      });
    };

    /* ================== SECTION MAP ==================
       - Κάθε section έχει δικό του "ύφος" όπως ζήτησες
       - Δεν κινούνται ΚΑΙ τα κουτιά ΚΑΙ τα γράμματα μαζί
    ================================================== */

    // Hero: αφήνουμε ως έχει (κανένα auto-reveal στον hero)

    // Industries (#pain-points / #industries)
    markAndObserve('#pain-points h2, #pain-points p, #industries h2, #industries p', 'left', { skipIfTyping: true });
    markAndObserve('#pain-points .card, #industries .card', 'right', { stagger: true, maxDelay: 0.48 });

    // Services: Κρατάμε το typing στα κείμενα. ΜΗΝ κουνάς και τα κουτιά.
    markAndObserve('#services h2, #services > p', 'up', { skipIfTyping: false });
    // Για τα 3 κουτιά υπηρεσιών: μόνο ελαφρύ fade (όχι κίνηση) για να μη "διπλώνει"
    markAndObserve('#services .card', 'fade', { stagger: true, maxDelay: 0.48, skipIfTyping: true });
    // Τα bullets μέσα στα cards μπορούν να ανέβουν ελαφρά
    markAndObserve('#services .card li', 'up', { stagger: true, maxDelay: 0.40 });

    // Video/Demos row
    markAndObserve('#video h2, #video p, #demos h2, #demos p', 'up');
    markAndObserve('#video .card, #demos .card', 'right', { stagger: true, maxDelay: 0.40 });

    // Results: μικρό up στα στοιχεία
    markAndObserve('#results h3', 'up');
    markAndObserve('#results .result-pill, #results .pill, #results .card, #results .stat', 'up', { stagger: true, maxDelay: 0.56 });

    // Testimonials: custom logic below (από αριστερά με stagger)
    markAndObserve('.testimonials h2', 'up');

    // Three clear steps
    markAndObserve('#how-it-works h2, #how-it-works p, #steps h2, #steps p', 'up');
    markAndObserve('#how-it-works .card, #steps .card', 'up', { stagger: true, maxDelay: 0.48 });

    // Try It / Trial
    markAndObserve('#try-it h2, #try-it p, #trial h2, #trial p', 'up', { stagger: true, maxDelay: 0.36 });
    markAndObserve('#try-it .card, #trial .card', 'up', { stagger: true, maxDelay: 0.40 });

    // FAQ: από δεξιά
    markAndObserve('#faq h2', 'up');
    markAndObserve('#faq .faq-item, #faq > div > div > div', 'right', { stagger: true, maxDelay: 0.48 });

    // Trust / Mission / Final CTA
    markAndObserve('#trust h2, #trust p, #mission h2, #mission p', 'fade');
    markAndObserve('#trust .feature, #trust .card', 'fade', { stagger: true, maxDelay: 0.40 });

    // Footer: fade
    markAndObserve('footer .stat, footer h3, footer p', 'fade', { stagger: true, maxDelay: 0.36 });

    /* ============ B) TESTIMONIALS CUSTOM LOGIC ============ */
    const tcards = document.querySelectorAll('.testimonials .card');
    const tio = new IntersectionObserver((es) => {
      es.forEach((e, i) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.transitionDelay = `${Math.min(i * 0.10, 0.6)}s`;
          e.target.classList.add('inview');
          tio.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });
    tcards.forEach(c => tio.observe(c));

    /* ============ C) RESULTS TOUCH HOVER ============ */
    const handleResultsTouch = (e: TouchEvent) => {
      const el = (e.target as HTMLElement).closest('#results .metric-pill, #results .pill, #results .card, #results .stat, #results .result-pill');
      if (!el) return;
      el.classList.add('touch-hover');
      setTimeout(() => el.classList.remove('touch-hover'), 180);
    };
    document.addEventListener('touchstart', handleResultsTouch, { passive: true });

    /* ============ D) STEPS TOUCH HOVER ============ */
    const handleStepsTouch = (e: TouchEvent) => {
      const c = (e.target as HTMLElement).closest('#how-it-works .card');
      if (!c) return;
      c.classList.add('touch-hover');
      setTimeout(() => c.classList.remove('touch-hover'), 250);
    };
    document.addEventListener('touchstart', handleStepsTouch, { passive: true });

    return () => {
      io.disconnect();
      tio.disconnect();
      document.removeEventListener('touchstart', handleResultsTouch);
      document.removeEventListener('touchstart', handleStepsTouch);
    };
  }, []);
};
