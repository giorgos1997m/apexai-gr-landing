import { Button } from './ui/button';

interface PricingProps {
  locale: 'gr' | 'en';
}

export const Pricing = ({ locale }: PricingProps) => {
  const content = {
    gr: {
      title: 'Ευέλικτα Πλάνα για Κάθε Επιχείρηση.',
      subtitle: 'Επιλέξτε πλάνο που ταιριάζει στις ανάγκες σας ή ζητήστε προσαρμοσμένη προσφορά.',
      plans: [
        {
          name: 'Starter',
          badge: 'Δωρεάν Δοκιμή 14 Ημερών',
          features: [
            'Chatbot ή Voice Agent Demo',
            'Έως 50 συνομιλίες/κλήσεις',
            'Ελληνική υποστήριξη'
          ],
          cta: 'Ξεκινήστε Δωρεάν ➜',
          highlight: false
        },
        {
          name: 'Professional',
          badge: 'Most Popular',
          features: [
            'Chatbot + Voice Agent πλήρως λειτουργικοί',
            'Google Reviews Automation',
            'Προτεραιότητα στην υποστήριξη'
          ],
          cta: 'Μιλήστε με Ειδικό ➜',
          highlight: true
        },
        {
          name: 'Enterprise',
          badge: 'Custom',
          features: [
            'Πλήρης ενσωμάτωση CRM & τηλεφωνικού συστήματος',
            'Reporting Dashboard',
            'Προσωπικός Account Manager'
          ],
          cta: 'Ζητήστε Προσφορά ➜',
          highlight: false
        }
      ]
    },
    en: {
      title: 'Flexible Plans for Every Business.',
      subtitle: 'Choose a plan that fits your needs or request a custom quote.',
      plans: [
        {
          name: 'Starter',
          badge: '14-Day Free Trial',
          features: [
            'Chatbot or Voice Agent Demo',
            'Up to 50 conversations/calls',
            'Greek support'
          ],
          cta: 'Start Free Trial ➜',
          highlight: false
        },
        {
          name: 'Professional',
          badge: 'Most Popular',
          features: [
            'Fully functional Chatbot + Voice Agent',
            'Google Reviews Automation',
            'Priority support'
          ],
          cta: 'Talk to a Specialist ➜',
          highlight: true
        },
        {
          name: 'Enterprise',
          badge: 'Custom',
          features: [
            'Full CRM & phone system integration',
            'Reporting Dashboard',
            'Dedicated Account Manager'
          ],
          cta: 'Request Quote ➜',
          highlight: false
        }
      ]
    }
  };

  const { title, subtitle, plans } = content[locale];

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 reveal" data-reveal="up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--text))]">
            {title}
          </h2>
          <p className="text-xl text-[hsl(var(--text-muted))] max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`reveal relative bg-[hsl(var(--card))] rounded-2xl p-8 transition-all duration-300 hover:bg-[hsl(var(--card-hover))] ${
                plan.highlight
                  ? 'border-2 border-[hsl(var(--accent-cyan))] glow-cyan-sm'
                  : 'border border-[hsl(var(--stroke))]'
              }`}
              data-reveal="up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] rounded-full text-sm font-semibold text-[hsl(var(--primary-foreground))]">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[hsl(var(--text))] mb-2">
                  {plan.name}
                </h3>
                {!plan.highlight && (
                  <span className="text-sm text-[hsl(var(--text-muted))]">{plan.badge}</span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[hsl(var(--text-muted))]">
                    <span className="text-[hsl(var(--accent-cyan))] mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] hover:opacity-90 glow-cyan-sm'
                    : ''
                }`}
                variant={plan.highlight ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
