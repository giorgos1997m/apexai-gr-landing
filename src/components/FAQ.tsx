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
      title: 'Συχνές Ερωτήσεις',
      subtitle: 'Όλα όσα χρειάζεται να ξέρετε για να ξεκινήσετε με την APEX AI',
      faqs: [
        {
          q: 'Πόσο γρήγορα μπορώ να ξεκινήσω;',
          a: 'Το σύστημα εγκαθίσταται σε 48–72 ώρες. Μετά την Audit Call, η ομάδα μας στήνει τα πάντα και είστε έτοιμοι για τη 14ήμερη δοκιμαστική περίοδο.',
        },
        {
          q: 'Πώς γίνεται το Technical Onboarding;',
          a: 'Η ομάδα μας αναλαμβάνει όλη την τεχνική εγκατάσταση. Ενσωματώνουμε το σύστημά μας με τα εργαλεία σας (CRM, ημερολόγιο, email) και εκπαιδεύουμε την ομάδα σας.',
        },
        {
          q: 'Τι περιλαμβάνει το σύστημα booking;',
          a: 'Το AI μας συνδέεται με το ημερολόγιό σας και κλείνει ραντεβού αυτόματα. Οι πελάτες λαμβάνουν επιβεβαίωση μέσω SMS/email και υπενθυμίσεις πριν το ραντεβού.',
        },
        {
          q: 'Μπορώ να χειριστώ ερωτήσεις συγκεκριμένες για το field μου;',
          a: 'Ναι! Εκπαιδεύουμε τα AI agents με τις δικές σας πληροφορίες, FAQs και workflows. Το σύστημα μαθαίνει συνεχώς και βελτιώνεται.',
        },
        {
          q: 'Τι αν ο πελάτης προτιμά ανθρώπινη επικοινωνία;',
          a: 'Το σύστημα αναγνωρίζει πότε χρειάζεται ανθρώπινη παρέμβαση και σας μεταφέρει την κλήση ή το μήνυμα αμέσως.',
        },
        {
          q: 'Πώς μετράμε την επιτυχία και το ROI;',
          a: 'Σας δίνουμε πλήρη ορατότητα: αριθμό κλήσεων, booked ραντεβού, conversion rates, χρόνο εξοικονόμησης και άλλα KPIs σε πραγματικό χρόνο.',
        },
        {
          q: 'Τι συμβαίνει μετά τη 14ήμερη δοκιμή;',
          a: 'Αν δείτε αποτελέσματα, συνεχίζετε με το πλάνο που ταιριάζει στις ανάγκες σας. Δεν υπάρχει μακροπρόθεσμη δέσμευση.',
        },
      ],
      cta: 'Κλείστε Δωρεάν Στρατηγική Κλήση',
    },
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about getting started with APEX AI',
      faqs: [
        {
          q: 'How quickly can I get started?',
          a: 'The system is installed in 48–72 hours. After the Audit Call, our team sets everything up and you\'re ready for the 14-day trial period.',
        },
        {
          q: 'How does Technical Onboarding work?',
          a: 'Our team handles all the technical installation. We integrate our system with your tools (CRM, calendar, email) and train your team.',
        },
        {
          q: 'What does the booking system include?',
          a: 'Our AI connects to your calendar and books appointments automatically. Customers receive confirmation via SMS/email and reminders before the appointment.',
        },
        {
          q: 'Can I handle questions specific to my field?',
          a: 'Yes! We train the AI agents with your own information, FAQs and workflows. The system learns continuously and improves.',
        },
        {
          q: 'What if the customer prefers human communication?',
          a: 'The system recognizes when human intervention is needed and transfers the call or message to you immediately.',
        },
        {
          q: 'How do we measure success and ROI?',
          a: 'We give you full visibility: number of calls, booked appointments, conversion rates, time saved and other KPIs in real time.',
        },
        {
          q: 'What happens after the 14-day trial?',
          a: 'If you see results, you continue with the plan that fits your needs. There is no long-term commitment.',
        },
      ],
      cta: 'Book Free Strategy Call',
    },
  };

  return (
    <section id="faq" data-animate="items" className="py-20">
      <div className="container mx-auto px-4">
        <div data-animate-item className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content[locale].title}
          </h2>
          <p className="text-xl text-[hsl(var(--text-muted))] max-w-2xl mx-auto">
            {content[locale].subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-0 space-y-4 mb-12">
          {content[locale].faqs.map((faq, index) => (
            <div
              key={index}
              data-animate-item
              className="bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl overflow-hidden hover:border-[hsl(var(--stroke-cyan))] transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-[hsl(var(--text))]">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[hsl(var(--accent-cyan))] transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-[hsl(var(--text-muted))]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div data-animate-item className="text-center">
          <p className="text-[hsl(var(--text-muted))] mb-4">
            {locale === 'gr' ? 'Έχετε περισσότερες ερωτήσεις; Ας τα πούμε!' : 'Have more questions? Let\'s talk!'}
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] text-[hsl(var(--bg))] hover:opacity-90 glow-cyan"
          >
            {content[locale].cta}
          </Button>
        </div>
      </div>
    </section>
  );
};
