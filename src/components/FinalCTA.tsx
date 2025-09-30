import { Shield, Clock, DollarSign } from 'lucide-react';
import { Button } from './ui/button';

interface FinalCTAProps {
  locale: 'gr' | 'en';
}

export const FinalCTA = ({ locale }: FinalCTAProps) => {
  const content = {
    gr: {
      title: 'Έτοιμοι να πάρετε πίσω τον χρόνο σας;',
      subtitle: 'Ξεκινήστε τη 14ήμερη δοκιμή σας και δείτε αποτελέσματα μέσα στην πρώτη εβδομάδα',
      cta: 'Ξεκινήστε 14ήμερη Δοκιμή',
      features: [
        { icon: Shield, text: 'Ασφάλεια για τα δεδομένα σας' },
        { icon: Clock, text: 'Setup σε 48 ώρες' },
        { icon: DollarSign, text: '24/7 υποστήριξη' },
      ],
    },
    en: {
      title: 'Ready to take back your time?',
      subtitle: 'Start your 14-day trial and see results within the first week',
      cta: 'Start 14-day Trial',
      features: [
        { icon: Shield, text: 'Data security' },
        { icon: Clock, text: 'Setup in 48 hours' },
        { icon: DollarSign, text: '24/7 support' },
      ],
    },
  };

  return (
    <section id="final-cta" className="py-20 bg-[hsl(var(--bg-secondary))]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[hsl(var(--accent-cyan))]/10 to-[hsl(var(--accent-blue))]/10 border border-[hsl(var(--stroke-cyan))] rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {content[locale].title}
            </h2>
            <p className="text-xl text-[hsl(var(--text-muted))] mb-8">
              {content[locale].subtitle}
            </p>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] text-[hsl(var(--bg))] hover:opacity-90 text-lg px-12 py-6 mb-8"
              style={{
                boxShadow: '0 0 40px hsla(var(--glow-cyan), 0.4), 0 0 80px hsla(var(--glow-cyan), 0.2)'
              }}
            >
              {content[locale].cta}
            </Button>

            <div className="flex flex-wrap justify-center gap-6">
              {content[locale].features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-[hsl(var(--text-muted))]">
                  <feature.icon className="w-5 h-5 text-[hsl(var(--accent-cyan))]" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
