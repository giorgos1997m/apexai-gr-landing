import { Stethoscope, Scale, Wrench, Scissors } from 'lucide-react';
import { Button } from './ui/button';

interface ServicesProps {
  locale: 'gr' | 'en';
}

export const Services = ({ locale }: ServicesProps) => {
  const content = {
    gr: {
      title: 'Λύσεις για Κάθε Επαγγελματία.',
      subtitle: 'Αυτοματισμοί σχεδιασμένοι για κάθε επαγγελματία που θέλει περισσότερα leads και λιγότερες χαμένες κλήσεις.',
      cta: 'Δείτε πώς λειτουργεί ➜',
      professionals: [
        {
          icon: Stethoscope,
          title: 'Γιατροί & Οδοντίατροι',
          description: 'Αυτόματη διαχείριση ραντεβού & υπενθυμίσεων.',
        },
        {
          icon: Scale,
          title: 'Δικηγόροι & Λογιστές',
          description: 'Άμεσες απαντήσεις σε πελάτες, χωρίς να σηκώνετε τηλέφωνο.',
        },
        {
          icon: Wrench,
          title: 'Τεχνικοί & Υπηρεσίες',
          description: 'Chatbots που κλείνουν ραντεβού ακόμα και εκτός ωραρίου.',
        },
        {
          icon: Scissors,
          title: 'Κομμωτήρια & Studio',
          description: 'Voice Agents που επιβεβαιώνουν ραντεβού χωρίς καμία κλήση.',
        },
      ],
    },
    en: {
      title: 'Solutions for Every Professional.',
      subtitle: 'Automation designed for professionals who want more leads and fewer missed calls.',
      cta: 'See How It Works ➜',
      professionals: [
        {
          icon: Stethoscope,
          title: 'Doctors & Dentists',
          description: 'Automatic appointment management & reminders.',
        },
        {
          icon: Scale,
          title: 'Lawyers & Accountants',
          description: 'Instant answers to clients without picking up the phone.',
        },
        {
          icon: Wrench,
          title: 'Technicians & Services',
          description: 'Chatbots that book appointments even after hours.',
        },
        {
          icon: Scissors,
          title: 'Salons & Studios',
          description: 'Voice Agents that confirm appointments without any calls.',
        },
      ],
    },
  };

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="professionals" className="py-20 bg-[hsl(var(--bg))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content[locale].title}
          </h2>
          <p className="text-xl text-[hsl(var(--text-muted))] max-w-2xl mx-auto">
            {content[locale].subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {content[locale].professionals.map((prof, index) => (
            <div 
              key={index}
              className="bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl p-6 hover:border-[hsl(var(--accent-cyan))] hover:shadow-[0_0_30px_rgba(0,209,255,0.15)] transition-all duration-300"
            >
              <prof.icon className="w-12 h-12 text-[hsl(var(--accent-cyan))] mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--text))]">{prof.title}</h3>
              <p className="text-[hsl(var(--text-muted))]">{prof.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToDemo}
            className="bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[#0099CC] hover:scale-105 transition-transform duration-300"
            size="lg"
          >
            {content[locale].cta}
          </Button>
        </div>
      </div>
    </section>
  );
}