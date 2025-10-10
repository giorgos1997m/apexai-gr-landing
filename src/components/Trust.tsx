import { Shield, TrendingUp, Headset, MapPin } from 'lucide-react';

interface TrustProps {
  locale: 'gr' | 'en';
}

export const Trust = ({ locale }: TrustProps) => {
  const content = {
    gr: {
      title: 'Γιατί οι επιχειρήσεις εμπιστεύονται την APEX AI',
      subtitle: 'Είμαστε αφοσιωμένοι στην παροχή ασφαλών, αξιόπιστων και αποτελεσματικών λύσεων AI',
      pillars: [
        {
          icon: Shield,
          title: 'Ασφάλεια Δεδομένων',
          description: 'GDPR-compliant με end-to-end encryption. Τα δεδομένα σας παραμένουν ασφαλή και εμπιστευτικά.',
        },
        {
          icon: TrendingUp,
          title: 'Αποδεδειγμένα Αποτελέσματα',
          description: 'Οι πελάτες μας βλέπουν 3× περισσότερα leads και +50% conversion rates μέσα σε λίγες εβδομάδες.',
        },
        {
          icon: Headset,
          title: '24/7 Υποστήριξη',
          description: 'Η ομάδα μας είναι πάντα διαθέσιμη να σας βοηθήσει με οποιοδήποτε θέμα ή ερώτημα.',
        },
        {
          icon: MapPin,
          title: 'Εξειδίκευση στην ελληνική αγορά',
          description: 'Κατανοούμε τις τοπικές ανάγκες και προσφέρουμε λύσεις προσαρμοσμένες στην ελληνική αγορά.',
        },
      ],
    },
    en: {
      title: 'Why businesses trust APEX AI',
      subtitle: 'We are committed to delivering secure, reliable and effective AI solutions',
      pillars: [
        {
          icon: Shield,
          title: 'Data Security',
          description: 'GDPR-compliant with end-to-end encryption. Your data remains safe and confidential.',
        },
        {
          icon: TrendingUp,
          title: 'Proven Results',
          description: 'Our clients see 3× more leads and +50% conversion rates within weeks.',
        },
        {
          icon: Headset,
          title: '24/7 Support',
          description: 'Our team is always available to help you with any issue or question.',
        },
        {
          icon: MapPin,
          title: 'Local Expertise',
          description: 'We understand local needs and offer solutions tailored to the Greek market.',
        },
      ],
    },
  };

  return (
    <section
      id="trust"
      className="py-20 bg-[hsl(var(--bg-secondary))]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-item">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content[locale].title}
          </h2>
          <p className="text-xl text-[hsl(var(--text-muted))] max-w-2xl mx-auto">
            {content[locale].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content[locale].pillars.map((pillar, index) => (
            <div
              key={index}
              className="reveal-item bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl p-6 hover:border-[hsl(var(--stroke-cyan))] transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-[hsl(var(--accent-cyan))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <pillar.icon className="w-8 h-8 text-[hsl(var(--accent-cyan))]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--text))]">{pillar.title}</h3>
              <p className="text-[hsl(var(--text-muted))]">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
