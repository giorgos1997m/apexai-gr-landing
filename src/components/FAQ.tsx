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
          answer: 'Όχι, τα ρυθμίζουμε όλα εμείς. Από την πρώτη στιγμή, η ομάδα μας αναλαμβάνει την πλήρη εγκατάσταση και παραμετροποίηση του συστήματος.'
        },
        {
          question: 'Πώς λειτουργεί η δωρεάν δοκιμή;',
          answer: 'Διαρκεί 14 ημέρες, χωρίς να χρειάζεται κάρτα ή δέσμευση. Δοκιμάζετε τους AI agents μας χωρίς κανέναν περιορισμό και αποφασίζετε στη συνέχεια.'
        },
        {
          question: 'Είναι ασφαλή τα δεδομένα;',
          answer: 'Ναι, είμαστε πλήρως GDPR-compliant. Όλα τα δεδομένα αποθηκεύονται με κρυπτογράφηση και ακολουθούμε αυστηρά πρωτόκολλα ασφαλείας.'
        },
        {
          question: 'Πόσος χρόνος χρειάζεται για εγκατάσταση;',
          answer: 'Συνήθως 24–48 ώρες. Αναλόγως τη πολυπλοκότητα της ενσωμάτωσης, μπορεί να χρειαστεί λίγες επιπλέον μέρες για πλήρη παραμετροποίηση.'
        },
        {
          question: 'Τι γίνεται με ακυρώσεις/μη εμφάνιση;',
          answer: 'Οι αυτόματες υπενθυμίσεις μας μειώνουν σημαντικά τα no-shows. Το σύστημα στέλνει SMS και email υπενθυμίσεις πριν από κάθε ραντεβού.'
        },
        {
          question: 'Σε ποια συστήματα συνδέεται;',
          answer: 'Συνδεόμαστε με Google Calendar, CRM συστήματα, Google Reviews, SMS/Email πλατφόρμες και πολλά άλλα. Η ενσωμάτωση είναι απλή και γρήγορη.'
        },
        {
          question: 'Μπορώ να το σταματήσω όποτε θέλω;',
          answer: 'Φυσικά, χωρίς ρήτρες ή ποινές. Η συνεργασία μας είναι ευέλικτη και μπορείτε να τη διακόψετε ανά πάσα στιγμή.'
        },
        {
          question: 'Υποστηρίζει ελληνικά & αγγλικά;',
          answer: 'Ναι, η διγλωσσία είναι ενσωματωμένη by default. Οι AI agents μας μιλούν τέλεια ελληνικά και αγγλικά, προσαρμοζόμενοι στη γλώσσα του πελάτη.'
        },
        {
          question: 'Τι γίνεται εκτός ωραρίου;',
          answer: 'Οι AI agents λειτουργούν 24/7. Απαντούν σε ερωτήσεις και κλείνουν ραντεβού ακόμη και όταν η επιχείρησή σας είναι κλειστή.'
        },
        {
          question: 'Φωνητικός agent vs. chatbot — πότε επιλέγω τι;',
          answer: 'Ο chatbot είναι ιδανικός για γρήγορες απαντήσεις στο website. Ο voice agent αναλαμβάνει τηλεφωνικές κλήσεις με φυσικό τρόπο. Συνήθως συνδυάζουμε και τα δύο για μέγιστη απόδοση.'
        }
      ],
    },
    en: {
      title: 'Frequently Asked Questions.',
      cta: 'Have another question? ➜ Book a quick call with us.',
      faqs: [
        {
          question: 'Do I need tech skills?',
          answer: 'No, we handle all the setup. From the very beginning, our team takes care of the complete installation and configuration of the system.'
        },
        {
          question: 'How does the free trial work?',
          answer: 'It lasts 14 days, no credit card or commitment required. You can test our AI agents without any limitations and decide afterwards.'
        },
        {
          question: 'Is data secure/GDPR compliant?',
          answer: 'Yes, we are fully GDPR-compliant. All data is stored with encryption and we follow strict security protocols.'
        },
        {
          question: 'How long does setup take?',
          answer: 'Usually 24–48 hours. Depending on integration complexity, it may take a few extra days for full customization.'
        },
        {
          question: 'What about no-shows and cancellations?',
          answer: 'Our automatic reminders significantly reduce no-shows. The system sends SMS and email reminders before each appointment.'
        },
        {
          question: 'What systems does it integrate with?',
          answer: 'We integrate with Google Calendar, CRM systems, Google Reviews, SMS/Email platforms, and many more. Integration is simple and fast.'
        },
        {
          question: 'Can I cancel anytime?',
          answer: 'Of course, with no penalties or fees. Our collaboration is flexible and you can cancel at any time.'
        },
        {
          question: 'Does it support Greek and English?',
          answer: 'Yes, bilingual support is built-in by default. Our AI agents speak perfect Greek and English, adapting to the customer\'s language.'
        },
        {
          question: 'What happens outside business hours?',
          answer: 'AI agents work 24/7. They answer questions and book appointments even when your business is closed.'
        },
        {
          question: 'Voice agent vs. chatbot — when to choose what?',
          answer: 'The chatbot is ideal for quick answers on your website. The voice agent handles phone calls naturally. We usually combine both for maximum performance.'
        }
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