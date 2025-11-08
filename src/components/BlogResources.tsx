import { Button } from './ui/button';
import { BookOpen, Mic, Sparkles } from 'lucide-react';

interface BlogResourcesProps {
  locale: 'gr' | 'en';
}

export const BlogResources = ({ locale }: BlogResourcesProps) => {
  const content = {
    gr: {
      title: 'Blog & Οδηγοί για Επαγγελματίες.',
      subtitle: 'Μάθετε πώς οι αυτοματισμοί AI μεταμορφώνουν μικρές επιχειρήσεις σε κερδοφόρες μηχανές.',
      articles: [
        {
          icon: Sparkles,
          title: 'Πώς να αυξήσετε leads με AI Chatbots.',
          description: 'Ανακαλύψτε πώς οι έξυπνοι chatbots μετατρέπουν επισκέπτες σε πελάτες 24/7.',
          cta: 'Διαβάστε ➜'
        },
        {
          icon: Mic,
          title: "Voice Agents: ο νέος 'γραμματέας' της επιχείρησης.",
          description: 'Δείτε πώς οι φωνητικοί βοηθοί χειρίζονται κλήσεις με φυσικότητα και επαγγελματισμό.',
          cta: 'Διαβάστε ➜'
        },
        {
          icon: BookOpen,
          title: '5 αυτοματισμοί που εξοικονομούν 10+ ώρες την εβδομάδα.',
          description: 'Πρακτικός οδηγός για να κερδίσετε πίσω τον χρόνο σας με έξυπνη αυτοματοποίηση.',
          cta: 'Διαβάστε ➜'
        }
      ],
      allArticles: 'Δείτε όλα τα άρθρα ➜'
    },
    en: {
      title: 'Blog & Resources for Professionals.',
      subtitle: 'Learn how AI automation transforms small businesses into profit machines.',
      articles: [
        {
          icon: Sparkles,
          title: 'How to Increase Leads with AI Chatbots.',
          description: 'Discover how smart chatbots convert visitors into customers 24/7.',
          cta: 'Read More ➜'
        },
        {
          icon: Mic,
          title: 'Voice Agents: Your New Business Secretary.',
          description: 'See how voice assistants handle calls naturally and professionally.',
          cta: 'Read More ➜'
        },
        {
          icon: BookOpen,
          title: '5 Automations That Save 10+ Hours per Week.',
          description: 'Practical guide to reclaiming your time with smart automation.',
          cta: 'Read More ➜'
        }
      ],
      allArticles: 'View All Articles ➜'
    }
  };

  const { title, subtitle, articles, allArticles } = content[locale];

  return (
    <section id="blog" className="relative py-24 bg-[hsl(var(--bg-secondary))]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 reveal" data-reveal="up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--text))]">
            {title}
          </h2>
          <p className="text-xl text-[hsl(var(--text-muted))] max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <div
                key={index}
                className="reveal bg-[hsl(var(--card))] rounded-2xl p-8 border border-[hsl(var(--stroke))] hover:border-[hsl(var(--accent-cyan))] transition-all duration-300 hover:glow-cyan-sm group"
                data-reveal="up"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[hsl(var(--primary-foreground))]" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--text))] mb-3">
                    {article.title}
                  </h3>
                  <p className="text-[hsl(var(--text-muted))] leading-relaxed">
                    {article.description}
                  </p>
                </div>
                <button className="text-[hsl(var(--accent-cyan))] font-semibold group-hover:underline transition-all">
                  {article.cta}
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center reveal" data-reveal="up">
          <Button variant="outline" size="lg" className="group">
            {allArticles}
          </Button>
        </div>
      </div>
    </section>
  );
};
