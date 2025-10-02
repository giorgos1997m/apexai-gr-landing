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
        embed: 'Interactive chatbot demo will be embedded here',
        userMessage: 'Χρήστης: "Θέλω να κλείσω ένα ραντεβού"',
        aiResponse: 'AI: "Μπορώ να σας βοηθήσω να κλείσετε ραντεβού. Για ποια υπηρεσία ενδιαφέρεστε;"',
        button: 'Δοκιμάστε το Chatbot',
      },
      voice: {
        title: 'AI Voice Agent Demo',
        embed: 'Voice agent demo will be embedded here',
        userMessage: 'Χρήστης: "Γεια σας, θα ήθελα να κλείσω ένα ραντεβού…"',
        aiResponse: 'AI: "Βεβαίως! Αφήστε με να ελέγξω τη διαθεσιμότητα…"',
        button: 'Δοκιμάστε τον Voice Agent',
      },
    },
    en: {
      chatbot: {
        title: 'AI Chatbot Demo',
        embed: 'Interactive chatbot demo will be embedded here',
        userMessage: 'User: "I need to book an appointment"',
        aiResponse: 'AI: "I\'d be happy to help you schedule an appointment. What service are you looking for?"',
        button: 'Try Chatbot Demo',
      },
      voice: {
        title: 'AI Voice Agent Demo',
        embed: 'Voice agent demo will be embedded here',
        userMessage: 'User: "Hello, I\'m calling to schedule a consultation..."',
        aiResponse: 'AI: "Of course! Let me check our availability for you..."',
        button: 'Try Voice Agent Demo',
      },
    },
  };

  return (
    <section id="try-it" className="py-20 bg-[hsl(var(--bg-secondary))]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl p-8 hover:border-[hsl(var(--stroke-cyan))] transition-all duration-300">
            <div className="w-16 h-16 bg-[hsl(var(--accent-cyan))]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-[hsl(var(--accent-cyan))]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">{content[locale].chatbot.title}</h3>
            
            <div className="bg-[hsl(var(--bg))]/50 border border-[hsl(var(--stroke))] rounded-lg p-6 mb-6 min-h-[200px] flex flex-col justify-center">
              <div className="w-12 h-12 bg-[hsl(var(--accent-cyan))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-[hsl(var(--accent-cyan))]" />
              </div>
              <p className="text-[hsl(var(--text-muted))] text-center mb-4 italic">{content[locale].chatbot.embed}</p>
              <div className="space-y-3 text-left">
                <p className="text-[hsl(var(--text))] text-sm">{content[locale].chatbot.userMessage}</p>
                <p className="text-[hsl(var(--accent-cyan))] text-sm">{content[locale].chatbot.aiResponse}</p>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] text-[hsl(var(--bg))] hover:opacity-90 w-full">
              {content[locale].chatbot.button}
            </Button>
          </div>

          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl p-8 hover:border-[hsl(var(--stroke-cyan))] transition-all duration-300">
            <div className="w-16 h-16 bg-[hsl(var(--accent-cyan))]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-[hsl(var(--accent-cyan))]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">{content[locale].voice.title}</h3>
            
            <div className="bg-[hsl(var(--bg))]/50 border border-[hsl(var(--stroke))] rounded-lg p-6 mb-6 min-h-[200px] flex flex-col justify-center">
              <div className="w-12 h-12 bg-[hsl(var(--accent-cyan))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-[hsl(var(--accent-cyan))]" />
              </div>
              <p className="text-[hsl(var(--text-muted))] text-center mb-4 italic">{content[locale].voice.embed}</p>
              <div className="space-y-3 text-left">
                <p className="text-[hsl(var(--text))] text-sm">{content[locale].voice.userMessage}</p>
                <p className="text-[hsl(var(--accent-cyan))] text-sm">{content[locale].voice.aiResponse}</p>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] text-[hsl(var(--bg))] hover:opacity-90 w-full">
              {content[locale].voice.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
