import { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface HeroProps {
  locale: 'gr' | 'en';
}

export const Hero = ({ locale }: HeroProps) => {
  const content = {
    gr: {
      microTagline: 'AI Automation for Professionals in Greece 🇬🇷',
      title: 'Πάρτε πίσω τον χρόνο σας με',
      titleHighlight: 'Αυτοματισμούς AI.',
      subtitle: 'Το APEX AI δημιουργεί Chatbots & Voice Agents που απαντούν σε πελάτες, κλείνουν ραντεβού και φέρνουν leads 24/7 — ενώ εσείς εργάζεστε ή ξεκουράζεστε.',
      ctaPrimary: '🚀 Δοκιμή 14 Ημερών — Χωρίς Κάρτα',
      ctaSecondary: '📞 Κλείστε Στρατηγική Κλήση',
      trustTag: 'GDPR-Compliant • 100% Αυτόνομο • Ελληνική Υποστήριξη',
    },
    en: {
      microTagline: 'AI Automation for Professionals in Greece 🇬🇧',
      title: 'Get Your Time Back with',
      titleHighlight: 'AI Automation.',
      subtitle: 'APEX AI builds Chatbots & Voice Agents that reply, book, and convert leads 24/7 — so you can focus on what matters.',
      ctaPrimary: '🚀 Start 14-Day Free Trial — No Card Required',
      ctaSecondary: '📞 Book a Strategy Call',
      trustTag: 'GDPR-Compliant • Fully Automated • Greek Support',
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroParallax = document.querySelector('.hero-parallax') as HTMLElement;
      
      if (heroParallax && scrolled < window.innerHeight) {
        const offset = Math.min(scrolled * 0.15, 15);
        heroParallax.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({ 
      top: window.innerHeight, 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="hero-section relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] to-[#02060C]" />
      
      {/* 3D Robot Visual - FULL BLEED BACKGROUND with interactivity */}
      <div className="absolute inset-0 hero-parallax" id="hero-spline-container">
        {/* Periodic glow pulse */}
        <div className="absolute inset-0 bg-gradient-radial from-[hsl(var(--accent-cyan))]/30 via-transparent to-transparent animate-[hero-glow_10s_ease-in-out_infinite]" />
        <iframe
          src="https://my.spline.design/cybermannequin-nAXOQr2eE98SpYQlI8Nejhvg/"
          className="spline-hero w-full h-full animate-[float_6s_ease-in-out_infinite]"
          style={{ border: 'none', pointerEvents: 'auto' }}
          loading="lazy"
        />
      </div>
      
      {/* Dark radial gradient overlay for text readability (0.45 opacity) */}
      <div className="absolute inset-0 bg-gradient-radial from-[#0B0F14]/45 via-[#0B0F14]/45 to-transparent z-[5] pointer-events-none" />
      
      {/* Content - LEFT Column */}
      <div className="hero-content relative container mx-auto px-4 py-20 md:py-32 z-10">
        <div className="max-w-2xl md:pr-8 relative z-10">
          {/* Micro Tagline */}
          <p className="hero-tagline text-sm font-medium text-[hsl(var(--accent-cyan))] mb-4 tracking-wide uppercase opacity-0">
            {content[locale].microTagline}
          </p>
          
          {/* Main Title */}
          <h1 className="hero-title font-display text-h1 md:text-[3rem] lg:text-[3.5rem] font-bold mb-6 leading-tight opacity-0">
            {content[locale].title}{' '}
            <span className="text-gradient-cyan">{content[locale].titleHighlight}</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="hero-subtitle text-h5 md:text-h4 text-[hsl(var(--text-muted))] mb-12 leading-relaxed opacity-0">
            {content[locale].subtitle}
          </h2>
          
          {/* CTAs */}
          <div className="hero-ctas flex flex-col sm:flex-row gap-4 mb-8 opacity-0">
            <Button 
              size="lg"
              className="hero-cta-primary bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[#0099CC] text-white hover:scale-105 transition-all duration-300 text-base font-semibold px-6 py-6 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] w-full sm:w-auto"
            >
              {content[locale].ctaPrimary}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="hero-cta-secondary bg-transparent border-[1.5px] border-white text-white hover:bg-gradient-to-r hover:from-[hsl(var(--accent-cyan))] hover:to-[#0099CC] hover:border-transparent transition-all duration-300 text-base font-semibold px-6 py-6 rounded-2xl w-full sm:w-auto"
            >
              {content[locale].ctaSecondary}
            </Button>
          </div>
          
          {/* GDPR Badge */}
          <a 
            href="https://gdprlocal.com/chatbot-gdpr-compliance/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-gdpr inline-flex items-center gap-2 text-sm text-[hsl(var(--text-muted))] opacity-0 hover:text-[hsl(var(--accent-cyan))] transition-colors mb-4"
          >
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[hsl(var(--card))] border border-[hsl(var(--stroke-cyan))]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">GDPR Ready</span>
            </span>
          </a>
          
          {/* Trust Tag */}
          <p className="hero-trust text-sm text-[hsl(var(--text-muted))] opacity-0">
            {content[locale].trustTag}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={handleScrollDown}
        className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[hsl(var(--accent-cyan))] animate-bounce cursor-pointer bg-transparent border-none opacity-0"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};
