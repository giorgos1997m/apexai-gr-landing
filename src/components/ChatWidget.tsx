import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

interface ChatWidgetProps {
  locale: 'gr' | 'en';
}

export const ChatWidget = ({ locale }: ChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    gr: {
      chatbot: 'Δοκιμάστε τον AI Chatbot',
      voice: 'Μιλήστε με Voice Agent',
      schedule: 'Κλείστε στρατηγική κλήση'
    },
    en: {
      chatbot: 'Try AI Chatbot',
      voice: 'Talk to Voice Agent',
      schedule: 'Book a strategy call'
    }
  };

  const handleChatbotClick = () => {
    console.log('Chatbot demo triggered');
    // Placeholder for chatbot integration
  };

  const handleVoiceClick = () => {
    console.log('Voice agent demo triggered');
    // Placeholder for voice agent demo
  };

  return (
    <>
      {/* Chat Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] flex items-center justify-center shadow-lg hover:scale-110 transition-transform glow-cyan"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 bg-[hsl(var(--card))] rounded-2xl border-2 border-[hsl(var(--accent-cyan))] shadow-2xl glow-cyan animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-6 space-y-4">
            <button
              onClick={handleChatbotClick}
              className="w-full flex items-center gap-3 p-4 rounded-xl bg-[hsl(var(--surface))] hover:bg-[hsl(var(--surface-elevated))] border border-[hsl(var(--stroke))] hover:border-[hsl(var(--accent-cyan))] transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-[hsl(var(--text))] font-semibold group-hover:text-[hsl(var(--accent-cyan))] transition-colors">
                {content[locale].chatbot}
              </span>
            </button>

            <button
              onClick={handleVoiceClick}
              className="w-full flex items-center gap-3 p-4 rounded-xl bg-[hsl(var(--surface))] hover:bg-[hsl(var(--surface-elevated))] border border-[hsl(var(--stroke))] hover:border-[hsl(var(--accent-cyan))] transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-[hsl(var(--text))] font-semibold group-hover:text-[hsl(var(--accent-cyan))] transition-colors">
                {content[locale].voice}
              </span>
            </button>

            <div className="pt-4 border-t border-[hsl(var(--stroke))]">
              <Button variant="outline" className="w-full" size="sm">
                {content[locale].schedule}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
