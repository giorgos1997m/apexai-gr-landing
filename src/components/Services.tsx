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
          ],
        },
        {
          icon: MessageCircle,
          title: 'AI Chatbots',
          features: [
            'Προ-διαλογή πελατών 24/7',
            'Απαντήσεις σε FAQs αμέσως',
            'Συλλογή στοιχείων αυτόματα',
          ],
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
          ],
        },
        {
          icon: MessageCircle,
          title: 'AI Chatbots',
          features: [
            'Pre-screen customers 24/7',
            'Answer FAQs instantly',
            'Collect information automatically',
          ],
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
        },
      ],
    },
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
              className="bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl p-8 hover:border-[hsl(var(--stroke-cyan))] transition-all duration-300 hover:glow-cyan-sm"
            >
              <service.icon className="w-16 h-16 text-[hsl(var(--accent-cyan))] mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--text))]">{service.title}</h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[hsl(var(--accent-green))] flex-shrink-0 mt-0.5" />
                    <span className="text-[hsl(var(--text-muted))]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
