import { Star } from 'lucide-react';

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
};

interface TestimonialsProps {
  locale: 'gr' | 'en';
}

export const Testimonials = ({ locale }: TestimonialsProps) => {
  const content = {
    gr: {
      title: 'Τι λένε οι πελάτες μας',
      testimonials: [
        {
          name: 'Dr. Μαρία Παπαδοπούλου',
          role: 'Οδοντίατρος',
          text: 'Ο AI voice agent απαντά και κλείνει ραντεβού 24/7. Δεν χάνω άλλο κανέναν ασθενή!',
          rating: 5,
        },
        {
          name: 'Νίκος Χάντζοης',
          role: 'Δικηγόρος',
          text: 'Το chatbot απαντά στις συχνές ερωτήσεις και συλλέγει leads ενώ είμαι σε δίκη. Ανεκτίμητο!',
          rating: 5,
        },
        {
          name: 'Ελένη Μαρίνου',
          role: 'Λογίστρια',
          text: 'Με τους αυτοματισμούς εξοικονομώ πάνω από 40 ώρες τον μήνα και έχω χρόνο να αναπτύσσω την επιχείρησή μου και να περνάω περισσότερες στιγμές με την οικογένειά μου.',
          rating: 5,
        },
        {
          name: 'Δημήτρης Αλεξίου',
          role: 'Τεχνικός HVAC',
          text: 'Ο voice agent μου κλείνει ραντεβού ακόμη κι όταν είμαι πάνω σε σκάλα και δουλεύω — δεν χρειάζεται να αφήσω τα εργαλεία ή να σηκώσω το τηλέφωνο.',
          rating: 5,
        },
      ],
    },
    en: {
      title: 'What our clients say',
      testimonials: [
        {
          name: 'Dr. Maria Papadopoulou',
          role: 'Dentist',
          text: 'The AI voice agent answers and books appointments 24/7. I don\'t lose any more patients!',
          rating: 5,
        },
        {
          name: 'Nikos Hantzois',
          role: 'Lawyer',
          text: 'The chatbot answers FAQs and collects leads while I\'m in court. Invaluable!',
          rating: 5,
        },
        {
          name: 'Eleni Marinou',
          role: 'Accountant',
          text: 'I saved 40 hours/month with the automations. Now I have time for higher-value work.',
          rating: 5,
        },
        {
          name: 'Dimitris Alexiou',
          role: 'HVAC Technician',
          text: 'The voice agent books appointments while I\'m on the roof. +50% more projects!',
          rating: 5,
        },
      ],
    },
  };

  return (
    <section id="testimonials" className="py-20 bg-[hsl(var(--bg-secondary))]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {content[locale].title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content[locale].testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl p-6 hover:border-[hsl(var(--stroke-cyan))] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[hsl(var(--accent-cyan))]/20 rounded-full flex items-center justify-center">
                  <span className="text-[hsl(var(--accent-cyan))] font-bold text-sm">{getInitials(testimonial.name)}</span>
                </div>
                <div>
                  <h4 className="font-bold text-[hsl(var(--text))]">{testimonial.name}</h4>
                  <p className="text-sm text-[hsl(var(--text-muted))]">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-[hsl(var(--text-muted))] italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
