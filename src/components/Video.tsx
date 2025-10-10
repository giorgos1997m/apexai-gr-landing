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
    <section
      id="video"
      className="video-band py-20 bg-[hsl(var(--bg-secondary))] reveal-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content[locale].title}
          </h2>
          <p className="text-xl text-[hsl(var(--text-muted))]">
            {content[locale].subtitle}
          </p>
        </div>

        <div className="video-wrap max-w-[44rem] mx-auto mb-6 md:mb-8">
          <div className="relative aspect-video bg-gradient-to-br from-[hsl(var(--accent-cyan))]/20 to-[hsl(var(--accent-blue))]/20 rounded-2xl overflow-hidden border-2 border-[hsl(var(--stroke-cyan))] glow-cyan">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-[hsl(var(--accent-cyan))] rounded-full flex items-center justify-center hover:scale-110 transition-transform glow-cyan">
                <Play className="w-10 h-10 text-[hsl(var(--bg))] ml-1" fill="currentColor" />
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--bg))]/50 to-transparent" />
          </div>
        </div>

        <div className="kpis-wrap grid md:grid-cols-3 gap-6 md:gap-8 max-w-[44rem] mx-auto">
          {content[locale].kpis.map((kpi, index) => (
            <div 
              key={index}
              className="bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl p-6 text-center"
            >
              <div className={`text-4xl font-bold mb-2 ${
                kpi.color === 'red' ? 'text-[hsl(var(--accent-red))]' :
                kpi.color === 'green' ? 'text-[hsl(var(--accent-green))]' :
                'text-[hsl(var(--accent-cyan))]'
              }`}>
                {kpi.value}
              </div>
              <p className="text-[hsl(var(--text-muted))]">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
