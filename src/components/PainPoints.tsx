import { Stethoscope, Scale, Calculator, Wrench } from 'lucide-react';

interface PainPointsProps {
  locale: 'gr' | 'en';
}

export const PainPoints = ({ locale }: PainPointsProps) => {
  const content = {
    gr: {
      title: 'Χάνετε πελάτες όταν δεν μπορείτε να απαντήσετε;',
      industries: [
        {
          icon: Stethoscope,
          title: 'Γιατροί',
          pains: [
            'Χαμένες κλήσεις εκτός ωραρίου',
            'Ασθενείς που περιμένουν υπερβολικά',
            'Χειροκίνητος προγραμματισμός ραντεβού',
          ],
        },
        {
          icon: Scale,
          title: 'Δικηγόροι',
          pains: [
            'Αναπάντητα τηλέφωνα όταν είστε σε δίκη',
            'Χαμένες ευκαιρίες για υποθέσεις',
            'Ατέλειωτα emails για απλές ερωτήσεις',
          ],
        },
        {
          icon: Calculator,
          title: 'Λογιστές',
          pains: [
            'Πελάτες καλούν σε peak περιόδους',
            'Επαναλαμβανόμενες ερωτήσεις για deadlines',
            'Χειροκίνητη αποστολή υπενθυμίσεων',
          ],
        },
        {
          icon: Wrench,
          title: 'Τεχνίτες',
          pains: [
            'Χαμένες κλήσεις όταν είστε «στη σκεπή»',
            'Double-booking και χάος στο πρόγραμμα',
            'Καθυστερημένες προσφορές = χαμένες δουλειές',
          ],
        },
      ],
    },
    en: {
      title: 'Are you losing customers when you can\'t answer?',
      industries: [
        {
          icon: Stethoscope,
          title: 'Doctors',
          pains: [
            'Missed calls after hours',
            'Patients waiting too long',
            'Manual appointment scheduling',
          ],
        },
        {
          icon: Scale,
          title: 'Lawyers',
          pains: [
            'Unanswered phones during court',
            'Lost opportunities for cases',
            'Endless emails for simple questions',
          ],
        },
        {
          icon: Calculator,
          title: 'Accountants',
          pains: [
            'Clients call during peak periods',
            'Repeated questions about deadlines',
            'Manual reminder sending',
          ],
        },
        {
          icon: Wrench,
          title: 'Tradespeople',
          pains: [
            'Missed calls when you\'re "on the roof"',
            'Double-booking and schedule chaos',
            'Delayed quotes = lost jobs',
          ],
        },
      ],
    },
  };

  return (
    <section id="pain-points" data-animate="items" className="py-20 bg-[hsl(var(--bg-secondary))]">
      <div className="container mx-auto px-4">
        <h2
          data-animate-item
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          {content[locale].title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content[locale].industries.map((industry, index) => (
            <div
              key={index}
              data-animate-item
              className="bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl p-6 hover:border-[hsl(var(--stroke-cyan))] transition-all duration-300"
            >
              <industry.icon className="w-12 h-12 text-[hsl(var(--accent-cyan))] mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-4 text-[hsl(var(--text))]">{industry.title}</h3>
              <ul className="space-y-3">
                {industry.pains.map((pain, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[hsl(var(--accent-red))] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[hsl(var(--text-muted))]">{pain}</span>
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
