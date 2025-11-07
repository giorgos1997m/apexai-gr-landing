import { Star } from 'lucide-react';

// Helper function to get initials from name
const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
};

interface TestimonialsProps {
  locale: 'gr' | 'en';
}

export const Testimonials = ({ locale }: TestimonialsProps) => {
  const content = {
    gr: {
      title: 'Αποδεδειγμένα Αποτελέσματα.',
      subtitle: 'Οι πελάτες μας βλέπουν διαφορά από την πρώτη εβδομάδα.',
      metrics: [
        { value: '+40%', label: 'περισσότερα leads' },
        { value: '98%', label: 'ικανοποίηση πελατών' },
        { value: '48h', label: 'για 1ο ραντεβού' },
      ],
      testimonials: [
        {
          name: 'Dr. Μαρία Κ.',
          role: 'Οδοντίατρος',
          rating: 5,
          quote: 'Πλέον δεν χάνω κανένα ραντεβού. Το APEX AI έχει αλλάξει την καθημερινότητά μου.',
        },
        {
          name: 'Νίκος Π.',
          role: 'Δικηγόρος',
          rating: 5,
          quote: 'Το chatbot απαντά άμεσα στους πελάτες μου, ακόμη κι όταν είμαι στο δικαστήριο.',
        },
        {
          name: 'Κωνσταντίνος Τ.',
          role: 'Τεχνικός',
          rating: 5,
          quote: 'Ο Voice Agent μου κλείνει 5+ ραντεβού κάθε μέρα χωρίς να αγγίζω το κινητό.',
        },
      ],
    },
    en: {
      title: 'Proven Results.',
      subtitle: 'Our clients see a difference from the first week.',
      metrics: [
        { value: '+40%', label: 'more leads' },
        { value: '98%', label: 'client satisfaction' },
        { value: '48h', label: 'to first appointment' },
      ],
      testimonials: [
        {
          name: 'Dr. Maria K.',
          role: 'Dentist',
          rating: 5,
          quote: 'I no longer miss any appointments. APEX AI has changed my daily routine.',
        },
        {
          name: 'Nikos P.',
          role: 'Lawyer',
          rating: 5,
          quote: 'The chatbot responds instantly to my clients, even when I\'m in court.',
        },
        {
          name: 'Konstantinos T.',
          role: 'Technician',
          rating: 5,
          quote: 'The Voice Agent books 5+ appointments every day without me touching my phone.',
        },
      ],
    },
  };

  return (
    <section id="testimonials" className="py-20 bg-[hsl(var(--bg-secondary))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content[locale].title}
          </h2>
          <p className="text-xl text-[hsl(var(--text-muted))] max-w-2xl mx-auto">
            {content[locale].subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {content[locale].testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl p-6 hover:border-[hsl(var(--accent-cyan))] hover:shadow-[0_0_30px_rgba(0,209,255,0.15)] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--accent-cyan))] to-[#0099CC] flex items-center justify-center text-white font-bold">
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <h3 className="font-bold text-[hsl(var(--text))]">{testimonial.name}</h3>
                  <p className="text-sm text-[hsl(var(--text-muted))]">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[hsl(var(--accent-cyan))] text-[hsl(var(--accent-cyan))]" />
                ))}
              </div>
              
              <p className="text-[hsl(var(--text-muted))] italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        {/* Metrics Bar */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[hsl(var(--card))] to-[hsl(var(--bg))] border border-[hsl(var(--accent-cyan))]/30 rounded-xl p-8 shadow-[0_0_40px_rgba(0,209,255,0.2)]">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {content[locale].metrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[#0099CC] bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-[hsl(var(--text-muted))] text-sm md:text-base">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}