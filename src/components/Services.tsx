import { Zap, MessageCircle, Phone, Check } from 'lucide-react';

interface ServicesProps {
  locale: 'gr' | 'en';
}

export const Services = ({ locale }: ServicesProps) => {
  const content = {
    gr: {
      title: 'Υπηρεσίες',
      subtitle: 'Τρεις βασικές λύσεις AI που μεταμορφώνουν την επιχείρησή σας',
      services: [
        {
          icon: Zap,
          title: 'Automations',
          features: [
            'Αυτόματη αποστολή email/SMS',
            'Αυτόματη συλλογή reviews',
            'Αυτόματος συγχρονισμός με CRM',
            'Full Αυτοματοποιημένο Website',
            'Loyalty Campaigns',
          ],
          footer: 'λιγότερες χειροκίνητες δουλειές · συνέπεια · καλύτερη εμπειρία πελάτη',
        },
        {
          icon: MessageCircle,
          title: 'AI Chatbots',
          features: [
            'Προ-διαλογή πελατών 24/7',
            'Απαντήσεις σε FAQs αμέσως',
            'Συλλογή στοιχείων αυτόματα',
          ],
          footer: 'άμεση εξυπηρέτηση · περισσότερα qualified leads · μείωση χειροκίνητων εργασιών',
        },
        {
          icon: Phone,
          title: 'AI Voice Agents',
          features: [
            'Απαντούν 24/7 στο τηλέφωνο',
            'Κλείσιμο ραντεβού αυτόματα',
            'Qualified routing σε εσάς',
            'Γρήγορα follow-ups',
          ],
          footer: 'μηδέν χαμένες κλήσεις · αυτόματα follow-ups · επαγγελματική εικόνα',
        },
      ],
    },
    en: {
      title: 'Services',
      subtitle: 'Three core AI solutions that transform your business',
      services: [
        {
          icon: Zap,
          title: 'Automations',
          features: [
            'Automatic email/SMS sending',
            'Automatic review collection',
            'Automatic CRM sync',
            'Full Automated Website',
            'Loyalty Campaigns',
          ],
          footer: 'fewer manual tasks · consistency · better customer experience',
        },
        {
          icon: MessageCircle,
          title: 'AI Chatbots',
          features: [
            'Pre-screen customers 24/7',
            'Answer FAQs instantly',
            'Collect information automatically',
          ],
          footer: 'instant service · more qualified leads · reduced manual work',
        },
        {
          icon: Phone,
          title: 'AI Voice Agents',
          features: [
            'Answer phone 24/7',
            'Book appointments automatically',
            'Qualified routing to you',
            'Fast follow-ups',
          ],
          footer: 'zero missed calls · automatic follow-ups · professional image',
        },
      ],
    },
  };

  return (
    <section
      id="services"
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-item">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content[locale].title}
          </h2>
          <p className="text-xl text-[hsl(var(--text-muted))] max-w-2xl mx-auto">
            {content[locale].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content[locale].services.map((service, index) => (
            <div
              key={index}
              className="reveal-item bg-[hsl(var(--card))] border-2 border-[hsl(var(--stroke-cyan))]/40 rounded-xl p-8 hover:border-[hsl(var(--stroke-cyan))] transition-all duration-300 glow-cyan-sm hover:glow-cyan"
            >
              <div className="bg-[hsl(var(--accent-cyan))]/20 border-2 border-[hsl(var(--accent-cyan))]/40 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <service.icon className="w-10 h-10 text-[hsl(var(--accent-cyan))]" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--text))]">{service.title}</h3>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[hsl(var(--accent-cyan))] flex-shrink-0 mt-0.5" />
                    <span className="text-[hsl(var(--text-muted))]">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[hsl(var(--accent-cyan))] text-sm font-medium pt-4 border-t border-[hsl(var(--stroke))]">
                {service.footer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
