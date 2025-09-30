import { Shield, Clock, Zap, Users } from 'lucide-react';
import { Button } from './ui/button';

interface HeroProps {
  locale: 'gr' | 'en';
}

export const Hero = ({ locale }: HeroProps) => {
  const content = {
    gr: {
      title: 'Πάρτε πίσω τον χρόνο σας με',
      titleHighlight: 'AI',
      subtitle: 'Αυτοματισμοί, chatbots και voice agents που κλείνουν ραντεβού, μαζεύουν leads και κρατούν τους πελάτες να επιστρέφουν.',
      ctaPrimary: 'Ξεκινήστε 14ήμερη Δοκιμή',
      ctaSecondary: 'Δες το σε δράση',
      features: [
        { icon: Shield, line1: 'Ασφάλεια με τα', line2: 'δεδομένα σας' },
        { icon: Clock, line1: '24/7', line2: '' },
        { icon: Zap, line1: 'Γρήγορο', line2: 'setup' },
        { icon: Users, line1: 'Ελάχιστη', line2: 'δέσμευση' },
      ],
    },
    en: {
      title: 'Take back your time with',
      titleHighlight: 'AI',
      subtitle: 'Automations, chatbots and voice agents that close appointments, collect leads and keep customers coming back.',
      ctaPrimary: 'Start 14-day Trial',
      ctaSecondary: 'See it in Action',
      features: [
        { icon: Shield, line1: 'Data', line2: 'Security' },
        { icon: Clock, line1: '24/7', line2: '' },
        { icon: Zap, line1: 'Fast', line2: 'Setup' },
        { icon: Users, line1: 'Minimal', line2: 'Commitment' },
      ],
    },
  };

  const handleSecondaryClick = () => {
    const tryItSection = document.querySelector('#try-it');
    if (tryItSection) {
      const yOffset = -100;
      const y = tryItSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <iframe
        src="https://my.spline.design/cybermannequin-nAXOQr2eE98SpYQlI8Nejhvg/"
        className="absolute inset-0 w-full h-full pointer-events-auto"
        style={{ border: 'none', zIndex: 0 }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20 pointer-events-none">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 pointer-events-auto">
            {content[locale].title}{' '}
            <span className="text-gradient-cyan">{content[locale].titleHighlight}.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[hsl(var(--text-muted))] mb-12 max-w-3xl mx-auto pointer-events-auto">
            {content[locale].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 pointer-events-auto">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] text-[hsl(var(--bg))] hover:opacity-90 glow-cyan text-lg px-8 py-6"
            >
              {content[locale].ctaPrimary}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleSecondaryClick}
              className="border-[hsl(var(--stroke-cyan))] text-[hsl(var(--accent-cyan))] hover:bg-[hsl(var(--card))] text-lg px-8 py-6 pointer-events-auto"
            >
              {content[locale].ctaSecondary}
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pointer-events-auto">
            {content[locale].features.map((feature, index) => (
              <div 
                key={index}
                className="bg-[hsl(var(--card))]/50 backdrop-blur-sm border border-[hsl(var(--stroke))] rounded-lg p-3 hover:border-[hsl(var(--stroke-cyan))] transition-colors"
              >
                <feature.icon className="w-5 h-5 text-[hsl(var(--accent-cyan))] mx-auto mb-1.5" />
                <p className="text-xs text-[hsl(var(--text))] font-medium leading-tight text-center">
                  {feature.line1}
                </p>
                {feature.line2 && (
                  <p className="text-xs text-[hsl(var(--text))] font-medium leading-tight text-center">
                    {feature.line2}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
