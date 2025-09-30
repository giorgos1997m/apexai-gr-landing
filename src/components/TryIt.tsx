import { MessageCircle, Phone } from 'lucide-react';
import { Button } from './ui/button';

interface TryItProps {
  locale: 'gr' | 'en';
}

export const TryIt = ({ locale }: TryItProps) => {
  const content = {
    gr: {
      chatbot: {
        title: 'AI Chatbot Demo',
        description: 'Δοκιμάστε έναν έξυπνο chatbot που απαντά σε ερωτήσεις και συλλέγει leads.',
        button: 'Δοκίμασε το Chatbot',
      },
      voice: {
        title: 'AI Voice Agent Demo',
        description: 'Μιλήστε με έναν AI voice agent που κλείνει ραντεβού και απαντά σε ερωτήσεις.',
        button: 'Δοκίμασε τον Voice Agent',
      },
    },
    en: {
      chatbot: {
        title: 'AI Chatbot Demo',
        description: 'Try a smart chatbot that answers questions and collects leads.',
        button: 'Try Chatbot Demo',
      },
      voice: {
        title: 'AI Voice Agent Demo',
        description: 'Talk to an AI voice agent that books appointments and answers questions.',
        button: 'Try Voice Agent Demo',
      },
    },
  };

  return (
    <section id="try-it" className="py-20 bg-[hsl(var(--bg-secondary))]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl p-8 text-center hover:border-[hsl(var(--stroke-cyan))] transition-all duration-300">
            <div className="w-20 h-20 bg-[hsl(var(--accent-cyan))]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-[hsl(var(--accent-cyan))]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{content[locale].chatbot.title}</h3>
            <p className="text-[hsl(var(--text-muted))] mb-6">{content[locale].chatbot.description}</p>
            <Button className="bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] text-[hsl(var(--bg))] hover:opacity-90 w-full">
              {content[locale].chatbot.button}
            </Button>
          </div>

          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl p-8 text-center hover:border-[hsl(var(--stroke-cyan))] transition-all duration-300">
            <div className="w-20 h-20 bg-[hsl(var(--accent-cyan))]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-10 h-10 text-[hsl(var(--accent-cyan))]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{content[locale].voice.title}</h3>
            <p className="text-[hsl(var(--text-muted))] mb-6">{content[locale].voice.description}</p>
            <Button className="bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] text-[hsl(var(--bg))] hover:opacity-90 w-full">
              {content[locale].voice.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
