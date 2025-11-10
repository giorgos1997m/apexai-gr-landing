import { Play } from 'lucide-react';

interface VideoProps {
  locale: 'gr' | 'en';
}

export const Video = ({ locale }: VideoProps) => {
  const content = {
    gr: {
      title: 'Κινήσου γρήγορα — μην αφήνεις τους ανταγωνιστές να πάρουν προβάδισμα.',
      subtitle: 'Δείτε πώς η APEX AI μεταμορφώνει επιχειρήσεις',
      kpis: [
        { value: '−30%', label: 'λιγότερα έξοδα', color: 'red' },
        { value: '48h', label: 'μέχρι το πρώτο ραντεβού', color: 'cyan' },
        { value: '+40%', label: 'περισσότερα leads', color: 'green' },
      ],
    },
    en: {
      title: 'Act fast — don\'t let competitors take the lead.',
      subtitle: 'Watch how APEX AI transforms businesses',
      kpis: [
        { value: '−30%', label: 'less expenses', color: 'red' },
        { value: '48h', label: 'to first appointment', color: 'cyan' },
        { value: '+40%', label: 'more leads', color: 'green' },
      ],
    },
  };

  return (
    <section id="video" className="video-band py-20 bg-[hsl(var(--bg-secondary))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content[locale].title}
          </h2>
          <p className="text-xl text-[hsl(var(--text-muted))]">
            {content[locale].subtitle}
          </p>
        </div>

        {/* Video Container - reduced height, increased spacing */}
        <div className="video-wrap max-w-4xl mx-auto mb-28 md:mb-40">
          <div className="relative rounded-2xl border-2 border-[hsl(var(--stroke-cyan))] shadow-[0_0_30px_rgba(0,209,255,0.2)]" style={{ aspectRatio: '16 / 10' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-cyan))]/20 to-[hsl(var(--accent-blue))]/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="w-20 h-20 bg-[hsl(var(--accent-cyan))] rounded-full flex items-center justify-center hover:scale-110 transition-transform glow-cyan"
                  aria-label={locale === 'gr' ? 'Αναπαραγωγή βίντεο' : 'Play video'}
                >
                  <Play className="w-10 h-10 text-[hsl(var(--bg))] ml-1" fill="currentColor" />
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--bg))]/50 to-transparent" />
            </div>
          </div>
        </div>

        {/* Metrics with increased spacing and equal height */}
        <div className="kpis-wrap grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mt-12 md:mt-16">
          {content[locale].kpis.map((kpi, index) => (
            <div 
              key={index}
              className="bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl p-6 text-center h-full flex flex-col justify-center min-h-[160px]"
              aria-label={`${kpi.value} ${kpi.label}`}
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                kpi.color === 'red' ? 'text-[hsl(var(--accent-red))]' :
                kpi.color === 'green' ? 'text-[hsl(var(--accent-green))]' :
                'text-[hsl(var(--accent-cyan))]'
              }`}>
                {kpi.value}
              </div>
              <p className="text-[hsl(var(--text))] font-medium text-lg contrast-more:text-[hsl(var(--foreground))]">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
