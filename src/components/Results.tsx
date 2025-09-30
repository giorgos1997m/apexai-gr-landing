import { Check } from 'lucide-react';

interface ResultsProps {
  locale: 'gr' | 'en';
}

export const Results = ({ locale }: ResultsProps) => {
  const content = {
    gr: {
      title: 'Αποτελέσματα που μιλούν μόνοι τους',
      subtitle: 'Μετρήσιμες βελτιώσεις από την πρώτη εβδομάδα',
      columns: [
        {
          title: 'Χρόνος & Απόδοση',
          results: [
            '30–50 ώρες/μήνα εξοικονόμηση',
            '24/7 διαθεσιμότητα',
            'Αυτόματα reminders & follow-ups',
            'Πλήρης ορατότητα στο pipeline σας',
          ],
        },
        {
          title: 'Leads & Πωλήσεις',
          results: [
            '3× περισσότερα qualified leads',
            '+50% conversion rate',
            '30–40 reviews/μήνα',
            'Περισσότερα επαναληπτικά ραντεβού',
          ],
        },
      ],
    },
    en: {
      title: 'Results that speak for themselves',
      subtitle: 'Measurable improvements from the first week',
      columns: [
        {
          title: 'Time & Performance',
          results: [
            '30–50 hours/month saved',
            '24/7 availability',
            'Automatic reminders & follow-ups',
            'Full visibility into your pipeline',
          ],
        },
        {
          title: 'Leads & Sales',
          results: [
            '3× more qualified leads',
            '+50% conversion rate',
            '30–40 reviews/month',
            'More repeat appointments',
          ],
        },
      ],
    },
  };

  return (
    <section id="results" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content[locale].title}
          </h2>
          <p className="text-xl text-[hsl(var(--text-muted))] max-w-2xl mx-auto">
            {content[locale].subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {content[locale].columns.map((column, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mb-6 text-center">{column.title}</h3>
              <div className="space-y-4">
                {column.results.map((result, idx) => (
                  <div 
                    key={idx}
                    className="border-gradient-cyan rounded-xl p-4 hover:glow-cyan-sm transition-all duration-300 flex items-center gap-3"
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
