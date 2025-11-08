import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface NewsletterProps {
  locale: 'gr' | 'en';
}

export const Newsletter = ({ locale }: NewsletterProps) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const content = {
    gr: {
      title: 'Μείνετε ενημερωμένοι για τις νέες AI λύσεις.',
      subtitle: 'Στείλτε το email σας και λάβετε μηνιαία tips & demos για να αυτοματοποιήσετε την επιχείρησή σας.',
      placeholder: 'Το email σας...',
      cta: 'Εγγραφή ➜',
      trust: 'Χωρίς spam. Μπορείτε να διαγραφείτε ανά πάσα στιγμή.',
      success: 'Ευχαριστούμε! Ελέγξτε το email σας.'
    },
    en: {
      title: 'Stay Ahead with AI.',
      subtitle: 'Join our monthly newsletter for automation tips & success stories.',
      placeholder: 'Your email...',
      cta: 'Subscribe ➜',
      trust: 'No spam. Unsubscribe anytime.',
      success: 'Thank you! Check your email.'
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for newsletter subscription
    console.log('Newsletter subscription:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  const { title, subtitle, placeholder, cta, trust, success } = content[locale];

  return (
    <section className="relative py-16 bg-[hsl(var(--bg-secondary))] border-t-2 border-[hsl(var(--accent-cyan))]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--text))]">
            {title}
          </h2>
          <p className="text-lg text-[hsl(var(--text-muted))] max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-3 mb-3">
            <Input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              disabled={submitted}
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] hover:opacity-90 glow-cyan-sm whitespace-nowrap"
              disabled={submitted}
            >
              {cta}
            </Button>
          </div>
          
          {submitted ? (
            <p className="text-center text-[hsl(var(--accent-cyan))] font-semibold">
              {success}
            </p>
          ) : (
            <p className="text-center text-sm text-[hsl(var(--text-muted))]">
              {trust}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
