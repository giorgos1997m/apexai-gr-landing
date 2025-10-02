import { useEffect, useState, useRef } from 'react';

interface MissionProps {
  locale: 'gr' | 'en';
}

export const Mission = ({ locale }: MissionProps) => {
  const [counts, setCounts] = useState({ businesses: 0, interactions: 0, satisfaction: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const content = {
    gr: {
      title: 'Η Αποστολή μας',
      description: 'Πιστεύουμε ότι οι μικρές επιχειρήσεις αξίζουν AI επιπέδου επιχείρησης χωρίς την πολυπλοκότητα ή το κόστος των μεγάλων εταιρειών. Η αποστολή μας είναι να εκδημοκρατίσουμε την αυτοματοποίηση AI, καθιστώντας την προσιτή, οικονομική και αποτελεσματική για ανεξάρτητους επαγγελματίες και μικρές ομάδες.',
      stats: [
        { value: 50, suffix: '+', label: 'Επιχειρήσεις' },
        { value: 300, suffix: '.000+', label: 'Αλληλεπιδράσεις μέχρι σήμερα' },
        { value: 98, suffix: '%', label: 'Ικανοποίηση πελατών' },
      ],
    },
    en: {
      title: 'Our Mission',
      description: 'At APEX AI, we believe that every business deserves access to cutting-edge automation technology. Our mission is to democratize artificial intelligence by making it accessible, effective, and incredibly easy for professionals who want to focus on what they do best — serving their customers.',
      stats: [
        { value: 50, suffix: '+', label: 'Businesses' },
        { value: 300, suffix: ',000+', label: 'Interactions to date' },
        { value: 98, suffix: '%', label: 'Customer satisfaction' },
      ],
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounts();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts({
        businesses: Math.floor(50 * progress),
        interactions: Math.floor(300 * progress),
        satisfaction: Math.floor(98 * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts({ businesses: 50, interactions: 300, satisfaction: 98 });
      }
    }, stepDuration);
  };

  return (
    <section id="mission" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          {content[locale].title}
        </h2>
        
        <p className="text-xl text-[hsl(var(--text-muted))] text-center max-w-4xl mx-auto mb-16">
          {content[locale].description}
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-gradient-cyan mb-2">
              {counts.businesses}{content[locale].stats[0].suffix}
            </div>
            <p className="text-[hsl(var(--text-muted))]">{content[locale].stats[0].label}</p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-gradient-cyan mb-2">
              {counts.interactions}{content[locale].stats[1].suffix}
            </div>
            <p className="text-[hsl(var(--text-muted))]">{content[locale].stats[1].label}</p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-gradient-cyan mb-2">
              {counts.satisfaction}{content[locale].stats[2].suffix}
            </div>
            <p className="text-[hsl(var(--text-muted))]">{content[locale].stats[2].label}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
