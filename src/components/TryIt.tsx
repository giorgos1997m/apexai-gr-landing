import { MessageSquare, Phone } from 'lucide-react';
import { Button } from './ui/button';

interface TryItProps {
  locale: 'gr' | 'en';
}

export const TryIt = ({ locale }: TryItProps) => {
  const content = {
    gr: {
      title: 'Δοκιμάστε τους Agents μας σε Πραγματικό Χρόνο.',
      subtitle: 'Δείτε πώς το APEX AI συνομιλεί με πελάτες, απαντά σε ερωτήσεις και κλείνει ραντεβού.',
      cta: '🧠 Θέλω να το δοκιμάσω στη δική μου επιχείρηση!',
      chatCta: 'Ξεκινήστε Συνομιλία',
      chatDemoCta: 'Δοκιμάστε το AI Chat Demo',
      voiceDemoCta: 'Δοκιμάστε Voice Demo',
      chatbot: {
        title: 'AI Chatbot Demo',
        description: 'Δοκιμάστε μια συνομιλία με το AI μας',
        example: [
          { role: 'user', text: 'Θέλω να κλείσω ραντεβού' },
          { role: 'bot', text: 'Ευχαρίστως! Για ποια ημερομηνία;' },
          { role: 'user', text: 'Τρίτη 10:00' },
          { role: 'bot', text: 'Τέλεια! Σας κλείνω για Τρίτη στις 10:00. Μπορώ να έχω το όνομά σας;' },
        ],
      },
      voice: {
        title: 'AI Voice Agent Demo',
        description: 'Ακούστε πώς μιλά το AI μας στο τηλέφωνο',
        example: [
          { role: 'agent', text: '📞 Καλημέρα! Πώς μπορώ να βοηθήσω;' },
          { role: 'caller', text: 'Θέλω ραντεβού για Τρίτη' },
          { role: 'agent', text: '📞 Ωραία! Τι ώρα σας βολεύει;' },
        ],
      },
    },
    en: {
      title: 'Try Our Agents in Real Time.',
      subtitle: 'See how APEX AI talks to customers, answers questions, and books appointments.',
      cta: '🧠 I want to try this for my business!',
      chatCta: 'Start Conversation',
      chatDemoCta: 'Try AI Chat Demo',
      voiceDemoCta: 'Try Voice Demo',
      chatbot: {
        title: 'AI Chatbot Demo',
        description: 'Try a conversation with our AI',
        example: [
          { role: 'user', text: 'I want to book an appointment' },
          { role: 'bot', text: 'Sure! What date works for you?' },
          { role: 'user', text: 'Tuesday 10:00 AM' },
          { role: 'bot', text: 'Perfect! I\'ll book you for Tuesday at 10:00. May I have your name?' },
        ],
      },
      voice: {
        title: 'AI Voice Agent Demo',
        description: 'Hear how our AI sounds on the phone',
        example: [
          { role: 'agent', text: '📞 Good morning! How can I help?' },
          { role: 'caller', text: 'I need an appointment for Tuesday' },
          { role: 'agent', text: '📞 Great! What time works for you?' },
        ],
      },
    },
  };

  return (
    <section id="demo" className="py-20 bg-[hsl(var(--bg-secondary))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {content[locale].title}
          </h2>
          <p className="text-xl text-[hsl(var(--text-muted))] max-w-2xl mx-auto">
            {content[locale].subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Chatbot Demo */}
          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl p-6 hover:border-[hsl(var(--accent-cyan))] hover:shadow-[0_0_30px_rgba(0,209,255,0.15)] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-8 h-8 text-[hsl(var(--accent-cyan))]" />
              <h3 className="text-2xl font-bold">{content[locale].chatbot.title}</h3>
            </div>
            
            <p className="text-[hsl(var(--text-muted))] mb-6">
              {content[locale].chatbot.description}
            </p>
            
            <div className="bg-[hsl(var(--bg))] rounded-lg p-4 space-y-3 min-h-[240px]">
              {content[locale].chatbot.example.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div 
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[#0099CC] text-white' 
                        : 'bg-[hsl(var(--card))] text-[hsl(var(--text))] border border-[hsl(var(--stroke))]'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3">
              <Button 
                size="lg"
                variant="outline"
                className="w-full hover:bg-[hsl(var(--accent-cyan))]/10 hover:border-[hsl(var(--accent-cyan))]"
              >
                {content[locale].chatCta}
              </Button>
              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] hover:opacity-90 glow-cyan-sm"
              >
                {content[locale].chatDemoCta}
              </Button>
            </div>
          </div>

          {/* Voice Agent Demo */}
          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--stroke))] rounded-xl p-6 hover:border-[hsl(var(--accent-cyan))] hover:shadow-[0_0_30px_rgba(0,209,255,0.15)] transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-8 h-8 text-[hsl(var(--accent-cyan))]" />
              <h3 className="text-2xl font-bold">{content[locale].voice.title}</h3>
            </div>
            
            <p className="text-[hsl(var(--text-muted))] mb-6">
              {content[locale].voice.description}
            </p>
            
            <div className="bg-[hsl(var(--bg))] rounded-lg p-4 mb-6 space-y-3 min-h-[240px] flex flex-col justify-center">
              {content[locale].voice.example.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`flex ${msg.role === 'caller' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  style={{ animationDelay: `${idx * 0.3}s` }}
                >
                  <div 
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      msg.role === 'caller' 
                        ? 'bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[#0099CC] text-white' 
                        : 'bg-[hsl(var(--card))] text-[hsl(var(--text))] border border-[hsl(var(--stroke))]'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg"
              className="w-full bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] hover:opacity-90 glow-cyan-sm"
            >
              {content[locale].voiceDemoCta}
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[#0099CC] hover:scale-105 transition-transform duration-300"
          >
            {content[locale].cta}
          </Button>
        </div>
      </div>
    </section>
  );
}