import { useState } from 'react';
import { Phone, Cog, Rocket } from 'lucide-react';
import { Button } from './ui/button';

interface StepsProps {
  locale: 'gr' | 'en';
}

export const Steps = ({ locale }: StepsProps) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const content = {
    gr: {
      title: 'Τρία ξεκάθαρα βήματα για να ξεκινήσετε',
      subtitle: 'Απλή και γρήγορη διαδικασία που δίνει αποτελέσματα μέσα σε λίγες μέρες',
      steps: [
        {
          icon: Phone,
          number: 1,
          title: 'Audit Call (30\')',
          description: 'Καλούμε εσάς ή έναν συνεργάτη σας, εντοπίζουμε τις ευκαιρίες σας, προσδιορίζουμε το ROI και κάνουμε account setup.',
        },
        {
          icon: Cog,
          number: 2,
          title: 'Ενεργοποίηση 14ήμερης Δοκιμής',
          description: 'Οι τεχνικοί μας στήνουν το σύστημα, ενσωματώνουμε τις λύσεις AI σας και εκπαιδεύουμε την ομάδα σας.',
        },
        {
          icon: Rocket,
          number: 3,
          title: 'Launch & Optimize',
          description: 'Παρακολουθούμε την απόδοση, κάνουμε βελτιστοποιήσεις, και σας βοηθάμε να πετύχετε αποτελέσματα με λίγους μήνες.',
        },
      ],
      cta: 'Ξεκινήστε 14ήμερη Δοκιμή',
    },
    en: {
      title: 'Three clear steps to get started',
      subtitle: 'Simple and fast process that delivers results within days',
      steps: [
        {
          icon: Phone,
          number: 1,
          title: 'Audit Call (30\')',
          description: 'We analyze your current processes, identify opportunities, determine ROI and make account setup.',
        },
        {
          icon: Cog,
          number: 2,
          title: 'Activate 14-day Trial',
          description: 'Our technicians set up the system, integrate your AI solutions and train your team.',
        },
        {
          icon: Rocket,
          number: 3,
          title: 'Launch & Optimize',
          description: 'We monitor performance, make optimizations, and help you achieve results within months.',
        },
      ],
      cta: 'Start 14-day Trial',
    },
  };

  return (
    <section id="steps" className="py-20">
      <div id="how-it-works" className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content[locale].title}
          </h2>
          <p className="text-xl text-[hsl(var(--text-muted))] max-w-2xl mx-auto">
            {content[locale].subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative flex items-center justify-between mb-16">
            <div 
              className="absolute left-0 right-0 top-1/2 h-1 bg-[hsl(var(--stroke))] -translate-y-1/2"
            />
            <div 
              className="absolute left-0 top-1/2 h-1 bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] -translate-y-1/2 transition-all duration-500"
              style={{ 
                width: activeStep !== null ? `${(activeStep / (content[locale].steps.length - 1)) * 100}%` : '0%' 
              }}
            />
            
            {content[locale].steps.map((step, index) => (
              <div 
                key={index}
                className="relative z-10"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                  activeStep !== null && index <= activeStep
                    ? 'bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] text-[hsl(var(--bg))] glow-cyan-sm'
                    : 'bg-[hsl(var(--card))] text-[hsl(var(--text-muted))] border-2 border-[hsl(var(--stroke))]'
                }`}>
                  {step.number}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content[locale].steps.map((step, index) => (
              <div 
                key={index}
                className="card bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl p-6 hover:border-[hsl(var(--stroke-cyan))] transition-all duration-300"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <step.icon className="w-12 h-12 text-[hsl(var(--accent-cyan))] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-[hsl(var(--text))]">{step.title}</h3>
                <p className="text-[hsl(var(--text-muted))]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] text-[hsl(var(--bg))] hover:opacity-90 glow-cyan text-lg px-8 py-6"
          >
            {content[locale].cta}
          </Button>
        </div>
      </div>
    </section>
  );
};
