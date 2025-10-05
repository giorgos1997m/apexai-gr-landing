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
    // markAndObserve('#hero .hero-content > *','up'); // (disabled intentionally)

    // Χάνετε πελάτες όταν δεν μπορείτε να απαντήσετε; (#pain-points)
    markAndObserve('#pain-points h2, #pain-points p', 'left', { skipIfTyping: true });
    markAndObserve('#pain-points .card, #pain-points > div > div > div', 'right', { stagger: true, maxDelay: 0.48 });

    // Υπηρεσίες (#services): Κρατάμε το typing στα κείμενα. ΜΗΝ κουνάς και τα κουτιά.
    markAndObserve('#services h2, #services > div > div > p', 'up', { skipIfTyping: false });
    // Για τα 3 κουτιά υπηρεσιών: μόνο ελαφρύ fade (όχι κίνηση) για να μη "διπλώνει"
    markAndObserve('#services .card, #services > div > div.grid > div', 'fade', { stagger: true, maxDelay: 0.48, skipIfTyping: true });
    // Τα bullets μέσα στα cards μπορούν να ανέβουν ελαφρά
    markAndObserve('#services .card li, #services li', 'up', { stagger: true, maxDelay: 0.40 });

    // Video/Demos row (#video)
    markAndObserve('#video h2, #video p', 'up');
    markAndObserve('#video .card, #video > div > div:last-child > div', 'right', { stagger: true, maxDelay: 0.40 });

    // Αποτελέσματα (Results that speak for themselves) (#results)
    markAndObserve('#results h3', 'up'); // "Χρόνος & Απόδοση", "Leads & Πωλήσεις"
    markAndObserve('#results .pill, #results .card, #results .stat, #results .result-pill', 'up', { stagger: true, maxDelay: 0.56 });

    // What our clients say (Testimonials)
    markAndObserve('.testimonials h2', 'up');
    markAndObserve('.testimonials .card, .testimonials > div > div.grid > div', 'left', { stagger: true, maxDelay: 0.48 });

    // Three clear steps (#steps)
    markAndObserve('#steps h2, #steps p', 'up');
    markAndObserve('#steps .card, #steps > div > div:last-child > div > div', 'up', { stagger: true, maxDelay: 0.48 });

    // Try It (#try-it)
    markAndObserve('#try-it h2, #try-it p, #try-it .btn, #try-it .button', 'up', { stagger: true, maxDelay: 0.36 });
    markAndObserve('#try-it .card, #try-it > div > div > div', 'up', { stagger: true, maxDelay: 0.40 });

    // FAQ (#faq)
    markAndObserve('#faq h2', 'up');
    markAndObserve('#faq .faq-item, #faq > div > div > div', 'right', { stagger: true, maxDelay: 0.48 });

    // Trust row (#trust)
    markAndObserve('#trust h2, #trust p', 'left');
    markAndObserve('#trust .feature, #trust .card, #trust > div > div:last-child > div', 'right', { stagger: true, maxDelay: 0.40 });

    // Footer stats
    markAndObserve('footer .stat, footer h3, footer p', 'fade', { stagger: true, maxDelay: 0.36 });

    return () => {
      io.disconnect();
    };
  }, []);
};
