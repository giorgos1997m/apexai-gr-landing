import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface FAQProps {
  locale: 'gr' | 'en';
}

export const FAQ = ({ locale }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const content = {
    gr: {
      title: 'Συχνές Ερωτήσεις.',
      cta: 'Έχετε άλλη ερώτηση; ➜ Κλείστε μια γρήγορη κλήση μαζί μας.',
      faqs: [
        {
          question: 'Χρειάζομαι τεχνικές γνώσεις;',
          answer: 'Όχι, τα ρυθμίζουμε όλα εμείς. Αναλαμβάνουμε την εγκατάσταση, την προσαρμογή και την εκπαίδευση του AI agent σας.',
        },
        {
          question: 'Πώς λειτουργεί η δωρεάν δοκιμή;',
          answer: 'Διαρκεί 14 ημέρες χωρίς δέσμευση ή κάρτα. Απλά κλείνετε μια στρατηγική κλήση και ξεκινάμε αμέσως.',
        },
        {
          question: 'Είναι ασφαλή τα δεδομένα;',
          answer: 'Ναι, πλήρως GDPR-compliant. Όλα τα δεδομένα αποθηκεύονται με κρυπτογράφηση και σύμφωνα με τους ευρωπαϊκούς κανονισμούς.',
        },
        {
          question: 'Πόσος χρόνος χρειάζεται για εγκατάσταση;',
          answer: 'Συνήθως 24-48 ώρες. Μετά από μια στρατηγική κλήση 30\', δημιουργούμε και ενσωματώνουμε το agent σας άμεσα.',
        },
        {
          question: 'Μπορώ να το σταματήσω όποτε θέλω;',
          answer: 'Φυσικά, χωρίς ρήτρες ή ποινές. Δεν υπάρχουν δεσμεύσεις μακράς διάρκειας.',
        },
      ],
    },
    en: {
      title: 'Frequently Asked Questions.',
      cta: 'Have another question? ➜ Book a quick call with us.',
      faqs: [
        {
          question: 'Do I need technical knowledge?',
          answer: 'No, we set everything up for you. We handle the installation, customization, and training of your AI agent.',
        },
        {
          question: 'How does the free trial work?',
          answer: 'It lasts 14 days with no commitment or card required. Simply book a strategy call and we start right away.',
        },
        {
          question: 'Is my data secure?',
          answer: 'Yes, fully GDPR-compliant. All data is encrypted and stored according to European regulations.',
        },
        {
          question: 'How long does installation take?',
          answer: 'Usually 24-48 hours. After a 30-minute strategy call, we create and integrate your agent immediately.',
        },
        {
          question: 'Can I cancel anytime?',
          answer: 'Of course, with no penalties or fees. There are no long-term commitments.',
        },
      ],
    },
  };

  return (
    <section id="faq" className="py-20 bg-[hsl(var(--bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            {content[locale].title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {content[locale].faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl overflow-hidden hover:border-[hsl(var(--accent-cyan))] hover:shadow-[0_0_20px_rgba(0,209,255,0.1)] transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-[hsl(var(--text))]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[hsl(var(--accent-cyan))] transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 text-[hsl(var(--text-muted))]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[#0099CC] hover:scale-105 transition-transform duration-300"
          >
            {content[locale].cta}
          </Button>
        </div>
      </div>
    </section>
  );
}