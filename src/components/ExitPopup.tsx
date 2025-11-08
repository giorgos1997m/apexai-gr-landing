import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface ExitPopupProps {
  locale: 'gr' | 'en';
}

export const ExitPopup = ({ locale }: ExitPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const content = {
    gr: {
      title: 'Μην φύγετε χωρίς να δείτε πώς δουλεύει!',
      subtitle: "Δώστε το email σας και λάβετε ένα mini demo + οδηγό 'AI για Επαγγελματίες'.",
      placeholder: 'Το email σας...',
      cta: 'Λάβετε το Demo',
      success: 'Ελέγξτε τα εισερχόμενά σας!'
    },
    en: {
      title: "Don't leave yet — get a free mini demo & guide.",
      subtitle: 'Enter your email to receive a mini demo + AI for Professionals guide.',
      placeholder: 'Your email...',
      cta: 'Get the Demo',
      success: 'Check your inbox!'
    }
  };

  useEffect(() => {
    let hasTriggered = false;
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (hasTriggered || submitted) return;
      if (e.clientY <= 0) {
        setIsVisible(true);
        hasTriggered = true;
      }
    };

    const handleScroll = () => {
      if (hasTriggered || submitted) return;
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 80) {
        setIsVisible(true);
        hasTriggered = true;
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for email submission logic
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  if (!isVisible) return null;

  const { title, subtitle, placeholder, cta, success } = content[locale];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-[hsl(var(--card))] rounded-2xl p-8 md:p-12 max-w-md mx-4 border-2 border-[hsl(var(--accent-cyan))] glow-cyan animate-in zoom-in-95 duration-300">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <>
            <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--text))] mb-4">
              {title}
            </h3>
            <p className="text-[hsl(var(--text-muted))] mb-6">
              {subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] hover:opacity-90 glow-cyan-sm"
              >
                {cta}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl font-semibold text-[hsl(var(--text))]">
              {success}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
