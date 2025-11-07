import { Phone, Cog, Rocket } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface StepsProps {
  locale: 'gr' | 'en';
}

export const Steps = ({ locale }: StepsProps) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const content = {
    gr: {
      title: '3 Απλά Βήματα για να Ξεκινήσετε.',
      cta: 'Ξεκινήστε Σήμερα ➜ Δωρεάν Δοκιμή 14 Ημερών',
      steps: [
        {
          icon: Phone,
          number: '01',
          title: 'Στρατηγική Κλήση 30\'',
          description: 'Αναλύουμε τις ανάγκες της επιχείρησής σας.',
        },
        {
          icon: Cog,
          number: '02',
          title: 'Κατασκευή & Ενσωμάτωση Agent',
          description: 'Δημιουργούμε chatbot ή voice agent πλήρως προσαρμοσμένο.',
        },
        {
          icon: Rocket,
          number: '03',
          title: 'Εκκίνηση & Βελτιστοποίηση',
          description: 'Παρακολουθούμε την απόδοση και βελτιώνουμε τα αποτελέσματα.',
        },
      ],
    },
    en: {
      title: '3 Simple Steps to Get Started.',
      cta: 'Start Today ➜ 14-Day Free Trial',
      steps: [
        {
          icon: Phone,
          number: '01',
          title: '30-Minute Strategy Call',
          description: 'We analyze your business needs.',
        },
        {
          icon: Cog,
          number: '02',
          title: 'Agent Build & Integration',
          description: 'We create a fully customized chatbot or voice agent.',
        },
        {
          icon: Rocket,
          number: '03',
          title: 'Launch & Optimization',
          description: 'We monitor performance and improve results.',
        },
      ],
    },
  };

  return (
    <section id="how-it-works" className="py-20 bg-[hsl(var(--bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            {content[locale].title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Progress Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[hsl(var(--stroke))] md:block hidden">
            <div 
              className="bg-gradient-to-b from-[hsl(var(--accent-cyan))] to-[#0099CC] w-full transition-all duration-500"
              style={{ 
                height: activeStep !== null ? `${(activeStep + 1) * 33.33}%` : '0%'
              }}
            />
          </div>

          <div className="space-y-8">
            {content[locale].steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 items-start relative"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Step Number Circle */}
                <div className={`
                  flex-shrink-0 w-16 h-16 rounded-full border-2 
                  flex items-center justify-center font-bold text-xl
                  transition-all duration-300 z-10 bg-[hsl(var(--card))]
                  ${activeStep === index 
                    ? 'border-[hsl(var(--accent-cyan))] text-[hsl(var(--accent-cyan))] shadow-[0_0_20px_rgba(0,209,255,0.3)]' 
                    : 'border-[hsl(var(--stroke))] text-[hsl(var(--text-muted))]'
                  }
                `}>
                  {step.number}
                </div>

                {/* Step Content */}
                <div className={`
                  flex-1 bg-[hsl(var(--card))] border rounded-xl p-6
                  transition-all duration-300
                  ${activeStep === index 
                    ? 'border-[hsl(var(--accent-cyan))] shadow-[0_0_30px_rgba(0,209,255,0.15)]' 
                    : 'border-[hsl(var(--stroke))]'
                  }
                `}>
                  <div className="flex items-start gap-4">
                    <step.icon className={`
                      w-8 h-8 flex-shrink-0 transition-colors
                      ${activeStep === index ? 'text-[hsl(var(--accent-cyan))]' : 'text-[hsl(var(--text-muted))]'}
                    `} />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-[hsl(var(--text-muted))]">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[#0099CC] hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(0,209,255,0.3)]"
          >
            {content[locale].cta}
          </Button>
        </div>
      </div>
    </section>
  );
}