import { Check } from 'lucide-react';

interface ResultsProps {
  locale: 'gr' | 'en';
}

export const Results = ({ locale }: ResultsProps) => {
  const content = {
    gr: {
      title: 'Αποτελέσματα που μιλούν μόνα τους',
      subtitle: 'Μετρήσιμες βελτιώσεις από την πρώτη εβδομάδα',
      sections: [
        {
          title: 'Χρόνος & Απόδοση',
          results: [
            '30–50 ώρες/μήνα εξοικονόμηση',
            '24/7 διαθεσιμότητα',
            'Αυτόματα reminders & follow-ups',
            'Πλήρης ορατότητα στο pipeline σας',
            '80% λιγότερες χειροκίνητες εργασίες',
            'Λιγότερα no-shows με έξυπνες υπενθυμίσεις',
          ],
        },
        {
          title: 'Leads & Πωλήσεις',
          results: [
            '3× περισσότερα qualified leads',
            '+40% conversion rate',
            '50+ reviews/μήνα',
            'Περισσότερα επαναληπτικά ραντεβού',
          ],
        },
      ],
    },
    en: {
      title: 'Results that speak for themselves',
      subtitle: 'Measurable improvements from the first week',
      sections: [
        {
          title: 'Time & Performance',
          results: [
            '30–50 hours/month saved',
            '24/7 availability',
            'Automatic reminders & follow-ups',
            'Full visibility into your pipeline',
            '80% fewer manual tasks',
            'Fewer no-shows with smart reminders',
          ],
        },
        {
          title: 'Leads & Sales',
          results: [
            '3× more qualified leads',
            '+40% conversion rate',
            '50+ reviews/month',
            'More repeat appointments',
          ],
        },
      ],
    },
  };

  return (
    <section
      id="results"
      className="results-section py-20"
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

        <div className="metrics-wrap max-w-5xl mx-auto space-y-12">
          {content[locale].sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mb-6 text-center reveal-item">{section.title}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {section.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="result-pill reveal-item flex items-center gap-3 p-4"
                  >
                    <Check className="w-5 h-5 text-[hsl(var(--accent-green))] flex-shrink-0" />
                    <span className="text-[hsl(var(--text))]">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
