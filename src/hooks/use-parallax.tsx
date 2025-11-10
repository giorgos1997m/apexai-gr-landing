import { useEffect } from 'react';

export const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroParallax = document.querySelector('.hero-parallax') as HTMLElement;
      
      if (heroParallax) {
        // Move robot up/down by 10-15px based on scroll
        const offset = Math.min(scrolled * 0.15, 15);
        heroParallax.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
